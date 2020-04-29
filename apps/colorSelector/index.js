/* jshint esversion: 6 */

const red = document.querySelector(".red");
const activeSlider = window.getComputedStyle(
  document.querySelector(".sliders"),
  "::-webkit-slider-thumb"
);
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const alpha = document.querySelector(".alpha");
const hue = document.querySelector(".hue");
const hslSat = document.querySelector(".hsl-saturation");
const hslLight = document.querySelector(".hsl-lightness");
const hsvSat = document.querySelector(".hsv-saturation");
const hsvValue = document.querySelector(".hsv-value");
const test = document.querySelector("h1");
const random = document.querySelector(".random");
const canvas = document.getElementById("canvas");
const preview = document.querySelector(".preview");
const rgbText = document.querySelector(".rgbText");
const hexText = document.querySelector(".hexText");
const hslText = document.querySelector(".hslText");
const hsvText = document.querySelector(".hsvText");
const ctx = canvas.getContext("2d");
const ctx1 = canvas.getContext("2d");
let drag = false;
const ctx2 = canvas.getContext("2d");
const swatches = document.querySelectorAll(".swatches");
const addSwatch = document.querySelector(".add-swatch");
const swatchContainer = document.querySelector(".swatch-container");
const buttons = document.querySelectorAll(".btn");
const headings = document.querySelectorAll("th");
const tBody = document.querySelector("tbody");
const sliderThumbs = document.querySelectorAll("#thumb");

const getCanvasWidthHeight = () => {
  const canvasWidth = window.getComputedStyle(canvas).getPropertyValue("width");
  const canvasHeight = window
    .getComputedStyle(canvas)
    .getPropertyValue("height");
  const cWidth = Number(
    Math.floor(canvasWidth.slice(0, canvasWidth.length - 2))
  );
  const cHeight = Number(
    Math.floor(canvasHeight.slice(0, canvasHeight.length - 2))
  );
  canvas.width = cWidth;
  canvas.height = cHeight;
};

const fillGradient = () => {
  getCanvasWidthHeight();

  let hslaColor = `hsla(${hue.value},100%,50%,1)`;
  ctx.fillStyle = hslaColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let grdWhite = ctx1.createLinearGradient(0, 0, canvas.width, 0);
  grdWhite.addColorStop(0, "rgba(255,255,255,1)");
  grdWhite.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grdWhite;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let grdBlack = ctx1.createLinearGradient(0, 0, 0, canvas.height);
  grdBlack.addColorStop(0, "rgba(0,0,0,0)");
  grdBlack.addColorStop(1, "rgba(0,0,0,1)");
  ctx.fillStyle = grdBlack;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const hexToTwo = (num) => {
  if (num.length < 2) {
    num = "0" + num;
  }
  return num;
};

const rgbToHsl = (r, g, b) => {
  (r /= 255), (g /= 255), (b /= 255);

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
};

const hue2rgb = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

const hslToRgb = (h, s, l) => {
  let r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
};

const rgbToHsv = (r, g, b) => {
  (r /= 255), (g /= 255), (b /= 255);

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    v = max;

  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, v];
};

const hsvToRgb = (h, s, v) => {
  var r, g, b;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  return [r * 255, g * 255, b * 255];
};

const hslToHsv = (hue, sat, light) => {
  sat *= light < 0.5 ? light : 1 - light;

  return [
    //[hue, saturation, value]
    //Range should be between 0 - 1

    hue, //Hue stays the same
    (2 * sat) / (light + sat), //Saturation
    light + sat, //Value
  ];
};

