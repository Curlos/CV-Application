import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience"
import Education from "./Education"


const Form = ({ personalInfo, experience, education, handleChangePersonalInfo, handleChangeExperience, handleChangeEducation}) => {
  return (
    <div>
      <PersonalInfo personalInfo={personalInfo} handleChangePersonalInfo={handleChangePersonalInfo}/>
      <Experience experience={experience} handleChangeExperience={handleChangeExperience}/>
      <Education education={education} handleChangeEducation={handleChangeEducation}/>
    </div>
  )
}

export default Form;