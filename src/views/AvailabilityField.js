import React, { useState } from 'react';
import '../styling/AvailabilityField.css';

function AvailabilityField({ availabilityPeriods, onAdd, onRemove }) {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [error, setError] = useState('');

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    };

    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    const handleAddClick = () => {
        if (!fromDate || !toDate) {
            setError("Both from and to dates are required.")
            return;
        }
        if (fromDate > toDate) {
            setError("From date must be before To date.");
            return;
        }
        try {
            onAdd(fromDate, toDate);
        } catch (error) {
            setError(error.message);
            return;
        }
        setFromDate('');
        setToDate('');
        setError('');
    };

    return (
        <div className='availabilityField'>
            <h3> Add availability periods here </h3>
            <span>From:</span>
            <input
                name='fromDate'
                type="date"
                value={fromDate}
                onChange={handleFromDateChange}

            />
            <span>To:</span>
            <input
                name='toDate'
                type="date"
                value={toDate}
                onChange={handleToDateChange}

            />
            <button onClick={handleAddClick}>Add</button>
            <div style={{ color: 'darkred', opacity: 0.75 }}>{error}</div>

            {availabilityPeriods.map((availability) => (
                <div key={`${availability.id}`}>
                    {console.log(availability.key)}
                    <span>From: {availability.fromDate} To: {availability.toDate}</span>
                    <button onClick={() => onRemove(availability)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default AvailabilityField;
