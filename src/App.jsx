// @author: Amir Armion
// @version: V.01

import { useState } from 'react';
import "./App.css";

function App() 
{
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  function handleSubmit(e)
  {
    e.preventDefault();

    if(score < 5 && comment.length <= 10)
    {
      alert("Please provide a comment explaining why the experience was poor!");
    }
    else if(comment.length > 0)
    {
      console.log(`Form has submitted! The score is: ${score} and comment is: ${comment}`);
      setComment("");
      setScore(10);
    }
    else
    {
      console.log("Form has submitted! with no comment.");
      setComment("");
      setScore(10);
    }
  }

  return (
    <div >
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <h1>Feedback Form</h1>
            <label htmlFor="">Score: {score} &#11088;</label>
            <br /><br />
            <input  type="range" 
                    min="0"
                    max="10"        
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
            />
          </div>

          <br />

          <div className='comment'>
            <label htmlFor="">Comment:</label>
            <textarea name="" 
                      id="" 
                      cols="20" 
                      rows="10"
                      value={comment}
                      placeholder="Please type your comment here..."
                      onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <br />

          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
