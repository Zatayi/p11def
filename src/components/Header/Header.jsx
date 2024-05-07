import { Link } from 'react-router-dom';
import Connect from '../Connect/Connect';
import Logo from '../../assets/img/argentBankLogo.webp';



function Header(){
   
    
   return (
      
      <header>
        
         <nav className="main-nav">

            <Link to="/">
               <img className='main-nav-logo-image' alt='Logo de Argent Bank' src={Logo} />
               
            </Link>
            
            <div>
            <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
            </a>   
            <i className="fa fa-user-circle"/>   
            <Connect />

            
            </div>
            
         </nav>
      </header>
   )
}
 
export default Header