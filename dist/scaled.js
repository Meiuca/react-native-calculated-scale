import { Dimensions, PixelRatio } from "react-native";

/** This values  */
const WIDTH_SCREEN = 375
const HEIGHT_SCREEN = 812
const REM = 16

function font(size, number = false) {
    let parsedSize = parseSize(size, REM);

    let { width, height } = Dimensions.get("window");

    let scaleWidth = width / WIDTH_SCREEN;
    let scaleHeight = height / HEIGHT_SCREEN;

    let scale = Math.min(scaleWidth, scaleHeight);

    let to_ret = Math.ceil(
        PixelRatio.roundToNearestPixel(parsedSize * scale - scale)
    );

    return number ? to_ret : to_ret + "px";
}

function horizontal(size, number = false) {
    let parsedSize = parseSize(size, REM);

    let { width } = Dimensions.get("window");

    let scaleWidth = width / WIDTH_SCREEN;

    let to_ret = Math.ceil(
        PixelRatio.roundToNearestPixel(parsedSize * scaleWidth)
    );

    return number ? to_ret : to_ret + "px";
}

function vertical(size, number = false) {
    let parsedSize = parseSize(size, REM);

    let { height } = Dimensions.get("window");

    let scaleHeight = height / HEIGHT_SCREEN;

    let to_ret = Math.ceil(
        PixelRatio.roundToNearestPixel(parsedSize * scaleHeight)
    );

    return number ? to_ret : to_ret + "px";
}

function parseSize(size, rem) {
    return typeof size == "string"
        ? size.includes("rem")
            ? parseFloat(size) * rem
            : parseFloat(size)
        : size;
}

export {
    font,
    horizontal,
    vertical,
}