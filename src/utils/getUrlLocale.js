export default function getUrlLocales(url = window.location) {
    return url.pathname.split('/')[1];
}
