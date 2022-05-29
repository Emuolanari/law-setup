import Link from 'next/link';
import {signOut, useSession} from 'next-auth/react';


export default function NavBar(){
    const status = useSession().status;
    console.log('status',status)

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ml-auto">
            <div className='container'>
                <Link href="/"><a className="navbar-brand">Law Setup</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link">About</a></Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/contact"><a className="nav-link">Contact</a></Link>
                        </li>


                        {status=='authenticated'?(
                            <>
                            <li className="nav-item">
                                <Link href="/lawyerArea"><a className="nav-link">Case Types</a></Link>
                            </li>   

                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>signOut({callbackUrl:'/'})}>Sign Out</button>
                            </li>   
                            </>
                        ):(
                            <>
                                <li className="nav-item">
                                    <Link href="/register"><a className="nav-link">Register</a></Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/signIn"><a className="nav-link">Sign In</a></Link>
                                </li>

                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    )
}