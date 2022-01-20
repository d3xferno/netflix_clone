import './navbar.css'
import Logo from './Logo.png'
import profile from './images.jpeg'
import search from './search.png'
import bell from './bell.jpg'

function NavBar() {
  return (
      <div className="flex bg-black text-white p-2">
        <div className="">
          <img alt='loading...' src={Logo} className="logo hover:cursor-pointer"/>
        </div>
        <div className="flex justify-end w items-center">
          <img src={search} className="search px-3 hover:cursor-pointer" alt="Search"/>
          <img src={bell} className="icons px-3 hover:cursor-pointer" alt='Notification'/>
          <img src={profile} className="profile px-3 hover:cursor-pointer" alt="Profile"/>
        </div>
      </div>
  );
}

export default NavBar;