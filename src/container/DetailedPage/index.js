import './index.scss'

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { CarouselContainer } from '../../components/Carousel'
import { Features } from '../../components/Features'
import { Button } from '../../components/Button'
import { AgentDetails } from '../../components/Agent'
import Share from '../../assests/images/images.jpeg'
import download from '../../assests/images/download.png'

export class DetailedPageTrans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchList: []
        }
    }


    render() {
        const { location } = this.props
        const { state } = location
        console.log(state)
        const DOM = (
            <div className="details_container">
                <div className="details">
                    <div className='details__carousel'>
                        <img src={state && state.Images && state.Images[0] && state.Images[0].url} alt='text' width='100%' />
                        <CarouselContainer item={state} />
                    </div>
                    <div className='details__features'>
                        <div className='details__features__images'>
                            <img src={Share} alt='share' className='details__features__images__img' />
                            <img src={download} alt='download' className='details__features__images__img' />
                        </div>
                        <div className='details__features__price'> &euro;{state.Price}
                            <div className='details__features__room'> {state.Bedrooms} bed |{state.Price_Per_Sqm} </div>
                        </div>
                        <div className='details__features__rooms'> {state.Bedrooms} bed room {state.Building_Type && state.Building_Type.toLowerCase()} for {state.Property_Type && state.Property_Type.toLowerCase()}</div>
                        <div className='details__features__contact'>Please Contact us</div>
                        <Button
                            type="block"
                            text='Contact Agent'
                            size="block"
                        />
                        <Features neighbourhood price={state.Price} downloadLink={state && state.Brochure && state.Brochure[0] && state.Brochure[0].url}
                            viewLink={state && state.Floor_Plans && state.Floor_Plans[0] && state.Floor_Plans[0].url} />
                        <div className='details__features__rooms' dangerouslySetInnerHTML={{
                            __html: state.Description
                        }}
                        ></div>
                        <AgentDetails image={state && state.Negotiator && state.Negotiator.Image && state.Negotiator.Image.url} email={state && state.Negotiator && state.Negotiator.Email} mobile={state && state.Negotiator && state.Negotiator.Phone} name={state && state.Negotiator && state.Negotiator.Name} description={state && state.Negotiator && state.Negotiator.Designation} />
                    </div>
                </div>
            </div>
        )

        return DOM
    }
}

export const DetailedPage = withRouter(
    ((DetailedPageTrans)),
)
