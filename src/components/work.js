import React from 'react'
import html from './../support/img/skill/html.png'
import css from './../support/img/skill/css.png'
import javascript from './../support/img/skill/javascript.png'
import bootstrap from './../support/img/skill/bootstrap.png'
import react from './../support/img/skill/react.png'
import redux from './../support/img/skill/redux.png'
import reactNative from './../support/img/skill/reactnative.png'
import node from './../support/img/skill/node.png'
import express from './../support/img/skill/express.png'
import npm from './../support/img/skill/npm.png'
import mongodb from './../support/img/skill/mongo.jpg'
import heroku from './../support/img/skill/heroku.png'
import google from './../support/img/skill/google.jpg'
import mysql from './../support/img/skill/mysql.jpg'
import './../support/work.css'

class Work extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h3>SKILLS</h3>
                    </div>
                </div>
            <fieldset class="border p-2 field animated slideInLeft">
            <legend  class="w-auto">Front End</legend>
                <div className="row">
                 <div className="control-group col-6 col-md-3">
                    <img src={html} alt="html" width="50%"/>     
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={css} alt="html" width="50%"/>   
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={javascript} alt="html" width="50%"/>       
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={bootstrap} alt="html" width="50%"/>
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={react} alt="html" width="50%"/>
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={redux} alt="html" width="50%"/>
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={reactNative} alt="html" width="50%"/>
                 </div>     

                </div>
            </fieldset>
            <fieldset class="border p-2 field  animated slideInRight">
            <legend  class="w-auto">Back End</legend>
                <div className="row">
                 <div className="control-group col-6 col-md-3">
                    <img src={node} alt="html" width="50%"/>     
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={npm} alt="html" width="50%"/>   
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={express} alt="html" width="50%"/>       
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={mongodb} alt="html" width="50%"/>       
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={mysql} alt="html" width="50%"/>       
                 </div>
                 <div className="control-group col-6 col-md-3">
                    <img src={heroku} alt="html" width="50%"/>       
                 </div>
                 <div className="control-group col-3 col-md-3">
                    <img src={google} alt="html" width="50%"/>       
                 </div>
                    

                </div>
            </fieldset>
                
            </div>
        )
    }
}
export default Work;