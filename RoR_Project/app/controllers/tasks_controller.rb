require_relative 'main'

class TasksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @all_task = Task.all
    puts params
  end

  def create
    out_file = File.new("app/controllers/todo/#{params[:name]}.txt", "w")
    out_file.puts("#{params[:url]}")
    out_file.close
    #@comments = readFileComments(params[:name])
    puts params[:url]
    #Task.create(in_file[:tasks])
  end

  def update
    field = Task.find_by(text: params["nodes"].first["text"])
    field.update(done: params["nodes"].first["done"])
  end

  def destroy
    field = Task.find_by(text: params["nodes"].first["text"])
    field.destroy
  end

  def readFileComments(file_name)
    loop{
      files = Dir.entries("app/controllers/comments")
      break if files.include?("#{file_name}.json")
      sleep 5
    }
    JSON(File.read("app/controllers/comments/#{file_name}.json"))
  end

end