import { ref, watchEffect } from 'vue'
import * as todoStorage from '../util/todoStorage'

export default function uesTodoList() {
    const todosRef = ref(todoStorage.fetch())
    window.todosRef = todosRef //测试
    watchEffect(() => {
        todoStorage.save(todosRef.value)
    })

    return {
        todosRef,
    }
}
