import { useState } from "react";
import { motion } from "framer-motion";
import SocialIcons from '../components/SocialIcons';


export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userMessage,setUserMessage] = useState("");
  const [userMessageError, setUserMessageError] = useState("");
 
  const validateForm = () => {
    let isValid = true;

    // Clear previous errors
    setUsernameError("");
    setEmailError("");
    setUserMessageError("");


    // 1. Validate username
    if (username.length < 2) {
      setUsernameError("Name must be at least 2 characters.");
      isValid = false;
    }

    // 2. Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    // 3. Validate message
    if (userMessage.length < 2) {
      setUserMessageError("Please describe more.");
      isValid = false;
    }

    return isValid;
  };
  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Create FormData object and append the access_key
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

      // Create a new form element to submit the form data
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://api.web3forms.com/submit";
      
      // Append formData to form
      for (let [key, value] of formData.entries()) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }

      // Append form to body and submit
      document.body.appendChild(form);
      form.submit();
    }
  };
  return (
    <div id="contact-page" className="flex p-[10%] md:flex-row flex-col">
      <motion.div
        className="flex-1 md:text-8xl text-6xl text-gray-500 md:text-start text-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>Let&apos;s work together.</h1>
        <SocialIcons />
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-5" method="POST">
          <div className="grid w-full">
            <label htmlFor="username" className="text-white">Name</label>
            <input
              id="username"
              type="text"
              name="name"
              placeholder="Your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 rounded"
            />
            {usernameError && <p className="form-message text-red-500">{usernameError}</p>}
          </div>
          <div className="grid w-full">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded"
            />
            {emailError && <p className="form-message text-red-500">{emailError}</p>}
          </div>
          <div className="grid w-full gap-2">
            <label htmlFor="message-2" className="text-white">Your Message</label>
            <textarea
              placeholder="Type your message here."
              name="message"
              value={userMessage}
              onChange={(e)=>{setUserMessage(e.target.value)}}
              className="p-2 rounded"
            />
            {userMessageError && <p className="form-message text-red-500">{userMessageError}</p>}
            <button 
              className="mt-5 md:w-[50%] bg-slate-900 text-white  py-2 rounded-md 
              hover:bg-gray-300
              hover:border-gray-300
              hover:text-black
              transition-all"
              type="submit" >Send message</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
