import { ENGINE_URL } from '../../const/api-urls';

export const driveCar = async (id: number): Promise<DriveMod> => {
  const res = await fetch(`${ENGINE_URL}?id=${id}&status=drive`, { method: 'PATCH' });
  return res.status !== 200 ? { success: false } : res.json();
};
