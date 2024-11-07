import React, { useState, useEffect } from "react";
import "./Arcanist.css";
import ArcanistCard from "../components/ArcanistCard";
import { db } from "../database/firebase";
import { collection, getDocs } from "firebase/firestore";

const afflatus = ["Beast", "Intellect", "Mineral", "Plant", "Spirit", "Star"];
const tier = [2, 3, 4, 5, 6];

function Arcanist() {
  const arcanistCollectionRef = collection(db, "arcanist");

  const [selectedAfflatus, setSelectedAfflatus] = useState([]);
  const [selectedTier, setSelectedTier] = useState([]);
  const [arcanistList, setArcanistList] = useState([]);

  const handleFilterAffaltusClick = (filterItem) => {
    if (selectedAfflatus.includes(filterItem)) {
      let filters = selectedAfflatus.filter(
        (element) => element !== filterItem
      );
      setSelectedAfflatus(filters);
    } else {
      setSelectedAfflatus([...selectedAfflatus, filterItem]);
    }
  };

  const handleFilterTierClick = (filterItem) => {
    if (selectedTier.includes(filterItem)) {
      let filters = selectedTier.filter((element) => element !== filterItem);
      setSelectedTier(filters);
    } else {
      setSelectedTier([...selectedTier, filterItem]);
    }
  };

  const handleClearAfflatus = () => {
    setSelectedAfflatus([]);
  };

  const handleClearTier = () => {
    setSelectedTier([]);
  };

  const getCharacterList = async () => {
    try {
      const querySnapshot = await getDocs(arcanistCollectionRef);
      const filtered_data = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setArcanistList(filtered_data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacterList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(selectedAfflatus);
  //   console.log(selectedTier);
  // }, [selectedAfflatus, selectedTier]);

  return (
    <div className="arcanist-container">
      <div className="title">Arcanist</div>
      <div className="filter-container">
        <div className="button-group">
          {afflatus.map((element) => {
            return (
              <button
                className={
                  selectedAfflatus.includes(element)
                    ? "afflatus icon active"
                    : "afflatus icon"
                }
                onClick={() => handleFilterAffaltusClick(element)}
              >
                <img
                  src={"/images/" + element + "_icon.png"}
                  alt={element}
                ></img>
                {element}
              </button>
            );
          })}
          <button className="clear-button icon" onClick={handleClearAfflatus}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="button-group">
          {tier.map((element, idx) => {
            return (
              <button
                className={
                  selectedTier.includes(element)
                    ? "tier icon active"
                    : "tier icon"
                }
                onClick={() => handleFilterTierClick(element)}
              >
                {element}
                <i class="fa-solid fa-star"></i>
              </button>
            );
          })}
          <button className="clear-button icon" onClick={handleClearTier}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <div className="arcanist-info-container">
        {arcanistList.map((arcanist)=>{
          return <ArcanistCard arcanist={arcanist}></ArcanistCard>
        })}
        {/* <ArcanistCard tier="6"></ArcanistCard>
        <ArcanistCard tier="5"></ArcanistCard>
        <ArcanistCard tier="4"></ArcanistCard>
        <ArcanistCard tier="3"></ArcanistCard>
        <ArcanistCard tier="2"></ArcanistCard> */}
      </div>
    </div>
  );
}

export default Arcanist;
