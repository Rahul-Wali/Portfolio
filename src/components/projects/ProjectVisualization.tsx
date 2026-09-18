"use client";

import { motion } from "framer-motion";

interface Node {
  id: string;
  label: string;
  position: number[];
  color: string;
}

interface Edge {
  from: string;
  to: string;
}

interface ProjectVisualizationProps {
  nodes: Node[];
  edges: Edge[];
  reducedMotion: boolean;
  className?: string;
}

export function ProjectVisualization({ nodes, edges, reducedMotion, className }: ProjectVisualizationProps) {
  const viewBox = "0 0 320 280";
  const centerX = 160;
  const centerY = 140;

  return (
    <div className={className} role="img" aria-label="Project architecture diagram">
      <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet" className="w-full h-full">
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={nodes[0]?.color || "#06b6d4"} stopOpacity="0.4" />
            <stop offset="100%" stopColor={nodes[nodes.length - 1]?.color || "#8b5cf6"} stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {edges.map((edge, i) => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          const fromX = (fromNode.position[0] + 12) * 12 + 80;
          const fromY = centerY - fromNode.position[1] * 12;
          const toX = (toNode.position[0] + 12) * 12 + 80;
          const toY = centerY - toNode.position[1] * 12;

          return (
            <g key={i}>
              <motion.path
                d={`M${fromX},${fromY} C${(fromX + toX) / 2},${fromY - 30} ${(fromX + toX) / 2},${toY - 30} ${toX},${toY}`}
                stroke="url(#edgeGradient)"
                strokeWidth={1.5}
                fill="none"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 8px currentColor)", opacity: 0.4 }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: reducedMotion ? 0 : 1.5, delay: i * 0.2, ease: "easeOut" }}
              />
            </g>
          );
        })}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={(node.position[0] + 12) * 12 + 80}
              cy={centerY - node.position[1] * 12}
              r={12}
              fill={node.color}
              style={{ filter: `drop-shadow(0 0 12px ${node.color})` }}
              animate={{ scale: reducedMotion ? 1 : [1, 1.1, 1] }}
              transition={{ duration: reducedMotion ? 0 : 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            />
            <text
              x={(node.position[0] + 12) * 12 + 80}
              y={centerY - node.position[1] * 12 + 35}
              textAnchor="middle"
              className="text-white text-xs font-medium"
              style={{ fontFamily: "var(--font-sans)", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}