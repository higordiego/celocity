
import api from './api'

/**
 * @param  {{email: String }} data - Enviando dados para envio de email para nova senha.
 * @returns {Promise} - Promise - Retornando os dados da api 
 */
export const forgotPassword = (data) => api.post('/users/forgot', data)

export const forgotValidate = (id) => api.get(`/users/forgot/${id}`)

export const forgotUpdatePassword = (data) => api.put(`/users/forgot/${data.code}`, data)

export const me = () => api.get(`/me`)


export const update = (id, data) => api.put(`/users/${id}`, data)
