/*******************************
 * 1) الواجهات (Interfaces)
 *******************************/
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/*******************************
 * 2) الكلاسات (Classes)
 *******************************/
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/*******************************
 * 3) createEmployee
 *******************************/
export type Employee = Director | Teacher;

export function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/*******************************
 * 4) isDirector (type guard) + executeWork
 *******************************/
export function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

/*******************************
 * 5) String literal types (Subjects) + teachClass
 *******************************/
// يسمح فقط بالقيمتين هذي حرفيًا
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  // بما أن النوع محصور، يكفي شرط بسيط
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

/*******************************
 * 6) أمثلة تشغيل (اختياري)
 *******************************/
// console.log(teachClass('Math'));    // Teaching Math
// console.log(teachClass('History')); // Teaching History
// console.log(executeWork(createEmployee(200)));   // Getting to work
// console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
