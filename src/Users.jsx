import React from 'react'

const Users = (props) => {
    let data=props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center",fontWeight:"bold"}}>
            <tr>
                <th>username</th>
                <th>age</th>
                <th>gender</th>
                <th>dob</th>
                <th>occupation</th>
                <th>salary</th>
                <th>photo</th>
                <th>phoneNumber</th>
            </tr>
            {
                data.map((x)=>{
                    return <tr>
                        <td>{x.username}</td>
                        <td>{x.age}</td>
                        <td>{x.gender}</td>
                        <td>{x.dob}</td>
                        <td>{x.occupation}</td>
                        <td>{x.salary}</td>
                        <td>{ <img src={x.photo} alt="" style={{height:"50px",widows:"50px"}} /> }</td>
                        <td>
                            <uL>{
                    x.phoneNumber.map((x)=>{
                            return <li>{x}</li>
                          })      
                                }</uL>
                        </td>
                    </tr>
                })
            }

        </table>
    </div>
  )
}

export default Users

