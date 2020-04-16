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
        {Object.keys(data.algorithms.name).map((key, i) => (
          <IonRow key={i}>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  {data.algorithms.name.mergesort.title}
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </IonContent>
  );
};

export default MainOverview;
