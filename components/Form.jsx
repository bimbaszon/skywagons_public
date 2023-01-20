import React, { useEffect, useState } from "react";
import { getTitle } from "../services";


const Form = ({ aircraft }) => {

    const [aircrafts, setAircrafts] = useState([]);

    useEffect(() => {
        getTitle().then((result) => {
            setAircrafts(result);
        });
    }, []);

    const [inputs, setInputs] = useState({
		name: '',
		number: '',
        email: '',
        title: `${aircraft.title}`,
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

		if (inputs.name && inputs.number && inputs.email && inputs.title) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`../api/form`, {
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
					title: `${aircraft.title}`,
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
        <div className="border-t-2 border-gray-300">
         <form className="p-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0" onSubmit={(e) => onSubmitForm(e)}>
            <h1 className="font-semibold text-xl pt-4">Interested in this airplane? Contact us!</h1>
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
                    <select className="py-2"
                    type="text" 
                    id="title"
                    value={inputs.title}
                    onChange={handleChange} 
                    >
                        {aircrafts.map((title, index) => (      
                        <option key={index}
                        >{title.title}</option>
                        ))}
                    </select>
                </div>
                <div className="block py-4">
                    <label for="message" className="block text-md font-thin leading-loose text-black">Message:</label>
                    <textarea 
                        id="message"
                        value={inputs.message}
                        onChange={handleChange} 
                        placeholder="..." 
                        className="block text-xs border-2 border-gray-300 h-36  p-2 w-full"
                        />
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
        </div>
    )

};

export default Form


