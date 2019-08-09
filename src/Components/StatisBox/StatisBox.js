import React from 'react';
import './Style/StatisBox.css';

const StatisBox = ({ image, stisTitle, statisDesc }) => {
    return (
        <div className="box box-neighb">
            <img src={image} alt="flag pic" />
            <h3 className="slogan-text rd-title">
                {stisTitle}
            </h3>
            <span className="statis-desc land-desc">{statisDesc}</span>
        </div>

    )
}

export default StatisBox;