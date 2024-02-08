import React from 'react'
import { Themecontext } from "../context/Themecontextprovider"

const Footer = () => {
    const {count,increCount } = React.useContext(Themecontext);
  return (
    <div>
        
        <div>{count}</div>
        <button onClick={increCount}>Now Click</button>
    </div>
  )
}

export default Footer