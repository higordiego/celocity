
import api from './api'

export const TOKEN_KEY = "token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

/**
 * @param  {{email: String, password: String}} data - Enviando dados para autenticação
 * @returns {Promise} - Promise - Retornando os dados da api 
 */
export const authenticate = (data) => api.post('/authenticate', data)

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_KEY);
}

