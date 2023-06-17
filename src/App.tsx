import React from 'react';

import './App.css';
import './Components/InputField';
import InputField from './Components/InputField';
import LabelledInputField from './Components/LabelledInputField';

function App() {
  return (
    <div className="App">
      <InputField placeholder='name' label='Name'/>
      <LabelledInputField placeholder='E-mail ID' label='E-mail'/>
    </div>
  );
}

export default App;
