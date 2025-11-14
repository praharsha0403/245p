import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App"> 
      <Header />
      <main className="main-layout">
        <Sidebar />
        <CardGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
