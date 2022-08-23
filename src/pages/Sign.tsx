import './Global.css';
import { IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput } from '@ionic/react';


const Sign = () =>{
	return(
		<IonPage>
		<div className="bg-color">
			<div className="padding-all">
	      		<form className="full_width">
		      		<div className="">	
			      		<div className="header_heading">
			          	<h1>Sign Up</h1>
		          		</div>			  		
		      			<div className="margin-bottom">
		      				<label className="label_name">First Name</label>
				  			<IonInput className="form_input" type="text" value="" placeholder="Lorem"></IonInput>
				  		</div>
				  		<div className="margin-bottom">
				  			<label className="label_name">Last Name</label>
				  			<IonInput className="form_input" type="text" value="" placeholder="Ipsum"></IonInput>
				  		</div>
				  		<div className="margin-bottom">
				  			<label className="label_name">Email</label>
				  			<IonInput className="form_input" type="email" value="" placeholder="xyz@kuroit.com"></IonInput>
				  		</div>
				  		<div className="margin-bottom">
				  			<label className="label_name">Enter Your Pin</label>
				  			<IonInput className="form_input" type="password" value="" placeholder="1234"></IonInput>
				  		</div>
				  	</div>
			  		<div className="register_container">
			  			<IonButton className="register_button" type="submit" expand="block">Sign Up</IonButton>
			  		</div>
				</form>
      		</div>
      	</div>
		</IonPage>
		);
};
export default Sign;