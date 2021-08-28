const PersonalInfo = ({ personalInfo, handleChangePersonalInfo }) => {
  console.log(personalInfo)
  
  return (
    <div>
      <input type="text" id="firstName" onChange={handleChangePersonalInfo}></input>
    </div>
  )
}

export default PersonalInfo;