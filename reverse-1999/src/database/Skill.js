
import {db} from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


const skillCollectionRef = collection(db, "skill");

const getSkill = async (arcanistName) =>  {
    const q = query(skillCollectionRef, where("characterName","==",arcanistName));
    try {
      const querySnapshot = await getDocs(q);
      const filtered_data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      return filtered_data;
    } catch (err) {
      console.log(err);
    }
  };


export default getSkill;