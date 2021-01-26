import {
  BrowserRouter as Router,
  Switch,
  Route

  // Link
} from "react-router-dom";

import './App.css';
import Thoughts from './thoughts';


export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/our-thoughts">
            <Thoughts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  )
};

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://media1.giphy.com/media/9LXD9bu5zQp1MfiMHg/source.gif"} className="App-logo" alt="logo" />
        <h1 className="title-header">
          Wine Time
        </h1>
        <p className="title-subheader">
          by Matt + Jules
        </p>
      </header>
    </div>
  );
}