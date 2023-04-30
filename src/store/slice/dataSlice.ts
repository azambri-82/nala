import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmployeeData {
  Mes: string;
  Nombre: string;
  ID: string;
  Fecha_de_ingreso: string;
  Sueldo_bruto: string;
  División: string;
  Area: string;
  Subarea: string;
  ID_Lider: string;
  Nivel_Jerárquico: string;
}

interface EmployeeState {
  employeeData: EmployeeData[];
}

const initialState: EmployeeState = {
  employeeData: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeData: (state, action: PayloadAction<EmployeeData[]>) => {
      state.employeeData = action.payload;
    },
    filterEmployeeData: (state, action: PayloadAction<string>) => {
      state.employeeData = state.employeeData.filter(
        (employee) => employee.Mes === action.payload
      );
    },
  },
});

export const { setEmployeeData, filterEmployeeData } = employeeSlice.actions;

export default employeeSlice.reducer;
