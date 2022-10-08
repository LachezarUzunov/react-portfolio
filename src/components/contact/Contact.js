import classes from "./Contact.module.css";
import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('submitted')
        emailjs.sendForm('service_cr2joi6', 'template_u5dgjfh', form.current, 'Sx8kp59Lb52TOJSBu')
        e.target.reset()
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        })
    }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`${"container"} ${classes.contact__container}`}>
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <MdOutlineEmail className={classes.contact__option_item}/>
            <h4>Email</h4>
            <h5>myemail@gmail.com</h5>
            <a href="mailto:myemail@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className={classes.contact__option}>
            <RiMessengerLine className={classes.contact__option_item}/>
            <h4>Messenger</h4>
            <h5>Messenger</h5>
            <a href="https://m.me/lachezar.uzunov" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className={classes.contact__option}>
            <BsWhatsapp className={classes.contact__option_item}/>
            <h4>WhatsApp</h4>
            <h5>myemail@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=+35988888" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder="You Full Name" required/>
            <input type='email' name='email' placeholder="You Email" required/>
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
