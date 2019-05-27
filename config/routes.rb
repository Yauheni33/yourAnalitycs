Rails.application.routes.draw do
  root 'welcome#index'
  get "/:path", to: 'welcome#index'

  post "/api/feedback", to: 'feedback#create'

  namespace 'admin' do
    get '/get_feedback', to: 'admin_feedback#show'
  end
end
