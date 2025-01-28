
import { Link } from "react-router-dom";
import './style.css';

export default function Nav() {
    return (
        <div className="nav_container">
            {/* <h1 className="logo">Candidate Search</h1> */}
            <nav>
                <ul>
                    <li><Link className="nav_link" to="/">Home</Link></li>
                    <li><Link className="nav_link" to="/saved">Saved Candidates</Link></li>
                </ul>
            </nav>
        </div>
    )
}
