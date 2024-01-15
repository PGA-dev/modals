import React, { useState, useEffect, useRef } from 'react';
// import styles from './ResumeModal.module.css';
import Modal from '../Modal/Modal';
//Saved for 3rd version release, pending modification of original author's design c99rahul (stackblitz)
//Original code from: https://stackblitz.com/edit/stackblitz-starters-tkpczr?file=src%2Fcomponents%2FNewsletterModal%2FNewsletterModal.jsx
const initialNewsletterModalData = {
  email: '',
  digestType: 'weekly',
};

const NewsletterModal = ({ onSubmit, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  const [formState, setFormState] = useState(initialNewsletterModalData);

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
    setFormState(initialNewsletterModalData);
  };

  return (
    <Modal  hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            ref={focusInputRef}
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="digestType">Digest Type</label>
          <select
            id="digestType"
            name="digestType"
            value={formState.digestType}
            onChange={handleInputChange}
            required
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default NewsletterModal;
