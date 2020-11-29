import { ref } from 'vue'
import { generateId } from '../util/todoStorage'

export default function useNewTodo(todosRef) {
    const newTodoRef = ref('')
    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim()
        if (!value) {
            return
        }

        const todo = {
            id: generateId(),
            title: value,
            completed: false,
        }
        todosRef.value.push(todo)
        newTodoRef.value = ''
    }
    return {
        newTodoRef,
        addTodo,
    }
}
