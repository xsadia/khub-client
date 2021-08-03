export function isGfycatLink(url: string) {
    const urlStart = url.split('//')[1].substring(0, 6);

    if (urlStart === 'gfycat') {
        return true;
    }

    return false;
}