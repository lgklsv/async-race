export const raceAll = async (promises: Promise<DriveMod>[], cars: Car[]): Promise<RaceWinner> => {
  const { success, id, time } = await Promise.race(promises);

  if (!success) {
    const failedCar = cars.findIndex((car) => car.id === id);
    const restPromises = promises.slice();
    restPromises.splice(failedCar, 1);
    const restCars = cars.slice();
    restCars.splice(failedCar, 1);
    return raceAll(restPromises, restCars);
  }

  const winner = cars.find((car) => car.id === id) as Car;
  const winnerTime = +(time / 1000).toFixed(2);
  return { winner, winnerTime };
};
