import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/home";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/anime/:name" component={Homepage} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
