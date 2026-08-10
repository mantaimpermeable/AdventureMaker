import { Route, Routes } from 'react-router-dom'
import { Generator, HomePage } from './pages/index';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adventure" element={<Generator />}/>
    </Routes>
    </>
  );
}

export default App;