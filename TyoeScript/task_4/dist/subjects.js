"use strict";
var Subjects;
(function (Subjects) {
    class Cpp extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher() {
            if (!this.teacher || !this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    class Java extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher() {
            if (!this.teacher || !this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    class React extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher() {
            if (!this.teacher || !this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.React = React;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    class Subject {
        setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=subjects.js.map