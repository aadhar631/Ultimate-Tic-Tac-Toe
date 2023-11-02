import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import OuterSquare from './OuterSquare';
import OuterWinner from './OuterWinner';
import PlayAgain from '../PlayAgain/PlayAgain';

function OuterBoard() {
    const initialState = Array(9).fill(null);
    const [outerState, setOuterState] = useState(initialState);
    const [isXTurn, setIsXTurn] = useState(true);
    const [isWinner, setIsWinner] = useState(null);
    const [bgcolor, setbgcolor] = useState(Array(9).fill(""));
    

    const handleXO = () => {
        setIsXTurn(!isXTurn);
        return isXTurn ? "X" : "O";
    }

    const updateOuterState = (newValue) => {
        setOuterState(newValue);
    }

    useEffect(() => {
        const winner = checkWinner();
        setIsWinner(winner);
    }, [outerState]); 

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

        for(let logic of winnerLogic) {
            const [a,b,c] = logic;
            if(outerState[a] !== null && outerState[a] === outerState[b] && outerState[a] === outerState[c]) {
                return outerState[a];
            }
        }

        return false;
    }

    const passIndexToOuterBoard = (outerIndex, innerIndex) => {
        // This function receives the index from the Board in OuterSquare
        console.log(`Received index from OuterSquare: Outer ${outerIndex}, Inner ${innerIndex}`);

        const newColors = bgcolor.map((color, i) =>
            i === innerIndex ? "#006080" : "#112e42" // Set to your desired color or empty string
        );
        setbgcolor(newColors);
    }


    return (
        <OuterBoardStyled>
            {isWinner ? (
                <>
                    <OuterWinner isWinner={isWinner}/>
                    <PlayAgain onClick={() => setOuterState(initialState)} />
                </>
            ) : (
                <>
                    <div className="board-container">
                        <div className="board-row">
                            <OuterSquare
                                key={0}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[0]}
                                index={0}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[0]}
                            />
                            <OuterSquare
                                key={1}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[1]}
                                index={1}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[1]}
                            />
                            <OuterSquare
                                key={2}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[2]}
                                index={2}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[2]}
                            />
                        </div>
                        <div className="board-row">
                            <OuterSquare
                                key={3}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[3]}
                                index={3}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[3]}
                            />
                            <OuterSquare
                                key={4}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[4]}
                                index={4}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[4]}
                            />
                            <OuterSquare
                                key={5}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[5]}
                                index={5}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[5]}
                            />
                        </div>
                        <div className="board-row">
                            <OuterSquare
                                key={6}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[6]}
                                index={6}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[6]}
                            />
                            <OuterSquare
                                key={7}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[7]}
                                index={7}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[7]}
                            />
                            <OuterSquare
                                key={8}
                                outerState={outerState}
                                updateOuterState={updateOuterState}
                                onXOChange={handleXO}
                                value={outerState[8]}
                                index={8}
                                passIndexToOuterBoard={passIndexToOuterBoard}
                                bgcolor={bgcolor[8]}
                            />
                        </div>
                    </div>
                </>
            )}
        </OuterBoardStyled>
    )
}

const OuterBoardStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .turn {
        color: #00abf0; 
        font-size: 2rem;

        span {
            color: #ededed;
        }
    }

    .board-container {
        margin: 20px;
        background-color: #081b29;
    }

    .board-row {
        display: flex;
        width: 100%;
    }
`;

export default OuterBoard

