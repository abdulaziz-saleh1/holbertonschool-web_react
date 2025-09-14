interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Meshari",
  lastName: "Alosimi",
  age: 25,
  location: "Riyadh"
};

const student2: Student = {
  firstName: "Saleh",
  lastName: "Alharbi",
  age: 27,
  location: "Jeddah"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
