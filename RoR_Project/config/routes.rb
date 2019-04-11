Rails.application.routes.draw do

  resource :home, only: [:index, :create, :update, :destroy]
  root 'home#index'

end
