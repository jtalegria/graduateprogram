import React, { Component } from 'react'

import CardSmall from '../components/CardSmall'
import OpenDayDescription from '../Utils/descriptions_data'


export default class List extends Component {
    constructor() {
        super()
        this.state = {
            selectedList: 0,
            listOfLists: OpenDayDescription
        }
    }

    componentDidMount() {
        this.setState({
            selectedList: this.props.match.params.list_id,
        })
    }


    render() {
        const listOfDescriptions = this.state.listOfLists.map(p => p.descriptions)
        const listToReturn = listOfDescriptions[this.props.match.params.list_id - 1]

        const cardsToReturn = listToReturn.map(i => <CardSmall key={i} text={i} />)

        const listNumber = (this.props.match.params.list_id) < 10 ? "0" + this.props.match.params.list_id : this.props.match.params.list_id

        console.log(listNumber)
        return (
            <div className="container">
                <h1>List {listNumber}</h1>
                <div className="row">
                    {cardsToReturn}
                </div>
            </div>
        )
    }
}
