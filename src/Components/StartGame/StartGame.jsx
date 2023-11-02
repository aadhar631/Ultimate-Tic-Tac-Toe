import React, { useState } from 'react';
import OuterBoard from '../OuterBoard/OuterBoard';
import styled from 'styled-components';

function StartGame() {
    // Define a state variable to track if the game has started
    const [gameStarted, setGameStarted] = useState(false);

    // Function to handle starting the game
    const handleStartGame = () => {
        setGameStarted(true);
    };

    return (
        <StartGameStyled>
            {/* Render game instructions when the game has not started */}
            {!gameStarted && (
                <div className="title">
                    <h1 className='heading'>Ultimate Tic Tac Toe</h1>
                    <h3 className='instruction'>Instructions</h3>
                    <ul className='circle'>
                        <li>X Plays Anywhere, O Has To Play In The Big Square Corresponding To The Move Of X</li>
                        <li>X Has To Follow The Same Rule</li>
                        <li>Sent To A Filled Square, You Can Play Anywhere In The Board</li>
                        <li>FIRST PLAYER TO 3 IN A ROW IN A SMALL GAME WINS THAT SQUARE</li>
                        <li>FIRST PLAYER TO 3 IN A ROW IN A BIG GAME WINS THE GAME</li>
                    </ul>
                </div>
            )}
            
            {/* Render the "Start" button when the game has not started */}
            {!gameStarted ? (
                <button onClick={handleStartGame}>Start</button>
            ) : (
                // Render the OuterBoard component when the game has started
                <div>
                    <OuterBoard />
                </div>
            )}
        </StartGameStyled>
    );
}

const StartGameStyled = styled.div`
    // Styling for the StartGame component
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        // Styling for the game instructions
        display: flex;
        flex-direction: column;

        .heading {
            // Styling for the game title
            font-size: 5rem;
            color: #00abf0;
            margin: 1rem 0;
        }

        .instruction {
            // Styling for the instructions heading
            color: #00abf0;
            margin: 0 20px;
            font-size: 1.8rem;
        }

        ul {
            // Styling for the list of instructions
            color: #ededed;

            li {
                margin-bottom: 1rem;
                font-size: 1.1rem;
            }
        }
    }

    button {
        // Styling for the "Start" button
        cursor: pointer;
        width: 15rem;
        border: none;
        border-radius: 2rem;
        font-size: 2rem;
        padding: 1rem;
        color: #ededed;
        background-color: #112e42;
        transition: .3s ease-in-out;
    }

    button:hover {
        // Styling for the "Start" button on hover
        background-color: #00abf0;
    }
`;

export default StartGame;
