import './App.css';
import  Movie from './Components/Movie';

const arr=['1','2','3'];

function App() {
  return (
    <div className="App">
      {
        arr.map(item  => {
          return <Movie data={item} />
        })
      }
    </div>
  );
}

export default App;
