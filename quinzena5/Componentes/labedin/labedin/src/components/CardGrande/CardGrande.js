import React from 'react';
import styled from 'styled-components';

const CardGrandeContainerDivPai = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: auto;
`;


const CardGrandeContainerImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const CardGrandeContainerH4 = styled.h4 `
    margin-bottom: 15px;
`;

const CardGrandeContainerDivFilho = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;


function CardGrande(props) {
    return (
        <CardGrandeContainerDivPai className="bigcard-container">
            <CardGrandeContainerImg src={ props.imagem } />
            <CardGrandeContainerDivFilho>
                <CardGrandeContainerH4>{ props.nome }</CardGrandeContainerH4>
                <p>{ props.descricao }</p>
            </CardGrandeContainerDivFilho>
        </CardGrandeContainerDivPai>
    )
}

export default CardGrande; 