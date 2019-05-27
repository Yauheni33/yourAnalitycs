import About from "../components/About.jsx"
import Features from "../components/Features.jsx"
import Docs from "../components/Docs.jsx"
import License from "../components/License.jsx"
import Contact from "../components/Contact.jsx"

var routes = [
	{	
		path: "/about",
		name: "About",
		component: About
	},
	{ 
		path: "/features",
		name: "Features",
		component: Features
	},
	{
		path: "/docs",
		name: "Docs",
		component: Docs
	},
	{
		path: "/license",
		name: "License",
		component: License
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact
	}
]

export default routes;