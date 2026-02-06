import { useState } from "react";

export default function ExpandableText({ text, limit = 140 }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > limit;

  return (
    <div>
      <p className="text-textLight leading-relaxed">
        {expanded || !isLong ? text : text.slice(0, limit) + "..."}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primaryLight text-sm mt-2 hover:underline"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}