const sliders = (event) => {
  let name = event.target.classList[0];
  let value = event.target.value;
  let redR = red.value;
  let blueB = blue.value;
  let greenG = green.value;
  let hueV = hue.value;
  let hslSatV = hslSat.value;
  let hslLightV = hslLight.value;
  let hsvSatV = hsvSat.value;
  let hsvValueV = hsvValue.value;
  let rgbResultHue = hslToRgb(value / 360, hslSatV / 100, hslLightV / 100);
  let rgbResultSat = hslToRgb(hueV / 360, value / 100, hslLightV / 100);
  let rgbResultLight = hslToRgb(hueV / 360, hslSatV / 100, value / 100);
  let rgbResultSatV = hsvToRgb(hueV / 360, value / 100, hsvValueV / 100);
  let rgbResultValue = hsvToRgb(hueV / 360, hsvSatV / 100, value / 100);
  let hsvResultHue = hslToHsv(value / 360, hslSatV / 100, hslLightV / 100);
  let hsvResultSat = hslToHsv(hueV / 360, value / 100, hslLightV / 100);
  let hsvResultLight = hslToHsv(hueV / 360, hslSatV / 100, value / 100);
  let redHex = `#${hexToTwo(Number(value).toString(16))}${hexToTwo(
    Number(greenG).toString(16)
  )}${hexToTwo(Number(blueB).toString(16))}`;
  let greenHex = `#${hexToTwo(Number(redR).toString(16))}${hexToTwo(
    Number(value).toString(16)
  )}${hexToTwo(Number(blueB).toString(16))}`;
  let blueHex = `#${hexToTwo(Number(redR).toString(16))}${hexToTwo(
    Number(greenG).toString(16)
  )}${hexToTwo(Number(value).toString(16))}`;
  let hslResultRed = rgbToHsl(value, greenG, blueB);
  let hslResultGreen = rgbToHsl(redR, value, blueB);
  let hslResultBlue = rgbToHsl(redR, greenG, value);
  let hsvResultRed = rgbToHsv(value, greenG, blueB);
  let hsvResultGreen = rgbToHsv(redR, value, blueB);
  let hsvResultBlue = rgbToHsv(redR, greenG, value);

  if (name === "red") {
    preview.style.backgroundColor = `rgb(${value},${greenG},${blueB})`;
    rgbText.innerHTML = `rgb(${value},${greenG},${blueB})`;
    hexText.innerHTML = redHex;
    hslText.innerHTML = `hsl(${(hslResultRed[0] * 360).toFixed(0)}°, ${(
      hslResultRed[1] * 100
    ).toFixed(0)}%, ${(hslResultRed[2] * 100).toFixed(0)}%)`;
    hsvText.innerHTML = `hsv(${(hsvResultRed[0] * 360).toFixed(0)}°, ${(
      hsvResultRed[1] * 100
    ).toFixed(0)}%, ${(hsvResultRed[2] * 100).toFixed(0)}%)`;
    hue.value = (hsvResultRed[0] * 360).toFixed(0);
    hsvSat.value = (hsvResultRed[1] * 100).toFixed(0);
    hsvValue.value = (hsvResultRed[2] * 100).toFixed(0);
    hslSat.value = (hslResultRed[1] * 100).toFixed(0);
    hslLight.value = (hslResultRed[2] * 100).toFixed(0);
    fillGradient();
  } else if (name === "green") {
    preview.style.backgroundColor = `rgb(${redR},${value},${blueB})`;
    rgbText.innerHTML = `rgb(${redR},${value},${blueB})`;
    hexText.innerHTML = greenHex;
    hslText.innerHTML = `hsl(${(hslResultGreen[0] * 360).toFixed(0)}°, ${(
      hslResultGreen[1] * 100
    ).toFixed(0)}%, ${(hslResultGreen[2] * 100).toFixed(0)}%)`;
    hsvText.innerHTML = `hsv(${(hsvResultGreen[0] * 360).toFixed(0)}°, ${(
      hsvResultGreen[1] * 100
    ).toFixed(0)}%, ${(hsvResultGreen[2] * 100).toFixed(0)}%)`;
    hue.value = (hsvResultGreen[0] * 360).toFixed(0);
    hsvSat.value = (hsvResultGreen[1] * 100).toFixed(0);
    hsvValue.value = (hsvResultGreen[2] * 100).toFixed(0);
    hslSat.value = (hslResultGreen[1] * 100).toFixed(0);
    hslLight.value = (hslResultGreen[2] * 100).toFixed(0);
    fillGradient();
  } else if (name === "blue") {
    preview.style.backgroundColor = `rgb(${redR},${greenG},${value})`;
    rgbText.innerHTML = `rgb(${redR},${greenG},${value})`;
    hexText.innerHTML = blueHex;
    hslText.innerHTML = `hsl(${(hslResultBlue[0] * 360).toFixed(0)}°, ${(
      hslResultBlue[1] * 100
    ).toFixed(0)}%, ${(hslResultBlue[2] * 100).toFixed(0)}%)`;
    hsvText.innerHTML = `hsv(${(hsvResultBlue[0] * 360).toFixed(0)}°, ${(
      hsvResultBlue[1] * 100
    ).toFixed(0)}%, ${(hsvResultBlue[2] * 100).toFixed(0)}%)`;
    hue.value = (hsvResultBlue[0] * 360).toFixed(0);
    hsvSat.value = (hsvResultBlue[1] * 100).toFixed(0);
    hsvValue.value = (hsvResultBlue[2] * 100).toFixed(0);
    hslSat.value = (hslResultBlue[1] * 100).toFixed(0);
    hslLight.value = (hslResultBlue[2] * 100).toFixed(0);
    fillGradient();
  } else if (name === "hue") {
    preview.style.backgroundColor = `hsl(${value},${hslSatV}%,${hslLightV}%)`;
    hslText.innerHTML = `hsl(${value}°,${hslSatV}%,${hslLightV}%)`;
    rgbText.innerHTML = `rgb(${rgbResultHue[0].toFixed(
      0
    )},${rgbResultHue[1].toFixed(0)},${rgbResultHue[2].toFixed(0)});`;
    red.value = rgbResultHue[0];
    green.value = rgbResultHue[1];
    blue.value = rgbResultHue[2];
    hsvText.innerHTML = `hsv(${(hsvResultHue[0] * 360).toFixed(0)}°, ${(
      hsvResultHue[1] * 100
    ).toFixed(0)}%, ${(hsvResultHue[2] * 100).toFixed(0)}%);`;
    hsvSat.value = (hsvResultHue[1] * 100).toFixed(0);
    hsvValue.value = (hsvResultHue[2] * 100).toFixed(0);
    hexText.innerHTML = `#${hexToTwo(Number(red.value).toString(16))}${hexToTwo(
      Number(green.value).toString(16)
    )}${hexToTwo(Number(blue.value).toString(16))}`;
  } else if (name === "hsl-saturation") {
    preview.style.backgroundColor = `hsl(${hueV},${value}%,${hslLightV}%)`;
    hslText.innerHTML = `hsl(${hueV}°,${value}%,${hslLightV}%)`;
    rgbText.innerHTML = `rgb(${rgbResultSat[0].toFixed(
      0
    )},${rgbResultSat[1].toFixed(0)},${rgbResultSat[2].toFixed(0)});`;
    red.value = rgbResultSat[0];
    green.value = rgbResultSat[1];
    blue.value = rgbResultSat[2];
    hsvText.innerHTML = `hsv(${(hsvResultSat[0] * 360).toFixed(0)}°, ${(
      hsvResultSat[1] * 100
    ).toFixed(0)}%, ${(hsvResultSat[2] * 100).toFixed(0)}%);`;
    hsvSat.value = (hsvResultSat[1] * 100).toFixed(0);
    hsvValue.value = (hsvResultSat[2] * 100).toFixed(0);
    hexText.innerHTML = `#${hexToTwo(Number(red.value).toString(16))}${hexToTwo(
      Number(green.value).toString(16)
    )}${hexToTwo(Number(blue.value).toString(16))}`;
  } else if (name === "hsl-lightness") {
    preview.style.backgroundColor = `hsl(${hueV},${hslSatV}%,${value}%)`;
    hslText.innerHTML = `hsl(${hueV}°,${hslSatV}%,${value}%)`;
    rgbText.innerHTML = `rgb(${rgbResultLight[0].toFixed(
      0
    )},${rgbResultLight[1].toFixed(0)},${rgbResultLight[2].toFixed(0)});`;
    red.value = rgbResultLight[0];
    green.value = rgbResultLight[1];
    blue.value = rgbResultLight[2];
    hsvText.innerHTML = `hsv(${(hsvResultLight[0] * 360).toFixed(0)}°, ${(
      hsvResultLight[1] * 100
    ).toFixed(0)}%, ${(hsvResultLight[2] * 100).toFixed(0)}%);`;
    hsvSat.value = (hsvResultLight[1] * 100).toFixed(0);
    hsvValue.value = (hsvResultLight[2] * 100).toFixed(0);
    hexText.innerHTML = `#${hexToTwo(Number(red.value).toString(16))}${hexToTwo(
      Number(green.value).toString(16)
    )}${hexToTwo(Number(blue.value).toString(16))}`;
  } else if (name === "hsv-saturation") {
    hsvText.innerHTML = `hsv(${hueV}°,${value}%,${hsvValueV}%)`;
    rgbText.innerHTML = `rgb(${rgbResultSatV[0].toFixed(
      0
    )},${rgbResultSatV[1].toFixed(0)}, ${rgbResultSatV[2].toFixed(0)})`;
    red.value = rgbResultSatV[0];
    green.value = rgbResultSatV[1];
    blue.value = rgbResultSatV[2];
    preview.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    hexText.innerHTML = `#${hexToTwo(Number(red.value).toString(16))}${hexToTwo(
      Number(green.value).toString(16)
    )}${hexToTwo(Number(blue.value).toString(16))}`;
    hslSat.value = (
      rgbToHsl(red.value, green.value, blue.value)[1] * 100
    ).toFixed(0);
    hslLight.value = (
      rgbToHsl(red.value, green.value, blue.value)[2] * 100
    ).toFixed(0);
    hslText.innerHTML = `hsl(${hueV}°,${hslSat.value}%,${hslLight.value}%)`;
  } else if (name === "hsv-value") {
    hsvText.innerHTML = `hsv(${hueV}°,${hsvSatV}%,${value}%)`;
    rgbText.innerHTML = `rgb(${rgbResultValue[0].toFixed(
      0
    )},${rgbResultValue[1].toFixed(0)}, ${rgbResultValue[2].toFixed(0)})`;
    red.value = rgbResultValue[0];
    green.value = rgbResultValue[1];
    blue.value = rgbResultValue[2];
    preview.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    hexText.innerHTML = `#${hexToTwo(Number(red.value).toString(16))}${hexToTwo(
      Number(green.value).toString(16)
    )}${hexToTwo(Number(blue.value).toString(16))}`;
    hslSat.value = (
      rgbToHsl(red.value, green.value, blue.value)[1] * 100
    ).toFixed(0);
    hslLight.value = (
      rgbToHsl(red.value, green.value, blue.value)[2] * 100
    ).toFixed(0);
    hslText.innerHTML = `hsl(${hueV}°,${hslSat.value}%,${hslLight.value}%)`;
  }
};

