import React from 'react'
import { useState } from 'react';

export const Themecontext = React.createContext();

export  const Themecontextprovider = ({children}) => {

    const [count, setCount] = useState(1)

    function increCount(){
        setCount(count+1);
    }


    const context2 ={
        count,
        increCount
    }
  return (
    <Themecontext.Provider value={context2}>

        {children}
    </Themecontext.Provider>
  )
}

export default Themecontextprovider