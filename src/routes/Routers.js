import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import MintPages from '../pages/Mintpages';



const Routers = () => {
    return (<Routes>
        <Route path='/' element={<Navigate to ='/home'/>} />
        <Route path='/home' element={< Home/>}  />
        <Route path='/mintpages' element={< MintPages/>}  />



    </Routes>
    );
};

export default Routers;