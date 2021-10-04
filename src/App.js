import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Courses></Courses>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
