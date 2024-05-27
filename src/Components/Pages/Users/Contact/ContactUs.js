import React from 'react'
import img from '../../../Assets/Images/ContactUs.png'
import location from '../../../Assets/Images/location.png'
import phone from '../../../Assets/Images/phone.png'
import email from '../../../Assets/Images/email.png'
export default function ContactUs() {
  return (
    <div className="contact3 py-5">
  <div className="row">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card-shadow">
            <img src={img} className="img-fluid shadow p-3 mb-5 bg-white rounded"/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            <h1 className="font-weight-light mt-2"> Reach out to Us</h1>
            <form className="mt-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" placeholder="Full Name"/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="email" placeholder="Email Address"/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" placeholder="Phone Number"/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn btn-warning mt-4 text-white  px-5 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card mt-4 border-0 mb-4">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail pl-0">
                  <div className="mr-3 align-self-center">
                    <img src={location} width='60px'/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Address</h6>
                    <p className="">Itahari, Sunsari
                      <br></br> Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src={phone} width='60px'/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Phone</h6>
                    <p className="">025-533331
                    <br></br>9812345678</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src={email} width='60px'/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Email</h6>
                    <p className="">
                      info@intern.com
                      <br></br> 123@intern.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
