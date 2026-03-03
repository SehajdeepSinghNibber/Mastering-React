import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [notes,setNotes]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Form Submitted")

    if(description === "" || title === ""){
      alert("Enter both title and description")
    }
    else{

      setNotes([...notes,{title,description}])

      console.log(notes)

      setDescription("")
      setTitle("")
    }
  }

  const deleteNote=(e)=>{
    // const updatedNotes = notes.filter((_, index) => index !== e)
    const updatedNotes=[...notes]
    updatedNotes.splice(e,1)
    setNotes(updatedNotes)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form className='flex flex-col p-10 gap-4 lg:w-1/2'
      onKeyDown={(e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
          submitHandler(e)
        }
      }}
      onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input 
        type="text" 
        placeholder='Enter Notes'
        className='px-5 py-2 w-full border-2 rounded outline-none font-medium'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <textarea
        type="text" 
        placeholder='Enter Description'
        className='px-5 h-32 w-full py-2 border-2 rounded outline-none font-medium'
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }} 
        />
        <button className='bg-white text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className="container flex flex-wrap gap-5 mt-5 overflow-y-auto flex-1 w-screen bg-amber-100 p-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className="h-52 w-40 rounded bg-white text-black p-3 flex flex-col"
          >
            <h3 className="font-bold">{note.title}</h3>

            <p className="text-sm mt-2 wrap-break-word flex-1 overflow-y-auto sleek-scroll">
              {note.description}
            </p>

            <button
              onClick={() => deleteNote(index)}
              className="bg-red-600 py-1 text-white rounded w-full mt-auto"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default App