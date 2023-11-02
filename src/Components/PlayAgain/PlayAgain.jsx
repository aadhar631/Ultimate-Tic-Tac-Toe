import React from 'react';
import styled from 'styled-components';

// PlayAgain component takes an onClick function as a prop to handle the "Play Again" button click.
function PlayAgain({ onClick }) {
    return (
        <PlayAgainStyled>
            <button onClick={onClick}>Play Again</button>
        </PlayAgainStyled>
    );
}

// Styled component for the PlayAgain component.
const PlayAgainStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 20rem;

    button {
        width: 70%;
        background-color: #112e42;
        border: none;
        border-radius: 4rem;
        padding: 20px 20px;
        color: #ededed;
        cursor: pointer;
        font-size: 2rem;
    }
`;

export default PlayAgain; // Export the PlayAgain component.
