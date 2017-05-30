
class StudentInfoFactory {

  constructor() {
    this._studentsInfo = {};
    this.makeData();
  }

  get studentsInfo() {
    return this._studentsInfo;
  }

  makeData()  {
    this._studentsInfo.headers = [
      { courseId: 1000, courseName: "Basic Programming" },
      { courseId: 1001, courseName: "Advanced Programming" },
      { courseId: 1003, courseName: "DataBase Intro" }];
    this._studentsInfo.students = [];
    this._studentsInfo.students.push({ studentId: 100, name: "Peter Hansen", grades: [{ grade: 10 }, { grade: 12 }, {}] });
    this._studentsInfo.students.push({ studentId: 101, name: "Jan Olsen", grades: [{ grade: 7 }, { grade: 10 }, {}] });
    this._studentsInfo.students.push({ studentId: 102, name: "Gitte Poulsen", grades: [{ grade: 7 }, { grade: 7 }, {}] });
    this._studentsInfo.students.push({ studentId: 103, name: "John McDonald", grades: [{ grade: 10 }, {}, { grade: 7 }] })
  }
}

let info = new StudentInfoFactory();

//This is only for debugging purposes
window.info = info.studentsInfo;

export default info;
