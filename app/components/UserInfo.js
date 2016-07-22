var React = require('react');

var UserRepos = require('./UserRepos');

function UserInfo(props) {
    var userInfo = props.user ?
    (
        <div className="row">
            <div className="col-lg-4">
                <img className="img-circle" src={props.user.avatar_url} alt="avatar" width="140" height="140" />
                <h2>{props.user.login}</h2>
                <p>{props.user.name}</p>
                <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
                <p><a className="btn btn-default" href={props.user.html_user} role="button">View details</a></p>
            </div>
            <div className="col-lg-8">
                <UserRepos repos={props.repos} />
            </div>
        </div>
    ) : null;
    return userInfo;
}

UserInfo.propTypes = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array
};

// var UserInfo = React.createClass({
//     render: function() {
//         var userInfo = this.props.user ?
//         (
//             <div className="row">
//                 <div className="col-lg-4">
//                     <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
//                     <h2>{this.props.user.login}</h2>
//                     <p>{this.props.user.name}</p>
//                     <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
//                     <p><a className="btn btn-default" href={this.props.user.html_user} role="button">View details</a></p>
//                 </div>
//             </div>
//         ) : null;
//         return userInfo;
//     }
// });

module.exports = UserInfo;
