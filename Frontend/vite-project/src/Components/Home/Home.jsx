import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from './HeroSection'
import HowItWorks from "./HowItWorks"
import PopularCategory from './PopularCategory'
import PopularCompany from './PopularCompany'


const Home = () => {
  const {isAuthorized} = useContext(Context)
  if(!isAuthorized){
    return <Navigate to={"/login"} />;
  }
   
  return (
    <section className="homePage page">
    <HeroSection/>
    <HowItWorks/>
    <PopularCategory/>
    <PopularCompany/>
    </section>
  )
}

export default Home