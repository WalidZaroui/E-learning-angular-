import {Course} from './course';

export class User {
  // tslint:disable-next-line:variable-name
  _id: string;
  firstName: string;
  familyName: string;
  email: string;
  role: string;
  password: string;
  birthday: Date;
  phoneNumber: string;
  photo: string;
  courses: {enrolled: [Course]};
  constructor() {
  }
}
