import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light">
                <Navbar.Brand href="/">Что бы сейчас приготовить вкусненького... </Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header;
