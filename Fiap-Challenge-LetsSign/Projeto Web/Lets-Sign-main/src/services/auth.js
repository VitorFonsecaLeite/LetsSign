const MOCK_USER_ACCOUNT = {
  email: 'user@email.com',
  password: 'qwert',
};

const MOCK_AUTH2F_CODE = 123456;

const MOCK_TOKEN_KEY = 'authToken';

const MOCK_TOKEN_VALUE = 'true';

export const loginMock = ({ email, password }) => {
  if (email === MOCK_USER_ACCOUNT.email && password === MOCK_USER_ACCOUNT.password) {
    return { success: true };
  }

  return { success: false, message: 'Credenciais inválidas' };
};

export const auth2fMock = (code) => {
  if (code === MOCK_AUTH2F_CODE) {
    localStorage.setItem(MOCK_TOKEN_KEY, MOCK_TOKEN_VALUE);
    return { success: true };
  }
  return { success: false, message: 'Código inválido' };
};

export const getAuthToken = () => {
  return localStorage.getItem(MOCK_TOKEN_KEY);
};

export const isAuthenticated = () => {
  const token = getAuthToken()

  if (token !== MOCK_TOKEN_VALUE) {
    return false;
  }
  return true;
};

export const setAuthToken = (token) => {
  localStorage.setItem(MOCK_TOKEN_KEY, token);
};

export const clearAuthToken = () => {
  localStorage.removeItem(MOCK_TOKEN_KEY);
};
