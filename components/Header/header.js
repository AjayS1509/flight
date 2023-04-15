import React, { useContext, useEffect, useState } from 'react'
import styles from './header.module.css';
import { Overlay } from '../Overlay/overlay';
import { cookies } from 'next/dist/client/components/headers';
import Cookies from 'js-cookie';
import { LoginContext } from '../Context_Provider';
import { FaUserCircle } from "react-icons/fa";
import Slider from '../Slider/slider';
import { GrClose } from "react-icons/gr";

export const LoginForm = ({setLoginPopup}) => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const { loginState, setloginState } = useContext(LoginContext);

    useEffect(()=>{
      if(loginState.isLoggedIn){
        setLoginPopup(false)
      }
    },[])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(loginId.includes("S") && password == "pass"){
        Cookies.set("user",loginId,{expires:7});
        setloginState(prev => ({
          ...prev,
          isLoggedIn : true,
        }));
        setLoginPopup(false);
      }else if(loginId.includes("A") && password == "admin"){
        Cookies.set('user',loginId,{expires:7})
        setloginState(prev => ({
          ...prev,
          isLoggedIn : true,
          user: loginId
        }));
        setLoginPopup(false);
      }else{
        window.alert("Wrong login!")
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label className={styles.label}>
          Login ID:
          <input
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    );
  };

const Header = () => {

    const [loginPopup, setLoginPopup] = useState(false);
    const { loginState, setloginState } = useContext(LoginContext);

    const initialState = {
      slider: false
    }

    const [visibility, setVisibility] = useState(initialState);


    useEffect(() => {
      if(Cookies.get("user") != undefined){
        let data = Cookies.get("user") 
        if(data.includes("S") || data.includes("A")){
          setloginState(prev =>({
            ...prev,
            isLoggedIn:true,
            user:data
          }))
        }else{
          logout();
        }
      }
    },[])
    
  return (
    <>
    {loginPopup && <Overlay overlayClick={() => setLoginPopup(false)}>
        <div className={styles.loginContainer}>
            <LoginForm setLoginPopup = {setLoginPopup}/>
        </div>
        </Overlay>}

    {visibility.slider && <Overlay overlayClick={() => setVisibility(prev => ({...prev, slider:false}))}><Slider setVisibility = {setVisibility} /></Overlay>}

    <div className={styles.headContainer}>
        <div className={styles.leftHead}>
            <div className={styles.headContaintBlock}>Trainee</div>
            <div className={styles.headContaintBlock}>Officers</div>
            <div className={styles.headContaintBlock}>Integrated</div>
            <div className={styles.headContaintBlock}>Online System</div>
            <div className={styles.headContaintBlock}>Software</div>
        </div>

        <div className={styles.rightHead}>
            <div className={styles.headContaintBlock}>
                {loginState.isLoggedIn ?
                <> 
                <div>{Cookies.get('user') != undefined ?
                     <div className={styles.userInfoProfile} onClick={() => setVisibility(prev => ({...prev, slider:true}))}>
                        <FaUserCircle/><br />
                        {Cookies.get('user')}
                     </div> 
                     : user}</div>
                </> 
                : 
                <div onClick={() => setLoginPopup(true)}> login</div> 
                }
            </div>
            {/* {loginState.isLoggedIn &&
            <div className={styles.headContaintBlock} onClick={() => {logout()}}>
                logout
            </div>} */}
        </div>
    </div>
    </>
  )
}

export default Header