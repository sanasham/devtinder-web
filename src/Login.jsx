import { useState } from 'react';

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', emailId, 'Password:', password);
  };
  return (
    <div className='flex justify-center items-center my-10'>
      <div className='card card-border bg-base-200 w-96 '>
        <div className='card-body'>
          <h2 className='card-title justify-center'>Login</h2>
          <div>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Email ID</legend>
              <input
                type='text'
                className='input'
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              <legend className='fieldset-legend'>Password</legend>
              <input
                type='password'
                className='input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className='card-actions justify-center'>
            <button
              className='btn btn-primary bg-amber-300 '
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
