import React, { useState } from 'react';
import '../styling/AvailabilityField.css'; // Assuming you have or will create this CSS file

function AvailabilityField({ availabilityPeriods, onAdd, onRemove }) {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    };

    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    const handleAddClick = () => {
        onAdd(fromDate, toDate);
        setFromDate('');
        setToDate('');
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

            {availabilityPeriods.map(availability =>
                <div>
                <span>From: {availability.fromDate} To: {availability.toDate}</span>
                </div>
                )}

        </div>
    );
}

export default AvailabilityField;
