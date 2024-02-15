let pfp = document.getElementById("pfp");
let bio = document.getElementById("bio");
fetch('https://api.github.com/users/jordan-cloutier')
.then(response => response.json())
.then(data => {
    pfp.innerHTML = "<img src=\"" + data.avatar_url + "\" id=\"image\"/>";
    bio.innerHTML = "<p>" + data.bio + "</p>";
})
.catch(function(error) {
    console.log(error);
});
