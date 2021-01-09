import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import songList from "./songs";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Home  </Link>
          </li>
          <li className="nav-item">
            <Link to="/AddNewSong">Add new Song  </Link>
          </li>
          <li className="nav-item">
            <Link to="/Songs">Songs </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/AddNewSong">
            <AddNewSong />
          </Route>
          <Route exact path="/Songs">
            <ul>
              <Songs />
            </ul>
            <Switch>
              <Route exact path="/SongDetail">
                <SongDetail />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to this page</h2>;
}

function AddNewSong() {
  return <h2>Add new song</h2>;
}

function Songs() {
  let { path, url } = useRouteMatch();
  const [songs, setSong] = useState(songList);
  console.log("song list of song", songs);
  return (
    songList.map(song => <li key={song.id}><Link to={`${url}/${song.id}`}>{song.title}</Link></li>)
  );
}

function SongDetail() {
  let { id } = useParams();
  var songDetail = songList.find(m => m.id === id);
  return (
    <ul>
      <li>{songDetail.title}</li>
      <li>{songDetail.author}</li>
    </ul>
  )
}

export default App;

