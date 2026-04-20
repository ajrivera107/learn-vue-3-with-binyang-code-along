import { ref } from 'vue'

const isAuthenticated = ref(false) // global state

const userRole = ref('')

const login = async (username, password) => {
    // simulate sucessful login
    isAuthenticated.value = true
    userRole.value = username === 'vipUser' ? 'vip' : 'regular'
}
const logout = async () => {
    // simulate sucessful login
    isAuthenticated.value = false;
    userRole.value = ''
}

const getUserRole = () => {
    return userRole.value
}

export { isAuthenticated, login, logout, getUserRole }