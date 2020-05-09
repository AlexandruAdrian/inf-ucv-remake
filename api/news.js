class News {
  #id;
  #title;
  #content;
  #categories;
  #tags;
  #links;
  constructor(data) {
    this.#title = data.Title || data.title || "";
    this.#content = data.Content || data.content || "";
    this.#categories = data.Categories || data.categories || [];
    this.#tags = data.Tags || [];
    this.#links = data.Links || [];
  }

  addTag(tag) {
    this.#tags.push(tag);
  }

  addLink(link) {
    this.#links.push(link);
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

  getLinks() {
    return this.#links;
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