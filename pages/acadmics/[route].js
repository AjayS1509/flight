
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/header';
import Cookies from 'js-cookie';
import styles from "./route.module.css";
import { LoginContext } from '../../components/Context_Provider';

const Route = () => {
    const router = useRouter();
    const { loginState } = useContext(LoginContext);
    const data = [
      { 
        name:"test0",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test1",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test2",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test3",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test4",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test5",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test6",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test7",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test8",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test9",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      },
      { 
        name:"test10",
        marks_obtained:{
          english:10,
          math:11,
          biology:12,
          physics:9,
          chemistry:11,
          hindi:15
        },
        max:15
      }
    ]
    const index = router?.query?.route;
    console.log()
    console.log(data[0] != undefined)

  return (
    <>
    <Header/>
     
    <div className={styles.mainDiv}>
      <div className={styles.headDiv}>Welcome {loginState.user}</div>
      {data[10] != undefined ?
      <>
      <div className={styles.acadmicMa}>Acadmics Marks</div>
        <div className={styles.tableDiv}>
        <table className={styles.marksDiv}>
            {/* <th> Subject</th>
            <th>Obtain Marks</th>
            <th>Max marks</th> */}
          <tbody>
            <tr>
              <td> Subject</td>
              <td>Obtain Marks</td>
              <td>Max marks</td>
            </tr>
            <tr>
              <td>English</td>
              <td>{data[index].marks_obtained.english}</td>
              <td>{data[index].max}</td>
            </tr>
            <tr>
              <td>Math</td>
              <td>{data[index].marks_obtained.math}</td>
              <td>{data[index].max}</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>{data[index].marks_obtained.biology}</td>
              <td>{data[index].max}</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>{data[index].marks_obtained.physics}</td>
              <td>{data[index].max}</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>{data[index].marks_obtained.chemistry}</td>
              <td>{data[index].max}</td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>{data[index].marks_obtained.hindi}</td>
              <td>{data[index].max}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </>
      :
      <>
      <div>
        Data not available
      </div>
      </>
      }

    </div>

    <style jsx global>
        {`body,html{
          background: #f1f2f6;;
        }`}
    </style>
    </>
  )}



export default Route;