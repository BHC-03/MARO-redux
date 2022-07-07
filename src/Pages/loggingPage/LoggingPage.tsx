import React from 'react';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import { Routes , Route ,useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '../../Components/Register/style/Register.css';
const LoggingPage:React.FC = ()=>{
    const location = useLocation();
    return( 
        <div className='pageBody'>
            <AnimatePresence >
                <Routes location={location} key={location.pathname}>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>
                </Routes>
            </AnimatePresence>
        </div>
    )
}


export default LoggingPage;