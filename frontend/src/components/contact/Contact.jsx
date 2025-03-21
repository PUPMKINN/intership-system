import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Cơ sở 1: 227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>info@hcmus.edu.vn</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>(028) 62884499</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
