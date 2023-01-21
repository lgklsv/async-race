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
  animation: {
    [key: string]: AnimationState;
  };
}

interface Winner {
  id: number;
  wins: number;
  time: number;
}

interface Winners {
  winners: (Car & Winner)[];
  totalWinners: number;
  page: number;
  limit: number;
  sort: SortTypes;
  order: OrderTypes;
}

interface RaceWinner {
  winner: Car;
  winnerTime: number;
}
