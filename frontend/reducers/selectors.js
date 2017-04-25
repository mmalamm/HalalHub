export const selectTruck = ({ trucks, reviews }, id) => {
  const truck = trucks[id];
  return truck
}

export const allTrucks = ({ trucks }) => Object.keys(trucks).map(id => trucks[id]);
