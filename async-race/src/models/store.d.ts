interface Car {
  name: string;
  color: string;
  id: number;
}
interface Garage {
  cars: Car[];
  totalCars: string | null;
  page: number;
  updColorPicker: boolean;
}
