@trucks.each do |truck|
  json.set! truck.id do
    json.partial! 'truck', truck: truck
  end
end
