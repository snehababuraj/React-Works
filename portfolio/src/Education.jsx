import React from 'react'
// const qualification=[
//     {"name":"MCA","university":"mgu","grade":"o"},
//     {"name":"BCA","university":"mgu","grade":"o"},
//     {"name":"BBA","university":"mgu","grade":"o"}
    
// ]
function Education({qualifications}){      //destructure
  return (
    <div>
        <table>
            <tr>
                <th>name</th>
                <th>university</th>
                <th>grade</th>
            </tr>
            <tbody>
                {qualifications.map((q,i)=><tr>
                    <td>{q.name}</td>
                    <td>{q.university}</td>
                    <td>{q.grade}</td>
                </tr>)}
            </tbody>

        </table>
      
    </div>
  )
}

export default Education
