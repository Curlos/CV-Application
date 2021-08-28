const PersonalInfo = ({ personalInfo, handleChangePersonalInfo }) => {
  
  return (
    <div className="formInfo personalInfo">
      <div>Personal Information</div>
      <input type="text" name="firstName" onChange={handleChangePersonalInfo} placeholder="First name" value={personalInfo['firstName']}/>
      <input type="text" name="lastName" onChange={handleChangePersonalInfo} placeholder="Last name" value={personalInfo['lastName']}/>
      <input type="text" name="title" onChange={handleChangePersonalInfo} placeholder="Title" value={personalInfo['title']}/>
      <input type="text" name="photo" onChange={handleChangePersonalInfo} placeholder="Photo" value={personalInfo['photo']}/>
      <input type="text" name="address" onChange={handleChangePersonalInfo} placeholder="Address" value={personalInfo['address']}/>
      <input type="text" name="phoneNumber" onChange={handleChangePersonalInfo} placeholder="Phone number" value={personalInfo['phoneNumber']}/>
      <input type="text" name="email" onChange={handleChangePersonalInfo} placeholder="Email" value={personalInfo['email']}/>
      <textarea type="text" name="description" onChange={handleChangePersonalInfo} placeholder="Description" value={personalInfo['description']}/>
    </div>
  )
}

export default PersonalInfo;