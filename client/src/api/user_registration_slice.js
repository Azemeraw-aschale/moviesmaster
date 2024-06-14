// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const saveEmployee = createAsyncThunk(
//   'employees/saveEmployee',
//   async (data) => {
//     const response = await axios.post('http://localhost:3001/create', data);
//     return response.data;
//   }
// );

// export const employeeSlice = createSlice({
//   name: 'employees',
//   initialState: {
//     name: '',
//     age: '',
//     country: '',
//     position: '',
//     year: '',
//     employees: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     setName: (state, action) => {
//       state.name = action.payload;
//     },
//     setAge: (state, action) => {
//       state.age = action.payload;
//     },
//     setCountry: (state, action) => {
//       state.country = action.payload;
//     },
//     setPosition: (state, action) => {
//       state.position = action.payload;
//     },
//     setYear: (state, action) => {
//       state.year = action.payload;
//     },
//     clearFields: (state) => {
//       state.name = '';
//       state.age = '';
//       state.country = '';
//       state.position = '';
//       state.year = '';
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(saveEmployee.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(saveEmployee.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.employees.push(action.payload);
//       })
//       .addCase(saveEmployee.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setName, setAge, setCountry, setPosition, setYear, clearFields } = employeeSlice.actions;
// export default employeeSlice.reducer;