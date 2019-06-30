import React from 'react';
import InnerContainer from '../../organisms/InnerContainer/InnerContainer'

const DrawCardsInput = (props) => {
    return (
        <InnerContainer>
            <form onSubmit={props.formSubmit}>
                <label>
                    Number of cards to draw 
                    <br/>
                    <select value={props.numberToDraw} onChange={props.selectDrawNumberChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                </label>
                <br/>
                <label>
                    Select the type of draw
                    <br/>
                    <select value={props.typeOfDraw} onChange={props.selectDrawTypeChange}>
                        <option value="random">Random</option>
                        <option value="top">Top</option>
                    </select>
                </label>
            </form>
        </InnerContainer> 
    );
}

export default DrawCardsInput;