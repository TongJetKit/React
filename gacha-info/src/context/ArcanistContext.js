import { createContext, useEffect, useState } from 'react';
import { db } from '../database/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ArcanistContext = createContext();

const ArcanistProvider = ({ children }) => {

    const arcanistCollectionRef = collection(db, "arcanist");
    const [arcanistList, setArcanistList] = useState([]);

    // Fetch the data from the database
    const getArcanistList = async () => {
      try {
        const querySnapshot = await getDocs(arcanistCollectionRef);
        const filtered_data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setArcanistList(filtered_data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getArcanistList();
    }, []);

    return (
        <ArcanistContext.Provider value={arcanistList}>
            {children}
        </ArcanistContext.Provider>
    );
};

export {ArcanistContext, ArcanistProvider};