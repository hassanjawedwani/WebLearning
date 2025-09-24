"use client";
import { supabase } from '@/supabase-client';
import React, { useState } from 'react'

const Signup = () => {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("email", email);
		console.log("password", password);
		const {data, error} = await supabase.auth.signUp({ email, password });
		if (error) {
			console.log(error.message)
		}
		console.log(data);
  }
	
  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-2 justify-center items-center mt-2'>
      <h1>SignupPage</h1>
      <input
        type="email"
        value={email}
        name="email"
				id="email"
				className='border border-white'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        name="password"
				id="password"
				className='border border-white'
				
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Create Account</button>
    </form>
  );
}

export default Signup