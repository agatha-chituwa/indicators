import React, { useEffect, useState } from 'react'
import axios from 'axios'
import base64 from 'react-native-base64';


function Indicator() {

  const [dataElement, getDataElement] = useState([]);



  const getData= async () => {
      fetch('https://play.dhis2.org/dev/api/indicators', {
          headers: {
           
           "Accept": "application/json",
           
           "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district")
           
           }
       })
      .then(response => response.json())
    //  .then(data => console.log(data.indicators))
      .then(data => getDataElement(data.indicators));
      
     
    };

    useEffect(() => {
      getData();
    }, []);
  return (
    <div>

    
        <div class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
   
    {dataElement.map(data => (
      <option selected>{data.displayName}</option>
      ))}
  </select>
  <button class="btn btn-outline-secondary" type="button">Add</button>
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
