import { axiosUser } from '../utils/axios';
import { Status } from '../constants';

const getConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const getTokenConfig = (jwtToken) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwtToken,
    },
  };
};

export const signup = async (userData) => {
  try {
    return await axiosUser.post('/signup', userData, getConfig());
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      throw Object.assign(new Error(err.code), {
        response: { status: Status.REQUEST_TIMEOUT },
        message: 'Network Error',
      });
    }
    throw err;
  }
};

export const login = async (userData) => {
  try {
    return await axiosUser.post('/login', userData, getConfig());
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      throw Object.assign(new Error(err.code), {
        response: { status: Status.REQUEST_TIMEOUT },
        message: 'Network Error',
      });
    }
    throw err;
  }
};

export const getAllUsers = async (jwtToken) => {
  try {
    const res = await axiosUser.get('/readAll', getTokenConfig(jwtToken));
    return res.data.info;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      throw Object.assign(new Error(err.code), {
        response: { status: Status.REQUEST_TIMEOUT },
        message: 'Network Error',
      });
    }
    throw err;
  }
};

export const getUser = async (id, jwtToken) => {
  try {
    const res = await axiosUser.post('/read', { id }, getTokenConfig(jwtToken));
    return res.data.info;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      throw Object.assign(new Error(err.code), {
        response: { status: Status.REQUEST_TIMEOUT },
        message: 'Network Error',
      });
    }
    throw err;
  }
};

export const updateUsername = async (id, newUsername, jwtToken) => {
  try {
    const res = await axiosUser.post(
      '/update',
      { id: id, username: newUsername },
      getTokenConfig(jwtToken)
    );
    return res;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      throw Object.assign(new Error(err.code), {
        response: { status: Status.REQUEST_TIMEOUT },
        message: 'Network Error',
      });
    }
    throw err;
  }
};

export const updatePassword = async (
  id,
  currentPassword,
  newPassword,
  confirmPassword,
  jwtToken
) => {
  try {
    return await axiosUser.post(
      '/change-password',
      {
        id: id,
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      },
      getTokenConfig(jwtToken)
    );
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      throw Object.assign(new Error(err.code), {
        response: { status: Status.REQUEST_TIMEOUT },
        message: 'Network Error',
      });
    }
    throw err;
  }
};

export const deleteUser = async (id, jwtToken) => {
  try {
    return await axiosUser.post('/delete', { id }, getTokenConfig(jwtToken));
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      throw Object.assign(new Error(err.code), {
        response: { status: Status.REQUEST_TIMEOUT },
        message: 'Network Error',
      });
    }
    throw err;
  }
};
