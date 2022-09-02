import React, { useState } from 'react';
import './Global.css';
import { IonContent, IonButton, IonInput, IonPage} from '@ionic/react';
import Lottie from "lottie-react";
import loginAnimation from "./Login.json";
import OtpInput from 'react-otp-input';

const Login = () =>{
	const [otp,setOtp] = useState<any>('');
	// state = { otp: '' };
  	// const handleChange = (otp: any) => setOtp(otp);

  	const handleChange=(otp:any)=>{
  		console.log(otp)
  		setOtp(otp)
  	}

	return(
		<IonPage>
		<IonContent>
			<div className="container-padding">
				  <div className="ion-align-center">
				  <Lottie className="lottie_width" animationData={loginAnimation} loop={true} />
				  	<div className="heading_main">
				  		<h1>Hey,<br />Login Now.</h1>
				  		<p>If you are new / <a href="Sign">Create New</a> / <a href="Home">Home</a></p>
				  	</div>
				  	<div className="input_ion">
					  	<form>
					  		<div className="form_container margin-bottom">
					  			<label className="label_name">Enter Your Pin</label>
					  			<IonInput className="form_input" type="password" value="" placeholder="1234"></IonInput>
					  		</div>
					  		<div className="">
					  			<label className="label_name">Enter Your Pin</label>
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


