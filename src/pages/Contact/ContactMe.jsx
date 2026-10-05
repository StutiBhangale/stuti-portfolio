import React from "react";
import "./ContactMe.css";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const ContactMe = () => {
    const [state, handleSubmit] = useForm("mljdqovb");

    return (
        <div id="contact" className="contact-section">
            <h1>Let's Work Together</h1>
            <p>
                I'm currently open to frontend development opportunities
                and would be happy to connect.
            </p>
            <div className="contact-container">
                <div className="contact-info">
                    <h1>Get in touch</h1>
                    <p>
                        <Mail size={20} />
                        Email:
                    </p>
                    <span>stutibhangale2000@gmail.com</span>
                    <p>
                        <FaLinkedinIn size={20} />
                        LinkedIn:
                    </p>
                    <a
                        href="https://www.linkedin.com/in/stuti-bhangale"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin.com/in/stuti-bhangale
                    </a>
                    <p>
                        <FaGithub size={20} />
                        Github:
                    </p>
                    <a
                        href="https://github.com/StutiBhangale"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/StutiBhangale
                    </a>
                    <p>
                        <MapPin size={20} />
                        Location:
                    </p>
                    <span>Pune, India</span>
                </div>
                <div className="contact-form">
                    <h1>Send a Message</h1>
                    {state.succeeded ? (
                        <p className="form-success">
                            Thanks for reaching out! I'll get back to you soon.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:<span className="required">*</span></label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                            <label htmlFor="email">Email:<span className="required">*</span></label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                            <button
                                type="submit"
                                disabled={state.submitting}
                            >
                                {state.submitting ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactMe;