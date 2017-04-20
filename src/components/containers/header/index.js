import React from 'react';
import PropTypes from 'prop-types';
import Prefix from '../../../utils/prefix';
const prefix = new Prefix().getPrefix();

class Header extends React.Component {

    constructor(props) {
        super(props);
    };

    getClassFlg(flg) {
        return flg ? `${prefix}flg-true` : `${prefix}flg-false`;
    }

    getSomething(flg) {
        return flg ? 'TRUE' : 'FALSE';
    }

    render() {
        return (
            <header className={`${prefix}te-header`}>
                <p className={`${prefix}title`}>{this.props.title}</p>
                <p className={this.getClassFlg(this.props.flg)}>{this.getSomething(this.props.flg)}</p>
            </header>
        );
    }
}

Header.defaultProps = {
    flg: false
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    flg: PropTypes.bool
};

export default Header;
