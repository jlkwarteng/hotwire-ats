Rails.application.routes.draw do
  resources :applicants do 
    patch :change_stage, on: :member
  end
  resources :jobs
  devise_for :users,  path: '',
  controllers: {
    registrations: 'users/registrations'
  },
  path_names: {
    sign_in: 'login',
    password: 'forgot',
    confirmation: 'confirm',
    sign_up: 'sign_up',
    sign_out: 'signout'
  }
  root 'dashboard#index'

  mount Sidekiq::Web => '/sidekiq'

  authenticated :user do
    mount DelayedJobWeb, at: '/delayed_job'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
