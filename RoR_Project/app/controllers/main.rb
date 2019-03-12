#!/usr/bin/env ruby

require 'curb'
require 'nokogiri'
require 'csv'
require 'JSON'

class Youtube
  def initialize()
    @comments = {:Comments => []}
    @words = ['сделай', 'вот бы', ' го ', 'можешь', 'сними', 'мог бы', 'давай', 'слабо', 'идея', 'предлагаю']
    @key = "AIzaSyB4lOPfchklEK1S9wmaEEs6b4U26GgsUqc"
    @name_file = ''
  end


  def parsePage(video_id, next_page, name_file)
    #binding.pry
    @name_file = name_file
    http = Curl.get("https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=100&key=#{@key}&videoId=#{video_id}#{next_page}")
    page = JSON(http.body_str)
    parseComment(page)
    puts page
    parsePage(video_id, "&pageToken=#{page['nextPageToken']}", name_file) if page['nextPageToken']
  end

  def parseComment(page)
    return if page['items'].nil?
    page['items'].each do |comment|
      comment_string = comment.dig('snippet', 'topLevelComment', 'snippet', 'textOriginal')
      
      if @words.any? { |word| " #{comment_string}".upcase.include? word.upcase }
        @comments[:Comments] << {
          :text => comment_string,
          :likeCount => comment.dig('snippet', 'topLevelComment', 'snippet', 'likeCount').to_i,
          :totalReplyCount => comment.dig('snippet', 'totalReplyCount').to_i
        }
        parseReply(comment) if @comments[:Comments].last[:totalReplyCount].nonzero?
      end
    end
  end

  def parseReply(page)
    return if page.dig('replies', 'comments').nil?
    page.dig('replies', 'comments').each do |reply|
      all_reply = []
      comment_string = reply.dig('snippet', 'textOriginal')
      if @words.any? { |word| " #{comment_string}".upcase.include? word.upcase }
        all_reply << {
          :text => comment_string,
          :likeCount => reply.dig('snippet', 'likeCount').to_i
        }
        @comments[:Comments].last[:reply] = all_reply
      end
    end
  end

  def saveInFile
    file = File.open("#{@name_file}.json", "w")
    file.puts @comments.to_json
    file.close
    puts 'СОХРАНЕНО СУЧАРА'
  end

end


