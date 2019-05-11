Rails.application.routes.draw do
  root 'welcome#index'
  get "/:path", to: 'welcome#index'
end
