$(document).ready(function () {
  $.getJSON("/api/todos").then(function (todos) {
    displayTodos(todos);
  });

  $("ul").on("click", "span", function (e) {
    e.stopPropagation();
    deleteTodo($(this).parent());
    $(this).parent().remove();
  });

  $("input").on("keypress", function (e) {
    if (e.which === 13) {
      createTodo($("input").val());
      e.target.value = "";
    }
  });

  $("ul").on("click", "li", function () {
    updateTodo($(this));
  });
});

function createTodo(todo) {
  $.ajax({
    type: "POST",
    url: "/api/todos",
    data: { text: todo },
  }).then((todo) => {
    createLi(todo);
  });
}

function displayTodos(todos) {
  for (let todo of todos) {
    createLi(todo);
  }
}

function deleteTodo(todo) {
  $.ajax({
    type: "DELETE",
    url: "/api/todos/" + todo.data("id"),
  })
    .then(() => {
      console.log("deleted");
    })
    .catch((e) => console.log(e));
}

function updateTodo(todo) {
  const isDone = !todo.data("completed");
  const updateData = { completed: isDone };
  $.ajax({
    method: "PUT",
    url: "/api/todos/" + todo.data("id"),
    data: updateData,
  })
    .then(function (updatedTodo) {
      console.log(updatedTodo);
      todo.data("completed", isDone);
    })
    .catch((e) => console.log(e));
  $(todo).toggleClass("done");
}

function createLi(todo) {
  const newTodo = $(`<li>${todo.text}<span>X</span></li>`);
  newTodo.data("id", todo._id);
  newTodo.data("completed", todo.completed);
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $("ul").append(newTodo);
}
