import React from "react"
import { useState } from "react";

function SubmissionForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form className="Submission-form">
      {/* <label>Submit a restaurant: </label> */}
        <input
          type="text" 
          value={name}
          placeholder="Restaurant"
          onChange={(e) => setName(e.target.value)}
        />
     
      <input
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

    <input
        type="text"
        value={user}
        placeholder="User Name"
        onChange={(e) => setCategory(e.target.value)}
    />

      <button type="submit" >Add Restaurant</button>
    </form>
  )
}

export default SubmissionForm

//updated to handle multiple input fields with one submission button---name of restaurant you're submitting, category of food, user name