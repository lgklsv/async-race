interface Car {
  name: string;
  color: string;
  id: number;
}
interface Garage {
  cars: Car[];
  totalCars: number;
  page: number;
  limit: number;
  updColorPicker: boolean;
}
