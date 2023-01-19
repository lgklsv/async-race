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
}

interface GetWinners {
  winners: Winner[];
  num: string | null;
}
