import React from 'react'

const Course = ( props) => {
  return (<>
    <div className='parentBlock'>
    <div className='mainBlock'>
    <img src={props.payload[0].trainerPhoto} alt="" />
    <h2>{props.payload[0].trainerName}</h2>
    <h2>{props.payload[0].courseName}</h2>
    <h2>{props.payload[0].skills}</h2>
    <h2>{props.payload[0].duration}</h2>
    </div>
    <div className='mainBlock'>
    <img src={props.payload[1].trainerPhoto} alt="" />
    <h2>{props.payload[1].trainerName}</h2>
    <h2>{props.payload[1].courseName}</h2>
    <h2>{props.payload[1].skills}</h2>
    <h2>{props.payload[1].duration}</h2>
    </div>
    <div className='mainBlock'>
    <img src={props.payload[2].trainerPhoto} alt="" />
    <h2>{props.payload[2].trainerName}</h2>
    <h2>{props.payload[2].courseName}</h2>
    <h2>{props.payload[2].skills}</h2>
    <h2>{props.payload[2].duration}</h2>
    </div>
    <div className='mainBlock'>
    <img src={props.payload[3].trainerPhoto} alt="" />
    <h2>{props.payload[3].trainerName}</h2>
    <h2>{props.payload[3].courseName}</h2>
    <h2>{props.payload[3].skills}</h2>
    <h2>{props.payload[3].duration}</h2>
    </div>
    </div>
    <div className='parentBlock'>
        <div className='mainBlock'>
        <img src={props.payload[4].moviePhoto} alt="" />
        <h2>{props.payload[4].movieName}</h2>
    <h2>{props.payload[4].director}</h2>
    <h2>{props.payload[4].collection}</h2>
    <h2>{props.payload[4].release}</h2>
        </div>
        <div className='mainBlock'>
    <img src={props.payload[5].moviePhoto} alt="" />
    <h2>{props.payload[5].movieName}</h2>
    <h2>{props.payload[5].director}</h2>
    <h2>{props.payload[5].collection}</h2>
    <h2>{props.payload[5].release}</h2>
        </div>
        <div className='mainBlock'>
    <img src={props.payload[6].moviePhoto} alt="" />
    <h2>{props.payload[6].movieName}</h2>
    <h2>{props.payload[6].director}</h2>
    <h2>{props.payload[6].collection}</h2>
    <h2>{props.payload[6].release}</h2>
        </div>
        <div className='mainBlock'>
    <img src={props.payload[7].moviePhoto} alt="" />
    <h2>{props.payload[7].movieName}</h2>
    <h2>{props.payload[7].director}</h2>
    <h2>{props.payload[7].collection}</h2>
    <h2>{props.payload[7].release}</h2>
        </div>
    </div>
    <div className='parentBlock'>
    <div className='mainBlock'>
    <img src={props.payload[8].teamPhoto} alt="" />
    <h2>{props.payload[8].iplTeam}</h2>
    <h2>{props.payload[8].captain}</h2>
    <h2>{props.payload[8].stadium}</h2>
    <h2>{props.payload[8].location}</h2>
        </div> 
        <div className='mainBlock'>
    <img src={props.payload[9].teamPhoto} alt="" />
    <h2>{props.payload[9].iplTeam}</h2>
    <h2>{props.payload[9].captain}</h2>
    <h2>{props.payload[9].stadium}</h2>
    <h2>{props.payload[9].location}</h2>
        </div> 
        <div className='mainBlock'>
    <img src={props.payload[10].teamPhoto} alt="" />
    <h2>{props.payload[10].iplTeam}</h2>
    <h2>{props.payload[10].captain}</h2>
    <h2>{props.payload[10].stadium}</h2>
    <h2>{props.payload[10].location}</h2>
        </div> 
        <div className='mainBlock'>
    <img src={props.payload[11].teamPhoto} alt="" />
    <h2>{props.payload[11].iplTeam}</h2>
    <h2>{props.payload[11].captain}</h2>
    <h2>{props.payload[11].stadium}</h2>
    <h2>{props.payload[11].location}</h2>
        </div> 
    </div>
    </>
  )
}

export default Course