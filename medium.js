const container = document.querySelector('div')
const listOne = document.createElement('ul')
const listInside = document.createElement('li')
const mainForm = document.createElement('form')


listOne.textContent = 'Main list'
listInside.textContent = 'Hello Me'

function printList() {
    const mainInput = document.getElementById('mainInput')
    const grabMain = document.getElementById('container')
    if (mainInput.value === '') {
        return
    }
    let newName = grabMain.innerHTML
    newName += `
        <li> ${mainInput.value} </li>
    `
    grabMain.innerHTML = newName
    mainInput.value = ''
}

container.appendChild(mainForm)
mainForm.appendChild(listOne)
listOne.appendChild(listInside)
