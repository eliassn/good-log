/// <reference types="./index.d.ts"/>
// @ts-check
export class Glog {
  /** @type {import('Glog-types').debug} */
  debug(message, data) {
    console.log('\x1b[36m%s\x1b[0m', "[CODE 100: SUCCESS]" + " " + message + " " + "was successfull 😉 Data => ", data);
  }
  /** @type {import('Glog-types').clear_and_debug} */
  clear_and_debug(message, data) {
    console.clear()
    console.log('\x1b[36m%s\x1b[0m', "[CODE 100: SUCCESS]" + " " + message + " " + "was successfull 😉 Data => ", data);
  }
  /** @type {import('Glog-types').error} */
  error(message, data) {
    console.log('\x1b[31m%s\x1b[0m', "[CODE 0: ERROR]" + " " + message + " " + "failed 😔 Data => ", data);
  }
  /** @type {import('Glog-types').clear_and_showError} */
  clear_and_showError(message, data) {
    console.clear()
    console.log('\x1b[31m%s\x1b[0m', "[CODE 0: ERROR]" + " " + message + " " + "failed 😔 Data => ", data);
  }
}