const changeBGColor = () => {
  let randR = Math.floor(Math.random() * 255 + 1);
  let randG = Math.floor(Math.random() * 255 + 1);
  let randB = Math.floor(Math.random() * 255 + 1);
  // let randA = Math.random();
  let hslResult = rgbToHsl(randR, randG, randB);
  let hsvResult = rgbToHsv(randR, randG, randB);

  preview.style.backgroundColor = `rgb(${randR},${randG},${randB})`;
  rgbText.innerHTML = `rgb(${randR},${randG},${randB})`;
  hexText.innerHTML = `#${hexToTwo(randR.toString(16))}${hexToTwo(
    randG.toString(16)
  )}${hexToTwo(randB.toString(16))}`;
  hslText.innerHTML = `hsl(${(hslResult[0] * 360).toFixed(0)}°, ${(
    hslResult[1] * 100
  ).toFixed(0)}%, ${(hslResult[2] * 100).toFixed(0)}%)`;
  hsvText.innerHTML = `hsv(${(hsvResult[0] * 360).toFixed(0)}°, ${(
    hsvResult[1] * 100
  ).toFixed(0)}%, ${(hsvResult[2] * 100).toFixed(0)}%)`;
  hue.value = (hsvResult[0] * 360).toFixed(0);
  hsvSat.value = (hsvResult[1] * 100).toFixed(0);
  hsvValue.value = (hsvResult[2] * 100).toFixed(0);
  hslSat.value = (hslResult[1] * 100).toFixed(0);
  hslLight.value = (hslResult[2] * 100).toFixed(0);
  red.value = randR;
  green.value = randG;
  blue.value = randB;
  alpha.value = 100;
  fillGradient();
};

