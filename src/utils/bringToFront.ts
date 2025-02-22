import * as d3 from "d3";

type bringToFrontProps = (
  svgRef: React.RefObject<SVGSVGElement>,
  id: string
) => void;

export const bringToFront: bringToFrontProps = (svgRef, id) => {
  const svg = d3.select(svgRef.current);

  const target = svg.select(`#${id}`);
  if (!target.empty()) {
    target.raise();
  }
};
