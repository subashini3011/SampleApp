import './index.scss'

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TitleDescription } from '../../components/TitleDescription'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { LocalStorage } from '../../utils/localStorage'
import {
    ROUTES
} from '../../constants/pathConstants'

import {
    EmailValidation,
    PasswordValidation,
    HasValueValidation,
} from '../../utils/validation'

export class LoginTrans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validation: {
                email: false,
                password: false,
            },
            inputvalue: {
                email: '',
                password: '',
            },
            currentFieldFocus: 'email',
            showloader: false,
        }
    }

    componentDidMount() {
        if (
            document &&
            document.getElementsByClassName('login_input') &&
            document.getElementsByClassName('login_input')[0]
        )
            document
                .getElementsByClassName('login_input')[0]
                .addEventListener('keyup', this.enterListener)
    }



    componentWillUnmount() {
        if (
            document &&
            document.getElementsByClassName('login_input') &&
            document.getElementsByClassName('login_input')[0]
        )
            document
                .getElementsByClassName('login_input')[0]
                .removeEventListener('keyup', this.enterListener)
    }

    enterListener = event => {
        event.preventDefault()
        if (event.keyCode === 13) {
            this.onClick()
        }
    }

    alert = data => {
        alert(data.content)
    }

    validationChangeHandler = (id, value) => {
        const { validation } = this.state
        const validationCopy = { ...validation }
        validationCopy[id] = value
        this.setState({ validation: validationCopy })
    }

    validationOnClickHandler = () => {
        const { validation, inputvalue } = this.state
        const validationCopy = { ...validation }
        validationCopy.email = !EmailValidation(inputvalue.email)
        validationCopy.passwordHasValue = !HasValueValidation(inputvalue.password)
        validationCopy.password = !PasswordValidation(inputvalue.password)
        this.setState({ validation: validationCopy })
        return validationCopy
    }

    validationAlert = key => {
        if (key === 'email') {
            this.alert({ type: 'error', content: 'Please enter valid email' })
        } else if (key === 'password') {
            this.alert({
                type: 'error',
                content:
                    'Password must be a combination of upper case, lower case, and number',
            })
        } else if (key === 'passwordHasValue') {
            this.alert({ type: 'error', content: 'Please enter password' })
        }
    }

    onClick = () => {
        const validation = this.validationOnClickHandler()
        if (
            Object.keys(validation).every(k => {
                this.setState({ currentFieldFocus: k })
                if (validation[k]) this.validationAlert(k)
                return !validation[k]
            })
        ) {
            const { inputvalue } = this.state
            inputvalue.email = inputvalue.email.toLowerCase()
            this.setLogin()
        }
    }


    setLogin = () => {
        const { inputvalue } = this.state
        const { email, password } = inputvalue
        const { history } = this.props;
        if (email === 'subashini3011@gmail.com') {
            if (password === 'Suba@123') {
                LocalStorage.setValueToLocalStorage('login', true)
                this.setState({ showloader: true })
                history.push(ROUTES.HOME)
            }
            else {
                this.alert({
                    type: 'error',
                    content:
                        'Password must be a combination of upper case, lower case, and number',
                })
            }
        } else {
            this.alert({ type: 'error', content: 'Please enter valid email' })
        }


    }

    onFocusInput = id => {
        this.setState({ currentFieldFocus: id })
    }

    onChangeInput = e => {
        const { target } = e
        const { id } = target
        const { value } = target
        const { inputvalue } = this.state
        const valueCopy = { ...inputvalue }
        valueCopy[id] = value
        this.setState({ inputvalue: valueCopy })
    }

    onChangeRadio = e => {
        this.setState({ roleSelection: e.target.value })
    }

    render() {
        const { onClick, onChangeInput } = this
        const {
            validation,
            inputvalue,
            currentFieldFocus,
            showloader,
        } = this.state

        const DOM = (
            <div className="login_container">
                <div className="login">
                    <TitleDescription title='login' />
                    <div className="login_input">
                        <form onSubmit={onClick}>
                            <Input
                                id="email"
                                label='email'
                                type="email"
                                required
                                value={inputvalue.email}
                                onChange={onChangeInput}
                                validation={validation.email}
                                validationChange={this.validationChangeHandler}
                                onFocus={this.onFocusInput}
                                currentFieldFocus={currentFieldFocus}
                            />
                            <Input
                                id="password"
                                label='password'
                                type="password"
                                required
                                value={inputvalue.password}
                                onChange={onChangeInput}
                                validation={validation.password}
                                validationChange={this.validationChangeHandler}
                                onFocus={this.onFocusInput}
                                currentFieldFocus={currentFieldFocus}
                            />
                            <Button
                                onClick={onClick}
                                showloader={showloader}
                                type="block"
                                text='Login'
                                size="big"
                            />
                        </form>

                    </div>
                </div>
            </div>
        )

        return DOM
    }
}

export const Login = withRouter(
    ((LoginTrans)),
)
