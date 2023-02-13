import React, { useMemo } from 'react'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { User } from "../../types/User";
import { pageSize } from '../../constants';
import AvatarCell from './Avatar';
import ActionTable from './ActionTable';

const container = { height: '60vh', width: '90%' }

interface UsersTableProps {
    rows: User[] | [];
    count: number;
}

const UsersTable: React.FC<UsersTableProps> = ({ rows, count }) => {

    const columns: GridColDef[] = useMemo(() => {
        return [
            {
                field: "avatar",
                headerName: "Avatar",
                renderCell: (params: GridCellParams) => (
                    <AvatarCell {...{ params }} />
                ),
                width: 15,
                minWidth: 100,
                filterable: false,
                sortable: false,
            },
            {
                field: 'name',
                headerName: 'Name',
                width: 200,
                editable: true,
            },
            {
                field: 'username',
                headerName: 'Username',
                width: 200,
                editable: true,
            },
            {
                field: 'email',
                headerName: 'Email Adress',
                width: 250,
                editable: true,
            },
            {
                field: 'phone',
                headerName: 'Phone Number',
                width: 200,
                editable: true,
            },
            {
                field: "actions",
                headerName: "Actions",
                renderCell: (params: GridCellParams) => (
                    <ActionTable {...{ params }} />
                ),
                width: 210,
                minWidth: 100,
                filterable: false,
                sortable: false,
                editable: false,
            },
        ]
    }, []);

    return (
        <Box sx={container}>
            <DataGrid
                rows={rows}
                columns={columns}
                rowCount={count}
                pageSize={pageSize}
                disableSelectionOnClick
                rowsPerPageOptions={[pageSize]}
            />
        </Box>
    )
}

export default UsersTable;