const addAlpha = (event) => {
  preview.style.opacity = event.target.value;
};

const mouseDown = (e) => {
  drag = true;
  changeColor(e);
};

const mouseMove = (e) => {
  if (e.offsetY > 180 || e.offsetX > 400) {
    e.target.style.cursor = "url(images/pointer.png) 16 16, auto";
  } else {
    e.target.style.cursor = "url(images/pointer1.png) 16 16, auto";
  }

  if (drag) {
    changeColor(e);
  }
};

const mouseUp = (e) => {
  drag = false;
};

const changeColor = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  let imageData = ctx.getImageData(x, y, 1, 1).data;

  rgbColor = `rgb(${imageData[0]},${imageData[1]},${imageData[2]})`;

  preview.style.backgroundColor = rgbColor;
  red.value = imageData[0];
  green.value = imageData[1];
  blue.value = imageData[2];
  rgbText.innerHTML = `rgb(${imageData[0]},${imageData[1]},${imageData[2]})`;
  let hslResult = rgbToHsl(red.value, green.value, blue.value);
  let hsvResult = rgbToHsv(red.value, green.value, blue.value);
  hue.value = (hsvResult[0] * 360).toFixed(0);
  hsvSat.value = (hsvResult[1] * 100).toFixed(0);
  hsvValue.value = (hsvResult[2] * 100).toFixed(0);
  hslSat.value = (hslResult[1] * 100).toFixed(0);
  hslLight.value = (hslResult[2] * 100).toFixed(0);
  hexText.innerHTML = `#${hexToTwo(Number(red.value).toString(16))}${hexToTwo(
    Number(green.value).toString(16)
  )}${hexToTwo(Number(blue.value).toString(16))}`;
  hslText.innerHTML = `hsl(${(hslResult[0] * 360).toFixed(0)}°, ${(
    hslResult[1] * 100
  ).toFixed(0)}%, ${(hslResult[2] * 100).toFixed(0)}%)`;
  hsvText.innerHTML = `hsv(${(hsvResult[0] * 360).toFixed(0)}°, ${(
    hsvResult[1] * 100
  ).toFixed(0)}%, ${(hsvResult[2] * 100).toFixed(0)}%)`;
};

