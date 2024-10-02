document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Agregar tarea
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene la recarga del sitio
    const taskText = taskInput.value.trim(); // Obtener el valor del campo de texto

    if (taskText === '') {
      return alert("No se puede agregar una entrada vacía."); // No registrar la entrada si es vacía
    }

    // Crear un nuevo elemento de tarea
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    taskItem.appendChild(deleteButton);

    // Marcar como completada
    taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });

    // Eliminar tarea
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar marcar como completada al eliminar
      taskItem.remove();
    });

    // Añadir tarea a la lista
    taskList.appendChild(taskItem);

    // Limpiar el input tras agregar la tarea
    taskInput.value = '';
  });
});