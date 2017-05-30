import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            musicians: this.props.data,
            filterVal: -2
        };
    }

    onFilterChange = (event) => {
        this.setState({ filterVal: event.target.value });
    }

    render() {
        const tableRows = this.state.musicians.filter(m => m.stars >= this.state.filterVal).map((m) => {
            return (
                <tr key={m.id}>
                    <td>{m.id}</td><td>{m.name}</td><td>{m.stars}</td>
                </tr>
            );
        });

        return (
            <div>
                <h3>List of musicians</h3>
                <p>Show stars above: <input onChange={this.onFilterChange} /></p>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stars</th>
                    </tr>
                    {tableRows}
                </table>
            </div>
        );
    }
}

export default Table;