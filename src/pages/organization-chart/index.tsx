import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const OrganizationChart = () => {
  const classes = useStyles();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [messArray, setMessArray] = useState<string[] | undefined>(undefined);
  const employeeData = useSelector(
    (state: RootState) => state.employee.employeeData
  );
  console.log(employeeData);
  useEffect(() => {
    const meses = employeeData.reduce((acc, obj) => {
      acc.add(obj.Mes);
      return acc;
    }, new Set());
    const messArray: string[] = Array.from(meses).map((mes) => String(mes));

    setMessArray(messArray);
  }, [employeeData]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedMonth = event.target.value as string;
    setSelectedMonth(selectedMonth);
  };

  return (
    <div>
      Organization chart
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="month-select-label">Month</InputLabel>
          <Select
            labelId="month-select-label"
            id="month-select"
            value={selectedMonth}
            onChange={handleChange}
            label="Month"
          >
            {messArray &&
              messArray.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default OrganizationChart;
