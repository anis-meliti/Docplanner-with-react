import React from 'react';
import './Brands.css'

const Brands = (props) => {
    return (<a href="/" className="brand">{props.brandLogos}</a>);

}

export default Brands;