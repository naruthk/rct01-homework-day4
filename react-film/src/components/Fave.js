import React, { useState } from 'react'

const Fave = props => {
  const [isFave, setIsFave] = useState(false);

  const handleClick = e => {
    e.stopPropagation();
    setIsFave(!isFave);
    props.onFaveToggle(props.film, !isFave);
  }
  const isFaveOutput = isFave ? 'remove_from_queue' : 'add_to_queue';

  return (
    <div className={`film-row-fave ${isFaveOutput}`} onClick={handleClick}>
      <p className="material-icons">{isFaveOutput}</p>
    </div>
  )
}

export default Fave;