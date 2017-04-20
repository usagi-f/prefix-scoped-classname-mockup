import React from 'react';
import { render } from 'react-dom';
import Header from './containers/header/';

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Header title={'header'} flg />,
        document.querySelector('#app'),
    );
});
