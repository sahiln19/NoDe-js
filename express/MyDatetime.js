
let getCurrentDate = () =>  
    {
        let d1 = new Date();
        let today = d1.getDate() + "/" + (d1.getMonth()+1) + "/" + d1.getFullYear();
        return(today);
    }

function getCurrentTime()
{
    let d1 = new Date();
    let now = d1.getHours() + ":" + d1.getMinutes() + ":" + d1.getSeconds() ;
    return now;
}

function getHours(){
    return new Date().getHours();
}

let getCurrentDateTime = function()
{
    let currentdatetime = getCurrentDate() + "" + getCurrentTime();
    return currentdatetime;
}

module.exports.getDate = getCurrentDate;
module.exports.getHours = getHours
module.exports.getTime = getCurrentTime;
module.exports.getDateTime =  getCurrentDateTime;