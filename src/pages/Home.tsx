import './Global.css';
import { IonGrid, IonRow, IonCol, IonPage, IonImg, IonButton, IonPopover, IonContent, IonIcon, IonProgressBar } from '@ionic/react'; 
import { useIonRouter } from '@ionic/react';
import { App } from '@capacitor/app';

const Home = () => {
	const ionRouter = useIonRouter();
document.addEventListener('ionBackButton', (ev) => {
  // ev.detail.register(-1, () => {
  //   if (!ionRouter.canGoBack()) {
     App.exitApp();
  //   }
  // });
});
	return(
		<IonPage>
		<IonContent>
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
				<IonGrid className="m-top">
			      <IonRow className="main-heading table_styling">
			        <IonCol>
			          Name
			        </IonCol>
			        <IonCol>
			          Currently
			        </IonCol>
			        <IonCol size="5">
			         Doing
			        </IonCol>
			        <IonCol>
			          Time
			        </IonCol>
			      </IonRow>

			      <IonRow className="table_styling">
			        <IonCol>
			          Shiwani
			        </IonCol>
			        <IonCol>
			          Working
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="even table_styling">
			        <IonCol>
			          Sujata
			        </IonCol>
			        <IonCol>
			          Working
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="table_styling">
			        <IonCol>
			          Sonali
			        </IonCol>
			        <IonCol>
			          Working
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="even table_styling">
			        <IonCol>
			          Hardeep
			        </IonCol>
			        <IonCol>
			          Working
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>
			    </IonGrid>
				</div>

				<div className="ion-align-center">
				<p className="add_report_text m-top">Expected Work</p>
				<IonGrid className="m-20">
			      <IonRow className="main-heading table_styling">
			        <IonCol>
			          S/N
			        </IonCol>
			        <IonCol>
			          Date
			        </IonCol>
			        <IonCol size="5">
			         Start Time
			        </IonCol>
			        <IonCol>
			          Expected
			        </IonCol>
			      </IonRow>

			      <IonRow className="table_styling">
			        <IonCol>
			          1
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="even table_styling">
			       <IonCol>
			          2
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="table_styling">
			        <IonCol>
			          3
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="even table_styling">
			        <IonCol>
			          4
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>
			    </IonGrid>
				</div>

				<div className="ion-align-center">
				<p className="add_report_text m-top">Completed Work</p>
				<IonGrid className="m-20">
			      <IonRow className="main-heading table_styling">
			        <IonCol>
			          S/N
			        </IonCol>
			        <IonCol>
			          End Time
			        </IonCol>
			        <IonCol size="5">
			         Completed Work
			        </IonCol>
			        <IonCol>
			          Time
			        </IonCol>
			      </IonRow>

			      <IonRow className="table_styling">
			        <IonCol>
			          1
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="even table_styling">
			        <IonCol>
			          2
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="table_styling">
			        <IonCol>
			          3
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>

			      <IonRow className="even table_styling">
			       <IonCol>
			          4
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			        <IonCol size="5">
			         working on private care
			        </IonCol>
			        <IonCol>
			          23-08-22
			        </IonCol>
			      </IonRow>
			    </IonGrid>
				</div>
			</div>
		</IonContent>
			<IonProgressBar className="progress_bar" value={0.4}></IonProgressBar>
		</IonPage>
		);
};

export default Home;
