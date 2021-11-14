import './index.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { EmailValidation } from '../../utils/validation'


export class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputFocus: '',
        }
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        const { id, currentFieldFocus, value } = this.props
        if (id === currentFieldFocus) {
            this.setState({ inputFocus: 'active' })
            this.inputRef.current.focus()
        } else if (value && id === currentFieldFocus) {
            this.setState({ inputFocus: 'active' })
        } else if (value) {
            this.setState({ inputFocus: 'hasvalue' })
        }
    }

    componentWillReceiveProps(nextProps) {
        const { id, currentFieldFocus, value } = nextProps
        if (id === currentFieldFocus) {
            this.inputRef.current.focus()
            this.setState({ inputFocus: 'active' })
        } else if (value && currentFieldFocus !== id) {
            this.setState({ inputFocus: 'hasvalue' })
        } else if (!value) {
            this.setState({ inputFocus: '' })
        }
    }

    onFocus = () => {
        this.inputRef.current.focus()
        this.setState({ inputFocus: 'active' })
        const { onFocus, id } = this.props
        if (onFocus) onFocus(id)
    }

    onBlur = () => {
        if (this.inputRef.current.value) this.setState({ inputFocus: 'hasvalue' })
        else if (!this.inputRef.current.value) {
            this.setState({ inputFocus: '' })
        }
    }

    onChange = e => {
        const { onChange, validationChange, required, number } = this.props
        let numberValidation = true
        if (numberValidation && e.target.value.length <= 50) {
            onChange(e)
        } else if (e.target.value.length > 50) {
            alert('Exceeds maximum character limit of 50')
        }
        if (required) {
            const validation = this.validate(e.target.value)
            validationChange(e.target.id, validation)
        }
    }

    validate = value => {
        const { type } = this.props
        let validation
        switch (type) {
            case 'email':
                validation = !EmailValidation(value)
                break
            default:
                validation = false
        }
        return validation
    }

    render() {
        const { inputFocus } = this.state
        const {
            id,
            type,
            label,
            validation,
            value,
            disabled,
            textSelect,
            validationMessage,
        } = this.props
        const validationClassName = validation && 'error'
        const textSelectClassName = textSelect && 'textSelect'
        const DOM = (
            <div className="input_container">
                <div
                    className={`input ${inputFocus} ${validationClassName} ${textSelectClassName}`}
                >
                    <label htmlFor={id}>{label}</label>
                    <input
                        disabled={disabled}
                        value={value}
                        id={id}
                        type={type}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        ref={this.inputRef}
                        onChange={this.onChange}
                    />
                </div>
                {validation && validationMessage && (
                    <div className="input_message">
                        <div className="input_message_text">
                            {validationMessage}
                        </div>
                    </div>
                )}
            </div>
        )

        return DOM
    }
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    validation: PropTypes.bool,
    value: PropTypes.string,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    validationChange: PropTypes.func,
    number: PropTypes.bool,
    disabled: PropTypes.bool,
    textSelect: PropTypes.bool,
    validationMessage: PropTypes.string,
}

Input.defaultProps = {
    id: '',
    type: '',
    label: '',
    validation: false,
    textSelect: false,
    value: '',
    number: false,
    disabled: false,
    onFocus: () => { },
    onChange: () => { },
    validationChange: () => { },
    validationMessage: '',
}
