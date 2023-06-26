import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './SplitScreen';


const LeftHandComponent = ({name}) =>{
  return <h1 style={{backgroundColor:'greenyellow'}}>Left {name} </h1>
}
const RightHandComponent = ({message}) =>{
  return <h1 style={{ backgroundColor: "purple" }}>Right {message}</h1>;
}


function App() {
  return (
    <>
      {/* <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
      leftWeight={1}
      rightWeight={3}
    /> */}

      <SplitScreen
        
        leftWeight={1}
        rightWeight={3}
      >
        <RightHandComponent name="Carlos" />
        <LeftHandComponent message="hello" />
      </SplitScreen>
    </>
  );
}

export default App;
