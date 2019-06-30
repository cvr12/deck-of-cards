import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../atoms/PageTitle/PageTitle';

const NavbarStyled = styled.div`
    background-color: #1E90FF;
    min-height: 50px;
    padding: 10px;
    vertical-align: middle;
    overflow: hidden
`; 
const Navbar = (props) => {
    return(
        <NavbarStyled>
            <PageTitle text={props.title} />
        </NavbarStyled>
    );
}

export default Navbar;