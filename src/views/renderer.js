let arrayNotes = []

const list = document.getElementById('listNotes')

function getDate() {
    const date = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleDateString('pt-BR', options)
}

document.getElementById('currentDate').innerHTML = getDate()

api.dbStatus((event, message) => {
    console.log(message)
    if (message === "conectado") {
        document.getElementById('iconDB').src = "../public/img/dbon.png"
    } else {
        document.getElementById('iconDB').src = "../public/img/dboff.png"
    }
})

api.dbConnect()
api.listNotes()
api.renderNotes((event, notes) => {
    const renderNotes = JSON.parse(notes)
    console.log(renderNotes)
    arrayNotes = renderNotes
    arrayNotes.forEach((n) => {
        list.innerHTML += `
             <li class="card" style="background-color: var(--${n.cor});">
                <p onclick="deleteNote('${n._id}')" id="x">X</p>
                <p id="code">${n._id}</p>
                <p>${n.texto}</p>
                <p id="color">${n.cor}</p>
            </li>
        `
    })
})

api.mainReload((args) => {
    location.reload()
})

function deleteNote(id) {
    console.log(id)
    api.deleteNote(id)
}