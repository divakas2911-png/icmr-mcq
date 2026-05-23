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
import dtTest1 from './data/diagnostic-tests-test1'
import dtTest2 from './data/diagnostic-tests-test2'
import dtTest3 from './data/diagnostic-tests-test3'
import dtTest4 from './data/diagnostic-tests-test4'
import dtTest5 from './data/diagnostic-tests-test5'
import dtTest6 from './data/diagnostic-tests-test6'
import dtTest7 from './data/diagnostic-tests-test7'
import dtTest8 from './data/diagnostic-tests-test8'
import cdTest1 from './data/communicable-diseases-test1'
import cdTest2 from './data/communicable-diseases-test2'
import cdTest3 from './data/communicable-diseases-test3'
import cdTest4 from './data/communicable-diseases-test4'
import cdTest5 from './data/communicable-diseases-test5'
import cdTest6 from './data/communicable-diseases-test6'
import cdTest7 from './data/communicable-diseases-test7'
import cdTest8 from './data/communicable-diseases-test8'
import ncdTest1 from './data/non-communicable-diseases-test1'
import ncdTest2 from './data/non-communicable-diseases-test2'
import ncdTest3 from './data/non-communicable-diseases-test3'
import ncdTest4 from './data/non-communicable-diseases-test4'
import ncdTest5 from './data/non-communicable-diseases-test5'
import ncdTest6 from './data/non-communicable-diseases-test6'
import ncdTest7 from './data/non-communicable-diseases-test7'
import ncdTest8 from './data/non-communicable-diseases-test8'
import rchTest1 from './data/rch-nutrition-test1'
import rchTest2 from './data/rch-nutrition-test2'
import rchTest3 from './data/rch-nutrition-test3'
import rchTest4 from './data/rch-nutrition-test4'
import rchTest5 from './data/rch-nutrition-test5'
import rchTest6 from './data/rch-nutrition-test6'
import rchTest7 from './data/rch-nutrition-test7'
import rchTest8 from './data/rch-nutrition-test8'
import geneticsTest1 from './data/genetics-test1'
import geneticsTest2 from './data/genetics-test2'
import geneticsTest3 from './data/genetics-test3'
import geneticsTest4 from './data/genetics-test4'
import geneticsTest5 from './data/genetics-test5'
import geneticsTest6 from './data/genetics-test6'
import geneticsTest7 from './data/genetics-test7'
import geneticsTest8 from './data/genetics-test8'
import geneticsTest9 from './data/genetics-test9'
import geneticsTest10 from './data/genetics-test10'
import geneticsTest11 from './data/genetics-test11'
import geneticsTest12 from './data/genetics-test12'
import geneticsTest13 from './data/genetics-test13'
import geneticsTest14 from './data/genetics-test14'
import geneticsTest15 from './data/genetics-test15'
import geneticsTest16 from './data/genetics-test16'
import molecularBiologyTest1 from './data/molecular-biology-test1'
import molecularBiologyTest2 from './data/molecular-biology-test2'
import molecularBiologyTest3 from './data/molecular-biology-test3'
import molecularBiologyTest4 from './data/molecular-biology-test4'
import molecularBiologyTest5 from './data/molecular-biology-test5'
import molecularBiologyTest6 from './data/molecular-biology-test6'
import molecularBiologyTest7 from './data/molecular-biology-test7'
import molecularBiologyTest8 from './data/molecular-biology-test8'
import molecularBiologyTest9 from './data/molecular-biology-test9'
import molecularBiologyTest10 from './data/molecular-biology-test10'
import molecularBiologyTest11 from './data/molecular-biology-test11'
import molecularBiologyTest12 from './data/molecular-biology-test12'
import molecularBiologyTest13 from './data/molecular-biology-test13'
import molecularBiologyTest14 from './data/molecular-biology-test14'
import molecularBiologyTest15 from './data/molecular-biology-test15'
import molecularBiologyTest16 from './data/molecular-biology-test16'
import microscopyStainingTest1 from './data/microscopy-staining-microbial-test1'
import './App.css'

const tests = []

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
