import "./App.css";
import Input from "./Input";
import Square from './Square'
import {useState} from 'react'

function App() {
  const [colorvalue, setColorValue] = useState('')

  return (
    <>
      <div className="color">
        <Square colorValue={colorvalue} />
        <Input colorValue={colorvalue} setColorValue={setColorValue} />
      </div>
    </>
  );
}

export default App;
