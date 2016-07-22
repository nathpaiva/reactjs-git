var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var user = this.refs.username.value;
        GitHubUser
        .getByUsername(user).then( function(response) {
            this.props.updateUser(response.data);
        }.bind(this));

        GitHubUser
        .getReposByUsername(user).then( function(response) {
            this.props.updateRepos(response.data);
        }.bind(this));
    },
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Github</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                ref="username"
                                className="form-control"
                                placeholder="Ex: nathpaiva"
                            />
                        </div>
                        <button type="submit"
                            className="btn btn-primary"> Buscar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
});

SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired
}

module.exports = SearchUser;
