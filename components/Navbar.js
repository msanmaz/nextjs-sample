import Link from 'next/link';


const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">Portfolio</a>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link href="/"><a class="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/galeria"><a class="nav-link">Gallery</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact"><a class="nav-link">Contact</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/about"><a class="nav-link">About</a></Link>
                </li>
            </ul>
        </div>
    </nav>

)

export default Navbar
