import React from 'react'

function Profile(props) {
  return (
    <div>
        <h1>my name is {props.fullname}</h1>
        <h3>i am {props.bio} </h3>
        <h4>{props.profession}</h4>
        <button onClick={()=>props.affiche(props.fullname)}>click here to show name</button>
        {props.children}
    </div>
  )
}

export default Profile