import Link from 'next/link';
import {signOut, useSession} from 'next-auth/react';

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";


export default function NavBar(){
    const status = useSession().status;
    console.log('status',status)

    return(
        // <nav className="navbar navbar-expand-lg navbar-light bg-light ml-auto">
        //     <div className='container'>
        //         <Link href="/"><a className="navbar-brand">Law Setup</a></Link>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse"
        //             data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        //             aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item" >
        //                     <Link href="/"><a className="nav-link">Home</a></Link>
        //                 </li>

        //                 <li className="nav-item">
        //                     <Link href="/about"><a className="nav-link">About</a></Link>
        //                 </li>

        //                 <li className="nav-item">
        //                     <Link href="/contact"><a className="nav-link">Contact</a></Link>
        //                 </li>


        //                 {status=='authenticated'?(
        //                     <>
        //                     <li className="nav-item">
        //                         <Link href="/lawyerArea"><a className="nav-link">Case Types</a></Link>
        //                     </li>   

        //                     <li className="nav-item">
        //                         <button className="nav-link" onClick={()=>signOut({callbackUrl:'/'})}>Sign Out</button>
        //                     </li>   
        //                     </>
        //                 ):(
        //                     <>
        //                         <li className="nav-item">
        //                             <Link href="/register"><a className="nav-link">Register</a></Link>
        //                         </li>

        //                         <li className="nav-item">
        //                             <Link href="/signIn"><a className="nav-link">Sign In</a></Link>
        //                         </li>

        //                     </>
        //                 )}

        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Law Setup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                        <Nav.Link as={Link} href="/"><a className="nav-link">Home</a></Nav.Link>
                        <Nav.Link as={Link} href="/about"><a className="nav-link">About</a></Nav.Link>
                        <Nav.Link as={Link} href="/contact"><a className="nav-link">Contact</a></Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        {status=='authenticated'?(
                        <>
                            <li className="nav-item">
                                <Nav.Link as={Link} href="/lawyerArea"><a className="nav-link">Case Types</a></Nav.Link>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>signOut({callbackUrl:'/'})}>Sign Out</button>
                            </li>
                        </>
                        ):(
                        <>
                            <li className="nav-item">
                                <Nav.Link as={Link} href="/register"><a className="nav-link">Register</a></Nav.Link>
                            </li>

                            <li className="nav-item">
                                <Nav.Link as={Link} href="/signIn"><a className="nav-link">Sign In</a></Nav.Link>
                            </li>

                        </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


