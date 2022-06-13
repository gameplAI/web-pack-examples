function getAttribute(attributeName) {
  return window.frameElement.parentElement.getAttribute(attributeName);
}

function hasAttribute(attributeName){
  return window.frameElement.parentElement.hasAttribute(attributeName);
}

function getOnBetSelected(betId, optionId, odds, subOptionId, playerSelected) {
  var fun = window.frameElement.parentElement.onBetSelected;
  if (fun) {
    fun(betId, optionId, odds, subOptionId, playerSelected);
  }
}

function getStyle() {
  return getComputedStyle(window.frameElement.parentElement);
}

function getTextHighlightColor() {
  var property = getStyle().getPropertyValue('--text-highlight-color');
  return toRGB(property);
}

function getTextFocusColor() {
  var property = getStyle().getPropertyValue('--text-player-color');
  return toRGB(property);
}

function getTextErrorColor() {
  var property = getStyle().getPropertyValue('--text-error-color');
  return toRGB(property);
}

function getBoxColor() {
  var property = getStyle().getPropertyValue('--box-color');
  return toRGB(property);
}

function getOddsFontSize() {
  return getStyle().getPropertyValue('--odds-font-size');
}

function toRGB(property) {
  property = property.trim();
  if (property.includes('rgb')) {
    return RGBToRGB(property);
  } else if (property.includes('#')) {
    return hexToRGB(property);
  } else if (property.includes('hsla')) {
    return HSLAToRGBA(property);
  } else if (property.includes('hsl')) {
    return HSLToRGB(property);
  } else if (property.trim().length > 0){
    return nameToRGB(property);
  }
}

function RGBToRGB(property) {
  if (property.includes('%')) {
    if(property.includes('rgba')) {
      property = property.substr(5);
      property = property.split(')')[0];
      property = property.replaceAll(/\s/g, "");
      property = property.replaceAll("%", "");
      const parts = property.split(',');
      let r = Math.round(parts[0] * 255 / 100);
      let g = Math.round(parts[1] * 255 / 100);
      let b = Math.round(parts[2] * 255 / 100);
      let a = parts[3];
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a +  ')';
    } else {
      property = property.substr(4);
      property = property.split(')')[0];
      property = property.replaceAll(/\s/g, "");
      property = property.replaceAll("%", "");
      const parts = property.split(',');
      let r = Math.round(parts[0] * 255 / 100);
      let g = Math.round(parts[1] * 255 / 100);
      let b = Math.round(parts[2] * 255 / 100);
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  } else {
    return property;
  }
}

function hexToRGB(h) {
  let r = 0, g = 0, b = 0, a = 255;

  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    
  } else if (h.length == 5) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    a = "0x" + h[4] + h[4];
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  } else if (h.length == 9) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    a = "0x" + h[7] + h[8];
  }
  a = +(a / 255).toFixed(3);
  
  if (h.length === 4 || h.length === 7) {
    return "rgb(" +  +r + "," + +g + "," + +b + ")";
  } else {
    return "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
  }

}

function HSLToRGB(hsl) {
  let sep = hsl.indexOf(",") > -1 ? "," : " ";
  hsl = hsl.substr(4).split(")")[0].split(sep);

  let h = hsl[0],
      s = hsl[1].substr(0,hsl[1].length - 1) / 100,
      l = hsl[2].substr(0,hsl[2].length - 1) / 100;

  // Strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1) 
    h = h.substr(0,h.length - 3);
  else if (h.indexOf("rad") > -1)
    h = Math.round(h.substr(0,h.length - 3) * (180 / Math.PI));
  else if (h.indexOf("turn") > -1)
    h = Math.round(h.substr(0,h.length - 4) * 360);
  // Keep hue fraction of 360 if ending up over
  if (h >= 360)
  h %= 360;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
}

function HSLAToRGBA(hsla) {
  let sep = hsla.indexOf(",") > -1 ? "," : " ";
  hsla = hsla.substr(5).split(")")[0].split(sep);

  if (hsla.indexOf("/") > -1)
    hsla.splice(3,1);

  let h = hsla[0],
      s = hsla[1].substr(0,hsla[1].length - 1) / 100,
      l = hsla[2].substr(0,hsla[2].length - 1) / 100,
      a = hsla[3];
        
  if (h.indexOf("deg") > -1)
    h = h.substr(0,h.length - 3);
  else if (h.indexOf("rad") > -1)
    h = Math.round(h.substr(0,h.length - 3) * (180 / Math.PI));
  else if (h.indexOf("turn") > -1)
    h = Math.round(h.substr(0,h.length - 4) * 360);
  if (h >= 360)
    h %= 360;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

    
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function nameToRGB(name) {
  // Create fake div
  let fakeDiv = document.createElement("div");
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  // Get color of div
  let cs = window.getComputedStyle(fakeDiv),
      pv = cs.getPropertyValue("color");

  // Remove div after obtaining desired color value
  document.body.removeChild(fakeDiv);

  return pv;
}