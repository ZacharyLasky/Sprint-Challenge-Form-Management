import React from 'react';

function Card(props) {

  return(
    <div className="users">
      {props.data.map(name => {
        return (
          <p>USER:{name.username}</p>
        )
      })}
    </div>
  )
}

export default Card;