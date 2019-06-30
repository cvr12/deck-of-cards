import React from 'react';
import styled from 'styled-components';

const InnerContainerStyled = styled.div`
    display: block;
    text-align: center;
    min-width: 150px;
    width: 100%;
    height: 100%;
    justify-items: center;
    padding: 5px;
`;

const InnerContainer = (props) => {
    return(
    <InnerContainerStyled>
        {props.children}
    </InnerContainerStyled>
    );
};

export default InnerContainer;