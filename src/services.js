import { AuthCookie } from './helpers/cookieHelper';

const getBasePath = () => {
  return process.env.REACT_APP_API_BASE_URL;
};

export const signUp = async (email, password) => {
  const res = await fetch(`${getBasePath()}/accounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (res.status !== 201) {
    throw new Error();
  }
  const data = await res.json();
  AuthCookie.set(data.token);
  return data;
};

export const signIn = async (email, password) => {
  const res = await fetch(`${getBasePath()}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (res.status !== 201) {
    const error = new Error();
    error.status = res.status;
    throw error;
  }
  const data = await res.json();
  AuthCookie.set(data.token);
  return data;
};

export const getInt = async () => {
  const res = await fetch(`${getBasePath()}/current`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AuthCookie.get()}`
    }
  });

  if (res.status !== 200) {
    const error = new Error();
    error.status = res.status;
    throw error;
  }
  const data = await res.json();
  return data;
};

export const nextInt = async () => {
  const res = await fetch(`${getBasePath()}/next`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AuthCookie.get()}`
    }
  });

  if (res.status !== 201) {
    const error = new Error();
    error.status = res.status;
    throw error;
  }
  const data = await res.json();
  return data;
};

export const setInt = async (newValue) => {
  const res = await fetch(`${getBasePath()}/current`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AuthCookie.get()}`
    },
    body: JSON.stringify({
      current: newValue
    })
  });

  if (res.status !== 200) {
    const error = new Error();
    error.status = res.status;
    throw error;
  }
  const data = await res.json();
  return data;
};
