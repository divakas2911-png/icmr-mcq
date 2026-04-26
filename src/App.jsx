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
import rmTest1 from './data/research-methodology-test1'
import rmTest2 from './data/research-methodology-test2'
import rmTest3 from './data/research-methodology-test3'
import rmTest4 from './data/research-methodology-test4'
import rmTest5 from './data/research-methodology-test5'
import rmTest6 from './data/research-methodology-test6'
import rmTest7 from './data/research-methodology-test7'
import rmTest8 from './data/research-methodology-test8'
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
  { id: 9, title: "Research Methodology - Test 1 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest1, description: "Core fundamentals: study designs, incidence/prevalence, RR/OR, bias, screening" },
  { id: 10, title: "Research Methodology - Test 2 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest2, description: "Clinical contexts: drug trials, vaccination studies, hospital-based studies" },
  { id: 11, title: "Research Methodology - Test 3 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest3, description: "Calculation-heavy: person-time, Mantel-Haenszel OR, serial testing, lead-time bias" },
  { id: 12, title: "Research Methodology - Test 4 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest4, description: "Crossover trials, factorial designs, cluster RCTs, Berkson's/Neyman bias, PPV/NPV" },
  { id: 13, title: "Research Methodology - Test 5 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest5, description: "Ecological studies, ITT vs per-protocol, PAR%, effect modification, ROC curves" },
  { id: 14, title: "Research Methodology - Test 6 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest6, description: "Clinical trial phases, adaptive designs, herd immunity, overdiagnosis, Fagan nomogram" },
  { id: 15, title: "Research Methodology - Test 7 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest7, description: "Mendelian randomization, propensity scores, CONSORT/STROBE, immortal time bias" },
  { id: 16, title: "Research Methodology - Test 8 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest8, description: "Case-crossover, DALYs, Bradford Hill criteria, publication bias, mass vs targeted screening" },
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
