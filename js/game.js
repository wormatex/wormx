var v9;
var f13;
var v11;
var v12;
var v13;
var v14;
var v15;
var v16;
var v17;
var v18;
var v19;
var v20;
var v21;
var v22;
var v23;
var v24;
var v25;
var v26;
var v27;
var v28;
var v29;
var v30;
var v31;
var v32;
var v33;
var v34;
var v35;
var v36;
var v37;
var v38;
var v39;
var v40;
var v41;
var v42;
var f12;
var v44;
var v45;
var v46;
var v47;
var v48 = this && this.__extends || function () {
  function f2(p3, p4) {
    return (f2 = Object.setPrototypeOf || {
      "__proto__": []
    } instanceof Array && function (p5, p6) {
      p5.__proto__ = p6;
    } || function (p7, p8) {
      for (var v49 in p8) {
        if (Object.prototype.hasOwnProperty.call(p8, v49)) {
          p7[v49] = p8[v49];
        }
      }
    })(p3, p4);
  }
  return function (p9, p10) {
    if (typeof p10 != "function" && p10 !== null) {
      throw TypeError("Class extends value " + String(p10) + " is not a constructor or null");
    }
    function f3() {
      this.constructor = p9;
    }
    f2(p9, p10);
    p9.prototype = p10 === null ? Object.create(p10) : (f3.prototype = p10.prototype, new f3());
  };
}();
function f4(p11) {
  if (!p11 || !p11.Hc || !p11.Hc.baseTexture) {
    console.warn("⚠️ Geçersiz doku veya baseTexture bulunamadı. Optimizasyon atlandı.");
    return;
  }
  const v50 = p11.Hc.baseTexture;
  const v51 = v50.cacheId || v50.resource?.url || v50.resource?.source?.src || "";
  if (!v51 || window._alreadyScaledWormTextures.has(v51)) {
    return;
  }
  try {
    if (v51.includes("100300_portions.png") && v50.resolution > 0.025) {
      v50.resolution = 0.025;
      console.log("🛠️ Çözünürlük ayarlandı (" + v50.resolution + "): " + v51);
    }
    if ("mipmap" in v50) {
      v50.mipmap = false;
    } else if ("mipmap" in v50.baseTexture) {
      v50.baseTexture.mipmap = false;
    }
    if ("anisotropicLevel" in v50) {
      v50.anisotropicLevel = 1;
    } else if ("anisotropicLevel" in v50.baseTexture) {
      v50.baseTexture.anisotropicLevel = 1;
    }
    if (v50.width > 1024 || v50.height > 1024) {
      const v52 = 1024 / v50.width;
      const v53 = 1024 / v50.height;
      const v54 = Math.min(v52, v53);
      if (v50.setSize) {
        v50.setSize(v50.width * v54, v50.height * v54);
      } else if (v50.resource?.source instanceof HTMLImageElement) {
        v50.resource.source.width *= v54;
        v50.resource.source.height *= v54;
      }
      console.log("🔧 Resim ölçeklendi (" + Math.round(v54 * 100) + "%): " + v51);
    }
    if (v50.isPowerOfTwo && !v51.includes("atlas") && !v51.includes("sprite")) {
      v50.isPowerOfTwo = false;
    }
    if (v50.destroyed || v50.resource?.destroyed) {
      v50.destroy(true);
      console.log("🗑️ Doku geçersiz durumda olduğu için yok edildi: " + v51);
    }
    window._alreadyScaledWormTextures.add(v51);
    console.log("✅ Optimizasyon tamamlandı: " + v51);
  } catch (e3) {
    console.error("❌ Doku optimize edilirken hata oluştu: " + v51, e3);
  }
}
(function (p12) {
  var v55;
  var v56;
  v55 = true;
  var vF3 = function (p13, p14) {
    var v57 = v55 ? function () {
      if (p14) {
        var v58 = p14.apply(p13, arguments);
        p14 = null;
        return v58;
      }
    } : function () {};
    v55 = false;
    return v57;
  }(this, function () {
    return vF3.toString().search("(((.+)+)+)+$").toString().constructor(vF3).search("(((.+)+)+)+$");
  });
  vF3();
  var v59;
  v56 = true;
  function f5(p15, p16) {
    var v60 = v56 ? function () {
      if (p16) {
        var v61 = p16.apply(p15, arguments);
        p16 = null;
        return v61;
      }
    } : function () {};
    v56 = false;
    return v60;
  }
  (function () {
    f5(this, function () {
      var vRegExp = RegExp("function *\\( *\\)");
      var vRegExp2 = RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      var v_0x3797b0 = f161("init");
      if (vRegExp.test(v_0x3797b0 + "chain") && vRegExp2.test(v_0x3797b0 + "input")) {
        f161();
      } else {
        v_0x3797b0("0");
      }
    })();
  })();
  v59 = true;
  function f6(p17, p18) {
    var v62 = v59 ? function () {
      if (p18) {
        var v63 = p18.apply(p17, arguments);
        p18 = null;
        return v63;
      }
    } : function () {};
    v59 = false;
    return v62;
  }
  f6(this, function () {
    try {
      var v64;
      v64 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (e4) {
      v64 = window;
    }
    var v65 = v64.console = v64.console || {};
    var vA2 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var vLN02 = 0; vLN02 < vA2.length; vLN02++) {
      var v66 = f6.constructor.prototype.bind(f6);
      var v67 = vA2[vLN02];
      var v68 = v65[v67] || v66;
      v66.__proto__ = f6.bind(f6);
      v66.toString = v68.toString.bind(v68);
      v65[v67] = v66;
    }
  })();
  p12.LEFT = "left";
  p12.TOP = "top";
  p12.BOTTOM = "bottom";
  p12.RIGHT = "right";
  p12.TOP_LEFT = "top_left";
  p12.TOP_RIGHT = "top_right";
  p12.BOTTOM_LEFT = "bottom_left";
  p12.BOTTOM_RIGHT = "bottom_right";
})(v9 = {});
var vF4 = function (p19) {
  function f7(p20) {
    var v69 = p19.call(this) || this;
    v69.outerRadius = 0;
    v69.innerRadius = 0;
    v69.innerAlphaStandby = 0.5;
    v69.settings = Object.assign({
      outerScale: {
        x: 1,
        y: 1
      },
      innerScale: {
        x: 1,
        y: 1
      }
    }, p20);
    if (!v69.settings.outer) {
      var v70 = new PIXI.Graphics();
      v70.beginFill(16711680);
      v70.drawCircle(0, 0, 60);
      v70.alpha = 0.5;
      v69.settings.outer = v70;
    }
    if (!v69.settings.inner) {
      var v71 = new PIXI.Graphics();
      v71.beginFill(16711680);
      v71.drawCircle(0, 0, 35);
      v71.alpha = v69.innerAlphaStandby;
      v69.settings.inner = v71;
    }
    v69.initialize();
    return v69;
  }
  v48(f7, p19);
  f7.prototype.initialize = function () {
    this.outer = this.settings.outer;
    this.inner = this.settings.inner;
    this.outer.scale.set(this.settings.outerScale.x, this.settings.outerScale.y);
    this.inner.scale.set(this.settings.innerScale.x, this.settings.innerScale.y);
    if ("anchor" in this.outer) {
      this.outer.anchor.set(0.5);
    }
    if ("anchor" in this.inner) {
      this.inner.anchor.set(0.5);
    }
    this.addChild(this.outer);
    this.addChild(this.inner);
    this.outerRadius = this.width / 2.5;
    this.innerRadius = this.inner.width / 2;
    this.bindEvents();
  };
  f7.prototype.bindEvents = function () {
    var v72;
    var v73;
    var v74;
    var vThis = this;
    this.interactive = true;
    var v75 = false;
    this.onDragStart = function (p21) {
      var v76;
      var v77;
      v72 = p21;
      v74 = this.toLocal(v72);
      v75 = true;
      vThis.inner.alpha = 1;
      if ((v77 = (v76 = vThis.settings).onStart) !== null && v77 !== undefined) {
        v77.call(v76);
      }
    };
    this.onDragEnd = function (p22) {
      var v78;
      var v79;
      if (v75 != false) {
        vThis.inner.position.set(0, 0);
        v75 = false;
        vThis.inner.alpha = vThis.innerAlphaStandby;
        if ((v79 = (v78 = vThis.settings).onEnd) !== null && v79 !== undefined) {
          v79.call(v78);
        }
      }
    };
    this.onDragMove = function (p23) {
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 2;
      if (v75 != false) {
        var v80;
        var v81;
        var v82;
        var v83;
        var v84;
        var v85;
        var v86 = this.toLocal(p23);
        var v87 = v86.x - v74.x;
        var v88 = v86.y - v74.y;
        var v89 = new PIXI.Point(0, 0);
        var vLN03 = 0;
        if (v87 != 0 || v88 != 0) {
          var vLN04 = 0;
          vLN04 = v87 * v87 + v88 * v88 >= vThis.outerRadius * vThis.outerRadius ? vThis.outerRadius : vThis.outerRadius - vThis.innerRadius;
          var v90 = v9.LEFT;
          if (v87 == 0) {
            if (v88 > 0) {
              v89.set(0, v88 > vThis.outerRadius ? vThis.outerRadius : v88);
              vLN03 = 270;
              v90 = v9.BOTTOM;
            } else {
              v89.set(0, -(Math.abs(v88) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v88)));
              vLN03 = 90;
              v90 = v9.TOP;
            }
            vThis.inner.position.set(v89.x, v89.y);
            v73 = vThis.getPower(v89);
            if ((v81 = (v80 = vThis.settings).onChange) !== null && v81 !== undefined) {
              v81.call(v80, {
                angle: vLN03,
                direction: v90,
                power: v73
              });
            }
            return;
          }
          if (v88 == 0) {
            if (v87 > 0) {
              v89.set(Math.abs(v87) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v87), 0);
              vLN03 = 0;
              v90 = v9.LEFT;
            } else {
              v89.set(-(Math.abs(v87) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v87)), 0);
              vLN03 = 180;
              v90 = v9.RIGHT;
            }
            vThis.inner.position.set(v89.x, v89.y);
            v73 = vThis.getPower(v89);
            if ((v83 = (v82 = vThis.settings).onChange) !== null && v83 !== undefined) {
              v83.call(v82, {
                angle: vLN03,
                direction: v90,
                power: v73
              });
            }
            return;
          }
          var v91 = Math.atan(Math.abs(v88 / v87));
          vLN03 = v91 * 180 / Math.PI;
          var vLN05 = 0;
          var vLN06 = 0;
          if (v87 * v87 + v88 * v88 >= vThis.outerRadius * vThis.outerRadius) {
            vLN05 = vThis.outerRadius * Math.cos(v91);
            vLN06 = vThis.outerRadius * Math.sin(v91);
          } else {
            vLN05 = Math.abs(v87) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v87);
            vLN06 = Math.abs(v88) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v88);
          }
          if (v88 < 0) {
            vLN06 = -Math.abs(vLN06);
          }
          if (v87 < 0) {
            vLN05 = -Math.abs(vLN05);
          }
          if (!(v87 > 0) || !(v88 < 0)) {
            if (v87 < 0 && v88 < 0) {
              vLN03 = 180 - vLN03;
            } else if (v87 < 0 && v88 > 0) {
              vLN03 += 180;
            } else if (v87 > 0 && v88 > 0) {
              vLN03 = 360 - vLN03;
            }
          }
          v89.set(vLN05, vLN06);
          v73 = vThis.getPower(v89);
          v90 = vThis.getDirection(v89);
          vThis.inner.position.set(v89.x, v89.y);
          if ((v85 = (v84 = vThis.settings).onChange) !== null && v85 !== undefined) {
            v85.call(v84, {
              angle: vLN03,
              direction: v90,
              power: v73
            });
          }
        }
      }
    };
  };
  f7.prototype.getPower = function (p24) {
    var v92 = p24.x - 0;
    var v93 = p24.y - 0;
    return Math.min(1, Math.sqrt(v92 * v92 + v93 * v93) / this.outerRadius);
  };
  f7.prototype.getDirection = function (p25) {
    var v94 = Math.atan2(p25.y, p25.x);
    if (v94 >= -Math.PI / 8 && v94 < 0 || v94 >= 0 && v94 < Math.PI / 8) {
      return v9.RIGHT;
    } else if (v94 >= Math.PI / 8 && v94 < Math.PI * 3 / 8) {
      return v9.BOTTOM_RIGHT;
    } else if (v94 >= Math.PI * 3 / 8 && v94 < Math.PI * 5 / 8) {
      return v9.BOTTOM;
    } else if (v94 >= Math.PI * 5 / 8 && v94 < Math.PI * 7 / 8) {
      return v9.BOTTOM_LEFT;
    } else if (v94 >= Math.PI * 7 / 8 && v94 < Math.PI || v94 >= -Math.PI && v94 < Math.PI * -7 / 8) {
      return v9.LEFT;
    } else if (v94 >= Math.PI * -7 / 8 && v94 < Math.PI * -5 / 8) {
      return v9.TOP_LEFT;
    } else if (v94 >= Math.PI * -5 / 8 && v94 < Math.PI * -3 / 8) {
      return v9.TOP;
    } else {
      return v9.TOP_RIGHT;
    }
  };
  return f7;
}(PIXI.Container);
function v299(p26) {
  return (v299 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p27) {
    return typeof p27;
  } : function (p28) {
    if (p28 && typeof Symbol == "function" && p28.constructor === Symbol && p28 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p28;
    }
  })(p26);
}
var vO = {
  es: {
    opciones: "opciones",
    zoomVelocidad: "Zoom Velocidad",
    anchoPotenciador: "ancho del potenciador",
    auraPotenciador: "aura del potenciador",
    anchoComida: "ancho de la comida",
    brilloComida: "brillo de la comida",
    fondo: "fondo Solido",
    laser: "laser de cabeza",
    sectores: "sectores",
    colorJuego: "color del juego",
    colorLaser: "color del laser",
    colorBorde: "color del borde",
    copiar: "copiar",
    fondos: "fondos",
    fondo0: "por defecto",
    fondo1: "espacio",
    fondo2: "espacio 2",
    fondo3: "azul",
    fondo4: "espacio 3",
    skinVisible: "SkinVisible(Para publico)",
    soundTuto1: "descargar sonido",
    soundTuto2: "subir sonido",
    soundTuto3: "sonido link cabeza",
    soundTuto4: "sonido link 10cabezas"
  },
  en: {
    opciones: "settings",
    zoomVelocidad: "Zoom Speed",
    anchoPotenciador: "booster width",
    auraPotenciador: "power up glow",
    anchoComida: "size of food",
    brilloComida: "food shine",
    fondo: "Solid background",
    laser: "Center laser",
    sectores: "sectors",
    colorJuego: "game color",
    colorLaser: "laser color",
    colorBorde: "border color",
    copiar: "copy",
    fondos: "background",
    fondo0: "default",
    fondo1: "Green",
    fondo2: "Blue",
    fondo3: "Blue Black",
    fondo4: "Blue Light",
    skinVisible: "SkinVisible(For public)",
    soundTuto1: "download sounds",
    soundTuto2: "turn up sound",
    soundTuto3: "sound link head",
    soundTuto4: "sound link 10heads"
  },
  uk: {
    opciones: "Ayarlar",
    zoomVelocidad: "Yakınlaştırma Hızı",
    anchoPotenciador: "Güçlendirici Genişliği",
    auraPotenciador: "Güçlendirme Aurası",
    anchoComida: "Yem Boyutu",
    brilloComida: "Yem Parlaklığı",
    fondo: "Düz Arka Plan",
    laser: "Merkez Lazeri",
    sectores: "Sektörler",
    colorJuego: "Oyun Rengi",
    colorLaser: "Lazer Rengi",
    colorBorde: "Kenarlık Rengi",
    copiar: "Kopyala",
    fondos: "Arka Planlar",
    fondo0: "Varsayılan",
    fondo1: "Yeşil",
    fondo2: "Mavi",
    fondo3: "Mavi Siyah",
    fondo4: "Açık Mavi",
    skinVisible: "Skin Görünürlüğü (Herkese Açık)",
    soundTuto1: "Sesleri İndir",
    soundTuto2: "Sesi Aç",
    soundTuto3: "Kafa Ses Bağlantısı",
    soundTuto4: "10 Kafa Ses Bağlantısı"
  }
};
const vO2 = {
  isSkinCustom(p29) {
    var v95 = /[a-zA-Z]/;
    return typeof p29 == "string" && v95.test(p29);
  },
  testSkinCustom: function (p30) {
    if (vO2.isSkinCustom(p30)) {
      return 34;
    } else {
      return p30;
    }
  },
  testSkinMod: function (p31) {
    return p31 >= 399 && p31 < 999;
  },
  testWear: function (p32) {
    return p32 >= 399 && p32 < 999;
  },
  isNumberValid: function (p33) {
    return p33 !== "" && p33 != null && !isNaN(p33);
  },
  validInput: function (p34) {
    if ((!(p34 >= 399) || !(p34 < 999)) && !vO2.isSkinCustom(p34)) {
      return p34;
    }
    try {
      let v96 = $("#inputReplaceSkin").val();
      return encodeURI(v96 !== "" && v96 != null && !isNaN(v96) ? v96 : 35);
    } catch (e5) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var v97 = null;
var v98 = false;
var vLN55 = 55;
var vLN1 = 1;
var v99 = true;
let vFunction = Function("return PIXI;")();
let v100 = vFunction.Texture.from("https://i.imgur.com/12MgJyy.png");
let v101 = vFunction.Texture.from("https://i.imgur.com/DbWbUxD.png");
var vO3 = {
  zoom: "z",
  restart: "r",
  giro: "q",
  wormExplot: "r",
  laserHS: "l",
  sectores: "q",
  background: "c",
  noSkin: "1",
  noAuras: "2"
};
function f9(p35, p36) {
  if (vO3.hasOwnProperty(p35)) {
    vO3[p35] = p36;
  }
}
let vO4 = {
  teamColor: "FFFFFF",
  laserColor: "FFFFFF",
  colorFondo: "0D0400",
  colorBorde: "FF0000",
  hsTextColor: "ffa500",
  killTextColor: "ffa500",
  minimapBorderColor: "ffa500"
};
let v102;
v11 = 1;
let vA3 = [];
let v103 = performance.now();
var vA4 = ["https://asserts.wormworld.io/backgrounds/bkgnd0.png", "https://asserts.wormworld.io/backgrounds/bkgnd8.png", "https://asserts.wormworld.io/backgrounds/bkgnd9.png", "https://asserts.wormworld.io/backgrounds/bkgnd10.png", "https://asserts.wormworld.io/backgrounds/bkgnd6.png", "https://asserts.wormworld.io/backgrounds/bkgnd11.png", "https://asserts.wormworld.io/backgrounds/bg_sky_1.png", "https://asserts.wormworld.io/backgrounds/bg_sky_2.png", "https://asserts.wormworld.io/backgrounds/bg_sky_3.png", "https://asserts.wormworld.io/backgrounds/bg_sky_4.png", "https://asserts.wormworld.io/backgrounds/bg_sky_5.png", "https://asserts.wormworld.io/backgrounds/arena01.png", "https://asserts.wormworld.io/backgrounds/arena02.png", "https://asserts.wormworld.io/backgrounds/arena03.png", "https://asserts.wormworld.io/backgrounds/arena04.png", "https://i.imgur.com/5gWTgd3.png", "https://i.imgur.com/jTM50FE.png", "https://i.imgur.com/NvgYNlV.png"];
let v104 = localStorage.getItem("selectedBackground") ? parseInt(localStorage.getItem("selectedBackground")) : 0;
var vA5 = ["Arial, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "'Courier New', monospace", "'Georgia', serif", "'Times New Roman', serif", "'Comic Sans MS', cursive", "'Impact', sans-serif", "'Lucida Console', monospace", "'Trebuchet MS', sans-serif"];
let v105 = localStorage.getItem("selectedFont") ? parseInt(localStorage.getItem("selectedFont")) : 0;
function f10(p37) {
  if (p37 <= 50) {
    return "#00FF00";
  } else if (p37 <= 80) {
    return "#ADFF2F";
  } else if (p37 <= 120) {
    return "#FFFF00";
  } else if (p37 <= 180) {
    return "#FFA500";
  } else if (p37 <= 250) {
    return "#FF4500";
  } else {
    return "#FF0000";
  }
}
function f11(p38) {
  if (p38 >= 60) {
    return "#00FF00";
  } else if (p38 >= 50) {
    return "#ADFF2F";
  } else if (p38 >= 40) {
    return "#FFFF00";
  } else if (p38 >= 30) {
    return "#FFA500";
  } else if (p38 >= 20) {
    return "#FF4500";
  } else {
    return "#FF0000";
  }
}
window.onwheel = p39 => {
  if (p39.deltaY > 0) {
    f13(Math.max(v11 - parseFloat(vO6.zoomSpeed) * 0.75, 0.5));
  } else {
    f13(Math.min(v11 + parseFloat(vO6.zoomSpeed) * 1.05, 50));
  }
};
function f12() {
  return new (Function("return RegExp;")())("iPhone|iPad|iPod|Android", "i").test(navigator.userAgent);
}
function f13(p40) {
  var vParseFloat = parseFloat((v11 = p40).toFixed(2));
  if (Math.abs(vParseFloat) < 0.01) {
    vParseFloat = 0;
  } else if (Math.abs(vParseFloat - 1) < 0.01) {
    vParseFloat = 1;
  }
  v12.text = vParseFloat + "x";
}
var v106 = localStorage.getItem("inputReplaceSkin");
var v107 = false;
window.keyMove = 81;
var vO5 = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#222",
    pxy: 110
  }
};
var v108 = window.location.href.includes("/es") ? "es" : window.location.href.includes("/uk") ? "uk" : "en";
var vO6 = {
  FB_UserID: "",
  fps: false,
  ping: false,
  chngBotSkins: true,
  chngPersonsSkins: true,
  minimapTeamcod: false,
  hideYouNameInMinimap: false,
  Incognito: false,
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: false,
  sectores: false,
  visiblePowersAll: false,
  speed_zigzag: true,
  zoomSpeed: localStorage.getItem("zoomSpeed") || 1,
  PotenciadorSize: localStorage.getItem("PotenciadorSize") || 2,
  PotenciadorAura: localStorage.getItem("PotenciadorAura") || 1.2,
  ComidaShadow: localStorage.getItem("ComidaShadow") || 2,
  ComidaSize: localStorage.getItem("ComidaSize") || 2,
  mouseDelay: localStorage.getItem("mouseDelay") || 20,
  smoothCamera: localStorage.getItem("smoothCamera") || 0.5,
  eat_animation: 0.0025,
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  showTeamList: true,
  animationHeadshot: true,
  top8: true,
  killFeed: true,
  noAuras: true,
  noSkin: true,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  dead: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  idReplaceSkin: 35,
  visibleSkin: [],
  pL: [],
  gamePad: vO5.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
if ((saveGameLocal = localStorage.getItem("SaveGameXT")) && saveGameLocal !== "null") {
  let v109 = JSON.parse(saveGameLocal);
  for (let v110 in v109) {
    vO6[v110] = v109[v110];
  }
}
vO6.loading = true;
let v111;
var vO7 = {
  id_user: "",
  nickname: "WTR",
  enemyNameHs: "No Name Player",
  teamCode: "",
  playerX: 0,
  playerY: 0,
  hs: 0,
  kill: 0,
  message: "",
  teamColor: localStorage.getItem("teamColor") || "0xffffff",
  wssServer: ""
};
let v112;
const vO8 = {
  players: new Map()
};
function f14() {
  if (v112 && v112.readyState !== WebSocket.CLOSED) {
    console.log("Eski bağlantı kapatılıyor...");
    v112.close();
  }
  v112 = new WebSocket("wss://wormmedia.xyz:9800");
  v112.addEventListener("open", () => {
    v114 = true;
    console.log("✅ WebSocket bağlı");
  });
  v112.addEventListener("close", () => {
    v114 = false;
    console.log("❌ WebSocket bağlantısı kesildi. Tekrar bağlanılacak...");
    f15();
  });
  v112.addEventListener("message", async p41 => {
    try {
      const v113 = p41.data instanceof Blob ? JSON.parse(await p41.data.text()) : JSON.parse(p41.data);
      if (v113.type === "hsKillUpdate") {
        vO8.players.set(v113.id_user, {
          nickname: v113.nickname,
          hskill: v113.hskill,
          teamColor: v113.teamColor || 16777215
        });
        vF10();
      }
      if (v113.type === "topHsPlayers") {
        f67(v113.players);
      }
      f16(v113);
    } catch (e6) {
      console.error("Mesaj işleme hatası:", e6);
    }
  });
}
let v114 = false;
function f15() {
  if (!v114) {
    setTimeout(() => {
      f14();
    }, 5000);
  }
}
f14();
window.addEventListener("beforeunload", () => {
  if (v112 && v112.readyState === WebSocket.OPEN) {
    v112.close();
  }
});
function f16(p42) {
  if (p42.id_user === "gg_116823912010482082044") {
    f61("[By YıLdo OWNER]", p42.message);
    console.log("Servidor " + p42.id_user + " ha enviado un mensaje: " + p42.message);
  }
  if (p42.wssServer !== "") {
    return;
  }
  switch (p42.type) {
    case "initialState":
      f19(p42.players);
      break;
    case "playerUpdate":
      f20(p42);
      break;
    case "hsKillUpdate":
      f21(p42);
      break;
    case "playerDeath":
      f22(p42);
      break;
    case "playerDisconnect":
      f23(p42.id);
      break;
    default:
      console.log("Mensaje desconocido:", p42);
  }
}
function f17() {
  if (!v114) {
    console.log("No conectado, esperando a que se restablezca la conexión...");
    return;
  }
  const v115 = $("#chat-input").val().trim();
  if (v115 === "") {
    return;
  }
  const v116 = "WTR".substring(0, 16);
  const vGetUserData = getUserData("");
  const vO9 = {
    type: "chatMessage",
    id_user: "",
    nickname: v116,
    message: v115,
    wssServer: "",
    color: vGetUserData ? vGetUserData.color : "rgba(255, 255, 255, 0.1)",
    image: vGetUserData ? vGetUserData.image : "default_icon.png"
  };
  v112.send(JSON.stringify(vO9));
  f18(v116, v115, "", vO9.color, vO9.image, true);
  $("#chat-input").val("");
}
function f18(p43, p44, p45, p46, p47, p48 = false) {
  const v117 = p47 ? "<img src=\"" + p47 + "\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">" : "";
  const v118 = p48 ? "lightblue" : "white";
  const v119 = "\n        <div class=\"chat-message\" style=\"background: " + (p46 || "rgba(255, 255, 255, 0.1)") + ";\">\n            " + v117 + "\n            <strong id=\"" + p45 + "\" style=\"color: " + v118 + "\">" + p43 + ":</strong>\n            <span>" + p44 + "</span>\n        </div>\n    ";
  $("#chat-history").append(v119).scrollTop($("#chat-history")[0].scrollHeight);
}
function f19(p49) {
  p49.forEach(p50 => vO8.players.set(p50.id_user, p50));
  console.log("Estado inicial recibido:", p49);
}
function f20(p51) {
  const v120 = vO8.players.get(p51.id_user) || {};
  const vO10 = {
    ...v120,
    ...p51
  };
  vO10.position = p51.position || v120.position || {
    x: 0,
    y: 0
  };
  vO8.players.set(p51.id_user, vO10);
  vF10();
  if (vO10.teamCode && vO10.teamCode === "") {
    f63(vO10.teamCode, vO10.teamColor);
    f62(vO10.teamCode, vO10.nickname, vO10.message);
  }
}
function f21(p52, p53) {
  console.log("🎯 HS Güncelleme: " + p52.nickname);
  const v121 = vO8.players.get(p52.id_user);
  if (v121) {
    v121.hskill.hs += p52.hskill.hs;
    v121.hskill.kill += p52.hskill.kill;
  } else {
    vO8.players.set(p52.id_user, {
      ...p52,
      hskill: {
        ...p52.hskill
      },
      position: {
        x: 0,
        y: 0
      }
    });
  }
  const v122 = vO8.players.get(p52.id_user);
  console.log("🧠 Player state:", v122);
  vF10();
}
function f22(p54) {
  vO8.players.delete(p54.id_user);
  console.log("El jugador " + p54.nickname + " ha muerto.");
  vF10();
  f64();
}
function f23(p55) {
  vO8.players.delete(p55);
  console.log("Jugador " + p55 + " desconectado.");
}
function f24(p56, p57 = {}) {
  if (!v114) {
    console.log("No conectado, esperando para enviar actualización...");
    return;
  }
  const vO11 = {
    type: p56,
    id_user: "",
    nickname: "WTR",
    enemyNameHs: "No Name Player",
    hskill: {
      hs: 0,
      kill: 0
    },
    position: {
      x: 0,
      y: 0
    },
    message: "",
    teamCode: "",
    teamColor: vO7.teamColor,
    wssServer: "",
    ...p57
  };
  v112.send(JSON.stringify(vO11));
}
let vLN07 = 0;
let vA6 = [];
function f25(p58, p59) {
  const v123 = Date.now();
  vA6.push({
    x: p58,
    y: p59
  });
  if (v123 - vLN07 >= 100) {
    f26();
    vLN07 = v123;
  }
}
function f26() {
  if (vA6.length > 0) {
    vA6.forEach(p60 => {
      f24("playerUpdate", {
        position: p60
      });
    });
    vA6 = [];
  }
}
function f27(p61, p62) {
  f24("playerDeath", {
    hskill: {
      hs: p61,
      kill: p62
    }
  });
  console.log("Jugador  ha muerto.");
}
function f28(p63, p64) {
  f24("hsKillUpdate", {
    hskill: {
      hs: p63,
      kill: p64
    }
  });
  console.log("Jugador  HS/Kill actualizado: HS " + p63 + ", Kill " + p64);
}
let vO12 = {
  clientesVencidos: [],
  clientesActivos: []
};
let vO13 = {
  clientsSkinsVencidos: [],
  clientsSkinsActivos: []
};
var v204 = new Date().getTime();
async function f29() {
  try {
    await fetch("https://wormmedia.xyz:2701/api/clients.json");
    let v125 = await t.json();
    console.log(v125);
    if (v125.success) {
      let v126 = v125.Users;
      vO12.clientesActivos = v126.filter(p65 => p65.client_ID);
    } else {
      vO12 = {
        clientesVencidos: [],
        clientesActivos: []
      };
    }
  } catch (e7) {
    console.error("API request failed:", e7);
  }
}
async function f30() {
  await fetch("https://wormatetr.github.io/extension/w2/api/skinsActived.php?v=" + v204).then(p66 => p66.json()).then(p67 => {
    console.log(p67);
    if (p67.success) {
      let v127 = p67.Users;
      vO13.clientsSkinsActivos = v127.filter(p68 => p68.client_ID);
    } else {
      vO13 = {
        clientsSkinsVencidos: [],
        clientsSkinsActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
f29();
f30();
let vA7 = [];
async function f31() {
  const v128 = "https://zwormextenstion.com/wormExtension/api/serversTimMap.php?v=" + v204;
  try {
    const v129 = await fetch(v128);
    const v130 = await v129.text();
    const v131 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    const vA8 = [...v130.matchAll(v131)];
    vA7 = vA8.map(p69 => {
      const v132 = p69[1];
      const v133 = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/;
      const v134 = v132.match(v133);
      if (!v134) {
        return null;
      }
      const v135 = v134[3].replace(/\\\//g, "/");
      const v136 = v134[2];
      const vDecodeUnicode = f55(v134[4].trim());
      const v137 = /<img src=\\"(.*?)\\"/;
      const v138 = v132.match(v137);
      const v139 = v138 ? v138[1].replace(/\\\//g, "/") : "";
      return {
        dataCon: v135,
        dataRoom: v136,
        dataType: "false",
        imgSrc: v139,
        serverName: vDecodeUnicode
      };
    }).filter(Boolean);
  } catch (e8) {
    console.error("Error al cargar servidores TimMap:", e8);
  }
}
var vO14 = {};
async function f32() {
  const v140 = "https://zworm.xyz:3305/data?v=" + Date.now();
  try {
    let v141 = await fetch(v140);
    if (!v141.ok) {
      throw new Error("HTTP error! Status: " + v141.status);
    }
    let v142 = await v141.json();
    vO14 = {};
    for (let v143 in v142) {
      const v144 = v142[v143];
      if (!v144.wsUrl) {
        continue;
      }
      const v145 = v144.players || [];
      const v146 = v144.wsUrl;
      if (v145.length > 0) {
        let v147 = v145.reduce((p70, p71) => p71.Score > p70.Score ? p71 : p70, v145[0]);
        let v148 = v147.Score >= 1000000 ? (v147.Score / 1000000).toFixed(1) + "M" : v147.Score >= 1000 ? (v147.Score / 1000).toFixed(1) + "K" : v147.Score.toString();
        let v149 = v147.Score > 10000000 ? "green" : v147.Score > 2000000 ? "orange" : "red";
        vO14[v146] = {
          ServerName: v147.ServerName,
          Initials: v143,
          Score: v148,
          StatusColor: v149,
          Avatar: v144.avatar || null,
          Name: v147.Name || "(unknown)",
          TopPlayers: v145.slice(0, 10)
        };
      } else if (v144.wsUrl) {
        vO14[v146] = {
          ServerName: v144.serverName,
          Initials: v143,
          Score: "Vacío",
          StatusColor: "gray",
          Avatar: v144.avatar || "https://i.imgur.com/placeholder.png",
          Name: "(N/A)",
          TopPlayers: []
        };
      }
    }
    console.log("Datos de Top 1 organizados por WSS:", vO14);
  } catch (e9) {
    console.error("Error fetching server data:", e9);
  }
}
let vA9 = [];
async function f33() {
  let v150 = "https://wormatetr.github.io/extension/w2/api/servers.php?v=" + v204;
  await fetch(v150).then(p72 => p72.text()).then(p73 => {
    let v151 = new DOMParser();
    let v152 = v151.parseFromString(p73, "text/html");
    let v153 = v152.querySelectorAll("div[id*=\"wwc_room_item_\"]");
    console.log(v153);
    v153.forEach(p74 => {
      let v154 = p74.querySelector(".dropdown-item.selecionar-sala-v2");
      let v155 = v154.getAttribute("data-con");
      let v156 = v154.getAttribute("data-room");
      let v157 = p74.textContent.trim();
      let v158 = v154.getAttribute("data-type");
      let v159 = p74.querySelector("img");
      let v160 = v159 ? v159.getAttribute("src") : null;
      vA9.push({
        dataCon: v155,
        dataRoom: v156,
        serverName: v157,
        dataType: v158,
        imgSrc: v160
      });
    });
    console.log(vA9);
  }).catch(p75 => {
    console.log(p75);
  });
}
function f34(p76) {
  if (p76 >= 1000000) {
    return (p76 / 1000000).toFixed(1) + "M";
  } else if (p76 >= 1000) {
    return (p76 / 1000).toFixed(1) + "K";
  } else {
    return p76.toString();
  }
}
function f35(p77) {
  if (p77 > 10000000) {
    return "green";
  } else if (p77 > 2000000) {
    return "orange";
  } else {
    return "red";
  }
}
async function f36(p78) {
  await fetch("https://wormturkio.com/new/api/register_update_player.php", {
    method: "POST",
    body: JSON.stringify({
      data: p78
    })
  }).then(p79 => p79.json()).then(p80 => {
    console.log(p80);
  });
}
async function f37(p81) {
  await fetch("https://wormturkio.com/new/api/checkSubscriptionExpired.php", {
    method: "POST",
    body: JSON.stringify({
      code: p81
    })
  }).then(p82 => p82.json()).then(p83 => {
    console.log(p83);
  });
}
function f38(p84) {
  $.ajax({
    url: "https://wormturkio.com/wormExtension/key/streming.php",
    method: "GET",
    dataType: "json",
    success: function (p85) {
      var v161 = p85.allstreamers.streamers.filter(function (p86) {
        return p86.id_game === p84;
      });
      if (v161.length === 0) {
        console.log("No hay streamers online.");
        return;
      }
      var v162 = v161[0];
      $(".mm-logo").attr("src", v162.logo);
      $(".loading-logo").attr("src", v162.logo);
      $(".mm-logo").attr("src", v162.logo);
      $(".mm-logo2").attr("src", v162.url_logo);
    },
    error: function (p87) {
      console.error("Error al obtener los datos:", p87);
    }
  });
}
async function f39() {
  await Promise.all([f32(), f33(), f31()]);
  console.log("Todo listo");
  f40(vA9, vA7, vO14);
}
function f40(p88, p89, p90) {
  $(".description-text").empty();
  let vLSWormworld = "wormworld";
  const vO15 = {
    sao: "br",
    vin: "us",
    dal: "us",
    fra: "de",
    sgp: "sg",
    tok: "jp",
    syd: "au",
    lon: "gb",
    tor: "ca",
    mex: "mx",
    sin: "sg",
    hil: "us",
    gra: "de"
  };
  const vA10 = [{
    code: "br",
    name: "Peru"
  }, {
    code: "mx",
    name: "Mexico"
  }, {
    code: "us",
    name: "EEUU"
  }, {
    code: "ca",
    name: "Canada"
  }, {
    code: "de",
    name: "Germania"
  }, {
    code: "fr",
    name: "Francia"
  }, {
    code: "sg",
    name: "Singapur"
  }, {
    code: "jp",
    name: "Japon"
  }, {
    code: "au",
    name: "Australia"
  }, {
    code: "gb",
    name: "Granbretana"
  }];
  $(".description-text").append("\n        <div class=\"switchServerSource\" style=\"position: absolute; top: -5px; left: 200px; width: 200px;\">\n            <button id=\"toggleServerSource\" style=\"margin-bottom: 10px; padding: 6px 12px; background: #252535; color: white; border: 1px solid; border-radius: 1px;\">\n                 Switch to TimMap Servers\n            </button>\n        </div>\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ");
  $("#connectButton").click(function () {
    let v163 = $("#optionSelect").val();
    let v164 = $("#numberInput").val();
    if (!v163 || v164 === "") {
      alert("Por favor, selecciona una opción y escribe un número antes de conectar.");
      return;
    }
    zw_lastserver = "wss://" + v163 + ":" + v164 + "/wormy";
    anApp.r.Hd();
    anApp.sa(zw_lastserver);
    zw_servertext.text = "" + zw_lastserver.replace("wss://", "").replace(".wormate.io", "").replace("/wormy", "");
  });
  const v$ = $("<ul class=\"ui-tabs-nav\"></ul>");
  const v$2 = $("<div class=\"servers-container\"></div>");
  vA10.forEach(function (p91, p92) {
    v$.append("\n            <li class=\"ui-tabs-tab ui-tab " + (p92 === 0 ? "ui-tab-active" : "") + "\" data-country=\"" + p91.code + "\">\n                <a><span class=\"flag " + p91.code + "\"></span></a>\n            </li>\n        ");
    v$2.append("\n            <div class=\"servers-" + p91.code + "\" style=\"display: " + (p92 === 0 ? "block" : "none") + ";\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th>\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");
  });
  $(".description-text").append(v$, v$2);
  $(".ui-tabs-tab").click(function () {
    var v165 = $(this).data("country");
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v165).fadeIn(200);
  });
  function f41(p93) {
    $(".server-table tbody").empty();
    p93.forEach(function (p94) {
      const vO16 = {
        serverName: p94.serverName || p94.name || "❗",
        dataCon: p94.dataCon || p94.wss,
        dataRoom: p94.dataRoom || p94.room || "❗",
        imgSrc: p94.imgSrc || p94.streamerImg || "https://i.imgur.com/placeholder.png"
      };
      f42(vO16, p90);
    });
  }
  $(document).on("click", "#toggleServerSource", function () {
    vLSWormworld = vLSWormworld === "wormworld" ? "timmap" : "wormworld";
    $(this).text(vLSWormworld === "wormworld" ? "Switch to TimMap Servers" : "Switch to WormWorld Servers");
    f41(vLSWormworld === "wormworld" ? p88 : p89);
  });
  f41(p88);
  function f42(p95, p96) {
    let v166 = /^\d+[a-z]{2}$/i.test(p95.dataRoom) ? p95.dataRoom.slice(-2).toLowerCase() : /^[A-Z]{2}_\d+$/i.test(p95.dataRoom) ? p95.dataRoom.split("_")[0].toLowerCase() : "otros";
    if (v166 === "ae") {
      v166 = "gb";
    }
    if (!vA10.some(p97 => p97.code === v166)) {
      return;
    }
    let v167 = p95.dataCon?.match(/wss:\/\/([a-z]+)-/i);
    let v168 = v167 ? v167[1] : null;
    let v169 = vO15[v168] ? vO15[v168].toUpperCase() : "Desconocido";
    const v170 = p95.dataCon || p95.wss;
    let v171 = p96[v170] || {
      Score: "❗",
      StatusColor: "gray",
      Avatar: "https://i.imgur.com/placeholder.png"
    };
    let v$3 = $("\n            <tr class=\"server-row\" data-wss=\"" + v170 + "\" value=\"" + p95.dataRoom + "\">\n                <td class=\"server-status\" data-score=\"" + v171.Score + "\" data-img=\"" + v171.Avatar + "\">\n                    <span class=\"status-dot\" style=\"background-color: " + v171.StatusColor + ";\"></span>\n                </td>\n                <td class=\"server-name\">" + p95.serverName + "</td>\n                <td class=\"server-region\">" + v169 + "</td>\n                <td class=\"server-top1\" data-score=\"" + v171.Score + "\" data-img=\"" + v171.Avatar + "\">" + v171.Score + "</td>\n                <td><img src=\"" + p95.imgSrc + "\" class=\"streamer-image\"></td>\n                <td><button class=\"btn-check-ports\">PLAY</button></td>\n            </tr>\n        ");
    $(".servers-" + v166 + " tbody").append(v$3);
  }
  $(document).on("click", ".server-row", function () {
    let v172 = $(this).attr("value");
    let v173 = $(this).attr("data-wss");
    if (v173) {
      anApp.r.Hd();
      anApp.sa(v173);
      zw_servertext.text = v172;
      setTimeout(() => {
        zw_servertext.text = v172;
      }, 2000);
    }
  });
  f43();
  f46(".server-top1");
  f46(".server-status");
}
function f43() {
  if (!document.getElementById("avatarPreview")) {
    const v174 = document.createElement("div");
    v174.id = "avatarPreview";
    Object.assign(v174.style, {
      position: "absolute",
      display: "none",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.3s ease",
      zIndex: "9999"
    });
    const v175 = document.createElement("img");
    v175.id = "avatarImage";
    Object.assign(v175.style, {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "2px solid #fff",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      backgroundColor: "#1a1a1a"
    });
    v174.appendChild(v175);
    document.body.appendChild(v174);
  }
  if (!document.getElementById("top10Preview")) {
    const v176 = document.createElement("div");
    v176.id = "top10Preview";
    Object.assign(v176.style, {
      position: "absolute",
      display: "none",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.3s ease",
      zIndex: "9999",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "rgba(30, 30, 40, 0.95)",
      color: "#fff",
      fontSize: "12px",
      minWidth: "230px",
      boxShadow: "0 0 10px rgba(0,0,0,0.6)",
      fontFamily: "Segoe UI, sans-serif"
    });
    const v177 = document.createElement("div");
    v177.id = "top10List";
    v176.appendChild(v177);
    document.body.appendChild(v176);
  }
}
function f44(p98, p99) {
  if (p99) {
    $("#avatarImage").attr("src", p99);
    $("#avatarPreview").css({
      top: p98.pageY + 10 + "px",
      left: p98.pageX + 10 + "px",
      display: "block"
    }).stop(true, true).fadeTo(200, 1);
  }
}
function f45(p100, p101) {
  if (p101.length > 0) {
    let vLSdivStylefontsize14px = "<div style=\"font-size:14px; font-weight:bold; text-align:center; margin-bottom:8px;\">Top 10 </div><hr style=\"border-color:#444;\">";
    vLSdivStylefontsize14px += p101.map((p102, p103) => {
      const v178 = p103 === 0;
      return "\n                <div style=\"display:flex; justify-content:space-between; margin: 4px 0; " + (v178 ? "font-weight:bold; color:#ffd700;" : "") + "\">\n                    <span>" + (v178 ? "" : p103 + 1 + ".") + " " + p102.Name.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, "").trim() + "</span>\n                    <span>" + (p102.Score >= 1000000 ? (p102.Score / 1000000).toFixed(1) + "M" : p102.Score >= 1000 ? (p102.Score / 1000).toFixed(1) + "K" : p102.Score.toString()) + "</span>\n                </div>";
    }).join("");
    $("#top10List").html(vLSdivStylefontsize14px);
    $("#top10Preview").css({
      top: p100.pageY + 10 + 100 + 10 + "px",
      left: p100.pageX + 10 + "px",
      display: "block"
    }).stop(true, true).fadeTo(200, 1);
  }
}
function f46(p104) {
  $(document).off("mouseenter", p104).on("mouseenter", p104, function (p105) {
    const v179 = $(this).closest("tr").attr("data-wss");
    if (!v179) {
      return;
    }
    const v180 = vO14[v179];
    if (v180) {
      f44(p105, v180.Avatar);
      f45(p105, v180.TopPlayers || []);
    }
  });
  $(document).off("mousemove", p104).on("mousemove", p104, function (p106) {
    $("#avatarPreview").css({
      top: p106.pageY + 10 + "px",
      left: p106.pageX + 10 + "px"
    });
    $("#top10Preview").css({
      top: p106.pageY + 10 + 100 + 10 + "px",
      left: p106.pageX + -75 + "px"
    });
  });
  $(document).off("mouseleave", p104).on("mouseleave", p104, function () {
    $("#avatarPreview").stop(true, true).fadeTo(300, 0, function () {
      $(this).hide();
    });
    $("#top10Preview").stop(true, true).fadeTo(300, 0, function () {
      $(this).hide();
    });
  });
}
f39();
function f47(p107) {
  return p107.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, "").trim();
}
function f48(p108) {
  let vLS = "";
  switch (p108) {
    case "0":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd0.png";
      break;
    case "1":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd8.png";
      break;
    case "2":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd9.png";
      break;
    case "3":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd10.png";
      break;
    case "4":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd6.png";
      break;
    case "5":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd11.png";
      break;
    case "6":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_1.png";
      break;
    case "7":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_2.png";
      break;
    case "8":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_3.png";
      break;
    case "9":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_4.png";
      break;
    case "10":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_5.png";
      break;
    case "11":
      vLS = "https://asserts.wormworld.io/backgrounds/arena01.png";
      break;
    case "12":
      vLS = "https://asserts.wormworld.io/backgrounds/arena02.png";
      break;
    case "13":
      vLS = "https://asserts.wormworld.io/backgrounds/arena03.png";
      break;
    case "14":
      vLS = "https://asserts.wormworld.io/backgrounds/arena04.png";
      break;
    default:
      console.warn("Valor no vï¿½lido, se utilizarï¿½ una imagen por defecto.");
  }
  return vLS;
}
function f49() {
  clearInterval(v97);
  if (v97 === null) {
    v97 = setInterval(function () {
      var v181 = anApp.s.H.sk;
      let v182 = Math.PI;
      var v183 = v181 + v182 / 360 * 9;
      if (v183 >= v182) {
        v183 = -v181;
      }
      anApp.s.H.sk = v183;
    }, 55);
  }
}
function f50() {
  if (vLN1 >= 40) {
    if (v99) {
      vLN55 += 25;
    } else {
      vLN55 -= 100;
    }
    vLN1 = 1;
  }
}
function f51() {
  if (vLN55 === 55 && vLN1 >= 40) {
    vLN55 += 25;
    vLN1 = 1;
    v99 = true;
  }
  if (vLN55 === 80) {
    f50();
  }
  if (vLN55 === 105) {
    f50();
  }
  if (vLN55 === 130) {
    f50();
  }
  if (vLN55 === 155) {
    f50();
  }
  if (vLN55 === 180) {
    f50();
  }
  if (vLN55 === 205) {
    f50();
  }
  if (vLN55 === 230) {
    f50();
  }
  if (vLN55 === 255) {
    f50();
  }
  if (vLN55 === 280) {
    f50();
  }
  if (vLN55 === 305) {
    f50();
  }
  if (vLN55 === 330) {
    f50();
  }
  if (vLN55 === 355) {
    f50();
  }
  if (vLN55 === 380) {
    f50();
  }
  if (vLN55 === 405) {
    f50();
  }
  if (vLN55 === 430) {
    f50();
  }
  if (vLN55 === 455 && vLN1 >= 40) {
    vLN55 -= 100;
    vLN1 = 1;
    v99 = false;
  }
}
function f52() {
  clearInterval(v97);
  if (v97 === null) {
    let v184 = anApp.s.H.sk;
    let v185 = Math.PI;
    let v186 = v184 + v185 / 360 * 9;
    if (v186 >= v185) {
      v186 = -v184;
    }
    anApp.s.H.sk = v186;
    vLN1 += 1;
    f51();
    if (v98) {
      v97 = setInterval(f52, vLN55);
    }
  }
}
function f53() {
  v98 = true;
  vLN55 = 55;
  vLN1 = 1;
  v99 = true;
  f52();
}
f33();
f31();
f32();
const v187 = localStorage.getItem("premium") === "true";
console.log("Premium Status:", localStorage.getItem("premium"));
const vO17 = {
  visiblePowersAll: false,
  speed_zigzag: true
};
var vO18 = {
  laserColor: "FFFFFF",
  colorFondo: "0D0400",
  colorBorde: "FF0000",
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: false,
  sectores: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
const vF5 = async function (p109) {
  var v188 = vO12.clientesActivos.find(function (p110) {
    return p110.client_ID === p109.user_data.userId;
  });
  if (v188) {
    console.log("El ID " + p109.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    let v189 = new Date();
    let v190 = new Date(v188.client_DateExpired);
    if (v189 > v190) {
      console.log("La fecha de expiraciï¿½n ha vencido.");
      localStorage.setItem("premium", "false");
    } else {
      console.log("La fecha de expiraciï¿½n es vï¿½lida.");
      vF6(v188.client_DateExpired);
      localStorage.setItem("premium", "true");
    }
  } else {
    console.log("El ID generado no coincide con ningï¿½n ID almacenado en la base de datos.");
    localStorage.setItem("premium", "false");
  }
};
function f54() {
  v24.removeChildren();
  v24.clear();
  console.log("0D0400");
  v24.removeChildren();
  v24.clear();
  v24.lineStyle(1, 16711680, 1);
  v24.drawCircle(0, 0, 500);
  v24.endFill();
}
function f55(p111) {
  return p111.replace(/\\u[\dA-F]{4}/gi, function (p112) {
    return String.fromCharCode(parseInt(p112.replace(/\\u/, ""), 16));
  }).replace(/\\u[0-9A-F]{2}/g, function (p113) {
    return String.fromCharCode(parseInt(p113.replace(/\\u/, ""), 16));
  });
}
const vF6 = async function (p114) {
  var v$4 = $("div[category='theme']");
  f73(v$4[1], "gameColorGroup", "Game", "colorFondo", "0D0400");
  f73(v$4[1], "borderColorGroup", "Borde Game", "colorBorde", "FF0000");
  f73(v$4[1], "laserColorGroup", "Laser", "laserColor", "FFFFFF");
  f73(v$4[1], "hsTextColorGroup", "Headshot Text", "hsTextColor", "ffa500");
  f73(v$4[1], "killTextColorGroup", "Kill Text", "killTextColor", "ffa500");
  f73(v$4[1], "minimapBorderColorGroup", "Minimap Border", "minimapBorderColor", "ffa500");
  vO17.visiblePowersAll = false;
  vO17.speed_zigzag = true;
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $("#user_config").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("position", "absolute").css("display", "block");
    v212 = false;
    f57();
  });
  let v191 = localStorage.getItem("showTeamList");
  let v192;
  if (v191 === "true") {
    v192 = true;
    vO6.showTeamList = true;
  } else if (v191 === "false") {
    v192 = false;
    vO6.showTeamList = false;
  } else {
    v192 = true;
  }
  let v193 = localStorage.getItem("showAnimationHeadshot");
  let v194;
  if (v193 === "true") {
    v194 = true;
    vO6.animationHeadshot = true;
  } else if (v193 === "false") {
    v194 = false;
    vO6.animationHeadshot = false;
  } else {
    v194 = true;
  }
  $("#settings-backgroundSolid-switch").prop("checked", false);
  $("#settings-backgroundSolid-switch").on("click", function () {
    if (this.checked) {
      vO18.backgroundSolid = true;
      f54();
    } else {
      vO18.backgroundSolid = false;
      f54();
    }
  });
  $("#showAnimationHeadshot").on("change", function () {
    vO6.animationHeadshot = $(this).is(":checked");
    localStorage.setItem("showAnimationHeadshot", true);
    console.log("Mostrar lista de amigos:", true);
  });
  $("#showTeamList").on("change", function () {
    vO6.showTeamList = $(this).is(":checked");
    localStorage.setItem("showTeamList", true);
    console.log("Mostrar lista de amigos:", true);
  });
  $("#clossed_Setings").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    v212 = true;
    f57();
  });
  let v$5 = $("<div class=\"cursor-menu\"></div>");
  let v$6 = $("<div class=\"icon-selector\"></div>");
  for (let vLN12 = 1; vLN12 < 42; vLN12++) {
    let v195 = "https://deltav4.gitlab.io/v7/assets/cursors/cursor_" + vLN12.toString().padStart(2, "0") + ".cur";
    let v196 = vLN12 === 1 ? "active" : "";
    let v197 = $("<img>").attr({
      src: v195,
      "data-cursor": v195,
      alt: "Cursor " + vLN12
    });
    let v198 = $("<div>").addClass("cursor-box icon-selector__item").addClass(v196).append(v197);
    v$6.append(v198);
  }
  v$5.append(v$6);
  $(".options-list.ps div[category=\"cursor\"]").append(v$5);
  $("#background-canvas").after("<div id=\"firefly-container\"></div>");
  for (let vLN08 = 0; vLN08 < 20; vLN08++) {
    $("<div>").addClass("firefly").css({
      left: Math.random() * window.innerWidth + "px",
      top: Math.random() * window.innerHeight + "px",
      animationDuration: 2 + Math.random() + "s, " + (5 + Math.random() * 10) + "s"
    });
  }
  $(".profile-info").prepend("\n        <div class=\"premium-badge\">\n             Premium  <br> \n            Expire: <span id=\"premium-expiration\">" + p114 + "</span>\n        </div>\n    ");
  $(".hotkey-container").append("\n\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Zoom</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"zoom-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Replay</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"restart-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Explote</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"wormExplot-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">LaserHS</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Sectors</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"sectores-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Background</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"background-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Giro</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"giro-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Skins</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noSkin-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Auras</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noAuras-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        ");
  $("#zoom-key").val("z");
  $("#restart-key").val("r");
  $("#laserHSkey-key").val("l");
  $("#wormExplot-key").val("r");
  $("#giro-key").val("q");
  $("#noSkin-key").val("1");
  $("#noAuras-key").val("2");
  $("#sectores-key").val("q");
  $("#background-key").val("c");
  $("#hotkeys-icon").on("click", function () {
    $("#hotkeys-icon").addClass("active");
    $("#user-icon").removeClass("active");
    $("#hotkeys-section").toggle();
    $("#user-section").hide();
  });
  $(".key-input").keydown(function (p115) {
    p115.stopPropagation();
  });
  $(".key-input").keypress(function (p116) {
    p116.preventDefault();
    var v199 = p116.key.toLowerCase();
    $(this).val(v199);
    var v200 = $(this).attr("id");
    switch (v200) {
      case "zoom-key":
        f9("zoom", v199);
        break;
      case "restart-key":
        f9("restart", v199);
        break;
      case "wormExplot-key":
        f9("wormExplot", v199);
        break;
      case "laserHSkey-key":
        f9("laserHS", v199);
        break;
      case "giro-key":
        f9("giro", v199);
        break;
      case "noSkin-key":
        f9("noSkin", v199);
        break;
      case "noAuras-key":
        f9("noAuras", v199);
        break;
      case "sectores-key":
        f9("sectores", v199);
        break;
      case "background-key":
        f9("background", v199);
    }
    $(this).blur();
  });
  $("#user-section").append(v$6);
  $(".cursor-box").on("click", function () {
    var v201 = $(this).find("img").attr("src");
    $("body, button, input, a, textarea, select, div, span, p").css({
      cursor: "url(" + v201 + "), auto"
    });
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
  });
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>EXP: " + p114 + "</span>");
  $("#sound-hs").val("https://wormturkio.com/wormExtension/key/sounds/headshot_normal.mp3");
  $("#sound-10hs").val("https://wormturkio.com/wormExtension/key/sounds/10hskahkaha.mp3");
  lxpdhssound = new Audio($("#sound-hs").val());
  lxpdlaughsound = new Audio($("#sound-10hs").val());
  $("#sound-hs").on("input", function () {
    lxpdhssound.src = $(this).val();
  });
  $("#sound-10hs").on("input", function () {
    lxpdlaughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\" id=\"laser\"> " + vO[v108].laser + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-sectores-switch\"><span class=\"names_settings\" id=\"sectores\"> " + vO[v108].sectores + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-notAbilityAll-switch\"><span class=\"names_settings\"> : Show All Power-Ups</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\"><span class=\"names_settings\"> : Show Speed&Zigzag</span></div><div id=\"display_color\"><div class=\"container\"><input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\"><span class=\"names_settings\"  id=\"colorJuego\" > " + vO[v108].colorJuego + " </span></div><div class=\"container\"><input id=\"color_palet\" type=\"color\" value=\"#00243E\"><span class=\"names_settings\" id=\"colorLaser\"> " + vO[v108].colorLaser + " </span></div><div class=\"container\"><input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\"><span class=\"names_settings\" id=\"colorBorde\"> " + vO[v108].colorBorde + "</span></div>");
  let vO19 = {
    color_paletRGB: p117 => vO18.colorFondo = p117,
    color_palet: p118 => vO18.laserColor = p118,
    color_palet2: p119 => vO18.colorBorde = p119
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    let v202 = $(this).attr("id");
    let v203 = $(this).val().replace("#", "");
    f54();
    console.log("Recibiendo el color reemplazado para " + v202 + ": " + v203);
    if (vO19[v202]) {
      vO19[v202](v203);
    }
    f54();
  });
  vO17.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop("checked", false);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this.checked) {
      vO17.visiblePowersAll = true;
    } else {
      vO17.visiblePowersAll = false;
    }
  });
  vO17.speed_zigzag = true;
  $("#settings-Speed_ZigZag-switch").prop("checked", true);
  $("#settings-Speed_ZigZag-switch").on("click", function () {
    if (this.checked) {
      vO17.speed_zigzag = true;
    } else {
      vO17.speed_zigzag = false;
    }
  });
  $("#settings-laserHS-switch").prop("checked", false);
  $("#settings-laserHS-switch").on("click", function () {
    if (this.checked) {
      vO18.laserHS = true;
    } else {
      vO18.laserHS = false;
    }
  });
  $("#settings-interactive-switch").prop("checked", vO18.interactive);
  $("#settings-interactive-switch").on("click", function () {
    if (this.checked) {
      v30.interactive = false;
    }
  });
  $("#settings-sectores-switch").prop("checked", false);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      vO18.sectores = true;
      f54();
    } else {
      vO18.sectores = false;
      f54();
    }
  });
};
var v204 = new Date().getTime();
var v205 = "https://wormatetr.github.io/extension/w2/css/style2.css?v=" + v204;
async function f56(p120) {
  var v206 = p120.u.si.userId;
  var v207 = vO13.clientsSkinsActivos.find(p121 => p121.client_ID === v206);
  if (v207 && v207.Client_VisibleSkinPrivate) {
    console.log(v207);
    let v208 = new Date();
    let v209 = new Date(v207.client_DateExpired);
    if (v208 > v209) {
      console.log("La fecha de skins expiraciï¿½n ha vencido.");
    } else {
      console.log("La fecha de skins expiraciï¿½n es vï¿½lida.");
      let v210 = Array.isArray(v207.Client_VisibleSkinPrivate) ? v207.Client_VisibleSkinPrivate : [v207.Client_VisibleSkinPrivate];
      v210.forEach(p122 => {
        let v211 = vO6.idSkin.find(p123 => p123.id === p122);
        if (v211) {
          v211.nonbuyable = false;
        }
      });
      console.log("Skins privadas desbloqueadas para el usuario " + v206 + ":", v210);
    }
  } else {
    console.log("No se encontraron skins privadas para el usuario " + v206 + ".");
  }
}
let v212 = false;
function f57() {
  if (v212) {
    v29.texture = v100;
    v29.alpha = 0.25;
    console.log("Giro deactivated");
    v98 = false;
    vLN55 = 55;
    vLN1 = 1;
    v99 = true;
    clearInterval(v97);
    v97 = null;
  } else {
    v29.alpha = 0.75;
    console.log("Giro activated");
    f49();
    v98 = true;
  }
  v212 = !v212;
}
const vF7 = async function (p124) {
  function f58() {
    v30.interactive = false;
    var vLN09 = 0;
    var vSetInterval = setInterval(function () {
      var v213 = 1 - vLN09 * 0.0075;
      v30.alpha = v213;
      if (++vLN09 > 100) {
        clearInterval(vSetInterval);
        v30.alpha = 0.25;
        v30.interactive = true;
      }
    }, 100);
  }
  f75();
  f56(p124);
  f38(p124.u.si.userId);
  vO7.id_user = p124.u.si.userId;
  f72(v205);
  f72("https://fonts.googleapis.com/icon?family=Material+Icons");
  console.log(p124, p124.u.si.userId);
  lxpdhssound = new Audio("https://wormturkio.com/wormExtension/key/sounds/headshot_normal.mp3");
  lxpdlaughsound = new Audio("https://wormturkio.com/wormExtension/key/sounds/10hskahkaha.mp3");
  (v30 = new vFunction.Sprite()).texture = v101;
  v30.interactive = true;
  v30.buttonMode = true;
  v30.x = -45;
  v30.y = 10;
  v30.alpha = 0.25;
  v30.on("mouseup", function () {
    f58();
    let v214 = new Uint8Array([1]);
    anApp.o.Wb(v214);
    setTimeout(() => {
      let vV22 = v22;
      $(".overlay-2").css("position", "static");
      if (vV22) {
        anApp.r.Hd();
        anApp.sa(vV22);
      }
    }, 1000);
  });
  (v29 = new vFunction.Sprite()).texture = v100;
  v29.interactive = true;
  v29.buttonMode = true;
  v29.x = -10;
  v29.y = 10;
  v29.alpha = 0.25;
  v29.on("mouseup", function () {
    f57();
  });
  if (f12()) {
    v29.x = -90;
    v30.x = -135;
    v30.y = 10;
    let vFunction2 = Function("return PIXI;")();
    let v215 = vFunction2.Texture.from("https://i.imgur.com/kGjR9yf.png");
    let v216 = vFunction2.Texture.from("https://i.imgur.com/4JZUa1u.png");
    (v26 = new vFunction2.Sprite()).texture = v215;
    v26.interactive = true;
    v26.buttonMode = true;
    v26.x = -10;
    v26.y = 10;
    v26.alpha = 0.25;
    v26.on("mouseup", function () {
      f13(Math.min(v11 + 0.25, 50));
    });
    (v27 = new vFunction2.Sprite()).texture = v216;
    v27.interactive = true;
    v27.buttonMode = true;
    v27.x = -43;
    v27.y = 10;
    v27.alpha = 0.25;
    v27.on("mouseup", function () {
      f13(Math.max(v11 - 0.25, 0.25));
    });
  }
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  function f59() {
    $("#chatInput").css("display", "none").val("");
    $("#game-canvas").focus();
  }
  function f60() {
    let v217 = $("#chatInput").val();
    if ($.trim(v217) !== "") {
      console.log("Mensaje enviado:", v217);
      vO7.message = v217;
      setTimeout(() => {
        vO7.message = "";
      }, 1500);
    }
  }
  $("#chatInput").on("keydown", function (p125) {
    if (p125.key === "Enter") {
      f60();
      f59();
    } else if (p125.key === "Escape") {
      f59();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $("#mm-settings").html("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders").html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-wtr-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $("#user-icon").on("click", function () {
    $("#user-icon").addClass("active");
    $("#hotkeys-icon").removeClass("active");
    $("#user-section").toggle();
    $("#hotkeys-section").hide();
  });
  $("#background-canvas").replaceWith("\n  <div style=\"position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0;\">\n    <canvas id=\"background-canvas\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\"></canvas>\n  </div>\n  <script>\n    (function() {\n      const canvas = document.getElementById('background-canvas');\n      const ctx = canvas.getContext('2d');\n      let width, height;\n\n      const backgroundImage = new Image();\n      backgroundImage.src = 'https://wormate.io/images/bg-event-pattern-valday2024.png';\n\n      // Orijinal renkli opacity’li renk katmanları\n      const colorLayers = [\n        {colorStart: 'rgba(255, 100, 180, 0.45)', colorEnd: 'rgba(255, 100, 180, 0)', xRatio: -0.1, yRatio: 0.1, radius: 650, speedX: 0.12, speedY: 0.08},\n        {colorStart: 'rgba(150, 100, 255, 0.40)', colorEnd: 'rgba(150, 100, 255, 0)', xRatio: 1.1, yRatio: 0.3, radius: 700, speedX: -0.10, speedY: 0.05},\n        {colorStart: 'rgba(100, 200, 255, 0.45)', colorEnd: 'rgba(100, 200, 255, 0)', xRatio: 0.5, yRatio: 1.1, radius: 650, speedX: 0.06, speedY: -0.07},\n        {colorStart: 'rgba(255, 255, 255, 0.30)', colorEnd: 'rgba(255, 255, 255, 0)', xRatio: 0.9, yRatio: -0.1, radius: 600, speedX: -0.05, speedY: 0.10}\n      ];\n\n      let spots = [];\n\n      function resize() {\n        width = window.innerWidth;\n        height = window.innerHeight;\n        const dpr = window.devicePixelRatio || 1;\n        canvas.width = width * dpr;\n        canvas.height = height * dpr;\n        canvas.style.width = width + \"px\";\n        canvas.style.height = height + \"px\";\n        ctx.setTransform(1, 0, 0, 1, 0, 0);\n        ctx.scale(dpr, dpr);\n\n        spots = colorLayers.map(layer => ({\n          x: width * layer.xRatio,\n          y: height * layer.yRatio,\n          radius: layer.radius,\n          colorStart: layer.colorStart,\n          colorEnd: layer.colorEnd,\n          speedX: layer.speedX,\n          speedY: layer.speedY\n        }));\n      }\n      resize();\n      window.addEventListener('resize', resize);\n\n      // Daha koyu siyah kenar efekti (vignette)\n      function drawBlackVignette() {\n        let vignette = ctx.createRadialGradient(\n          width / 2, height / 2,\n          Math.min(width, height) / 2 * 0.4,\n          width / 2, height / 2,\n          Math.min(width, height) / 2\n        );\n        vignette.addColorStop(0, 'rgba(0,0,0,0)');\n        vignette.addColorStop(1, 'rgba(0,0,0,0.85)');\n        ctx.fillStyle = vignette;\n        ctx.fillRect(0, 0, width, height);\n      }\n\n      function drawBackground() {\n        if(backgroundImage.complete) {\n          ctx.globalAlpha = 0.9;\n          ctx.drawImage(backgroundImage, 0, 0, width, height);\n          ctx.globalAlpha = 1;\n          drawColorSpots();\n          drawBlackVignette();\n        }\n      }\n\n      function drawColorSpots() {\n        spots.forEach(spot => {\n          spot.x += spot.speedX;\n          spot.y += spot.speedY;\n\n          if (spot.x - spot.radius > width) spot.x = -spot.radius;\n          else if (spot.x + spot.radius < 0) spot.x = width + spot.radius;\n\n          if (spot.y - spot.radius > height) spot.y = -spot.radius;\n          else if (spot.y + spot.radius < 0) spot.y = height + spot.radius;\n\n          const grad = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.radius);\n          grad.addColorStop(0, spot.colorStart);\n          grad.addColorStop(1, spot.colorEnd);\n\n          ctx.fillStyle = grad;\n          ctx.beginPath();\n          ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI*2);\n          ctx.fill();\n        });\n      }\n\n      // Konfetti animasyonunu kaldırdım (isteğine göre ekleyebilirim)\n\n      function animate() {\n        ctx.clearRect(0, 0, width, height);\n        drawBackground();\n        requestAnimationFrame(animate);\n      }\n\n      backgroundImage.onload = () => {\n        animate();\n      };\n    })();\n  </script>\n");
  $("#game-view").append("<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>");
  $("#game-view").append("<span id=\"ping\"></span>");
  $(document).ready(function () {
    $("#aqnvgcpz05orkobh").replaceWith("\n            <div id=\"premium-panel\" style=\"position: relative; width: 100%; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.5); background: #111;\">\n                \n                <!-- Slider Bölümü -->\n                <div class=\"slider\" style=\"width: 100%; height: 300px; overflow: hidden;\">\n                    <img src=\"https://i.imgur.com/vRVg5IP.png\" class=\"slide active\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/bnhGxPK.png\" class=\"slide active\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/rzPF1cq.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/4sHsRk4.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/Cz3Y2Uo.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/HCO0rMH.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/wrJuK3p.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/zde41M3.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/NFBy0Pn.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/ZgG3UoD.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/Ak3uLoh.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/na1tkie.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/RZ1Mhcw.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/Nz4TCot.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/Xx6ya1p.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n\n                </div>\n            </div>\n\n        ");
  });
  $(document).ready(function () {
    let vLN010 = 0;
    let v$7 = $("#premium-panel .slide");
    let v218 = v$7.length;
    setInterval(() => {
      v$7.eq(vLN010).removeClass("active");
      vLN010 = (vLN010 + 1) % v218;
      v$7.eq(vLN010).addClass("active");
    }, 3000);
  });
  $("#buy-premium").on("click", function () {
    window.open("https://discord.gg/sJ5R95Rc6Z", "_blank");
  });
  $("#social-buttons").replaceWith("");
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://wormate.io/images/linelogo-valday2025.png");
  $(".mm-logo2").attr("src", "https://wormate.io/images/linelogo-valday2025.png");
  $(".loading-logo").attr("src", "https://wormate.io/images/linelogo-valday2025.png");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #wtrplayagain, #final-replay").click(function () {
    $(".overlay-2").css("position", "static");
  });
  $("#mm-wtr-settings").click(function () {
    $("#settings-menu").css({
      display: "flex",
      opacity: "1"
    });
  });
  $("#popup-menu-back").click(function () {
    $("#settings-menu").css("opacity", "0");
  });
  $("#mm-skin-next").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 350);
  });
  $("#mm-skin-prev").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 350);
  });
  let vA11 = ["#mm-player-info", "#mm-skin-canv", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-coins-box"];
  $(vA11.join(", ")).click(function () {
    $("#settings-menu").css({
      display: "none",
      opacity: "0"
    });
  });
  let vA12 = ["#mm-action-play", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-wtr-settings"];
  vA12.forEach(function (p126) {
    $(p126).hover(function () {
      $(this).css({
        "box-shadow": "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
      });
    }, function () {
      $(this).css({
        "box-shadow": "0 1px 1px 0 rgba(0,0,0,.5)"
      });
    });
  });
  $(".mm-merchant-cont").replaceWith("");
  $("#fullscreen").prepend("<i class=\"material-icons\">fullscreen</i>");
  $("#wtrplayagain").prepend("<i class=\"material-icons\">replay</i>");
  $(".description-text").replaceWith("\n    <div class=\"description-text\">\n      <div id=\"title\">\n          <div class=\"title-wormate-yildo-flag\" style=\"position: absolute; top: 0; z-index: 1; width: 132%; margin-left: 100px;\">\n              <img src=\"https://wormate.io/images/linelogo-valday2025.png\" width=\"20\" align=\"center\" alt=\"\">WormateTR\n          </div>\n      </div>\n      </div>\n    </div>\n  ");
  $(".description-text").append("\n            <div class=\"containerDoorsServers\">\n                <select id=\"optionSelect\">\n                    <option value=\"sao-a.wormate.io\">sao-a</option>\n                    <option value=\"mum-a.wormate.io\">mum-a</option>\n                    <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                    <option value=\"fra-e.wormate.io\">fra-e</option>\n                    <option value=\"fra-d.wormate.io\">fra-d</option>\n                    <option value=\"fra-c.wormate.io\">fra-c</option>\n                    <option value=\"fra-b.wormate.io\">fra-b</option>\n                    <option value=\"waw-a.wormate.io\">waw-a</option>\n                    <option value=\"dal-b.wormate.io\">dal-b</option>\n                    <option value=\"vin-a.wormate.io\">vin-a</option>\n                    <option value=\"dal-a.wormate.io\">dal-a</option>\n                    <option value=\"sao-c.wormate.io\">sao-c</option>\n                    <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                    <option value=\"sao-b.wormate.io\">sao-b</option>\n                    <option value=\"hil-a.wormate.io\">hil-a</option>\n                    <option value=\"syd-a.wormate.io\">syd-a</option>\n                    <option value=\"sin-g.wormate.io\">sin-g</option>\n                    <option value=\"gra-a.wormate.io\">gra-a</option>\n                    <option value=\"sin-i.wormate.io\">sin-i</option>\n                    <option value=\"sin-h.wormate.io\">sin-h</option>\n                    <option value=\"sin-f.wormate.io\">sin-f</option>\n                    <option value=\"sin-c.wormate.io\">sin-c</option>\n                    <option value=\"sin-b.wormate.io\">sin-b</option>\n                    <option value=\"sin-a.wormate.io\">sin-a</option>\n                    <option value=\"tok-b.wormate.io\">tok-b</option>\n                    <option value=\"sin-d.wormate.io\">sin-d</option>\n                    <option value=\"sin-e.wormate.io\">sin-e</option>\n                </select>\n                \n                <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n                \n                <button id=\"connectButton\">CONNECT</button>\n            </div>\n        ");
  $("#connectButton").click(function () {
    let v219 = $("#optionSelect").val();
    let v220 = $("#numberInput").val();
    if (!v219 || v220 === "") {
      alert("Por favor, selecciona una opciÃ³n y escribe un nÃºmero antes de conectar.");
      return;
    }
    v22 = "wss://" + v219 + ":" + v220 + "/wormy";
    anApp.r.Hd();
    anApp.sa(v22);
    v14.text = "" + v22.replace("wss://", "").replace(".wormate.io", "").replace("/wormy", "");
  });
  var vO20 = {
    sao: "br",
    vin: "vg",
    dal: "ds",
    fra: "de",
    sgp: "sg",
    tok: "jp",
    syd: "au",
    lon: "gb",
    tor: "ca",
    mex: "mx",
    sin: "sg",
    hil: "hn",
    gra: "de"
  };
  var vA13 = [{
    code: "br",
    name: "Peru"
  }, {
    code: "mx",
    name: "Mexico"
  }, {
    code: "us",
    name: "EEUU"
  }, {
    code: "ca",
    name: "Canada"
  }, {
    code: "de",
    name: "Germania"
  }, {
    code: "fr",
    name: "Francia"
  }, {
    code: "sg",
    name: "Singapur"
  }, {
    code: "jp",
    name: "Japon"
  }, {
    code: "au",
    name: "Australia"
  }, {
    code: "gb",
    name: "Granbretana"
  }];
  var v$8 = $("<ul class=\"ui-tabs-nav\"></ul>");
  var v$9 = $("<div class=\"servers-container\"></div>");
  vA13.forEach(function (p127, p128) {
    var v$10 = $("\n                        <li class=\"ui-tabs-tab ui-tab " + (p128 === 0 ? "ui-tab-active" : "") + "\" data-country=\"" + p127.code + "\">\n                            <a><span class=\"flag " + p127.code + "\"></span></a>\n                        </li>\n                    ");
    v$8.append(v$10);
    var v$11 = $("\n                        <div class=\"servers-" + p127.code + "\" style=\"display: " + (p128 === 0 ? "block" : "none") + ";\">\n                            <table class=\"server-table\">\n                                <thead>\n                                    <tr>\n                                        <th>On/Off</th>\n                                        <th>Name</th>\n                                        <th>🌎</th>\n                                        <th>👑</th>\n                                        <th>Streamer</th>\n                                    </tr>\n                                </thead>\n                                <tbody></tbody>\n                            </table>\n                        </div>\n                    ");
    v$9.append(v$11);
  });
  $(".description-text").append(v$8, v$9);
  $(".ui-tabs-tab").click(function () {
    var v221 = $(this).data("country");
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v221).fadeIn(200);
  });
  vA9.forEach(function (p129) {
    var v222 = p129.dataRoom.match(/[a-zA-Z]+/g).join("");
    if (v222 === "ae") {
      v222 = "gb";
    }
    var v223 = p129.dataCon.match(/wss:\/\/([a-z]+)-/i);
    var v224 = v223 ? v223[1] : null;
    var v225 = vO20[v224] ? vO20[v224].toUpperCase() : "!";
    if (vA13.some(p130 => p130.code === v222)) {
      var v226 = vO14[p129.dataRoom.trim().toLowerCase()] || {
        Score: "❗",
        StatusColor: "gray"
      };
      console.log("server.dataRoom:", p129.dataRoom);
      console.log("Claves en top1Servers:", Object.keys(vO14));
      var v$12 = $("\n                    <tr class=\"server-row\" data-wss=\"" + p129.dataCon + "\" value=\"" + p129.dataRoom + "\">\n                            <td class=\"server-status\">\n                                <span class=\"status-dot\" style=\"background-color: " + v226.StatusColor + ";\"></span>\n                            </td>\n                            <td class=\"server-name\" >" + p129.serverName + "</td>\n                            <td class=\"server-region\">" + v225 + "</td>\n                            <td class=\"server-top1\">" + v226.Score + "</td>\n                            <td><img src=\"" + p129.imgSrc + "\" class=\"streamer-image\"></td>\n                        </tr>\n                    ");
      $(".servers-" + v222 + " tbody").append(v$12);
    }
  });
  $(document).on("click", ".server-row", function () {
    let v227 = $(this).attr("value");
    let v228 = $(this).find(".server-name").text();
    let v229 = $(this).attr("data-wss");
    if (v228 && v229) {
      p124.r.Hd();
      p124.sa(v229);
      v14.text = "" + v227;
      console.log("Conectando a:", v229);
    }
  });
  $(".mm-logo").on("click", function () {
    var vPrompt = prompt("Extension 'W' or 'T':");
    if (vPrompt === "W") {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text("Loading..");
        setTimeout(() => {
          $(".mm-logo").text("Loading...");
          setTimeout(() => {
            $(".mm-logo").text("WormWorld");
          }, 2000);
        }, 1500);
      }, 1000);
      $(".servers-peru").html("");
      $(".servers-mexico").html("");
      $(".servers-eeuu").html("");
      $(".servers-canada").html("");
      $(".servers-germania").html("");
      $(".servers-francia").html("");
      $(".servers-singapur").html("");
      $(".servers-japon").html("");
      $(".servers-australia").html("");
      $(".servers-granbretana").html("");
      setTimeout(() => {
        for (a = 0; a < vA9.length; a++) {
          var v230 = vA9[a].dataCon;
          var v231 = vA9[a].dataRoom;
          var v232 = vA9[a].serverName;
          let v233 = "<a>\n                        <img src=\"" + vA9[a].imgSrc + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let v234 = v231.match(/[a-zA-Z]+/g).join("");
          let v235 = document.createElement("p");
          v235.value = v230;
          v235.innerHTML = v232;
          let v236 = document.createElement("div");
          v236.setAttribute("class", "conteiner");
          if (v234 == "br") {
            $(".servers-peru").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "mx") {
            $(".servers-mexico").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "us") {
            $(".servers-eeuu").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "ca") {
            $(".servers-canada").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "de") {
            $(".servers-germania").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "fr") {
            $(".servers-francia").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "sg") {
            $(".servers-singapur").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "jp") {
            $(".servers-japon").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "au") {
            $(".servers-australia").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          } else if (v234 == "ae") {
            $(".servers-granbretana").append(v236);
            $(v236).append(v235);
            $(v235).append(v233);
          }
          $(v235).attr("class", "selectSala");
          $(v235).attr("value", v231);
          $(v235).attr("data-con", v230);
          $(v235).click(function () {
            $(".overlay-2").css("position", "static");
            let v237 = $(this).attr("data-con");
            console.log(v237);
            if (v237) {
              p124.r.Hd();
              p124.sa(v237);
              v14.text = $(this).text();
              console.log($(this).text());
            }
          });
        }
      }, 3000);
    } else if (vPrompt === "T") {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text("Loading..");
        setTimeout(() => {
          $(".mm-logo").text("Loading...");
          setTimeout(() => {
            $(".mm-logo").text("Tim Map");
          }, 2000);
        }, 1500);
      }, 1000);
      $(".servers-peru").html("");
      $(".servers-mexico").html("");
      $(".servers-eeuu").html("");
      $(".servers-canada").html("");
      $(".servers-germania").html("");
      $(".servers-francia").html("");
      $(".servers-singapur").html("");
      $(".servers-japon").html("");
      $(".servers-australia").html("");
      $(".servers-granbretana").html("");
      setTimeout(() => {
        for (a = 0; a < vA7.length; a++) {
          var v238 = vA7[a].dataCon;
          var v239 = vA7[a].dataRoom;
          var v240 = vA7[a].serverName;
          var v241 = vA7[a].imgSrc;
          vA7[a].secondHref;
          let v242 = v239.match(/[a-zA-Z]+/g).join("");
          let v243 = document.createElement("p");
          v243.value = v238;
          let v244 = "<a>\n                        <img src=\"" + v241 + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let v245 = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (v245.test(v244)) {
            v244 = v244.replace(v245, "");
          }
          let v246 = /<span style=\\"(.*?)"><\\\/span>/;
          if (v246.test(v240)) {
            v240 = v240.replace(v246, "<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 4px;float: right;\"></span>");
          }
          v243.innerHTML = v240;
          let v247 = document.createElement("div");
          v247.setAttribute("class", "conteiner");
          if (v242 == "BR") {
            $(".servers-peru").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "MX") {
            $(".servers-mexico").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "US") {
            $(".servers-eeuu").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "CA") {
            $(".servers-canada").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "DE") {
            $(".servers-germania").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "FR") {
            $(".servers-francia").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "SG") {
            $(".servers-singapur").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "JP") {
            $(".servers-japon").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "AU") {
            $(".servers-australia").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          } else if (v242 == "AE") {
            $(".servers-granbretana").append(v247);
            $(v247).append(v243);
            $(v243).append(v244);
          }
          $(v243).attr("class", "selectSala");
          $(v243).attr("value", v239);
          $(v243).attr("data-con", v238);
          $(v243).click(function () {
            $(".overlay-2").css("position", "static");
            let v248 = $(this).attr("data-con");
            let v249 = $(this).attr("value");
            console.log(v249);
            if (v248) {
              p124.r.Hd();
              p124.sa(v248);
              v14.text = v249;
            }
          });
        }
      }, 3000);
    } else {
      alert("Ingresa 'W' o 'T' para continuar.");
    }
  });
};
const vO21 = {
  fontStyle: {
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 9,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
timeFontColors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let vLN011 = 0; vLN011 < timeFontColors.length; vLN011++) {
  let v250 = timeFontColors[vLN011];
  vO21.fontStyle["tfc" + vLN011] = new PIXI.TextStyle({
    align: "center",
    fill: v250,
    fontSize: 25,
    lineJoin: "round",
    whiteSpace: "normal",
    wordWrap: true,
    dropShadow: true,
    dropShadowBlur: 6,
    fontWeight: "bold"
  });
}
vO21.ptc = {};
const vA14 = [40, 40, 40, 120, 40, 20, 40];
for (let vLN012 = 0; vLN012 < vA14.length; vLN012++) {
  let v251 = "clock_ad" + vLN012;
  vO21.ptc[v251] = new PIXI.Text(vA14[vLN012], vO21.fontStyle["tfc" + vLN012]);
  vO21.ptc[v251].y = 61;
}
vO21.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
vO21.containerImgTest = new PIXI.Sprite(vO21.imgTest_desactived);
vO21.containerImgTest.anchor.set(0.5);
vO21.containerImgTest.x = window.innerWidth / 2;
vO21.containerImgTest.y = window.innerHeight / 2;
vO21.containerImgTest.alpha = 0.3;
vO21.pointsContainer = new PIXI.Container();
const vF8 = function () {
  if (!window.coords || window.coords.playerX === undefined || window.coords.playerY === undefined) {
    console.error("Error: window.coords no estï¿½ definido correctamente o no contiene playerX y playerY.");
    return;
  }
  if (!vO21.team_2) {
    vO21.team_2 = new PIXI.Graphics();
    vO21.team_2.zIndex = 2;
    vO21.team_2.alpha = 0.9;
    vO21.team_2.beginFill(16711680);
    vO21.team_2.drawCircle(0, 0, 2.4);
    vO21.team_2.endFill();
    vO21.team_2.lineStyle(1, "black");
    vO21.team_2.drawCircle(0, 0, 2.4);
    vO21.team_2.endFill();
  }
  vO21.team_2.x = window.coords.playerX;
  vO21.team_2.y = window.coords.playerY;
  if (vO21.pointsContainer) {
    vO21.pointsContainer.addChild(vO21.team_2);
  } else {
    console.error("Error: ctx.pointsContainer no estï¿½ definido.");
  }
};
vO21.teamsContainer = new PIXI.Container();
function f61(p131, p132) {
  if (p132.trim() !== "") {
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: true,
      progressBar: true,
      positionClass: "toast-top-center",
      preventDuplicates: true,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      toastClass: "server-message-toast"
    };
    toastr.success(p132, p131, {
      iconClass: "toast-info"
    });
  }
}
function f62(p133, p134, p135) {
  if (p135.trim() !== "") {
    vO8.players.forEach((p136, p137) => {
      if (p136.teamCode === p133 && p136.nickname !== p134) {
        let v252 = p136.nickname.length > 12 ? p136.nickname.slice(0, 12) : p136.nickname;
        toastr.options = {
          closeButton: false,
          debug: false,
          newestOnTop: true,
          progressBar: true,
          positionClass: "toast-top-center",
          preventDuplicates: true,
          onclick: null,
          showDuration: "300",
          hideDuration: "1000",
          timeOut: "5000",
          extendedTimeOut: "1000",
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
        toastr.success("" + p135, "" + p134, {
          iconClass: "toast-info"
        });
        console.log("Mensaje enviado por " + p134 + " recibido por el jugador " + v252 + " (" + p137 + ") del equipo " + p133);
      }
    });
  }
}
function f63(p138, p139) {
  f66(vO8, p138);
  vO8.players.forEach((p140, p141) => {
    if (p140.teamCode === p138) {
      let v253 = p140.teamColor || p139;
      let v254 = p140.nickname.replace(/\u3164/g, "").replace(/WTR_\d+$/, "").trim();
      if (!vO21[p141]) {
        vO21[p141] = new PIXI.Graphics();
        vO21[p141].zIndex = 2;
        vO21[p141].alpha = 0.9;
        vO21.teamsContainer.addChild(vO21[p141]);
        let v255 = new PIXI.Text(v254, {
          fontFamily: vA5[v105],
          fontSize: 14,
          fill: v253,
          stroke: 0,
          strokeThickness: 2
        });
        v255.anchor.set(0.5);
        v255.visible = false;
        v255.y = -15;
        vO21[p141].addChild(v255);
        vO21[p141].hitArea = new PIXI.Circle(0, 0, 2.4);
        vO21[p141].interactive = true;
        vO21[p141].buttonMode = true;
        vO21[p141].on("mouseover", () => {
          v255.visible = true;
        });
        vO21[p141].on("mouseout", () => {
          v255.visible = false;
        });
        vO21[p141].on("mouseup", () => {
          v255.visible = !v255.visible;
        });
        vO21[p141].on("touchend", () => {
          v255.visible = !v255.visible;
        });
        vO21[p141].nameText = v255;
      }
      vO21[p141].clear();
      vO21[p141].beginFill(v253);
      vO21[p141].drawCircle(0, 0, 2.4);
      vO21[p141].endFill();
      vO21[p141].lineStyle(1, 0);
      vO21[p141].drawCircle(0, 0, 2.4);
      vO21[p141].endFill();
      vO21[p141].x = p140.position.x;
      vO21[p141].y = p140.position.y;
      vO21[p141].nameText.y = -15;
      if (vO21[p141].nameText.text !== v254) {
        vO21[p141].nameText.text = v254;
      }
      if (vO21[p141].nameText.style.fill !== v253) {
        vO21[p141].nameText.style.fill = v253;
      }
    }
  });
}
function f64() {
  if (vO21.teamsContainer) {
    Object.keys(vO21).forEach(p142 => {
      if (vO21[p142] instanceof PIXI.Graphics && vO21[p142].parent === vO21.teamsContainer) {
        vO21.teamsContainer.removeChild(vO21[p142]);
        vO21[p142].destroy(true);
        delete vO21[p142];
      }
      if (vO21[p142 + "_text"] && vO21[p142 + "_text"].parent === vO21.teamsContainer) {
        vO21.teamsContainer.removeChild(vO21[p142 + "_text"]);
        vO21[p142 + "_text"].destroy(true);
        delete vO21[p142 + "_text"];
      }
    });
  } else {
    console.error("Error: ctx.teamsContainer is not defined.");
  }
}
vO21.titleRec2 = new PIXI.Text("Friends", vO21.fontStyle.blanco);
vO21.titleRec2.y = -5;
vO21.containerHsRec2 = new PIXI.Container();
vO21.containerHsRec2.x = 30;
vO21.containerHsRec2.y = 170;
let vA15 = [];
for (let vLN013 = 0; vLN013 < 5; vLN013++) {
  let v256 = vLN013 + 1;
  let v257 = new PIXI.Text(v256 + ".", vO21.fontStyle.blanco);
  v257.x = 0;
  v257.y = v256 * 13;
  vO21.containerHsRec2.addChild(v257);
  let v258 = new PIXI.Text("--", {
    fill: "#FFFFFF",
    fontSize: 12
  });
  v258.x = 15;
  v258.y = v256 * 13;
  vO21.containerHsRec2.addChild(v258);
  vA15.push(v258);
}
function f65(p143) {
  let v259 = p143.players;
  let v260 = Array.from(v259.values());
  let v261 = v260.filter(p144 => p144.teamCode === "");
  vA15.forEach((p145, p146) => {
    if (v261[p146]) {
      let v262 = v261[p146];
      p145.text = v262.nickname.substring(0, 20);
      p145.style.fill = v262.teamColor;
    } else {
      p145.text = "--";
      p145.style.fill = "#FFFFFF";
    }
  });
}
vO21.containerHsRec2.addChild(vO21.titleRec2);
(v19 = new PIXI.Container()).x = 80;
v19.y = 185;
const v263 = new PIXI.Text("Team (RS)", {
  fontFamily: vA5[v105],
  fontSize: 10,
  fill: 16753920,
  fontWeight: "bold"
});
v263.x = 10;
v263.y = -5;
v19.addChild(v263);
const v264 = new PIXI.Graphics();
function f66(p147, p148) {
  for (let v265 = v19.children.length - 1; v265 >= 0; v265--) {
    let v266 = v19.children[v265];
    if (v266 !== v263 && v266 !== v264) {
      v19.removeChild(v266);
    }
  }
  let vLN014 = 0;
  p147.players.forEach((p149, p150) => {
    if (p149.teamCode === p148 && p149.wssCode === vO7.wssCode) {
      let v267 = p149.nickname.replace(/[_.\s:)+?]*WTR[T]*_\d+$/g, "").trim();
      let v268 = /[\u0600-\u06FF]/.test(v267);
      let v269 = new PIXI.Text(vLN014 + 1 + ". " + v267, {
        fontFamily: vA5[v105],
        fontSize: 10,
        fill: p149.teamColor || 16753920,
        stroke: 0,
        strokeThickness: 2,
        align: v268 ? "right" : "left"
      });
      v269.x = -50;
      v269.y = 20 + vLN014 * 15;
      v19.addChild(v269);
      if (++vLN014 >= 10) {
        return;
      }
    }
  });
}
const vO22 = {
  fontFamily: "Courier New",
  fontSize: 9,
  fill: 16777215,
  align: "left"
};
v264.lineStyle(0.04, 16777215, 1);
v264.moveTo(-15, 15);
v264.lineTo(80, 15);
v264.x = 5;
v19.addChild(v264);
(v17 = new PIXI.Container()).x = -55;
v17.y = 115;
const v270 = new PIXI.Text("Top HS", vO22);
v270.x = 32;
v270.y = -5;
v17.addChild(v270);
const v271 = new PIXI.Graphics();
v271.lineStyle(2, 16777215, 1);
v271.moveTo(0, 15);
v271.lineTo(80, 15);
v271.x = 15;
v17.addChild(v271);
(v18 = new PIXI.Container()).y = 25;
const v272 = new PIXI.Text("Top 3 HS (kb)", vO22);
v272.x = 10;
v272.y = -5;
v18.addChild(v272);
const v273 = new PIXI.Graphics();
v273.lineStyle(2, 16777215, 1);
v273.moveTo(0, 15);
v273.lineTo(80, 15);
v273.x = 5;
v18.addChild(v273);
var vA16 = [];
const vF9 = p151 => p151.replace(/[_.\s:)+?]*WTR[T]*_\d+$/g, "").trim();
const vF10 = function () {
  let v274 = Array.from(vO8.players.values());
  let v275 = v274.filter(p152 => p152.hskill.hs > 0 && p152.nickname.trim() !== "");
  if (!v275.some(p153 => p153.nickname === "WTR") && false) {
    v275.push({
      nickname: "WTR",
      hskill: {
        hs: 0
      },
      teamColor: vO7.teamColor
    });
  }
  if (v275.length !== 0) {
    v275.sort((p154, p155) => p155.hskill.hs - p154.hskill.hs);
    for (let v276 = v17.children.length - 1; v276 >= 0; v276--) {
      const v277 = v17.children[v276];
      if (v277 !== v270 && v277 !== v271) {
        v17.removeChild(v277);
      }
    }
    vA16.length = 0;
    for (let vLN015 = 0; vLN015 < Math.min(v275.length, 6); vLN015++) {
      const v278 = v275[vLN015];
      let v279 = v278.nickname.replace(/[_.\s:)+?]*WTR[T]*_\d+$/g, "").trim().slice(0, 10).padEnd(10, "_");
      let v280 = (" (" + v278.hskill.hs + ")").padStart(8, " ");
      const v281 = vLN015 + 1 + ".  " + v279 + "  - " + v280;
      const v282 = new PIXI.Text(v281, vO22);
      v282.x = 10;
      v282.y = 20 + vLN015 * 15;
      vA16.push(v282);
      v17.addChild(v282);
    }
    v18.y = 30 + vA16.length * 15;
  }
};
const vA17 = [16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215];
const vO23 = {
  fontFamily: "Courier New",
  fontSize: 9,
  fill: 16777215,
  align: "left",
  wordWrap: true,
  whiteSpace: "normal"
};
vO21.titleRec3 = new PIXI.Text("-----Records----", vO23);
vO21.titleRec3.y = -5;
vO21.titleRec3.x = 10;
vO21.containerHsRec3 = new PIXI.Container();
vO21.containerHsRec3.x = -55;
vO21.containerHsRec3.y = 260;
vO21.recordsEntries = [];
for (let vLN016 = 0; vLN016 < 4; vLN016++) {
  const v283 = (vLN016 + 1) * 13;
  const v284 = new PIXI.Text("👑", {
    fontFamily: "Courier New",
    fontSize: 9,
    fill: 16777215,
    align: "left"
  });
  v284.x = 0;
  v284.y = v283 - 1;
  vO21.containerHsRec3.addChild(v284);
  const v285 = new PIXI.Text("--", vO23);
  v285.x = 18;
  v285.y = v283;
  vO21.containerHsRec3.addChild(v285);
  const v286 = new PIXI.Text("--", vO23);
  v286.x = 110;
  v286.y = v283;
  vO21.containerHsRec3.addChild(v286);
  vO21.recordsEntries.push({
    crown: v284,
    playerNameText: v285,
    playerHsText: v286
  });
}
vO21.containerHsRec3.addChild(vO21.titleRec3);
function f67(p156) {
  for (let vLN017 = 0; vLN017 < vO21.recordsEntries.length; vLN017++) {
    const v287 = p156[vLN017];
    const v288 = vO21.recordsEntries[vLN017];
    if (!v288) {
      continue;
    }
    if (v287) {
      let v289 = v287.nickname || "---";
      if (v289.length > 8) {
        v289 = v289.slice(0, 8) + "..";
      }
      v288.playerNameText.text = v289;
      v288.playerHsText.text = v287.hskill?.hs?.toString() || v287.hs?.toString() || "--";
      v288.crown.visible = true;
    } else {
      v288.playerNameText.text = "---";
      v288.playerHsText.text = "--";
      v288.crown.visible = false;
    }
  }
}
function f68(p157, p158, p159) {
  let v290 = vA14[p158] - parseInt((p159 == 0.99 ? 1 : p159) * vA14[p158] / 1);
  let v291 = "clock_ad" + p158;
  p157.Tf[p158].addChild(vO21.ptc[v291]);
  if (vO21.ptc[v291]) {
    vO21.ptc[v291].x = v290 >= 100 ? 11 : v290 >= 10 ? 18 : 26;
    vO21.ptc[v291].text = v290;
  }
}
function f69() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var v292 = $(this).attr("data-country-name");
    $(".ui-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v292.toLowerCase()).fadeIn(200);
    $(".servers-container > div").not(".servers-" + v292.toLowerCase()).fadeOut(100);
  });
}
function f70() {
  var vO24 = {};
  window.onclick = function () {
    if ((vO24 = window.nodes) && Object.keys(vO24).length > 0 && (console.log(vO24), vO24)) {
      var v293 = window.mouseX - vO24.qj.If.x;
      var v294 = window.mouseY - vO24.qj.If.y;
      var v295 = vO24.Mb.ad;
      var v296 = Math.sqrt(v293 * v293 + v294 * v294);
      console.log("Cell:", vO24, "nickname: ", v295, "Distance:", v296);
    }
  };
}
function f71(p160, p161 = true) {
  return new Promise((p162, p163) => {
    var v297 = document.createElement("script");
    v297.type = "text/javascript";
    v297.src = p160;
    v297.defer = p161;
    v297.onload = p162;
    v297.onerror = p163;
    document.head.appendChild(v297);
  });
}
function f72(p164) {
  return new Promise((p165, p166) => {
    var v298 = document.createElement("link");
    v298.rel = "stylesheet";
    v298.type = "text/css";
    v298.href = p164;
    v298.onload = p165;
    v298.onerror = p166;
    document.head.appendChild(v298);
  });
}
"use strict";
f72("https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap");
f71("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js", true);
f72("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css");
f71("https://cdn.socket.io/4.4.1/socket.io.min.js");
f71("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
f72("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
var v299 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p167) {
  return typeof p167;
} : function (p168) {
  if (p168 && typeof Symbol == "function" && p168.constructor === Symbol && p168 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p168;
  }
};
function f73(p169, p170, p171, p172, p173, p174) {
  var v300 = localStorage.getItem(p172);
  if (v300) {
    if (v300.startsWith("0x")) {
      v300 = "#" + v300.substring(2);
    } else if (!v300.startsWith("#")) {
      v300 = "#" + v300;
    }
  }
  vO4[p172] = v300 || p173;
  $(p169).append("<div class=\"option colorpicker\"><div class=\"name\">" + p171 + "</div><input id=\"" + p172 + "\" type=\"text\" class=\"minicolors form-control\"><div class=\"color-preview\" id=\"preview_" + p172 + "\" style=\"background-color: " + vO4[p172] + ";\" onclick=\"openColorPanel('" + p172 + "')\"></div></div>");
  if (localStorage.getItem(p172) !== null) {
    vO4[p172] = localStorage.getItem(p172);
  }
  if (p174) {
    p174();
  }
  $("#" + p172).minicolors({
    control: $(this).attr("data-control") || "hue",
    defaultValue: vO4[p172] || p173,
    format: $(this).attr("data-format") || "hex",
    inline: $(this).attr("data-inline") === "true",
    letterCase: $(this).attr("data-letterCase") || "lowercase",
    opacity: $(this).attr("data-opacity") || true,
    position: $(this).attr("data-position") || "bottom left",
    theme: "default",
    change: function (p175, p176) {
      var v301 = p175.replace("#", "");
      vO4[p172] = v301;
      localStorage.setItem(p172, v301);
      if (p174) {
        p174();
      }
      $("#preview_" + p172).css("background-color", p175);
    }
  });
}
function f74(p177) {
  $("#" + p177).minicolors("show");
}
function f75(p178 = null) {
  var v302 = document.getElementById("backgroundPreview");
  let v303 = localStorage.getItem("selectedBackground");
  if (p178 === null && v303 !== null) {
    p178 = parseInt(v303);
  }
  if (p178 === null || p178 < 0 || p178 >= vA4.length) {
    p178 = 0;
  }
  var v304 = vA4[p178];
  v302.style.backgroundImage = "url(" + v304 + ")";
  if (typeof anApp != "undefined" && anApp.q && anApp.q.Cf) {
    anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(v304));
  }
  localStorage.setItem("selectedBackground", p178);
}
function f76() {
  var v305 = document.getElementById("fontPreview");
  let v306 = vA5[v105];
  v305.style.fontFamily = v306;
  localStorage.setItem("selectedFont", v105);
}
(function () {
  try {
    console.log(function (p179, p180) {
      for (var vLN018 = 0; vLN018 < p180.length; vLN018 += 2) {
        p179 = p179.replaceAll(p180[vLN018], p180[vLN018 + 1]);
      }
      return p179;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e10) {}
})();
window.addEventListener("load", function () {
  function f77() {
    (function (p181, p182, p183) {
      var vA18 = [];
      var vA19 = [];
      var vO25 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p184, p185) {
          var vThis2 = this;
          setTimeout(function () {
            p185(vThis2[p184]);
          }, 0);
        },
        addTest: function (p186, p187, p188) {
          vA19.push({
            name: p186,
            fn: p187,
            options: p188
          });
        },
        addAsyncTest: function (p189) {
          vA19.push({
            name: null,
            fn: p189
          });
        }
      };
      function f78() {}
      f78.prototype = vO25;
      f78 = new f78();
      var v307 = false;
      try {
        v307 = "WebSocket" in p181 && p181.WebSocket.CLOSING === 2;
      } catch (e11) {}
      f78.addTest("websockets", v307);
      var v308 = p182.documentElement;
      var v309 = v308.nodeName.toLowerCase() === "svg";
      f78.addTest("canvas", function () {
        var v310 = typeof p182.createElement != "function" ? p182.createElement(arguments[0]) : v309 ? p182.createElementNS.call(p182, "http://www.w3.org/2000/svg", arguments[0]) : p182.createElement.apply(p182, arguments);
        return !!v310.getContext && !!v310.getContext("2d");
      });
      f78.addTest("canvastext", function () {
        return f78.canvas !== false && typeof (typeof p182.createElement != "function" ? p182.createElement(arguments[0]) : v309 ? p182.createElementNS.call(p182, "http://www.w3.org/2000/svg", arguments[0]) : p182.createElement.apply(p182, arguments)).getContext("2d").fillText == "function";
      });
      (function () {
        var v311;
        var v312;
        var v313;
        var v314;
        var v315;
        var v316;
        var v317;
        for (var v318 in vA19) {
          if (vA19.hasOwnProperty(v318)) {
            v311 = [];
            if ((v312 = vA19[v318]).name && (v311.push(v312.name.toLowerCase()), v312.options && v312.options.aliases && v312.options.aliases.length)) {
              for (v313 = 0; v313 < v312.options.aliases.length; v313++) {
                v311.push(v312.options.aliases[v313].toLowerCase());
              }
            }
            v315 = 0;
            for (v314 = (v312.fn === undefined ? "undefined" : v299(v312.fn)) === "function" ? v312.fn() : v312.fn; v315 < v311.length; v315++) {
              if ((v317 = (v316 = v311[v315]).split(".")).length === 1) {
                f78[v317[0]] = v314;
              } else {
                if (!!f78[v317[0]] && !(f78[v317[0]] instanceof Boolean)) {
                  f78[v317[0]] = new Boolean(f78[v317[0]]);
                }
                f78[v317[0]][v317[1]] = v314;
              }
              vA18.push((v314 ? "" : "no-") + v317.join("-"));
            }
          }
        }
      })();
      (function (p190) {
        var v319 = v308.className;
        var v320 = f78._config.classPrefix || "";
        if (v309) {
          v319 = v319.baseVal;
        }
        if (f78._config.enableJSClass) {
          var vRegExp3 = RegExp("(^|\\s)" + v320 + "no-js(\\s|$)");
          v319 = v319.replace(vRegExp3, "$1" + v320 + "js$2");
        }
        if (f78._config.enableClasses) {
          v319 += " " + v320 + p190.join(" " + v320);
          if (v309) {
            v308.className.baseVal = v319;
          } else {
            v308.className = v319;
          }
        }
      })(vA18);
      delete vO25.addTest;
      delete vO25.addAsyncTest;
      for (var vLN019 = 0; vLN019 < f78._q.length; vLN019++) {
        f78._q[vLN019]();
      }
      p181.Modernizr = f78;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f77()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f79(p191) {
      let v321 = p191 + "=";
      let v322 = document.cookie.split(";");
      for (let vLN020 = 0; vLN020 < v322.length; vLN020++) {
        let v323 = v322[vLN020];
        while (v323.charAt(0) === " ") {
          v323 = v323.substring(1);
        }
        if (v323.indexOf(v321) === 0) {
          return v323.substring(v321.length, v323.length);
        }
      }
      return "";
    }
    function f80(p192, p193, p194) {
      var v324 = new Date();
      v324.setTime(v324.getTime() + p194 * 86400000);
      var v325 = "expires=" + v324.toUTCString();
      document.cookie = p192 + "=" + p193 + "; " + v325 + "; path=/";
    }
    function f81(p195) {
      var v326 = (Math.floor(p195) % 60).toString();
      var v327 = (Math.floor(p195 / 60) % 60).toString();
      var v328 = (Math.floor(p195 / 3600) % 24).toString();
      var v329 = Math.floor(p195 / 86400).toString();
      var v330 = window.I18N_MESSAGES["util.time.days"];
      var v331 = window.I18N_MESSAGES["util.time.hours"];
      var v332 = window.I18N_MESSAGES["util.time.min"];
      var v333 = window.I18N_MESSAGES["util.time.sec"];
      if (v329 > 0) {
        return v329 + " " + v330 + " " + v328 + " " + v331 + " " + v327 + " " + v332 + " " + v326 + " " + v333;
      } else if (v328 > 0) {
        return v328 + " " + v331 + " " + v327 + " " + v332 + " " + v326 + " " + v333;
      } else if (v327 > 0) {
        return v327 + " " + v332 + " " + v326 + " " + v333;
      } else {
        return v326 + " " + v333;
      }
    }
    function f82(p196, p197, p198) {
      var v334 = document.createElement("script");
      var v335 = true;
      if (p197) {
        v334.id = p197;
      }
      v334.async = "async";
      v334.type = "text/javascript";
      v334.src = p196;
      if (p198) {
        v334.onload = v334.onreadystatechange = function () {
          v335 = false;
          try {
            p198();
          } catch (e12) {
            console.log(e12);
          }
          v334.onload = v334.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v334);
    }
    function f83(p199, p200) {
      p200.prototype = Object.create(p199.prototype);
      p200.prototype.constructor = p200;
      p200.parent = p199;
      return p200;
    }
    function f84(p201) {
      if ((p201 %= v401) < 0) {
        return p201 + v401;
      } else {
        return p201;
      }
    }
    function f85(p202, p203, p204, p205) {
      var v336 = p203 + p205;
      if (p202 == null) {
        throw TypeError("this is null or not defined");
      }
      var v337 = p202.length >>> 0;
      var v338 = p204 >> 0;
      var v339 = v338 < 0 ? Math.max(v337 + v338, 0) : Math.min(v338, v337);
      var v340 = p203 >> 0;
      var v341 = v340 < 0 ? Math.max(v337 + v340, 0) : Math.min(v340, v337);
      var v342 = v336 === undefined ? v337 : v336 >> 0;
      var v343 = Math.min((v342 < 0 ? Math.max(v337 + v342, 0) : Math.min(v342, v337)) - v341, v337 - v339);
      var vLN13 = 1;
      for (v341 < v339 && v339 < v341 + v343 && (vLN13 = -1, v341 += v343 - 1, v339 += v343 - 1); v343 > 0;) {
        if (v341 in p202) {
          p202[v339] = p202[v341];
        } else {
          delete p202[v339];
        }
        v341 += vLN13;
        v339 += vLN13;
        v343--;
      }
      return p202;
    }
    function f86(p206) {
      if (p206.parent != null) {
        p206.parent.removeChild(p206);
      }
    }
    function f87(p207, p208, p209) {
      var v344 = (1 - Math.abs(p209 * 2 - 1)) * p208;
      var v345 = v344 * (1 - Math.abs(p207 / 60 % 2 - 1));
      var v346 = p209 - v344 / 2;
      if (p207 >= 0 && p207 < 60) {
        return [v346 + v344, v346 + v345, v346 + 0];
      } else if (p207 >= 60 && p207 < 120) {
        return [v346 + v345, v346 + v344, v346 + 0];
      } else if (p207 >= 120 && p207 < 180) {
        return [v346 + 0, v346 + v344, v346 + v345];
      } else if (p207 >= 180 && p207 < 240) {
        return [v346 + 0, v346 + v345, v346 + v344];
      } else if (p207 >= 240 && p207 < 300) {
        return [v346 + v345, v346 + 0, v346 + v344];
      } else {
        return [v346 + v344, v346 + 0, v346 + v345];
      }
    }
    function f88() {
      function f89() {
        $("#adbl-1").text(window.I18N_MESSAGES["index.game.antiadblocker.msg1"]);
        $("#adbl-2").text(window.I18N_MESSAGES["index.game.antiadblocker.msg2"]);
        $("#adbl-3").text(window.I18N_MESSAGES["index.game.antiadblocker.msg3"]);
        $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", 10));
        $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
        $("#adbl-continue").hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(500);
        var vLN5 = 5;
        for (var vLN021 = 0; vLN021 < 5; vLN021++) {
          setTimeout(function () {
            vLN5--;
            $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", vLN5));
            if (vLN5 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e13) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN021 + 1) * 1000);
        }
      }
      var v347 = false;
      function f90() {}
      var vO26 = {};
      $("#adbl-continue").click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(500);
        f90(false);
      });
      vO26.a = function (p210) {
        f90 = p210;
        if (!v347) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (p211) {
                  console.log("aipC");
                  f90(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e14) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v347 = true;
          } catch (e15) {}
        }
      };
      vO26.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e16) {}
          f89();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e17) {}
          f89();
        }
      };
      return vO26;
    }
    function f91(p212, p213) {
      return {
        a: function () {},
        c: function () {}
      };
    }
    function f92() {
      function f93(p214) {
        var v348 = p214 + Math.floor(Math.random() * 65535) * 37;
        f80(vF17.d, v348, 30);
      }
      return function () {
        var v349 = parseInt(f79(vF17.d)) % 37;
        console.log("init1 pSC: " + v349);
        if (!(v349 >= 0) || !(v349 < v991.e)) {
          v349 = Math.max(0, v991.e - 2);
          console.log("init2 pSC: " + v349);
        }
        var vO27 = {};
        vUndefined2 = vO27;
        vO27.f = v991;
        vO27.g = false;
        vO27.i = Date.now();
        vO27.j = 0;
        vO27.k = 0;
        vO27.l = null;
        vO27.m = vUndefined;
        vO27.n = v396;
        vO27.o = null;
        vO27.p = null;
        vO27.q = null;
        vO27.r = null;
        vO27.s = null;
        vO27.t = null;
        vO27.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p215) {
              if (p215.coords !== undefined) {
                var v350 = p215.coords;
                if (v350.latitude !== undefined && v350.longitude !== undefined) {
                  vO27.l = p215;
                }
              }
            }, function (p216) {});
          }
        } catch (e18) {}
        vO27.v = function () {
          vO27.p = new vF12();
          vO27.q = new vF31();
          vO27.r = new vF14();
          vO27.s = new vF32();
          vO27.t = new vF28();
          vO27.u = new vF34();
          vO27.o = new f94();
          vO27.o.z = new vF23(vO27.o);
          vO27.a();
        };
        vO27.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e19) {}
          vO27.o.A = function () {
            vO27.o.B();
          };
          vO27.o.C = function () {
            var v351 = vO27.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v351);
            } catch (e20) {}
            vO27.r.G(vF14.AudioState.H);
            vO27.s.I(vO27.s.H.J());
          };
          vO27.o.B = function () {
            var v352;
            var v353;
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e21) {}
            if ($("body").height() >= 430) {
              vO27.f.K.c();
            }
            vO27.p.L();
            v352 = Math.floor(vO27.o.N.M);
            v353 = vO27.o.O;
            if (vO27.u.P()) {
              vO27.u.Q(function () {
                vO27.R(v352, v353);
              });
            } else {
              vO27.R(v352, v353);
            }
          };
          vO27.o.S = function (p217) {
            p217(vO27.s.H.T(), vO27.s.H.U());
          };
          vO27.u.V(function () {
            if (vO27.p.W) {
              vO27.r.G(vF14.AudioState.F);
              vO27.s.I(vO27.s.F);
            }
            if (vO27.u.P()) {
              try {
                var v354 = vO27.u.X();
                ga("set", "userId", v354);
              } catch (e22) {}
            }
            if (vO27.Y() && vO27.u.P() && !vO27.u.Z()) {
              vO27.$(false, false);
              vO27.s.aa._(new v512());
            } else {
              vO27.ba(true);
            }
          });
          vO27.p.ca(function () {
            vO27.r.G(vF14.AudioState.F);
            vO27.s.I(vO27.s.F);
          });
          vO27.q.a(function () {
            vO27.o.a();
            vO27.r.a();
            vO27.s.a();
            vO27.t.a();
            vO27.p.a();
            vO27.u.a();
            if (vO27.Y() && !vO27.Z()) {
              vO27.s.aa._(new v512());
            } else {
              vO27.ba(true);
            }
          });
        };
        vO27.da = function (p218) {
          if (vO27.u.P()) {
            var v355 = vO27.u.ea();
            $.get(vAtob + "/pub/wuid/" + v355 + "/consent/change?value=" + encodeURI(p218), function (p219) {});
          }
        };
        vO27.fa = function (p220) {
          var v356 = vO27.u.ea();
          var v357 = vO27.s.F.D();
          var v358 = vO27.s.F.ga();
          var v359 = vO27.t.ha(vF29.ia);
          var v360 = vO27.t.ha(vF29.ja);
          var v361 = vO27.t.ha(vF29.ka);
          var v362 = vO27.t.ha(vF29.la);
          var v363 = vO27.t.ha(vF29.ma);
          var vLN022 = 0;
          if (vO27.l != null) {
            vLN022 = Math.max(0, Math.min(32767, (vO27.l.coords.latitude + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (vO27.l.coords.longitude + 180) / 360 * 65536)) << 16;
          }
          if (vO2.isSkinCustom(v359)) {
            34;
          } else {
            v359;
          }
          let v364 = "WTR_" + (v359 > 9999 ? "0000" : v359.toString().padStart(4, 0)) + (v363 > 99999 ? "00000" : v363.toString().padStart(5, 0));
          v358 = (v358 = (v358.length >= 32 ? v358.substr(0, 16) : v358.substr(0, 16).padEnd(16)) + v364).trim().replace(/\s/g, "_");
          console.log(v358);
          var v365 = document.getElementById("teamNickname");
          if (v365 !== null) {
            vO7.nickname = v358;
          } else {
            console.warn("âš ï¸ Advertencia: No se encontrÃ³ el elemento 'teamNickname'.");
          }
          var v366 = vAtob + "/pub/wuid/" + v356 + "/start?gameMode=" + encodeURI(v357) + "&gh=" + vLN022 + "&nickname=" + encodeURI(v358) + "&skinId=" + vO2.validInput(v359) + "&eyesId=" + encodeURI(v360) + "&mouthId=" + encodeURI(v361) + "&glassesId=" + encodeURI(v362) + "&hatId=" + encodeURI(v363);
          console.log("urlRequest: " + v366);
          $.get(v366, function (p221) {
            p220(p221.server_url);
          });
        };
        vO27.na = function () {
          v349++;
          console.log("start pSC: " + v349);
          if (!vO27.f.oa && v349 >= vO27.f.e) {
            vO27.s.I(vO27.s.pa);
            vO27.r.G(vF14.AudioState.qa);
            vO27.f.ra.b();
          } else {
            f93(v349);
            vO27.sa();
            v14.text = "";
          }
        };
        vO27.sa = function (p222) {
          lxpdkillcount = 0;
          lxpdhscount = 0;
          if (vO27.o.ta()) {
            vO27.s.I(vO27.s.ua);
            vO27.r.G(vF14.AudioState.ua);
            var v367 = vO27.s.F.D();
            f80(vF17.va, v367, 30);
            console.log("save gm: " + v367);
            var v368 = vO27.s.xa.wa();
            f80(vF17.ya, v368, 30);
            console.log("save sPN: " + v368);
            if (vO27.u.P()) {
              vO27.fa(function (p223) {
                v22 = p222 || p223;
                vO7.wssServer = v22;
                vO27.o.za(p222 || p223, vO27.u.ea());
              });
            } else {
              var v369 = vO27.s.F.ga();
              f80(vF17.Aa, v369, 30);
              var v370 = vO27.t.ha(vF29.ia);
              f80(vF17.Ba, v370, 30);
              vO27.fa(function (p224) {
                v22 = p222 || p224;
                vO7.wssServer = v22;
                vO27.o.Ca(p222 || p224, v369, v370);
              });
            }
          }
        };
        vO27.R = function (p225, p226) {
          var v371 = vO27.s.F.ga();
          vO27.s.H.Da(p225, p226, v371);
          vO27.r.G(vF14.AudioState.Ea);
          vO27.s.I(vO27.s.H.Fa());
        };
        vO27.Ga = function () {
          if (!vO27.Ha()) {
            return vO27.t.Ia();
          }
          var vParseInt = parseInt(f79(vF17.Ba));
          if (vParseInt != null && vO27.t.Ja(vParseInt, vF29.ia)) {
            return vParseInt;
          } else {
            return vO27.t.Ia();
          }
        };
        vO27.Ka = function (p227) {
          f80(vF17.La, !!p227, 1800);
        };
        vO27.Ha = function () {
          return f79(vF17.La) === "true";
        };
        vO27.ba = function (p228) {
          if (p228 != vO27.g) {
            vO27.g = p228;
            var v372 = v372 || {};
            v372.consented = p228;
            v372.gdprConsent = p228;
            vO27.f.Ma.a();
            vO27.f.K.a();
            vO27.f.ra.a(function (p229) {
              if (p229) {
                f93(v349 = 0);
              }
              vO27.sa();
            });
          }
        };
        vO27.$ = function (p230, p231) {
          f80(vF17.Na, p230 ? "true" : "false");
          if (p231) {
            vO27.da(p230);
          }
          vO27.ba(p230);
        };
        vO27.Z = function () {
          return f79(vF17.Na) === "true";
        };
        vO27.Y = function () {
          try {
            return !!window.isIPInEEA || vO27.l != null && !!vF18.Oa(vO27.l.coords.latitude, vO27.l.coords.longitude);
          } catch (e23) {
            return true;
          }
        };
        vO27.Pa = function () {
          vO27.j = Date.now();
          vO27.k = vO27.j - vO27.i;
          vO27.o.Qa(vO27.j, vO27.k);
          vO27.s.Qa(vO27.j, vO27.k);
          vO27.i = vO27.j;
        };
        vO27.Ra = function () {
          vO27.s.Ra();
        };
        return vO27;
      }();
    }
    function f94() {
      var vO28 = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new vF21(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      vO28.fb.ub = 500;
      vO28.N = new vF37(vO28.fb);
      vO28.a = function () {
        null.vb((window.anApp = vUndefined2).s.H.wb);
        setInterval(function () {
          vO28.S(function (p232, p233) {
            console.log(p232, p233);
            vO28.xb(p232, p233);
          });
        }, vO6.mouseDelay);
        let vLN023 = 0;
        vO28.updatePacketInterval = function (p234) {
          function f95() {
            let v373 = Date.now();
            if (v373 - vLN023 >= vO6.mouseDelay) {
              vO28.S(function (p235, p236) {
                console.log(p235, p236);
                vO28.xb(p235, p236);
              });
              vLN023 = v373;
            }
            requestAnimationFrame(f95);
          }
          vO6.mouseDelay = p234;
          vLN023 = 0;
          f95();
        };
      };
      vO28.yb = function (p237, p238, p239, p240) {
        vO28.lb = p237;
        vO28.mb = p238;
        vO28.nb = p239;
        vO28.ob = p240;
        vO28.zb();
      };
      vO28.Ab = function (p241) {
        vO28.kb = p241;
        vO28.zb();
      };
      vO28.zb = function () {
        vO28.pb = vO28.lb - 1;
        vO28.qb = 2;
        vO28.rb = 0;
        vO28.sb = vO28.ob + 1;
      };
      vO28.Qa = function (p242, p243) {
        vO28.$a += p243;
        vO28.Za -= p243 * 0;
        null.Bb();
        if (!true && (!true || !true)) {
          vO28.Cb(p242, p243);
          vO28.jb = 4 + null.Db * 12.5;
        }
        var v374 = 1000 / Math.max(1, p243);
        var vLN024 = 0;
        for (var vLN025 = 0; vLN025 < vO28.Xa.length - 1; vLN025++) {
          vLN024 += vO28.Xa[vLN025];
          vO28.Xa[vLN025] = vO28.Xa[vLN025 + 1];
        }
        vO28.Xa[vO28.Xa.length - 1] = v374;
        vO28.Wa = (vLN024 + v374) / vO28.Xa.length;
      };
      vO28.Eb = function (p244, p245) {
        return p244 > vO28.pb && p244 < 1 && p245 > 1 && p245 < vO28.sb;
      };
      vO28.Cb = function (p246, p247) {
        var v375;
        var v376;
        var v377 = -NaN;
        null.Fb(p246, p247);
        null.Gb(p246, p247, v377, vO28.Eb);
        var vLN026 = 0;
        for (v375 in vO28.hb) {
          var v378 = vO28.hb[v375];
          v378.Fb(p246, p247);
          v378.Gb(p246, p247, v377, vO28.Eb);
          if (v378.Hb && v378.Db > vLN026) {
            vLN026 = v378.Db;
          }
          if (!v378.Ib && (!!(v378.Jb < 0.005) || !v378.Hb)) {
            v378.Kb();
            delete vO28.hb[v378.Mb.Lb];
          }
        }
        vO28.Ab(vLN026 * 3);
        for (v376 in vO28.gb) {
          var v379 = vO28.gb[v376];
          v379.Fb(p246, p247);
          v379.Gb(p246, p247, vO28.Eb);
          if (v379.Nb && (v379.Jb < 0.005 || !vO28.Eb(v379.Ob, v379.Pb))) {
            v379.Kb();
            delete vO28.gb[v379.Mb.Lb];
          }
        }
      };
      vO28.Qb = function (p248, p249) {
        var v380 = (window.anApp = vUndefined2).j;
        vO28.bb = p248;
        if (p248 === 0) {
          vO28._a = v380 - 95;
          vO28.ab = v380;
          vO28.$a = 0;
          vO28.Za = 0;
        } else {
          vO28._a = 0;
          vO28.ab = 0 + p249;
        }
        vO28.Ya = -NaN;
      };
      vO28.Rb = function () {
        if (false || false) {
          vO28.cb = 3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              vO28.db = null;
            }
          }, 5000);
          vO28.B();
        }
      };
      vO28.ta = function () {
        return true && (vO28.cb = 1, null.Sb(), vO28.gb = {}, vO28.hb = {}, null.Tb(), false && (null.close(), vO28.db = null), true);
      };
      vO28.Ub = function () {
        vO28.db = null;
        null.Sb();
        vO28.A();
        vO28.cb = 0;
      };
      vO28.za = function (p250, p251) {
        vO28.Vb(p250, function () {
          console.log(p251);
          var v381 = Math.min(2048, p251.length);
          var v382 = new ArrayBuffer(6 + v381 * 2);
          var v383 = new DataView(v382);
          var vLN027 = 0;
          v383.setInt8(vLN027, 129);
          vLN027 += 1;
          v383.setInt16(vLN027, 2800);
          vLN027 += 2;
          v383.setInt8(vLN027, 1);
          vLN027 += 1;
          v383.setInt16(vLN027, v381);
          vLN027 += 2;
          for (var vLN028 = 0; vLN028 < v381; vLN028++) {
            v383.setInt16(vLN027, p251.charCodeAt(vLN028));
            vLN027 += 2;
          }
          vO28.Wb(v382);
        });
      };
      let v384;
      function f96() {
        f97();
        v384 = setInterval(() => {
          if (null && null.readyState === WebSocket.OPEN) {
            const v385 = new Uint8Array([]);
            null.send(v385);
          }
        }, 1);
      }
      function f97() {
        if (v384) {
          clearInterval(v384);
          v384 = null;
        }
      }
      vO28.Ca = function (p252, p253, p254) {
        vO28.Vb(p252, function () {
          var v386 = Math.min(32, p253.length);
          var v387 = new ArrayBuffer(7 + v386 * 2);
          var v388 = new DataView(v387);
          var vLN029 = 0;
          v388.setInt8(vLN029, 129);
          vLN029 += 1;
          v388.setInt16(vLN029, 2800);
          vLN029 += 2;
          v388.setInt8(vLN029, 0);
          vLN029 += 1;
          v388.setInt16(vLN029, p254);
          vLN029 += 2;
          v388.setInt8(vLN029, v386);
          vLN029++;
          for (var vLN030 = 0; vLN030 < v386; vLN030++) {
            v388.setInt16(vLN029, p253.charCodeAt(vLN030));
            vLN029 += 2;
          }
          vO28.Wb(v387);
          console.log(v387);
        });
      };
      vO28.Wb = function (p255) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(p255);
          }
        } catch (e24) {
          console.log("Socket send error: " + e24);
          vO28.Ub();
        }
      };
      vO28.xb = function (p256, p257) {
        var v389 = p257 ? 128 : 0;
        var v390 = f84(p256) / v401 * 128 & 127;
        var v391 = (v389 | v390) & 255;
        if (v391 !== 300) {
          var v392 = new ArrayBuffer(1);
          new DataView(v392).setInt8(0, v391);
          vO28.Wb(v392);
          vO28.eb = v391;
        }
      };
      vO28.Vb = function (p258, p259) {
        var v393 = vO28.db = new WebSocket(p258);
        v393.binaryType = "arraybuffer";
        window.onOpen = v393.onopen = function () {
          if (v393 === null) {
            console.log("Socket opened");
            f96();
            p259();
          }
          v107 = true;
        };
        window.onclose = v393.onclose = function () {
          vO2.aload = false;
          if (v393 === null) {
            console.log("Socket closed");
            f97();
            vO28.Ub();
          }
          v107 = false;
        };
        v393.onerror = function (p260) {
          console.log(p260.data);
          if (v393 === null) {
            console.log("Socket error");
            f97();
            vO28.Ub();
          }
          v107 = false;
        };
        v393.onmessage = function (p261) {
          if (v393 === null) {
            null.Xb(p261.data);
            let v394 = Date.now();
            v102 = v394 - v998;
            v998 = v394;
            vA29.push(v102);
            if (vA29.length > 20) {
              vA29.shift();
            }
            let v395 = Math.round(vA29.reduce((p262, p263) => p262 + p263, 0) / vA29.length);
            v15.text = v395 + "ms";
            v15.style.fill = v395 <= 50 ? "#00FF00" : v395 <= 80 ? "#ADFF2F" : v395 <= 120 ? "#FFFF00" : v395 <= 180 ? "#FFA500" : v395 <= 250 ? "#FF4500" : "#FF0000";
          }
        };
      };
      return vO28;
    }
    var vAtob = "https://gateway.wormate.io";
    var vAtob2 = "https://resources.wormate.io";
    var v396 = window.I18N_LANG;
    if (!v396) {
      v396 = "en";
    }
    var vUndefined = undefined;
    switch (v396) {
      case "uk":
        vUndefined = "uk_UA";
        break;
      case "de":
        vUndefined = "de_DE";
        break;
      case "fr":
        vUndefined = "fr_FR";
        break;
      case "ru":
        vUndefined = "ru_RU";
        break;
      case "es":
        vUndefined = "es_ES";
        break;
      default:
        vUndefined = "en_US";
    }
    moment.locale(vUndefined);
    var v397;
    var v398;
    var v399;
    var v400;
    var vUndefined2 = undefined;
    v398 = (v397 = {
      Yb: eval("PIXI")
    }).Yb["BLEND_MODES"];
    v399 = v397.Yb["WRAP_MODES"];
    var vO29 = {
      Zb: v397.Yb["Container"],
      $b: v397.Yb["BaseTexture"],
      _b: v397.Yb["Texture"],
      ac: v397.Yb["Renderer"],
      bc: v397.Yb["Graphics"],
      cc: v397.Yb["Shader"],
      dc: v397.Yb["Rectangle"],
      ec: v397.Yb["Sprite"],
      fc: v397.Yb["Text"],
      gc: v397.Yb["Geometry"],
      hc: v397.Yb["Mesh"],
      ic: {
        jc: v398["ADD"]
      },
      kc: {
        lc: v399["REPEAT"],
        CLAMP: v397.Yb.WRAP_MODES.CLAMP
      }
    };
    var v401 = Math.PI * 2;
    v400 = ["getInt8", "getInt16", "getInt32", "getFloat32", "getFloat64"];
    DataView.prototype.mc = function (p264) {
      return this[v400[0]](p264);
    };
    DataView.prototype.nc = function (p265) {
      return this[v400[1]](p265);
    };
    DataView.prototype.oc = function (p266) {
      return this[v400[2]](p266);
    };
    DataView.prototype.pc = function (p267) {
      return this[v400[3]](p267);
    };
    DataView.prototype.qc = function (p268) {
      return this[v400[4]](p268);
    };
    var v402;
    var v403;
    var v404;
    var v405;
    var v406;
    var v407;
    var v408;
    var v409;
    var v410;
    var v411;
    var v412;
    var v413;
    var v414;
    var v415;
    var v416;
    var v417;
    var v418;
    var v419;
    var v420;
    var v421;
    var v422;
    var v423;
    var v424;
    var v425;
    var v426;
    var v427;
    var v428;
    var v429;
    var v430;
    var v431;
    var v432;
    var v433;
    var v434;
    var v435;
    var v436;
    var v437;
    var v438;
    var v439;
    var v440;
    var v441;
    var v442;
    var v443;
    var v444;
    var v445;
    var v446;
    var v447;
    var v448;
    var v449;
    var v450;
    var v451;
    var v452;
    var v453;
    var v454;
    var v455;
    var v456;
    var v457;
    var v458;
    var v459;
    var v460;
    var v461;
    var v462;
    var v463;
    var v464;
    var v465;
    var v466;
    var v467;
    var v468;
    var v469;
    var v470;
    var v471;
    var v472;
    var v473;
    var v474;
    var v475;
    var v476;
    var v477;
    var v478;
    var v479;
    var v480;
    var v481;
    var v482;
    var v483;
    var v484;
    var v485;
    var v486;
    var v487;
    var v488;
    var v489;
    var v490;
    var v491;
    var v492;
    var v493;
    var v494;
    var v495;
    var v496;
    var v497;
    var v498;
    var v499;
    var v500;
    var v501;
    var v502;
    var v503;
    var v504;
    var v505;
    var v506;
    var v507;
    var v508;
    var v509;
    var v510;
    var v511;
    var v512;
    var vF11 = function () {
      function f98(p269) {
        this.rc = p269;
        this.sc = false;
        this.tc = 1;
      }
      f98.VELOCITY_TYPE = 0;
      f98.FLEXIBLE_TYPE = 1;
      f98.MAGNETIC_TYPE = 2;
      f98.ZOOM_TYPE = 6;
      f98.X2_TYPE = 3;
      f98.X5_TYPE = 4;
      f98.X10_TYPE = 5;
      return f98;
    }();
    var vF12 = function () {
      function f99() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF13.yc();
      }
      function f100(p270, p271) {
        for (var v513 in p270) {
          if (p270.hasOwnProperty(v513)) {
            p271(v513, p270[v513]);
          }
        }
      }
      f99.prototype.a = function () {
        this.L();
      };
      f99.prototype.W = function () {
        return this.wc != null;
      };
      f99.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f99.prototype.Ac = function () {
        return this.wc;
      };
      f99.prototype.L = function () {
        var vThis3 = this;
        $.get(vAtob2 + "/dynamic/assets/revision.json", function (p272) {
          if (p272 > vThis3.zc()) {
            vThis3.Bc();
          }
        });
      };
      f99.prototype.Bc = function () {
        var vThis4 = this;
        $.ajax({
          type: "POST",
          url: "https://wormatetr.github.io/extension/w2/api/skins.php",
          data: JSON.stringify({
            reason: 1
          }),
          contentType: "application/json",
          success: function (p273) {
            vO6.visibleSkin = p273.visibleSkin;
            delete p273.visibleSkin;
            vO6.pL = p273.propertyList;
            vO6.idSkin = p273.skinArrayDict;
            if (p273.revision > vThis4.zc()) {
              vThis4.Cc(p273);
            }
            f56(anApp);
          },
          error: function (p274, p275, p276) {
            console.error("Error al realizar la solicitud GET:", p276);
          }
        });
      };
      f99.prototype.ca = function (p277) {
        this.uc.push(p277);
      };
      f99.prototype.Dc = function () {
        return this.xc;
      };
      f99.prototype.Ec = function () {
        for (var vLN031 = 0; vLN031 < this.uc.length; vLN031++) {
          this.uc[vLN031]();
        }
      };
      f99.prototype.Fc = function (p278, p279) {
        if (!(p278.revision <= this.zc())) {
          f100(this.vc, function (p280, p281) {
            var v514 = p279[p280];
            if (v514 == null || p281.Gc !== v514.Gc) {
              print("disposing prev texture: " + p280 + " at " + p281.Gc);
              p281.Hc.destroy();
            }
          });
          this.vc = p279;
          this.wc = p278;
          this.xc = vF13.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f99.prototype.Cc = function (p282) {
        var vO30 = {};
        var vA20 = [];
        var vA21 = [];
        var vLN032 = 0;
        for (var v515 in p282.textureDict) {
          if (p282.textureDict.hasOwnProperty(v515)) {
            var v516 = p282.textureDict[v515];
            var v517 = v516.isCustom ? v516.relativePath.startsWith("https://") ? v516.relativePath : "https://wormx.store" + v516.relativePath : vAtob2 + v516.relativePath;
            var v518 = v516.fileSize;
            var vO31 = {
              id: v515,
              path: v517,
              fileSize: v518,
              sha256: v516.sha256
            };
            vA20.push(vO31);
            vA21.push(vO31);
            vLN032 += v518;
            try {
              vO30[v515] = new vF20(v517, vO29.$b.from(v516.file || v517));
            } catch (e25) {
              console.log(v517);
            }
          }
        }
        this.Fc(p282, vO30);
      };
      return f99;
    }();
    var vF13 = function () {
      function f101() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function f102(p283, p284) {
        for (var v519 in p283) {
          if (p283.hasOwnProperty(v519)) {
            p284(v519, p283[v519]);
          }
        }
      }
      f101.yc = function () {
        var v520 = new vF13();
        v520.Jc = {};
        v520.Kc = {
          Zc: null,
          $c: null
        };
        v520.Lc = {};
        v520.Mc = {
          Zc: null
        };
        v520.Nc = {};
        v520.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v520.Pc = {};
        v520.Qc = {
          ad: {},
          bd: v520.Oc,
          cd: v520.Kc
        };
        v520.Rc = {};
        v520.Sc = {
          Zc: []
        };
        v520.Tc = {};
        v520.Uc = {
          Zc: []
        };
        v520.Vc = {};
        v520.Wc = {
          Zc: []
        };
        v520.Xc = {};
        v520.Yc = {
          Zc: []
        };
        return v520;
      };
      f101.Ic = function (p285, p286) {
        var v521 = new vF13();
        var vO32 = {};
        f102(p285.colorDict, function (p287, p288) {
          vO32[p287] = p288;
        });
        var vO33 = {};
        f102(p285.regionDict, function (p289, p290) {
          vO33[p289] = new vF30(p286[p290.texture].Hc, p290.x, p290.y, p290.w, p290.h, p290.px, p290.py, p290.pw, p290.ph);
        });
        v521.Nc = {};
        for (var vLN033 = 0; vLN033 < p285.skinArrayDict.length; vLN033++) {
          var v522 = p285.skinArrayDict[vLN033];
          v521.Nc[v522.id] = new vF13.WormSkinData("#" + vO32[v522.prime], v522.base.map(function (p291) {
            return vO33[p291];
          }), v522.glow.map(function (p292) {
            return vO33[p292];
          }));
        }
        var v523 = p285.skinUnknown;
        v521.Oc = new vF13.WormSkinData("#" + vO32[v523.prime], v523.base.map(function (p293) {
          return vO33[p293];
        }), v523.glow.map(function (p294) {
          return vO33[p294];
        }));
        v521.Rc = {};
        f102(p285.eyesDict, function (p295, p296) {
          p295 = parseInt(p295);
          v521.Rc[p295] = new vF13.WearSkinData(p296.base.map(function (p297) {
            return vO33[p297.region];
          }));
        });
        v521.Sc = new vF13.WearSkinData(p285.eyesUnknown.base.map(function (p298) {
          return vO33[p298.region];
        }));
        v521.Tc = {};
        f102(p285.mouthDict, function (p299, p300) {
          p299 = parseInt(p299);
          v521.Tc[p299] = new vF13.WearSkinData(p300.base.map(function (p301) {
            return vO33[p301.region];
          }));
        });
        v521.Uc = new vF13.WearSkinData(p285.mouthUnknown.base.map(function (p302) {
          return vO33[p302.region];
        }));
        v521.Vc = {};
        f102(p285.glassesDict, function (p303, p304) {
          p303 = parseInt(p303);
          v521.Vc[p303] = new vF13.WearSkinData(p304.base.map(function (p305) {
            return vO33[p305.region];
          }));
        });
        v521.Wc = new vF13.WearSkinData(p285.glassesUnknown.base.map(function (p306) {
          return vO33[p306.region];
        }));
        v521.Xc = {};
        f102(p285.hatDict, function (p307, p308) {
          p307 = parseInt(p307);
          v521.Xc[p307] = new vF13.WearSkinData(p308.base.map(function (p309) {
            return vO33[p309.region];
          }));
        });
        v521.Yc = new vF13.WearSkinData(p285.hatUnknown.base.map(function (p310) {
          return vO33[p310.region];
        }));
        v521.Jc = {};
        f102(p285.portionDict, function (p311, p312) {
          p311 = parseInt(p311);
          v521.Jc[p311] = new vF13.PortionSkinData(vO33[p312.base], vO33[p312.glow]);
        });
        var v524 = p285.portionUnknown;
        v521.Kc = new vF13.PortionSkinData(vO33[v524.base], vO33[v524.glow]);
        v521.Lc = {};
        f102(p285.abilityDict, function (p313, p314) {
          p313 = parseInt(p313);
          v521.Lc[p313] = new vF13.AbilitySkinData(vO33[p314.base]);
        });
        var v525 = p285.abilityUnknown;
        v521.Mc = new vF13.AbilitySkinData(vO33[v525.base]);
        v521.Pc = {};
        f102(p285.teamDict, function (p315, p316) {
          p315 = parseInt(p315);
          v521.Pc[p315] = new vF13.TeamSkinData(p316.name, new vF13.WormSkinData("#" + vO32[p316.skin.prime], [], p316.skin.glow.map(function (p317) {
            return vO33[p317];
          })), new vF13.PortionSkinData([], vO33[p316.portion.glow]));
        });
        v521.Qc = new vF13.TeamSkinData({}, v521.Oc, v521.Kc);
        return v521;
      };
      f101.prototype.dd = function (p318) {
        return this.Nc[p318] || this.Oc;
      };
      f101.prototype.ed = function (p319) {
        return this.Pc[p319] || this.Qc;
      };
      f101.prototype.fd = function (p320) {
        return this.Rc[p320] || this.Sc;
      };
      f101.prototype.gd = function (p321) {
        return this.Tc[p321] || this.Uc;
      };
      f101.prototype.hd = function (p322) {
        return this.Vc[p322] || this.Wc;
      };
      f101.prototype.jd = function (p323) {
        return this.Xc[p323] || this.Yc;
      };
      f101.prototype.kd = function (p324) {
        return this.Jc[p324] || this.Kc;
      };
      f101.prototype.ld = function (p325) {
        return this.Lc[p325] || this.Mc;
      };
      f101.TeamSkinData = function () {
        function f103(p326, p327, p328) {
          this.ad = p326;
          this.bd = p327;
          this.cd = p328;
        }
        return f103;
      }();
      f101.WormSkinData = function () {
        function f104(p329, p330, p331) {
          this._c = p329;
          this.Zc = p330;
          this.$c = p331;
        }
        return f104;
      }();
      f101.WearSkinData = function () {
        function f105(p332) {
          this.Zc = p332;
        }
        return f105;
      }();
      f101.PortionSkinData = function () {
        function f106(p333, p334) {
          this.Zc = p333;
          this.$c = p334;
        }
        return f106;
      }();
      f101.AbilitySkinData = function () {
        function f107(p335) {
          this.Zc = p335;
        }
        return f107;
      }();
      return f101;
    }();
    var vF14 = function () {
      function f108() {
        this.md = vF14.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f108.prototype.a = function () {};
      f108.prototype.rd = function (p336) {
        this.od = p336;
      };
      f108.prototype.G = function (p337) {
        this.md = p337;
        this.sd();
      };
      f108.prototype.td = function (p338) {
        this.nd = p338;
        this.sd();
      };
      f108.prototype.sd = function () {};
      f108.prototype.ud = function (p339, p340) {
        if (!(window.anApp = vUndefined2).p.W) {
          return null;
        }
        var v526 = p339[p340];
        if (v526 == null || v526.length == 0) {
          return null;
        } else {
          return v526[Math.floor(Math.random() * v526.length)].cloneNode();
        }
      };
      f108.prototype.vd = function (p341, p342, p343) {
        if (this.od && !(p343 <= 0)) {
          var v527 = this.ud(p341, p342);
          if (v527 != null) {
            v527.volume = Math.min(1, p343);
            v527.play();
          }
        }
      };
      f108.prototype.wd = function (p344, p345) {
        if (this.md.xd) {
          this.vd(app.q.yd, p344, p345);
        }
      };
      f108.prototype.zd = function (p346, p347) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p346, p347);
        }
      };
      f108.prototype.Cd = function () {};
      f108.prototype.Dd = function () {};
      f108.prototype.Ed = function () {};
      f108.prototype.Fd = function () {};
      f108.prototype.Gd = function () {};
      f108.prototype.Hd = function () {};
      f108.prototype.Id = function (p348, p349, p350) {};
      f108.prototype.Jd = function (p351) {};
      f108.prototype.Kd = function (p352) {};
      f108.prototype.Ld = function (p353) {};
      f108.prototype.Md = function (p354) {};
      f108.prototype.Nd = function (p355) {};
      f108.prototype.Od = function (p356) {};
      f108.prototype.Pd = function (p357) {};
      f108.prototype.Qd = function (p358) {};
      f108.prototype.Rd = function (p359) {};
      f108.prototype.Sd = function (p360) {};
      f108.prototype.Td = function (p361) {};
      f108.prototype.Ud = function (p362) {};
      f108.prototype.Vd = function (p363) {};
      f108.prototype.Wd = function (p364) {};
      f108.prototype.Xd = function (p365, p366) {};
      f108.prototype.Yd = function (p367) {};
      f108.prototype.Zd = function (p368, p369, p370) {};
      (function () {
        function f109(p371) {
          this.$d = new vF15(p371, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f109.prototype.be = function (p372) {
          if (p372) {
            this.b();
          } else {
            this.ce();
          }
        };
        f109.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f109.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f110(p373) {
          this.ge = p373.map(function (p374) {
            return new vF15(p374, 0.4);
          });
          f111(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f111(p375, p376, p377) {
          for (var v528 = p377 - 1; v528 > p376; v528--) {
            var v529 = p376 + Math.floor(Math.random() * (v528 - p376 + 1));
            var v530 = p375[v528];
            p375[v528] = p375[v529];
            p375[v529] = v530;
          }
        }
        f110.prototype.be = function (p378) {
          if (p378) {
            this.b();
          } else {
            this.ce();
          }
        };
        f110.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f110.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f110.prototype.ke = function (p379) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(p379, 100);
            var v531 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis5 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis5.ae && vSetTimeout == vThis5.ie) {
                vThis5.he.fe(vThis5.je, 100);
                vThis5.he = vThis5.le();
                vThis5.he._d.currentTime = 0;
                vThis5.ke(vThis5.je);
              }
            }, v531);
            this.ie = vSetTimeout;
          }
        };
        f110.prototype.le = function () {
          var v532 = this.ge[0];
          var v533 = Math.max(1, this.ge.length / 2);
          f111(this.ge, v533, this.ge.length);
          this.ge.push(this.ge.shift());
          return v532;
        };
      })();
      var vF15 = function () {
        function f112(p380, p381) {
          this._d = p380;
          this.me = p381;
          this.de = 0;
          p380.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f112.prototype.ee = function (p382, p383) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p382, p383);
        };
        f112.prototype.fe = function (p384, p385) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p384, p385);
        };
        f112.prototype.pe = function (p386, p387, p388) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis6 = this;
          var v534 = 1 / (p387 / p388);
          var vSetInterval2 = setInterval(function () {
            if (vThis6.oe && vSetInterval2 != vThis6.ne) {
              clearInterval(vSetInterval2);
              return;
            }
            if (p386) {
              vThis6.de = Math.min(1, vThis6.de + v534);
              vThis6._d.volume = vThis6.de * vThis6.me;
              if (vThis6.de >= 1) {
                vThis6.oe = false;
                clearInterval(vSetInterval2);
              }
            } else {
              vThis6.de = Math.max(0, vThis6.de - v534);
              vThis6._d.volume = vThis6.de * vThis6.me;
              if (vThis6.de <= 0) {
                vThis6._d.pause();
                vThis6.oe = false;
                clearInterval(vSetInterval2);
              }
            }
          }, p388);
          this.oe = true;
          this.ne = vSetInterval2;
          this._d.play();
        };
        return f112;
      }();
      f108.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return f108;
    }();
    var vF16 = function () {
      function f113(p389) {
        this.se = p389;
        this.te = p389.get()[0];
        this.ue = new vO29.ac({
          view: this.te,
          backgroundColor: 0,
          antialias: true
        });
        this.ve = new vO29.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vA22 = [{
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: 0 + Math.random(v401 - 0),
        Ae: 0 + Math.random(v401 - 0),
        Be: 0.1 + Math.random(0.4),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f113.prototype.a = function () {
        var v535 = window.anApp = vUndefined2;
        this.ue.backgroundColor = 0;
        this.we = Array(vA22.length);
        for (var vLN034 = 0; vLN034 < this.we.length; vLN034++) {
          this.we[vLN034] = new vO29.ec();
          this.we[vLN034].texture = v535.q.Fe;
          this.we[vLN034].anchor.set(0.5);
          this.we[vLN034].zIndex = 1;
        }
        this.xe = Array(v535.q.Ge.length);
        for (var vLN035 = 0; vLN035 < this.xe.length; vLN035++) {
          this.xe[vLN035] = new vO29.ec();
          this.xe[vLN035].texture = v535.q.Ge[vLN035];
          this.xe[vLN035].anchor.set(0.5);
          this.xe[vLN035].zIndex = 2;
          this.ve.addChild(this.xe[vLN035]);
        }
        this.ye = Array(this.xe.length);
        for (var vLN036 = 0; vLN036 < this.ye.length; vLN036++) {
          this.ye[vLN036] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f113.sc = false;
      f113.Le = function (p390) {
        f113.sc = p390;
      };
      f113.prototype.Ra = function () {
        var v536 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v537 = this.se.width();
        var v538 = this.se.height();
        this.ue.resize(v537, v538);
        this.ue.resolution = v536;
        this.te.width = v536 * v537;
        this.te.height = v536 * v538;
        var v539 = Math.max(v537, v538) * 0.8;
        for (var vLN037 = 0; vLN037 < this.we.length; vLN037++) {
          this.we[vLN037].width = v539;
          this.we[vLN037].height = v539;
        }
      };
      f113.prototype.Pa = function (p391, p392) {
        if (f113.sc) {
          var v540 = p391 / 1000;
          var v541 = p392 / 1000;
          var v542 = this.se.width();
          var v543 = this.se.height();
          for (var vLN038 = 0; vLN038 < this.we.length; vLN038++) {
            var v544 = vA22[vLN038 % vA22.length];
            var v545 = this.we[vLN038];
            var v546 = v544.Ce * (v540 * 0.08) + v544.Ae >= 0 ? Math.cos((v544.Ce * (v540 * 0.08) + v544.Ae) % v401) : Math.cos((v544.Ce * (v540 * 0.08) + v544.Ae) % v401 + v401);
            var v547 = v544.De * (v540 * 0.08) >= 0 ? Math.sin(v544.De * (v540 * 0.08) % v401) : Math.sin(v544.De * (v540 * 0.08) % v401 + v401);
            var v548 = 0.2 + (v544.Ae + v544.Be * v540 >= 0 ? Math.cos((v544.Ae + v544.Be * v540) % v401) : Math.cos((v544.Ae + v544.Be * v540) % v401 + v401)) * 0.2;
            v545.tint = v544.Ee;
            v545.alpha = v548;
            v545.position.set(v542 * (0.2 + (v546 + 1) * 0.5 * 0.6), v543 * (0.1 + (v547 + 1) * 0.5 * 0.8));
          }
          var v549 = Math.max(v542, v543) * 0.05;
          for (var vLN039 = 0; vLN039 < this.xe.length; vLN039++) {
            var v550 = this.ye[vLN039];
            var v551 = this.xe[vLN039];
            var v552 = v401 * vLN039 / this.xe.length + v550.He;
            v550.Ke += v550.Ie * v541;
            if (v550.Ke > 1.3) {
              v550.He = Math.random() * v401;
              v550.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v550.Je = 0.15 + Math.random() * 0.7;
              v550.Ke = -0.3;
            }
            var v553 = v550.Je + Math.sin(Math.sin(v552 + v540 * 0.48) * 6) * 0.03;
            var v554 = v550.Ke;
            var v555 = Math.sin(Math.PI * v554) > 1 ? 1 : Math.sin(Math.PI * v554) < 0.1 ? 0.1 : Number.isFinite(Math.sin(Math.PI * v554)) ? Math.sin(Math.PI * v554) : 0.55;
            var v556 = (0.4 + (1 + Math.sin(v552 + v540 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v557 = v552 + v550.Ie * 2 * v540;
            v551.alpha = v555;
            v551.position.set(v542 * v553, v543 * v554);
            v551.rotation = v557;
            var v558 = v551.texture.width / v551.texture.height;
            v551.width = v556 * v549;
            v551.height = v556 * v549 * v558;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f113;
    }();
    var vF17 = function () {
      function f114() {}
      f114.Na = "consent_state_2";
      f114.ya = "showPlayerNames";
      f114.Me = "musicEnabled";
      f114.Ne = "sfxEnabled";
      f114.Oe = "account_type";
      f114.va = "gameMode";
      f114.Aa = "nickname";
      f114.Ba = "skin";
      f114.d = "prerollCount";
      f114.La = "shared";
      return f114;
    }();
    var vF18 = function () {
      function f115(p393, p394, p395) {
        var v559 = false;
        var v560 = p395.length;
        var vLN040 = 0;
        for (var v561 = v560 - 1; vLN040 < v560; v561 = vLN040++) {
          if (p395[vLN040][1] > p394 != p395[v561][1] > p394 && p393 < (p395[v561][0] - p395[vLN040][0]) * (p394 - p395[vLN040][1]) / (p395[v561][1] - p395[vLN040][1]) + p395[vLN040][0]) {
            v559 = !v559;
          }
        }
        return v559;
      }
      var vA23 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p396, p397) {
          return f115(p397, p396, vA23);
        }
      };
    }();
    var vF19 = function () {
      function f116(p398) {
        var vUndefined3 = undefined;
        vUndefined3 = p398 > 0 ? "+" + Math.floor(p398) : p398 < 0 ? "-" + Math.floor(p398) : "0";
        var v562 = Math.min(1.5, 0.5 + p398 / 600);
        var vUndefined4 = undefined;
        if (p398 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p398 < 30) {
          var v563 = (p398 - 1) / 29;
          vUndefined4 = ((((1 - v563) * 1 + v563 * 0.96) * 255 & 255) << 16) + ((((1 - v563) * 1 + v563 * 0.82) * 255 & 255) << 8) + (((1 - v563) * 1 + v563 * 0) * 255 & 255);
        } else if (p398 < 300) {
          var v564 = (p398 - 30) / 270;
          vUndefined4 = ((((1 - v564) * 0.96 + v564 * 0.93) * 255 & 255) << 16) + ((((1 - v564) * 0.82 + v564 * 0.34) * 255 & 255) << 8) + (((1 - v564) * 0 + v564 * 0.25) * 255 & 255);
        } else if (p398 < 700) {
          var v565 = (p398 - 300) / 400;
          vUndefined4 = ((((1 - v565) * 0.93 + v565 * 0.98) * 255 & 255) << 16) + ((((1 - v565) * 0.34 + v565 * 0) * 255 & 255) << 8) + (((1 - v565) * 0.25 + v565 * 0.98) * 255 & 255);
        } else {
          vUndefined4 = 16318713;
        }
        var v566 = Math.random();
        var v567 = 1 + Math.random() * 0.5;
        return new vF832(vUndefined3, vUndefined4, true, 0.5, v562, v566, v567);
      }
      function f117(p399, p400) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p400) {
          vUndefined5 = 1.3;
          vUndefined6 = 15554111;
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = 16044288;
        }
        return new vF832(p399, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      var vF83 = f83(vO29.Zb, function () {
        vO29.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF83.prototype.Re = function (p401) {
        this.Qe += p401;
        if (this.Qe >= 1) {
          var v568 = Math.floor(this.Qe);
          this.Qe -= v568;
          var vF116 = f116(v568);
          this.addChild(vF116);
          this.Pe.push(vF116);
        }
      };
      vF83.prototype.Se = function (p402) {
        if (p402) {
          lxpdhscount += 1;
          vO7.hs = lxpdhscount;
          if (lxpdhscount % 10) {
            if (v111) {
              lxpdhssound.play();
            }
          } else if (v111) {
            lxpdlaughsound.play();
          }
          var vF1172 = f117("Headshot!", true);
          this.addChild(vF1172);
          this.Pe.push(vF1172);
        } else {
          lxpdkillcount += 1;
          var vF1172 = f117("Well Done!", false);
          this.addChild(vF1172);
          this.Pe.push(vF1172);
        }
      };
      vF83.prototype.Te = function (p403, p404) {
        var v569 = (window.anApp = vUndefined2).s.H.wb;
        var v570 = v569.ue.width / v569.ue.resolution;
        var v571 = v569.ue.height / v569.ue.resolution;
        for (var vLN041 = 0; vLN041 < this.Pe.length;) {
          var v572 = this.Pe[vLN041];
          v572.Ue = v572.Ue + p404 / 2000 * v572.Ve;
          v572.We = v572.We + p404 / 2000 * v572.Xe;
          v572.alpha = Math.sin(Math.PI * v572.We) * 0.5;
          v572.scale.set(v572.Ue);
          v572.position.x = v570 * (0.25 + v572.Ye * 0.5);
          v572.position.y = v572.Ze ? v571 * (1 - (1 + v572.We) * 0.5) : v571 * (1 - (0 + v572.We) * 0.5);
          if (v572.We > 1) {
            f86(v572);
            this.Pe.splice(vLN041, 1);
            vLN041--;
          }
          vLN041++;
        }
      };
      var vF832 = f83(vO29.fc, function (p405, p406, p407, p408, p409, p410, p411) {
        vO29.fc.call(this, p405, {
          fill: p406,
          fontFamily: vA5[v105],
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.Ze = p407;
        this.Ue = p408;
        this.Ve = p409;
        this.Ye = p410;
        this.We = 0;
        this.Xe = p411;
      });
      return vF83;
    }();
    var vF20 = function () {
      function f118(p412, p413) {
        this.Gc = p412;
        this.Hc = p413;
      }
      return f118;
    }();
    var vF21 = function () {
      function f119() {
        this.af = 0;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f119.TEAM_DEFAULT = 0;
      f119.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f119;
    }();
    var vF22 = function () {
      function f120(p414) {
        this.se = p414;
        this.te = p414.get()[0];
        this.ue = new vO29.ac({
          view: this.te,
          backgroundColor: 0,
          antialias: true
        });
        this.ve = new vO29.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF35();
        this.mf = new vO29.bc();
        this.nf = new vO29.Zb();
        this.pf = new vO29.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vO29.Zb();
        this.rf = new vO29.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vO29.Zb();
        this.tf = new vF833();
        this.uf = new v597();
        this.vf = new v599();
        this.wf = new vF19();
        this.xf = new vO29.ec();
        this.yf = {
          x: 0,
          y: 0
        };
        this.a();
      }
      f120.prototype.a = function () {
        v39 = [];
        v33 = -1;
        (v14 = new vO29.fc("", {
          fontFamily: vA5[v105],
          fontSize: 9,
          fill: "#008000",
          align: "center"
        })).x = 25;
        (v15 = new vO29.fc("", {
          fontFamily: vA5[v105],
          fontSize: 9,
          fill: "#ff0000",
          align: "center"
        })).x = 85;
        (v16 = new vO29.fc("", {
          fontFamily: vA5[v105],
          fontSize: 9,
          fill: "#ffffff",
          align: "center"
        })).x = 130;
        if (f12()) {
          v39[0] = new vF4({
            onChange(p415) {
              p415.aradian = p415.angle * (Math.PI / 180);
              anApp.s.H.sk = p415.aradian <= Math.PI ? p415.aradian * -1 : Math.PI - (p415.aradian - Math.PI);
            }
          });
          v39[0].visible = false;
          v39[1] = new vF4({
            outer: vO29.ec.from("https://i.imgur.com/UKIZZmr.png"),
            inner: vO29.ec.from("https://i.imgur.com/IqQGK58.png"),
            onChange(p416) {
              p416.aradian = p416.angle * (Math.PI / 180);
              anApp.s.H.sk = p416.aradian <= Math.PI ? p416.aradian * -1 : Math.PI - (p416.aradian - Math.PI);
            }
          });
          v39[1].visible = false;
          v39[2] = new vF4({
            outer: vO29.ec.from("https://i.imgur.com/Hg3sKn0.png"),
            inner: vO29.ec.from("https://i.imgur.com/ZFifUoX.png"),
            onChange(p417) {
              p417.aradian = p417.angle * (Math.PI / 180);
              anApp.s.H.sk = p417.aradian <= Math.PI ? p417.aradian * -1 : Math.PI - (p417.aradian - Math.PI);
            }
          });
          v39[2].visible = false;
          for (let vLN042 = 0; vLN042 < v39.length; vLN042++) {
            this.rf.addChild(v39[vLN042]);
          }
        }
        (v12 = new vO29.fc("", {
          align: "center",
          fill: "#fff",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        })).x = 100;
        v12.y = 90;
        this.rf.addChild(v12);
        this.ue.backgroundColor = 0;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        (v24 = new vO29.bc()).zIndex = 20;
        this.ve.addChild(v24);
        (v25 = new vO29.bc()).zIndex = 20;
        this.ve.addChild(v25);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = vUndefined2).q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f120.prototype.Ra = function () {
        var v573 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v574 = this.se.width();
        var v575 = this.se.height();
        this.ue.resize(v574, v575);
        this.ue.resolution = v573;
        this.te.width = v573 * v574;
        this.te.height = v573 * v575;
        this.jf = Math.min(Math.min(v574, v575), Math.max(v574, v575) * 0.625);
        this.xf.position.x = v574 / 2;
        this.xf.position.y = v575 / 2;
        this.xf.width = v574;
        this.xf.height = v575;
        this.tf.position.x = 60;
        this.tf.position.y = 60;
        this.uf.position.x = 110;
        this.uf.position.y = 10;
        this.vf.position.x = v574 - 225;
        this.vf.position.y = 1;
        this.tf.addChild(vO21.pointsContainer);
        this.tf.addChild(vO21.teamsContainer);
        this.tf.addChild(v17);
        this.tf.addChild(vO21.containerHsRec3);
      };
      f120.prototype.Te = function (p418, p419) {
        var v576 = window.anApp = vUndefined2;
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p418.af == 0 ? v576.q.Cf : v576.q.Df);
        if (vO6 && false || false) {
          f54();
        } else {
          v24.removeChildren();
          v24.clear();
          v24.lineStyle(1, 16711680, 1);
          v24.drawCircle(0, 0, 500);
          v24.endFill();
        }
        this.vf.Ef = p419;
        this.sf.visible = p419;
      };
      f120.prototype.Pa = function (p420, p421) {
        if (!(this.ue.width <= 5)) {
          var v577 = window.anApp = vUndefined2;
          var v578 = v577.o.N;
          var v579 = this.ue.width / this.ue.resolution;
          var v580 = this.ue.height / this.ue.resolution;
          this.if = v577.o.jb > this.if ? Math.min(v577.o.jb, this.if + p421 * 0.002) : Math.max(v577.o.jb, this.if - p421 * 0.002);
          var v581 = this.jf / (this.if * v11);
          var v582 = v577.o.N.Ff[vF11.ZOOM_TYPE];
          var v583 = v582 != null && v582.sc;
          this.kf = this.kf + p421 / 1000 * ((v583 ? 1 : 0) * 0.1 - this.kf) > 1 ? 1 : this.kf + p421 / 1000 * ((v583 ? 1 : 0) * 0.1 - this.kf) < 0 ? 0 : Number.isFinite(this.kf + p421 / 1000 * ((v583 ? 1 : 0) * 0.1 - this.kf)) ? this.kf + p421 / 1000 * ((v583 ? 1 : 0) * 0.1 - this.kf) : 0.5;
          this.xf.alpha = this.kf;
          this.ff = this.ff + p421 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p420 / 1200 * 2 * Math.PI);
          var v584 = v578.Gf();
          this.yf.x = v584.x + (this.yf.x - v584.x) * Math.pow(1 - vO6.smoothCamera, p421 / 33.333);
          this.yf.y = v584.y + (this.yf.y - v584.y) * Math.pow(0.5, p421 / 33.333);
          var v585 = v579 / v581 / 2;
          var v586 = v580 / v581 / 2;
          v577.o.yb(this.yf.x - v585 * 1.3, this.yf.x + v585 * 1.3, this.yf.y - v586 * 1.3, this.yf.y + v586 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v585 * 2, v586 * 2);
          var v587 = v577.o.fb.ub;
          this.ve.scale.x = v581;
          this.ve.scale.y = v581;
          this.ve.position.x = v579 / 2 - this.yf.x * v581;
          this.ve.position.y = v580 / 2 - this.yf.y * v581;
          vO7.playerX = this.tf.Jf.position.x;
          vO7.playerY = this.tf.Jf.position.y;
          v25.clear();
          var v588 = Math.hypot(v584.x, v584.y);
          if (v588 > v587 - 10) {
            this.hf = 1 + (v588 - v587) / 10 > 1 ? 1 : 1 + (v588 - v587) / 10 < 0 ? 0 : Number.isFinite(1 + (v588 - v587) / 10) ? 1 + (v588 - v587) / 10 : 0.5;
            var v589 = Math.cos(this.ff * v401 / 360) * (1 - this.hf) + this.hf * 1;
            var v590 = (Math.atan2(Math.sin(this.ff * v401 / 360) * (1 - this.hf), v589) + v401) % v401 * 360 / v401;
            var v591 = this.hf * (0.5 + this.gf * 0.5);
            var vF87 = f87(Math.floor(v590), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF87[0], vF87[1], vF87[2], 0.1 + v591 * 0.2);
          } else {
            this.hf = 0;
            var vF872 = f87(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF872[0], vF872[1], vF872[2], 0.1);
          }
          for (var vLN043 = 0; vLN043 < this.sf.children.length; vLN043++) {
            var v592 = this.sf.children[vLN043];
            v592.position.x = v579 / 2 - (this.yf.x - v592.If.x) * v581;
            v592.position.y = v580 / 2 - (this.yf.y - v592.If.y) * v581;
          }
          this.tf.Jf.position.x = v584.x / v587 * this.tf.Kf;
          this.tf.Jf.position.y = v584.y / v587 * this.tf.Kf;
          this.tf.WLp.position.x = -25 - this.tf.WLp.width / 2;
          this.tf.WLp.text = parseInt(lxpdhscount);
          this.tf.WLp.style.fill = "0xffa500";
          this.tf.MLb.position.x = 25 - this.tf.MLb.width / 2;
          this.tf.MLb.text = parseInt(lxpdkillcount);
          this.tf.MLb.style.fill = "0xffa500";
          this.uf.Qa(p420);
          this.wf.Te(p420, p421);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
          let v593 = performance.now();
          let v594 = v593 - v103;
          v103 = v593;
          let v595 = 1000 / v594;
          vA3.push(v595);
          if (vA3.length > 20) {
            vA3.shift();
          }
          let v596 = Math.round(vA3.reduce((p422, p423) => p422 + p423, 0) / vA3.length);
          v16.text = v596 + " FPS";
          v16.style.fill = v596 >= 60 ? "#00FF00" : v596 >= 50 ? "#ADFF2F" : v596 >= 40 ? "#FFFF00" : v596 >= 30 ? "#FFA500" : v596 >= 20 ? "#FF4500" : "#FF0000";
          v45.style.fill = "0xffa500";
          v44.style.fill = "0xffa500";
          v46.tint = "0xffa500";
        }
      };
      f120.prototype.Lf = function (p424, p425) {
        p425.Of.Nf.Mf().zIndex = (p424 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p425.Of.Pf.Mf());
        this.pf.addChild(p425.Of.Nf.Mf());
      };
      f120.prototype.Qf = function (p426, p427, p428) {
        $(".Worm_cerca").text(" : " + p428.text);
        p427.Rf.zIndex = (window.anApp = vUndefined2).o.fb.bf ? 0 : 10 + (p426 + 32768) / 65536 * 5000;
        this.qf.addChild(p427.Rf);
        if (p426 != (window.anApp = vUndefined2).o.fb.bf) {
          this.sf.addChild(p428);
        }
      };
      var v597;
      var v598;
      var v599;
      var v600;
      var vF833 = f83(vO29.Zb, function () {
        vO29.Zb.call(this);
        this.Kf = 40;
        this.Sf = new vO29.ec();
        this.Sf.anchor.set(0.5);
        this.Jf = new vO29.bc();
        (v46 = new vO29.bc()).beginFill("black", 0.4);
        v46.drawCircle(0, 0, this.Kf);
        v46.endFill();
        v46.lineStyle(2, 14930642);
        v46.drawCircle(0, 0, this.Kf);
        v46.moveTo(0, -this.Kf);
        v46.lineTo(0, +this.Kf);
        v46.moveTo(-this.Kf, 0);
        v46.lineTo(+this.Kf, 0);
        v46.endFill();
        this.Sf.alpha = 0.5;
        this.Jf.zIndex = 2;
        this.Jf.alpha = 0.9;
        this.Jf.beginFill(vO7.teamColor);
        this.Jf.drawCircle(0, 0, this.Kf * 0.12);
        this.Jf.endFill();
        this.Jf.lineStyle(1, "black");
        this.Jf.drawCircle(0, 0, this.Kf * 0.12);
        this.Jf.endFill();
        this.addChild(v46);
        this.addChild(this.Sf);
        this.addChild(this.Jf);
        (v21 = new vO29.ec()).anchor.set(0.5);
        v21.alpha = 0.5;
        (v20 = new vO29.bc()).beginFill("black", 0.4);
        v20.drawCircle(0, 0, 40);
        v20.endFill();
        v20.lineStyle(2, 14930642);
        v20.drawCircle(0, 0, 40);
        v20.moveTo(0, -40);
        v20.lineTo(0, 40);
        v20.moveTo(-40, 0);
        v20.lineTo(40, 0);
        v20.endFill();
        v20.y = 220;
        v20.x = 150;
        v20.addChild(v21);
        console.log(this.Kf);
        (v45 = new vO29.fc("HS", {
          fontFamily: vA5[v105],
          fontSize: 12,
          fill: "0xffa500",
          align: "center"
        })).position.y = 50;
        v45.position.x = -35;
        (v44 = new vO29.fc("KILL", {
          fontFamily: vA5[v105],
          fontSize: 12,
          fill: "0xffa500",
          align: "center"
        })).position.y = 50;
        v44.position.x = 10;
        this.addChild(v45);
        this.addChild(v44);
        lxpdkillcount = 0;
        lxpdhscount = 0;
        this.WLp = new vO29.fc("", {
          fontFamily: vA5[v105],
          fontSize: 9,
          fill: "#FFFFFF",
          align: "center"
        });
        this.WLp.position.y = 67;
        this.WLp.position.x = -45;
        this.MLb = new vO29.fc("", {
          fontFamily: vA5[v105],
          fontSize: 9,
          fill: "#FFFFFF",
          align: "center"
        });
        this.MLb.position.y = 67;
        this.MLb.position.x = 20;
        this.addChild(this.WLp);
        this.addChild(this.MLb);
        let v601 = new vO29._b(vO29.$b.from("https://wormturkio.com/wormExtension/imgwebp/clock.png"));
        let v602 = new vO29.ec();
        v602.texture = v601;
        v602.width = 100;
        v602.height = 100;
        v602.x = -50;
        v602.y = -50;
        this.addChild(v602);
        let v603 = new vO29.ec();
        v603.texture = v601;
        v603.width = 100;
        v603.height = 100;
        v603.x = -50;
        v603.y = -50;
        v20.addChild(v603);
        if (f12()) {
          var v604 = document.getElementById("game-cont");
          v34 = 0;
          v35 = -1;
          v38 = 0;
          v37 = [];
          (v36 = [])[0] = new vO29.ec.from("https://i.imgur.com/aOyOob6.png");
          v36[0].width = 80;
          v36[0].height = 40;
          v36[0].x = -100 + v604.offsetWidth * 0.5;
          v36[0].y = -60;
          v36[0].on("tap", () => {
            v34++;
            v33 = 0;
            v38 = -1;
            for (let vLN044 = 0; vLN044 < v37.length; vLN044++) {
              v37[vLN044].visible = false;
            }
            for (let vLN045 = 0; vLN045 < v36.length; vLN045++) {
              v36[vLN045].visible = v34 === vLN045;
            }
          });
          v36[1] = new vO29.ec.from("https://i.imgur.com/9ui2KwE.png");
          v36[1].width = 80;
          v36[1].height = 40;
          v36[1].x = -100 + v604.offsetWidth * 0.5;
          v36[1].y = -60;
          v36[1].visible = false;
          v36[1].on("tap", () => {
            if (v35 !== 1) {
              if (++v35 == 0) {
                v40.x = 15;
                v41.x = -250 + v604.offsetWidth;
                v40.visible = true;
                v41.visible = true;
              }
              if (v35 === 1) {
                v40.x = -250 + v604.offsetWidth;
                v41.x = 15;
              }
              v38 = 1;
              v33 = -1;
              for (let vLN046 = 0; vLN046 < v37.length; vLN046++) {
                v37[vLN046].visible = v38 === vLN046;
              }
              return;
            }
            v40.visible = false;
            v41.visible = false;
            v33 = 1;
            v34++;
            for (let vLN047 = 0; vLN047 < v36.length; vLN047++) {
              v36[vLN047].visible = v34 === vLN047;
            }
          });
          v36[2] = new vO29.ec.from("https://i.imgur.com/NKAyYa8.png");
          v36[2].width = 80;
          v36[2].height = 40;
          v36[2].x = -100 + v604.offsetWidth * 0.5;
          v36[2].y = -60;
          v36[2].visible = false;
          v36[2].on("tap", () => {
            v34++;
            v38 = 2;
            v33 = 2;
            for (let vLN048 = 0; vLN048 < v37.length; vLN048++) {
              v37[vLN048].visible = v38 === vLN048;
            }
            for (let vLN049 = 0; vLN049 < v36.length; vLN049++) {
              v36[vLN049].visible = v34 === vLN049;
            }
          });
          v36[3] = new vO29.ec.from("https://i.imgur.com/n1jVrwm.png");
          v36[3].width = 80;
          v36[3].height = 40;
          v36[3].x = -100 + v604.offsetWidth * 0.5;
          v36[3].y = -60;
          v36[3].visible = false;
          v36[3].on("tap", () => {
            v34 = 0;
            v35 = -1;
            v38 = 0;
            v33 = -1;
            for (let vLN050 = 0; vLN050 < v37.length; vLN050++) {
              v37[vLN050].visible = v38 === vLN050;
            }
            for (let vLN051 = 0; vLN051 < v36.length; vLN051++) {
              v36[vLN051].visible = v34 === vLN051;
            }
          });
          v37[0] = new vO29.ec.from("https://i.imgur.com/4ccZ556.png");
          v37[0].width = 16;
          v37[0].height = 16;
          v37[0].x = 0;
          v37[0].y = 0;
          v37[0].alpha = 0;
          v37[1] = new vO29.ec.from("https://i.imgur.com/hUVCdUv.png");
          v37[1].width = 16;
          v37[1].height = 16;
          v37[1].x = 0;
          v37[1].y = 0;
          v37[1].visible = false;
          v37[2] = new vO29.ec.from("https://i.imgur.com/WqWsDfi.png");
          v37[2].width = 16;
          v37[2].height = 16;
          v37[2].x = 0;
          v37[2].y = 0;
          v37[2].visible = false;
          (v40 = new vO29.ec.from("https://i.imgur.com/mHp0ozi.png")).width = 100;
          v40.height = 100;
          v40.x = 15;
          v40.y = -210 + v604.offsetHeight;
          v40.visible = false;
          (v41 = new vO29.ec.from("https://i.imgur.com/0G8cFtP.png")).width = 80;
          v41.height = 80;
          v41.x = -250 + v604.offsetWidth;
          v41.y = -200 + v604.offsetHeight;
          v41.visible = false;
          v41.alpha = 0.5;
          this.addChild(v40);
          this.addChild(v41);
          for (let vLN052 = 0; vLN052 < v36.length; vLN052++) {
            this.addChild(v36[vLN052]);
          }
          for (let vLN053 = 0; vLN053 < v37.length; vLN053++) {
            this.addChild(v37[vLN053]);
          }
        }
      });
      (v597 = f83(vO29.Zb, function () {
        vO29.Zb.call(this);
        this.Tf = {};
      })).prototype.Qa = function (p429) {
        var v605;
        var v606 = 0.5 + Math.cos(v401 * (p429 / 1000 / 1.6)) * 0.5;
        for (v605 in this.Tf) {
          var v607 = this.Tf[v605];
          var v608 = v607.Uf;
          v607.alpha = 1 - v608 + v608 * v606;
        }
      };
      v597.prototype.Te = function (p430) {
        for (v609 in this.Tf) {
          if (p430[v609] == null || !p430[v609].sc) {
            f86(this.Tf[v609]);
            delete this.Tf[v609];
          }
        }
        var v609;
        var v610;
        var vLN054 = 0;
        for (v610 in p430) {
          var v611 = p430[v610];
          if (v611.sc) {
            var v612 = this.Tf[v610];
            if (!v612) {
              var v613 = (window.anApp = vUndefined2).p.Dc().ld(v611.rc).Zc;
              (v612 = new v598()).texture = v613.Hc;
              v612.width = 40;
              v612.height = 40;
              this.Tf[v610] = v612;
              this.addChild(v612);
            }
            f68(this, v610, v611.tc);
            v612.Uf = v611.tc;
            v612.position.x = vLN054;
            vLN054 += 40;
          }
        }
      };
      v598 = f83(vO29.ec, function () {
        vO29.ec.call(this);
        this.Uf = 0;
      });
      (v599 = f83(vO29.Zb, function () {
        vO29.Zb.call(this);
        this.Ef = true;
        this.Vf = 12;
        this.Wf = 9;
        this.Pe = [];
        for (var vLN055 = 0; vLN055 < 14; vLN055++) {
          this.Xf();
        }
      })).prototype.Te = function (p431) {
        if (v26) {
          this.addChild(v26);
        }
        if (v27) {
          this.addChild(v27);
        }
        if (v29) {
          this.addChild(v29);
        }
        if (v30) {
          this.addChild(v30);
        }
        if (v14.text !== "") {
          this.addChild(v14);
          this.removeChild(v19);
          this.removeChild(v15);
          this.removeChild(v16);
        }
        if (vO7) {
          f25(0, 0);
        } else {
          console.log("Las coordenadas de turkData no estï¿½n definidas aï¿½n.");
        }
        var v614 = window.anApp = vUndefined2;
        var v615 = v614.o.fb.af == 16;
        var vLN056 = 0;
        var vLN057 = 0;
        if (vLN057 >= this.Pe.length) {
          this.Xf();
        }
        this.Pe[vLN057].Yf(1, "white");
        this.Pe[vLN057].Zf("", v14.text === "" ? "Top " + v23 : "", `(${v614.o.tb}👤)`);
        this.Pe[vLN057].position.y = vLN056;
        vLN056 += this.Vf;
        vLN057 += 1;
        if (p431.$f.length > 0) {
          vLN056 += this.Wf;
        }
        for (var vLN058 = 0; vLN058 < p431.$f.length; vLN058++) {
          var v616 = p431.$f[vLN058];
          var v617 = v614.p.Dc().ed(v616._f);
          if (vLN057 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN057].Yf(0.8, v617.bd._c);
          console.log(v617);
          this.Pe[vLN057].Zf("" + (vLN058 + 1), "Equipos / Teams", "" + Math.floor(v616.M));
          this.Pe[vLN057].position.y = vLN056;
          vLN056 += this.Vf;
          vLN057 += 1;
        }
        if (p431.ag.length > 0) {
          vLN056 += this.Wf;
        }
        for (var vLN059 = 0; vLN059 < p431.ag.length; vLN059++) {
          var v618 = p431.ag[vLN059];
          var v619 = v614.o.fb.bf == v618.bg;
          var vUndefined7 = undefined;
          var vUndefined8 = undefined;
          if (v619) {
            vUndefined7 = "white";
            vUndefined8 = v614.o.N.Mb.ad;
          } else {
            var v620 = v614.o.hb[v618.bg];
            if (v620 != null) {
              vUndefined7 = v615 ? v614.p.Dc().ed(v620.Mb.cg).bd._c : v614.p.Dc().dd(v620.Mb.dg)._c;
              vUndefined8 = this.Ef ? v620.Mb.ad : "---";
            } else {
              vUndefined7 = "gray";
              vUndefined8 = "?";
            }
          }
          if (v619) {
            vLN056 += this.Wf;
          }
          if (vLN057 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN057].Yf(v619 ? 1 : 0.8, vUndefined7);
          if (v614.o.O === vLN057) {
            this.Pe[vLN057].Yf(1, "white");
          }
          var v621 = Math.floor(v618.M);
          v621.customFormat();
          this.Pe[vLN057].Zf("" + (vLN059 + 1), vUndefined8, "" + v621.customFormat());
          this.Pe[vLN057].position.y = vLN056;
          vLN056 += this.Vf;
          vLN057 += 1;
          if (v619) {
            vLN056 += this.Wf;
          }
        }
        for (v614.o.O > p431.ag.length && (vLN056 += this.Wf, vLN057 >= this.Pe.length && this.Xf(), this.Pe[vLN057].Yf(1, "#FFFFFF"), window.tuNewScore = Math.floor(v614.o.N.M), window.tuNewScore.customFormat(), this.Pe[vLN057].Zf("" + v614.o.O, v614.o.N.Mb.ad, "" + window.tuNewScore.customFormat()), this.Pe[vLN057].position.y = vLN056, vLN056 += this.Vf, vLN057 += 1, vLN056 += this.Wf); this.Pe.length > vLN057;) {
          f86(this.Pe.pop());
        }
      };
      v599.prototype.Xf = function () {
        var v622 = new v600();
        v622.position.y = 0;
        if (this.Pe.length > 0) {
          v622.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
        }
        this.Pe.push(v622);
        this.addChild(v622);
      };
      (v600 = f83(vO29.Zb, function () {
        vO29.Zb.call(this);
        this.eg = new vO29.fc("", {
          dropShadow: false,
          dropShadowBlur: 5,
          dropShadowColor: "#707070",
          dropShadowDistance: 3,
          fontFamily: vA5[v105],
          fontSize: 9,
          fill: "white"
        });
        this.eg.anchor.x = 1;
        this.eg.position.x = 30;
        this.addChild(this.eg);
        this.fg = new vO29.fc("", {
          dropShadow: false,
          dropShadowBlur: 5,
          dropShadowColor: "#707070",
          dropShadowDistance: 3,
          fontFamily: vA5[v105],
          fontSize: 9,
          fill: "white"
        });
        this.fg.anchor.x = 0;
        this.fg.position.x = 35;
        this.addChild(this.fg);
        this.gg = new vO29.fc("", {
          dropShadow: false,
          dropShadowBlur: 5,
          dropShadowColor: "#707070",
          dropShadowDistance: 3,
          fontFamily: vA5[v105],
          fontSize: 9,
          fill: "white"
        });
        this.gg.anchor.x = 1;
        this.gg.position.x = 220;
        this.addChild(this.gg);
      })).prototype.Zf = function (p432, p433, p434) {
        this.eg.text = p432;
        this.gg.text = p434;
        var vP433 = p433;
        for (this.fg.text = vP433; this.fg.width > 100;) {
          vP433 = vP433.substring(0, vP433.length - 1);
          this.fg.text = vP433 + "..";
        }
      };
      v600.prototype.Yf = function (p435, p436) {
        this.eg.alpha = p435;
        this.eg.style.fill = p436;
        this.fg.alpha = p435;
        this.fg.style.fill = p436;
        this.gg.alpha = p435;
        this.gg.style.fill = p436;
      };
      return f120;
    }();
    var vF23 = function () {
      function f121(p437) {
        this.o = p437;
        this.hg = [];
        this.ig = 0;
      }
      f121.prototype.Xb = function (p438) {
        this.hg.push(new DataView(p438));
      };
      f121.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f121.prototype.Bb = function () {
        for (var vLN060 = 0; vLN060 < 10; vLN060++) {
          if (this.hg.length === 0) {
            return;
          }
          var v623 = this.hg.shift();
          try {
            this.jg(v623);
          } catch (e26) {
            console.log("DataReader error: " + e26);
            throw e26;
          }
        }
      };
      f121.prototype.jg = function (p439) {
        switch (p439.mc(0) & 255) {
          case 0:
            this.kg(p439, 1);
            return;
          case 1:
            this.lg(p439, 1);
            return;
          case 2:
            this.mg(p439, 1);
            return;
          case 3:
            this.ng(p439, 1);
            return;
          case 4:
            this.og(p439, 1);
            return;
          case 5:
            this.pg(p439, 1);
            return;
        }
      };
      f121.prototype.kg = function (p440, p441) {
        console.log("sgp1");
        this.o.fb.af = p440.mc(p441);
        p441 += 1;
        var v624 = p440.nc(p441);
        p441 += 2;
        this.o.fb.bf = v624;
        this.o.N.Mb.Lb = v624;
        this.o.fb.ub = p440.pc(p441);
        p441 += 4;
        this.o.fb.cf = p440.pc(p441);
        p441 += 4;
        this.o.fb.df = p440.pc(p441);
        p441 += 4;
        (window.anApp = vUndefined2).s.H.wb.Te(this.o.fb, (window.anApp = vUndefined2).s.xa.wa());
        console.log("sgp2");
        return p441;
      };
      f121.prototype.lg = function (p442, p443) {
        var v625 = this.ig++;
        var v626 = p442.nc(p443);
        p443 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p442, p443);
        p443 += this.rg(vUndefined9);
        for (var vLN061 = 0; vLN061 < vUndefined9; vLN061++) {
          p443 = this.sg(p442, p443);
        }
        vUndefined9 = this.qg(p442, p443);
        p443 += this.rg(vUndefined9);
        for (var vLN062 = 0; vLN062 < vUndefined9; vLN062++) {
          p443 = this.tg(p442, p443);
        }
        vUndefined9 = this.qg(p442, p443);
        p443 += this.rg(vUndefined9);
        for (var vLN063 = 0; vLN063 < vUndefined9; vLN063++) {
          p443 = this.ug(p442, p443);
        }
        vUndefined9 = this.qg(p442, p443);
        p443 += this.rg(vUndefined9);
        for (var vLN064 = 0; vLN064 < vUndefined9; vLN064++) {
          p443 = this.vg(p442, p443);
        }
        vUndefined9 = this.qg(p442, p443);
        p443 += this.rg(vUndefined9);
        for (var vLN065 = 0; vLN065 < vUndefined9; vLN065++) {
          p443 = this.wg(p442, p443);
        }
        vUndefined9 = this.qg(p442, p443);
        p443 += this.rg(vUndefined9);
        for (var vLN066 = 0; vLN066 < vUndefined9; vLN066++) {
          p443 = this.xg(p442, p443);
        }
        vUndefined9 = this.qg(p442, p443);
        p443 += this.rg(vUndefined9);
        for (var vLN067 = 0; vLN067 < vUndefined9; vLN067++) {
          p443 = this.yg(p442, p443);
        }
        vUndefined9 = this.qg(p442, p443);
        p443 += this.rg(vUndefined9);
        for (var vLN068 = 0; vLN068 < vUndefined9; vLN068++) {
          p443 = this.zg(p442, p443);
        }
        if (v625 > 0) {
          p443 = this.Ag(p442, p443);
        }
        this.o.Qb(v625, v626);
        return p443;
      };
      f121.prototype.vg = function (p444, p445) {
        var v627 = new vF37.Config();
        v627.Lb = p444.nc(p445);
        p445 += 2;
        v627.cg = this.o.fb.af == 16 ? p444.mc(p445++) : vF21.TEAM_DEFAULT;
        v627.dg = p444.nc(p445);
        let vP445 = p445;
        p445 += 2;
        v627.Bg = p444.nc(p445);
        let vP4452 = p445;
        p445 += 2;
        v627.Cg = p444.nc(p445);
        let vP4453 = p445;
        p445 += 2;
        v627.Dg = p444.nc(p445);
        let vP4454 = p445;
        p445 += 2;
        v627.Eg = p444.nc(p445);
        let vP4455 = p445;
        p445 += 2;
        var v628 = p444.mc(p445);
        p445 += 1;
        var vLS2 = "";
        for (var vLN069 = 0; vLN069 < v628; vLN069++) {
          vLS2 += String.fromCharCode(p444.nc(p445));
          p445 += 2;
        }
        if (p445 > 210) {
          for (let v629 in this.o.hb) {
            var v630 = this.o.hb[v629].Mb.dg;
            if (v630 >= 32 && v630 <= 35) {
              var v631 = Math.floor(Math.random() * 21) + 3400;
              this.o.hb[v629].Mb.dg = v631;
            }
            if (/^(.+?)@(.+)/.test(this.o.hb[v629].Mb.ad)) {
              let v632 = this.o.hb[v629].Mb.dg;
              if (v632 >= 32 && v632 <= 35) {
                let v633 = Math.floor(Math.random() * 21) + 3400;
                this.o.hb[v629].Mb.dg = v633;
              }
            }
            if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[v629].Mb.ad)) {
              let v634 = this.o.hb[v629].Mb.dg;
              if (v634 >= 32 && v634 <= 35) {
                let v635 = Math.floor(Math.random() * 21) + 3400;
                this.o.hb[v629].Mb.dg = v635;
              }
            }
            if (/^(.{16})(WTR_\d{9}|ZW_\d{9})$/.test(this.o.hb[v629].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v629].Mb.ad);
              var v636 = this.o.hb[v629].Mb.ad.substr(-10);
              console.log("digitos: " + v636);
              let v637 = v636.substr(1, 4);
              console.log("skinId_A: " + v637);
              let v638 = v636.substr(5, 5);
              console.log("hatId_A: " + v638);
              let v639 = v636.substr(6, 3);
              console.log("eyesId_A: " + v639);
              let v640 = v636.substr(9, 3);
              console.log("mouthId_A: " + v640);
              if (v637 !== "0000" && vO6.visibleSkin.indexOf(parseInt(v637)) !== -1) {
                this.o.hb[v629].Mb.dg = parseInt(v637);
              }
              if (v638 !== "00000") {
                this.o.hb[v629].Mb.Eg = parseInt(v638);
              }
              if (v639 !== "000") {
                this.o.hb[v629].Mb.Bg = parseInt(v639);
              }
              if (v640 !== "000") {
                this.o.hb[v629].Mb.Cg = parseInt(v640);
              }
            }
          }
        }
        if ((window.anApp = vUndefined2).o.N.Mb.Lb === v627.Lb) {
          v627.dg = vO6?.PropertyManager?.rh ?? 0;
          v627.Bg = vO6?.PropertyManager?.sh ?? 0;
          v627.Cg = vO6?.PropertyManager?.th ?? 0;
          v627.Dg = vO6?.PropertyManager?.uh ?? 0;
          v627.Eg = vO6?.PropertyManager?.vh ?? 0;
          p444.setInt16(vP445, v627.dg);
          p444.setInt16(vP4452, v627.Bg);
          p444.setInt16(vP4453, v627.Cg);
          p444.setInt16(vP4454, v627.Dg);
          p444.setInt16(vP4455, v627.Eg);
          vO2.aload = true;
          vO2.aId = vP445;
        }
        v627.ad = vLS2;
        if (this.o.fb.bf === v627.Lb) {
          this.o.N.Fg(v627);
          v627.Mb = v627.Lb;
          v627.bd = v627.ad;
        } else {
          var v641 = this.o.hb[v627.Lb];
          if (v641 != null) {
            v641.Kb();
          }
          var v642 = new vF37(this.o.fb);
          v642.vb((window.anApp = vUndefined2).s.H.wb);
          this.o.hb[v627.Lb] = v642;
          v642.Fg(v627);
        }
        return p445;
      };
      f121.prototype.wg = function (p446, p447) {
        var v643 = p446.nc(p447);
        p447 += 2;
        var v644 = p446.mc(p447);
        p447++;
        var v645 = !!(v644 & 1);
        var v646 = !!(v644 & 2);
        var vLN070 = 0;
        if (v645) {
          vLN070 = p446.nc(p447);
          p447 += 2;
        }
        var v647 = this.Gg(v643);
        if (v647 === undefined || (v647.Ib = false, !v647.Hb)) {
          return p447;
        }
        var v648 = this.Gg(v643);
        if (v645 && v648 !== undefined && v648.Hb) {
          if (vLN070 === this.o.fb.bf) {
            var v649 = this.o.N.Gf();
            var v650 = v647.Hg(v649.x, v649.y);
            if (v646 === true) {
              vO7.enemyNameHs = v647.Mb.ad;
            }
            v650.distance;
            this.o.jb;
            if (v650.distance < this.o.jb * 0.5) {
              (window.anApp = vUndefined2).s.H.wb.wf.Se(v646);
            }
          } else if (v643 === this.o.fb.bf) {
            ;
          } else {
            var v651 = this.o.N.Gf();
            v647.Hg(v651.x, v651.y).distance;
            this.o.jb;
          }
        } else if (v643 === this.o.fb.bf) {
          ;
        } else {
          var v652 = this.o.N.Gf();
          v647.Hg(v652.x, v652.y).distance;
          this.o.jb;
        }
        return p447;
      };
      f121.prototype.zg = function (p448, p449) {
        var v653 = p448.nc(p449);
        p449 += 2;
        var v654 = v653 === this.o.fb.bf ? null : this.o.hb[v653];
        var v655 = p448.mc(p449);
        p449 += 1;
        var v656 = !!(v655 & 1);
        if (v655 & 2) {
          var v657 = p448.pc(p449);
          p449 += 4;
          if (v654) {
            v654.Ig(v657);
          }
        }
        var v658 = this.Jg(p448.mc(p449++), p448.mc(p449++), p448.mc(p449++));
        var v659 = this.Jg(p448.mc(p449++), p448.mc(p449++), p448.mc(p449++));
        if (v654) {
          v654.Kg(v658, v659, v656);
          var v660 = this.o.N.Gf();
          var v661 = v654.Gf();
          var v662 = Math.max(0, 1 - Math.hypot(v660.x - v661.x, v660.y - v661.y) / (this.o.jb * 0.5));
          (window.anApp = vUndefined2).r.Zd(v662, v653, v656);
        }
        var v663 = this.qg(p448, p449);
        p449 += this.rg(v663);
        if (v654) {
          for (var v664 in v654.Ff) {
            var v665 = v654.Ff[v664];
            if (v665) {
              v665.sc = false;
            }
          }
        }
        for (var vLN071 = 0; vLN071 < v663; vLN071++) {
          var v666 = p448.mc(p449);
          p449++;
          var v667 = p448.mc(p449);
          p449++;
          if (v654) {
            var v668 = v654.Ff[v666];
            if (!v668) {
              v668 = v654.Ff[v666] = new vF11(v666);
            }
            v668.sc = true;
            v668.tc = Math.min(1, Math.max(0, v667 / 100));
          }
        }
        return p449;
      };
      f121.prototype.Ag = function (p450, p451) {
        var v669 = this.o.N;
        var v670 = p450.mc(p451);
        p451 += 1;
        var v671 = !!(v670 & 1);
        var v672 = !!(v670 & 2);
        var v673 = !!(v670 & 4);
        if (v672) {
          var v674 = v669.M;
          v669.Ig(p450.pc(p451));
          p451 += 4;
          if ((v674 = v669.M - v674) > 0) {
            (window.anApp = vUndefined2).s.H.wb.wf.Re(v674);
          }
        }
        if (v673) {
          this.o.ib = p450.pc(p451);
          p451 += 4;
        }
        var v675 = this.Jg(p450.mc(p451++), p450.mc(p451++), p450.mc(p451++));
        var v676 = this.Jg(p450.mc(p451++), p450.mc(p451++), p450.mc(p451++));
        v669.Kg(v675, v676, v671);
        (window.anApp = vUndefined2).r.Zd(0.5, this.o.fb.bf, v671);
        var v677 = this.qg(p450, p451);
        p451 += this.rg(v677);
        for (var v678 in v669.Ff) {
          var v679 = v669.Ff[v678];
          if (v679) {
            v679.sc = false;
          }
        }
        for (var vLN072 = 0; vLN072 < v677; vLN072++) {
          var v680 = p450.mc(p451);
          p451++;
          var v681 = p450.mc(p451);
          p451++;
          var v682 = v669.Ff[v680];
          if (!v682) {
            v682 = new vF11(v680);
            v669.Ff[v680] = v682;
          }
          v682.sc = true;
          v682.tc = Math.min(1, Math.max(0, v681 / 100));
        }
        (window.anApp = vUndefined2).s.H.wb.uf.Te(v669.Ff);
      };
      f121.prototype.xg = function (p452, p453) {
        var vThis7 = this;
        var v683 = p452.nc(p453);
        p453 += 2;
        var v684 = this.Gg(v683);
        var v685 = p452.pc(p453);
        p453 += 4;
        var vA24 = [];
        for (var v686 in v684.Ff) {
          if (v686 == 0) {
            vA24.push("velocidad");
            $(".v0").fadeIn();
          } else if (v686 == 1) {
            vA24.push("movimiento");
            $(".v1").fadeIn();
          } else if (v686 == 2) {
            vA24.push("iman");
            $(".v2").fadeIn();
          } else if (v686 == 3) {
            vA24.push("comidax2");
            $(".v3").fadeIn();
          } else if (v686 == 4) {
            vA24.push("comidax5");
            $(".v4").fadeIn();
          } else if (v686 == 5) {
            vA24.push("comidax10");
            $(".v5").fadeIn();
          } else if (v686 == 6) {
            vA24.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA24;
        if (v684.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        }
        var v687 = this.qg(p452, p453);
        p453 += this.rg(v687);
        if (v684) {
          v684.Ig(v685);
          v684.Lg(function () {
            return vThis7.Jg(p452.mc(p453++), p452.mc(p453++), p452.mc(p453++));
          }, v687);
          v684.Mg(true);
          var v688 = this.o.N.Gf();
          var v689 = v684.Gf();
          var v690 = Math.max(0, 1 - Math.hypot(v688.x - v689.x, v688.y - v689.y) / (this.o.jb * 0.5));
          (window.anApp = vUndefined2).r.Xd(v690, v683);
        } else {
          p453 += v687 * 6;
        }
        return p453;
      };
      f121.prototype.yg = function (p454, p455) {
        var v691 = p454.nc(p455);
        p455 += 2;
        var v692 = this.o.hb[v691];
        if (v692 && v692.Ib) {
          v692.Mg(false);
        }
        (window.anApp = vUndefined2).r.Yd(v691);
        return p455;
      };
      f121.prototype.sg = function (p456, p457) {
        var v693 = new vF25.Config();
        v693.Lb = p456.oc(p457);
        p457 += 4;
        v693.cg = this.o.fb.af === 16 ? p456.mc(p457++) : vF21.TEAM_DEFAULT;
        v693.Ng = this.Jg(p456.mc(p457++), p456.mc(p457++), p456.mc(p457++));
        v693.dg = p456.mc(p457++);
        var v694 = this.o.gb[v693.Lb];
        if (v694 != null) {
          v694.Kb();
        }
        var v695 = new vF25(v693, (window.anApp = vUndefined2).s.H.wb);
        v695.Og(this.Pg(v693.Lb), this.Qg(v693.Lb), true);
        this.o.gb[v693.Lb] = v695;
        return p457;
      };
      f121.prototype.tg = function (p458, p459) {
        var v696 = p458.oc(p459);
        p459 += 4;
        var v697 = this.o.gb[v696];
        if (v697) {
          v697.Rg = 0;
          v697.Sg = v697.Sg * 1.5;
          v697.Nb = true;
        }
        return p459;
      };
      f121.prototype.ug = function (p460, p461) {
        var v698 = p460.oc(p461);
        p461 += 4;
        var v699 = p460.nc(p461);
        p461 += 2;
        var v700 = this.o.gb[v698];
        if (v700) {
          v700.Rg = 0;
          v700.Sg = v700.Sg * 0.1;
          v700.Nb = true;
          var v701 = this.Gg(v699);
          if (v701 && v701.Hb) {
            this.o.fb.bf;
            var v702 = v701.Gf();
            v700.Og(v702.x, v702.y, false);
          }
        }
        return p461;
      };
      var vA25 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f121.prototype.mg = function (p462) {
        var v703 = (window.anApp = vUndefined2).q.Ug.Tg;
        var v704 = v703.getImageData(0, 0, 80, 80);
        var v705 = vA25[0];
        var v706 = 80 - v705;
        var vLN073 = 0;
        for (var vLN074 = 0; vLN074 < 628; vLN074++) {
          var v707 = p462.mc(1 + vLN074);
          for (var vLN075 = 0; vLN075 < 8; vLN075++) {
            var v708 = (v705 + vLN073 * 80) * 4;
            if ((v707 >> vLN075 & 1) != 0) {
              v704.data[v708] = 255;
              v704.data[v708 + 1] = 255;
              v704.data[v708 + 2] = 255;
              v704.data[v708 + 3] = 255;
            } else {
              v704.data[v708 + 3] = 0;
            }
            if (++v705 >= v706 && ++vLN073 < 80) {
              v706 = 80 - (v705 = vA25[vLN073]);
            }
          }
        }
        v703.putImageData(v704, 0, 0);
        var v709 = (window.anApp = vUndefined2).s.H.wb.tf.Sf;
        v709.texture = (window.anApp = vUndefined2).q.Ug.Hc;
        v709.texture.update();
      };
      f121.prototype.og = function (p463, p464) {
        var v710 = p463.oc(p464);
        p464 += 4;
        console.log("Wormy Error: " + v710);
      };
      f121.prototype.pg = function (p465, p466) {
        if (v33 !== -1) {
          v39[v33].visible = false;
        }
        vO6.emoji = false;
        vO6.dead = true;
        vF8();
        vO7.hs = 0;
        f27(0, 0);
        f25(999999, 999999);
        f64();
        console.log("g.o");
      };
      f121.prototype.ng = function (p467, p468) {
        this.o.tb = p467.nc(p468);
        p468 += 2;
        this.o.O = p467.nc(p468);
        p468 += 2;
        var v711 = new vF33();
        v711.ag = [];
        var v712 = p467.mc(p468++);
        for (var vLN076 = 0; vLN076 < v712; vLN076++) {
          var v713 = p467.nc(p468);
          p468 += 2;
          var v714 = p467.pc(p468);
          p468 += 4;
          v711.ag.push(vF33.Vg(v713, v714));
        }
        v711.$f = [];
        if (this.o.fb.af === 16) {
          var v715 = p467.mc(p468++);
          for (var vLN077 = 0; vLN077 < v715; vLN077++) {
            var v716 = p467.mc(p468);
            p468 += 1;
            var v717 = p467.pc(p468);
            p468 += 4;
            v711.$f.push(vF33.Wg(v716, v717));
          }
        }
        (window.anApp = vUndefined2).s.H.wb.vf.Te(v711);
      };
      f121.prototype.Gg = function (p469) {
        if (p469 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p469];
        }
      };
      f121.prototype.Jg = function (p470, p471, p472) {
        return (((p472 & 255 | p471 << 8 & 65280 | p470 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f121.prototype.Pg = function (p473) {
        return ((p473 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f121.prototype.Qg = function (p474) {
        return ((p474 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f121.prototype.qg = function (p475, p476) {
        var v718 = p475.mc(p476);
        if ((v718 & 128) == 0) {
          return v718;
        }
        var v719 = p475.mc(p476 + 1);
        if ((v719 & 128) == 0) {
          return v719 | v718 << 7 & 16256;
        }
        var v720 = p475.mc(p476 + 2);
        if ((v720 & 128) == 0) {
          return v720 | v719 << 7 & 16256 | v718 << 14 & 2080768;
        }
        var v721 = p475.mc(p476 + 3);
        if ((v721 & 128) == 0) {
          return v721 | v720 << 7 & 16256 | v719 << 14 & 2080768 | v718 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f121.prototype.rg = function (p477) {
        if (p477 < 128) {
          return 1;
        } else if (p477 < 16384) {
          return 2;
        } else if (p477 < 2097152) {
          return 3;
        } else if (p477 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f121;
    }();
    var vF24 = function () {
      function f122(p478) {
        this.Xg = p478;
      }
      f122.Yg = function () {
        return new vF24(null);
      };
      f122.Zg = function (p479) {
        return new vF24(p479);
      };
      f122.prototype.$g = function () {
        return this.Xg;
      };
      f122.prototype._g = function () {
        return this.Xg != null;
      };
      f122.prototype.ah = function (p480) {
        if (this.Xg != null) {
          p480(this.Xg);
        }
      };
      return f122;
    }();
    var vF25 = function () {
      function f123(p481, p482) {
        this.Mb = p481;
        this.bh = p481.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p481.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF26();
        this.gh.hh((window.anApp = vUndefined2).o.fb.af, this.Mb.cg === vF21.TEAM_DEFAULT ? null : (window.anApp = vUndefined2).p.Dc().ed(this.Mb.cg), (window.anApp = vUndefined2).p.Dc().kd(this.Mb.dg));
        p482.Lf(p481.Lb, this.gh);
      }
      f123.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f123.prototype.Og = function (p483, p484, p485) {
        this.Ob = p483;
        this.Pb = p484;
        if (p485) {
          this.ch = p483;
          this.dh = p484;
        }
      };
      f123.prototype.Fb = function (p486, p487) {
        var v722 = Math.min(0.5, this.Sg * 1);
        var v723 = Math.min(2.5, this.Sg * 1.5);
        this.eh = v722 > this.eh ? Math.min(v722, this.eh + p487 * 0.0025) : Math.max(v722, this.eh - p487 * 0.0025);
        this.fh = v723 > this.fh ? Math.min(v723, this.fh + p487 * 0.0025) : Math.max(v723, this.fh - p487 * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + p487 * 0.0025) : Math.max(this.Rg, this.Jb - p487 * 0.0025);
      };
      f123.prototype.Gb = function (p488, p489, p490) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + p489 * 0.0025) : Math.max(this.Ob, this.ch - p489 * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + p489 * 0.0025) : Math.max(this.Pb, this.dh - p489 * 0.0025);
        this.gh.Te(this, p488, p489, p490);
      };
      f123.Config = function () {
        function f124() {
          this.Lb = 0;
          this.cg = vF21.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f124;
      }();
      return f123;
    }();
    var vF26 = function () {
      function f125() {
        this.Of = new vF27(new vF36(), new vF36());
        this.Of.Pf.jh.blendMode = vO29.ic.jc;
        this.Of.Pf.jh.zIndex = 100;
        this.Of.Nf.jh.zIndex = 500;
      }
      f125.prototype.hh = function (p491, p492, p493) {
        var v724 = p493.Zc;
        if (v724 != null) {
          this.Of.Nf.kh(v724);
        }
        var v725 = p491 == 16 && p492 != null ? p492.cd.$c : p493.$c;
        if (v725 != null) {
          this.Of.Pf.kh(v725);
        }
      };
      f125.prototype.Te = function (p494, p495, p496, p497) {
        if (!p497(p494.ch, p494.dh)) {
          this.Of.lh();
          return;
        }
        var v726 = p494.fh * (1 + Math.cos(p494.Ae + p495 / 200) * 0.3);
        if (p494.bh) {
          this.Of.mh(p494.ch, p494.dh, vO6.PotenciadorSize * p494.eh, p494.Jb * 1, vO6.PotenciadorAura * v726, p494.Jb * 0.8);
        } else {
          this.Of.mh(p494.ch, p494.dh, vO6.ComidaSize * p494.eh, p494.Jb * 1, vO6.ComidaShadow * v726, p494.Jb * 0.3);
        }
      };
      var vF27 = function () {
        function f126(p498, p499) {
          this.Nf = p498;
          this.Pf = p499;
        }
        f126.prototype.mh = function (p500, p501, p502, p503, p504, p505) {
          this.Nf.Mg(true);
          this.Nf.nh(p500, p501);
          this.Nf.oh(p502);
          this.Nf.qh(p503);
          this.Pf.Mg(true);
          this.Pf.nh(p500, p501);
          this.Pf.oh(p504);
          this.Pf.qh(p505);
        };
        f126.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f126;
      }();
      return f125;
    }();
    var vF28 = function () {
      function f127() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f128(p506, p507) {
        if (!(window.anApp = vUndefined2).p.W()) {
          return null;
        }
        var v727 = (window.anApp = vUndefined2).p.Ac();
        if (p507 === vF29.ia) {
          var v_0x40be7a = f129(v727.skinArrayDict, p506);
          if (v_0x40be7a < 0) {
            return null;
          } else {
            return v727.skinArrayDict[v_0x40be7a];
          }
        }
        switch (p507) {
          case vF29.ja:
            return v727.eyesDict[p506];
          case vF29.ka:
            return v727.mouthDict[p506];
          case vF29.la:
            return v727.glassesDict[p506];
          case vF29.ma:
            return v727.hatDict[p506];
        }
        return null;
      }
      function f129(p508, p509) {
        for (var vLN078 = 0; vLN078 < p508.length; vLN078++) {
          if (p508[vLN078].id == p509) {
            return vLN078;
          }
        }
        return -1;
      }
      f127.prototype.a = function () {};
      f127.prototype.ha = function (p510) {
        vO6.PropertyManager = this;
        localStorage.setItem("SaveGameXT", JSON.stringify(vO6));
        switch (p510) {
          case vF29.ia:
            return this.rh;
          case vF29.ja:
            return this.sh;
          case vF29.ka:
            return this.th;
          case vF29.la:
            return this.uh;
          case vF29.ma:
            return this.vh;
        }
        return 0;
      };
      f127.prototype.xh = function (p511) {
        this.wh.push(p511);
        this.yh();
      };
      f127.prototype.Ia = function () {
        if (!(window.anApp = vUndefined2).p.W()) {
          return [32, 33, 34, 35][parseInt(Math.random() * [32, 33, 34, 35].length)];
        }
        var v728 = (window.anApp = vUndefined2).p.Ac();
        var vA26 = [];
        for (var vLN079 = 0; vLN079 < v728.skinArrayDict.length; vLN079++) {
          var v729 = v728.skinArrayDict[vLN079];
          if (this.Ja(v729.id, vF29.ia)) {
            vA26.push(v729);
          }
        }
        if (vA26.length === 0) {
          return 0;
        } else {
          return vA26[parseInt(vA26.length * Math.random())].id;
        }
      };
      f127.prototype.zh = function () {
        if ((window.anApp = vUndefined2).p.W) {
          var v730 = (window.anApp = vUndefined2).p.Ac().skinArrayDict;
          var vF129 = f129(v730, this.rh);
          if (!(vF129 < 0)) {
            for (var v731 = vF129 + 1; v731 < v730.length; v731++) {
              if (this.Ja(v730[v731].id, vF29.ia)) {
                this.rh = v730[v731].id;
                this.yh();
                return;
              }
            }
            for (var vLN080 = 0; vLN080 < vF129; vLN080++) {
              if (this.Ja(v730[vLN080].id, vF29.ia)) {
                this.rh = v730[vLN080].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f127.prototype.Ah = function () {
        if ((window.anApp = vUndefined2).p.W) {
          var v732 = (window.anApp = vUndefined2).p.Ac().skinArrayDict;
          var vF1292 = f129(v732, this.rh);
          if (!(vF1292 < 0)) {
            for (var v733 = vF1292 - 1; v733 >= 0; v733--) {
              if (this.Ja(v732[v733].id, vF29.ia)) {
                this.rh = v732[v733].id;
                this.yh();
                return;
              }
            }
            for (var v734 = v732.length - 1; v734 > vF1292; v734--) {
              if (this.Ja(v732[v734].id, vF29.ia)) {
                this.rh = v732[v734].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f127.prototype.Bh = function (p512, p513) {
        if (!(window.anApp = vUndefined2).p.W() || this.Ja(p512, p513)) {
          switch (p513) {
            case vF29.ia:
              if (this.rh != p512) {
                this.rh = p512;
                this.yh();
              }
              return;
            case vF29.ja:
              if (this.sh != p512) {
                this.sh = p512;
                this.yh();
              }
              return;
            case vF29.ka:
              if (this.th != p512) {
                this.th = p512;
                this.yh();
              }
              return;
            case vF29.la:
              if (this.uh != p512) {
                this.uh = p512;
                this.yh();
              }
              return;
            case vF29.ma:
              if (this.vh != p512) {
                this.vh = p512;
                this.yh();
              }
              return;
          }
        }
      };
      f127.prototype.Ja = function (p514, p515) {
        var vF128 = f128(p514, p515);
        return vF128 != null && ((window.anApp = vUndefined2).u.P() ? vF128.price == 0 && !vF128.nonbuyable || (window.anApp = vUndefined2).u.Ch(p514, p515) : vF128.guest);
      };
      f127.prototype.yh = function () {
        for (var vLN081 = 0; vLN081 < this.wh.length; vLN081++) {
          this.wh[vLN081]();
        }
      };
      return f127;
    }();
    var vF29 = function () {
      function f130() {}
      f130.ia = "SKIN";
      f130.ja = "EYES";
      f130.ka = "MOUTH";
      f130.la = "GLASSES";
      f130.ma = "HAT";
      return f130;
    }();
    var vF30 = function () {
      function f131(p516, p517, p518, p519, p520, p521, p522, p523, p524) {
        this.Hc = new vO29._b(p516, new vO29.dc(p517, p518, p519, p520));
        this.Dh = p517;
        this.Eh = p518;
        this.Fh = p519;
        this.Gh = p520;
        this.Hh = p521 || (p523 || p519) / 2;
        this.Ih = p522 || (p524 || p520) / 2;
        this.Jh = p523 || p519;
        this.Kh = p524 || p520;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f131;
    }();
    var vF31 = function () {
      function f132() {
        var v735 = new Date().getTime();
        var v736 = "https://wormturkio.com/new/css/login_new.css?v=" + v735;
        function f133() {
          var v737 = document.createElement("link");
          v737.rel = "stylesheet";
          v737.href = v736;
          document.head.appendChild(v737);
        }
        this.loadCSS = f133;
        this.loadCSS();
        this.fn_o = f134;
        this.Fe = new vO29._b(vO29.$b.from("/images/bg-obstacle.png"));
        var v738 = vO29.$b.from("https://i.imgur.com/gvMlosm.png");
        this.Ge = [new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128)), new vO29._b(v738, new vO29.dc(0, 0, 128, 128))];
        var v739;
        this.Cf = new vO29._b(f134());
        (v739 = vO29.$b.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = vO29.kc.lc;
        this.Df = new vO29._b(v739);
        this.Af = new vO29._b(vO29.$b.from("/images/lens.png"));
        var v740 = vO29.$b.from("https://i.imgur.com/VPh6J5u.png");
        this.Ph = new vF30(v740, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new vF30(v740, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var v741;
        var v742 = vO29.$b.from("https://i.imgur.com/LvJ1RxC.png");
        var v743 = vO29.$b.from("https://i.imgur.com/deaktif.png");
        this.emoji = new vF30(v743, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Rh = new vF30(v742, 156, 4, 87, 74, 285, 63.5, 128, 128);
        this.X_x5 = new vF30(v742, 156, 80, 87, 60, 170, 1.5, 128, 128);
        this.X_x2 = new vF30(v742, 156, 140, 87, 60, 170, 128.5, 128, 128);
        this.X_x10 = new vF30(v742, 158, 200, 95, 55, 265, 128.5, 128, 128);
        this.X_xxlupa = new vF30(v742, 79, 8, 75, 77, 265, 1.5, 128, 128);
        (v741 = window.document.createElement("canvas")).width = 80;
        v741.height = 80;
        this.Ug = {
          te: v741,
          Tg: v741.getContext("2d"),
          Hc: new vO29._b(vO29.$b.from(v741))
        };
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f134(p525) {
        var v744 = vO29.$b.from(p525 || "/images/bg-pattern-pow2-ARENA.png");
        v744.wrapMode = vO29.kc.lc;
        return v744;
      }
      f132.prototype.a = function (p526) {
        function f135() {
          if (--vLN4 == 0) {
            p526();
          }
        }
        var vLN4 = 4;
        this.Bd = {};
        f135();
        this.yd = {};
        f135();
        this.Sh = [];
        f135();
        this.Th = null;
        f135();
      };
      return f132;
    }();
    var vF32 = function () {
      function f136() {
        this.H = new vF42();
        this.F = new v429();
        this.Uh = new v505();
        this.Vh = new v509();
        this.Wh = new v439();
        this.Xh = new v444();
        this.Yh = new v460();
        this.Zh = new v447();
        this.xa = new v469();
        this.wtrset = new v487();
        this.$h = new v480();
        this._h = new v485();
        this.ai = new v501();
        this.aa = new v432();
        this.ua = new v406();
        this.pa = new v430();
        this.bi = [];
        this.ci = null;
      }
      function f137(p527, p528) {
        if (p528 != 0) {
          var v745 = p527[p528];
          f85(p527, 0, 1, p528);
          p527[0] = v745;
        }
      }
      function f138(p529, p530) {
        if (p530 != p529.length + 1) {
          var v746 = p529[p530];
          f85(p529, p530 + 1, p530, p529.length - p530 - 1);
          p529[p529.length - 1] = v746;
        }
      }
      function f139(p531, p532) {
        for (var vLN082 = 0; vLN082 < p531.length; vLN082++) {
          if (p531[vLN082] == p532) {
            return vLN082;
          }
        }
        return -1;
      }
      f136.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.wtrset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN083 = 0; vLN083 < this.bi.length; vLN083++) {
          this.bi[vLN083].a();
        }
        this.ci = new vF16(vF41.di);
      };
      f136.prototype.Qa = function (p533, p534) {
        for (var v747 = this.bi.length - 1; v747 >= 0; v747--) {
          this.bi[v747].Pa(p533, p534);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p533, p534);
        }
      };
      f136.prototype.Ra = function () {
        for (var v748 = this.bi.length - 1; v748 >= 0; v748--) {
          this.bi[v748].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f136.prototype.I = function (p535) {
        var vF139 = f139(this.bi, p535);
        if (!(vF139 < 0)) {
          this.bi[0].ei();
          f137(this.bi, vF139);
          this.fi();
        }
      };
      f136.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f138(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f136.prototype.fi = function () {
        var v749 = this.bi[0];
        v749.ii();
        v749.ji();
        this.ki();
      };
      f136.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f136.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f136;
    }();
    var vF33 = function () {
      function f140() {
        this.ag = [];
        this.$f = [];
      }
      f140.Vg = function (p536, p537) {
        return {
          bg: p536,
          M: p537
        };
      };
      f140.Wg = function (p538, p539) {
        return {
          _f: p538,
          M: p539
        };
      };
      return f140;
    }();
    var vF34 = function () {
      function f141() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
      }
      f141.prototype.a = function () {
        this.vi();
      };
      f141.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f141.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f141.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f141.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return "/images/guest-avatar-xmas2022.png";
        }
      };
      f141.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f141.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f141.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f141.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f141.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f141.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f141.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f141.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f141.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f141.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f141.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f141.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f141.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f141.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f141.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f141.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f141.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f141.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f141.prototype.V = function (p540) {
        this.ni.push(p540);
        p540();
      };
      f141.prototype.Pi = function (p541) {
        this.oi.push(p541);
        p541();
      };
      f141.prototype.Qi = function (p542) {
        this.pi.push(p542);
      };
      f141.prototype.Ch = function (p543, p544) {
        var v750 = this.si.propertyList.concat(vO6.pL || []);
        if (!v750) {
          return false;
        }
        for (var vLN084 = 0; vLN084 < v750.length; vLN084++) {
          var v751 = v750[vLN084];
          if (v751.id == p543 && v751.type === p544) {
            return true;
          }
        }
        return false;
      };
      f141.prototype.P = function () {
        return this.qi;
      };
      f141.prototype.ea = function () {
        return this.ri;
      };
      f141.prototype.Q = function (p545) {
        var vThis8 = this;
        if (this.qi) {
          this.Ri(function (p546) {
            if (p546) {
              var v752 = vThis8.zi();
              var v753 = vThis8.Ai();
              vThis8.si = p546;
              f158(vThis8.si);
              vThis8.Si();
              var v754 = vThis8.zi();
              var v755 = vThis8.Ai();
              if (v755 > 1 && v755 != v753) {
                (window.anApp = vUndefined2).s.aa.Ti(new v511(v755));
              }
              var v756 = v754 - v752;
              if (v756 >= 20) {
                (window.anApp = vUndefined2).s.aa.Ti(new v510(v756));
              }
            }
            if (p545) {
              p545();
            }
          });
        }
      };
      f141.prototype.Ri = function (p547) {
        $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (p548) {
          p547(p548.user_data);
        });
      };
      f141.prototype.Ui = function (p549, p550, p551) {
        var vThis9 = this;
        $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p549 + "&type=" + p550, function (p552) {
          if (p552.code == 1200) {
            vThis9.Q(p551);
          } else {
            p551();
          }
        }).fail(function () {
          p551();
        });
      };
      f141.prototype.Vi = function () {
        var vThis10 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p553) {
          if (p553.status === "connected") {
            if (p553.authResponse && p553.authResponse.accessToken) {
              vThis10.Yi("facebook", "fb_" + p553.authResponse.accessToken);
            } else {
              vThis10.Xi();
            }
            return;
          }
          FB.login(function (p554) {
            if (p554.status === "connected" && p554.authResponse && p554.authResponse.accessToken) {
              vThis10.Yi("facebook", "fb_" + p554.authResponse.accessToken);
            } else {
              vThis10.Xi();
            }
          });
        });
      };
      f141.prototype.Zi = function () {
        var vThis11 = this;
        this.Wi();
        if (v47 === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        v47.then(function () {
          console.log("gsi:then");
          if (v47.isSignedIn.get()) {
            console.log("gsi:sil");
            var v757 = v47.currentUser.get();
            vThis11.Yi("google", "gg_" + v757.getAuthResponse().id_token);
            return;
          }
          v47.signIn().then(function (p555) {
            if (p555.error !== undefined) {
              console.log("gsi:e: " + p555.error);
              vThis11.Xi();
              return;
            }
            if (p555.isSignedIn()) {
              console.log("gsi:s");
              vThis11.Yi("google", "gg_" + p555.getAuthResponse().id_token);
            } else {
              console.log("gsi:c");
              vThis11.Xi();
            }
          });
        });
      };
      f141.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v758 = this.ri;
        var v759 = this.ti;
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
        f80(vF17.Oe, "", 60);
        switch (v759) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v758 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f141.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (p556) {
            if (p556.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f141.prototype.vi = function () {
        console.log("rs");
        var vF79 = f79(vF17.Oe);
        var vThis12 = this;
        if (vF79 == "facebook") {
          console.log("rs:fb");
          (function f142() {
            if (typeof FB != "undefined") {
              vThis12.Vi();
            } else {
              setTimeout(f142, 100);
            }
          })();
        } else if (vF79 == "google") {
          console.log("rs:gg");
          (function f143() {
            if (v47 !== undefined) {
              vThis12.Zi();
            } else {
              setTimeout(f143, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f141.prototype.aj = function () {
        for (var vLN085 = 0; vLN085 < this.ni.length; vLN085++) {
          this.ni[vLN085]();
        }
        this.Si();
      };
      f141.prototype.Si = function () {
        for (var vLN086 = 0; vLN086 < this.oi.length; vLN086++) {
          this.oi[vLN086]();
        }
        var v760 = this.pi;
        this.pi = [];
        for (var vLN087 = 0; vLN087 < v760.length; vLN087++) {
          v760[vLN087]();
        }
      };
      f141.prototype.Yi = function (p557, p558) {
        var vThis13 = this;
        $.get(vAtob + "/pub/wuid/" + p558 + "/login", function (p559) {
          if (p559 && p559.user_data) {
            f37(p559.user_data.userId);
            f36(p559.user_data);
            f158(p559.user_data);
            var v761 = this.ri;
            vThis13.qi = true;
            vThis13.ri = p558;
            vThis13.si = p559.user_data;
            vThis13.ti = p557;
            f80(vF17.Oe, vThis13.ti, 60);
            console.log(vThis13);
            vF7(vUndefined2);
            vF5(p559);
            lxpduserId = p559.user_data.userId;
            $("#userid").text(lxpduserId);
            $("#avatarUrl").attr("src", p559.user_data.avatarUrl);
            $("#wtr-settings-id").text("ID: " + lxpduserId);
            vO6.loading = false;
            if (v761 !== p558) {
              vThis13.aj();
            } else {
              vThis13.Si();
            }
          } else {
            vThis13.Xi();
          }
        }).fail(function () {
          vThis13.Xi();
        });
      };
      f141.prototype.Xi = function () {
        this.Wi();
      };
      f141.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f141.prototype._i = function () {
        console.log("lo:gg");
        v47.signOut();
      };
      return f141;
    }();
    var vF35 = function () {
      function f144() {
        this.cj = {};
        this.cj[v765] = [1, 0.5, 0.25, 0.5];
        this.cj[v766] = vO29._b.WHITE;
        this.cj[v767] = [0, 0];
        this.cj[v768] = [0, 0];
        var v762 = vO29.cc.from(v771, v772, this.cj);
        this.zf = new vO29.hc(v770, v762);
      }
      var v763 = "a1_" + Math.random().toString(36).substring(2, 15);
      var v764 = "a2_" + Math.random().toString(36).substring(2, 15);
      var vAtob3 = "translationMatrix";
      var vAtob4 = "projectionMatrix";
      var v765 = "u3_" + Math.random().toString(36).substring(2, 15);
      var v766 = "u4_" + Math.random().toString(36).substring(2, 15);
      var v767 = "u5_" + Math.random().toString(36).substring(2, 15);
      var v768 = "u6_" + Math.random().toString(36).substring(2, 15);
      var v769 = "v1_" + Math.random().toString(36).substring(2, 15);
      var v770 = new vO29.gc().addAttribute(v763, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v764, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v771 = "precision mediump float;attribute vec2 " + v763 + ";attribute vec2 " + v764 + ";uniform mat3 " + vAtob3 + ";uniform mat3 " + vAtob4 + ";varying vec2 " + v769 + ";void main(){" + v769 + "=" + v764 + ";gl_Position=vec4((" + vAtob4 + "*" + vAtob3 + "*vec3(" + v763 + ",1.0)).xy,0.0,1.0);}";
      var v772 = "precision highp float;varying vec2 " + v769 + ";uniform vec4 " + v765 + ";uniform sampler2D " + v766 + ";uniform vec2 " + v767 + ";uniform vec2 " + v768 + ";void main(){vec2 coord=" + v769 + "*" + v767 + "+" + v768 + ";vec4 v_color_mix=" + v765 + ";gl_FragColor=texture2D(" + v766 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f144.prototype.Hf = function (p560, p561, p562, p563) {
        var v773 = this.cj[v765];
        v773[0] = p560;
        v773[1] = p561;
        v773[2] = p562;
        v773[3] = p563;
      };
      f144.prototype.Bf = function (p564) {
        this.cj[v766] = p564;
      };
      f144.prototype.Te = function (p565, p566, p567, p568) {
        this.zf.position.x = p565;
        this.zf.position.y = p566;
        this.zf.scale.x = p567;
        this.zf.scale.y = p568;
        var v774 = this.cj[v767];
        v774[0] = p567 * 0.2520615384615385;
        v774[1] = p568 * 0.4357063736263738;
        var v775 = this.cj[v768];
        v775[0] = p565 * 0.2520615384615385;
        v775[1] = p566 * 0.4357063736263738;
      };
      return f144;
    }();
    var vF36 = function () {
      function f145() {
        this.jh = new vO29.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f145.prototype.kh = function (p569) {
        this.jh.texture = p569.Hc;
        this.jh.anchor.set(p569.Lh, p569.Mh);
        this.dj = p569.Nh;
        this.ej = p569.Oh;
      };
      f145.prototype.oh = function (p570) {
        this.jh.width = p570 * this.dj;
        this.jh.height = p570 * this.ej;
      };
      f145.prototype.fj = function (p571) {
        this.jh.rotation = p571;
      };
      f145.prototype.nh = function (p572, p573) {
        this.jh.position.set(p572, p573);
      };
      f145.prototype.Mg = function (p574) {
        this.jh.visible = p574;
      };
      f145.prototype.gj = function () {
        return this.jh.visible;
      };
      f145.prototype.qh = function (p575) {
        this.jh.alpha = p575;
      };
      f145.prototype.Mf = function () {
        return this.jh;
      };
      f145.prototype.ih = function () {
        f86(this.jh);
      };
      return f145;
    }();
    var vF37 = function () {
      function f146(p576) {
        this.fb = p576;
        this.Mb = new vF37.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      f146.prototype.Kb = function () {
        if (this.pj != null) {
          f86(this.pj.Rf);
        }
        if (this.qj != null) {
          f86(this.qj);
        }
      };
      f146.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f146.prototype.Fg = function (p577) {
        this.Mb = p577;
        this.rj(this.Hb);
      };
      f146.prototype.Mg = function (p578) {
        var v776 = this.Hb;
        this.Hb = p578;
        this.rj(v776);
      };
      f146.prototype.Ig = function (p579) {
        this.M = p579 * 50;
        var vP579 = p579;
        if (p579 > this.fb.cf) {
          vP579 = Math.atan((p579 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v777 = Math.sqrt(Math.pow(vP579 * 5, 0.707106781186548) * 4 + 25);
        var v778 = Math.min(200, Math.max(3, (v777 - 5) * 5 + 1));
        var v779 = this.kj;
        this.Db = (5 + v777 * 0.9) * 0.025;
        this.kj = Math.floor(v778);
        this.ij = v778 - this.kj;
        if (v779 > 0 && v779 < this.kj) {
          var v780 = this.lj[v779 * 2 - 2];
          var v781 = this.lj[v779 * 2 - 1];
          var v782 = this.mj[v779 * 2 - 2];
          var v783 = this.mj[v779 * 2 - 1];
          var v784 = this.nj[v779 * 2 - 2];
          var v785 = this.nj[v779 * 2 - 1];
          for (var vV779 = v779; vV779 < this.kj; vV779++) {
            this.lj[vV779 * 2] = v780;
            this.lj[vV779 * 2 + 1] = v781;
            this.mj[vV779 * 2] = v782;
            this.mj[vV779 * 2 + 1] = v783;
            this.nj[vV779 * 2] = v784;
            this.nj[vV779 * 2 + 1] = v785;
          }
        }
      };
      f146.prototype.Lg = function (p580, p581) {
        this.kj = p581;
        for (var vLN088 = 0; vLN088 < this.kj; vLN088++) {
          this.lj[vLN088 * 2] = this.mj[vLN088 * 2] = this.nj[vLN088 * 2] = p580();
          this.lj[vLN088 * 2 + 1] = this.mj[vLN088 * 2 + 1] = this.nj[vLN088 * 2 + 1] = p580();
        }
      };
      f146.prototype.Kg = function (p582, p583, p584) {
        this.hj = p584;
        for (var vLN089 = 0; vLN089 < this.kj; vLN089++) {
          this.lj[vLN089 * 2] = this.mj[vLN089 * 2];
          this.lj[vLN089 * 2 + 1] = this.mj[vLN089 * 2 + 1];
        }
        var v786 = p582 - this.mj[0];
        var v787 = p583 - this.mj[1];
        this.sj(v786, v787, this.kj, this.mj);
      };
      f146.prototype.sj = function (p585, p586, p587, p588) {
        var v788 = Math.hypot(p585, p586);
        if (!(v788 <= 0)) {
          var v789 = p588[0];
          var vUndefined10 = undefined;
          p588[0] += p585;
          var v790 = p588[1];
          var vUndefined11 = undefined;
          p588[1] += p586;
          var v791 = this.Db / (this.Db + v788);
          var v792 = 1 - v791 * 2;
          var vLN14 = 1;
          for (var v793 = p587 - 1; vLN14 < v793; vLN14++) {
            vUndefined10 = p588[vLN14 * 2];
            p588[vLN14 * 2] = p588[vLN14 * 2 - 2] * v792 + (vUndefined10 + v789) * v791;
            v789 = vUndefined10;
            vUndefined11 = p588[vLN14 * 2 + 1];
            p588[vLN14 * 2 + 1] = p588[vLN14 * 2 - 1] * v792 + (vUndefined11 + v790) * v791;
            v790 = vUndefined11;
          }
          v792 = 1 - (v791 = this.ij * this.Db / (this.ij * this.Db + v788)) * 2;
          p588[p587 * 2 - 2] = p588[p587 * 2 - 4] * v792 + (p588[p587 * 2 - 2] + v789) * v791;
          p588[p587 * 2 - 1] = p588[p587 * 2 - 3] * v792 + (p588[p587 * 2 - 1] + v790) * v791;
        }
      };
      f146.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f146.prototype.Hg = function (p589, p590) {
        var vLN1000000 = 1000000;
        var vP589 = p589;
        var vP590 = p590;
        for (var vLN090 = 0; vLN090 < this.kj; vLN090++) {
          var v794 = this.nj[vLN090 * 2];
          var v795 = this.nj[vLN090 * 2 + 1];
          var v796 = Math.hypot(p589 - v794, p590 - v795);
          if (v796 < vLN1000000) {
            vLN1000000 = v796;
            vP589 = v794;
            vP590 = v795;
          }
        }
        return {
          x: vP589,
          y: vP590,
          distance: vLN1000000
        };
      };
      f146.prototype.vb = function (p591) {
        this.oj = p591;
      };
      f146.prototype.Fb = function (p592, p593) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + Math.cos(p592 / 400 * Math.PI) * 0.1 : 1 : 0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + Math.cos(p592 / 400 * Math.PI) * 0.1 : 1 : 0, this.Jb + p593 * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + Math.cos(p592 / 400 * Math.PI) * 0.1 : 1 : 0, this.Jb - p593 * 0.00125);
        this.jj = (this.Ib ? this.hj ? 1 : 0 : 1) > this.jj ? Math.min(this.Ib ? this.hj ? 1 : 0 : 1, this.jj + p593 * 0.0025) : Math.max(this.Ib ? this.hj ? 1 : 0 : 1, this.jj - p593 * 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f146.prototype.Gb = function (p594, p595, p596, p597) {
        if (this.Hb && this.Ib) {
          var v797 = Math.pow(0.11112, p595 / 95);
          for (var vLN091 = 0; vLN091 < this.kj; vLN091++) {
            var v798 = this.lj[vLN091 * 2] * (1 - p596) + this.mj[vLN091 * 2] * p596;
            var v799 = this.lj[vLN091 * 2 + 1] * (1 - p596) + this.mj[vLN091 * 2 + 1] * p596;
            this.nj[vLN091 * 2] = v798 * (1 - v797) + this.nj[vLN091 * 2] * v797;
            this.nj[vLN091 * 2 + 1] = v799 * (1 - v797) + this.nj[vLN091 * 2 + 1] * v797;
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p594, p595, p597);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f146.prototype.rj = function (p598) {
        if (this.Hb) {
          if (!p598) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f86(this.pj.Rf);
          }
          if (this.qj != null) {
            f86(this.qj);
          }
        }
      };
      f146.prototype.uj = function () {
        var v800 = window.anApp = vUndefined2;
        if (this.pj == null) {
          this.pj = new vF38();
        } else {
          f86(this.pj.Rf);
        }
        this.pj.hh(v800.o.fb.af, v800.p.Dc().ed(this.Mb.cg), v800.p.Dc().dd(this.Mb.dg), v800.p.Dc().fd(this.Mb.Bg), v800.p.Dc().gd(this.Mb.Cg), v800.p.Dc().hd(this.Mb.Dg), v800.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF834("");
          this.qj.style.fontFamily = vA5[v105];
          this.qj.anchor.set(0.5);
        } else {
          f86(this.qj);
        }
        this.qj.style.fontSize = 14;
        this.qj.style.fill = v800.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f146.Config = function () {
        function f147() {
          this.Lb = 0;
          this.cg = vF21.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f147;
      }();
      return f146;
    }();
    var vF834 = f83(vO29.fc, function (p599, p600, p601) {
      vO29.fc.call(this, p599, p600, p601);
      this.If = {
        x: 0,
        y: 0
      };
    });
    var vF38 = function () {
      function f148() {
        this.Rf = new vO29.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new v801();
        this.vj.zIndex = 1.6;
        this.wj = 0;
        this.xj = Array(797);
        this.xj[0] = this.yj(0, new vF36(), new vF36());
        for (var vLN15 = 1; vLN15 < 797; vLN15++) {
          this.xj[vLN15] = this.yj(vLN15, new vF36(), new vF36());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var v801;
      var v802 = Math.PI * 0.1;
      var v803 = -0.06640625;
      var v804 = -0.03515625;
      var v805 = -0.0625;
      var v806 = v803 * 3 + 0.84375;
      var v807 = 0.2578125 - v803 * 3;
      var v808 = v803 + v804;
      var v809 = v805 + v805;
      var v810 = v804 * 3 + 0.2578125;
      var v811 = 0.84375 - v804 * 3;
      var v812 = v804 + v803;
      f148.prototype.yj = function (p602, p603, p604) {
        var v813 = new vF39(p603, p604);
        p603.jh.zIndex = ((797 - p602) * 2 + 1 + 3) * 0.001;
        p604.jh.zIndex = ((797 - p602) * 2 - 2 + 3) * 0.001;
        return v813;
      };
      f148.prototype.hh = function (p605, p606, p607, p608, p609, p610, p611) {
        var v814 = p607.Zc;
        var v815 = p605 == 16 ? p606.bd.$c : p607.$c;
        if (v814.length > 0 && v815.length > 0) {
          for (var vLN092 = 0; vLN092 < this.xj.length; vLN092++) {
            this.xj[vLN092].Nf.kh(v814[vLN092 % v814.length]);
            this.xj[vLN092].Pf.kh(v815[vLN092 % v815.length]);
          }
        }
        this.vj.hh(p608, p609, p610, p611);
      };
      (v801 = f83(vO29.Zb, function () {
        vO29.Zb.call(this);
        this.sortableChildren = true;
        this.Cj = [];
        this.Dj = [];
        this.Ej = [];
        this.Fj = [];
        this.Gj = new vO29.Zb();
        this.Hj = [];
        for (var vLN093 = 0; vLN093 < 4; vLN093++) {
          var v816 = new vF36();
          v816.kh((window.anApp = vUndefined2).q.Ph);
          this.Gj.addChild(v816.jh);
          this.Hj.push(v816);
        }
        this.Gj.zIndex = 0.0011;
        this.addChild(this.Gj);
        this.Ij();
        this.Jj = new vF36();
        this.Jj.kh((window.anApp = vUndefined2).q.Qh);
        this.Jj.jh.zIndex = 0.001;
        this.addChild(this.Jj.jh);
        this.Kj();
        this.flx = new vF36();
        this.flx.kh((window.anApp = vUndefined2).q.Rh);
        this.flx.jh.zIndex = 0.001;
        this.addChild(this.flx.jh);
        this.flexx();
        this.xxx5 = new vF36();
        this.xxx5.kh((window.anApp = vUndefined2).q.X_x5);
        this.xxx5.jh.zIndex = 0.001;
        this.addChild(this.xxx5.jh);
        this.xXx5();
        this.xxx2 = new vF36();
        this.xxx2.kh((window.anApp = vUndefined2).q.X_x2);
        this.xxx2.jh.zIndex = 0.001;
        this.addChild(this.xxx2.jh);
        this.xXx2();
        this.xxx10 = new vF36();
        this.xxx10.kh((window.anApp = vUndefined2).q.X_x10);
        this.xxx10.jh.zIndex = 0.001;
        this.addChild(this.xxx10.jh);
        this.xXx10();
        this.xxxLupatype = new vF36();
        this.xxxLupatype.kh((window.anApp = vUndefined2).q.X_xxlupa);
        this.xxxLupatype.jh.zIndex = 0.001;
        this.addChild(this.xxxLupatype.jh);
        this.xXxLupaZ();
        this.xxxEmojiType = new vF36();
        this.xxxEmojiType.kh((window.anApp = vUndefined2).q.emoji);
        this.xxxEmojiType.jh.zIndex = 0.001;
        this.addChild(this.xxxEmojiType.jh);
        this.x_emoji();
      })).prototype.hh = function (p612, p613, p614, p615) {
        this.Lj(0.002, this.Cj, p612.Zc);
        this.Lj(0.003, this.Dj, p613.Zc);
        this.Lj(0.004, this.Fj, p615.Zc);
        this.Lj(0.005, this.Ej, p614.Zc);
      };
      v801.prototype.Lj = function (p616, p617, p618) {
        while (p618.length > p617.length) {
          var v817 = new vF36();
          p617.push(v817);
          this.addChild(v817.Mf());
        }
        while (p618.length < p617.length) {
          p617.pop().ih();
        }
        var vP616 = p616;
        for (var vLN094 = 0; vLN094 < p618.length; vLN094++) {
          vP616 += 0.0001;
          var v818 = p617[vLN094];
          v818.kh(p618[vLN094]);
          v818.jh.zIndex = vP616;
        }
      };
      v801.prototype.mh = function (p619, p620, p621, p622) {
        this.visible = true;
        this.position.set(p619, p620);
        this.rotation = p622;
        for (var vLN095 = 0; vLN095 < this.Cj.length; vLN095++) {
          this.Cj[vLN095].oh(p621);
        }
        for (var vLN096 = 0; vLN096 < this.Dj.length; vLN096++) {
          this.Dj[vLN096].oh(p621);
        }
        for (var vLN097 = 0; vLN097 < this.Ej.length; vLN097++) {
          this.Ej[vLN097].oh(p621);
        }
        for (var vLN098 = 0; vLN098 < this.Fj.length; vLN098++) {
          this.Fj[vLN098].oh(p621);
        }
      };
      v801.prototype.lh = function () {
        this.visible = false;
      };
      v801.prototype.Mj = function (p623, p624, p625, p626) {
        this.Gj.visible = true;
        var v819 = p625 / 1000;
        var v820 = 1 / this.Hj.length;
        for (var vLN099 = 0; vLN099 < this.Hj.length; vLN099++) {
          var v821 = 1 - (v819 + v820 * vLN099) % 1;
          this.Hj[vLN099].jh.alpha = 1 - v821;
          this.Hj[vLN099].oh(p624 * (0.5 + v821 * 4.5));
        }
      };
      v801.prototype.Ij = function () {
        this.Gj.visible = false;
      };
      v801.prototype.Nj = function (p627, p628, p629, p630) {
        this.Jj.jh.visible = true;
        this.Jj.jh.alpha = (p627.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(p627.hj ? 0.9 : 0.2, this.Jj.jh.alpha + p630 * 0.0025) : Math.max(p627.hj ? 0.9 : 0.2, this.Jj.jh.alpha - p630 * 0.0025);
        this.Jj.oh(p628);
      };
      v801.prototype.Nflex = function (p631, p632, p633, p634) {
        this.flx.jh.visible = true;
        this.flx.oh(p632);
      };
      v801.prototype.flexx = function () {
        this.flx.jh.visible = false;
      };
      v801.prototype.ActiveX5 = function (p635, p636, p637, p638) {
        this.xxx5.jh.visible = true;
        this.xxx5.jh.alpha = (p635.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(p635.hj ? 0.9 : 0.2, this.Jj.jh.alpha + p638 * 0.0025) : Math.max(p635.hj ? 0.9 : 0.2, this.Jj.jh.alpha - p638 * 0.0025);
        this.xxx5.oh(p636);
      };
      v801.prototype.xXx5 = function () {
        this.xxx5.jh.visible = false;
      };
      v801.prototype.ActiveEmoji = function (p639, p640, p641, p642) {
        this.xxxEmojiType.jh.visible = true;
        this.xxxEmojiType.oh(p640);
      };
      v801.prototype.x_emoji = function () {
        this.xxxEmojiType.jh.visible = false;
      };
      v801.prototype.ActiveX2 = function (p643, p644, p645, p646) {
        this.xxx2.jh.visible = true;
        this.xxx2.jh.alpha = (p643.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(p643.hj ? 0.9 : 0.2, this.Jj.jh.alpha + p646 * 0.0025) : Math.max(p643.hj ? 0.9 : 0.2, this.Jj.jh.alpha - p646 * 0.0025);
        this.xxx2.oh(p644);
      };
      v801.prototype.xXx2 = function () {
        this.xxx2.jh.visible = false;
      };
      v801.prototype.ActiveX10 = function (p647, p648, p649, p650) {
        this.xxx10.jh.visible = true;
        this.xxx10.jh.alpha = (p647.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(p647.hj ? 0.9 : 0.2, this.Jj.jh.alpha + p650 * 0.0025) : Math.max(p647.hj ? 0.9 : 0.2, this.Jj.jh.alpha - p650 * 0.0025);
        this.xxx10.oh(p648);
      };
      v801.prototype.xXx10 = function () {
        this.xxx10.jh.visible = false;
      };
      v801.prototype.ActiveZlupa = function (p651, p652, p653, p654) {
        this.xxxLupatype.jh.visible = true;
        this.xxxLupatype.jh.alpha = (p651.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(p651.hj ? 0.9 : 0.2, this.Jj.jh.alpha + p654 * 0.0025) : Math.max(p651.hj ? 0.9 : 0.2, this.Jj.jh.alpha - p654 * 0.0025);
        this.xxxLupatype.oh(p652);
      };
      v801.prototype.xXxLupaZ = function () {
        this.xxxLupatype.jh.visible = false;
      };
      v801.prototype.Kj = function () {
        this.Jj.jh.visible = false;
      };
      f148.prototype.Oj = function (p655) {
        return this.Aj + this.Bj * Math.sin(p655 * v802 - this.zj);
      };
      f148.prototype.tj = function (p656, p657, p658, p659) {
        var v822;
        var v823;
        var v824;
        var v825;
        var v826;
        var v827;
        var v828;
        var v829;
        var v830 = p656.Db * 2;
        var v831 = p656.nj;
        var v832 = p656.kj;
        var v833 = v832 * 4 - 3;
        this.zj = p657 / 400 * Math.PI;
        this.Aj = v830 * 1.5;
        this.Bj = v830 * 0.1 * p656.jj;
        if (p659(v823 = v831[0], v827 = v831[1])) {
          v824 = v831[2];
          v828 = v831[3];
          v825 = v831[4];
          var v834 = Math.atan2((v829 = v831[5]) + v827 * 2 - v828 * 3, v825 + v823 * 2 - v824 * 3);
          this.vj.mh(v823, v827, v830, v834);
          this.xj[0].mh(v823, v827, v830, this.Oj(0), v834);
          this.xj[1].mh(v806 * v823 + v807 * v824 + v808 * v825, v806 * v827 + v807 * v828 + v808 * v829, v830, this.Oj(1), vF39.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(v823 * 0.375 + v824 * 0.75 + v809 * v825, v827 * 0.375 + v828 * 0.75 + v809 * v829, v830, this.Oj(2), vF39.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v810 * v823 + v811 * v824 + v812 * v825, v810 * v827 + v811 * v828 + v812 * v829, v830, this.Oj(3), vF39.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN42 = 4;
        var vLN2 = 2;
        for (var v835 = v832 * 2 - 4; vLN2 < v835; vLN2 += 2) {
          if (p659(v823 = v831[vLN2], v827 = v831[vLN2 + 1])) {
            v822 = v831[vLN2 - 2];
            v826 = v831[vLN2 - 1];
            v824 = v831[vLN2 + 2];
            v828 = v831[vLN2 + 3];
            v825 = v831[vLN2 + 4];
            v829 = v831[vLN2 + 5];
            this.xj[vLN42].mh(v823, v827, v830, this.Oj(vLN42), vF39.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v803 * v822 + v823 * 0.84375 + v824 * 0.2578125 + v804 * v825, v803 * v826 + v827 * 0.84375 + v828 * 0.2578125 + v804 * v829, v830, this.Oj(vLN42), vF39.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v805 * v822 + v823 * 0.5625 + v824 * 0.5625 + v805 * v825, v805 * v826 + v827 * 0.5625 + v828 * 0.5625 + v805 * v829, v830, this.Oj(vLN42), vF39.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v804 * v822 + v823 * 0.2578125 + v824 * 0.84375 + v803 * v825, v804 * v826 + v827 * 0.2578125 + v828 * 0.84375 + v803 * v829, v830, this.Oj(vLN42), vF39.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
          } else {
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
          }
        }
        if (p659(v823 = v831[v832 * 2 - 4], v827 = v831[v832 * 2 - 3])) {
          v822 = v831[v832 * 2 - 6];
          v826 = v831[v832 * 2 - 5];
          v824 = v831[v832 * 2 - 2];
          v828 = v831[v832 * 2 - 1];
          this.xj[v833 - 5].mh(v823, v827, v830, this.Oj(v833 - 5), vF39.angleBetween(this.xj[v833 - 6], this.xj[v833 - 4]));
          this.xj[v833 - 4].mh(v812 * v822 + v811 * v823 + v810 * v824, v812 * v826 + v811 * v827 + v810 * v828, v830, this.Oj(v833 - 4), vF39.angleBetween(this.xj[v833 - 5], this.xj[v833 - 3]));
          this.xj[v833 - 3].mh(v809 * v822 + v823 * 0.75 + v824 * 0.375, v809 * v826 + v827 * 0.75 + v828 * 0.375, v830, this.Oj(v833 - 3), vF39.angleBetween(this.xj[v833 - 4], this.xj[v833 - 2]));
          this.xj[v833 - 2].mh(v808 * v822 + v807 * v823 + v806 * v824, v808 * v826 + v807 * v827 + v806 * v828, v830, this.Oj(v833 - 2), vF39.angleBetween(this.xj[v833 - 3], this.xj[v833 - 1]));
          this.xj[v833 - 1].mh(v824, v828, v830, this.Oj(v833 - 1), vF39.angleBetween(this.xj[v833 - 2], this.xj[v833 - 1]));
        } else {
          this.xj[v833 - 5].lh();
          this.xj[v833 - 4].lh();
          this.xj[v833 - 3].lh();
          this.xj[v833 - 2].lh();
          this.xj[v833 - 1].lh();
        }
        if (this.wj == 0 && v833 > 0) {
          this.Rf.addChild(this.vj);
        }
        for (this.wj > 0 && v833 == 0 && f86(this.vj); this.wj < v833;) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > v833) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        if (vO6.emoji && p656 && p656.Mb && p656.Mb.Mb) {
          this.vj.ActiveEmoji(p656, v830, p657, p658);
        } else {
          this.vj.x_emoji();
        }
        var v836 = p656.Ff[vF11.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v836 != null && v836.sc) {
          this.vj.Mj(p656, v830, p657, p658);
        } else {
          this.vj.Ij();
        }
        var v837 = p656.Ff[vF11.VELOCITY_TYPE];
        if (this.xj[0].gj() && v837 != null && v837.sc) {
          this.vj.Nj(p656, v830, p657, p658);
        } else {
          this.vj.Kj();
        }
        var v838 = p656.Ff[vF11.FLEXIBLE_TYPE];
        if (true && this.xj[0].gj() && v838 != null && v838.sc) {
          this.vj.Nflex(p656, v830, p657, p658);
        } else {
          this.vj.flexx();
        }
        var v839 = p656.Ff[vF11.X5_TYPE];
        if (false && this.xj[0].gj() && v839 != null && v839.sc) {
          this.vj.ActiveX5(p656, v830, p657, p658);
        } else {
          this.vj.xXx5();
        }
        var v840 = p656.Ff[vF11.X2_TYPE];
        if (false && this.xj[0].gj() && v840 != null && v840.sc) {
          this.vj.ActiveX2(p656, v830, p657, p658);
        } else {
          this.vj.xXx2();
        }
        var v841 = p656.Ff[vF11.X10_TYPE];
        if (false && this.xj[0].gj() && v841 != null && v841.sc) {
          this.vj.ActiveX10(p656, v830, p657, p658);
        } else {
          this.vj.xXx10();
        }
        var v842 = p656.Ff[vF11.ZOOM_TYPE];
        if (false && this.xj[0].gj() && v842 != null && v842.sc) {
          this.vj.ActiveZlupa(p656, v830, p657, p658);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var vF39 = function () {
        function f149(p660, p661) {
          this.Nf = p660;
          this.Nf.Mg(false);
          this.Pf = p661;
          this.Pf.Mg(false);
        }
        f149.prototype.mh = function (p662, p663, p664, p665, p666) {
          this.Nf.Mg(true);
          this.Nf.nh(p662, p663);
          this.Nf.oh(p664);
          this.Nf.fj(p666);
          this.Pf.Mg(true);
          this.Pf.nh(p662, p663);
          this.Pf.oh(p665);
          this.Pf.fj(p666);
        };
        f149.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f149.prototype.gj = function () {
          return this.Nf.gj();
        };
        f149.angleBetween = function (p667, p668) {
          return Math.atan2(p667.Nf.jh.position.y - p668.Nf.jh.position.y, p667.Nf.jh.position.x - p668.Nf.jh.position.x);
        };
        return f149;
      }();
      return f148;
    }();
    var vF40 = function () {
      function f150(p669) {
        this.se = p669;
        this.te = p669.get()[0];
        this.ue = new vO29.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF38();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var vThis14 = this;
        (window.anApp = vUndefined2).p.ca(function () {
          if ((window.anApp = vUndefined2).p.W()) {
            vThis14.Fb();
          }
        });
      }
      f150.prototype.Fb = function () {
        var v843 = window.anApp = vUndefined2;
        this.Pj.hh(0, null, v843.p.Dc().dd(this.rh), v843.p.Dc().fd(this.sh), v843.p.Dc().gd(this.th), v843.p.Dc().hd(this.uh), v843.p.Dc().jd(this.vh));
      };
      f150.prototype.Le = function (p670) {
        this.sc = p670;
      };
      f150.prototype.ak = function (p671, p672, p673) {
        this.rh = p671;
        this.Sj = p672;
        this.Xj = p673;
        this.Fb();
      };
      f150.prototype.bk = function (p674, p675, p676) {
        this.sh = p674;
        this.Tj = p675;
        this.Yj = p676;
        this.Fb();
      };
      f150.prototype.ck = function (p677, p678, p679) {
        this.th = p677;
        this.Uj = p678;
        this.Zj = p679;
        this.Fb();
      };
      f150.prototype.dk = function (p680, p681, p682) {
        this.uh = p680;
        this.Vj = p681;
        this.$j = p682;
        this.Fb();
      };
      f150.prototype.ek = function (p683, p684, p685) {
        this.vh = p683;
        this.Wj = p684;
        this._j = p685;
        this.Fb();
      };
      f150.prototype.Ra = function () {
        var v844 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v844;
        this.te.width = v844 * this.Qj;
        this.te.height = v844 * this.Rj;
        this.Ng = this.Rj / 4;
        var v845 = Math.floor(this.Qj / this.Ng) * 2 - 5 > this.Pj.xj.length ? this.Pj.xj.length : Math.floor(this.Qj / this.Ng) * 2 - 5 < 1 ? 1 : Number.isFinite(Math.floor(this.Qj / this.Ng) * 2 - 5) ? Math.floor(this.Qj / this.Ng) * 2 - 5 : (1 + this.Pj.xj.length) * 0.5;
        if (this.Pj.wj != v845) {
          for (var vV845 = v845; vV845 < this.Pj.xj.length; vV845++) {
            this.Pj.xj[vV845].lh();
          }
          while (this.Pj.wj < v845) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > v845) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f150.prototype.Pa = function () {
        if (this.sc && (window.anApp = vUndefined2).p.W) {
          var v846 = Date.now() / 200;
          var v847 = Math.sin(v846);
          var v848 = this.Ng;
          var v849 = this.Ng * 1.5;
          var v850 = this.Qj - (this.Qj - v848 * 0.5 * (this.Pj.wj - 1)) * 0.5;
          var v851 = this.Rj * 0.5;
          var vLN0100 = 0;
          var vLN0101 = 0;
          for (var v852 = -1; v852 < this.Pj.wj; v852++) {
            var vV852 = v852;
            var v853 = Math.cos(vV852 * 1 / 12 * Math.PI - v846) * (1 - Math.pow(16, vV852 * -1 / 12));
            if (v852 >= 0) {
              var v854 = v850 + v848 * -0.5 * vV852;
              var v855 = v851 + v848 * 0.5 * v853;
              var v856 = v848 * 2;
              var v857 = v849 * 2;
              var v858 = Math.atan2(vLN0101 - v853, vV852 - vLN0100);
              if (v852 == 0) {
                this.Pj.vj.mh(v854, v855, v856, v858);
              }
              this.Pj.xj[v852].mh(v854, v855, v856, v857, v858);
              var v859 = this.Sj ? this.Xj ? 0.4 + v847 * 0.2 : 0.9 + v847 * 0.1 : this.Xj ? 0.4 : 1;
              this.Pj.xj[v852].Nf.qh(v859);
              this.Pj.xj[v852].Pf.qh(v859);
            }
            vLN0100 = vV852;
            vLN0101 = v853;
          }
          for (var vLN0102 = 0; vLN0102 < this.Pj.vj.Cj.length; vLN0102++) {
            var v860 = this.Tj ? this.Yj ? 0.4 + v847 * 0.2 : 0.9 + v847 * 0.1 : this.Yj ? 0.4 : 1;
            this.Pj.vj.Cj[vLN0102].qh(v860);
          }
          for (var vLN0103 = 0; vLN0103 < this.Pj.vj.Dj.length; vLN0103++) {
            var v861 = this.Uj ? this.Zj ? 0.4 + v847 * 0.2 : 0.9 + v847 * 0.1 : this.Zj ? 0.4 : 1;
            this.Pj.vj.Dj[vLN0103].qh(v861);
          }
          for (var vLN0104 = 0; vLN0104 < this.Pj.vj.Ej.length; vLN0104++) {
            var v862 = this.Vj ? this.$j ? 0.4 + v847 * 0.2 : 0.9 + v847 * 0.1 : this.$j ? 0.4 : 1;
            this.Pj.vj.Ej[vLN0104].qh(v862);
          }
          for (var vLN0105 = 0; vLN0105 < this.Pj.vj.Fj.length; vLN0105++) {
            var v863 = this.Wj ? this._j ? 0.4 + v847 * 0.2 : 0.9 + v847 * 0.1 : this._j ? 0.4 : 1;
            this.Pj.vj.Fj[vLN0105].qh(v863);
          }
          this.ue.render(this.Pj.Rf);
        }
      };
      return f150;
    }();
    var vF41 = function () {
      function f151(p686) {
        this.rc = p686;
      }
      f151.fk = $("#game-view");
      f151.gk = $("#results-view");
      f151.hk = $("#main-menu-view");
      f151.ik = $("#popup-view");
      f151.jk = $("#toaster-view");
      f151.kk = $("#loading-view");
      f151.lk = $("#stretch-box");
      f151.mk = $("#game-canvas");
      f151.di = $("#background-canvas");
      f151.nk = $("#social-buttons");
      f151.ok = $("#markup-wrap");
      f151.prototype.a = function () {};
      f151.prototype.ii = function () {};
      f151.prototype.ji = function () {};
      f151.prototype.ei = function () {};
      f151.prototype.Ra = function () {};
      f151.prototype.Pa = function (p687, p688) {};
      return f151;
    }();
    var vF42 = function () {
      function f152(p689, p690, p691, p692, p693, p694) {
        var v$13 = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p689 + "</span></div>");
        v$13.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p690,
              name: p691,
              caption: p692,
              description: p693,
              picture: p694
            }, function () {});
          }
        });
        return v$13;
      }
      var v$14 = $("#final-caption");
      var v$15 = $("#final-continue");
      var v$16 = $("#congrats-bg");
      var v$17 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$18 = $("#final-share-fb");
      var v$19 = $("#final-message");
      var v$20 = $("#final-score");
      var v$21 = $("#final-place");
      var v$22 = $("#final-board");
      var vF835 = f83(vF41, function () {
        vF41.call(this, 0);
        var vThis15 = this;
        var v864 = window.anApp = vUndefined2;
        var v865 = vF41.mk.get()[0];
        console.log("sSE=" + v991.qk);
        v$14.text(window.I18N_MESSAGES["index.game.result.title"]);
        v$15.text(window.I18N_MESSAGES["index.game.result.continue"]);
        v$15.click(function () {
          v864.r.Cd();
          v864.r.G(vF14.AudioState.F);
          v864.s.I(v864.s.F);
        });
        $("#game-canvas").attr("tabindex", 0).focus();
        $("#game-canvas").click();
        $("#game-canvas").keypress(function (p695) {
          console.log(p695);
          if (p695.target.type !== "text") {
            if (p695.key.toLowerCase() === "z") {
              f13(1);
            }
            if (p695.key.toLowerCase() === "r") {
              let vV222 = v22;
              $(".overlay-2").css("position", "static");
              if (vV222) {
                anApp.r.Hd();
                anApp.sa(vV222);
              }
            }
            if (p695.key.toLowerCase() === "r") {
              let v866 = new Uint8Array([NaN, NaN]);
              anApp.o.Wb(v866);
              setTimeout(() => {
                let vV223 = v22;
                $(".overlay-2").css("position", "static");
                if (vV223) {
                  anApp.r.Hd();
                  anApp.sa(vV223);
                }
              }, 1000);
            }
            if (p695.key.toLowerCase() === "l") {
              $(".option.toggle[data-option='laserHS'] .box").click();
            }
            if (p695.key.toLowerCase() === "q") {
              $(".option.toggle[data-option='sectores'] .box").click();
              f54();
            }
            if (p695.key.toLowerCase() === "c") {
              $(".option.toggle[data-option='backgroundSolid'] .box").click();
              f54();
            }
            if (p695.key.toLowerCase() === "1") {
              vO6.noSkin = false;
            }
            if (p695.key.toLowerCase() === "2") {
              vO6.noAuras = false;
            }
            if (p695.key.toLowerCase() === "q") {
              if (v98) {
                v98 = false;
                vLN55 = 55;
                vLN1 = 1;
                v99 = true;
                clearInterval(v97);
                v97 = null;
                v29.texture = v100;
                v29.alpha = 0.25;
              } else {
                v29.alpha = 0.75;
                f49();
                v98 = true;
              }
            }
          }
        });
        $("#game-canvas").keydown(function (p696) {
          if (p696.key === "Enter") {
            f153();
          }
          if (p696.keyCode == 32) {
            vThis15.rk = true;
          }
          if (p696.keyCode == 49) {
            vO6.emoji = true;
            setTimeout(() => {
              vO6.emoji = false;
            }, 2000);
          }
          p696.keyCode;
        }).keyup(function (p697) {
          if (p697.keyCode == 32) {
            vThis15.rk = false;
          }
        });
        function f153() {
          $("#chatInput").css("display", "block").focus();
        }
        v865.addEventListener("touchstart", function (p698) {
          if (p698 = p698 || window.event) {
            vThis15.rk = p698.touches.length >= 2;
          }
          p698.preventDefault();
        }, true);
        v865.addEventListener("touchend", function (p699) {
          if (p699 = p699 || window.event) {
            vThis15.rk = p699.touches.length >= 2;
          }
        }, true);
        v865.addEventListener("mousemove", function (p700) {
          if ((p700 = p700 || window.event && p700.clientX !== undefined) && !v98) {
            var v867 = p700.clientX;
            var v868 = p700.clientY;
            window.mouseX = v867;
            window.mouseY = v868;
            vThis15.sk = Math.atan2(v868 - v865.offsetHeight * 0.5, v867 - v865.offsetWidth * 0.5);
          }
        }, true);
        v865.addEventListener("mousedown", function (p701) {
          vThis15.rk = true;
        }, true);
        v865.addEventListener("mouseup", function (p702) {
          vThis15.rk = false;
        }, true);
        if (f12()) {
          var v869;
          var v870 = -1;
          v865.addEventListener("touchmove", function (p703) {
            if (p703 = p703 || window.event) {
              p703 = p703.touches[0];
              var v871 = v865.offsetWidth * 0.5;
              var v872 = v865.offsetHeight * 0.5;
              if (v40.visible) {
                v871 = v40.x + 110;
                v872 = v40.y + 110;
              }
              if (v33 === -1) {
                vThis15.sk = Math.atan2(p703.pageY - v872, p703.pageX - v871);
              }
              if (v38 != -1) {
                var v873 = Math.sqrt((v871 - p703.pageX) * (v871 - p703.pageX) + (v872 - p703.pageY) * (v872 - p703.pageY));
                v37[v38].x = v865.offsetWidth * 0.5 + (v873 < 110 ? v873 : 110) * Math.cos(vThis15.sk) - 68;
                v37[v38].y = v865.offsetHeight * 0.5 + (v873 < 110 ? v873 : 110) * Math.sin(vThis15.sk) - 68;
                v37[v38].alpha = 1;
              }
            }
          }, true);
          v865.addEventListener("touchend", function (p704) {
            if (v38 != -1) {
              v37[v38].alpha = 0.25;
            }
            if (p704 && v870 === -1) {
              vThis15.rk = p704.touches.length >= 2;
            }
          }, true);
          v865.addEventListener("pointerdown", function (p705) {
            let v874 = v26.getGlobalPosition();
            let v875 = v27.getGlobalPosition();
            let v876;
            let v877;
            if (v29 !== undefined && v30 !== undefined) {
              v876 = v29.getGlobalPosition();
              v877 = v30.getGlobalPosition();
            }
            let v878 = v36[v34].getGlobalPosition();
            let v879 = v41.getGlobalPosition();
            if (v877 !== undefined && v876 !== undefined) {
              if (p705.clientX > v877.x && p705.clientX <= v877.x + v30.width && p705.clientY > v877.y && p705.clientY <= v877.y + v30.height) {
                v30.emit("mouseup");
                return;
              }
              if (p705.clientX > v876.x && p705.clientX <= v876.x + v29.width && p705.clientY > v876.y && p705.clientY <= v876.y + v29.height) {
                v29.emit("mouseup");
                return;
              }
            }
            if (p705.clientX > v874.x && p705.clientX <= v874.x + v26.width && p705.clientY > v874.y && p705.clientY <= v874.y + v26.height) {
              v26.emit("mouseup");
              return;
            }
            if (p705.clientX > v875.x && p705.clientX <= v875.x + v27.width && p705.clientY > v875.y && p705.clientY <= v875.y + v27.height) {
              v27.emit("mouseup");
              return;
            }
            if (p705.clientX > v878.x && p705.clientX <= v878.x + v36[v34].width && p705.clientY > v878.y && p705.clientY <= v878.y + v36[v34].height) {
              v36[v34].emit("tap");
              return;
            }
            if (v41.visible && p705.clientX > v879.x && p705.clientX <= v879.x + v41.width && p705.clientY > v879.y && p705.clientY <= v879.y + v41.height) {
              v870 = p705.pointerId;
              vThis15.rk = true;
              v41.alpha = 1;
              return;
            }
            if (v33 !== -1 && !v39[v33].visible) {
              v869 = p705.pointerId;
              v39[v33].x = p705.clientX;
              v39[v33].y = p705.clientY;
              v39[v33].visible = true;
              v39[v33].onDragStart(p705);
            }
          }, true);
          v865.addEventListener("pointerup", function (p706) {
            if (p706.pointerId == v870) {
              vThis15.rk = false;
              v870 = -1;
              v41.alpha = 0.5;
            }
            if (p706.pointerId == v869 && v33 !== -1) {
              v39[v33].visible = false;
              v39[v33].onDragEnd(p706);
            }
          }, true);
          v865.addEventListener("pointermove", function (p707) {
            if (p707.pointerId == v869 && v33 !== -1) {
              v39[v33].onDragMove(p707);
            }
          }, true);
        }
        this.wb = new vF22(vF41.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        vO5.eventoPrincipal = vThis15;
      });
      vF835.prototype.a = function () {};
      vF835.prototype.ii = function () {
        if (this.cb == 0) {
          vF41.fk.stop();
          vF41.fk.fadeIn(500);
          vF41.gk.stop();
          vF41.gk.fadeOut(1);
          vF41.hk.stop();
          vF41.hk.fadeOut(50);
          vF41.ik.stop();
          vF41.ik.fadeOut(50);
          vF41.jk.stop();
          vF41.jk.fadeOut(50);
          vF41.kk.stop();
          vF41.kk.fadeOut(50);
          vF41.lk.stop();
          vF41.lk.fadeOut(1);
          vF41.di.stop();
          vF41.di.fadeOut(50);
          vF16.Le(false);
          vF41.nk.stop();
          vF41.nk.fadeOut(50);
          vF41.ok.stop();
          vF41.ok.fadeOut(50);
        } else {
          vF41.fk.stop();
          vF41.fk.fadeIn(500);
          vF41.gk.stop();
          vF41.gk.fadeIn(500);
          vF41.hk.stop();
          vF41.hk.fadeOut(50);
          vF41.ik.stop();
          vF41.ik.fadeOut(50);
          vF41.jk.stop();
          vF41.jk.fadeOut(50);
          vF41.kk.stop();
          vF41.kk.fadeOut(50);
          vF41.lk.stop();
          vF41.lk.fadeOut(1);
          vF41.di.stop();
          vF41.di.fadeOut(50);
          vF16.Le(false);
          vF41.nk.stop();
          vF41.nk.fadeOut(50);
          vF41.ok.stop();
          vF41.ok.fadeOut(50);
        }
      };
      vF835.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF835.prototype.Fa = function () {
        console.log("re");
        v$16.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$16.fadeIn(10);
        }, 1);
        v$17.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$17.fadeIn(10);
        }, 1);
        this.cb = 1;
        return this;
      };
      vF835.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          (window.anApp = vUndefined2).r.Gd();
        }
      };
      vF835.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF835.prototype.Pa = function (p708, p709) {
        this.wb.Pa(p708, p709);
      };
      vF835.prototype.Da = function (p710, p711, p712) {
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        if (p711 >= 1 && p711 <= 10) {
          vUndefined12 = window.I18N_MESSAGES["index.game.result.place.i" + p711];
          vUndefined13 = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          vUndefined14 = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", p712).replace("{1}", p710).replace("{2}", vUndefined12);
        } else {
          vUndefined12 = "";
          vUndefined13 = window.I18N_MESSAGES["index.game.result.tryHit"];
          vUndefined14 = window.I18N_MESSAGES["index.game.social.shareResult.messNorm"].replace("{0}", p712).replace("{1}", p710);
        }
        v$19.html(window.I18N_MESSAGES["index.game.result.your"]);
        v$20.html(p710);
        v$21.html(vUndefined12);
        v$22.html(vUndefined13);
        if (v991.qk) {
          var v880 = window.I18N_MESSAGES["index.game.result.share"];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          v$18.empty().append(f152(v880, "https://wormate.io", "wormate.io", vUndefined14, vUndefined14, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF835.prototype.T = function () {
        return this.sk;
      };
      vF835.prototype.U = function () {
        return this.rk;
      };
      return vF835;
    }();
    v402 = $("#loading-worm-a");
    v403 = $("#loading-worm-b");
    v404 = $("#loading-worm-c");
    v405 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
    (v406 = f83(vF41, function () {
      vF41.call(this, 0);
    })).prototype.a = function () {};
    v406.prototype.ii = function () {
      vF41.fk.stop();
      vF41.fk.fadeOut(50);
      vF41.gk.stop();
      vF41.gk.fadeOut(50);
      vF41.hk.stop();
      vF41.hk.fadeOut(50);
      vF41.ik.stop();
      vF41.ik.fadeOut(50);
      vF41.jk.stop();
      vF41.jk.fadeOut(50);
      vF41.kk.stop();
      vF41.kk.fadeIn(500);
      vF41.lk.stop();
      vF41.lk.fadeIn(1);
      vF41.di.stop();
      vF41.di.fadeIn(500);
      vF16.Le(true);
      vF41.nk.stop();
      vF41.nk.fadeOut(50);
      vF41.ok.stop();
      vF41.ok.fadeOut(50);
    };
    v406.prototype.ji = function () {
      this.tk();
    };
    v406.prototype.tk = function () {
      v402.css("background-position", "100% 200%");
      for (var vLN0106 = 0; vLN0106 < v405.length; vLN0106++) {
        var v881 = Math.floor(Math.random() * v405.length);
        var v882 = v405[vLN0106];
        v405[vLN0106] = v405[v881];
        v405[v881] = v882;
      }
      v402.css("background-position", v405[0]);
      v403.css("background-position", v405[1]);
      v404.css("background-position", v405[2]);
    };
    $("#mm-event-text");
    v407 = $("#mm-skin-canv");
    v408 = $("#mm-skin-prev");
    v409 = $("#mm-skin-next");
    v410 = $("#mm-skin-over");
    v411 = $("#mm-skin-over-button-list");
    v412 = $("#mm-params-nickname");
    v413 = $("#mm-params-game-mode");
    v414 = $("#mm-action-buttons");
    v415 = $("#mm-action-play");
    v416 = $("#mm-action-guest");
    v417 = $("#mm-action-login");
    v418 = $("#mm-player-info");
    v419 = $("#mm-store");
    v420 = $("#mm-leaders");
    v421 = $("#mm-settings");
    v422 = $("#mm-coins-box");
    v423 = $("#mm-player-avatar");
    v424 = $("#mm-player-username");
    v425 = $("#mm-coins-val");
    v426 = $("#mm-player-exp-bar");
    v427 = $("#mm-player-exp-val");
    v428 = $("#mm-player-level");
    (v429 = f83(vF41, function () {
      vF41.call(this, 1);
      var v883 = window.anApp = vUndefined2;
      this.uk = new vF40(v407);
      v413.click(function () {
        v883.r.Cd();
      });
      v407.click(function () {
        if (v883.u.P()) {
          v883.r.Cd();
          v883.s.I(v883.s.$h);
        }
      });
      v408.click(function () {
        v883.r.Cd();
        v883.t.Ah();
      });
      v409.click(function () {
        v883.r.Cd();
        v883.t.zh();
      });
      v412.keypress(function (p713) {
        if (p713.keyCode == 13) {
          v883.na();
        }
      });
      v415.click(function () {
        v883.r.Cd();
        v883.na();
      });
      v416.click(function () {
        v883.r.Cd();
        v883.na();
      });
      v417.click(function () {
        v883.r.Cd();
        v883.s.I(v883.s.Zh);
      });
      v421.click(function () {
        v883.r.Cd();
        v883.s.I(v883.s.xa);
      });
      v418.click(function () {
        if (v883.u.P()) {
          v883.r.Cd();
          v883.s.I(v883.s.Yh);
        }
      });
      v420.click(function () {
        if (v883.u.P()) {
          v883.r.Cd();
          v883.s.I(v883.s.Xh);
        }
      });
      v419.click(function () {
        if (v883.u.P()) {
          v883.r.Cd();
          v883.s.I(v883.s._h);
        }
      });
      v422.click(function () {
        if (v883.u.P()) {
          v883.r.Cd();
          v883.s.I(v883.s.Wh);
        }
      });
      this.vk();
      this.wk();
      $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
      $("#final-replay").click(function () {
        let vV224 = v22;
        if (vV224) {
          anApp.r.Hd();
          anApp.sa(vV224);
        }
      });
      v419.after("<div id=\"mm-wtr-settings\" style=\"\">Settings</div>");
      $("#mm-advice-cont").html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">FULL SCREEN</button><button value=\"Replay\" id=\"wtrplayagain\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">REPLAY</button></div>");
      $("#wtrplayagain").click(function () {
        let vV225 = v22;
        if (vV225) {
          anApp.r.Hd();
          anApp.sa(vV225);
        }
      });
      $("#fullscreen").click(function () {
        if (v42) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.body.webkitExitFullscreen) {
            document.body.webkitExitFullscreen();
          }
          v42 = false;
        } else {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
          } else if (document.body.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
          }
          v42 = true;
        }
      });
      $("#mm-wtr-settings").click(function () {
        if (v883.u.P()) {
          v883.r.Cd();
          v883.s.I(v883.s.wtrset);
        }
      });
      var vF792 = f79(vF17.va);
      if (vF792 != "ARENA" && vF792 != "TEAM2") {
        vF792 = "ARENA";
      }
      v413.val(vF792);
      console.log("Load GM: " + vF792);
    })).prototype.a = function () {
      var v884 = window.anApp = vUndefined2;
      var vThis16 = this;
      v884.u.V(function () {
        v884.s.F.xk();
      });
      v884.u.Pi(function () {
        if (v884.u.P()) {
          v884.t.Bh(v884.u.Di(), vF29.ia);
          v884.t.Bh(v884.u.Ei(), vF29.ja);
          v884.t.Bh(v884.u.Fi(), vF29.ka);
          v884.t.Bh(v884.u.Gi(), vF29.la);
          v884.t.Bh(v884.u.Hi(), vF29.ma);
        } else {
          v884.t.Bh(v884.Ga(), vF29.ia);
          v884.t.Bh(0, vF29.ja);
          v884.t.Bh(0, vF29.ka);
          v884.t.Bh(0, vF29.la);
          v884.t.Bh(0, vF29.ma);
        }
      });
      v884.u.Pi(function () {
        v415.toggle(v884.u.P());
        v417.toggle(!v884.u.P());
        v416.toggle(!v884.u.P());
        v420.toggle(v884.u.P());
        v419.toggle(v884.u.P());
        v422.toggle(v884.u.P());
        if (v884.u.P()) {
          v410.hide();
          v424.html(v884.u.wi());
          v423.attr("src", v884.u.xi());
          v425.html(v884.u.zi());
          v426.width(v884.u.Bi() * 100 / v884.u.Ci() + "%");
          v427.html(v884.u.Bi() + " / " + v884.u.Ci());
          v428.html(v884.u.Ai());
          v412.val(v884.u.ga());
        } else {
          v410.toggle(v991.qk && !v884.Ha());
          v424.html(v424.data("guest"));
          v423.attr("src", "/images/guest-avatar-xmas2022.png");
          v425.html("10");
          v426.width("0");
          v427.html("");
          v428.html(1);
          v412.val(f79(vF17.Aa));
        }
      });
      v884.t.xh(function () {
        vThis16.uk.ak(v884.t.ha(vF29.ia), false, false);
        vThis16.uk.bk(v884.t.ha(vF29.ja), false, false);
        vThis16.uk.ck(v884.t.ha(vF29.ka), false, false);
        vThis16.uk.dk(v884.t.ha(vF29.la), false, false);
        vThis16.uk.ek(v884.t.ha(vF29.ma), false, false);
      });
    };
    v429.prototype.ii = function () {
      vF41.fk.stop();
      vF41.fk.fadeOut(50);
      vF41.gk.stop();
      vF41.gk.fadeOut(50);
      vF41.hk.stop();
      vF41.hk.fadeIn(500);
      vF41.ik.stop();
      vF41.ik.fadeOut(50);
      vF41.jk.stop();
      vF41.jk.fadeOut(50);
      vF41.kk.stop();
      vF41.kk.fadeOut(50);
      vF41.lk.stop();
      vF41.lk.fadeIn(1);
      vF41.di.stop();
      vF41.di.fadeIn(500);
      vF16.Le(true);
      vF41.nk.stop();
      vF41.nk.fadeIn(500);
      vF41.ok.stop();
      vF41.ok.fadeIn(500);
    };
    v429.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
      this.uk.Le(true);
    };
    v429.prototype.ei = function () {
      this.uk.Le(false);
    };
    v429.prototype.Ra = function () {
      this.uk.Ra();
    };
    v429.prototype.Pa = function (p714, p715) {
      this.uk.Pa();
    };
    v429.prototype.ga = function () {
      return v412.val();
    };
    v429.prototype.D = function () {
      return v413.val();
    };
    v429.prototype.xk = function () {
      v414.show();
    };
    v429.prototype.vk = function () {
      var v885 = $("#mm-advice-cont").children();
      var vLN0107 = 0;
      setInterval(function () {
        v885.eq(vLN0107).fadeOut(500, function () {
          if (++vLN0107 >= v885.length) {
            vLN0107 = 0;
          }
          v885.eq(vLN0107).fadeIn(500).css("display", "inline-block");
        });
      }, 3000);
    };
    v429.prototype.wk = function () {
      function f154() {
        v886.Ka(true);
        setTimeout(function () {
          v410.hide();
        }, 3000);
      }
      var v886 = window.anApp = vUndefined2;
      if (v991.qk && !v886.Ha()) {
        v410.show();
        var v887 = window.I18N_MESSAGES["index.game.main.menu.unlockSkins.share"];
        var vEncodeURIComponent = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"] + " https://wormate.io/ #wormate #wormateio");
        var vEncodeURIComponent2 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
        v411.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + v887 + "</span></a>").click(f154));
        v411.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + v887 + "</span></a>").click(f154));
      }
    };
    (v430 = f83(vF41, function () {
      vF41.call(this, 0);
    })).prototype.a = function () {};
    v430.prototype.ii = function () {
      vF41.fk.stop();
      vF41.fk.fadeOut(50);
      vF41.gk.stop();
      vF41.gk.fadeOut(50);
      vF41.hk.stop();
      vF41.hk.fadeOut(50);
      vF41.ik.stop();
      vF41.ik.fadeOut(50);
      vF41.jk.stop();
      vF41.jk.fadeOut(50);
      vF41.kk.stop();
      vF41.kk.fadeOut(50);
      vF41.lk.stop();
      vF41.lk.fadeOut(1);
      vF41.di.stop();
      vF41.di.fadeOut(50);
      vF16.Le(false);
      vF41.nk.stop();
      vF41.nk.fadeOut(50);
      vF41.ok.stop();
      vF41.ok.fadeOut(50);
    };
    v431 = $("#toaster-stack");
    (v432 = f83(vF41, function () {
      vF41.call(this, 0);
      this.yk = [];
      this.zk = null;
    })).prototype.a = function () {};
    v432.prototype.ii = function () {
      vF41.fk.stop();
      vF41.fk.fadeOut(50);
      vF41.gk.stop();
      vF41.gk.fadeOut(50);
      vF41.hk.stop();
      vF41.hk.fadeOut(50);
      vF41.ik.stop();
      vF41.ik.fadeOut(50);
      vF41.jk.stop();
      vF41.jk.fadeIn(500);
      vF41.kk.stop();
      vF41.kk.fadeOut(50);
      vF41.lk.stop();
      vF41.lk.fadeIn(1);
      vF41.di.stop();
      vF41.di.fadeIn(500);
      vF16.Le(true);
      vF41.nk.stop();
      vF41.nk.fadeOut(50);
      vF41.ok.stop();
      vF41.ok.fadeIn(500);
    };
    v432.prototype.ji = function () {
      this.Ak();
    };
    v432.prototype.mi = function () {
      return this.zk != null || this.yk.length > 0;
    };
    v432.prototype._ = function (p716) {
      this.yk.unshift(p716);
      setTimeout(function () {
        (window.anApp = vUndefined2).s.ki();
      }, 0);
    };
    v432.prototype.Ti = function (p717) {
      this.yk.push(p717);
      setTimeout(function () {
        (window.anApp = vUndefined2).s.ki();
      }, 0);
    };
    v432.prototype.Ak = function () {
      var vThis17 = this;
      if (this.zk == null) {
        if (this.yk.length == 0) {
          (window.anApp = vUndefined2).s.gi();
          return;
        }
        var v888 = this.yk.shift();
        this.zk = v888;
        var v889 = v888.Bk();
        v889.hide();
        v889.fadeIn(300);
        v431.append(v889);
        v888.Ck = function () {
          v889.fadeOut(300);
          setTimeout(function () {
            v889.remove();
          }, 300);
          if (vThis17.zk == v888) {
            vThis17.zk = null;
          }
          vThis17.Ak();
        };
        v888.ji();
      }
    };
    var vF43 = function () {
      var v$23 = $("#popup-menu-label");
      var v$24 = $("#popup-menu-coins-box");
      var v$25 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var v890 = window.anApp = vUndefined2;
        v890.r.Cd();
        v890.s.gi();
      });
      v$24.click(function () {
        var v891 = window.anApp = vUndefined2;
        if (v891.u.P()) {
          v891.r.Cd();
          v891.s.I(v891.s.Wh);
        }
      });
      var vF836 = f83(vF41, function (p718, p719) {
        vF41.call(this, 1);
        this.ad = p718;
        this.Dk = p719;
      });
      $("#settings-view").after("\n      <div id=\"settings-menu\" style=\"display: flex; opacity: 0; z-index: 2;\">\n    <div class=\"navigation\">\n        <div class=\"tab material-button active\" category=\"profile\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">person</i>\n            <span>Profile</span>\n        </div>\n        <div class=\"tab material-button\" category=\"game\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">games</i>\n            <span>Game</span>\n        </div>\n                            <div class=\"tab material-button\" category=\"theme\" style=\"position: relative; overflow: hidden;\">\n                                <i class=\"material-icons\">palette</i>\n                                <span>COLOR</span>\n                            </div>\n\n\n        <div class=\"tab material-button\" category=\"sound\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">volume_up</i>\n            <span>Sound</span>\n        </div>\n        <!-- Nueva pestaña: Equipos -->\n        <div class=\"tab material-button\" category=\"teams\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">group</i>\n            <span>Teams</span>\n        </div>\n        <!-- Nueva pestaña: Skins -->\n        <div class=\"tab material-button\" category=\"skins\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">brush</i>\n            <span>Skins</span>\n        </div>\n        <!-- Nueva pestaña: Streamers -->\n        <div class=\"tab material-button\" category=\"streamers\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">live_tv</i>\n            <span>Live</span>\n        </div>\n    </div>\n\n    <div class=\"options-list ps\">\n              <div category=\"game\">\n                  <div class=\"background-container\">\n                      <div class=\"name2\">Select Background</div>\n                      <div class=\"background-selector\">\n                          <button id=\"prevBackground\" class=\"nav-button\" onclick=\"changeBackground(-1)\">←</button>\n                          <div id=\"backgroundPreview\" class=\"background-preview\"></div>\n                          <button id=\"nextBackground\" class=\"nav-button\" onclick=\"changeBackground(1)\">→</button>\n                      </div>\n                  </div>\n                  <div class=\"background-container\">\n                      <div class=\"name2\">Select Font In Game</div>\n                      <div class=\"background-selector\">\n                          <button id=\"prevFont\" class=\"nav-button\" onclick=\"changeFont(-1)\">←</button>\n                          <div id=\"fontPreview\" class=\"font-preview\">AaBbCc</div>\n                          <button id=\"nextFont\" class=\"nav-button\" onclick=\"changeFont(1)\">→</button>\n                      </div>\n                  </div>\n              </div>\n  \n        <div category=\"theme\"></div>\n        <div category=\"controls\">\n            <div class=\"hotkey-container\"></div>\n        </div>\n<div category=\"profile\" class=\"active\">\n    <div class=\"profile-card\">\n        <!-- Profile Image -->\n        <div class=\"profile-picture\">\n            <img src=\"https://i.imgur.com/gUysDha.png\" id=\"avatarUrl\" alt=\"Profile Picture\">\n        </div>\n        <!-- User Info -->\n        <div class=\"profile-info\">\n            <h2>User Profile</h2>\n            <!-- User details -->\n            <div class=\"profile-id-container\">\n                <span id=\"idperfil\">ID: <span id=\"userid\"></span></span>\n                <button id=\"idcopiar\" class=\"copy-button\">Copy ID</button>\n            </div>\n            <h3>Other</h3>\n            <div class=\"button-group\">\n                <button id=\"resetScript\" class=\"reset-button\">Version Change</button>\n                <button id=\"resetScript2\" class=\"reset-button2\">Skinlab</button> \n                <button id=\"resetScript3\" class=\"reset-button3\">Social</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n        <div category=\"cursor\"></div>\n        <div category=\"sound\">\n            <!-- Sound tutorial links -->\n            <div class=\"sound-inputs\">\n                <div class=\"input-container\">\n                    <div class=\"name\">Sound Tutorial 1</div>\n                    <button class=\"sound-button\" onclick=\"window.open('https://www.myinstants.com/en/index/us/', '_blank')\">Go to Sound Tutorial 1</button>\n                </div>\n                <div class=\"input-container\">\n                    <div class=\"name\">Sound Tutorial 2</div>\n                    <button class=\"sound-button\" onclick=\"window.open('https://catbox.moe/', '_blank')\">Go to Sound Tutorial 2</button>\n                </div>\n                <div class=\"input-container\">\n                    <div class=\"name\">Sound Tutorial 3:</div>\n                    <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\" placeholder=\"Enter sound URL\">\n                </div>\n                <div class=\"input-container\">\n                    <div class=\"name\">Sound Tutorial 4:</div>\n                    <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\" placeholder=\"Enter secondary sound URL\">\n                </div>\n                <div class=\"input-container\">\n                    <div class=\"name\">Headshot Sound:</div>\n                    <button id=\"toggle-sound\" class=\"sound-button\">Disable Sound</button>\n                </div>\n            </div>\n            \n        </div>\n    <!-- Nueva sección: Equipos -->\n    <div category=\"teams\" class=\"\">\n      <div class=\"input-container\">\n        <div class=\"name2\">TEAM CODE:</div>\n        <input type=\"text\" id=\"teamCodeInput\" class=\"sounds-input\" placeholder=\"ENTER YOUR CODE\" />\n      </div>\n      <div class=\"input-container\">\n        <div class=\"name2\" style=\"color: yellow;\">\n          PUT YOUR NAME FOR TEAM LIST:\n        </div>\n        <input \n          type=\"text\" \n          id=\"teamNickname\" \n          class=\"sounds-input\" \n          placeholder=\"ENTER YOUR NAME FOR FRIENDS\" \n        />\n      </div>\n    </div>\n        <div category=\"skins\">\n            <div class=\"input-container\">\n                <div class=\"name2\">Skin Original:</div>\n                <input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" class=\"sounds-input\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">\n            </div>\n    <!-- JSON dosyası yükleme alanı -->\n    <div class=\"input-container\">\n        <div class=\"name2\">Upload Skins JSON File:</div>\n        <input type=\"file\" id=\"fileSkin\" accept=\"application/json\" onchange=\"handleFileUpload(event)\">\n    </div>\n        <!-- JSON dosyası yükleme alanı -->\n    <div class=\"input-container\">\n        <div class=\"name2\">Upload Wear JSON File:</div>\n        <input type=\"file\" id=\"fileSkin\" accept=\"application/json\" onchange=\"handleFileUpload(event)\">\n    </div>\n        <!-- JSON dosyası yükleme alanı -->\n    <div class=\"input-container\">\n        <div class=\"name2\">Upload Ear JSON File:</div>\n        <input type=\"file\" id=\"fileSkin\" accept=\"application/json\" onchange=\"handleFileUpload(event)\">\n    </div>\n        <div class=\"input-container\">\n        <div class=\"name2\">Upload Head JSON File:</div>\n        <input type=\"file\" id=\"fileSkin\" accept=\"application/json\" onchange=\"handleFileUpload(event)\">\n    </div>\n        </div>\n              <div category=\"streamers\">\n                  <div class=\"input-container\">\n                      <div id=\"streamers-section\" style=\"display: none; padding: 10px;\">\n                          <hlive>Live Broadcasters Wormate.io</hlive>\n                          <div id=\"streamers-grid\">\n                              <div class=\"streamer inlive\">\n                                  <img src=\"https://i.imgur.com/kTehWGt.jpeg\" class=\"streamer-avatar\">\n                                  <div class=\"streamer-info\">\n                                      <span class=\"streamer-name\">Tiktok Name: yildolive</span>\n                                      <span class=\"streamer-name\">Founder Extension</span>\n                                      <span class=\"streamer-platform\">Tiktok</span>\n                                    </div>\n                                </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n  ");
      $(".tab.material-button").on("click", function () {
        var v892 = $(this).attr("category");
        if (!$(this).hasClass("active")) {
          $(".tab.material-button, .options-list > div").removeClass("active");
          $(this).addClass("active");
          $("div[category='" + v892 + "']").addClass("active");
        }
      });
      document.getElementById("resetScript").addEventListener("click", async function () {
        localStorage.clear();
        sessionStorage.clear();
        if (window.indexedDB) {
          let v893 = await indexedDB.databases();
          v893.forEach(p720 => indexedDB.deleteDatabase(p720.name));
        }
        if (window.openDatabase) {
          console.warn("Web SQL no se puede eliminar automÃ¡ticamente desde JavaScript.");
        }
        document.cookie.split(";").forEach(function (p721) {
          document.cookie = p721.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        if ("caches" in window) {
          caches.keys().then(function (p722) {
            for (let v894 of p722) {
              caches.delete(v894);
            }
          });
        }
        if ("serviceWorker" in navigator) {
          let v895 = await navigator.serviceWorker.getRegistrations();
          for (let v896 of v895) {
            await v896.unregister();
          }
        }
        localStorage.removeItem("scriptSeleccionado");
        location.reload();
      });
      document.getElementById("resetScript2").addEventListener("click", function () {
        window.location.href = "https://wormatefriendsturkey.com/skinlab/css/index.html";
      });
      document.getElementById("resetScript3").addEventListener("click", function () {
        window.location.href = "https://wormatefriendsturkey.com";
      });
      v111 = true;
      $("#toggle-sound").click(function () {
        v111 = !v111;
        $(this).text(v111 ? "Disable Sound" : "Enable Sound");
      });
      $("#idcopiar").click(function () {
        navigator.clipboard.writeText(lxpduserId);
        alert("ID copiado: " + lxpduserId);
      });
      window.changeBackground = function (p723) {
        let v897 = localStorage.getItem("selectedBackground");
        v104 = ((v104 = v897 !== null ? parseInt(v897) : 0) + p723 + vA4.length) % vA4.length;
        f75(v104);
      };
      window.changeFont = function (p724) {
        v105 = (v105 + p724 + vA5.length) % vA5.length;
        f76();
      };
      f76();
      let vA27 = [{
        id: "ping",
        label: "Show Fps",
        category: "game",
        tooltip: ""
      }, {
        id: "low",
        label: "Low Fps",
        category: "game",
        tooltip: ""
      }, {
        id: "fps",
        label: "Show Ping",
        category: "game",
        tooltip: ""
      }, {
        id: "laserHS",
        label: "LASER HS",
        category: "game",
        tooltip: "Premium Feature"
      }, {
        id: "chngBotSkins",
        label: "Change bot & People to Basic Skins",
        category: "game",
        tooltip: ""
      }, {
        id: "chngPersonsSkins",
        label: "Change Skins to WTR",
        category: "game",
        tooltip: ""
      }, {
        id: "top8",
        label: "Top Hs Show",
        category: "game",
        tooltip: "If you enable this option, you will see the list of the top 8 players."
      }, {
        id: "killFeed",
        label: "Hs Records",
        category: "game",
        tooltip: "If you enable this option, you will see the list of kills in real time."
      }, {
        id: "minimapTeamcod",
        label: "Team List Show",
        category: "teams",
        tooltip: ""
      }];
      let vA28 = [{
        name: "ZOOM SPEED",
        id: "zoomSpeed",
        min: 0.1,
        max: 15,
        step: 0.1,
        category: "game",
        tooltip: ""
      }, {
        name: "BOOSTER SIZE",
        id: "PotenciadorSize",
        min: 1,
        max: 6,
        step: 1,
        category: "game",
        tooltip: "Premium Feature"
      }, {
        name: "AURA THE BOOSTER",
        id: "PotenciadorAura",
        min: 1.2,
        max: 3.2,
        step: 0.2,
        category: "game",
        tooltip: "Premium Feature"
      }, {
        name: "FOOD SHADOW",
        id: "ComidaShadow",
        min: 0.5,
        max: 3,
        step: 0.5,
        category: "game",
        tooltip: "Premium Feature"
      }, {
        name: "SIZE FOOD",
        id: "ComidaSize",
        min: 0.5,
        max: 3,
        step: 0.5,
        category: "game",
        tooltip: "Premium Feature"
      }, {
        name: "MOUSE DELAY",
        id: "mouseDelay",
        min: 10,
        max: 20,
        step: 1,
        category: "game",
        tooltip: "Premium Feature"
      }, {
        name: "SMOOTH CAMERA",
        id: "smoothCamera",
        min: 0.1,
        max: 0.9,
        step: 0.1,
        category: "game",
        tooltip: "Premium Feature"
      }];
      let vO34 = {
        game: document.querySelector(".options-list > div[category=\"game\"]"),
        teams: document.querySelector(".options-list > div[category=\"teams\"]"),
        theme: document.querySelector(".options-list > div[category=\"theme\"]"),
        controls: document.querySelector(".options-list > div[category=\"controls\"]")
      };
      if (v187) {
        vA27.push({
          id: "Incognito",
          label: "Hidden",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "laserHS",
          label: "Laser Headshot",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "backgroundSolid",
          label: "Background Solid",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "sectores",
          label: "Sectors Background",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "speed_zigzag",
          label: "Visible Zigzag and Speed",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "visiblePowersAll",
          label: "Visible All Power Ups",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "hideYouNameInMinimap",
          label: "Show your name for team list",
          category: "teams",
          tooltip: "Premium Feature"
        });
        vO34.teams.insertAdjacentHTML("beforeend", "\n                            <div class=\"input-container\">\n                                <div class=\"name2\" style=\"color: yellow;\">Put your name for team list:</div>\n                                <input type=\"text\" id=\"teamNickname\" class=\"sounds-input\" placeholder=\"Enter your name for friends\" />\n                            </div>\n                        ");
        vA28.push({
          name: "Booster Size",
          id: "PotenciadorSize",
          min: 1,
          max: 6,
          step: 1,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "Aura The Booster",
          id: "PotenciadorAura",
          min: 1.2,
          max: 3.2,
          step: 0.2,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "Food Shadow",
          id: "ComidaShadow",
          min: 0.5,
          max: 3,
          step: 0.5,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "Size Food",
          id: "ComidaSize",
          min: 0.5,
          max: 3,
          step: 0.5,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "Mouse Delay",
          id: "mouseDelay",
          min: 10,
          max: 20,
          step: 1,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "Smooth Camera",
          id: "smoothCamera",
          min: 0.1,
          max: 0.9,
          step: 0.1,
          category: "game",
          tooltip: "Premium Feature"
        });
      }
      vA28.forEach(p725 => {
        let vParseFloat2 = parseFloat(vO6[p725.id]);
        let v898 = document.createElement("div");
        v898.className = "option range";
        v898.innerHTML = "\n        <div class=\"name\" style=\"" + (p725.tooltip.includes("Premium") ? "color: yellow;" : "") + "\">" + p725.name + "</div>\n        <div class=\"value\">" + vParseFloat2 + "</div>\n        <div class=\"box\">\n            <div class=\"progress-bar\">\n                <div class=\"fill\" style=\"width: " + (vParseFloat2 - p725.min) / (p725.max - p725.min) * 100 + "%;\"></div>\n            </div>\n            <input type=\"range\" id=\"" + p725.id + "\" min=\"" + p725.min + "\" max=\"" + p725.max + "\" step=\"" + p725.step + "\" value=\"" + vParseFloat2 + "\">\n        </div>\n    ";
        let v899 = v898.querySelector("input");
        let v900 = v898.querySelector(".value");
        let v901 = v898.querySelector(".fill");
        v899.addEventListener("input", () => {
          v900.textContent = v899.value;
          v901.style.width = (v899.value - p725.min) / (p725.max - p725.min) * 100 + "%";
          vO6[p725.id] = v899.value;
          localStorage.setItem(p725.id, v899.value);
          if (p725.id === "mouseDelay") {
            anApp.o.updatePacketInterval(parseInt(v899.value));
          }
        });
        vO34[p725.category].appendChild(v898);
      });
      vA27.forEach(p726 => {
        let v902 = localStorage.getItem(p726.id) === "true";
        let v903 = "\n                            <div class=\"option toggle " + (v902 ? "on" : "") + "\" data-option=\"" + p726.id + "\">\n                                <div class=\"name\" style=\"" + (p726.tooltip.includes("Premium") ? "color: yellow;" : "") + "\">" + p726.label + "</div>\n                                <div class=\"box\"><div class=\"ball\"></div></div>\n                                " + (p726.tooltip ? "<span class=\"tooltip\">" + p726.tooltip + "</span>" : "") + "\n                            </div>\n                        ";
        vO34[p726.category].insertAdjacentHTML("beforeend", v903);
      });
      document.querySelectorAll(".box").forEach(p727 => {
        p727.addEventListener("click", function (p728) {
          p728.stopPropagation();
          let v904 = this.parentElement;
          let v905 = v904.getAttribute("data-option");
          let v906 = !v904.classList.contains("on");
          v904.classList.toggle("on", v906);
          vO6[v905] = v906;
          localStorage.setItem(v905, v906);
          let v907 = v904.querySelector(".tooltip");
          if (v907) {
            v907.style.display = v906 ? "block" : "none";
          }
          console.log(v905 + " changed to", v906);
        });
      });
      var v$26 = $("div[category='theme']");
      f73(v$26[1], "teamColorGroup", "YOUR COLOR IN MAP", "teamColor", "FFFFFF");
      f73(v$26[1], "laserColorGroup", "LASER", "laserColor", "FFFFFF");
      f73(v$26[1], "hsTextColorGroup", "HS TEXT", "hsTextColor", "ffa500");
      f73(v$26[1], "minimapBorderColorGroup", "MINIMAP BORDER", "minimapBorderColor", "ffa500");
      f73(v$26[1], "killTextColorGroup", "KILL TEXT", "killTextColor", "ffa500");
      $("#teamColor").on("input", function () {
        let v908 = $(this).val();
        $("#preview_teamColor").css("background-color", v908);
        localStorage.setItem("teamColor", vO7.teamColor);
        vO7.teamColor = "0x" + v908.substring(1);
        console.log(vO7.teamColor);
      });
      let v909 = localStorage.getItem("teamColor");
      if (v909) {
        vO7.teamColor = v909;
        $("#preview_teamColor").css("background-color", "#" + v909.substring(2));
        $("#teamColor").val("#" + v909.substring(2));
      }
      let v910 = localStorage.getItem("top8");
      let v911 = localStorage.getItem("killFeed");
      if (v910 === null) {
        v910 = true;
        localStorage.setItem("top8", "true");
      } else {
        v910 = v910 === "true";
      }
      if (v911 === null) {
        v911 = true;
        localStorage.setItem("killFeed", "true");
      } else {
        v911 = v911 === "true";
      }
      $("#toggleTop8").prop("checked", v910);
      $("#toggleKillFeed").prop("checked", v911);
      $("#top8List").toggle(v910);
      $("#killFeed").toggle(v911);
      vO6.top8 = v910;
      vO6.killFeed = v911;
      $("#toggleTop8").on("change", function () {
        vO6.top8 = this.checked;
        $("#top8List").toggle(this.checked);
        localStorage.setItem("top8", this.checked);
      });
      $("#toggleKillFeed").on("change", function () {
        vO6.killFeed = this.checked;
        $("#killFeed").toggle(this.checked);
        localStorage.setItem("killFeed", this.checked);
      });
      $("#toggleTop8").hover(function () {
        $("#tooltipTop8").fadeIn();
      }, function () {
        $("#tooltipTop8").fadeOut();
      });
      $("#toggleKillFeed").hover(function () {
        $("#tooltipKillFeed").fadeIn();
      }, function () {
        $("#tooltipKillFeed").fadeOut();
      });
      $("#teamCodeInput").on("input", function () {
        vO7.teamCode = $(this).val();
        localStorage.setItem("teamCode", "");
        console.log("Team Code updated:", "");
      });
      let v912 = localStorage.getItem("teamCode");
      if (v912) {
        vO7.teamCode = v912;
        $("#teamCodeInput").val(v912);
      }
      v32 = 0;
      v23 = 10;
      var v$27 = $("#arkaplan");
      var v$28 = $("#wtrtop");
      var v913 = localStorage.getItem("wtr-background");
      if (v913) {
        var vParseInt2 = parseInt(v913);
        v$27.val(vParseInt2);
        v32 = vParseInt2;
      }
      let v914 = localStorage.getItem("wtr-toplist");
      if (v914) {
        let vParseInt3 = parseInt(v914);
        v23 = vParseInt3;
      }
      let v915 = true && true && !isNaN(35);
      if (v915) {
        $("#inputReplaceSkin").val(35);
      } else {
        let v916 = $("#inputReplaceSkin").val();
        v915 = v916 !== "" && v916 != null && !isNaN(v916);
        vO6.idReplaceSkin = v915 ? v916 : 35;
      }
      v$28.val(v23);
      v$27.change(function (p729) {
        var vF48 = f48(v32 = this.value);
        if (vF48) {
          anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(vF48));
        }
        localStorage.setItem("wtr-background", this.value.toString());
      });
      v$28.change(function (p730) {
        v23 = this.value;
        localStorage.setItem("wtr-toplist", this.value.toString());
      });
      $("#idkopyala").click(function () {
        navigator.clipboard.writeText(lxpduserId);
      });
      vF836.prototype.a = function () {
        vF836.parent.prototype.a.call(this);
        if (!vF836.Ek) {
          vF836.Ek = true;
          var v917 = window.anApp = vUndefined2;
          v917.u.Pi(function () {
            if (v917.u.P()) {
              v$25.html(v917.u.zi());
            } else {
              v$25.html("0");
            }
          });
        }
      };
      vF836.Fk = $("#coins-view");
      vF836.Gk = $("#leaders-view");
      vF836.Hk = $("#profile-view");
      vF836.Ik = $("#settings-view");
      vF836.Jk = $("#login-view");
      vF836.Kk = $("#skins-view");
      vF836.Lk = $("#store-view");
      vF836.wtrset = $("#wormtr-settings-view");
      vF836.Mk = $("#wear-view");
      vF836.Nk = $("#withdraw-consent-view");
      vF836.Ok = $("#delete-account-view");
      vF836.Pk = $("#please-wait-view");
      vF836.prototype.ii = function () {
        vF41.fk.stop();
        vF41.fk.fadeOut(200);
        vF41.gk.stop();
        vF41.gk.fadeOut(200);
        vF41.hk.stop();
        vF41.hk.fadeOut(200);
        vF41.ik.stop();
        vF41.ik.fadeIn(200);
        vF41.jk.stop();
        vF41.jk.fadeOut(200);
        vF41.kk.stop();
        vF41.kk.fadeOut(200);
        vF41.nk.stop();
        vF41.nk.fadeIn(200);
        vF41.ok.stop();
        vF41.ok.fadeIn(200);
        v$23.html(this.ad);
        v$24.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF836.prototype.Rk = function () {};
      vF836.prototype.Sk = function () {
        vF43.Pk.stop();
        vF43.Pk.fadeIn(300);
      };
      vF836.prototype.Qk = function () {
        vF43.Pk.stop();
        vF43.Pk.fadeOut(300);
      };
      return vF836;
    }();
    v433 = $("#store-buy-coins_125000");
    v434 = $("#store-buy-coins_50000");
    v435 = $("#store-buy-coins_16000");
    v436 = $("#store-buy-coins_7000");
    v437 = $("#store-buy-coins_3250");
    v438 = $("#store-buy-coins_1250");
    (v439 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], false);
      var v918 = window.anApp = vUndefined2;
      var vThis18 = this;
      v433.click(function () {
        v918.r.Cd();
        vThis18.Tk("coins_125000");
      });
      v434.click(function () {
        v918.r.Cd();
        vThis18.Tk("coins_50000");
      });
      v435.click(function () {
        v918.r.Cd();
        vThis18.Tk("coins_16000");
      });
      v436.click(function () {
        v918.r.Cd();
        vThis18.Tk("coins_7000");
      });
      v437.click(function () {
        v918.r.Cd();
        vThis18.Tk("coins_3250");
      });
      v438.click(function () {
        v918.r.Cd();
        vThis18.Tk("coins_1250");
      });
    })).prototype.a = function () {
      v439.parent.prototype.a.call(this);
    };
    v439.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeIn(200);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v439.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
    };
    v439.prototype.Tk = function (p731) {};
    v440 = $("#highscore-table");
    v441 = $("#leaders-button-level");
    v442 = $("#leaders-button-highscore");
    v443 = $("#leaders-button-kills");
    (v444 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
      var v919 = window.anApp = vUndefined2;
      var vThis19 = this;
      this.Uk = {};
      this.Vk = {
        Wk: {
          Xk: v441,
          Yk: "byLevel"
        },
        Zk: {
          Xk: v442,
          Yk: "byHighScore"
        },
        $k: {
          Xk: v443,
          Yk: "byKillsAndHeadShots"
        }
      };
      v441.click(function () {
        v919.r.Cd();
        vThis19._k(vThis19.Vk.Wk);
      });
      v442.click(function () {
        v919.r.Cd();
        vThis19._k(vThis19.Vk.Zk);
      });
      v443.click(function () {
        v919.r.Cd();
        vThis19._k(vThis19.Vk.$k);
      });
    })).prototype.a = function () {
      v444.parent.prototype.a.call(this);
    };
    v444.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeIn(200);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v444.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
      var vThis20 = this;
      this.Sk();
      $.get(vAtob + "/pub/leaders", function (p732) {
        vThis20.Uk = p732;
        vThis20._k(vThis20.al ?? vThis20.Vk.Wk);
        vThis20.Qk();
      }).done(function () {
        vThis20.Qk();
      });
    };
    v444.prototype._k = function (p733) {
      this.al = p733;
      for (var v920 in this.Vk) {
        if (this.Vk.hasOwnProperty(v920)) {
          this.Vk[v920].Xk.removeClass("pressed");
        }
      }
      this.al.Xk.addClass("pressed");
      var v921 = this.Uk[this.al.Yk];
      var vLS3 = "";
      for (var vLN0108 = 0; vLN0108 < v921.length; vLN0108++) {
        var v922 = v921[vLN0108];
        vLS3 += "<div class=\"table-row\"><span>" + (vLN0108 + 1) + "</span><span><img src=\"" + v922.avatarUrl + "\"/></span><span>" + v922.username + "</span><span>" + v922.level + "</span><span>" + v922.highScore + "</span><span>" + v922.headShots + " / " + v922.kills + "</span></div>";
      }
      v440.empty();
      v440.append(vLS3);
    };
    v445 = $("#popup-login-gg");
    $("#background-canvas").replaceWith("\n  <div style=\"position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0;\">\n    <canvas id=\"background-canvas\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\"></canvas>\n  </div>\n  <script>\n    (function() {\n      const canvas = document.getElementById('background-canvas');\n      const ctx = canvas.getContext('2d');\n      let width, height;\n\n      const backgroundImage = new Image();\n      backgroundImage.src = 'https://wormate.io/images/bg-event-pattern-valday2024.png';\n\n      // Orijinal renkli opacity’li renk katmanları\n      const colorLayers = [\n        {colorStart: 'rgba(255, 100, 180, 0.45)', colorEnd: 'rgba(255, 100, 180, 0)', xRatio: -0.1, yRatio: 0.1, radius: 650, speedX: 0.12, speedY: 0.08},\n        {colorStart: 'rgba(150, 100, 255, 0.40)', colorEnd: 'rgba(150, 100, 255, 0)', xRatio: 1.1, yRatio: 0.3, radius: 700, speedX: -0.10, speedY: 0.05},\n        {colorStart: 'rgba(100, 200, 255, 0.45)', colorEnd: 'rgba(100, 200, 255, 0)', xRatio: 0.5, yRatio: 1.1, radius: 650, speedX: 0.06, speedY: -0.07},\n        {colorStart: 'rgba(255, 255, 255, 0.30)', colorEnd: 'rgba(255, 255, 255, 0)', xRatio: 0.9, yRatio: -0.1, radius: 600, speedX: -0.05, speedY: 0.10}\n      ];\n\n      let spots = [];\n\n      function resize() {\n        width = window.innerWidth;\n        height = window.innerHeight;\n        const dpr = window.devicePixelRatio || 1;\n        canvas.width = width * dpr;\n        canvas.height = height * dpr;\n        canvas.style.width = width + \"px\";\n        canvas.style.height = height + \"px\";\n        ctx.setTransform(1, 0, 0, 1, 0, 0);\n        ctx.scale(dpr, dpr);\n\n        spots = colorLayers.map(layer => ({\n          x: width * layer.xRatio,\n          y: height * layer.yRatio,\n          radius: layer.radius,\n          colorStart: layer.colorStart,\n          colorEnd: layer.colorEnd,\n          speedX: layer.speedX,\n          speedY: layer.speedY\n        }));\n      }\n      resize();\n      window.addEventListener('resize', resize);\n\n      // Daha koyu siyah kenar efekti (vignette)\n      function drawBlackVignette() {\n        let vignette = ctx.createRadialGradient(\n          width / 2, height / 2,\n          Math.min(width, height) / 2 * 0.4,\n          width / 2, height / 2,\n          Math.min(width, height) / 2\n        );\n        vignette.addColorStop(0, 'rgba(0,0,0,0)');\n        vignette.addColorStop(1, 'rgba(0,0,0,0.85)');\n        ctx.fillStyle = vignette;\n        ctx.fillRect(0, 0, width, height);\n      }\n\n      function drawBackground() {\n        if(backgroundImage.complete) {\n          ctx.globalAlpha = 0.9;\n          ctx.drawImage(backgroundImage, 0, 0, width, height);\n          ctx.globalAlpha = 1;\n          drawColorSpots();\n          drawBlackVignette();\n        }\n      }\n\n      function drawColorSpots() {\n        spots.forEach(spot => {\n          spot.x += spot.speedX;\n          spot.y += spot.speedY;\n\n          if (spot.x - spot.radius > width) spot.x = -spot.radius;\n          else if (spot.x + spot.radius < 0) spot.x = width + spot.radius;\n\n          if (spot.y - spot.radius > height) spot.y = -spot.radius;\n          else if (spot.y + spot.radius < 0) spot.y = height + spot.radius;\n\n          const grad = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.radius);\n          grad.addColorStop(0, spot.colorStart);\n          grad.addColorStop(1, spot.colorEnd);\n\n          ctx.fillStyle = grad;\n          ctx.beginPath();\n          ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI*2);\n          ctx.fill();\n        });\n      }\n\n      // Konfetti animasyonunu kaldırdım (isteğine göre ekleyebilirim)\n\n      function animate() {\n        ctx.clearRect(0, 0, width, height);\n        drawBackground();\n        requestAnimationFrame(animate);\n      }\n\n      backgroundImage.onload = () => {\n        animate();\n      };\n    })();\n  </script>\n");
    v446 = $("#popup-login-fb");
    (v447 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.login.tab"], false);
      var v923 = window.anApp = vUndefined2;
      var vThis21 = this;
      v445.click(function () {
        v923.r.Cd();
        vThis21.Sk();
        v923.u.Qi(function () {
          vThis21.Qk();
        });
        setTimeout(function () {
          vThis21.Qk();
        }, 10000);
        v923.u.Zi();
      });
      v446.click(function () {
        v923.r.Cd();
        vThis21.Sk();
        v923.u.Qi(function () {
          vThis21.Qk();
        });
        setTimeout(function () {
          vThis21.Qk();
        }, 10000);
        v923.u.Vi();
      });
    })).prototype.a = function () {
      v447.parent.prototype.a.call(this);
    };
    v447.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeIn(200);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v447.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
    };
    v448 = $("#profile-avatar");
    v449 = $("#profile-username");
    v450 = $("#profile-experience-bar");
    v451 = $("#profile-experience-val");
    v452 = $("#profile-level");
    v453 = $("#profile-stat-highScore");
    v454 = $("#profile-stat-bestSurvivalTime");
    v455 = $("#profile-stat-kills");
    v456 = $("#profile-stat-headshots");
    v457 = $("#profile-stat-gamesPlayed");
    v458 = $("#profile-stat-totalTimeSpent");
    v459 = $("#profile-stat-registrationDate");
    (v460 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.profile.tab"], true);
    })).prototype.a = function () {
      v460.parent.prototype.a.call(this);
    };
    v460.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeIn(200);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v460.prototype.ji = function () {
      var v924 = window.anApp = vUndefined2;
      v924.r.Dd();
      var v925 = v924.u.Oi();
      var v926 = moment([v925.year, v925.month - 1, v925.day]).format("LL");
      v449.html(v924.u.wi());
      v448.attr("src", v924.u.xi());
      v450.width(v924.u.Bi() * 100 / v924.u.Ci() + "%");
      v451.html(v924.u.Bi() + " / " + v924.u.Ci());
      v452.html(v924.u.Ai());
      v453.html(v924.u.Ii());
      v454.html(f81(v924.u.Ji()));
      v455.html(v924.u.Ki());
      v456.html(v924.u.Li());
      v457.html(v924.u.Mi());
      v458.html(f81(v924.u.Ni()));
      v459.html(v926);
    };
    v461 = $("#settings-music-enabled-switch");
    v462 = $("#settings-sfx-enabled-switch");
    v463 = $("#settings-show-names-switch");
    v464 = $("#popup-logout");
    v465 = $("#popup-logout-container");
    v466 = $("#popup-delete-account");
    v467 = $("#popup-delete-account-container");
    v468 = $("#popup-withdraw-consent");
    (v469 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.settings.tab"], false);
      var vThis22 = this;
      var v927 = window.anApp = vUndefined2;
      v461.click(function () {
        var v928 = !!v461.prop("checked");
        f80(vF17.Me, v928, 30);
        v927.r.td(v928);
        v927.r.Cd();
      });
      v462.click(function () {
        var v929 = !!v462.prop("checked");
        f80(vF17.Ne, v929, 30);
        v927.r.rd(v929);
        v927.r.Cd();
      });
      v463.click(function () {
        v927.r.Cd();
      });
      v464.click(function () {
        v927.r.Cd();
        vThis22.Sk();
        setTimeout(function () {
          vThis22.Qk();
        }, 2000);
        v927.u.Wi();
      });
      v466.click(function () {
        if (v927.u.P()) {
          v927.r.Cd();
          v927.s.I(v927.s.Vh);
        } else {
          v927.r.Hd();
        }
      });
      v468.click(function () {
        if (v927.Y()) {
          v927.r.Cd();
          v927.s.I(v927.s.Uh);
        } else {
          v927.r.Hd();
        }
      });
    })).prototype.a = function () {
      v469.parent.prototype.a.call(this);
      var v930 = window.anApp = vUndefined2;
      var vUndefined15 = undefined;
      vUndefined15 = f79(vF17.Me) !== "false";
      v461.prop("checked", vUndefined15);
      v930.r.td(vUndefined15);
      var vUndefined16 = undefined;
      vUndefined16 = f79(vF17.Ne) !== "false";
      v462.prop("checked", vUndefined16);
      v930.r.rd(vUndefined16);
      var vUndefined17 = undefined;
      vUndefined17 = f79(vF17.ya) !== "false";
      console.log("Load sPN: " + vUndefined17);
      v463.prop("checked", vUndefined17);
      v930.u.V(function () {
        v465.toggle(v930.u.P());
        v467.toggle(v930.u.P());
      });
    };
    v469.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeIn(200);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v469.prototype.ji = function () {
      var v931 = window.anApp = vUndefined2;
      v931.r.Dd();
      if (v931.Y()) {
        v468.show();
      } else {
        v468.hide();
      }
    };
    v469.prototype.wa = function () {
      return v463.prop("checked");
    };
    v470 = $("#store-view-canv");
    v471 = $("#skin-description-text");
    v472 = $("#skin-group-description-text");
    v473 = $("#store-locked-bar");
    v474 = $("#store-locked-bar-text");
    v475 = $("#store-buy-button");
    v476 = $("#store-item-price");
    v477 = $("#store-groups");
    v478 = $("#store-view-prev");
    v479 = $("#store-view-next");
    (v480 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.skins.tab"], true);
      var vThis23 = this;
      var v932 = window.anApp = vUndefined2;
      this.bl = null;
      this.cl = [];
      this.dl = {};
      this.el = new vF40(v470);
      v475.click(function () {
        v932.r.Cd();
        vThis23.fl();
      });
      v478.click(function () {
        v932.r.Cd();
        vThis23.bl.gl();
      });
      v479.click(function () {
        v932.r.Cd();
        vThis23.bl.hl();
      });
    })).prototype.a = function () {
      v480.parent.prototype.a.call(this);
      var vThis24 = this;
      var v933 = window.anApp = vUndefined2;
      v933.p.ca(function () {
        var v934 = v933.p.Ac();
        if (v934 != null) {
          vThis24.cl = [];
          for (var vLN0109 = 0; vLN0109 < v934.skinGroupArrayDict.length; vLN0109++) {
            vThis24.cl.push(new v481(vThis24, v934.skinGroupArrayDict[vLN0109]));
          }
          vThis24.dl = {};
          for (var vLN0110 = 0; vLN0110 < v934.skinArrayDict.length; vLN0110++) {
            var v935 = v934.skinArrayDict[vLN0110];
            vThis24.dl[v935.id] = v935;
          }
        }
      });
      this.il(false);
      v933.t.xh(function () {
        vThis24.il(false);
      });
    };
    v480.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeIn(200);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v480.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
      this.jl();
      this.el.Le(true);
    };
    v480.prototype.ei = function () {
      this.el.Le(false);
    };
    v480.prototype.Ra = function () {
      this.el.Ra();
    };
    v480.prototype.Pa = function (p734, p735) {
      this.el.Pa();
    };
    v480.prototype.jl = function () {
      var vThis25 = this;
      var vThis26 = this;
      var v936 = window.anApp = vUndefined2;
      v477.empty();
      for (var vLN0112 = 0; vLN0112 < this.cl.length; vLN0112++) {
        (function (p736) {
          var v937 = vThis25.cl[p736];
          var v938 = document.createElement("li");
          v477.append(v938);
          var v$29 = $(v938);
          v$29.html(v937.kl());
          v$29.click(function () {
            v936.r.Cd();
            vThis26.ll(v937);
          });
          v937.ml = v$29;
        })(vLN0112);
      }
      if (this.cl.length > 0) {
        var v939 = v936.t.ha(vF29.ia);
        for (var vLN0112 = 0; vLN0112 < this.cl.length; vLN0112++) {
          var v940 = this.cl[vLN0112];
          var v941 = v940.nl.list;
          for (var vLN0113 = 0; vLN0113 < v941.length; vLN0113++) {
            if (v941[vLN0113] == v939) {
              v940.ol = vLN0113;
              this.ll(v940);
              return;
            }
          }
        }
        this.ll(this.cl[0]);
      }
    };
    v480.prototype.ll = function (p737) {
      if (this.bl != p737) {
        var v942 = window.anApp = vUndefined2;
        this.bl = p737;
        v477.children().removeClass("pressed");
        if (this.bl.ml) {
          this.bl.ml.addClass("pressed");
        }
        v472.html("");
        if (p737.nl != null) {
          var v943 = v942.p.Ac().textDict[p737.nl.description];
          if (v943 != null) {
            v472.html((v943[v396] ? v943[v396] : v943.en ? v943.en : v943.x).includes("href") ? (v943[v396] ? v943[v396] : v943.en ? v943.en : v943.x).replaceAll("href", "target=\"_black\" href") : v943[v396] ? v943[v396] : v943.en ? v943.en : v943.x);
          }
        }
        this.il(true);
      }
    };
    v480.prototype.pl = function () {
      if (this.bl == null) {
        return vF24.Yg();
      } else {
        return this.bl.ql();
      }
    };
    v480.prototype.fl = function () {
      var vThis27 = this;
      this.pl().ah(function (p738) {
        vThis27.rl(p738);
      });
    };
    v480.prototype.rl = function (p739) {
      var vThis28 = this;
      var v944 = window.anApp = vUndefined2;
      var v945 = this.dl[p739].price;
      if (!(v944.u.zi() < v945)) {
        this.Sk();
        var v946 = v944.t.ha(vF29.ia);
        var v947 = v944.t.ha(vF29.ja);
        var v948 = v944.t.ha(vF29.ka);
        var v949 = v944.t.ha(vF29.la);
        var v950 = v944.t.ha(vF29.ma);
        v944.u.Ui(p739, vF29.ia, function () {
          v944.t.Bh(v946, vF29.ia);
          v944.t.Bh(v947, vF29.ja);
          v944.t.Bh(v948, vF29.ka);
          v944.t.Bh(v949, vF29.la);
          v944.t.Bh(v950, vF29.ma);
          if (v944.u.Ch(p739, vF29.ia)) {
            v944.t.Bh(p739, vF29.ia);
          }
          vThis28.Qk();
        });
      }
    };
    v480.prototype.il = function (p740) {
      var v951 = window.anApp = vUndefined2;
      this.el.bk(v951.t.ha(vF29.ja), false, false);
      this.el.ck(v951.t.ha(vF29.ka), false, false);
      this.el.dk(v951.t.ha(vF29.la), false, false);
      this.el.ek(v951.t.ha(vF29.ma), false, false);
      var v952 = this.pl();
      if (v952._g()) {
        var v953 = v952.$g();
        var v954 = this.dl[v953];
        var v955 = false;
        if (v951.t.Ja(v953, vF29.ia)) {
          v473.hide();
          v475.hide();
        } else if (v954 == null || v954.nonbuyable == 1) {
          v955 = true;
          v473.show();
          v475.hide();
          v474.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
          if (v954 != null && v954.nonbuyable && v954.nonbuyableCause != null) {
            var v956 = v951.p.Ac().textDict[v954.nonbuyableCause];
            if (v956 != null) {
              v474.text(v956[v396] ? v956[v396] : v956.en ? v956.en : v956.x);
            }
          }
        } else {
          v473.hide();
          v475.show();
          v476.html(v954.price);
        }
        v471.html("ID: " + v953 + " TYPE: " + vF29.ia);
        if (v954 != null && v954.description != null) {
          var v957 = v951.p.Ac().textDict[v954.description];
          if (v957 != null) {
            v471.html((v957[v396] ? v957[v396] : v957.en ? v957.en : v957.x).includes("href") ? (v957[v396] ? v957[v396] : v957.en ? v957.en : v957.x).replaceAll("href", "target=\"_black\" href") : v957[v396] ? v957[v396] : v957.en ? v957.en : v957.x);
          }
        }
        this.el.ak(v953, true, v955);
        if (p740) {
          v951.t.Bh(v953, vF29.ia);
        }
      }
    };
    v481 = function () {
      function f155(p741, p742) {
        this.sl = p741;
        this.ol = 0;
        this.nl = p742;
      }
      f155.prototype.gl = function () {
        if (--this.ol < 0) {
          this.ol = this.nl.list.length - 1;
        }
        this.sl.il(true);
      };
      f155.prototype.hl = function () {
        if (++this.ol >= this.nl.list.length) {
          this.ol = 0;
        }
        this.sl.il(true);
      };
      f155.prototype.kl = function () {
        let v958 = this.nl.name[v396] ? this.nl.name[v396] : this.nl.name.en ? this.nl.name.en : this.nl.name.x;
        console.log(this.nl);
        if (this.nl.img) {
          v958 = "<img src=\"" + this.nl.img + "\" height=\"43\" width=\"180\" />";
        }
        return v958;
      };
      f155.prototype.ql = function () {
        if (this.ol >= this.nl.list.length) {
          return vF24.Yg();
        } else {
          return vF24.Zg(this.nl.list[this.ol]);
        }
      };
      return f155;
    }();
    v482 = $("#store-go-coins-button");
    v483 = $("#store-go-skins-button");
    v484 = $("#store-go-wear-button");
    (v485 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], true);
      var v959 = window.anApp = vUndefined2;
      v482.click(function () {
        v959.r.Cd();
        v959.s.I(v959.s.Wh);
      });
      v483.click(function () {
        v959.r.Cd();
        v959.s.I(v959.s.$h);
      });
      v484.click(function () {
        v959.r.Cd();
        v959.s.I(v959.s.ai);
      });
    })).prototype.a = function () {
      v485.parent.prototype.a.call(this);
    };
    v485.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeIn(200);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v485.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
    };
    v486 = $("#settings-kufur-isim");
    (v487 = f83(vF43, function () {
      vF43.call(this, "WTR ⚙️SETTINGS", 0);
      v31 = localStorage.getItem("wtr-block-bad-words") === "true";
      v486.prop("checked", v31);
      v486.click(function () {
        let v960 = v486.prop("checked");
        v31 = v960;
        localStorage.setItem("wtr-block-bad-words", v960 ? "true" : "false");
      });
    })).prototype.a = function () {
      v487.parent.prototype.a.call(this);
    };
    v487.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeIn(200);
    };
    v487.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
    };
    v488 = $("#wear-view-canv");
    v489 = $("#wear-description-text");
    v490 = $("#wear-locked-bar");
    v491 = $("#wear-locked-bar-text");
    v492 = $("#wear-buy-button");
    v493 = $("#wear-item-price");
    v494 = $("#wear-eyes-button");
    v495 = $("#wear-mouths-button");
    v496 = $("#wear-glasses-button");
    v497 = $("#wear-hats-button");
    v498 = $("#wear-tint-chooser");
    v499 = $("#wear-view-prev");
    v500 = $("#wear-view-next");
    (v501 = f83(vF43, function () {
      var vThis29 = this;
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.wear.tab"], true);
      var v961 = window.anApp = vUndefined2;
      var vThis30 = this;
      this.tl = [];
      this.ja = new v502(this, vF29.ja, v494);
      this.ka = new v502(this, vF29.ka, v495);
      this.la = new v502(this, vF29.la, v496);
      this.ma = new v502(this, vF29.ma, v497);
      this.ul = null;
      this.vl = null;
      this.wl = null;
      this.xl = null;
      this.yl = null;
      this.zl = null;
      this.Al = new vF40(v488);
      v492.click(function () {
        v961.r.Cd();
        vThis30.Bl();
      });
      v499.click(function () {
        v961.r.Cd();
        vThis30.ul.Cl();
      });
      v500.click(function () {
        v961.r.Cd();
        vThis30.ul.Dl();
      });
      v494.click(function () {
        v961.r.Cd();
        vThis30.El(vThis29.ja);
      });
      v495.click(function () {
        v961.r.Cd();
        vThis30.El(vThis29.ka);
      });
      v496.click(function () {
        v961.r.Cd();
        vThis30.El(vThis29.la);
      });
      v497.click(function () {
        v961.r.Cd();
        vThis30.El(vThis29.ma);
      });
      this.tl.push(this.ja);
      this.tl.push(this.ka);
      this.tl.push(this.la);
      this.tl.push(this.ma);
    })).prototype.a = function () {
      v501.parent.prototype.a.call(this);
      var v962 = window.anApp = vUndefined2;
      var vThis31 = this;
      v962.p.ca(function () {
        var v963 = v962.p.Ac();
        if (v963 != null) {
          vThis31.vl = v963.eyesDict;
          vThis31.wl = v963.mouthDict;
          vThis31.xl = v963.glassesDict;
          vThis31.yl = v963.hatDict;
          vThis31.zl = v963.colorDict;
          vThis31.ja.Fl(v963.eyesVariantArray);
          vThis31.ja.Gl(vThis31.vl);
          vThis31.ka.Fl(v963.mouthVariantArray);
          vThis31.ka.Gl(vThis31.wl);
          vThis31.la.Fl(v963.glassesVariantArray);
          vThis31.la.Gl(vThis31.xl);
          vThis31.ma.Fl(v963.hatVariantArray);
          vThis31.ma.Gl(vThis31.yl);
        }
      });
      this.il(false);
      v962.t.xh(function () {
        vThis31.il(false);
      });
    };
    v501.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeIn(200);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v501.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
      this.El(this.ul ?? this.ja);
      this.Al.Le(true);
    };
    v501.prototype.ei = function () {
      this.Al.Le(false);
    };
    v501.prototype.Ra = function () {
      this.Al.Ra();
    };
    v501.prototype.Pa = function (p743, p744) {
      this.Al.Pa();
    };
    v501.prototype.El = function (p745) {
      this.ul = p745;
      for (var vLN0114 = 0; vLN0114 < this.tl.length; vLN0114++) {
        this.tl[vLN0114].Xk.removeClass("pressed");
      }
      this.ul.Xk.addClass("pressed");
      this.ul.ii();
    };
    v501.prototype.Hl = function () {
      if (this.ul == null) {
        return vF24.Yg();
      } else {
        return vF24.Zg({
          Lb: this.ul.ql(),
          rc: this.ul.rc
        });
      }
    };
    v501.prototype.Bl = function () {
      var vThis32 = this;
      this.Hl().ah(function (p746) {
        vThis32.Ui(p746.Lb, p746.rc);
      });
    };
    v501.prototype.Ui = function (p747, p748) {
      var vThis33 = this;
      var v964 = window.anApp = vUndefined2;
      var vUndefined18 = undefined;
      switch (p748) {
        case vF29.ja:
          vUndefined18 = this.vl[p747].price;
          break;
        case vF29.ka:
          vUndefined18 = this.wl[p747].price;
          break;
        case vF29.la:
          vUndefined18 = this.xl[p747].price;
          break;
        case vF29.ma:
          vUndefined18 = this.yl[p747].price;
          break;
        default:
          return;
      }
      if (!(v964.u.zi() < vUndefined18)) {
        this.Sk();
        var v965 = v964.t.ha(vF29.ia);
        var v966 = v964.t.ha(vF29.ja);
        var v967 = v964.t.ha(vF29.ka);
        var v968 = v964.t.ha(vF29.la);
        var v969 = v964.t.ha(vF29.ma);
        v964.u.Ui(p747, p748, function () {
          v964.t.Bh(v965, vF29.ia);
          v964.t.Bh(v966, vF29.ja);
          v964.t.Bh(v967, vF29.ka);
          v964.t.Bh(v968, vF29.la);
          v964.t.Bh(v969, vF29.ma);
          if (v964.u.Ch(p747, p748)) {
            v964.t.Bh(p747, p748);
          }
          vThis33.Qk();
        });
      }
    };
    v501.prototype.Il = function (p749, p750) {
      switch (p750) {
        case vF29.ja:
          return this.vl[p749];
        case vF29.ka:
          return this.wl[p749];
        case vF29.la:
          return this.xl[p749];
        case vF29.ma:
          return this.yl[p749];
      }
      return null;
    };
    v501.prototype.il = function (p751) {
      var v970 = window.anApp = vUndefined2;
      this.Al.ak(v970.t.ha(vF29.ia), false, false);
      this.Al.bk(v970.t.ha(vF29.ja), false, false);
      this.Al.ck(v970.t.ha(vF29.ka), false, false);
      this.Al.dk(v970.t.ha(vF29.la), false, false);
      this.Al.ek(v970.t.ha(vF29.ma), false, false);
      var v971 = this.Hl();
      if (v971._g()) {
        var v972 = v971.$g();
        var v973 = this.Il(v972.Lb, v972.rc);
        var v974 = false;
        if (v970.t.Ja(v972.Lb, v972.rc)) {
          v490.hide();
          v492.hide();
        } else if (v973 == null || v973.nonbuyable == 1) {
          v974 = true;
          v490.show();
          v492.hide();
          v491.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
          if (v973 != null && v973.nonbuyable && v973.nonbuyableCause != null) {
            var v975 = v970.p.Ac().textDict[v973.nonbuyableCause];
            if (v975 != null) {
              v491.text(v975[v396] ? v975[v396] : v975.en ? v975.en : v975.x);
            }
          }
        } else {
          v490.hide();
          v492.show();
          v493.html(v973.price);
        }
        v489.html("ID: " + v972.Lb);
        if (v973 != null && v973.description != null) {
          var v976 = v970.p.Ac().textDict[v973.description];
          if (v976 != null) {
            v489.html((v976[v396] ? v976[v396] : v976.en ? v976.en : v976.x).includes("href") ? (v976[v396] ? v976[v396] : v976.en ? v976.en : v976.x).replaceAll("href", "target=\"_black\" href") : v976[v396] ? v976[v396] : v976.en ? v976.en : v976.x);
          }
        }
        switch (v972.rc) {
          case vF29.ja:
            this.Al.bk(v972.Lb, true, v974);
            break;
          case vF29.ka:
            this.Al.ck(v972.Lb, true, v974);
            break;
          case vF29.la:
            this.Al.dk(v972.Lb, true, v974);
            break;
          case vF29.ma:
            this.Al.ek(v972.Lb, true, v974);
        }
        if (p751) {
          v970.t.Bh(v972.Lb, v972.rc);
        }
      }
    };
    v502 = function () {
      function f156(p752, p753, p754) {
        this.sl = p752;
        this.rc = p753;
        this.Xk = p754;
        this.Jl = {};
        this.Kl = [[]];
        this.Ll = -10;
        this.Ml = -10;
      }
      f156.prototype.Fl = function (p755) {
        this.Kl = p755;
      };
      f156.prototype.Gl = function (p756) {
        this.Jl = p756;
      };
      f156.prototype.ii = function () {
        var v977 = (window.anApp = vUndefined2).t.ha(this.rc);
        for (var vLN0115 = 0; vLN0115 < this.Kl.length; vLN0115++) {
          for (var vLN0116 = 0; vLN0116 < this.Kl[vLN0115].length; vLN0116++) {
            if (this.Kl[vLN0115][vLN0116] == v977) {
              this.Nl(vLN0115);
              this.Ol(vLN0116);
              return;
            }
          }
        }
        this.Nl(0);
        this.Ol(0);
      };
      f156.prototype.Cl = function () {
        var v978 = this.Ll - 1;
        if (v978 < 0) {
          v978 = this.Kl.length - 1;
        }
        this.Nl(v978);
        this.Ol(this.Ml % this.Kl[v978].length);
      };
      f156.prototype.Dl = function () {
        var v979 = this.Ll + 1;
        if (v979 >= this.Kl.length) {
          v979 = 0;
        }
        this.Nl(v979);
        this.Ol(this.Ml % this.Kl[v979].length);
      };
      f156.prototype.Nl = function (p757) {
        var vThis34 = this;
        if (!(p757 < 0) && !(p757 >= this.Kl.length)) {
          this.Ll = p757;
          v498.empty();
          var v980 = this.Kl[this.Ll];
          if (v980.length > 1) {
            for (var vLN0117 = 0; vLN0117 < v980.length; vLN0117++) {
              (function (p758) {
                var v981 = v980[p758];
                var v982 = vThis34.Jl[v981];
                var v$30 = $("<div style=\"border-color:#" + vThis34.sl.zl[v982.prime] + "\"></div>");
                v$30.click(function () {
                  (window.anApp = vUndefined2).r.Cd();
                  vThis34.Ol(p758);
                });
                v498.append(v$30);
              })(vLN0117);
            }
          }
        }
      };
      f156.prototype.Ol = function (p759) {
        if (!(p759 < 0) && !(p759 >= this.Kl[this.Ll].length)) {
          this.Ml = p759;
          v498.children().css("background-color", "transparent");
          var v983 = v498.children(":nth-child(" + (1 + p759) + ")");
          v983.css("background-color", v983.css("border-color"));
          this.sl.il(true);
        }
      };
      f156.prototype.ql = function () {
        return this.Kl[this.Ll][this.Ml];
      };
      return f156;
    }();
    v503 = $("#withdraw-consent-yes");
    v504 = $("#withdraw-consent-no");
    (v505 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], false);
      var v984 = window.anApp = vUndefined2;
      v503.click(function () {
        v984.r.Cd();
        if (v984.Y()) {
          v984.s.I(v984.s.F);
          v984.$(false, true);
          v984.s.aa._(new v512());
        } else {
          v984.s.gi();
        }
      });
      v504.click(function () {
        v984.r.Cd();
        v984.s.gi();
      });
    })).prototype.a = function () {
      v505.parent.prototype.a.call(this);
    };
    v505.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeIn(200);
      vF43.Ok.stop();
      vF43.Ok.fadeOut(50);
    };
    v505.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Dd();
    };
    v506 = $("#delete-account-timer");
    v507 = $("#delete-account-yes");
    v508 = $("#delete-account-no");
    (v509 = f83(vF43, function () {
      vF43.call(this, window.I18N_MESSAGES["index.game.popup.menu.delete.tab"], false);
      var v985 = window.anApp = vUndefined2;
      v507.click(function () {
        v985.r.Cd();
        if (v985.u.P()) {
          v985.u.bj();
          v985.u.Wi();
        } else {
          v985.s.gi();
        }
      });
      v508.click(function () {
        v985.r.Cd();
        v985.s.gi();
      });
      this.Pl = [];
    })).prototype.a = function () {
      v509.parent.prototype.a.call(this);
    };
    v509.prototype.Rk = function () {
      vF43.Fk.stop();
      vF43.Fk.fadeOut(50);
      vF43.Gk.stop();
      vF43.Gk.fadeOut(50);
      vF43.Hk.stop();
      vF43.Hk.fadeOut(50);
      vF43.Jk.stop();
      vF43.Jk.fadeOut(50);
      vF43.Ik.stop();
      vF43.Ik.fadeOut(50);
      vF43.Kk.stop();
      vF43.Kk.fadeOut(50);
      vF43.Lk.stop();
      vF43.Lk.fadeOut(50);
      vF43.Mk.stop();
      vF43.Mk.fadeOut(50);
      vF43.wtrset.stop();
      vF43.wtrset.fadeOut(50);
      vF43.Nk.stop();
      vF43.Nk.fadeOut(50);
      vF43.Ok.stop();
      vF43.Ok.fadeIn(200);
    };
    v509.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Hd();
      v507.stop();
      v507.hide();
      v506.stop();
      v506.show();
      v506.text(".. 10 ..");
      this.Ql();
      this.Rl(function () {
        v506.text(".. 9 ..");
      }, 1000);
      this.Rl(function () {
        v506.text(".. 8 ..");
      }, 2000);
      this.Rl(function () {
        v506.text(".. 7 ..");
      }, 3000);
      this.Rl(function () {
        v506.text(".. 6 ..");
      }, 4000);
      this.Rl(function () {
        v506.text(".. 5 ..");
      }, 5000);
      this.Rl(function () {
        v506.text(".. 4 ..");
      }, 6000);
      this.Rl(function () {
        v506.text(".. 3 ..");
      }, 7000);
      this.Rl(function () {
        v506.text(".. 2 ..");
      }, 8000);
      this.Rl(function () {
        v506.text(".. 1 ..");
      }, 9000);
      this.Rl(function () {
        v506.hide();
        v507.fadeIn(300);
      }, 10000);
    };
    v509.prototype.Rl = function (p760, p761) {
      var vSetTimeout2 = setTimeout(p760, p761);
      this.Pl.push(vSetTimeout2);
    };
    v509.prototype.Ql = function () {
      for (var vLN0118 = 0; vLN0118 < this.Pl.length; vLN0118++) {
        clearTimeout(this.Pl[vLN0118]);
      }
      this.Pl = [];
    };
    var vF44 = function () {
      function f157() {
        this.Ck = function () {};
      }
      f157.prototype.Bk = function () {};
      f157.prototype.ji = function () {};
      return f157;
    }();
    (v510 = f83(vF44, function (p762) {
      vF44.call(this);
      var v986 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
      this.Sl = $("<div id=\"" + v986 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p762 + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
      var vThis35 = this;
      this.Sl.find(".toaster-coins-close").click(function () {
        (window.anApp = vUndefined2).r.Cd();
        vThis35.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    v510.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Fd();
    };
    (v511 = f83(vF44, function (p763) {
      vF44.call(this);
      var v987 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
      this.Sl = $("<div id=\"" + v987 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p763 + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES["index.game.toaster.levelup"] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
      var vThis36 = this;
      this.Sl.find(".toaster-levelup-close").click(function () {
        (window.anApp = vUndefined2).r.Cd();
        vThis36.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    v511.prototype.ji = function () {
      (window.anApp = vUndefined2).r.Ed();
    };
    (v512 = f83(vF44, function () {
      vF44.call(this);
      var vThis37 = this;
      var v988 = window.anApp = vUndefined2;
      var v989 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
      this.Sl = $("<div id=\"" + v989 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"/images/linelogo-xmas2022.png\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + "</div></div>");
      this.Tl = this.Sl.find(".toaster-consent-close");
      this.Tl.hide();
      this.Tl.click(function () {
        v988.r.Cd();
        if (v988.Y()) {
          v988.$(true, true);
        }
        vThis37.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    v512.prototype.ji = function () {
      var vThis38 = this;
      var v990 = window.anApp = vUndefined2;
      if (v990.Y() && !v990.Z()) {
        v990.r.Hd();
        setTimeout(function () {
          vThis38.Tl.fadeIn(300);
        }, 2000);
      } else {
        setTimeout(function () {
          vThis38.Ck();
        }, 0);
      }
    };
    var vO35 = {
      main: {
        Ma: f91("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        K: f91("ltmolilci1iurq1i", "wormate-io_970x250"),
        ra: f88(),
        e: 4,
        oa: false,
        qk: true
      },
      miniclip: {
        Ma: f91("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        K: f91("ltmolilci1iurq1i", "wormate-io_970x250"),
        ra: f88(),
        e: 4,
        oa: false,
        qk: false
      }
    };
    var v991 = vO35[window.ENV];
    if (!v991) {
      v991 = vO35.main;
    }
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p764) {
      p764.preventDefault();
      p764.stopPropagation();
      return false;
    });
    f82("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f82("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        v47 = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    (vUndefined2 = f92()).v();
    $("#mm-menu-cont").css("display", "block");
    vO6.loading = true;
    var vF482 = f48(localStorage.getItem("wtr-background"));
    if (vF482) {
      anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(vF482));
      console.log("Fondo cargado desde almacenamiento:", vF482);
    }
    function f158(p765) {
      if (vO6.PropertyManager) {
        p765.skinId = vO6.PropertyManager.rh;
        p765.eyesId = vO6.PropertyManager.sh;
        p765.mouthId = vO6.PropertyManager.th;
        p765.glassesId = vO6.PropertyManager.uh;
        p765.hatId = vO6.PropertyManager.vh;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        if (this >= 1000000) {
          return (this / 1000000).toFixed(1) + "M";
        } else if (this >= 100000) {
          return (this / 1000).toFixed(0) + "K";
        } else {
          return this.dotFormat();
        }
      };
    }
    (function f159() {
      requestAnimationFrame(f159);
      (window.anApp = vUndefined2).Pa();
    })();
    function f160() {
      var v992 = v$31.width();
      var v993 = v$31.height();
      var v994 = v$32.outerWidth();
      var v995 = v$32.outerHeight();
      var v996 = v$33.outerHeight();
      var v997 = "translate(-50%, -50%) scale(" + Math.min(1, Math.min((v993 - v$34.outerHeight() - v996) / v995, v992 / v994)) + ")";
      v$32.css({
        "-webkit-transform": v997,
        "-moz-transform": v997,
        "-ms-transform": v997,
        "-o-transform": v997,
        transform: v997
      });
      (window.anApp = vUndefined2).Ra();
      window.scrollTo(0, 1);
    }
    var v$31 = $("body");
    var v$32 = $("#stretch-box");
    var v$33 = $("#markup-header");
    var v$34 = $("#markup-footer");
    f160();
    $(window).resize(f160);
  })();
});
console.log("WTR Team");
let vA29 = [];
let v998 = Date.now();
function f161(p766) {
  function f162(p767) {
    if (typeof p767 == "string") {
      return function (p768) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + p767 / p767).length !== 1 || p767 % 20 == 0) {
      (function () {
        return true;
      }).constructor("debugrger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debrugger").apply("stateObject");
    }
    f162(++p767);
  }
  try {
    if (p766) {
      return f162;
    }
    f162(0);
  } catch (e27) {}
}