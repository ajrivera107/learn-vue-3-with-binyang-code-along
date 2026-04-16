import { ref } from 'vue'

const isAuthenticated = ref(false) // global state

const login = async (username, password) => {
    // simulate sucessful login
    isAuthenticated.value = true;
}
const logout = async () => {
    // simulate sucessful login
    isAuthenticated.value = false;
}

export { isAuthenticated, login, logout }