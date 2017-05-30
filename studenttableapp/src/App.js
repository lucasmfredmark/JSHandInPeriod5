import React, { Component } from 'react';
import './App.css';
import info from './dataModel';
import StudentTable from './StudentTable'

class App extends Component {
 
  render() {
    var studentInfo = info.studentsInfo;
    var headerCount = studentInfo.headers.length;
    var studentCount = studentInfo.students.length;

    return (
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">
          <h4>The studentsInfo structure contains two lists:</h4>
          <p>One with all the required headers, whis is a total of ({studentInfo.headers.length})</p>
          <p>One with all the Students, whis is a total of ({studentInfo.students.length})</p>
          <p>Use the empty table below, or move it (you must eventually) into a separate component</p>
          <StudentTable data={studentInfo} />
        </div>
      </div>
    );
  }
}

export default App;
