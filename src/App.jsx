import DisplayInfo from './components/displayinfo'
import './styles/App.css'
import Info from './components/Info'
import { useState } from 'react';

function App() {

  const initialFormData = {
    general: {
      name: "",
      email: "",
      phone: ""
    },
    education: {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: null
    },
    practicalExp: []
  }

  const handleFormSubmit = (data, section) => {
    let newFormData;
    if (section == "general")
      newFormData = { ...formsData, general: data };
    else if (section == "education")
      newFormData = { ...formsData, education: data };
    else
      newFormData = { ...formsData, practicalExp: data };

    setFormsData(newFormData);
  }

  const [formsData, setFormsData] = useState(initialFormData);
  return (<div className='mainContainer'>
    <Info setFormsData={handleFormSubmit}></Info>
    <DisplayInfo data={formsData}></DisplayInfo>
  </div>
  )
}

export default App
