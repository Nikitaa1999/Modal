import React, { useState } from 'react';
import Modal from 'react-modal';
import validator from 'validator' 


Modal.setAppElement('#root');

const ModalForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');


  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const validationErrors = validateForm();
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    // } else {
    //   console.log("Form Submitted:", { name, email });
    //   closeModal();
    // }
    const isValidPhoneNumber = validator.isMobilePhone(phone);
    console.log(isValidPhoneNumber)
    if(!isValidPhoneNumber){
        alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    else if(new Date(birthdate)>new Date()){
        alert("Invalid date of birth. Date of birth cannot be in future.")
    }
    
    else{
        closeModal();
    }

  };

  return (
    <div className>
    <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
     
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
      <div className='modal'>
      <div className='modal-content'>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" onChange={(e)=>setName(e.target.value)}/>
        </div>
            {/* {errors.name && <span>{errors.name}</span>} */}
          
            <div className="input-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} required />
              </div>
              <div className="input-group">
                <label htmlFor="phoneNo">Phone Number:</label>
                <input type="number" name="phoneNo" id="phone" onChange={(e)=>setPhone(e.target.value)} required />
              </div>
              <div className="input-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" name="dob" id="dob" onChange={(e)=>setBirthdate(e.target.value)} />
              </div>
          
          <button className="submit-button" type="submit">Submit</button>
          
        </form>
        </div>
        </div>
      </Modal>
      
    </div>
  );
};

export default ModalForm;
