import React from 'react';
import styled from "styled-components";
import Board from '../InnerBoard/Board';

function OuterSquare({ onXOChange, outerState, updateOuterState, index, passIndexToOuterBoard, bgcolor }) {
    return (
        <OuterSquareStyled bgcolor={bgcolor}>
            {/* Render the InnerBoard component within the OuterSquare */}
            <Board
                outerState={outerState}
                updateOuterState={updateOuterState}
                onXOChange={onXOChange}
                index={index}
                passIndexToOuterBoard={passIndexToOuterBoard}
            />
        </OuterSquareStyled>
    )
}

const OuterSquareStyled = styled.div`
    // Styling for the OuterSquare component
    border: 1px solid #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgcolor};
    width: 16rem;
    height: 13rem;
`;

export default OuterSquare;
