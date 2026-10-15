// Function to display posts in the DOM
function displayPosts(posts) {
    const postListUl = document.getElementById("post-list");
    
    // Clear any existing content just in case
    postListUl.innerHTML = "";

    // Loop through the posts list
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
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();
        
        // Call displayPosts() function after fetch
        displayPosts(posts);
        
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Run the fetch function when the script loads
fetchPosts();
