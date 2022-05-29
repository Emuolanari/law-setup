// import { useState } from 'react';
// import {getCsrfToken, signIn} from "next-auth/react";
// import {useRouter} from "next/router";

// function Login({csrfToken}) {
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSumbit = async (e) => {
//         e.preventDefault();
    
//         const res = await signIn('credentials', {
//           redirect: false,
//           email: email,
//           password: password,
//           callbackUrl: `/lawyerArea`,
//         });
    
//         if (res?.error) {
//           setError(true);
//         } else {
//           router.push('/lawyerArea');
//         }
    
//     }
//     return (
//         <div className="container mt-4 mb-auto">
//             <div className="row justify-content-center">
//                 <div className="">
//                     <form onSubmit={(e)=>handleSumbit(e)}>
//                         <div className="form-group">
//                             <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="email">Email address</label>
//                             <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
//                                 placeholder="Enter email" onChange={()=>setEmail(e.target.value)}/>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="password">Password</label>
//                             <input type="password" className="form-control" id="password" placeholder="Password"
//                                 onChange={()=>setPassword(e.target.value)}/>
//                         </div>
//                         <button type="submit" className="btn btn-primary form-control mt-2">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
//   }

//   export async function getServerSideProps(context) {
//       console.log(context)
//     return {
//       props: {
//         csrfToken: await getCsrfToken(context)
//       },
//     };
//   }

//   export default Login;
  
  