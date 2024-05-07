import { Link } from 'react-router-dom';
import Account from '../../components/Account/Account';
import Logo from '../../assets/img/argentBankLogo.webp';



function Header(){
   
    
   return (
      
      <header>
        
         <nav className="main-nav">

            <Link to="/">
               <img className='main-nav-logo-image' alt='Logo de Argent Bank' src={Logo} />
               
            </Link>
            
            <div>
            <i className="fa fa-user-circle"/>   
            <Account />

            
            </div>
            
         </nav>
      </header>
   )
}
 
export default Header