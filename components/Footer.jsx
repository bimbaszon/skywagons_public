import React, { useState, useEffect } from 'react'
import plane_solo from '../public/plane_solo.png';
import Link from 'next/link';

const Footer = () => {


  const [inputs, setInputs] = useState({
		name: '',
		email: '',
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

		if (inputs.name && inputs.email && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`../api/contact`, {
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
					email: '',
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
      <div className="footer">
          <div className="grid grid-cols-3 justify-items-center p-6 sm:block">
            <div className="justify-self-start text-white">
                <a href="/"><img src="/plane_solo.png" className="h-24 mx-10 pt-4 pb-2"/></a>
                <h1 className="text-xs font-thin mx-10 leading-9">Skywagons.com</h1>
                <h1 className="text-xs font-thin mx-10 leading-9 sm:hidden">Gets you flying in no time!</h1>
            </div>
            <div className="justify-self-start text-white mx-10 pt-4 pb-10 sm:hidden">
                <h1 className="leading-loose">Contact Details</h1>
                <h2 className="text-xs font-thin leading-loose">Skywagons.com</h2>
                <h2 className="text-xs font-thin leading-loose">Aircraft Sales</h2>
                <h2 className="text-xs font-thin leading-loose">3501 Airport Rd. Hangar #2</h2>
                <h2 className="text-xs font-thin leading-loose">Placerville, CA 95667</h2>

            </div>
            <div className="justify-self-start mx-8 pt-4 pb-10">
                <h1 className="leading-loose text-white">Contact form</h1>
                <form className="" onSubmit={(e) => onSubmitForm(e)}>
                  <textarea
                    id='name'
                    type='text'
                    value={inputs.name}
                    onChange={handleChange}
                    className="p-1 text-sm block "
                    placeholder='Name*'
                    required
                    rows="1"
                  
                  />
                  <textarea
                    id='email'
                    type='email'
                    value={inputs.email}
                    onChange={handleChange}
                    className="p-1 mt-2 text-sm block w-full"
                    placeholder='Email*'
                    required
                    rows='1'
                  />
               
                  <textarea
                    id='message'
                    type='text'
                    value={inputs.message}
                    onChange={handleChange}
                    className="p-1 mt-2 text-sm block"
                    placeholder='Message*'
                    rows='5'
                    required
                  />
                  <input type='submit' value='Submit'  className="px-2 font-semibold hover:text-lg cursor-pointer block mt-2 " />
                  {form.state === 'loading' ? (
                    <div>Sending....</div>
                  ) : form.state === 'error' ? (
                    <div>{form.message}</div>
                  ) : (
                    form.state === 'success' && <div>Sent successfully</div>
                  )}
			</form>
            </div>
          </div>
        <div className="bg-gray-700 h-16 p-6 text-white text-xs font-thin">
        <p className="">&copy; Copyright 2022 Skywagons.com</p>    
        </div>    
      </div>
    )
  }
  
  export default Footer