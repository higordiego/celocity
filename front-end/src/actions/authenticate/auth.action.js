

import { authenticate, login, logoutUser } from '../../providers/auth'

import { simpleAction } from '../generic.action'

/**
 * @param  {{email: String, password: String}} data - Credenciais para Autenticação.
 */
export const actionAuthenticate = (data) => simpleAction(authenticate(data))

export const saveTokenUser = (data) => login(data)

export const logout = () => logoutUser()