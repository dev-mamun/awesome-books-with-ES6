/********************************************
 * Project: awesome-books-with-ES6
 * File: Notification.js
 * Created: 2/27/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ********************************************/

export default class Notification {
  show = ($message, $className) => {
    const msg = document.createElement('div');
    msg.className = `alert alert-${$className}`;
    msg.appendChild(document.createTextNode($message));
    const containerELement = document.getElementById('heading');
    const parentDiv = containerELement.parentNode;
    const header = document.getElementById('books');
    parentDiv.insertBefore(msg, header);
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }
}