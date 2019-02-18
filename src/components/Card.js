import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    &:hover {
        text-Decoration:none;
        color: black
    }
    color: black
`

export default function Card(props) {
    let card_url = props.type === "openday" ? "/openday/day".concat(props.index) : "/graduateprogram"

    return (
        <div className="col-12 col-sm-4" style={{ paddingTop: '10px' }}>
            <div className="card" style={{ width: '18rem' }}>
                <Link to={card_url}>
                    <img src="http://www.ignytebrands.com/wp-content/uploads/gray.png"
                        className="card-img-top mx-auto d-block"
                        alt="..." />
                </Link>

                <StyledLink to={card_url}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ height: '30px' }}>
                            {props.title}
                        </h5>
                    </div>
                </StyledLink>

            </div>
        </div>
    )
}