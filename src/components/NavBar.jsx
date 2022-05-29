import Link from 'next/link';
export default function NavBar(){
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

                        <li className="nav-item">
                            <Link href="/register"><a className="nav-link">Register</a></Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/signIn"><a className="nav-link">Sign In</a></Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}