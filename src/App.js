import './App.css';
import ProductList from './companant/ProductList';
import ResponsiveAppBar from './companant/ResponsiveAppBar';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar  />
      <ProductList />
    </div>
  );
}

export default App;
