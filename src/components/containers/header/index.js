// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../../presentational/atoms/title/';
import Prefix from '../../../utils/prefix';

const prefix = new Prefix().getPrefix('templates');

type Props = {
    title: String,
    flg: Boolean,
};

class Header extends Component {
    static defaultProps = {
        flg: false,
    };

    props: Props;

    static propTypes = {
        title: PropTypes.string.isRequired,
        flg: PropTypes.bool,
    };

    getClassFlg(flg: Boolean): string {
        return flg ? `${prefix}flg-true` : `${prefix}flg-false`;
    }

    getSomething(flg: Boolean): string {
        return flg ? 'TRUE' : 'FALSE';
    }

    render(): ?React$Element<any> {
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

export default Header;
