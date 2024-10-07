import { useState } from "react"
import { UserList } from "./components/userList"

export const UsersApp = () => {

const [endPoint, setEndPoint] = useState('users')



    const handleFetch = ()=>{
        if(endPoint==='users'){
            setEndPoint('comments')
        }

        else{
            setEndPoint('users')

        }
    }


  return (
    <>
    <h1>Lista de usuarios:</h1>
    <UserList endPoint={endPoint}></UserList>
    <button onClick={handleFetch}>Presiona aquí</button>
    </>
  )
}
