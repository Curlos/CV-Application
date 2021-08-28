import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience"
import Education from "./Education"
import PageHelpers from "./PageHelpers"


const Form = ({ personalInfo, experience, education, handleChangePersonalInfo, handleChangeExperience, handleChangeEducation, generatePDF, loadExample, resetInformation}) => {
  return (
    <div>
      <PersonalInfo personalInfo={personalInfo} handleChangePersonalInfo={handleChangePersonalInfo}/>
      <Experience experience={experience} handleChangeExperience={handleChangeExperience}/>
      <Education education={education} handleChangeEducation={handleChangeEducation}/>
      <PageHelpers generatePDF={generatePDF} loadExample={loadExample} resetInformation={resetInformation}/>
    </div>
  )
}

export default Form;