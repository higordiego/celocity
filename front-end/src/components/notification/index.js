import React from 'react'
import { notification, Icon } from 'antd';

/** 
 * @function
 * @param  {String} message - Titulo da mensagem
 * @param  {String} description - Descrição do error
 * @param  {String} type - [warning, info, success, error]
 * @params {String} icon - Icone na notificação
 * @returns {void} void - função sem retorno
 */

export const openNotification = (message, description, type = 'warning', icon = null) => {
    notification[type]({
        message: message,
        description: description,
        icon: icon !== null ? <Icon type={icon} style={{ color: '#108ee9' }} /> : null
    })
}



