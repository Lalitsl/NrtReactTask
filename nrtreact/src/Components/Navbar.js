import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <a className="navbar-brand fw-bold" href="#">Landing</a>
                        <button className="buyNow" type="submit">Buy Now</button>
                    </div>
                    <a className="fw-bold logoShow fs-5 text-center" href="#" style={{textDecoration : 'none'}}>Landing</a>
                </div>
            </nav>
        </>

    );
}
export default Navbar;