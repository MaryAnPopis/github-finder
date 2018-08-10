// Init Github
const github = new GitHub();
const ui = new UI();

// Search input
const searchUser = document.getElementById('search-user');
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profileData.message === 'Not Found') {
        //Show alert if a user is not available
        ui.showAlert();
        ui.hideProfile();
      } else {
        // Hide alert once a user is available
        ui.removeAlert();
        // Show Profile
        ui.showProfile(data.profileData);
        ui.showRepos(data.repoData);
      }
    });
  } else {
    //Clear profile
    ui.hideProfile();
  }
});
