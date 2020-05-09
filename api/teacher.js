class Teacher {
  #fullName;
  #grade;
  #title;
  #webPage;
  #phone;
  #fax;
  #email;
  #pathToPicture;
  constructor(data) {
    this.fullName = data.fullName;
    this.grade = data.grade;
    this.title = data.title;
    this.webPage = data.webPage;
    this.phone = data.phone;
    this.fax = data.fax;
    this.email = data.email;
    this.pathToPicture = data.pathToPicture || '/images/profile/undefined.png'
  }

  getFullName() {
    return this.#fullName;
  }

  getGrade() {
    return this.#grade;
  }

  getTitle() {
    return this.#title;
  }

  getWebPage() {
    return this.#webPage;
  }

  getPhone() {
    return this.#phone;
  }

  getFax() {
    return this.#fax;
  }

  getEmail() {
    return this.#email;
  }

  getPathToPicture() {
    return this.#pathToPicture;
  }
}

module.exports = Teacher;