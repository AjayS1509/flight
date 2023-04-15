
// import styles from '../styles/Home.module.css'
import Header from '../components/Header/header'
import ImageSlider from '../components/HomeContent/home';
import { Overlay } from '../components/Overlay/overlay';

export default function Index(){
  
  return(
    <>
    <Header />
    <br />
    <br />
    <ImageSlider />

    <style jsx global>
        {`body,html{
          background: #f1f2f6;;
        }`}
    </style>
    </>
  )
}
