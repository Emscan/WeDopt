class UsersController < ApplicationController
	def index
		render json: User.all
	end

	def new
		@user = User.new
	end

	def create
		@user = User.create(user_params)
		head 200
	end

	private
	def user_params
		params.require(:user).permit(:username, 
									 :email, 
									 :password, 
									 :password_confirmation)
	end
end
