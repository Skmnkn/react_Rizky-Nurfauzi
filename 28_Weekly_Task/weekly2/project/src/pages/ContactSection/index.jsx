import { useState } from "react";
import { toast } from "react-toastify";

export const ContactSection = () => {
  const BASE_DATA = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const [values, setValues] = useState(BASE_DATA);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values === "") {
      toast.error("Empty Data!");
    } else {
      toast.success(`Nama : ${values.name}
            Email : ${values.email}
            Phone Number : ${values.number}
            Message : ${values.message}
            `);
    }
    setValues(BASE_DATA);
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-6 align-self-center">
              <div className="mb-5 text-light">
                <h2>Get in touch</h2>
                <p>
                  We’re very approachable and would love to speak to you. Feel
                  free to call, send us an email, Tweet us or simply complete
                  the enquiry form.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="contact-form p-5 bg-white">
                <div className="form-box">
                  <h4>Send Us a Message</h4>
                  <form id="form" onSubmit={handleSubmit}>
                    <fieldset className="form-group">
                      <label htmlFor="yourName">Your Name (required)</label>
                      <input
                        type="text"
                        className="form-control"
                        id="yourName"
                        placeholder="Enter Your Name"
                        name="name"
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <label htmlFor="yourEmail">
                        Email Adressess (required)
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="yourEmail"
                        name="email"
                        placeholder="Enter Your Email"
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <label htmlFor="yourPhone">Telephone number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="yourPhone"
                        name="number"
                        placeholder="Enter Your Phone"
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <label htmlFor="yourMessage">Your message</label>
                      <textarea
                        className="form-control"
                        rows={6}
                        id="yourMessage"
                        defaultValue={""}
                        name="message"
                        onChange={handleChange}
                      />
                    </fieldset>
                    <button
                      type="submit"
                      className="btn mt-2 text-light"
                      style={{ backgroundColor: "#78399c" }}
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
