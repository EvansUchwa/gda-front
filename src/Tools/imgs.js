export function returnImg(imgUrl, type) {
    if (['https://www.gda-services.com/public/candidats/image/',
        'https://www.gda-services.com/public/pages/'].includes(imgUrl)) {
        return 'https://raw.githubusercontent.com/EvansUchwa/Evans-img/main/defaultUserPic.png'
    }
}