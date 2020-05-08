class Teacher {
  constructor(data) {
    this.fullName = data.fullName;
    this.grade = data.grade;
    this.title = data.title;
    this.webPage = data.webPage;
    this.phone = data.phone;
    this.fax = data.fax;
    this.email = data.email;
    this.pathToPicture = data.pathToPicture
  }
}

module.exports = Teacher;