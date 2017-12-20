<<<<<<< HEAD
import { Course } from './../../_models/Course';

export class DataCourse {
  private listCourse: Course[] = [];
  constructor() {
  }
  public getAllCourse(): Course[] {
    return this.listCourse;
  }

=======
import { Course } from '../../_models/index';

export class DataCourse {
    public listDataCourse: Course[] = [];
    constructor() {
    }
    public addCourse(course: Course) {
    }
>>>>>>> 3ff1ed814ecbd7bea344a7028dfe5571eda1bd55
}
