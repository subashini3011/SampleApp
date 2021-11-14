import React from 'react';
import { ROUTES } from '../constants/pathConstants'
import Loadable from 'react-loadable';
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { Loader } from '../components/Loader'
import Header from '../container/Header'
import { Footer } from '../container/Footer'
import { LocalStorage } from '../utils/localStorage'
const Login = Loadable({
    loader: () => import('../pages/login'),
    loading: Loader,
    delay: 300,
    timeout: 8000
});

const Home = Loadable({
    loader: () => import('../pages/home'),
    loading: Loader,
    delay: 300,
    timeout: 8000
});




const DetailsPage = Loadable({
    loader: () => import('../pages/detailedpage'),
    loading: Loader,
    delay: 300,
    timeout: 8000
});





class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedUserPage: this.isLoggedUserPage(),
        }
        this.isLoggedIn()
    }

    isLoggedIn = () => {
        const { history } = this.props
        if (
            history.action === 'POP' &&
            history.location.pathname === ROUTES.LOGIN &&
            LocalStorage.getData('login')
        ) {
            history.replace(ROUTES.HOME)
        } else if (
            history.action === 'POP' &&
            history.location.pathname === ROUTES.HOME &&
            !LocalStorage.getData('login')
        ) {
            history.replace(ROUTES.LOGIN)
        }
    }



    componentWillReceiveProps() {
        this.isLoggedIn()
        this.setState({ isLoggedUserPage: this.isLoggedUserPage() })
    }


    isLoggedUserPage = () => {
        if (
            !LocalStorage.getData('login')
        ) {
            LocalStorage.clearSessionData()
            return false
        }
        if (
            LocalStorage.getData('login')
        ) {
            return true
        }
        return false
    }

    render() {
        const { isLoggedUserPage } = this.state
        console.log(isLoggedUserPage)
        return (
            <>
                {isLoggedUserPage && <Header />}
                <Switch>
                    <Route exact path={ROUTES.LOGIN} component={() => <Login />} />
                    <Route exact path={ROUTES.HOME} component={() => <Home />} />
                    <Route path={ROUTES.DETAILED_PAGE} component={() => <DetailsPage />} />
                </Switch>
                {isLoggedUserPage && <Footer />
                }

            </>)

    }
}

export default withRouter(Router)