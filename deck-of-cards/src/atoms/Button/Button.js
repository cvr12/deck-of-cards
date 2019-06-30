import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    margin: 0px 5px 0px 5px;
    padding: 5px;
    background-color: #EE8434;
    min-width: 150px;
    max-width: 10%;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    color: #F8F9F5;
`; 

const Button = (props) => {
    return (
        <ButtonStyled onClick ={props.onClick}>{props.title}</ButtonStyled>
    );
};

export default Button;