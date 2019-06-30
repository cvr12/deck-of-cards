import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    display: block;
    border-style: solid;
    border-color: #1E90FF;
    box-shadow: 10px 10px 5px #0E4274;
    min-width: 200px;
    margin: 20px 10px 20px 10px;
    padding: 5px 10px 5px 10px;
    text-align: center;
    overflow: auto;
    justify-items: center;
`;

const H2Styled = styled.h2`
    margin: 0px;
    padding: 10px 0px;
    font-size: 2em;
    font-color: #2A2E30;
`;

const Container = (props) => {
    return(
    <ContainerStyled>
        <H2Styled>{props.title}</H2Styled>
        {props.children}
    </ContainerStyled>
    );
};

export default Container;