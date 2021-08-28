import PersonalInfo from "./PersonalInfo";
import Experience from "./PersonalInfo"
import Education from "./Education"


const Form = ({ personalInfo, experience, education, handleChangePersonalInfo}) => {
  return (
    <div>
      <PersonalInfo personalInfo={personalInfo} handleChangePersonalInfo={handleChangePersonalInfo}/>
      <Experience experience={experience}/>
      <Education education={education}/>
    </div>
  )
}

export default Form;