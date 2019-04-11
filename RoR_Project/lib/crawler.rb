require_relative 'main'

class Crawler

    @@urls = {}
 
    def openTodoFile
        name = []
        files = Dir.entries("todo")
        files.each { |file|  name << file if file.include?('.txt') }
        if name
            name.each do |file|
                @@urls["#{file[/(\S+).txt/, 1]}"]  = []
                File.open("todo/#{file}").each do |line|
                    @@urls["#{file[/(\S+).txt/, 1]}"] << line
                end
                File.delete("todo/#{file}")
            end
        end
    end

    def doParser
        parser = Youtube.new
        keys = @@urls.keys
        keys.each do |key|
            @@urls[key].each_with_index do |url, index|
                parser.parsePage("#{url[/(\?v=)([^#\&\?]*)/, 2]}", '', "#{key}")
            end
        end
        parser.saveInFile
    end

    def Cycle
        loop {
            openTodoFile
            puts @@urls
            doParser if @@urls.any?
            @@urls.clear
            sleep 5
        }
    end

end


file = Crawler.new
file.Cycle
