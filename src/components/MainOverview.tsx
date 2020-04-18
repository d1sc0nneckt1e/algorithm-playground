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
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

const MainOverview: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const modalStyling = {
    color: "white",
  };
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
        {data.algorithms.map((algo, i) => (
          <IonRow key={i}>
            <IonCol>
              <IonModal isOpen={showModal}>
                <p style={modalStyling}>{algo.title}</p>
                <IonButton onClick={() => setShowModal(false)}>
                  Close Modal
                </IonButton>
              </IonModal>
							<IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </IonContent>
  );
};

export default MainOverview;
