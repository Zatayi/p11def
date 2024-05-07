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
               
            <Connect />

            </div>
            
         </nav>
      </header>
   )
}
 
export default Header