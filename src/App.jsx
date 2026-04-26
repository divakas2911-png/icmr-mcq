import { useState } from 'react'
import TestDetail from './TestDetail'
import TestScreen from './TestScreen'
import ResultScreen from './ResultScreen'
import biostatTest1 from './data/biostatistics-test1'
import './App.css'

const tests = [
  { id: 1, title: "Biostatistics - Test 1 - 100 MCQs", questions: 100, category: "Biostatistics", data: biostatTest1 },
]

function App() {
  const [selectedTest, setSelectedTest] = useState(null)
  const [screen, setScreen] = useState('list') // list | detail | test | result
  const [testAnswers, setTestAnswers] = useState(null)
  const [timeTaken, setTimeTaken] = useState(0)

  function selectTest(test) {
    setSelectedTest(test)
    setScreen('detail')
  }

  function startTest() {
    setScreen('test')
  }

  function finishTest(answers, elapsed) {
    setTestAnswers(answers)
    setTimeTaken(elapsed)
    setScreen('result')
  }

  function backToList() {
    setSelectedTest(null)
    setTestAnswers(null)
    setScreen('list')
  }

  function backToDetail() {
    setTestAnswers(null)
    setScreen('detail')
  }

  if (screen === 'result' && selectedTest) {
    return (
      <ResultScreen
        questions={selectedTest.data}
        answers={testAnswers}
        testTitle={selectedTest.title}
        timeTaken={timeTaken}
        onBack={backToList}
      />
    )
  }

  if (screen === 'test' && selectedTest) {
    return (
      <TestScreen
        questions={selectedTest.data}
        testTitle={selectedTest.title}
        onFinish={finishTest}
        onQuit={backToDetail}
      />
    )
  }

  if (screen === 'detail' && selectedTest) {
    return (
      <TestDetail
        test={selectedTest}
        onBack={backToList}
        onStart={startTest}
      />
    )
  }

  return (
    <div className="container">
      <header className="header">
        <div className="logo">ICMR</div>
        <h1>ICMR MCQ Tests</h1>
        <p className="subtitle">Indian Council of Medical Research — Practice Tests</p>
      </header>

      <section className="test-list">
        {tests.map((test) => (
          <button
            key={test.id}
            className="test-card"
            onClick={() => selectTest(test)}
          >
            <div className="test-card-left">
              <span className="test-card-badge">{test.category}</span>
              <h2 className="test-card-title">{test.title}</h2>
              <p className="test-card-meta">{test.questions} Questions &middot; +1 / -1/3 Marking</p>
            </div>
            <span className="test-card-arrow">&rarr;</span>
          </button>
        ))}
      </section>

      <footer className="footer">
        ICMR MCQ Tests
      </footer>
    </div>
  )
}

export default App
