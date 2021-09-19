import React from 'react'
import Detail from './ItemDetail'
import Main from './main'
const Details = () => {
    return (
        <div className ="row row-cols-1  row-cols-md-2">
            <div className ="col-7">
                <Detail/>
            </div>
            <div className="col">
                <Main/>
            </div>

        </div>
    )
}

export default Details
