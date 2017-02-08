// Components EcmaScript5
function Saludar(props){
	return <h1>{props.name}</h1>;

}


// Components EcmaScript6


const Avatar 	= props => <img className={props.user.className} src={props.user.img} alt={props.user.name} />;
const UserName	= props => <p>{props.user.name}</p>;

const User = props => {
	return(
		<div className="user-item">
			<Avatar user={props.user}/>
			<UserName user={props.user}/>			
		</div>
	);
};

const user = {
	name: "Hola",
	img:  "http://www.notiserver.com/archivos/noticia2872.jpg"
};
ReactDOM.render(
	<User user={user}/>,
	document.getElementById('app') 
);
