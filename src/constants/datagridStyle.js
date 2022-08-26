import { colors } from './theme';

export const datagridStyle = {
  '&.MuiDataGrid-root': {
    width: 'fill',
    paddingRight: 3,
    paddingLeft: 3,
  },
  '& .MuiDataGrid-virtualScrollerRenderZone': {
    '& .MuiDataGrid-row': {
      '&:nth-of-type(1n)': { backgroundColor: `${colors.offGrey}50` },
      '&:nth-of-type(2n)': { backgroundColor: `${colors.offGrey}20` },
      '&:hover': {
        backgroundColor: colors.mediumGreen,
      },
    },
  },
  '& .MuiDataGrid-columnHeader': {
    fontWeight: 1200,
    '&. MuiDataGrid-columnSeparator': {
      color: 'red',
      backgroundColor: 'red',
    },
  },
  '& .MuiDataGrid-cell': {
    'border-bottom': `1px dashed ${colors.darkBrown}`,
  },
  '&.MuiDataGrid-root .MuiDataGrid-columnSeparator': {
    color: colors.darkBrown,
  },
  '&.MuiDataGrid-root .MuiDataGrid-cell': {
    display: 'flex',
    'padding-top': 7,
    flexDirection: 'column',
  },
  '&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer': {
    display: 'flex',
    'justify-content': 'center',
  },
  '&.MuiDataGrid-root .MuiDataGrid-footerContainer ': {
    'border-top': `1px solid ${colors.darkBrown}`,
  },
};
