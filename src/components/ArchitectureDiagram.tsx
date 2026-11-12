export function ArchitectureDiagram() {
  return (
    <figure className="my-8 overflow-x-auto rounded-2xl border border-line bg-surface-soft p-5">
      <svg
        viewBox="0 0 760 520"
        role="img"
        aria-label="MOSAIC system architecture from HASP power through sensing, recording, downlink, and post-flight estimation"
        className="mx-auto h-auto w-full min-w-[640px] max-w-3xl"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#12358a" />
          </marker>
        </defs>

        {[
          { y: 24, label: "HASP supplied power (26–30 VDC)" },
          { y: 88, label: "Power conditioning" },
          { y: 152, label: "Raspberry Pi Pico 2 W" },
        ].map((node) => (
          <g key={node.label}>
            <rect
              x="210"
              y={node.y}
              width="340"
              height="44"
              rx="12"
              fill="#fff"
              stroke="#12358a"
              strokeWidth="1.5"
            />
            <text
              x="380"
              y={node.y + 27}
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="13"
              fill="#07111f"
            >
              {node.label}
            </text>
          </g>
        ))}

        <line x1="380" y1="68" x2="380" y2="88" stroke="#12358a" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="380" y1="132" x2="380" y2="152" stroke="#12358a" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {[
          { x: 24, title: "Inertial / magnetic", body: "Gyros, accelerometers,\nmagnetometer" },
          { x: 268, title: "Optical Sun sensing", body: "20 photodiodes,\nanalog + ADCs" },
          { x: 512, title: "Environmental / health", body: "Temperature, pressure,\nelectrical monitoring" },
        ].map((box) => (
          <g key={box.title}>
            <rect
              x={box.x}
              y="236"
              width="224"
              height="78"
              rx="12"
              fill="#e8eefc"
              stroke="#12358a"
              strokeWidth="1.25"
            />
            <text x={box.x + 112} y="264" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0c2466">
              {box.title}
            </text>
            {box.body.split("\n").map((line, i) => (
              <text
                key={line}
                x={box.x + 112}
                y={286 + i * 16}
                textAnchor="middle"
                fontSize="12"
                fill="#5b6b7c"
              >
                {line}
              </text>
            ))}
          </g>
        ))}

        <path d="M380 196 V214 H136 V236" fill="none" stroke="#12358a" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M380 196 V236" fill="none" stroke="#12358a" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M380 196 V214 H624 V236" fill="none" stroke="#12358a" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {[
          { y: 344, label: "Timestamped acquisition · onboard microSD storage" },
          { y: 408, label: "Post-recovery processing · four estimator configs" },
          { y: 472, label: "Error, drift, and reliability analysis" },
        ].map((node) => (
          <g key={node.label}>
            <rect
              x="150"
              y={node.y}
              width="460"
              height="40"
              rx="12"
              fill="#fff"
              stroke="#12358a"
              strokeWidth="1.5"
            />
            <text
              x="380"
              y={node.y + 25}
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="12.5"
              fill="#07111f"
            >
              {node.label}
            </text>
          </g>
        ))}

        <line x1="136" y1="314" x2="136" y2="330" stroke="#12358a" strokeWidth="1.5" />
        <line x1="380" y1="314" x2="380" y2="330" stroke="#12358a" strokeWidth="1.5" />
        <line x1="624" y1="314" x2="624" y2="330" stroke="#12358a" strokeWidth="1.5" />
        <line x1="136" y1="330" x2="624" y2="330" stroke="#12358a" strokeWidth="1.5" />
        <line x1="380" y1="330" x2="380" y2="344" stroke="#12358a" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="380" y1="384" x2="380" y2="408" stroke="#12358a" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="380" y1="448" x2="380" y2="472" stroke="#12358a" strokeWidth="1.5" markerEnd="url(#arrow)" />

        <rect x="560" y="152" width="176" height="44" rx="12" fill="#f7f1e3" stroke="#b8923a" strokeWidth="1.25" />
        <text x="648" y="178" textAnchor="middle" fontSize="11.5" fill="#07111f">
          HASP RS-232 status
        </text>
        <line x1="550" y1="174" x2="560" y2="174" stroke="#b8923a" strokeWidth="1.5" markerEnd="url(#arrow)" />
      </svg>
      <figcaption className="mt-4 text-sm text-muted">
        Conceptual architecture distinguishing onboard recording from post-flight estimation, with a separate
        status downlink branch to HASP RS-232.
      </figcaption>
    </figure>
  );
}
