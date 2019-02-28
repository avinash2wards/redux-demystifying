import "./styles.css";

var h1 = document.createElement("h1");
h1.innerText = "De-mystifying Redux!";
document.getElementById("app").prepend(h1);

var countLabel = document.getElementById("countLabel");
var Redux = window.Redux;

// Event handlers

document.getElementById("upvote").addEventListener("click", function() {
	store.dispatch({ type: "INCREMENT" });
});

document.getElementById("downvote").addEventListener("click", function() {
	store.dispatch({ type: "DECREMENT" });
});

function counter(state = { count: 0 }, action) {
	switch (action.type) {
		case "INCREMENT":
			return { state, ...{ count: state.count + 1 } };
		case "DECREMENT":
			return { state, ...{ count: state.count - 1 } };
		default:
			return state;
	}
}

var store = Redux.createStore(counter);
countLabel.innerHTML = store.getState().count;

store.subscribe(function() {
	countLabel.innerHTML = store.getState().count;
});
