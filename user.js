const username = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const avatar = document.getElementById("avatar");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const userInfo = document.getElementById("userInfo");
const errorMsg = document.getElementById("errorMsg");
const bio = document.getElementById("bio");
const name = document.getElementById("name");
const tryAgain = document.getElementById("tryAgain");
searchBtn.addEventListener("click", showdata);
async function fetchUser(user) {
  try {
    const api = await fetch(`https://api.github.com/users/${user}`);
    if (api.status == "404") {
      userInfo.style.visibility = "hidden";
      errorMsg.innerHTML = "Unable to find Username";
      tryAgain.style.visibility = "visible";
      tryAgain.addEventListener("click", reloadPage);
    } else {
      const data = await api.json();
      return { data };
    }
  } catch (error) {
    return error;
  }
}
function reloadPage() {
  document.location.reload(true);
}

function showdata() {
  const user = username.value;
  if (user == "") {
    console.error(error);
    return error;
  }
  fetchUser(user)
    .then(res => {
      console.log(res.data);
      avatar.src = ` ${res.data.avatar_url}`;
      if (res.data.name != null) name.innerHTML = `Name: ${res.data.name}`;
      else name.innerHTML = `Name: Not defined by user or private`;
      if (res.data.bio != null) bio.innerHTML = `Bio: ${res.data.bio}`;
      else bio.innerHTML = `Bio: Not defined by user`;
      repos.innerHTML = `Public Repos: ${res.data.public_repos}`;
      followers.innerHTML = `Followers: ${res.data.followers}`;
      following.innerHTML = `Following: ${res.data.following}`;
    })
    .catch(err => console.log(err));
}
