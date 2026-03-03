import React from 'react'

const App = () => {

  const submitHadler=(e)=>{
    e.preventDefault() // otherwise it follows default form attribute that is reloading on submission
    console.log("Form Submitted")
  }

  return (
    <>
    <form onSubmit={(e)=>
      submitHadler(e)
      }>
      <input type="text" placeholder=''/>
      <button>Submit</button>
    </form>
    </>
  )
}

export default App
