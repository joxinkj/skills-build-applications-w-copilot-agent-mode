
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-body">
                <h1 className="card-title display-5 mb-3 text-primary">Welcome to Octofit Tracker</h1>
                <p className="card-text lead mb-4">
                  Track your fitness, join teams, and compete on the leaderboard!
                </p>
                <a className="btn btn-success btn-lg mb-3" href="#">Get Started</a>
                <table className="table table-striped table-bordered mt-4">
                  <thead className="table-primary">
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User Profiles</td>
                      <td>Manage your fitness profile and progress.</td>
                    </tr>
                    <tr>
                      <td>Activity Logging</td>
                      <td>Log workouts and track your stats.</td>
                    </tr>
                    <tr>
                      <td>Teams</td>
                      <td>Create or join teams for group motivation.</td>
                    </tr>
                    <tr>
                      <td>Leaderboard</td>
                      <td>See how you rank against others.</td>
                    </tr>
                    <tr>
                      <td>Workouts</td>
                      <td>Get personalized workout suggestions.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Example Bootstrap Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Welcome!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              This is a sample Bootstrap modal for Octofit Tracker.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
