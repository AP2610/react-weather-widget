export default class APIHelper {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    setBaseUrl(url){
        this.baseUrl = url;
    }
    getBaseUrl(){
        const baseUrl = this.baseUrl
        return baseUrl;
    }
    get(endPoint){
        const url = this.baseUrl + endPoint;
        const apiCall = fetch(url).then(response => response.json())
        return apiCall;
        
    }
    // To be used for HTTP compression"
    getWithHeaders(endPoint){
        const url = this.baseUrl + endPoint;
        const apiCall = fetch(url, {
            headers: {
                'Accept-Encoding': 'gzip'
            }
        }).then(response => response.json())
        return apiCall;
    }
    post(endPoint, data){
        const url = this.baseUrl + endPoint;
        const apiCall = fetch (url, 
        {
            method: "POST",
            headers: {
                "Content-Type": "applicationn/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        return apiCall;
    }
}