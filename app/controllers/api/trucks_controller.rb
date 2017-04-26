class Api::TrucksController < ApplicationController
  def index
    trucks = Truck.all
    @trucks = trucks.includes(:reviews)
    render :index
  end

  def show
    @truck = Truck.find(params[:id])
  end

  def create
    @truck = Truck.new(truck_params)

    if @truck.save
      render :show
    else
      render json: @truck.errors.full_messages, status: 422
    end
  end

  def update
    @truck = Truck.find(params[:truck_id]) ###

    if @truck.update
      render :show
    else
      render json: @truck.errors.full_messages, status: 422
    end
  end

  def destroy
    @truck = Truck.find(params[:truck_id]) ###
    @truck.destroy
    render json: @truck
  end

  private

  def truck_params
    params.require(:truck)
          .permit(:name, :street_address, :zip_code, :city, :phone)
  end
end
