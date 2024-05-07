import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logOut, setUser, selectCurrentToken, selectCurrentUser } from '../../Redux/authSlice';




function Connect() {

   const dispatch = useDispatch();

   const token = useSelector(selectCurrentToken); // Récupération du token ds Redux
   const user = useSelector(selectCurrentUser);
   // console.log("DEBUG RECUP STATE" + token);

   const handleLogout = () => {
      dispatch(logOut());
   };

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
   }, [dispatch, token]);

   return (
      <>
         {user?.username ? (
            <div className='main-nav'>
               <button className='btn-user' onClick={handleLogout}>Sign out</button>
               <NavLink className='btn-user' to="/user">
                  <i className="fa fa-user-circle"></i>
                  <p>{user.username}</p>
               </NavLink>
            </div>
         ) : (
            <div className='main-nav'>
               <NavLink className='btn-user' to="/signin">
                  <p>Sign In</p>
               </NavLink>
            </div>

         )}
      </>
   )
}

export default Connect