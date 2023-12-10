import React, { useRef, useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [data, setData] = useState({
    user_name: "",
    phone: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    );

    emailjs
      .sendForm(
        "service_jv3yv28",
        "template_c416vns",
        form.current,
        "oy5zPPMOdtag_qGEu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    event.target.reset();
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4 style={{ fontSize: ".8rem" }}>CONTACT</h4>
            <h1 style={{ fontSize: "2rem" }}>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>nice to meet you</h1>
                  <p>Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +201123526875</p>
                  <p>Email: eslamkhalil851@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-linkedin"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={formSubmit} ref={form}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      style={{ borderRadius: ".5rem" }}
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      style={{ borderRadius: ".5rem" }}
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    style={{ borderRadius: ".5rem" }}
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    style={{ borderRadius: ".5rem" }}
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    style={{ borderRadius: ".5rem" }}
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
