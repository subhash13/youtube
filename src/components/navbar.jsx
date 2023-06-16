import YTLogo from '../images/YTLogo.png'
import notification from '../images/notification.svg'
import video from '../images/video.png'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img width={150} src={YTLogo} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder='Search' />
            </div>
            <div className="userOptions">
                <div className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/add-video">Add Video</Link>
                </div>
                <div className="profile">
                    <h4>S</h4>
                </div>
            </div>
        </div>
    )
}
export default Navbar;