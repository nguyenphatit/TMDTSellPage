import { CourseType } from './CourseType';
import { Topic } from './Topic';
import { UserCustom } from './UserCustom';

export class Course {
   private courseID: string;
   private courseTitle: string;
   private courseDescription: string;
   private author: string;
   private createDate: any;
   private price: number;
   private courseType: CourseType[] ;
   private topic: Topic[];
   private confirmedBy: UserCustom[] ;
   private status: number;
   private confirmedDate: any;
   private views: number;
   private courseAvatar: string;
   private courseDetail: string;
}
