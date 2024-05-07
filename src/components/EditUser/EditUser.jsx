import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectCurrentToken, selectCurrentUser } from '../../Redux/authSlice';

//import './edituser.scss';

function EditUser() {

   const dispatch = useDispatch();

   const token = useSelector(selectCurrentToken);
   const user = useSelector(selectCurrentUser);
   //const firstname = useSelector((state) => state.name.firstname);
   //const lastname = useSelector((state) => state.name.lastname);

   const [showForm, setShowForm] = useState(false);
   const [newUsername, setNewUsername] = useState('');

   const toggleForm = () => {
      setShowForm(!showForm);
   };

   const handleInputChange = (event) => {
      setNewUsername(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName: newUsername }),
         })
            .then(response => response.json())
            .then(data => {

               if (response.ok) {
                  console.log(response);
                  dispatch(setUser(data.body));


               } else {
                  console.error('Erreur lors de l envoi du nouveau nom d utilisateur');
               }
            })
      } catch (error) {
         console.error('Erreur lors de la requête :', error);
      }
      setNewUsername('');
      setShowForm(false);
   };

   useEffect(() => {
      setNewUsername(user);
   }, [user]);

   return (
      <>
         <main className="main bg-dark">
            <div className="header">
               <i className="fa fa-user-circle sign-in-icon"></i>
               <h1>Welcome back {user?.firstname} {user?.lastname}!</h1>

               {!showForm && (
                  <button className="edit-button" onClick={toggleForm}>Edit name</button>
               )}
            </div>
         </main>

         {showForm && (
            <form className="account-form" onSubmit={handleSubmit}>
               <label>First Name:</label>
               <input type="text" value={user.firstname} disabled />

               <label>Last Name:</label>
               <input type="text" value={user.lastname} disabled />

               <label>New Username:</label>
               <input type="text" value={newUsername} onChange={handleInputChange} required />

               <button type="transaction-button" className='transaction-button'>Confirm</button>
            </form>
         )}
         <section className="account">
      <div className="account-content-wrapper">
      <h3 className="account-title">Argent Bank Checking (x8349)</h3> 
      <p className="account-amount">$2,082.79</p>
      <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
      <h3 className="account-title">Argent Bank Savings (x6712)</h3>
      <p className="account-amount">$2,082.79</p>
      <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
      <h3 className="account-title">Argent Bank Checking (x8349)</h3> 
      <p className="account-amount">$2,082.79</p>
      <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
      </>
   );
}

export default EditUser;