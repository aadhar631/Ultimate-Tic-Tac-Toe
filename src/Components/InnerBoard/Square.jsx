import React from 'react';
import styled from 'styled-components';

function Square({ onClick, value }) {
    return (
        <SquareStyled onClick={onClick}>
            {/* Display X or O value in the square */}
            <h3>{value}</h3>
        </SquareStyled>
    )
}

const SquareStyled = styled.div`
    /* Styling for the square */
    border: 1px solid #ededed;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #081b29;

    h3 {
        /* Styling for the X or O value inside the square */
        color: #00abf0;
        font-size: 2rem;
    }
`;

export default Square;
