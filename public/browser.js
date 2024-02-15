

console.log('Frontend JS ishga tushdi');


function itemTemplate(item) {
    return`  <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Ozgartirish</button>
        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
    </div>
</li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
  e.preventDefault();

  axios
  .post("/create-item", {reja: createField.value })
  .then((response) => {
    document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value = "";
    createField.focus();

  })
  .catch((err) => {
    console.log("iltimos qaytadan harakat qilin!");
  });
});

document.addEventListener("click", function (e) {
    //delit aperatsiyalar
    if(e.target.classList.contains("delete-me")) {
        if(confirm("aniq ochirmoqchimisiz ?")) {
            axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
            .then((respose) => {
              console.log(respose.data);
              e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
              console.log("ochmadi");
            });
        }
    }
    //edit aperatsiyalar
    if(e.target.classList.contains("edit-me")) {
      let userInput = prompt("Ozgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innertHTML);
      if (userInput) {
        console.log(userInput);
      } 
    }
});

document.getElementById("clean-all").addEventListener("click", function() {
  axios.post("/delete-all", { delete_all: true }).then(respose => {
    alert(respose.data.state);
    document.location.reload();
  })
});