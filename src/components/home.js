import React from 'react'
import {Link} from 'react-router-dom'
import './../support/home.css'
import './../support/animated.css'
import Digital from './../support/img/digital-strategy-icon.png'
import Social from './../support/img/icon-social-home.png'
import Design from './../support/img/web-design-icon-home.png'
import WebDev from './../support/img/web-development-icon-home.png'
class Home extends React.Component{
    render(){
        return(
            <div className="container-full home">
                <div className="gambar">
                    <div className="intro animated fadeInDown">
                    <h3>Hello! I'm Niko</h3>
                    <h2>Consult, Design and Develop Website</h2>
                    <p>Have something great in mind? Feel free to contact me. I'll help you make it happen.</p>
                    </div>
                    <Link to="/contact" style={{textDecoration:"none"}}>
                    <div className="findme animated fadeInUp">
                       Contact Me
                    </div>
                    </Link>
                  
                </div>
                
                <div className="homecontent">
                    
                    <div className ="row content">
                        <div className="col-12 col-md-12">
                            <h2>
                                How Can I Help You?
                            </h2>
                        </div>
                    </div>
              
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-4 content">
                            <img src={Design} alt="design"></img>
                                 <p>Web Design</p>
                              
                            </div>
                            <div className="col-12 col-md-4">
                               <div className="content-1">
                               <h3>Design What You Want</h3>
                                <p>
                                I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.
                                </p>
                               </div>
                               
                            </div>
                            <div className="col-12 col-md-4 content">
                             
                            <img src={WebDev} alt="webdev"></img>
                                 <p>Web Development</p>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 content">
                            <img src={Digital} alt="digital"></img>
                                 <p>Branding</p>
                            </div>
                            <div className="col-12 col-md-4">
                               <div className="content-1">
                               <h3>Develop What You Need</h3>
                            <p>
                            I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
                            </p>
                                </div>
                          
                            </div>
                            <div className="col-12 col-md-4 content">
                            <img src={Social} alt="social"></img>
                            <p>Social Media</p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Home;