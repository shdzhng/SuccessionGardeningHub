import './App.css';
import { useState, useEffect } from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from '@mui/x-data-grid';
import { colors } from './constants/theme';

import {
  TextField,
  Box,
  Button,
  Autocomplete,
  Paper,
  Modal,
  Typography,
  Grid,
  ButtonGroup,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { columns } from './constants/columns';
import { datagridStyle } from './constants/datagridStyle';
import { cropData } from './constants/data';
import { theme } from './constants/theme';
import { addDays } from './hooks/addDays';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import SaveIcon from '@mui/icons-material/Save';

const LOCAL_STORAGE_KEY = 'succession_gardening';

function App() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [deletedRows, setDeletedRows] = useState(null);
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  }, []);

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rows));
  };

  const handleRemove = () => {
    setRows(
      rows.filter((r) => deletedRows.filter((sr) => sr.id === r.id).length < 1)
    );
  };

  const handleAdd = () => {
    if (!selectedCrop) return;
    const id = Date.parse(new Date()) + Math.random();
    setRows((prev) => [
      ...prev,
      {
        ...selectedCrop,
        id,
      },
    ]);
    setSelectedCrop(null);
  };

  const handleDateEdit = ({ id, value }) => {
    const obj = rows.find((row) => row.id === id);
    const filteredRows = rows.filter((row) => row !== obj);
    const successionInterval = obj.successionInterval;
    let prev = null;
    const dataToAmmend = {};

    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        prev = value;
        dataToAmmend[i] = value;
      }
      dataToAmmend[i] = addDays(prev, successionInterval);
      prev = dataToAmmend[i];
    }
    const returnedObj = { ...obj, ...dataToAmmend };
    setRows([...filteredRows, returnedObj]);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            marginLeft: 2,
            marginRight: 2,
            marginTop: 4,
            borderRadius: 2,
            height: '80vh',
            width: '70vw',
          }}
        >
          <DataGrid
            columns={columns}
            rows={rows}
            density="compact"
            checkboxSelection
            onCellEditCommit={(data) => {
              handleDateEdit(data);
            }}
            onSelectionModelChange={(selection) => {
              const rowsToDelete = rows.filter((row) =>
                selection.includes(row.id)
              );
              setDeletedRows(rowsToDelete);
            }}
            sx={datagridStyle}
            components={{
              Toolbar: () => {
                return (
                  <GridToolbarContainer sx={{ justifyContent: 'flex-end' }}>
                    <GridToolbarExport />
                  </GridToolbarContainer>
                );
              },
            }}
            initialState={{
              sorting: { sortModel: [{ field: 'firstPlanting', sort: 'asc' }] },
            }}
          />
          <Box sx={{ display: 'flex', alignContent: 'center', marginTop: 2 }}>
            <Autocomplete
              disablePortal
              options={cropData}
              onChange={(e, value) => {
                setSelectedCrop(value);
              }}
              clearText="true"
              sx={{ width: '40vw', minWidth: '120px' }}
              selectOnFocus
              clearOnBlur
              renderInput={(params) => (
                <TextField {...params} label="Add Crop" />
              )}
              groupBy={(option) => option.type}
              getOptionLabel={({ name }) => name}
              renderOption={(
                props,
                { name, maturityTime, successionInterval }
              ) => (
                <Box
                  component="li"
                  sx={{
                    display: 'flex',
                    margin: 1,
                    borderRadius: 2,
                    bgcolor: 'background.dirt',
                    boxShadow: 1,
                    '&:hover': {
                      boxShadow: 3,
                      bgcolor: `${colors.darkGreen} !important`,
                      color: colors.offWhite,
                    },
                    '&:focus-within': {
                      boxShadow: 3,
                      bgcolor: `${colors.darkGreen} !important`,
                      color: colors.offWhite,
                    },
                  }}
                  {...props}
                >
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={4}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="autocomplete-title">{`${name}`}</Typography>
                    </Grid>
                    <Grid
                      item
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="start"
                      xs={8}
                      sx={{ margin: 0 }}
                    >
                      <Typography variant="autocomplete-descrip">{`Maturity Time: ${maturityTime} Days`}</Typography>
                      <Typography variant="autocomplete-descrip">{`Interval: ${successionInterval} Days`}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}
            />
            <ButtonGroup
              variant="outlined"
              aria-label="outlined primary button group"
            >
              <Button
                variant="contained"
                sx={{
                  alignSelf: 'center',

                  marginLeft: 1,
                  width: '10vw',
                  minWidth: '40px',
                  height: '56px',
                }}
                onClick={handleAdd}
              >
                <PlaylistAddIcon />
              </Button>

              <Button
                variant="contained"
                sx={{
                  alignSelf: 'center',
                  marginLeft: 1,
                  height: '56px',
                  width: '10vw',
                  minWidth: '40px',
                }}
                onClick={() => setOpen(true)}
              >
                <PlaylistRemoveIcon />
              </Button>
            </ButtonGroup>
            <Button
              variant="contained"
              sx={{
                alignSelf: 'center',
                marginLeft: 1,
                height: '56px',
                width: '10vw',
                minWidth: '40px',
              }}
              onClick={handleSave}
            >
              <SaveIcon />
            </Button>

            <Modal open={open} onClose={() => setOpen(false)}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  border: `1px solid ${colors.darkGreen}`,
                  boxShadow: 24,
                  p: 4,
                }}
              >
                {deletedRows ? (
                  <>
                    <Typography variant="h6" component="h2">
                      Are you sure you want to remove?
                    </Typography>
                    <Button
                      onClick={() => {
                        handleRemove();
                        setOpen(false);
                      }}
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      No
                    </Button>
                  </>
                ) : (
                  <Typography variant="h6" component="h2">
                    There's nothing to selected
                  </Typography>
                )}
              </Box>
            </Modal>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
