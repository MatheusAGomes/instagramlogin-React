
import Login from "./components/Login";
import CreateCount from "./components/CreateCount"
import './App.css'
import Celular from "./img/Screenshot 2022-01-28 131508.png"
import Apple from "./img/AppleLink.png"
import Android from "./img/AndroidLink.png"
function App() {
  return (
    <div>
    <div className="principal">
        <img src={Celular} style={{height:'450px',width:'275px'}}/>
    <div className="quadrados">
      <Login/>
      <CreateCount/>
      <label>Get the app</label>
      <div className="download">
      <img src={Apple} style={{height:'30px',width:'100px'}}/>
      <img src={Android} style={{height:'30px',width:'100px'}}/>
      </div>
    </div>
    </div>
    <div className="footer">
      <div>
     <a href="/">Meta</a>
     <a href="/">About</a>
     <a href="/">Blog</a>
     <a href="/">Jobs</a>
     <a href="/">Help</a>
     <a href="/">API</a>
     <a href="/">Privacy</a>
     <a href="/">Terms</a>
     <a href="/">Top </a>
     <a href="/">Accounts</a>
     <a href="/">Hashtags</a>
     <a href="/">Locations</a>
     <a href="/">Instagram</a>
     <a href="/">Lite</a>
     </div>
     <div style={{width:'70%',paddingLeft: '100px',marginTop:'5px',marginBottom:'10px'}}>
     <a href="/">Beauty</a>
     <a href="/">Dance</a>
     <a href="/">Fitness</a>
     <a href="/">Food & Drink</a>
     <a href="/">Home & Garden</a>
     <a href="/">Music</a>
     <a href="/">Visual Arts</a>
     </div>
     <select>
      <option value="English">English</option>
      <option value="Portuguese">Portuguese</option>  
      <option value="Spanish">Spanish</option>
    </select>
    <label>© 2022 Instagram from Meta</label>
      </div>
    </div>
  );
}

export default App;
