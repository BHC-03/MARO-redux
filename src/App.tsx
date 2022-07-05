import React from 'react';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import LoggingPage from './Pages/LoggingPage';
import StartUp from './Components/startup/StartUp';
const App:React.FC = ()=>{
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<StartUp />} />
          <Route path='/accounts/*' element={<LoggingPage />} /> 
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;
