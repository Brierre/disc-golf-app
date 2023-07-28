import React, { useState } from "react";

const EditHoleForm = ({ editedHole, onSave, onCancel }) => {
    const [holeNumber, setHoleNumber] = useState(editedHole.holeNumber);
    const [distanceInFeet, setDistanceInFeet] = useState(editedHole.distanceInFeet);
    const [par, setPar] = useState(editedHole.par);

    const handleSave = () => {
        const updatedHole = {
            ...editedHole,
            holeNumber,
            distanceInFeet,
            par,
        };
        onSave(updatedHole);
    };

    return (
        <div>
            <label>
                <input
                    className="form-elements"
                    type="text"
                    placeholder="hole number"
                    value={holeNumber}
                    onChange={(e) => setHoleNumber(e.target.value)}
                />
            </label>
            <label>
                <input
                    className="form-elements"
                    type="text"
                    placeholder="distance in feet"
                    value={distanceInFeet}
                    onChange={(e) => setDistanceInFeet(e.target.value)}
                />
            </label>
            <label>
                <input
                    className="form-elements"
                    type="text"
                    placeholder="par"
                    value={par}
                    onChange={(e) => setPar(e.target.value)}
                />
            </label>
            <div className="glow-container">
            <button className="glow-on-hover" onClick={handleSave}>Save</button>
            </div>
            <div className="glow-container">
            <button className="glow-on-hover" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EditHoleForm;