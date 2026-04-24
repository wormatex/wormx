document.documentElement.insertAdjacentHTML("afterbegin", "\n    <style>\n        /* Preloader en pantalla completa */\n        .fixed-background {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: black;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            z-index: 99999;\n            transition: opacity 0.5s ease-out;\n        }\n\n        /* Imagen de fondo */\n        .background-image {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background: url('https://wormturkio.com/ops_2025/old22.webp') no-repeat center center/cover;\n            background-size: cover;\n            background-position: center;\n            opacity: 0.3;\n            filter: blur(5px) opacity(1.5);\n        }\n\n        /* Estilos del logo */\n        .logo {\n            width: 200px;\n            animation: pulse 4s infinite;\n            margin-bottom: 70px;\n        }\n\n        /* Animación de pulso */\n        @keyframes pulse {\n            0% { transform: scale(2); opacity: 1; }\n            50% { transform: scale(2.1); opacity: 0.8; }\n            100% { transform: scale(2); opacity: 1; }\n        }\n\n        /* Barra de carga */\n        .progress-bar-container {\n            width: 50%;\n            height: 10px;\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 5px;\n            overflow: hidden;\n            position: relative;\n        }\n\n        .progress-bar {\n            width: 0%;\n            height: 100%;\n            background: #252535;\n            transition: width 2s linear;\n        }\n\n        /* GIF de rotación */\n        .rotate-gif {\n            display: none; /* Oculto por defecto */\n            margin-top: 20px;\n            width: 150px;\n        }\n\n        /* Corazones */\n        .hearts {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -100%);\n            display: flex;\n            gap: 10px;\n        }\n\n        .one, .two, .three, .four, .five {\n            background-color: #252535;\n            display: inline-block;\n            height: 10px;\n            width: 10px;\n            transform: rotate(-45deg);\n            position: relative;\n        }\n\n        .one:before, .one:after,\n        .two:before, .two:after,\n        .three:before, .three:after,\n        .four:before, .four:after,\n        .five:before, .five:after {\n            content: \"\";\n            background-color: #252535;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px;\n            position: absolute;\n        }\n\n        .one:before, .two:before, .three:before, .four:before, .five:before {\n            top: -5px;\n            left: 0;\n        }\n\n        .one:after, .two:after, .three:after, .four:after, .five:after {\n            left: 5px;\n            top: 0;\n        }\n\n        /* Animación de los corazones */\n        @keyframes heart {\n            0% {\n                transform: translateY(0) rotate(-45deg) scale(0.3);\n                opacity: 1;\n            }\n            100% {\n                transform: translateY(-150px) rotate(-45deg) scale(1.3);\n                opacity: 0;\n            }\n        }\n\n        .one { animation: heart 1s ease-out infinite; }\n        .two { animation: heart 2s ease-out infinite; }\n        .three { animation: heart 1.5s ease-out infinite; }\n        .four { animation: heart 2.3s ease-out infinite; }\n        .five { animation: heart 1.7s ease-out infinite; }\n    </style>\n\n    <div class=\"fixed-background\" id=\"loading-screen\">\n        <div class=\"background-image\"></div>\n        <img src=\"https://i.imgur.com/xp9kZ7y.png\" alt=\"server logo\" class=\"logo\">\n\n        <div class=\"hearts\">\n            <div class=\"one\"></div>\n            <div class=\"two\"></div>\n            <div class=\"three\"></div>\n            <div class=\"four\"></div>\n            <div class=\"five\"></div>\n        </div>\n\n        <div class=\"progress-bar-container\">\n            <div class=\"progress-bar\" id=\"progress-bar\"></div>\n        </div>\n\n        <!-- GIF de rotación para móviles en vertical -->\n        <img src=\"https://i.imgur.com/CVpwetK.gif\" alt=\"Rotar el dispositivo\" class=\"rotate-gif\" id=\"rotate-gif\">\n    </div>\n");
window._alreadyScaledWormTextures = window._alreadyScaledWormTextures || new Set();
const vLN0025 = 0.025;
const vLN05 = 0.5;
function f2(p2) {
  if (!p2 || !p2.Hc || !p2.Hc.baseTexture) {
    console.warn("⚠️ Textura inválida o sin baseTexture.");
    return;
  }
  const v2 = p2.Hc.baseTexture;
  const v3 = v2.cacheId || v2.resource?.url || v2.resource?.source?.src || "";
  if (v3 && !window._alreadyScaledWormTextures.has(v3)) {
    try {
      if (v3.includes("100300_portions.png") && v2.resolution > vLN0025) {
        v2.resolution = vLN0025;
        console.log("🛠️ Resolución ajustada (" + v2.resolution + "): " + v3);
      }
      if ("mipmap" in v2) {
        v2.mipmap = false;
      } else if ("mipmap" in v2.baseTexture) {
        v2.baseTexture.mipmap = false;
      }
      if ("anisotropicLevel" in v2) {
        v2.anisotropicLevel = 1;
      } else if ("anisotropicLevel" in v2.baseTexture) {
        v2.baseTexture.anisotropicLevel = 1;
      }
      const vLN1024 = 1024;
      const vLN10242 = 1024;
      if (v2.width > vLN1024 || v2.height > vLN10242) {
        const v4 = vLN1024 / v2.width;
        const v5 = vLN10242 / v2.height;
        const v6 = Math.min(v4, v5);
        if (v2.setSize) {
          v2.setSize(v2.width * v6, v2.height * v6);
        } else if (v2.resource?.source instanceof HTMLImageElement) {
          v2.resource.source.width *= v6;
          v2.resource.source.height *= v6;
        }
        console.log("🔧 Imagen escalada (" + Math.round(v6 * 100) + "%): " + v3);
      }
      if (v2.isPowerOfTwo && !v3.includes("atlas") && !v3.includes("sprite")) {
        v2.isPowerOfTwo = false;
      }
      if (v2.destroyed || v2.resource?.destroyed) {
        v2.destroy(true);
        console.log("🗑️ Textura destruida por estado inválido: " + v3);
      }
      window._alreadyScaledWormTextures.add(v3);
      console.log("✅ Optimización completa: " + v3);
    } catch (e2) {
      console.error("❌ Error al optimizar textura: " + v3, e2);
    }
  }
}
function f3() {
  const v7 = document.getElementById("rotate-gif");
  if (window.matchMedia("(orientation: portrait)").matches) {
    v7.style.display = "block";
  } else {
    v7.style.display = "none";
  }
}
(() => {
  function f4() {
    try {
      const v8 = localStorage.getItem("headshotMessage");
      const v9 = localStorage.getItem("killMessage");
      const v10 = document.getElementById("headshotSelect");
      const v11 = document.getElementById("killSelect");
      if (v8 && v10) {
        v10.value = v8;
      }
      if (v9 && v11) {
        v11.value = v9;
      }
    } catch (e3) {}
  }
  function f5() {
    f4();
  }
  function i() {
    const v12 = document.getElementById("sound-selector");
    const v13 = document.getElementById("settings-stremingmodeheadshot-switch");
    let v14 = v12 && v12.value || localStorage.getItem("selectedSound") || "";
    let v15 = localStorage.getItem("isMuted") === "true";
    let v16 = v14 ? new Audio(v14) : null;
    function f7(p3) {
      if (!v15 && p3) {
        try {
          if (v16 && v16.src === p3) {
            v16.currentTime = 0;
          } else {
            if (v16) {
              v16.pause();
            }
            v16 = new Audio(p3);
          }
          const v17 = v16.play();
          if (v17 && typeof v17.then == "function") {
            v17.catch(() => {});
          }
        } catch (e4) {}
      }
    }
    if (v12) {
      v12.value = v14;
    }
    if (v13) {
      v13.checked = v15;
    }
    if (v12) {
      v12.addEventListener("change", p4 => {
        const v18 = p4 && p4.target ? p4.target.value : "";
        v14 = v18;
        localStorage.setItem("selectedSound", v14);
        f7(v14);
      });
    }
    if (v13) {
      v13.addEventListener("change", () => {
        v15 = !!v13 && !!v13.checked;
        localStorage.setItem("isMuted", String(v15));
        if (v15 && v16) {
          v16.pause();
        }
      });
    }
    const v19 = document.getElementById("preview-sound");
    if (v19 && v12) {
      v19.addEventListener("click", () => f7(v12.value));
    }
  }
  if (typeof window != "undefined") {
    window.openTab = function (p5, p6) {
      try {
        const v20 = document.querySelectorAll(".tab-content");
        const v21 = document.querySelectorAll(".tab-button");
        v20.forEach(p7 => p7.style.display = "none");
        v21.forEach(p8 => p8.classList.remove("active"));
        const v22 = document.getElementById(p6);
        if (v22) {
          v22.style.display = "block";
        }
        if (p5 && p5.target && p5.target.classList) {
          p5.target.classList.add("active");
        }
      } catch (e5) {}
    };
    window.saveMessages = function () {
      try {
        const v23 = document.getElementById("headshotSelect");
        const v24 = document.getElementById("killSelect");
        const v25 = v23 ? v23.value : "";
        const v26 = v24 ? v24.value : "";
        if (v25) {
          localStorage.setItem("headshotMessage", v25);
        }
        if (v26) {
          localStorage.setItem("killMessage", v26);
        }
        if (typeof alert == "function") {
          alert("تم حفظ الرسائل بنجاح!");
        }
      } catch (e6) {}
    };
    window.loadMessages = f4;
    window.initializeSettings = f5;
  }
  if (typeof document != "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        f5();
        i();
      });
    } else {
      f5();
      i();
    }
  }
})();
(() => {
  function t(p9) {
    return typeof p9 == "number" && Number.isFinite(p9);
  }
  function e(p10) {
    if (t(p10)) {
      if (p10 < 0) {
        return 0;
      } else if (p10 > 1) {
        return 1;
      } else {
        return p10;
      }
    } else {
      return null;
    }
  }
  function i(p11) {
    if (!p11 || typeof document == "undefined") {
      return;
    }
    const vO = {
      wc: e(p11.wc),
      hc: e(p11.hc),
      wt: e(p11.wt),
      ht: e(p11.ht),
      rc: t(p11.rc) ? p11.rc : null,
      rt: t(p11.rt) ? p11.rt : null
    };
    try {
      localStorage.setItem("customLayout", JSON.stringify(vO));
    } catch (e7) {}
    const v27 = document.documentElement;
    if (v27 && v27.style) {
      if (vO.wc !== null) {
        v27.style.setProperty("--layout-wc", String(vO.wc));
      }
      if (vO.hc !== null) {
        v27.style.setProperty("--layout-hc", String(vO.hc));
      }
      if (vO.wt !== null) {
        v27.style.setProperty("--layout-wt", String(vO.wt));
      }
      if (vO.ht !== null) {
        v27.style.setProperty("--layout-ht", String(vO.ht));
      }
      if (vO.rc !== null) {
        v27.style.setProperty("--layout-rc", String(vO.rc));
      }
      if (vO.rt !== null) {
        v27.style.setProperty("--layout-rt", String(vO.rt));
      }
      try {
        const v28 = new CustomEvent("customLayout:applied", {
          detail: vO
        });
        window.dispatchEvent(v28);
      } catch (e8) {}
    }
  }
  if (typeof window != "undefined") {
    window.demoSetLayout = function (p12) {
      i(p12);
    };
    window.addEventListener("message", function (p13) {
      const v29 = p13 && p13.data;
      if (v29 && v29.typeCustom === "demoSetLayout" && v29.data) {
        i(v29.data);
      }
    });
  }
  if (typeof document != "undefined") {
    const vF = () => {
      try {
        const v30 = localStorage.getItem("customLayout");
        if (v30) {
          i(JSON.parse(v30));
        }
      } catch (e9) {}
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", vF);
    } else {
      vF();
    }
  }
})();
(() => {
  function t(p14, p15, p16) {
    if (!p14) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    const v31 = (p14.wt || 0) * p15;
    const v32 = (p14.ht || 0) * p16;
    return {
      x: (p14.wc || 0) * p15 - v31 / 2,
      y: (p14.hc || 0) * p16 - v32 / 2,
      width: v31,
      height: v32
    };
  }
  function e(p17, p18, p19) {
    if (!p17 || !p18) {
      return null;
    }
    (function () {
      const vLSBoxoverlaystyle = "box-overlay-style";
      if (document.getElementById(vLSBoxoverlaystyle)) {
        return;
      }
      const v33 = document.createElement("style");
      v33.id = vLSBoxoverlaystyle;
      v33.textContent = ".box-overlay{position:absolute;border:2px solid #0d7aef;box-shadow:0 0 8px rgba(13,122,239,0.5);pointer-events:none;}";
      document.head.appendChild(v33);
    })();
    const v34 = p17.getBoundingClientRect();
    const {
      x: a,
      y: s,
      width: r,
      height: c
    } = t(p18, v34.width, v34.height);
    let v35 = p17.querySelector(".box-overlay");
    if (!v35) {
      v35 = document.createElement("div");
      v35.className = "box-overlay";
      p17.appendChild(v35);
      if (getComputedStyle(p17).position === "static") {
        p17.style.position = "relative";
      }
    }
    v35.style.left = a + "px";
    v35.style.top = s + "px";
    v35.style.width = r + "px";
    v35.style.height = c + "px";
    v35.style.transformOrigin = "50% 50%";
    const v36 = typeof p19 == "number" ? p19 : 0;
    v35.style.transform = "rotate(" + v36 + "deg)";
    return v35;
  }
  let v37 = null;
  if (typeof window != "undefined") {
    window.boxToPixels = t;
    window.drawNormalizedBox = e;
    window.setLayoutContainer = function (p20) {
      v37 = typeof p20 == "string" ? document.getElementById(p20) : p20 && p20.nodeType === 1 ? p20 : null;
      try {
        const v38 = localStorage.getItem("customLayout");
        if (v38 && v37) {
          const v39 = JSON.parse(v38);
          const v40 = typeof v39.rt == "number" ? v39.rt : 0;
          e(v37, v39, v40);
        }
      } catch (e10) {}
    };
    window.addEventListener("customLayout:applied", function (p21) {
      const v41 = p21 && p21.detail;
      if (!v41 || !v37) {
        return;
      }
      const v42 = typeof v41.rt == "number" ? v41.rt : 0;
      e(v37, v41, v42);
    });
  }
})();
(() => {
  const vO2 = {
    FB_UserID: "",
    smoothCamera: 0.5,
    eat_animation: 0.0025,
    flag: "",
    PortionSize: Number(localStorage.getItem("PotenciadorSize")) || 2,
    PortionAura: Number(localStorage.getItem("PortionAura")) || 1.2,
    PortionTransparent: 0.8,
    FoodTransparent: 0.3,
    ModeStremer: false,
    ModeStremerbatop: false,
    ModeStremeremoj: false,
    ModeStremerheadshot: false,
    ModeStremersaveheadshot: false,
    arrow: false,
    KeyCodeRespawn: Number(localStorage.getItem("KeyRespawn")) || 82,
    KeyCodeAutoMov: Number(localStorage.getItem("KeyAutoMov")) || typeof window != "undefined" && window?.KeyW || 87,
    AbilityZ: false,
    FoodShadow: Number(localStorage.getItem("ComidaShadow")) || 2,
    FoodSize: Number(localStorage.getItem("FoodSize")) || 2,
    headshot: 0,
    visibleSkin: [],
    pL: [],
    gamePad: vO7 !== undefined && vO7 ? vO7.joystick : undefined,
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
  function e(p22, p23, p24) {
    const v43 = !!p23;
    window.theoKzObjects[p22] = v43;
    try {
      if (p24) {
        localStorage.setItem(p24, String(v43));
      }
    } catch (e11) {}
  }
  function f14(p25) {
    return document.getElementById(p25);
  }
  function n() {
    const v44 = window.theoKzObjects;
    const vA = [["ModeStremer", "settings-stremingmode-switch"], ["ModeStremersaveheadshot", "settings-stremingmodesaveheadshot-switch"], ["ModeStremerbatop", "settings-stremingmodebatop-switch"], ["ModeStremeremoj", "settings-stremingmodeemoj-switch"], ["ModeStremerheadshot", "settings-stremingmodeheadshot-switch"]];
    for (const [v45, v46] of vA) {
      const vF14 = f14(v46);
      if (vF14) {
        vF14.checked = !!v44[v45];
      }
    }
    const vF142 = f14("sound-selector");
    const v47 = localStorage.getItem("selectedSound");
    if (vF142 && v47) {
      vF142.value = v47;
    }
    const vF143 = f14("headshotSelect");
    const vF144 = f14("killSelect");
    const v48 = localStorage.getItem("headshotMessage");
    const v49 = localStorage.getItem("killMessage");
    if (vF143 && v48) {
      vF143.value = v48;
    }
    if (vF144 && v49) {
      vF144.value = v49;
    }
  }
  function o() {
    const vF2 = (p26, p27, p28) => {
      const vF145 = f14(p26);
      if (vF145) {
        vF145.addEventListener("change", () => e(p27, vF145.checked, p28));
      }
    };
    vF2("settings-stremingmode-switch", "ModeStremer", "ModeStremer");
    vF2("settings-stremingmodesaveheadshot-switch", "ModeStremersaveheadshot", "ModeStremersaveheadshot");
    vF2("settings-stremingmodebatop-switch", "ModeStremerbatop", "ModeStremerbatop");
    vF2("settings-stremingmodeemoj-switch", "ModeStremeremoj", "ModeStremeremoj");
    vF2("settings-stremingmodeheadshot-switch", "ModeStremerheadshot", "ModeStremerheadshot");
    const vF146 = f14("sound-selector");
    if (vF146) {
      vF146.addEventListener("change", () => {
        try {
          localStorage.setItem("selectedSound", vF146.value);
        } catch (e12) {}
      });
    }
    const vF147 = f14("headshotSelect");
    if (vF147) {
      vF147.addEventListener("change", () => {
        try {
          localStorage.setItem("headshotMessage", vF147.value);
        } catch (e13) {}
      });
    }
    const vF148 = f14("killSelect");
    if (vF148) {
      vF148.addEventListener("change", () => {
        try {
          localStorage.setItem("killMessage", vF148.value);
        } catch (e14) {}
      });
    }
  }
  if (typeof window != "undefined") {
    window.theoKzObjects = Object.assign({}, vO2, window.theoKzObjects || {});
  }
  if (typeof window != "undefined") {
    window.setTheoBool = e;
    window.setTheoNumber = function (p29, p30, p31) {
      const vNumber = Number(p30);
      if (Number.isFinite(vNumber)) {
        window.theoKzObjects[p29] = vNumber;
        try {
          if (p31) {
            localStorage.setItem(p31, String(vNumber));
          }
        } catch (e15) {}
      }
    };
    window.syncTheoUI = n;
    window.bindTheoUI = o;
  }
  if (typeof document != "undefined") {
    const vF3 = () => {
      try {
        n();
        o();
      } catch (e16) {}
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", vF3);
    } else {
      vF3();
    }
  }
})();
(() => {
  if (typeof window == "undefined" || typeof document == "undefined") {
    return;
  }
  const vA2 = ["settings-stremingmode-switch", "settings-stremingmodesaveheadshot-switch", "settings-stremingmodebatop-switch", "settings-stremingmodeemoj-switch", "settings-stremingmodeheadshot-switch", "sound-selector", "headshotSelect", "killSelect"];
  function f17() {
    return vA2.every(p32 => document.getElementById(p32));
  }
  function f18() {
    try {
      if (typeof window.bindTheoUI == "function") {
        window.bindTheoUI();
      }
      if (typeof window.syncTheoUI == "function") {
        window.syncTheoUI();
      }
    } catch (e17) {}
  }
  window.initTheoUI = function () {
    if (f17()) {
      f18();
    } else {
      (function () {
        let v50 = false;
        const v51 = new MutationObserver(() => {
          if (!v50) {
            if (f17()) {
              v50 = true;
              f18();
              v51.disconnect();
            }
          }
        });
        v51.observe(document.documentElement || document.body, {
          childList: true,
          subtree: true
        });
        setTimeout(() => {
          if (!v50 && f17()) {
            v50 = true;
            f18();
            v51.disconnect();
          }
        }, 500);
        setTimeout(() => {
          if (!v50) {
            f18();
          }
        }, 1500);
      })();
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.initTheoUI());
  } else {
    window.initTheoUI();
  }
})();
window.addEventListener("load", f3);
window.addEventListener("resize", f3);
window.onload = function () {
  document.getElementById("progress-bar").style.width = "100%";
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loading-screen").remove();
    }, 500);
  }, 2000);
};
var v52 = this && this.__extends || function () {
  function f19(p33, p34) {
    return (f19 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (p35, p36) {
      p35.__proto__ = p36;
    } || function (p37, p38) {
      for (var v53 in p38) {
        if (Object.prototype.hasOwnProperty.call(p38, v53)) {
          p37[v53] = p38[v53];
        }
      }
    })(p33, p34);
  }
  return function (p39, p40) {
    if (typeof p40 !== "function" && p40 !== null) {
      throw new TypeError("Class extends value " + String(p40) + " is not a constructor or null");
    }
    function f20() {
      this.constructor = p39;
    }
    f19(p39, p40);
    p39.prototype = p40 === null ? Object.create(p40) : (f20.prototype = p40.prototype, new f20());
  };
}();
var v54;
(function (p41) {
  var v55;
  v55 = true;
  function n(p42, p43) {
    var v56 = v55 ? function () {
      if (p43) {
        var v57 = p43.apply(p42, arguments);
        p43 = null;
        return v57;
      }
    } : function () {};
    v55 = false;
    return v56;
  }
  var vN = n(this, function () {
    return vN.toString().search("(((.+)+)+)+$").toString().constructor(vN).search("(((.+)+)+)+$");
  });
  vN();
  p41.LEFT = "left";
  p41.TOP = "top";
  p41.BOTTOM = "bottom";
  p41.RIGHT = "right";
  p41.TOP_LEFT = "top_left";
  p41.TOP_RIGHT = "top_right";
  p41.BOTTOM_LEFT = "bottom_left";
  p41.BOTTOM_RIGHT = "bottom_right";
})(v54 = {});
var vF4 = function (p44) {
  var v58;
  v58 = true;
  function n(p45, p46) {
    var v59 = v58 ? function () {
      if (p46) {
        var v60 = p46.apply(p45, arguments);
        p46 = null;
        return v60;
      }
    } : function () {};
    v58 = false;
    return v59;
  }
  (function () {
    n(this, function () {
      var v61 = new RegExp("function *\\( *\\)");
      var v62 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      var v_0x509214 = f169("init");
      if (v61.test(v_0x509214 + "chain") && v62.test(v_0x509214 + "input")) {
        f169();
      } else {
        v_0x509214("0");
      }
    })();
  })();
  var v63;
  v63 = true;
  function f23(p47, p48) {
    var v64 = v63 ? function () {
      if (p48) {
        var v65 = p48.apply(p47, arguments);
        p48 = null;
        return v65;
      }
    } : function () {};
    v63 = false;
    return v64;
  }
  function f24(p49) {
    var v66 = p44.call(this) || this;
    v66.outerRadius = 0;
    v66.innerRadius = 0;
    v66.innerAlphaStandby = 0.5;
    v66.settings = Object.assign({
      outerScale: {
        x: 1,
        y: 1
      },
      innerScale: {
        x: 1,
        y: 1
      }
    }, p49);
    if (!v66.settings.outer) {
      var v67 = new PIXI.Graphics();
      v67.beginFill(16225317);
      v67.drawCircle(0, 0, 60);
      v67.alpha = 0.5;
      v66.settings.outer = v67;
    }
    if (!v66.settings.inner) {
      var v68 = new PIXI.Graphics();
      v68.beginFill(16711680);
      v68.drawCircle(0, 0, 35);
      v68.alpha = v66.innerAlphaStandby;
      v66.settings.inner = v68;
    }
    v66.initialize();
    return v66;
  }
  f23(this, function () {
    var v69;
    try {
      v69 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (e18) {
      v69 = window;
    }
    var v70 = v69.console = v69.console || {};
    for (var vA3 = ["log", "warn", "info", "error", "exception", "table", "trace"], vLN0 = 0; vLN0 < vA3.length; vLN0++) {
      var v71 = f23.constructor.prototype.bind(f23);
      var v72 = vA3[vLN0];
      var v73 = v70[v72] || v71;
      v71.__proto__ = f23.bind(f23);
      v71.toString = v73.toString.bind(v73);
      v70[v72] = v71;
    }
  })();
  v52(f24, p44);
  f24.prototype.initialize = function () {
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
  f24.prototype.bindEvents = function () {
    var vThis = this;
    this.interactive = true;
    var v74;
    var v75;
    var v76;
    var v77 = false;
    this.onDragStart = function (p50) {
      var v78;
      var v79;
      v74 = p50;
      v76 = this.toLocal(v74);
      v77 = true;
      vThis.inner.alpha = 1;
      if ((v79 = (v78 = vThis.settings).onStart) !== null && v79 !== undefined) {
        v79.call(v78);
      }
    };
    this.onDragEnd = function (p51) {
      var v80;
      var v81;
      if (v77 != 0) {
        vThis.inner.position.set(0, 0);
        v77 = false;
        vThis.inner.alpha = vThis.innerAlphaStandby;
        if ((v81 = (v80 = vThis.settings).onEnd) !== null && v81 !== undefined) {
          v81.call(v80);
        }
      }
    };
    this.onDragMove = function (p52) {
      var v82;
      var v83;
      var v84;
      var v85;
      var v86;
      var v87;
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 2;
      if (v77 != 0) {
        var v88 = this.toLocal(p52);
        var v89 = v88.x - v76.x;
        var v90 = v88.y - v76.y;
        var v91 = new PIXI.Point(0, 0);
        var vLN02 = 0;
        if (v89 != 0 || v90 != 0) {
          if (v89 * v89 + v90 * v90 >= vThis.outerRadius * vThis.outerRadius) {
            vThis.outerRadius;
          } else {
            vThis.outerRadius - vThis.innerRadius;
          }
          var v92 = v54.LEFT;
          if (v89 == 0) {
            if (v90 > 0) {
              v91.set(0, v90 > vThis.outerRadius ? vThis.outerRadius : v90);
              vLN02 = 270;
              v92 = v54.BOTTOM;
            } else {
              v91.set(0, -(Math.abs(v90) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v90)));
              vLN02 = 90;
              v92 = v54.TOP;
            }
            vThis.inner.position.set(v91.x, v91.y);
            v75 = vThis.getPower(v91);
            if ((v83 = (v82 = vThis.settings).onChange) !== null && v83 !== undefined) {
              v83.call(v82, {
                angle: vLN02,
                direction: v92,
                power: v75
              });
            }
            return;
          }
          if (v90 == 0) {
            if (v89 > 0) {
              v91.set(Math.abs(v89) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v89), 0);
              vLN02 = 0;
              v92 = v54.LEFT;
            } else {
              v91.set(-(Math.abs(v89) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v89)), 0);
              vLN02 = 180;
              v92 = v54.RIGHT;
            }
            vThis.inner.position.set(v91.x, v91.y);
            v75 = vThis.getPower(v91);
            if ((v85 = (v84 = vThis.settings).onChange) !== null && v85 !== undefined) {
              v85.call(v84, {
                angle: vLN02,
                direction: v92,
                power: v75
              });
            }
            return;
          }
          var v93 = Math.abs(v90 / v89);
          var v94 = Math.atan(v93);
          vLN02 = v94 * 180 / Math.PI;
          var vLN03 = 0;
          var vLN04 = 0;
          if (v89 * v89 + v90 * v90 >= vThis.outerRadius * vThis.outerRadius) {
            vLN03 = vThis.outerRadius * Math.cos(v94);
            vLN04 = vThis.outerRadius * Math.sin(v94);
          } else {
            vLN03 = Math.abs(v89) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v89);
            vLN04 = Math.abs(v90) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v90);
          }
          if (v90 < 0) {
            vLN04 = -Math.abs(vLN04);
          }
          if (v89 < 0) {
            vLN03 = -Math.abs(vLN03);
          }
          if (!(v89 > 0) || !(v90 < 0)) {
            if (v89 < 0 && v90 < 0) {
              vLN02 = 180 - vLN02;
            } else if (v89 < 0 && v90 > 0) {
              vLN02 += 180;
            } else if (v89 > 0 && v90 > 0) {
              vLN02 = 360 - vLN02;
            }
          }
          v91.set(vLN03, vLN04);
          v75 = vThis.getPower(v91);
          v92 = vThis.getDirection(v91);
          vThis.inner.position.set(v91.x, v91.y);
          if ((v87 = (v86 = vThis.settings).onChange) !== null && v87 !== undefined) {
            v87.call(v86, {
              angle: vLN02,
              direction: v92,
              power: v75
            });
          }
        }
      }
    };
  };
  f24.prototype.getPower = function (p53) {
    var v95 = p53.x - 0;
    var v96 = p53.y - 0;
    return Math.min(1, Math.sqrt(v95 * v95 + v96 * v96) / this.outerRadius);
  };
  f24.prototype.getDirection = function (p54) {
    var v97 = Math.atan2(p54.y, p54.x);
    if (v97 >= -Math.PI / 8 && v97 < 0 || v97 >= 0 && v97 < Math.PI / 8) {
      return v54.RIGHT;
    } else if (v97 >= Math.PI / 8 && v97 < Math.PI * 3 / 8) {
      return v54.BOTTOM_RIGHT;
    } else if (v97 >= Math.PI * 3 / 8 && v97 < Math.PI * 5 / 8) {
      return v54.BOTTOM;
    } else if (v97 >= Math.PI * 5 / 8 && v97 < Math.PI * 7 / 8) {
      return v54.BOTTOM_LEFT;
    } else if (v97 >= Math.PI * 7 / 8 && v97 < Math.PI || v97 >= -Math.PI && v97 < Math.PI * -7 / 8) {
      return v54.LEFT;
    } else if (v97 >= Math.PI * -7 / 8 && v97 < Math.PI * -5 / 8) {
      return v54.TOP_LEFT;
    } else if (v97 >= Math.PI * -5 / 8 && v97 < Math.PI * -3 / 8) {
      return v54.TOP;
    } else {
      return v54.TOP_RIGHT;
    }
  };
  return f24;
}(PIXI.Container);
function v335(p55) {
  return (v335 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p56) {
    return typeof p56;
  } : function (p57) {
    if (p57 && typeof Symbol == "function" && p57.constructor === Symbol && p57 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p57;
    }
  })(p55);
}
var vO3 = {
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
    opciones: "????????????",
    anchoPotenciador: "?????? ???????????",
    auraPotenciador: "????? ???????????",
    anchoComida: "?????? ???",
    brilloComida: "????? ???",
    fondo: "??????? ???",
    laser: "??????????? ?????",
    sectores: "???????",
    colorJuego: "????? ???",
    colorLaser: "????? ??????",
    colorBorde: "????? ????",
    copiar: "?????????",
    fondos: "????",
    fondo0: "?? ?????????????",
    fondo1: "??????",
    fondo2: "?????? 2",
    fondo3: "?????",
    fondo4: "?????? 3",
    skinVisible: "SkinVisible(??? ???????)",
    soundTuto1: "??????????? ????",
    soundTuto2: "??????????? ????",
    soundTuto3: "???? ??? ??????",
    soundTuto4: "???? ??? 10 ?????"
  }
};
const vO4 = {
  isSkinCustom(p58) {
    return typeof p58 === "string" && /[a-zA-Z]/.test(p58);
  },
  testSkinCustom: function (p59) {
    if (vO4.isSkinCustom(p59)) {
      return 34;
    } else {
      return p59;
    }
  },
  testSkinMod: function (p60) {
    return p60 >= 399 && p60 < 999;
  },
  testWear: function (p61) {
    return p61 >= 399 && p61 < 999;
  },
  isNumberValid: function (p62) {
    return p62 !== "" && p62 != null && !isNaN(p62);
  },
  validInput: function (p63) {
    if (!vO4.testSkinMod(p63) && !vO4.isSkinCustom(p63)) {
      return p63;
    }
    try {
      let v98 = $("#inputReplaceSkin").val();
      return encodeURI(vO4.isNumberValid(v98) ? v98 : 35);
    } catch (e19) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
let v99 = Date.now();
const vF5 = function (p64) {
  vO8.idReplaceSkin = vO4.isNumberValid(p64.value) ? p64.value : 35;
  localStorage.setItem("SaveGameXT", JSON.stringify(vO8));
};
var v100 = null;
var v101 = false;
var vLN55 = 55;
(function () {
  var v102;
  try {
    v102 = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (e20) {
    v102 = window;
  }
  return v102;
})().setInterval(f169, 1000);
var vLN1 = 1;
var v103 = true;
let v104 = new Function("return PIXI;")();
let v105 = v104.Texture.from("https://i.imgur.com/0aN5Zek.png");
let v106 = v104.Texture.from("https://i.imgur.com/12MgJyy.png");
let v107 = v104.Texture.from("https://i.imgur.com/DbWbUxD.png");
var vO5 = {
  zoom: "z",
  restart: "r",
  giro: "s",
  wormExplot: "x",
  laserHS: "l",
  sectores: "q",
  background: "c",
  noSkin: "f",
  noAuras: "g"
};
function f26(p65, p66) {
  if (vO5.hasOwnProperty(p65)) {
    vO5[p65] = p66;
  }
}
let vO6 = {
  teamColor: "FFFFFF",
  laserColor: "FFFFFF",
  colorFondo: "0D0400",
  colorBorde: "FF0000",
  hsTextColor: "FFFFFF",
  killTextColor: "FFFFFF",
  minimapBorderColor: "FFFFFF"
};
var f30;
var v109;
var v110;
var v111;
var v112 = null;
var v113;
var v114;
let v115;
var v116;
let v117 = true;
var v118;
var v119;
var v120;
var v121;
var v122;
var v123;
var v124;
var v125;
var v126;
var v127;
var v128;
var v129;
var v130;
var v131;
var v132;
var v133;
var v134;
var v135;
var v136;
var v137;
var v138;
var v139;
var v140;
var v141;
var v142;
var v143;
var v144;
var f29;
v109 = 1;
let vA4 = [];
let v146 = performance.now();
var v147;
var v148;
var v149;
var vA5 = ["https://asserts.wormworld.io/backgrounds/bkgnd0.png", "https://asserts.wormworld.io/backgrounds/bkgnd8.png", "https://asserts.wormworld.io/backgrounds/bkgnd9.png", "https://asserts.wormworld.io/backgrounds/bkgnd10.png", "https://asserts.wormworld.io/backgrounds/bkgnd6.png", "https://asserts.wormworld.io/backgrounds/bkgnd11.png", "https://asserts.wormworld.io/backgrounds/bg_sky_1.png", "https://asserts.wormworld.io/backgrounds/bg_sky_2.png", "https://asserts.wormworld.io/backgrounds/bg_sky_3.png", "https://asserts.wormworld.io/backgrounds/bg_sky_4.png", "https://asserts.wormworld.io/backgrounds/bg_sky_5.png", "https://asserts.wormworld.io/backgrounds/arena01.png", "https://asserts.wormworld.io/backgrounds/arena02.png", "https://asserts.wormworld.io/backgrounds/arena03.png", "https://asserts.wormworld.io/backgrounds/arena04.png"];
let v150 = localStorage.getItem("selectedBackground") ? parseInt(localStorage.getItem("selectedBackground")) : 0;
var vA6 = ["Arial, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "'Courier New', monospace", "'Georgia', serif", "'Times New Roman', serif", "'Comic Sans MS', cursive", "'Impact', sans-serif", "'Lucida Console', monospace", "'Trebuchet MS', sans-serif"];
let v151 = localStorage.getItem("selectedFont") ? parseInt(localStorage.getItem("selectedFont")) : 0;
function f27(p67) {
  if (p67 <= 50) {
    return "#00FF00";
  } else if (p67 <= 80) {
    return "#ADFF2F";
  } else if (p67 <= 120) {
    return "#FFFF00";
  } else if (p67 <= 180) {
    return "#FFA500";
  } else if (p67 <= 250) {
    return "#FF4500";
  } else {
    return "#FF0000";
  }
}
function f28(p68) {
  if (p68 >= 60) {
    return "#00FF00";
  } else if (p68 >= 50) {
    return "#ADFF2F";
  } else if (p68 >= 40) {
    return "#FFFF00";
  } else if (p68 >= 30) {
    return "#FFA500";
  } else if (p68 >= 20) {
    return "#FF4500";
  } else {
    return "#FF0000";
  }
}
window.onwheel = p69 => {
  if (p69.deltaY > 0) {
    f30(Math.max(v109 - parseFloat(vO8.zoomSpeed) * 0.75, 0.5));
  } else {
    f30(Math.min(v109 + parseFloat(vO8.zoomSpeed) * 1.05, 50));
  }
};
function f29() {
  return new (new Function("return RegExp;")())("iPhone|iPad|iPod|Android", "i").test(navigator.userAgent);
}
function f30(p70) {
  v109 = p70;
  var vParseFloat = parseFloat(v109.toFixed(2));
  if (Math.abs(vParseFloat) < 0.01) {
    vParseFloat = 0;
  } else if (Math.abs(vParseFloat - 1) < 0.01) {
    vParseFloat = 1;
  }
  v110.text = vParseFloat + "x";
}
var v152 = localStorage.getItem("inputReplaceSkin");
var v153 = null;
var v154 = false;
window.keyMove = 81;
var vO7 = {
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
var v155 = window.location.href.includes("/es") ? "es" : window.location.href.includes("/uk") ? "uk" : "en";
let v156 = null;
let v157 = null;
let v158 = null;
let vLN06 = 0;
let vLN07 = 0;
const vLN20 = 20;
const v159 = Math.PI * 2;
if (window.coords === undefined) {
  window.coords = {
    playerX: 0,
    playerY: 0
  };
}
var vO8 = {
  FB_UserID: "",
  fps: false,
  ping: false,
  chngBotSkins: false,
  chngPersonsSkins: false,
  minimapTeamcod: false,
  hideYouNameInMinimap: false,
  Incognito: false,
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: false,
  sectores: false,
  visiblePowersAll: false,
  speed_zigzag: true,
  timerSpZg: false,
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
  killFeed: false,
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
  gamePad: vO7.joystick,
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
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let v160 = JSON.parse(saveGameLocal);
  for (let v161 in v160) {
    vO8[v161] = v160[v161];
  }
}
let v162;
vO8.loading = true;
var vO9 = {
  id_user: "",
  nickname: "zworm",
  enemyNameHs: "zworm",
  teamCode: "",
  playerX: 0,
  playerY: 0,
  hs: 0,
  kill: 0,
  message: "",
  teamColor: localStorage.getItem("teamColor") || "0xffffff",
  wssServer: ""
};
const v163 = new WebSocket("wss://zworm.xyz:9800");
const vO10 = {
  players: new Map()
};
let vLN08 = 0;
const vLN50 = 50;
function f31(p71) {
  if (p71 && p71.wssServer === vO9.wssServer) {
    if (p71.id_user && ["gg_107164783301809303612", "gg_107696732696574095850", "gg_110413852592088957484"].includes(p71.id_user)) {
      f69("[Zworm OWNER]", p71.message);
      console.log("Servidor " + p71.id_user + " ha enviado un mensaje: " + p71.message);
    }
    switch (p71.type) {
      case "initialState":
        vO12.initialState(p71.players);
        break;
      case "playerUpdate":
        vO12.playerUpdate(p71);
        break;
      case "hsKillUpdate":
        vO12.hsKillUpdate(p71);
        break;
      case "playerDeath":
        vO12.playerDeath(p71);
        break;
      case "playerDisconnect":
        removePlayer(p71.id);
        break;
      default:
        console.log("Mensaje desconocido:", p71);
    }
  }
}
function f32(p72) {
  return vO14.clientesActivos.find(p73 => p73.client_ID === p72);
}
v163.addEventListener("open", () => console.log("Conectado al servidor WebSocket"));
v163.addEventListener("close", () => console.log("Desconectado del servidor WebSocket"));
v163.addEventListener("message", async p74 => {
  try {
    f31(typeof p74.data === "string" ? JSON.parse(p74.data) : JSON.parse(await p74.data.text()));
  } catch (e21) {
    console.error("Error al procesar el mensaje:", e21);
  }
});
let vA7 = [];
let v164 = false;
function f33() {
  if (!v117) {
    console.log("⏳ Espera antes de enviar otro mensaje...");
    return;
  }
  const v165 = $("#chat-input").val().trim();
  if (!v165) {
    return;
  }
  v117 = false;
  setTimeout(() => v117 = true, 1000);
  const v166 = vO9.nickname.substring(0, 16);
  const vF32 = f32(vO9.id_user);
  const vO11 = {
    type: "chatMessage",
    id_user: vO9.id_user,
    nickname: v166,
    message: v165,
    wssServer: vO9.wssServer,
    color: vF32?.color || "rgba(255, 255, 255, 0.1)",
    image: vF32?.image || "default_icon.png"
  };
  vA7.push(vO11);
  f34();
  f35(v166, v165, vO9.id_user, vO11.color, vO11.image, true);
  $("#chat-input").val("");
}
async function f34() {
  if (!v164 && vA7.length !== 0) {
    for (v164 = true; vA7.length > 0;) {
      const v167 = vA7.shift();
      try {
        v163.send(JSON.stringify(v167));
        await new Promise(p75 => setTimeout(p75, 50));
      } catch (e22) {
        console.error("Error enviando mensaje:", e22);
      }
    }
    v164 = false;
  }
}
function f35(p76, p77, p78, p79, p80, p81 = false) {
  const v168 = p79 || "rgba(255, 255, 255, 0.1)";
  const v169 = p80 ? "<img src=\"" + p80 + "\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">" : "";
  const v170 = "\n        <div class=\"chat-message\" style=\"background: " + v168 + ";\">\n            " + v169 + "\n            <strong id=\"" + p78 + "\" style=\"color: " + (p81 ? "lightblue" : "white") + "\">" + p76 + ":</strong>\n            <span>" + p77 + "</span>\n        </div>\n    ";
  $("#chat-history").append(v170).scrollTop($("#chat-history")[0].scrollHeight);
}
const vO12 = {
  initialState: p82 => {
    p82.forEach(p83 => vO10.players.set(p83.id_user, p83));
    console.log("Estado inicial recibido:", p82);
  },
  playerUpdate: p84 => {
    vO10.players.set(p84.id_user, {
      ...p84
    });
    vF11();
    if (p84.teamCode && p84.teamCode === vO9.teamCode) {
      f71(p84.teamCode, p84.teamColor);
      f70(p84.teamCode, p84.nickname, p84.message);
    }
  },
  hsKillUpdate: p85 => {
    const v171 = vO10.players.get(p85.id_user);
    if (v171) {
      v171.hskill = p85.hskill;
    } else {
      vO10.players.set(p85.id_user, {
        ...p85,
        position: {
          x: 0,
          y: 0
        }
      });
    }
    vF11();
  },
  playerDeath: p86 => {
    vO10.players.delete(p86.id_user);
    console.log("El jugador " + p86.nickname + " ha muerto.");
    vF11();
    f72();
  }
};
Object.assign(window, vO12);
let v172 = null;
let v173 = null;
function f36(p87, p88 = {}) {
  const vO13 = {
    type: p87,
    id_user: vO9.id_user,
    nickname: vO9.nickname,
    enemyNameHs: vO9.enemyNameHs,
    hskill: {
      hs: vO9.hs,
      kill: vO9.kill
    },
    position: {
      x: vO9.playerX,
      y: vO9.playerY
    },
    message: vO9.message,
    teamCode: vO9.teamCode,
    teamColor: vO9.teamColor,
    wssServer: vO9.wssServer,
    ...p88
  };
  if (v163.readyState === WebSocket.OPEN) {
    v163.send(JSON.stringify(vO13));
  }
}
function f37(p89, p90) {
  const v174 = Date.now();
  if (v174 - vLN08 < vLN50) {
    if (v172) {
      clearTimeout(v173);
    }
    v172 = {
      x: p89,
      y: p90
    };
    v173 = setTimeout(() => {
      if (v172) {
        vO9.playerX = v172.x;
        vO9.playerY = v172.y;
        f36("playerUpdate", {
          position: v172
        });
        v172 = null;
        vLN08 = Date.now();
      }
    }, vLN50 - (v174 - vLN08));
    return;
  }
  vO9.playerX = p89;
  vO9.playerY = p90;
  f36("playerUpdate", {
    position: {
      x: p89,
      y: p90
    }
  });
  vLN08 = v174;
}
function f38(p91, p92) {
  f36("playerDeath", {
    hskill: {
      hs: p91,
      kill: p92
    }
  });
}
function f39(p93, p94) {
  f36("hsKillUpdate", {
    hskill: {
      hs: p93,
      kill: p94
    }
  });
}
let vO14 = {
  clientesVencidos: [],
  clientesActivos: []
};
let vO15 = {
  clientsSkinsVencidos: [],
  clientsSkinsActivos: []
};
var v255 = new Date().getTime();
async function f40() {
  await fetch("https://25yt551.github.io/wormt-r/api/clients.php?v=" + v255).then(p95 => p95.json()).then(p96 => {
    console.log(p96);
    if (p96.success) {
      let v176 = p96.Users;
      vO14.clientesActivos = v176.filter(p97 => p97.client_ID);
    } else {
      vO14 = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
async function f41() {
  await fetch("https://zwormextenstion.com/wormExtension/api/skinsActived.php?v=" + v255).then(p98 => p98.json()).then(p99 => {
    console.log(p99);
    if (p99.success) {
      let v177 = p99.Users;
      vO15.clientsSkinsActivos = v177.filter(p100 => p100.client_ID);
    } else {
      vO15 = {
        clientsSkinsVencidos: [],
        clientsSkinsActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
f40();
f41();
let vA8 = [];
async function f42() {
  const v178 = "https://zwormextenstion.com/wormExtension/api/serversTimMap.php?v=" + v255;
  try {
    const v179 = await fetch(v178);
    const v180 = await v179.text();
    const v181 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    const vA9 = [...v180.matchAll(v181)];
    vA8 = vA9.map(p101 => {
      const v182 = p101[1];
      const v183 = v182.match(/<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/);
      if (!v183) {
        return null;
      }
      const v184 = v183[3].replace(/\\\//g, "/");
      const v185 = v183[2];
      const vDecodeUnicode = f65(v183[4].trim());
      const v186 = v182.match(/<img src=\\"(.*?)\\"/);
      const v187 = v186 ? v186[1].replace(/\\\//g, "/") : "";
      return {
        dataCon: v184,
        dataRoom: v185,
        dataType: "false",
        imgSrc: v187,
        serverName: vDecodeUnicode
      };
    }).filter(Boolean);
  } catch (e23) {
    console.error("Error al cargar servidores TimMap:", e23);
  }
}
var vO16 = {};
async function f43() {
  const v188 = "https://zworm.xyz:3305/data?v=" + Date.now();
  try {
    let v189 = await fetch(v188);
    if (!v189.ok) {
      throw new Error("HTTP error! Status: " + v189.status);
    }
    let v190 = await v189.json();
    vO16 = {};
    for (let v191 in v190) {
      const v192 = v190[v191];
      if (!v192.wsUrl) {
        continue;
      }
      const v193 = v192.players || [];
      const v194 = v192.wsUrl;
      if (v193.length > 0) {
        let v195 = v193.reduce((p102, p103) => p103.Score > p102.Score ? p103 : p102, v193[0]);
        let vFormatScore = f45(v195.Score);
        let vGetStatusColor = f46(v195.Score);
        vO16[v194] = {
          ServerName: v195.ServerName,
          Initials: v191,
          Score: vFormatScore,
          StatusColor: vGetStatusColor,
          Avatar: v192.avatar || null,
          Name: v195.Name || "(unknown)",
          TopPlayers: v193.slice(0, 10)
        };
      } else if (v192.wsUrl) {
        vO16[v194] = {
          ServerName: v192.serverName,
          Initials: v191,
          Score: "Vacío",
          StatusColor: "gray",
          Avatar: v192.avatar || "https://i.imgur.com/placeholder.png",
          Name: "(N/A)",
          TopPlayers: []
        };
      }
    }
    console.log("Datos de Top 1 organizados por WSS:", vO16);
  } catch (e24) {
    console.error("Error fetching server data:", e24);
  }
}
let vA10 = [];
async function f44() {
  const v196 = Date.now();
  const v197 = "https://zwormextenstion.com/wormExtension/api/servers/wormworld.php?v=" + v196;
  try {
    const v198 = await fetch(v197);
    const v199 = await v198.json();
    vA10 = v199.map(p104 => ({
      dataCon: p104.dataCon,
      dataRoom: p104.dataRoom,
      serverName: p104.serverName,
      dataType: p104.dataType,
      imgSrc: p104.imgSrc
    }));
    console.log(vA10);
  } catch (e25) {
    console.error("Error al cargar los servidores:", e25);
  }
}
function f45(p105) {
  if (p105 >= 1000000) {
    return (p105 / 1000000).toFixed(1) + "M";
  } else if (p105 >= 1000) {
    return (p105 / 1000).toFixed(1) + "K";
  } else {
    return p105.toString();
  }
}
function f46(p106) {
  if (p106 > 10000000) {
    return "green";
  } else if (p106 > 2000000) {
    return "orange";
  } else {
    return "red";
  }
}
async function f47(p107) {
  await fetch("https://swykz.theoxt.com/api/users/register_update_player.php", {
    method: "POST",
    body: JSON.stringify({
      data: p107
    })
  }).then(p108 => p108.json()).then(p109 => {
    console.log(p109);
  });
}
async function f48(p110) {
  await fetch("https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php", {
    method: "POST",
    body: JSON.stringify({
      code: p110
    })
  }).then(p111 => p111.json()).then(p112 => {
    console.log(p112);
  });
}
function f49(p113) {
  $.ajax({
    url: "https://swykz.theoxt.com/api/streming.php",
    method: "GET",
    dataType: "json",
    success: function (p114) {
      var v200 = p114.allstreamers.streamers.filter(function (p115) {
        return p115.id_game === p113;
      });
      if (v200.length !== 0) {
        var v201 = v200[0];
        $(".mm-logo").attr("src", v201.logo);
        $(".loading-logo").attr("src", v201.logo);
        $(".mm-logo").attr("src", v201.logo);
      } else {
        console.log("No hay streamers online.");
      }
    },
    error: function (p116) {
      console.error("Error al obtener los datos:", p116);
    }
  });
}
async function f50() {
  await Promise.all([f43(), f44(), f42()]);
  console.log("Todo listo");
  f51(vA10, vA8, vO16);
}
function f51(p117, p118, p119) {
  $(".description-text").empty();
  let vLSWormworld = "wormworld";
  const vO17 = {
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
  const vA11 = [{
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
  $(".description-text").append("\n        <div class=\"switchServerSource\" style=\"position: absolute; top: -5px; left: 200px; width: 200px;\">\n            <button id=\"toggleServerSource\" style=\"margin-bottom: 10px; padding: 6px 12px; background: #252535; color: white; border: 1px solid; border-radius: 1px;\">\n                🔄 Switch to TimMap Servers\n            </button>\n        </div>\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ");
  $("#connectButton").click(function () {
    let v202 = $("#optionSelect").val();
    let v203 = $("#numberInput").val();
    if (v202 && v203 !== "") {
      v124 = "wss://" + v202 + ":" + v203 + "/wormy";
      anApp.r.Hd();
      anApp.sa(v124);
      v113.text = "" + v124.replace("wss://", "").replace(".wormate.io", "").replace("/wormy", "");
    } else {
      alert("Por favor, selecciona una opción y escribe un número antes de conectar.");
    }
  });
  const v$ = $("<ul class=\"ui-tabs-nav\"></ul>");
  const v$2 = $("<div class=\"servers-container\"></div>");
  function f52(p120) {
    $(".server-table tbody").empty();
    p120.forEach(function (p121) {
      (function (p122, p123) {
        v205 = p122.dataRoom;
        let v204 = /^\d+[a-z]{2}$/i.test(v205) ? v205.slice(-2).toLowerCase() : /^[A-Z]{2}_\d+$/i.test(v205) ? v205.split("_")[0].toLowerCase() : "otros";
        var v205;
        if (v204 === "ae") {
          v204 = "gb";
        }
        if (!vA11.some(p124 => p124.code === v204)) {
          return;
        }
        let v206 = p122.dataCon?.match(/wss:\/\/([a-z]+)-/i);
        let v207 = v206 ? v206[1] : null;
        let v208 = vO17[v207] ? vO17[v207].toUpperCase() : "Desconocido";
        p122.dataRoom.trim().toLowerCase();
        const v209 = p122.dataCon || p122.wss;
        let v210 = p123[v209] || {
          Score: "???",
          StatusColor: "gray",
          Avatar: "https://i.imgur.com/placeholder.png"
        };
        let v$3 = $("\n            <tr class=\"server-row\" data-wss=\"" + v209 + "\" value=\"" + p122.dataRoom + "\">\n                <td class=\"server-status\" data-score=\"" + v210.Score + "\" data-img=\"" + v210.Avatar + "\">\n                    <span class=\"status-dot\" style=\"background-color: " + v210.StatusColor + ";\"></span>\n                </td>\n                <td class=\"server-name\">" + p122.serverName + "</td>\n                <td class=\"server-region\">" + v208 + "</td>\n                <td class=\"server-top1\" data-score=\"" + v210.Score + "\" data-img=\"" + v210.Avatar + "\">" + v210.Score + "</td>\n                <td><img src=\"" + p122.imgSrc + "\" class=\"streamer-image\"></td>\n                <td><button class=\"btn-check-ports\">📡📶</button></td>\n            </tr>\n        ");
        $(".servers-" + v204 + " tbody").append(v$3);
      })({
        serverName: p121.serverName || p121.name || "???",
        dataCon: p121.dataCon || p121.wss,
        dataRoom: p121.dataRoom || p121.room || "???",
        imgSrc: p121.imgSrc || p121.streamerImg || "https://i.imgur.com/placeholder.png"
      }, p119);
    });
  }
  vA11.forEach(function (p125, p126) {
    v$.append("\n            <li class=\"ui-tabs-tab ui-tab " + (p126 === 0 ? "ui-tab-active" : "") + "\" data-country=\"" + p125.code + "\">\n                <a><span class=\"flag " + p125.code + "\"></span></a>\n            </li>\n        ");
    v$2.append("\n            <div class=\"servers-" + p125.code + "\" style=\"display: " + (p126 === 0 ? "block" : "none") + ";\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th>\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");
  });
  $(".description-text").append(v$, v$2);
  $(".ui-tabs-tab").click(function () {
    var v211 = $(this).data("country");
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v211).fadeIn(200);
  });
  $(document).on("click", "#toggleServerSource", function () {
    vLSWormworld = vLSWormworld === "wormworld" ? "timmap" : "wormworld";
    $(this).text(vLSWormworld === "wormworld" ? "🔄 Switch to TimMap Servers" : "🔄 Switch to WormWorld Servers");
    f52(vLSWormworld === "wormworld" ? p117 : p118);
  });
  f52(p117);
  $(document).on("click", ".server-row", function () {
    let v212 = $(this).attr("value");
    let v213 = $(this).attr("data-wss");
    if (v213) {
      anApp.r.Hd();
      anApp.sa(v213);
      v113.text = v212;
      setTimeout(() => {
        v113.text = v212;
      }, 2000);
    }
  });
  f53();
  f56(".server-top1");
  f56(".server-status");
}
function f53() {
  if (!document.getElementById("avatarPreview")) {
    const v214 = document.createElement("div");
    v214.id = "avatarPreview";
    Object.assign(v214.style, {
      position: "absolute",
      display: "none",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.3s ease",
      zIndex: "9999"
    });
    const v215 = document.createElement("img");
    v215.id = "avatarImage";
    Object.assign(v215.style, {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "2px solid #fff",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      backgroundColor: "#1a1a1a"
    });
    v214.appendChild(v215);
    document.body.appendChild(v214);
  }
  if (!document.getElementById("top10Preview")) {
    const v216 = document.createElement("div");
    v216.id = "top10Preview";
    Object.assign(v216.style, {
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
    const v217 = document.createElement("div");
    v217.id = "top10List";
    v216.appendChild(v217);
    document.body.appendChild(v216);
  }
}
function f54(p127, p128) {
  if (p128) {
    $("#avatarImage").attr("src", p128);
    $("#avatarPreview").css({
      top: p127.pageY + 10 + "px",
      left: p127.pageX + 10 + "px",
      display: "block"
    }).stop(true, true).fadeTo(200, 1);
  }
}
function f55(p129, p130) {
  if (p130.length > 0) {
    let vLSdivStylefontsize14px = "<div style=\"font-size:14px; font-weight:bold; text-align:center; margin-bottom:8px;\">🏆 Top 10 🏆</div><hr style=\"border-color:#444;\">";
    vLSdivStylefontsize14px += p130.map((p131, p132) => {
      const v218 = p132 === 0;
      return "\n                <div style=\"display:flex; justify-content:space-between; margin: 4px 0; " + (v218 ? "font-weight:bold; color:#ffd700;" : "") + "\">\n                    <span>" + (v218 ? "⭐️" : p132 + 1 + ".") + " " + f57(p131.Name) + "</span>\n                    <span>" + f45(p131.Score) + "</span>\n                </div>";
    }).join("");
    $("#top10List").html(vLSdivStylefontsize14px);
    const vLN100 = 100;
    $("#top10Preview").css({
      top: p129.pageY + 10 + vLN100 + 10 + "px",
      left: p129.pageX + 10 + "px",
      display: "block"
    }).stop(true, true).fadeTo(200, 1);
  }
}
function f56(p133) {
  $(document).off("mouseenter", p133).on("mouseenter", p133, function (p134) {
    const v219 = $(this).closest("tr").attr("data-wss");
    if (!v219) {
      return;
    }
    const v220 = vO16[v219];
    if (v220) {
      f54(p134, v220.Avatar);
      f55(p134, v220.TopPlayers || []);
    }
  });
  $(document).off("mousemove", p133).on("mousemove", p133, function (p135) {
    $("#avatarPreview").css({
      top: p135.pageY + 10 + "px",
      left: p135.pageX + 10 + "px"
    });
    $("#top10Preview").css({
      top: p135.pageY + 10 + 100 + 10 + "px",
      left: p135.pageX + -75 + "px"
    });
  });
  $(document).off("mouseleave", p133).on("mouseleave", p133, function () {
    $("#avatarPreview").stop(true, true).fadeTo(300, 0, function () {
      $(this).hide();
    });
    $("#top10Preview").stop(true, true).fadeTo(300, 0, function () {
      $(this).hide();
    });
  });
}
function f57(p136) {
  return p136.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, "").trim();
}
function f58(p137) {
  let vLS = "";
  switch (p137) {
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
      console.warn("Valor no v�lido, se utilizar� una imagen por defecto.");
  }
  return vLS;
}
function f59() {
  clearInterval(v100);
  if (v100 === null) {
    v100 = setInterval(function () {
      var v221 = anApp.s.H.sk;
      let v222 = Math.PI;
      var v223 = v221 + v222 / 360 * 9;
      if (v223 >= v222) {
        v223 = -v221;
      }
      anApp.s.H.sk = v223;
    }, 55);
  }
}
function f60() {
  if (vLN1 >= 40) {
    if (v103) {
      vLN55 += 25;
    } else {
      vLN55 -= 100;
    }
    vLN1 = 1;
  }
}
function f61() {
  if (vLN55 === 55 && vLN1 >= 40) {
    vLN55 += 25;
    vLN1 = 1;
    v103 = true;
  }
  if (vLN55 === 80) {
    f60();
  }
  if (vLN55 === 105) {
    f60();
  }
  if (vLN55 === 130) {
    f60();
  }
  if (vLN55 === 155) {
    f60();
  }
  if (vLN55 === 180) {
    f60();
  }
  if (vLN55 === 205) {
    f60();
  }
  if (vLN55 === 230) {
    f60();
  }
  if (vLN55 === 255) {
    f60();
  }
  if (vLN55 === 280) {
    f60();
  }
  if (vLN55 === 305) {
    f60();
  }
  if (vLN55 === 330) {
    f60();
  }
  if (vLN55 === 355) {
    f60();
  }
  if (vLN55 === 380) {
    f60();
  }
  if (vLN55 === 405) {
    f60();
  }
  if (vLN55 === 430) {
    f60();
  }
  if (vLN55 === 455 && vLN1 >= 40) {
    vLN55 -= 100;
    vLN1 = 1;
    v103 = false;
  }
}
function f62() {
  clearInterval(v100);
  if (v100 === null) {
    let v224 = anApp.s.H.sk;
    let v225 = Math.PI;
    let v226 = v224 + v225 / 360 * 9;
    if (v226 >= v225) {
      v226 = -v224;
    }
    anApp.s.H.sk = v226;
    vLN1 += 1;
    f61();
    if (v101) {
      v100 = setInterval(f62, vLN55);
    }
  }
}
function f63() {
  v101 = true;
  vLN55 = 55;
  vLN1 = 1;
  v103 = true;
  f62();
}
f50();
const v227 = localStorage.getItem("premium") === "true";
const vO18 = {
  visiblePowersAll: false,
  speed_zigzag: true
};
var vO19 = {
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
const vF6 = async function (p138) {
  var v228 = vO14.clientesActivos.find(function (p139) {
    return p139.client_ID === p138.user_data.userId;
  });
  if (v228) {
    console.log("El ID " + p138.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    if (new Date() > new Date(v228.client_DateExpired)) {
      console.log("La fecha de expiraci�n ha vencido.");
      localStorage.setItem("premium", "false");
    } else {
      console.log("La fecha de expiraci�n es v�lida.");
      vF7(v228.client_DateExpired);
      localStorage.setItem("premium", "true");
    }
  } else {
    console.log("El ID generado no coincide con ning�n ID almacenado en la base de datos.");
    localStorage.setItem("premium", "false");
  }
};
function f64() {
  v126.removeChildren();
  v126.clear();
  console.log(vO6.colorFondo);
  if (vO8.backgroundSolid) {
    v126.beginFill("0x" + vO6.colorFondo, 1);
    v126.lineStyle(1, "0x" + vO6.colorBorde, 1);
    v126.drawCircle(0, 0, 500);
    v126.endFill();
  } else if (vO8.sectores) {
    var v229 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var v230 = Math.PI * 2 / 10;
    for (var vLN09 = 0; vLN09 < 5; vLN09++) {
      for (var vLN010 = 0; vLN010 < 10; vLN010++) {
        var v231 = vLN010 * v230;
        var v232 = (vLN010 + 1) * v230;
        var v233 = 500 - (vLN09 + 0.01) * 100;
        var v234 = 0 + Math.cos(v231) * v233;
        var v235 = 0 + Math.sin(v231) * v233;
        v126.beginFill("0x" + vO6.colorFondo, 1);
        v126.lineStyle(0.5, "0x" + vO6.colorBorde, 1);
        v126.moveTo(0, 0);
        v126.lineTo(v234, v235);
        v126.arc(0, 0, v233, v231, v232);
        v126.lineTo(0, 0);
        v126.endFill();
        if (vLN09 < 4) {
          var v236 = v229[vLN09] + (vLN010 + 1);
          if (!v126.getChildByName(v236)) {
            var v237 = new PIXI.TextStyle({
              fontSize: "15px",
              fill: "0x00243E"
            });
            var v238 = new PIXI.Text(v236, v237);
            v238.anchor.set(0.5);
            var v239 = v231 + (v232 - v231) / 2;
            var v240 = v233 - 50;
            var v241 = 0 + Math.cos(v239) * v240;
            var v242 = 0 + Math.sin(v239) * v240;
            v238.position.set(v241, v242);
            v238.name = v236;
            v126.addChild(v238);
          }
        }
      }
    }
  } else {
    v126.removeChildren();
    v126.clear();
    v126.lineStyle(1, 16711680, 1);
    v126.drawCircle(0, 0, 500);
    v126.endFill();
  }
}
function f65(p140) {
  return p140.replace(/\\u[\dA-F]{4}/gi, function (p141) {
    return String.fromCharCode(parseInt(p141.replace(/\\u/, ""), 16));
  }).replace(/\\u[0-9A-F]{2}/g, function (p142) {
    return String.fromCharCode(parseInt(p142.replace(/\\u/, ""), 16));
  });
}
const vF7 = async function (p143) {
  var v$4 = $("div[category='theme']");
  f81(v$4[1], "gameColorGroup", "GAME", "colorFondo", vO6.colorFondo);
  f81(v$4[1], "borderColorGroup", "BORDE GAME", "colorBorde", vO6.colorBorde);
  f81(v$4[1], "laserColorGroup", "LASER", "laserColor", vO6.laserColor);
  f81(v$4[1], "hsTextColorGroup", "HS TEXT", "hsTextColor", vO6.hsTextColor);
  f81(v$4[1], "killTextColorGroup", "KILL TEXT", "killTextColor", vO6.killTextColor);
  f81(v$4[1], "minimapBorderColorGroup", "MINIMAP BORDER", "minimapBorderColor", vO6.minimapBorderColor);
  vO18.visiblePowersAll = false;
  vO18.speed_zigzag = true;
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $("#user_config").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("position", "absolute").css("display", "block");
    v262 = false;
    f67();
  });
  let v243;
  let v244 = localStorage.getItem("showTeamList");
  if (v244 === "true") {
    v243 = true;
    vO8.showTeamList = true;
  } else if (v244 === "false") {
    v243 = false;
    vO8.showTeamList = false;
  } else {
    v243 = vO8.showTeamList;
  }
  let v245;
  let v246 = localStorage.getItem("showAnimationHeadshot");
  if (v246 === "true") {
    v245 = true;
    vO8.animationHeadshot = true;
  } else if (v246 === "false") {
    v245 = false;
    vO8.animationHeadshot = false;
  } else {
    v245 = vO8.animationHeadshot;
  }
  $("#settings-backgroundSolid-switch").prop("checked", vO19.backgroundSolid);
  $("#settings-backgroundSolid-switch").on("click", function () {
    if (this.checked) {
      vO19.backgroundSolid = true;
      f64();
    } else {
      vO19.backgroundSolid = false;
      f64();
    }
  });
  $("#showAnimationHeadshot").on("change", function () {
    vO8.animationHeadshot = $(this).is(":checked");
    localStorage.setItem("showAnimationHeadshot", vO8.animationHeadshot);
    console.log("Mostrar lista de amigos:", vO8.animationHeadshot);
  });
  $("#showTeamList").on("change", function () {
    vO8.showTeamList = $(this).is(":checked");
    localStorage.setItem("showTeamList", vO8.showTeamList);
    console.log("Mostrar lista de amigos:", vO8.showTeamList);
  });
  $("#clossed_Setings").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    v262 = true;
    f67();
  });
  let v$5 = $("<div class=\"cursor-menu\"></div>");
  let v$6 = $("<div class=\"icon-selector\"></div>");
  for (let vLN12 = 1; vLN12 < 42; vLN12++) {
    const v247 = "https://deltav4.gitlab.io/v7/assets/cursors/cursor_" + vLN12.toString().padStart(2, "0") + ".cur";
    const v248 = vLN12 === 1 ? "active" : "";
    const v249 = $("<img>").attr({
      src: v247,
      "data-cursor": v247,
      alt: "Cursor " + vLN12
    });
    const v250 = $("<div>").addClass("cursor-box icon-selector__item").addClass(v248).append(v249);
    v$6.append(v250);
  }
  v$5.append(v$6);
  $(".options-list.ps div[category=\"cursor\"]").append(v$5);
  $("#background-canvas").after("<div id=\"firefly-container\"></div>");
  $("#firefly-container");
  for (let vLN011 = 0; vLN011 < 20; vLN011++) {
    $("<div>").addClass("firefly").css({
      left: Math.random() * window.innerWidth + "px",
      top: Math.random() * window.innerHeight + "px",
      animationDuration: 2 + Math.random() + "s, " + (5 + Math.random() * 10) + "s"
    });
  }
  $(".profile-info").prepend("\n        <div class=\"premium-badge\">\n            ⭐ Premium ⭐ <br> \n            Expire: <span id=\"premium-expiration\">" + p143 + "</span>\n        </div>\n    ");
  $(".hotkey-container").append("\n\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Zoom</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"zoom-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Replay</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"restart-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Explote</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"wormExplot-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">LaserHS</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Sectors</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"sectores-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Background</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"background-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Giro</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"giro-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Skins</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noSkin-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Auras</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noAuras-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        ");
  $("#zoom-key").val(vO5.zoom);
  $("#restart-key").val(vO5.restart);
  $("#laserHSkey-key").val(vO5.laserHS);
  $("#wormExplot-key").val(vO5.wormExplot);
  $("#giro-key").val(vO5.giro);
  $("#noSkin-key").val(vO5.noSkin);
  $("#noAuras-key").val(vO5.noAuras);
  $("#sectores-key").val(vO5.sectores);
  $("#background-key").val(vO5.background);
  $("#hotkeys-icon").on("click", function () {
    $("#hotkeys-icon").addClass("active");
    $("#user-icon").removeClass("active");
    $("#hotkeys-section").toggle();
    $("#user-section").hide();
  });
  $(".key-input").keydown(function (p144) {
    p144.stopPropagation();
  });
  $(".key-input").keypress(function (p145) {
    p145.preventDefault();
    var v251 = p145.key.toLowerCase();
    $(this).val(v251);
    switch ($(this).attr("id")) {
      case "zoom-key":
        f26("zoom", v251);
        break;
      case "restart-key":
        f26("restart", v251);
        break;
      case "wormExplot-key":
        f26("wormExplot", v251);
        break;
      case "laserHSkey-key":
        f26("laserHS", v251);
        break;
      case "giro-key":
        f26("giro", v251);
        break;
      case "noSkin-key":
        f26("noSkin", v251);
        break;
      case "noAuras-key":
        f26("noAuras", v251);
        break;
      case "sectores-key":
        f26("sectores", v251);
        break;
      case "background-key":
        f26("background", v251);
    }
    $(this).blur();
  });
  $("#user-section").append(v$6);
  $(".cursor-box").on("click", function () {
    var v252 = $(this).find("img").attr("src");
    $("body, button, input, a, textarea, select, div, span, p").css({
      cursor: "url(" + v252 + "), auto"
    });
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
  });
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>EXP: " + p143 + "</span>");
  $("#sound-hs").val("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  $("#sound-10hs").val("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  zw_hssound = new Audio($("#sound-hs").val());
  zw_laughsound = new Audio($("#sound-10hs").val());
  $("#sound-hs").on("input", function () {
    zw_hssound.src = $(this).val();
  });
  $("#sound-10hs").on("input", function () {
    zw_laughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\" id=\"laser\"> " + vO3[v155].laser + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-sectores-switch\"><span class=\"names_settings\" id=\"sectores\"> " + vO3[v155].sectores + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-notAbilityAll-switch\"><span class=\"names_settings\"> : Show All Power-Ups</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\"><span class=\"names_settings\"> : Show Speed&Zigzag</span></div><div id=\"display_color\"><div class=\"container\"><input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\"><span class=\"names_settings\"  id=\"colorJuego\" > " + vO3[v155].colorJuego + " </span></div><div class=\"container\"><input id=\"color_palet\" type=\"color\" value=\"#00243E\"><span class=\"names_settings\" id=\"colorLaser\"> " + vO3[v155].colorLaser + " </span></div><div class=\"container\"><input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\"><span class=\"names_settings\" id=\"colorBorde\"> " + vO3[v155].colorBorde + "</span></div>");
  const vO20 = {
    color_paletRGB: p146 => vO19.colorFondo = p146,
    color_palet: p147 => vO19.laserColor = p147,
    color_palet2: p148 => vO19.colorBorde = p148
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    const v253 = $(this).attr("id");
    const v254 = $(this).val().replace("#", "");
    f64();
    console.log("Recibiendo el color reemplazado para " + v253 + ": " + v254);
    if (vO20[v253]) {
      vO20[v253](v254);
    }
    f64();
  });
  vO18.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop("checked", vO18.visiblePowersAll);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this.checked) {
      vO18.visiblePowersAll = true;
    } else {
      vO18.visiblePowersAll = false;
    }
  });
  vO18.speed_zigzag = true;
  $("#settings-Speed_ZigZag-switch").prop("checked", vO18.speed_zigzag);
  $("#settings-Speed_ZigZag-switch").on("click", function () {
    if (this.checked) {
      vO18.speed_zigzag = true;
    } else {
      vO18.speed_zigzag = false;
    }
  });
  $("#settings-laserHS-switch").prop("checked", vO19.laserHS);
  $("#settings-laserHS-switch").on("click", function () {
    if (this.checked) {
      vO19.laserHS = true;
    } else {
      vO19.laserHS = false;
    }
  });
  $("#settings-interactive-switch").prop("checked", vO19.interactive);
  $("#settings-interactive-switch").on("click", function () {
    if (this.checked) {
      v132.interactive = false;
    }
  });
  $("#settings-sectores-switch").prop("checked", vO19.sectores);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      vO19.sectores = true;
      f64();
    } else {
      vO19.sectores = false;
      f64();
    }
  });
};
var v255 = new Date().getTime();
var v256 = "https://25yt551.github.io/worm2/css/style2.css?v=" + v255;
var v257 = false;
async function f66(p149) {
  if (v257) {
    console.log("unlockSkinsPrivate ya fue ejecutada anteriormente.");
  } else {
    v257 = true;
    var v258 = p149.u.si.userId;
    var v259 = vO15.clientsSkinsActivos.find(p150 => p150.client_ID === v258);
    if (v259 && v259.Client_VisibleSkinPrivate) {
      console.log(v259);
      if (new Date() > new Date(v259.client_DateExpired)) {
        console.log("La fecha de skins expiración ha vencido.");
      } else {
        console.log("La fecha de skins expiración es válida.");
        let v260 = Array.isArray(v259.Client_VisibleSkinPrivate) ? v259.Client_VisibleSkinPrivate : [v259.Client_VisibleSkinPrivate];
        v260.forEach(p151 => {
          let v261 = vO8.idSkin.find(p152 => p152.id === p151);
          if (v261) {
            v261.nonbuyable = false;
          }
        });
        console.log("Skins privadas desbloqueadas para el usuario " + v258 + ":", v260);
      }
    } else {
      console.log("No se encontraron skins privadas para el usuario " + v258 + ".");
    }
  }
}
let v262 = false;
function f67() {
  if (v262) {
    v131.texture = v106;
    v131.alpha = 0.25;
    console.log("Giro deactivated");
    v101 = false;
    vLN55 = 55;
    vLN1 = 1;
    v103 = true;
    clearInterval(v100);
    v100 = null;
  } else {
    v131.alpha = 0.75;
    console.log("Giro activated");
    f59();
    v101 = true;
  }
  v262 = !v262;
}
const vF8 = async function (p153) {
  f83();
  f49(p153.u.si.userId);
  vO9.id_user = p153.u.si.userId;
  f80(v256);
  f80("https://fonts.googleapis.com/icon?family=Material+Icons");
  console.log(p153, p153.u.si.userId);
  zw_hssound = new Audio("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  zw_laughsound = new Audio("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  (v132 = new v104.Sprite()).texture = v107;
  v132.interactive = true;
  v132.buttonMode = true;
  v132.x = -45;
  v132.y = 10;
  v132.alpha = 0.25;
  v132.on("mouseup", function () {
    (function () {
      v132.interactive = false;
      var vLN012 = 0;
      var vSetInterval = setInterval(function () {
        var v263 = 1 - vLN012 * 0.0075;
        v132.alpha = v263;
        if (++vLN012 > 100) {
          clearInterval(vSetInterval);
          v132.alpha = 0.25;
          v132.interactive = true;
        }
      }, 100);
    })();
    const v264 = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(v264);
    setTimeout(() => {
      let vV124 = v124;
      $(".overlay-2").css("position", "static");
      if (vV124) {
        anApp.r.Hd();
        anApp.sa(vV124);
      }
    }, 1000);
  });
  (v131 = new v104.Sprite()).texture = v106;
  v131.interactive = true;
  v131.buttonMode = true;
  v131.x = -10;
  v131.y = 10;
  v131.alpha = 0.25;
  v131.on("mouseup", function () {
    f67();
  });
  if (f29()) {
    v131.x = -90;
    v132.x = -135;
    v132.y = 10;
    let v265 = new Function("return PIXI;")();
    let v266 = v265.Texture.from("https://i.imgur.com/kGjR9yf.png");
    let v267 = v265.Texture.from("https://i.imgur.com/4JZUa1u.png");
    (v128 = new v265.Sprite()).texture = v266;
    v128.interactive = true;
    v128.buttonMode = true;
    v128.x = -10;
    v128.y = 10;
    v128.alpha = 0.25;
    v128.on("mouseup", function () {
      f30(Math.min(v109 + 0.25, 50));
    });
    (v129 = new v265.Sprite()).texture = v267;
    v129.interactive = true;
    v129.buttonMode = true;
    v129.x = -43;
    v129.y = 10;
    v129.alpha = 0.25;
    v129.on("mouseup", function () {
      f30(Math.max(v109 - 0.25, 0.25));
    });
  }
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  function f68() {
    $("#chatInput").css("display", "none").val("");
    $("#game-canvas").focus();
  }
  $("#chatInput").on("keydown", function (p154) {
    if (p154.key === "Enter") {
      (function () {
        let v268 = $("#chatInput").val();
        if ($.trim(v268) !== "") {
          console.log("Mensaje enviado:", v268);
          vO9.message = v268;
          setTimeout(() => {
            vO9.message = "";
          }, 1500);
        }
      })();
      f68();
    } else if (p154.key === "Escape") {
      f68();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $("#mm-settings").html("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders").html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-zw-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $("#user-icon").on("click", function () {
    $("#user-icon").addClass("active");
    $("#hotkeys-icon").removeClass("active");
    $("#user-section").toggle();
    $("#hotkeys-section").hide();
  });
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $("#game-view").append("<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>");
  $("#game-view").append("<span id=\"ping\"></span>");
  $("#aqnvgcpz05orkobh").replaceWith("\n    <div id=\"premium-panel\" style=\"box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px; background-color: transparent; border-radius: 8px; padding: 20px; text-align: center;\">\n        <h2 style=\"color: #fff;\">Get the Premium Version!</h2>\n        <p style=\"color: #f9f9f9;\">Access exclusive benefits by purchasing the premium version. Dedicated support, more options, and much more.</p>\n        <p style=\"color: #fff; font-weight: bold;\">Advertise with more visibility and reach more customers!</p>\n\n        <!-- Button to redirect to Discord -->\n        <button id=\"buy-premium\" style=\"background-color: #7289da; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;\">\n            Buy on Discord\n        </button>\n    </div>\n        ");
  $("#buy-premium").on("click", function () {
    window.open("https://discord.gg/sJ5R95Rc6Z", "_blank");
  });
  $("#social-buttons").replaceWith("");
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://i.imgur.com/xp9kZ7y.png");
  $(".loading-logo").attr("src", "https://i.imgur.com/xp9kZ7y.png");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #zwplayagain, #final-replay").click(function () {
    $(".overlay-2").css("position", "static");
  });
  $("#mm-zw-settings").click(function () {
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
  const vA12 = ["#mm-player-info", "#mm-skin-canv", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-coins-box"];
  $(vA12.join(", ")).click(function () {
    $("#settings-menu").css({
      display: "none",
      opacity: "0"
    });
  });
  ["#mm-action-play", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-zw-settings"].forEach(function (p155) {
    $(p155).hover(function () {
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
  $("#zwplayagain").prepend("<i class=\"material-icons\">replay</i>");
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
        for (a = 0; a < vA10.length; a++) {
          var v269 = vA10[a].dataCon;
          var v270 = vA10[a].dataRoom;
          var v271 = vA10[a].serverName;
          "https://xd.com";
          var v272 = vA10[a].imgSrc;
          let v273 = "<a>\n                        <img src=\"" + v272 + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let v274 = v270.match(/[a-zA-Z]+/g).join("");
          let v275 = document.createElement("p");
          v275.value = v269;
          v275.innerHTML = v271;
          let v276 = document.createElement("div");
          v276.setAttribute("class", "conteiner");
          if (v274 == "br") {
            $(".servers-peru").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "mx") {
            $(".servers-mexico").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "us") {
            $(".servers-eeuu").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "ca") {
            $(".servers-canada").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "de") {
            $(".servers-germania").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "fr") {
            $(".servers-francia").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "sg") {
            $(".servers-singapur").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "jp") {
            $(".servers-japon").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "au") {
            $(".servers-australia").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          } else if (v274 == "ae") {
            $(".servers-granbretana").append(v276);
            $(v276).append(v275);
            $(v275).append(v273);
          }
          $(v275).attr("class", "selectSala");
          $(v275).attr("value", v270);
          $(v275).attr("data-con", v269);
          $(v275).click(function () {
            $(".overlay-2").css("position", "static");
            let v277 = $(this).attr("data-con");
            console.log(v277);
            if (v277) {
              p153.r.Hd();
              p153.sa(v277);
              v113.text = $(this).text();
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
        for (a = 0; a < vA8.length; a++) {
          var v278 = vA8[a].dataCon;
          var v279 = vA8[a].dataRoom;
          var v280 = vA8[a].serverName;
          var v281 = vA8[a].imgSrc;
          vA8[a].secondHref;
          let v282 = v279.match(/[a-zA-Z]+/g).join("");
          let v283 = document.createElement("p");
          v283.value = v278;
          let v284 = "<a>\n                        <img src=\"" + v281 + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let v285 = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (v285.test(v284)) {
            v284 = v284.replace(v285, "");
          }
          let vLSspanStylebackgroundc = "<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 4px;float: right;\"></span>";
          let v286 = /<span style=\\"(.*?)"><\\\/span>/;
          if (v286.test(v280)) {
            v280 = v280.replace(v286, vLSspanStylebackgroundc);
          }
          v283.innerHTML = v280;
          let v287 = document.createElement("div");
          v287.setAttribute("class", "conteiner");
          if (v282 == "BR") {
            $(".servers-peru").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "MX") {
            $(".servers-mexico").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "US") {
            $(".servers-eeuu").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "CA") {
            $(".servers-canada").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "DE") {
            $(".servers-germania").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "FR") {
            $(".servers-francia").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "SG") {
            $(".servers-singapur").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "JP") {
            $(".servers-japon").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "AU") {
            $(".servers-australia").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          } else if (v282 == "AE") {
            $(".servers-granbretana").append(v287);
            $(v287).append(v283);
            $(v283).append(v284);
          }
          $(v283).attr("class", "selectSala");
          $(v283).attr("value", v279);
          $(v283).attr("data-con", v278);
          $(v283).click(function () {
            $(".overlay-2").css("position", "static");
            let v288 = $(this).attr("data-con");
            let v289 = $(this).attr("value");
            console.log(v289);
            if (v288) {
              p153.r.Hd();
              p153.sa(v288);
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
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
timeFontColors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
timeFontColors2 = ["#51a913", "#f97a1d", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let vLN013 = 0; vLN013 < timeFontColors.length; vLN013++) {
  let v290 = timeFontColors[vLN013];
  vO21.fontStyle["tfc" + vLN013] = new PIXI.TextStyle({
    align: "center",
    fill: v290,
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
const vA13 = [40, 40, 40, 120, 40, 20, 40];
for (let vLN014 = 0; vLN014 < vA13.length; vLN014++) {
  let v291 = "clock_ad" + vLN014;
  vO21.ptc[v291] = new PIXI.Text(vA13[vLN014], vO21.fontStyle["tfc" + vLN014]);
  vO21.ptc[v291].y = 61;
}
vO21.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
vO21.containerImgTest = new PIXI.Sprite(vO21.imgTest_desactived);
vO21.containerImgTest.anchor.set(0.5);
vO21.containerImgTest.x = window.innerWidth / 2;
vO21.containerImgTest.y = window.innerHeight / 2;
vO21.containerImgTest.alpha = 0.3;
vO21.pointsContainer = new PIXI.Container();
const vF9 = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    console.error("Error: window.coords no est� definido correctamente o no contiene playerX y playerY.");
    return;
  }
  let vLSTeam_2 = "team_2";
  if (!vO21[vLSTeam_2]) {
    vO21[vLSTeam_2] = new PIXI.Graphics();
    vO21[vLSTeam_2].zIndex = 2;
    vO21[vLSTeam_2].alpha = 0.9;
    vO21[vLSTeam_2].beginFill(16711680);
    vO21[vLSTeam_2].drawCircle(0, 0, 2.4);
    vO21[vLSTeam_2].endFill();
    vO21[vLSTeam_2].lineStyle(1, "black");
    vO21[vLSTeam_2].drawCircle(0, 0, 2.4);
    vO21[vLSTeam_2].endFill();
  }
  vO21[vLSTeam_2].x = window.coords.playerX;
  vO21[vLSTeam_2].y = window.coords.playerY;
  if (vO21.pointsContainer) {
    vO21.pointsContainer.addChild(vO21[vLSTeam_2]);
  } else {
    console.error("Error: ctx.pointsContainer no est� definido.");
  }
};
vO21.teamsContainer = new PIXI.Container();
function f69(p156, p157) {
  if (p157.trim() !== "") {
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
    toastr.success(p157, p156, {
      iconClass: "toast-info"
    });
  }
}
function f70(p158, p159, p160) {
  if (p160.trim() !== "") {
    vO10.players.forEach((p161, p162) => {
      if (p161.teamCode === p158 && p161.nickname !== p159) {
        let v292 = p161.nickname.length > 12 ? p161.nickname.slice(0, 12) : p161.nickname;
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
        toastr.success("" + p160, "" + p159, {
          iconClass: "toast-info"
        });
        console.log("Mensaje enviado por " + p159 + " recibido por el jugador " + v292 + " (" + p162 + ") del equipo " + p158);
      }
    });
  }
}
function f71(p163, p164) {
  f74(vO10, p163);
  vO10.players.forEach((p165, p166) => {
    if (p165.teamCode === p163) {
      let v293 = p165.teamColor || p164;
      let v294 = p165.nickname.replace(/\u3164/g, "").replace(/ZW_\d+$/, "").trim();
      if (!vO21[p166]) {
        vO21[p166] = new PIXI.Graphics();
        vO21[p166].zIndex = 2;
        vO21[p166].alpha = 0.9;
        vO21.teamsContainer.addChild(vO21[p166]);
        let v295 = new PIXI.Text(v294, {
          fontFamily: vA6[v151],
          fontSize: 14,
          fill: v293,
          stroke: 0,
          strokeThickness: 2
        });
        v295.anchor.set(0.5);
        v295.visible = false;
        v295.y = -15;
        vO21[p166].addChild(v295);
        vO21[p166].hitArea = new PIXI.Circle(0, 0, 2.4);
        vO21[p166].interactive = true;
        vO21[p166].buttonMode = true;
        vO21[p166].on("mouseover", () => {
          v295.visible = true;
        });
        vO21[p166].on("mouseout", () => {
          v295.visible = false;
        });
        vO21[p166].on("mouseup", () => {
          v295.visible = !v295.visible;
        });
        vO21[p166].on("touchend", () => {
          v295.visible = !v295.visible;
        });
        vO21[p166].nameText = v295;
      }
      vO21[p166].clear();
      vO21[p166].beginFill(v293);
      vO21[p166].drawCircle(0, 0, 2.4);
      vO21[p166].endFill();
      vO21[p166].lineStyle(1, 0);
      vO21[p166].drawCircle(0, 0, 2.4);
      vO21[p166].endFill();
      vO21[p166].x = p165.position.x;
      vO21[p166].y = p165.position.y;
      vO21[p166].nameText.y = -15;
      if (vO21[p166].nameText.text !== v294) {
        vO21[p166].nameText.text = v294;
      }
      if (vO21[p166].nameText.style.fill !== v293) {
        vO21[p166].nameText.style.fill = v293;
      }
    }
  });
}
function f72() {
  if (vO21.teamsContainer) {
    Object.keys(vO21).forEach(p167 => {
      if (vO21[p167] instanceof PIXI.Graphics && vO21[p167].parent === vO21.teamsContainer) {
        vO21.teamsContainer.removeChild(vO21[p167]);
        vO21[p167].destroy(true);
        delete vO21[p167];
      }
      if (vO21[p167 + "_text"] && vO21[p167 + "_text"].parent === vO21.teamsContainer) {
        vO21.teamsContainer.removeChild(vO21[p167 + "_text"]);
        vO21[p167 + "_text"].destroy(true);
        delete vO21[p167 + "_text"];
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
let vA14 = [];
for (let vLN015 = 0; vLN015 < 5; vLN015++) {
  let v296 = vLN015 + 1;
  let v297 = new PIXI.Text(v296 + ".", vO21.fontStyle.blanco);
  v297.x = 0;
  v297.y = v296 * 13;
  vO21.containerHsRec2.addChild(v297);
  let v298 = new PIXI.Text("--", {
    fill: "#f8d968",
    fontSize: 12
  });
  v298.x = 15;
  v298.y = v296 * 13;
  vO21.containerHsRec2.addChild(v298);
  vA14.push(v298);
}
function f73(p168) {
  const v299 = p168.players;
  const v300 = Array.from(v299.values()).filter(p169 => p169.teamCode === vO9.teamCode);
  vA14.forEach((p170, p171) => {
    if (v300[p171]) {
      let v301 = v300[p171];
      p170.text = v301.nickname.substring(0, 20);
      p170.style.fill = v301.teamColor;
    } else {
      p170.text = "--";
      p170.style.fill = "#f8d968";
    }
  });
}
vO21.containerHsRec2.addChild(vO21.titleRec2);
v120 = new PIXI.Container();
v120.x = 80;
v120.y = 185;
const v302 = new PIXI.Text("TEAM LIST", {
  fontFamily: vA6[v151],
  fontSize: 12,
  fill: 16308584,
  fontWeight: "bold"
});
v302.x = 10;
v302.y = -5;
v120.addChild(v302);
const v303 = new PIXI.Graphics();
function f74(p172, p173) {
  for (let v304 = v120.children.length - 1; v304 >= 0; v304--) {
    let v305 = v120.children[v304];
    if (v305 !== v302 && v305 !== v303) {
      v120.removeChild(v305);
    }
  }
  let vLN016 = 0;
  p172.players.forEach((p174, p175) => {
    if (p174.teamCode === p173 && p174.wssCode === vO9.wssCode) {
      let vCleanNickname = vF10(p174.nickname);
      let v306 = /[\u0600-\u06FF]/.test(vCleanNickname);
      const v307 = new PIXI.Text(vLN016 + 1 + ". " + vCleanNickname, {
        fontFamily: vA6[v151],
        fontSize: 12,
        fill: p174.teamColor || 16777215,
        stroke: 0,
        strokeThickness: 2,
        align: v306 ? "right" : "left"
      });
      v307.x = -50;
      v307.y = 20 + vLN016 * 15;
      v120.addChild(v307);
      vLN016++;
      if (vLN016 >= 10) {
        return;
      }
    }
  });
}
v303.lineStyle(2, 16777215, 1);
v303.moveTo(-15, 15);
v303.lineTo(80, 15);
v303.x = 5;
v120.addChild(v303);
v118 = new PIXI.Container();
v118.x = -55;
v118.y = 115;
const v308 = new PIXI.Text("Top HS (👑)", {
  fontFamily: vA6[v151],
  fontSize: 12,
  fill: 16766720,
  fontWeight: "bold"
});
v308.x = 10;
v308.y = -5;
v118.addChild(v308);
const v309 = new PIXI.Graphics();
v309.lineStyle(2, 16777215, 1);
v309.moveTo(0, 15);
v309.lineTo(80, 15);
v309.x = 5;
v118.addChild(v309);
v119 = new PIXI.Container();
v119.y = 25;
const v310 = new PIXI.Text("Top 3 HS (👑)", {
  fontFamily: vA6[v151],
  fontSize: 12,
  fill: 16766720,
  fontWeight: "bold"
});
v310.x = 10;
v310.y = -5;
v119.addChild(v310);
const v311 = new PIXI.Graphics();
v311.lineStyle(2, 16777215, 1);
v311.moveTo(0, 15);
v311.lineTo(80, 15);
v311.x = 5;
v119.addChild(v311);
var vA15 = [];
const vF10 = p176 => {
  return p176.replace(/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, "").trim();
};
const vF11 = function () {
  const v312 = Array.from(vO10.players.values()).filter(p177 => p177.hskill.hs > 0 && p177.nickname.trim() !== "");
  if (!v312.some(p178 => p178.nickname === vO9.nickname) && vO9.hs > 0) {
    v312.push({
      nickname: vO9.nickname,
      hskill: {
        hs: vO9.hs
      },
      teamColor: vO9.teamColor
    });
  }
  if (v312.length === 0) {
    return;
  }
  v312.sort((p179, p180) => p180.hskill.hs - p179.hskill.hs);
  for (let v313 = v118.children.length - 1; v313 >= 0; v313--) {
    let v314 = v118.children[v313];
    if (v314 !== v308 && v314 !== v309) {
      v118.removeChild(v314);
    }
  }
  vA15.length = 0;
  for (let vLN017 = 0; vLN017 < Math.min(v312.length, 6); vLN017++) {
    let v315 = v312[vLN017];
    let vVF10 = vF10(v315.nickname);
    let v316 = /[\u0600-\u06FF]/.test(vVF10);
    let v317 = vVF10.padEnd(15, " ");
    let v318 = ("☠️ " + v315.hskill.hs).padStart(6, " ");
    let v319 = new PIXI.Text(vLN017 + 1 + ".  " + v317 + " - " + v318 + " ☠️", {
      fontFamily: vA6[v151],
      fontSize: 10,
      fill: v315.teamColor || 16777215,
      stroke: 0,
      strokeThickness: 2,
      align: v316 ? "right" : "left",
      wordWrap: true,
      wordWrapWidth: 200,
      breakWords: true
    });
    v319.x = 10;
    v319.y = 20 + vLN017 * 15;
    vA15.push(v319);
    v118.addChild(v319);
  }
  v119.y = 30 + vA15.length * 15;
};
const vA16 = [16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215];
const vO22 = {
  align: "center",
  fontSize: 12,
  lineJoin: "round",
  strokeThickness: 1,
  whiteSpace: "normal",
  wordWrap: true
};
vO21.titleRec3 = new PIXI.Text("----------☠️---------", vO21.fontStyle.blanco);
vO21.titleRec3.y = -5;
vO21.titleRec3.x = 10;
vO21.containerHsRec3 = new PIXI.Container();
vO21.containerHsRec3.x = -55;
vO21.containerHsRec3.y = 280;
for (let vLN018 = 0; vLN018 < 8; vLN018++) {
  let v320 = vLN018 + 1;
  let v321 = new PIXI.Text(" ", vO21.fontStyle.blanco);
  v321.x = vLN018 >= 9 ? -5 : 0;
  v321.y = v320 * 13;
  vO21.containerHsRec3.addChild(v321);
  let v322 = new PIXI.Text("--", {
    fill: "#00FF00",
    ...vO22
  });
  v322.x = vLN018 >= 9 ? -5 : 0;
  v322.y = v320 * 13;
  vO21.containerHsRec3.addChild(v322);
  let v323 = new PIXI.Text("?", {
    fill: vA16[vLN018 % vA16.length],
    ...vO22
  });
  v323.x = 70;
  v323.y = v320 * 13;
  let v324 = new PIXI.Text("--", {
    fill: "#FF0000",
    ...vO22
  });
  v324.x = 125;
  v324.y = v320 * 13;
  vO21.containerHsRec3.addChild(v324);
}
vO21.containerHsRec3.addChild(vO21.titleRec3);
function f75(p181) {
  if (p181 && p181.position) {
    let vLN16773120 = 16773120;
    if (!vO21.top1Point) {
      vO21.top1Point = new PIXI.Graphics();
      vO21.top1Point.zIndex = 2;
      vO21.top1Point.alpha = 0.9;
      if (vO21.teamsContainer) {
        vO21.teamsContainer.addChild(vO21.top1Point);
      } else {
        console.error("Error: ctx.teamsContainer is not defined.");
      }
    }
    vO21.top1Point.clear();
    vO21.top1Point.beginFill(vLN16773120);
    vO21.top1Point.drawCircle(0, 0, 2.4);
    vO21.top1Point.endFill();
    vO21.top1Point.lineStyle(1, 16711680);
    vO21.top1Point.drawCircle(0, 0, 2.4);
    vO21.top1Point.endFill();
    vO21.top1Point.shadow = true;
    vO21.top1Point.shadowColor = 16711680;
    vO21.top1Point.shadowBlur = 15;
    vO21.top1Point.shadowOffsetX = 0;
    vO21.top1Point.shadowOffsetY = 0;
    const v325 = new PIXI.Text("👑", {
      fontFamily: "Arial",
      fontSize: 10,
      fill: 16777215,
      align: "center"
    });
    v325.x = -v325.width / 2;
    v325.y = -v325.height / 2;
    vO21.top1Point.addChild(v325);
    vO21.top1Point.x = p181.position.x;
    vO21.top1Point.y = p181.position.y;
    console.log("Top 1 actualizado:", p181.nombre);
  } else {
    console.error("No hay jugadores disponibles para actualizar el top 1.");
  }
}
const vF12 = function (p182) {
  for (let vLN019 = 0; vLN019 < 8; vLN019++) {
    if (vO21.containerHsRec3.children[vLN019 * 3 + 1]) {
      vO21.containerHsRec3.children[vLN019 * 3 + 1].text = p182[vLN019].nombre2;
    }
    if (vO21.containerHsRec3.children[vLN019 * 3 + 3]) {
      vO21.containerHsRec3.children[vLN019 * 3 + 2].text = p182[vLN019].enemyNameHs;
    }
  }
};
function f76(p183, p184, p185) {
  let v326 = vA13[p184] - parseInt((p185 == 0.99 ? 1 : p185) * vA13[p184] / 1);
  let v327 = "clock_ad" + p184;
  p183.Tf[p184].addChild(vO21.ptc[v327]);
  if (vO21.ptc[v327]) {
    vO21.ptc[v327].x = v326 >= 100 ? 11 : v326 >= 10 ? 18 : 26;
    vO21.ptc[v327].text = v326;
  }
}
function f77() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var v328 = $(this).attr("data-country-name");
    $(".ui-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v328.toLowerCase()).fadeIn(200);
    $(".servers-container > div").not(".servers-" + v328.toLowerCase()).fadeOut(100);
  });
}
function f78() {
  var vO23 = {};
  window.onclick = function () {
    if ((vO23 = window.nodes) && Object.keys(vO23).length > 0 && (console.log(vO23), vO23)) {
      var v329 = window.mouseX - vO23.qj.If.x;
      var v330 = window.mouseY - vO23.qj.If.y;
      var v331 = vO23.Mb.ad;
      var v332 = Math.sqrt(v329 * v329 + v330 * v330);
      console.log("Cell:", vO23, "nickname: ", v331, "Distance:", v332);
    }
  };
}
function f79(p186, p187 = true) {
  return new Promise((p188, p189) => {
    var v333 = document.createElement("script");
    v333.type = "text/javascript";
    v333.src = p186;
    v333.defer = p187;
    v333.onload = p188;
    v333.onerror = p189;
    document.head.appendChild(v333);
  });
}
function f80(p190) {
  return new Promise((p191, p192) => {
    var v334 = document.createElement("link");
    v334.rel = "stylesheet";
    v334.type = "text/css";
    v334.href = p190;
    v334.onload = p191;
    v334.onerror = p192;
    document.head.appendChild(v334);
  });
}
f80("https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap");
f79("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js", true);
f80("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css");
f79("https://cdn.socket.io/4.4.1/socket.io.min.js");
f79("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
f80("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
"use strict";
var v335 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p193) {
  return typeof p193;
} : function (p194) {
  if (p194 && typeof Symbol == "function" && p194.constructor === Symbol && p194 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p194;
  }
};
var v336;
function f81(p195, p196, p197, p198, p199, p200) {
  var v337 = localStorage.getItem(p198);
  if (v337) {
    if (v337.startsWith("0x")) {
      v337 = "#" + v337.substring(2);
    } else if (!v337.startsWith("#")) {
      v337 = "#" + v337;
    }
  }
  vO6[p198] = v337 || p199;
  $(p195).append("<div class=\"option colorpicker\"><div class=\"name\">" + p197 + "</div><input id=\"" + p198 + "\" type=\"text\" class=\"minicolors form-control\"><div class=\"color-preview\" id=\"preview_" + p198 + "\" style=\"background-color: " + vO6[p198] + ";\" onclick=\"openColorPanel('" + p198 + "')\"></div></div>");
  if (localStorage.getItem(p198) !== null) {
    vO6[p198] = localStorage.getItem(p198);
  }
  if (p200) {
    p200();
  }
  $("#" + p198).minicolors({
    control: $(this).attr("data-control") || "hue",
    defaultValue: vO6[p198] || p199,
    format: $(this).attr("data-format") || "hex",
    inline: $(this).attr("data-inline") === "true",
    letterCase: $(this).attr("data-letterCase") || "lowercase",
    opacity: $(this).attr("data-opacity") || true,
    position: $(this).attr("data-position") || "bottom left",
    theme: "default",
    change: function (p201, p202) {
      var v338 = p201.replace("#", "");
      vO6[p198] = v338;
      localStorage.setItem(p198, v338);
      if (p200) {
        p200();
      }
      $("#preview_" + p198).css("background-color", p201);
    }
  });
}
function f82(p203) {
  $("#" + p203).minicolors("show");
}
function f83(p204 = null) {
  var v339 = document.getElementById("backgroundPreview");
  let v340 = localStorage.getItem("selectedBackground");
  if (p204 === null && v340 !== null) {
    p204 = parseInt(v340);
  }
  if (p204 === null || p204 < 0 || p204 >= vA5.length) {
    p204 = 0;
  }
  var v341 = vA5[p204];
  v339.style.backgroundImage = "url(" + v341 + ")";
  if (typeof anApp != "undefined" && anApp.q && anApp.q.Cf) {
    anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(v341));
  }
  localStorage.setItem("selectedBackground", p204);
}
function f84() {
  var v342 = document.getElementById("fontPreview");
  const v343 = vA6[v151];
  v342.style.fontFamily = v343;
  localStorage.setItem("selectedFont", v151);
}
(function () {
  try {
    console.log(function (p205, p206) {
      for (var vLN020 = 0; vLN020 < p206.length; vLN020 += 2) {
        p205 = p205.replaceAll(p206[vLN020], p206[vLN020 + 1]);
      }
      return p205;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e26) {}
})();
window.addEventListener("load", function () {
  function f85() {
    (function (p207, p208, p209) {
      function f86() {
        if (typeof p208.createElement != "function") {
          return p208.createElement(arguments[0]);
        } else if (v346) {
          return p208.createElementNS.call(p208, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p208.createElement.apply(p208, arguments);
        }
      }
      var vA17 = [];
      var vA18 = [];
      var vO24 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p210, p211) {
          var vThis2 = this;
          setTimeout(function () {
            p211(vThis2[p210]);
          }, 0);
        },
        addTest: function (p212, p213, p214) {
          vA18.push({
            name: p212,
            fn: p213,
            options: p214
          });
        },
        addAsyncTest: function (p215) {
          vA18.push({
            name: null,
            fn: p215
          });
        }
      };
      function f87() {}
      f87.prototype = vO24;
      f87 = new f87();
      var v344 = false;
      try {
        v344 = "WebSocket" in p207 && p207.WebSocket.CLOSING === 2;
      } catch (e27) {}
      f87.addTest("websockets", v344);
      var v345 = p208.documentElement;
      var v346 = v345.nodeName.toLowerCase() === "svg";
      f87.addTest("canvas", function () {
        var vF86 = f86("canvas");
        return !!vF86.getContext && !!vF86.getContext("2d");
      });
      f87.addTest("canvastext", function () {
        return f87.canvas !== false && typeof f86("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v347;
        var v348;
        var v349;
        var v350;
        var v351;
        var v352;
        var v353;
        var v354;
        for (var v355 in vA18) {
          if (vA18.hasOwnProperty(v355)) {
            v347 = [];
            if ((v348 = vA18[v355]).name && (v347.push(v348.name.toLowerCase()), v348.options && v348.options.aliases && v348.options.aliases.length)) {
              for (v349 = 0; v349 < v348.options.aliases.length; v349++) {
                v347.push(v348.options.aliases[v349].toLowerCase());
              }
            }
            v353 = v348.fn;
            v354 = "function";
            v350 = (v353 === undefined ? "undefined" : v335(v353)) === v354 ? v348.fn() : v348.fn;
            v351 = 0;
            for (; v351 < v347.length; v351++) {
              if ((v352 = v347[v351].split(".")).length === 1) {
                f87[v352[0]] = v350;
              } else {
                if (!!f87[v352[0]] && !(f87[v352[0]] instanceof Boolean)) {
                  f87[v352[0]] = new Boolean(f87[v352[0]]);
                }
                f87[v352[0]][v352[1]] = v350;
              }
              vA17.push((v350 ? "" : "no-") + v352.join("-"));
            }
          }
        }
      })();
      (function (p216) {
        var v356 = v345.className;
        var v357 = f87._config.classPrefix || "";
        if (v346) {
          v356 = v356.baseVal;
        }
        if (f87._config.enableJSClass) {
          var v358 = new RegExp("(^|\\s)" + v357 + "no-js(\\s|$)");
          v356 = v356.replace(v358, "$1" + v357 + "js$2");
        }
        if (f87._config.enableClasses) {
          v356 += " " + v357 + p216.join(" " + v357);
          if (v346) {
            v345.className.baseVal = v356;
          } else {
            v345.className = v356;
          }
        }
      })(vA17);
      delete vO24.addTest;
      delete vO24.addAsyncTest;
      for (var vLN021 = 0; vLN021 < f87._q.length; vLN021++) {
        f87._q[vLN021]();
      }
      p207.Modernizr = f87;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (f85()) {
    (function () {
      function f88() {
        return window.anApp = vUndefined2;
      }
      function f89(p217) {
        const v359 = p217 + "=";
        const v360 = document.cookie.split(";");
        for (let vLN022 = 0; vLN022 < v360.length; vLN022++) {
          let v361 = v360[vLN022];
          while (v361.charAt(0) === " ") {
            v361 = v361.substring(1);
          }
          if (v361.indexOf(v359) === 0) {
            return v361.substring(v359.length, v361.length);
          }
        }
        return "";
      }
      function f90(p218, p219, p220) {
        var v362 = new Date();
        v362.setTime(v362.getTime() + p220 * 86400000);
        var v363 = "expires=" + v362.toUTCString();
        document.cookie = p218 + "=" + p219 + "; " + v363 + "; path=/";
      }
      function f91(p221) {
        return window.I18N_MESSAGES[p221];
      }
      function f92(p222) {
        if (p222[v434]) {
          return p222[v434];
        } else if (p222.en) {
          return p222.en;
        } else {
          return p222.x;
        }
      }
      function f93(p223) {
        var v364 = (Math.floor(p223) % 60).toString();
        var v365 = (Math.floor(p223 / 60) % 60).toString();
        var v366 = (Math.floor(p223 / 3600) % 24).toString();
        var v367 = Math.floor(p223 / 86400).toString();
        var vF91 = f91("util.time.days");
        var vF912 = f91("util.time.hours");
        var vF913 = f91("util.time.min");
        var vF914 = f91("util.time.sec");
        if (v367 > 0) {
          return v367 + " " + vF91 + " " + v366 + " " + vF912 + " " + v365 + " " + vF913 + " " + v364 + " " + vF914;
        } else if (v366 > 0) {
          return v366 + " " + vF912 + " " + v365 + " " + vF913 + " " + v364 + " " + vF914;
        } else if (v365 > 0) {
          return v365 + " " + vF913 + " " + v364 + " " + vF914;
        } else {
          return v364 + " " + vF914;
        }
      }
      function f94(p224) {
        if (p224.includes("href")) {
          return p224.replaceAll("href", "target=\"_black\" href");
        } else {
          return p224;
        }
      }
      function f95(p225, p226, p227) {
        var v368 = document.createElement("script");
        if (p226) {
          v368.id = p226;
        }
        v368.async = "async";
        v368.type = "text/javascript";
        v368.src = p225;
        if (p227) {
          v368.onload = v368.onreadystatechange = function () {
            false;
            try {
              p227();
            } catch (e28) {
              console.log(e28);
            }
            v368.onload = v368.onreadystatechange = null;
          };
        }
        (document.head || document.getElementsByTagName("head")[0]).appendChild(v368);
      }
      function f96(p228, p229) {
        var vP229 = p229;
        vP229.prototype = Object.create(p228.prototype);
        vP229.prototype.constructor = vP229;
        vP229.parent = p228;
        return vP229;
      }
      function f97(p230) {
        if ((p230 %= v438) < 0) {
          return p230 + v438;
        } else {
          return p230;
        }
      }
      function f98(p231, p232, p233) {
        return f99(p233, p231, p232);
      }
      function f99(p234, p235, p236) {
        if (p234 > p236) {
          return p236;
        } else if (p234 < p235) {
          return p235;
        } else if (Number.isFinite(p234)) {
          return p234;
        } else {
          return (p235 + p236) * 0.5;
        }
      }
      function f100(p237, p238, p239, p240) {
        if (p238 > p237) {
          return Math.min(p238, p237 + p239 * p240);
        } else {
          return Math.max(p238, p237 - p239 * p240);
        }
      }
      function f101(p241, p242, p243, p244, p245) {
        return p242 + (p241 - p242) * Math.pow(1 - p244, p243 / p245);
      }
      function f102(p246, p247, p248) {
        return p246 * (1 - p248) + p247 * p248;
      }
      function f103(p249, p250, p251, p252) {
        var vP251 = p251;
        var vP250 = p250;
        var v369 = p250 + p252;
        if (p249 == null) {
          throw new TypeError("this is null or not defined");
        }
        var v370 = p249.length >>> 0;
        var v371 = vP251 >> 0;
        var v372 = v371 < 0 ? Math.max(v370 + v371, 0) : Math.min(v371, v370);
        var v373 = vP250 >> 0;
        var v374 = v373 < 0 ? Math.max(v370 + v373, 0) : Math.min(v373, v370);
        var v375 = v369 === undefined ? v370 : v369 >> 0;
        var v376 = v375 < 0 ? Math.max(v370 + v375, 0) : Math.min(v375, v370);
        var v377 = Math.min(v376 - v374, v370 - v372);
        var vLN13 = 1;
        for (v374 < v372 && v372 < v374 + v377 && (vLN13 = -1, v374 += v377 - 1, v372 += v377 - 1); v377 > 0;) {
          if (v374 in p249) {
            p249[v372] = p249[v374];
          } else {
            delete p249[v372];
          }
          v374 += vLN13;
          v372 += vLN13;
          v377--;
        }
        return p249;
      }
      function f104(p253) {
        return p253.getContext("2d");
      }
      function f105(p254) {
        if (p254.parent != null) {
          p254.parent.removeChild(p254);
        }
      }
      function f106(p255) {
        return p255[parseInt(Math.random() * p255.length)];
      }
      function f107() {
        return Math.random().toString(36).substring(2, 15);
      }
      function f108(p256, p257, p258) {
        var v378 = (1 - Math.abs(p258 * 2 - 1)) * p257;
        var v379 = v378 * (1 - Math.abs(p256 / 60 % 2 - 1));
        var v380 = p258 - v378 / 2;
        if (p256 >= 0 && p256 < 60) {
          return [v380 + v378, v380 + v379, v380 + 0];
        } else if (p256 >= 60 && p256 < 120) {
          return [v380 + v379, v380 + v378, v380 + 0];
        } else if (p256 >= 120 && p256 < 180) {
          return [v380 + 0, v380 + v378, v380 + v379];
        } else if (p256 >= 180 && p256 < 240) {
          return [v380 + 0, v380 + v379, v380 + v378];
        } else if (p256 >= 240 && p256 < 300) {
          return [v380 + v379, v380 + 0, v380 + v378];
        } else {
          return [v380 + v378, v380 + 0, v380 + v379];
        }
      }
      function f109() {
        function e() {
          let v381 = vO8.adblock ? 1 : 5;
          $("#adbl-1").text(f91("index.game.antiadblocker.msg1"));
          $("#adbl-2").text(f91("index.game.antiadblocker.msg2"));
          $("#adbl-3").text(f91("index.game.antiadblocker.msg3"));
          $("#adbl-4").text(f91("index.game.antiadblocker.msg4").replace("{0}", 10));
          $("#adbl-continue span").text(f91("index.game.antiadblocker.continue"));
          $("#adbl-continue").hide();
          $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
          var vV381 = v381;
          for (var vLN023 = 0; vLN023 < v381; vLN023++) {
            setTimeout(function () {
              vV381--;
              $("#adbl-4").text(f91("index.game.antiadblocker.msg4").replace("{0}", vV381));
              if (vV381 === 0) {
                console.log("aipAABC");
                try {
                  ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
                } catch (e29) {}
                $("#adbl-continue").fadeIn(200);
              }
            }, (vLN023 + 1) * 1000);
          }
        }
        var v382 = false;
        function f111() {}
        var vO25 = {};
        var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
        $("#adbl-continue").click(function () {
          $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
          f111(false);
        });
        vO25.a = function (p259) {
          f111 = p259;
          if (!v382) {
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
                  AIP_COMPLETE: function (p260) {
                    console.log("aipC");
                    f111(true);
                    $("#1eaom01c3pxu9wd3").hide();
                    $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                    try {
                      ga("send", "event", "preroll", window.runtimeHash + "_complete");
                    } catch (e30) {}
                  },
                  AIP_REMOVE: function () {}
                });
              });
              v382 = true;
            } catch (e31) {}
          }
        };
        vO25.b = function () {
          if (aiptag.adplayer !== undefined) {
            console.log("aipS");
            try {
              ga("send", "event", "preroll", window.runtimeHash + "_request");
            } catch (e32) {}
            e();
          } else {
            console.log("aipAABS");
            try {
              ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
            } catch (e33) {}
            e();
          }
        };
        return vO25;
      }
      function f112(p261, p262) {
        return {
          a: function () {},
          c: function () {}
        };
      }
      function f113() {
        function t(p263) {
          var v383 = p263 + Math.floor(Math.random() * 65535) * 37;
          f90(vF21.d, v383, 30);
        }
        return function () {
          var v384 = parseInt(f89(vF21.d)) % 37;
          console.log("init1 pSC: " + v384);
          if (!(v384 >= 0) || !(v384 < v1007.e)) {
            v384 = Math.max(0, v1007.e - 2);
            console.log("init2 pSC: " + v384);
          }
          var vO26 = {};
          vUndefined2 = vO26;
          vO26.f = v1007;
          vO26.g = false;
          vO26.i = Date.now();
          vO26.j = 0;
          vO26.k = 0;
          vO26.l = null;
          vO26.m = vUndefined;
          vO26.n = v434;
          vO26.o = null;
          vO26.p = null;
          vO26.q = null;
          vO26.r = null;
          vO26.s = null;
          vO26.t = null;
          vO26.u = null;
          try {
            if (navigator && navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (p264) {
                if (p264.coords !== undefined) {
                  var v385 = p264.coords;
                  if (v385.latitude !== undefined && v385.longitude !== undefined) {
                    vO26.l = p264;
                  }
                }
              }, function (p265) {});
            }
          } catch (e34) {}
          vO26.v = function () {
            vO26.p = new vF16();
            vO26.q = new vF38();
            vO26.r = new vF18();
            vO26.s = new vF39();
            vO26.t = new vF35();
            vO26.u = new vF42();
            vO26.o = new f115();
            vO26.o.z = new vF28(vO26.o);
            vO26.a();
          };
          vO26.a = function () {
            try {
              ga("send", "event", "app", window.runtimeHash + "_init");
            } catch (e35) {}
            vO26.o.A = function () {
              vO26.o.B();
            };
            vO26.o.C = function () {
              var v386 = vO26.s.F.D();
              try {
                ga("send", "event", "game", window.runtimeHash + "_start", v386);
              } catch (e36) {}
              vO26.r.G(vF18.AudioState.H);
              vO26.s.I(vO26.s.H.J());
            };
            vO26.o.B = function () {
              var v387;
              var v388;
              try {
                ga("send", "event", "game", window.runtimeHash + "_end");
              } catch (e37) {}
              if ($("body").height() >= 430) {
                vO26.f.K.c();
              }
              vO26.p.L();
              v387 = Math.floor(vO26.o.N.M);
              v388 = vO26.o.O;
              if (vO26.u.P()) {
                vO26.u.Q(function () {
                  vO26.R(v387, v388);
                });
              } else {
                vO26.R(v387, v388);
              }
            };
            vO26.o.S = function (p266) {
              p266(vO26.s.H.T(), vO26.s.H.U());
            };
            vO26.u.V(function () {
              if (vO26.p.W) {
                vO26.r.G(vF18.AudioState.F);
                vO26.s.I(vO26.s.F);
              }
              if (vO26.u.P()) {
                try {
                  var v389 = vO26.u.X();
                  ga("set", "userId", v389);
                } catch (e38) {}
              }
              if (vO26.Y() && vO26.u.P() && !vO26.u.Z()) {
                vO26.$(false, false);
                vO26.s.aa._(new v_0x170c74());
              } else {
                vO26.ba(true);
              }
            });
            vO26.p.ca(function () {
              vO26.r.G(vF18.AudioState.F);
              vO26.s.I(vO26.s.F);
            });
            vO26.q.a(function () {
              vO26.o.a();
              vO26.r.a();
              vO26.s.a();
              vO26.t.a();
              vO26.p.a();
              vO26.u.a();
              if (vO26.Y() && !vO26.Z()) {
                vO26.s.aa._(new v_0x170c74());
              } else {
                vO26.ba(true);
              }
            });
          };
          vO26.da = function (p267) {
            if (vO26.u.P()) {
              var v390 = vO26.u.ea();
              $.get(vAtob + "/pub/wuid/" + v390 + "/consent/change?value=" + encodeURI(p267), function (p268) {});
            }
          };
          vO26.fa = function (p269) {
            var v391 = vO26.u.ea();
            var v392 = vO26.s.F.D();
            var v393 = vO26.s.F.ga();
            var v394 = vO26.t.ha(vF37.ia);
            var v395 = vO26.t.ha(vF37.ja);
            var v396 = vO26.t.ha(vF37.ka);
            var v397 = vO26.t.ha(vF37.la);
            var v398 = vO26.t.ha(vF37.ma);
            var vLN024 = 0;
            if (vO26.l != null) {
              var v399 = vO26.l.coords.latitude;
              var v400 = vO26.l.coords.longitude;
              vLN024 = Math.max(0, Math.min(32767, (v399 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v400 + 180) / 360 * 65536)) << 16;
            }
            vO4.testSkinCustom(v394);
            let v401 = "ZW_" + (v394 > 9999 ? "0000" : v394.toString().padStart(4, 0)) + (v398 > 99999 ? "00000" : v398.toString().padStart(5, 0));
            v393 = (v393 = (v393.length >= 32 ? v393.substr(0, 16) : v393.substr(0, 16).padEnd(16)) + v401).trim().replace(/\s/g, "ㅤ");
            console.log(v393);
            if (vO8.Incognito) {
              v393 = "";
            }
            var v402 = document.getElementById("teamNickname");
            if (v402 !== null) {
              var v403 = v402.value;
              if (vO8.hideYouNameInMinimap) {
                vO9.nickname = v403;
              } else {
                vO9.nickname = v393;
              }
            } else {
              console.warn("⚠️ Advertencia: No se encontró el elemento 'teamNickname'.");
            }
            var v404 = vAtob + "/pub/wuid/" + v391 + "/start?gameMode=" + encodeURI(v392) + "&gh=" + vLN024 + "&nickname=" + encodeURI(v393) + "&skinId=" + vO4.validInput(v394) + "&eyesId=" + encodeURI(v395) + "&mouthId=" + encodeURI(v396) + "&glassesId=" + encodeURI(v397) + "&hatId=" + encodeURI(v398);
            console.log("urlRequest: " + v404);
            $.get(v404, function (p270) {
              var v405 = p270.server_url;
              p269(v405);
            });
          };
          vO26.na = function () {
            v384++;
            console.log("start pSC: " + v384);
            if (!vO26.f.oa && v384 >= vO26.f.e) {
              vO26.s.I(vO26.s.pa);
              vO26.r.G(vF18.AudioState.qa);
              vO26.f.ra.b();
            } else {
              t(v384);
              vO26.sa();
              v113.text = "";
            }
          };
          vO26.sa = function (p271) {
            zw_killcount = 0;
            zw_hscount = 0;
            if (vO26.o.ta()) {
              vO26.s.I(vO26.s.ua);
              vO26.r.G(vF18.AudioState.ua);
              var v406 = vO26.s.F.D();
              f90(vF21.va, v406, 30);
              console.log("save gm: " + v406);
              var v407 = vO26.s.xa.wa();
              f90(vF21.ya, v407, 30);
              console.log("save sPN: " + v407);
              if (vO26.u.P()) {
                vO26.fa(function (p272) {
                  v124 = p271 || p272;
                  vO9.wssServer = v124;
                  v113.text = "" + v124.replace("wss://", "").replace(".wormate.io", "").replace("/wormy", "");
                  vO26.o.za(p271 || p272, vO26.u.ea());
                });
              } else {
                var v408 = vO26.s.F.ga();
                f90(vF21.Aa, v408, 30);
                var v409 = vO26.t.ha(vF37.ia);
                f90(vF21.Ba, v409, 30);
                vO26.fa(function (p273) {
                  v124 = p271 || p273;
                  vO9.wssServer = v124;
                  v113.text = "" + v124.replace("wss://", "").replace(".wormate.io", "").replace("/wormy", "");
                  vO26.o.Ca(p271 || p273, v408, v409);
                });
              }
            }
          };
          vO26.R = function (p274, p275) {
            var v410 = vO26.s.F.ga();
            vO26.s.H.Da(p274, p275, v410);
            vO26.r.G(vF18.AudioState.Ea);
            vO26.s.I(vO26.s.H.Fa());
          };
          vO26.Ga = function () {
            if (!vO26.Ha()) {
              return vO26.t.Ia();
            }
            var vParseInt = parseInt(f89(vF21.Ba));
            if (vParseInt != null && vO26.t.Ja(vParseInt, vF37.ia)) {
              return vParseInt;
            } else {
              return vO26.t.Ia();
            }
          };
          vO26.Ka = function (p276) {
            f90(vF21.La, !!p276, 1800);
          };
          vO26.Ha = function () {
            return f89(vF21.La) === "true";
          };
          vO26.ba = function (p277) {
            if (p277 != vO26.g) {
              vO26.g = p277;
              var v411 = v411 || {};
              v411.consented = p277;
              v411.gdprConsent = p277;
              vO26.f.Ma.a();
              vO26.f.K.a();
              vO26.f.ra.a(function (p278) {
                if (p278) {
                  t(v384 = 0);
                }
                vO26.sa();
              });
            }
          };
          vO26.$ = function (p279, p280) {
            f90(vF21.Na, p279 ? "true" : "false");
            if (p280) {
              vO26.da(p279);
            }
            vO26.ba(p279);
          };
          vO26.Z = function () {
            return f89(vF21.Na) === "true";
          };
          vO26.Y = function () {
            try {
              return !!window.isIPInEEA || vO26.l != null && !!vO33.Oa(vO26.l.coords.latitude, vO26.l.coords.longitude);
            } catch (e39) {
              return true;
            }
          };
          vO26.Pa = function (p281) {
            const v412 = performance.now();
            vO26.j = v412;
            vO26.k = p281;
            vO26.o.Qa(v412, p281);
            vO26.s.Qa(v412, p281);
            vO26.i = v412;
          };
          vO26.Ra = function () {
            vO26.s.Ra();
          };
          return vO26;
        }();
      }
      function f115() {
        var vLN025 = 0;
        var vLN14 = 1;
        var vLN2 = 2;
        var vLN3 = 3;
        var vO27 = {
          Wa: 30
        };
        vO27.Xa = new Float32Array(100);
        vO27.Ya = 0;
        vO27.Za = 0;
        vO27.$a = 0;
        vO27._a = 0;
        vO27.ab = 0;
        vO27.bb = 0;
        vO27.cb = vLN025;
        vO27.db = null;
        vO27.eb = 300;
        vO27.C = function () {};
        vO27.B = function () {};
        vO27.S = function () {};
        vO27.A = function () {};
        vO27.fb = new vF24();
        vO27.z = null;
        vO27.N = null;
        vO27.gb = {};
        vO27.hb = {};
        vO27.ib = 12.5;
        vO27.jb = 40;
        vO27.kb = 1;
        vO27.lb = -1;
        vO27.mb = 1;
        vO27.nb = 1;
        vO27.ob = -1;
        vO27.pb = -1;
        vO27.qb = 1;
        vO27.rb = 1;
        vO27.sb = -1;
        vO27.O = 500;
        vO27.tb = 500;
        vO27.fb.ub = 500;
        vO27.N = new vF46(vO27.fb);
        vO27.a = function () {
          vO27.N.vb(f88().s.H.wb);
          let vSetInterval2 = setInterval(function () {
            vO27.S(function (p282, p283) {
              vO27.xb(p282, p283);
            });
          }, vO8.mouseDelay);
          vO27.updatePacketInterval = function (p284) {
            clearInterval(vSetInterval2);
            vO8.mouseDelay = p284;
            vSetInterval2 = setInterval(function () {
              vO27.S(function (p285, p286) {
                console.log(p285, p286);
                vO27.xb(p285, p286);
              });
            }, vO8.mouseDelay);
          };
        };
        vO27.yb = function (p287, p288, p289, p290) {
          vO27.lb = p287;
          vO27.mb = p288;
          vO27.nb = p289;
          vO27.ob = p290;
          vO27.zb();
        };
        vO27.Ab = function (p291) {
          vO27.kb = p291;
          vO27.zb();
        };
        vO27.zb = function () {
          vO27.pb = vO27.lb - vO27.kb;
          vO27.qb = vO27.mb + vO27.kb;
          vO27.rb = vO27.nb - vO27.kb;
          vO27.sb = vO27.ob + vO27.kb;
        };
        vO27.Qa = function (p292, p293) {
          p293 = Math.min(Math.max(1, p293), 100);
          vO27.$a += p293;
          vO27.Za -= vO27.Ya * 0.2 * p293;
          vO27.z.Bb();
          if (vO27.db != null && (vO27.cb === vLN2 || vO27.cb === vLN3)) {
            vO27.Cb(p292, p293);
            vO27.jb = 4 + vO27.ib * vO27.N.Db;
          }
          const v413 = 1000 / p293;
          let vLN026 = 0;
          for (let vLN027 = 0; vLN027 < vO27.Xa.length - 1; vLN027++) {
            vO27.Xa[vLN027] = vO27.Xa[vLN027 + 1];
            vLN026 += vO27.Xa[vLN027];
          }
          vO27.Xa[vO27.Xa.length - 1] = v413;
          vO27.Wa = (vLN026 + v413) / vO27.Xa.length;
        };
        vO27.Eb = function (p294, p295) {
          return p294 > vO27.pb && p294 < vO27.qb && p295 > vO27.rb && p295 < vO27.sb;
        };
        vO27.Cb = function (p296, p297) {
          var v414 = (vO27.$a + vO27.Za - vO27._a) / (vO27.ab - vO27._a);
          vO27.N.Fb(p296, p297);
          vO27.N.Gb(p296, p297, v414, vO27.Eb);
          var v415;
          var v416;
          var vLN028 = 0;
          for (v415 in vO27.hb) {
            var v417 = vO27.hb[v415];
            v417.Fb(p296, p297);
            v417.Gb(p296, p297, v414, vO27.Eb);
            if (v417.Hb && v417.Db > vLN028) {
              vLN028 = v417.Db;
            }
            if (!v417.Ib && (v417.Jb < 0.005 || !v417.Hb)) {
              v417.Kb();
              delete vO27.hb[v417.Mb.Lb];
            }
          }
          vO27.Ab(vLN028 * 3);
          for (v416 in vO27.gb) {
            var v418 = vO27.gb[v416];
            v418.Fb(p296, p297);
            v418.Gb(p296, p297, vO27.Eb);
            if (v418.Nb && (v418.Jb < 0.005 || !vO27.Eb(v418.Ob, v418.Pb))) {
              v418.Kb();
              delete vO27.gb[v418.Mb.Lb];
            }
          }
        };
        vO27.Qb = function (p298, p299) {
          if (vO27.cb === vLN14) {
            vO27.cb = vLN2;
            vO27.C();
          }
          var v419 = f88().j;
          vO27.bb = p298;
          if (p298 === 0) {
            vO27._a = v419 - 95;
            vO27.ab = v419;
            vO27.$a = vO27._a;
            vO27.Za = 0;
          } else {
            vO27._a = vO27.ab;
            vO27.ab = vO27.ab + p299;
          }
          var v420 = vO27.$a + vO27.Za;
          vO27.Ya = (v420 - vO27._a) / (vO27.ab - vO27._a);
        };
        vO27.Rb = function () {
          if (vO27.cb === vLN14 || vO27.cb === vLN2) {
            vO27.cb = vLN3;
            var v421 = vO27.db;
            setTimeout(function () {
              if (vO27.cb === vLN3) {
                vO27.cb = vLN025;
              }
              if (v421 != null && v421 === vO27.db) {
                vO27.db.close();
                vO27.db = null;
              }
            }, 5000);
            vO27.B();
          }
        };
        vO27.ta = function () {
          return vO27.cb !== vLN2 && (vO27.cb = vLN14, vO27.z.Sb(), vO27.gb = {}, vO27.hb = {}, vO27.N.Tb(), vO27.db != null && (vO27.db.close(), vO27.db = null), true);
        };
        vO27.Ub = function () {
          vO27.db = null;
          vO27.z.Sb();
          if (vO27.cb !== vLN3) {
            vO27.A();
          }
          vO27.cb = vLN025;
        };
        vO27.za = function (p300, p301) {
          vO27.Vb(p300, function () {
            console.log(p301);
            if (vO19.spawnInfinity) {
              var v422 = document.getElementById("mm-params-nickname").value;
              var v423 = Math.min(32, v422.length);
              var v424 = new ArrayBuffer(7 + v423 * 2);
              var v425 = new DataView(v424);
              var vLN029 = 0;
              v425.setInt8(vLN029, 129);
              vLN029 += 1;
              v425.setInt16(vLN029, 2800);
              vLN029 += 2;
              v425.setInt8(vLN029, 0);
              vLN029 += 1;
              v425.setInt16(vLN029, 128);
              vLN029 += 2;
              v425.setInt8(vLN029, v423);
              vLN029++;
              for (var vLN030 = 0; vLN030 < v423; vLN030++) {
                v425.setInt16(vLN029, v422.charCodeAt(vLN030));
                vLN029 += 2;
              }
              vO27.Wb(v424);
            } else {
              v423 = Math.min(2048, p301.length);
              v424 = new ArrayBuffer(6 + v423 * 2);
              var v426 = new DataView(v424);
              vLN029 = 0;
              v426.setInt8(vLN029, 129);
              vLN029 += 1;
              v426.setInt16(vLN029, 2800);
              vLN029 += 2;
              v426.setInt8(vLN029, 1);
              vLN029 += 1;
              v426.setInt16(vLN029, v423);
              vLN029 += 2;
              for (vLN030 = 0; vLN030 < v423; vLN030++) {
                v426.setInt16(vLN029, p301.charCodeAt(vLN030));
                vLN029 += 2;
              }
              vO27.Wb(v424);
            }
          });
        };
        vO27.Ca = function (p302, p303, p304) {
          vO27.Vb(p302, function () {
            var v427 = Math.min(32, p303.length);
            var v428 = new ArrayBuffer(7 + v427 * 2);
            var v429 = new DataView(v428);
            var vLN031 = 0;
            v429.setInt8(vLN031, 129);
            vLN031 += 1;
            v429.setInt16(vLN031, 2800);
            vLN031 += 2;
            v429.setInt8(vLN031, 0);
            vLN031 += 1;
            v429.setInt16(vLN031, p304);
            vLN031 += 2;
            v429.setInt8(vLN031, v427);
            vLN031++;
            for (var vLN032 = 0; vLN032 < v427; vLN032++) {
              v429.setInt16(vLN031, p303.charCodeAt(vLN032));
              vLN031 += 2;
            }
            vO27.Wb(v428);
            console.log(v428);
          });
        };
        vO27.Wb = function (p305) {
          try {
            if (vO27.db != null && vO27.db.readyState === WebSocket.OPEN) {
              vO27.db.send(p305);
            }
          } catch (e40) {
            console.log("Socket send error: " + e40);
            vO27.Ub();
          }
        };
        vO27.xb = function (p306, p307) {
          var v430 = ((p307 ? 128 : 0) | f97(p306) / v438 * 128 & 127) & 255;
          var v431 = new ArrayBuffer(1);
          new DataView(v431).setInt8(0, v430);
          vO27.Wb(v431);
          vO27.eb = v430;
        };
        vO27.Vb = function (p308, p309) {
          var v432 = vO27.db = new WebSocket(p308);
          v432.binaryType = "arraybuffer";
          window.onOpen = v432.onopen = function () {
            if (vO27.db === v432) {
              console.log("Socket opened");
              p309();
            }
            v154 = true;
          };
          window.onclose = v432.onclose = function () {
            vO4.aload = false;
            if (vO27.db === v432) {
              console.log("Socket closed");
              vO27.Ub();
            }
            v154 = false;
          };
          v432.onerror = function (p310) {
            console.log(p310.data);
            if (vO27.db === v432) {
              console.log("Socket error");
              vO27.Ub();
            }
            v154 = false;
          };
          v432.onmessage = function (p311) {
            if (vO27.db === v432) {
              vO27.z.Xb(p311.data);
            }
          };
        };
        return vO27;
      }
      var vLSimageslinelogoxmas20 = "/images/linelogo-xmas2022.png";
      var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
      var v433 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var vAtob = "https://gateway.wormate.io";
      var vAtob2 = "https://resources.wormate.io";
      var v434 = window.I18N_LANG;
      v434 ||= "en";
      var vUndefined = undefined;
      switch (v434) {
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
      var v435 = false;
      var vUndefined2 = undefined;
      var vF13 = function () {
        var vO28 = {
          Yb: eval("PIXI")
        };
        var v436 = vO28.Yb["BLEND_MODES"];
        var v437 = vO28.Yb["WRAP_MODES"];
        return {
          Zb: vO28.Yb["Container"],
          $b: vO28.Yb["BaseTexture"],
          _b: vO28.Yb["Texture"],
          ac: vO28.Yb["Renderer"],
          bc: vO28.Yb["Graphics"],
          cc: vO28.Yb["Shader"],
          dc: vO28.Yb["Rectangle"],
          ec: vO28.Yb["Sprite"],
          fc: vO28.Yb["Text"],
          gc: vO28.Yb["Geometry"],
          hc: vO28.Yb["Mesh"],
          ic: {
            jc: v436["ADD"]
          },
          kc: {
            lc: v437["REPEAT"],
            CLAMP: vO28.Yb.WRAP_MODES.CLAMP
          }
        };
      }();
      var v438 = Math.PI * 2;
      var v439;
      var v440;
      var v441;
      var v442;
      v439 = "Z2V0";
      v440 = v439 + "SW50";
      v441 = v439 + "RmxvYXQ";
      v442 = [atob(v440 + "OA=="), atob(v440 + "MTY="), atob(v440 + "MzI="), atob(v441 + "zMg=="), atob(v441 + "2NA==")];
      DataView.prototype.mc = function (p312) {
        return this[v442[0]](p312);
      };
      DataView.prototype.nc = function (p313) {
        return this[v442[1]](p313);
      };
      DataView.prototype.oc = function (p314) {
        return this[v442[2]](p314);
      };
      DataView.prototype.pc = function (p315) {
        return this[v442[3]](p315);
      };
      DataView.prototype.qc = function (p316) {
        return this[v442[4]](p316);
      };
      var vF15 = function () {
        function f116(p317) {
          this.rc = p317;
          this.sc = false;
          this.tc = 1;
        }
        f116.VELOCITY_TYPE = 0;
        f116.FLEXIBLE_TYPE = 1;
        f116.MAGNETIC_TYPE = 2;
        f116.ZOOM_TYPE = 6;
        f116.X2_TYPE = 3;
        f116.X5_TYPE = 4;
        f116.X10_TYPE = 5;
        return f116;
      }();
      var vF16 = function () {
        function f117() {
          this.uc = [];
          this.vc = {};
          this.wc = null;
          this.xc = vF17.yc();
        }
        f117.prototype.a = function () {
          this.L();
        };
        f117.prototype.W = function () {
          return this.wc != null;
        };
        f117.prototype.zc = function () {
          if (this.wc != null) {
            return this.wc.revision;
          } else {
            return -1;
          }
        };
        f117.prototype.Ac = function () {
          return this.wc;
        };
        f117.prototype.L = function () {
          var vThis3 = this;
          $.get(vAtob2 + "/dynamic/assets/revision.json", function (p318) {
            if (p318 > vThis3.zc()) {
              vThis3.Bc();
            }
          });
        };
        f117.prototype.Bc = function () {
          var vThis4 = this;
          $.ajax({
            type: "POST",
            url: "https://zwormextenstion.com/wormExtension/api/skins/skins.php",
            data: JSON.stringify({
              reason: 1
            }),
            contentType: "application/json",
            success: function (p319) {
              vO8.visibleSkin = p319.visibleSkin;
              delete p319.visibleSkin;
              vO8.pL = p319.propertyList;
              vO8.idSkin = p319.skinArrayDict;
              if (p319.revision > vThis4.zc()) {
                vThis4.Cc(p319);
              }
              f66(anApp);
            },
            error: function (p320, p321, p322) {
              console.error("Error al realizar la solicitud GET:", p322);
            }
          });
        };
        f117.prototype.ca = function (p323) {
          this.uc.push(p323);
        };
        f117.prototype.Dc = function () {
          return this.xc;
        };
        f117.prototype.Ec = function () {
          for (var vLN033 = 0; vLN033 < this.uc.length; vLN033++) {
            this.uc[vLN033]();
          }
        };
        f117.prototype.Fc = function (p324, p325) {
          if (!(p324.revision <= this.zc())) {
            var vP325 = p325;
            (function (p326, p327) {
              for (var v443 in p326) {
                if (p326.hasOwnProperty(v443)) {
                  p327(v443, p326[v443]);
                }
              }
            })(this.vc, function (p328, p329) {
              var v444 = vP325[p328];
              if (v444 == null || p329.Gc !== v444.Gc) {
                print("disposing prev texture: " + p328 + " at " + p329.Gc);
                p329.Hc.destroy();
              }
            });
            this.vc = vP325;
            this.wc = p324;
            this.xc = vF17.Ic(this.wc, this.vc);
            this.Ec();
          }
        };
        f117.prototype.Cc = function (p330) {
          var vO29 = {};
          var vA19 = [];
          var vA20 = [];
          for (var v445 in p330.textureDict) {
            if (p330.textureDict.hasOwnProperty(v445)) {
              var v446 = p330.textureDict[v445];
              var v447 = v446.isCustom ? v446.relativePath : vAtob2 + v446.relativePath;
              var v448 = v446.fileSize;
              var vO30 = {
                id: v445,
                path: v447,
                fileSize: v448,
                sha256: v446.sha256
              };
              vA19.push(vO30);
              vA20.push(vO30);
              v448;
              v447 = v446.relativePath;
              if (!v446.isCustom) {
                v447 = vAtob2 + v446.relativePath;
              }
              try {
                vO29[v445] = new f131(v447, vF13.$b.from(v446.file || v447));
              } catch (e41) {
                console.log(v447);
              }
            }
          }
          this.Fc(p330, vO29);
        };
        return f117;
      }();
      var vF17 = function () {
        function f118() {
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
        function f119(p331, p332) {
          for (var v449 in p331) {
            if (p331.hasOwnProperty(v449)) {
              p332(v449, p331[v449]);
            }
          }
        }
        f118.yc = function () {
          var v450 = new vF17();
          v450.Jc = {};
          v450.Kc = {
            Zc: null,
            $c: null
          };
          v450.Lc = {};
          v450.Mc = {
            Zc: null
          };
          v450.Nc = {};
          v450.Oc = {
            _c: "#f8d968",
            Zc: [],
            $c: []
          };
          v450.Pc = {};
          v450.Qc = {
            ad: {},
            bd: v450.Oc,
            cd: v450.Kc
          };
          v450.Rc = {};
          v450.Sc = {
            Zc: []
          };
          v450.Tc = {};
          v450.Uc = {
            Zc: []
          };
          v450.Vc = {};
          v450.Wc = {
            Zc: []
          };
          v450.Xc = {};
          v450.Yc = {
            Zc: []
          };
          return v450;
        };
        f118.Ic = function (p333, p334) {
          var v451 = new vF17();
          var vO31 = {};
          f119(p333.colorDict, function (p335, p336) {
            vO31[p335] = p336;
          });
          var vO32 = {};
          f119(p333.regionDict, function (p337, p338) {
            vO32[p337] = new f142(p334[p338.texture].Hc, p338.x, p338.y, p338.w, p338.h, p338.px, p338.py, p338.pw, p338.ph);
          });
          v451.Nc = {};
          for (var vLN034 = 0; vLN034 < p333.skinArrayDict.length; vLN034++) {
            var v452 = p333.skinArrayDict[vLN034];
            v451.Nc[v452.id] = new vF17.WormSkinData("#" + vO31[v452.prime], v452.base.map(function (p339) {
              return vO32[p339];
            }), v452.glow.map(function (p340) {
              return vO32[p340];
            }));
          }
          var v453 = p333.skinUnknown;
          v451.Oc = new vF17.WormSkinData("#" + vO31[v453.prime], v453.base.map(function (p341) {
            return vO32[p341];
          }), v453.glow.map(function (p342) {
            return vO32[p342];
          }));
          v451.Rc = {};
          f119(p333.eyesDict, function (p343, p344) {
            p343 = parseInt(p343);
            v451.Rc[p343] = new vF17.WearSkinData(p344.base.map(function (p345) {
              return vO32[p345.region];
            }));
          });
          v451.Sc = new vF17.WearSkinData(p333.eyesUnknown.base.map(function (p346) {
            return vO32[p346.region];
          }));
          v451.Tc = {};
          f119(p333.mouthDict, function (p347, p348) {
            p347 = parseInt(p347);
            v451.Tc[p347] = new vF17.WearSkinData(p348.base.map(function (p349) {
              return vO32[p349.region];
            }));
          });
          v451.Uc = new vF17.WearSkinData(p333.mouthUnknown.base.map(function (p350) {
            return vO32[p350.region];
          }));
          v451.Vc = {};
          f119(p333.glassesDict, function (p351, p352) {
            p351 = parseInt(p351);
            v451.Vc[p351] = new vF17.WearSkinData(p352.base.map(function (p353) {
              return vO32[p353.region];
            }));
          });
          v451.Wc = new vF17.WearSkinData(p333.glassesUnknown.base.map(function (p354) {
            return vO32[p354.region];
          }));
          v451.Xc = {};
          f119(p333.hatDict, function (p355, p356) {
            p355 = parseInt(p355);
            v451.Xc[p355] = new vF17.WearSkinData(p356.base.map(function (p357) {
              return vO32[p357.region];
            }));
          });
          v451.Yc = new vF17.WearSkinData(p333.hatUnknown.base.map(function (p358) {
            return vO32[p358.region];
          }));
          v451.Jc = {};
          f119(p333.portionDict, function (p359, p360) {
            p359 = parseInt(p359);
            v451.Jc[p359] = new vF17.PortionSkinData(vO32[p360.base], vO32[p360.glow]);
          });
          var v454 = p333.portionUnknown;
          v451.Kc = new vF17.PortionSkinData(vO32[v454.base], vO32[v454.glow]);
          v451.Lc = {};
          f119(p333.abilityDict, function (p361, p362) {
            p361 = parseInt(p361);
            v451.Lc[p361] = new vF17.AbilitySkinData(vO32[p362.base]);
          });
          var v455 = p333.abilityUnknown;
          v451.Mc = new vF17.AbilitySkinData(vO32[v455.base]);
          v451.Pc = {};
          f119(p333.teamDict, function (p363, p364) {
            p363 = parseInt(p363);
            v451.Pc[p363] = new vF17.TeamSkinData(p364.name, new vF17.WormSkinData("#" + vO31[p364.skin.prime], [], p364.skin.glow.map(function (p365) {
              return vO32[p365];
            })), new vF17.PortionSkinData([], vO32[p364.portion.glow]));
          });
          v451.Qc = new vF17.TeamSkinData({}, v451.Oc, v451.Kc);
          return v451;
        };
        f118.prototype.dd = function (p366) {
          var v456 = this.Nc[p366];
          if (v456) {
            if (Array.isArray(v456.$c)) {
              v456.$c.forEach(p367 => f2(p367));
            }
            if (Array.isArray(v456.Zc)) {
              v456.Zc.forEach(p368 => f2(p368));
            }
          }
          return v456 || this.Oc;
        };
        f118.prototype.ed = function (p369) {
          return this.Pc[p369] || this.Qc;
        };
        f118.prototype.fd = function (p370) {
          return this.Rc[p370] || this.Sc;
        };
        f118.prototype.gd = function (p371) {
          return this.Tc[p371] || this.Uc;
        };
        f118.prototype.hd = function (p372) {
          return this.Vc[p372] || this.Wc;
        };
        f118.prototype.jd = function (p373) {
          return this.Xc[p373] || this.Yc;
        };
        f118.prototype.kd = function (p374) {
          var v457 = this.Jc[p374];
          if (v457) {
            if (v457.$c) {
              f2(v457.$c);
            }
            if (v457.Zc) {
              f2(v457.Zc);
            }
          }
          return v457 || this.Kc;
        };
        f118.prototype.ld = function (p375) {
          return this.Lc[p375] || this.Mc;
        };
        f118.TeamSkinData = function (p376, p377, p378) {
          this.ad = p376;
          this.bd = p377;
          this.cd = p378;
        };
        f118.WormSkinData = function (p379, p380, p381) {
          this._c = p379;
          this.Zc = p380;
          this.$c = p381;
        };
        f118.WearSkinData = function (p382) {
          this.Zc = p382;
        };
        f118.PortionSkinData = function (p383, p384) {
          this.Zc = p383;
          this.$c = p384;
        };
        f118.AbilitySkinData = function (p385) {
          this.Zc = p385;
        };
        return f118;
      }();
      var vF18 = function () {
        function f120() {
          this.md = vF18.AudioState.ua;
          this.nd = false;
          this.od = false;
          this.pd = null;
          this.qd = null;
        }
        f120.prototype.a = function () {};
        f120.prototype.rd = function (p386) {
          this.od = p386;
        };
        f120.prototype.G = function (p387) {
          this.md = p387;
          this.sd();
        };
        f120.prototype.td = function (p388) {
          this.nd = p388;
          this.sd();
        };
        f120.prototype.sd = function () {};
        f120.prototype.ud = function (p389, p390) {
          if (!f88().p.W) {
            return null;
          }
          var v458 = p389[p390];
          if (v458 == null || v458.length == 0) {
            return null;
          } else {
            return v458[Math.floor(Math.random() * v458.length)].cloneNode();
          }
        };
        f120.prototype.vd = function (p391, p392, p393) {
          if (this.od && !(p393 <= 0)) {
            var v459 = this.ud(p391, p392);
            if (v459 != null) {
              v459.volume = Math.min(1, p393);
              v459.play();
            }
          }
        };
        f120.prototype.wd = function (p394, p395) {
          if (this.md.xd) {
            this.vd(app.q.yd, p394, p395);
          }
        };
        f120.prototype.zd = function (p396, p397) {
          if (this.md.Ad) {
            this.vd(app.q.Bd, p396, p397);
          }
        };
        f120.prototype.Cd = function () {};
        f120.prototype.Dd = function () {};
        f120.prototype.Ed = function () {};
        f120.prototype.Fd = function () {};
        f120.prototype.Gd = function () {};
        f120.prototype.Hd = function () {};
        f120.prototype.Id = function (p398, p399, p400) {};
        f120.prototype.Jd = function (p401) {};
        f120.prototype.Kd = function (p402) {};
        f120.prototype.Ld = function (p403) {};
        f120.prototype.Md = function (p404) {};
        f120.prototype.Nd = function (p405) {};
        f120.prototype.Od = function (p406) {};
        f120.prototype.Pd = function (p407) {};
        f120.prototype.Qd = function (p408) {};
        f120.prototype.Rd = function (p409) {};
        f120.prototype.Sd = function (p410) {};
        f120.prototype.Td = function (p411) {};
        f120.prototype.Ud = function (p412) {};
        f120.prototype.Vd = function (p413) {};
        f120.prototype.Wd = function (p414) {};
        f120.prototype.Xd = function (p415, p416) {};
        f120.prototype.Yd = function (p417) {};
        f120.prototype.Zd = function (p418, p419, p420) {};
        (function () {
          function f121(p421) {
            this.$d = new vF19(p421, 0.5);
            this.$d._d.loop = true;
            this.ae = false;
          }
          f121.prototype.be = function (p422) {
            if (p422) {
              this.b();
            } else {
              this.ce();
            }
          };
          f121.prototype.b = function () {
            if (!this.ae) {
              this.ae = true;
              this.$d.de = 0;
              this.$d.ee(1500, 100);
            }
          };
          f121.prototype.ce = function () {
            if (this.ae) {
              this.ae = false;
              this.$d.fe(1500, 100);
            }
          };
        })();
        (function () {
          function f122(p423) {
            this.ge = p423.map(function (p424) {
              return new vF19(p424, 0.4);
            });
            o(this.ge, 0, this.ge.length);
            this.he = null;
            this.ie = 0;
            this.ae = false;
            this.je = 10000;
          }
          function o(p425, p426, p427) {
            for (var v460 = p427 - 1; v460 > p426; v460--) {
              var v461 = p426 + Math.floor(Math.random() * (v460 - p426 + 1));
              var v462 = p425[v460];
              p425[v460] = p425[v461];
              p425[v461] = v462;
            }
          }
          f122.prototype.be = function (p428) {
            if (p428) {
              this.b();
            } else {
              this.ce();
            }
          };
          f122.prototype.b = function () {
            if (!this.ae) {
              this.ae = true;
              this.ke(1500);
            }
          };
          f122.prototype.ce = function () {
            if (this.ae) {
              this.ae = false;
              if (this.he != null) {
                this.he.fe(800, 50);
              }
            }
          };
          f122.prototype.ke = function (p429) {
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
              this.he.ee(p429, 100);
              var v463 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
              var vThis5 = this;
              var vSetTimeout = setTimeout(function () {
                if (vThis5.ae && vSetTimeout == vThis5.ie) {
                  vThis5.he.fe(vThis5.je, 100);
                  vThis5.he = vThis5.le();
                  vThis5.he._d.currentTime = 0;
                  vThis5.ke(vThis5.je);
                }
              }, v463);
              this.ie = vSetTimeout;
            }
          };
          f122.prototype.le = function () {
            var v464 = this.ge[0];
            var v465 = Math.max(1, this.ge.length / 2);
            o(this.ge, v465, this.ge.length);
            this.ge.push(this.ge.shift());
            return v464;
          };
        })();
        var vF19 = function () {
          function f124(p430, p431) {
            this._d = p430;
            this.me = p431;
            this.de = 0;
            p430.volume = 0;
            this.ne = 0;
            this.oe = false;
          }
          f124.prototype.ee = function (p432, p433) {
            console.log("fade IN " + this._d.src);
            this.pe(true, p432, p433);
          };
          f124.prototype.fe = function (p434, p435) {
            console.log("fade OUT " + this._d.src);
            this.pe(false, p434, p435);
          };
          f124.prototype.pe = function (p436, p437, p438) {
            if (this.oe) {
              clearInterval(this.ne);
            }
            var vThis6 = this;
            var v466 = 1 / (p437 / p438);
            var vSetInterval3 = setInterval(function () {
              if (vThis6.oe && vSetInterval3 != vThis6.ne) {
                clearInterval(vSetInterval3);
              } else if (p436) {
                vThis6.de = Math.min(1, vThis6.de + v466);
                vThis6._d.volume = vThis6.de * vThis6.me;
                if (vThis6.de >= 1) {
                  vThis6.oe = false;
                  clearInterval(vSetInterval3);
                }
              } else {
                vThis6.de = Math.max(0, vThis6.de - v466);
                vThis6._d.volume = vThis6.de * vThis6.me;
                if (vThis6.de <= 0) {
                  vThis6._d.pause();
                  vThis6.oe = false;
                  clearInterval(vSetInterval3);
                }
              }
            }, p438);
            this.oe = true;
            this.ne = vSetInterval3;
            this._d.play();
          };
          return f124;
        }();
        f120.AudioState = {
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
        return f120;
      }();
      var vF20 = function () {
        function f125(p439) {
          this.se = p439;
          this.te = p439.get()[0];
          this.ue = new vF13.ac({
            view: this.te,
            backgroundColor: vLN035,
            antialias: true
          });
          this.ve = new vF13.Zb();
          this.ve.sortableChildren = true;
          this.we = [];
          this.xe = [];
          this.ye = [];
          this.a();
        }
        var vLN035 = 0;
        function f126(p440, p441) {
          return p440 + Math.random(p441 - p440);
        }
        function f127(p442) {
          if (p442 >= 0) {
            return Math.cos(p442 % v438);
          } else {
            return Math.cos(p442 % v438 + v438);
          }
        }
        var vA21 = [{
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 1,
          De: 2,
          Ee: 16737962
        }, {
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 1.5,
          De: 1.5,
          Ee: 16746632
        }, {
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 2,
          De: 1,
          Ee: 16755302
        }, {
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 3,
          De: 2,
          Ee: 11206502
        }, {
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 2.5,
          De: 2.5,
          Ee: 8978312
        }, {
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 2,
          De: 3,
          Ee: 6750122
        }, {
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 5,
          De: 4,
          Ee: 6728447
        }, {
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 4.5,
          De: 4.5,
          Ee: 8947967
        }, {
          ze: f126(0, v438),
          Ae: f126(0, v438),
          Be: f126(0.1, 0.5),
          Ce: 4,
          De: 5,
          Ee: 11167487
        }];
        f125.prototype.a = function () {
          var vF88 = f88();
          this.ue.backgroundColor = vLN035;
          this.we = new Array(vA21.length);
          for (var vLN036 = 0; vLN036 < this.we.length; vLN036++) {
            this.we[vLN036] = new vF13.ec();
            this.we[vLN036].texture = vF88.q.Fe;
            this.we[vLN036].anchor.set(0.5);
            this.we[vLN036].zIndex = 1;
          }
          this.xe = new Array(vF88.q.Ge.length);
          for (var vLN037 = 0; vLN037 < this.xe.length; vLN037++) {
            this.xe[vLN037] = new vF13.ec();
            this.xe[vLN037].texture = vF88.q.Ge[vLN037];
            this.xe[vLN037].anchor.set(0.5);
            this.xe[vLN037].zIndex = 2;
            this.ve.addChild(this.xe[vLN037]);
          }
          this.ye = new Array(this.xe.length);
          for (var vLN038 = 0; vLN038 < this.ye.length; vLN038++) {
            this.ye[vLN038] = {
              He: Math.random(),
              Ie: Math.random(),
              Je: Math.random(),
              Ke: Math.random()
            };
          }
          this.Ra();
        };
        f125.sc = false;
        f125.Le = function (p443) {
          f125.sc = p443;
        };
        f125.prototype.Ra = function () {
          var v467 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          var v468 = this.se.width();
          var v469 = this.se.height();
          this.ue.resize(v468, v469);
          this.ue.resolution = v467;
          this.te.width = v467 * v468;
          this.te.height = v467 * v469;
          var v470 = Math.max(v468, v469) * 0.8;
          for (var vLN039 = 0; vLN039 < this.we.length; vLN039++) {
            this.we[vLN039].width = v470;
            this.we[vLN039].height = v470;
          }
        };
        f125.prototype.Pa = function (p444, p445) {
          var v471;
          if (f125.sc) {
            var v472 = p444 / 1000;
            var v473 = p445 / 1000;
            var v474 = this.se.width();
            var v475 = this.se.height();
            for (var vLN040 = 0; vLN040 < this.we.length; vLN040++) {
              var v476 = vA21[vLN040 % vA21.length];
              var v477 = this.we[vLN040];
              var vF127 = f127(v476.Ce * (v472 * 0.08) + v476.Ae);
              v471 = v476.De * (v472 * 0.08);
              r = undefined;
              var v478 = v471 >= 0 ? Math.sin(v471 % v438) : Math.sin(v471 % v438 + v438);
              var v479 = 0.2 + f127(v476.Ae + v476.Be * v472) * 0.2;
              v477.tint = v476.Ee;
              v477.alpha = v479;
              v477.position.set(v474 * (0.2 + (vF127 + 1) * 0.5 * 0.6), v475 * (0.1 + (v478 + 1) * 0.5 * 0.8));
            }
            var v480 = Math.max(v474, v475) * 0.05;
            for (var vLN041 = 0; vLN041 < this.xe.length; vLN041++) {
              var v481 = this.ye[vLN041];
              var v482 = this.xe[vLN041];
              var v483 = v438 * vLN041 / this.xe.length + v481.He;
              v481.Ke += v481.Ie * v473;
              if (v481.Ke > 1.3) {
                v481.He = Math.random() * v438;
                v481.Ie = (0.09 + Math.random() * 0.07) * 0.66;
                v481.Je = 0.15 + Math.random() * 0.7;
                v481.Ke = -0.3;
              }
              var v484 = v481.Je + Math.sin(Math.sin(v483 + v472 * 0.48) * 6) * 0.03;
              var v485 = v481.Ke;
              var vF99 = f99(Math.sin(Math.PI * v485), 0.1, 1);
              var v486 = (0.4 + (1 + Math.sin(v483 + v472 * 0.12)) * 0.5 * 1.2) * 0.5;
              var v487 = v483 + v481.Ie * 2 * v472;
              v482.alpha = vF99;
              v482.position.set(v474 * v484, v475 * v485);
              v482.rotation = v487;
              var v488 = v482.texture.width / v482.texture.height;
              v482.width = v486 * v480;
              v482.height = v486 * v480 * v488;
            }
            this.ue.render(this.ve, null, true);
          }
        };
        return f125;
      }();
      var vF21 = function () {
        function f128() {}
        f128.Na = "consent_state_2";
        f128.ya = "showPlayerNames";
        f128.Me = "musicEnabled";
        f128.Ne = "sfxEnabled";
        f128.Oe = "account_type";
        f128.va = "gameMode";
        f128.Aa = "nickname";
        f128.Ba = "skin";
        f128.d = "prerollCount";
        f128.La = "shared";
        return f128;
      }();
      v1006 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      var vO33 = {
        Oa: function (p446, p447) {
          return function (p448, p449, p450) {
            var v489 = false;
            for (var v490 = p450.length, vLN042 = 0, v491 = v490 - 1; vLN042 < v490; v491 = vLN042++) {
              if (p450[vLN042][1] > p449 != p450[v491][1] > p449 && p448 < (p450[v491][0] - p450[vLN042][0]) * (p449 - p450[vLN042][1]) / (p450[v491][1] - p450[vLN042][1]) + p450[vLN042][0]) {
                v489 = !v489;
              }
            }
            return v489;
          }(p447, p446, v1006);
        }
      };
      var vF22 = function () {
        function e(p451, p452) {
          var vUndefined3 = undefined;
          var vUndefined4 = undefined;
          if (p452) {
            vUndefined3 = 1.3;
            vUndefined4 = i(0.93, 0.34, 0.25);
          } else {
            vUndefined3 = 1.1;
            vUndefined4 = i(0.96, 0.82, 0);
          }
          return new vF962(p451, vUndefined4, true, 0.5, vUndefined3, 0.5, 0.7);
        }
        function i(p453, p454, p455) {
          return ((p453 * 255 & 255) << 16) + ((p454 * 255 & 255) << 8) + (p455 * 255 & 255);
        }
        var vF96 = f96(vF13.Zb, function () {
          vF13.Zb.call(this);
          this.Pe = [];
          this.Qe = 0;
        });
        vF96.prototype.Re = function (p456) {
          this.Qe += p456;
          if (this.Qe >= 1) {
            var v492 = Math.floor(this.Qe);
            this.Qe -= v492;
            var vF23 = function (p457) {
              var v493;
              v493 = p457 > 0 ? "+" + Math.floor(p457) : p457 < 0 ? "-" + Math.floor(p457) : "0";
              var v494 = Math.min(1.5, 0.5 + p457 / 600);
              var vUndefined5 = undefined;
              if (p457 < 1) {
                vUndefined5 = "0xFFFFFF";
              } else if (p457 < 30) {
                var v495 = (p457 - 1) / 29;
                vUndefined5 = i((1 - v495) * 1 + v495 * 0.96, (1 - v495) * 1 + v495 * 0.82, (1 - v495) * 1 + v495 * 0);
              } else if (p457 < 300) {
                var v496 = (p457 - 30) / 270;
                vUndefined5 = i((1 - v496) * 0.96 + v496 * 0.93, (1 - v496) * 0.82 + v496 * 0.34, (1 - v496) * 0 + v496 * 0.25);
              } else if (p457 < 700) {
                var v497 = (p457 - 300) / 400;
                vUndefined5 = i((1 - v497) * 0.93 + v497 * 0.98, (1 - v497) * 0.34 + v497 * 0, (1 - v497) * 0.25 + v497 * 0.98);
              } else {
                vUndefined5 = i(0.98, 0, 0.98);
              }
              var v498 = Math.random();
              var v499 = 1 + Math.random() * 0.5;
              return new vF962(v493, vUndefined5, true, 0.5, v494, v498, v499);
            }(v492);
            this.addChild(vF23);
            this.Pe.push(vF23);
          }
        };
        vF96.prototype.Se = function (p458) {
          if (p458) {
            zw_hscount += 1;
            vO9.hs = zw_hscount;
            if (zw_hscount % 10) {
              if (v162) {
                zw_hssound.play();
              }
            } else if (v162) {
              zw_laughsound.play();
            }
            var vE = e(vO9.nickname.substring(0, 16) + "-☠️-" + vO9.enemyNameHs.substring(0, 16), true);
            this.addChild(vE);
            this.Pe.push(vE);
          } else {
            zw_killcount += 1;
            vE = e(f91("index.game.floating.wellDone") + "✨", false);
            this.addChild(vE);
            this.Pe.push(vE);
          }
        };
        vF96.prototype.Te = function (p459, p460) {
          var v500 = f88().s.H.wb;
          var v501 = v500.ue.width / v500.ue.resolution;
          var v502 = v500.ue.height / v500.ue.resolution;
          for (var vLN043 = 0; vLN043 < this.Pe.length;) {
            var v503 = this.Pe[vLN043];
            v503.Ue = v503.Ue + p460 / 2000 * v503.Ve;
            v503.We = v503.We + p460 / 2000 * v503.Xe;
            v503.alpha = Math.sin(Math.PI * v503.We) * 0.5;
            v503.scale.set(v503.Ue);
            v503.position.x = v501 * (0.25 + v503.Ye * 0.5);
            v503.position.y = v503.Ze ? v502 * (1 - (1 + v503.We) * 0.5) : v502 * (1 - (0 + v503.We) * 0.5);
            if (v503.We > 1) {
              f105(v503);
              this.Pe.splice(vLN043, 1);
              vLN043--;
            }
            vLN043++;
          }
        };
        var vF962 = f96(vF13.fc, function (p461, p462, p463, p464, p465, p466, p467) {
          vF13.fc.call(this, p461, {
            fill: p462,
            fontFamily: vA6[v151],
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = p463;
          this.Ue = p464;
          this.Ve = p465;
          this.Ye = p466;
          this.We = 0;
          this.Xe = p467;
        });
        return vF96;
      }();
      function f131(p468, p469) {
        this.Gc = p468;
        this.Hc = p469;
      }
      var vO34 = {
        $e: 0,
        _e: 16
      };
      var vF24 = function () {
        function f132() {
          this.af = vO34.$e;
          this.bf = 0;
          this.ub = 500;
          this.cf = 4000;
          this.df = 7000;
        }
        f132.TEAM_DEFAULT = 0;
        f132.prototype.ef = function () {
          return this.ub * 1.02;
        };
        return f132;
      }();
      var vF25 = function () {
        function f133(p470) {
          this.se = p470;
          this.te = p470.get()[0];
          this.ue = new vF13.ac({
            view: this.te,
            backgroundColor: vLN044,
            antialias: true
          });
          this.ve = new vF13.Zb();
          this.ve.sortableChildren = true;
          this.ve.interactive = true;
          this.ve.interactiveChildren = true;
          this.ff = Math.floor(Math.random() * 360);
          this.gf = 0;
          this.hf = 0;
          this.if = 15;
          this.jf = 0.5;
          this.kf = 0;
          this.lf = new vF43();
          this.mf = new vF13.bc();
          this.nf = new vF13.Zb();
          this.pf = new vF13.Zb();
          this.pf.sortableChildren = true;
          this.qf = new vF13.Zb();
          this.rf = new vF13.Zb();
          this.rf.sortableChildren = true;
          this.sf = new vF13.Zb();
          this.tf = new vF963();
          this.uf = new vF26();
          this.vf = new vF27();
          this.wf = new vF22();
          this.xf = new vF13.ec();
          this.yf = {
            x: 0,
            y: 0
          };
          this.a();
        }
        var vLN044 = 0;
        f133.prototype.a = function () {
          v141 = [];
          v135 = -1;
          (v113 = new vF13.fc("", {
            fontFamily: vA6[v151],
            fontSize: 12,
            fill: "#f8d968",
            align: "center"
          })).x = 25;
          (v114 = new vF13.fc("", {
            fontFamily: vA6[v151],
            fontSize: 12,
            fill: "#f8d968",
            align: "center"
          })).x = 85;
          (v116 = new vF13.fc("", {
            fontFamily: vA6[v151],
            fontSize: 12,
            fill: "#f8d968",
            align: "center"
          })).x = 130;
          if (f29()) {
            v141[0] = new vF4({
              onChange: p471 => {
                p471.aradian = p471.angle * (Math.PI / 180);
                anApp.s.H.sk = p471.aradian <= Math.PI ? p471.aradian * -1 : Math.PI - (p471.aradian - Math.PI);
              }
            });
            v141[0].visible = false;
            v141[1] = new vF4({
              outer: vF13.ec.from("https://i.imgur.com/UKIZZmr.png"),
              inner: vF13.ec.from("https://i.imgur.com/IqQGK58.png"),
              onChange: p472 => {
                p472.aradian = p472.angle * (Math.PI / 180);
                anApp.s.H.sk = p472.aradian <= Math.PI ? p472.aradian * -1 : Math.PI - (p472.aradian - Math.PI);
              }
            });
            v141[1].visible = false;
            v141[2] = new vF4({
              outer: vF13.ec.from("https://i.imgur.com/Hg3sKn0.png"),
              inner: vF13.ec.from("https://i.imgur.com/ZFifUoX.png"),
              onChange: p473 => {
                p473.aradian = p473.angle * (Math.PI / 180);
                anApp.s.H.sk = p473.aradian <= Math.PI ? p473.aradian * -1 : Math.PI - (p473.aradian - Math.PI);
              }
            });
            v141[2].visible = false;
            for (let vLN045 = 0; vLN045 < v141.length; vLN045++) {
              this.rf.addChild(v141[vLN045]);
            }
          }
          (v110 = new vF13.fc("", {
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          })).x = 100;
          v110.y = 90;
          this.rf.addChild(v110);
          this.ue.backgroundColor = vLN044;
          this.lf.zf.zIndex = 10;
          this.ve.addChild(this.lf.zf);
          (v126 = new vF13.bc()).zIndex = 20;
          this.ve.addChild(v126);
          (v127 = new vF13.bc()).zIndex = 20;
          this.ve.addChild(v127);
          this.mf.zIndex = 20;
          this.ve.addChild(this.mf);
          this.nf.zIndex = 5000;
          this.ve.addChild(this.nf);
          this.pf.zIndex = 5100;
          this.ve.addChild(this.pf);
          this.qf.zIndex = 10000;
          this.ve.addChild(this.qf);
          this.xf.texture = f88().q.Af;
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
        f133.prototype.Ra = function () {
          var v504 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          var v505 = this.se.width();
          var v506 = this.se.height();
          this.ue.resize(v505, v506);
          this.ue.resolution = v504;
          this.te.width = v504 * v505;
          this.te.height = v504 * v506;
          this.jf = Math.min(Math.min(v505, v506), Math.max(v505, v506) * 0.625);
          this.xf.position.x = v505 / 2;
          this.xf.position.y = v506 / 2;
          this.xf.width = v505;
          this.xf.height = v506;
          this.tf.position.x = 60;
          this.tf.position.y = 60;
          this.uf.position.x = 110;
          this.uf.position.y = 10;
          this.vf.position.x = v505 - 225;
          this.vf.position.y = 1;
          this.tf.addChild(vO21.pointsContainer);
          this.tf.addChild(vO21.teamsContainer);
          if (vO8.top8) {
            this.tf.addChild(v118);
          } else {
            f105(v118);
          }
          if (vO8.killFeed) {
            this.tf.addChild(vO21.containerHsRec3);
          } else {
            f105(vO21.containerHsRec3);
          }
        };
        f133.prototype.Te = function (p474, p475) {
          var vF882 = f88();
          this.if = 15;
          this.nf.removeChildren();
          this.pf.removeChildren();
          this.qf.removeChildren();
          this.sf.removeChildren();
          this.lf.Bf(p474.af == vO34.$e ? vF882.q.Cf : vF882.q.Df);
          if (vO8 && vO8.backgroundSolid || vO8.sectores) {
            f64();
          } else {
            v126.removeChildren();
            v126.clear();
            v126.lineStyle(1, 16711680, 1);
            v126.drawCircle(0, 0, 500);
            v126.endFill();
          }
          this.vf.Ef = p475;
          this.sf.visible = p475;
        };
        f133.prototype.Pa = function (p476, p477) {
          if (this.ue.width <= 5) {
            return;
          }
          const v507 = f88().o;
          const v508 = v507.N;
          const v509 = this.ue.width / this.ue.resolution;
          const v510 = this.ue.height / this.ue.resolution;
          const v511 = this.tf;
          this.if = f100(this.if, v507.jb, p477, 0.002);
          const v512 = this.if * v109;
          const v513 = this.jf / v512;
          const v514 = v508.Ff[vF15.ZOOM_TYPE];
          const v515 = v514 && v514.sc;
          this.kf = f98(0, 1, this.kf + p477 / 1000 * ((v515 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = (this.ff + p477 * 0.01) % 360;
          this.gf = Math.sin(p476 / 1200 * v159);
          const v516 = v508.Gf();
          const v517 = this.yf;
          v517.x = f101(v517.x, v516.x, p477, vO8.smoothCamera, 33.333);
          v517.y = f101(v517.y, v516.y, p477, 0.5, 33.333);
          const vV513 = v513;
          this.ve.scale.set(vV513);
          this.ve.position.set(v509 / 2 - v517.x * vV513, v510 / 2 - v517.y * vV513);
          const v518 = v509 / (vV513 * 2);
          const v519 = v510 / (vV513 * 2);
          v507.yb(v517.x - v518 * 1.3, v517.x + v518 * 1.3, v517.y - v519 * 1.3, v517.y + v519 * 1.3);
          this.lf.Te(v517.x, v517.y, v518 * 2, v519 * 2);
          const v520 = v507.fb.ub;
          if (vO8.dead) {
            window.coords.playerX = v511.Jf.position.x;
            window.coords.playerY = v511.Jf.position.y;
          }
          vO9.playerX = v511.Jf.position.x;
          vO9.playerY = v511.Jf.position.y;
          v127.clear();
          if (vO8.laserHS) {
            v127.lineStyle(0.1, "0x" + vO6.laserColor, 1);
            v127.moveTo(v516.x, v516.y);
            v127.lineTo(0, 0);
          }
          const v521 = Math.hypot(v516.x, v516.y);
          if (v521 > v520 - 10) {
            this.hf = f98(0, 1, 1 + (v521 - v520) / 10);
            const v522 = this.ff * v159 / 360;
            const v523 = Math.cos(v522);
            const v524 = Math.sin(v522);
            const v525 = v523 * (1 - this.hf) + this.hf * 1;
            const v526 = v524 * (1 - this.hf);
            const v527 = (Math.atan2(v526, v525) + v159) % v159 * (360 / v159);
            const v528 = this.hf * (0.5 + this.gf * 0.5);
            const vF108 = f108(Math.floor(v527), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF108[0], vF108[1], vF108[2], 0.1 + v528 * 0.2);
          } else {
            this.hf = 0;
            const vF1082 = f108(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF1082[0], vF1082[1], vF1082[2], 0.1);
          }
          const v529 = this.sf.children;
          const v530 = v529.length;
          for (let vLN046 = 0; vLN046 < v530; vLN046++) {
            const v531 = v529[vLN046];
            if (v531.If) {
              v531.position.x = v509 / 2 - (v517.x - v531.If.x) * vV513;
              v531.position.y = v510 / 2 - (v517.y - v531.If.y) * vV513;
            }
          }
          v511.Jf.position.x = v516.x / v520 * v511.Kf;
          v511.Jf.position.y = v516.y / v520 * v511.Kf;
          v511.WLp.text = parseInt(zw_hscount);
          v511.WLp.position.x = -25 - v511.WLp.width / 2;
          v511.MLb.text = parseInt(zw_killcount);
          v511.MLb.position.x = 25 - v511.MLb.width / 2;
          if (vO6.hsTextColor !== v156) {
            const v532 = "0x" + vO6.hsTextColor;
            v511.WLp.style.fill = v532;
            v148.style.fill = v532;
            v156 = vO6.hsTextColor;
          }
          if (vO6.killTextColor !== v157) {
            const v533 = "0x" + vO6.killTextColor;
            v511.MLb.style.fill = v533;
            v147.style.fill = v533;
            v157 = vO6.killTextColor;
          }
          if (vO6.minimapBorderColor !== v158) {
            v149.tint = "0x" + vO6.minimapBorderColor;
            v158 = vO6.minimapBorderColor;
          }
          this.uf.Qa(p476);
          this.wf.Te(p476, p477);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
          const v534 = performance.now();
          vLN07 += v534 - v146;
          v146 = v534;
          vLN06++;
          if (vLN06 >= vLN20) {
            const v535 = Math.round(1000 / (vLN07 / vLN06));
            v116.text = v535 + " FPS";
            v116.style.fill = f28(v535);
            vLN06 = 0;
            vLN07 = 0;
          }
        };
        f133.prototype.Lf = function (p478, p479) {
          p479.Of.Nf.Mf().zIndex = (p478 + 2147483648) / 4294967296 * 5000;
          this.nf.addChild(p479.Of.Pf.Mf());
          this.pf.addChild(p479.Of.Nf.Mf());
        };
        f133.prototype.Qf = function (p480, p481, p482, p483, p484) {
          $(".Worm_cerca").text(" : " + p482.text);
          p481.Rf.zIndex = f88().o.fb.bf ? 0 : 10 + (p480 + 32768) / 65536 * 5000;
          this.qf.addChild(p481.Rf);
          if (p480 != f88().o.fb.bf) {
            this.sf.addChild(p482);
            this.sf.addChild(p483);
            this.sf.addChild(p484);
          }
          if (p482.text === f88().o.N.Mb.ad) {
            p482.text = "ㅤ";
          }
          this.sf.addChild(p482);
          this.sf.addChild(p483);
          this.sf.addChild(p484);
        };
        var vF963 = f96(vF13.Zb, function () {
          vF13.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF13.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF13.bc();
          (v149 = new vF13.bc()).beginFill("black", 0.4);
          v149.drawCircle(0, 0, this.Kf);
          v149.endFill();
          v149.lineStyle(2, 16225317);
          v149.drawCircle(0, 0, this.Kf);
          v149.moveTo(0, -this.Kf);
          v149.lineTo(0, +this.Kf);
          v149.moveTo(-this.Kf, 0);
          v149.lineTo(+this.Kf, 0);
          v149.endFill();
          this.Sf.alpha = 0.5;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(vO9.teamColor);
          this.Jf.drawCircle(0, 0, this.Kf * 0.09);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.09);
          this.Jf.endFill();
          this.addChild(v149);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
          (v123 = new vF13.ec()).anchor.set(0.5);
          v123.alpha = 0.5;
          (v122 = new vF13.bc()).beginFill("black", 0.4);
          v122.drawCircle(0, 0, 40);
          v122.endFill();
          v122.lineStyle(2, 14930642);
          v122.drawCircle(0, 0, 40);
          v122.moveTo(0, -40);
          v122.lineTo(0, 40);
          v122.moveTo(-40, 0);
          v122.lineTo(40, 0);
          v122.endFill();
          v122.y = 220;
          v122.x = 150;
          v122.addChild(v123);
          console.log(this.Kf);
          (v148 = new vF13.fc("HS", {
            fontFamily: vA6[v151],
            fontSize: 16,
            fill: "0x" + vO6.hsTextColor,
            align: "center"
          })).position.y = 50;
          v148.position.x = -35;
          (v147 = new vF13.fc("KILL", {
            fontFamily: vA6[v151],
            fontSize: 16,
            fill: "0x" + vO6.killTextColor,
            align: "center"
          })).position.y = 50;
          v147.position.x = 10;
          this.addChild(v148);
          this.addChild(v147);
          zw_killcount = 0;
          zw_hscount = 0;
          this.WLp = new vF13.fc("", {
            fontFamily: vA6[v151],
            fontSize: 14,
            fill: "#f8d968",
            align: "center"
          });
          this.WLp.position.y = 67;
          this.WLp.position.x = -45;
          this.MLb = new vF13.fc("", {
            fontFamily: vA6[v151],
            fontSize: 14,
            fill: "#f8d968",
            align: "center"
          });
          this.MLb.position.y = 67;
          this.MLb.position.x = 20;
          this.addChild(this.WLp);
          this.addChild(this.MLb);
          let v536 = new vF13._b(vF13.$b.from("https://i.imgur.com/VPkrI9l.png"));
          let v537 = new vF13.ec();
          v537.texture = v536;
          v537.width = 100;
          v537.height = 100;
          v537.x = -50;
          v537.y = -50;
          this.addChild(v537);
          let v538 = new vF13.ec();
          v538.texture = v536;
          v538.width = 100;
          v538.height = 100;
          v538.x = -50;
          v538.y = -50;
          v122.addChild(v538);
          if (f29()) {
            var v539 = document.getElementById("game-cont");
            v136 = 0;
            v137 = -1;
            v140 = 0;
            v139 = [];
            (v138 = [])[0] = new vF13.ec.from("https://i.imgur.com/aOyOob6.png");
            v138[0].width = 80;
            v138[0].height = 40;
            v138[0].x = v539.offsetWidth * 0.5 - 100;
            v138[0].y = -60;
            v138[0].on("tap", () => {
              v136++;
              v135 = 0;
              v140 = -1;
              for (let vLN047 = 0; vLN047 < v139.length; vLN047++) {
                v139[vLN047].visible = false;
              }
              for (let vLN048 = 0; vLN048 < v138.length; vLN048++) {
                v138[vLN048].visible = v136 === vLN048;
              }
            });
            v138[1] = new vF13.ec.from("https://i.imgur.com/9ui2KwE.png");
            v138[1].width = 80;
            v138[1].height = 40;
            v138[1].x = v539.offsetWidth * 0.5 - 100;
            v138[1].y = -60;
            v138[1].visible = false;
            v138[1].on("tap", () => {
              if (v137 === 1) {
                v142.visible = false;
                v143.visible = false;
                v135 = 1;
                v136++;
                for (let vLN049 = 0; vLN049 < v138.length; vLN049++) {
                  v138[vLN049].visible = v136 === vLN049;
                }
              } else {
                if (++v137 == 0) {
                  v142.x = 15;
                  v143.x = -250 + v539.offsetWidth;
                  v142.visible = true;
                  v143.visible = true;
                }
                if (v137 === 1) {
                  v142.x = -250 + v539.offsetWidth;
                  v143.x = 15;
                }
                v140 = 1;
                v135 = -1;
                for (let vLN050 = 0; vLN050 < v139.length; vLN050++) {
                  v139[vLN050].visible = v140 === vLN050;
                }
              }
            });
            v138[2] = new vF13.ec.from("https://i.imgur.com/NKAyYa8.png");
            v138[2].width = 80;
            v138[2].height = 40;
            v138[2].x = v539.offsetWidth * 0.5 - 100;
            v138[2].y = -60;
            v138[2].visible = false;
            v138[2].on("tap", () => {
              v136++;
              v140 = 2;
              v135 = 2;
              for (let vLN051 = 0; vLN051 < v139.length; vLN051++) {
                v139[vLN051].visible = v140 === vLN051;
              }
              for (let vLN052 = 0; vLN052 < v138.length; vLN052++) {
                v138[vLN052].visible = v136 === vLN052;
              }
            });
            v138[3] = new vF13.ec.from("https://i.imgur.com/n1jVrwm.png");
            v138[3].width = 80;
            v138[3].height = 40;
            v138[3].x = v539.offsetWidth * 0.5 - 100;
            v138[3].y = -60;
            v138[3].visible = false;
            v138[3].on("tap", () => {
              v136 = 0;
              v137 = -1;
              v140 = 0;
              v135 = -1;
              for (let vLN053 = 0; vLN053 < v139.length; vLN053++) {
                v139[vLN053].visible = v140 === vLN053;
              }
              for (let vLN054 = 0; vLN054 < v138.length; vLN054++) {
                v138[vLN054].visible = v136 === vLN054;
              }
            });
            v139[0] = new vF13.ec.from("https://i.imgur.com/4ccZ556.png");
            v139[0].width = 16;
            v139[0].height = 16;
            v139[0].x = 0;
            v139[0].y = 0;
            v139[0].alpha = 0;
            v139[1] = new vF13.ec.from("https://i.imgur.com/hUVCdUv.png");
            v139[1].width = 16;
            v139[1].height = 16;
            v139[1].x = 0;
            v139[1].y = 0;
            v139[1].visible = false;
            v139[2] = new vF13.ec.from("https://i.imgur.com/WqWsDfi.png");
            v139[2].width = 16;
            v139[2].height = 16;
            v139[2].x = 0;
            v139[2].y = 0;
            v139[2].visible = false;
            (v142 = new vF13.ec.from("https://i.imgur.com/mHp0ozi.png")).width = 100;
            v142.height = 100;
            v142.x = 15;
            v142.y = -210 + v539.offsetHeight;
            v142.visible = false;
            (v143 = new vF13.ec.from("https://i.imgur.com/0G8cFtP.png")).width = 80;
            v143.height = 80;
            v143.x = -250 + v539.offsetWidth;
            v143.y = -200 + v539.offsetHeight;
            v143.visible = false;
            v143.alpha = 0.5;
            this.addChild(v142);
            this.addChild(v143);
            for (let vLN055 = 0; vLN055 < v138.length; vLN055++) {
              this.addChild(v138[vLN055]);
            }
            for (let vLN056 = 0; vLN056 < v139.length; vLN056++) {
              this.addChild(v139[vLN056]);
            }
          }
        });
        var vF26 = function () {
          var vF964 = f96(vF13.Zb, function () {
            vF13.Zb.call(this);
            this.Tf = {};
          });
          vF964.prototype.Qa = function (p485) {
            var v540;
            var v541 = 0.5 + Math.cos(v438 * (p485 / 1000 / 1.6)) * 0.5;
            for (v540 in this.Tf) {
              var v542 = this.Tf[v540];
              var v543 = v542.Uf;
              v542.alpha = 1 - v543 + v543 * v541;
            }
          };
          vF964.prototype.Te = function (p486) {
            var v544;
            for (v544 in this.Tf) {
              if (p486[v544] == null || !p486[v544].sc) {
                f105(this.Tf[v544]);
                delete this.Tf[v544];
              }
            }
            var v545;
            var vLN057 = 0;
            for (v545 in p486) {
              var v546 = p486[v545];
              if (v546.sc) {
                var v547 = this.Tf[v545];
                if (!v547) {
                  var v548 = f88().p.Dc().ld(v546.rc).Zc;
                  (v547 = new vF965()).texture = v548.Hc;
                  v547.width = 40;
                  v547.height = 40;
                  this.Tf[v545] = v547;
                  this.addChild(v547);
                }
                f76(this, v545, v546.tc);
                v547.Uf = v546.tc;
                v547.position.x = vLN057;
                vLN057 += 40;
              }
            }
          };
          var vF965 = f96(vF13.ec, function () {
            vF13.ec.call(this);
            this.Uf = 0;
          });
          return vF964;
        }();
        var vF27 = function () {
          var vF966 = f96(vF13.Zb, function () {
            vF13.Zb.call(this);
            this.Ef = true;
            this.Vf = 12;
            this.Wf = 9;
            this.Pe = [];
            for (var vLN058 = 0; vLN058 < 14; vLN058++) {
              this.Xf();
            }
          });
          vF966.prototype.Te = function (p487) {
            if (v128) {
              this.addChild(v128);
            }
            if (v129) {
              this.addChild(v129);
            }
            if (v131) {
              this.addChild(v131);
            }
            if (v132) {
              this.addChild(v132);
            }
            if (v113.text !== "") {
              this.addChild(v113);
              if (vO8.minimapTeamcod) {
                this.addChild(v120);
              } else {
                this.removeChild(v120);
              }
            }
            if (vO9 && vO10.players.size > 0) {
              f37(vO9.playerX, vO9.playerY);
            }
            var vF883 = f88();
            var v549 = vF883.o.fb.af == vO34._e;
            var vLN059 = 0;
            var vLN060 = 0;
            if (vLN060 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN060].Yf(1, "white");
            this.Pe[vLN060].Zf("", v113.text === "" ? "Top " + v125 : "", `(${vF883.o.tb} 🌎)`);
            this.Pe[vLN060].position.y = vLN059;
            vLN059 += this.Vf;
            vLN060 += 1;
            if (p487.$f.length > 0) {
              vLN059 += this.Wf;
            }
            for (var vLN061 = 0; vLN061 < p487.$f.length; vLN061++) {
              var v550 = p487.$f[vLN061];
              var v551 = vF883.p.Dc().ed(v550._f);
              if (vLN060 >= this.Pe.length) {
                this.Xf();
              }
              this.Pe[vLN060].Yf(0.8, v551.bd._c);
              console.log(v551);
              this.Pe[vLN060].Zf("" + (vLN061 + 1), "Equipos / Teams", "" + Math.floor(v550.M));
              this.Pe[vLN060].position.y = vLN059;
              vLN059 += this.Vf;
              vLN060 += 1;
            }
            if (p487.ag.length > 0) {
              vLN059 += this.Wf;
            }
            for (var vLN062 = 0; vLN062 < p487.ag.length; vLN062++) {
              var v552 = p487.ag[vLN062];
              var v553 = vF883.o.fb.bf == v552.bg;
              var vUndefined6 = undefined;
              var vUndefined7 = undefined;
              if (v553) {
                vUndefined6 = "white";
                vUndefined7 = vF883.o.N.Mb.ad;
              } else {
                var v554 = vF883.o.hb[v552.bg];
                if (v554 != null) {
                  vUndefined6 = v549 ? vF883.p.Dc().ed(v554.Mb.cg).bd._c : vF883.p.Dc().dd(v554.Mb.dg)._c;
                  vUndefined7 = this.Ef ? v554.Mb.ad : "---";
                } else {
                  vUndefined6 = "gray";
                  vUndefined7 = "?";
                }
              }
              if (v553) {
                vLN059 += this.Wf;
              }
              if (vLN060 >= this.Pe.length) {
                this.Xf();
              }
              this.Pe[vLN060].Yf(v553 ? 1 : 0.8, vUndefined6);
              if (vF883.o.O === vLN060) {
                this.Pe[vLN060].Yf(1, "white");
              }
              var v555 = Math.floor(v552.M);
              v555.customFormat();
              this.Pe[vLN060].Zf("" + (vLN062 + 1), vUndefined7, "" + v555.customFormat());
              this.Pe[vLN060].position.y = vLN059;
              vLN059 += this.Vf;
              vLN060 += 1;
              if (v553) {
                vLN059 += this.Wf;
              }
            }
            for (vF883.o.O > p487.ag.length && (vLN059 += this.Wf, vLN060 >= this.Pe.length && this.Xf(), this.Pe[vLN060].Yf(1, "#f8d968"), window.tuNewScore = Math.floor(vF883.o.N.M), window.tuNewScore.customFormat(), this.Pe[vLN060].Zf("" + vF883.o.O, vF883.o.N.Mb.ad, "" + window.tuNewScore.customFormat()), this.Pe[vLN060].position.y = vLN059, vLN059 += this.Vf, vLN060 += 1, vLN059 += this.Wf); this.Pe.length > vLN060;) {
              f105(this.Pe.pop());
            }
          };
          vF966.prototype.Xf = function () {
            var v556 = new vV557();
            v556.position.y = 0;
            if (this.Pe.length > 0) {
              v556.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
            }
            this.Pe.push(v556);
            this.addChild(v556);
          };
          var v557;
          (v557 = f96(vF13.Zb, function () {
            vF13.Zb.call(this);
            this.eg = new vF13.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: vA6[v151],
              fontSize: 12,
              fill: "white"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = 30;
            this.addChild(this.eg);
            this.fg = new vF13.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: vA6[v151],
              fontSize: 12,
              fill: "white"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 35;
            this.addChild(this.fg);
            this.gg = new vF13.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: vA6[v151],
              fontSize: 12,
              fill: "white"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 220;
            this.addChild(this.gg);
          })).prototype.Zf = function (p488, p489, p490) {
            this.eg.text = p488;
            this.gg.text = p490;
            var vP489 = p489;
            for (this.fg.text = vP489; this.fg.width > 100;) {
              vP489 = vP489.substring(0, vP489.length - 1);
              this.fg.text = vP489 + "..";
            }
          };
          v557.prototype.Yf = function (p491, p492) {
            this.eg.alpha = p491;
            this.eg.style.fill = p492;
            this.fg.alpha = p491;
            this.fg.style.fill = p492;
            this.gg.alpha = p491;
            this.gg.style.fill = p492;
          };
          var vV557 = v557;
          return vF966;
        }();
        return f133;
      }();
      var vF28 = function () {
        function f134(p493) {
          this.o = p493;
          this.hg = [];
          this.ig = 0;
        }
        f134.prototype.Xb = function (p494) {
          this.hg.push(new DataView(p494));
        };
        f134.prototype.Sb = function () {
          this.hg = [];
          this.ig = 0;
        };
        f134.prototype.Bb = function () {
          if (this.hg.length === 0) {
            return;
          }
          let v558 = navigator.hardwareConcurrency ? Math.max(5, navigator.hardwareConcurrency) : 10;
          const vF29 = () => {
            let vLN063 = 0;
            const v559 = performance.now();
            while (vLN063 < v558 && this.hg.length > 0) {
              const v560 = this.hg.shift();
              try {
                this.jg(v560);
              } catch (e42) {
                console.log("DataReader error: " + e42);
              }
              vLN063++;
              if (performance.now() - v559 > 6) {
                break;
              }
            }
            if (this.hg.length > 0) {
              setTimeout(vF29, 0);
            }
          };
          vF29();
        };
        f134.prototype.jg = function (p495) {
          switch (p495.mc(0) & 255) {
            case 0:
              this.kg(p495, 1);
              return;
            case 1:
              this.lg(p495, 1);
              return;
            case 2:
              this.mg(p495, 1);
              return;
            case 3:
              this.ng(p495, 1);
              return;
            case 4:
              this.og(p495, 1);
              return;
            case 5:
              this.pg(p495, 1);
              return;
          }
        };
        f134.prototype.kg = function (p496, p497) {
          console.log("sgp1");
          this.o.fb.af = p496.mc(p497);
          p497 += 1;
          var v561 = p496.nc(p497);
          p497 += 2;
          this.o.fb.bf = v561;
          this.o.N.Mb.Lb = v561;
          this.o.fb.ub = p496.pc(p497);
          p497 += 4;
          this.o.fb.cf = p496.pc(p497);
          p497 += 4;
          this.o.fb.df = p496.pc(p497);
          p497 += 4;
          f88().s.H.wb.Te(this.o.fb, f88().s.xa.wa());
          console.log("sgp2");
          return p497;
        };
        f134.prototype.lg = function (p498, p499) {
          var v562 = this.ig++;
          var v563 = p498.nc(p499);
          p499 += 2;
          var vUndefined8 = undefined;
          vUndefined8 = this.qg(p498, p499);
          p499 += this.rg(vUndefined8);
          for (var vLN064 = 0; vLN064 < vUndefined8; vLN064++) {
            p499 = this.sg(p498, p499);
          }
          vUndefined8 = this.qg(p498, p499);
          p499 += this.rg(vUndefined8);
          for (var vLN065 = 0; vLN065 < vUndefined8; vLN065++) {
            p499 = this.tg(p498, p499);
          }
          vUndefined8 = this.qg(p498, p499);
          p499 += this.rg(vUndefined8);
          for (var vLN066 = 0; vLN066 < vUndefined8; vLN066++) {
            p499 = this.ug(p498, p499);
          }
          vUndefined8 = this.qg(p498, p499);
          p499 += this.rg(vUndefined8);
          for (var vLN067 = 0; vLN067 < vUndefined8; vLN067++) {
            p499 = this.vg(p498, p499);
          }
          vUndefined8 = this.qg(p498, p499);
          p499 += this.rg(vUndefined8);
          for (var vLN068 = 0; vLN068 < vUndefined8; vLN068++) {
            p499 = this.wg(p498, p499);
          }
          vUndefined8 = this.qg(p498, p499);
          p499 += this.rg(vUndefined8);
          for (var vLN069 = 0; vLN069 < vUndefined8; vLN069++) {
            p499 = this.xg(p498, p499);
          }
          vUndefined8 = this.qg(p498, p499);
          p499 += this.rg(vUndefined8);
          for (var vLN070 = 0; vLN070 < vUndefined8; vLN070++) {
            p499 = this.yg(p498, p499);
          }
          vUndefined8 = this.qg(p498, p499);
          p499 += this.rg(vUndefined8);
          for (var vLN071 = 0; vLN071 < vUndefined8; vLN071++) {
            p499 = this.zg(p498, p499);
          }
          if (v562 > 0) {
            p499 = this.Ag(p498, p499);
          }
          this.o.Qb(v562, v563);
          return p499;
        };
        f134.prototype.vg = function (p500, p501) {
          var v564 = new vF46.Config();
          v564.Lb = p500.nc(p501);
          p501 += 2;
          v564.cg = this.o.fb.af == vO34._e ? p500.mc(p501++) : vF24.TEAM_DEFAULT;
          v564.dg = p500.nc(p501);
          let vP501 = p501;
          p501 += 2;
          v564.Bg = p500.nc(p501);
          let vP5012 = p501;
          p501 += 2;
          v564.Cg = p500.nc(p501);
          let vP5013 = p501;
          p501 += 2;
          v564.Dg = p500.nc(p501);
          let vP5014 = p501;
          p501 += 2;
          v564.Eg = p500.nc(p501);
          let vP5015 = p501;
          p501 += 2;
          var v565 = p500.mc(p501);
          p501 += 1;
          var vLS2 = "";
          for (var vLN072 = 0; vLN072 < v565; vLN072++) {
            vLS2 += String.fromCharCode(p500.nc(p501));
            p501 += 2;
          }
          if (p501 > 210) {
            for (let v566 in this.o.hb) {
              if (vO8.chngBotSkins) {
                var v567 = this.o.hb[v566].Mb.dg;
                if (v567 >= 32 && v567 <= 35) {
                  var v568 = Math.floor(Math.random() * 49) + 1500;
                  this.o.hb[v566].Mb.dg = v568;
                }
              }
              if (vO8.chngPersonsSkins) {
                if (/^(.+?)@(.+)/.test(this.o.hb[v566].Mb.ad)) {
                  const v569 = this.o.hb[v566].Mb.dg;
                  if (v569 >= 32 && v569 <= 35) {
                    const v570 = Math.floor(Math.random() * 49) + 1500;
                    this.o.hb[v566].Mb.dg = v570;
                  }
                }
                if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[v566].Mb.ad)) {
                  const v571 = this.o.hb[v566].Mb.dg;
                  if (v571 >= 32 && v571 <= 35) {
                    const v572 = Math.floor(Math.random() * 49) + 1500;
                    this.o.hb[v566].Mb.dg = v572;
                  }
                }
              }
              if (/^(.{16})(ZW_\d{9})$/.test(this.o.hb[v566].Mb.ad)) {
                console.log("nombre: " + this.o.hb[v566].Mb.ad);
                var v573 = this.o.hb[v566].Mb.ad.substr(-10);
                let v574 = v573.substr(1, 4);
                console.log("skinId_A: " + v574);
                let v575 = v573.substr(5, 5);
                let v576 = v573.substr(6, 3);
                let v577 = v573.substr(9, 3);
                if (v574 !== "0000" && vO8.visibleSkin.indexOf(parseInt(v574)) !== -1) {
                  this.o.hb[v566].Mb.dg = parseInt(v574);
                }
                if (v575 !== "00000") {
                  this.o.hb[v566].Mb.Eg = parseInt(v575);
                }
                if (v576 !== "000") {
                  this.o.hb[v566].Mb.Bg = parseInt(v576);
                }
                if (v577 !== "000") {
                  this.o.hb[v566].Mb.Cg = parseInt(v577);
                }
              }
            }
          }
          if (f88().o.N.Mb.Lb === v564.Lb) {
            v564.dg = vO8?.PropertyManager?.rh ?? 0;
            v564.Bg = vO8?.PropertyManager?.sh ?? 0;
            v564.Cg = vO8?.PropertyManager?.th ?? 0;
            v564.Dg = vO8?.PropertyManager?.uh ?? 0;
            v564.Eg = vO8?.PropertyManager?.vh ?? 0;
            p500.setInt16(vP501, v564.dg);
            p500.setInt16(vP5012, v564.Bg);
            p500.setInt16(vP5013, v564.Cg);
            p500.setInt16(vP5014, v564.Dg);
            p500.setInt16(vP5015, v564.Eg);
            vO4.aload = true;
            vO4.aId = vP501;
          }
          v564.ad = vLS2;
          if (this.o.fb.bf === v564.Lb) {
            this.o.N.Fg(v564);
            v564.Mb = v564.Lb;
            v564.bd = v564.ad;
          } else {
            var v578 = this.o.hb[v564.Lb];
            if (v578 != null) {
              v578.Kb();
            }
            var v579 = new vF46(this.o.fb);
            v579.vb(f88().s.H.wb);
            this.o.hb[v564.Lb] = v579;
            v579.Fg(v564);
          }
          return p501;
        };
        f134.prototype.wg = function (p502, p503) {
          var v580 = p502.nc(p503);
          p503 += 2;
          var v581 = p502.mc(p503);
          p503++;
          var v582 = !!(v581 & 1);
          var v583 = !!(v581 & 2);
          var vLN073 = 0;
          if (v582) {
            vLN073 = p502.nc(p503);
            p503 += 2;
          }
          var v584 = this.Gg(v580);
          if (v584 === undefined) {
            return p503;
          }
          v584.Ib = false;
          if (!v584.Hb) {
            return p503;
          }
          var v585 = this.Gg(v580);
          if (v582 && v585 !== undefined && v585.Hb) {
            if (vLN073 === this.o.fb.bf) {
              var v586 = this.o.N.Gf();
              var v587 = v584.Hg(v586.x, v586.y);
              if (v583 === true) {
                vO9.enemyNameHs = v584.Mb.ad;
              }
              Math.max(0, 1 - v587.distance / (this.o.jb * 0.5));
              if (v587.distance < this.o.jb * 0.5) {
                f88().s.H.wb.wf.Se(v583);
              }
            } else if (v580 === this.o.fb.bf) ;else {
              var v588 = this.o.N.Gf();
              var v589 = v584.Hg(v588.x, v588.y);
              Math.max(0, 1 - v589.distance / (this.o.jb * 0.5));
            }
          } else if (v580 === this.o.fb.bf) ;else {
            var v590 = this.o.N.Gf();
            var v591 = v584.Hg(v590.x, v590.y);
            Math.max(0, 1 - v591.distance / (this.o.jb * 0.5));
          }
          return p503;
        };
        f134.prototype.zg = function (p504, p505) {
          var v592 = p504.nc(p505);
          p505 += 2;
          var v593 = v592 === this.o.fb.bf ? null : this.o.hb[v592];
          var v594 = p504.mc(p505);
          p505 += 1;
          var v595 = !!(v594 & 1);
          if (v594 & 2) {
            var v596 = p504.pc(p505);
            p505 += 4;
            if (v593) {
              v593.Ig(v596);
            }
          }
          var v597 = this.Jg(p504.mc(p505++), p504.mc(p505++), p504.mc(p505++));
          var v598 = this.Jg(p504.mc(p505++), p504.mc(p505++), p504.mc(p505++));
          if (v593) {
            v593.Kg(v597, v598, v595);
            var v599 = this.o.N.Gf();
            var v600 = v593.Gf();
            var v601 = Math.max(0, 1 - Math.hypot(v599.x - v600.x, v599.y - v600.y) / (this.o.jb * 0.5));
            f88().r.Zd(v601, v592, v595);
          }
          var v602;
          var v603 = this.qg(p504, p505);
          p505 += this.rg(v603);
          if (v593) {
            for (v602 in v593.Ff) {
              var v604 = v593.Ff[v602];
              if (v604) {
                v604.sc = false;
              }
            }
          }
          for (var vLN074 = 0; vLN074 < v603; vLN074++) {
            var v605 = p504.mc(p505);
            p505++;
            var v606 = p504.mc(p505);
            p505++;
            if (v593) {
              var v607 = v593.Ff[v605];
              if (!v607) {
                v607 = v593.Ff[v605] = new vF15(v605);
              }
              v607.sc = true;
              v607.tc = Math.min(1, Math.max(0, v606 / 100));
            }
          }
          return p505;
        };
        f134.prototype.Ag = function (p506, p507) {
          var v608 = this.o.N;
          var v609 = p506.mc(p507);
          p507 += 1;
          var v610 = !!(v609 & 1);
          var v611 = !!(v609 & 4);
          if (v609 & 2) {
            var v612 = v608.M;
            v608.Ig(p506.pc(p507));
            p507 += 4;
            if ((v612 = v608.M - v612) > 0) {
              f88().s.H.wb.wf.Re(v612);
            }
          }
          if (v611) {
            this.o.ib = p506.pc(p507);
            p507 += 4;
          }
          var v613 = this.Jg(p506.mc(p507++), p506.mc(p507++), p506.mc(p507++));
          var v614 = this.Jg(p506.mc(p507++), p506.mc(p507++), p506.mc(p507++));
          v608.Kg(v613, v614, v610);
          f88().r.Zd(0.5, this.o.fb.bf, v610);
          var v615 = this.qg(p506, p507);
          p507 += this.rg(v615);
          for (var v616 in v608.Ff) {
            var v617 = v608.Ff[v616];
            if (v617) {
              v617.sc = false;
            }
          }
          for (var vLN075 = 0; vLN075 < v615; vLN075++) {
            var v618 = p506.mc(p507);
            p507++;
            var v619 = p506.mc(p507);
            p507++;
            var v620 = v608.Ff[v618];
            if (!v620) {
              v620 = new vF15(v618);
              v608.Ff[v618] = v620;
            }
            v620.sc = true;
            v620.tc = Math.min(1, Math.max(0, v619 / 100));
          }
          f88().s.H.wb.uf.Te(v608.Ff);
        };
        f134.prototype.xg = function (p508, p509) {
          var vThis7 = this;
          var v621 = p508.nc(p509);
          p509 += 2;
          var v622 = this.Gg(v621);
          var v623 = p508.pc(p509);
          p509 += 4;
          var vA22 = [];
          for (var v624 in v622.Ff) {
            if (v624 == 0) {
              vA22.push("velocidad");
              $(".v0").fadeIn();
            } else if (v624 == 1) {
              vA22.push("movimiento");
              $(".v1").fadeIn();
            } else if (v624 == 2) {
              vA22.push("iman");
              $(".v2").fadeIn();
            } else if (v624 == 3) {
              vA22.push("comidax2");
              $(".v3").fadeIn();
            } else if (v624 == 4) {
              vA22.push("comidax5");
              $(".v4").fadeIn();
            } else if (v624 == 5) {
              vA22.push("comidax10");
              $(".v5").fadeIn();
            } else if (v624 == 6) {
              vA22.push("zoom");
              $(".v6").fadeIn();
            } else {
              console.log("comiste otro potenciador");
            }
          }
          window.nombres2 = vA22;
          if (v622.Mb.ad) {
            setTimeout(function () {
              $(".pwrups").fadeOut();
            }, 3000);
          }
          var v625 = this.qg(p508, p509);
          p509 += this.rg(v625);
          if (v622) {
            v622.Ig(v623);
            v622.Lg(function () {
              return vThis7.Jg(p508.mc(p509++), p508.mc(p509++), p508.mc(p509++));
            }, v625);
            v622.Mg(true);
            var v626 = this.o.N.Gf();
            var v627 = v622.Gf();
            var v628 = Math.max(0, 1 - Math.hypot(v626.x - v627.x, v626.y - v627.y) / (this.o.jb * 0.5));
            f88().r.Xd(v628, v621);
          } else {
            p509 += v625 * 6;
          }
          return p509;
        };
        f134.prototype.yg = function (p510, p511) {
          var v629 = p510.nc(p511);
          p511 += 2;
          var v630 = this.o.hb[v629];
          if (v630 && v630.Ib) {
            v630.Mg(false);
          }
          f88().r.Yd(v629);
          return p511;
        };
        f134.prototype.sg = function (p512, p513) {
          var v631 = new vF31.Config();
          v631.Lb = p512.oc(p513);
          p513 += 4;
          v631.cg = this.o.fb.af === vO34._e ? p512.mc(p513++) : vF24.TEAM_DEFAULT;
          v631.Ng = this.Jg(p512.mc(p513++), p512.mc(p513++), p512.mc(p513++));
          v631.dg = p512.mc(p513++);
          var v632 = this.o.gb[v631.Lb];
          if (v632 != null) {
            v632.Kb();
          }
          var v633 = new vF31(v631, f88().s.H.wb);
          v633.Og(this.Pg(v631.Lb), this.Qg(v631.Lb), true);
          this.o.gb[v631.Lb] = v633;
          return p513;
        };
        f134.prototype.tg = function (p514, p515) {
          var v634 = p514.oc(p515);
          p515 += 4;
          var v635 = this.o.gb[v634];
          if (v635) {
            v635.Rg = 0;
            v635.Sg = v635.Sg * 1.5;
            v635.Nb = true;
          }
          return p515;
        };
        f134.prototype.ug = function (p516, p517) {
          var v636 = p516.oc(p517);
          p517 += 4;
          var v637 = p516.nc(p517);
          p517 += 2;
          var v638 = this.o.gb[v636];
          if (v638) {
            v638.Rg = 0;
            v638.Sg = v638.Sg * 0.1;
            v638.Nb = true;
            var v639 = this.Gg(v637);
            if (v639 && v639.Hb) {
              this.o.fb.bf;
              var v640 = v639.Gf();
              v638.Og(v640.x, v640.y, false);
            }
          }
          return p517;
        };
        var vA23 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
        f134.prototype.mg = function (p518) {
          var v641 = f88().q.Ug.Tg;
          var v642 = v641.getImageData(0, 0, 80, 80);
          var v643 = vA23[0];
          var v644 = 80 - v643;
          var vLN076 = 0;
          for (var vLN077 = 0; vLN077 < 628; vLN077++) {
            var v645 = p518.mc(1 + vLN077);
            for (var vLN078 = 0; vLN078 < 8; vLN078++) {
              var v646 = (v643 + vLN076 * 80) * 4;
              if ((v645 >> vLN078 & 1) != 0) {
                v642.data[v646] = 255;
                v642.data[v646 + 1] = 255;
                v642.data[v646 + 2] = 255;
                v642.data[v646 + 3] = 255;
              } else {
                v642.data[v646 + 3] = 0;
              }
              if (++v643 >= v644 && ++vLN076 < 80) {
                v644 = 80 - (v643 = vA23[vLN076]);
              }
            }
          }
          v641.putImageData(v642, 0, 0);
          var v647 = f88().s.H.wb.tf.Sf;
          v647.texture = f88().q.Ug.Hc;
          v647.texture.update();
        };
        f134.prototype.og = function (p519, p520) {
          var v648 = p519.oc(p520);
          p520 += 4;
          console.log("Wormy Error: " + v648);
        };
        f134.prototype.pg = function (p521, p522) {
          if (v135 !== -1) {
            v141[v135].visible = false;
          }
          vO8.emoji = false;
          vO8.dead = true;
          vF9();
          vO9.hs = 0;
          f38(0, 0);
          f37(999999, 999999);
          f72();
          console.log("g.o");
        };
        f134.prototype.ng = function (p523, p524) {
          this.o.tb = p523.nc(p524);
          p524 += 2;
          this.o.O = p523.nc(p524);
          p524 += 2;
          var v649 = new vF41();
          v649.ag = [];
          for (var v650 = p523.mc(p524++), vLN079 = 0; vLN079 < v650; vLN079++) {
            var v651 = p523.nc(p524);
            p524 += 2;
            var v652 = p523.pc(p524);
            p524 += 4;
            v649.ag.push(vF41.Vg(v651, v652));
          }
          v649.$f = [];
          if (this.o.fb.af === vO34._e) {
            for (var v653 = p523.mc(p524++), vLN080 = 0; vLN080 < v653; vLN080++) {
              var v654 = p523.mc(p524);
              p524 += 1;
              var v655 = p523.pc(p524);
              p524 += 4;
              v649.$f.push(vF41.Wg(v654, v655));
            }
          }
          f88().s.H.wb.vf.Te(v649);
        };
        f134.prototype.Gg = function (p525) {
          if (p525 === this.o.fb.bf) {
            return this.o.N;
          } else {
            return this.o.hb[p525];
          }
        };
        f134.prototype.Jg = function (p526, p527, p528) {
          return (((p528 & 255 | p527 << 8 & 65280 | p526 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
        };
        f134.prototype.Pg = function (p529) {
          return ((p529 & 65535) / 32768 - 1) * this.o.fb.ef();
        };
        f134.prototype.Qg = function (p530) {
          return ((p530 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
        };
        f134.prototype.qg = function (p531, p532) {
          var v656 = p531.mc(p532);
          if ((v656 & 128) == 0) {
            return v656;
          }
          var v657 = p531.mc(p532 + 1);
          if ((v657 & 128) == 0) {
            return v657 | v656 << 7 & 16256;
          }
          var v658 = p531.mc(p532 + 2);
          if ((v658 & 128) == 0) {
            return v658 | v657 << 7 & 16256 | v656 << 14 & 2080768;
          }
          var v659 = p531.mc(p532 + 3);
          if ((v659 & 128) == 0) {
            return v659 | v658 << 7 & 16256 | v657 << 14 & 2080768 | v656 << 21 & 266338304;
          } else {
            return undefined;
          }
        };
        f134.prototype.rg = function (p533) {
          if (p533 < 128) {
            return 1;
          } else if (p533 < 16384) {
            return 2;
          } else if (p533 < 2097152) {
            return 3;
          } else if (p533 < 268435456) {
            return 4;
          } else {
            return undefined;
          }
        };
        return f134;
      }();
      var vF30 = function () {
        function f135(p534) {
          this.Xg = p534;
        }
        f135.Yg = function () {
          return new vF30(null);
        };
        f135.Zg = function (p535) {
          return new vF30(p535);
        };
        f135.prototype.$g = function () {
          return this.Xg;
        };
        f135.prototype._g = function () {
          return this.Xg != null;
        };
        f135.prototype.ah = function (p536) {
          if (this.Xg != null) {
            p536(this.Xg);
          }
        };
        return f135;
      }();
      var vF31 = function () {
        function e(p537, p538) {
          this.Mb = p537;
          this.bh = p537.dg >= 80;
          this.Ob = 0;
          this.Pb = 0;
          this.ch = 0;
          this.dh = 0;
          this.Sg = this.bh ? 1 : p537.Ng;
          this.Rg = 1;
          this.Nb = false;
          this.eh = 0;
          this.fh = 0;
          this.Jb = 1;
          this.Ae = Math.PI * 2 * Math.random();
          this.gh = new vF33();
          this.gh.hh(f88().o.fb.af, this.Mb.cg === vF24.TEAM_DEFAULT ? null : f88().p.Dc().ed(this.Mb.cg), f88().p.Dc().kd(this.Mb.dg));
          p538.Lf(p537.Lb, this.gh);
        }
        e.prototype.Kb = function () {
          this.gh.Of.Pf.ih();
          this.gh.Of.Nf.ih();
        };
        e.prototype.Og = function (p539, p540, p541) {
          this.Ob = p539;
          this.Pb = p540;
          if (p541) {
            this.ch = p539;
            this.dh = p540;
          }
        };
        e.prototype.Fb = function (p542, p543) {
          var v660 = Math.min(0.5, this.Sg * 1);
          var v661 = Math.min(2.5, this.Sg * 1.5);
          this.eh = f100(this.eh, v660, p543, 0.0025);
          this.fh = f100(this.fh, v661, p543, 0.0025);
          this.Jb = f100(this.Jb, this.Rg, p543, 0.0025);
        };
        e.prototype.Gb = function (p544, p545, p546) {
          this.ch = f100(this.ch, this.Ob, p545, vO8.eat_animation);
          this.dh = f100(this.dh, this.Pb, p545, 0.0025);
          this.gh.Te(this, p544, p545, p546);
        };
        e.Config = function () {
          this.Lb = 0;
          this.cg = vF24.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        };
        return e;
      }();
      var vF33 = function () {
        function f137() {
          this.Of = new vF34(new vF44(), new vF44());
          this.Of.Pf.jh.blendMode = vF13.ic.jc;
          this.Of.Pf.jh.zIndex = vLN1002;
          this.Of.Nf.jh.zIndex = vLN500;
        }
        var vLN500 = 500;
        var vLN1002 = 100;
        f137.prototype.hh = function (p547, p548, p549) {
          var v662 = p549.Zc;
          if (v662 != null) {
            this.Of.Nf.kh(v662);
          }
          var v663 = p547 == vO34._e && p548 != null ? p548.cd.$c : p549.$c;
          if (v663 != null) {
            this.Of.Pf.kh(v663);
          }
        };
        f137.prototype.Te = function (p550, p551, p552, p553) {
          if (p553(p550.ch, p550.dh)) {
            var v664 = p550.fh * (1 + Math.cos(p550.Ae + p551 / 200) * 0.3);
            if (p550.bh) {
              this.Of.mh(p550.ch, p550.dh, vO8.PotenciadorSize * p550.eh, p550.Jb * 1, vO8.PotenciadorAura * v664, p550.Jb * 0.8);
            } else {
              this.Of.mh(p550.ch, p550.dh, vO8.ComidaSize * p550.eh, p550.Jb * 1, vO8.ComidaShadow * v664, p550.Jb * 0.3);
            }
          } else {
            this.Of.lh();
          }
        };
        var vF34 = function () {
          function e(p554, p555) {
            this.Nf = p554;
            this.Pf = p555;
          }
          e.prototype.mh = function (p556, p557, p558, p559, p560, p561) {
            this.Nf.Mg(true);
            this.Nf.nh(p556, p557);
            this.Nf.oh(p558);
            this.Nf.qh(p559);
            this.Pf.Mg(true);
            this.Pf.nh(p556, p557);
            this.Pf.oh(p560);
            this.Pf.qh(p561);
          };
          e.prototype.lh = function () {
            this.Nf.Mg(false);
            this.Pf.Mg(false);
          };
          return e;
        }();
        return f137;
      }();
      var vF35 = function () {
        function f139() {
          this.rh = 0;
          this.sh = 0;
          this.th = 0;
          this.uh = 0;
          this.vh = 0;
          this.wh = [];
        }
        function f140(p562, p563) {
          for (var vLN081 = 0; vLN081 < p562.length; vLN081++) {
            if (p562[vLN081].id == p563) {
              return vLN081;
            }
          }
          return -1;
        }
        f139.prototype.a = function () {};
        f139.prototype.ha = function (p564) {
          if (!vO8.loading) {
            vO8.PropertyManager = this;
            localStorage.setItem("SaveGameXT", JSON.stringify(vO8));
          }
          switch (p564) {
            case vF37.ia:
              return this.rh;
            case vF37.ja:
              return this.sh;
            case vF37.ka:
              return this.th;
            case vF37.la:
              return this.uh;
            case vF37.ma:
              return this.vh;
          }
          return 0;
        };
        f139.prototype.xh = function (p565) {
          this.wh.push(p565);
          this.yh();
        };
        f139.prototype.Ia = function () {
          if (!f88().p.W()) {
            return f106([32, 33, 34, 35]);
          }
          for (var v665 = f88().p.Ac(), vA24 = [], vLN082 = 0; vLN082 < v665.skinArrayDict.length; vLN082++) {
            var v666 = v665.skinArrayDict[vLN082];
            if (this.Ja(v666.id, vF37.ia)) {
              vA24.push(v666);
            }
          }
          if (vA24.length === 0) {
            return 0;
          } else {
            return vA24[parseInt(vA24.length * Math.random())].id;
          }
        };
        f139.prototype.zh = function () {
          if (f88().p.W) {
            var v667 = f88().p.Ac().skinArrayDict;
            var vF140 = f140(v667, this.rh);
            if (!(vF140 < 0)) {
              for (var v668 = vF140 + 1; v668 < v667.length; v668++) {
                if (this.Ja(v667[v668].id, vF37.ia)) {
                  this.rh = v667[v668].id;
                  this.yh();
                  return;
                }
              }
              for (var vLN083 = 0; vLN083 < vF140; vLN083++) {
                if (this.Ja(v667[vLN083].id, vF37.ia)) {
                  this.rh = v667[vLN083].id;
                  this.yh();
                  return;
                }
              }
            }
          }
        };
        f139.prototype.Ah = function () {
          if (f88().p.W) {
            var v669 = f88().p.Ac().skinArrayDict;
            var vF1402 = f140(v669, this.rh);
            if (!(vF1402 < 0)) {
              for (var v670 = vF1402 - 1; v670 >= 0; v670--) {
                if (this.Ja(v669[v670].id, vF37.ia)) {
                  this.rh = v669[v670].id;
                  this.yh();
                  return;
                }
              }
              for (var v671 = v669.length - 1; v671 > vF1402; v671--) {
                if (this.Ja(v669[v671].id, vF37.ia)) {
                  this.rh = v669[v671].id;
                  this.yh();
                  return;
                }
              }
            }
          }
        };
        f139.prototype.Bh = function (p566, p567) {
          if (!f88().p.W() || this.Ja(p566, p567)) {
            switch (p567) {
              case vF37.ia:
                if (this.rh != p566) {
                  this.rh = p566;
                  this.yh();
                }
                return;
              case vF37.ja:
                if (this.sh != p566) {
                  this.sh = p566;
                  this.yh();
                }
                return;
              case vF37.ka:
                if (this.th != p566) {
                  this.th = p566;
                  this.yh();
                }
                return;
              case vF37.la:
                if (this.uh != p566) {
                  this.uh = p566;
                  this.yh();
                }
                return;
              case vF37.ma:
                if (this.vh != p566) {
                  this.vh = p566;
                  this.yh();
                }
                return;
            }
          }
        };
        f139.prototype.Ja = function (p568, p569) {
          var vF36 = function (p570, p571) {
            if (!f88().p.W()) {
              return null;
            }
            var v672 = f88().p.Ac();
            if (p571 === vF37.ia) {
              var vF1403 = f140(v672.skinArrayDict, p570);
              if (vF1403 < 0) {
                return null;
              } else {
                console.log(v672.skinArrayDict[vF1403]);
                return v672.skinArrayDict[vF1403];
              }
            }
            switch (p571) {
              case vF37.ja:
                return v672.eyesDict[p570];
              case vF37.ka:
                return v672.mouthDict[p570];
              case vF37.la:
                return v672.glassesDict[p570];
              case vF37.ma:
                return v672.hatDict[p570];
            }
            return null;
          }(p568, p569);
          return vF36 != null && (f88().u.P() ? vF36.price == 0 && !vF36.nonbuyable || f88().u.Ch(p568, p569) : vF36.guest);
        };
        f139.prototype.yh = function () {
          for (var vLN084 = 0; vLN084 < this.wh.length; vLN084++) {
            this.wh[vLN084]();
          }
        };
        return f139;
      }();
      var vF37 = function () {
        function f141() {}
        f141.ia = "SKIN";
        f141.ja = "EYES";
        f141.ka = "MOUTH";
        f141.la = "GLASSES";
        f141.ma = "HAT";
        return f141;
      }();
      function f142(p572, p573, p574, p575, p576, p577, p578, p579, p580) {
        this.Hc = new vF13._b(p572, new vF13.dc(p573, p574, p575, p576));
        this.Dh = p573;
        this.Eh = p574;
        this.Fh = p575;
        this.Gh = p576;
        this.Hh = p577 || (p579 || p575) / 2;
        this.Ih = p578 || (p580 || p576) / 2;
        this.Jh = p579 || p575;
        this.Kh = p580 || p576;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      var vF38 = function () {
        function f143() {
          this.fn_o = f144;
          this.Fe = new vF13._b(vF13.$b.from("/images/bg-obstacle.png"));
          var v673;
          var v674 = vF13.$b.from("https://i.imgur.com/gvMlosm.png");
          this.Ge = [new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128)), new vF13._b(v674, new vF13.dc(0, 0, 128, 128))];
          this.Cf = new vF13._b(f144());
          this.Df = new vF13._b((__DECODE_0__, (v673 = vF13.$b.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = vF13.kc.lc, v673));
          this.Af = new vF13._b(vF13.$b.from("/images/lens.png"));
          var v675 = vF13.$b.from("https://i.imgur.com/VPh6J5u.png");
          this.Ph = new f142(v675, 158, 86, 67, 124, 148, 63.5, 128, 128);
          this.Qh = new f142(v675, 158, 4, 87, 74, 203, 63.5, 128, 128);
          var v676;
          var v677 = vF13.$b.from("https://wormup.in/assets/images/zigzagability2.png");
          var v678 = vF13.$b.from("https://i.imgur.com/iqKabEA.png");
          this.emoji = new f142(v678, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
          this.Rh = new f142(v677, 156, 4, 87, 74, 285, 63.5, 128, 128);
          this.X_x5 = new f142(v677, 156, 80, 87, 60, 170, 1.5, 128, 128);
          this.X_x2 = new f142(v677, 156, 140, 87, 60, 170, 128.5, 128, 128);
          this.X_x10 = new f142(v677, 158, 200, 95, 55, 265, 128.5, 128, 128);
          this.X_xxlupa = new f142(v677, 79, 8, 75, 77, 265, 1.5, 128, 128);
          this.Ug = (__DECODE_0__, (v676 = window.document.createElement("canvas")).width = 80, v676.height = 80, {
            te: v676,
            Tg: v676.getContext("2d"),
            Hc: new vF13._b(vF13.$b.from(v676))
          });
          this.Bd = {};
          this.yd = {};
          this.Sh = [];
          this.Th = null;
        }
        function f144(p581) {
          var v679 = vF13.$b.from(p581 || "/images/bg-pattern-pow2-ARENA.png");
          v679.wrapMode = vF13.kc.lc;
          return v679;
        }
        f143.prototype.a = function (p582) {
          function f145() {
            if (--vLN4 == 0) {
              p582();
            }
          }
          var vLN4 = 4;
          this.Bd = {};
          f145();
          this.yd = {};
          f145();
          this.Sh = [];
          f145();
          this.Th = null;
          f145();
        };
        return f143;
      }();
      var vF39 = function () {
        function f146() {
          this.H = new vF51();
          this.F = new v_0x3b58a2();
          this.Uh = new v_0x189a0c();
          this.Vh = new v_0x1b9e86();
          this.Wh = new v_0x636b85();
          this.Xh = new v_0xf48613();
          this.Yh = new v_0x1d3509();
          this.Zh = new v_0xa28ceb();
          this.xa = new v_0x5b3fc2();
          this.zwset = new v_0x5dfcad();
          this.$h = new vF53();
          this._h = new v_0x54c61d();
          this.ai = new vF55();
          this.aa = new v_0x1a2f3b();
          this.ua = new v_0x1a3189();
          this.pa = new v_0xfcfa10();
          this.bi = [];
          this.ci = null;
        }
        function f147(p583, p584) {
          if (p584 != p583.length + 1) {
            var v680 = p583[p584];
            f103(p583, p584 + 1, p584, p583.length - p584 - 1);
            p583[p583.length - 1] = v680;
          }
        }
        f146.prototype.a = function () {
          this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.zwset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
          for (var vLN085 = 0; vLN085 < this.bi.length; vLN085++) {
            this.bi[vLN085].a();
          }
          this.ci = new vF20(vF50.di);
        };
        f146.prototype.Qa = function (p585, p586) {
          for (var v681 = this.bi.length - 1; v681 >= 0; v681--) {
            this.bi[v681].Pa(p585, p586);
          }
          if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
            this.ci.Pa(p585, p586);
          }
        };
        f146.prototype.Ra = function () {
          for (var v682 = this.bi.length - 1; v682 >= 0; v682--) {
            this.bi[v682].Ra();
          }
          if (this.ci != null) {
            this.ci.Ra();
          }
        };
        f146.prototype.I = function (p587) {
          var vF40 = function (p588, p589) {
            for (var vLN086 = 0; vLN086 < p588.length; vLN086++) {
              if (p588[vLN086] == p589) {
                return vLN086;
              }
            }
            return -1;
          }(this.bi, p587);
          if (!(vF40 < 0)) {
            this.bi[0].ei();
            (function (p590, p591) {
              if (p591 != 0) {
                var v683 = p590[p591];
                f103(p590, 0, 1, p591);
                p590[0] = v683;
              }
            })(this.bi, vF40);
            this.fi();
          }
        };
        f146.prototype.gi = function () {
          this.bi[0].ei();
          do {
            f147(this.bi, 0);
          } while (this.bi[0].rc != 1);
          this.fi();
        };
        f146.prototype.fi = function () {
          var v684 = this.bi[0];
          v684.ii();
          v684.ji();
          this.ki();
        };
        f146.prototype.li = function () {
          return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
        };
        f146.prototype.ki = function () {
          if (this.li()) {
            this.I(this.aa);
          }
        };
        return f146;
      }();
      var vF41 = function () {
        function f148() {
          this.ag = [];
          this.$f = [];
        }
        f148.Vg = function (p592, p593) {
          return {
            bg: p592,
            M: p593
          };
        };
        f148.Wg = function (p594, p595) {
          return {
            _f: p594,
            M: p595
          };
        };
        return f148;
      }();
      var vF42 = function () {
        function f149() {
          this.ni = [];
          this.oi = [];
          this.pi = [];
          this.qi = false;
          this.ri = vLSGuest;
          this.si = {};
          this.ti = null;
        }
        var vLSGuest = "guest";
        f149.prototype.a = function () {
          this.vi();
        };
        f149.prototype.X = function () {
          if (this.qi) {
            return this.si.userId;
          } else {
            return "";
          }
        };
        f149.prototype.wi = function () {
          if (this.qi) {
            return this.si.username;
          } else {
            return "";
          }
        };
        f149.prototype.ga = function () {
          if (this.qi) {
            return this.si.nickname;
          } else {
            return "";
          }
        };
        f149.prototype.xi = function () {
          if (this.qi) {
            return this.si.avatarUrl;
          } else {
            return vLSimagesguestavatarxma;
          }
        };
        f149.prototype.yi = function () {
          return this.qi && this.si.isBuyer;
        };
        f149.prototype.Z = function () {
          return this.qi && this.si.isConsentGiven;
        };
        f149.prototype.zi = function () {
          if (this.qi) {
            return this.si.coins;
          } else {
            return 0;
          }
        };
        f149.prototype.Ai = function () {
          if (this.qi) {
            return this.si.level;
          } else {
            return 1;
          }
        };
        f149.prototype.Bi = function () {
          if (this.qi) {
            return this.si.expOnLevel;
          } else {
            return 0;
          }
        };
        f149.prototype.Ci = function () {
          if (this.qi) {
            return this.si.expToNext;
          } else {
            return 50;
          }
        };
        f149.prototype.Di = function () {
          if (this.qi) {
            return this.si.skinId;
          } else {
            return 0;
          }
        };
        f149.prototype.Ei = function () {
          if (this.qi) {
            return this.si.eyesId;
          } else {
            return 0;
          }
        };
        f149.prototype.Fi = function () {
          if (this.qi) {
            return this.si.mouthId;
          } else {
            return 0;
          }
        };
        f149.prototype.Gi = function () {
          if (this.qi) {
            return this.si.glassesId;
          } else {
            return 0;
          }
        };
        f149.prototype.Hi = function () {
          if (this.qi) {
            return this.si.hatId;
          } else {
            return 0;
          }
        };
        f149.prototype.Ii = function () {
          if (this.qi) {
            return this.si.highScore;
          } else {
            return 0;
          }
        };
        f149.prototype.Ji = function () {
          if (this.qi) {
            return this.si.bestSurvivalTimeSec;
          } else {
            return 0;
          }
        };
        f149.prototype.Ki = function () {
          if (this.qi) {
            return this.si.kills;
          } else {
            return 0;
          }
        };
        f149.prototype.Li = function () {
          if (this.qi) {
            return this.si.headShots;
          } else {
            return 0;
          }
        };
        f149.prototype.Mi = function () {
          if (this.qi) {
            return this.si.sessionsPlayed;
          } else {
            return 0;
          }
        };
        f149.prototype.Ni = function () {
          if (this.qi) {
            return this.si.totalPlayTimeSec;
          } else {
            return 0;
          }
        };
        f149.prototype.Oi = function () {
          if (this.qi) {
            return this.si.regDate;
          } else {
            return {};
          }
        };
        f149.prototype.V = function (p596) {
          this.ni.push(p596);
          p596();
        };
        f149.prototype.Pi = function (p597) {
          this.oi.push(p597);
          p597();
        };
        f149.prototype.Qi = function (p598) {
          this.pi.push(p598);
        };
        f149.prototype.Ch = function (p599, p600) {
          var v685 = this.si.propertyList.concat(vO8.pL || []);
          if (!v685) {
            return false;
          }
          for (var vLN087 = 0; vLN087 < v685.length; vLN087++) {
            var v686 = v685[vLN087];
            if (v686.id == p599 && v686.type === p600) {
              return true;
            }
          }
          return false;
        };
        f149.prototype.P = function () {
          return this.qi;
        };
        f149.prototype.ea = function () {
          return this.ri;
        };
        f149.prototype.Q = function (p601) {
          var vThis8 = this;
          if (this.qi) {
            this.Ri(function (p602) {
              if (p602) {
                var v687 = vThis8.zi();
                var v688 = vThis8.Ai();
                vThis8.si = p602;
                f165(vThis8.si);
                vThis8.Si();
                var v689 = vThis8.zi();
                var v690 = vThis8.Ai();
                if (v690 > 1 && v690 != v688) {
                  f88().s.aa.Ti(new v_0x20b128(v690));
                }
                var v691 = v689 - v687;
                if (v691 >= 20) {
                  f88().s.aa.Ti(new v_0x436162(v691));
                }
              }
              if (p601) {
                p601();
              }
            });
          }
        };
        f149.prototype.Ri = function (p603) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (p604) {
            p603(p604.user_data);
          });
        };
        f149.prototype.Ui = function (p605, p606, p607) {
          var vThis9 = this;
          $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p605 + "&type=" + p606, function (p608) {
            if (p608.code == 1200) {
              vThis9.Q(p607);
            } else {
              p607();
            }
          }).fail(function () {
            p607();
          });
        };
        f149.prototype.Vi = function () {
          var vThis10 = this;
          this.Wi();
          if (typeof FB != "undefined") {
            FB.getLoginStatus(function (p609) {
              if (p609.status !== "connected") {
                FB.login(function (p610) {
                  if (p610.status === "connected" && p610.authResponse && p610.authResponse.accessToken) {
                    vThis10.Yi("facebook", "fb_" + p610.authResponse.accessToken);
                  } else {
                    vThis10.Xi();
                  }
                });
              } else if (p609.authResponse && p609.authResponse.accessToken) {
                vThis10.Yi("facebook", "fb_" + p609.authResponse.accessToken);
              } else {
                vThis10.Xi();
              }
            });
          } else {
            this.Xi();
          }
        };
        f149.prototype.Zi = function () {
          var vThis11 = this;
          this.Wi();
          if (v336 !== undefined) {
            console.log("gsi:l");
            v336.then(function () {
              console.log("gsi:then");
              if (v336.isSignedIn.get()) {
                console.log("gsi:sil");
                var v692 = v336.currentUser.get();
                vThis11.Yi("google", "gg_" + v692.getAuthResponse().id_token);
              } else {
                v336.signIn().then(function (p611) {
                  if (typeof p611.error !== "undefined") {
                    console.log("gsi:e: " + p611.error);
                    vThis11.Xi();
                    return;
                  }
                  if (p611.isSignedIn()) {
                    console.log("gsi:s");
                    vThis11.Yi("google", "gg_" + p611.getAuthResponse().id_token);
                  } else {
                    console.log("gsi:c");
                    vThis11.Xi();
                  }
                });
              }
            });
          } else {
            this.Xi();
          }
        };
        f149.prototype.Wi = function () {
          console.log("iSI: " + this.qi);
          var v693 = this.ri;
          var v694 = this.ti;
          this.qi = false;
          this.ri = vLSGuest;
          this.si = {};
          this.ti = null;
          f90(vF21.Oe, "", 60);
          switch (v694) {
            case "facebook":
              this.$i();
              break;
            case "google":
              this._i();
          }
          if (v693 !== this.ri) {
            this.aj();
          } else {
            this.Si();
          }
        };
        f149.prototype.bj = function () {
          console.log("dA");
          if (this.qi) {
            $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (p612) {
              if (p612.code === 1200) {
                console.log("dA: OK");
              } else {
                console.log("dA: NO");
              }
            }).fail(function () {
              console.log("dA: FAIL");
            });
          }
        };
        f149.prototype.vi = function () {
          console.log("rs");
          var vF89 = f89(vF21.Oe);
          var vThis12 = this;
          if (vF89 == "facebook") {
            console.log("rs:fb");
            (function f150() {
              if (typeof FB != "undefined") {
                vThis12.Vi();
              } else {
                setTimeout(f150, 100);
              }
            })();
          } else if (vF89 == "google") {
            console.log("rs:gg");
            (function f151() {
              if (v336 !== undefined) {
                vThis12.Zi();
              } else {
                setTimeout(f151, 100);
              }
            })();
          } else {
            console.log("rs:lo");
            this.Wi();
          }
        };
        f149.prototype.aj = function () {
          for (var vLN088 = 0; vLN088 < this.ni.length; vLN088++) {
            this.ni[vLN088]();
          }
          this.Si();
        };
        f149.prototype.Si = function () {
          for (var vLN089 = 0; vLN089 < this.oi.length; vLN089++) {
            this.oi[vLN089]();
          }
          var v695 = this.pi;
          this.pi = [];
          for (var vLN090 = 0; vLN090 < v695.length; vLN090++) {
            v695[vLN090]();
          }
        };
        f149.prototype.Yi = function (p613, p614) {
          var vThis13 = this;
          $.get(vAtob + "/pub/wuid/" + p614 + "/login", function (p615) {
            if (p615 && p615.user_data) {
              f48(p615.user_data.userId);
              f47(p615.user_data);
              f165(p615.user_data);
              var v696 = this.ri;
              vThis13.qi = true;
              vThis13.ri = p614;
              vThis13.si = p615.user_data;
              vThis13.ti = p613;
              f90(vF21.Oe, vThis13.ti, 60);
              console.log(vThis13);
              vF8(vUndefined2);
              vF6(p615);
              zw_userId = p615.user_data.userId;
              $("#userid").text(zw_userId);
              $("#avatarUrl").attr("src", p615.user_data.avatarUrl);
              $("#zw-settings-id").text("ID: " + zw_userId);
              vO8.loading = false;
              if (v696 !== p614) {
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
        f149.prototype.Xi = function () {
          this.Wi();
        };
        f149.prototype.$i = function () {
          console.log("lo:fb");
          FB.logout(function () {});
        };
        f149.prototype._i = function () {
          console.log("lo:gg");
          v336.signOut();
        };
        return f149;
      }();
      var vF43 = function () {
        function e() {
          this.cj = {};
          this.cj[v700] = [1, 0.5, 0.25, 0.5];
          this.cj[v701] = vF13._b.WHITE;
          this.cj[v702] = [0, 0];
          this.cj[v703] = [0, 0];
          var v697 = vF13.cc.from(v706, v707, this.cj);
          this.zf = new vF13.hc(v705, v697);
        }
        var v698 = "a1_" + f107();
        var v699 = "a2_" + f107();
        var vAtob3 = "translationMatrix";
        var vAtob4 = "projectionMatrix";
        var v700 = "u3_" + f107();
        var v701 = "u4_" + f107();
        var v702 = "u5_" + f107();
        var v703 = "u6_" + f107();
        var v704 = "v1_" + f107();
        var v705 = new vF13.gc().addAttribute(v698, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v699, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
        var v706 = "precision mediump float;attribute vec2 " + v698 + ";attribute vec2 " + v699 + ";uniform mat3 " + vAtob3 + ";uniform mat3 " + vAtob4 + ";varying vec2 " + v704 + ";void main(){" + v704 + "=" + v699 + ";gl_Position=vec4((" + vAtob4 + "*" + vAtob3 + "*vec3(" + v698 + ",1.0)).xy,0.0,1.0);}";
        var v707 = "precision highp float;varying vec2 " + v704 + ";uniform vec4 " + v700 + ";uniform sampler2D " + v701 + ";uniform vec2 " + v702 + ";uniform vec2 " + v703 + ";void main(){vec2 coord=" + v704 + "*" + v702 + "+" + v703 + ";vec4 v_color_mix=" + v700 + ";gl_FragColor=texture2D(" + v701 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
        e.prototype.Hf = function (p616, p617, p618, p619) {
          var v708 = this.cj[v700];
          v708[0] = p616;
          v708[1] = p617;
          v708[2] = p618;
          v708[3] = p619;
        };
        e.prototype.Bf = function (p620) {
          this.cj[v701] = p620;
        };
        e.prototype.Te = function (p621, p622, p623, p624) {
          this.zf.position.x = p621;
          this.zf.position.y = p622;
          this.zf.scale.x = p623;
          this.zf.scale.y = p624;
          var v709 = this.cj[v702];
          v709[0] = p623 * 0.2520615384615385;
          v709[1] = p624 * 0.4357063736263738;
          var v710 = this.cj[v703];
          v710[0] = p621 * 0.2520615384615385;
          v710[1] = p622 * 0.4357063736263738;
        };
        return e;
      }();
      var vF44 = function () {
        function f153() {
          this.jh = new vF13.ec();
          this.dj = 0;
          this.ej = 0;
          this.cachedTexture = null;
          this.cachedScaleX = 0;
          this.cachedScaleY = 0;
        }
        f153.prototype.kh = function (p625) {
          if (this.cachedTexture !== p625.Hc) {
            this.cachedTexture = p625.Hc;
            this.jh.texture = p625.Hc;
            this.jh.anchor.set(p625.Lh, p625.Mh);
            const v711 = p625.Hc.width;
            const v712 = p625.Hc.height;
            const v713 = p625.Nh / v711;
            const v714 = p625.Oh / v712;
            if (this.cachedScaleX !== v713 || this.cachedScaleY !== v714) {
              this.dj = v713;
              this.ej = v714;
              this.jh.scale.set(v713, v714);
              this.cachedScaleX = v713;
              this.cachedScaleY = v714;
            }
          }
        };
        f153.prototype.oh = function (p626) {
          const v715 = this.dj * p626;
          const v716 = this.ej * p626;
          if (this.jh.scale.x !== v715 || this.jh.scale.y !== v716) {
            this.jh.scale.set(v715, v716);
          }
        };
        f153.prototype.fj = function (p627) {
          this.jh.rotation = p627;
        };
        f153.prototype.nh = function (p628, p629) {
          this.jh.position.set(p628, p629);
        };
        f153.prototype.Mg = function (p630) {
          this.jh.visible = p630;
        };
        f153.prototype.gj = function () {
          return this.jh.visible;
        };
        f153.prototype.qh = function (p631) {
          this.jh.alpha = p631;
        };
        f153.prototype.Mf = function () {
          return this.jh;
        };
        f153.prototype.ih = function () {
          f105(this.jh);
        };
        return f153;
      }();
      var vF45 = function () {
        function f154() {
          this.jh = new PIXI.Graphics();
          this.radius = 0.3;
        }
        f154.prototype.kh = function (p632) {
          const {
            color: i = 16777215,
            radius: n = 0.3
          } = p632;
          this.jh.clear();
          this.jh.beginFill(i);
          this.jh.drawCircle(0, 0, n);
          this.jh.endFill();
          this.radius = n;
          this.jh.scale.set(1, 1);
        };
        f154.prototype.oh = function (p633) {
          this.jh.scale.set(p633, p633);
        };
        f154.prototype.fj = function (p634) {
          this.jh.rotation = p634;
        };
        f154.prototype.nh = function (p635, p636) {
          this.jh.position.set(p635, p636);
        };
        f154.prototype.Mg = function (p637) {
          this.jh.visible = p637;
        };
        f154.prototype.gj = function () {
          return this.jh.visible;
        };
        f154.prototype.qh = function (p638) {
          this.jh.alpha = p638;
        };
        f154.prototype.Mf = function () {
          return this.jh;
        };
        f154.prototype.ih = function () {
          f105(this.jh);
        };
        return f154;
      }();
      var vF46 = function () {
        function f155(p639) {
          this.fb = p639;
          this.Mb = new vF46.Config();
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
          this.lj = new Float32Array(vLN200 * 2);
          this.mj = new Float32Array(vLN200 * 2);
          this.nj = new Float32Array(vLN200 * 2);
          this.oj = null;
          this.pj = null;
          this.qj = null;
          this.b = null;
          this.zw_msg = null;
          this.Tb();
        }
        var vLN200 = 200;
        f155.prototype.Kb = function () {
          if (this.pj != null) {
            f105(this.pj.Rf);
          }
          if (this.qj != null) {
            f105(this.qj);
          }
          if (this.b != null) {
            f105(this.b);
          }
          if (this.zw_msg != null) {
            f105(this.zw_msg);
          }
        };
        f155.prototype.Tb = function () {
          this.Ig(0.25);
          this.Mb.ad = "";
          this.Ib = true;
          this.Ff = {};
          this.Mg(false);
        };
        f155.prototype.Fg = function (p640) {
          this.Mb = p640;
          this.rj(this.Hb);
        };
        f155.prototype.Mg = function (p641) {
          var v717 = this.Hb;
          this.Hb = p641;
          this.rj(v717);
        };
        f155.prototype.Ig = function (p642) {
          this.M = p642 * 50;
          var vP642 = p642;
          if (p642 > this.fb.cf) {
            vP642 = Math.atan((p642 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
          }
          var v718 = Math.sqrt(Math.pow(vP642 * 5, 0.707106781186548) * 4 + 25);
          var v719 = Math.min(vLN200, Math.max(3, (v718 - 5) * 5 + 1));
          var v720 = this.kj;
          this.Db = (5 + v718 * 0.9) * 0.025;
          this.kj = Math.floor(v719);
          this.ij = v719 - this.kj;
          if (v720 > 0 && v720 < this.kj) {
            var v721 = this.lj[v720 * 2 - 2];
            var v722 = this.lj[v720 * 2 - 1];
            var v723 = this.mj[v720 * 2 - 2];
            var v724 = this.mj[v720 * 2 - 1];
            var v725 = this.nj[v720 * 2 - 2];
            var v726 = this.nj[v720 * 2 - 1];
            for (var vV720 = v720; vV720 < this.kj; vV720++) {
              this.lj[vV720 * 2] = v721;
              this.lj[vV720 * 2 + 1] = v722;
              this.mj[vV720 * 2] = v723;
              this.mj[vV720 * 2 + 1] = v724;
              this.nj[vV720 * 2] = v725;
              this.nj[vV720 * 2 + 1] = v726;
            }
          }
        };
        f155.prototype.Lg = function (p643, p644) {
          this.kj = p644;
          for (var vLN091 = 0; vLN091 < this.kj; vLN091++) {
            this.lj[vLN091 * 2] = this.mj[vLN091 * 2] = this.nj[vLN091 * 2] = p643();
            this.lj[vLN091 * 2 + 1] = this.mj[vLN091 * 2 + 1] = this.nj[vLN091 * 2 + 1] = p643();
          }
        };
        f155.prototype.Kg = function (p645, p646, p647) {
          this.hj = p647;
          for (var vLN092 = 0; vLN092 < this.kj; vLN092++) {
            this.lj[vLN092 * 2] = this.mj[vLN092 * 2];
            this.lj[vLN092 * 2 + 1] = this.mj[vLN092 * 2 + 1];
          }
          var v727 = p645 - this.mj[0];
          var v728 = p646 - this.mj[1];
          this.sj(v727, v728, this.kj, this.mj);
        };
        f155.prototype.sj = function (p648, p649, p650, p651) {
          var v729 = Math.hypot(p648, p649);
          if (!(v729 <= 0)) {
            var v730 = p651[0];
            var vUndefined9 = undefined;
            p651[0] += p648;
            var v731 = p651[1];
            var vUndefined10 = undefined;
            p651[1] += p649;
            var v732 = this.Db / (this.Db + v729);
            var v733 = 1 - v732 * 2;
            for (var vLN15 = 1, v734 = p650 - 1; vLN15 < v734; vLN15++) {
              vUndefined9 = p651[vLN15 * 2];
              p651[vLN15 * 2] = p651[vLN15 * 2 - 2] * v733 + (vUndefined9 + v730) * v732;
              v730 = vUndefined9;
              vUndefined10 = p651[vLN15 * 2 + 1];
              p651[vLN15 * 2 + 1] = p651[vLN15 * 2 - 1] * v733 + (vUndefined10 + v731) * v732;
              v731 = vUndefined10;
            }
            v733 = 1 - (v732 = this.ij * this.Db / (this.ij * this.Db + v729)) * 2;
            p651[p650 * 2 - 2] = p651[p650 * 2 - 4] * v733 + (p651[p650 * 2 - 2] + v730) * v732;
            p651[p650 * 2 - 1] = p651[p650 * 2 - 3] * v733 + (p651[p650 * 2 - 1] + v731) * v732;
          }
        };
        f155.prototype.Gf = function () {
          return {
            x: this.nj[0],
            y: this.nj[1]
          };
        };
        f155.prototype.Hg = function (p652, p653) {
          var vLN1000000 = 1000000;
          var vP652 = p652;
          var vP653 = p653;
          for (var vLN093 = 0; vLN093 < this.kj; vLN093++) {
            var v735 = this.nj[vLN093 * 2];
            var v736 = this.nj[vLN093 * 2 + 1];
            var v737 = Math.hypot(p652 - v735, p653 - v736);
            if (v737 < vLN1000000) {
              vLN1000000 = v737;
              vP652 = v735;
              vP653 = v736;
            }
          }
          return {
            x: vP652,
            y: vP653,
            distance: vLN1000000
          };
        };
        f155.prototype.vb = function (p654) {
          this.oj = p654;
        };
        f155.prototype.Fb = function (p655, p656) {
          this.Jb = f100(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p655 / 400 * Math.PI) * 0.1 : 1 : 0, p656, 1 / 800);
          this.jj = f100(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p656, 0.0025);
          if (this.pj != null) {
            this.pj.Rf.alpha = this.Jb;
          }
          if (this.qj != null) {
            this.qj.alpha = this.Jb;
          }
        };
        f155.prototype.Gb = function (p657, p658, p659, p660) {
          if (this.Hb && this.Ib) {
            var v738 = Math.pow(0.11112, p658 / 95);
            for (var vLN094 = 0; vLN094 < this.kj; vLN094++) {
              var vF102 = f102(this.lj[vLN094 * 2], this.mj[vLN094 * 2], p659);
              var vF1022 = f102(this.lj[vLN094 * 2 + 1], this.mj[vLN094 * 2 + 1], p659);
              this.nj[vLN094 * 2] = f102(vF102, this.nj[vLN094 * 2], v738);
              this.nj[vLN094 * 2 + 1] = f102(vF1022, this.nj[vLN094 * 2 + 1], v738);
            }
          }
          if (this.pj != null && this.Hb) {
            this.pj.tj(this, p657, p658, p660);
          }
          if (this.qj != null) {
            this.qj.If.x = this.nj[0];
            this.qj.If.y = this.nj[1] - this.Db * 3;
          }
          if (this.b != null) {
            var v739;
            this.b.x = this.qj.position.x;
            this.b.y = this.qj.position.y + 1;
            for (v739 in this.b.he) {
              if (this.Ff[v739] == null || !this.Ff[v739].sc) {
                this.b.removeChild(this.b.he[v739]);
                delete this.b.he[v739];
              }
            }
            var v740;
            var vLN095 = 0;
            c = 0;
            for (v740 in this.Ff) {
              if ((v740 === "0" || v740 === "1") && (p658 = this.Ff[v740]) && p658.sc && vO8.timerSpZg) {
                var v741 = this.b.he[v740];
                if (!v741) {
                  const v742 = vA13[v740];
                  const v743 = timeFontColors2[v740];
                  let v744 = p658.tc;
                  if (v744 === 0.99) {
                    v744 = 1;
                  }
                  let v745 = v742 - parseInt(v744 * v742);
                  v741 = new PIXI.Text(v745, {
                    align: "center",
                    fill: v743,
                    fontSize: 20,
                    lineJoin: "round",
                    whiteSpace: "normal",
                    wordWrap: true,
                    dropShadow: true,
                    dropShadowBlur: 6,
                    fontWeight: "bold"
                  });
                  this.b.he[v740] = v741;
                  this.b.addChild(v741);
                }
                const v746 = vA13[v740];
                let v747 = p658.tc;
                if (v747 === 0.99) {
                  v747 = 1;
                }
                let v748 = v746 - parseInt(v747 * v746);
                v741.text = v748;
                v741.x = vLN095;
                v741.y = 0;
                vLN095 += v741.width + 10;
              }
            }
            this.b.pivot.x = this.b.width * 0.5;
            this.b.pivot.y = this.b.height;
          }
        };
        f155.prototype.rj = function (p661) {
          if (this.Hb) {
            if (!p661) {
              this.uj();
            }
          } else {
            if (this.pj != null) {
              f105(this.pj.Rf);
            }
            if (this.qj != null) {
              f105(this.qj);
            }
            if (this.b != null) {
              f105(this.b);
            }
            if (this.zw_msg != null) {
              f105(this.zw_msg);
            }
          }
        };
        f155.prototype.uj = function () {
          var vF884 = f88();
          if (this.pj == null) {
            this.pj = new vF47();
          } else {
            f105(this.pj.Rf);
          }
          this.pj.hh(vF884.o.fb.af, vF884.p.Dc().ed(this.Mb.cg), vF884.p.Dc().dd(this.Mb.dg), vF884.p.Dc().fd(this.Mb.Bg), vF884.p.Dc().gd(this.Mb.Cg), vF884.p.Dc().hd(this.Mb.Dg), vF884.p.Dc().jd(this.Mb.Eg));
          if (this.qj == null) {
            this.qj = new vF967("");
            this.qj.style.fontFamily = vA6[v151];
            this.qj.anchor.set(0.5);
          } else {
            f105(this.qj);
          }
          if (this.b == null) {
            this.b = new vF13.Zb();
            this.b.he = {};
          } else {
            f105(this.b);
          }
          if (this.zw_msg == null) {
            this.zw_msg = new vF13.Zb();
          } else {
            f105(this.zw_msg);
          }
          this.qj.style.fontSize = 14;
          this.qj.style.fill = vF884.p.Dc().dd(this.Mb.dg)._c;
          this.qj.text = this.Mb.ad;
          this.oj.Qf(this.Mb.Lb, this.pj, this.qj, this.b, this.zw_msg);
        };
        f155.Config = function () {
          this.Lb = 0;
          this.cg = vF24.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        };
        return f155;
      }();
      var vF967 = f96(vF13.fc, function (p662, p663, p664) {
        vF13.fc.call(this, p662, p663, p664);
        this.If = {
          x: 0,
          y: 0
        };
      });
      var vF47 = function () {
        function f156() {
          this.Rf = new vF13.Zb();
          this.Rf.sortableChildren = true;
          this.vj = new vV761();
          this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
          this.wj = 0;
          this.xj = new Array(vLN797);
          this.xj[0] = this.yj(0, new vF44(), new vF44());
          for (let vLN096 = 0; vLN096 < vLN797; vLN096++) {
            this.xj[vLN096] = this.yj(vLN096, new vF44(), new vF44());
          }
          this.zj = 0;
          this.Aj = 0;
          this.Bj = 0;
        }
        var vLN0001 = 0.001;
        var vLN797 = 797;
        var v749 = Math.PI * 0.1;
        var v750 = -0.06640625;
        var vLN084375 = 0.84375;
        var vLN02578125 = 0.2578125;
        var v751 = -0.03515625;
        var v752 = -0.0625;
        var vLN05625 = 0.5625;
        var vLN064453125 = 0.64453125;
        var vLN045703125 = 0.45703125;
        var v753 = -0.1015625;
        var vLN0375 = 0.375;
        var vLN0752 = 0.75;
        var v754 = -0.125;
        var vLN015234375 = 0.15234375;
        var vLN094921875 = 0.94921875;
        var v755 = -0.1015625;
        f156.prototype.yj = function (p665, p666, p667) {
          var v756 = new vF48(p666, p667);
          const v757 = vLN0001 * ((vLN797 - p665) * 2 + 1 + 3);
          const v758 = vLN0001 * ((vLN797 - p665) * 2 - 2 + 3);
          p666.jh.zIndex = v757;
          p667.jh.zIndex = v758;
          return v756;
        };
        f156.prototype.hh = function (p668, p669, p670, p671, p672, p673, p674) {
          var v759 = p670.Zc;
          var v760 = p668 == vO34._e ? p669.bd.$c : p670.$c;
          if (v759.length && v760.length) {
            this.xj.forEach((p675, p676) => {
              p675.Nf.kh(v759[p676 % v759.length]);
              p675.Pf.kh(v760[p676 % v760.length]);
            });
          }
          this.vj.hh(p671, p672, p673, p674);
        };
        var v761;
        (v761 = f96(vF13.Zb, function () {
          vF13.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF13.Zb();
          this.Hj = [];
          for (var vLN097 = 0; vLN097 < 4; vLN097++) {
            var v762 = new vF44();
            v762.kh(f88().q.Ph);
            this.Gj.addChild(v762.jh);
            this.Hj.push(v762);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF44();
          this.Jj.kh(f88().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.flx = new vF44();
          this.flx.kh(f88().q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new vF44();
          this.xxx5.kh(f88().q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new vF44();
          this.xxx2.kh(f88().q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new vF44();
          this.xxx10.kh(f88().q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new vF44();
          this.xxxLupatype.kh(f88().q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
          this.xxxEmojiType = new vF44();
          this.xxxEmojiType.kh(f88().q.emoji);
          this.xxxEmojiType.jh.zIndex = 0.001;
          this.addChild(this.xxxEmojiType.jh);
          this.x_emoji();
        })).prototype.hh = function (p677, p678, p679, p680) {
          this.Lj(0.002, this.Cj, p677.Zc);
          this.Lj(0.003, this.Dj, p678.Zc);
          this.Lj(0.004, this.Fj, p680.Zc);
          this.Lj(0.005, this.Ej, p679.Zc);
        };
        v761.prototype.Lj = function (p681, p682, p683) {
          const v763 = p683.length;
          const v764 = p682.length;
          for (let vV764 = v764; vV764 < v763; vV764++) {
            const v765 = new vF44();
            p682.push(v765);
            this.addChild(v765.Mf());
          }
          for (let vV7642 = v764; vV7642 > v763; vV7642--) {
            p682.pop().ih();
          }
          let vP681 = p681;
          for (let vLN098 = 0; vLN098 < v763; vLN098++) {
            vP681 += 0.0001;
            const v766 = p682[vLN098];
            v766.kh(p683[vLN098]);
            v766.jh.zIndex = vP681;
          }
        };
        v761.prototype.mh = function (p684, p685, p686, p687) {
          this.visible = true;
          this.position.set(p684, p685);
          this.rotation = p687;
          [this.Cj, this.Dj, this.Ej, this.Fj].forEach((p688, p689) => {
            "Dj (boca)";
            "Ej (gorra?)";
            "Fj (otros)";
            p688.forEach(p690 => p690.oh(p686));
          });
        };
        v761.prototype.lh = function () {
          this.visible = false;
        };
        v761.prototype.Mj = function (p691, p692, p693, p694) {
          this.Gj.visible = true;
          var v767 = p693 / 1000;
          var v768 = 1 / this.Hj.length;
          for (var vLN099 = 0; vLN099 < this.Hj.length; vLN099++) {
            var v769 = 1 - (v767 + v768 * vLN099) % 1;
            this.Hj[vLN099].jh.alpha = 1 - v769;
            this.Hj[vLN099].oh(p692 * (0.5 + v769 * 4.5));
          }
        };
        v761.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        v761.prototype.Nj = function (p695, p696, p697, p698) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f100(this.Jj.jh.alpha, p695.hj ? 0.9 : 0.2, p698, 0.0025);
          this.Jj.oh(p696);
        };
        v761.prototype.Nflex = function (p699, p700, p701, p702) {
          this.flx.jh.visible = true;
          this.flx.oh(p700);
        };
        v761.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        v761.prototype.ActiveX5 = function (p703, p704, p705, p706) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = f100(this.Jj.jh.alpha, p703.hj ? 0.9 : 0.2, p706, 0.0025);
          this.xxx5.oh(p704);
        };
        v761.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        v761.prototype.ActiveEmoji = function (p707, p708, p709, p710) {
          this.xxxEmojiType.jh.visible = true;
          this.xxxEmojiType.oh(p708);
        };
        v761.prototype.x_emoji = function () {
          this.xxxEmojiType.jh.visible = false;
        };
        v761.prototype.ActiveX2 = function (p711, p712, p713, p714) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = f100(this.Jj.jh.alpha, p711.hj ? 0.9 : 0.2, p714, 0.0025);
          this.xxx2.oh(p712);
        };
        v761.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        v761.prototype.ActiveX10 = function (p715, p716, p717, p718) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = f100(this.Jj.jh.alpha, p715.hj ? 0.9 : 0.2, p718, 0.0025);
          this.xxx10.oh(p716);
        };
        v761.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        v761.prototype.ActiveZlupa = function (p719, p720, p721, p722) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = f100(this.Jj.jh.alpha, p719.hj ? 0.9 : 0.2, p722, 0.0025);
          this.xxxLupatype.oh(p720);
        };
        v761.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        v761.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        var vV761 = v761;
        f156.prototype.Oj = function (p723) {
          return this.Aj + this.Bj * Math.sin(p723 * v749 - this.zj);
        };
        f156.prototype.tj = function (p724, p725, p726, p727) {
          const v770 = p724.Db * 2;
          const v771 = p724.nj;
          const v772 = p724.kj;
          const v773 = v772 * 4 - 3;
          this.zj = p725 / 400 * Math.PI;
          this.Aj = v770 * 1.5;
          this.Bj = v770 * 0.1 * p724.jj;
          let v774;
          let v775;
          let v776;
          let v777;
          let v778 = v771[0];
          let v779 = v771[1];
          if (p727(v778, v779)) {
            v774 = v771[2];
            v775 = v771[3];
            v776 = v771[4];
            v777 = v771[5];
            const v780 = Math.atan2(v777 + v779 * 2 - v775 * 3, v776 + v778 * 2 - v774 * 3);
            const v781 = vF48.angleBetween;
            this.vj.mh(v778, v779, v770, v780);
            this.xj[0].mh(v778, v779, v770, this.Oj(0), v780);
            this.xj[1].mh(vLN064453125 * v778 + vLN045703125 * v774 + v753 * v776, vLN064453125 * v779 + vLN045703125 * v775 + v753 * v777, v770, this.Oj(1), v781(this.xj[0], this.xj[2]));
            this.xj[2].mh(vLN0375 * v778 + vLN0752 * v774 + v754 * v776, vLN0375 * v779 + vLN0752 * v775 + v754 * v777, v770, this.Oj(2), v781(this.xj[1], this.xj[3]));
            this.xj[3].mh(vLN015234375 * v778 + vLN094921875 * v774 + v755 * v776, vLN015234375 * v779 + vLN094921875 * v775 + v755 * v777, v770, this.Oj(3), v781(this.xj[2], this.xj[4]));
          } else {
            for (let vLN0100 = 0; vLN0100 < 4; vLN0100++) {
              this.xj[vLN0100].lh();
            }
            this.vj.lh();
          }
          let vLN42 = 4;
          const v782 = v772 * 2 - 4;
          for (let vLN22 = 2; vLN22 < v782; vLN22 += 2) {
            v778 = v771[vLN22];
            v779 = v771[vLN22 + 1];
            if (p727(v778, v779)) {
              const v783 = v771[vLN22 - 2];
              const v784 = v771[vLN22 - 1];
              v774 = v771[vLN22 + 2];
              v775 = v771[vLN22 + 3];
              v776 = v771[vLN22 + 4];
              v777 = v771[vLN22 + 5];
              this.xj[vLN42].mh(v778, v779, v770, this.Oj(vLN42), vF48.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
              vLN42++;
              this.xj[vLN42].mh(v750 * v783 + vLN084375 * v778 + vLN02578125 * v774 + v751 * v776, v750 * v784 + vLN084375 * v779 + vLN02578125 * v775 + v751 * v777, v770, this.Oj(vLN42), vF48.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
              vLN42++;
              this.xj[vLN42].mh(v752 * v783 + vLN05625 * v778 + vLN05625 * v774 + v752 * v776, v752 * v784 + vLN05625 * v779 + vLN05625 * v775 + v752 * v777, v770, this.Oj(vLN42), vF48.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
              vLN42++;
              this.xj[vLN42].mh(v751 * v783 + vLN02578125 * v778 + vLN084375 * v774 + v750 * v776, v751 * v784 + vLN02578125 * v779 + vLN084375 * v775 + v750 * v777, v770, this.Oj(vLN42), vF48.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
              vLN42++;
            } else {
              for (let vLN0101 = 0; vLN0101 < 4; vLN0101++) {
                this.xj[vLN42++].lh();
              }
            }
          }
          const v785 = v772 * 2 - 4;
          v778 = v771[v785];
          v779 = v771[v785 + 1];
          if (p727(v778, v779)) {
            const v786 = v771[v785 - 2];
            const v787 = v771[v785 - 1];
            v774 = v771[v785 + 2];
            v775 = v771[v785 + 3];
            const v788 = this.Oj.bind(this);
            const v789 = vF48.angleBetween;
            this.xj[v773 - 5].mh(v778, v779, v770, v788(v773 - 5), v789(this.xj[v773 - 6], this.xj[v773 - 4]));
            this.xj[v773 - 4].mh(v755 * v786 + vLN094921875 * v778 + vLN015234375 * v774, v755 * v787 + vLN094921875 * v779 + vLN015234375 * v775, v770, v788(v773 - 4), v789(this.xj[v773 - 5], this.xj[v773 - 3]));
            this.xj[v773 - 3].mh(v754 * v786 + vLN0752 * v778 + vLN0375 * v774, v754 * v787 + vLN0752 * v779 + vLN0375 * v775, v770, v788(v773 - 3), v789(this.xj[v773 - 4], this.xj[v773 - 2]));
            this.xj[v773 - 2].mh(v753 * v786 + vLN045703125 * v778 + vLN064453125 * v774, v753 * v787 + vLN045703125 * v779 + vLN064453125 * v775, v770, v788(v773 - 2), v789(this.xj[v773 - 3], this.xj[v773 - 1]));
            this.xj[v773 - 1].mh(v774, v775, v770, v788(v773 - 1), v789(this.xj[v773 - 2], this.xj[v773 - 1]));
          } else {
            for (let v790 = v773 - 5; v790 <= v773 - 1; v790++) {
              this.xj[v790].lh();
            }
          }
          if (this.wj === 0 && v773 > 0) {
            this.Rf.addChild(this.vj);
          }
          if (this.wj > 0 && v773 === 0) {
            f105(this.vj);
          }
          while (this.wj < v773) {
            const v791 = this.xj[this.wj];
            this.Rf.addChild(v791.Nf.Mf());
            this.Rf.addChild(v791.Pf.Mf());
            this.wj++;
          }
          while (this.wj > v773) {
            this.wj--;
            const v792 = this.xj[this.wj];
            v792.Pf.ih();
            v792.Nf.ih();
          }
          if (vO8.emoji && p724?.Mb?.Mb) {
            this.vj.ActiveEmoji(p724, v770, p725, p726);
          } else {
            this.vj.x_emoji();
          }
          if (!this.xj[0].gj()) {
            this.vj.Ij();
            this.vj.Kj();
            this.vj.flexx();
            this.vj.xXx2();
            this.vj.xXx5();
            this.vj.xXx10();
            this.vj.xXxLupaZ();
            return;
          }
          const v793 = p724.Ff;
          const v794 = v793[vF15.MAGNETIC_TYPE];
          const v795 = v793[vF15.VELOCITY_TYPE];
          const v796 = v793[vF15.FLEXIBLE_TYPE];
          const v797 = v793[vF15.X2_TYPE];
          const v798 = v793[vF15.X5_TYPE];
          const v799 = v793[vF15.X10_TYPE];
          const v800 = v793[vF15.ZOOM_TYPE];
          if (v794?.sc) {
            this.vj.Mj(p724, v770, p725, p726);
          } else {
            this.vj.Ij();
          }
          if (v795?.sc) {
            this.vj.Nj(p724, v770, p725, p726);
          } else {
            this.vj.Kj();
          }
          if (vO8.speed_zigzag && v796?.sc) {
            this.vj.Nflex(p724, v770, p725, p726);
          } else {
            this.vj.flexx();
          }
          if (vO8.visiblePowersAll) {
            if (v797?.sc) {
              this.vj.ActiveX2(p724, v770, p725, p726);
            } else {
              this.vj.xXx2();
            }
            if (v798?.sc) {
              this.vj.ActiveX5(p724, v770, p725, p726);
            } else {
              this.vj.xXx5();
            }
            if (v799?.sc) {
              this.vj.ActiveX10(p724, v770, p725, p726);
            } else {
              this.vj.xXx10();
            }
            if (v800?.sc) {
              this.vj.ActiveZlupa(p724, v770, p725, p726);
            } else {
              this.vj.xXxLupaZ();
            }
          } else {
            this.vj.xXx2();
            this.vj.xXx5();
            this.vj.xXx10();
            this.vj.xXxLupaZ();
          }
        };
        var vF48 = function () {
          function f157(p728, p729) {
            this.Nf = p728;
            this.Nf.Mg(false);
            this.Pf = p729;
            this.Pf.Mg(false);
          }
          f157.prototype.mh = function (p730, p731, p732, p733, p734) {
            this.Nf.Mg(vO8.noSkin);
            this.Nf.nh(p730, p731);
            this.Nf.oh(p732);
            this.Nf.fj(p734);
            this.Pf.Mg(vO8.noAuras);
            this.Pf.nh(p730, p731);
            this.Pf.oh(p733);
            this.Pf.fj(p734);
          };
          f157.prototype.lh = function () {
            this.Nf.Mg(false);
            this.Pf.Mg(false);
          };
          f157.prototype.gj = function () {
            return this.Nf.gj();
          };
          f157.angleBetween = function (p735, p736) {
            return Math.atan2(p735.Nf.jh.position.y - p736.Nf.jh.position.y, p735.Nf.jh.position.x - p736.Nf.jh.position.x);
          };
          return f157;
        }();
        return f156;
      }();
      var vF49 = function () {
        function f158(p737) {
          this.se = p737;
          this.te = p737.get()[0];
          this.ue = new vF13.ac({
            view: this.te,
            transparent: true
          });
          this.sc = false;
          this.Pj = new vF47();
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
          f88().p.ca(function () {
            if (f88().p.W()) {
              vThis14.Fb();
            }
          });
        }
        f158.prototype.Fb = function () {
          var vF885 = f88();
          this.Pj.hh(vO34.$e, null, vF885.p.Dc().dd(this.rh), vF885.p.Dc().fd(this.sh), vF885.p.Dc().gd(this.th), vF885.p.Dc().hd(this.uh), vF885.p.Dc().jd(this.vh));
        };
        f158.prototype.Le = function (p738) {
          this.sc = p738;
        };
        f158.prototype.ak = function (p739, p740, p741) {
          this.rh = p739;
          this.Sj = p740;
          this.Xj = p741;
          this.Fb();
        };
        f158.prototype.bk = function (p742, p743, p744) {
          this.sh = p742;
          this.Tj = p743;
          this.Yj = p744;
          this.Fb();
        };
        f158.prototype.ck = function (p745, p746, p747) {
          this.th = p745;
          this.Uj = p746;
          this.Zj = p747;
          this.Fb();
        };
        f158.prototype.dk = function (p748, p749, p750) {
          this.uh = p748;
          this.Vj = p749;
          this.$j = p750;
          this.Fb();
        };
        f158.prototype.ek = function (p751, p752, p753) {
          this.vh = p751;
          this.Wj = p752;
          this._j = p753;
          this.Fb();
        };
        f158.prototype.Ra = function () {
          var v801 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          this.Qj = this.se.width();
          this.Rj = this.se.height();
          this.ue.resize(this.Qj, this.Rj);
          this.ue.resolution = v801;
          this.te.width = v801 * this.Qj;
          this.te.height = v801 * this.Rj;
          this.Ng = this.Rj / 4;
          var vF98 = f98(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
          if (this.Pj.wj != vF98) {
            for (var vVF98 = vF98; vVF98 < this.Pj.xj.length; vVF98++) {
              this.Pj.xj[vVF98].lh();
            }
            while (this.Pj.wj < vF98) {
              this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
              this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
              this.Pj.wj += 1;
            }
            while (this.Pj.wj > vF98) {
              this.Pj.wj -= 1;
              this.Pj.xj[this.Pj.wj].Pf.ih();
              this.Pj.xj[this.Pj.wj].Nf.ih();
            }
          }
        };
        f158.prototype.Pa = function () {
          if (this.sc && f88().p.W) {
            var v802 = Date.now() / 200;
            var v803 = Math.sin(v802);
            var v804 = this.Ng;
            var v805 = this.Ng * 1.5;
            var v806 = this.Qj - (this.Qj - v804 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v807 = this.Rj * 0.5;
            var vLN0102 = 0;
            var vLN0103 = 0;
            for (var v808 = -1; v808 < this.Pj.wj; v808++) {
              var vV808 = v808;
              var v809 = Math.cos(vV808 * 1 / 12 * Math.PI - v802) * (1 - Math.pow(16, vV808 * -1 / 12));
              if (v808 >= 0) {
                var v810 = v806 + v804 * -0.5 * vV808;
                var v811 = v807 + v804 * 0.5 * v809;
                var v812 = v804 * 2;
                var v813 = v805 * 2;
                var v814 = Math.atan2(vLN0103 - v809, vV808 - vLN0102);
                if (v808 == 0) {
                  this.Pj.vj.mh(v810, v811, v812, v814);
                }
                this.Pj.xj[v808].mh(v810, v811, v812, v813, v814);
                var v815 = this.Sj ? this.Xj ? 0.4 + v803 * 0.2 : 0.9 + v803 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v808].Nf.qh(v815);
                this.Pj.xj[v808].Pf.qh(v815);
              }
              vLN0102 = vV808;
              vLN0103 = v809;
            }
            for (var vLN0104 = 0; vLN0104 < this.Pj.vj.Cj.length; vLN0104++) {
              var v816 = this.Tj ? this.Yj ? 0.4 + v803 * 0.2 : 0.9 + v803 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN0104].qh(v816);
            }
            for (var vLN0105 = 0; vLN0105 < this.Pj.vj.Dj.length; vLN0105++) {
              var v817 = this.Uj ? this.Zj ? 0.4 + v803 * 0.2 : 0.9 + v803 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN0105].qh(v817);
            }
            for (var vLN0106 = 0; vLN0106 < this.Pj.vj.Ej.length; vLN0106++) {
              var v818 = this.Vj ? this.$j ? 0.4 + v803 * 0.2 : 0.9 + v803 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN0106].qh(v818);
            }
            for (var vLN0107 = 0; vLN0107 < this.Pj.vj.Fj.length; vLN0107++) {
              var v819 = this.Wj ? this._j ? 0.4 + v803 * 0.2 : 0.9 + v803 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN0107].qh(v819);
            }
            this.ue.render(this.Pj.Rf);
          }
        };
        return f158;
      }();
      var vF50 = function () {
        function f159(p754) {
          this.rc = p754;
        }
        f159.fk = $("#game-view");
        f159.gk = $("#results-view");
        f159.hk = $("#main-menu-view");
        f159.ik = $("#popup-view");
        f159.jk = $("#toaster-view");
        f159.kk = $("#loading-view");
        f159.lk = $("#stretch-box");
        f159.mk = $("#game-canvas");
        f159.di = $("#background-canvas");
        f159.nk = $("#social-buttons");
        f159.ok = $("#markup-wrap");
        f159.prototype.a = function () {};
        f159.prototype.ii = function () {};
        f159.prototype.ji = function () {};
        f159.prototype.ei = function () {};
        f159.prototype.Ra = function () {};
        f159.prototype.Pa = function (p755, p756) {};
        return f159;
      }();
      var vF51 = function () {
        var v$7 = $("#final-caption");
        var v$8 = $("#final-continue");
        var v$9 = $("#congrats-bg");
        var v$10 = $("#unl6wj4czdl84o9b");
        $("#congrats");
        var v$11 = $("#final-share-fb");
        var v$12 = $("#final-message");
        var v$13 = $("#final-score");
        var v$14 = $("#final-place");
        var v$15 = $("#final-board");
        var vF968 = f96(vF50, function () {
          vF50.call(this, 0);
          var vThis15 = this;
          var vF886 = f88();
          var v820 = vF50.mk.get()[0];
          console.log("sSE=" + v1007.qk);
          v$7.text(f91("index.game.result.title"));
          v$8.text(f91("index.game.result.continue"));
          v$8.click(function () {
            vF886.r.Cd();
            vF886.r.G(vF18.AudioState.F);
            vF886.s.I(vF886.s.F);
          });
          $("#game-canvas").attr("tabindex", 0).focus();
          $("#game-canvas").click();
          $("#game-canvas").keypress(function (p757) {
            console.log(p757);
            if (p757.target.type !== "text") {
              if (p757.key.toLowerCase() === vO5.zoom) {
                f30(1);
              }
              if (p757.key.toLowerCase() === vO5.restart) {
                let vV1242 = v124;
                $(".overlay-2").css("position", "static");
                if (vV1242) {
                  anApp.r.Hd();
                  anApp.sa(vV1242);
                }
              }
              if (p757.key.toLowerCase() === vO5.wormExplot) {
                const v821 = new Uint8Array([NaN, NaN]);
                anApp.o.Wb(v821);
                setTimeout(() => {
                  let vV1243 = v124;
                  $(".overlay-2").css("position", "static");
                  if (vV1243) {
                    anApp.r.Hd();
                    anApp.sa(vV1243);
                  }
                }, 1000);
              }
              if (p757.key.toLowerCase() === vO5.laserHS) {
                $(".option.toggle[data-option='laserHS'] .box").click();
              }
              if (p757.key.toLowerCase() === vO5.sectores) {
                $(".option.toggle[data-option='sectores'] .box").click();
                f64();
              }
              if (p757.key.toLowerCase() === vO5.background) {
                $(".option.toggle[data-option='backgroundSolid'] .box").click();
                f64();
              }
              if (p757.key.toLowerCase() === vO5.noSkin) {
                vO8.noSkin = !vO8.noSkin;
              }
              if (p757.key.toLowerCase() === vO5.noAuras) {
                vO8.noAuras = !vO8.noAuras;
              }
              if (p757.key.toLowerCase() === vO5.giro) {
                if (v101) {
                  v101 = false;
                  vLN55 = 55;
                  vLN1 = 1;
                  v103 = true;
                  clearInterval(v100);
                  v100 = null;
                  v131.texture = v106;
                  v131.alpha = 0.25;
                } else {
                  v131.alpha = 0.75;
                  f59();
                  v101 = true;
                }
              }
            }
          });
          $("#game-canvas").keydown(function (p758) {
            if (p758.key === "Enter") {
              f160();
            }
            if (p758.keyCode == 32) {
              vThis15.rk = true;
            }
            if (p758.keyCode == 49) {
              vO8.emoji = true;
              setTimeout(() => {
                vO8.emoji = false;
              }, 2000);
            }
            p758.keyCode;
          }).keyup(function (p759) {
            if (p759.keyCode == 32) {
              vThis15.rk = false;
            }
          });
          function f160() {
            $("#chatInput").css("display", "block").focus();
          }
          v820.addEventListener("touchstart", function (p760) {
            if (p760 = p760 || window.event) {
              vThis15.rk = p760.touches.length >= 2;
            }
            p760.preventDefault();
          }, true);
          v820.addEventListener("touchend", function (p761) {
            if (p761 = p761 || window.event) {
              vThis15.rk = p761.touches.length >= 2;
            }
          }, true);
          v820.addEventListener("mousemove", function (p762) {
            if ((p762 = p762 || window.event && p762.clientX !== undefined) && !v101) {
              var v822 = p762.clientX;
              var v823 = p762.clientY;
              window.mouseX = v822;
              window.mouseY = v823;
              vThis15.sk = Math.atan2(v823 - v820.offsetHeight * 0.5, v822 - v820.offsetWidth * 0.5);
            }
          }, true);
          v820.addEventListener("mousedown", function (p763) {
            vThis15.rk = true;
          }, true);
          v820.addEventListener("mouseup", function (p764) {
            vThis15.rk = false;
          }, true);
          if (f29()) {
            var v824;
            var v825 = -1;
            v820.addEventListener("touchmove", function (p765) {
              if (p765 = p765 || window.event) {
                p765 = p765.touches[0];
                var v826 = v820.offsetWidth * 0.5;
                var v827 = v820.offsetHeight * 0.5;
                var vLN110 = 110;
                if (v142.visible) {
                  v826 = v142.x + 110;
                  v827 = v142.y + 110;
                }
                if (v135 === -1) {
                  vThis15.sk = Math.atan2(p765.pageY - v827, p765.pageX - v826);
                }
                if (v140 != -1) {
                  var v828 = Math.sqrt((v826 - p765.pageX) * (v826 - p765.pageX) + (v827 - p765.pageY) * (v827 - p765.pageY));
                  v139[v140].x = v820.offsetWidth * 0.5 + (v828 < vLN110 ? v828 : vLN110) * Math.cos(vThis15.sk) - 68;
                  v139[v140].y = v820.offsetHeight * 0.5 + (v828 < vLN110 ? v828 : vLN110) * Math.sin(vThis15.sk) - 68;
                  v139[v140].alpha = 1;
                }
              }
            }, true);
            v820.addEventListener("touchend", function (p766) {
              if (v140 != -1) {
                v139[v140].alpha = 0.25;
              }
              if (p766 && v825 === -1) {
                vThis15.rk = p766.touches.length >= 2;
              }
            }, true);
            v820.addEventListener("pointerdown", function (p767) {
              let v829;
              let v830;
              let v831 = v128.getGlobalPosition();
              let v832 = v129.getGlobalPosition();
              if (v131 !== undefined && v132 !== undefined) {
                v829 = v131.getGlobalPosition();
                v830 = v132.getGlobalPosition();
              }
              let v833 = v138[v136].getGlobalPosition();
              let v834 = v143.getGlobalPosition();
              if (v830 !== undefined && v829 !== undefined) {
                if (p767.clientX > v830.x && p767.clientX <= v830.x + v132.width && p767.clientY > v830.y && p767.clientY <= v830.y + v132.height) {
                  v132.emit("mouseup");
                  return;
                }
                if (p767.clientX > v829.x && p767.clientX <= v829.x + v131.width && p767.clientY > v829.y && p767.clientY <= v829.y + v131.height) {
                  v131.emit("mouseup");
                  return;
                }
              }
              if (p767.clientX > v831.x && p767.clientX <= v831.x + v128.width && p767.clientY > v831.y && p767.clientY <= v831.y + v128.height) {
                v128.emit("mouseup");
              } else if (p767.clientX > v832.x && p767.clientX <= v832.x + v129.width && p767.clientY > v832.y && p767.clientY <= v832.y + v129.height) {
                v129.emit("mouseup");
              } else {
                if (!(p767.clientX > v833.x) || !(p767.clientX <= v833.x + v138[v136].width) || !(p767.clientY > v833.y) || !(p767.clientY <= v833.y + v138[v136].height)) {
                  if (v143.visible && p767.clientX > v834.x && p767.clientX <= v834.x + v143.width && p767.clientY > v834.y && p767.clientY <= v834.y + v143.height) {
                    v825 = p767.pointerId;
                    vThis15.rk = true;
                    v143.alpha = 1;
                    return;
                  } else {
                    if (v135 !== -1 && !v141[v135].visible) {
                      v824 = p767.pointerId;
                      v141[v135].x = p767.clientX;
                      v141[v135].y = p767.clientY;
                      v141[v135].visible = true;
                      v141[v135].onDragStart(p767);
                    }
                    return;
                  }
                }
                v138[v136].emit("tap");
              }
            }, true);
            v820.addEventListener("pointerup", function (p768) {
              if (p768.pointerId == v825) {
                vThis15.rk = false;
                v825 = -1;
                v143.alpha = 0.5;
              }
              if (p768.pointerId == v824 && v135 !== -1) {
                v141[v135].visible = false;
                v141[v135].onDragEnd(p768);
              }
            }, true);
            v820.addEventListener("pointermove", function (p769) {
              if (p769.pointerId == v824 && v135 !== -1) {
                v141[v135].onDragMove(p769);
              }
            }, true);
          }
          this.wb = new vF25(vF50.mk);
          this.cb = 0;
          this.sk = 0;
          this.rk = false;
          vO7.eventoPrincipal = vThis15;
        });
        vF968.prototype.a = function () {};
        vF968.prototype.ii = function () {
          if (this.cb == 0) {
            vF50.fk.stop();
            vF50.fk.fadeIn(500);
            vF50.gk.stop();
            vF50.gk.fadeOut(1);
            vF50.hk.stop();
            vF50.hk.fadeOut(50);
            vF50.ik.stop();
            vF50.ik.fadeOut(50);
            vF50.jk.stop();
            vF50.jk.fadeOut(50);
            vF50.kk.stop();
            vF50.kk.fadeOut(50);
            vF50.lk.stop();
            vF50.lk.fadeOut(1);
            vF50.di.stop();
            vF50.di.fadeOut(50);
            vF20.Le(false);
            vF50.nk.stop();
            vF50.nk.fadeOut(50);
            vF50.ok.stop();
            vF50.ok.fadeOut(50);
          } else {
            vF50.fk.stop();
            vF50.fk.fadeIn(500);
            vF50.gk.stop();
            vF50.gk.fadeIn(500);
            vF50.hk.stop();
            vF50.hk.fadeOut(50);
            vF50.ik.stop();
            vF50.ik.fadeOut(50);
            vF50.jk.stop();
            vF50.jk.fadeOut(50);
            vF50.kk.stop();
            vF50.kk.fadeOut(50);
            vF50.lk.stop();
            vF50.lk.fadeOut(1);
            vF50.di.stop();
            vF50.di.fadeOut(50);
            vF20.Le(false);
            vF50.nk.stop();
            vF50.nk.fadeOut(50);
            vF50.ok.stop();
            vF50.ok.fadeOut(50);
          }
        };
        vF968.prototype.J = function () {
          this.cb = 0;
          return this;
        };
        vF968.prototype.Fa = function () {
          console.log("re");
          v$9.hide();
          setTimeout(function () {
            console.log("fi_bg");
            v$9.fadeIn(100);
          }, 100);
          v$10.hide();
          setTimeout(function () {
            console.log("fi_aw");
            v$10.fadeIn(100);
          }, 100);
          this.cb = 1;
          return this;
        };
        vF968.prototype.ji = function () {
          this.rk = false;
          this.wb.Ra();
          if (this.cb == 1) {
            f88().r.Gd();
          }
        };
        vF968.prototype.Ra = function () {
          this.wb.Ra();
        };
        vF968.prototype.Pa = function (p770, p771) {
          this.wb.Pa(p770, p771);
        };
        vF968.prototype.Da = function (p772, p773, p774) {
          var v835;
          var v836;
          var v837;
          var v838;
          var v839;
          var v840;
          var v841;
          var v842;
          var vUndefined11 = undefined;
          var vUndefined12 = undefined;
          var vUndefined13 = undefined;
          if (p773 >= 1 && p773 <= 10) {
            vUndefined11 = f91("index.game.result.place.i" + p773);
            vUndefined12 = f91("index.game.result.placeInBoard");
            vUndefined13 = f91("index.game.social.shareResult.messGood").replace("{0}", p774).replace("{1}", p772).replace("{2}", vUndefined11);
          } else {
            vUndefined11 = "";
            vUndefined12 = f91("index.game.result.tryHit");
            vUndefined13 = f91("index.game.social.shareResult.messNorm").replace("{0}", p774).replace("{1}", p772);
          }
          v$12.html(f91("index.game.result.your"));
          v$13.html(p772);
          v$14.html(vUndefined11);
          v$15.html(vUndefined12);
          if (v1007.qk) {
            var vF915 = f91("index.game.result.share");
            f91("index.game.social.shareResult.caption");
            v$11.empty().append((v835 = vF915, v836 = "https://wormate.io", v837 = "wormate.io", v838 = vUndefined13, v839 = vUndefined13, v840 = "https://wormate.io/images/og-share-img-new.jpg", v841 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + v835 + "</span></div>", (v842 = $(v841)).click(function () {
              if (typeof FB != "undefined" && FB.ui !== undefined) {
                FB.ui({
                  method: "feed",
                  display: "popup",
                  link: v836,
                  name: v837,
                  caption: v838,
                  description: v839,
                  picture: v840
                }, function () {});
              }
            }), v842));
          }
        };
        vF968.prototype.T = function () {
          return this.sk;
        };
        vF968.prototype.U = function () {
          return this.rk;
        };
        return vF968;
      }();
      v1001 = $("#loading-worm-a");
      v1002 = $("#loading-worm-b");
      v1003 = $("#loading-worm-c");
      v1004 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      v1005 = f96(vF50, function () {
        vF50.call(this, 0);
      });
      v1005.prototype.a = function () {};
      v1005.prototype.ii = function () {
        vF50.fk.stop();
        vF50.fk.fadeOut(50);
        vF50.gk.stop();
        vF50.gk.fadeOut(50);
        vF50.hk.stop();
        vF50.hk.fadeOut(50);
        vF50.ik.stop();
        vF50.ik.fadeOut(50);
        vF50.jk.stop();
        vF50.jk.fadeOut(50);
        vF50.kk.stop();
        vF50.kk.fadeIn(500);
        vF50.lk.stop();
        vF50.lk.fadeIn(1);
        vF50.di.stop();
        vF50.di.fadeIn(500);
        vF20.Le(true);
        vF50.nk.stop();
        vF50.nk.fadeOut(50);
        vF50.ok.stop();
        vF50.ok.fadeOut(50);
      };
      v1005.prototype.ji = function () {
        this.tk();
      };
      v1005.prototype.tk = function () {
        v1001.css("background-position", "100% 200%");
        for (var vLN0108 = 0; vLN0108 < v1004.length; vLN0108++) {
          var v843 = Math.floor(Math.random() * v1004.length);
          var v844 = v1004[vLN0108];
          v1004[vLN0108] = v1004[v843];
          v1004[v843] = v844;
        }
        v1001.css("background-position", v1004[0]);
        v1002.css("background-position", v1004[1]);
        v1003.css("background-position", v1004[2]);
      };
      var v_0x1a3189 = v1005;
      $("#mm-event-text");
      v978 = $("#mm-skin-canv");
      v979 = $("#mm-skin-prev");
      v980 = $("#mm-skin-next");
      v981 = $("#mm-skin-over");
      v982 = $("#mm-skin-over-button-list");
      v983 = $("#mm-params-nickname");
      v984 = $("#mm-params-game-mode");
      v985 = $("#mm-action-buttons");
      v986 = $("#mm-action-play");
      v987 = $("#mm-action-guest");
      v988 = $("#mm-action-login");
      v989 = $("#mm-player-info");
      v990 = $("#mm-store");
      v991 = $("#mm-leaders");
      v992 = $("#mm-settings");
      v993 = $("#mm-coins-box");
      v994 = $("#mm-player-avatar");
      v995 = $("#mm-player-username");
      v996 = $("#mm-coins-val");
      v997 = $("#mm-player-exp-bar");
      v998 = $("#mm-player-exp-val");
      v999 = $("#mm-player-level");
      v1000 = f96(vF50, function () {
        vF50.call(this, 1);
        var vF887 = f88();
        this.uk = new vF49(v978);
        v984.click(function () {
          vF887.r.Cd();
        });
        v978.click(function () {
          if (vF887.u.P()) {
            vF887.r.Cd();
            vF887.s.I(vF887.s.$h);
          }
        });
        v979.click(function () {
          vF887.r.Cd();
          vF887.t.Ah();
        });
        v980.click(function () {
          vF887.r.Cd();
          vF887.t.zh();
        });
        v983.keypress(function (p775) {
          if (p775.keyCode == 13) {
            vF887.na();
          }
        });
        v986.click(function () {
          vF887.r.Cd();
          vF887.na();
        });
        v987.click(function () {
          vF887.r.Cd();
          vF887.na();
        });
        v988.click(function () {
          vF887.r.Cd();
          vF887.s.I(vF887.s.Zh);
        });
        v992.click(function () {
          vF887.r.Cd();
          vF887.s.I(vF887.s.xa);
        });
        v989.click(function () {
          if (vF887.u.P()) {
            vF887.r.Cd();
            vF887.s.I(vF887.s.Yh);
          }
        });
        v991.click(function () {
          if (vF887.u.P()) {
            vF887.r.Cd();
            vF887.s.I(vF887.s.Xh);
          }
        });
        v990.click(function () {
          if (vF887.u.P()) {
            vF887.r.Cd();
            vF887.s.I(vF887.s._h);
          }
        });
        v993.click(function () {
          if (vF887.u.P()) {
            vF887.r.Cd();
            vF887.s.I(vF887.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
        $("#final-replay").click(function () {
          let vV1244 = v124;
          if (vV1244) {
            anApp.r.Hd();
            anApp.sa(vV1244);
          }
        });
        v990.after("<div id=\"mm-zw-settings\" style=\"\">Settings</div>");
        $("#mm-advice-cont").html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">FULL SCREEN</button><button value=\"Replay\" id=\"zwplayagain\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">REPLAY</button></div>");
        $("#zwplayagain").click(function () {
          let vV1245 = v124;
          if (vV1245) {
            anApp.r.Hd();
            anApp.sa(vV1245);
          }
        });
        $("#fullscreen").click(function () {
          if (v144) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            } else if (document.body.webkitExitFullscreen) {
              document.body.webkitExitFullscreen();
            }
            v144 = false;
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
            v144 = true;
          }
        });
        $("#mm-zw-settings").click(function () {
          if (vF887.u.P()) {
            vF887.r.Cd();
            vF887.s.I(vF887.s.zwset);
          }
        });
        var vF892 = f89(vF21.va);
        if (vF892 != "ARENA" && vF892 != "TEAM2") {
          vF892 = "ARENA";
        }
        v984.val(vF892);
        console.log("Load GM: " + vF892);
      });
      v1000.prototype.a = function () {
        var vF888 = f88();
        var vThis16 = this;
        vF888.u.V(function () {
          vF888.s.F.xk();
        });
        vF888.u.Pi(function () {
          if (vF888.u.P()) {
            vF888.t.Bh(vF888.u.Di(), vF37.ia);
            vF888.t.Bh(vF888.u.Ei(), vF37.ja);
            vF888.t.Bh(vF888.u.Fi(), vF37.ka);
            vF888.t.Bh(vF888.u.Gi(), vF37.la);
            vF888.t.Bh(vF888.u.Hi(), vF37.ma);
          } else {
            vF888.t.Bh(vF888.Ga(), vF37.ia);
            vF888.t.Bh(0, vF37.ja);
            vF888.t.Bh(0, vF37.ka);
            vF888.t.Bh(0, vF37.la);
            vF888.t.Bh(0, vF37.ma);
          }
        });
        vF888.u.Pi(function () {
          v986.toggle(vF888.u.P());
          v988.toggle(!vF888.u.P());
          v987.toggle(!vF888.u.P());
          v991.toggle(vF888.u.P());
          v990.toggle(vF888.u.P());
          v993.toggle(vF888.u.P());
          if (vF888.u.P()) {
            v981.hide();
            v995.html(vF888.u.wi());
            v994.attr("src", vF888.u.xi());
            v996.html(vF888.u.zi());
            v997.width(vF888.u.Bi() * 100 / vF888.u.Ci() + "%");
            v998.html(vF888.u.Bi() + " / " + vF888.u.Ci());
            v999.html(vF888.u.Ai());
            v983.val(vF888.u.ga());
          } else {
            v981.toggle(v1007.qk && !vF888.Ha());
            v995.html(v995.data("guest"));
            v994.attr("src", vLSimagesguestavatarxma);
            v996.html("10");
            v997.width("0");
            v998.html("");
            v999.html(1);
            v983.val(f89(vF21.Aa));
          }
        });
        vF888.t.xh(function () {
          vThis16.uk.ak(vF888.t.ha(vF37.ia), false, false);
          vThis16.uk.bk(vF888.t.ha(vF37.ja), false, false);
          vThis16.uk.ck(vF888.t.ha(vF37.ka), false, false);
          vThis16.uk.dk(vF888.t.ha(vF37.la), false, false);
          vThis16.uk.ek(vF888.t.ha(vF37.ma), false, false);
        });
      };
      v1000.prototype.ii = function () {
        vF50.fk.stop();
        vF50.fk.fadeOut(50);
        vF50.gk.stop();
        vF50.gk.fadeOut(50);
        vF50.hk.stop();
        vF50.hk.fadeIn(500);
        vF50.ik.stop();
        vF50.ik.fadeOut(50);
        vF50.jk.stop();
        vF50.jk.fadeOut(50);
        vF50.kk.stop();
        vF50.kk.fadeOut(50);
        vF50.lk.stop();
        vF50.lk.fadeIn(1);
        vF50.di.stop();
        vF50.di.fadeIn(500);
        vF20.Le(true);
        vF50.nk.stop();
        vF50.nk.fadeIn(500);
        vF50.ok.stop();
        vF50.ok.fadeIn(500);
      };
      v1000.prototype.ji = function () {
        f88().r.Dd();
        this.uk.Le(true);
      };
      v1000.prototype.ei = function () {
        this.uk.Le(false);
      };
      v1000.prototype.Ra = function () {
        this.uk.Ra();
      };
      v1000.prototype.Pa = function (p776, p777) {
        this.uk.Pa();
      };
      v1000.prototype.ga = function () {
        return v983.val();
      };
      v1000.prototype.D = function () {
        return v984.val();
      };
      v1000.prototype.xk = function () {
        v985.show();
      };
      v1000.prototype.vk = function () {
        var v845 = $("#mm-advice-cont").children();
        var vLN0109 = 0;
        setInterval(function () {
          v845.eq(vLN0109).fadeOut(500, function () {
            if (++vLN0109 >= v845.length) {
              vLN0109 = 0;
            }
            v845.eq(vLN0109).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      v1000.prototype.wk = function () {
        function f161() {
          vF889.Ka(true);
          setTimeout(function () {
            v981.hide();
          }, 3000);
        }
        var vF889 = f88();
        if (v1007.qk && !vF889.Ha()) {
          v981.show();
          var vF916 = f91("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f91("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f91("index.game.main.menu.unlockSkins.comeAndPlay"));
          v982.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF916 + "</span></a>").click(f161));
          v982.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF916 + "</span></a>").click(f161));
        }
      };
      var v_0x3b58a2 = v1000;
      v977 = f96(vF50, function () {
        vF50.call(this, 0);
      });
      v977.prototype.a = function () {};
      v977.prototype.ii = function () {
        vF50.fk.stop();
        vF50.fk.fadeOut(50);
        vF50.gk.stop();
        vF50.gk.fadeOut(50);
        vF50.hk.stop();
        vF50.hk.fadeOut(50);
        vF50.ik.stop();
        vF50.ik.fadeOut(50);
        vF50.jk.stop();
        vF50.jk.fadeOut(50);
        vF50.kk.stop();
        vF50.kk.fadeOut(50);
        vF50.lk.stop();
        vF50.lk.fadeOut(1);
        vF50.di.stop();
        vF50.di.fadeOut(50);
        vF20.Le(false);
        vF50.nk.stop();
        vF50.nk.fadeOut(50);
        vF50.ok.stop();
        vF50.ok.fadeOut(50);
      };
      var v_0xfcfa10 = v977;
      v975 = $("#toaster-stack");
      v976 = f96(vF50, function () {
        vF50.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      v976.prototype.a = function () {};
      v976.prototype.ii = function () {
        vF50.fk.stop();
        vF50.fk.fadeOut(50);
        vF50.gk.stop();
        vF50.gk.fadeOut(50);
        vF50.hk.stop();
        vF50.hk.fadeOut(50);
        vF50.ik.stop();
        vF50.ik.fadeOut(50);
        vF50.jk.stop();
        vF50.jk.fadeIn(500);
        vF50.kk.stop();
        vF50.kk.fadeOut(50);
        vF50.lk.stop();
        vF50.lk.fadeIn(1);
        vF50.di.stop();
        vF50.di.fadeIn(500);
        vF20.Le(true);
        vF50.nk.stop();
        vF50.nk.fadeOut(50);
        vF50.ok.stop();
        vF50.ok.fadeIn(500);
      };
      v976.prototype.ji = function () {
        this.Ak();
      };
      v976.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      v976.prototype._ = function (p778) {
        this.yk.unshift(p778);
        setTimeout(function () {
          f88().s.ki();
        }, 0);
      };
      v976.prototype.Ti = function (p779) {
        this.yk.push(p779);
        setTimeout(function () {
          f88().s.ki();
        }, 0);
      };
      v976.prototype.Ak = function () {
        var vThis17 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f88().s.gi();
            return;
          }
          var v846 = this.yk.shift();
          this.zk = v846;
          var v847 = v846.Bk();
          v847.hide();
          v847.fadeIn(300);
          v975.append(v847);
          v846.Ck = function () {
            v847.fadeOut(300);
            setTimeout(function () {
              v847.remove();
            }, 300);
            if (vThis17.zk == v846) {
              vThis17.zk = null;
            }
            vThis17.Ak();
          };
          v846.ji();
        }
      };
      var v_0x1a2f3b = v976;
      var vF52 = function () {
        var v$16 = $("#popup-menu-label");
        var v$17 = $("#popup-menu-coins-box");
        var v$18 = $("#popup-menu-coins-val");
        $("#popup-menu-back").click(function () {
          var vF8810 = f88();
          vF8810.r.Cd();
          vF8810.s.gi();
        });
        v$17.click(function () {
          var vF8811 = f88();
          if (vF8811.u.P()) {
            vF8811.r.Cd();
            vF8811.s.I(vF8811.s.Wh);
          }
        });
        var vF969 = f96(vF50, function (p780, p781) {
          vF50.call(this, 1);
          this.ad = p780;
          this.Dk = p781;
        });
        var v848 = "\n                        <div id=\"settings-menu\" style=\"display: flex; opacity: 0; z-index: 2;\">\n                            <div class=\"navigation\">\n                                <div class=\"tab material-button active\" category=\"profile\"  style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">person</i>\n                                    <span>Profile</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"game\"  style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">games</i>\n                                    <span>Game</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"theme\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">palette</i>\n                                    <span>Theme</span>\n                                </div>\n                                <div class=\"tab material-button\" id=\"button-inputs\" data-toggle=\"modal\" data-target=\"#hotkeysModal\" category=\"controls\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">keyboard</i>\n                                    <span>Controls</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"cursor\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">mouse</i>\n                                    <span>Cursor</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"sound\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">volume_up</i>\n                                    <span>Sound</span>\n                                </div>\n                                 <!-- 🏆 Nueva pestaña: Equipos -->\n                                <div class=\"tab material-button\" category=\"teams\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">group</i>\n                                    <span>Teams</span>\n                                </div>\n                                <!-- 🎨 Nueva pestaña: Skins -->\n                                <div class=\"tab material-button\" category=\"skins\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">brush</i>\n                                    <span>Skins</span>\n                                </div>\n                                 <!-- 🎨 Nueva pestaña: Stremers  -->\n                                <div class=\"tab material-button\" category=\"streamers\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">live_tv</i>\n                                    <span>Live</span>\n                                </div>\n                            </div>\n\n                            <div class=\"options-list ps\">\n                                <div category=\"game\" class=\"\">\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT BACKGROUND</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevBackground\" class=\"nav-button\" onclick=\"changeBackground(-1)\">❮</button>\n                                                <div id=\"backgroundPreview\" class=\"background-preview\"></div>\n                                                <button id=\"nextBackground\" class=\"nav-button\" onclick=\"changeBackground(1)\">❯</button>\n                                            </div>\n                                    </div>\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT FONT IN GAME</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevFont\" class=\"nav-button\" onclick=\"changeFont(-1)\">❮</button>\n                                                <div id=\"fontPreview\" class=\"font-preview\">AaBbCc</div>\n                                                <button id=\"nextFont\" class=\"nav-button\" onclick=\"changeFont(1)\">❯</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"theme\" class=\"\">\n\n                                </div>\n                                <div category=\"controls\" class=\"\">\n                                    <div class=\"hotkey-container\"></div>\n                                </div>\n                                <div category=\"profile\" class=\"active\">\n                                    <div class=\"profile-card\">\n                                        <!-- Imagen de perfil -->\n                                        <div class=\"profile-picture\">\n                                            <img src=\"https://i.imgur.com/gUysDha.png\" id=\"avatarUrl\" alt=\"Profile Picture\">\n                                        </div>\n                                        \n                                        <!-- Datos del usuario -->\n                                        <div class=\"profile-info\">\n                                            <h2>User Profile</h2>\n                                            <!--p><strong>Nombre:</strong> <span id=\"username\">Usuario</span></p>\n                                            <p><strong>Email:</strong> <span id=\"useremail\">usuario@email.com</span></p-->\n                                            \n                                            <!-- Contenedor del ID con botón para copiar -->\n                                            <div class=\"profile-id-container\">\n                                                <span id=\"idperfil\">ID: <span id=\"userid\"></span></span>\n                                                <button id=\"idcopiar\" class=\"copy-button\">Copy ID</button>\n                                            </div>\n                                            <button id=\"resetScript\" class=\"reset-button\">Change Version</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"cursor\" class=\"\"></div>\n                                <div category=\"sound\" class=\"\">\n                                 <!-- Contenedor de enlaces con botones -->\n                                <div class=\"sound-inputs\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + vO3[v155].soundTuto1 + "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://www.myinstants.com/en/index/us/', '_blank')\">Go to Sound Tutorial 1</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + vO3[v155].soundTuto2 + "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://catbox.moe/', '_blank')\">Go to Sound Tutorial 2</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + vO3[v155].soundTuto3 + ":</div>\n                                        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\" placeholder=\"Enter sound URL\">\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + vO3[v155].soundTuto4 + ":</div>\n                                        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\" placeholder=\"Enter secondary sound URL\">\n                                    </div>\n                                     <!-- Botón para activar/desactivar el sonido de headshots -->\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">Headshot Sound:</div>\n                                        <button id=\"toggle-sound\" class=\"sound-button\">Disable Sound</button>\n                                    </div>\n\n\n                                </div>\n                                </div>\n                                  <!-- 🏆 Nueva sección: Equipos -->\n                                <div category=\"teams\" class=\"\">\n                                    \n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">TEAM CODE:</div>\n                                        <input type=\"text\" id=\"teamCodeInput\"  class=\"sounds-input\" placeholder=\"ENTER YOUR CODE\" />\n                                    </div>\n                                </div>\n                                <!-- 🎨 Nueva sección: Skins -->\n                                <div category=\"skins\" class=\"\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">Skin Original:</div>\n                                        <input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\"  class=\"sounds-input\"  id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">\n                                    </div>\n                                </div>\n                                <div category=\"streamers\" class=\"\">\n                                    <div class=\"input-container\">\n                                      <div id=\"streamers-section\" style=\"display: none; padding: 10px;\">\n    <h2>Lista de Streamers</h2>\n    <div id=\"streamers-grid\">\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 1</span>\n                <span class=\"streamer-platform\">Twitch</span>\n            </div>\n        </div>\n        <div class=\"streamer\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 2</span>\n                <span class=\"streamer-platform\">YouTube</span>\n            </div>\n        </div>\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 3</span>\n                <span class=\"streamer-platform\">Facebook</span>\n            </div>\n        </div>\n    </div>\n</div>\n                                    </div>\n                                </div>\n                                <!-- Sección de Streamers -->\n                                </div>\n                            </div>\n\n\n                        </div>\n                    ";
        $("#settings-view").after(v848);
        $(".tab.material-button").on("click", function () {
          var v849 = $(this).attr("category");
          if (!$(this).hasClass("active")) {
            $(".tab.material-button, .options-list > div").removeClass("active");
            $(this).addClass("active");
            $("div[category='" + v849 + "']").addClass("active");
          }
        });
        document.getElementById("resetScript").addEventListener("click", async function () {
          localStorage.clear();
          sessionStorage.clear();
          if (window.indexedDB) {
            (await indexedDB.databases()).forEach(p782 => indexedDB.deleteDatabase(p782.name));
          }
          if (window.openDatabase) {
            console.warn("Web SQL no se puede eliminar automáticamente desde JavaScript.");
          }
          document.cookie.split(";").forEach(function (p783) {
            document.cookie = p783.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          });
          if ("caches" in window) {
            caches.keys().then(function (p784) {
              for (let v850 of p784) {
                caches.delete(v850);
              }
            });
          }
          if ("serviceWorker" in navigator) {
            const v851 = await navigator.serviceWorker.getRegistrations();
            for (let v852 of v851) {
              await v852.unregister();
            }
          }
          localStorage.removeItem("scriptSeleccionado");
          location.reload();
        });
        v162 = true;
        $("#toggle-sound").click(function () {
          v162 = !v162;
          $(this).text(v162 ? "Disable Sound" : "Enable Sound");
        });
        $("#idcopiar").click(function () {
          navigator.clipboard.writeText(zw_userId);
          alert("ID copiado: " + zw_userId);
        });
        window.changeBackground = function (p785) {
          let v853 = localStorage.getItem("selectedBackground");
          v150 = v853 !== null ? parseInt(v853) : 0;
          v150 = (v150 + p785 + vA5.length) % vA5.length;
          f83(v150);
        };
        window.changeFont = function (p786) {
          v151 = (v151 + p786 + vA6.length) % vA6.length;
          f84();
        };
        f84();
        const vA25 = [{
          id: "ping",
          label: "SHOW FPS",
          category: "game",
          tooltip: ""
        }, {
          id: "fps",
          label: "SHOW PING",
          category: "game",
          tooltip: ""
        }, {
          id: "chngBotSkins",
          label: "CHANGE BOT & PEOPLE TO BASIC SKINS",
          category: "game",
          tooltip: ""
        }, {
          id: "chngPersonsSkins",
          label: "CHANGE SKINS TO Z WORM",
          category: "game",
          tooltip: ""
        }, {
          id: "top8",
          label: "SHOW TOP HS",
          category: "game",
          tooltip: "If you enable this option, you will see the list of the top 8 players."
        }, {
          id: "killFeed",
          label: "SHOW KILL FEED",
          category: "game",
          tooltip: "If you enable this option, you will see the list of kills in real time."
        }, {
          id: "minimapTeamcod",
          label: "SHOW TEAM LIST",
          category: "teams",
          tooltip: ""
        }];
        const vA26 = [{
          name: "ZOOM SPEED",
          id: "zoomSpeed",
          min: 0.1,
          max: 15,
          step: 0.1,
          category: "game",
          tooltip: ""
        }];
        const vO35 = {
          game: document.querySelector(".options-list > div[category=\"game\"]"),
          teams: document.querySelector(".options-list > div[category=\"teams\"]"),
          theme: document.querySelector(".options-list > div[category=\"theme\"]"),
          controls: document.querySelector(".options-list > div[category=\"controls\"]")
        };
        if (v227) {
          vA25.push({
            id: "Incognito",
            label: "INCOGNITO",
            category: "game",
            tooltip: "Premium Feature"
          }, {
            id: "laserHS",
            label: "LASER HS",
            category: "game",
            tooltip: "Premium Feature"
          }, {
            id: "backgroundSolid",
            label: "BACKGROUND SOLID",
            category: "game",
            tooltip: "Premium Feature"
          }, {
            id: "sectores",
            label: "SECTORS",
            category: "game",
            tooltip: "Premium Feature"
          }, {
            id: "speed_zigzag",
            label: "VISIBLE SPEED AND ZIGZAG",
            category: "game",
            tooltip: "Premium Feature"
          }, {
            id: "timerSpZg",
            label: "TIMER SPEED AND ZIGZAG",
            category: "game",
            tooltip: "Premium Feature"
          }, {
            id: "visiblePowersAll",
            label: "VISIBLE ALL POWER UPS",
            category: "game",
            tooltip: "Premium Feature"
          }, {
            id: "hideYouNameInMinimap",
            label: "SHOW YOUR NAME FOR TEAM LIST",
            category: "teams",
            tooltip: "Premium Feature"
          });
          const vLSdivClassinputcontain = "\n                            <div class=\"input-container\">\n                                <div class=\"name2\" style=\"color: yellow;\">PUT YOUR NAME FOR TEAM LIST:</div>\n                                <input type=\"text\" id=\"teamNickname\" class=\"sounds-input\" placeholder=\"ENTER YOUR NAME FOR FRIENDS\" />\n                            </div>\n                        ";
          vO35.teams.insertAdjacentHTML("beforeend", vLSdivClassinputcontain);
          vA26.push({
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
          });
        }
        vA26.forEach(p787 => {
          const vParseFloat2 = parseFloat(vO8[p787.id]);
          const v854 = document.createElement("div");
          v854.className = "option range";
          v854.innerHTML = "\n        <div class=\"name\" style=\"" + (p787.tooltip.includes("Premium") ? "color: yellow;" : "") + "\">" + p787.name + "</div>\n        <div class=\"value\">" + vParseFloat2 + "</div>\n        <div class=\"box\">\n            <div class=\"progress-bar\">\n                <div class=\"fill\" style=\"width: " + (vParseFloat2 - p787.min) / (p787.max - p787.min) * 100 + "%;\"></div>\n            </div>\n            <input type=\"range\" id=\"" + p787.id + "\" min=\"" + p787.min + "\" max=\"" + p787.max + "\" step=\"" + p787.step + "\" value=\"" + vParseFloat2 + "\">\n        </div>\n    ";
          const v855 = v854.querySelector("input");
          const v856 = v854.querySelector(".value");
          const v857 = v854.querySelector(".fill");
          v855.addEventListener("input", () => {
            v856.textContent = v855.value;
            v857.style.width = (v855.value - p787.min) / (p787.max - p787.min) * 100 + "%";
            vO8[p787.id] = v855.value;
            localStorage.setItem(p787.id, v855.value);
            if (p787.id === "mouseDelay") {
              anApp.o.updatePacketInterval(parseInt(v855.value));
            }
          });
          vO35[p787.category].appendChild(v854);
        });
        vA25.forEach(p788 => {
          const v858 = localStorage.getItem(p788.id) === "true";
          const v859 = "\n                            <div class=\"option toggle " + (v858 ? "on" : "") + "\" data-option=\"" + p788.id + "\">\n                                <div class=\"name\" style=\"" + (p788.tooltip.includes("Premium") ? "color: yellow;" : "") + "\">" + p788.label + "</div>\n                                <div class=\"box\"><div class=\"ball\"></div></div>\n                                " + (p788.tooltip ? "<span class=\"tooltip\">" + p788.tooltip + "</span>" : "") + "\n                            </div>\n                        ";
          vO35[p788.category].insertAdjacentHTML("beforeend", v859);
        });
        document.querySelectorAll(".box").forEach(p789 => {
          p789.addEventListener("click", function (p790) {
            p790.stopPropagation();
            const v860 = this.parentElement;
            const v861 = v860.getAttribute("data-option");
            const v862 = !v860.classList.contains("on");
            v860.classList.toggle("on", v862);
            vO8[v861] = v862;
            localStorage.setItem(v861, v862);
            const v863 = v860.querySelector(".tooltip");
            if (v863) {
              v863.style.display = v862 ? "block" : "none";
            }
            console.log(v861 + " changed to", v862);
          });
        });
        f81($("div[category='theme']")[1], "teamColorGroup", "YOUR COLOR IN MAP", "teamColor", vO6.teamColor);
        $("#teamColor").on("input", function () {
          let v864 = $(this).val();
          $("#preview_teamColor").css("background-color", v864);
          localStorage.setItem("teamColor", vO9.teamColor);
          vO9.teamColor = "0x" + v864.substring(1);
          console.log(vO9.teamColor);
        });
        let v865 = localStorage.getItem("teamColor");
        if (v865) {
          vO9.teamColor = v865;
          $("#preview_teamColor").css("background-color", "#" + v865.substring(2));
          $("#teamColor").val("#" + v865.substring(2));
        }
        "<div class=\"settings-icons\">";
        "<span id=\"user-icon\" class=\"material-icons\" data-menu=\"user-menu\">account_circle</span>";
        "<span id=\"hotkeys-icon\" class=\"material-icons\" data-menu=\"hotkeys-menu\">keyboard</span>";
        "<span id=\"notifications-icon\" class=\"material-icons\" data-menu=\"notifications-menu\">notifications</span>";
        "<span id=\"help-icon\" class=\"material-icons\" data-menu=\"help-menu\">help_outline</span>";
        "</div>";
        "<div id=\"user-menu\" class=\"menu\">Opciones de usuario</div>";
        "<div id=\"hotkeys-menu\" class=\"menu\">Configuración de teclas rápidas</div>";
        "<div id=\"notifications-menu\" class=\"menu\">Preferencias de notificaciones</div>";
        "<div id=\"user-section\" class=\"settings-section\">";
        "<span id=\"zw-settings-id\" class=\"settings-label\">ID: </span>";
        "<button id=\"idkopyala\">";
        vO3[v155].copiar;
        "<div class=\"popup-sep\"></div>";
        "<div class=\"settings-line\">";
        "<input type=\"checkbox\" id=\"toggleTop8\" />";
        "<span class=\"tooltip\" id=\"tooltipTop8\" style=\"display: none;\">If you enable this option, you will see the list of the top 8 players.</span>";
        "<input type=\"checkbox\" id=\"toggleKillFeed\" />";
        "<div class=\"popup-sep\"></div>";
        "<div class=\"settings-line\">";
        "<span class=\"settings-label\">You Color Map: </span>";
        "<input type=\"color\" id=\"colorPicker\" />";
        "</div>";
        "<div class=\"settings-line\">";
        "<span class=\"settings-label\">Team Code: </span>";
        "<input type=\"text\" id=\"teamCodeInput\" placeholder=\"Enter team code\" />";
        "</div>";
        "<div class=\"popup-sep\"></div>";
        "<div class=\"settings-line\">";
        vO3[v155].fondos;
        "<select id=\"arkaplan\">";
        "<option value=\"0\">";
        vO3[v155].fondo0;
        "<option value=\"1\">";
        vO3[v155].fondo1;
        "<option value=\"2\">";
        vO3[v155].fondo2;
        "<option value=\"3\">";
        vO3[v155].fondo3;
        "</option>";
        "<option value=\"4\">";
        vO3[v155].fondo4;
        "</option>";
        "<option value=\"5\">";
        "Textil";
        "</option>";
        "<option value=\"7\">";
        "Sky Purp";
        "</option>";
        "</option>";
        "<option value=\"9\">";
        "Sky Orange";
        "<option value=\"10\">";
        "Sky Write";
        "</option>";
        "Arena 1";
        "<option value=\"12\">";
        "Arena 2";
        "</option>";
        "<option value=\"13\">";
        "Arena 3";
        "</option>";
        "<option value=\"14\">";
        "Arena 4";
        "</option>";
        "</select>";
        "</div>";
        "<div class=\"popup-sep\"></div>";
        "<div class=\"settings-line\">";
        "<span class=\"settings-label\">Top</span>";
        "<select id=\"zwtop\">";
        "<option value=\"3\">3</option>";
        "<option value=\"4\">4</option>";
        "<option value=\"5\">5</option>";
        "<option value=\"6\">6</option>";
        "<option value=\"7\">7</option>";
        "<option value=\"8\">8</option>";
        "<option value=\"9\">9</option>";
        "<option value=\"10\">10</option>";
        "</select>";
        "</div>";
        "<div class=\"popup-sep\"></div>";
        "<div class=\"settings-line\">";
        "<span class=\"settings_span\" >";
        vO3[v155].skinVisible;
        "</span>";
        "<input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">";
        "</div>";
        "<div class=\"popup-sep\"></div>";
        "<span id=\"zw-settings-version\" class=\"settings-line\"></span>";
        "</div>";
        "</div>";
        let v866 = localStorage.getItem("top8") === "true" || localStorage.getItem("top8") !== "false" && vO8.top8;
        let v867 = localStorage.getItem("killFeed") === "true" || localStorage.getItem("killFeed") !== "false" && vO8.killFeed;
        $("#toggleTop8").prop("checked", v866);
        $("#toggleKillFeed").prop("checked", v867);
        $("#top8List").toggle(v866);
        $("#killFeed").toggle(v867);
        if (localStorage.getItem("top8") === "true" || localStorage.getItem("top8") === "false") {
          vO8.top8 = v866;
          localStorage.setItem("top8", v866);
        }
        if (localStorage.getItem("killFeed") === "true" || localStorage.getItem("killFeed") === "false") {
          vO8.killFeed = v867;
          localStorage.setItem("killFeed", v867);
        }
        $("#toggleTop8").on("change", function () {
          vO8.top8 = this.checked;
          $("#top8List").toggle(this.checked);
          localStorage.setItem("top8", vO8.top8);
        });
        $("#toggleKillFeed").on("change", function () {
          vO8.killFeed = this.checked;
          $("#killFeed").toggle(this.checked);
          localStorage.setItem("killFeed", vO8.killFeed);
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
          vO9.teamCode = $(this).val();
          localStorage.setItem("teamCode", vO9.teamCode);
          console.log("Team Code updated:", vO9.teamCode);
        });
        let v868 = localStorage.getItem("teamCode");
        if (v868) {
          vO9.teamCode = v868;
          $("#teamCodeInput").val(v868);
        }
        v134 = 0;
        v125 = 10;
        var v$19 = $("#arkaplan");
        var v$20 = $("#zwtop");
        var v869 = localStorage.getItem("zw-background");
        if (v869) {
          var vParseInt2 = parseInt(v869);
          v$19.val(vParseInt2);
          v134 = vParseInt2;
        }
        const v870 = localStorage.getItem("zw-toplist");
        if (v870) {
          const vParseInt3 = parseInt(v870);
          v125 = vParseInt3;
        }
        let v871 = vO4.isNumberValid(vO8.idReplaceSkin);
        if (v871) {
          $("#inputReplaceSkin").val(vO8.idReplaceSkin);
        } else {
          let v872 = $("#inputReplaceSkin").val();
          v871 = vO4.isNumberValid(v872);
          vO8.idReplaceSkin = v871 ? v872 : 35;
        }
        v$20.val(v125);
        v$19.change(function (p791) {
          var vF58 = f58(v134 = this.value);
          if (vF58) {
            anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(vF58));
          }
          localStorage.setItem("zw-background", this.value.toString());
        });
        v$20.change(function (p792) {
          v125 = this.value;
          localStorage.setItem("zw-toplist", this.value.toString());
        });
        $("#idkopyala").click(function () {
          navigator.clipboard.writeText(zw_userId);
        });
        vF969.prototype.a = function () {
          vF969.parent.prototype.a.call(this);
          if (!vF969.Ek) {
            vF969.Ek = true;
            var vF8812 = f88();
            vF8812.u.Pi(function () {
              if (vF8812.u.P()) {
                v$18.html(vF8812.u.zi());
              } else {
                v$18.html("0");
              }
            });
          }
        };
        vF969.Fk = $("#coins-view");
        vF969.Gk = $("#leaders-view");
        vF969.Hk = $("#profile-view");
        vF969.Ik = $("#settings-view");
        vF969.Jk = $("#login-view");
        vF969.Kk = $("#skins-view");
        vF969.Lk = $("#store-view");
        vF969.zwset = $("#wormtr-settings-view");
        vF969.Mk = $("#wear-view");
        vF969.Nk = $("#withdraw-consent-view");
        vF969.Ok = $("#delete-account-view");
        vF969.Pk = $("#please-wait-view");
        vF969.prototype.ii = function () {
          vF50.fk.stop();
          vF50.fk.fadeOut(200);
          vF50.gk.stop();
          vF50.gk.fadeOut(200);
          vF50.hk.stop();
          vF50.hk.fadeOut(200);
          vF50.ik.stop();
          vF50.ik.fadeIn(200);
          vF50.jk.stop();
          vF50.jk.fadeOut(200);
          vF50.kk.stop();
          vF50.kk.fadeOut(200);
          vF50.nk.stop();
          vF50.nk.fadeIn(200);
          vF50.ok.stop();
          vF50.ok.fadeIn(200);
          v$16.html(this.ad);
          v$17.toggle(this.Dk);
          this.Qk();
          this.Rk();
        };
        vF969.prototype.Rk = function () {};
        vF969.prototype.Sk = function () {
          vF52.Pk.stop();
          vF52.Pk.fadeIn(300);
        };
        vF969.prototype.Qk = function () {
          vF52.Pk.stop();
          vF52.Pk.fadeOut(300);
        };
        return vF969;
      }();
      v968 = $("#store-buy-coins_125000");
      v969 = $("#store-buy-coins_50000");
      v970 = $("#store-buy-coins_16000");
      v971 = $("#store-buy-coins_7000");
      v972 = $("#store-buy-coins_3250");
      v973 = $("#store-buy-coins_1250");
      v974 = f96(vF52, function () {
        vF52.call(this, f91("index.game.popup.menu.coins.tab"), false);
        var vF8813 = f88();
        var vThis18 = this;
        v968.click(function () {
          vF8813.r.Cd();
          vThis18.Tk("coins_125000");
        });
        v969.click(function () {
          vF8813.r.Cd();
          vThis18.Tk("coins_50000");
        });
        v970.click(function () {
          vF8813.r.Cd();
          vThis18.Tk("coins_16000");
        });
        v971.click(function () {
          vF8813.r.Cd();
          vThis18.Tk("coins_7000");
        });
        v972.click(function () {
          vF8813.r.Cd();
          vThis18.Tk("coins_3250");
        });
        v973.click(function () {
          vF8813.r.Cd();
          vThis18.Tk("coins_1250");
        });
      });
      v974.prototype.a = function () {
        v974.parent.prototype.a.call(this);
      };
      v974.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeIn(200);
        vF52.Gk.stop();
        vF52.Gk.fadeOut(50);
        vF52.Hk.stop();
        vF52.Hk.fadeOut(50);
        vF52.Jk.stop();
        vF52.Jk.fadeOut(50);
        vF52.Ik.stop();
        vF52.Ik.fadeOut(50);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeOut(50);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeOut(50);
        vF52.Ok.stop();
        vF52.Ok.fadeOut(50);
      };
      v974.prototype.ji = function () {
        f88().r.Dd();
      };
      v974.prototype.Tk = function (p793) {};
      var v_0x636b85 = v974;
      v963 = $("#highscore-table");
      v964 = $("#leaders-button-level");
      v965 = $("#leaders-button-highscore");
      v966 = $("#leaders-button-kills");
      v967 = f96(vF52, function () {
        vF52.call(this, f91("index.game.popup.menu.leaders.tab"), true);
        var vF8814 = f88();
        var vThis19 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v964,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v965,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v966,
            Yk: "byKillsAndHeadShots"
          }
        };
        v964.click(function () {
          vF8814.r.Cd();
          vThis19._k(vThis19.Vk.Wk);
        });
        v965.click(function () {
          vF8814.r.Cd();
          vThis19._k(vThis19.Vk.Zk);
        });
        v966.click(function () {
          vF8814.r.Cd();
          vThis19._k(vThis19.Vk.$k);
        });
      });
      v967.prototype.a = function () {
        v967.parent.prototype.a.call(this);
      };
      v967.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeOut(50);
        vF52.Gk.stop();
        vF52.Gk.fadeIn(200);
        vF52.Hk.stop();
        vF52.Hk.fadeOut(50);
        vF52.Jk.stop();
        vF52.Jk.fadeOut(50);
        vF52.Ik.stop();
        vF52.Ik.fadeOut(50);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeOut(50);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeOut(50);
        vF52.Ok.stop();
        vF52.Ok.fadeOut(50);
      };
      v967.prototype.ji = function () {
        f88().r.Dd();
        var vThis20 = this;
        this.Sk();
        $.get(vAtob + "/pub/leaders", function (p794) {
          vThis20.Uk = p794;
          vThis20._k(vThis20.al ?? vThis20.Vk.Wk);
          vThis20.Qk();
        }).done(function () {
          vThis20.Qk();
        });
      };
      v967.prototype._k = function (p795) {
        this.al = p795;
        for (var v873 in this.Vk) {
          if (this.Vk.hasOwnProperty(v873)) {
            this.Vk[v873].Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v874 = this.Uk[this.al.Yk], vLS3 = "", vLN0110 = 0; vLN0110 < v874.length; vLN0110++) {
          var v875 = v874[vLN0110];
          vLS3 += "<div class=\"table-row\"><span>" + (vLN0110 + 1) + "</span><span><img src=\"" + v875.avatarUrl + "\"/></span><span>" + v875.username + "</span><span>" + v875.level + "</span><span>" + v875.highScore + "</span><span>" + v875.headShots + " / " + v875.kills + "</span></div>";
        }
        v963.empty();
        v963.append(vLS3);
      };
      var v_0xf48613 = v967;
      v960 = $("#popup-login-gg");
      v961 = $("#popup-login-fb");
      v962 = f96(vF52, function () {
        vF52.call(this, f91("index.game.popup.menu.login.tab"), false);
        var vF8815 = f88();
        var vThis21 = this;
        v960.click(function () {
          vF8815.r.Cd();
          vThis21.Sk();
          vF8815.u.Qi(function () {
            vThis21.Qk();
          });
          setTimeout(function () {
            vThis21.Qk();
          }, 10000);
          vF8815.u.Zi();
        });
        v961.click(function () {
          vF8815.r.Cd();
          vThis21.Sk();
          vF8815.u.Qi(function () {
            vThis21.Qk();
          });
          setTimeout(function () {
            vThis21.Qk();
          }, 10000);
          vF8815.u.Vi();
        });
      });
      v962.prototype.a = function () {
        v962.parent.prototype.a.call(this);
      };
      v962.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeOut(50);
        vF52.Gk.stop();
        vF52.Gk.fadeOut(50);
        vF52.Hk.stop();
        vF52.Hk.fadeOut(50);
        vF52.Jk.stop();
        vF52.Jk.fadeIn(200);
        vF52.Ik.stop();
        vF52.Ik.fadeOut(50);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeOut(50);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeOut(50);
        vF52.Ok.stop();
        vF52.Ok.fadeOut(50);
      };
      v962.prototype.ji = function () {
        f88().r.Dd();
      };
      var v_0xa28ceb = v962;
      v947 = $("#profile-avatar");
      v948 = $("#profile-username");
      v949 = $("#profile-experience-bar");
      v950 = $("#profile-experience-val");
      v951 = $("#profile-level");
      v952 = $("#profile-stat-highScore");
      v953 = $("#profile-stat-bestSurvivalTime");
      v954 = $("#profile-stat-kills");
      v955 = $("#profile-stat-headshots");
      v956 = $("#profile-stat-gamesPlayed");
      v957 = $("#profile-stat-totalTimeSpent");
      v958 = $("#profile-stat-registrationDate");
      v959 = f96(vF52, function () {
        vF52.call(this, f91("index.game.popup.menu.profile.tab"), true);
      });
      v959.prototype.a = function () {
        v959.parent.prototype.a.call(this);
      };
      v959.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeOut(50);
        vF52.Gk.stop();
        vF52.Gk.fadeOut(50);
        vF52.Hk.stop();
        vF52.Hk.fadeIn(200);
        vF52.Jk.stop();
        vF52.Jk.fadeOut(50);
        vF52.Ik.stop();
        vF52.Ik.fadeOut(50);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeOut(50);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeOut(50);
        vF52.Ok.stop();
        vF52.Ok.fadeOut(50);
      };
      v959.prototype.ji = function () {
        var vF8816 = f88();
        vF8816.r.Dd();
        var v876 = vF8816.u.Oi();
        var v877 = moment([v876.year, v876.month - 1, v876.day]).format("LL");
        v948.html(vF8816.u.wi());
        v947.attr("src", vF8816.u.xi());
        v949.width(vF8816.u.Bi() * 100 / vF8816.u.Ci() + "%");
        v950.html(vF8816.u.Bi() + " / " + vF8816.u.Ci());
        v951.html(vF8816.u.Ai());
        v952.html(vF8816.u.Ii());
        v953.html(f93(vF8816.u.Ji()));
        v954.html(vF8816.u.Ki());
        v955.html(vF8816.u.Li());
        v956.html(vF8816.u.Mi());
        v957.html(f93(vF8816.u.Ni()));
        v958.html(v877);
      };
      var v_0x1d3509 = v959;
      v938 = $("#settings-music-enabled-switch");
      v939 = $("#settings-sfx-enabled-switch");
      v940 = $("#settings-show-names-switch");
      v941 = $("#popup-logout");
      v942 = $("#popup-logout-container");
      v943 = $("#popup-delete-account");
      v944 = $("#popup-delete-account-container");
      v945 = $("#popup-withdraw-consent");
      v946 = f96(vF52, function () {
        vF52.call(this, f91("index.game.popup.menu.settings.tab"), false);
        var vThis22 = this;
        var vF8817 = f88();
        v938.click(function () {
          var v878 = !!v938.prop("checked");
          f90(vF21.Me, v878, 30);
          vF8817.r.td(v878);
          vF8817.r.Cd();
        });
        v939.click(function () {
          var v879 = !!v939.prop("checked");
          f90(vF21.Ne, v879, 30);
          vF8817.r.rd(v879);
          vF8817.r.Cd();
        });
        v940.click(function () {
          vF8817.r.Cd();
        });
        v941.click(function () {
          vF8817.r.Cd();
          vThis22.Sk();
          setTimeout(function () {
            vThis22.Qk();
          }, 2000);
          vF8817.u.Wi();
        });
        v943.click(function () {
          if (vF8817.u.P()) {
            vF8817.r.Cd();
            vF8817.s.I(vF8817.s.Vh);
          } else {
            vF8817.r.Hd();
          }
        });
        v945.click(function () {
          if (vF8817.Y()) {
            vF8817.r.Cd();
            vF8817.s.I(vF8817.s.Uh);
          } else {
            vF8817.r.Hd();
          }
        });
      });
      v946.prototype.a = function () {
        v946.parent.prototype.a.call(this);
        var vF8818 = f88();
        var vUndefined14 = undefined;
        vUndefined14 = f89(vF21.Me) !== "false";
        v938.prop("checked", vUndefined14);
        vF8818.r.td(vUndefined14);
        var vUndefined15 = undefined;
        vUndefined15 = f89(vF21.Ne) !== "false";
        v939.prop("checked", vUndefined15);
        vF8818.r.rd(vUndefined15);
        var vUndefined16 = undefined;
        vUndefined16 = f89(vF21.ya) !== "false";
        console.log("Load sPN: " + vUndefined16);
        v940.prop("checked", vUndefined16);
        vF8818.u.V(function () {
          v942.toggle(vF8818.u.P());
          v944.toggle(vF8818.u.P());
        });
      };
      v946.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeOut(50);
        vF52.Gk.stop();
        vF52.Gk.fadeOut(50);
        vF52.Hk.stop();
        vF52.Hk.fadeOut(50);
        vF52.Jk.stop();
        vF52.Jk.fadeOut(50);
        vF52.Ik.stop();
        vF52.Ik.fadeIn(200);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeOut(50);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeOut(50);
        vF52.Ok.stop();
        vF52.Ok.fadeOut(50);
      };
      v946.prototype.ji = function () {
        var vF8819 = f88();
        vF8819.r.Dd();
        if (vF8819.Y()) {
          v945.show();
        } else {
          v945.hide();
        }
      };
      v946.prototype.wa = function () {
        return v940.prop("checked");
      };
      var v_0x5b3fc2 = v946;
      var vF53 = function () {
        var v$21 = $("#store-view-canv");
        var v$22 = $("#skin-description-text");
        var v$23 = $("#skin-group-description-text");
        var v$24 = $("#store-locked-bar");
        var v$25 = $("#store-locked-bar-text");
        var v$26 = $("#store-buy-button");
        var v$27 = $("#store-item-price");
        var v$28 = $("#store-groups");
        var v$29 = $("#store-view-prev");
        var v$30 = $("#store-view-next");
        var vF9610 = f96(vF52, function () {
          vF52.call(this, f91("index.game.popup.menu.skins.tab"), true);
          var vThis23 = this;
          var vF8820 = f88();
          this.bl = null;
          this.cl = [];
          this.dl = {};
          this.el = new vF49(v$21);
          v$26.click(function () {
            vF8820.r.Cd();
            vThis23.fl();
          });
          v$29.click(function () {
            vF8820.r.Cd();
            vThis23.bl.gl();
          });
          v$30.click(function () {
            vF8820.r.Cd();
            vThis23.bl.hl();
          });
        });
        vF9610.prototype.a = function () {
          vF9610.parent.prototype.a.call(this);
          var vThis24 = this;
          var vF8821 = f88();
          vF8821.p.ca(function () {
            var v880 = vF8821.p.Ac();
            if (v880 != null) {
              vThis24.cl = [];
              for (var vLN0111 = 0; vLN0111 < v880.skinGroupArrayDict.length; vLN0111++) {
                vThis24.cl.push(new vF54(vThis24, v880.skinGroupArrayDict[vLN0111]));
              }
              vThis24.dl = {};
              for (var vLN0112 = 0; vLN0112 < v880.skinArrayDict.length; vLN0112++) {
                var v881 = v880.skinArrayDict[vLN0112];
                vThis24.dl[v881.id] = v881;
              }
            }
          });
          this.il(false);
          vF8821.t.xh(function () {
            vThis24.il(false);
          });
        };
        vF9610.prototype.Rk = function () {
          vF52.Fk.stop();
          vF52.Fk.fadeOut(50);
          vF52.Gk.stop();
          vF52.Gk.fadeOut(50);
          vF52.Hk.stop();
          vF52.Hk.fadeOut(50);
          vF52.Jk.stop();
          vF52.Jk.fadeOut(50);
          vF52.Ik.stop();
          vF52.Ik.fadeOut(50);
          vF52.Kk.stop();
          vF52.Kk.fadeIn(200);
          vF52.Lk.stop();
          vF52.Lk.fadeOut(50);
          vF52.Mk.stop();
          vF52.Mk.fadeOut(50);
          vF52.zwset.stop();
          vF52.zwset.fadeOut(50);
          vF52.Nk.stop();
          vF52.Nk.fadeOut(50);
          vF52.Ok.stop();
          vF52.Ok.fadeOut(50);
        };
        vF9610.prototype.ji = function () {
          f88().r.Dd();
          this.jl();
          this.el.Le(true);
        };
        vF9610.prototype.ei = function () {
          this.el.Le(false);
        };
        vF9610.prototype.Ra = function () {
          this.el.Ra();
        };
        vF9610.prototype.Pa = function (p796, p797) {
          this.el.Pa();
        };
        vF9610.prototype.jl = function () {
          var vThis25 = this;
          var vThis26 = this;
          var vF8822 = f88();
          v$28.empty();
          for (var vLN0113 = 0; vLN0113 < this.cl.length; vLN0113++) {
            (function (p798) {
              var v882 = vThis25.cl[p798];
              var v883 = document.createElement("li");
              v$28.append(v883);
              var v$31 = $(v883);
              v$31.html(v882.kl());
              v$31.click(function () {
                vF8822.r.Cd();
                vThis26.ll(v882);
              });
              v882.ml = v$31;
            })(vLN0113);
          }
          if (this.cl.length > 0) {
            var v884 = vF8822.t.ha(vF37.ia);
            for (vLN0113 = 0; vLN0113 < this.cl.length; vLN0113++) {
              var v885 = this.cl[vLN0113];
              for (var v886 = v885.nl.list, vLN0114 = 0; vLN0114 < v886.length; vLN0114++) {
                if (v886[vLN0114] == v884) {
                  v885.ol = vLN0114;
                  this.ll(v885);
                  return;
                }
              }
            }
            this.ll(this.cl[0]);
          }
        };
        vF9610.prototype.ll = function (p799) {
          if (this.bl != p799) {
            var vF8823 = f88();
            this.bl = p799;
            v$28.children().removeClass("pressed");
            if (this.bl.ml) {
              this.bl.ml.addClass("pressed");
            }
            v$23.html("");
            if (p799.nl != null) {
              var v887 = vF8823.p.Ac().textDict[p799.nl.description];
              if (v887 != null) {
                v$23.html(f94(f92(v887)));
              }
            }
            this.il(true);
          }
        };
        vF9610.prototype.pl = function () {
          if (this.bl == null) {
            return vF30.Yg();
          } else {
            return this.bl.ql();
          }
        };
        vF9610.prototype.fl = function () {
          var vThis27 = this;
          this.pl().ah(function (p800) {
            vThis27.rl(p800);
          });
        };
        vF9610.prototype.rl = function (p801) {
          var vThis28 = this;
          var vF8824 = f88();
          var v888 = this.dl[p801].price;
          if (!(vF8824.u.zi() < v888)) {
            this.Sk();
            var v889 = vF8824.t.ha(vF37.ia);
            var v890 = vF8824.t.ha(vF37.ja);
            var v891 = vF8824.t.ha(vF37.ka);
            var v892 = vF8824.t.ha(vF37.la);
            var v893 = vF8824.t.ha(vF37.ma);
            vF8824.u.Ui(p801, vF37.ia, function () {
              vF8824.t.Bh(v889, vF37.ia);
              vF8824.t.Bh(v890, vF37.ja);
              vF8824.t.Bh(v891, vF37.ka);
              vF8824.t.Bh(v892, vF37.la);
              vF8824.t.Bh(v893, vF37.ma);
              if (vF8824.u.Ch(p801, vF37.ia)) {
                vF8824.t.Bh(p801, vF37.ia);
              }
              vThis28.Qk();
            });
          }
        };
        vF9610.prototype.il = function (p802) {
          var vF8825 = f88();
          this.el.bk(vF8825.t.ha(vF37.ja), false, false);
          this.el.ck(vF8825.t.ha(vF37.ka), false, false);
          this.el.dk(vF8825.t.ha(vF37.la), false, false);
          this.el.ek(vF8825.t.ha(vF37.ma), false, false);
          var v894 = this.pl();
          if (v894._g()) {
            var v895 = v894.$g();
            var v896 = this.dl[v895];
            var v897 = false;
            if (vF8825.t.Ja(v895, vF37.ia)) {
              v$24.hide();
              v$26.hide();
            } else if (v896 == null || v896.nonbuyable == 1) {
              v897 = true;
              v$24.show();
              v$26.hide();
              v$25.text(f91("index.game.popup.menu.store.locked"));
              if (v896 != null && v896.nonbuyable && v896.nonbuyableCause != null) {
                var v898 = vF8825.p.Ac().textDict[v896.nonbuyableCause];
                if (v898 != null) {
                  v$25.text(f92(v898));
                }
              }
            } else {
              v$24.hide();
              v$26.show();
              v$27.html(v896.price);
            }
            v$22.html("ID: " + v895 + " TYPE: " + vF37.ia);
            if (v896 != null && v896.description != null) {
              var v899 = vF8825.p.Ac().textDict[v896.description];
              if (v899 != null) {
                v$22.html(f94(f92(v899)));
              }
            }
            this.el.ak(v895, true, v897);
            if (p802) {
              vF8825.t.Bh(v895, vF37.ia);
            }
          }
        };
        var vF54 = function () {
          function f162(p803, p804) {
            this.sl = p803;
            this.ol = 0;
            this.nl = p804;
          }
          f162.prototype.gl = function () {
            if (--this.ol < 0) {
              this.ol = this.nl.list.length - 1;
            }
            this.sl.il(true);
          };
          f162.prototype.hl = function () {
            if (++this.ol >= this.nl.list.length) {
              this.ol = 0;
            }
            this.sl.il(true);
          };
          f162.prototype.kl = function () {
            let vF92 = f92(this.nl.name);
            console.log(this.nl);
            if (this.nl.img) {
              vF92 = "<img src=\"" + this.nl.img + "\" height=\"43\" width=\"180\" />";
            }
            return vF92;
          };
          f162.prototype.ql = function () {
            if (this.ol >= this.nl.list.length) {
              return vF30.Yg();
            } else {
              return vF30.Zg(this.nl.list[this.ol]);
            }
          };
          return f162;
        }();
        return vF9610;
      }();
      v934 = $("#store-go-coins-button");
      v935 = $("#store-go-skins-button");
      v936 = $("#store-go-wear-button");
      v937 = f96(vF52, function () {
        vF52.call(this, f91("index.game.popup.menu.store.tab"), true);
        var vF8826 = f88();
        v934.click(function () {
          vF8826.r.Cd();
          vF8826.s.I(vF8826.s.Wh);
        });
        v935.click(function () {
          vF8826.r.Cd();
          vF8826.s.I(vF8826.s.$h);
        });
        v936.click(function () {
          vF8826.r.Cd();
          vF8826.s.I(vF8826.s.ai);
        });
      });
      v937.prototype.a = function () {
        v937.parent.prototype.a.call(this);
      };
      v937.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeOut(50);
        vF52.Gk.stop();
        vF52.Gk.fadeOut(50);
        vF52.Hk.stop();
        vF52.Hk.fadeOut(50);
        vF52.Jk.stop();
        vF52.Jk.fadeOut(50);
        vF52.Ik.stop();
        vF52.Ik.fadeOut(50);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeIn(200);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeOut(50);
        vF52.Ok.stop();
        vF52.Ok.fadeOut(50);
      };
      v937.prototype.ji = function () {
        f88().r.Dd();
      };
      var v_0x54c61d = v937;
      $("#settings-kufur-isim");
      v933 = f96(vF52, function () {
        vF52.call(this, "ZWORM SETTINGS", 0);
      });
      v933.prototype.a = function () {
        v933.parent.prototype.a.call(this);
      };
      v933.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeOut(50);
        vF52.Gk.stop();
        vF52.Gk.fadeOut(50);
        vF52.Hk.stop();
        vF52.Hk.fadeOut(50);
        vF52.Jk.stop();
        vF52.Jk.fadeOut(50);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeOut(50);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeOut(50);
        vF52.Ok.stop();
        vF52.Ok.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeIn(200);
      };
      v933.prototype.ji = function () {
        f88().r.Dd();
      };
      var v_0x5dfcad = v933;
      var vF55 = function () {
        var v$32 = $("#wear-view-canv");
        var v$33 = $("#wear-description-text");
        var v$34 = $("#wear-locked-bar");
        var v$35 = $("#wear-locked-bar-text");
        var v$36 = $("#wear-buy-button");
        var v$37 = $("#wear-item-price");
        var v$38 = $("#wear-eyes-button");
        var v$39 = $("#wear-mouths-button");
        var v$40 = $("#wear-glasses-button");
        var v$41 = $("#wear-hats-button");
        var v$42 = $("#wear-tint-chooser");
        var v$43 = $("#wear-view-prev");
        var v$44 = $("#wear-view-next");
        var vF9611 = f96(vF52, function () {
          var vThis29 = this;
          vF52.call(this, f91("index.game.popup.menu.wear.tab"), true);
          var vF8827 = f88();
          var vThis30 = this;
          this.tl = [];
          this.ja = new vF56(this, vF37.ja, v$38);
          this.ka = new vF56(this, vF37.ka, v$39);
          this.la = new vF56(this, vF37.la, v$40);
          this.ma = new vF56(this, vF37.ma, v$41);
          this.ul = null;
          this.vl = null;
          this.wl = null;
          this.xl = null;
          this.yl = null;
          this.zl = null;
          this.Al = new vF49(v$32);
          v$36.click(function () {
            vF8827.r.Cd();
            vThis30.Bl();
          });
          v$43.click(function () {
            vF8827.r.Cd();
            vThis30.ul.Cl();
          });
          v$44.click(function () {
            vF8827.r.Cd();
            vThis30.ul.Dl();
          });
          v$38.click(function () {
            vF8827.r.Cd();
            vThis30.El(vThis29.ja);
          });
          v$39.click(function () {
            vF8827.r.Cd();
            vThis30.El(vThis29.ka);
          });
          v$40.click(function () {
            vF8827.r.Cd();
            vThis30.El(vThis29.la);
          });
          v$41.click(function () {
            vF8827.r.Cd();
            vThis30.El(vThis29.ma);
          });
          this.tl.push(this.ja);
          this.tl.push(this.ka);
          this.tl.push(this.la);
          this.tl.push(this.ma);
        });
        vF9611.prototype.a = function () {
          vF9611.parent.prototype.a.call(this);
          var vF8828 = f88();
          var vThis31 = this;
          vF8828.p.ca(function () {
            var v900 = vF8828.p.Ac();
            if (v900 != null) {
              vThis31.vl = v900.eyesDict;
              vThis31.wl = v900.mouthDict;
              vThis31.xl = v900.glassesDict;
              vThis31.yl = v900.hatDict;
              vThis31.zl = v900.colorDict;
              vThis31.ja.Fl(v900.eyesVariantArray);
              vThis31.ja.Gl(vThis31.vl);
              vThis31.ka.Fl(v900.mouthVariantArray);
              vThis31.ka.Gl(vThis31.wl);
              vThis31.la.Fl(v900.glassesVariantArray);
              vThis31.la.Gl(vThis31.xl);
              vThis31.ma.Fl(v900.hatVariantArray);
              vThis31.ma.Gl(vThis31.yl);
            }
          });
          this.il(false);
          vF8828.t.xh(function () {
            vThis31.il(false);
          });
        };
        vF9611.prototype.Rk = function () {
          vF52.Fk.stop();
          vF52.Fk.fadeOut(50);
          vF52.Gk.stop();
          vF52.Gk.fadeOut(50);
          vF52.Hk.stop();
          vF52.Hk.fadeOut(50);
          vF52.Jk.stop();
          vF52.Jk.fadeOut(50);
          vF52.Ik.stop();
          vF52.Ik.fadeOut(50);
          vF52.Kk.stop();
          vF52.Kk.fadeOut(50);
          vF52.Lk.stop();
          vF52.Lk.fadeOut(50);
          vF52.Mk.stop();
          vF52.Mk.fadeIn(200);
          vF52.zwset.stop();
          vF52.zwset.fadeOut(50);
          vF52.Nk.stop();
          vF52.Nk.fadeOut(50);
          vF52.Ok.stop();
          vF52.Ok.fadeOut(50);
        };
        vF9611.prototype.ji = function () {
          f88().r.Dd();
          this.El(this.ul ?? this.ja);
          this.Al.Le(true);
        };
        vF9611.prototype.ei = function () {
          this.Al.Le(false);
        };
        vF9611.prototype.Ra = function () {
          this.Al.Ra();
        };
        vF9611.prototype.Pa = function (p805, p806) {
          this.Al.Pa();
        };
        vF9611.prototype.El = function (p807) {
          this.ul = p807;
          for (var vLN0115 = 0; vLN0115 < this.tl.length; vLN0115++) {
            this.tl[vLN0115].Xk.removeClass("pressed");
          }
          this.ul.Xk.addClass("pressed");
          this.ul.ii();
        };
        vF9611.prototype.Hl = function () {
          if (this.ul == null) {
            return vF30.Yg();
          } else {
            return vF30.Zg({
              Lb: this.ul.ql(),
              rc: this.ul.rc
            });
          }
        };
        vF9611.prototype.Bl = function () {
          var vThis32 = this;
          this.Hl().ah(function (p808) {
            vThis32.Ui(p808.Lb, p808.rc);
          });
        };
        vF9611.prototype.Ui = function (p809, p810) {
          var vThis33 = this;
          var vF8829 = f88();
          var vUndefined17 = undefined;
          switch (p810) {
            case vF37.ja:
              vUndefined17 = this.vl[p809].price;
              break;
            case vF37.ka:
              vUndefined17 = this.wl[p809].price;
              break;
            case vF37.la:
              vUndefined17 = this.xl[p809].price;
              break;
            case vF37.ma:
              vUndefined17 = this.yl[p809].price;
              break;
            default:
              return;
          }
          if (!(vF8829.u.zi() < vUndefined17)) {
            this.Sk();
            var v901 = vF8829.t.ha(vF37.ia);
            var v902 = vF8829.t.ha(vF37.ja);
            var v903 = vF8829.t.ha(vF37.ka);
            var v904 = vF8829.t.ha(vF37.la);
            var v905 = vF8829.t.ha(vF37.ma);
            vF8829.u.Ui(p809, p810, function () {
              vF8829.t.Bh(v901, vF37.ia);
              vF8829.t.Bh(v902, vF37.ja);
              vF8829.t.Bh(v903, vF37.ka);
              vF8829.t.Bh(v904, vF37.la);
              vF8829.t.Bh(v905, vF37.ma);
              if (vF8829.u.Ch(p809, p810)) {
                vF8829.t.Bh(p809, p810);
              }
              vThis33.Qk();
            });
          }
        };
        vF9611.prototype.Il = function (p811, p812) {
          switch (p812) {
            case vF37.ja:
              return this.vl[p811];
            case vF37.ka:
              return this.wl[p811];
            case vF37.la:
              return this.xl[p811];
            case vF37.ma:
              return this.yl[p811];
          }
          return null;
        };
        vF9611.prototype.il = function (p813) {
          var vF8830 = f88();
          this.Al.ak(vF8830.t.ha(vF37.ia), false, false);
          this.Al.bk(vF8830.t.ha(vF37.ja), false, false);
          this.Al.ck(vF8830.t.ha(vF37.ka), false, false);
          this.Al.dk(vF8830.t.ha(vF37.la), false, false);
          this.Al.ek(vF8830.t.ha(vF37.ma), false, false);
          var v906 = this.Hl();
          if (v906._g()) {
            var v907 = v906.$g();
            var v908 = this.Il(v907.Lb, v907.rc);
            var v909 = false;
            if (vF8830.t.Ja(v907.Lb, v907.rc)) {
              v$34.hide();
              v$36.hide();
            } else if (v908 == null || v908.nonbuyable == 1) {
              v909 = true;
              v$34.show();
              v$36.hide();
              v$35.text(f91("index.game.popup.menu.store.locked"));
              if (v908 != null && v908.nonbuyable && v908.nonbuyableCause != null) {
                var v910 = vF8830.p.Ac().textDict[v908.nonbuyableCause];
                if (v910 != null) {
                  v$35.text(f92(v910));
                }
              }
            } else {
              v$34.hide();
              v$36.show();
              v$37.html(v908.price);
            }
            v$33.html("ID: " + v907.Lb);
            if (v908 != null && v908.description != null) {
              var v911 = vF8830.p.Ac().textDict[v908.description];
              if (v911 != null) {
                v$33.html(f94(f92(v911)));
              }
            }
            switch (v907.rc) {
              case vF37.ja:
                this.Al.bk(v907.Lb, true, v909);
                break;
              case vF37.ka:
                this.Al.ck(v907.Lb, true, v909);
                break;
              case vF37.la:
                this.Al.dk(v907.Lb, true, v909);
                break;
              case vF37.ma:
                this.Al.ek(v907.Lb, true, v909);
            }
            if (p813) {
              vF8830.t.Bh(v907.Lb, v907.rc);
            }
          }
        };
        var vF56 = function () {
          function i(p814, p815, p816) {
            this.sl = p814;
            this.rc = p815;
            this.Xk = p816;
            this.Jl = {};
            this.Kl = [[]];
            this.Ll = -10;
            this.Ml = -10;
          }
          i.prototype.Fl = function (p817) {
            this.Kl = p817;
          };
          i.prototype.Gl = function (p818) {
            this.Jl = p818;
          };
          i.prototype.ii = function () {
            var v912 = f88().t.ha(this.rc);
            for (var vLN0116 = 0; vLN0116 < this.Kl.length; vLN0116++) {
              for (var vLN0117 = 0; vLN0117 < this.Kl[vLN0116].length; vLN0117++) {
                if (this.Kl[vLN0116][vLN0117] == v912) {
                  this.Nl(vLN0116);
                  this.Ol(vLN0117);
                  return;
                }
              }
            }
            this.Nl(0);
            this.Ol(0);
          };
          i.prototype.Cl = function () {
            var v913 = this.Ll - 1;
            if (v913 < 0) {
              v913 = this.Kl.length - 1;
            }
            this.Nl(v913);
            this.Ol(this.Ml % this.Kl[v913].length);
          };
          i.prototype.Dl = function () {
            var v914 = this.Ll + 1;
            if (v914 >= this.Kl.length) {
              v914 = 0;
            }
            this.Nl(v914);
            this.Ol(this.Ml % this.Kl[v914].length);
          };
          i.prototype.Nl = function (p819) {
            var vThis34 = this;
            if (!(p819 < 0) && !(p819 >= this.Kl.length)) {
              this.Ll = p819;
              v$42.empty();
              var v915 = this.Kl[this.Ll];
              if (v915.length > 1) {
                for (var vLN0118 = 0; vLN0118 < v915.length; vLN0118++) {
                  (function (p820) {
                    var v916 = v915[p820];
                    var v917 = vThis34.Jl[v916];
                    var v918 = "#" + vThis34.sl.zl[v917.prime];
                    var v$45 = $("<div style=\"border-color:" + v918 + "\"></div>");
                    v$45.click(function () {
                      f88().r.Cd();
                      vThis34.Ol(p820);
                    });
                    v$42.append(v$45);
                  })(vLN0118);
                }
              }
            }
          };
          i.prototype.Ol = function (p821) {
            if (!(p821 < 0) && !(p821 >= this.Kl[this.Ll].length)) {
              this.Ml = p821;
              v$42.children().css("background-color", "transparent");
              var v919 = v$42.children(":nth-child(" + (1 + p821) + ")");
              v919.css("background-color", v919.css("border-color"));
              this.sl.il(true);
            }
          };
          i.prototype.ql = function () {
            return this.Kl[this.Ll][this.Ml];
          };
          return i;
        }();
        return vF9611;
      }();
      v930 = $("#withdraw-consent-yes");
      v931 = $("#withdraw-consent-no");
      v932 = f96(vF52, function () {
        vF52.call(this, f91("index.game.popup.menu.consent.tab"), false);
        var vF8831 = f88();
        v930.click(function () {
          vF8831.r.Cd();
          if (vF8831.Y()) {
            vF8831.s.I(vF8831.s.F);
            vF8831.$(false, true);
            vF8831.s.aa._(new v_0x170c74());
          } else {
            vF8831.s.gi();
          }
        });
        v931.click(function () {
          vF8831.r.Cd();
          vF8831.s.gi();
        });
      });
      v932.prototype.a = function () {
        v932.parent.prototype.a.call(this);
      };
      v932.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeOut(50);
        vF52.Gk.stop();
        vF52.Gk.fadeOut(50);
        vF52.Hk.stop();
        vF52.Hk.fadeOut(50);
        vF52.Jk.stop();
        vF52.Jk.fadeOut(50);
        vF52.Ik.stop();
        vF52.Ik.fadeOut(50);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeOut(50);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeIn(200);
        vF52.Ok.stop();
        vF52.Ok.fadeOut(50);
      };
      v932.prototype.ji = function () {
        f88().r.Dd();
      };
      var v_0x189a0c = v932;
      v926 = $("#delete-account-timer");
      v927 = $("#delete-account-yes");
      v928 = $("#delete-account-no");
      v929 = f96(vF52, function () {
        vF52.call(this, f91("index.game.popup.menu.delete.tab"), false);
        var vF8832 = f88();
        v927.click(function () {
          vF8832.r.Cd();
          if (vF8832.u.P()) {
            vF8832.u.bj();
            vF8832.u.Wi();
          } else {
            vF8832.s.gi();
          }
        });
        v928.click(function () {
          vF8832.r.Cd();
          vF8832.s.gi();
        });
        this.Pl = [];
      });
      v929.prototype.a = function () {
        v929.parent.prototype.a.call(this);
      };
      v929.prototype.Rk = function () {
        vF52.Fk.stop();
        vF52.Fk.fadeOut(50);
        vF52.Gk.stop();
        vF52.Gk.fadeOut(50);
        vF52.Hk.stop();
        vF52.Hk.fadeOut(50);
        vF52.Jk.stop();
        vF52.Jk.fadeOut(50);
        vF52.Ik.stop();
        vF52.Ik.fadeOut(50);
        vF52.Kk.stop();
        vF52.Kk.fadeOut(50);
        vF52.Lk.stop();
        vF52.Lk.fadeOut(50);
        vF52.Mk.stop();
        vF52.Mk.fadeOut(50);
        vF52.zwset.stop();
        vF52.zwset.fadeOut(50);
        vF52.Nk.stop();
        vF52.Nk.fadeOut(50);
        vF52.Ok.stop();
        vF52.Ok.fadeIn(200);
      };
      v929.prototype.ji = function () {
        f88().r.Hd();
        v927.stop();
        v927.hide();
        v926.stop();
        v926.show();
        v926.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v926.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v926.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v926.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v926.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v926.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v926.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v926.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v926.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v926.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v926.hide();
          v927.fadeIn(300);
        }, 10000);
      };
      v929.prototype.Rl = function (p822, p823) {
        var vSetTimeout2 = setTimeout(p822, p823);
        this.Pl.push(vSetTimeout2);
      };
      v929.prototype.Ql = function () {
        for (var vLN0119 = 0; vLN0119 < this.Pl.length; vLN0119++) {
          clearTimeout(this.Pl[vLN0119]);
        }
        this.Pl = [];
      };
      var v_0x1b9e86 = v929;
      var vF57 = function () {
        function f164() {
          this.Ck = function () {};
        }
        f164.prototype.Bk = function () {};
        f164.prototype.ji = function () {};
        return f164;
      }();
      v925 = f96(vF57, function (p824) {
        vF57.call(this);
        var v920 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v920 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p824 + "</div>    <div class=\"toaster-coins-close\">" + f91("index.game.toaster.continue") + "</div></div>");
        var vThis35 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f88().r.Cd();
          vThis35.Ck();
        });
      });
      v925.prototype.Bk = function () {
        return this.Sl;
      };
      v925.prototype.ji = function () {
        f88().r.Fd();
      };
      var v_0x436162 = v925;
      v924 = f96(vF57, function (p825) {
        vF57.call(this);
        var v921 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v921 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p825 + "</div>    <div class=\"toaster-levelup-text\">" + f91("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f91("index.game.toaster.continue") + "</div></div>");
        var vThis36 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f88().r.Cd();
          vThis36.Ck();
        });
      });
      v924.prototype.Bk = function () {
        return this.Sl;
      };
      v924.prototype.ji = function () {
        f88().r.Ed();
      };
      var v_0x20b128 = v924;
      v923 = f96(vF57, function () {
        vF57.call(this);
        var vThis37 = this;
        var vF8833 = f88();
        var v922 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v922 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas20 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f91("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f91("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f91("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF8833.r.Cd();
          if (vF8833.Y()) {
            vF8833.$(true, true);
          }
          vThis37.Ck();
        });
      });
      v923.prototype.Bk = function () {
        return this.Sl;
      };
      v923.prototype.ji = function () {
        var vThis38 = this;
        var vF8834 = f88();
        if (vF8834.Y() && !vF8834.Z()) {
          vF8834.r.Hd();
          setTimeout(function () {
            vThis38.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis38.Ck();
          }, 0);
        }
      };
      var v_0x170c74 = v923;
      var vO36 = {};
      var v923;
      var v924;
      var v925;
      var v926;
      var v927;
      var v928;
      var v929;
      var v930;
      var v931;
      var v932;
      var v933;
      var v934;
      var v935;
      var v936;
      var v937;
      var v938;
      var v939;
      var v940;
      var v941;
      var v942;
      var v943;
      var v944;
      var v945;
      var v946;
      var v947;
      var v948;
      var v949;
      var v950;
      var v951;
      var v952;
      var v953;
      var v954;
      var v955;
      var v956;
      var v957;
      var v958;
      var v959;
      var v960;
      var v961;
      var v962;
      var v963;
      var v964;
      var v965;
      var v966;
      var v967;
      var v968;
      var v969;
      var v970;
      var v971;
      var v972;
      var v973;
      var v974;
      var v975;
      var v976;
      var v977;
      var v978;
      var v979;
      var v980;
      var v981;
      var v982;
      var v983;
      var v984;
      var v985;
      var v986;
      var v987;
      var v988;
      var v989;
      var v990;
      var v991;
      var v992;
      var v993;
      var v994;
      var v995;
      var v996;
      var v997;
      var v998;
      var v999;
      var v1000;
      var v1001;
      var v1002;
      var v1003;
      var v1004;
      var v1005;
      var v1006;
      vO36.main = {
        Ma: f112("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        K: f112("ltmolilci1iurq1i", "wormate-io_970x250"),
        ra: f109(),
        e: 4,
        oa: false,
        qk: true
      };
      vO36.miniclip = {
        Ma: f112("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        K: f112("ltmolilci1iurq1i", "wormate-io_970x250"),
        ra: f109(),
        e: 4,
        oa: false,
        qk: false
      };
      var v1007 = vO36[window.ENV];
      v1007 ||= vO36.main;
      $(function () {
        FastClick.attach(document.body);
      });
      addEventListener("contextmenu", function (p826) {
        p826.preventDefault();
        p826.stopPropagation();
        return false;
      });
      f95("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
        FB.init({
          appId: "861926850619051",
          cookie: true,
          xfbml: true,
          status: true,
          version: "v8.0"
        });
      });
      f95("//apis.google.com/js/api:client.js", null, function () {
        gapi.load("auth2", function () {
          v336 = gapi.auth2.init({
            client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
          });
        });
      });
      vUndefined2 = f113();
      vUndefined2.v();
      $("#mm-menu-cont").css("display", "block");
      vO8.loading = true;
      var vF582 = f58(localStorage.getItem("zw-background"));
      if (vF582) {
        anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(vF582));
        console.log("Fondo cargado desde almacenamiento:", vF582);
      }
      function f165(p827) {
        if (vO8.PropertyManager) {
          p827.skinId = vO8.PropertyManager.rh;
          p827.eyesId = vO8.PropertyManager.sh;
          p827.mouthId = vO8.PropertyManager.th;
          p827.glassesId = vO8.PropertyManager.uh;
          p827.hatId = vO8.PropertyManager.vh;
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
            return (this / 1000000).toFixed(1) + "M🧁";
          } else if (this >= 100000) {
            return (this / 1000).toFixed(0) + "k🍬";
          } else {
            return this.dotFormat();
          }
        };
      }
      (() => {
        const vF8835 = f88();
        let v1008 = performance.now();
        let v1009 = true;
        document.addEventListener("visibilitychange", () => {
          v1009 = !document.hidden;
          if (v1009) {
            v1008 = performance.now();
          }
        });
        requestAnimationFrame(function f166(p828) {
          requestAnimationFrame(f166);
          if (!v1009) {
            return;
          }
          let v1010 = p828 - v1008;
          if (v1010 > 100) {
            v1010 = 100;
          }
          v1008 = p828;
          vF8835.Pa(v1010);
          if (typeof vF8835.draw === "function") {
            vF8835.draw();
          }
        });
      })();
      function f167() {
        var v1011 = v$46.width();
        var v1012 = v$46.height();
        var v1013 = v$47.outerWidth();
        var v1014 = v$47.outerHeight();
        var v1015 = v$48.outerHeight();
        var v1016 = v$49.outerHeight();
        var v1017 = Math.min(1, Math.min((v1012 - v1016 - v1015) / v1014, v1011 / v1013));
        var v1018 = "translate(-50%, -50%) scale(" + v1017 + ")";
        v$47.css({
          "-webkit-transform": v1018,
          "-moz-transform": v1018,
          "-ms-transform": v1018,
          "-o-transform": v1018,
          transform: v1018
        });
        f88().Ra();
        window.scrollTo(0, 1);
      }
      var v$46 = $("body");
      var v$47 = $("#stretch-box");
      var v$48 = $("#markup-header");
      var v$49 = $("#markup-footer");
      f167();
      $(window).resize(f167);
    })();
  } else {
    document.getElementById("error-view").style.display = "block";
  }
});
const vA27 = ["sao-a.wormate.io", "mum-a.wormate.io", "dxb-a.wormate.io", "fra-e.wormate.io", "fra-d.wormate.io", "fra-c.wormate.io", "fra-b.wormate.io", "waw-a.wormate.io", "dal-b.wormate.io", "vin-a.wormate.io", "dal-a.wormate.io", "sao-c.wormate.io", "bhs-a.wormate.io", "sao-b.wormate.io", "hil-a.wormate.io", "syd-a.wormate.io", "sin-g.wormate.io", "gra-a.wormate.io", "sin-i.wormate.io", "sin-h.wormate.io", "sin-f.wormate.io", "sin-c.wormate.io", "sin-b.wormate.io", "sin-a.wormate.io", "tok-b.wormate.io", "sin-d.wormate.io", "sin-e.wormate.io"];
async function f168(p829) {
  console.log("\n🔍 Probando servidores Wormate.io (puerto " + p829 + ")...\n");
  const vA28 = [];
  const v$50 = $("<ul></ul>");
  $("#resultadoPuertas").html("");
  $("#resultadoPuertas").append(v$50);
  for (const v1019 of vA27) {
    const v1020 = "wss://" + v1019 + ":" + p829 + "/wormy";
    const v1021 = performance.now();
    let v1022 = false;
    const v1023 = await new Promise(p830 => {
      const v1024 = new WebSocket(v1020);
      const vF59 = (p831, p832 = null) => {
        if (!v1022) {
          v1022 = true;
          v1024.close();
          p830({
            host: v1019,
            status: p831,
            latency: p832
          });
        }
      };
      v1024.onerror = () => vF59("❌ Cerrado");
      v1024.onclose = () => vF59("❌ Cerrado");
      v1024.onopen = () => {
        const v1025 = Math.round(performance.now() - v1021);
        vF59("✅ ", v1025);
      };
      setTimeout(() => vF59("⏱️ Timeout"), 10000);
    });
    if (v1023.status === "✅ ") {
      vA28.push(v1023);
      const v1026 = v1023.latency !== null ? " - Ping: " + v1023.latency + " ms" : "";
      const v1027 = "wss://" + v1023.host + ":" + p829 + "/wormy";
      const v$51 = $("\n                <li>\n                    " + v1023.status + v1026 + "\n                    <button class=\"connect-button\" data-server=\"" + v1027 + "\" style=\"margin-left: 10px;\">Connect</button>\n                </li>\n            ");
      v$50.append(v$51);
    }
    await new Promise(p833 => setTimeout(p833, 200));
  }
  if (vA28.length > 0) {
    vA28.sort((p834, p835) => p834.latency - p835.latency);
    const v1028 = vA28[0];
    const v1029 = "<strong>🏆 Best server: " + v1028.host + " - Ping: " + v1028.latency + " ms</strong>";
    v$50.append("<li style=\"margin-top:10px;\">" + v1029 + "</li>");
  } else {
    v$50.append("<li><strong>❌ No se encontraron puertas abiertas.</strong></li>");
  }
  $(document).off("click", ".connect-button").on("click", ".connect-button", function () {
    const v1030 = $(this).data("server");
    anApp.sa(v1030);
    console.log("Conectando a:", v1030);
  });
}
console.log("GAME JS 2023 BY SWYKZ");
const vLSAHR0cHM6Ly96d29ybWV4 = "aHR0cHM6Ly96d29ybWV4dGVuc3Rpb24uY29tL3dvcm1FeHRlbnNpb24vZ2FtZS5qcw==";
const vAtob5 = atob(vLSAHR0cHM6Ly96d29ybWV4);
console.log("URL decodificada:", vAtob5);
const v1031 = new URL(vAtob5).origin;
const v1032 = document.querySelectorAll("script");
let v1033 = false;
v1032.forEach((p836, p837) => {
  if (p836.src) {
    try {
      const v1034 = new URL(p836.src).origin;
      console.log("Revisando script " + (p837 + 1) + ":", p836.src, "Origin:", v1034);
      if (v1034 === v1031) {
        console.log("�Coincidencia encontrada! El script proviene de la fuente correcta.");
        console.log("El script " + (p837 + 1) + " proviene de tu p�gina: " + p836.src);
        v1033 = true;
      }
    } catch (e43) {
      console.error("Error al construir la URL del script " + (p837 + 1) + ":", e43);
    }
  }
});
let vA29 = [];
let v1035 = Date.now();
function f169(p838) {
  function f170(p839) {
    if (typeof p839 == "string") {
      return function (p840) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + p839 / p839).length !== 1 || p839 % 20 == 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    f170(++p839);
  }
  try {
    if (p838) {
      return f170;
    }
    f170(0);
  } catch (e44) {}
}