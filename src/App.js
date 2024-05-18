
import './App.css';
import ImageSlider from './components/slider/imageSlider';
import images from './data/imagesData';

function App() {
  return (
    <div className="App">
      
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
