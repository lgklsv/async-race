interface Garage {
  cars: Car[];
  totalCars: string | null;
  page: number;
}

interface Car {
  name: string;
  color: string;
  id: number;
}
