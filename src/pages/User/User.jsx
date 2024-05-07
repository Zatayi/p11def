import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from '../../Redux/authSlice';
import EditUser from '../../components/EditUser/EditUser'


function User() {
   
   const token = useSelector(selectCurrentToken);
   const navigate = useNavigate();
   useEffect(() => {
      if (!token) {
         navigate("/signin");
      }
   }, [token, navigate]);

   return (
   
      <main className="main bg-dark">

      <EditUser />

   </main>
   
)
}

export default User