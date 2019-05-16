module Admin
  class AdminFeedbackController < ApplicationController
    def show
      @feedback = Feedback.all
      render json: @feedback
    end
  end
end
