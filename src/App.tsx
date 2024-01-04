import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './component/main';
import Write from './component/write';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/*' element={<Main />}/>
        <Route path='/write' element={<Write/>}/>
      </Routes>
    </div>


  );
}

export default App;
