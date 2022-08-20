import React, {useEffect} from 'react';
import './Global.css';
import { IonPage, IonImg } from '@ionic/react';

const Splash = ({}) => {
	useEffect(() => {
 	 const timer = setTimeout(() => window.location.href ="/Login"
, 1000);
	}, []);
	return(
		<IonPage>
			<div className="bg_color">
				<IonImg className="splash_img" src='./assets/images/kuroit-logo.png' />
			</div>
		</IonPage>
		);
};

export default Splash;
