import "./App.css";

function App() {
  return (
    <>
      <div className="card-container">
        <div className="profile-pic-container">
          <img src="pic.jpg" className="profile-pic" />
          <p className="profile-name">David Idowu</p>
          <p className="city">University Of Lagos</p>
          <p className="spec">FULLSTACK WEB DEVELOPER</p>
          <div className="social-media">
            <a href="https://github.com/Idowu-David" target="_blank">
              Github
            </a>
            <a href="https://instagram.com/idowudavido" target="_blank">
              Instagram
            </a>
            <a href="https:/x.com/IdowuDavid08" target="_blank">
              Twitter
            </a>
            <a href="#">Linkedln</a>
            <a href="#">Frontend Mentor</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
