import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormData, setIsFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });



  const notify = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { user_name, user_email, message } = isFormData;

    if (user_name === "" || user_email === "" || message === "") {
      notify("Cannot submit an empty form.", "error");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_APP_API_KEY,
        process.env.REACT_APP_EMAIL_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_APP_API_KEY
      )
      .then(
        () => {
          notify("Your message has been sent successfully");
          setIsFormData({ user_name: "", user_email: "", message: "" });
          setIsSubmitting(false);
          console.log("SUCCESS!");
        },
        (error) => {
          notify("Failed... error occurred during submission", "error");
          setIsSubmitting(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleInputValue = (event) => {
    const { name, value } = event.target;
    setIsFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section id='contact' className="max-w-[1400px] my-4 md:my-20 mx-auto text-white px-8 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-7 pt-2 *:rounded-lg *:border border-border-secondary *:hover:cursor-pointer">
            <div data-aos="fade-right" data-aos-delay='900' className="bg-bg-accent py-8 text-center hover:bg-bg-muted transition-all delay-300 mb-4">
              <h3 className="text-2xl text-slate-500">@</h3>
              <h3 className="text-2xl text-slate-400 mb-2">Email</h3>
              <p className="text-2xl">kamauchief97@.com</p>
            </div>
            <div data-aos="fade-right" data-aos-delay='1500' className="bg-bg-accent py-8 grid place-items-center text-center hover:bg-bg-muted transition-all delay-300 mb-4">
              <h3 className="text-2xl py-1">
                <IoCallOutline />
              </h3>
              <h3 className="text-2xl text-slate- mb-2">Phone Number</h3>
              <p>+254 768283966</p>
            </div>
            <div data-aos="fade-right" data-aos-delay='2000' className="bg-bg-accent py-8 grid place-items-center text-center hover:bg-bg-muted transition-all delay-300 mb-4">
              <h3 className="text-xl py-1">
                <IoLocationOutline />
              </h3>
              <h3 className="text-2xl text-slate- mb-2">Address</h3>
              <p>Thika, Nairobi, Kenya</p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay='900' className="space-y-3">
            <h2 className="text-5xl text-gradient-2 font-bold mb-4">
              Contact me!
            </h2>
            <p className="text-2xl text-slate-500 mb-4">
              I build with precision and passion, creating web projects that
              stand out. It’s as straightforward as that!
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-10">
              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="p-4 w-full bg-gray-800 rounded-md"
                  onChange={handleInputValue}
                  value={isFormData.user_name}
                />
              </div>
              <div className="w-full mb-4">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email address"
                  className="p-4 w-full bg-gray-800 rounded-md"
                  onChange={handleInputValue}
                  value={isFormData.user_email}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="p-4 bg-gray-800 rounded-md w-full mb-4"
                rows="4"
                onChange={handleInputValue}
                value={isFormData.message}
              ></textarea>
              <input
                type="submit"
                value={isSubmitting ? "Submitting..." : "Send"}
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded hover:cursor-pointer transition-all delay-300"
              />
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
