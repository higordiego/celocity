/* eslint-disable default-case */

import states from '../actions/user/user.actions.states'

const user = (state = { data: {} }, action) => {

    switch (action.type) {
        case states.getOne.start:
            return { ...state }

        case states.getOne.success:
            return { ...state, data: action.data }

        case states.update.start:
            return { ...state }
        
        case states.update.success: 
            return {...state, data: action.data}

        default:
            return state
    }
}


export default user