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
      data: {
        type: 'accounts',
        attributes: {
          email,
          password
        }
      }
    })
  });

  if (res.status !== 201) {
    throw new Error();
  }
  const json = await res.json();
  AuthCookie.set(json.data.attributes.token);
  return json;
};

export const signIn = async (email, password) => {
  const res = await fetch(`${getBasePath()}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        type: 'auth',
        attributes: {
          email,
          password
        }
      }
    })
  });

  if (res.status !== 201) {
    const error = new Error();
    error.status = res.status;
    throw error;
  }
  const json = await res.json();
  AuthCookie.set(json.data.attributes.token);
  return json;
};

export const getInt = async () => {
  const res = await fetch(`${getBasePath()}/integers/current`, {
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
  const res = await fetch(`${getBasePath()}/integers/next`, {
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
  const res = await fetch(`${getBasePath()}/integers/current`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AuthCookie.get()}`
    },
    body: JSON.stringify({
      data: {
        type: 'integers',
        attributes: {
          current: newValue
        }
      }
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
