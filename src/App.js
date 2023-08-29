import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css';


const App = () => {
  const options = [
    { label: 'Action RPG', value: 'ActionRPG' },
    { label: 'JRPG', value: 'JRPG' },
    { label: 'MMORPG', value: 'MMORPG' },
    { label: 'TPP Shooters', value: 'TPPShooters' },
    { label: 'FPP Shooters', value: 'FPPShooters' },
    { label: 'Turn Based', value: 'TurnBased' },
    
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container-fluid'>
     <div className="row mt-4">
      <div className="col-md-12">
      <h1 className=' text-center'>GAME GENRE SELECTOR</h1>
      </div>
     </div>
     <div className="row justify-content-center mt-4">
        <div className="col-md-6">
        <h2 className='fw-bold  p-2'>Pick Your Genre:</h2>
        </div>
      </div>
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <div className="row justify-content-center">
        <div className="col-md-6">
        {selectedOption && <div className='myskill'><h2 className='fw-bold   p-2'>My favourite genre in games is , {selectedOption.label}  </h2></div>}
        </div>
      </div>
     
    </div>
  );
};

export default App;

