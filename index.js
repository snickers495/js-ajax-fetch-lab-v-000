
const baseApi = "https://api.github.com/"

function getIssues() {
  fetch('https://github.com/snickers495/javascript-fetch-lab/issues', {
    method: 'get',
    headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues())
}

function showIssues(json) {
  const issues = '<ul>' + json.map(issue => {
    `<li>
      <h3>${issue.title}</h3>
      <h2>${issue.body}</h2>
    </li>`
  }) + '<ul>'
  return $('#issues').append(issues)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = { 'title': title, 'body': body}
  fetch('https://github.com/snickers495/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => getIssues())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showForkedRepo(json))
}

  //use fetch to fork it!

function showForkedRepo(repo){
  return $('#results').html(`<a href="${repo.html_url}">Link to the ${repo.name}</a>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = "e153efa69c423dd22ec706e5e86f4dc721d08122";
  return token;
}
