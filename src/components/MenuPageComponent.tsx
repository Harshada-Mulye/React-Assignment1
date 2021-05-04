import React,{useState} from 'react'
import MainPageComponent from './MainPageComponent';
import Settings from './Settings';
import './MenuPage.css'
const MenuPageComponent=()=>{
	const [showSection, setShowSection] = useState(<MainPageComponent/>)
	const showMainPage = () => {
	
		setShowSection(<MainPageComponent />);
	}
	const showSettingsPage = () => {
		setShowSection(<Settings />);
	}
	

	

	return(


		<div className="wrapper">
			<button  onClick={showMainPage}>Main Page</button>
			<button onClick={showSettingsPage}>Settings</button>
			{showSection}

		</div>
	)
	
}
export default MenuPageComponent

