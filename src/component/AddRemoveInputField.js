import React, { Component, useState } from "react";
// import "../css/addremove.css";
function AddRemoveInputField() {
  const [formData, setFormData] = useState([
    {
      name: "",
      email: "",
      title: "",
    },
  ]);
  const addInputField = () => {
    setFormData([
      ...formData,
      {
        name: "",
        email: "",
        title: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...formData];
    rows.splice(index, 1);
    setFormData(rows);
  };
  return (
    <div className="add-info-container">
      <div className="row">
        <div>
          {formData.map((index) => {
            const { name, email, title } = formData[index];
            return (
              <div key={index}>
                <div className="col">
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={(event) =>
                        setFormData(
                          formData.map((item, idx) =>
                            idx === index
                              ? { ...item, name: event.target.value }
                              : item
                          )
                        )
                      }
                      value={name}
                      name="name"
                      className="txtForm-1"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      onChange={(event) =>
                        setFormData(
                          formData.map((item, idx) =>
                            idx === index
                              ? { ...item, email: event.target.value }
                              : item
                          )
                        )
                      }
                      value={email}
                      name="email"
                      className="txtForm-1"
                      placeholder="Email Id"
                    />
                    <select
                      name="title"
                      value={title}
                      onChange={(event) =>
                        setFormData(
                          formData.map((item, idx) =>
                            idx === index
                              ? { ...item, title: event.target.value }
                              : item
                          )
                        )
                      }
                    >
                      <option value="CEO">CEO</option>
                      <option value="CTO">CTO</option>
                      <option value="COO">COO</option>
                    </select>
                    <button className="btn" onClick="">
                      Invite
                    </button>
                  </div>
                </div>
                <div className="col">
                  {formData.length !== 1 ? (
                    <button
                      className="btn"
                      onClick={() => removeInputFields(index)}
                    >
                      x
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
          <div className="row">
            <div className="col-sm-12">
              <button className="btn " onClick={addInputField}>
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}
export default AddRemoveInputField;
