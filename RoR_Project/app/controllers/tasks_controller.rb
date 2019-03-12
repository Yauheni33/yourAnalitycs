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

end