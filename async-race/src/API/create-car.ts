import { GARAGE_URL } from '../const/api-urls';

export const createCar = async (body: NewCar): Promise<void> => {
  await fetch(`${GARAGE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};
