const Education = ({ education, handleChangeEducation }) => {
  
  return (
    <div className="formInfo experience">
      <div>Education</div>
      <input type="text" name="universityName" onChange={handleChangeEducation} placeholder="University name" value={education['universityName']}/>
      <input type="text" name="city" onChange={handleChangeEducation} placeholder="Company" value={education['city']}/>
      <input type="text" name="degree" onChange={handleChangeEducation} placeholder="City" value={education['degree']}/>
      <input type="text" name="from" onChange={handleChangeEducation} placeholder="From" value={education['from']}/>
      <input type="text" name="to" onChange={handleChangeEducation} placeholder="To" value={education['to']}/>
    </div>
  )
}

export default Education;