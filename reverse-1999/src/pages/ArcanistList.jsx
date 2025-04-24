import React, { useState, useEffect, useContext } from "react";
import "./ArcanistList.css";
import ArcanistCard from "../components/ArcanistCard";
import { ArcanistContext } from "../context/ArcanistContext";

const afflatus = ["Beast", "Intellect", "Mineral", "Plant", "Spirit", "Star"];
const tier = [2, 3, 4, 5, 6];

function ArcanistList() {
  const { arcanistList, loading } = useContext(ArcanistContext);
  const [selectedAfflatus, setSelectedAfflatus] = useState([]);
  const [selectedTier, setSelectedTier] = useState([]);
  const [currentArcanistList, setCurrentArcanistList] = useState([]);

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

  // const getCharacterList = async () => {
  //   try {
  //     const querySnapshot = await getDocs(arcanistCollectionRef);
  //     const filtered_data = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
  //     setArcanistList(filtered_data);
  //     totalArcanistList = filtered_data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const filterArcanistOnAfflatus = () =>{
  //   if(selectedAfflatus.length > 0){
  //     let filteredItems = selectedAfflatus.map((afflatus)=>{
  //       return arcanistList.filter((arcanist)=>arcanist.afflatus === afflatus);
  //     })
  //     setArcanistList(filteredItems.flat());
  //   }else{
  //     setArcanistList(arcanistList);
  //   }
  // }

  // const filterArcanistOnTier = () =>{
  //   if(selectedTier.length > 0){
  //     let filteredItems = selectedTier.map((tier)=>{
  //       return arcanistList.filter((arcanist)=>arcanist.tier === tier);
  //     })
  //     console.log(filteredItems);
  //     setArcanistList(filteredItems.flat());
  //   }else{
  //     setArcanistList(arcanistList);
  //   }
  // }

  const filterArcanist = () =>{
    // 4 scenario
    // 1) afflatus filter only
    // 2) tier filter only
    // 3) both
    // 4) clear all
    let filteredItems = arcanistList;
    console.log(filteredItems);

    if(selectedAfflatus.length > 0){
      filteredItems = selectedAfflatus.map((afflatus)=>{
        return (filteredItems.filter((arcanist)=>arcanist.afflatus === afflatus));
      }).flat()
    }

    // console.log("after afflatus filter: ", filteredItems);

    if(selectedTier.length > 0){
      filteredItems = selectedTier.map((tier)=>{
        return (filteredItems.filter((arcanist)=>arcanist.tier === tier));
      }).flat();
    }
    // console.log("after tier filter: ", filteredItems);
    setCurrentArcanistList(filteredItems.flat());
  }

  useEffect(() => {
    if(loading === false){
      setCurrentArcanistList(arcanistList);
    }
  }, [loading]);

  useEffect(() => {
    filterArcanist();
  }, [selectedTier, selectedAfflatus]);

  return (
    <>
      {(loading&&currentArcanistList!== null) ? (
        <div className="loading-screen">
          <span className="loading loading-spinner size-24"></span>
        </div>
      ) :
        (

          <div className="arcanist-container bg-base-200">
            {/* <div className="title">Arcanist</div> */}
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
              {currentArcanistList.map((arcanist) => {
                return <ArcanistCard arcanist={arcanist}></ArcanistCard>
              })}
              {/* <ArcanistCard tier="6"></ArcanistCard>
                <ArcanistCard tier="5"></ArcanistCard>
                <ArcanistCard tier="4"></ArcanistCard>
                <ArcanistCard tier="3"></ArcanistCard>
                <ArcanistCard tier="2"></ArcanistCard> */}
            </div>
          </div>
        )


      }

    </>



  );
}

export default ArcanistList;
