import { BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import './Header.css'

// import Store from '../pages/store'
import Header from './Header';

function App() {

  return (
    <Router>
      <>
        <Header />     
      </>
    </Router>      
  );
}

export default App;
