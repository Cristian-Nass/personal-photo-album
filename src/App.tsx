import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {db} from './service/firebase';
import {collection, query, getDocs} from 'firebase/firestore';
import NavbarView from './components/NavbarView';
import HomeView from './components/views/HomeView';
import AboutView from './components/views/AboutView';
import ContactView from './components/views/ContactView';
import DrawerModal from './components/DrawerModal';

const getData = async (q: any) => {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data());
  });
};
function App() {
  useEffect(() => {
    const q = query(collection(db, 'users'));
    getData(q);
  }, []);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <DrawerModal />
          <NavbarView />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<ContactView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
