export default function Login() {
    return (
        <div className="container mt-4 mb-auto">
            <div className="row justify-content-center">
                <div className = "col-md-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary form-control mt-2">Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
  }
  
  