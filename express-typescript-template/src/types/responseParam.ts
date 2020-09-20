export interface ResponseParam<T> {
  code: number;
  message: string;
  recordSet?: T;
  recordSets?: Array<T>;
}

export interface ErrorResponseParam {
  code: number
  error_message_langId: string
  error_message: string
}
