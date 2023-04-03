export function createUrlWithParameters(url: string, parameters: { [s: string]: string | number; } | ArrayLike<string | number>): string {
    let requestUrl = url + "?";
    let isFirst = true;
    for (const [key, value] of Object.entries(parameters)) {
        const parameter = `${key}=${value}`;
        if (isFirst) {
            requestUrl += parameter;
            isFirst = false;
        } else {
            requestUrl += `&${parameter}`
        }
    }
    return requestUrl;
}