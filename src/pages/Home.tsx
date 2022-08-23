import './Global.css';
import { IonPage, IonImg, IonButton, IonPopover, IonContent, IonIcon, IonProgressBar } from '@ionic/react'; 

const Home = () => {
	return(
		<IonPage>
		<div className="padding-home">
			<div className="flex-container home_addreport">
				<IonImg className="image_width" src='./assets/images/kuroit-logo.png' />
				<div>
					<IonButton id="cover-trigger" className="admin_name">
						<IonIcon name="person"></IonIcon><span className="m-left">Taniya sahi</span>
					</IonButton>
				    <IonPopover trigger="cover-trigger" className="ul_list" size="auto">
				        <IonContent class="ion-padding list-text list"><a href="/Addreport">Add Report</a></IonContent>
				        <IonContent class="ion-padding list-text list"><a href="/Leave">Leave</a></IonContent>
				        <IonContent class="ion-padding list-text list">Change Pin</IonContent>
				        <IonContent class="ion-padding list-text">Logout</IonContent>
				    </IonPopover>
				</div>
			</div>
			<div className="ion-align-center">

			</div>
		</div>
		<IonProgressBar value={0.4}></IonProgressBar>
		</IonPage>
		);
};

export default Home;