import './App.css';
import Header from './component/Header/Header';
import Collection from './component/Collection/Collection';
import Ask from './component/Ask/Ask';


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Collection></Collection>

      <Ask></Ask>
    </div>
  );
}

export default App;
