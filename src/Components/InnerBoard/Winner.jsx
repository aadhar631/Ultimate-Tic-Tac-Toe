import React, { useEffect } from 'react';
import styled from 'styled-components';

function Winner(props) {
    // Destructure props for easier access
    const { outerState, updateOuterState, isWinner, lastClickedOuterIndex } = props;

    useEffect(() => {
        // Check if there is a winner and the outerState needs to be updated
        if (isWinner && outerState[lastClickedOuterIndex] !== isWinner) {
            // Create a copy of the outerState and update the winner's value
            const updatedOuterState = [...outerState];
            updatedOuterState[lastClickedOuterIndex] = isWinner;

            // Update the outerState in the parent component
            updateOuterState(updatedOuterState);
        }
    }, [isWinner, lastClickedOuterIndex, outerState, updateOuterState]);

    return (
        <WinnerStyled>
            {/* Display the winner's value (X or O) */}
            <h3>{outerState[lastClickedOuterIndex]}</h3>
        </WinnerStyled>
    )
}

const WinnerStyled = styled.div`
    h3 {
        /* Styling for the winner's value */
        font-size: 5rem;
        color: #00abf0;
        margin-left: 1rem;
    }
`;

export default Winner;
