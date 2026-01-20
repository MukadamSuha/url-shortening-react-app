import React from 'react';

const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
};

const UrlList = ({ urls = [], onRemove }) => {
    if (!Array.isArray(urls) || urls.length === 0) {
        return <p className="no-urls">No shortened URLs yet.</p>;
    }

    return (
        <ul className="url-list">
            {urls.map((item) => (
                <li key={item.id} className="url-item">
                    <div className="short-row">
                        <a href={item.shortUrl} target="_blank" rel="noopener noreferrer" className="short">
                            {item.shortUrl}
                        </a>
                        <div className="actions">
                            <button
                                className="small"
                                onClick={() => copyToClipboard(item.shortUrl)}
                                title="Copy short URL"
                            >
                                Copy
                            </button>
                            {onRemove && (
                                <button className="small danger" onClick={() => onRemove(item.id)} title="Remove">
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="original">{item.url}</div>
                </li>
            ))}
        </ul>
    );
};

export default UrlList;