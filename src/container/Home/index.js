import './index.scss'

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TitleDescription } from '../../components/TitleDescription'
import { Property } from '../../components/Property'
import { Loader } from '../../components/Loader'
import {
    ROUTES
} from '../../constants/pathConstants'

export class HomeTrans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchList: [],
            showLoader: true
        }
    }

    componentDidMount() {
        fetch('https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50')
            .then(res => { return res.json() })
            .then(res => this.setState({ searchList: res, showLoader: false }))
    }




    redirectToDetailedPage = (item) => {
        const { history } = this.props
        history.push({ pathname: ROUTES.DETAILED_PAGE, state: item })
    }

    render() {
        const { searchList, showLoader } = this.state;
        const DOM = (
            <div className="home_container">
                {showLoader ? <div className='home__loader'><Loader /></div> :
                    <div className="home">
                        <TitleDescription title='Property for sales' />
                        <div className="home__content">
                            {searchList && searchList.map(item => {
                                return <Property title={item.Title} image={item.Images && item.Images[0] && item.Images[0].url} onClick={() => this.redirectToDetailedPage(item)} />
                            })}
                        </div>


                    </div>
                }
            </div>
        )

        return DOM
    }
}

export const Home = withRouter(
    ((HomeTrans)),
)
