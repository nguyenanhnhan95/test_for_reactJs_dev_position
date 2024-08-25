import { useRef, useState } from 'react'

import './App.css'
import InputPoint from './component/InputPoint'
import ButtonStartGame from './component/ButtonStartGame'
import TimerGame from './component/TimerGame'
import ScreenGame from './component/ScreenGame'
import TitleStatusGame from './component/TitleStatusGame'
import useSizeAndPosition from './hook/useSizeAndPosition'


function App() {
  const [numberPoint,setNumberPoint] = useState(0);
  const boxGameRef = useRef(null)
  const {  height, width } = useSizeAndPosition(boxGameRef)
  return (
    <div className="static  w-[600px]">
      <div className="relative m-[20px] space-y-2">
        <TitleStatusGame  />
        <div className='flex '>
          <div className='text-left w-[150px] font-medium'>Ponits:</div>
          <InputPoint setNumberPoint={setNumberPoint}/>
        </div>
        <TimerGame numberPoint={numberPoint} />
        <ButtonStartGame  numberPoint={numberPoint}  height={height} width={width} />
        <ScreenGame  boxGameRef={boxGameRef}   />
      </div>
    </div>
  )
}

export default App
