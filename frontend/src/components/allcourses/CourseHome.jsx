import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import Intern from "./Intern"

const CourseHome = () => {
  return (
    <>
      <Back title='Đề tài thực tập' />
      <CoursesCard />
      <Intern />
    </>
  )
}

export default CourseHome
