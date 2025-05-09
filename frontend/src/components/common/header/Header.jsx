import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Trang chủ</Link>
            </li>
            <li>
              <Link to='/courses'>Đăng ký thực tập </Link>
            </li>
            <li>
              <Link to='/about'>Thông tin ứng dụng </Link>
            </li>
            <li>
              <Link to='/team'>Sinh viên </Link>
            </li>
            <li>
              <Link to=''>Hợp tác</Link>
            </li>
            <li>
              <Link to='/journal'>Thông tin</Link>
            </li>
            <li>
              <Link to='/contact'>Liên hệ</Link>
            </li>
          </ul>
          {/* <div className='start'>
            <div className='button'>Đăng nhập</div>
          </div> */}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
