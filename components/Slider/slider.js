import React, { useContext } from 'react'
import styles from "./slider.module.css";
import { FaUserAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Cookies from 'js-cookie';
import { LoginContext } from '../Context_Provider';
import { useRouter } from 'next/router';

const Slider = ({setVisibility}) => {

  const { loginState, setloginState } = useContext(LoginContext);
  const router = useRouter();

  function logout () {
    Cookies.remove('user')
    setloginState(prev => ({
      ...prev,
      isLoggedIn:false,
      user:""
    }))
    setVisibility(prev => ({...prev,slider:false}))
    router.push("/");
  }

  function acadmics_page(){
    let user_val = Cookies.get('user')
    let final = "";
    
    if(loginState.isLoggedIn){
      if(user_val.includes("S")){
        final = user_val.split("S")
        console.log("s",final)
      }else{
        final = user_val.split("A")
      }
      router.push(`acadmics/${final[1]}`)
    }
  }


  return (
    <div className={styles.sliderDiv}>
        <div className={styles.loginUser}>
          <FaUserAlt size = '25px'/><br />
          {Cookies.get("user")}
        </div>

        <div className={styles.sliderData}>
           <div className={styles.sectionCon}>Profile</div><br/>
           <div className={styles.sectionCon} onClick={() => acadmics_page()}>Acadmics</div><br/>
           <div className={styles.sectionCon} onClick={() => logout()}>logout</div><br/>
           
        </div>

        <div className={styles.closeSlider} onClick={() => setVisibility(prev => ({...prev, slider:false}) )}>
          <MdClose  size={30}/>
        </div>

    </div>
  )
}

export default Slider