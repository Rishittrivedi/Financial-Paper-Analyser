import React from 'react'
import Search from './Search'
import { Button } from '@mui/material'
import { companies } from './companies'
import { quaters } from './quaters'

function Home() {
  return (
    <div className='mt-48'>
      <div className='flex justify-center'>
      <Search title={"Companies"} list={companies}/>
      </div>
      <div className='flex justify-center'>
      <Search title={"Quater"} list={quaters}/>
      </div>
      <div className='flex justify-center'>
        <Button variant='contained' size='large' style={{width:"150px",marginTop:"30px"}}>Submit</Button>
      </div>
    </div>
  )
}

export default Home