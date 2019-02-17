import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import OpenDayList from '../components/OpenDayList'
import OpenDayListDays from '../Utils/days_data'
import styled from 'styled-components'

export default class OpenDay extends Component {
    constructor() {
        super()
        this.state = {
            day_number: 0
        }
    }

    componentDidMount() {
        this.setState({
            day_number: this.props.match.params.day_id
        })
    }


    render() {
        const StyledLink = styled(Link)`
          &:hover {
              text-decoration:none;
              color: black
        }`

        const listsOfDay = OpenDayListDays.map(item =>
            <OpenDayList key={item.id}
                list_id={item.id}
                text={item.text}
                day_number={this.state.day_number} />)

        return (
            <div className="list-group">
                <h3>OpenDay'18_Day {this.props.match.params.day_id}</h3>
                <StyledLink to={`/openday/day${this.props.match.params.list_id}`}>
                    {listsOfDay}
                </StyledLink>
            </div>
        )
    }
}