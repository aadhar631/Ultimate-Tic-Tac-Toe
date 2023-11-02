import React from 'react';
import styled from 'styled-components';

function OuterWinner({ isWinner }) {
    return (
        <WinnerStyled>
            {/* Display the winner of the game */}
            <h1><span>{isWinner}</span> Won the game</h1>
        </WinnerStyled>
    )
}

const WinnerStyled = styled.div`
    h1 {
        /* Styling for the winner message */
        span {
            font-size: 10rem; // Styling for the winning player's name
        }
        font-size: 5rem; // Styling for the "Won the game" text
        color: #00abf0; // Text color for the winner message
    }
`;

export default OuterWinner;
