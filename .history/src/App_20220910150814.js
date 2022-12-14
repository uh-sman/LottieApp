import "./App.css";

function App() {
  return (
    <div className="App">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player
        src="https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop
        controls
        autoplay
      ></lottie-player>
    </div>
  );
}

export default App;
