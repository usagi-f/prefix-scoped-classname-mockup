import React from 'react';
import Prefix from '../../../utils/prefix';
const prefix = new Prefix().getPrefix();

class Header extends React.Component {

    constructor() {
        super();
    };

    render() {
        return (
            <header className={`${prefix}te-header`}>
                <p className={`${prefix}title`}>header</p>
            </header>
        );
    }
}

Header.defaultProps = {
};

Header.propTypes = {
};

export default Header;
