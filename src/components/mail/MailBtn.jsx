import React from 'react'
import '../mail/MailBtn.css'


const MailBtn = () => {
  return (
    <div className="mail-container w-full mt-16">
      <div className="inner-mail-con flex gap-4 justify-center">
        <span className="w-96">
          <input
            type="email"
            name="Email"
            id="mail-id"
            className="bg-transparent rounded-full px-4 py-2 text-xl  w-full font-sans"
            placeholder="Email address"
            required
          />
        </span>
        <button
          type="submit"
          className="px-6 py-2 rounded-full get-start-btn text-xl font-sans"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MailBtn
