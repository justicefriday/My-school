import React from 'react'
import { RingLoader } from 'react-spinners'
const Spinner = ({ loading }) => {
    
    const override = {
        display:'block',
        margin:'100px auto'
    }
  return (
      <RingLoader
          color='#03A6A1'
          loading={loading}
          cssOverride={override}
          size={150}
      />
  )
}

export default Spinner