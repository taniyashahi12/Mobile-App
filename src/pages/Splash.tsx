import React, {useEffect} from 'react';
import './Global.css';
import { IonPage } from '@ionic/react';

const Splash = ({}) => {
	useEffect(() => {
 	 const timer = setTimeout(() => window.location.href ="/Login"
, 5000);
	}, []);
	return(
		<IonPage>
			<div>
				test
			</div>
		</IonPage>
		);
};

export default Splash;
