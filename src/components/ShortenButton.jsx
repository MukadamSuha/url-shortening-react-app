import React from 'react';

const ShortenButton = ({ disabled }) => (
    <button type="submit" className="btn" disabled={disabled}>
        {disabled ? 'Shortening...' : 'Shorten'}
    </button>
);

export default ShortenButton;