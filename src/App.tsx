import React from 'react';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import LoggingPage from './Pages/loggingPage/LoggingPage';
import StartUp from './Components/startup/StartUp';
import useSettingUp from './Hooks/useSettingUp';
import MainPage from './Pages/mainPage/mainPage';
const App:React.FC = ()=>{
  const settingUp = useSettingUp();
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<StartUp />} />
          <Route path='/accounts/*' element={<LoggingPage />} /> 
          <Route path='mainpage' element={<MainPage />}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;
