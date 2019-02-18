import React from 'react'
import { Link } from 'react-router-dom'

export default function OpenDayList(props) {
    return (
        <div className="list-group" style={{ paddingTop: '10px' }}>
            <Link to={`/openday/day${props.day_number}/list${props.list_id}`}
                className="list-group-item list-group-item-action">
                {props.text}
            </Link>
        </div>
    )
}

