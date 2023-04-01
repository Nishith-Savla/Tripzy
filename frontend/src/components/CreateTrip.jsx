import React from "react";
import "../css/CreateTrip.css";

function CreateTrip() {
  return (
    <>
      <section id="create-trip">
        <header className="d-flex align-items-center g-3">
          <img src="img/logo/tripzy.png" width="60px" alt="" />
          <h1 className="secondary-font page-title larger-2">Tripzy</h1>
        </header>
        <h2 className="text-center trip-title">Create Trip</h2>
        <div className="d-flex justify-content-center">
          <div className="input-container">
            <div className="d-flex g-3">
              <div className="d-flex dir-col stretch">
                <label className="input-label" htmlFor="">
                  Title
                </label>
                <input
                  type="text"
                  id="trip-name"
                  name=""
                  placeholder="Title for the trip"
                />
              </div>
              <div className="d-flex dir-col stretch">
                <label className="input-label" htmlFor="ret-date">
                  Image
                </label>
                <input type="file" id="image" name="" />
              </div>
            </div>
            <div>
              <label className="input-label" htmlFor="">
                Description
              </label>
              <textarea
                name=""
                id=""
                cols="auto"
                rows={3}
                placeholder="Description for the trip"
                defaultValue={""}
              />
            </div>
            <div className="d-flex g-3">
              <div className="d-flex dir-col stretch">
                <label className="input-label" htmlFor="start-date">
                  Start Date
                </label>
                <input type="date" id="start-date" name="" />
              </div>
              <div className="d-flex dir-col stretch">
                <label className="input-label" htmlFor="ret-date">
                  Return Date
                </label>
                <input type="date" id="ret-date" name="" />
              </div>
            </div>
            <div className="d-flex dir-col stretch mb-1in">
              <label className="input-label" htmlFor="start-date">
                Map URL
              </label>
              <input
                type="text"
                id="start-date"
                name=""
                placeholder="Enter the google maps link"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateTrip;
