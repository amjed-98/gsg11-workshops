import React, { useState } from 'react';

const Form = () => {
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, confirmPassword } = user;

    if (!username.trim().length || !password.trim().length || !confirmPassword.trim().length) {
      setError('empty inputs are not valid');
      return;
    }

    if (password !== confirmPassword) {
      setError('password do not match');
      return;
    }

    setIsSubmit(true);
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setIsSubmit(false);
    setUser({ ...user, [name]: value });
  };

  const handleDeleteUser = () => {
    setUser({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='username' onInput={handleInputChange} />
      <input type='password' name='password' onInput={handleInputChange} />
      <input type='password' name='confirmPassword' onInput={handleInputChange} />
      <button type='submit'>Submit</button>
      <button onClick={handleDeleteUser} type='button'>
        delete
      </button>

      {error && <h3>{error}</h3>}

      {isSubmit && (
        <div>
          <p>username :{user.username}</p>
          <p>password: {user.password}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
