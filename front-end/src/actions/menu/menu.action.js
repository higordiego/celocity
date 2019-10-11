

import { reduceAction } from  '../generic.action'

import states from './menu.action.states'


export const menuUpdate = (data) => dispatch => reduceAction(states.update, data, dispatch)

