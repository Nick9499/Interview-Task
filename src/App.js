import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"

const App = () => {
	return (
		<Router>
			<Route path='/' component={Page1} exact />
			<Route path='/pie' component={Page2} />
		</Router>
	)
}

export default App
