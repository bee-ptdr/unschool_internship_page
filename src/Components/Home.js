import React, { useState } from 'react';
import data from './Data';

function Home() {
    const [filterData, setFilterData] = useState([])

    if(filterData.length === 0){
        setFilterData(data)
    }

    const handleClick = (e) => {
        let text = e.target.innerText;
        if (text === "All") {
            setFilterData(data)
        } else {
            const filter = data.filter((ele, ind) => {
                return ele.type === text
            })
            setFilterData(filter)
        }
    }

    return (
        <>
            <section className='main_sec'>
                <div className="inner_container">
                    <div className="top_bar text-center text-white">
                        <h2>Our Internships</h2>
                    </div>
                    <div className="button_grp">
                        <button onClick={(e) => { handleClick(e) }}>All</button>
                        <button onClick={(e) => { handleClick(e) }}>Coding</button>
                        <button onClick={(e) => { handleClick(e) }}>Design</button>
                        <button onClick={(e) => { handleClick(e) }}>Finance</button>
                        <button onClick={(e) => { handleClick(e) }}>Management</button>
                        <button onClick={(e) => { handleClick(e) }}>Marketing</button>
                        <button onClick={(e) => { handleClick(e) }}>Technology</button>
                    </div>
                    <div className="category_container text-white">
                        <div className="row">
                            {
                                filterData.map((item, ind) => {
                                    return (
                                        <div className="col-md-6" key={ind}>
                                            <div className="internship_card">
                                                <div className="card_head d-flex">
                                                    <div className="left">
                                                        <b className='brand_color'>Work From Home - Project Internship</b>
                                                        <p className='mt-1 text-primary'>{item.company}</p>
                                                    </div>
                                                    <div className="right">
                                                        <img src="./logo/logo2.png" alt="logo" />
                                                    </div>
                                                </div>
                                                <div className="card_body mt-4">
                                                    <p><b className='brand_color'>Type : </b>{item.type}</p>
                                                    <div className="inner_body d-flex mt-4">
                                                        <div className="start me-4">
                                                            <b className='brand_color'>Start Date</b>
                                                            <p>Flexible</p>
                                                        </div>
                                                        <div className="duration me-4">
                                                            <b className='brand_color'>Duration</b>
                                                            <p>{item.duration}</p>
                                                        </div>
                                                        <div className="stipend me-4">
                                                            <b className='brand_color'>Stipend</b>
                                                            <p>{item.stipend}</p>
                                                        </div>
                                                        <div className="apply me-4">
                                                            <b className='brand_color'>Apply by</b>
                                                            <p>29th Feb 2024</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card_foot d-flex">
                                                    <div className="left">
                                                        <p className='text-primary'>{item.role}</p>
                                                    </div>
                                                    <div className="right">
                                                        <button>Apply Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Home
