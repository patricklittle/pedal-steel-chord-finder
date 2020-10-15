/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { activatePedal } from '../actions'

const Pedal = ({name, action}) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch()

  const handleClick = () => {
    const pedalState = !active
    setActive(pedalState);
    dispatch(activatePedal({action, active: pedalState }))
  }

  return (
    <button
      css={{
        padding: 20,
        fontSize: 20,
        color: '#fff',
        border: 'none',
        background: active ? '#8BC34A' : '#333'
      }}
      onClick={handleClick}
    >{name}</button>
  );
};

export default Pedal