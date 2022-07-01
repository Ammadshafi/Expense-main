const swurl=`${process.env.PUBLIC_URL}/sw.js`
export const sw=()=>{
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(swurl)
}
}