import React from 'react'
const ContactUs = () => {
    return (
        <div className='form-control   w-50 '>
        <h2>Contact us</h2>
        
            <div className='Name-form w-50 '>
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                </div>
            </div>
            <div className='Email-form w-50 '>
                <div className="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                </div>
            </div>
            <div className='Subject-form'>
                <div className="mb-3 h-75">
                    <label for="exampleFormControlInput1" class="form-label">Enter your subject</label>
                    <input type="Details" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                </div>
            </div>
            <div className='Details-form  h-50'>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">How can we help you?</label>
                    <input  type="Details" class="form-control" id="exampleFormControlInput1" placeholder="Explain us!" />
                </div>
            </div>
            <div className='text-center'>
            <button type="button" class="btn btn-danger">Send</button>
            </div>
        </div>
    )
}

export default ContactUs