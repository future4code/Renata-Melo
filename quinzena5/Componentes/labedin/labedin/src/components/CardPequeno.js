import React from 'react';
import styled from 'styled-components';

const CardPequenoContainerDiv = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: auto;
`;

const CardPequenoContainerImg = styled.img `
    height: auto;
    width: 30px;
    margin-right: 10px;
`;


const CardPequenoContainerH4 = styled.h4 `
    font-size: 16px;
    margin-right: 4px;
`;

const CardPequenoContainerP = styled.p `
    font-size: 16px;
`;

// JSX

let CardPequeno = (props) => {
    return (
        <CardPequenoContainerDiv className="small-card">
            <CardPequenoContainerImg src={props.imagem}/>
            <CardPequenoContainerH4>{props.texto}</CardPequenoContainerH4>
            <CardPequenoContainerP>{props.complemento}</CardPequenoContainerP>
        </CardPequenoContainerDiv>
    );
}

export default CardPequeno;