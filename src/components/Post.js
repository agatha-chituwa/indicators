import React, {useEffect, useState} from 'react'
import base64 from 'react-native-base64';

function Post() {
    const [name, setName] = useState("");
    const [shortName, setShortName] = useState("");
    const [indicatorGroups, setindicarGroup] = useState([]);
    const [dataindicatorGroups, setdataindicarGroup] = useState([]);

    const getData = async () =>{
        try {
            const response = await fetch("https://play.dhis2.org/dev/api/indicatorGroups", {
              headers: {
               
                "Accept": "application/json",
                
                "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district")
                
                }
            })
            const jsonData = await response.json();
    
    
            setdataindicarGroup(jsonData.indicatorGroups);
            console.log(jsonData.indicatorGroups);
        } catch (err) {
            console.error(err.message);
            
        }
     }


     //just for practice sake

     const postData = async () =>{
        try {
            const response = await fetch("https://play.dhis2.org/dev/api/indicatorGroups", {
              headers: {
               
                "Accept": "application/json",
                
                "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district")
                
                }
            })
            const jsonData = await response.json();
    
    
          
            console.log(jsonData.indicatorGroups);
        } catch (err) {
            console.error(err.message);
            
        }
     }
//just for practice sake
    useEffect(() => {
        getData();
        postData();
    }, []);



    function createIndicator (e) {
        e.preventDefault();
        // console.warn({name,shortName,indicatorGroup});
        const data = {name,shortName,indicatorGroups:[{id:indicatorGroups}]}
        fetch("https://play.dhis2.org/dev/api/indicatorGroupSets", {
            method: "POST",
            headers: {
                'Accept':'application/json',
                "Authorization": 'Basic ' + base64.encode("admin" + ":" + "district"),
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log("result", result)
        })
       
    }
  return (
    <div>
        <form action="">
            <input type="text" value={name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder="name"
            name="name" />
            <br/>
            <br/>
            <input type="text" value={shortName}
            placeholder="shortName"
            onChange={(e)=>{setShortName(e.target.value)}}
            name="name" />
            <br/>
            <br/>
            {/* <input type="text" value={indicatorGroup}
            onChange={(e)=>{setindicarGroup(e.target.value)}}
            name="indicatorGroup"/> */}

            select indicatorGroup
            <br/>
            <select class="form-select" id="inputGroupSelect04" 
                    value={indicatorGroups} onChange={e=>setindicarGroup(e.target.value)}
                    aria-label="Example select with button addon">

                    {dataindicatorGroups.map(data => (

                    <option value={data.id} onChange={e => e.target.value}>

                    {data.displayName}

                    </option>
                    ))}
                    </select>
            <br/> <br/> 
            <button type='submit' onClick={createIndicator}>
                create</button>
           
        </form>

<table class="table">
  <thead>
    <tr>
    {dataindicatorGroups.map(data => (

<th value={data.id} onChange={e => e.target.value}>

{data.displayName}
</th>
))}
   
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

         
    </div>
  )
}

export default Post