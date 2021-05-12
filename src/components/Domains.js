import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {DataGrid} from '@material-ui/data-grid';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    container: {
        height: '650px'
    }
}))

const columns = [
    {field: 'id', headerName: 'ID', width: 200},
    {field: 'host', headerName: 'Domain', width: 700},
    {field: 'source', headerName: 'Source', width: 250},
];

export default function Domains() {
    const classes = useStyles();
    const [rows, setRows] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/domain/all', {
            headers: {'x-api-key': process.env.REACT_APP_API_KEY}
        }).then((res) => {
            setRows(res.data)
        })
    })

    return (
        <div className={classes.container}>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection/>
        </div>
    )

}