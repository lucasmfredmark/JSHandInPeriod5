import React from 'react';

class StudentTable extends React.Component {
    render() {
        let studentInfo = this.props.data;
        
        let tableHeader = (
            <thead>
                <tr>
                <th></th>
                {studentInfo.headers.map(h => {
                    return <th key={h.courseId}>{h.courseName}</th>
                })}
                <th>Average</th>
                </tr>
            </thead>
        );

        let tableBody = (
            <tbody>
                {studentInfo.students.map(s => {
                return (
                    <tr key={s.studentId}>
                    <td>{s.name}</td>
                    {s.grades.map((g, i) => {
                        return <td key={i}>{g.grade ? g.grade : ''}</td>
                    })}
                    <td>
                        {s.grades.filter(g => {
                        return g.grade ? true : false;
                        }).map((g, i, a) => g.grade / a.length).reduce((p, c) => p + c)}
                    </td>
                    </tr>
                )
                })}
            </tbody>
        );

        return (
            <table className="table">
                {tableHeader}
                {tableBody}
            </table>
        );
    }
}

export default StudentTable;