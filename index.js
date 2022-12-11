const username = "TheWarPig";
getRepos(username);

function getRepos(username) {
  // Make the HTTP request using the fetch() function
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      // If the HTTP status code is 200 (OK), parse the response as JSON
      if (response.ok) {
        return response.json();
      }

      // If the HTTP status code is not 200, throw an error
      throw new Error(response.statusText);
    })
    .then((repos) => {
      // Do something with the repositories (e.g., display them in a list)
      displayRepos(repos);
    })
    .catch((error) => {
      // Display an error message
      displayError(error.message);
    });
}

function displayRepos(repos) {
  for (i = 0; i < repos.length; i++) {
    const li = document.createElement("li");
    const body = document.querySelector("body");
    li.innerHTML = `<a href="${repos[i].html_url}" target="_blank">${repos[i].name}</a> `;
    console.log(repos[1]);
    body.appendChild(li);
  }
}

function displayError(message) {
  // Code to display the error message goes here
}
