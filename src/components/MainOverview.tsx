import React, { useState } from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonModal,
  IonButton,
} from "@ionic/react";

import data from "./data";

const MainOverview: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonGrid>
        {data.algorithms.map((algo, i) => (
          <IonRow key={i}>
            <IonCol>
              <IonCard>
                <IonCardHeader>{algo.title}</IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        ))}
        <IonRow>
          <IonCol>
            <IonModal isOpen={showModal}>
              <IonButton onClick={() => setShowModal(false)}>
                Close Modal
              </IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default MainOverview;
