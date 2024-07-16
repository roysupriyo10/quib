export class HttpException extends Error {
  statusCode: number;
  fieldName: string;
  constructor(message: string, statusCode: number, name: string) {
    super(message);
    this.statusCode = statusCode;
    this.fieldName = name;
  }
}
