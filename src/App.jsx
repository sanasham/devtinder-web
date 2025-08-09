import { BrowserRouter, Route, Routes } from 'react-router';
import Body from './Body';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<h2>About Page</h2>} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div></div>
    </>
  );
}

export default App;
