import './App.css';
import Navigationbar from './component/navbar';
import '../src/style/landingpage.css';
import Intro from './component/intro';
import Trending from './component/trending';

function App() {
  return (
    <div>
      <div className="beranda">
        <Navigationbar />;
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;
