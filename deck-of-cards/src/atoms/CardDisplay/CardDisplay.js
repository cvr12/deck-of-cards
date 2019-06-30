import React from 'react';
import styled from 'styled-components';
import '../../App.css';

const CardDisplayStyled = styled.div`
    margin: 0 -80px 0 0 ;
    display: inline-block;
    overflow: auto
`; 


/* const CardDisplayStyled = styled.div`
    display: inline-block;
    background-color: #0E4274;
    border-radius: 8px;
    margin: 5px;
    padding: 5px;
    min-width: 3em;
    min-height:50px;
`; 
 */
const CardTextStyled = styled.p`
    font-weight: bold;
    color: #F8F9F5;
`; 

/* 
const CardDisplay = (props) => {
    return(
    <CardDisplayStyled>
        <CardTextStyled>{props.text}</CardTextStyled>
    </CardDisplayStyled>
    );
}; 
*/

const CardDisplay = (props) => {
    const cardLocation = "card card-"+props.text;
    return(
    <CardDisplayStyled className={cardLocation}></CardDisplayStyled>
    );
};
export default CardDisplay;