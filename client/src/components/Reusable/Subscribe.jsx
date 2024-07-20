import React, { useState } from 'react'

const Subscribe = () => {
  const [inputEmail, setInputEmail] = useState();

  const validate = () => {
    let alerts = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputEmail.trim() || !emailRegex.test(inputEmail)) {
      alerts.push('Enter a valid email address');
    }

    return alerts; // Return the alerts array directly
  }

  // Function to update user details
	const SubscribeNewsletter = async event => {
		event.preventDefault();

		const validationAlerts = validate(); // This now directly receives the alerts array
		if (validationAlerts.length > 0) {
			// Show the alert with the immediate errors returned by the validate function
			alert(`Please correct the following errors:\n- ${validationAlerts.join('\n- ')}`);
			return; // Stop the function if there are errors
		}

    try {
      alert("Email Subscribed");
		} catch (err) {
			console.log('ERROR Subscribing to email!');
		}
	};

  return (
    <div className='w-full px-4 pt-4 pb-2 mb-4 rounded-3xl border-2 border-gray-300 flex flex-col text-center gap-1'>
      <p className='font-bold text-2xl'>Subscribe</p>
      <p className='text-xl'>to our newsletter to get the latest</p>
      <p className='text-xl'>updates and news</p>
      <input
        onChange={(event) => setInputEmail(event.target.value)}
        type='email'
        className='rounded-full border border-gray-300 w-4/5 mx-auto my-2 px-4 py-2 text-xl'
        placeholder='Enter your email'
      />
      <button
        onClick={SubscribeNewsletter}
        className='rounded-full border border-gray-300 w-2/5 mx-auto mb-4 px-4 py-2 text-xl bg-froker-orange text-white'
      >Subscribe</button>
      <img
        className='w-full '
        src="/froker_subscribe.png"
        alt="Subscribe to froker newsletter"
      />
    </div>
  )
}

export default Subscribe