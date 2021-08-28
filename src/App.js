import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Preview from './components/Preview'
import './style.css';

const App = () => {
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

  const [experience, setExperience] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  })

  const [education, setEducation] = useState({
    universityName: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  })

  const handleChangePersonalInfo = (e) => {
    e.preventDefault()
    const key = e.target.getAttribute('name')
    const value = e.target.value
    const newPersonalInfo = {...personalInfo}
    newPersonalInfo[key] = value
    setPersonalInfo(newPersonalInfo)
  }

  const handleChangeExperience = (e) => {
    e.preventDefault()
    const key = e.target.getAttribute('name')
    const value = e.target.value
    const newExperience = {...experience}
    newExperience[key] = value
    setExperience(newExperience)
  }

  const handleChangeEducation = (e) => {
    e.preventDefault()
    const key = e.target.getAttribute('name')
    const value = e.target.value
    const newEducation = {...education}
    newEducation[key] = value
    setEducation(newEducation)
  }

  return (
    <div className="mainContainer">
      <Header />
      <Form personalInfo={personalInfo} experience={experience} education={education} handleChangePersonalInfo={handleChangePersonalInfo} handleChangeExperience={handleChangeExperience} handleChangeEducation={handleChangeEducation}/>
      <Preview personalInfo={personalInfo} experience={experience} education={education}/>
    </div>
  );
}

export default App;
