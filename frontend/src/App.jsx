import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Wrapper from './Components/Wrapper';
import Accounts from './Pages/Accounts';
import Dashboard from './Pages/Dashboard';
import Transactions from './Pages/Transactions';
import Settings from './Pages/Settings';

const App = () => {
  return (
    <div className='main-hoder'>
      	<Router>
        	<Routes>
				<Route path='/' element={<Wrapper componentProp={<Dashboard />}/>}></Route>
            	<Route path='/account' element={<Wrapper componentProp={<Accounts />}/>}></Route>
				<Route path='/transactions' element={<Wrapper componentProp={<Transactions />}/>}></Route>
				<Route path='/settings' element={<Wrapper componentProp={<Settings />}/>}></Route>
        	</Routes>
      	</Router>
    </div>
  )
}

export default App
