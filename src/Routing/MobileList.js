import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MobileList = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className="card" style={{ width: '18rem' }}>
                {/* <div className="card-body">
                    <h5 className="card-title">I Phone</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Rs 1,00,000</h6>
                    <p className="card-text">Voluptate non do incididunt enim magna nostrud exercitation pariatur ea et laborum.</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title"> One Plus </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Rs 30,000</h6>
                    <p className="card-text">Aliqua laborum anim aliqua velit consequat commodo labore irure proident occaecat non.</p>
                </div> */}
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <Link to='/products/mobile/iPhone' className='btn btn-primary'>iPhone</Link>
                    </li>
                    <li class="list-group-item">
                    <Link to='/products/mobile/Vivo' className='btn btn-primary'>Vivo</Link>
                    </li>
                    <li class="list-group-item">
                    <Link to='/products/mobile/samsung' className='btn btn-primary'> Samsung</Link>
                    </li>
                </ul>
            </div> 
            <Outlet />
            </div>
    )
}

export default MobileList