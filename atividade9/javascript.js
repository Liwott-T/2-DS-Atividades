const demoID = document.getElementById("demo");
demoID.style.border = "2px solid purple";
demoID.textContent = 'Munça de texto pelo ID'
demoID.style.background = "lightgreen"
demoID.style.color = "red"

const catClass = document.getElementsByClassName("categoria");
for (i = 0; i < catClass.length; i++)
    catClass[i].style.border = '2px dotted orange';
    catClass[i].style.background = 'orange';

const tag = document.getElementsByTagName("article");
for (i = 0; i < tag.length; i++)
    tag[i].style.border = '2px dotted blue';

const queryID = document.querySelector("#demo-query");
queryID.style.border = ('1px solid red');

const demoQuery = document.querySelectorAll('.demo-query-all');
demoQuery.forEach(query => {
    query.style.border = "1px solid green"
});