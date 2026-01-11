import Svg, { G, Path } from "react-native-svg";
import IconsProps from "./icons-props";

export default function (props: IconsProps) {
    return (
        <Svg
            width={props.size ?? "32"}
            height={props.size ?? "32"}
            viewBox="0 0 1024 1024"
            fill="none"
            stroke={props.color ?? "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <G strokeWidth="0"></G>
            <G strokeLinecap="round" strokeLinejoin="round"></G>
            <G >
                <Path
                    fill={props.color ?? "#ffffff"}
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></Path>
                <Path
                    fill={props.color ?? "#ffffff"}
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></Path>
            </G>
        </Svg>
    );
}

