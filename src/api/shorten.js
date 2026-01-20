// Use CleanURI (https://cleanuri.com/docs) to shorten URLs without adding axios
export const shortenUrl = async(url) => {
    const API = '/api/shorten'; // use dev-server proxy (relative URL)

    try {
        const res = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`CleanURI error: ${res.status} ${text}`);
        }

        const data = await res.json();
        if (!data || !data.result_url) {
            throw new Error('Invalid response from CleanURI');
        }

        const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        const shortUrl = data.result_url;

        return { id, url, shortUrl };
    } catch (err) {
        throw err;
    }
};