'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Send } from 'lucide-react'

export default function AIReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Do you have digital records of the process you want to automate (tickets, orders, emails)?",
      options: ["Yes", "Partial", "No"]
    },
    {
      id: 2,
      question: "Is there a measurable KPI you want to improve (time, cost, error rate)?",
      options: ["Yes", "No"]
    },
    {
      id: 3,
      question: "Can you provide a subject-matter expert to support discovery?",
      options: ["Yes", "No"]
    },
    {
      id: 4,
      question: "Do you have APIs, CSV exports, or a data-access layer to integrate with?",
      options: ["Yes", "Partial", "No"]
    },
    {
      id: 5,
      question: "Are there regulatory or data residency constraints we should be aware of?",
      options: ["Yes", "No"]
    },
    {
      id: 6,
      question: "Do you have peak periods where additional capacity is needed?",
      options: ["Yes", "No"]
    },
    {
      id: 7,
      question: "Are you prepared to run a 4–8 week pilot with test metrics and acceptance criteria?",
      options: ["Yes", "No"]
    }
  ]

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResults = () => {
    const yesAnswers = Object.values(answers).filter(answer => answer === 'Yes').length
    const partialAnswers = Object.values(answers).filter(answer => answer === 'Partial').length
    const totalScore = yesAnswers + (partialAnswers * 0.5)
    
    setShowResults(true)
  }

  const getScoreLevel = (score: number) => {
    if (score >= 5) return { level: 'High', color: 'text-green-600', bgColor: 'bg-green-100' }
    if (score >= 3) return { level: 'Medium', color: 'text-yellow-600', bgColor: 'bg-yellow-100' }
    return { level: 'Low', color: 'text-red-600', bgColor: 'bg-red-100' }
  }

  const getRecommendations = (score: number) => {
    if (score >= 5) {
      return {
        title: "High Readiness",
        description: "You're ready for a pilot! We recommend fast-tracking your AI implementation.",
        action: "Book a consultation to start your pilot program"
      }
    }
    if (score >= 3) {
      return {
        title: "Medium Readiness",
        description: "You're on the right track. We recommend a short discovery phase to prepare your systems.",
        action: "Schedule a discovery call to plan your AI journey"
      }
    }
    return {
      title: "Low Readiness",
      description: "Let's start with a Pre-Qualification engagement to prepare your systems and data.",
      action: "Book a Pre-Qualification consultation"
    }
  }

  if (showResults) {
    const yesAnswers = Object.values(answers).filter(answer => answer === 'Yes').length
    const partialAnswers = Object.values(answers).filter(answer => answer === 'Partial').length
    const totalScore = yesAnswers + (partialAnswers * 0.5)
    const scoreInfo = getScoreLevel(totalScore)
    const recommendations = getRecommendations(totalScore)

    return (
      <section id="ai-readiness" className="section-padding brand-gradient">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <div className={`w-16 h-16 ${scoreInfo.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <CheckCircle className={`w-8 h-8 ${scoreInfo.color}`} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  AI Readiness Assessment Complete
                </h2>
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${scoreInfo.bgColor} ${scoreInfo.color} mb-4`}>
                  {scoreInfo.level} Readiness
                </div>
                <p className="text-lg text-gray-600">
                  Score: {totalScore.toFixed(1)}/7
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {recommendations.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {recommendations.description}
                </p>
                <p className="text-sm text-gray-500">
                  {recommendations.action}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="#contact"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>{recommendations.action}</span>
                  <Send className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    setShowResults(false)
                    setCurrentQuestion(0)
                    setAnswers({})
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="ai-readiness" className="section-padding brand-gradient">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Readiness Questionnaire
            </h2>
            <p className="text-lg text-gray-600">
              Take our 7-question assessment to see how ready your business is for AI automation.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      answers[currentQuestion] === option
                        ? 'border-primary-600 bg-primary-50 text-primary-900'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        answers[currentQuestion] === option
                          ? 'border-primary-600 bg-primary-600'
                          : 'border-gray-300'
                      }`}>
                        {answers[currentQuestion] === option && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              
              <button
                onClick={nextQuestion}
                disabled={!answers[currentQuestion]}
                className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
