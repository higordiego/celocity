

import { forgotPassword, forgotValidate, forgotUpdatePassword, me, update } from '../../providers/user'

import states from './user.actions.states'

import { simpleAction } from '../generic.action'

/**
 * @param  {{email: String, password: String}} data - Credenciais para Autenticação.
 */
export const forgot = (data) => simpleAction(forgotPassword(data))

export const updatePasswordForgot = (data) => simpleAction(forgotUpdatePassword(data))

export const validateTokenForgot = (id) => simpleAction(forgotValidate(id))

export const getMe = () => (dispatch) => simpleAction(me(), true, states.getOne, dispatch, '')

export const updateUser = (id, data) => (dispatch) => simpleAction(update(id, data), true, states.update, dispatch, '')