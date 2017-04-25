class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review.truck
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
          .permit(:body, :user_id, :truck_id)
  end
end
