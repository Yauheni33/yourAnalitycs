Requirements:
* Rails 5+
* Ruby 2.4+
* Slim/HAML
* PostgreSQL / MySQL / MongoDB
* jQuery / React / Angular


App & Flow

This is a single user application. When a user gets to the task page (home page) she/he should be able to see a list of all her/his tasks.
There is a form with one field (name) to add a new task to the list, the task is added to the end of the list without page reload (please see the screenshot).
The user is able to mark a task as complete by clicking on the checkbox located on the right side of the page. It will be great if the process of task completion should be asynchronous (AJAX).
The results of the task completion and the task position in the list should be stored in the database and restored after the page reload.
The user should be able to change the ordering of the tasks using Drag & Drop. (You can use any JS library for it if you want)