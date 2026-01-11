import { PixelRatio } from "react-native";

export default function getFontScale(baseFontSize: number = 13): number {
    const fontScale = PixelRatio.getFontScale();
    const minScale = 0.8;
    const maxScale = 1.4;
    const clampedFontScale = Math.max(minScale, Math.min(maxScale, fontScale));
    const inverseFactor = 2 - clampedFontScale;
    const scaledFontSize = baseFontSize * inverseFactor;
    return scaledFontSize;
}