class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.cardBody = document.getElementById('alert');
  }

  removeAlert() {
    this.cardBody.innerHTML = '';
  }

  showAlert() {
    this.cardBody.innerHTML = `
    <div class="alert alert-dismissible alert-danger">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Oh snap!</strong> The user you're trying to find is not available, please try again.
    </div>
    `;
  }

  hideProfile() {
    this.profile.innerHTML = '';
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${
            user.html_url
          }" target="_blank" class="btn btn-secondary btn-block">View profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repositories : ${user.public_repos}</span>
          <span class="badge badge-primary">Public Gists : ${user.public_gists}</span>
          <span class="badge badge-primary">Followers : ${user.followers}</span>
          <span class="badge badge-primary">Followers : ${user.following}</span>
          <br /><br />
          <ul class="list-group">
            ${`<li class="list-group-item">Company : ${user.company}</li>`}
            <li class="list-group-item">Website : <a href="${user.blog}" target="_blank">${
      user.blog
    }</a></li>
            <li class="list-group-item">Location : ${user.location}</li>
            <li class="list-group-item">Member since : ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading">Latest Repositories</h3>
    <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" targe="_blank">${repo.name}</a>
              <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
            <span class="badge badge-primary">Watchers : ${repo.watchers_count}</span>
            <span class="badge badge-primary">Forks : ${repo.froms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }
}
