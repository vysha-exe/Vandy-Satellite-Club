import type { HaspSection } from "@/content/hasp/sections";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Callout, SpecTable, StatusLabel } from "@/components/ui";

export function DocBlocks({
  section,
  showArchitecture = false,
}: {
  section: HaspSection;
  showArchitecture?: boolean;
}) {
  return (
    <div className="prose-doc">
      {section.blocks.map((block, index) => {
        if (block.type === "p") return <p key={index}>{block.text}</p>;
        if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
        if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index} className="mb-5 list-decimal pl-5">
              {block.items.map((item) => (
                <li key={item} className="mb-2 text-muted">
                  {item}
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "callout") {
          return <Callout key={index} title={block.title} text={block.text} />;
        }
        if (block.type === "table") {
          return (
            <SpecTable
              key={index}
              headers={block.headers}
              rows={block.rows}
              caption={block.caption}
            />
          );
        }
        if (block.type === "status") {
          return (
            <p key={index} className="flex flex-wrap items-center gap-3">
              <StatusLabel>{block.label}</StatusLabel>
              <span className="text-sm text-muted">{block.value}</span>
            </p>
          );
        }
        return null;
      })}
      {showArchitecture ? <ArchitectureDiagram /> : null}
    </div>
  );
}
