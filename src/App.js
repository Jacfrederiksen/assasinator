import './App.scss';
import StartScreen from './pages/startscreen/StartScreen'
import { Routes, Route } from "react-router-dom";
import PlayerScreen from './pages/playerscreen/PlayerScreen';
import ErrorScreen from './pages/errorscreen/ErrorScreen';

function App() {

  return (
    
    <div className='app_con'>
      <Routes>
        <Route index element={<StartScreen/>}/>
        <Route path="playerscreen" element={<PlayerScreen/>}/>
        <Route path="errorscreen" element={<ErrorScreen/>}/>
      </Routes>
    </div>
    
   
  );
}

export default App;
