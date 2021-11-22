import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import './Socialicons.css'; 


function Footer() {
    return (
        <div className="page-footer font-small stylish-color-dark pt-4 bg-light mt-5" id="contact">
        <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 mx-auto">
                <h3>About</h3>
                <p>Lorem text</p>                
              </div>

              <hr className="clearfix w-100 d-md-none" />

                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                    <h3>Address</h3>
                    <div className="content">
                        <div className="place">
                            <span className="fas fa-map-marker-alt"></span>
                            <span className="text">Lorem Text</span>
                        </div>
                        <div className="phone">
                            <span className="fas fa-phone-alt"></span>
                            <span className="text">Lorem phone</span>
                        </div>
                        <div className="email">
                            <span className="fas fa-envelope"></span>
                            <span className="text">Lorem email</span>
                        </div>
                    </div>
                </div>

              <hr className="clearfix w-100 d-lg-none" />

              <div className="col-lg-5 col-md-6 col-sm-12 mx-auto">
                  <h3>Contact Us</h3>
                <form>
                    <div className="form-row">
                        <div className="form-group col-lg-5 col-md-12 col-sm-12 col-12">
                            <label className="mr-auto">Name :</label>
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group col-lg-5 col-md-12 col-sm-12 col-12">
                            <label className="mr-auto">Email :</label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <label className="mr-auto">Your Message :</label>
                    <textarea className="form-control" placeholder="Message..." id="" cols="-1" rows="5"></textarea>
                    <div className ="text-center">
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </div>
                </form>
              </div>
        
            </div>
        </div>    
        
        <hr className="clearfix w-100" />

            <div className="list-unstyled list-inline text-center social mt-lg-4 mt-md-3 mt-sm-0">
                <b className=" w-100 text-center">Follow me on : </b><br/>
                <a href="https://www.facebook.com/shreyas.satre.90"><FontAwesomeIcon icon={faFacebook} className="facebook-i"/></a>
                <a href="https://www.instagram.com/shreyas_satre/?hl=en"><FontAwesomeIcon icon={faInstagram} className="insta-i"/></a>
                <a href="https://www.linkedin.com/in/shreyas-satre-7b10811a4/"><FontAwesomeIcon icon={faLinkedin} className="linkedin-i"/></a>
                <a href="#social/link"><FontAwesomeIcon icon={faYoutube} className="youtube-i"/></a>
                <a href="#social/link"><FontAwesomeIcon icon={faTwitter} className="twitter-i"/></a>
            </div>
        
        <hr className="clearfix w-100"/>
        
          <div className="text-center py-3">
            <p>Created & Designed By Shreyas Sanjay Satre.</p>
          </div>
</div>
    )
}

export default Footer
