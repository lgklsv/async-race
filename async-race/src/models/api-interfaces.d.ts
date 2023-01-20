interface GetCars {
  items: Car[];
  count: string | null;
}

interface NewCar {
  name: string;
  color: string;
}

type EngineStatus = 'started' | 'stopped';

interface EngineParams {
  velocity: number;
  distance: number;
}

interface DriveMod {
  success: boolean;
  id: number;
  time: number;
}

interface GetWinners {
  winners: Winner[];
  num: string | null;
}

interface UpdateWinner {
  wins: number;
  time: number;
}
