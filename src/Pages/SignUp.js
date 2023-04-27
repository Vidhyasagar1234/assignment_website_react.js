import React, { useState } from 'react';
import FormInput from '../Components/FormInput';
import { Link } from 'react-router-dom';


const SignUp = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special characters!",
      label: "Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"It should be a valid email address!",
      label: "Email",
      required:true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage:"",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      errorMessage:"Password don't Match!",
      label: "ConfirmPassword",
      pattern: values.password,
      required:true
    }
  ]
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(values)
  }
  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className='signup_app'>
      <form>
        <h1>Register <span>Here</span></h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <Link to='/thankyou'><button className='sign_btn' onClick={submitHandle}>SUBMIT</button></Link>
      </form>
    </div>
  )
}
export default SignUp;
