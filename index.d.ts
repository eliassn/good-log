declare module "Glog-types" {
    type debug = {
      (message: string, data: object)
    }
    type clear_and_debug = {
      (message: string, data: object)
    }
    type error ={
      (message: string, data: object)
    }
    type clear_and_showError = {
      (message: string, data: object)
    }
}