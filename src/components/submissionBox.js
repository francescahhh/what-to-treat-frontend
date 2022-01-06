import React from "react"
import { useState } from "react";

function SubmissionForm() {
  const [name, setName] = useState("");

  return (
    <form className="Submission-form">
      <label>Submit a restaurant:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

export default SubmissionForm