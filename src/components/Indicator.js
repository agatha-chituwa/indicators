import React, { useEffect, useState } from 'react'
import axios from 'axios'
import base64 from 'react-native-base64';


    

function Indicator() {


  const [selects, setSelects] = useState();
  const [dataElement, getDataElement] = useState([]);



  
  const [indicator, setIndicators] = useState("hey");

  const getData = async () =>{
    try {
        const response = await fetch("https://play.dhis2.org/dev/api/indicators", {
          headers: {
           
            "Accept": "application/json",
            
            "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district")
            
            }
        })
        const jsonData = await response.json();


        getDataElement(jsonData.indicators);
        
    } catch (err) {
        console.error(err.message);
        
    }
 }
  

    useEffect(() => {
      getData();
    }, []);


  return (
    <div>

    {/* <h1>{selects}</h1> */}

<div class="input-group">
<form className='d-flex mt-1' >
<select class="form-select" id="inputGroupSelect04" 

 aria-label="Example select with button addon">

{dataElement.map(data => (

<option value={data.id} onChange={e => e.target.value}>

{data.displayName}

</option>
))}
</select>

</form>

</div>



    </div> 
  )
}

export default Indicator




// import React from 'react'

//    const api = axios.create({
//         base_url: "https://play.dhis2.org/dev/api"
//     })

//     // export const getUser = () =>{
//     //     api.get('https://play.dhis2.org/dev/api/33/2ww2kdimensions.dimensions', {
//     //         headers: {
             
//     //          "Accept": "application/json",
             
//     //          "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district")
             
//     //          }
//     //      }).then(res => res.json());
//     // }
    
//     export const getUser = () =>{
//         fetch('/dataElements', {
//             headers: {
             
//              "Accept": "application/json",
             
//              "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district")
             
//              }
//          })
//         .then(response => response.json())
//         .then(data => console.log(data.dataElements));
       
//       };

//     export const getUserId = (id) =>{
//         api.get(`/dimensions/${id}`).then(res => res.data);
//     }

//     export const getUserInfo = (id, ...updateu) =>{
//         api.put(`/dimensions/${id}`, updateu).then((res) => res.data);
//     }

//from here



  // const getData= async () => {
  //     fetch('https://play.dhis2.org/dev/api/indicators', {
  //         headers: {
           
  //          "Accept": "application/json",
           
  //          "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district")
           
  //          }
  //      })
  //     .then(response => response.json())
  //     .then(data => console.log(data.indicators))
  //     .then(data => getDataElement(data.indicators))
  //     .catch(err => {
  //         console.log(err);
  //     });
     
  //   };
    

  //   useEffect(() => {
  //     getData();
  //   }, []);