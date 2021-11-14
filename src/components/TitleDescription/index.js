import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

export const TitleDescription = props => {
    const {
        title,
        description,
        color,
        link,
        descriptionClass,
        titleClass,
    } = props

    const Dom = (
        <div className={`title_container ${color}`}>
            <div className={`title ${titleClass}`}>{title}</div>
            <div className={`description ${descriptionClass}`}>
                {description}
                <span className="link">{link}</span>
            </div>
        </div>
    )
    return Dom
}

TitleDescription.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionClass: PropTypes.string,
    titleClass: PropTypes.string,
}

TitleDescription.defaultProps = {
    title: '',
    description: '',
    descriptionClass: '',
    titleClass: '',
}
