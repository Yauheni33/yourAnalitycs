require File.expand_path(File.join(File.dirname(__FILE__), 'helper'))


require 'curb'

class BugIssue102 < Test::Unit::TestCase

  def test_gc_closewait
		100.times do
			responses = {}
			requests = ["http://www.google.co.uk/", "http://www.ruby-lang.org/"]
			m = Curl::Multi.new
			# add a few easy handles
			requests.each do |url|
				responses[url] = ""
				c = Curl::Easy.new(url) do|curl|
					curl.follow_location = true
					curl.on_body{|data| responses[url] << data; data.size }
					curl.on_success {|easy| #puts "success, add more easy handles"
          }
				end
				m.add(c)
			end

			m.perform do
				#puts "idling... can do some work here"
			end
      GC.start
		end
	end

end
