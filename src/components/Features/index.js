import React from 'react';
import './index.scss'
import { string } from 'prop-types'

export const Features = (props) => {
    return <div className='features'>
        <div className='features__heading'>Facts & Fetaures</div>
        <div className='features__content'>
            <div className='features__content__title'>Neigbourhood:</div>
            <div className='features__content__text'>{props.neighbourhood}</div></div>
        <div className='features__content'>
            <div className='features__content__title'>Price per sqm:</div><div className='features__content__text'>{props.price}</div></div>
        <div className='features__content'>
            <div className='features__content__title'>Brochure:</div><div className='features__content__text'><a href={props.downloadLink} target='_blank' rel="noreferrer" className='features__content__text__link'>Download Brochure</a></div></div>
        <div className='features__content'>
            <div className='features__content__title'>Floor plan:</div><div className='features__content__text'><a href={props.viewLink} target='_blank' rel="noreferrer" className='features__content__text__link'>View Floor Plan</a></div></div>
    </div>
}



Features.propTypes = {
    neighbourhood: string,
    price: string,
    viewLink: string,
    downloadLink: string
}

Features.defaultProps = {
    neighbourhood: '',
    price: '',
    viewLink: '',
    downloadLink: ''
}
