const BASE_URL = 'http://localhost:3000/blogPosts'

/**
 * Fetch all blog posts from the API
 * @returns {Promise<Array>} A promise that resolves to an array of blog posts
 */

const findAll = async () => {
    try {
        const response = await fetch(BASE_URL)
        if (!response.ok) {
            throw new Error('Error fetching blog posts: ${response.statusText}')
        }
        return await response.json()
        
    } catch (error) {
        console.error(error)
        throw error // rethrow error to be caught by the caller
        
    }
}
/**
 * Fetch a single blog post by ID
 * @param {number} id The ID of blog post to fetch
 * @returns {Promise<Object>} Promise that resolves too the blog post object
 */
const findById = async (id) => {
try {
    const response = await fetch(`${BASE_URL}/${id}`)
    if (!response.ok) {
        throw new Error('Error fetching blog posts with ID ${id}: ${response.statusText}')
    }
    return await response.json()
} catch (error) {
    console.error(error)
    throw error
}
}
export default { findAll , findById }