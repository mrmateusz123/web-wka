import './App.css';
import Header from './header_footer/header'
import Footer from './header_footer/footer'
import Patern from './components/patern';
function App() {
  return (
    <div className="App">
      <Header name="Matematyka dla każdego" idk="Równania kwadratowe"/>
      <Patern/>
      <Footer idk="równania kwadratowego"/>
    </div>
  );
}

export default App;
