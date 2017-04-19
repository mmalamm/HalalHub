class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_creds(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { base: ['Invalid username or password'] }, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render 'api/users/show'
    else
      render json: ['No user currently signed in'], status: 404
    end
  end
end
