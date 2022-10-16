import React, { useState } from 'react'
import "./style.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const property = [
    {
        value: 'Housing',
        label: 'Housing',
    },
    {
        value: 'Rent',
        label: 'Rent',
    },
    {
        value: 'Office',
        label: 'Office',
    }
];
//"<$1000", "between $1000 to $2000", "between $2000 to $3000",">$3000"
const price = [
    {
        value: '$1000',
        label: '<$1000',
    },
    {
        value: 'between $1000 to $2000',
        label: 'between $1000 to $2000',
    },
    {
        value: 'between $2000 to $3000',
        label: 'between $2000 to $3000',
    },
    {
        value: '>$3000',
        label: '>$3000',
    },
];
function Filter(props) {
    const [data, setdata] = useState(["none", "none", "none", "none"])

    const [type, settype] = React.useState('');
    const [startDate, setStartDate] = useState("none");
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div className='form flex'>
                        <div className='box'>
                            <TextField
                                id="outlined-basic"
                                value={props.filter.location}
                                onChange={(e) => {
                                    props.setFilter({ ...props.filter, "location": e.target.value });
                                }}
                                label="Location"
                                variant="outlined"
                            />
                        </div>
                        <div className='box'>
                            <DatePicker
                                selected={startDate === "none" ? "" : startDate}
                                placeholderText="When"
                                onChange={(date: Date) => setStartDate(date)}
                            />
                        </div>
                        <div className='box'>
                            {/* <TextField
                                id="outlined-basic"
                                value={data[2] === "none" ? "" : data[2]}
                                onChange={(e) => {
                                    setdata(e.target);
                                }}
                                label="Price"
                                type="number"

                                variant="outlined"
                            /> */}
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Price"
                                value={props.filter.price}
                                onChange={(e) => {
                                    props.setFilter({ ...props.filter, "price": e.target.value });
                                    console.log(e);
                                }}
                            >
                                {price.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className='box'>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Property Type"
                                value={type}
                                onChange={(event) => {
                                    settype(event.target.value);
                                }}
                            >
                                {property.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className='box' onClick={props.handlefilter} >
                            <button className='btn'>Apply</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Filter