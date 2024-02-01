/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ScrollContextProvider } from "./lib/context/ScrollContext";

// sidebar Data
import * as sidebarData from "./lib/data/sidebarData";

// layouts
const RootLayout = React.lazy(() => import("./Layout"));
const SolutionsLayout = React.lazy(() => import("./layouts/SolutionsLayout"));
const ServiceSolutionsLayout = React.lazy(() =>
  import("./layouts/ServiceSolutionsLayout")
);
const DefaultLayout = React.lazy(() => import("./layouts/DefaultLayout"));

// pages
const Home = React.lazy(() => import("./pages/home/Home"));
const AboutUs = React.lazy(() => import("./pages/about-us/AboutUs"));
const ContactUs = React.lazy(() => import("./pages/contact-us/ContactUs"));
const ProductsAndSolutions = React.lazy(() =>
  import("./pages/products-and-solutions/ProductsAndSolutions")
);
const ServicesAndSupport = React.lazy(() =>
  import("./pages/services-and-support/ServicesAndSupport")
);
const LaboratorySolutions = React.lazy(() =>
  import(
    "./pages/products-and-solutions/laboratory-solutions/LaboratorySolutions"
  )
);
const MedicalSolutions = React.lazy(() =>
  import("./pages/products-and-solutions/medical-solutions/MedicalSolutions")
);
const ServiceSolutions = React.lazy(() =>
  import("./pages/services-and-support/service-solutions/ServiceSolutions")
);
const SupportSolutions = React.lazy(() =>
  import("./pages/services-and-support/support-solutions/SupportSolutions")
);
const ImagingSolutions = React.lazy(() =>
  import("./pages/products-and-solutions/imaging-solutions/ImagingSolutions")
);
const DentalSolutions = React.lazy(() =>
  import("./pages/products-and-solutions/dental-solutions/DentalSolutions")
);
const ResearchSolutions = React.lazy(() =>
  import("./pages/products-and-solutions/research-solutions/ResearchSolutions")
);
const TeachingSolutions = React.lazy(() =>
  import("./pages/products-and-solutions/teaching-solutions/TeachingSolutions")
);
const VeterinarySolutions = React.lazy(() =>
  import(
    "./pages/products-and-solutions/veterinary-solutions/VeterinarySolutions"
  )
);
import ChemistrySolutions from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/ChemistrySolutions";
import Immunoserology from "./pages/products-and-solutions/laboratory-solutions/immunoserology/Immunoserology";
import Haematology from "./pages/products-and-solutions/laboratory-solutions/haematology/Haematology";
import Microbiology from "./pages/products-and-solutions/laboratory-solutions/microbiology/Microbiology";
import SamplingManagement from "./pages/products-and-solutions/laboratory-solutions/sampling-management/SamplingManagement";
import MolecularBiology from "./pages/products-and-solutions/laboratory-solutions/molecular-biology/MolecularBiology";
import PathologySolutions from "./pages/products-and-solutions/laboratory-solutions/pathology-solutions/PathologySolutions";
import GeneralLabEquipment from "./pages/products-and-solutions/laboratory-solutions/general-lab-equipment/GeneralLabEquipment";
import LaboratoryInfrastructure from "./pages/products-and-solutions/laboratory-solutions/laboratory-infrastructure/LaboratoryInfrastructure";
import CriticalCare from "./pages/products-and-solutions/medical-solutions/critical-care/CriticalCare";
import PrimaryCare from "./pages/products-and-solutions/medical-solutions/primary-care/PrimaryCare";
import SurgicalCare from "./pages/products-and-solutions/medical-solutions/surgical-care/SurgicalCare";
import HomeCare from "./pages/products-and-solutions/medical-solutions/home-care/HomeCare";
import SpecialistCare from "./pages/products-and-solutions/medical-solutions/specialist-care/SpecialistCare";
import MedicalInfrastructure from "./pages/products-and-solutions/medical-solutions/medical-infrastructure/MedicalInfrastructure";
import Radiology from "./pages/products-and-solutions/imaging-solutions/radiology/Radiology";
import Ultrasonography from "./pages/products-and-solutions/imaging-solutions/ultrasonography/Ultrasonography";
import DiagnosticEcg from "./pages/products-and-solutions/imaging-solutions/diagnostic-ecg/DiagnosticEcg";
import MaternalInfantCare from "./pages/products-and-solutions/imaging-solutions/maternal-infant-care/MaternalInfantCare";
import MonitoringSystem from "./pages/products-and-solutions/imaging-solutions/monitoring-system/MonitoringSystem";
import RadiationProtectionSafetyAndDosimetry from "./pages/products-and-solutions/imaging-solutions/radiation-protection-safety-and-dosimetry/RadiationProtectionSafetyAndDosimetry";
import DentalImaging from "./pages/products-and-solutions/dental-solutions/dental-imaging/DentalImaging";
import DentalChair from "./pages/products-and-solutions/dental-solutions/dental-chair/DentalChair";
import DentalLaboratory from "./pages/products-and-solutions/dental-solutions/dental-laboratory/DentalLaboratory";
import DentalAccessories from "./pages/products-and-solutions/dental-solutions/dental-accessories/DentalAccessories";
import DentalHandpiece from "./pages/products-and-solutions/dental-solutions/dental-handpiece/DentalHandpiece";
import DentalEndodontic from "./pages/products-and-solutions/dental-solutions/dental-endodontic/DentalEndodontic";
import Orthodontic from "./pages/products-and-solutions/dental-solutions/orthodontic/Orthodontic";
import DentalSurgery from "./pages/products-and-solutions/dental-solutions/dental-surgery/DentalSurgery";
import SupportSolutionsLayout from "./layouts/SupportSolutionsLayout";
import ConsultancyServices from "./pages/services-and-support/service-solutions/consultancy-services/ConsultancyServices";
import TrainingServices from "./pages/services-and-support/service-solutions/training-services/TrainingServices";
import QcqaServices from "./pages/services-and-support/service-solutions/qcqa-services/QcqaServices";
import OemProduction from "./pages/services-and-support/service-solutions/oem-production/OemProduction";
import ContractManufacturing from "./pages/services-and-support/service-solutions/contract-manufacturing/ContractManufacturing";
import EquipmentPlacementSupport from "./pages/services-and-support/support-solutions/equipment-placement-support/EquipmentPlacementSupport";
import Partnership from "./pages/services-and-support/support-solutions/partnership/Partnership";
import Installations from "./pages/services-and-support/support-solutions/installations/Installations";
import MaintenanceSupport from "./pages/services-and-support/support-solutions/maintenance-support/MaintenanceSupport";
import BiochemistrySolutions from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/BiochemistrySolutions";
import ElectrolyteSolutions from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/electrolyte-solutions/ElectrolyteSolutions";
import BloodGasSolutions from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/blood-gas-solutions/BloodGasSolutions";
import HaemoglobinA1cSolutions from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/haemoglobin-a1c-solutions/HaemoglobinA1cSolutions";
import DryChemistrySystems from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/dry-chemistry-systems/DryChemistrySystems";
import FbcCbcSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/fbc-cbc/FbcCbcSystem";
import HemostasisSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/hemostasis-system/HemostasisSystem";
import HaematologyPoctMeters from "./pages/products-and-solutions/laboratory-solutions/haematology/haematology-poct-meters/HaematologyPoctMeters";
import EsrSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/esr-system/EsrSystem";
import ElectrophoresisSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/electrophoresis-system/ElectrophoresisSystem";
import FbcCbc3PartSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/fbc-cbc/3-part-system/FbcCbc3PartSystem";
import FbcCbc5PartSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/fbc-cbc/5-part-system/FbcCbc5PartSystem";
import HemostasisSemiAutomatedSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/hemostasis-system/semi-automated/HemostasisSemiAutomatedSystem";
import HemostasisFullyAutomatedSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/hemostasis-system/fully-automated/HemostasisFullyAutomatedSystem";
import HbMeters from "./pages/products-and-solutions/laboratory-solutions/haematology/haematology-poct-meters/hb-meters/HbMeters";
import WbcMeters from "./pages/products-and-solutions/laboratory-solutions/haematology/haematology-poct-meters/wbc-meters/WbcMeters";
import ManualEsrSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/esr-system/manual-esr-system/ManualEsrSystem";
import FullyAutomatedEsrSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/esr-system/fully-automated-esr-system/FullyAutomatedEsrSystem";
import SemiAutomatedElectrophoresisSystem from "./pages/products-and-solutions/laboratory-solutions/haematology/electrophoresis-system/semi-automated/SemiAutomatedElectrophoresisSystem";
import RapidElectrophoresisKits from "./pages/products-and-solutions/laboratory-solutions/haematology/electrophoresis-system/rapid-electrophoresis-kits/RapidElectrophoresisKits";
import ReagentsCalibratorsQcSystems from "./pages/products-and-solutions/laboratory-solutions/haematology/fbc-cbc/reagents-calibrators-qc-sytem/ReagentsCalibratorsQcSystems";
import CliaSystems from "./pages/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/CliaSystems";
import ElizaSystems from "./pages/products-and-solutions/laboratory-solutions/immunoserology/eliza-systems/ElizaSystems";
import LatexSerologyTests from "./pages/products-and-solutions/laboratory-solutions/immunoserology/latex-serology-tests/LatexSerologyTests";
import CliaReagentsSystems from "./pages/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/clia-reagents-systems/CliaReagentsSystems";
import CliaPoctSystems from "./pages/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/clia-poct-systems/CliaPoctSystems";
import SemiAutomatedCliaSystems from "./pages/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/semi-automated/SemiAutomatedCliaSystems";
import FullyAutomatedCliaSystem from "./pages/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/fully-automated/FullyAutomatedCliaSystem";
import FullyAutomatedElizaSystem from "./pages/products-and-solutions/laboratory-solutions/immunoserology/eliza-systems/fully-automated/FullyAutomatedElizaSystem";
import SemiAutomatedElizaSystems from "./pages/products-and-solutions/laboratory-solutions/immunoserology/eliza-systems/semi-automated/SemiAutomatedElizaSystems";
import ElizaKits from "./pages/products-and-solutions/laboratory-solutions/immunoserology/eliza-systems/eliza-kits/ElizaKits";
import EquipmentAndAccessories from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/EquipmentAndAccessories";
import CultureMedia from "./pages/products-and-solutions/laboratory-solutions/microbiology/culture-media/CultureMedia";
import MicrobialIdastSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/MicrobialIdastSystems";
import TransportMedia from "./pages/products-and-solutions/laboratory-solutions/microbiology/transport-media/TransportMedia";
import ReadyToUseProducts from "./pages/products-and-solutions/laboratory-solutions/microbiology/ready-to-use-products/ReadyToUseProducts";
import SterileDisinfectants from "./pages/products-and-solutions/laboratory-solutions/microbiology/sterile-disinfectants/SterileDisinfectants";
import StainsAnalyticalReagentsIndicators from "./pages/products-and-solutions/laboratory-solutions/microbiology/stains-analytical-reagents-indicators/StainsAnalyticalReagentsIndicators";
import QualityControlOrganisms from "./pages/products-and-solutions/laboratory-solutions/microbiology/quality-control-organisms/QualityControlOrganisms";
import UrinalysisSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/UrinalysisSystems";
import CompleteAutomatedUrinalysisSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/complete-automated-urinalysis-systems/CompleteAutomatedUrinalysisSystems";
import UrineSedimentUrinalysisSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/urine-sediment-urinalysis-systems/UrineSedimentUrinalysisSystems";
import UrineChemistryUrinalysisSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/urine-chemistry-urinalysis-systems/UrineChemistryUrinalysisSystems";
import UrinalysisKitsSystem from "./pages/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/urinalysis-kits-system/UrinalysisKitsSystem";
import AntimicrobialResistanceManagement from "./pages/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/antimicrobial-resistance-management/AntimicrobialResistanceManagement";
import MicrobialIdentificationSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/microbial-identification-systems/MicrobialIdentificationSystems";
import AntimicrobialSusceptibilityDiscs from "./pages/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/antimicrobial-susceptibility-discs/AntimicrobialSusceptibilityDiscs";
import MicroproSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/micropro-systems/MicroproSystems";
import UrineAnalysis from "./pages/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/urine-analysis/UrineAnalysis";
import RealTimeIncubators from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/real-time-incubators/RealTimeIncubators";
import InhibitionZoneReaders from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/inhibition-zone-readers/InhibitionZoneReaders";
import ColonyCounters from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/colony-counters/ColonyCounters";
import AutomatedPlaters from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/automated-platers/AutomatedPlaters";
import MicrobialIdastSystemsProducts from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/microbial-idast-systems/MicrobialIdastSystemsProducts";
import SamplePreparationSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/sample-preparation-systems/SamplePreparationSystems";
import AnaerobicCultureSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/anaerobic-culture-systems/AnaerobicCultureSystems";
import BloodCultureSystems from "./pages/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/blood-culture-systems/BloodCultureSystems";
import WetChemistrySystems from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/wet-chemistry-systems/WetChemistrySystems";
import FullAutomatedChemistrySystems from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/wet-chemistry-systems/full-automated/FullAutomatedChemistrySystems";
import SemiAutomatedChemistrySystems from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/wet-chemistry-systems/semi-automated/SemiAutomatedChemistrySystems";
import WetChemistryReagents from "./pages/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/wet-chemistry-reagents/WetChemistryReagents";
import ProductDetailsPage from "./components/products-and-solutions/ProductDetailsPage";
import SterileReadyPreparedPlates from "./pages/products-and-solutions/laboratory-solutions/microbiology/culture-media/sterile-ready/SterileReadyPreparedPlates";
import Loading from "./components/Loading";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="products-and-solutions" element={<DefaultLayout />}>
        <Route index element={<ProductsAndSolutions />} />
        <Route
          path="laboratory-solutions"
          element={
            <SolutionsLayout sidebarData={sidebarData.laboratorySidebarData} />
          }
        >
          <Route index element={<LaboratorySolutions />} />
          <Route path="chemistry-solutions" element={<DefaultLayout />}>
            <Route index element={<ChemistrySolutions />} />
            <Route path="biochemistry-solutions" element={<DefaultLayout />}>
              <Route index element={<BiochemistrySolutions />} />
              <Route path="dry-chemistry-systems" element={<DefaultLayout />}>
                <Route index element={<DryChemistrySystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="wet-chemistry-systems" element={<DefaultLayout />}>
                <Route index element={<WetChemistrySystems />} />
                <Route path="semi-automated" element={<DefaultLayout />}>
                  <Route index element={<SemiAutomatedChemistrySystems />} />
                  <Route path=":id" element={<ProductDetailsPage />} />
                </Route>
                <Route path="full-automated" element={<DefaultLayout />}>
                  <Route index element={<FullAutomatedChemistrySystems />} />
                  <Route path=":id" element={<ProductDetailsPage />} />
                </Route>
              </Route>
              <Route path="wet-chemistry-reagents" element={<DefaultLayout />}>
                <Route index element={<WetChemistryReagents />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="electrolyte-solutions" element={<DefaultLayout />}>
              <Route index element={<ElectrolyteSolutions />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route path="blood-gas-solutions" element={<DefaultLayout />}>
              <Route index element={<BloodGasSolutions />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route path="haemoglobin-a1c-solutions" element={<DefaultLayout />}>
              <Route index element={<HaemoglobinA1cSolutions />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
          </Route>
          <Route path="haematology" element={<DefaultLayout />}>
            <Route index element={<Haematology />} />
            <Route path="fbc-cbc" element={<DefaultLayout />}>
              <Route index element={<FbcCbcSystem />} />
              <Route path="3-part-system" element={<DefaultLayout />}>
                <Route index element={<FbcCbc3PartSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="5-part-system" element={<DefaultLayout />}>
                <Route index element={<FbcCbc5PartSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route
                path="reagents-calibrators-qc-sytem"
                element={<DefaultLayout />}
              >
                <Route index element={<ReagentsCalibratorsQcSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="hemostasis-system" element={<DefaultLayout />}>
              <Route index element={<HemostasisSystem />} />
              <Route path="fully-automated" element={<DefaultLayout />}>
                <Route index element={<HemostasisFullyAutomatedSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="semi-automated" element={<DefaultLayout />}>
                <Route index element={<HemostasisSemiAutomatedSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="haematology-poct-meters" element={<DefaultLayout />}>
              <Route index element={<HaematologyPoctMeters />} />
              <Route path="hb-meters" element={<DefaultLayout />}>
                <Route index element={<HbMeters />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="wbc-meters" element={<DefaultLayout />}>
                <Route index element={<WbcMeters />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="esr-system" element={<DefaultLayout />}>
              <Route index element={<EsrSystem />} />
              <Route
                path="fully-automated-esr-system"
                element={<DefaultLayout />}
              >
                <Route index element={<FullyAutomatedEsrSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="manual-esr-system" element={<DefaultLayout />}>
                <Route index element={<ManualEsrSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="electrophoresis-system" element={<DefaultLayout />}>
              <Route index element={<ElectrophoresisSystem />} />
              <Route path="semi-automated" element={<DefaultLayout />}>
                <Route index element={<SemiAutomatedElectrophoresisSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route
                path="rapid-electrophoresis-kits"
                element={<DefaultLayout />}
              >
                <Route index element={<RapidElectrophoresisKits />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="immunoserology" element={<DefaultLayout />}>
            <Route index element={<Immunoserology />} />
            <Route path="clia-systems" element={<DefaultLayout />}>
              <Route index element={<CliaSystems />} />
              <Route path="clia-poct-systems" element={<DefaultLayout />}>
                <Route index element={<CliaPoctSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="semi-automated" element={<DefaultLayout />}>
                <Route index element={<SemiAutomatedCliaSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="fully-automated" element={<DefaultLayout />}>
                <Route index element={<FullyAutomatedCliaSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="clia-reagents-systems" element={<DefaultLayout />}>
                <Route index element={<CliaReagentsSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="eliza-systems" element={<DefaultLayout />}>
              <Route index element={<ElizaSystems />} />
              <Route path="fully-automated" element={<DefaultLayout />}>
                <Route index element={<FullyAutomatedElizaSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="semi-automated" element={<DefaultLayout />}>
                <Route index element={<SemiAutomatedElizaSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="eliza-kits" element={<DefaultLayout />}>
                <Route index element={<ElizaKits />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="latex-serology-tests" element={<DefaultLayout />}>
              <Route index element={<LatexSerologyTests />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
          </Route>
          <Route path="microbiology" element={<DefaultLayout />}>
            <Route index element={<Microbiology />} />
            <Route path="equipment-and-accessories" element={<DefaultLayout />}>
              <Route index element={<EquipmentAndAccessories />} />
              <Route path=":id" element={<ProductDetailsPage />} />
              <Route path="blood-culture-systems" element={<DefaultLayout />}>
                <Route index element={<BloodCultureSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route
                path="anaerobic-culture-systems"
                element={<DefaultLayout />}
              >
                <Route index element={<AnaerobicCultureSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route
                path="sample-preparation-systems"
                element={<DefaultLayout />}
              >
                <Route index element={<SamplePreparationSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="microbial-idast-systems" element={<DefaultLayout />}>
                <Route index element={<MicrobialIdastSystemsProducts />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="automated-platers" element={<DefaultLayout />}>
                <Route index element={<AutomatedPlaters />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="colony-counters" element={<DefaultLayout />}>
                <Route index element={<ColonyCounters />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="inhibition-zone-readers" element={<DefaultLayout />}>
                <Route index element={<InhibitionZoneReaders />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="real-time-incubators" element={<DefaultLayout />}>
                <Route index element={<RealTimeIncubators />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="culture-media" element={<DefaultLayout />}>
              <Route index element={<CultureMedia />} />
              <Route path=":id" element={<ProductDetailsPage />} />
              <Route path="sterile-ready" element={<DefaultLayout />}>
                <Route index element={<SterileReadyPreparedPlates />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="microbial-idast-systems" element={<DefaultLayout />}>
              <Route index element={<MicrobialIdastSystems />} />
              <Route
                path="antimicrobial-resistance-management"
                element={<DefaultLayout />}
              >
                <Route index element={<AntimicrobialResistanceManagement />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route
                path="microbial-identification-systems"
                element={<DefaultLayout />}
              >
                <Route index element={<MicrobialIdentificationSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route
                path="antimicrobial-susceptibility-discs"
                element={<DefaultLayout />}
              >
                <Route index element={<AntimicrobialSusceptibilityDiscs />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="micropro-systems" element={<DefaultLayout />}>
                <Route index element={<MicroproSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="urine-analysis" element={<DefaultLayout />}>
                <Route index element={<UrineAnalysis />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="transport-media" element={<DefaultLayout />}>
              <Route index element={<TransportMedia />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route path="ready-to-use-products" element={<DefaultLayout />}>
              <Route index element={<ReadyToUseProducts />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route path="sterile-disinfectants" element={<DefaultLayout />}>
              <Route index element={<SterileDisinfectants />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route
              path="stains-analytical-reagents-indicators"
              element={<DefaultLayout />}
            >
              <Route index element={<StainsAnalyticalReagentsIndicators />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route path="quality-control-organisms" element={<DefaultLayout />}>
              <Route index element={<QualityControlOrganisms />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route path="urinalysis-systems" element={<DefaultLayout />}>
              <Route index element={<UrinalysisSystems />} />
              <Route
                path="complete-automated-urinalysis-systems"
                element={<DefaultLayout />}
              >
                <Route index element={<CompleteAutomatedUrinalysisSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route
                path="urine-sediment-urinalysis-systems"
                element={<DefaultLayout />}
              >
                <Route index element={<UrineSedimentUrinalysisSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route
                path="urine-chemistry-urinalysis-systems"
                element={<DefaultLayout />}
              >
                <Route index element={<UrineChemistryUrinalysisSystems />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="urinalysis-kits-system" element={<DefaultLayout />}>
                <Route index element={<UrinalysisKitsSystem />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="sampling-management" element={<SamplingManagement />} />
          <Route path="molecular-biology" element={<MolecularBiology />} />
          <Route path="pathology-solutions" element={<PathologySolutions />} />
          <Route
            path="general-lab-equipment"
            element={<GeneralLabEquipment />}
          />
          <Route
            path="laboratory-infrastructure"
            element={<LaboratoryInfrastructure />}
          />
        </Route>
        <Route
          path="medical-solutions"
          element={
            <SolutionsLayout sidebarData={sidebarData.medicalSidebarData} />
          }
        >
          <Route index element={<MedicalSolutions />} />
          <Route path="critical-care" element={<DefaultLayout />}>
            <Route index element={<CriticalCare />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="primary-care" element={<DefaultLayout />}>
            <Route index element={<PrimaryCare />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="surgical-care" element={<DefaultLayout />}>
            <Route index element={<SurgicalCare />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="home-care" element={<DefaultLayout />}>
            <Route index element={<HomeCare />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="specialist-care" element={<DefaultLayout />}>
            <Route index element={<SpecialistCare />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="medical-infrastructure" element={<DefaultLayout />}>
            <Route index element={<MedicalInfrastructure />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
        </Route>
        <Route
          path="imaging-solutions"
          element={
            <SolutionsLayout sidebarData={sidebarData.imagingSidebarData} />
          }
        >
          <Route index element={<ImagingSolutions />} />
          <Route path="radiology" element={<DefaultLayout />}>
            <Route index element={<Radiology />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="ultrasonography" element={<DefaultLayout />}>
            <Route index element={<Ultrasonography />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="diagnostic-ecg" element={<DefaultLayout />}>
            <Route index element={<DiagnosticEcg />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="maternal-infant-care" element={<DefaultLayout />}>
            <Route index element={<MaternalInfantCare />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="monitoring-system" element={<DefaultLayout />}>
            <Route index element={<MonitoringSystem />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route
            path="radiation-protection-safety-and-dosimetry"
            element={<DefaultLayout />}
          >
            <Route index element={<RadiationProtectionSafetyAndDosimetry />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
        </Route>
        <Route
          path="dental-solutions"
          element={
            <SolutionsLayout sidebarData={sidebarData.dentalSidebarData} />
          }
        >
          <Route index element={<DentalSolutions />} />
          <Route path="dental-imaging" element={<DefaultLayout />}>
            <Route index element={<DentalImaging />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="dental-chair" element={<DefaultLayout />}>
            <Route index element={<DentalChair />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="dental-laboratory" element={<DefaultLayout />}>
            <Route index element={<DentalLaboratory />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="dental-accessories" element={<DefaultLayout />}>
            <Route index element={<DentalAccessories />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="dental-handpiece" element={<DefaultLayout />}>
            <Route index element={<DentalHandpiece />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="dental-endodontic" element={<DefaultLayout />}>
            <Route index element={<DentalEndodontic />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="orthodontic" element={<DefaultLayout />}>
            <Route index element={<Orthodontic />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="dental-surgery" element={<DefaultLayout />}>
            <Route index element={<DentalSurgery />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
        </Route>
        <Route
          path="research-solutions"
          element={
            <SolutionsLayout sidebarData={sidebarData.researchSidebarData} />
          }
        >
          <Route index element={<ResearchSolutions />} />
        </Route>
        <Route
          path="teaching-solutions"
          element={
            <SolutionsLayout sidebarData={sidebarData.teachingSidebarData} />
          }
        >
          <Route index element={<TeachingSolutions />} />
        </Route>
        <Route
          path="veterinary-solutions"
          element={
            <SolutionsLayout sidebarData={sidebarData.veterinarySidebarData} />
          }
        >
          <Route index element={<VeterinarySolutions />} />
        </Route>
      </Route>
      <Route path="services-and-support" element={<DefaultLayout />}>
        <Route index element={<ServicesAndSupport />} />
        <Route path="service-solutions" element={<ServiceSolutionsLayout />}>
          <Route index element={<ServiceSolutions />} />
          <Route
            path="consultancy-services"
            element={<ConsultancyServices />}
          />
          <Route path="training-services" element={<TrainingServices />} />
          <Route path="qcqa-services" element={<QcqaServices />} />
          <Route path="oem-production" element={<OemProduction />} />
          <Route
            path="contract-manufacturing"
            element={<ContractManufacturing />}
          />
        </Route>
        <Route path="support-solutions" element={<SupportSolutionsLayout />}>
          <Route index element={<SupportSolutions />} />
          <Route
            path="equipment-placement-support"
            element={<EquipmentPlacementSupport />}
          />
          <Route path="partnership" element={<Partnership />} />
          <Route path="installations" element={<Installations />} />
          <Route path="maintenance-support" element={<MaintenanceSupport />} />
        </Route>
      </Route>

      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ScrollContextProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ScrollContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
