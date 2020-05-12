import React from 'react'
import { Grid, ResponsiveContext } from 'grommet'

// FIXME bug here when columns/rows is string
const Responsive = ({ children, columns, rows, areas, ...props }) => {
  return (
    <ResponsiveContext.Consumer>
      {size => {
        // Take into consideration if not array is sent but a simple string
        let columnsVal = columns
        if (columns && columns[size]) {
          columnsVal = columns[size]
        }

        // Take into consideration if not array is sent but a simple string
        let rowsVal = rows
        if (rows && Array.isArray(rows) && rows[size]) {
          rowsVal = rows[size]
        }

        // Also if areas is a simple array not an object of arrays for
        // different sizes
        let areasVal = areas
        if (areas && !Array.isArray(areas)) areasVal = areas[size]

        return (
          <Grid
            {...props}
            areas={!areasVal ? undefined : areasVal}
            rows={!rowsVal ? size : rowsVal}
            columns={!columnsVal ? size : columnsVal}
          >
            {children}
          </Grid>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Responsive