const saveColor = (event) => {
  if (event.target.style.backgroundColor === "") {
    event.target.style.backgroundColor = `${preview.style.backgroundColor}`;
    swatchToRow();
  } else {
    preview.style.backgroundColor = event.target.style.backgroundColor;
    let num = preview.style.backgroundColor
      .substring(4, preview.style.backgroundColor.length - 1)
      .split(",");
    red.value = Number(num[0]);
    green.value = Number(num[1]);
    blue.value = Number(num[2]);
    rgbText.innerHTML = `rgb(${num[0]},${num[1]},${num[2]})`;
    let hslResult = rgbToHsl(num[0], num[1], num[2]);
    let hsvResult = rgbToHsv(red.value, green.value, blue.value);
    hue.value = (hsvResult[0] * 360).toFixed(0);
    hsvSat.value = (hsvResult[1] * 100).toFixed(0);
    hsvValue.value = (hsvResult[2] * 100).toFixed(0);
    hslSat.value = (hslResult[1] * 100).toFixed(0);
    hslLight.value = (hslResult[2] * 100).toFixed(0);
    hexText.innerHTML = `#${hexToTwo(red.value.toString(16))}${hexToTwo(
      green.value.toString(16)
    )}${hexToTwo(blue.value.toString(16))}`;
    hslText.innerHTML = `hsl(${(hslResult[0] * 360).toFixed(0)}°, ${(
      hslResult[1] * 100
    ).toFixed(0)}%, ${(hslResult[2] * 100).toFixed(0)}%)`;
    hsvText.innerHTML = `hsv(${(hsvResult[0] * 360).toFixed(0)}°, ${(
      hsvResult[1] * 100
    ).toFixed(0)}%, ${(hsvResult[2] * 100).toFixed(0)}%)`;
    fillGradient();
  }
};

