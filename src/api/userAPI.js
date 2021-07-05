const HOST_URL = 'https://tager.dev.ozitag.com';
const POST_AUTH_TOKEN_URL = '/api/auth/user';
const GET_USER_DATA_URL = '/api/tager/user/profile';

export const getAuthToken = async data => {
  const responce = await fetch(HOST_URL + POST_AUTH_TOKEN_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ clientId: 1, ...data }),
  });

  const result = await responce.json();
  return result;
};

export const getUserProfile = async token => {
  const responce = await fetch(HOST_URL + GET_USER_DATA_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await responce.json();

  return result;
};
