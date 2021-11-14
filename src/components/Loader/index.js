import React from 'react'
import { string } from 'prop-types'

import './index.scss'

export const Loader = props => {
    const { fitContent } = props
    return (
        <div className={`loader_wrapper ${fitContent}`}>
            <div className={`loader ${fitContent}`} />
        </div>
    )
}

Loader.propTypes = {
    fitContent: string,
}

Loader.defaultProps = {
    fitContent: '',
}
