namespace Subjects {
  // Declaration merging: خاصية اختيارية للـ Teacher
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
