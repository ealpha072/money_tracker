import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Wrapper from './Components/Wrapper';
import Accounts from './Pages/Accounts';

const App = () => {
  return (
    <div className='main-hoder'>
      	<Router>
        	<Routes>
            	<Route path='/' element={<Wrapper componentProp={<Accounts />}/>}></Route>
        	</Routes>
      	</Router>
    </div>
  )
}

export default App
