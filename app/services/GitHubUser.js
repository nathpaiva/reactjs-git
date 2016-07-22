var $ = require('axios');

var GitHubUser = {
    getByUsername: function (username) {
        return $.get('https://api.github.com/users/' + username);
    },
    getReposByUsername: function (username) {
        return $.get('https://api.github.com/users/' + username + '/repos');
    }
}

module.exports = GitHubUser;
