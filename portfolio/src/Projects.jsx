import React from 'react'

function Projects() {

    const works=["CRUD","CloudBox","BudgetAnalyzer","LinkSpace"]
  return (
    <div>
        <h1>Works</h1>
        <ol>

            {works.map((w,i)=><li key={i}>{w}</li>)}
        </ol>
      
    </div>
  )
}

export default Projects
