Rails.application.routes.draw do
  devise_for :users
  resource :tasks, only: [:index, :create, :update, :destroy]
  root 'tasks#index'
  get 'persons/profile', as: 'user_root'
end
