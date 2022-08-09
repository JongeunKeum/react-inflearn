function MyButton(props) {
	const [isClicked, setIsCliceked] = React.useState(false);

	return React.createElement(
		'button',
		{ onClick: () => setIsCliceked(true) },
		isClicked ? 'Clicked!' : 'Click here!'
	)
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);