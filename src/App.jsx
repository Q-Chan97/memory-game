import GameBoard from "./components/Gameboard.jsx"

export default function MainContent() {
  return (
    <div>
      <header className="header-wrapper">
      <div>
        <h1 className="main-title">Memory Game</h1>
        <h2>Do your best to select each card only once!</h2>
      </div>
      <article className="score-wrapper">
        <p>Current Score: 0</p>
        <p>Best Score: 0</p>
        </article>
      </header>
      <main>
        <GameBoard />
      </main>
    </div>
  )
}