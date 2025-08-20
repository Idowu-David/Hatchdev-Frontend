import "./App.css";

function App() {
  return (
    <>
      <div className="card-container">
        <div className="profile-pic-container">
          <img src="avatar-jessica.jpeg" className="profile-pic" />
          <p className="profile-name">Jessica Randall</p>
          <p className="city">London, United Kingdom</p>
          <p className="spec">"Front-end developer and avid reader"</p>
          <div className="social-media">
            <a href="#">Github</a>
            <a href="#">Frontend Mentor</a>
            <a href="#">Linkedln</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
