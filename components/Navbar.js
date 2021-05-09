import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <Image src="/logo.png" width={30} height={24} className="d-inline-block align-text-top" />
                        Eventor Managements
                    </a>
                </Link>
                <div className="ml-lg-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMain">
                        <div className="navbar-nav">
                            <Link href='/'><a className="nav-link px-3 mt-3 mt-lg-0" aria-current="page">Home</a></Link>
                            <Link href='/info'><a className="nav-link px-3 mt-1 mt-lg-0" >Event Info</a></Link>
                            <Link href='/participants'><a className="nav-link px-3 mt-1 mt-lg-0">Participants</a></Link>
                            {/* <Link href='/budgets'><a className="nav-link px-3 mt-1 mt-lg-0">Budgets</a></Link> */}
                            <Link href='/workflow'><a className="nav-link px-3 mt-1 mt-lg-0">Workflow</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;