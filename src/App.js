import React,{ useState , useRef ,useEffect } from "react";//useRef gives ref to html obj 
import productsList from "./productsList";                         //useEffect when something is chaning run useEffect function




function App() {
  const productList = [{name: "hamburger", price :25 , img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biggreenegg.eu%2Fen%2Finspiration%2Frecipes%2Fclassic-hamburger-with-bacon-cheddar-and-jalapeno&psig=AOvVaw0yA5VZM4RX_MLQiUS91S-p&ust=1669132166056000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiP-P_Pv_sCFQAAAAAdAAAAABAE"},
                                    {name: "Steak", price :50 , img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Ffood-network-kitchen%2Fpan-seared-t-bone-steak-recipe-2103356&psig=AOvVaw0drw0e3RAdKlHU9Yo-9yCW&ust=1669132141846000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjhpfTPv_sCFQAAAAAdAAAAABAE"},
                                    {name: "Pizza", price :15 , img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tavolartegusto.it%2Fricetta%2Fpizza-napoletana-pizza-margherita%2F&psig=AOvVaw2sz_sYiATuPGQyZC5t2ID-&ust=1669132215990000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOD035fQv_sCFQAAAAAdAAAAABAE"}]; 
 
  return  (
    <>  
    <productsList 
        productsList = {productList}>
    </productsList>
    </>
  );

}

export default App;
