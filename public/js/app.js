// Added frontend logic for handling form submissions for posts and comments, and triggering API calls

document.getElementById('newPostForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
        // Redirect to homepage or dashboard after successful post creation
        window.location.replace('/');
    } else {
        alert('Failed to add post');
    }
});
