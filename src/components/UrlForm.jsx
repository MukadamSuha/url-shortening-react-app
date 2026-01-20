import React, { useState } from 'react';
import { validateUrl } from '../utils/validators';
import { shortenUrl } from '../api/shorten';
import ShortenButton from './ShortenButton';

const UrlForm = ({ onAdd }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const url = value.trim();
        if (!validateUrl(url)) {
            setError('Please enter a valid URL (include http/https or domain).');
            return;
        }
        setLoading(true);
        try {
            const result = await shortenUrl(url);
            onAdd(result);
            setValue('');
        } catch (err) {
            setError('Failed to shorten URL.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="url-form" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Enter URL to shorten (e.g. https://example.com)"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-label="URL"
            />
            <ShortenButton disabled={loading} />
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default UrlForm;