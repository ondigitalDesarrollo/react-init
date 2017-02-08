"use strict";

// Components EcmaScript5
function Saludar(props) {
	return React.createElement(
		"h1",
		null,
		props.name
	);
}

// Components EcmaScript6


var Avatar = function Avatar(props) {
	return React.createElement("img", { className: props.user.className, src: props.user.img, alt: props.user.name });
};
var UserName = function UserName(props) {
	return React.createElement(
		"p",
		null,
		props.user.name
	);
};

var User = function User(props) {
	return React.createElement(
		"div",
		{ className: "user-item" },
		React.createElement(Avatar, { user: props.user }),
		React.createElement(UserName, { user: props.user })
	);
};

var user = {
	name: "Hola",
	img: "http://www.notiserver.com/archivos/noticia2872.jpg"
};
ReactDOM.render(React.createElement(User, { user: user }), document.getElementById('app'));