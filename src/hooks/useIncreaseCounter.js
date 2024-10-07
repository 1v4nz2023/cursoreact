import { useState } from "react"

export const useIncreaseCounter = (valor) => {
    const [cuenta, setCuenta] = useState(valor)
       const aumentarCuenta = ()=>{
        setCuenta(cuenta+1)
    }  

    return {
        cuenta, aumentarCuenta
    }
}
