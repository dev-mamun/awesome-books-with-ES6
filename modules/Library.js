/******************************************
 *  Project : Awesome-books-ES6
 *  Author : Abdullah Al Mamun <mamun1214@gmail.com>
 *  Created On : Thu Feb 23 2023
 *  File : library.js
 *******************************************/
export default class Library {
  constructor($notify) {
    this.books = [];
    this.menuLink();
    this._notify = $notify;
  }

  menuLink() {
    const menu = document.querySelectorAll('.nav-menu');
    const listBtn = document.getElementById('books');
    const addBtn = document.getElementById('book-frm');
    const contactBtn = document.getElementById('contacts');
    const heading = document.getElementById('heading');
    menu.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        addBtn.classList.add('hidden');
        listBtn.classList.add('hidden');
        contactBtn.classList.add('hidden');
        switch (e.target.id) {
          case 'list':
            heading.textContent = "All awesome books";
            listBtn.classList.remove('hidden');
            break;
          case 'add':
            heading.textContent = "Add a new book";
            addBtn.classList.remove('hidden');
            break;
          case 'contact':
            heading.textContent = "Contact information";
            contactBtn.classList.remove('hidden');
            break;
          default:
            listBtn.classList.remove('hidden');
        }
      });
    });
  }

  addBook(title, author) {
    const book = {
      title,
      author,
    };
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(title, author) {
    this.books = this.books.filter(
        (item) => item.title !== title || item.author !== author,
    );
  }

  createItem(book) {
    const div = document.createElement('article');
    div.className = '';
    div.innerHTML = `<div>"${book.title}" by ${book.author}</div>
        <button class="btn-danger delete">Remove</button>`;

    const removeBtn = div.querySelector('.delete');
    removeBtn.addEventListener('click', () => {
      this.removeBook(book.title, book.author);
      div.remove();
      localStorage.setItem('books', JSON.stringify(this.books));
      this._notify.show('Book has been deleted successfully','error');
    });
    return div;
  }
}