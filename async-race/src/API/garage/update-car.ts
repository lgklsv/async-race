import { GARAGE_URL } from '../../const/api-urls';

export const updateCar = async (id: number, body: NewCar) => {
  await fetch(`${GARAGE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};
