import React, { useState } from 'react'
import "./style.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const property_type = [
    {
        value: 'Buy',
        label: 'Buy',
    },
    {
        value: 'Sell',
        label: 'Sell',
    },
    {
        value: 'Rent',
        label: 'Rent',
    },
    {
        value: 'Commercial',
        label: 'Commercial',
    }
];
const price = [
    {
        value: '0-1,000',
        label: 'less than $1000',
    },
    {
        value: '1,000-2,000',
        label: 'between $1000 to $2000',
    },
    {
        value: '2,000-3,000',
        label: 'between $2000 to $3000',
    },
    {
        value: '3,000-8,000',
        label: '>$3000',
    },
];
function Filter(props) {
    const [type, settype] = React.useState('');
    const [startDate, setStartDate] = useState("none");
    return (
        <>
            <div className='container'>
                <div className='form flex'>
                    <div className='box'>
                        <div className="box-inside">
                            <TextField
                                fullWidth
                                className='field'
                                id="outlined-basic"
                                value={props.filter.location}
                                onChange={(e) => {
                                    props.setFilter({ ...props.filter, "location": e.target.value });
                                }}
                                label="Location"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className='box datepicker'>
                        <div className="box-inside">
                            <DatePicker
                                selected={startDate === "none" ? "" : startDate}
                                placeholderText="When"
                                onChange={(date: Date) => setStartDate(date)}
                            />
                        </div>
                    </div>
                    <div className='box'>
                        <div className="box-inside">
                            <TextField
                                fullWidth
                                id="outlined-select-currency"
                                select
                                label="Price"
                                value={props.filter.price}
                                onChange={(e) => {
                                    props.setFilter({ ...props.filter, "price": e.target.value });
                                }}
                            >
                                {price.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    <div className='box'>
                        <div className="box-inside">
                            <TextField
                                fullWidth
                                id="outlined-select-currency"
                                select
                                label="Property Type"
                                value={props.filter.property_type}
                                onChange={(e) => {
                                    props.setFilter({ ...props.filter, "property_type": e.target.value });
                                }}
                            >
                                {property_type.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    <div className='box box-btn' onClick={props.handlefilter} >
                        <button className='btn'>Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Filter