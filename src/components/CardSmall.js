import React from 'react'

export default function CardSmall(props) {
    return (
        <div className="col-12 col-sm-4" style={{ paddingTop: '10px' }}>
            <div className="card" style={{ width: '18rem' }}>
                <img src="http://www.ignytebrands.com/wp-content/uploads/gray.png"
                    className="card-img-top mx-auto d-block"
                    /*style={{paddingTop:'3px', width:'100px', height:'100px'}}*/
                    alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{props.text}</h5>
                </div>
            </div>
        </div>
    )
}