import {getCsrfToken, signIn} from "next-auth/react";
import {useRouter} from "next/router";
import {useState} from "react";


function SignIn({csrfToken}) {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
      callbackUrl: `/lawyerArea`,
    });

    if (res?.error) {
      setError(true);
    } else {
      router.push('/lawyerArea');
    }

  }


  return (
    <div className="container mt-4 mb-auto">
      <div className="row justify-content-center">
        <div className="col-6">
          <form noValidate onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group">
              <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"
                placeholder="Enter email" autoComplete="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" className="form-control"
                autoComplete="current-password" required placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary form-control mt-2">Sign In</button>
            {error && <div className="text-danger p-2">Wrong email or password</div>}
          </form>
        </div>
      </div>
    </div>
       
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)||null,
    },
  };
}

export default SignIn;
