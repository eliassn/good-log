export default class Glog {
  debug(message = "", data = {}) {
    console.log('\x1b[36m%s\x1b[0m', "[CODE 100: SUCCESS]" + " " + message + " " + "was successfull 😉 Data => ", data);
  }

  clear_and_debug(message = "", data = {}) {
    console.clear()
    console.log('\x1b[36m%s\x1b[0m', "[CODE 100: SUCCESS]" + " " + message + " " + "was successfull 😉 Data => ", data);
  }

  error(message = "", data = {}) {
    console.log('\x1b[31m%s\x1b[0m', "[CODE 0: ERROR]" + " " + message + " " + "failed 😔 Data => ", data);
  }

  clear_and_showError(message = "", data = {}) {
    console.clear()
    console.log('\x1b[31m%s\x1b[0m', "[CODE 0: ERROR]" + " " + message + " " + "failed 😔 Data => ", data);
  }
}