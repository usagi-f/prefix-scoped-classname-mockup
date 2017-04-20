import React from 'react';
import PropTypes from 'prop-types';
import Prefix from '../../../../utils/prefix';
const prefix = new Prefix().getPrefix('atoms');

const Title = (props) => {
    return (
        <h1 className={`${prefix}title`}>
            {props.children}
        </h1>
    );
};

Title.propTypes = {
    children: PropTypes.string.isRequired
};

export default Title;
