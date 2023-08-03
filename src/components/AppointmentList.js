import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteAppointment } from '../actions';
import * as viewAppointment  from '../actions';
import  ViewAppointment  from './ViewAppointment';

const myStyles={
  fontSize: '15px',
  textAlign: 'center',
  fontColor: "#669509;",
  backgroundColor: "red"
}

class AppointmentList extends Component {
    onDeleteAppointment = (appointmentId) => {
        this.props.deleteAppointment(appointmentId);
    }
    onViewAppointment = (timeStamp, duration, name, phone) => {
        this.props.viewAppointment(timeStamp, duration, name, phone);
    }
    renderAppointment = (appointment) => {
        let startTime = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
        let endTime = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');
        let name = appointment.name;
        let phone = appointment.phone;
        return (
            <div style={myStyles}>
            <li key={appointment.id} className="list-group-item">
                <strong>Starting Time: </strong>
                <span>{startTime}</span><br/>
                <strong>Ending Time: </strong>
                <span>{endTime}</span><br/>
                <strong>Name: </strong>
                <span>{name}</span><br/>
                <strong>Phone: </strong>
                <span>{phone}</span><br/>
                <button onClick={this.onDeleteAppointment.bind(this, appointment.id)} className="btn btn-sm btn-warning float-right">delete</button>
            </li>
            </div>
        );
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.appointments.map(this.renderAppointment)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {
    deleteAppointment,
    viewAppointment
})(AppointmentList);