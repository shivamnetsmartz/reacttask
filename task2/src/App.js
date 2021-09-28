import React, { useState, useEffect } from 'react'
import "./App.css";

const App = () => {

  const [fullname, setFullName] = useState('')

  const [location, setLocation] = useState('')

  useEffect(() => {

    setFullName('shivambhatia')

    setLocation('ludhiana')

  }, [])

  return (

    <div className="App">
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <label className="text1">
            Name:
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            value={fullname}
            onChange={(event) => {
              setFullName(event.target.value)}}/>

          <label htmlFor="location" class="text2">
            Location
          </label>
          <br />
          <input
            type="text"
            value={location}
            onChange={(event) => {

              setLocation(event.target.value)

            }}
          />
             <br />
          <button className="btn btn-info btn-md" onClick={() => { console.log("RESULT >>>>>", fullname, location) }}>Submit</button>
        </div>
      </div>
    </div>

  );
}

export default App;
