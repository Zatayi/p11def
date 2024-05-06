import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from '../../Redux/authSlice';
import EditUser from '../../components/EditUser/EditUser'

function User() {
   
   const token = useSelector(selectCurrentToken);
   const navigate = useNavigate();

   // Si l'utilisateur n'est pas connecté, redirection vers la page de connexion
   useEffect(() => {
      if (!token) {
         navigate("/signin");
      }
   }, [token, navigate]);

   return (
      <main className="main">

         <EditUser />

      </main>
   )
}

export default User