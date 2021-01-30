import logo from './logo.svg';
import { saveAs } from 'file-saver';
import './App.css';
const JSZip = require('jszip')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button onClick={bob}>Go zip something! </button>
      </header>
    </div>
 );
 
  async function bob() { 
    
    const zip = new JSZip();
    zip.file("test", "Hello");
    var img= zip.folder("images");
    img.file("logo.svg", logo, {base64: false});
  
    try{ 
      await zip.generateAsync({type:"blob"}).then(content => {   saveAs.saveAs(content,"test.zip")});
      console.log("OK.. zipped maybe.  ")} 
    catch {
     console.log("ERROR")
    }
    
    }

    
}
export default App;

//.then(content => {   saveAs.saveAs(content,"test.zip")});
