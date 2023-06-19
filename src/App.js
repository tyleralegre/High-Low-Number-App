import React, {useState} from 'react';
import "./App.css";

export default function App() {
  const [minVal, setMinVal] = useState(0); // [value, setValue]
  const [maxVal, setMaxVal] = useState(100);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * (maxVal- minVal +1) + minVal));
  const [input, setInput] = useState(undefined)  // 'LOW' || 'HIGH'

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal- minVal +1) + minVal));
  }

  const handleClickLow = () => {
    setRandomNum(undefined)
    setInput('LOW')
  }

  const handleClickHigh = () => {
    setRandomNum(undefined)
    setInput('HIGH')
  }
  
  return (
    <div className="Hero">
      <div className="container">
    <div className="randomNum">
      <p>Random Number <span>{randomNum}</span>
      </p>
    </div>
    <div className="numContainer">
      <div className="numContainerWrapper">
        <p>Min:</p>
        <input 
        type="number" 
        value={minVal} 
        onChange={e=> setMinVal(+e.target.value)}/>
        <div className="sidePick">
        <p>
          Pick your side!
          <br />
          {input === 'LOW' ? 'You chose LOW' : 'You chose HIGH'}
        </p>
        <div className="lowButton">
        <p2>Low: 0-49</p2>
        <button onClick={handleClickLow} className='button1'>Low</button>
      </div>
      </div>
      </div>
      <div className="numContainerWrapper">
        <p>Max:</p>
        <input 
        type="number" value={maxVal} 
        onChange={e=> setMaxVal(+e.target.value)}/>
        <div className="highButton">
        <p3>High: 50-100</p3>
        <button onClick={handleClickHigh} className='button2'>High</button>
        
      </div>
          </div>
        </div>
        {/* <button onClick={handleRandomNum} disabled={Boolean(input) ? false : true} >Get Random Number</button> */}
        <button onClick={handleRandomNum} disabled={!input} >Get Random Number</button>
      </div>
    </div>
  );
}

 // 10/10

// !true // false
// !!false // false 

// !undefined // true

// !!null // false

// !!!false // true

// // undefined => false (falsy innately)
// if (undefined) {
//   console.log('this')
// } else {
//   console.log('that') // This wil run
// }
// // null => false (falsy innately)
// if (null) {
//   console.log('this')
// } else {
//   console.log('that') // This wil run
// }

// // 0 => false (falsy innately)
// if (0) {
//   console.log('this')
// } else {
//   console.log('that') // This wil run
// }

// // -10 => true (truthy innately)
// if (-10) {
//   console.log('this') // This will run
// } else {
//   console.log('that')
// }

// // '' => false (falsy innately) 
// if ('') {
//   console.log('this') 
// } else {
//   console.log('that') // This will run
// }

// // 'hello' => true (truthy innately) 
// if ('hello') {
//   console.log('this') // This will run
// } else {
//   console.log('that') 
// }

// // true => true (true innately)
// if (true) {
//   console.log('this') // This wil run
// } else {
//   console.log('that')
// }

// // false => false (false innately)
// if (false) {
//   console.log('this')
// } else {
//   console.log('that') // This wil run
// }
