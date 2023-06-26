import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './SplitScreen';


const LeftHandComponent = () =>{
  return <h1 style={{backgroundColor:'greenyellow'}}>Left</h1>
}
const RightHandComponent = () =>{
  return <h1 style={{ backgroundColor: "purple" }}>Right</h1>;
}


function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
      leftWeight={1}
      rightWeight={3}
    />
  );
}

export default App;
