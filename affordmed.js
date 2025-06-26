import React, { useState} from "react";
import axios from "axios";

function App() {
  const [formData,setFormData] = useState({url: "",expiry: "" });
  const [response,setResponse] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/submit", formData);
      setResponse(res.data.expiry);
    } catch (error) {
      setResponse("Error:");
      console.error("Error:", error);
    }
};
return (
    <div className="App" style={{ padding: "20px" }}>
      <h2>Login form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your url1"
          value={formData.name}
          onChange={handleChange}
          style={{ margin: "10px 0", padding: "5px" }}
        />
        <input
          type="text"
          name="name"
          placeholder="Your url2"
          value={formData.name}
          onChange={handleChange}
          style={{ margin: "10px 0", padding: "5px" }}
        />
        <input
          type="text"
          name="expiry"
          placeholder="The expiry message"
          value={formData.expiry}
          onChange={handleChange}
          style={{ margin: "10px 0", padding: "5px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          Submit
        </button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;