export default function useRemoveTodo(todosRef) {
    const remove = (todo) => {
        todosRef.value.splice(todosRef.value.indexOf(todo), 1)
    }

    const removeCompleted = () => {
        todosRef.value = todosRef.value.filter((item) => !item.completed)
    }
    return {
        remove,
        removeCompleted,
    }
}
