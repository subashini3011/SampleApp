import React from 'react'
import { string } from 'prop-types'

import './index.scss'

export const Property = (props) => {
    console.log(props)
    return (
        <div className="property" onClick={props.onClick}>
            <img src={props.image} alt="image" width='250px' height='220px' />
            <div className="property__title">{props.title}</div>
            <div className="property__description">{props.description}</div>
        </div>
    )
}



Property.propTypes = {
    image: string,
    title: string,
    description: string,
}

Property.defaultProps = {
    image: '',
    title: '',
    description: '',
}
