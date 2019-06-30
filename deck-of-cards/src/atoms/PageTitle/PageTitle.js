import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h1`
    margin: 0px;
    padding: 5px;
    vertical-align: middle
    font-size: 3em;
    color: #F8F9F5;
`; 
const PageTitle = (props) => {
    return(
        <TitleStyled>
            {props.text}
        </TitleStyled>
    );
}

export default PageTitle;