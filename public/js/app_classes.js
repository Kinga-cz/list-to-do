class Todo {
    constructor(content, date = new Date())
    {
        this.content = content
        this.date = date
    }

    getTitle(){
        return this.date.toLocaleTimeString() + ', ' + this.date.toLocaleDateString();
    }
}

class ToDoList {
    constructor(domElement, todos = [])
    {
        this.domElement = domElement
        this.todos = todos
    }

    add(Todo)
    {
        this.todos.unshift(Todo);
        this.render();
    }

    remove(index)
    {
        this.todos.splice(index, 1);
        this.render();
    }

    clearAll()
    {
        this.todos = [];
        this.render();
    }

    render()
    {
        let html = '';
        this.todos.forEach((todo, index) => {
            html += `
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${ todo.getTitle() }</span>
                    <p>${ todo.content }</p>
                </div>
                <div class="card-action">
                    <a onclick="removeTodo(${ index })" href="javascript:void(0)">usuń</a>
                </div>
            </div>`;
        });
        this.domElement.innerHTML = html;
    }      
}

const List = new ToDoList(
    document.getElementById('list-to-do')
);

const domElement = {
    'input': document.getElementById('input'),
    'button': document.querySelector('#button'),
    'list-to-do': document.getElementById('list-to-do'),
};

const addTodo = (event) => {
    let content = domElement.input.value;
    domElement.input.value = null;
    if (content == ''){
        return;
    }
    List.add(
        new Todo(content)
    );
}

const removeTodo = (index) => {
    List.remove(index);
}