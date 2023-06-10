
import React from 'react';

import {Great} from './componants/great';
import Wellcome from './componants/wellcomJS';
import Header from './componants/HeadNav';
import MainPage from './componants/MainPage'
import Fotter from './componants/Fotter';



export default function App() {
  return (
    <div className="ContainerApp">
  
     <Header/>
     <MainPage/>
     <Fotter/>
    </div>
  );
}


