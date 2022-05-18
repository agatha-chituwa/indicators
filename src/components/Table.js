import React from 'react'
import Indicator from "./Indicator"
import IndicatorGroup from './IndicatorGroup'
import Post from './Post'


function Table() {
  return (

               
              <div className="container">
              <div className="row">
                <div className="col">
                <div>
                      <div className="card" >
                      
                            <div className="card-body">
                              create indicatorGroup
                              <br/>
                              <IndicatorGroup/>
                      
                              </div>
                      </div>
             </div>
                </div>
                <div className="col">
                <div>
                      <div className="card" >
                      
                            <div className="card-body">
                              create indicatorGroupset
                              <Post/>
                      
                              </div>
                      </div>
             </div>
                </div>
             
              </div>
              </div>
             
  )
}

export default Table

