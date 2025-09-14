namespace Subjects {
  export class Subject {
    // definite assignment assertion علشان ما يزعّلنا TS على التهيئة
    protected teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
