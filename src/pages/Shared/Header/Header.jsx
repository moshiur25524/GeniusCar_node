import { Link } from "react-router-dom"
import logo from '../../../assets/logo.svg'
import { AuthContext } from "../../../contexts/UserContext/UserContext";
import { useContext } from "react";

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(() =>{})
        .catch(err => console.log(err))
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/demo'>Demo</Link></li>
       
    </>
    return (
        <div>
            <div className="navbar bg-base-100 h-20 mb-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="mr-5"> {user?.displayName && user.displayName}</span>
                 {
                    user ? <button onClick={handleLogout} className="btn btn-scondary">LogOut</button> :
                    <button className="btn btn-scondary"> <Link to='/login'>Login</Link></button>
                 }
                </div>
            </div>
        </div>
    );
};

export default Header;