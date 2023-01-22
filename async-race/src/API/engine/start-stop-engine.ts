import { ENGINE_URL } from '../../const/api-urls';

export const startStopEngine = async (id: number, status: EngineStatus): Promise<EngineParams> => {
  const res = await fetch(`${ENGINE_URL}?id=${id}&status=${status}`, { method: 'PATCH' });
  return res.json();
};
