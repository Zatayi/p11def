import { Link } from 'react-router-dom';
import Logo from '../../assets/img/argentBankLogo.webp';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, logOut } from '../../Redux/authSlice';


function Header() {
   const dispatch = useDispatch()
   const user = useSelector(selectCurrentUser)

   return (

      <header>

         <nav className="main-nav">

            <Link className='main-nav-logo' to="/">
               <img className='main-nav-logo-image' alt='Logo de Argent Bank' src={Logo} />
            </Link>

            <div>
               <div>
                  <Link
                     className="main-nav-item"
                     to={user ? '/user' : '/signin'}
                  >
                     <i className="fa fa-user-circle"></i>
                     {user ? user.userName : 'Sign In'}
                  </Link>
                  {user ? (
                     <Link
                        className="main-nav-item"
                        to="/"
                        onClick={() => dispatch(logOut())}
                     >
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                     </Link>
                  ) : (
                     <></>
                  )}
               </div>

            </div>

         </nav>
      </header>
   )
}

export default Header