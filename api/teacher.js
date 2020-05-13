class Teacher {
  #fullName;
  #grade;
  #title;
  #webPage;
  #phone;
  #fax;
  #email;
  #pathToPicture;
  #avatar;
  constructor(data) {
    this.#fullName = data.FullName;
    this.#grade = data.Grade;
    this.#title = data.Title;
    this.#webPage = data.WebPage;
    this.#phone = data.Phone;
    this.#fax = data.Fax;
    this.#email = data.Email;
    this.#avatar = `/images/profile/${data.Avatar}` || '/images/profile/undefined.png'
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

  setAvatar(_avatar) {
    this.#avatar = `/images/profile/${_avatar}`;
  }
}

module.exports = Teacher;