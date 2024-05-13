import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectCurrentToken, setUser } from '../../Redux/authSlice';
import EditUser from '../../components/EditUser/EditUser'
import Account from '../../components/Account/Account';

function User() {
   const dispatch = useDispatch()
   const token = useSelector(selectCurrentToken);
   const navigate = useNavigate();

   useEffect(() => {
      if (token) {
         const fetchData = async () => {
            try {
               const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`,
                  },
               });

               if (response.ok) {
                  const data = await response.json();
                  console.log(data);

                  dispatch(setUser(data.body));

               } else {
                  console.log("Erreur lors de la récupération du profil de l'utilisateur");
               }
            } catch (error) {
               console.log("Erreur lors de la récupération du profil de l'utilisateur");
            }
         };

         fetchData();

      }
      if (!token) {
         navigate("/signin");
      }
   }, [token, navigate, dispatch]);

   return (

      <main className="main bg-dark">

         <EditUser />
         <Account />
      </main>

   )
}

export default User