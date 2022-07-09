import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wmj72mf",
        "template_pltwxnk",
        form.current,
        "aY_JOwnFt5KLrc9Bm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Sent Successfuly");
  };
  return (
    <div className="bg-stone-900 min-h-[100vh] " id="contact">
      <div className="p-1 w-full text-white font-mono text-5xl underline ">
        <p className="mt-[5rem] italic font-serif text-center">Contact Me</p>
      </div>

      <div className="container mx-auto  sm:mt-[5rem]">
        <div className="w-fit mx-auto p-5 sm:p-0">
          <form className=" text-xl" ref={form} onSubmit={sendEmail}>
            <label class="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md sm:text-xl font-medium  text-white">
                Name
              </span>
              <input
                type="text"
                name="name"
                className="mt-1 px-3 py-2 p-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
                placeholder="Enter Name"
                required
              />
            </label>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md sm:text-xl font-medium text-white">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
                placeholder="Enter Email"
                required
              />
            </label>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md sm:text-xl font-medium text-white">
                Message
              </span>
              <textarea
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
                placeholder="Enter Message"
                name="message"
                rows="4"
                cols="50"
                required
              />
            </label>
            <button
              class="mt-5 h-10 px-6 font-semibold rounded-md bg-black text-white hover:bg-blue-400"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
