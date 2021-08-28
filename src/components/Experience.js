const Experience = ({ experience, handleChangeExperience }) => {
  
  return (
    <div className="formInfo experience">
      <div>Experience</div>
      <input type="text" name="position" onChange={handleChangeExperience} placeholder="Position" value={experience['position']}/>
      <input type="text" name="company" onChange={handleChangeExperience} placeholder="Company" value={experience['company']}/>
      <input type="text" name="city" onChange={handleChangeExperience} placeholder="City" value={experience['city']}/>
      <input type="text" name="from" onChange={handleChangeExperience} placeholder="From" value={experience['from']}/>
      <input type="text" name="to" onChange={handleChangeExperience} placeholder="To" value={experience['to']}/>
    </div>
  )
}

export default Experience;