//POPUP JS - AN EASY TO USE POPUP SYSTEM WRITTEN IN JS FOR WEBSITES USING HTML
var popavail = false;
function createModal() {
    var modal = document.createElement("dialog")
    modal.id = "popup"
    document.body.appendChild(modal)
    popavail = true;
    var bottom = document.createElement("div")
    var title = document.createTextNode("Title")
    var closebut = document.createElement("button")
    closebut.innerHTML = "X"
    closebut.onclick = modal.close()
    modal.appendChild(title)
    modal.appenedChild(closebut)
    modal.appendChild(bottom)
    title.id = "title"
    var text = document.createTextNode("Text")
    text.id = "text"
    bottom.appendChild(text)

function popup(title, text) {
    if (popavail = false) {
        createModal()
    }
    document.getElementById("title").innerHTML = title;
    
}