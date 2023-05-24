import {
    Button,
    Card,
    CardContent,
    Typography
} from "@mui/material";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import React from "react";
import {DataGrid} from '@mui/x-data-grid';


const Weather = (props) => {
    debugger
    let onDateFromChange = (newValue) => {
        let date = newValue.format('YYYY-MM-DD')
        props.setDateFrom(date);

    }

    let onDateToChange = (newValue) => {
        let date = newValue.format('YYYY-MM-DD')
        props.setDateTo(date);

    }
    const columns = [
        {field: 'date', headerName: 'DATE', width: 150},
        {
            field: 'temperature',
            headerName: 'Temperature',
            width: 100,
            editable: true,
        }]
    return <div >

        <div className="container p-3  col-6 align-content-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker views={['year', 'month', 'day']}
                                    onChange={onDateFromChange}
                                    format="L HH:mm"/>
                    <DateTimePicker views={['year', 'month', 'day']}
                                    onChange={onDateToChange}
                                    format="L HH:mm"/>
                </DemoContainer>
            </LocalizationProvider>
            <span className='col-4 align-content-center  '>
            <Button className="" onClick={props.getWeatherToday} variant="contained">Get Weather</Button>
        </span>
        </div>
        <div className="  align-content-center">
            <DataGrid columns={columns} rows={props.weather}/>

        </div>
    </div>
}


export default Weather;