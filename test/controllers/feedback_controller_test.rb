require 'test_helper'

class FeedbackControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get feedback_create_url
    assert_response :success
  end

end
