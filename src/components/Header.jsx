import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">User DashBoard</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <NavLink className='px-5 font-medium text-lg' to='/'>Add User</NavLink>
                    <NavLink className='px-5 font-medium text-lg' to='/users'>User List</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;