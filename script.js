 // crear el botón para eliminar un elemento
 var myNodelist = document.getElementsByTagName("LI");
 var i;
 for (i = 0; i < myNodelist.length; i++) {
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "del";
     span.appendChild(txt);
     myNodelist[i].appendChild(span);
 }

 // función del botón para eliminar un elemento de la lista
 var del = document.getElementsByClassName("del");
 var i;
 for (i = 0; i < del.length; i++) {
     del[i].onclick = function () {
         var div = this.parentElement;
         div.style.display = "none";
         updateTotalTasks();
         updateCompletedTasks();
         updateRemainingTasks();
     }
 }

 // tarea cumplida
 var list = document.querySelector('ul');
 list.addEventListener('click', function (ev) {
     if (ev.target.tagName === 'LI') {
         ev.target.classList.toggle('checked');
         updateCompletedTasks();
         updateRemainingTasks();
     }
 }, false);

 // crear un nuevo elemento para la lista con "+"
 function newElement() {
     var li = document.createElement("li");
     var inputValue = document.getElementById("myInput").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if (inputValue === '') {
         alert("Escribe alguna tarea!");
     } else {
         document.getElementById("myUL").appendChild(li);
     }
     document.getElementById("myInput").value = "";

     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "del";
     span.appendChild(txt);
     li.appendChild(span);

     for (i = 0; i < del.length; i++) {
         del[i].onclick = function () {
             var div = this.parentElement;
             div.style.display = "none";
             updateTotalTasks();
             updateCompletedTasks();
             updateRemainingTasks();
         }
     }
     updateTotalTasks();

     updateRemainingTasks();
 }
 /*boton completar todas las tareas*/
 function compAll() {
     var myNodelist = document.getElementsByTagName("LI");
     for (var i = 0; i < myNodelist.length; i++) {
         myNodelist[i].classList.add('checked');
     }
     updateCompletedTasks();
     updateRemainingTasks();
 }
 /*boton eliminar todos los elementos*/
 function delAll() {
     var myNodelist = document.getElementsByTagName("LI");
     for (var i = 0; i < myNodelist.length; i++) {
         myNodelist[i].style.display = "none";
     }
     updateTotalTasks();
     updateCompletedTasks();
     updateRemainingTasks();
 }

 function updateTotalTasks() {
     var totalTasks = document.querySelector(".total-tasks span");
     var myNodelist = document.querySelectorAll("LI:not([style*='display: none'])");
     totalTasks.textContent = myNodelist.length;
 }

 function updateCompletedTasks() {
     var completedTasks = document.querySelector(".completed-tasks span");
     var myNodelist = document.querySelectorAll("LI.checked:not([style*='display: none'])");
     completedTasks.textContent = myNodelist.length;
 }
 function updateRemainingTasks() {
     var remainingTasks = document.querySelector(".remaining-tasks span");
     var totalTasks = document.querySelector(".total-tasks span");
     var completedTasks = document.querySelector(".completed-tasks span");
     var remaining = totalTasks.textContent - completedTasks.textContent;
     if (remaining < 0) {
         remaining = 0;
     }
     remainingTasks.textContent = remaining;
 }
