import moment from 'moment';
import React from 'react';

import {
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    APPOINTMENT_FAIL,
    APPOINTMENT_VIEW
} from './types';

export const addAppointment = (startTime, endTime, name, phone) => {
    return async (dispatch, getState) => {
        
        dispatch({ type: APPOINTMENT_FAIL, payload: '' });

        try {
            if(startTime < moment().unix()) {
                dispatch({ type: APPOINTMENT_FAIL, payload: 'You are adding an appointment thst is in the past. Only future date appointments can be set. Please try again' });
                return
            }

            // check for a time overlap
            let overlap = false;
            let appointments = getState().appointments;

            appointments.items.forEach((appointment) => {
                if ((startTime >= appointment.startTime && startTime <= appointment.endTime) || (endTime >= appointment.startTime && endTime <= appointment.endTime)) {
                    overlap = true;
                }
            })

            if (overlap) {
                dispatch({ type: APPOINTMENT_FAIL, payload: 'You are adding an appointment that has an overlap conflict with your current appointments. Please try again' });
            } else {
                let appointment = {
                    startTime,
                    endTime,
                    name,
                    phone
                }
    
                dispatch({ type: ADD_APPOINTMENT, payload: appointment });
            }
        } catch (error) {
            dispatch({ type: APPOINTMENT_FAIL, payload: 'Appointment failed to be added - contact technical support' });
        }
    };
};

export const deleteAppointment = (appointmentId) => {
    return async (dispatch) => {
        dispatch({ type: APPOINTMENT_FAIL, payload: '' });

        try {
            // normally some asyn logic goes here to delete the data from the database
            
            dispatch({ type: DELETE_APPOINTMENT, payload: appointmentId});
        } catch (error) {
            //console.log('Failed to delete appointment', error);
            dispatch({ type: APPOINTMENT_FAIL, payload: 'Appointment failed to be deleted - contact technical support' });
        }
    };
};

/*export const viewAppointment = (startTime, endTime, name, phone) => {
  //console.log(startTime);
   return async (dispatch, getState) => {
        
        dispatch({ type: APPOINTMENT_FAIL, payload: '' });

        try {
            if(startTime < moment().unix()) {
                dispatch({ type: APPOINTMENT_FAIL, payload: 'You are adding an appointment thst is in the past. Only future date appointments can be set. Please try again' });
                return
            }

            // check for a time overlap
            let overlap = false;
            let appointments = getState().appointments;

            appointments.items.forEach((appointment) => {
                if ((startTime >= appointment.startTime && startTime <= appointment.endTime) || (endTime >= appointment.startTime && endTime <= appointment.endTime)) {
                    overlap = true;
                }
            })

            if (overlap) {
                dispatch({ type: APPOINTMENT_FAIL, payload: 'You are adding an appointment that has an overlap conflict with your current appointments. Please try again' });
            } else {
                let appointment = {
                    startTime,
                    endTime,
                    name,
                    phone
                }
    
                dispatch({ type: ADD_APPOINTMENT, payload: appointment });
            }
        } catch (error) {
            dispatch({ type: APPOINTMENT_FAIL, payload: 'Appointment failed to be Viewed - contact technical support' });
        }
    };
};*/