const addNewSwatch = (event) => {
  let newSwatch = document.createElement("div");
  newSwatch.classList.add("swatches");
  newSwatch.addEventListener("click", saveColor);
  newSwatch.addEventListener("dblclick", resetSwatch);
  newSwatch.addEventListener("contextmenu", replaceColor);
  swatchContainer.insertBefore(
    newSwatch,
    swatchContainer.childNodes[swatchContainer.childNodes.length - 2]
  );
  swatchToRow();
};

const resetSwatch = (event) => {
  event.target.style.backgroundColor = "";
  swatchToRow();
};

const replaceColor = (event) => {
  event.preventDefault();
  event.target.style.backgroundColor = `${preview.style.backgroundColor}`;
  swatchToRow();
};

const clearSwatchRows = () => {
  tBody.innerHTML = `<tbody></tbody>`;
};

const makeSwatchRow = (swatch) => {
  let num = swatch.style.backgroundColor
    .substring(4, swatch.style.backgroundColor.length - 1)
    .split(",");
  red.value = Number(num[0]);
  green.value = Number(num[1]);
  blue.value = Number(num[2]);
  let hslResult = rgbToHsl(num[0], num[1], num[2]);
  let hsvResult = rgbToHsv(red.value, green.value, blue.value);
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
   <tr class='new-row'> 
   <td class='color-column' style='background-color:${
     swatch.style.backgroundColor
   }'> </td>
   <td class='hex-column'> #${hexToTwo(
     Number(red.value).toString(16)
   )}${hexToTwo(Number(green.value).toString(16))}${hexToTwo(
    Number(blue.value).toString(16)
  )} </td>
   <td class='rgb-column'> ${swatch.style.backgroundColor}</td>
   <td class='hsl-column'> hsl(${(hslResult[0] * 360).toFixed(0)}°, ${(
    hslResult[1] * 100
  ).toFixed(0)}%, ${(hslResult[2] * 100).toFixed(0)}%)</td>
   <td class='hsv-column'> hsv(${(hsvResult[0] * 360).toFixed(0)}°, ${(
    hsvResult[1] * 100
  ).toFixed(0)}%, ${(hsvResult[2] * 100).toFixed(0)}%)</td>
   </tr>
   `;

  tBody.appendChild(newRow);
  checkButtons();
};
const checkButtons = () => {
  let colorColumn = document.querySelectorAll(".color-column");
  let hexColumn = document.querySelectorAll(".hex-column");
  let rgbColumn = document.querySelectorAll(".rgb-column");
  let hslColumn = document.querySelectorAll(".hsl-column");
  let hsvColumn = document.querySelectorAll(".hsv-column");

  buttons.forEach((button) => {
    if ([...button.classList].includes("off")) {
      if ([...button.classList].includes("color-button")) {
        colorColumn.forEach((color) => {
          color.style.display = "none";
        });
      } else if ([...button.classList].includes("hex-button")) {
        hexColumn.forEach((color) => {
          color.style.display = "none";
        });
      } else if ([...button.classList].includes("rgb-button")) {
        rgbColumn.forEach((color) => {
          color.style.display = "none";
        });
      } else if ([...button.classList].includes("hsl-button")) {
        hslColumn.forEach((color) => {
          color.style.display = "none";
        });
      } else if ([...button.classList].includes("hsv-button")) {
        hsvColumn.forEach((color) => {
          color.style.display = "none";
        });
      }
    }
  });
};

const swatchToRow = () => {
  clearSwatchRows();
  document.querySelectorAll(".swatches").forEach((swatch) => {
    if (swatch.style.backgroundColor !== "") {
      makeSwatchRow(swatch);
    }
  });
};

const buttonFunctions = (event) => {
  let colorButton = document.querySelector(".color-button");
  let hexButton = document.querySelector(".hex-button");
  let rgbButton = document.querySelector(".rgb-button");
  let hslButton = document.querySelector(".hsl-button");
  let hsvButton = document.querySelector(".hsv-button");

  let colorColumn = document.querySelectorAll(".color-column");
  let hexColumn = document.querySelectorAll(".hex-column");
  let rgbColumn = document.querySelectorAll(".rgb-column");
  let hslColumn = document.querySelectorAll(".hsl-column");
  let hsvColumn = document.querySelectorAll(".hsv-column");

  if ([...event.target.classList].includes("off")) {
    event.target.classList.remove("off");
    event.target.classList.add("on");
    if (event.target === colorButton) {
      colorColumn.forEach((color) => {
        color.style.display = "";
      });
    } else if (event.target === hexButton) {
      hexColumn.forEach((color) => {
        color.style.display = "";
      });
    } else if (event.target === rgbButton) {
      rgbColumn.forEach((color) => {
        color.style.display = "";
      });
    } else if (event.target === hslButton) {
      hslColumn.forEach((color) => {
        color.style.display = "";
      });
    } else if (event.target === hsvButton) {
      hsvColumn.forEach((color) => {
        color.style.display = "";
      });
    }
  } else {
    event.target.classList.remove("on");
    event.target.classList.add("off");
    if (event.target === colorButton) {
      colorColumn.forEach((color) => {
        color.style.display = "none";
      });
    } else if (event.target === hexButton) {
      hexColumn.forEach((color) => {
        color.style.display = "none";
      });
    } else if (event.target === rgbButton) {
      rgbColumn.forEach((color) => {
        color.style.display = "none";
      });
    } else if (event.target === hslButton) {
      hslColumn.forEach((color) => {
        color.style.display = "none";
      });
    } else if (event.target === hsvButton) {
      hsvColumn.forEach((color) => {
        color.style.display = "none";
      });
    }
  }
};

const setupCanvas = () => {
  getCanvasWidthHeight();
  preview.style.backgroundColor = `hsla(${hue.value},100%,50%,1)`;
  fillGradient();
};

red.addEventListener("input", sliders);
green.addEventListener("input", sliders);
blue.addEventListener("input", sliders);
random.addEventListener("click", changeBGColor);
alpha.addEventListener("input", addAlpha);
hue.addEventListener("input", sliders);
hslSat.addEventListener("input", sliders);
hslLight.addEventListener("input", sliders);
hsvSat.addEventListener("input", sliders);
hsvValue.addEventListener("input", sliders);
hue.addEventListener("input", fillGradient);
canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener("mouseup", mouseUp, false);
canvas.addEventListener("mousemove", mouseMove, false);

swatches.forEach((swatch) => {
  swatch.addEventListener("click", saveColor);
  swatch.addEventListener("dblclick", resetSwatch);
  swatch.addEventListener("contextmenu", replaceColor);
});

addSwatch.addEventListener("click", addNewSwatch);

buttons.forEach((button) => {
  button.addEventListener("click", buttonFunctions);
});

window.addEventListener("resize", setupCanvas);

// Initial Canvas Draw
setupCanvas();
