import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectCurrentToken, selectCurrentUser } from '../../Redux/authSlice';

//import './edituser.scss';

function EditUser() {

   const dispatch = useDispatch();

   const token = useSelector(selectCurrentToken);
   const user = useSelector(selectCurrentUser);

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

      return fetch('http://localhost:3001/api/v1/user/profile', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ userName: newUsername }),
      })
         .then(response => response.json())
         .then(data => {
            console.log(data);
            dispatch(setUser(data.body));
         }).catch(error => console.error('Erreur lors de la requête :', error))

      // setNewUsername('');
      // setShowForm(false);
   };

   return (
      <>
         <main className="main bg-dark">
            <div className="header">
               <h1>Welcome back {user?.firstName} {user?.lastName}!</h1>

               {!showForm && (
                  <button className="edit-button" onClick={toggleForm}>Edit name</button>
               )}
            </div>
         </main>

         {showForm && (
            <form className="account-form" onSubmit={handleSubmit}>
               <h1>Edit username</h1>
               <div className='form-champs'>
               <div>   
               <label>First Name:</label>
               <input type="text" value={user.firstName} disabled />
               </div>
               <div>
               <label>Last Name:</label>
               <input type="text" value={user.lastName} disabled />
               </div>
               <div>
               <label>New Username:</label>
               <input type="text" placeholder={user?.userName} value={newUsername} onChange={handleInputChange} required />
               </div>
               </div>
               <div className='confirm-form'>
                  <button type="transaction-button" className='transaction-button'>Save</button>
                  <button className='transaction-button' onClick={() => setShowForm(false)}>Cancel</button>
               </div>

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
               <p className="account-amount">$10,928.42</p>
               <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
               <button className="transaction-button">View transactions</button>
            </div>
         </section>
         <section className="account">
            <div className="account-content-wrapper">
               <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
               <p className="account-amount">$184.30</p>
               <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
               <button className="transaction-button">View transactions</button>
            </div>
         </section>
         
      </>
   );
}

export default EditUser;