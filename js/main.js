fetch("./js/data.json")
.then((response) => response.json())
.then((data) => {
  console.log(data)
  document.querySelector(".container").innerHTML = data.map(function(data){
    return ` <div class="card">
    <img src="https://avatars.githubusercontent.com/${data.user_name}" alt="profile" class="user_profile" />
    <h1 class="user_name">${data.user_name}</h1>
    <p class="name">${data.name}</p>
    <p class="user_description">
    Now I'm a open source contributor.
    </p>
    <ul class="list">
      <li>
        <a href="${data.facebook}" class="user_link facebook" target="balnk"
          ><i class="fa-brands fa-facebook"></i
        ></a>
      </li>
      <li>
        <a href="${data.github}" class="user_link github" target="balnk"
          ><i class="fa-brands fa-github"></i
        ></a>
      </li>
      <li>
        <a href="${data.instagram}" class="user_link instagram" target="balnk"
          ><i class="fa-brands fa-instagram"></i
        ></a>
      </li>
      <li>
        <a href="${data.linkedin}" class="user_link linkedin" target="balnk"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
      </li>
    </ul>
  </div>`
  }).join("");
});


