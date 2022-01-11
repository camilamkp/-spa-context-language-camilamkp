import React, { useState } from 'react';

import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import LanguageContext from './LanguageContext';

function App() 
{

  const [ language, setLanguage ] = useState('das ist auf deutsch');

  const value = { language, setLanguage };

  return (
    <div className="App">
      <LanguageContext.Provider value={ value }>
      <Header />
      <Content />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
