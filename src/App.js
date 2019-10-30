import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="continer-fluid">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 heght">
            <table className="table ">
              <tbody>
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Year</th>
                    <th>Made in</th>
                    <th>Degree</th>
                    <th>Pulled</th>
                  </tr>
                </thead>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default App;
