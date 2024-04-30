import React from "react";
import "./Contact.css";
import email_img from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import message_icon from "../../assets/msg-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9584185-be1f-4deb-a285-95dddee95acb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact" id="Contact">
      <div className="left_part">
        <div className="left-heading">
          <h2>
            Send us a message <img src={message_icon} alt="" />
          </h2>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
        </div>
        <div className="contact-info">
          <p>
            <img src={email_img} alt="" />
            v.verm3737@gmail.com
          </p>
          <p>
            <img src={phone_icon} alt="" />
            +91 7755880327
          </p>
          <p>
            <img src={location_icon} alt="" />
            plot-113 gyan-kand 1,
            
            indrapuram,ghaziabad India
          </p>
        </div>
      </div>
      <div className="right-part">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Phone Number" required />
            <label>Enter Your Message</label>
            <textarea name="message"  placeholder="Enter Your Message" rows="10" required></textarea>
            <button className="btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
