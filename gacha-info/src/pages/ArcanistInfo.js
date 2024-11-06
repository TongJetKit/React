import React from 'react'
import {useParams} from 'react-router-dom';

function ArcanistInfo() {
  const {arcanistName} = useParams();

  return (
    <div>ArcanistInfo: {arcanistName}</div>
  )
}

export default ArcanistInfo
