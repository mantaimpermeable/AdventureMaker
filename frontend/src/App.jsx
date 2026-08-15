import { Route, Routes } from 'react-router-dom'
import { Generator, HomePage, UserHomePage, Register, Login }  from './pages/index';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/user" element={<UserHomePage />} />
      <Route path="/user/adventure" element={<Generator />}/>
    </Routes>
    </>
  );
}

export default App;