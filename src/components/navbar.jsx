import YTLogo from '../images/YTLogo.png'
import notification from '../images/notification.png'
import video from '../images/video.png'
import '../styles/navbar.css'

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
                <div className="notification">
                    <img width={35} src={video} alt="" />
                </div>
                <div className="video">
                    <img width={35} src={notification} alt="" />
                </div>
                <div className="profile">
                    <h4>S</h4>
                </div>
            </div>
        </div>
    )
}
export default Navbar;