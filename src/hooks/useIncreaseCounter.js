import { useState } from "react"

export const useIncreaseCounter = () => {
    const [cuenta, setCuenta] = useState(0)
       const aumentarCuenta = ()=>{
        setCuenta(cuenta+1)
    }  

    return {
        cuenta, aumentarCuenta
    }
}
