Rails.application.routes.draw do
  root to: 'resume#index'
  get '/ru', to: 'resume#index'
  get '/en', to: 'resume#index'
end
