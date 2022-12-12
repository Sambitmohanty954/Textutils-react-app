import './App.css';
// import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
 
function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText= "About Us"/>
      <div className="container my-3">
      <TextForm heading="Enter your text below"/>
      {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
