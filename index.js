const Glog = {}

Glog.debug = function (message = "",data = {}) {
    console.log('\x1b[36m%s\x1b[0m', "[CODE 100: SUCCESS]" +" "+ message+" "+ "was successfull 😉 Data => ",data);
}

Glog.clear_and_debug = function (message = "",data = {}) {
    console.clear()
    console.log('\x1b[36m%s\x1b[0m', "[CODE 100: SUCCESS]" +" "+ message+" "+ "was successfull 😉 Data => ",data);
}

Glog.error = function (message = "",data = {}) {
    console.log('\x1b[31m%s\x1b[0m', "[CODE 0: ERROR]" +" "+ message+" "+ "failed 😔 Data => ", data);
}

Glog.clear_and_showError = function(message="",data={}){
    console.clear()
    console.log('\x1b[31m%s\x1b[0m', "[CODE 0: ERROR]" +" "+ message+" "+ "failed 😔 Data => ", data);
}

module.exports = Glog