// Init github
const github = new Github;

// Init UI
const ui = new Ui;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keypress' , e => {
    // Get key
    const key = e.which || e.keyCode;

    // Get input text
    const userText = e.target.value;

    if (key === 13 && userText != '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                    ui.clearProfile();
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            }).catch(err => {
                console.log(err);
            });
    }
});