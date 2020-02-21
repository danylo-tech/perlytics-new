import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const SimpleTable = props => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>App Name</TableCell>
            <TableCell align="right">Launches</TableCell>
            <TableCell align="right">Seconds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
            <TableRow key={row.app_name}>
              <TableCell component="th" scope="row">
                <Link to={`/app/${row.app_name}`}>{row.app_name}</Link>
              </TableCell>
              <TableCell align="right">{row.launches}</TableCell>
              <TableCell align="right">{row.seconds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default SimpleTable;
