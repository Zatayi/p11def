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
         <Account 
         title="Argent Bank Checking (x8349)"
         amount="$2,082.79"
         description="Available Balance"
         />
         <Account 
         title="Argent Bank Savings (x6712)"
         amount="$10,928.42"
         description="Available Balance"
         />
         <Account 
         title="Argent Bank Credit Card (x8349)"
         amount="$184.30"
         description="Current Balance"
         />
      </main>

   )
}

export default User