import React, { useState, useEffect } from "react";
import { submitComment } from '../services';

const CommentsForm = () => {
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({ 
        name: null, 
        email: null, 
        comment: null});

    const [form, setForm] = useState('')
 
    const onInputChange = (e) => {
        const { target } = e;
        setFormData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
          }))
    };
  
    const handlePostSubmission = () => {
      setError(false);
      const { name, email, comment } = formData;
      if (!name || !email || !comment) {
        setError(true);
        return;
      }
      const commentObj = {
        name,
        email,
        comment
        
      };
  
      submitComment(commentObj)
        .then((res) => {
          if (res.createTestimonial) {
            
            formData.comment = '';
            formData.name = '';
            formData.email = '';
            setFormData((prevState) => ({
              ...prevState,
              ...formData,
            }));
            setShowSuccessMessage(true);
            setTimeout(() => {
              window.location.href="/";
            }, 500);
          }
        });
    };
  
    return (
      <div className="bg-white shadow-lg rounded-md border-2 border-black p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Tell Us What You Think</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea 
                value={formData.comment} 
                onChange={onInputChange} 
                className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
                name="comment" 
                placeholder="Comment" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input 
                type="text" 
                value={formData.name} 
                onChange={onInputChange} 
                className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
                placeholder="Name" 
                name="name" />
          <input 
                type="email" 
                value={formData.email} 
                onChange={onInputChange} 
                className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
                placeholder="Email" 
                name="email" />
        </div>
        
        {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
        <div className="mt-8">
          <button 
                type="button" 
                onClick={handlePostSubmission} 
                className="transition duration-500 ease hover:bg-red-800 bg-red-900 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Testimonial</button>
          {showSuccessMessage && <span className="text-lg float-right font-semibold mt-3 ml-2 text-gray-500">Testimonial submitted for review</span>}
        </div>
      </div>
    );
  };
  
  export default CommentsForm;