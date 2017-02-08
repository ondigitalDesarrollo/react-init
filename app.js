// Javascrpt con elementos string
// document.getElementById('app').innerHTML = "<h1>Hola Mundo</h1";


// Vanilla JS

/* 

const el 		= document.createElement('h1');
const child 	= document.createElement('span');
el.setAttribute('id', 'title');
el.textContent = "Hola ";
child.textContent = "mundo";
el.appendChild(child);
document.getElementById('app').appendChild(el);
*/


// Con react
/*
const el = React.createElement(
		'h1', 
		{id: 'title'},
		"Hola ",
		React.createElement('span', null, 'mundo')
	);
ReactDOM.render(el, document.getElementById('app'));
*/

// React y JSX

/*
const el = (
		<h1 id="title" className="title">
			Hola {2 * 60 / 4} 
			<span>Mundo</span>
		</h1>
	);
ReactDOM.render(el, document.getElementById('app'));
*/


// Reloj con Vanilla JS
const app = document.getElementById('app');
function reloj() {
	let now = new Date().toLocaleTimeString();
	const el = <span className="date">{now}</span>;
	ReactDOM.render(el,app);
}

setInterval(reloj, 1000);

