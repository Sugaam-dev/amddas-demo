import React from "react";
import "./offsitemain.css";

const OffsiteMain = () => {
  return (
    <div className="our-story-main-container">
      {/* Banner offsitemain */}
      <div className="banner-offsitemain">
        <h1 className="banner-title">Corporate - Offsite</h1>
      </div>

      {/* offsitemain offsitemain */}
      <div className="offsitemain-offsitemain">
        <div className="offsitemain-block">
          <h2 className="offsitemain-heading">Amddas Foods</h2>
          <p className="offsitemain-text">
            All our Central Kitchens are designed as a state of the art kitchens
            with a continuous and linear progression of food from receiving, pre
            preparation, production, packing and dispatch of the ﬁnished
            products. We maintain the highest levels of quality and production
            standards with well-defined SOPs and protocols. Our Central kitchens
            are planned with modern equipment meant to aid pre-preparation, food
            safety at various stages, remote temperature monitoring of our cold
            storage and modern and effective cooking platforms.
          </p>
          <p className="offsitemain-text">
            We also have a specialized Chefs focusing specially on offsite
            operations with relevant experience and cuisine knowledge to safely
            and effectively manage the complexity of bulk production, planning
            and managing a varied set of customized health and taste needs. The
            central kitchens also support hybrid operations extremely well,
            allowing wider food choices to consumers by processing and feeding
            the onsite kitchens with bases (sauces, gravies, pre- processed
            intermediaries used in food preparation).
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffsiteMain;
