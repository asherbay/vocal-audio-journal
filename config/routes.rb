Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "api/auth"
  namespace :api do
    resources :recordings, only: [:index, :create, :update, :destroy]
    resources :tags, only: [:index, :destroy, :create, :update]
    resources :users
    post "users/image", to: "users#profile_image"
    post "recordings/:recording_id/image", to: "recordings#recording_image"
    get "images", to: "recordings#get_images"
    put "/api/tags/:id", to: "tags#update"
  end

  get "*other", to: "static#index"
end
