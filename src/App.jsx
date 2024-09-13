import { useState } from "react";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  // Function to add data
  function addData() {
    setData([...data, { name, email }]);
    setEmail("");
    setName("");
  }

  // Function to remove data by index
  function removeData(index) {
    const newData = data.filter((_, i) => i !== index); // Filter out the item by index
    setData(newData); // Update the state with the filtered data
  }

  return (
    <>
      <Header />
      <form action="" className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <TextField
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </form>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((obj, index) => (
              <TableRow key={index}>
                <TableCell align="right">{obj.name}</TableCell>
                <TableCell align="right">{obj.email}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => removeData(index)} // Use an arrow function here
                    variant="contained"
                    color="success"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
