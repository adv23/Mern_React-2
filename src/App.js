import "./App.css"
import Calculator from "./components/Calculator"


function App() {
  const AppStyle = {
    width: "100%",
    height: "100vh",
  }
  const CalculatorStyle = {
    width: "280px",
    height: "380px",
  }
  return (
    <div
      className="Gradient-bg d-flex justify-content-center align-items-center"
      style={AppStyle}
    >
      <div style={CalculatorStyle}>
        <Calculator />
      </div>
    </div>
  )
}

export default App