import React, { useState } from 'react';
import './Global.css';
import { IonContent, IonButton, IonInput, IonPage} from '@ionic/react';
import Lottie from "lottie-react";
import loginAnimation from "./Login.json";
import OtpInput from 'react-otp-input';
import { useIonRouter } from '@ionic/react';
import { App } from '@capacitor/app';

const Login = () =>{
	const [otp,setOtp] = useState<any>('');

  	const handleChange=(otp:any)=>{
  		console.log(otp)
  		setOtp(otp)
  	}

  	const ionRouter = useIonRouter();
	document.addEventListener('ionBackButton', (ev) => {
	App.exitApp();
	});
	return(
		<IonPage>
		<IonContent>
			<div className="container-padding">
				  <div className="ion-align-center">
				  <Lottie className="lottie_width" animationData={loginAnimation} loop={true} />
				  	<div className="heading_main text_center">
				  		<h1>Hey,<br />Login Now.</h1>
				  		<p>If you are new / <a href="Sign">Create New</a> / <a href="Home">Home</a></p>
				  	</div>
				  	<div className="input_ion">
					  	<form>
					  		<div className="form_container margin-bottom text_center flex-align">
					  			<label className="label_name">ENTER YOUR PIN</label>
					  			<OtpInput className="input_otp" value={otp} onChange={(e:any)=> handleChange(e)} numInputs={4} 
					  			separator={<span>&nbsp;&nbsp;&nbsp;</span>} />
					  		</div>
					  		<div className="text_center flex-align">
					  			<label className="label_name">ENTER YOUR TEAM CODE</label>
					  			<OtpInput className="input_otp" value={otp} onChange={(e:any)=> handleChange(e)} numInputs={4} 
					  			separator={<span>&nbsp;&nbsp;&nbsp;</span>} />
					  		</div>
					  		<div className="register_container">
					  			<IonButton className="register_button" type="submit" expand="block">Login</IonButton>
					  		</div>
					  	</form>
				  	</div>
				  </div>
			</div>
		</IonContent>
		</IonPage>
		);
};

export default Login;


