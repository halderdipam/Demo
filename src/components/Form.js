import React, { useState } from "react";

const Form = () => {
  const [inputs, setInput] = useState({
    number: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { number } = inputs;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };
   
  const c = inputs.number.split(',')
  const s = c.sort(function(a,b){
    return a - b;
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
   
    
  

  };

  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col col-md-4 offset-md-4 mt-3 p-8">
            <h3 style={{ textAlign: "center" }}>Number Sort App</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="firstName">Enter The Number</label>
                  <input
                    type="text"
                    value={number}
                    id="number"
                    name="number"
                    className="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary btn-block">
                Sort Number
              </button>
            </form>
          </div>
        </div>
        <br></br>
        {submitted ? (
          <div class="card text-center">
            <div class="card-header">OUT PUT</div>
            <div class="card-body">
              <p class="card-text">
              <h3>{s + " "}</h3>
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
