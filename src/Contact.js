import {useState} from "react"
import axios from 'axios'

const Contact = () => {
    const [status, setStatus] = useState("Submit")

    const handleSubmit = async (event) => {
      event.preventDefault()
      setStatus("Sending...")
      const {name, email, message} = event.target.elements
      let details = {
          name: name.value,
          email: email.value,
          message: message.value,
      }
      try {
          let response = await axios.post("http://localhost:3001/contact", details, {
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
            })
          setStatus("Submit");
          alert(response.data.status);
      } catch (error) {
          setStatus("Submit")
          alert("Failed to send message")
        }
      }

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
      </form>
    )
}

export default Contact
