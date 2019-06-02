import React from 'react'
import swal from 'sweetalert'
import './../support/contact.css'
const transporter = require('./../helper/nodemailer')


class Contact extends React.Component{
    submitEmail=()=>{
        var name = this.refs.name.value
        var email = this.refs.email.value
        var subject = this.refs.subject.value
        var message = this.refs.message.value
        var mailOption ={
            from:name,
            to: 'huangnik90@gmail.com',
            subject:subject,
            html:`${message} + email: +${email}`
        }
        if (name==="" || email==="" || subject==="" || message===""){
            swal("Error","Data seem to be empty","info")
        }else if(!(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))){
            swal("Error","Please put valid email address","error")
        }else{
            swal("OK","I will contact you soon.. for fast respond please Call me","success")
            transporter.sendMail(mailOption,(err,result)=>{
                if(err) throw err
                result.send("OK")
            })
           
        }   

    }
    render(){
        return(
            <div className="container contactUs">
                
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you within
          a matter of hours to help.</p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" ref="name" className="form-control" />
                    <label htmlFor="name" className>Your name</label>
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" ref="email" className="form-control" />
                    <label htmlFor="email" className>Your email</label>
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" ref="subject" className="form-control" />
                    <label htmlFor="subject" className>Subject</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" ref="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
            </form>
            <div className="text-center text-md-left">
              <input type="button" className="btn btn-primary" value="Send" onClick={this.submitEmail}/>
            </div>
            <div className="status" />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x" />
                <p>BSD - Indonesia</p>
              </li>
              <li><i className="fas fa-phone mt-4 fa-2x" />
                <p>+62 812 9222 2050</p>
              </li>
              <li><i className="fas fa-envelope mt-4 fa-2x" />
                <p>huangnik90@gmail.com</p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
      </section>
      {/*Section: Contact v.2*/}
            </div>
        )
    }
}
export default Contact;