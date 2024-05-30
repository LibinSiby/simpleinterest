import {useState} from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  //State to hold values from the input field

  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInterest]=useState(0)

  //For conditional rendering

  const[isPrinciple,setIsPrinciple]=useState(true)
  const[isRate,setIsRate]=useState(true)
  const[isYear,setIsYear]=useState(true)

  const validate=(e)=>{
    /* console.log(e.target.value);
    console.log(e.target.name); */

    let name=e.target.name
    let value=e.target.value
    
  if(!!value.match(/^[0-9]*$/)){

    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }

    else{
      if(name=='principle'){
        setPrinciple(value) 
        setIsPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }
  }

  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    
  }


  const calculate=()=>{
    setInterest((principle*rate*year)/100)
  }

   /*console.log('principle',principle);*/
   /*console.log('rate',rate);*/
   /*console.log('year',year);*/
  

  return (
    <>
    <div className='d-flex justify-content-center align-items-center shadow p-5 mt-5 border-radius' style={{width:'100',height:'100vh'}}>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>

        <div className='mt-5 flex-column rounded-shadow bg-warning d-flex justify-content-center align-items-center p-3'>
          <h2 className='fs-1 fw-bolder'>{interest}</h2>
          <p>Total Simple Interest</p>
        </div>

        <form className='mt-5'>
        <div className='mt-3'>
        <TextField className='w-100' id="outlined-basic" value={principle || ""} label="Principle Amount" name='principle' onChange={(e)=>validate(e)} variant="outlined" />          
        </div>
        {!isPrinciple &&
          <p className='text-danger'>*Invalid Input</p>}
        <div className='mt-3'> 
        <TextField className='w-100' id="outlined-basic" value={rate || ""}  label="Rate of interest(p.a)%" name='rate' onChange={(e)=>validate(e)} variant="outlined" />
        </div>
        {!isRate &&
          <p className='text-danger'>*Invalid Input</p>}
        <div className='mt-3'> 
        <TextField className='w-100' id="outlined-basic" value={year || ""}  label="Year(yr)" name='year' onChange={(e)=>validate(e)} variant="outlined"/>
        </div>
        {!isYear &&
          <p className='text-danger'>*Invalid Input</p>}

        <div className='d-flex justify-content-between w-100 mt-4'>
          <Button color='success' variant="contained" style={{width:'190px', height:'60px'}} disabled={isPrinciple && isRate && isYear?false:true} onClick={calculate} >
            CALCULATE</Button>
          <Button variant="outlined" style={{width:'190px', height:'60px'}} onClick={handleReset}>RESET</Button>
        </div>

        </form>
      </div>
    </div>
      
    </>
  )
}

export default App
