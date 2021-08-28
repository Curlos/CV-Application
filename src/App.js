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

  const generatePDF = () => {

  }

  const loadExample = () => {
    setPersonalInfo({
      firstName: 'Rose',
      lastName: 'Kim',
      title: 'Senior Software Developer',
      photo: './assets/rose_kim.png',
      address: '1619 17th St NW, Washington, DC 20009',
      phoneNumber: '987654321',
      email: 'rose.kim@gmail.com',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis venenatis accumsan. Sed eleifend purus a tristique fringilla. Aliquam volutpat, elit et porttitor euismod, felis nisl mollis lectus, eu fermentum odio est sit amet leo. Mauris molestie elit et ex commodo laoreet. Ut accumsan magna vitae justo bibendum, ac egestas nulla bibendum. Quisque suscipit elementum nunc, non faucibus velit porta vitae. Nulla ipsum purus, imperdiet in ornare id, efficitur quis enim. Cras ultricies id urna nec efficitur.",
    })

    setExperience({
      position: 'Software Engineer Intern',
      company: 'Google LLC',
      city: 'Mountain View',
      from: '2017',
      to: '2017',
    })

    setEducation({
      universityName: 'Harvard University',
      city: 'Cambridge',
      degree: 'Bachelor',
      subject: 'Computer Science',
      from: '2016',
      to: '2020',
    })
  }

  const resetInformation = () => {
    setPersonalInfo({
      firstName: '',
      lastName: '',
      title: '',
      photo: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
    })

    setExperience({
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    })

    setEducation({
      universityName: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    })
  }

  return (
    <div className="mainContainer">
      <Header />
      <Form personalInfo={personalInfo} experience={experience} education={education} handleChangePersonalInfo={handleChangePersonalInfo} handleChangeExperience={handleChangeExperience} handleChangeEducation={handleChangeEducation} generatePDF={generatePDF} loadExample={loadExample} resetInformation={resetInformation}/>
      <Preview personalInfo={personalInfo} experience={experience} education={education}/>
    </div>
  );
}

export default App;
