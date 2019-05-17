module Admin
  class AdminFeedbackController < ApplicationController
    def show
      @feedback = Feedback.all
      render template: "admin_feedback/show"
    end
  end
end
