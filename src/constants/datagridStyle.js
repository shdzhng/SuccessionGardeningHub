import { colors } from './theme';

export const datagridStyle = {
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
  '&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer': {
    display: 'flex',
    'justify-content': 'center',
  },
  '&.MuiDataGrid-root .MuiDataGrid-footerContainer ': {
    'border-top': `1px solid ${colors.darkBrown}`,
  },
};
