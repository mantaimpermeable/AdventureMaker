import { Route, Routes } from 'react-router-dom'
import Generator from './pages/Generator.jsx';
function App() {

  return (
    <>
    <Routes>
      <Route path="/adventure" element={<Generator />}/>
    </Routes>
    </>
  );
}

export default App;