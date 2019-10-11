
import { openNotification } from '../components/notification'


export const simpleAction = async (request, redux = false, states, dispatch, id = '') => {
    try {
        const start = () => ({ type: states.start })
        const success = data => ({ type: states.success, id, data })
        const { data } = await request
        if (redux) {
            dispatch(start())
            dispatch(success(data))
        }
        return data
    } catch (err) {
        errorHandler(err.response)
    }
}

export const reduceAction = (states, data, dispatch) => {
    const start = () => ({ type: states.start })
    const success = data => ({ type: states.success, data })
    dispatch(start())
    dispatch(success(data))
}


const errorHandler = (response) => {

    if (response && response.status === 400) {
        if (response.data.errors && response.data.errors.length) response.data.errors.map(v => openNotification('Error', v.msg))
        else openNotification('Erro', 'Error desconhecido por favor entrar em contato com suporte', 'error', 'frown')
    }
    if (response && response.status === 401) {
        if (response.data.length > 0) response.data.map(v => openNotification(v.title, v.message, 'error'))
        else openNotification('Erro', 'Error desconhecido por favor entrar em contato com suporte', 'error', 'frown')
    }
    if (response === undefined || response.status === 500)
        openNotification('Instabilidade', 'Estamos passando por instabilidade, por favor tente novamente.', 'error', 'frown')
}
