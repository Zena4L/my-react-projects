import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const styles = {
    backgroundColor: "#7950f2",
    color: "#fff",
  };

  // event handlers
  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function handleModal() {
    setIsOpen((is) => !is);
  }

  return (
    <div>
      <button className="close" onClick={handleModal}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active " : " "}>1</div>
            <div className={step >= 2 ? "active " : " "}>2</div>
            <div className={step >= 3 ? "active " : " "}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button style={styles} onClick={handlePrev}>
              Previous
            </button>
            <button style={styles} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;