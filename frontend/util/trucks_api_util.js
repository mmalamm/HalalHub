export const fetchTrucks = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/trucks',
    data
  });
};

export const fetchTruck = id => {
  return $.ajax({
    method: 'GET',
    url: `api/trucks/${id}`,
  });
};

export const createTruck = truck => {
  return $.ajax({
    method: 'POST',
    url: `api/trucks`,
    data: { truck }
  });
};

export const deleteTruck = truck => {
  return $.ajax({
    method: 'DELETE',
    url: `api/trucks/${truck.id}`
  });
};
