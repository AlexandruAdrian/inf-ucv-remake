class Teacher {
  #id
  #fullName;
  #grade;
  #title;
  #webPage;
  #phone;
  #fax;
  #email;
  #avatar;
  constructor(data) {
    this.#id = data.Id;
    this.#fullName = data.FullName;
    this.#grade = data.Grade;
    this.#title = data.Title;
    this.#webPage = data.WebPage;
    this.#phone = data.Phone;
    this.#fax = data.Fax;
    this.#email = data.Email;
    this.#avatar = data.Avatar;
  }

  getId() {
    return this.#id;
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

  getAvatar() {
    return this.#avatar;
  }

  getEverything() {
    return {
      fullName: this.#fullName,
      grade: this.#grade,
      title: this.#title,
      webPage: this.#webPage,
      phone: this.#phone,
      fax: this.#fax,
      email: this.#email,
      avatar: this.#avatar
    }
  }

  setFullName(name) {
    this.#fullName = name;
  }

  setGrade(_grade) {
    this.#grade = _grade;
  }

  setTitle(_title) {
    this.#title = _title;
  }

  setWebPage(_webpage) {
    this.#webPage = _webpage;
  }

  setPhone(_phone) {
    this.#phone = _phone;
  }

  setFax(_fax) {
    this.#fax = _fax;
  }

  setAvatar(_avatar) {
    this.#avatar = `/images/profile/${_avatar}`;
  }

  capitalize(word) {
    const lowerCased = word.toLowerCase();
    const capitalized = lowerCased.replace(lowerCased.charAt(0), lowerCased.charAt(0).toUpperCase());

    return capitalized;
  }

  capitalizeProperties() {
    let names = this.#fullName.split(" ");
    names = names.map(name => this.capitalize(name));
    this.#fullName = names.join(" ");
    this.#title = this.capitalize(this.#title);
    this.#grade = this.capitalize(this.#grade);
  }
}

module.exports = Teacher;