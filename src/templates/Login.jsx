import { useRef } from 'react';
import Image from 'next/image';
import Logo from '../assets/logos/logo_yard_sale.svg';
import '../styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <Image src={Logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" name="email" />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className="input input-password" name="password" />
          <button className="primary-button login-button" onClick={handleSubmit}>
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
