import React from 'react';
import './index.scss'
import { string, number } from 'prop-types'

export const AgentDetails = (props) => {
    return <div className='agent'>
        <div><img src={props.image} alt='profile' className='agent__image' /></div>
        <div>
            <div className='agent__text'>{props.name}</div>
            <div className='agent__text'>{props.description}</div>
            <div className='agent__text'>{props.mobile} | <a href={`mailto:${props.email}`}>Email</a></div>

        </div>

    </div>
}


AgentDetails.propTypes = {
    image: string,
    name: string,
    description: string,
    mobile: number,
    email: string,
}

AgentDetails.defaultProps = {
    image: '',
    name: '',
    description: '',
    mobile: 0,
    email: '',
}
