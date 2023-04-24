export const carIsCar = (car: object): car is NewCar => 'color' in car;
