import React from 'react';

const Card = (props) => {

  const dragStart = e =>{
    const target = e.target;
    target.classList.add('dragging')

    e.dataTransfer.setData('card_id', target.id)
    console.log('start')
    // setTimeout(() =>{
    //   target.style.display = 'none';
    // },0)
  }

  const dragOver = e => {
    e.stopPropagation();
    
    
  }

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
        {props.children}
    </div>
  );
};

export default Card;