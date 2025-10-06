import React from "react";

export default function DecisionTable({ 
  decisions 
}: { 
  decisions: Array<{
    point: string;
    options: string[];
    rationale: string;
    impact: string;
  }>;
}) {
  return (
    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-white font-semibold text-sm">
                Decision Point
              </th>
              <th className="text-left py-4 px-6 text-white font-semibold text-sm">
                Options Considered
              </th>
              <th className="text-left py-4 px-6 text-white font-semibold text-sm">
                Why We Chose
              </th>
              <th className="text-left py-4 px-6 text-white font-semibold text-sm">
                Impact
              </th>
            </tr>
          </thead>
          <tbody>
            {decisions.map((decision, index) => (
              <tr key={index} className="border-b border-white/5 last:border-0">
                <td className="py-4 px-6 text-white font-medium text-sm">
                  {decision.point}
                </td>
                <td className="py-4 px-6 text-gray-300 text-sm">
                  {decision.options.map((option, i) => (
                    <div key={i}>{i + 1}. {option}</div>
                  ))}
                </td>
                <td className="py-4 px-6 text-gray-300 text-sm">
                  {decision.rationale}
                </td>
                <td className="py-4 px-6 text-blue-400 font-semibold text-sm">
                  {decision.impact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}