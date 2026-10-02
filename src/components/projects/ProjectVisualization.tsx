import { ArrowRight, ChevronDown } from "lucide-react";

interface FlowNode {
  id: string;
  label: string;
  color: string;
}

export function ProjectVisualization({ nodes }: { nodes: FlowNode[] }) {
  return (
    <ol
      aria-label="Pipeline stages"
      className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-5"
    >
      {nodes.map((node, i) => (
        <li
          key={node.id}
          className="relative flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-4 py-3.5"
        >
          <span
            className="size-2.5 shrink-0 rounded-full"
            style={{ background: node.color, boxShadow: `0 0 12px ${node.color}80` }}
            aria-hidden="true"
          />
          <span className="min-w-0">
            <span className="block font-mono text-[0.65rem] text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
            <span className="block text-sm font-medium leading-snug text-zinc-100">{node.label}</span>
          </span>

          {i < nodes.length - 1 && (
            <>
              <ArrowRight
                className="absolute -right-[18px] top-1/2 z-10 hidden size-4 -translate-y-1/2 text-zinc-600 md:block"
                aria-hidden="true"
              />
              <ChevronDown
                className="absolute -bottom-[19px] left-1/2 z-10 size-4 -translate-x-1/2 text-zinc-600 md:hidden"
                aria-hidden="true"
              />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}
