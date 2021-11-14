import React from 'react'
import { withRouter } from 'react-router-dom'
import {
    ROUTES
} from '../../constants/pathConstants'
import { LocalStorage } from '../../utils/localStorage'

import './index.scss'
const Header = (props) => {
    const redirectToDetailedPage = () => {
        const { history } = props;
        LocalStorage.clearSessionData()

        history.push({ pathname: ROUTES.LOGIN })
    }

    return <div className='header'><div className='header__title'>Header Section</div>
        <div className='header__logout' onClick={() => redirectToDetailedPage()}>Logout</div></div>
}


export default withRouter(Header)