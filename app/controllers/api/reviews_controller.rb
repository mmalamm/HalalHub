class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      @truck = @review.truck
      render "api/trucks/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:review_id]) ###
    if @review.update
      render json: @review.truck
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:review_id]) ###
    @review.destroy
    render json: @review
  end

  private

  def review_params
    params.require(:review)
          .permit(:body, :user_id, :rating, :truck_id)
  end
end
