import React from 'react';
import styled from 'styled-components';

const InnerContainerStyled = styled.div`
    display: inline-block;
    text-align: center;
    min-width: 150px;
    width: 100%;
    height: 100%;
    padding: 5px;
    overflow: auto;
`;

const InnerCardContainer = (props) => {
    return(
    <InnerContainerStyled>
        {props.children}
    </InnerContainerStyled>
    );
};

export default InnerCardContainer;