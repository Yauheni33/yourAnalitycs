Rails.application.routes.draw do
  root 'welcome#index'
  get "/:path", to: 'welcome#index'

  post "/api/feedback", to: 'feedback#create'
end
