const LOCAL_KEY = 'todomvc'

/**
 * 获取一个任务的随机id
 */
export function generateId() {
    return Date.now() + Math.random().toString(16).substr(2, 4)
}

/**
 * 获取目前所有的任务
 */
export function fetch() {
    return JSON.parse(localStorage.getItem('LOCAL_KEY') || '[]')
}

/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}

export function filter(todos, visibility = 'all') {
    if (visibility === 'all') {
        return todos
    } else if (visibility === 'active') {
        return todos.filter((item) => !item.completed)
    } else if (visibility === 'completed') {
        return todos.filter((item) => item.completed)
    }
}
