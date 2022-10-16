import React, { useState } from 'react'
import "./style.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const locations = [
    {
        value: 'A',
        label: 'A',
    },
    {
        value: 'B',
        label: 'B',
    },
    {
        value: 'C',
        label: 'C',
    },
    {
        value: 'D',
        label: 'D',
    },
];
//: React.ChangeEvent<HTMLInputElement>
function Filter() {
    const [data, setdata] = useState(["none", "none", "none", "none"])

    // export default function SelectTextFields() {
    const [loc, setLoc] = React.useState('A');

    const handleChange = (event) => {
        setLoc(event.target.value);
    };

    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <form action='' className='flex'>
                        <div className='box'>
                            {/* <TextField 
                                id="outlined-basic" 
                                value={data[0]==="none"?"":data[0]} 
                                onChange={(e)=>{
                                    setdata(e.target);
                                }}
                                label="Location" 
                                variant="outlined" 
                            /> */}
                            {/* <span>Lomcation</span>
                            <input type='text' placeholder='locatiom' /> */}

                            <TextField
                                id="outlined-select-currency"
                                select
                                label="location"
                                value={loc}
                                onChange={handleChange}
                            >
                                {locations.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </div>
                        <div className='box'>

                            <TextField
                                id="outlined-basic"
                                value={data[1] === "none" ? "" : data[1]}
                                onChange={(e) => {
                                    setdata(e.target);
                                }}
                                label="When"
                                variant="outlined"
                            />
                        </div>
                        <div className='box'>
                            <TextField
                                id="outlined-basic"
                                value={data[2] === "none" ? "" : data[2]}
                                onChange={(e) => {
                                    setdata(e.target);
                                }}
                                label="Price"
                                variant="outlined"
                            />
                        </div>
                        <div className='box'>
                            <TextField
                                id="outlined-basic"
                                value={data[3] === "none" ? "" : data[3]}
                                onChange={(e) => {
                                    setdata(e.target);
                                }}
                                label="Property Type"
                                variant="outlined"
                            />
                        </div>
                        <div className='box'>
                            <button className='btn'>Search</button>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}


export default Filter