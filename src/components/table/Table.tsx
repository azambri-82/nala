import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DataTable = ({ data }: any) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mes</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Fecha de ingreso</TableCell>
            <TableCell>Sueldo bruto</TableCell>
            <TableCell>División</TableCell>
            <TableCell>Área</TableCell>
            <TableCell>Subárea</TableCell>
            <TableCell>ID Lider</TableCell>
            <TableCell>Nivel Jerárquico</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.ID}>
              <TableCell component="th" scope="row">
                {row.Mes}
              </TableCell>
              <TableCell>{row.Nombre}</TableCell>
              <TableCell>{row.ID}</TableCell>
              <TableCell>{row["Fecha de ingreso"]}</TableCell>
              <TableCell>{row["Sueldo  bruto"]}</TableCell>
              <TableCell>{row.División}</TableCell>
              <TableCell>{row.Area}</TableCell>
              <TableCell>{row.Subarea}</TableCell>
              <TableCell>{row["ID Lider"]}</TableCell>
              <TableCell>{row["Nivel Jerárquico"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
