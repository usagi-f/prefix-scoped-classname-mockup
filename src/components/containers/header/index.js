import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../presentational/atoms/title/';
import Prefix from '../../../utils/prefix';

const prefix = new Prefix().getPrefix('templates');

class Header extends React.Component {

    getClassFlg(flg) {
        return flg ? `${prefix}flg-true` : `${prefix}flg-false`;
    }

    getSomething(flg) {
        return flg ? 'TRUE' : 'FALSE';
    }

    render() {
        return (
            <header className={`${prefix}header`}>
                <Title>{this.props.title}</Title>
                <p className={this.getClassFlg(this.props.flg)}>
                    {this.getSomething(this.props.flg)}
                </p>
            </header>
        );
    }
}

Header.defaultProps = {
    flg: false,
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    flg: PropTypes.bool,
};

export default Header;
