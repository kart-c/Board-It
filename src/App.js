import { googleSignInService, signOutService } from "./services";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button onClick={() => googleSignInService()}> Sign In </button>
      <button onClick={() => signOutService()}> Sign Out </button>
    </div>
  );
}

export default App;
