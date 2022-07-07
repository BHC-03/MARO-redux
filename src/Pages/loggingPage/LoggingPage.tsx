import React from 'react';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import { Routes , Route ,useLocation} from 'react-router-dom';
import {useAppSelector} from '../../Hooks/ReduxHooks';
import { AnimatePresence } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import useIsLogged from '../../Hooks/useIsLogged';
import '../../Components/Register/style/Register.css';
const LoggingPage:React.FC = ()=>{
    const loading = useAppSelector(state=> state.loading);
    const islogged = useIsLogged();
    const location = useLocation();
    if(loading){
        return <div className='pageBody'>Loadiiiiiiing</div>
    }
    if(!loading && islogged){
        return <Navigate to={'/mainpage/'}/>
    }
    return(<>
        {!loading && 
        <div className='pageBody'>
            <AnimatePresence >
                <Routes location={location} key={location.pathname}>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>
                </Routes>
            </AnimatePresence>
        </div>
    }
    </>
    )
}


export default LoggingPage;