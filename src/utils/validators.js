export const isValidUrl = (url) => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])?)\\.)+([a-z]{2,}|[a-z\\d-]{2,})|' + // domain name
        'localhost|' + // localhost
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
        '\\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\\]?)' + // IPv6
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!urlPattern.test(url);
};

export const isEmpty = (value) => {
    return !value || value.trim().length === 0;
};

export function validateUrl(value) {
    const str = String(value || '').trim();
    // Accepts http(s) or bare domains; minimal validation
    const pattern = /^(https?:\/\/)?([^\s./?#]+\.)+[^\s]{2,}(\/\S*)?$/i;
    return pattern.test(str);
}