Rails.application.routes.draw do
  get "/up" => "rails/health#show", as: :rails_health_check
  get "/api/jobs", to: "api/jobs#index"
  post "/api/jobs", to: "api/jobs#create"
end
