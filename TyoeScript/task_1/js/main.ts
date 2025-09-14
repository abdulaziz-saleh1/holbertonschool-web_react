/***********************
 * 1) Teacher interface
 ***********************/
interface Teacher {
  readonly firstName: string;   // قابل للقراءة فقط بعد الإنشاء
  readonly lastName: string;    // قابل للقراءة فقط بعد الإنشاء
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;   // اختياري
  location: string;
  [propName: string]: any;      // خصائص إضافية حرة (contract, department, ...)
}

/*************************
 * 2) Directors interface
 *************************/
interface Directors extends Teacher {
  numberOfReports: number;
}

/****************************************
 * 3) printTeacherFunction + printTeacher
 ****************************************/
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

// أمثلة سريعة (اختيارية للتمرين)
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(printTeacher('John', 'Doe')); // J. Doe

/**************************************
 * 4) StudentClass + واجهات التوصيف
 **************************************/

// واجهة تصف "شكل الكائن" الناتج من StudentClass
// (ما هي الدوال المتاحة على الطالب)
interface StudentClassInterface {
  workOnHomework(): string;  // ترجع "Currently working"
  displayName(): string;     // ترجع firstName
}

// واجهة تصف "باني الكلاس" (الكونستركتر)
// new (firstName, lastName) => StudentClassInterface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// تعريف الكلاس الفعلي
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// (اختياري) نثبت أن الكلاس يطابق واجهة الكونستركتر
const StudentClassCtor: StudentConstructor = StudentClass;

// اختبار سريع
const student: StudentClassInterface = new StudentClass('Meshari', 'Alosimi');
console.log(student.displayName());     // "Meshari"
console.log(student.workOnHomework());  // "Currently working"
