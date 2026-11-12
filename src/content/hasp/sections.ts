export type HaspSection = {
  slug: string;
  title: string;
  description: string;
  blocks: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] }
    | { type: "callout"; title: string; text: string }
    | {
        type: "table";
        caption?: string;
        headers: string[];
        rows: string[][];
      }
    | { type: "status"; label: string; value: string }
  >;
};

export const haspSections: Record<string, HaspSection> = {
  science: {
    slug: "science",
    title: "Science & research methodology",
    description:
      "Research questions, prior HASP context, estimator configurations, and evaluation metrics for MOSAIC.",
    blocks: [
      {
        type: "h2",
        text: "Research question",
      },
      {
        type: "callout",
        title: "Core question",
        text: "Can inexpensive orientation sensors, unreliable when used independently, be combined to estimate a balloon payload's attitude more reliably than a gyroscope alone under stratospheric flight conditions?",
      },
      {
        type: "h2",
        text: "Why the problem matters",
      },
      {
        type: "p",
        text: "Small spacecraft and balloon instruments often need reliable pointing knowledge without expensive inertial units. MEMS sensors are attractive for cost, size, and power, but each modality has limits: gyroscope bias accumulates into orientation drift, accelerometers provide a gravity reference for roll and pitch but not yaw, magnetometers can supply heading yet are vulnerable to local disturbances, and Sun sensors only help when the Sun is visible.",
      },
      {
        type: "p",
        text: "Temperature-dependent gyroscope bias is an important variable in the proposal. Citing a representative IMU datasheet, a typical zero-rate shift of ±0.005 °/s per °C implies that a 60 °C change could correspond to about 0.3 °/s of bias variation. This is an illustrative datasheet-based calculation, not a measured MOSAIC result.",
      },
      {
        type: "h2",
        text: "Prior HASP context",
      },
      {
        type: "p",
        text: "COMPASS (2021) and EQUIS (2011) provide relevant precedent for balloon-based orientation sensing. MOSAIC builds on that problem space; it has not yet reproduced or improved their results.",
      },
      {
        type: "h2",
        text: "Comparison design",
      },
      {
        type: "p",
        text: "Four estimator configurations share the same quaternion complementary-filter framework with gyroscope-bias estimation. The primary experimental variable is the available sensor set. Estimates are computed post-flight from synchronized recordings—not as an onboard real-time flight-control algorithm.",
      },
      {
        type: "table",
        caption: "Estimator configurations proposed for post-flight comparison",
        headers: ["Configuration", "Inputs", "Purpose"],
        rows: [
          ["A", "Gyroscope", "Drift-prone baseline"],
          ["B", "Gyroscope + accelerometer", "Test gravity-based correction"],
          [
            "C",
            "Gyroscope + accelerometer + magnetometer",
            "Test added magnetic heading reference",
          ],
          [
            "D",
            "Gyroscope + accelerometer + magnetometer + Sun sensor",
            "Test the incremental optical reference",
          ],
        ],
      },
      {
        type: "h2",
        text: "Independent evaluation and caveat",
      },
      {
        type: "p",
        text: "Ground truth is available during controlled rotation-fixture tests. In flight, the payload has no independent absolute attitude truth sensor. The proposal evaluates agreement with modeled Sun and geomagnetic reference directions and proposes withholding a reference from the evaluated estimator to avoid circular scoring. In-flight reference consistency is not the same as fully verified absolute attitude accuracy.",
      },
      {
        type: "h2",
        text: "Metrics",
      },
      {
        type: "ul",
        items: [
          "Ground-test RMS angular error and 95th-percentile angular error",
          "Drift rate in degrees per hour (°/h)",
          "Gyroscope bias temperature slope (°/s/°C)",
          "Accelerometer offset temperature slope (mg/°C)",
          "Sensor-reference availability (% of valid observations)",
          "Recovery time following reference outages",
          "Rotation-rate distributions during ascent, float, and descent",
        ],
      },
      {
        type: "status",
        label: "Results",
        value: "Ground and flight metrics will appear here after testing",
      },
    ],
  },
  objectives: {
    slug: "objectives",
    title: "Mission objectives",
    description:
      "Five measurable objectives, validation approach, and success criteria from the HASP proposal.",
    blocks: [
      {
        type: "p",
        text: "Each objective states what will be measured, how it will be validated, and its intended deliverable. All remain planned work unless later updates confirm completion.",
      },
      {
        type: "h2",
        text: "1. Characterize temperature-dependent sensor error",
      },
      {
        type: "p",
        text: "Measure gyroscope zero-rate bias and accelerometer offset over the widest accessible temperature range (goal −40 °C to +40 °C), including thermal-vacuum testing. Deliver sensor-specific temperature slopes with uncertainty before integration.",
      },
      {
        type: "h2",
        text: "2. Validate all four estimators on the ground",
      },
      {
        type: "p",
        text: "Use a known-angle rotation fixture over approximately 0.2–10 °/s and static holds of at least one hour. Report RMS error, 95th-percentile error, and drift rate.",
      },
      {
        type: "h2",
        text: "3. Acquire and recover the flight data",
      },
      {
        type: "p",
        text: "Record raw sensor measurements from power-on through descent and target recovery of at least 95% of expected samples, with limited health telemetry during flight.",
      },
      {
        type: "h2",
        text: "4. Compare the configurations in flight",
      },
      {
        type: "p",
        text: "Analyze reference consistency, drift, bias-versus-temperature, availability, and outage recovery. Distinguish roll/pitch from heading performance; include uncertainty in the final science report targeted for December 2027.",
      },
      {
        type: "h2",
        text: "5. Characterize balloon-seat rotation",
      },
      {
        type: "p",
        text: "Measure rotation-rate distributions during ascent, float, and descent to inform future payload design.",
      },
      {
        type: "callout",
        title: "Success criteria",
        text: "Minimum success: Objectives 1–3 for inertial, magnetic, and temperature sensing. Full success additionally includes the Sun sensor and Objectives 4–5. The Sun sensor is identified as the first subsystem that could be descoped if required by schedule.",
      },
    ],
  },
  architecture: {
    slug: "architecture",
    title: "System architecture",
    description:
      "Power, sensing, acquisition, storage, downlink, and post-flight estimation flow for MOSAIC.",
    blocks: [
      {
        type: "p",
        text: "MOSAIC is an estimation and data-collection experiment. It does not include an active attitude-control system. Onboard recording is distinct from post-flight estimation.",
      },
      {
        type: "h2",
        text: "Operating sequence",
      },
      {
        type: "ul",
        items: [
          "HASP supplies power to the payload.",
          "The onboard controller initializes sensors and local storage.",
          "Raw inertial, magnetic, optical, temperature, pressure, and diagnostic measurements are collected with timestamps.",
          "Full science data are stored on microSD; a compact 1 Hz status packet is sent through the HASP serial downlink.",
          "After recovery, timestamps are aligned with HASP UTC/GPS information.",
          "Four estimators are run on the recorded dataset and compared.",
        ],
      },
      {
        type: "callout",
        title: "Attitude estimation vs. control",
        text: "Attitude estimation determines orientation. Attitude control actively changes orientation. MOSAIC focuses on estimation and synchronized data collection.",
      },
    ],
  },
  hardware: {
    slug: "hardware",
    title: "Hardware",
    description:
      "Proposed component catalog for sensing, conditioning, control, and storage.",
    blocks: [
      {
        type: "p",
        text: "Statuses default to proposed / in development unless dated evidence is supplied. Photodiode grouping and ADS1115 addressing remain subject to validation.",
      },
      {
        type: "table",
        caption: "Proposed component inventory",
        headers: ["Component", "Qty", "Role"],
        rows: [
          ["Raspberry Pi Pico 2 W", "1", "Main acquisition controller"],
          ["GY-521 / MPU-6050", "2", "Gyroscope and accelerometer measurements"],
          ["BNO085 modules", "2", "Inertial measurements and available onboard fusion outputs"],
          ["QMC5883L", "1", "Separate magnetic-field sensing"],
          ["BPW34 photodiodes", "20", "Optical Sun-direction sensing"],
          ["MCP6004", "5", "Four-channel photodiode signal conditioning"],
          ["ADS1115", "5", "Four-channel analog-to-digital conversion"],
          ["MS5611", "1", "Pressure measurement"],
          ["DS18B20", "2", "Temperature monitoring"],
          ["INA219", "1", "Low-voltage electrical monitoring"],
          ["microSD module and card", "1 set", "Onboard data logging"],
          ["I²C multiplexer / bus isolation", "As required", "Resolve duplicate I²C addresses"],
          ["RS-232 level shifter", "1", "HASP status telemetry interface"],
        ],
      },
      {
        type: "callout",
        title: "Important distinction",
        text: "Do not confuse the BNO085’s onboard fusion outputs with the four planned post-flight estimator comparisons that define the MOSAIC science analysis.",
      },
    ],
  },
  mechanical: {
    slug: "mechanical",
    title: "Mechanical design",
    description:
      "Chassis concept, mounting approach, and preliminary mass budget.",
    blocks: [
      {
        type: "ul",
        items: [
          "6061-T6 aluminum enclosure",
          "Proposed assembled chassis dimensions: 147 × 147 × 240 mm",
          "Designed to remain within a 15 × 15 cm small-payload footprint, including recessed photodiode mounts",
          "Base plate, four walls, lid, and aluminum angle brackets",
          "Approximately 1 cm of XPS foam lining for insulation",
          "Stacked circuit boards on aluminum standoffs with M3 rubber vibration dampers",
          "DB9 serial and power connectors mounted low on the HASP-facing wall",
          "Venting through openings to avoid trapping a pressure differential",
          "Structural design consideration: 10 g vertical and 5 g horizontal shock loads; proposal uses a 3 kg design load in force estimates",
        ],
      },
      {
        type: "h2",
        text: "Mass budget",
      },
      {
        type: "p",
        text: "The proposal reports approximately 1,222 g total (1,055 g mechanical + 167 g electronics), with approximately ±109 g stated uncertainty. These are preliminary estimates, not measured final mass.",
      },
    ],
  },
  electrical: {
    slug: "electrical",
    title: "Electrical design",
    description:
      "Power conditioning, sensing interfaces, storage, and serial downlink.",
    blocks: [
      {
        type: "ul",
        items: [
          "HASP supplies nominal 26–30 VDC; small-payload planning limit is 0.5 A",
          "Fused, reverse-polarity-protected input feeds a step-down converter and regulated rails",
          "Pico 2 W is the sole onboard controller",
          "Digital sensors use appropriate 3.3 V interfaces; duplicate I²C addresses require multiplexing or separate buses",
          "Photodiodes feed MCP6004 analog stages, then ADS1115 ADCs",
          "microSD data storage uses SPI; DS18B20 uses 1-Wire",
          "INA219 monitors a regulated low-voltage branch only — not the 26–30 V HASP input",
          "Wi-Fi/Bluetooth on the Pico 2 W are intended to remain disabled; no independent RF transmission or onboard battery is planned",
        ],
      },
      {
        type: "h2",
        text: "Preliminary power budget",
      },
      {
        type: "p",
        text: "Approximately 0.84 W nominal, 2.40 W simultaneous peak, and 3.00 W with stated peak margin, against a 13 W planning ceiling. All figures are estimates pending bench verification.",
      },
      {
        type: "h2",
        text: "Serial downlink",
      },
      {
        type: "ul",
        items: [
          "RS-232, 9600 baud, 8N1, DB9 pins 2/3/5 as described in the proposal",
          "One short ASCII status packet per second (~60–80 bytes)",
          "Counter, uptime, internal temperatures, selected gyro/magnetic/optical values, voltage/current, and an SD-write health flag",
          "Complete science data stored locally; telemetry is for status monitoring and UTC alignment",
          "No serial uplink, analog downlink, or discrete commanding is proposed",
        ],
      },
    ],
  },
  thermal: {
    slug: "thermal",
    title: "Thermal design",
    description:
      "Temperature effects on sensors, passive mitigation concepts, and simulation caveats.",
    blocks: [
      {
        type: "p",
        text: "Temperature affects sensor bias and component operation. The design plans internal XPS foam, air gaps, passive heatsinking, and possible reflective exterior treatments.",
      },
      {
        type: "p",
        text: "Preliminary SOLIDWORKS simulations in the proposal indicate roughly −7 °C central electronics temperature in an eight-hour modeled nighttime case and as high as 77 °C under modeled continuous daytime solar exposure. These are simulation outputs with acknowledged simplifications, not flight measurements.",
      },
      {
        type: "h2",
        text: "Thermal risks and mitigations",
      },
      {
        type: "ul",
        items: [
          "Solar heating is a significant design risk",
          "Thermal-vacuum and temperature-chamber testing are planned to guide final material and coating decisions",
          "Reserve this page for verified plots or simulation images when available",
        ],
      },
    ],
  },
  software: {
    slug: "software",
    title: "Data acquisition & analysis",
    description:
      "Planned processing pipeline from acquisition through estimator comparison.",
    blocks: [
      {
        type: "p",
        text: "This documents the planned processing pipeline, not an already implemented software stack.",
      },
      {
        type: "ol",
        items: [
          "Initialize and synchronize sensor streams",
          "Acquire raw gyroscope, accelerometer, magnetometer, photodiode, environmental, and diagnostic data",
          "Timestamp and log samples to microSD",
          "Match local sample counters/elapsed time to HASP UTC-stamped downlink records and GPS positions",
          "Apply sensor calibration and quality checks",
          "Run the four quaternion complementary-filter configurations with bias estimation",
          "Compute ground-test errors and flight reference-consistency metrics",
          "Analyze sensor availability, outage recovery, temperature sensitivity, and rotation-rate distributions",
          "Publish validated figures, uncertainty estimates, and conclusions",
        ],
      },
      {
        type: "h2",
        text: "Pending documentation",
      },
      {
        type: "ul",
        items: [
          "Sensor sampling rates and data schema — not specified in the proposal",
          "Firmware repository and versioning — link not supplied",
          "Calibration files and processing scripts — not supplied",
          "Example log records — not supplied; do not invent real-looking data",
          "Reproducibility instructions and release datasets — pending",
        ],
      },
    ],
  },
  testing: {
    slug: "testing",
    title: "Testing & validation",
    description: "Planned test matrix with default Planned status until evidence is supplied.",
    blocks: [
      {
        type: "table",
        caption: "Planned test matrix",
        headers: ["Test", "Purpose", "Proposed acceptance / output", "Status"],
        rows: [
          [
            "Sensor temperature characterization",
            "Quantify gyro and accelerometer bias changes",
            "Temperature slopes and uncertainty",
            "Planned",
          ],
          [
            "Known-angle rotation fixture",
            "Compare all four estimators",
            "RMS / 95th-percentile error and drift",
            "Planned",
          ],
          [
            "Static hold ≥1 hour",
            "Characterize drift accumulation",
            "Drift rate (°/h)",
            "Planned",
          ],
          [
            "Photodiode directional calibration",
            "Validate Sun-sensor geometry",
            "Directional response / calibration model",
            "Planned",
          ],
          [
            "Optical saturation / ambient-light testing",
            "Validate analog front end",
            "Gain and operating-range decisions",
            "Planned",
          ],
          [
            "I²C and logging validation",
            "Verify reliable acquisition",
            "Address, timing, and write integrity",
            "Planned",
          ],
          [
            "Power and transient testing",
            "Validate electrical budget",
            "Measured nominal / peak consumption",
            "Planned",
          ],
          [
            "Thermal-vacuum testing",
            "Validate thermal and functional performance",
            "Temperature and operation logs",
            "Planned",
          ],
          [
            "Mechanical fit / integration checks",
            "Verify HASP interface compliance",
            "Inspection / test record",
            "Planned",
          ],
          [
            "Flight-data completeness check",
            "Assess recovered dataset",
            "Target ≥95% expected samples",
            "Planned",
          ],
        ],
      },
    ],
  },
  timeline: {
    slug: "timeline",
    title: "Timeline & milestones",
    description:
      "Chronological milestones with clear distinction between submitted, planned, and target dates.",
    blocks: [
      {
        type: "table",
        caption: "Proposal milestones",
        headers: ["Milestone", "Date / target", "Treatment"],
        rows: [
          ["Proposal submitted", "November 8, 2026", "Submitted per source"],
          [
            "Ground characterization and validation",
            "Before integration",
            "Planned; exact dates TBD",
          ],
          [
            "Payload integration at CSBF, Palestine, TX",
            "July 26–30, 2027",
            "Proposed schedule",
          ],
          ["Target launch at Fort Sumner, NM", "August 30, 2027", "Target only"],
          ["Target recovery", "September 2–3, 2027", "Target only"],
          ["Final science report", "December 2027", "Planned deliverable"],
        ],
      },
      {
        type: "callout",
        title: "Do not infer flight outcomes",
        text: "HASP acceptance, integration attendance, launch, recovery, or successful science operations are not established by the proposal alone.",
      },
    ],
  },
  updates: {
    slug: "updates",
    title: "Development updates",
    description: "Dated engineering logs. Only verified updates appear here.",
    blocks: [
      {
        type: "callout",
        title: "Development log",
        text: "Dated engineering updates will appear here as the team publishes verified progress.",
      },
    ],
  },
  resources: {
    slug: "resources",
    title: "Resources & references",
    description: "Proposal figure references and citations for MOSAIC.",
    blocks: [
      {
        type: "h2",
        text: "Proposal figures",
      },
      {
        type: "ul",
        items: [
          "MOSAIC architecture diagram — proposal PDF page 8",
          "Mechanical baseplate drawing and materials matrix — page 10",
          "Electrical block diagram — page 11",
          "Project Gantt chart — page 13",
          "Chassis assembly and part drawings — pages 18–24",
          "Preliminary electrical schematics — pages 25–26",
        ],
      },
      {
        type: "p",
        text: "Approved drawings and exports will be linked here when the club authorizes public release.",
      },
      {
        type: "h2",
        text: "References",
      },
      {
        type: "ul",
        items: [
          "Markley and Crassidis, Fundamentals of Spacecraft Attitude Determination and Control (2014).",
          "Crassidis, Markley, and Cheng, survey of nonlinear attitude estimation (2007), DOI 10.2514/1.22452.",
          "El-Sheimy, Hou, and Niu, Allan variance for inertial sensors (2008).",
          "Wahba, least-squares satellite attitude estimation (1965).",
          "Markley and Mortari, quaternion attitude estimation (2000).",
          "Mahony, Hamel, and Pflimlin, nonlinear complementary filters (2008), DOI 10.1109/TAC.2008.923738.",
          "Madgwick, Harrison, and Vaidyanathan, IMU/MARG orientation (2011), DOI 10.1109/ICORR.2011.5975346.",
          "STMicroelectronics ISM330DHCX datasheet.",
          "HASP 2027 Call for Payloads (August 10, 2026).",
          "Safonova et al., balloon gondola motion (2016), arXiv 1607.06397.",
          "COMPASS HASP 2021 final science report.",
          "EQUIS HASP 2011 science report.",
          "Pascale et al., BLAST (2008), DOI 10.1086/588541.",
          "Cho et al., SunbYte (2024), DOI 10.1007/s10686-024-09944-w.",
        ],
      },
    ],
  },
};

// Fix software ordered list - I used a hack. Let me use ul with numbered text instead by rewriting that section properly in a follow-up if needed.
