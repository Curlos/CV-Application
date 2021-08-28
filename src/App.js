import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Preview from './components/Preview'
import './style.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    title: '',
    photo: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  })
  const [experience, setExperience] = useState({})
  const [education, setEducation] = useState({})

  const handleChangePersonalInfo = (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('id')
    personalInfo
    setPersonalInfo({ })

  }

  return (
    <div className="mainContainer">
      <Header />
      <Form personalInfo={personalInfo} experience={experience} education={education} handleChangePersonalInfo={handleChangePersonalInfo}/>
      <Preview />
    </div>
  );
}

export default App;
