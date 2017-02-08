const teachers = [
	{
		name: 'Pepito Perez',
		avatar: 'http://blixt.tv/wp-content/uploads/2015/11/top-ideas-foto-de-perfil-profesional.png'
	},
	{
		name: 'Rosalba Martinez',
		avatar: 'https://cdn.pixabay.com/photo/2015/09/02/12/42/woman-918623_960_720.jpg'
	},
	{
		name: 'Ines Diaz',
		avatar: 'https://www.socialtools.me/blog/wp-content/uploads/2016/04/foto-de-perfil.jpg'
	}
]

const Avatar 	= props => <img className={props.user.className} src={props.user.avatar} alt={props.user.name} />;
const UserName	= props => <p>{props.user.name}</p>;

const User = props => {
	return(
		<div className="user-item">
			<Avatar user={props.user}/>
			<UserName user={props.user}/>			
		</div>
	);
};

/*const user = {
	name: "Hola",
	img:  "http://www.notiserver.com/archivos/noticia2872.jpg"
};*/

const UsersList = props => {
	const userList = props.list.map((user,i) => <User user={user} key={i} />);
	return (
		<div className="user-list">
			{usersList}
		</div>
	)
}

ReactDOM.render(
	<UsersList list={teachers}/>,
	document.getElementById('app') 
);