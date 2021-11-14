import React from 'react';
import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const CarouselContainer = (props) => {
    const { item } = props
    return <Carousel responsive={responsive}>
        {item && item.Images && item.Images.map(data => {
            return <img src={data.url} alt='text' width='150px' height='100px' />
        })}
    </Carousel>;


}