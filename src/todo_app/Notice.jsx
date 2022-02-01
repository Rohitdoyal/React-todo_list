
import React from 'react';
import './notics.css';

function notice() {
  return <div className="Box">
<table>
  <tr>
    <th>instruction </th>
    <th> mark </th>
  </tr>
  <tr>
    <td>Active Task</td>
    <td><i className="'mark far fa-circle"></i></td>
  </tr>
  <tr>
    <td> completed Task </td>
    <td><i className="'mark far fa-check-circle"></i></td>
  </tr>
 
  <tr>
    <td>Remove Completed Tasks </td>
    <td><i className="fas fa-check-square"></i> </td>
  </tr>
  <tr>
    <td>Delete the task From todo </td>
    <td> <i className="fas fa-trash-alt"></i></td>
  </tr>
  <h6> Rohit Doyal ❤️ </h6>
</table>


</div>;

}

export default notice;






