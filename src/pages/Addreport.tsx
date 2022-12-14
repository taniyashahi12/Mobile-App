import './Global.css';
import {IonPage, IonInput, IonButton, IonTextarea, IonIcon, IonContent} from '@ionic/react';

const Addreport = () => {
	return (
		<IonPage>
			<IonContent>
				<div className="heading_login flex_container add_report">
			  		<a href="Home"><IonIcon className="back-icon" name="chevron-back-outline"></IonIcon></a>
			  		<h1>Add Report</h1>
			  	</div>
				<div className="container-padding">
					  <div className="ion-align-center">
					  	
					  	<p className="add_report_text">You can add outgoing report</p>
					  	<div className="input_ion">
						  	<form>
						  		<div className="form_container">
						  			<label className="label_name">Day End</label>
						  			<IonTextarea placeholder="Completed Work" className="form_input height_zero"></IonTextarea>
						  		</div>
						  		<div className="register_container">
						  			<IonButton className="register_button" type="submit" expand="block">Submit</IonButton>
						  		</div>
						  	</form>
					  	</div>
					  </div>
				</div>
			</IonContent>
		</IonPage>
		);
};

export default Addreport;