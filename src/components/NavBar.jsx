import './NavBar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Online Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Catalog</a>
                        <a className="nav-link" href="#">Pricing</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;