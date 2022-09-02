import './Global.css';
import {IonPage, IonInput, IonButton, IonTextarea, IonIcon, IonContent} from '@ionic/react';

const Leave = () =>{
	return(
		<IonPage>
			<IonContent>
				<div className="heading_login flex_container leave_request">
			  		<a href="Home"><IonIcon className="back-icon" name="chevron-back-outline"></IonIcon></a>
			  		<h1>Send Leave Request</h1>
			  	</div>
				<div className="container-padding">
					  <div className="ion-align-center">
					  	
					  	<div className="input_ion">
						  	<form>
						  	<div className="margin-bottom">
						  			<label className="label_name">Date</label>
						  			<IonInput className="form_input" type="date" value="" placeholder="Lorem"></IonInput>
						  		</div>
						  		<div className="margin-bottom">
						  			<label className="label_name">Reason</label>
						  			<IonTextarea placeholder="Reason" className="form_input height_zero"></IonTextarea>
						  		</div>
						  		<div className="register_container">
						  			<IonButton className="register_button" type="submit" expand="block">Request</IonButton>
						  		</div>
						  	</form>
					  	</div>
					  </div>
				</div>
			</IonContent>
		</IonPage>
		);
};

export default Leave;