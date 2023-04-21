import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactSpeedometer from "react-d3-speedometer"
import GaugeChart from 'react-gauge-chart'


function Summary() {
  
  return (
    <div>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Summary</h1>
      </div>
    </header>
    <main className='flex px-20'>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-slate-400 h-80 mt-24 rounded-md " style={{flex:"3"}}>{/* Your content */}</div>
      <div style={{flex:"1"}}>
        <div className='mx-12 my-8'>
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            segments={3}
            value={40}
            needleTransition="easeQuadIn"
            needleTransitionDuration={1000}
            startColor='blue'
            segmentColors={['grey',]}
            height={130}
            width={210}
          />
        </div>
        <div className='mx-12 my-8'>
        <ReactSpeedometer
            minValue={0}
            maxValue={100}
            segments={3}
            value={40}
            needleTransition="easeQuadIn"
            needleTransitionDuration={1000}
            startColor='blue'
            segmentColors={['grey','grey','grey']}
            
            height={130}
            width={210}
          />
        </div>
        <div className='mx-12 my-8'>
        <ReactSpeedometer
            minValue={0}
            maxValue={100}
            segments={3}
            value={40}
            needleTransition="easeQuadIn"
            needleTransitionDuration={1000}
            startColor='blue'
            segmentColors={['grey','grey','grey']}
            height={130}
            width={210}
          />
        </div>
      </div>
    </main>
    <GaugeChart id="gauge-chart3" 
  nrOfLevels={30} 
  colors={["#FF5F6D", "#FFC371"]} 
  arcWidth={0.3} 
  percent={0.50}
  needleBaseColor='grey'
  textColor='grey' 
/>
    </div>
  )
}

export default Summary