import { Dimensions, PixelRatio } from "react-native";

/** This values  */
var WIDTH_SCREEN = 375,
  HEIGHT_SCREEN = 812,
  REM = 16;

function set({ width, height, rem }) {
  WIDTH_SCREEN = parseFloat(width) || WIDTH_SCREEN;
  HEIGHT_SCREEN = parseFloat(height) || HEIGHT_SCREEN;
  REM = parseFloat(rem) || REM;
}

function font(size, number = false) {
  if (!size) return;

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
  if (!size) return;

  let parsedSize = parseSize(size, REM);

  let { width } = Dimensions.get("window");

  let scaleWidth = width / WIDTH_SCREEN;

  let to_ret = Math.ceil(
    PixelRatio.roundToNearestPixel(parsedSize * scaleWidth)
  );

  return number ? to_ret : to_ret + "px";
}

function vertical(size, number = false) {
  if (!size) return;

  let parsedSize = parseSize(size, REM);

  let { height } = Dimensions.get("window");

  let scaleHeight = height / HEIGHT_SCREEN;

  let to_ret = Math.ceil(
    PixelRatio.roundToNearestPixel(parsedSize * scaleHeight)
  );

  return number ? to_ret : to_ret + "px";
}

function parseSize(size, rem) {
  let to_ret =
    typeof size == "string"
      ? size.includes("rem")
        ? parseFloat(size) * rem
        : parseFloat(size)
      : size;

  if (isNaN(to_ret)) throw new Error(`${size} is NaN`);

  return to_ret;
}

export { font, horizontal, vertical, set };
