/********************************************
 * Project: awesome-books-with-ES6
 * File: Notification.js
 * Created: 2/27/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ********************************************/

class Notification {
  show($message, $className) {
     let msg = document.createElement('div');
    msg.className = `alert alert-${$className}`;
    msg.appendChild(document.createTextNode($message));
    let containerELement = document.getElementById('heading');
    let parentDiv = containerELement.parentNode;
    let header = document.getElementById('books');
    parentDiv.insertBefore(msg, header);
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }
}

export default Notification;