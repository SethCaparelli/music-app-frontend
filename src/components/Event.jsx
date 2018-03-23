import React, { Component } from "react"
import Moment from "react-moment"

class Event extends Component {
    render(){
        const tourInfo = this.props.tourInfo
        const date = tourInfo.datetime
        return(
            <div id="tour">
                <div id="name">
                    <h3 className="tour-info"><i className="fa fa-building" aria-hidden="true"></i> Venue</h3>
                    <p>{tourInfo.venue.name}</p>
                </div>
                <div id="date">
                    <h3 className="tour-info"><i className="fa fa-calendar" aria-hidden="true"></i> Date</h3>
                    <Moment format="MMM Do YY">{date}</Moment>
                </div>
                <div id="location">
                    <h3 className="tour-info"><i className="fa fa-globe" aria-hidden="true"></i> Location</h3>
                    <p>{tourInfo.venue.city}, {tourInfo.venue.region} {tourInfo.venue.country}</p>
                </div>
                <button onClick={() => window.open(tourInfo.url, "_blank")} id="event-button">Buy Tickets</button>
            </div>
        )
    }
}

export default Event
