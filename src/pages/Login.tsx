import './Global.css';
import { IonContent, IonButton, IonInput, IonPage} from '@ionic/react';
import Lottie from "lottie-react";
import loginAnimation from "./Login.json";

const Login = () =>{
	return(
		<IonPage>
		<IonContent>
			<div className="container-padding">
				  <div className="ion-align-center">
				  <Lottie className="lottie_width" animationData={loginAnimation} loop={true} />
				  	{/*<div className="image_logo">
				  		<IonImg className="image_width" src='./assets/images/kuroit-logo.png' />
				  	</div>*/}
				  	<div className="heading_main">
				  		<h1>Hey,<br />Login Now.</h1>
				  		<p>If you are new / <a href="Sign">Create New</a> / <a href="Home">Home</a></p>
				  	</div>
				  	<div className="input_ion">
					  	<form>
					  		<div className="form_container">
					  			<label className="label_name">Enter Your Pin</label>
					  			<IonInput className="form_input" type="password" value="" placeholder="1234"></IonInput>
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


