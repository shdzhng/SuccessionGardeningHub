import moment from 'moment';

export const columns = [
  {
    field: 'name',
    headerName: 'Crop Name',
    flex: 2,
    filterable: false,
  },
  {
    field: 'maturityTime',
    headerName: 'Days to Maturity',
    flex: 1.5,
    filterable: false,
  },
  {
    field: 'successionInterval',
    headerName: 'Succession Interval',
    flex: 1.5,
    filterable: false,
  },
  {
    field: '0',
    headerName: '1st',
    flex: 1,
    filterable: false,
    editable: true,
    type: 'date',
  },
  {
    field: '1',
    headerName: '2nd',
    flex: 1,
    filterable: false,
    type: 'date',
  },
  {
    field: '2',
    headerName: '3rd',
    flex: 1,
    filterable: false,
    type: 'date',
  },
  {
    field: '3',
    headerName: '4th',
    flex: 1,
    filterable: false,
    type: 'date',
  },
  {
    field: '4',
    headerName: '5th',
    flex: 1,
    filterable: false,
    type: 'date',
  },
  {
    field: '5',
    headerName: '6th',
    flex: 1,
    filterable: false,
    type: 'date',
  },
  {
    field: '6',
    headerName: '7th',
    flex: 1,
    filterable: false,
    type: 'date',
  },
  {
    field: '7',
    headerName: '8th',
    flex: 1,
    filterable: false,
    type: 'date',
  },
];
