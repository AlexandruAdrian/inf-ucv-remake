import React, { useState } from 'react';
import "../styles/admin.css";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Admin = ({ history }) => {
  const [values, setValues] = useState({ Username: '', Password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.Username.length < 1) {
      setError('Username trebuie sa contina  valoare');
    } else if (values.Password.length < 1) {
      setError('Password trebuie sa contina o valoare');
    } else {
      try {
        setIsLoading(true);
        const response = await axios.post('/users/login', {
          username: values.Username,
          pass: values.Password
        });
        const token = response.data.accessToken;
        localStorage.setItem(`Token`, token);
        setIsLoading(false);
        history.push("/");
      } catch (err) {
        setError(err.response.data.message);
        setIsLoading(false);
      }
    }
  }

  const handleBlur = (e) => {
    if (e.target.value.length < 1) {
      setError(`${e.target.name} trebuie sa contina o valoare`);
    }
  }

  const handleFocus = () => {
    setError('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <section className='login'>
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="uname">Username</label>
          <input
            type="text"
            id="uname"
            name="Username"
            placeholder="Ex. alexandru"
            value={values.username}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
          />
          <label htmlFor="pass">Password</label>

          <input
            type="password"
            id="pass"
            name="Password"
            placeholder="********"
            value={values.password}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
          />
          <div className="error-container">
            {error.length > 0 && <p>{error}</p>}
          </div>
          <button onClick={handleSubmit}>
            {isLoading ?
              <FontAwesomeIcon icon="spinner" className="fa-spin 4x" size="lg" />
              :
              'Log In'
            }
          </button>
        </form>
      </div>
    </section>
  )
}

export default Admin;