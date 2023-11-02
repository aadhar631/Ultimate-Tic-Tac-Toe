// Import the required modules and components
import styled from 'styled-components';  // CSS-in-JS library for styling
import StartGame from './Components/StartGame/StartGame'; // Import the StartGame component

function App() {
  return (
    <AppStyled>
      <StartGame />  {/* Render the StartGame component */}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100vw;  
  height: 100vh;  
  background-color: #081b29; 
  overflow: hidden; 
`;

export default App;  
