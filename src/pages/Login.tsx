import './Global.css';
import { IonButton, IonInput, IonPage, IonImg } from '@ionic/react';

const Login = () =>{
	return(
		<IonPage>
			<div className="container-padding">
				  <div className="ion-align-center">
				  	<div className="image_logo">
				  		<IonImg className="image_width" src='./assets/images/kuroit-logo.png' />
				  	</div>
				  	<div className="heading_login">
				  		<h1>Hey,<br />Login Now.</h1>
				  		<p>If you are new / <a href="Sign">Create New</a></p>
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
		</IonPage>
		);
};

export default Login;


