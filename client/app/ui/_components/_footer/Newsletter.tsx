"use client"

import {useState} from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  }

  return (
    <form className="flex flex-wrap gap-3">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="text-sm p-1 appearance-none border-b border-black focus:outline-none md:max-w-32 xl:max-w-96"
      />
      <button type="submit" className="border-b border-black text-base" onSubmit={handleSubmit}>SUBSCRIBE</button>
    </form>
  )
}

export default Newsletter;