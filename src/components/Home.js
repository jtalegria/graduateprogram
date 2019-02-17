import React from 'react'

import Card from '../components/Card';
import Jumbotron from '../components/Jumbotron';

export default function Home() {
    return (
        <div>
            <Jumbotron />

            <div className="container">
                <h3>Open Day '18</h3>
                <div className="row">
                    <Card title="Day 01" index="01" type="openday"/>
                    <Card title="Day 02" index="02" type="openday"/>
                    <Card title="Day 03" index="03" type="openday"/>
                </div>

                <br />

                <h3>Graduate Program</h3>
                <div className="row">
                    <Card title="Day 01" type="graduateprogram"/>
                    <Card title="Day 02" type="graduateprogram"/>
                    <Card title="Day 03" type="graduateprogram"/>
                </div>
            </div>
        </div>
    )
}
