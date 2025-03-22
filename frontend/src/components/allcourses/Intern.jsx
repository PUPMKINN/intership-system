import React from "react"
import "./courses.css"
import { intern } from "../../datatest"
import Heading from "../common/heading/Heading"

const Intern = () => {
  return (
    <>
      <section className='intern'>
        <div className='container'>
          <Heading subtitle='Vị trí thực tập' title='Đa dạng vị trí thực tập' />
          <div className='content grid3'>
            {intern.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} alt='Hình ảnh 2' />
                  <img src={val.hoverCover} alt='Hình ảnh 1' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Intern
