import { startStopEngine } from '../../../../../../../API/start-stop-engine';

export const raceHandler = async (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.id) {
    const { velocity, distance } = await startStopEngine(+target.id, 'started');
    console.log(velocity, distance);
  }
};
