import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App