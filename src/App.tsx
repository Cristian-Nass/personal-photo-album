import React, { useEffect } from "react";
import "./App.css";
import { db } from "./service/firebase";
import { collection, query, getDocs } from "firebase/firestore";
const getData = async (q: any) => {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};
function App() {
  useEffect(() => {
    const q = query(collection(db, "users"));
    getData(q);
  }, []);

  return <div className='App'>Wellconme to Personal Photo Album</div>;
}

export default App;
