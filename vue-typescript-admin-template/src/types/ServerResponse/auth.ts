export interface UserReturnParams {
  code: number;
  accessToken: string;
  message: string;
  user?: any;
}

export interface ResponseParam {
  code: number;
  message: string;
  recordSet?: any;
  recordSets?: Array<any>;
}

export interface ErrorResponseParam {
  code: number;
  error_message_langId: string;
  error_message: string;
}
