import type { SVGProps } from "react";
const SvgCallOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#callOut_svg__a)">
      <path
        fill="#FA6B00"
        d="M16.675 12.817a9.5 9.5 0 0 1-2.942-.467.81.81 0 0 0-.841.2l-1.309 1.642c-2.358-1.125-4.566-3.25-5.741-5.692l1.625-1.383a.85.85 0 0 0 .2-.85A9.3 9.3 0 0 1 7.2 3.325a.83.83 0 0 0-.825-.825H3.492c-.45 0-.992.2-.992.825C2.5 11.067 8.942 17.5 16.675 17.5c.592 0 .825-.525.825-.983v-2.875a.83.83 0 0 0-.825-.825"
      />
      <path d="m10 9.119.852.881 5.44-5.369V8.75H17.5V2.5h-6.043v1.25h3.982z" />
    </g>
    <defs>
      <clipPath id="callOut_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCallOut;
