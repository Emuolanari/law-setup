import { useState } from 'react';
import Image from 'next/image';
import { faEnvelope, faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Judge from '../assets/judge.jpg'

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isChecked, setIschecked] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(e);
  }
  
  return (
      <section className="" >
         
          <div className="container">
              <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                      <div className=" text-black">
                          <div className="card-body p-md-5">
                              <div className="row justify-content-center">
                                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                      <form className="mx-1 mx-md-4" onSubmit={(e)=>handleSubmit(e)}>
                                          <div className="d-flex flex-row align-items-center mb-4">
                                          <FontAwesomeIcon className="fa-lg me-3 fa-fw" icon={faUser} />
                                              <div className="form-outline flex-fill mb-0">
                                                  <input type="text" id="firstName" name="firstName" className="form-control" onChange={(e)=>setFirstName(e.target.value)} required/>
                                                  <label className="form-label" htmlFor="firstName">First Name</label>
                                              </div>
                                          </div>
                                          <div className="d-flex flex-row align-items-center mb-4">
                                          <FontAwesomeIcon className="fa-lg me-3 fa-fw" icon={faUser} />
                                              <div className="form-outline flex-fill mb-0">
                                                  <input type="text" id="lastName" name="lastName" className="form-control" onChange={(e)=>setLastName(e.target.value)} required/>
                                                  <label className="form-label" htmlFor="lastName">Last Name</label>
                                              </div>
                                          </div>
                                          <div className="d-flex flex-row align-items-center mb-4">
                                          <FontAwesomeIcon className="fa-lg me-3 fa-fw" icon={faEnvelope} />
                                              <div className="form-outline flex-fill mb-0">
                                                  <input type="email" id="email" name="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} required/>
                                                  <label className="form-label" htmlFor="email">Email Address</label>
                                              </div>
                                          </div>
                                          <div className="d-flex flex-row align-items-center mb-4">
                                          <FontAwesomeIcon className="fa-lg me-3 fa-fw" icon={faLock} />
                                              <div className="form-outline flex-fill mb-0">
                                                  <input type="password" id="pwd" name="pwd" className="form-control" onChange={(e)=>setPassword(e.target.value)} required/>
                                                  <label className="form-label" htmlFor="pwd">Password</label>
                                              </div>
                                          </div>
                                          <div className="d-flex flex-row align-items-center mb-4">
                                          <FontAwesomeIcon className="fa-lg me-3 fa-fw" icon={faKey} />
                                              <div className="form-outline flex-fill mb-0">
                                                  <input type="password" name="pwdConfirm" id="pwdConfirm" className="form-control" onChange={(e)=>setPasswordConfirm(e.target.value)} required/>
                                                  <label className="form-label" htmlFor="pwdConfirm">Repeat
                                                      password</label>
                                              </div>
                                          </div>
                                          <div className="form-check d-flex justify-content-center mb-5">
                                              <input className="form-check-input me-2" type="checkbox" value=""
                                                  id="check" defaultChecked={isChecked} onChange={(e)=>setIschecked(e.target.checked)}/>
                                              <label className="form-check-label" htmlFor="check">
                                                  I agree all statements in <a href="#!">Terms of service</a>
                                              </label>
                                          </div>
                                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                              <button type="submit" className="ml-2 btn btn-primary form-control">Register</button>
                                          </div>
                                      </form>
                                  </div>
                                  <div
                                      className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 position-relative">
                                      <Image src={Judge}
                                          className="img-fluid" alt="Sample image" layout='fill' objectFit='contain' priority='true'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
)
}
export default RegisterForm


