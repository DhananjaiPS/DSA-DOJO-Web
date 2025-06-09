import { useState } from 'react'
import React from 'react'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [count, setCount] = useState(0)
 const { loginWithRedirect } = useAuth0();
  return (
    <>
      <h1 class="text-3xl font-bold underline text-center text-blue-500">
    Hello world!
  </h1>
 

   <button onClick={() => loginWithRedirect()}>Log In</button>;
     
    </>
  )
}

export default App
