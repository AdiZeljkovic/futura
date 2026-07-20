import type { Policy } from "@/lib/data/policies";

// Renders a Policy's structured body into the shared .legal-prose typography.
export default function PolicyBody({ policy }: { policy: Policy }) {
  return (
    <>
      <div className="legal-meta">
        <p>
          <strong>Effective Date:</strong> {policy.effectiveDate}
        </p>
        <p>
          <strong>Company:</strong> {policy.meta.company}
        </p>
        <p>
          <strong>Company Address:</strong> {policy.meta.address}
        </p>
        <p>
          <strong>Website:</strong> {policy.meta.website}
        </p>
        <p>
          <strong>Email:</strong> {policy.meta.email}
        </p>
      </div>

      {policy.intro.map((text, i) => (
        <p key={i}>{text}</p>
      ))}

      {policy.sections.map((section, i) => {
        const Heading = section.level === 2 ? "h2" : "h3";
        return (
          <div key={i}>
            <Heading className={section.level === 3 ? "legal-h3" : undefined}>
              {section.heading}
            </Heading>
            {section.blocks.map((block, j) => {
              if (block.type === "p") return <p key={j}>{block.text}</p>;
              if (block.type === "ul")
                return (
                  <ul key={j}>
                    {block.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                );
              return (
                <div key={j} className="legal-table-wrap">
                  <table className="legal-table">
                    <thead>
                      <tr>
                        {block.headers.map((h, k) => (
                          <th key={k}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, k) => (
                        <tr key={k}>
                          {row.map((cell, l) => (
                            <td key={l}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
