let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// -- Display toys in collection
let toyCol = document.getElementById('toy-collection');
let configObj = {
  headers: {
    Accept: 'application/json',
    Method: 'get'
  }
}

function appendToDom(object) {
  /* With the response data, make a <div class="card"> 
  for each toy and add it to the toy-collection div.
  */
  
  object.forEach(function (el) {
    let appendDiv = document.createElement('div')
    appendDiv.class = "card";
    

  })
}

fetch("http://localhost:3000/toys", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    appendToDom(object);
    console.log(object);
  })
  .catch(function(error) {
    alert(`Error: ${error.message}`);
    console.log(error.msg);
})

/* 
let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

// method: "POST" is missing from the object below
let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  }); 
*/