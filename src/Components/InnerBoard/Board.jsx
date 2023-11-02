import React, { useState } from 'react';
import styled from 'styled-components';
import Square from './Square';
import Winner from './Winner';

function Board(props) {
    // Initialize the state for the board squares
    const initialState = Array(9).fill(null);
    const [state, setState] = useState(initialState); 
    const [lastClickedOuterIndex, setLastClickedOuterIndex] = useState(null);
    
    // Function to check for a winner in the current board
    const checkWinner = () => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }

        return false;
    }

    // Check if there's a winner on this board
    const isWinner = checkWinner();

    // Destructure props
    const { onXOChange } = props;

    // Handle click event on a square
    const handleClick = (outerIndex, index) => {
        if (state[index] !== null) {
            alert("Please select another place");
        } else {
            const XO = onXOChange();
            const copyState = [...state];
            copyState[index] = XO;
            setState(copyState);
            setLastClickedOuterIndex(outerIndex);

            // Pass the index to the outer board
            props.passIndexToOuterBoard(outerIndex, index);
        }
    }

    return (
        <BoardStyled>
            {/* Display the winner if there is one */}
            {isWinner !== false && <Winner outerState={props.outerState} updateOuterState={props.updateOuterState} isWinner={isWinner} lastClickedOuterIndex={lastClickedOuterIndex}/>}

            {/* Render the board */}
            <div className="board-container">
                <div className="board-row">
                    <Square onClick={() => handleClick(props.index, 0)} value={state[0]}/>
                    <Square onClick={() => handleClick(props.index, 1)} value={state[1]}/>
                    <Square onClick={() => handleClick(props.index, 2)} value={state[2]}/>
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(props.index, 3)} value={state[3]}/>
                    <Square onClick={() => handleClick(props.index, 4)} value={state[4]}/>
                    <Square onClick={() => handleClick(props.index, 5)} value={state[5]}/>
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(props.index, 6)} value={state[6]}/>
                    <Square onClick={() => handleClick(props.index, 7)} value={state[7]}/>
                    <Square onClick={() => handleClick(props.index, 8)} value={state[8]}/>
                </div>
            </div>
        </BoardStyled>
    )
}

const BoardStyled = styled.div`
    /* Styling for the board container */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
        /* Styling for the board title */
        font-size: 5rem;
        color: #00abf0;
        margin: 0px;
    }

    .turn {
        /* Styling for the turn indicator */
        color: #00abf0;
        font-size: 2rem;

        span {
            /* Styling for the player's name in the turn indicator */
            color: #ededed;
        }
    }

    .board-container {
        /* Styling for the board container */
        margin: 20px;
        background-color: #081b29;
    }

    .board-row {
        /* Styling for the rows in the board */
        display: flex;
    }
`;

export default Board;
