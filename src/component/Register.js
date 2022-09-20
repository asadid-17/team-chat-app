import React from "react";
import "./Register.css";
import cha from '../assets/chat.png'
import {Formik} from 'formik';
import Swal from 'sweetalert2';


const Register = () => {
  
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch( 'http://localhost:5000/user/add', {
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        })       
        console.log(response.status);
        
        if(response.status === 200){
            console.log('user data added!');
            Swal.fire({
                icon : 'success',
                title : 'Well Done',
                text : 'Registered Successfully'
            })
        }

        console.log('request sent');
    }

  return (
    

    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src={cha}
                  className="img-fluid"
                  alt=""
                />
              </div>
      <div className="col-md-9 col-lg-6 col-xl-5 ">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <Formik
                        initialValues={{username: '', email: '', password: '', age: 0}}
                        onSubmit={userSubmit}
                    >
                        {({values, handleSubmit, handleChange}) => (
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="username"
                        className="form-control" onChange={handleChange} value={values.username}
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        className="form-control" onChange={handleChange} value={values.email}
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="pass"
                        className="form-control" 
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="pass"
                        className="form-control" 
                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-dark btn-lg">
                      Sign Up
                    </button>
                  </div>
                </form>
                     )}
                     </Formik>
                
              </div>
              
            
      </div>
    </div>
   
  </section>

  );
};

export default Register;
