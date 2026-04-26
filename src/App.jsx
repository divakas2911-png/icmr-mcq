import { useState } from 'react'
import TestDetail from './TestDetail'
import TestScreen from './TestScreen'
import ResultScreen from './ResultScreen'
import biostatTest1 from './data/biostatistics-test1'
import biostatTest2 from './data/biostatistics-test2'
import biostatTest3 from './data/biostatistics-test3'
import biostatTest4 from './data/biostatistics-test4'
import biostatTest5 from './data/biostatistics-test5'
import biostatTest6 from './data/biostatistics-test6'
import biostatTest7 from './data/biostatistics-test7'
import biostatTest8 from './data/biostatistics-test8'
import './App.css'

const tests = [
  { id: 1, title: "Biostatistics - Test 1 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest1, description: "Core fundamentals across all 5 syllabus topics" },
  { id: 2, title: "Biostatistics - Test 2 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest2, description: "Clinical contexts (hemoglobin, BP, vaccine trials, ICU)" },
  { id: 3, title: "Biostatistics - Test 3 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest3, description: "Calculation-heavy problems, tricky scenarios" },
  { id: 4, title: "Biostatistics - Test 4 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest4, description: "Trimmed/harmonic means, pooled variance, Bayesian reasoning, equivalence testing" },
  { id: 5, title: "Biostatistics - Test 5 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest5, description: "Distribution properties, z-scores, non-parametric vs parametric selection" },
  { id: 6, title: "Biostatistics - Test 6 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest6, description: "Transformations, probability trees, serial/parallel testing, power analysis" },
  { id: 7, title: "Biostatistics - Test 7 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest7, description: "Skewed data, likelihood ratios, p-value misconceptions, non-parametric equivalents" },
  { id: 8, title: "Biostatistics - Test 8 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest8, description: "Grouped data, Chebyshev's inequality, Poisson/binomial applications, multiple corrections" },
]

const categories = [...new Set(tests.map(t => t.category))]

function App() {
  const [selectedTest, setSelectedTest] = useState(null)
  const [screen, setScreen] = useState('list') // list | detail | test | result
  const [testAnswers, setTestAnswers] = useState(null)
  const [timeTaken, setTimeTaken] = useState(0)
  const [activeCategory, setActiveCategory] = useState(categories[0])

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

  const filteredTests = tests.filter(t => t.category === activeCategory)

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">ICMR</div>
        <h1>ICMR MCQ Tests</h1>
        <p className="subtitle">Indian Council of Medical Research — Practice Tests</p>
      </header>

      <div className="home-body">
        <aside className="sidebar">
          <div className="sidebar-title">Subjects</div>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`sidebar-tab ${activeCategory === cat ? 'sidebar-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </aside>

        <main className="main-content">
          <h2 className="main-content-title">{activeCategory}</h2>
          <p className="main-content-subtitle">{filteredTests.length} tests available</p>
          <section className="test-list">
            {filteredTests.map((test) => (
              <button
                key={test.id}
                className="test-card"
                onClick={() => selectTest(test)}
              >
                <div className="test-card-left">
                  <h2 className="test-card-title">{test.title}</h2>
                  <p className="test-card-desc">{test.description}</p>
                  <p className="test-card-meta">{test.questions} Questions &middot; +1 / -1/3 Marking</p>
                </div>
                <span className="test-card-arrow">&rarr;</span>
              </button>
            ))}
          </section>
        </main>
      </div>

      <footer className="footer">
        ICMR MCQ Tests
      </footer>
    </div>
  )
}

export default App
