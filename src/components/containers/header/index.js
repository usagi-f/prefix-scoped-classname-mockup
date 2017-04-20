import React from 'react';
import PropTypes from 'prop-types';
import Prefix from '../../../utils/prefix';
const prefix = new Prefix().getPrefix();

class Header extends React.Component {

    constructor(props) {
        super(props);
    };

    getSomething(flg) {
        return flg ? 'TRUE' : 'FALSE';
    }

    render() {
        return (
            <header className={`${prefix}te-header`}>
                <p className={`${prefix}title`}>{this.props.title}</p>
                <p className={`${prefix}flg`}>{this.getSomething(this.props.flg)}</p>
            </header>
        );
    }
}

Header.defaultProps = {
    flg: false
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    flg: true
};

export default Header;
