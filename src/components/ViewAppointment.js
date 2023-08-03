import React, { Component } from 'react';
import moment from 'moment';

class ViewAppointment extends Component{

  render = (appointment) =>{
   let startTime = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
   let endTime = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');
   let name = appointment.name;
   let phone = appointment.phone;
    return (
      <div className="modal fade" id="view-appointment-model" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                            <h5 className="modal-title">Appointment Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                  </div>
                  <div className="modal-body">
                       <div className="container">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                  <label>Start Time</label>
                                  <span>{startTime}</span>
                              </div>       
                            </div>
                            <div className="col-md-6">


                            </div>
                            <div className="col-md-6">


                            </div>
                            <div className="col-md-6">
                           </div>
                          </div>
                      </div> 
                  </div>
              </div>
           </div>
      </div>
    )
  }
}
export default ViewAppointment;