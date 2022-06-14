const swurl=`${process.env.PUBLIC_URL}/sw.js`
console.log(swurl);
export const sw=()=>{
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(swurl)
}
}