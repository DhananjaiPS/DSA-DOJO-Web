import { useState } from 'react'
import React from 'react'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [count, setCount] = useState(0)
  const { loginWithRedirect, user, isAuthenticated, isLoading ,logout} = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <h1 class="text-3xl font-bold underline text-center text-blue-500">
        Hello world!
      </h1>


      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
      }
      {isAuthenticated ? (
        <div>

          <h1>Welcome back, user!</h1>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}

    </>
  )
}

export default App
