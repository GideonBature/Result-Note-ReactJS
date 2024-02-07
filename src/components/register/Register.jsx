import React, { useState } from 'react';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    adminName: '',
    schoolName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Function to handle the next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your final form submission logic
    console.log('Form data submitted:', formData);
  };

  const isFirstStepComplete = formData.adminName && formData.schoolName && formData.email;

  // Render form based on the current step
  switch (currentStep) {
    case 1:
      return (
        <div className="h-screen w-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-kumbh mx-auto">Welcome, create your school account</h2>
          <div className="max-w-xl w-full space-y-8  bg-white m-10 h-auto  p-8 rounded-md mx-auto">
            <p className="mt-6 text-center text-2xl text-gray-500 font-kumbh px-20">It is our great pleasure to have you on board!</p>
            <form className="mt-8 space-y-6 mx-auto text-center px-20">
              <div>
                <label htmlFor="adminName" className="block text-sm font-medium text-gray-900 sr-only">Admin Name</label>
                <input required type="text" name="adminName" value={formData.adminName} onChange={handleChange} className="input mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900" placeholder='Enter the name of Admin'/>
              </div>
              <div>
                  <label htmlFor="schoolName" className="block text-sm font-medium text-gray-900 sr-only">School Name</label>
                  <input required type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} className="input mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900" placeholder='Enter the name of the School' />
              </div>
              <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 sr-only">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="input mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900" placeholder='Enter the School email' />
              </div>
                    <button type="button" onClick={nextStep} className="btn-next w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={!isFirstStepComplete} >Next</button>
            </form>
          </div>
        </div>
      );
    case 2:
      return (

        <div className="h-screen w-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-kumbh mx-auto">Welcome, create your school account</h2>
          <div className="max-w-xl w-full space-y-8  bg-white m-10 h-auto  p-8 rounded-md mx-auto">
            <p className="mt-6 text-center text-2xl text-gray-500 font-kumbh px-20">It is our great pleasure to have you on board!</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6 mx-auto text-center px-20">
          <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 sr-only">Password</label>
              <input required type="password" name="password" value={formData.password} onChange={handleChange} className="input mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900" placeholder='Enter the password' />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 sr-only">Confirm Password</label>
              <input required type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="input mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900" placeholder='Confirm the password' />
              {formData.password !== formData.confirmPassword && (
                <p className="text-red-500">Passwords do not match!</p>
              )}
            </div>
            <button type="submit" className="btn-submit btn-next w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={formData.password !== formData.confirmPassword}>
              Submit
            </button>
        </form>
          </div>
        </div>

      );
    default:
      return null;
  }
};

export default Register;
