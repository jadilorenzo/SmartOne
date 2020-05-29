import React, { useContext } from 'react'
import { TextField, Radio } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { CurrentQuestionContext } from '../context/CurrentQuestionContext'
import { Question } from '../types'

export default () => {
  const [question, setQuestion] = useContext(CurrentQuestionContext)

  const handleTitleChange = (e: any) => {
    if (e !== null) {
      e.persist()
    } else {
      e = { target: { value: '' } }
    }

    setQuestion((q: Question) => ({
      ...q,
      question: e.target.value || ''
    }))
  }

  const handleOptionChange = (e: any, num: number) => {
    if (e !== null) {
      e.persist()
    } else {
      e = { target: { value: '' } }
    }

    let options = question.options
    options[num] = e.target.value || ''
    setQuestion((q: Question) => ({ ...q, options }))
  }

  const handleAnswerChange = (e: any) => {
    if (e !== null) {
      e.persist()
    } else {
      e = { target: { value: '' } }
    }
    setQuestion((q: Question) => ({
      ...q,
      answer: e.target.value || ''
    }))
  }

  return (
    <div className="QuestionFormContainer">
      <div>
        <TextField
          variant="outlined"
          value={question.question}
          label="Question"
          fullWidth
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <Radio disabled />
        <TextField
          className="OptionTextField"
          value={question.options[0]}
          onChange={(e: any) => handleOptionChange(e, 0)}
        />
      </div>
      <div>
        <Radio disabled />
        <TextField
          className="OptionTextField"
          value={question.options[1]}
          onChange={(e: any) => handleOptionChange(e, 1)}
        />
      </div>
      <div>
        <Radio disabled />
        <TextField
          className="OptionTextField"
          value={question.options[2]}
          onChange={(e: any) => handleOptionChange(e, 2)}
        />
      </div>
      <div>
        <Radio disabled />
        <TextField
          className="OptionTextField"
          value={question.options[3]}
          onChange={(e: any) => handleOptionChange(e, 3)}
        />
      </div>
      <Autocomplete
        options={question.options}
        inputValue={question.answer}
        onInputChange={handleAnswerChange}
        renderInput={params => (
          <TextField {...params} label="Answer" variant="outlined" />
        )}
      />
    </div>
  )
}