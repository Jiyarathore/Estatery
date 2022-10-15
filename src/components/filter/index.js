import React from 'react'
import "./style.css";

function Filter() {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <form action='' className='flex'>
                        <div className='box'>
                            <span>Locatiom</span>
                            <input type='text' placeholder='locatiom' />
                        </div>
                        <div className='box'>
                            <span>When</span>
                            <input type='text' placeholder='Select Move-in Date' />
                        </div>
                        <div className='box'>
                            <span>Price</span>
                            <input type='text' placeholder='price' />
                        </div>
                        <div className='box'>
                            <span>Property Type</span>
                            <input type='text' placeholder='locatiom' />
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