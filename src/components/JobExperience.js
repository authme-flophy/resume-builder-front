import React, { useState } from "react";
import "./JobExperience.scss";
import { useNavigate } from "react-router-dom";

function JobExperience() {
  const [jobTitle, setJobTitle] = useState('')
  const [employerName, setEmployerName] = useState('')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const experience = { jobTitle, employerName }
    console.log(experience)
    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(experience)
    })
    .then(r => {
      if(r.ok) {
        r.json()
        .then( r => {
          console.log(r)
          alert ('Details updated successfully')
          navigate('/home') /* update root accordingly */
        })
      }
      else {
        r.json().then(err => {
          setErrors(err.errors)
          alert ('Errors')
        })
      }
    })
    setJobTitle('')
    setEmployerName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title: <br /> 
        <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
      </label>
      <label>
        Employer Name: <br /> 
        <input type="text" value={employerName} onChange={e => setEmployerName(e.target.value)} />
      </label>
      { errors ? errors.map(error => (<h3 style={{color: 'red', fontStyle: 'italic'}} key={error}>{error}</h3>)) : null }    
    </form>
  )
}

export default JobExperience;
