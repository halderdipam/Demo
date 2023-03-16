import React, { useState, useEffect } from "react";

const Form = () => {
  const [inputs, setInput] = useState({
    number1: "",
    number2: "",
    number3: "",
    number4: "",
    number5: "",
    number6: "",
    number7: "",
    number8: "",
    number9: "",
    number10: "",
    target: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const {
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    number10,
    target,
  } = inputs;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const n1 = inputs.number1.split(",");
  const n2 = inputs.number2.split(",");
  const n3 = inputs.number3.split(",");
  const n4 = inputs.number4.split(",");
  const n5 = inputs.number5.split(",");
  const n6 = inputs.number6.split(",");
  const n7 = inputs.number7.split(",");
  const n8 = inputs.number8.split(",");
  const n9 = inputs.number9.split(",");
  const n10 = inputs.number10.split(",");

  var data = {
    Race_1: n1,
    Race_2: n2,
    Race_3: n3,
    Race_4: n4,
    Race_5: n5,
    Race_6: n6,
    Race_7: n7,
    Race_8: n8,
    Race_9: n9,
    Race_10: n10,
  };
  function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] == nameKey) {
        return true;
      }
    }
  }

  function findRace() {
    const res = [];
    for (const [key, value] of Object.entries(data)) {
      if (search(target, value)) {
        res.push(key);
      }
    }
    return res;
  }

  useEffect(() => {}, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    findRace();
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-md-5 offset-md-4 mt-3 p-8">
            <h3 style={{ textAlign: "center" }}>Find Race</h3>
            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="col">
                  <label for="formGroupExampleInput2">Race No 1.</label>
                  <input
                    type="text"
                    id="number1"
                    name="number1"
                    value={number1}
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>

                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 2.</label>
                  <input
                    type="text"
                    id="number2"
                    name="number2"
                    value={number2}
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 3.</label>
                  <input
                    type="text"
                    id="number3"
                    name="number3"
                    value={number3}
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 4.</label>
                  <input
                    type="text"
                    id="number4"
                    value={number4}
                    name="number4"
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 5.</label>
                  <input
                    type="text"
                    id="number5"
                    name="number5"
                    value={number5}
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 6.</label>
                  <input
                    type="text"
                    id="number6"
                    name="number6"
                    value={number6}
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 7.</label>
                  <input
                    type="text"
                    id="number7"
                    name="number7"
                    value={number7}
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 8.</label>
                  <input
                    type="text"
                    id="number8"
                    value={number8}
                    name="number8"
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 9.</label>
                  <input
                    type="text"
                    id="number9"
                    value={number9}
                    name="number9"
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
                <div class="col mt-2">
                  <label for="formGroupExampleInput2">Race No 10.</label>
                  <input
                    type="text"
                    id="number10"
                    value={number10}
                    name="number10"
                    class="form-control"
                    placeholder="1,2,3..."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="target"
                      name="target"
                      value={target}
                      onChange={handleChange}
                      placeholder="key.."
                    />
                  </div>
                </div>
                <div class="col-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-2"
                  >
                    Find
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br></br>
        {submitted ? (
          <div class="card text-center">
            <div class="card-header">OUT PUT</div>
            <div class="card-body">
              <p class="card-text">
                <h3>{target + " :--> " + findRace() + " "}</h3>
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
