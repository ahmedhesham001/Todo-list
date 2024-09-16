let input = document.getElementById("input-box"),
    button = document.getElementById("button"),
    list = document.getElementById("list-container");
    button = document.querySelector("button");
    button.addEventListener("click",()=>{
        if(input.value===''){
            alert("Please enter a value");
        }else{
            let li = document.createElement("li");
            li.innerHTML = input.value;
            list.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            span.onclick = ()=> li.style.display = 'none';
            input.value = '';
            saving(); //saving every task;
        }
    });
    list.addEventListener("click",(e)=>{
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saving(); //delete the unwanted task;
        }else if (e.target.tagName === "span") {
            e.target.parentElement.remove();
        }
    });
    function saving() {
        localStorage.setItem("data",list.innerHTML);
    } //saving data at local storage
    
        list.innerHTML = localStorage.getItem("data"); //showing the saved task;