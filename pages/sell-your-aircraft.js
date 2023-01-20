import React, { useState } from 'react'
import Head from 'next/head'
import { Link } from "react-router-dom";

const sellYO = () => {
  const [inputs, setInputs] = useState({
		name: '',
		number: '',
    email: '',
    title: '',
		message: '',
	})
  const [form, setForm] = useState('')

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmitForm = async (e) => {
		e.preventDefault()

		if (inputs.name && inputs.number && inputs.email && inputs.title && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})

				const { error } = await res.json()

				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}

				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setInputs({
					name: '',
          number: '',
          email: '',
					title: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}

    
  return (
    <div className="content-container">
         <Head>
        <title>Sell Your Airraft | Skywagons.com</title>
        <meta property="og:title" content="Sell Your Airraft | Skywagons.com" key="title" />
   
      </Head>
        <h1 className="text-xl p-8">Sell Your Aircraft</h1>
        <div className="px-8 leading-loose">
          <h1 className="text-md font-bold">SELLING YOUR AIRCRAFT ON CONSIGNMENT</h1>
          <p className="text-xs pb-4">We can sell your aircraft for you.</p>
          <p className="text-xs">Please contact us for specific details, however we offer the following service.</p>
          <ol className="text-sm py-4 leading-loose">
            <li>1. <span className="font-bold">We have the experience</span> and the time to sell your aircraft because we are here 7 days a week and advertise globally.</li>
            <li>2. <span className="font-bold">We have been doing this for 20 years</span> and know the market and the pricing.</li>
            <li>3. <span className="font-bold">We have the ability,</span> right here at Placerville to touch-up and recondition paint and are able to offer a full detailing service at cost. Both these add considerable value and help with the sale.</li>
            <li>4. <span className="font-bold">We offer a Brokerage Service</span> for 8% of the sales price. *For the most efficient service, the aircraft should be here at Placerville as we have many walk in customers and we want to be accurate in our advertising, so we like to have seen it.</li>
          </ol>
          <h1 className="text-md font-bold pt-8">PURCHASING YOUR AIRCRAFT</h1>
          <p className="text-xs pb-4">We Buy your aircraft.</p>
          <p className="text-xs">We at Skywagons.com specialize in Single Engine Utility Aircraft. If you would like to sell your aircraft to us, here are a few reasons why it is good to do so.</p>
          <ol className="text-sm py-4 leading-loose">
            <li>1. <span className="font-bold">WE PAY CASH IMMEDIATELY!</span> We do not finance a purchase.</li>
            <li>2. <span className="font-bold">LIABILITY.</span> The liability shifts to us after we have bought your plane.</li>
            <li>3. <span className="font-bold">TIME WASTERS.</span> You don’t have to waste time or money advertising your airplane or showing it all weekend to a first time buyer who can’t make up his mind or doesn't know what he is looking at. We can even agree to buy an aircraft over the phone! You don't even have to wash it.</li>
            <li>4. <span className="font-bold">CONTACT US.</span> Call us toll free at 1-800-759-9466 or 530-642-2806. International call 001-530-642-2806. Email: mark@skywagons.com Remember, We can pay cash immediately, no financing when we buy a plane from you.</li>
          </ol>
          <h1 className="text-md font-bold pb-4">AIRCRAFT APPRAISAL $100 JUST FOR AN APPRAISAL AND FREE IF WE BUY OR SELL THE AIRPLANE.
</h1>
        </div>
            <form className="px-8"  onSubmit={(e) => onSubmitForm(e)}>
                <div className="block py-4">
                    <label for="name" className="block text-md font-thin leading-loose text-black">
                            Name*:</label>
                    <input 
                        type="text" 
                        id="name"
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder="Your name" 
                        required 
                        className="block text-xs p-2 border-2 border-gray-300 h-6 w-96" />
                </div>
                <div className="block py-4">
                    <label for="name" className="block text-md font-thin leading-loose text-black">
                            Phone number*:</label>
                    <input 
                        type="text" 
                        id="number"
                        value={inputs.number}
                        onChange={handleChange}
                        placeholder="Your phone number" 
                        required 
                        className="block text-xs p-2 border-2 border-gray-300 h-6 w-96" />
                </div>
                <div className="block py-4">
                    <label for="name" className="block text-md font-thin leading-loose text-black">
                            E-mail*:</label>
                    <input
                        required  
                        type="text" 
                        id="email" 
                        value={inputs.email}
                        onChange={handleChange} 
                        placeholder="Your e-mail address" 
                        
                        className="block text-xs p-2 border-2 border-gray-300 h-6 w-96" />
                </div>
                <div className="block py-4">
                    <label for="name" className="block text-md font-thin leading-loose text-black">
                            Title*:</label>
                    <input 
                        type="text" 
                        id="title"
                        value={inputs.title}
                        onChange={handleChange} 
                        placeholder="Aircraft you would like to sell" 
                        required="true"
                        className="block text-xs p-2 border-2 border-gray-300 h-6 w-full" />
                </div>
                <div className="block py-4">
                    <label for="message" className="block text-md font-thin leading-loose text-black">Description:</label>
                    <textarea 
                        id="message"
                        value={inputs.message}
                        onChange={handleChange} 
                        placeholder="Airframe, Avionics, Interior, Exterior, History, Etc." 
                        className="block text-xs border-2 border-gray-300 h-36  p-2 w-full"
                        required />
                </div>
                
                <input type='submit' id="submit" value="SUBMIT" className="px-2 cursor-pointer font-semibold text-xl pb-6" />
                  {form.state === 'loading' ? (
                    <div>Sending....</div>
                  ) : form.state === 'error' ? (
                    <div>{form.message}</div>
                  ) : (
                    form.state === 'success' && <div>Sent successfully</div>
                  )}
            </form>
                <div>
                  </div>      
    </div>
  )
}

export default sellYO