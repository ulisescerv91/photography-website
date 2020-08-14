import React,{useEffect,useState} from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from 'emailjs-com'

import './Contact.css'

export default function Contact() {
    const [customer,setCustomer] = useState({        
        name:'',
        mail:'',
        msg:''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e =>{
        e.preventDefault();
        try {
            
            // emailjs.send('gmail','template_rwYLmlH0', customer, 'user_6hPB80niaOj422hZuPC0X')
            // .then((response) => {
            //            console.log('enviado...', response.status, response.text);
                       
                       
            // }, (err) => {
            //            console.log('FAILED...', err);
            // });           
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="contact">
            <div className="mail_container">
                <div className="contact_message">
                    <span>Get in touch</span>
                    <span>With us</span>
                    <span>Send a message</span>
                </div>
                {/* <div className="contact_form">
                    <form >
                        <input type="text" className="inputDataCustomer" defaultValue={customer.name}  onChange={handleChange} name="name" id="name" placeholder="NOMBRE" maxLength="30" required/>
                        <input type="email"  className="inputDataCustomer"  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required name="mail" id="mail" placeholder="CORREO ELECTRONICO" onChange={handleChange} maxLength="40"/>                    
                        <textarea name="msg" id="msg" cols="30"  onChange={handleChange} rows="5" maxLength="150" placeholder="ESCRIBE TU MENSAJE"></textarea>

                        <input  className="submitBtn" type="submit" onClick={handleSubmit} value="ENVIAR"/>
                    </form>
                </div> */}
            </div>
            <div className="whatssapp"> 
                
                <a href="https://wa.me/5213123182276" className="link" target="_blank">
                    <div className="icon_whats">
                        <FaWhatsapp/>
                    </div>
                    
                    <div className="msg_whats">
                        <span>Contactarme directamente</span>
                        <span>WhatsAPP</span>
                    </div>
                </a>
            </div>
        </div>
    )
}
