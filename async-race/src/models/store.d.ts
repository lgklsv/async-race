interface Garage {
  cars: Cars[];
  page: number,
}

interface Cars {
  name: string;
  color: string;
  id: number;
}
