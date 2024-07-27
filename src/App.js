
import CateBasedPost from "./components/CategoryList/CateBasedPost";
import Details from "./components/Details/Details";

import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        
        <Route path="/" element={ <Main/>}/>
        <Route path="/details/:id" element={ <Details/>}/>
        <Route path="/category/:id" element={<CateBasedPost/>}/>
       

        
      </Routes>
    </Router>
    
     
    </>
  );
}

export default App;
