import { useState } from 'react'
import '../styles/globals.css'
import { LoginContext } from '../components/Context_Provider'

function MyApp({ Component, pageProps }) {

  const [loginState, setloginState] = useState({
    isLoggedIn : false,
    user: ""
  })

  const providerLogin = {loginState,setloginState};


  return (
    <LoginContext.Provider value = {providerLogin}>
      <Component {...pageProps} />
    </LoginContext.Provider>
  )
}

export default MyApp
