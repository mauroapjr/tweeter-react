import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'
import "./App.css";

function App() {
  return (
  <div className="App">
    <Navigation></Navigation>
    <Profile></Profile>
    <TweetList></TweetList>
    <TweetForm></TweetForm>
  </div>
  );
}


export default App;
