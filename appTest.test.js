import { describe, it, expect } from 'vitest';

// Función que queremos probar
function addTask(tasks, taskText) {
  tasks.push({ text: taskText, completed: false });
}

function removeTask(tasks, taskText) {
  return tasks.filter(task => task.text !== taskText);
}

function toggleTaskCompletion(tasks, taskText) {
  return tasks.map(task => 
    task.text === taskText ? { ...task, completed: !task.completed } : task
  );
}

describe('Lista de Tareas', () => {
  it('debería agregar una nueva tarea a la lista', () => {
    const tasks = [];
    addTask(tasks, 'Comprar leche');
    expect(tasks.length).toBe(1);
    expect(tasks[0].text).toBe('Comprar leche');
    expect(tasks[0].completed).toBe(false);
  });

  it('debería eliminar una tarea de la lista', () => {
    let tasks = [{ text: 'Comprar leche', completed: false }];
    tasks = removeTask(tasks, 'Comprar leche');
    expect(tasks.length).toBe(0);
  });

  it('debería marcar una tarea como completada', () => {
    let tasks = [{ text: 'Comprar leche', completed: false }];
    tasks = toggleTaskCompletion(tasks, 'Comprar leche');
    expect(tasks[0].completed).toBe(true);
  });

  it('debería desmarcar una tarea como completada', () => {
    let tasks = [{ text: 'Comprar leche', completed: true }];
    tasks = toggleTaskCompletion(tasks, 'Comprar leche');
    expect(tasks[0].completed).toBe(false);
  });
});
