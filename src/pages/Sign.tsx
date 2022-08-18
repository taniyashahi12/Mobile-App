import react from 'react';
import './Global.css';
import { IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput } from '@ionic/react';


const Sign = () =>{
	return(
		<IonPage>
		<div className="bg-color">
			<IonHeader>
		        <IonToolbar>
		          <IonTitle>
		          	<div className="header_heading">
			          	<a href="Login"><IonIcon className="back-icon" name="chevron-back-outline"></IonIcon></a>
			          	<h1>Sign Up</h1>
		          	</div>
		          </IonTitle>
		        </IonToolbar>
	      	</IonHeader>
			<div className="padding-all">
		      	<IonContent>
		      		<form>
			      		<div className="">				  		
			      			<div className="margin-bottom">
			      				<label className="label_name">First Name</label>
					  			<IonInput className="form_input" type="password" value="" placeholder="Lorem"></IonInput>
					  		</div>
					  		<div className="margin-bottom">
					  			<label className="label_name">Last Name</label>
					  			<IonInput className="form_input" type="password" value="" placeholder="Ipsum"></IonInput>
					  		</div>
					  		<div className="margin-bottom">
					  			<label className="label_name">Email</label>
					  			<IonInput className="form_input" type="password" value="" placeholder="xyz@kuroit.com"></IonInput>
					  		</div>
					  		<div className="margin-bottom">
					  			<label className="label_name">Enter Your Pin</label>
					  			<IonInput className="form_input" type="password" value="" placeholder="1234"></IonInput>
					  		</div>
					  	</div>
				  		<div className="register_container">
				  			<IonButton className="register_button" type="submit" expand="block">Siggn Up</IonButton>
				  		</div>
					</form>
		      	</IonContent>
	      	</div>
	      	</div>
		</IonPage>
		);
};
export default Sign;