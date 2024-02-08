import {
  FaAtom,
  FaBone,
  FaHeartbeat,
  FaMicroscope,
  FaPills,
  FaRadiationAlt,
  FaDog,
  FaTooth,
  FaUserGraduate,
  FaStethoscope,
  FaXRay,
  FaDotCircle,
} from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { RiFilter2Fill } from "react-icons/ri";
import { HiBeaker } from "react-icons/hi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { GiOfficeChair } from "react-icons/gi";
import { generateId } from "../../utils/utils";

export const navBarData = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about-us",
    title: "About Us",
    path: "/about-us",
    section: [
      {
        title: "Our Philosophy",
        id: "#our-philosophy",
      },
      {
        title: "Our Profile",
        id: "#our-profile",
      },
      {
        title: "Cooperate Policy",
        id: "#cooperate-policy",
      },
      {
        title: "Our Partners",
        id: "#our-partners",
      },
    ],
  },
  {
    id: "products-and-solutions",
    title: "Products & Solutions",
    path: "/products-and-solutions",
    sections: [
      {
        id: "laboratory",
        title: "Laboratory Solutions",
        path: "/products-and-solutions/laboratory-solutions",
        icon: <FaMicroscope />,
        sections: [
          {
            id: "chemistry",
            title: "Chemistry Solutions",
            path: "/products-and-solutions/laboratory-solutions/chemistry-solutions",
            icon: <HiBeaker />,
            sections: [
              {
                id: "biochemistry",
                title: "Biochemistry Solutions",
                path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "dry-chemistry-systems",
                    title: "Dry Chemistry Systems",
                    path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/dry-chemistry-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: generateId(),
                        title: "MNCHIP CM-5 Dry Chemistry System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                    ],
                  },
                  {
                    id: "wet-chemistry-systems",
                    title: "Wet Chemistry Systems",
                    path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/wet-chemistry-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    sections: [
                      {
                        id: "semi-automated-chemistry-systems",
                        title: "Semi-Automated Chemistry Systems",
                        path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/wet-chemistry-systems/semi-automated",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        products: [
                          {
                            id: generateId(),
                            title: "Genrui WP-21A Semi-Automated Systems",
                            image: "/assets/images/genrui-wp-88a/1.jpg",
                            video: [
                              {
                                youtube:
                                  "https://www.youtube.com/watch?v=hTzgxdgiw4o",
                                download: "/assets/videos/genrui-wp-21a.mp4",
                              },
                            ],
                            gallery: [
                              "/assets/images/genrui-wp-88a/1.jpg",
                              "/assets/images/genrui-wp-88a/2.jpeg",
                              "/assets/images/genrui-wp-88a/3.jpeg",
                              "/assets/images/genrui-wp-88a/4.webp",
                              "/assets/images/genrui-wp-88a/5.jpeg",
                            ],
                            brochure: "/assets/brochure/genrui-wp-21a.pdf",
                            desc: "Genrui WP21A is a NEW generation semi-auto chemistry analyser, it is one of the best models in the same series. The compact analyser integrates incubators and timers. The large colour touch screen and the intuitive software make it more user-friendly. The innovative WP21A brings a better user experience for small laboratories and makes their daily job much easier. This device enables the photometric determination of clinical chemistry parameters from samples of serum, plasma, urine and cerebrospinal fluid. It is ideal for health centers, clinics and small hospitals with low number of test per day. The in vitro diagnostic device is programmable and needs respective reagents.",
                            technicalSpecifications: [
                              {
                                name: "Test method:",
                                value: "Photometric colorimetry",
                              },
                              {
                                name: "Assay method:",
                                value:
                                  "Endpoint, kinetic, 2-point kinetic, dual wavelengths ",
                              },
                              {
                                name: "Wavelengths:",
                                value:
                                  "7 wavelengths: 340, 405, 492, 510, 546, 578, 630 nm",
                              },
                              {
                                name: "Light source:",
                                value:
                                  "6 V/10 W long-life halogen lamp with auto sleep function",
                              },
                              {
                                name: "Screen:",
                                value: "7-inch LCD touch screen",
                              },
                              {
                                name: "Sample volume:",
                                value: "500 - 3000 μL adjustable",
                              },
                              { name: "Carryover:", value: "≤ 1.0 % " },
                              {
                                name: "Absorbance range:",
                                value: "0 – 4.5 Abs.",
                              },
                              {
                                name: "Temperature:",
                                value: "Usually 37°C, the range is 25 - 40°C.",
                              },
                              {
                                name: "Pre-incubation positions:",
                                value: "10 incubators and three timers",
                              },
                              {
                                name: "Result storage:",
                                value:
                                  "122 programmable assays, ≥ 10,000 test results",
                              },
                              {
                                name: "Connectivity:",
                                value: "RS-232 standard interface",
                              },
                              {
                                name: "Printer:",
                                value:
                                  "Integrated thermal printer, connectivity to external printer possible",
                              },
                              {
                                name: "Power supply:",
                                value: "AC 100 – 240 V; 50/60 Hz",
                              },
                              { name: "Power:", value: "100 VA" },
                              {
                                name: "Environmental temperature:",
                                value: "10°C – 30°C",
                              },
                              { name: "Relative humidity:", value: "≤ 80 %" },
                              {
                                name: "Atmosphere pressure:",
                                value: "70 kPa – 106 kPa",
                              },
                              {
                                name: "Dimensions:",
                                value: "340mm (L) x 270mm (W) x 185mm (H)",
                              },
                              {
                                name: "Weight:",
                                value: "Net weight 5 kg, gross weight 7.5 kg",
                              },
                            ],

                            functionalityFeatures: [
                              "Real-time display of the reaction curve",
                              "Flow cell and cuvette mode",
                              "Open and closed system both possible",
                              "Built-in incubators and timers",
                              "Endpoint",
                              "Two-point (fixed time),",
                              "Kinetic ",
                              "Absorbance",
                              "Large color LCD with touch screen",
                              "Built-in incubators and timers",
                              "Flow cell and Cuvette mode",
                              "Real-time display of reaction curve",
                              "Reliable optical system",
                              "Lamp auto-sleep function",
                              "Large data storage",
                              "Built-in printer",
                              "LIS connectivity",
                            ],
                            configurations: "",
                          },
                          {
                            id: generateId(),
                            title: "Mindray BA-88A Semi-Automated Systems",
                            image: "/assets/images/mindray-ba-88a/1.jpg",
                            video: [
                              {
                                youtube:
                                  "https://www.youtube.com/watch?v=ZrRdScmHs_8",
                                download: "/assets/videos/mindray-ba-88a.mp4",
                              },
                            ],
                            gallery: [
                              "/assets/images/mindray-ba-88a/1.jpg",
                              "/assets/images/mindray-ba-88a/2.jpg",
                              "/assets/images/mindray-ba-88a/3.jpg",
                              "/assets/images/mindray-ba-88a/4.webp",
                              "/assets/images/mindray-ba-88a/5.webp",
                            ],
                            brochure: "/assets/brochure/mindray-ba-88a.pdf",
                            desc: "This Mindray BA 88A Chemistry Analyzer is a premium quality best biochemistry machine. A semi-automatic chemistry analyzer with large touch-screen and easy-to-use operation software.  This autoanalyzer is manufactured by using quality assured material and advanced techniques, which make them up to the standard in this highly challenging field. You can use this fully automatic biochemistry analyzer in labs. The materials utilized to manufacture this biochemistry test machine are sourced from the most reliable and official vendors, chosen after performing detailed market surveys. Mindray products are widely acknowledged in the market for their high quality. We are dedicatedly involved in providing an excellent quality array of Mindray biochemistry analyzers.",
                            technicalSpecifications: [
                              {
                                name: "Principles",
                                value:
                                  "ALT, AST, ALP, ACP, GGT, α-HBDH, LDH, CK, AMY.TG.TC, HDL-C, UA, UREA, Cr, Glu, TP, Alb, T-bil, D-Bil, TBA, NH4+ , HCO3-, Ca, Mg, Cl , Na, K, apoAI , apoB, Lp ( a ), C3, C4 , lgG, lgA, lgM, HbA1c, Alcohol, Amphetamines, Barbiturates, Benzodiazepine etc .",
                              },
                              {
                                name: "Analysis Method",
                                value:
                                  "Endpoint , with or without reagent blank Endpoint , with sample blank and reagent blank Kinetics , with or without reagent blank Two-point Kinetics/Fixed-time , with or without reagent blank, Absorbance, Turbidimetry, Linear and non-linear calibration",
                              },
                              {
                                name: "Light Source T",
                                value: "Tungsten-halogen Iamp 6V/10W",
                              },
                              {
                                name: "Wavelength Range",
                                value:
                                  "Automatic by 8-position filter wheel 8 standard filters : 340nm , 405nm , 450nm , 510nm , 546nm , 578nm , 630nm and 670nm . Bandwidth < 8nm Stray light : < 0 . 1 % @ 340nm",
                              },
                              {
                                name: "Photometric Range",
                                value:
                                  "0~3.5 ABS Stability : < 0 . 005A / 20min @ 340nm",
                              },
                              {
                                name: "Flowcell",
                                value:
                                  "Stainless steel with quartz window Measuring volume : 32 μL Optical path : 10mm Aspiration volume programmable : 200~9000 μL",
                              },
                              {
                                name: "Input",
                                value:
                                  "Touch screen with touch pen and popup keypad Mouse or Keyboard via USB",
                              },
                              {
                                name: "Temperature Control",
                                value:
                                  "By means of Peltier elements Room temperature , 25°C , 30 °C and 37°C",
                              },
                              {
                                name: "Storage",
                                value:
                                  "More than 3000 sample results More than 1000 QC results",
                              },
                              {
                                name: "Printer",
                                value:
                                  "Built-in thermal printer Support HP series",
                              },
                              {
                                name: "Interface",
                                value:
                                  "RS232 serial port supporting data transmission USB port (2. 0) for keyboard , mouse , printer",
                              },
                              {
                                name: "Operating Environment",
                                value:
                                  "Temperature : 15°C~30°C Humidity : 35%~85%, no condensation",
                              },
                              {
                                name: "Power Requirement",
                                value:
                                  "Wide power supply : AC 100-240V, 50 / 60Hz",
                              },
                              {
                                name: "Dimension",
                                value: "430mm x 360mm x 170mm ( L x W x H )",
                              },
                              { name: "Weight", value: "" },
                            ],
                            functionalityFeatures: [
                              "7.0” TFT touch-screen & pop-up keypad",
                              "Two test mode: flowcell or cuvette",
                              "Supports bi-chromatic tests for end point, fixed-time, kinetics methods",
                              "External keyboard or mouse support via USB",
                              "User-friendly interface and multi-language operation software",
                              "Built-in thermal printer",
                              "Straightforward software interface, easy to get started!",
                              "Large LCD touch-screen, clear and user-friendly",
                              "Two USB ports (2.0), for keyboard, mouse, printer",
                              "Simple parameters setup",
                              "Quick interchange between 4 temperature options",
                              "Support Bi-Chromatic tests",
                              "Multi-functional and comprehensive testing panel interface display",
                              "Real-time monitor of reaction curve/data and temperature change",
                              "Parameters can be reviewed in test panel",
                              "Customizable patient infomation",
                              "Support K-factor programming",
                              "Capable of adding off-system test results",
                              "Support two testing modes: Flowcell or Cuvette;  easy to shift between modes",
                              "Easy maintenance: remove black cover to change lamp",
                            ],
                            configurations: "",
                          },
                        ],
                      },
                      {
                        id: "full-automated-chemistry-systems",
                        title: "Full Automated Chemistry Systems",
                        path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/wet-chemistry-systems/full-automated",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        products: [
                          {
                            id: generateId(),
                            title:
                              "Genrui GS-300Plus Fully Automated Chemistry Systems",
                            image: "/assets/images/genrui-WP-21A.jpg",
                            gallery: [
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                            ],
                            brochure: "/assets/brochure/TestPDFfile.pdf",
                            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                            technicalSpecifications:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            configurations:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                          },
                          {
                            id: generateId(),
                            title:
                              "Bioassays 240 Plus Fully Automated Chemistry Systems",
                            image: "/assets/images/genrui-WP-21A.jpg",
                            gallery: [
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                            ],
                            brochure: "/assets/brochure/TestPDFfile.pdf",
                            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                            technicalSpecifications:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            configurations:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                          },
                          {
                            id: generateId(),
                            title:
                              "Mindray BS-240 Pro Fully Automated Chemistry Systems",
                            image: "/assets/images/genrui-WP-21A.jpg",
                            gallery: [
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                            ],
                            brochure: "/assets/brochure/TestPDFfile.pdf",
                            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                            technicalSpecifications:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            configurations:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                          },
                          {
                            id: generateId(),
                            title:
                              "Erba XL180 Fully Automated Chemistry Systems",
                            image: "/assets/images/genrui-WP-21A.jpg",
                            gallery: [
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                            ],
                            brochure: "/assets/brochure/TestPDFfile.pdf",
                            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                            technicalSpecifications:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            configurations:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                          },
                          {
                            id: generateId(),
                            title:
                              "Erba XL200 Fully Automated Chemistry Systems",
                            image: "/assets/images/genrui-WP-21A.jpg",
                            gallery: [
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                            ],
                            brochure: "/assets/brochure/TestPDFfile.pdf",
                            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                            technicalSpecifications:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            configurations:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                          },
                          {
                            id: generateId(),
                            title:
                              "Roche COBAS C311 Fully Automated Chemistry Systems",
                            image: "/assets/images/genrui-WP-21A.jpg",
                            gallery: [
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                              "/assets/images/mindray-BA-88A.jpg",
                            ],
                            brochure: "/assets/brochure/TestPDFfile.pdf",
                            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                            technicalSpecifications:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            configurations:
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                            video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "wet-chemistry-reagents",
                    title: "Wet Chemistry Reagents, Controls and Calibrators",
                    path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/biochemistry-solutions/wet-chemistry-reagents",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: generateId(),
                        title: "Biorex Wet Chemistry Reagent",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "Mindray Wet Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "Randox Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "Roche Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "SFRI Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "Beckman Coulter Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "Olympus Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "Hitachi Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "Abbot Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "Toshiba Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "ORTHO VITROS Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "PENTRA Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "SIEMENS Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "THERMO KONELAB Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                      {
                        id: generateId(),
                        title: "VITALAB FLEXOR Chemistry Reagents",
                        image: "/assets/images/genrui-WP-21A.jpg",
                        gallery: [
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                          "/assets/images/mindray-BA-88A.jpg",
                        ],
                        brochure: "/assets/brochure/TestPDFfile.pdf",
                        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                        technicalSpecifications:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        configurations:
                          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                        video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "electrolyte",
                title: "Electrolyte Solutions",
                path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/electrolyte-solutions",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: generateId(),
                    title: "Genrui GE500 Electrolyte System",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    gallery: [
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                    ],
                    brochure: "/assets/brochure/TestPDFfile.pdf",
                    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                    technicalSpecifications:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    configurations:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                  },
                  {
                    id: generateId(),
                    title: "IONIX Electrolyte System",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    gallery: [
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                    ],
                    brochure: "/assets/brochure/TestPDFfile.pdf",
                    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                    technicalSpecifications:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    configurations:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                  },
                  {
                    id: generateId(),
                    title: "ISE ION Electrolyte System",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    gallery: [
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                    ],
                    brochure: "/assets/brochure/TestPDFfile.pdf",
                    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                    technicalSpecifications:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    configurations:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                  },
                  {
                    id: generateId(),
                    title: "Erba Lyte Electrolyte System",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    gallery: [
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                    ],
                    brochure: "/assets/brochure/TestPDFfile.pdf",
                    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                    technicalSpecifications:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    configurations:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                  },
                  {
                    id: generateId(),
                    title: "MNCHIP CM-5 Electrolyte System",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    gallery: [
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                    ],
                    brochure: "/assets/brochure/TestPDFfile.pdf",
                    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                    technicalSpecifications:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    configurations:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                  },
                ],
              },
              {
                id: "blood-gas",
                title: "Blood gas Solutions",
                path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/blood-gas-solutions",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Edan-i15",
                    title: "Edan i15 Blood Gas system",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    gallery: [
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                    ],
                    brochure: "/assets/brochure/TestPDFfile.pdf",
                    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                    technicalSpecifications:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    configurations:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                  },
                ],
              },
              {
                id: "haemoglobin",
                title: "Haemoglobin A1c Solutions",
                path: "/products-and-solutions/laboratory-solutions/chemistry-solutions/haemoglobin-a1c-solutions",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Hemocue-501-HbA1C",
                    title: "Hemocue 501 HbA1C Systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    gallery: [
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                      "/assets/images/mindray-BA-88A.jpg",
                    ],
                    brochure: "/assets/brochure/TestPDFfile.pdf",
                    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor              repudiandae eligendi impedit facere cum perspiciatis voluptate!           Officia error commodi sit natus voluptatibus laborum deleniti              ducimus voluptas provident animi ab molestiae ullam, iste fugit            eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur              nobis.",
                    technicalSpecifications:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error commodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    configurations:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat  aliquam impedit hic provident ipsum minus corrupti. Dolor repudiandae eligendi impedit facere cum perspiciatis voluptate! Officia error ommodi sit natus voluptatibus laborum deleniti ducimus voluptas provident animi ab molestiae ullam, iste fugit eveniet, fuga explicabo labore nisi quos. Aperiam, aspernatur nobis.",
                    video: "https://www.youtube.com/shorts/v9t6y1G2QAg",
                  },
                ],
              },
            ],
          },
          {
            id: "hematology",
            title: "Haematology Solutions",
            path: "/products-and-solutions/laboratory-solutions/haematology",
            icon: <FaHeartbeat />,
            sections: [
              {
                id: "fbc-cbc",
                title: "FBC/CBC System",
                path: "/products-and-solutions/laboratory-solutions/haematology/fbc-cbc",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "3-part-fbc-cbc-system",
                    title: "3-Parts FBC/CBC System",
                    path: "/products-and-solutions/laboratory-solutions/haematology/fbc-cbc/3-part-system",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "GENRUI-KT-60",
                        title: "GENRUI KT-60 3-Part Haematology system",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ERBA-MANNHEIM",
                        title: "ERBA MANNHEIM 3-Part Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SFRI-COUNTENDER",
                        title: "SFRI COUNTENDER 20+ 3-Part Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SFRI-H18-LIGHT",
                        title: "SFRI H18 LIGHT 3-Part Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SFRI-HEMIX-3-30",
                        title: "SFRI HEMIX 3-30 3-Parts Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-10",
                        title: "Mindray BC-10 3-Parts Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-20",
                        title: "Mindray BC-20 3-Parts Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-20S",
                        title: "Mindray BC-20S 3-Parts Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-30",
                        title: "Mindray BC-30 3-Parts Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-30S",
                        title: "Mindray BC-30S 3-Parts Haematology Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "5-part-fbc-cbc-system",
                    title: "5-Parts FBC/CBC System",
                    path: "/products-and-solutions/laboratory-solutions/haematology/fbc-cbc/5-part-system",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Genrui-KT-6600",
                        title: "Genrui KT-6600 5-Parts Hematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Genrui-KT-8000",
                        title: "Genrui KT-8000 5-Parts Hematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ERBAH-H-560",
                        title: "ERBAH H-560 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ERBAH-H-58",
                        title: "ERBAH H-580 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SFRI-HEMIX-5-60",
                        title: "SFRI HEMIX 5-60 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-700S",
                        title: "Mindray BC-700S 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-5000",
                        title: "Mindray BC-5000 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-5300",
                        title: "Mindray BC-5300 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-5310CRP",
                        title: "Mindray BC-5310CRP 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-5380",
                        title: "Mindray BC-5380 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-5390",
                        title: "Mindray BC-5390 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-5390CRP",
                        title: "Mindray BC-5390CRP 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-6000",
                        title: "Mindray BC-6000 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-6200",
                        title: "Mindray BC-6200 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-6800",
                        title: "Mindray BC-6800 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-6800Plus",
                        title: "Mindray BC-6800Plus 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-BC-7500CRP",
                        title: "Mindray BC-7500CRP 5-Parts Haematology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-MC-80",
                        title: "Mindray MC-80 Digital Cell Morphology System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "fbc-cbc-reagents",
                    title: "FBC/CBC Reagents/Calibrators/QC Systems",
                    path: "/products-and-solutions/laboratory-solutions/haematology/fbc-cbc/reagents-calibrators-qc-sytem",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "ABBOTT-Series",
                        title:
                          "ABBOTT® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "BECKMAN-COULTER-Series",
                        title:
                          "BECKMAN COULTER® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "DIATRON-Series",
                        title:
                          "DIATRON ® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "HORIBA-Series",
                        title:
                          "HORIBA® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "MEDONIC-Series",
                        title:
                          "MEDONIC® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "MINDRAY-Series",
                        title:
                          "MINDRAY® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "NIHON-KOHDEN-Series",
                        title:
                          "NIHON KOHDEN® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ORPHÉE-Series",
                        title:
                          "ORPHÉE® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "PROKAN-Series",
                        title:
                          "PROKAN® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "RAYTO-Series",
                        title:
                          "RAYTO® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SIEMENS-Series",
                        title:
                          "SIEMENS® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SWELAB-Series",
                        title:
                          "SWELAB® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SYSMEX-Series",
                        title:
                          "SYSMEX® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "URIT-Series",
                        title:
                          "URIT® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "GENRUI-Series",
                        title:
                          "GENRUI® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "DYMIND-Series",
                        title:
                          "DYMIND® Series FBC/CBC Reagents/Calibrators/QC Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "hemostasis-system",
                title: "Hemostasis System",
                path: "/products-and-solutions/laboratory-solutions/haematology/hemostasis-system",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "fully-automated-coagulation-systems",
                    title: "Fully Automated Coagulation Systems",
                    path: "/products-and-solutions/laboratory-solutions/haematology/hemostasis-system/fully-automated",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "ERBAH-ECL-760",
                        title: "ERBAH ECL 760 Coagulation Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "semi-automated-coagulation-systems",
                    title: "Semi-Automated Coagulation Systems",
                    path: "/products-and-solutions/laboratory-solutions/haematology/hemostasis-system/semi-automated",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "ERBAH-ECL-105",
                        title: "ERBAH ECL 105 Coagulation Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ERBAH-ECL-412",
                        title: "ERBAH ECL 412 Coagulation Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "GENRUI-CA52",
                        title: "GENRUI CA52 Coagulation Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "GENRUI-CA54",
                        title: "GENRUI CA54 Coagulation Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "haematology-poct-meters",
                title: "Haematology POCT Meters",
                path: "/products-and-solutions/laboratory-solutions/haematology/haematology-poct-meters",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "hb-meters",
                    title: "Hb-Meters",
                    path: "/products-and-solutions/laboratory-solutions/haematology/haematology-poct-meters/hb-meters",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "AllTest",
                        title: "AllTest Hb Meter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Hemocue-Hb-301",
                        title: "Hemocue Hb 301 Hb System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Hemocue-Hb-801",
                        title: "Hemocue Hb 801 Hb System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Urit-12",
                        title: "Urit-12 Hb Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Urit-Ph-01",
                        title: "Urit Ph-01 Hb System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "wbc-meters",
                    title: "WBC Meters",
                    path: "/products-and-solutions/laboratory-solutions/haematology/haematology-poct-meters/wbc-meters",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Hemaocue-WBC-Meters",
                        title: "Hemaocue WBC Meters",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Hemaocue-WBC-DIFF",
                        title: "Hemaocue WBC DIFF Meters",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "esr-system",
                title: "ESR System",
                path: "/products-and-solutions/laboratory-solutions/haematology/esr-system",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "fully-automated-esr-system",
                    title: "Fully Automated ESR System",
                    path: "/products-and-solutions/laboratory-solutions/haematology/esr-system/fully-automated-esr-system",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "ORON-200",
                        title: "ORON-200 ESR System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ORON-400",
                        title: "ORON-400 ESR System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SFRI-ESR-3000",
                        title: "SFRI ESR-3000 System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Vision-Fully-Auto-ESR",
                        title: "Vision Fully Auto ESR System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "VisionPro-Fully-Auto-ESR",
                        title: "VisionPro Fully Auto ESR System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "manual-esr-system",
                    title: "Manual ESR System",
                    path: "/products-and-solutions/laboratory-solutions/haematology/esr-system/manual-esr-system",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "ESR-stands",
                        title: "ESR stands",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ESR-Reagents-Tubes",
                        title: "ESR Reagents Tubes",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "electrophoresis-system",
                title: "Electrophoresis systems",
                path: "/products-and-solutions/laboratory-solutions/haematology/electrophoresis-system",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "semi-automated-system",
                    title: "Semi-Automated system",
                    path: "/products-and-solutions/laboratory-solutions/haematology/electrophoresis-system/semi-automated",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "HLPC-System",
                        title: "HLPC System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Electrophoresis-Tank",
                        title: "Electrophoresis Tank",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Electrophoresis-Power-Pack",
                        title: "Electrophoresis Power Pack",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Electrophoresis-Consumables",
                        title: "Electrophoresis Consumables",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "rapid-electrophoresis-kits",
                    title: "Rapid Electrophoresis Kits",
                    path: "/products-and-solutions/laboratory-solutions/haematology/electrophoresis-system/rapid-electrophoresis-kits",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "HemoTypeSC",
                        title: "HemoTypeSC Electrophoresis kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Sickle-Scan",
                        title: "Sickle Scan Electrophoresis kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "immunoserology",
            title: "Immunoserology Solutions",
            path: "/products-and-solutions/laboratory-solutions/immunoserology",
            icon: <FaPills />,
            sections: [
              {
                id: "clia-systems",
                title: "CLIA Systems",
                path: "/products-and-solutions/laboratory-solutions/immunoserology/clia-systems",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "clia-poct-systems",
                    title: "CLIA POCT Systems",
                    path: "/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/clia-poct-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Finecare-FIA-Meter-Plus",
                        title: "Finecare™-FIA-Meter-Plus",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "i-Chroma-II-immune-assay",
                        title: "i-Chroma-II-immune-assay System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Flourecare-immune-assay",
                        title: "Flourecare immune-assay System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Genrui-Minifine-6",
                        title: "Genrui Minifine 6 immune-assay System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "semi-automated-clia-systems",
                    title: "Semi-Automated CLIA Systems",
                    path: "/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/semi-automated",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "CLIA-Pro",
                        title: "CLIA Pro CLIA Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "CLIA-Plus",
                        title: "CLIA Plus CLIA Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "fully-automated-clia-systems",
                    title: "Fully Automated CLIA System",
                    path: "/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/fully-automated",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Genrui-MT-60",
                        title: "Genrui MT-60 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "HLO-iFlash-1200",
                        title: "HLO iFlash 1200 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "YHLO-iFlash-1800",
                        title: "YHLO iFlash 1800 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "YHLO-iFlash-3000",
                        title: "YHLO iFlash 3000 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-CL-900i",
                        title: "Mindray CL-900i CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-CL-1000i",
                        title: "Mindray CL-1000i CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-CL-2000i",
                        title: "Mindray CL-2000i CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Mindray-CL-6000i",
                        title: "Mindray CL-6000i CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Roche-Cobas-e-411",
                        title: "Roche Cobas e 411 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Snibe-Maglumi-600",
                        title: "Snibe Maglumi 600 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Snibe-Maglumi-800",
                        title: "Snibe Maglumi 800 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Snibe-Maglumi-2000",
                        title: "Snibe Maglumi 2000 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Snibe-Maglumi-2000Plus",
                        title: "Snibe Maglumi 2000Plus CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Snibe-Maglumi-4000Plus",
                        title: "Snibe Maglumi 4000Plus CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Snibe-Maglumi-X3",
                        title: "Snibe Maglumi X3 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Snibe-Maglumi-X6",
                        title: "Snibe Maglumi X6 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Snibe-Maglumi-X8",
                        title: "Snibe Maglumi X8 CLIA System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "clia-reagents-systems",
                    title: "CLIA Reagents Systems",
                    path: "/products-and-solutions/laboratory-solutions/immunoserology/clia-systems/clia-reagents-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Allergy-Assays",
                        title: "Allergy Assays",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Autoimmune-Thyroid",
                        title: "Autoimmune Thyroid Assays",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Cardio-Vascular",
                        title: "Cardio-Vascular Monitoring",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Diabetes-Assays",
                        title: "Diabetes Assays",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Fertility-Assays",
                        title: "Fertility Assays",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Growth-Deficiency",
                        title: "Growth Deficiency",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Infectious-Disease",
                        title: "Infectious Disease Assays",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Others",
                        title: "Others",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Steroid-Assays",
                        title: "Steroid Assays",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Thyroid-Assays",
                        title: "Thyroid Assays",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Tumour-Marker",
                        title: "Tumour Marker Assays",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "eliza-systems",
                title: "ELIZA Systems",
                path: "/products-and-solutions/laboratory-solutions/immunoserology/eliza-systems",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "eliza-fully-automated-systems",
                    title: "Fully Automated Systems",
                    path: "/products-and-solutions/laboratory-solutions/immunoserology/eliza-systems/fully-automated",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "YHLO-UNION",
                        title: "YHLO UNION ELIZA SYSTEM",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ERBAH-MANGO",
                        title: "ERBAH MANGO 4 ELIZA SYSTEM",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Erba-LisaXL",
                        title: "Erba LisaXL ELIZA SYSTEM",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Erba-ELAN-30s",
                        title: "Erba ELAN 30s ELIZA SYSTEM",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Bio-2-ELIZA",
                        title: "Bio-2+ ELIZA SYSTEM",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "eliza-semi-automated-systems",
                    title: "Semi-Automated Systems",
                    path: "/products-and-solutions/laboratory-solutions/immunoserology/eliza-systems/semi-automated",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "SFRI-IRE-ELISA",
                        title: "SFRI IRE ELISA Microplate Reader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Erba-LisaScan-II",
                        title: "Erba LisaScan II Microplate Reader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Microscan-Microplate-Reader",
                        title: "Microscan Microplate Reader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "PKL-PPC-142",
                        title: "PKL PPC 142 Microplate Reader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "URIT-660",
                        title: "URIT-660 Microplate Reader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "SFRI-IW",
                        title: "SFRI IW ELISA Microplate Washer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "BK-EL10C",
                        title: "BK-EL10C ELISA Microplate Washer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "PKL-PPC-152",
                        title: "PKL PPC 152 ELISA Microplate Washer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Erba-LisaWash",
                        title: "Erba LisaWash ELISA Microplate Washer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Innowash",
                        title: "Innowash Microplate Washer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "eliza-kits",
                    title: "ELIZA Kits",
                    path: "/products-and-solutions/laboratory-solutions/immunoserology/eliza-systems/eliza-kits",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Anaemia",
                        title: "Anaemia ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Allergy",
                        title: "Allergy ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Autoimmune-Disease",
                        title: "Autoimmune Disease kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Bone-Metabolism",
                        title: "Bone Metabolism ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Blood-bank",
                        title: "Blood bank ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Cancer",
                        title: "Cancer ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Cardiac-Markers",
                        title: "Cardiac Markers ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Diabetes-Assays",
                        title: "Diabetes Assays ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Drug-test",
                        title: "Drug test ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Fertility",
                        title: "Fertility ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Food-ELISA",
                        title: "Food ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Food-Adulterants",
                        title: "Food Adulterants ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Food-Toxins",
                        title: "Food Toxins ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Food-Nutrients",
                        title: "Food Nutrients ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Infectious-Disease",
                        title: "Infectious Disease ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Hepatitis",
                        title: "Hepatitis ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "TORCH-Panel",
                        title: "TORCH Panel",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "HIV",
                        title: "HIV ELISA kit",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Other-ELISA",
                        title: "Other ELISA Kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Parasitology",
                        title: "Parasitology ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Steroid",
                        title: "Steroid ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Thyroid",
                        title: "Thyroid ELISA kits",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "latex-serology-tests",
                title: "Latex Serology Tests",
                path: "/products-and-solutions/laboratory-solutions/immunoserology/latex-serology-tests",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Febrile-Antigens",
                    title: "Febrile Antigens",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Syphilis-Markers",
                    title: "Syphilis Markers",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Other-Serology-Markers",
                    title: "Other Serology Markers",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                ],
              },
            ],
          },
          {
            id: "microbiology",
            title: "Microbiology Solutions",
            path: "/products-and-solutions/laboratory-solutions/microbiology",
            icon: <FaMicroscope />,
            sections: [
              {
                id: "equipment-and-accessories",
                title: "Equipment and Accessories",
                path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Bunsen-burner",
                    title: "Bunsen Burner",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Bacti-cinerator",
                    title: "Bacti-cinerator Sterilizer",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Inoculation-Loop",
                    title: "Inoculation Loop & Wire",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Sterilization-Pouch",
                    title: "Sterilization Pouch",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Autoclave-Indicator-Tape",
                    title: "Autoclave Indicator Tape",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Media-dispensers",
                    title: "Media dispensers",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Cell-Counters",
                    title: "Cell Counters",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Cytometers",
                    title: "Cytometers",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                ],
                sections: [
                  {
                    id: "blood-culture-systems",
                    title: "Blood Culture System",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/blood-culture-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "TDR-Automated",
                        title: "TDR Automated Blood Culture System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Autobio-BC60",
                        title: "Autobio BC60 Blood Culture Machine.",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "TDR-X030",
                        title: "TDR-X030 Automated Blood Culture Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Labstar-50",
                        title: "Labstar 50 Automated Blood Culture System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Labstar-60",
                        title: "Labstar 60 Automated Blood Culture System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Labstar-100",
                        title: "Labstar 100 Automated Blood Culture System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Labstar-120",
                        title: "Labstar 120 Automated Blood Culture System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Labstar-EX",
                        title: "Labstar EX Automated Blood Culture System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Blood-Enrichment",
                        title: "Blood Enrichment Culture Bottle",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Floresent-Blood-Enrichment",
                        title: "Floresent Blood Enrichment Culture Bottle",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "anaerobic-culture-systems",
                    title: "Anaerobic Culture System",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/anaerobic-culture-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Anaerobic-Container",
                        title: "Anaerobic Container",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Anaerobic-Culture-Jar",
                        title: "Anaerobic Culture Jar",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Anaerobic-Culture-Jar-II",
                        title: "Anaerobic Culture Jar II",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Anaerobic-Gas-Pack",
                        title: "Anaerobic Gas Pack",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Anaerobic-Indicator",
                        title: "Anaerobic Indicator Strip",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Anaerobic-Test",
                        title: "Anaerobic Test Tube Rack",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Catalyst-for-Anaerobic",
                        title: "Catalyst for Anaerobic Jar",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "sample-preparation-systems",
                    title: "Sample Preparation System",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/sample-preparation-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Nephelometer",
                        title: "Nephelometer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Liquid-Handling",
                        title: "Liquid Handling System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Colony-Spreader",
                        title: "Colony Spreader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Automated-Liquid-Handling",
                        title: "Automated Liquid Handling System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Automated-Staining",
                        title: "Automated Staining System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "microbial-idast-systems",
                    title: "Microbial ID/AST System",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/microbial-idast-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "ALIFAX-SIDECAR",
                        title:
                          "ALIFAX SIDECAR AUTOMATED STREAKING CULTURE SYSTEMS",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "TDR-300B",
                        title: "TDR-300B Plus Microorganism Analysis System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ALFRED-60",
                        title: "ALFRED 60 AUTOMATED BACTERIAL C/S SYSTEM",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "XK-Microbial",
                        title: "XK Microbial ID/AST System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "XK-II",
                        title: "XK-II Microbial ID/AST System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Automated-Rapid-AST",
                        title: "Automated Rapid AST System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Formula-Rapid-AST",
                        title: "Formula Rapid AST System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Combo-Panel",
                        title: "ID/AST Combo Panel",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "AST-Panel",
                        title: "AST Panel",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ID-Panel",
                        title: "ID Panel",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "automated-platers",
                    title: "Automated Platers",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/automated-platers",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Easy-Spiral",
                        title: "Easy Spiral Automatic plater",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Easy-Spiral-Pro",
                        title: "Easy Spiral Pro Automatic plater",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Easy-Spiral-Pro-Milk",
                        title: "Easy Spiral Pro Milk Automatic plater",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Easy-Spiral-Automatic",
                        title: "Easy Spiral Automatic dilutor and plater",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "colony-counters",
                    title: "Colony Counters",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/colony-counters",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Scan-50",
                        title: "Scan 50 Manual colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-50pro",
                        title: "Scan 50pro Manual colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-100",
                        title: "Scan 100 Manual colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-300",
                        title: "Scan 300 automated colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-500",
                        title: "Scan 500 automated colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-1200-HD",
                        title: "Scan 1200 HD automated colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-4000",
                        title: "Scan 4000 Ultra-HD automated colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "inhibition-zone-readers",
                    title: "Inhibition Zone Readers",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/inhibition-zone-readers",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Scan-500-Inhibition",
                        title: "Scan 500 Inhibition zone reader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-1200-HD-inhibition",
                        title: "Scan 1200 HD inhibition zone reader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-4000-Ultra-HD-inhibition",
                        title: "Scan 4000 Ultra HD inhibition zone reader",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "real-time-incubators",
                    title: "Real-time Incubator and Colony Counter",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/equipment-and-accessories/real-time-incubators",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Scan-Station-100",
                        title:
                          "Scan Station 100 Real-time incubator and colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-Station-200",
                        title:
                          "Scan Station 200 Real-time incubator and colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Scan-Station-300",
                        title:
                          "Scan Station 300 Real-time incubator and colony counter",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },

              {
                id: "culture-media",
                title: "Culture Media",
                path: "/products-and-solutions/laboratory-solutions/microbiology/culture-media",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Dehydrated-Culture",
                    title: "Dehydrated Culture Media",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Media-Supplements",
                    title: "Media Supplements",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Media-Bases",
                    title: "Media Bases",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Blood-culture",
                    title: "Blood culture",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Agents-and-Enrichments",
                    title: "Agents and Enrichments",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                ],
                sections: [
                  {
                    id: "Sterile-Ready",
                    title: "Sterile Ready Prepared Plates",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/culture-media/sterile-ready",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Plates-55mm",
                        title: "Sterile Ready Prepared Plates (55 mm)",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Plates-90mm",
                        title: "Sterile Ready Prepared Plates (90 mm)",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Ready-to-use-90mm",
                        title: "Ready-to-use 90mm agar plates",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Ready-to-use-140mm",
                        title: "Ready-to-use 140mm agar plates",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Ready-to-use-2-3",
                        title: "Ready-to-use 2-3 sectors agar plates",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "microbial-idast-systems",
                title: "Microbial ID/AST systems",
                path: "/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "antimicrobial-resistance-management",
                    title: "Antimicrobial Resistance Management",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/antimicrobial-resistance-management",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "MIC-Test-Strip",
                        title: "MTS™ (MIC Test Strip)",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Synergy-Application",
                        title: "MTS™ Synergy Application System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Antibiotic-Discs",
                        title: "Antibiotic Discs",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Agar-Dilution",
                        title: "Agar Dilution panels",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ComASP",
                        title: "ComASP™",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "NP-tests",
                        title: "NP tests",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Chromogenic-media",
                        title: "Chromogenic media for ART",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "HEAR",
                        title: "HEAR",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "microbial-identification-systems",
                    title: "Microbial Identification Systems",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/microbial-identification-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "ID-Systems",
                        title: "ID Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Biochemical-tests",
                        title: "Biochemical tests for microbial ID",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Chromogenic-media",
                        title: "Chromogenic media for microbial ID",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Sugar-Fermentation",
                        title: "Sugar Fermentation",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "antimicrobial-susceptibility-discs",
                    title: "Antimicrobial Susceptibility Discs",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/antimicrobial-susceptibility-discs",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Amino-Acid-Discs",
                        title: "Amino Acid Discs",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Antifungal-Discs",
                        title: "Antifungal Discs as per CLSI",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Antifungal-Discs-Customized",
                        title: "Antifungal Discs Customized Concentrations",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Antimicrobial-Susceptibility",
                        title: "Antimicrobial Susceptibility Discs as per CLSI",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Susceptibility-Discs",
                        title:
                          "Antimicrobial Susceptibility Discs Customized Concentrations",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Carbohydrate-Fermentation",
                        title: "Carbohydrate Fermentation Discs",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Differential-Discs",
                        title: "Differential Discs",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "micropro-systems",
                    title: "Micropro® System",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/micropro-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Micropro-AST",
                        title: "Micropro® - AST",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "BMD-Kit",
                        title: "Micropro® - BMD Kit",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Broth-Culture",
                        title: "Micropro® - Broth Culture System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "MIC",
                        title: "Micropro® - MIC",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "ValiD",
                        title: "Micropro® - ValiD",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "urine-analysis",
                    title: "Urine analysis",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/microbial-idast-systems/urine-analysis",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Dip-slide",
                        title: "Dip-slide",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Direct-ID-AST",
                        title: "Direct ID-AST systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Chromatic-detection",
                        title: "Chromatic detection",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
              {
                id: "transport-media",
                title: "Transport media",
                path: "/products-and-solutions/laboratory-solutions/microbiology/transport-media",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "VTM",
                    title: "VTM",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Mycoplasma",
                    title: "Mycoplasma",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Bio-Cult",
                    title: "Bio-Cult",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                ],
              },
              {
                id: "ready-to-use-products",
                title: "Ready to Use Products",
                path: "/products-and-solutions/laboratory-solutions/microbiology/ready-to-use-products",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Biochemical-Identification",
                    title: "Biochemical Identification Kits",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Blood-Culturing-Systems",
                    title: "Blood Culturing Systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "EMswabTM",
                    title: "EMswabTM (Environmental Monitoring Swab)",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Instaprep-Range",
                    title: "Instaprep® Range",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Microbial-Limit",
                    title: "Microbial Limit Test",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Mycobacteriology",
                    title: "Mycobacteriology",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Presumptive-Identification",
                    title: "Presumptive Identification Tests",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Ready-Prepared-Bottle",
                    title: "Ready Prepared Bottle Media",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Ready-Prepared-Slant",
                    title: "Ready Prepared Slant",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Sterility-Test",
                    title: "Sterility Test Media",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Transport-Medium",
                    title: "Transport Medium",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Urine-Culture",
                    title: "Urine Culture",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Viral-Transport",
                    title: "Viral Transport Media",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Wash-Solutions",
                    title: "Wash Solutions",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Water-Quality",
                    title: "Water Quality Testing Kits",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                ],
              },
              {
                id: "sterile-disinfectants",
                title: "Sterile Disinfectants",
                path: "/products-and-solutions/laboratory-solutions/microbiology/sterile-disinfectants",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Environment-and-Surface",
                    title: "Environment and Surface Disinfection",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Hand-Disinfection",
                    title: "Hand Disinfection",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                ],
              },
              {
                id: "stains-analytical-reagents-indicators",
                title: "Stains, Analytical Reagents & Indicators",
                path: "/products-and-solutions/laboratory-solutions/microbiology/stains-analytical-reagents-indicators",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Analytical-Reagents",
                    title: "Analytical Reagents and Indicators",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "AutoKrom",
                    title: "AutoKrom™",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Other-Analytical-Reagents",
                    title: "Other Analytical Reagents",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Stain-Available",
                    title: "Stain Available in Ready to Use Kit",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Staining-Solutions",
                    title: "Staining Solutions for Microbiology",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Stains-Cytology",
                    title: "Stains for Cytology and Histology",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                  {
                    id: "Stains-Haematology",
                    title: "Stains for Haematology",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                ],
              },
              {
                id: "quality-control-organisms",
                title: "Quality Control Organisms",
                path: "/products-and-solutions/laboratory-solutions/microbiology/quality-control-organisms",
                image: "/assets/images/genrui-WP-21A.jpg",
                products: [
                  {
                    id: "Lyophilized",
                    title: "Lyophilized organisms",
                    image: "/assets/images/genrui-WP-21A.jpg",
                  },
                ],
              },
              {
                id: "urinalysis-systems",
                title: "Urinalysis Systems",
                path: "/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems",
                image: "/assets/images/genrui-WP-21A.jpg",
                sections: [
                  {
                    id: "complete-automated-urinalysis-systems",
                    title: "Complete Automated Urinalysis Systems",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/complete-automated-urinalysis-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "FUS-1000",
                        title: "FUS-1000 Urinalysis Hybrid",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "FUS-2000",
                        title: "FUS-2000 Urinalysis Hybrid",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "FUS-3000Plus",
                        title: "FUS-3000Plus Urinalysis Hybrid",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "MUS-3600",
                        title: "MUS-3600 Urinalysis Hybrid",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "MUS-9600",
                        title: "MUS-9600 Urinalysis Hybrid",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "LAURA-XL",
                        title: "LAURA XL Systems",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "urine-sediment-urinalysis-systems",
                    title: "Urine Sediment Urinalysis Systems",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/urine-sediment-urinalysis-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "FUS-360",
                        title: "FUS-360 Urine Sediment System",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "urine-chemistry-urinalysis-systems",
                    title: "Urine Chemistry Urinalysis Systems",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/urine-chemistry-urinalysis-systems",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Ultrona-TM",
                        title: "Ultrona TM Urine Analyzer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "EZCHEK-TM",
                        title: "EZCHEK TM Urine Analyzer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Oriana-TM",
                        title: "Oriana TM Urine Analyzer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "HC-300",
                        title: "HC-300 Urine Analyzer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "HC-500",
                        title: "HC-500 Urine Analyzer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "HC-800",
                        title: "HC-800 Urine Analyzer",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "LAURA-Smart",
                        title: "LAURA Smart",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "LAURA",
                        title: "LAURA",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                  {
                    id: "urinalysis-kits-system",
                    title: "Urinalysis kits System",
                    path: "/products-and-solutions/laboratory-solutions/microbiology/urinalysis-systems/urinalysis-kits-system",
                    image: "/assets/images/genrui-WP-21A.jpg",
                    products: [
                      {
                        id: "Allele-Urinalysis",
                        title: "Allele Urinalysis Strips",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                      {
                        id: "Erbah-Urinalysis",
                        title: "Erbah Urinalysis Strips",
                        image: "/assets/images/genrui-WP-21A.jpg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "sampling",
            title: "Sampling Management",
            path: "/products-and-solutions/laboratory-solutions/sampling-management",
            icon: <RiFilter2Fill />,
            sections: [],
          },
          {
            id: "molecular",
            title: "Molecular Biology",
            path: "/products-and-solutions/laboratory-solutions/molecular-biology",
            icon: <FaAtom />,
            sections: [],
          },
          {
            id: "pathology",
            title: "Pathology Solutions",
            path: "/products-and-solutions/laboratory-solutions/pathology-solutions",
            icon: <FaBone />,
            sections: [],
          },
          {
            id: "general",
            title: "General Lab Equipment",
            path: "/products-and-solutions/laboratory-solutions/general-lab-equipment",
            icon: <FaMicroscope />,
            sections: [],
          },
          {
            id: "laboratoryI",
            title: "Laboratory Infrastructure",
            path: "/products-and-solutions/laboratory-solutions/laboratory-infrastructure",
            icon: <FaRadiationAlt />,
            sections: [],
          },
        ],
      },
      {
        id: "medical",
        title: "Medical Solutions",
        path: "/products-and-solutions/medical-solutions",
        icon: <FaStethoscope />,
        sections: [
          {
            id: "critical",
            title: "Critical Care",
            path: "/products-and-solutions/medical-solutions/critical-care",
            icon: (
              <span
                className="medical-icon-i-intensive-care"
                aria-hidden="true"
              />
            ),
            sections: [],
          },
          {
            id: "primary",
            title: "Primary Care",
            path: "/products-and-solutions/medical-solutions/primary-care",
            icon: (
              <span className="medical-icon-i-inpatient" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "surgical",
            title: "Surgical Care",
            path: "/products-and-solutions/medical-solutions/surgical-care",
            icon: (
              <span className="medical-icon-i-surgery" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "home-care",
            title: "Home Care",
            path: "/products-and-solutions/medical-solutions/home-care",
            icon: (
              <span className="medical-icon-i-inpatient" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "specialist",
            title: "Specialist Care",
            path: "/products-and-solutions/medical-solutions/specialist-care",
            icon: (
              <span
                className="medical-icon-i-intensive-care"
                aria-hidden="true"
              />
            ),
            sections: [],
          },
          {
            id: "medicalI",
            title: "Medical Infrastructure",
            path: "/products-and-solutions/medical-solutions/medical-infrastructure",
            icon: (
              <span className="medical-icon-i-hospital" aria-hidden="true" />
            ),
            sections: [],
          },
        ],
      },
      {
        id: "imaging",
        title: "Imaging Solutions",
        path: "/products-and-solutions/imaging-solutions",
        icon: <FaXRay />,
        sections: [
          {
            id: "radiology",
            title: "Radiology",
            path: "/products-and-solutions/imaging-solutions/radiology",
            icon: (
              <span className="medical-icon-i-radiology" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "ultrasonography",
            title: "Ultrasonography",
            path: "/products-and-solutions/imaging-solutions/ultrasonography",
            icon: (
              <span className="medical-icon-i-ultrasound" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "decg",
            title: "Diagnostic ECG",
            path: "/products-and-solutions/imaging-solutions/diagnostic-ecg",
            icon: (
              <span
                className="medical-icon-i-alternative-complementary"
                aria-hidden="true"
              />
            ),
            sections: [],
          },
          {
            id: "maternal",
            title: "Maternal Infant Care",
            path: "/products-and-solutions/imaging-solutions/maternal-infant-care",
            icon: (
              <span
                className="medical-icon-i-labor-delivery"
                aria-hidden="true"
              />
            ),
            sections: [],
          },
          {
            id: "monitoring",
            title: "Monitoring System",
            path: "/products-and-solutions/imaging-solutions/monitoring-system",
            icon: <TbHeartRateMonitor />,
            sections: [],
          },
          {
            id: "radiationProtection",
            title: "Radition Protection Safety & Dosimetry",
            path: "/products-and-solutions/imaging-solutions/radiation-protection-safety-and-dosimetry",
            icon: <FaRadiationAlt />,
            sections: [],
          },
        ],
      },
      {
        id: "dental",
        title: "Dental Solutions",
        path: "/products-and-solutions/dental-solutions",
        icon: <FaTooth />,
        sections: [
          {
            id: "dentalImaging",
            title: "Dental Imaging",
            path: "/products-and-solutions/dental-solutions/dental-imaging",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "dentalChair",
            title: "Dental Chair",
            path: "/products-and-solutions/dental-solutions/dental-chair",
            icon: <GiOfficeChair />,
            sections: [],
          },
          {
            id: "dentalLab",
            title: "Dental Laboratory",
            path: "/products-and-solutions/dental-solutions/dental-laboratory",
            icon: (
              <span className="medical-icon-i-laboratory" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "dentalAcc",
            title: "Dental Accessories",
            path: "/products-and-solutions/dental-solutions/dental-accessories",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "dentalHandpiece",
            title: "Dental Handpiece",
            path: "/products-and-solutions/dental-solutions/dental-handpiece",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "dentalEndo",
            title: "Dental Endodontic",
            path: "/products-and-solutions/dental-solutions/dental-endodontic",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "orthodontic",
            title: "Orthodontic",
            path: "/products-and-solutions/dental-solutions/orthodontic",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "dentalSurgery",
            title: "Dental Surgery",
            path: "/products-and-solutions/dental-solutions/dental-surgery",
            icon: <FaTooth />,
            sections: [],
          },
        ],
      },
      {
        id: "research",
        title: "Research Solutions",
        path: "/products-and-solutions/research-solutions",
        icon: <GiArchiveResearch />,
        sections: [],
      },
      {
        id: "teaching",
        title: "Teaching Solutions",
        path: "/products-and-solutions/teaching-solutions",
        icon: <FaUserGraduate />,
        sections: [],
      },
      {
        id: "veterinary",
        title: "Veterinary Solutions",
        path: "/products-and-solutions/veterinary-solutions",
        icon: <FaDog />,
        sections: [],
      },
    ],
  },
  {
    id: "services-and-support",
    title: "Services & Support",
    path: "/services-and-support",
    sections: [
      {
        id: "service",
        title: "Service Solutions",
        path: "/services-and-support/service-solutions",
        sections: [
          {
            id: "consultancy",
            title: "Consultancy Services",
            path: "/services-and-support/service-solutions/consultancy-services",
            icon: <FaDotCircle />,
          },
          {
            id: "training",
            title: "Training Services",
            path: "/services-and-support/service-solutions/training-services",
            icon: <FaDotCircle />,
          },
          {
            id: "qcqa",
            title: "QC/QA Services",
            path: "/services-and-support/service-solutions/qcqa-services",
            icon: <FaDotCircle />,
          },
          {
            id: "oem",
            title: "OEM Production",
            path: "/services-and-support/service-solutions/oem-production",
            icon: <FaDotCircle />,
          },
          {
            id: "contract",
            title: "Contract Manufacturing",
            path: "/services-and-support/service-solutions/contract-manufacturing",
            icon: <FaDotCircle />,
          },
        ],
      },
      {
        id: "support",
        title: "Support Solutions",
        path: "/services-and-support/support-solutions",
        sections: [
          {
            id: "equipment-placement",
            title: "Equipment Placement Supports",
            path: "/services-and-support/support-solutions/equipment-placement-support",
            icon: <FaDotCircle />,
          },
          {
            id: "partnership",
            title: "Partnership (PPP/PPP)",
            path: "/services-and-support/support-solutions/partnership",
            icon: <FaDotCircle />,
          },
          {
            id: "installations",
            title: "Installations Support",
            path: "/services-and-support/support-solutions/installations",
            icon: <FaDotCircle />,
          },
          {
            id: "maintenance",
            title: "Maintenance Support",
            path: "/services-and-support/support-solutions/maintenance-support",
            icon: <FaDotCircle />,
          },
        ],
      },
    ],
  },
  {
    id: "cantact-us",
    title: "Contact Us",
    path: "/contact-us",
  },
];
