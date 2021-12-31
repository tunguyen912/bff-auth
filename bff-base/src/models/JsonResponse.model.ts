interface JsonResponseOption<T> {
  status_code?: number,
  response_msg?: string,
  error_info?: any,
  data?: T,
}

export default class JsonResponse<T> {
  public request_id: string;

  public status_code = 200;

  public data: any;

  public response_msg?: string;

  public error_info?: any;


  [key: string]: any;

  constructor(option: JsonResponseOption<T>) {
          this.status_code = option.status_code || this.status_code;
          this.response_msg =  option?.status_code === 500 ? (option?.response_msg || 'Something went wrong') : option?.response_msg;
          this.data = option?.status_code === 500 ? undefined : option.data;
          this.error_info = option?.error_info;
  }

  public getStatusCode(): number {
      return this.status_code;
  }

  public getData(): object {
      return {
          request_id: this.request_id,
          response_msg: this.response_msg,
          error_info: this.error_info,
          data: this.data,
      };
  }
}
