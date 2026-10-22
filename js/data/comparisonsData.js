/**
 * Human Body Explorer - Organ & Anatomical Comparisons Data
 * Curated side-by-side comparative analyses with structured dimensions.
 */

const COMPARISONS_DATA = [
  {
    id: "arteries-vs-veins",
    title: "Arteries vs. Veins",
    category: "Cardiovascular System",
    summary: "High-pressure distributing conduits versus low-pressure capacitance reservoirs.",
    itemA: {
      name: "Arteries",
      system: "Cardiovascular",
      direction: "Carry blood away from the heart toward capillary beds",
      bloodType: "Typically oxygenated (except Pulmonary Arteries and Umbilical Arteries)",
      pressure: "High pressure (Mean Arterial Pressure ~90-100 mmHg; peak systolic 120 mmHg)",
      wallStructure: "Thick walls with abundant elastic fibers and thick tunica media smooth muscle",
      lumen: "Narrower, circular lumen that maintains shape under pressure",
      valves: "No internal valves (except at the aortic and pulmonary arterial roots)",
      volumeReserve: "Contains ~15% of total blood volume at rest (Pressure Reservoir)",
      flowDynamics: "Pulsatile flow driven directly by ventricular myocardial systole",
      clinicalIssues: "Atherosclerosis, aneurysm, arterial hypertension, embolism"
    },
    itemB: {
      name: "Veins",
      system: "Cardiovascular",
      direction: "Carry blood toward the heart away from capillary beds",
      bloodType: "Typically deoxygenated (except Pulmonary Veins and Umbilical Vein)",
      pressure: "Low pressure (approx. 2-15 mmHg, near 0 mmHg in vena cava)",
      wallStructure: "Thin walls with thinner tunica media and high compliance (easily distensible)",
      lumen: "Large, irregular, often collapsed lumen with lower flow resistance",
      valves: "Contain one-way bicuspid valves in limbs to prevent gravitational backflow",
      volumeReserve: "Contains ~65% of total blood volume at rest (Capacitance Reservoir)",
      flowDynamics: "Steady, non-pulsatile flow assisted by skeletal muscle pump and respiratory pump",
      clinicalIssues: "Varicose veins, deep vein thrombosis (DVT), venous insufficiency"
    },
    keyTakeaway: "Arteries act as high-pressure, muscular and elastic delivery pipes that smooth pulsatile cardiac ejection, while veins act as low-pressure, high-capacity holding reservoirs equipped with one-way valves to return blood uphill against gravity."
  },
  {
    id: "small-vs-large-intestine",
    title: "Small Intestine vs. Large Intestine",
    category: "Digestive System",
    summary: "The master nutrient absorptive factory versus the master water recovery and microbiome fermenter.",
    itemA: {
      name: "Small Intestine (Intestinum Tenue)",
      system: "Digestive",
      length: "Approx. 6 meters (20 feet) long",
      diameter: "Narrower diameter (approx. 2.5 to 3 cm)",
      divisions: "Duodenum, Jejunum, Ileum",
      mucosalSurface: "Covered in circular folds (plicae circulares), villi, and dense microvilli brush border",
      primaryRole: "Chemical enzymatic digestion and primary absorption of nutrients, calories, and vitamins",
      bacterialLoad: "Relatively low bacterial density (10^3 to 10^7 CFU/mL in duodenum/jejunum)",
      mobilityFeatures: "Continuous segmentation contractions and migrating motor complexes (MMCs)",
      fatAbsorption: "Dietary lipids absorbed into specialized lymphatic lacteals as chylomicrons",
      pathology: "Celiac disease, Crohn's enteritis, duodenal ulcers, small intestinal bacterial overgrowth"
    },
    itemB: {
      name: "Large Intestine (Intestinum Crassum)",
      system: "Digestive",
      length: "Approx. 1.5 meters (5 feet) long",
      diameter: "Wider diameter (approx. 6.5 to 7.5 cm)",
      divisions: "Cecum, Appendix, Colon (Ascending, Transverse, Descending, Sigmoid), Rectum, Anus",
      mucosalSurface: "Smooth internal surface without villi or circular folds; deep crypts with abundant goblet cells",
      primaryRole: "Reabsorption of water and electrolytes, fecal compaction, microbial vitamin synthesis",
      bacterialLoad: "Extremely high bacterial density (10^11 to 10^12 CFU/g of feces; ~38 trillion bacteria)",
      mobilityFeatures: "Haustral churning and mass peristaltic movements 3-4 times daily",
      fatAbsorption: "Does not absorb dietary fats; absorbs microbially synthesized Vitamin K and SCFAs",
      pathology: "Ulcerative colitis, diverticulitis, appendicitis, colorectal adenocarcinoma"
    },
    keyTakeaway: "The small intestine uses villi to amplify surface area for breaking down and absorbing macronutrients into blood and lymph, whereas the large intestine lacks villi and focuses on recovering water, hosting trillions of beneficial symbiotic microbes, and preparing fecal waste."
  },
  {
    id: "sympathetic-vs-parasympathetic",
    title: "Sympathetic vs. Parasympathetic Nervous System",
    category: "Nervous System",
    summary: "The adrenaline-fueled emergency engine ('Fight-or-Flight') versus the recuperative maintenance branch ('Rest-and-Digest').",
    itemA: {
      name: "Sympathetic Division",
      system: "Autonomic Nervous System (ANS)",
      anatomicalOrigin: "Thoracolumbar outflow (lateral horns of spinal cord T1 through L2)",
      gangliaLocation: "Close to the CNS in sympathetic chain ganglia (paravertebral) or collateral ganglia (prevertebral)",
      axonLengths: "Short preganglionic fibers; long postganglionic fibers reaching distant target organs",
      neurotransmitters: "Preganglionic: Acetylcholine (ACh); Postganglionic: Norepinephrine (NE) [except sweat glands = ACh]",
      heartEffect: "Increases heart rate (tachycardia) and enhances myocardial contractility via beta-1 receptors",
      lungsEffect: "Dilates bronchioles (bronchodilation) via beta-2 receptors to maximize airflow",
      digestiveEffect: "Inhibits salivation, decreases peristalsis, contracts sphincters, diverts blood flow away from gut",
      pupilEffect: "Dilates pupils (mydriasis) via alpha-1 receptors on pupillary dilator muscle",
      overallPurpose: "Prepares organism for physical survival, intense exertion, metabolic mobilization, and acute defense"
    },
    itemB: {
      name: "Parasympathetic Division",
      system: "Autonomic Nervous System (ANS)",
      anatomicalOrigin: "Craniosacral outflow (Cranial nerves III, VII, IX, X [Vagus] and sacral spinal roots S2-S4)",
      gangliaLocation: "Terminal or intramural ganglia situated directly on or inside the walls of target visceral organs",
      axonLengths: "Long preganglionic fibers (e.g. Vagus nerve); very short postganglionic fibers inside target walls",
      neurotransmitters: "Preganglionic: Acetylcholine (ACh); Postganglionic: Acetylcholine (ACh) acting on muscarinic receptors",
      heartEffect: "Slows heart rate (bradycardia) via vagus nerve acetylcholine acting on M2 muscarinic receptors",
      lungsEffect: "Constricts bronchioles (bronchoconstriction) and stimulates protective mucus secretion",
      digestiveEffect: "Stimulates salivation, accelerates gastric churning, releases digestive enzymes, promotes defecation",
      pupilEffect: "Constricts pupils (miosis) via pupillary sphincter muscle to sharpen near vision",
      overallPurpose: "Promotes biological conservation of energy, digestion, nutrient replenishment, and cellular recovery"
    },
    keyTakeaway: "These two divisions act as physiological antagonists: the sympathetic system mobilizes energy and elevates heart rate to handle threats, while the parasympathetic system conserves resources, promotes digestion, and lowers heart rate during calm."
  },
  {
    id: "tendons-vs-ligaments",
    title: "Tendons vs. Ligaments",
    category: "Musculoskeletal System",
    summary: "Force transmitters connecting muscle to bone versus stabilizing anchors connecting bone to bone.",
    itemA: {
      name: "Tendons",
      system: "Muscular / Skeletal",
      connection: "Connects Skeletal Muscle to Bone (periosteum)",
      tissueArchitecture: "Dense regular connective tissue packed with tightly parallel bundles of Type I collagen fibers",
      elasticity: "Low elasticity and high tensile strength to transmit mechanical muscular pull without stretch lag",
      cellularComponent: "Tenocytes (specialized elongated fibroblasts arranged in parallel rows)",
      functionalRole: "Dynamic force transmission: converts shortening of muscle bellies into joint rotation and leverage",
      vascularity: "Relatively low vascular supply, but usually more vascularized than intra-articular ligaments",
      famousExample: "Achilles Tendon (calcaneal tendon), Patellar tendon, Biceps brachii tendon",
      clinicalInjuries: "Tendinopathy, tendinitis, tenosynovitis, tendon rupture (e.g. Achilles rupture)"
    },
    itemB: {
      name: "Ligaments",
      system: "Skeletal / Articular",
      connection: "Connects Bone to Bone across an articulation (joint)",
      tissueArchitecture: "Dense regular connective tissue with slightly more interlacing fibers and higher elastin content",
      elasticity: "Contains more elastin fibers than tendons, providing modest pliability to allow normal joint motion",
      cellularComponent: "Ligament fibroblasts embedded in dense extracellular collagen-proteoglycan matrix",
      functionalRole: "Static joint stabilization: limits excessive range of motion and prevents dislocation or joint shearing",
      vascularity: "Poor blood supply (bradytrophic tissue); relies largely on diffusion from joint capsule, healing very slowly",
      famousExample: "Anterior Cruciate Ligament (ACL), Medial Collateral Ligament (MCL), Iliofemoral ligament",
      clinicalInjuries: "Sprains (Grade I mild stretch to Grade III complete tear; e.g. sports ACL tear)"
    },
    keyTakeaway: "Tendons act as sturdy, non-stretching cables that transfer muscle contractions into skeletal movements, whereas ligaments act as joint-protecting safety straps that anchor bones together to prevent abnormal joint displacement."
  },
  {
    id: "endocrine-vs-exocrine",
    title: "Endocrine vs. Exocrine Glands",
    category: "Endocrine System",
    summary: "Ductless broadcast glands secreting hormones into blood versus ducted glands secreting fluids onto surfaces.",
    itemA: {
      name: "Endocrine Glands",
      system: "Endocrine",
      ductPresence: "Ductless glands (no physical tubes or conduits)",
      secretionDestination: "Secretes hormones directly into interstitial fluid, entering fenestrated capillaries and bloodstream",
      secretoryProducts: "Chemical messenger hormones (peptides, steroids, thyroid amines)",
      targetSite: "Distant target cells and organs throughout the entire body possessing specific receptor proteins",
      speedOfResponse: "Slower onset (seconds, hours, or days) with prolonged, sustained systemic biological duration",
      vascularity: "Extremely rich capillary network surrounding glandular cords and follicles",
      examples: "Pituitary gland, Thyroid gland, Adrenal glands, Parathyroid glands, Pancreatic Islets",
      pathology: "Hormone hypersecretion (e.g. Cushing's, Graves') or hyposecretion (Addison's, Type 1 Diabetes)"
    },
    itemB: {
      name: "Exocrine Glands",
      system: "Digestive / Integumentary / Reproductive",
      ductPresence: "Ducted glands (possess epithelial tubes conveying secretions directly to a destination)",
      secretionDestination: "Secretes onto an internal or external epithelial surface (skin, gut lumen, respiratory tract)",
      secretoryProducts: "Enzymes, mucus, saliva, sweat, sebum, hydrochloric acid, breast milk, bile",
      targetSite: "Localized anatomical surfaces adjacent to the duct opening (e.g. oral cavity, skin surface)",
      speedOfResponse: "Rapid, immediate, localized mechanical or enzymatic action",
      vascularity: "Vascularized supportive stroma, but secretory units empty into epithelial duct lumens rather than blood",
      examples: "Salivary glands, Sweat glands, Sebaceous glands, Exocrine Pancreas, Lacrimal glands, Mammary glands",
      pathology: "Cystic fibrosis (thick duct-blocking mucus), ductal stones, sialadenitis, pancreatitis"
    },
    keyTakeaway: "Endocrine glands are ductless broadcasters that release hormones into the bloodstream to coordinate distant body-wide physiology, while exocrine glands use dedicated ducts to deliver specialized functional fluids directly onto local epithelial surfaces."
  }
];

// Export to global scope
window.COMPARISONS_DATA = COMPARISONS_DATA;
