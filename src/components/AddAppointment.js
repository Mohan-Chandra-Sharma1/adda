import React, { Component } from 'react';
import InputMoment from 'input-moment';
import moment from 'moment';

class AddAppointment extends Component {

    state = {
        dateTime: moment().add(1, 'hour'),
        duration: 15
    };

    onDateChange = (newDateTime) => {
        this.setState({ newDateTime });
    }

    onDurationChange = (e) => {
        this.setState({ duration: e.target.value });
    }

    handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    }
    
    onAddAppointment = () => {
     // alert('A name was submitted: ' + this.state.name);
        let name = this.state.name;
        let phone = this.state.phone;
      let endTime = moment(this.state.dateTime).add(this.state.duration, 'minutes');
        
        this.props.onAddAppointment(this.state.dateTime.unix(), endTime.unix(),name, phone);
    }

    render() {
        let displayTime = this.state.dateTime.format('MMMM Do, YYYY (hh:mm a)');
        return (
            <div className="modal fade" id="add-appointment-model" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Appointment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputMoment
                                            moment={this.state.dateTime}
                                            minStep={1}
                                            hourStep={1}
                                            onChange={this.onDateChange}            
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Proposed Time</label>     
                                            <input readOnly type="text" className="form-control" value={displayTime}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Duration</label>
                                            <select onChange={this.onDurationChange} className="form-control" value={this.state.duration}>
                                                <option value="15">15 min</option>
                                                <option value="30">30 min</option>
                                                <option value="45">45 min</option>
                                                <option value="60">60 min</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Club House Price</label>     
                                            <input readOnly type="text" className="form-control" value={(this.state.duration/60)*500}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input name="name" type="text" className="form-control" 
                                            value={this.state.name} placeholder="Name"
                                            onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input name="phone" type="text" className="form-control" 
                                            value={this.state.phone} placeholder="Phone"
                                            onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button onClick={this.onAddAppointment} type="button" className="btn btn-primary" data-dismiss="modal">Add Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAppointment;