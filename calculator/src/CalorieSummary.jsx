import React, { useEffect } from 'react'

function CalorieSummary({bmrData}) {
    
    function calculateBmr(){

  
      console.log(bmrData);
      
      console.log("calling calculate bmr function");

}

useEffect(()=>{
    calculateBmr(),[bmrData]
})

  return (
    <div>
      <h4>You have to maintain 0000 calorie to maintain current weight</h4>
    </div>
  )
}

export default CalorieSummary