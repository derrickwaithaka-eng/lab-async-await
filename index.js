// Function to display posts in the DOM
function displayPosts(posts) {
    const postListUl = document.getElementById("post-list");
    
    // Safety check in case the element isn't found in a headless test environment
    if (!postListUl) return;

    postListUl.innerHTML = ""; // Clear existing list

    posts.forEach(post => {
        // Create an li tag
        const li = document.createElement("li");

        // Create a new h1 tag and add the title as textContent
        const h1 = document.createElement("h1");
        h1.textContent = post.title;

        // Create a new p tag and add the body as textContent
        const p = document.createElement("p");
        p.textContent = post.body;

        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);

        // Append li to the ul (#post-list)
        postListUl.appendChild(li);
    });
}

// Function to house fetch and apply async/await
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();
        displayPosts(posts);
        return posts; // Helpful for tests that await the fetch function
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Only call fetchPosts automatically if we are running in a browser environment (not in Jest test runner)
if (typeof window !== 'undefined' && typeof process === 'undefined') {
    fetchPosts();
}

// Export for tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { displayPosts, fetchPosts };
}

// Export functions for Jest testing (if environment supports module.exports)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { displayPosts, fetchPosts };
}