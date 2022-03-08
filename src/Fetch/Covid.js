import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Covid = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await axios.get('https://corona.lmao.ninja/v2/countries')
        console.log(res.data);
        setUsers(res.data)
    }


    useEffect(() => {
        getUsers()
    }, [])


    return (
        <>
            <h2>Updated Corona List</h2>
        <div className="d-flex justify-content-start flex-wrap"> 
            {
                users.map((user) => 
                    <div className="card" style={{width: '18rem',alignContent:'space-between'}}>
                        <img className="card-img-top" src = {user.countryInfo.flag} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                    </div>
                )
            }
        </div>
    </>
    )
}

export default Covid