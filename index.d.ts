declare module "Glog-types" {
    interface debug {
      (message: string, data: object)
    }
    interface clear_and_debug {
      (message: string, data: object)
    }
    interface error {
      (message: string, data: object)
    }
    interface clear_and_showError {
      (message: string, data: object)
    }
}