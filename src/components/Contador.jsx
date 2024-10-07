import { useIncreaseCounter } from "../hooks/useIncreaseCounter"

export const Contador = () => {

    const {cuenta, aumentarCuenta} = useIncreaseCounter(1);

    return (
    <>
    <h1>Contador</h1>
    <h2>{cuenta}</h2>
    <button onClick={aumentarCuenta}>Aumenta</button>
    </>
  )
}
