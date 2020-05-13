class News {
  #id;
  #title;
  #content;
  #categories;
  #tags;

  constructor(data) {
    this.#title = data.Title || data.title || "";
    this.#content = data.Content || data.content || "";
    this.#categories = data.Categories || data.categories || [];
    this.#tags = data.Tags || data.tags || [];
  }

  addTag(tag) {
    this.#tags.push(tag);
  }

  setId(_id) {
    this.#id = _id;
  }

  getId() {
    return this.#id;
  }

  getTags() {
    return this.#tags;
  }


  getCategories() {
    return this.#categories;
  }

  getIdTitleContent() {
    return {
      id: this.#id,
      title: this.#title,
      content: this.#content
    }
  }
}

module.exports = News;