import { useState, useMemo, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography } from '@mui/material';
import { useTable } from 'react-table';
import MaterialTable from 'material-table-jspdf-fix';

const MyTable = ({ courses }) => {

    const columns = [
        { title: 'Name', field: 'name', width: '1%' },
        { title: 'Number', field: 'number', editable: 'onUpdate', width: '5%' },
        { title: 'Grades', field: 'grades' },
    ];

    return (
        <MaterialTable
            title="Editable Table Example"
            columns={columns}
            data={data}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);
                            resolve();
                        }, 100);
                    }),
            }}
            options={{
                cellEditable: true,
                editable: true,
                tableLayout: 'fixed',
                rowStyle: {
                    overflowWrap: 'break-word'
                }
            }}
        />
    );

};
export default MyTable;