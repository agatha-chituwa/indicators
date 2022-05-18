import React, {useEffect, useState} from 'react'
import base64 from 'react-native-base64';
import Indicator from './Indicator';


function IndicatorGroup() {
 
    const [name, setName] = useState("");
  
    const [indicators, setindicator] = useState([]);
   
//this method is to fetch indicators

    const [dataElement, getDataElement] = useState([]);

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
  

    function createIndicator (e) {
       
        // console.warn({name,shortName,indicatorGroup});
        const data = {name, indicators:[{id:indicators}]}
        fetch("https://play.dhis2.org/dev/api/indicatorGroups", {
            method: "POST",
            headers: {
                'Accept':'application/json',
                "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district"),
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log("result", result);
        
        })
       
    }
  return (
    <div>
       
        
        <form action="">
            <input type="text" value={name}
            placeholder="name" required="required"
            onChange={(e)=>{setName(e.target.value)}}
            name="name" />
            <br/>
            <br/>
         
            select indicators
            <br/>

            {/* drop down box to select indicators from */}
                        <div class="input-group">
            <form className='d-flex mt-1' >
            <select class="form-select" id="inputGroupSelect04" 
            value={indicators} onChange={e=>setindicator(e.target.value)}
            aria-label="Example select with button addon">
            <option></option>
            {dataElement.map(data => (

            <option value={data.id} onChange={e => e.target.value}>

            {data.displayName}

            </option>
            ))}
            </select>

            </form>

            </div>
           
           
            <br/> <br/> 
            <button type='submit' onClick={createIndicator}>
                create</button>
           
        </form>
         
    </div>
  )
}

export default IndicatorGroup