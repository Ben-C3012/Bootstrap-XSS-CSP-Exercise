const postButton = document.getElementById('post-button')
const textArea = document.querySelector('textarea')
const commentBox = document.querySelector('.comment-box')
const nameInput = document.getElementById('name')

function getComments() {
    fetch('http://localhost:3000/comments')
        .then(response => response.json())
        .then(data => {
            data.forEach(comment => {
                commentBox.innerHTML += `<div class="card">
                    <div class="card-body" style="width: 500px;">
                        <h5 class="card-title">${comment.name}</h5>
                        <p class="card-text">${comment.comment}</p>
                    </div>
                </div>`
            })
        })
        .catch(error => console.error(error))
}

getComments()

// log comment to the screen
postButton.addEventListener('click', () => {

    const name = nameInput.value
    const comment = textArea.value

    fetch('http://localhost:3000/add-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, comment })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            commentBox.innerHTML += `<div class="card">
                    <div class="card-body" style="width: 500px;">
                        <h5 class="card-title
                        ">${data.name}</h5>
                        <p class="card-text">${data.comment}</p>
                    </div>
                </div>`
        })

        .catch(error => console.error(error))
        textArea.value = ''
        nameInput.value = ''
})



