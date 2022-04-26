import React from 'react'

const food = ({data}) => {
 
  return (
    <div className='displayimages'>
     
      <div className='row'>
        {data.map(data=><div className='col-md-3'>
          <div className='card' style={{"width":"14rem"}}>
            <img className='card-img-top' src={data.recipe.image} alt="card image cap"></img>
            <div className='textbodyyy'>
            <div className='card-body'>
              <center>
                <h5 className='card-title'>{data.recipe.label}</h5>
                <p className='card-text'>calories:{Math.round(data.recipe.calories)}</p>
                <button className='btn btn-primary'  >Buy</button>
              </center>
              </div>
            </div>
          </div>
        </div>)}

      </div>
    </div>
  )
}

export default food