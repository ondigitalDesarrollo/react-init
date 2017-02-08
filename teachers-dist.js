'use strict';

var teachers = [{
	name: 'Pepito Perez',
	avatar: 'http://blixt.tv/wp-content/uploads/2015/11/top-ideas-foto-de-perfil-profesional.png'
}, {
	name: 'Rosalba Martinez',
	avatar: 'https://cdn.pixabay.com/photo/2015/09/02/12/42/woman-918623_960_720.jpg'
}, {
	name: 'Ines Diaz',
	avatar: 'https://www.socialtools.me/blog/wp-content/uploads/2016/04/foto-de-perfil.jpg'
}];

var Avatar = function Avatar(props) {
	return React.createElement('img', { className: props.user.className, src: props.user.avatar, alt: props.user.name });
};
var UserName = function UserName(props) {
	return React.createElement(
		'p',
		null,
		props.user.name
	);
};

var User = function User(props) {
	return React.createElement(
		'div',
		{ className: 'user-item' },
		React.createElement(Avatar, { user: props.user }),
		React.createElement(UserName, { user: props.user })
	);
};

/*const user = {
	name: "Hola",
	img:  "http://www.notiserver.com/archivos/noticia2872.jpg"
};*/

var UsersList = function UsersList(props) {
	var userList = props.list.map(function (user, i) {
		return React.createElement(User, { user: user, key: i });
	});
	return React.createElement(
		'div',
		{ className: 'user-list' },
		usersList
	);
};

ReactDOM.render(React.createElement(UsersList, { list: teachers }), document.getElementById('app'));
//# sourceMappingURL=teachers-dist.js.map