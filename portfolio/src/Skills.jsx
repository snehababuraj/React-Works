function Skills(){

    const skills=["db desiging","desiging","backend development","frontend development"]
    return(
        <div>
            
            <h1>Skills</h1>
            <ul>
                {skills.map(s=><li>{s}</li>)}
            </ul>
            
        </div>

    )
}

export default Skills