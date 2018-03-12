import React, { Component } from "react"
import Moment from "react-moment"

class Event extends Component {
    render(){
        const tourInfo = this.props.tourInfo
        const date = tourInfo.datetime
        console.log(date)
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
                <button onClick={() => window.location = tourInfo.url} id="event-button">Buy Tickets</button>
            </div>
        )
    }
}

export default Event


//city:
// "Monterrey"
// country:
// "Mexico"
// latitude:
// "25.6768703"
// longitude:
// "-100.2899933"
// name:
// "Parque Fundidora"
// region:
// "NL"

// :
// {…}
// artist_id:
// "13054608"
// datetime:
// "2018-03-10T14:00:00"
// description:
// "Beyond Wonderland Monterrey"
// id:
// "21485119"
// lineup:
// Array[1]
// offers:
// Array[1]
// on_sale_datetime:
// "2017-11-06T17:00:00"
// url:
// "https://www.bandsintown.com/e/21485119?app_id=Music.at&came_from=267"
// venue:
// {…}

