import React from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
} from "@ionic/react";

import data from "./data";

const MainOverview: React.FC = () => {
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
      </IonGrid>
    </IonContent>
  );
};

export default MainOverview;
