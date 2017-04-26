Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]

    resources :trucks, only: [:create, :update, :show, :destroy, :index] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create, :update, :destroy]
  end

  root "static_pages#root"
end
