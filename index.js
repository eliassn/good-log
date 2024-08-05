/// <reference path="./index.d.ts"/>
// @ts-check
class Glog {
  /** @type {import('Glog-types').Glog_method_type} */
  debug(message, data) {
    console.log('\x1b[36m%s\x1b[0m', "[CODE 100: SUCCESS]" + " " + message + " " + "was successfull 😉 Data => ", data);
  }
  /** @type {import('Glog-types').Glog_method_type} */
  clear_and_debug(message, data) {
    console.clear()
    console.log('\x1b[36m%s\x1b[0m', "[CODE 100: SUCCESS]" + " " + message + " " + "was successfull 😉 Data => ", data);
  }
  /** @type {import('Glog-types').Glog_method_type} */
  error(message, data) {
    console.log('\x1b[31m%s\x1b[0m', "[CODE 0: ERROR]" + " " + message + " " + "failed 😔 Data => ", data);
  }
  /** @type {import('Glog-types').Glog_method_type} */
  clear_and_showError(message, data) {
    console.clear()
    console.log('\x1b[31m%s\x1b[0m', "[CODE 0: ERROR]" + " " + message + " " + "failed 😔 Data => ", data);
  }
}

module.exports = Glog