import Library from "./modules/Library.js";
import Notification from "./modules/Notification.js";
import {DateTime} from "./node_modules/luxon/src/luxon.js";

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const notify = new Notification();
    const library = new Library(notify);

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const form = document.getElementsByTagName('form');
    const booksSection = document.getElementById('books');

    window.addEventListener('load', () => {
      if (localStorage.getItem('books')) {
        library.books = JSON.parse(localStorage.getItem('books'));
        if (library.books.length !== 0) {
          library.books.forEach((item) => {
            const newBook = library.createItem(item);
            booksSection.append(newBook);
          });
        }
      }
    });

    form[0].addEventListener('submit', (e) => {
      e.preventDefault();
      library.addBook(title.value, author.value);
      const obj = {
        title: title.value,
        author: author.value,
      };
      title.value = '';
      author.value = '';
      const newBookDiv = library.createItem(obj);
      booksSection.append(newBookDiv);
      notify.show('Book has been added successfully', 'success');
    });

    const currentTime = document.getElementById('time');
    const updateTime = () => {
      const now = DateTime.now();
      currentTime.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    };
    updateTime();
    setInterval(updateTime, 1000);
  }
}

