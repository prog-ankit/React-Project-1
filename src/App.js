import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
//Proptypes is used to give restrictions passed to props of functions
function App() {
  let msg = "Here is My message to pass here!!";
  return (
    <>
      
      {/* <NavBar page="My Site" title="Home" about={msg}/> */}
      <NavBar page="My Site" title="Home"/>
      <div className="container my-3">
       <TextArea heading="Analyze and Compute your text"/>
      </div>
      
    </>
  );
}

export default App;
