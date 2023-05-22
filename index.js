function addtodolist(){
    var taskname=document.getElementById('task').value
    var tododiv=document.getElementById('display')
    var newtodo=document.createElement('div')
    newtodo.classList.add("newtodo")
    var todoname=document.createElement('li')
    todoname.innerHTML=taskname
    var deletebtn=document.createElement('i')
    deletebtn.classList.add('fa')
    deletebtn.classList.add('fa-trash-alt')
    newtodo.appendChild(todoname)
    newtodo.appendChild(deletebtn)
    tododiv.appendChild(newtodo)
}
var tododiv=document.getElementById('display')
tododiv.addEventListener('click',deleteitem)
function deleteitem(e){
    var element=e.target
    if(element.classList[0]=='fa'){
        element.parentElement.remove()
    }

}