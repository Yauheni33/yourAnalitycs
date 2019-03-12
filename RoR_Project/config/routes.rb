Rails.application.routes.draw do
  resource :tasks, only: [:index, :create, :update, :destroy]
  root 'tasks#index'
end
