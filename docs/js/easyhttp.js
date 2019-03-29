class EasyHTTP {
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
}

export const easyHTTP = new EasyHTTP;