/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    const currentIP = queryIP.includes('.') ? queryIP.split(".") : queryIP.spliy(":");


    if(currentIP.length !== 4) return "Neither";

    for(let i = 0; i < currentIP.length; i++) {
        let currentStr = currentIP[i];

        if(currentStr.match(/^[0-9]+$/)) {
            return "IPv4";
        }

        if(currentStr.match(/^[a-fA-F0-9]+$/)){
            return "IPv6";
        }
    }

    return "Neither";
};