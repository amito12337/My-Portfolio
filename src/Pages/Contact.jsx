import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

function Contact() {
  const formRef = useRef(null)
  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const [isLoading,setIsLoading] = useState(false)
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // "service_r33sr4e",
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // "template_mdcvwhr",
        {
          from_name: form.name,
          to_name: "Abdessamad",
          from_email: form.email,
          to_email: "aamaitit@gmil.com",
          message:  form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLICK_KEY // "sr5y7Vs7KBwPakt5L"
      )
      .then(() => {
        setIsLoading(false);
        // TODO:show succes message
        // TODO:hide an alert message 
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        // TODO:show error message
      });
  }
  const handleFocus = () => {}
  const handleBlur = () => {}
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-40" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name :
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email :
            <input
              type="email"
              name="email"
              className="input"
              placeholder="example@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message :
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="let me how i can help you?!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {isLoading ? "sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
