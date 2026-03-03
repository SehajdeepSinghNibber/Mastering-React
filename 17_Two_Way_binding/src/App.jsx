import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const submitHadler=(e)=>{
    e.preventDefault()
    console.log("Form Submitted")

    setTitle('')
  }

  return (
    <>
    <form onSubmit={(e)=>
      submitHadler(e)
      }>
      <input type="text"
      placeholder=''
      value={title}
      onChange={(e)=>{
        console.log(e.target)
        setTitle(e.target.value)
      }}
      />
      <button>Submit</button>
    </form>
    </>
  )
}

export default App
