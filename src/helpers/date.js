export function transformDate(dateToFormat) {
    return new Date(dateToFormat).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

export function transformDateTitle(dateToFormat) {
    return new Date(dateToFormat).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    });
}
