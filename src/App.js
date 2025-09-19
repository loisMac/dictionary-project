import logo from "./loomi.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center my-4">
          <img
            src={logo}
            className="App-logo img-fluid"
            alt="logo"
          />
        </header>

        <main>
          <Dictionary />
        </main>

        <footer className="App-footer text-center mt-5">
          <small>Coded by Lois Macleod</small>
        </footer>
      </div>
    </div>
  );
}
