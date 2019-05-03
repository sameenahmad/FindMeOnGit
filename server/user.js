const username = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const profileUrl = document.getElementById("profileUrl");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
searchBtn.addEventListener('click', showdata)
async function fetchUser(user) {
  try {
    const api = await fetch(
      `https://api.github.com/users/${user}`
    );
    const data = await api.json();
    return { data };
   
  } catch (error) {
    return error;
  }
}
function showdata() {
    const user= username.value;
    if(!user)
    {
        return error;
    }
  fetchUser(user)
  .then(res => {
    profileUrl.innerHTML = `Profile URL: ${res.data.url}`;
    repos.innerHTML =`Public Repos: ${res.data.public_repos}`;
    followers.innerHTML =`Followers: ${res.data.followers}`;
    following.innerHTML =`Following: ${res.data.following}`;
})
.catch(err => console.log(err))
}