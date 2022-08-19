import React, {useEffect} from 'react';
import './Global.css';
import { IonPage } from '@ionic/react';
import { SplashScreen } from '@capacitor/splash-screen';

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
