import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "reactstrap";

function LastAttemptsComponent(props) {

    const getRowClass = (a) => {
        if (a % 3 == 0) return 'table-danger';
        if (a % 3 == 1) return 'table-warning';
        if (a % 3 == 2) return 'table-success';
      };

    return (
        <Table style={{ width: "600px", height: "200px" }} striped hover borderless>
            <thead>
                <tr>
                    <th>답안 ID</th>
                    <th>사용자</th>
                    <th>컴퓨터</th>
                    <th>결과</th>
                </tr>
            </thead>
            <tbody>
            {props.lastAttempts.map(a => (
                <tr key={a.id} style={{ color: a.outcome === '승'? 'green' : a.outcome === '패'? 'red' : 'black' }} className={getRowClass(a.id)}>
                    <td>{a.id}</td>
                    <td>{a.user}</td>
                    <td>{a.opponent}</td>
                    <td>{a.outcome}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default LastAttemptsComponent;