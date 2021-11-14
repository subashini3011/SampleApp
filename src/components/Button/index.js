import React from 'react'
import { string, func, bool } from 'prop-types'

import { Loader } from '../Loader'

import './index.scss'
export const Button = props => {
    const {
        text,
        className,
        color,
        onClick,
        disabled,
        size,
        leftContent,
        rightContent,
        showloader,
    } = props

    const customClassName = ['button', color, size, className]
        .toString()
        .replace(/,+/g, ' ')
        .trim()

    return (
        <>
            {showloader ? (
                <Loader />
            ) : (
                <button
                    type="button"
                    className={customClassName}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {leftContent !== undefined && (
                        <span className="button__leftContent">{leftContent}</span>
                    )}
                    {text}
                    {rightContent !== undefined && (
                        <span className="button__rightContent">{rightContent}</span>
                    )}
                </button>
            )}
        </>
    )
}

Button.propTypes = {

    text: string,
    className: string,
    color: string,
    onClick: func,
    showloader: bool,
}

Button.defaultProps = {
    text: 'Button',
    className: '',
    color: '',
    showloader: false,
}
