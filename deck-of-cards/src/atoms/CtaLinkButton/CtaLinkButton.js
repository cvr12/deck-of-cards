import React from 'react';
import styled from 'styled-components';

const CtaLinkButtonStyled = styled.a`
    padding: 20px 20px 20px 20px;
    background-color: #EE8434;
    width: 60%;
    border-radius: 8px;
    box-shadow: 10px 10px 5px #985422;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    color: #F8F9F5;
`; 
const InnerDivStyled = styled.div`
    display: table;
    height: 100%;
    margin: auto;
`; 
const InnerSpanStyled = styled.span`
    display: table-cell;
    vertical-align: middle;
    font-size: 1.5em;
    font-weight: bold;
`; 

const CtaLinkButton = (props) => {
    return (
        <CtaButtonStyled href={props.url}>
            <InnerDivStyled>
                <InnerSpanStyled>{props.linkTitle}</InnerSpanStyled>
            </InnerDivStyled>
        </CtaButtonStyled>
    );
};

export default CtaLinkButton;