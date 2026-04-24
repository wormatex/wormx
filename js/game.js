function f2(p2, p3, p4) {
  if (document.getElementById(p3)) {
    p4();
  } else {
    var v2 = document.createElement("script");
    v2.type = "text/javascript";
    v2.src = p2;
    v2.id = p3;
    v2.onload = p4;
    document.head.appendChild(v2);
  }
}
document.documentElement.insertAdjacentHTML("afterbegin", "\n    <style>\n        /* Preloader en pantalla completa */\n        .fixed-background {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: black;\n            display: flex;\n            flex-direction: column; /* Asegura que los elementos estén en columna */\n            justify-content: center;\n            align-items: center;\n            z-index: 99999;\n            transition: opacity 0.5s ease-out;\n        }\n\n        /* Imagen de fondo */\n        .background-image {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background: url('https://i.imgur.com/Np9eZas.jpeg') no-repeat center center/cover;\n            background-size: cover;\n            background-position: center;\n            opacity: 0.3;\n            filter: blur(5px) opacity(1.5);\n        }\n\n        /* Estilos del logo */\n        .logo {\n            width: 200px;\n            animation: pulse 4s infinite;\n            margin-bottom: 70px; /* Espacio entre el logo y la barra */\n        }\n\n        /* Animación de pulso */\n        @keyframes pulse {\n            0% { transform: scale(2); opacity: 1; }\n            50% { transform: scale(2.1); opacity: 0.8; }\n            100% { transform: scale(2); opacity: 1; }\n        }\n            /* Barra de carga */\n        .progress-bar-container {\n            width: 50%;\n            height: 10px;\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 5px;\n            overflow: hidden;\n            position: relative;\n        }\n\n        .progress-bar {\n            width: 0%;\n            height: 100%;\n            background: #eea297;\n            transition: width 10s linear; /* La animación durará 10 segundos */\n        }\n    </style>\n\n    <div class=\"fixed-background\" id=\"loading-screen\">\n        <div class=\"background-image\"></div>\n        <img src=\"https://i.imgur.com/edcIIV9.png\" alt=\"server logo\" class=\"logo\">\n        <div class=\"progress-bar-container\">\n            <div class=\"progress-bar\" id=\"progress-bar\"></div>\n        </div>\n    </div>\n");
window.onload = function () {
  document.getElementById("progress-bar").style.width = "100%";
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loading-screen").remove();
    }, 500);
  }, 10000);
};
let v3 = null;
let v4 = null;
let v5 = false;
var v6 = this && this.__extends || function () {
  function f3(p5, p6) {
    return (f3 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (p7, p8) {
      p7.__proto__ = p8;
    } || function (p9, p10) {
      for (var v7 in p10) {
        if (Object.prototype.hasOwnProperty.call(p10, v7)) {
          p9[v7] = p10[v7];
        }
      }
    })(p5, p6);
  }
  return function (p11, p12) {
    if (typeof p12 !== "function" && p12 !== null) {
      throw new TypeError("Class extends value " + String(p12) + " is not a constructor or null");
    }
    function f4() {
      this.constructor = p11;
    }
    f3(p11, p12);
    p11.prototype = p12 === null ? Object.create(p12) : (f4.prototype = p12.prototype, new f4());
  };
}();
var v8;
(function (p13) {
  p13.LEFT = "left";
  p13.TOP = "top";
  p13.BOTTOM = "bottom";
  p13.RIGHT = "right";
  p13.TOP_LEFT = "top_left";
  p13.TOP_RIGHT = "top_right";
  p13.BOTTOM_LEFT = "bottom_left";
  p13.BOTTOM_RIGHT = "bottom_right";
})(v8 = {});
var vF = function (p14) {
  function f5(p15) {
    var v9 = p14.call(this) || this;
    v9.outerRadius = 0;
    v9.innerRadius = 0;
    v9.innerAlphaStandby = 0.5;
    v9.settings = Object.assign({
      outerScale: {
        x: 1,
        y: 1
      },
      innerScale: {
        x: 1,
        y: 1
      }
    }, p15);
    if (!v9.settings.outer) {
      var v10 = new PIXI.Graphics();
      v10.beginFill(16711680);
      v10.drawCircle(0, 0, 60);
      v10.alpha = 0.5;
      v9.settings.outer = v10;
    }
    if (!v9.settings.inner) {
      var v11 = new PIXI.Graphics();
      v11.beginFill(16711680);
      v11.drawCircle(0, 0, 35);
      v11.alpha = v9.innerAlphaStandby;
      v9.settings.inner = v11;
    }
    v9.initialize();
    return v9;
  }
  v6(f5, p14);
  f5.prototype.initialize = function () {
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
  f5.prototype.bindEvents = function () {
    var vThis = this;
    this.interactive = true;
    var v12;
    var v13;
    var v14;
    var v15 = false;
    this.onDragStart = function (p16) {
      var v16;
      var v17;
      v12 = p16;
      v14 = this.toLocal(v12);
      v15 = true;
      vThis.inner.alpha = 1;
      if ((v17 = (v16 = vThis.settings).onStart) !== null && v17 !== undefined) {
        v17.call(v16);
      }
    };
    this.onDragEnd = function (p17) {
      var v18;
      var v19;
      if (v15 != 0) {
        vThis.inner.position.set(0, 0);
        v15 = false;
        vThis.inner.alpha = vThis.innerAlphaStandby;
        if ((v19 = (v18 = vThis.settings).onEnd) !== null && v19 !== undefined) {
          v19.call(v18);
        }
      }
    };
    this.onDragMove = function (p18) {
      var v20;
      var v21;
      var v22;
      var v23;
      var v24;
      var v25;
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 2;
      if (v15 != 0) {
        var v26 = this.toLocal(p18);
        var v27 = v26.x - v14.x;
        var v28 = v26.y - v14.y;
        var v29 = new PIXI.Point(0, 0);
        var vLN0 = 0;
        if (v27 != 0 || v28 != 0) {
          if (v27 * v27 + v28 * v28 >= vThis.outerRadius * vThis.outerRadius) {
            vThis.outerRadius;
          } else {
            vThis.outerRadius - vThis.innerRadius;
          }
          var v30 = v8.LEFT;
          if (v27 == 0) {
            if (v28 > 0) {
              v29.set(0, v28 > vThis.outerRadius ? vThis.outerRadius : v28);
              vLN0 = 270;
              v30 = v8.BOTTOM;
            } else {
              v29.set(0, -(Math.abs(v28) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v28)));
              vLN0 = 90;
              v30 = v8.TOP;
            }
            vThis.inner.position.set(v29.x, v29.y);
            v13 = vThis.getPower(v29);
            if ((v21 = (v20 = vThis.settings).onChange) !== null && v21 !== undefined) {
              v21.call(v20, {
                angle: vLN0,
                direction: v30,
                power: v13
              });
            }
            return;
          }
          if (v28 == 0) {
            if (v27 > 0) {
              v29.set(Math.abs(v27) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v27), 0);
              vLN0 = 0;
              v30 = v8.LEFT;
            } else {
              v29.set(-(Math.abs(v27) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v27)), 0);
              vLN0 = 180;
              v30 = v8.RIGHT;
            }
            vThis.inner.position.set(v29.x, v29.y);
            v13 = vThis.getPower(v29);
            if ((v23 = (v22 = vThis.settings).onChange) !== null && v23 !== undefined) {
              v23.call(v22, {
                angle: vLN0,
                direction: v30,
                power: v13
              });
            }
            return;
          }
          var v31 = Math.abs(v28 / v27);
          var v32 = Math.atan(v31);
          vLN0 = v32 * 180 / Math.PI;
          var vLN02 = 0;
          var vLN03 = 0;
          if (v27 * v27 + v28 * v28 >= vThis.outerRadius * vThis.outerRadius) {
            vLN02 = vThis.outerRadius * Math.cos(v32);
            vLN03 = vThis.outerRadius * Math.sin(v32);
          } else {
            vLN02 = Math.abs(v27) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v27);
            vLN03 = Math.abs(v28) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v28);
          }
          if (v28 < 0) {
            vLN03 = -Math.abs(vLN03);
          }
          if (v27 < 0) {
            vLN02 = -Math.abs(vLN02);
          }
          if (!(v27 > 0) || !(v28 < 0)) {
            if (v27 < 0 && v28 < 0) {
              vLN0 = 180 - vLN0;
            } else if (v27 < 0 && v28 > 0) {
              vLN0 += 180;
            } else if (v27 > 0 && v28 > 0) {
              vLN0 = 360 - vLN0;
            }
          }
          v29.set(vLN02, vLN03);
          v13 = vThis.getPower(v29);
          v30 = vThis.getDirection(v29);
          vThis.inner.position.set(v29.x, v29.y);
          if ((v25 = (v24 = vThis.settings).onChange) !== null && v25 !== undefined) {
            v25.call(v24, {
              angle: vLN0,
              direction: v30,
              power: v13
            });
          }
        }
      }
    };
  };
  f5.prototype.getPower = function (p19) {
    var v33 = p19.x - 0;
    var v34 = p19.y - 0;
    return Math.min(1, Math.sqrt(v33 * v33 + v34 * v34) / this.outerRadius);
  };
  f5.prototype.getDirection = function (p20) {
    var v35 = Math.atan2(p20.y, p20.x);
    if (v35 >= -Math.PI / 8 && v35 < 0 || v35 >= 0 && v35 < Math.PI / 8) {
      return v8.RIGHT;
    } else if (v35 >= Math.PI / 8 && v35 < Math.PI * 3 / 8) {
      return v8.BOTTOM_RIGHT;
    } else if (v35 >= Math.PI * 3 / 8 && v35 < Math.PI * 5 / 8) {
      return v8.BOTTOM;
    } else if (v35 >= Math.PI * 5 / 8 && v35 < Math.PI * 7 / 8) {
      return v8.BOTTOM_LEFT;
    } else if (v35 >= Math.PI * 7 / 8 && v35 < Math.PI || v35 >= -Math.PI && v35 < Math.PI * -7 / 8) {
      return v8.LEFT;
    } else if (v35 >= Math.PI * -7 / 8 && v35 < Math.PI * -5 / 8) {
      return v8.TOP_LEFT;
    } else if (v35 >= Math.PI * -5 / 8 && v35 < Math.PI * -3 / 8) {
      return v8.TOP;
    } else {
      return v8.TOP_RIGHT;
    }
  };
  return f5;
}(PIXI.Container);
function v174(p21) {
  return (v174 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p22) {
    return typeof p22;
  } : function (p23) {
    if (p23 && typeof Symbol == "function" && p23.constructor === Symbol && p23 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p23;
    }
  })(p21);
}
var vO = {
  id_user: "",
  nickname: "wormxt",
  teamCode: "",
  playerX: 0,
  playerY: 0,
  hs: 0,
  kill: 0,
  message: "",
  teamColor: "0xffffff",
  wssServer: ""
};
const v36 = new WebSocket("wss://zworm.xyz:9950");
const vO2 = {
  players: new Map()
};
function f7(p24) {
  if (p24.id_user === "gg_107164783301809303612" || p24.id_user === "gg_107696732696574095850" || p24.id_user === "gg_110413852592088957484") {
    f41("[WormXT OWNER]", p24.message);
    console.log("Servidor " + p24.id_user + " ha enviado un mensaje a todos los jugadores: " + p24.message);
  }
  if (p24.wssServer === vO.wssServer) {
    switch (p24.type) {
      case "initialState":
        f8(p24.players);
        break;
      case "playerUpdate":
        f10(p24);
        vF6();
        if (p24.teamCode !== "" && p24.teamCode === vO.teamCode) {
          f43(p24.teamCode, p24.teamColor);
          f42(p24.teamCode, p24.nickname, p24.message);
          console.log("Jugador " + p24.id_user + " tiene teamCode, se crea la ubicación del equipo");
        }
        break;
      case "hsKillUpdate":
        f11(p24);
        vF6();
        console.log("Actualización de HS/Kill recibida: Jugador " + p24.id_user + " - HS: " + p24.hskill.hs + ", Kills: " + p24.hskill.kill);
        break;
      case "playerDeath":
        f9(p24);
        break;
      case "playerDisconnect":
        f12(p24.id);
        console.log("Jugador " + p24.id + " se ha desconectado");
        break;
      default:
        console.log("Mensaje desconocido:", p24);
    }
  }
}
function f8(p25) {
  p25.forEach(p26 => {
    vO2.players.set(p26.id_user, p26);
  });
  console.log("Estado inicial recibido:", p25);
}
function f9(p27) {
  if (vO2.players.has(p27.id_user)) {
    vO2.players.delete(p27.id_user);
    console.log("Jugador " + p27.id_user + " eliminado del juego.");
    console.log("El jugador " + p27.nickname + " ha muerto.");
  }
  vF6();
  f44();
}
function f10(p28) {
  vO2.players.set(p28.id_user, {
    id: p28.id,
    id_user: p28.id_user,
    nickname: p28.nickname,
    position: p28.position,
    hskill: p28.hskill,
    message: p28.message,
    teamCode: p28.teamCode,
    teamColor: p28.teamColor,
    wssServer: p28.wssServer
  });
}
function f11(p29) {
  const v37 = vO2.players.get(p29.id_user);
  if (v37) {
    v37.hskill = p29.hskill;
  } else {
    vO2.players.set(p29.id_user, {
      id: p29.id,
      id_user: p29.id_user,
      nickname: p29.nickname,
      position: {
        x: 0,
        y: 0
      },
      hskill: p29.hskill,
      teamCode: p29.teamCode,
      teamColor: p29.teamColor,
      wssServer: p29.wssServer
    });
  }
}
function f12(p30) {
  vO2.players.delete(p30);
}
function f13() {
  console.log("Estado actual del juego:");
  vO2.players.forEach((p31, p32) => {
    console.log("Jugador " + p31.id_user + ":");
    console.log("  Name: " + p31.nickname);
    console.log("  teamColor: " + p31.teamColor);
    console.log("  Posición: (" + (p31.position?.x || 0) + ", " + (p31.position?.y || 0) + ")");
    console.log("  HS: " + (p31.hskill?.hs || 0) + ", Kills: " + (p31.hskill?.kill || 0));
  });
}
function f14(p33, p34) {
  const vO3 = {
    type: "playerUpdate",
    id_user: vO.id_user,
    nickname: vO.nickname,
    hskill: {
      hs: vO.hs,
      kill: vO.kill
    },
    position: {
      x: p33,
      y: p34
    },
    message: vO.message,
    teamCode: vO.teamCode,
    teamColor: vO.teamColor,
    wssServer: vO.wssServer
  };
  v36.send(JSON.stringify(vO3));
}
function f15(p35, p36) {
  const vO4 = {
    type: "playerDeath",
    id_user: vO.id_user,
    nickname: vO.nickname,
    hskill: {
      hs: p35,
      kill: p36
    },
    position: {
      x: 0,
      y: 0
    },
    message: "",
    teamCode: vO.teamCode,
    teamColor: vO.teamColor,
    wssServer: vO.wssServer
  };
  v36.send(JSON.stringify(vO4));
  console.log("Enviando actualización del: Jugador " + vO.id_user + " - murio");
}
function f16(p37, p38) {
  const vO5 = {
    type: "hsKillUpdate",
    id_user: vO.id_user,
    nickname: vO.nickname,
    hskill: {
      hs: p37,
      kill: p38
    },
    teamCode: vO.teamCode,
    teamColor: vO.teamColor,
    wssServer: vO.wssServer
  };
  v36.send(JSON.stringify(vO5));
  console.log("Enviando actualización de HS/Kill: Jugador " + vO.id_user + " - HS: " + p37 + ", Kills: " + p38);
}
v36.addEventListener("open", p39 => {
  console.log("Conectado al servidor WebSocket");
});
v36.addEventListener("message", async p40 => {
  if (p40.data instanceof Blob) {
    const v38 = await p40.data.text();
    try {
      f7(JSON.parse(v38));
    } catch (e2) {
      console.error("Error al parsear el mensaje:", e2);
    }
  } else {
    try {
      f7(JSON.parse(p40.data));
    } catch (e3) {
      console.error("Error al parsear el mensaje:", e3);
    }
  }
});
v36.addEventListener("close", p41 => {
  console.log("Desconectado del servidor WebSocket");
});
var vLSHttpsswykztheoxtcom = "https://swykz.theoxt.com";
const vO6 = {
  isSkinCustom: p42 => typeof p42 === "string" && /[a-zA-Z]/.test(p42),
  testSkinCustom: function (p43) {
    if (vO6.isSkinCustom(p43)) {
      return 34;
    } else {
      return p43;
    }
  },
  testSkinMod: function (p44) {
    return p44 >= 399 && p44 < 999;
  },
  testWear: function (p45) {
    return p45 >= 399 && p45 < 999;
  },
  isNumberValid: function (p46) {
    return p46 !== "" && p46 != null && !isNaN(p46);
  },
  validInput: function (p47) {
    if (!vO6.testSkinMod(p47) && !vO6.isSkinCustom(p47)) {
      return p47;
    }
    try {
      let v39 = $("#inputReplaceSkin").val();
      return encodeURI(vO6.isNumberValid(v39) ? v39 : 35);
    } catch (e4) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
const vF2 = function (p48) {
  vO11.idReplaceSkin = vO6.isNumberValid(p48.value) ? p48.value : 35;
  localStorage.setItem("SaveGameXT", JSON.stringify(vO11));
};
var v40 = null;
var v41 = false;
var vLN55 = 55;
var vLN1 = 1;
var v42 = true;
let v43 = new Function("return PIXI;")();
let v44 = v43.Texture.from("https://i.imgur.com/0aN5Zek.png");
let v45 = v43.Texture.from("https://i.imgur.com/12MgJyy.png");
let v46 = v43.Texture.from("https://i.imgur.com/DbWbUxD.png");
var vO7 = {
  zoom: "z",
  restart: "r",
  giro: "s",
  wormExplot: "x",
  laserHS: "l",
  sectores: "q",
  background: "c"
};
function f17(p49, p50) {
  if (vO7.hasOwnProperty(p49)) {
    vO7[p49] = p50;
  }
}
let vO8 = {};
let vO9 = {};
const vLN500 = 500;
var f19;
var v48;
var v49;
var v50;
var v51 = null;
var v52;
var v53;
var v54;
var v55;
var v56;
var v57;
var v58;
var v59;
var v60;
var v61;
var v62;
var v63;
var v64;
var v65;
var v66;
var v67;
var v68;
var v69;
var v70;
var v71;
var v72;
var v73;
var f18;
v48 = 1;
window.onwheel = p51 => {
  if (vO11.zoomZworm) {
    if (p51.deltaY > 0) {
      f19(Math.max(v48 - parseFloat(vO16.zoomSpeed) * 0.75, 0.5));
    } else {
      f19(Math.min(v48 + parseFloat(vO16.zoomSpeed) * 1.05, 50));
    }
  } else if (p51.deltaY > 0) {
    f19(Math.max(v48 * 1.25, 1));
  } else {
    f19(Math.max(v48 * 0.75, 1));
  }
};
function f18() {
  return new (new Function("return RegExp;")())("iPhone|iPad|iPod|Android", "i").test(navigator.userAgent);
}
function f19(p52) {
  v48 = p52;
  v49.text = Math.floor(v48).toString() + "x";
}
var v75 = localStorage.getItem("inputReplaceSkin");
var v76 = null;
var v77 = false;
window.keyMove = 81;
var vO10 = {
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
var vO11 = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  top8: true,
  zoomZworm: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  idReplaceSkin: 35,
  visibleSkin: [],
  pL: [],
  gamePad: vO10.joystick,
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
  let v78 = JSON.parse(saveGameLocal);
  for (let v79 in v78) {
    vO11[v79] = v78[v79];
  }
}
vO11.loading = true;
let vO12 = {
  clientesVencidos: [],
  clientesActivos: []
};
async function f20() {
  await fetch("https://25yt551.github.io/worm2/api/users.json").then(p53 => p53.json()).then(p54 => {
    console.log(p54);
    if (p54.success) {
      let v80 = p54.users;
      console.log(v80);
      vO12.clientesActivos = v80.filter(p55 => {
        return p55.cliente_STATE == vO11.CLIENTE_ADMIN || p55.cliente_STATE == vO11.CLIENTE_ACTIVO;
      });
      vO12.clientesVencidos = v80.filter(p56 => {
        return p56.cliente_STATE == vO11.CLIENTE_INACTIVO;
      });
      console.log(vO12);
    } else {
      vO12 = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("OcurriÃƒÂ³ un error al cargar los clientes");
    }
  });
}
f20();
var vO13 = {};
async function f21() {
  const v81 = "https://zworm.xyz:3305/data?v=" + v130;
  try {
    let v82 = await fetch(v81);
    if (!v82.ok) {
      throw new Error("HTTP error! Status: " + v82.status);
    }
    let v83 = await v82.json();
    for (let v84 in v83) {
      if (v83[v84].length > 0) {
        let v85 = v83[v84].reduce((p57, p58) => p58.Score > p57.Score ? p58 : p57, v83[v84][0]);
        let vFormatScore = f26(v85.Score);
        let vGetStatusColor = f27(v85.Score);
        vO13[v84] = {
          ServerName: v85.ServerName,
          Initials: v84,
          Score: vFormatScore,
          StatusColor: vGetStatusColor
        };
      }
    }
    console.log(vO13);
  } catch (e5) {
    console.error("Error fetching server data:", e5);
  }
}
let vA = [];
async function f22() {
  const v86 = Date.now();
  const v87 = "https://swykz.theoxt.com/api/servers_wwrld/servers.php?v=" + v86;
  try {
    const v88 = await fetch(v87);
    const v89 = await v88.json();
    vA = v89.map(p59 => ({
      dataCon: p59.dataCon,
      dataRoom: p59.dataRoom,
      serverName: p59.serverName,
      dataType: p59.dataType,
      imgSrc: p59.imgSrc
    }));
    console.log(vA);
  } catch (e6) {
    console.error("Error al cargar los servidores:", e6);
  }
}
async function f23(p60) {
  await fetch("https://swykz.theoxt.com/api/users/register_update_player.php", {
    method: "POST",
    body: JSON.stringify({
      data: p60
    })
  }).then(p61 => p61.json()).then(p62 => {
    console.log(p62);
  });
}
async function f24(p63) {
  await fetch("https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php", {
    method: "POST",
    body: JSON.stringify({
      code: p63
    })
  }).then(p64 => p64.json()).then(p65 => {
    console.log(p65);
  });
}
function f25(p66) {
  $.ajax({
    url: "https://swykz.theoxt.com/api/streming.php",
    method: "GET",
    dataType: "json",
    success: function (p67) {
      var v90 = p67.allstreamers.streamers.filter(function (p68) {
        return p68.id_game === p66;
      });
      if (v90.length !== 0) {
        var v91 = v90[0];
        $(".mm-logo").attr("src", v91.logo);
        $(".loading-logo").attr("src", v91.logo);
        $(".logo-server").attr("src", v91.logo);
      } else {
        console.log("No hay streamers online.");
      }
    },
    error: function (p69) {
      console.error("Error al obtener los datos:", p69);
    }
  });
}
function f26(p70) {
  if (p70 >= 1000000) {
    return (p70 / 1000000).toFixed(1) + "M";
  } else if (p70 >= 1000) {
    return (p70 / 1000).toFixed(1) + "K";
  } else {
    return p70.toString();
  }
}
function f27(p71) {
  if (p71 > 10000000) {
    return "green";
  } else if (p71 > 2000000) {
    return "orange";
  } else {
    return "red";
  }
}
async function f28() {
  await Promise.all([f21(), f22()]);
  console.log("Todo listo");
  f29(vA, vO13);
}
function f29(p72, p73) {
  $(".description-text").empty();
  $(".description-text").append("\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            \n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            \n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ");
  $("#connectButton").click(function () {
    let v92 = $("#optionSelect").val();
    let v93 = $("#numberInput").val();
    if (v92 && v93 !== "") {
      zw_lastserver = "wss://" + v92 + ":" + v93 + "/wormy";
      anApp.r.Hd();
      anApp.sa(zw_lastserver);
    } else {
      alert("Por favor, selecciona una opción y escribe un número antes de conectar.");
    }
  });
  var vO14 = {
    sao: "br",
    vin: "Virginia - EEUU",
    dal: "Dallas - EEUU",
    fra: "Frankfurt - Alemania",
    sgp: "sg",
    tok: "jp",
    syd: "au",
    lon: "gb",
    tor: "ca",
    mex: "mx",
    sin: "sg",
    hil: "Honolulu - Hawái, EEUU",
    gra: "de"
  };
  var vA2 = [{
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
  var v$ = $("<ul class=\"ui-tabs-nav\"></ul>");
  var v$2 = $("<div class=\"servers-container\"></div>");
  vA2.forEach(function (p74, p75) {
    var v$3 = $("\n            <li class=\"ui-tabs-tab ui-tab " + (p75 === 0 ? "ui-tab-active" : "") + "\" data-country=\"" + p74.code + "\">\n                <a><span class=\"flag " + p74.code + "\"></span></a>\n            </li>\n        ");
    v$.append(v$3);
    var v$4 = $("\n            <div class=\"servers-" + p74.code + "\" style=\"display: " + (p75 === 0 ? "block" : "none") + ";\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th> <!-- Nueva columna -->\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");
    v$2.append(v$4);
  });
  $(".description-text").append(v$, v$2);
  $(".ui-tabs-tab").click(function () {
    var v94 = $(this).data("country");
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v94).fadeIn(200);
  });
  p72.forEach(function (p76) {
    var v95 = p76.dataRoom.match(/[a-zA-Z]+/g).join("");
    if (v95 === "ae") {
      v95 = "gb";
    }
    var v96 = p76.dataCon.match(/wss:\/\/([a-z]+)-/i);
    var v97 = v96 ? v96[1] : null;
    var v98 = vO14[v97] ? vO14[v97].toUpperCase() : "Desconocido";
    if (vA2.some(p77 => p77.code === v95)) {
      var v99 = p76.dataRoom.trim().toLowerCase();
      var v100 = p73[v99] || {
        Score: "???",
        StatusColor: "gray"
      };
      p76.dataCon.match(/wss:\/\/([^:/]+)/)[1];
      var v$5 = $("\n        <tr class=\"server-row\" data-wss=\"" + p76.dataCon + "\" value=\"" + p76.dataRoom + "\">\n                <td class=\"server-status\">\n                    <span class=\"status-dot\" style=\"background-color: " + v100.StatusColor + ";\"></span>\n                </td>\n                <td class=\"server-name\" >" + p76.serverName + "</td>\n                <td class=\"server-region\">" + v98 + "</td>\n                <td class=\"server-top1\">" + v100.Score + "</td>\n                <td><img src=\"" + p76.imgSrc + "\" class=\"streamer-image\"></td>\n                <td>\n                    <button class=\"btn-check-ports\">📡📶</button>\n                </td>  \n            </tr>\n        ");
      $(".servers-" + v95 + " tbody").append(v$5);
    }
  });
  $(document).on("click", ".server-row", function () {
    $(this).attr("value");
    let v101 = $(this).find(".server-name").text();
    let v102 = $(this).attr("data-wss");
    var vAnApp = anApp;
    if (v101 && v102) {
      vAnApp.r.Hd();
      vAnApp.sa(v102);
      console.log("Conectando a:", v102);
    }
  });
  $(document).on("click", ".btn-check-ports", function (p78) {
    p78.stopPropagation();
    const v103 = $(this).closest(".server-row");
    const v104 = v103.attr("data-wss").match(/wss:\/\/[^:]+:(\d+)\//);
    if (!v104) {
      alert("Puerto no válido");
      return;
    }
    (function (p79, p80) {
      const v105 = p79.find(".server-name").text();
      p79.attr("data-wss").match(/wss:\/\/([^:/]+)/)[1];
      if (!$("#modalPuertas").length) {
        $("body").append("\n                <div id=\"modalPuertas\" style=\"position:fixed; top:20%; left:50%; transform:translateX(-50%);\n                    padding:20px; z-index:9999; display:none; background-color: rgb(78 78 114 / 75%);\n                    border-radius: 5px; border: 2px solid #252535; color: white; font-family: sans-serif;\n                    max-height: 400px; overflow-y: auto; min-width: 300px;\">\n    \n                    <div id=\"modalCloseBtn\" style=\"position: absolute; top: 5px; right: 10px;\n                        font-size: 18px; cursor: pointer; color: #fff;\">✖</div>\n    \n                    <div id=\"modalTitle\" style=\"font-size: 16px; font-weight: bold;\n                        margin-bottom: 10px; text-align: center; margin-top: 20px;\">\n                        🔓 Open doors available for: <span id=\"nombreServidor\"></span>\n                    </div>\n    \n                    <div id=\"resultadoPuertas\"></div>\n                </div>\n            ");
        $(document).off("click", "#modalCloseBtn").on("click", "#modalCloseBtn", function () {
          $("#modalPuertas").fadeOut(300);
        });
        $(document).off("click", ".connect-button").on("click", ".connect-button", function () {
          const v106 = $(this).data("server");
          anApp.sa(v106);
          console.log("Conectando a:", v106);
        });
      }
      $("#nombreServidor").text(v105);
      $("#modalPuertas").fadeIn(200);
      $("#resultadoPuertas").html("🔄 Testing ...");
      f133(p80);
    })(v103, v104[1]);
  });
}
function f30() {
  clearInterval(v40);
  if (v40 === null) {
    v40 = setInterval(function () {
      var v107 = anApp.s.H.sk;
      let v108 = Math.PI;
      var v109 = v107 + v108 / 360 * 9;
      if (v109 >= v108) {
        v109 = -v107;
      }
      anApp.s.H.sk = v109;
    }, 55);
  }
}
function f31() {
  if (vLN1 >= 40) {
    if (v42) {
      vLN55 += 25;
    } else {
      vLN55 -= 100;
    }
    vLN1 = 1;
  }
}
function f32() {
  if (vLN55 === 55 && vLN1 >= 40) {
    vLN55 += 25;
    vLN1 = 1;
    v42 = true;
  }
  if (vLN55 === 80) {
    f31();
  }
  if (vLN55 === 105) {
    f31();
  }
  if (vLN55 === 130) {
    f31();
  }
  if (vLN55 === 155) {
    f31();
  }
  if (vLN55 === 180) {
    f31();
  }
  if (vLN55 === 205) {
    f31();
  }
  if (vLN55 === 230) {
    f31();
  }
  if (vLN55 === 255) {
    f31();
  }
  if (vLN55 === 280) {
    f31();
  }
  if (vLN55 === 305) {
    f31();
  }
  if (vLN55 === 330) {
    f31();
  }
  if (vLN55 === 355) {
    f31();
  }
  if (vLN55 === 380) {
    f31();
  }
  if (vLN55 === 405) {
    f31();
  }
  if (vLN55 === 430) {
    f31();
  }
  if (vLN55 === 455 && vLN1 >= 40) {
    vLN55 -= 100;
    vLN1 = 1;
    v42 = false;
  }
}
function f33() {
  clearInterval(v40);
  if (v40 === null) {
    let v110 = anApp.s.H.sk;
    let v111 = Math.PI;
    let v112 = v110 + v111 / 360 * 9;
    if (v112 >= v111) {
      v112 = -v110;
    }
    anApp.s.H.sk = v112;
    vLN1 += 1;
    f32();
    if (v41) {
      v40 = setInterval(f33, vLN55);
    }
  }
}
function f34() {
  v41 = true;
  vLN55 = 55;
  vLN1 = 1;
  v42 = true;
  f33();
}
f28();
const vO15 = {
  visiblePowersAll: false,
  visiblePowersSpeedZigZag: true
};
var vO16 = {
  zoomSpeed: 1,
  PotenciadorSize: localStorage.getItem("PotenciadorSize") || 2,
  PotenciadorAura: localStorage.getItem("PotenciadorAura") || 1.2,
  ComidaShadow: localStorage.getItem("ComidaShadow") || 2,
  ComidaSize: localStorage.getItem("ComidaSize") || 2,
  laserColor: "FFFFFF",
  colorFondo: "0D0400",
  colorBorde: "FF0000",
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: true,
  sectores: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
const vF3 = async function (p81) {
  var v113 = vO12.clientesActivos.find(function (p82) {
    return p82.cliente_ID === p81.user_data.userId && p82.cliente_SUBSCRIPTION && (p82.cliente_SUBSCRIPTION.description === "5$" || p82.cliente_SUBSCRIPTION.description === "3$");
  });
  if (v113) {
    console.log("El ID " + p81.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    if (v113.cliente_SUBSCRIPTION.description === "5$") {
      vF4(v113.cliente_FECHA_EXPIRACION);
    } else if (v113.cliente_SUBSCRIPTION.description === "3$") {
      settings3dolars();
    }
  } else {
    console.log("El ID generado no coincide con ningún ID almacenado en la base de datos.");
  }
};
function f35() {
  v55.removeChildren();
  v55.clear();
  if (vO16.backgroundSolid) {
    v55.beginFill("0x" + vO16.colorFondo, 1);
    v55.lineStyle(1, "0x" + vO16.colorBorde, 1);
    v55.drawCircle(0, 0, 500);
    v55.endFill();
  } else if (vO16.sectores) {
    var v114 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var v115 = Math.PI * 2 / 10;
    for (var vLN04 = 0; vLN04 < 5; vLN04++) {
      for (var vLN05 = 0; vLN05 < 10; vLN05++) {
        var v116 = vLN05 * v115;
        var v117 = (vLN05 + 1) * v115;
        var v118 = 500 - (vLN04 + 0.01) * 100;
        var v119 = 0 + Math.cos(v116) * v118;
        var v120 = 0 + Math.sin(v116) * v118;
        v55.beginFill("0x" + vO16.colorFondo, 1);
        v55.lineStyle(0.5, "0x" + vO16.colorBorde, 1);
        v55.moveTo(0, 0);
        v55.lineTo(v119, v120);
        v55.arc(0, 0, v118, v116, v117);
        v55.lineTo(0, 0);
        v55.endFill();
        if (vLN04 < 4) {
          var v121 = v114[vLN04] + (vLN05 + 1);
          if (!v55.getChildByName(v121)) {
            var v122 = new PIXI.TextStyle({
              fontSize: "15px",
              fill: "0x00243E"
            });
            var v123 = new PIXI.Text(v121, v122);
            v123.anchor.set(0.5);
            var v124 = v116 + (v117 - v116) / 2;
            var v125 = v118 - 50;
            var v126 = 0 + Math.cos(v124) * v125;
            var v127 = 0 + Math.sin(v124) * v125;
            v123.position.set(v126, v127);
            v123.name = v121;
            v55.addChild(v123);
          }
        }
      }
    }
  } else {
    v55.removeChildren();
    v55.clear();
    v55.lineStyle(1, 16711680, 1);
    v55.drawCircle(0, 0, 500);
    v55.endFill();
  }
}
const vF4 = async function (p83) {
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>EXP: " + p83 + "</span>");
  $("#wtr-settings-version").after("\n        <a href=\"https://www.myinstants.com/en/index/us/\" target=\"_blank\">1: Download sound</a>\n        <br>\n        <a href=\"https://catbox.moe/\" target=\"_blank\">2: Upload sound</a>\n        <br>\n        <label for=\"sound-hs\">Sound link HS: </label>\n        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\"><br>\n        <label for=\"sound-hs\">Sound link 10HS: </label>\n        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\"><br>\n    ");
  $("#sound-hs").val("https://app2.wormateturkiye.com/public/audio/hs.mp3");
  $("#sound-10hs").val("https://app2.wormateturkiye.com/public/audio/laugh.mp3");
  lxpdhssound = new Audio($("#sound-hs").val());
  lxpdlaughsound = new Audio($("#sound-10hs").val());
  $("#sound-hs").on("input", function () {
    lxpdhssound.src = $(this).val();
  });
  $("#sound-10hs").on("input", function () {
    lxpdlaughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\"> : laser headshot</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-sectores-switch\"><span class=\"names_settings\"> : Sectors</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-notAbilityAll-switch\"><span class=\"names_settings\"> : Show All Power-Ups</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-zoomWWC-switch\"><span class=\"names_settings\"> : zoom change - wwc</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\"><span class=\"names_settings\"> : Show Speed&Zigzag</span></div><!--div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-interactive-switch\"><span class=\"names_settings\"> : interactive buttons</span></div--><div id=\"display_color\"><div class=\"container\"><input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\"><span class=\"names_settings\"> : Color del juego</span></div><div class=\"container\"><input id=\"color_palet\" type=\"color\" value=\"#00243E\"><span class=\"names_settings\"> : Color laserHS</span></div><div class=\"container\"><input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\"><span class=\"names_settings\"> : Borde Del juego</span></div>");
  const vO17 = {
    color_paletRGB: p84 => vO16.colorFondo = p84,
    color_palet: p85 => vO16.laserColor = p85,
    color_palet2: p86 => vO16.colorBorde = p86
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    const v128 = $(this).attr("id");
    const v129 = $(this).val().replace("#", "");
    f35();
    console.log("Recibiendo el color reemplazado para " + v128 + ": " + v129);
    if (vO17[v128]) {
      vO17[v128](v129);
    }
    f35();
  });
  vO15.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop("checked", vO15.visiblePowersAll);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this.checked) {
      vO15.visiblePowersAll = true;
    } else {
      vO15.visiblePowersAll = false;
    }
  });
  vO11.zoomZworm = false;
  $("#settings-zoomWWC-switch").prop("checked", vO11.zoomZworm);
  $("#settings-zoomWWC-switch").on("click", function () {
    if (this.checked) {
      vO11.zoomZworm = true;
    } else {
      vO11.zoomZworm = false;
    }
  });
  vO15.visiblePowersSpeedZigZag = true;
  $("#settings-Speed_ZigZag-switch").prop("checked", vO15.visiblePowersSpeedZigZag);
  $("#settings-Speed_ZigZag-switch").on("click", function () {
    if (this.checked) {
      vO15.visiblePowersSpeedZigZag = true;
    } else {
      vO15.visiblePowersSpeedZigZag = false;
    }
  });
  $("#settings-laserHS-switch").prop("checked", vO16.laserHS);
  $("#settings-laserHS-switch").on("click", function () {
    if (this.checked) {
      vO16.laserHS = true;
    } else {
      vO16.laserHS = false;
    }
  });
  $("#settings-sectores-switch").prop("checked", vO16.sectores);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      vO16.sectores = true;
      f35();
    } else {
      vO16.sectores = false;
      f35();
    }
  });
};
var v130 = new Date().getTime();
var v131 = "https://25yt551.github.io/worm2/css/style.css?v=" + v130;
const vF5 = async function (p87) {
  function f36() {
    $.ajax({
      url: "https://swykz.theoxt.com/api/streming.php",
      method: "GET",
      dataType: "json",
      success: function (p88) {
        var v132 = p88.allstreamers.streamers.filter(function (p89) {
          return p89.status === "online";
        });
        if (v132.length !== 0) {
          v132.forEach(function (p90) {
            var v133;
            var v134;
            v133 = p90;
            v134 = "\n                        <div>\n                            <span class=\"status-indicator " + (v133.status === "online" ? "online" : "offline") + "\"></span>\n                            <img src=\"" + v133.url_logo + "\" class=\"streamer-logo\" alt=\"" + v133.nombre + "\">\n                            <a href=\"" + v133.url_stream + "\" target=\"_blank\">live!!!</a>\n                        </div>\n                    ";
            toastr.options = {
              closeButton: true,
              debug: false,
              newestOnTop: false,
              progressBar: true,
              positionClass: "toast-top-right",
              preventDuplicates: false,
              showDuration: "300",
              hideDuration: "1000",
              timeOut: "5000",
              extendedTimeOut: "1000",
              showEasing: "swing",
              hideEasing: "linear",
              showMethod: "fadeIn",
              hideMethod: "fadeOut"
            };
            toastr.info(v134, "" + v133.nombre);
          });
        } else {
          console.log("No hay streamers online.");
        }
      },
      error: function (p91) {
        console.error("Error al obtener los datos:", p91);
      }
    });
  }
  f25(p87.u.si.userId);
  f49(v131);
  vO.id_user = p87.u.si.userId;
  f49("https://fonts.googleapis.com/icon?family=Material+Icons");
  f36();
  setInterval(f36, 900000);
  console.log(p87, p87.u.si.userId);
  lxpdhssound = new Audio("https://app2.wormateturkiye.com/public/audio/hs.mp3");
  lxpdlaughsound = new Audio("https://app2.wormateturkiye.com/public/audio/laugh.mp3");
  (v61 = new v43.Sprite()).texture = v46;
  v61.interactive = true;
  v61.buttonMode = true;
  v61.x = -45;
  v61.y = 10;
  v61.alpha = 0.25;
  v61.on("mouseup", function () {
    (function () {
      v61.interactive = false;
      var vLN06 = 0;
      var vSetInterval = setInterval(function () {
        var v135 = 1 - vLN06 * 0.0075;
        v61.alpha = v135;
        if (++vLN06 > 100) {
          clearInterval(vSetInterval);
          v61.alpha = 0.25;
          v61.interactive = true;
        }
      }, 100);
    })();
    const v136 = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(v136);
    setTimeout(() => {
      let vV53 = v53;
      if (vV53) {
        anApp.r.Hd();
        anApp.sa(vV53);
      }
    }, 1000);
  });
  (v60 = new v43.Sprite()).texture = v45;
  v60.interactive = true;
  v60.buttonMode = true;
  v60.x = -10;
  v60.y = 10;
  v60.alpha = 0.25;
  v60.on("mouseup", function () {
    f37();
  });
  let v137 = false;
  function f37() {
    if (v137) {
      v60.texture = v45;
      v60.alpha = 0.25;
      console.log("Giro deactivated");
      v41 = false;
      vLN55 = 55;
      vLN1 = 1;
      v42 = true;
      clearInterval(v40);
      v40 = null;
    } else {
      v60.alpha = 0.75;
      console.log("Giro activated");
      f30();
      v41 = true;
    }
    v137 = !v137;
  }
  if (f18()) {
    v60.x = -75;
    v61.x = -10;
    v61.y = 45;
    let v138 = new Function("return PIXI;")();
    let v139 = v138.Texture.from("https://i.imgur.com/kGjR9yf.png");
    let v140 = v138.Texture.from("https://i.imgur.com/4JZUa1u.png");
    (v57 = new v138.Sprite()).texture = v139;
    v57.interactive = true;
    v57.buttonMode = true;
    v57.x = -10;
    v57.y = 10;
    v57.alpha = 0.25;
    v57.on("mouseup", function () {
      f19(Math.min(v48 + 0.25, 50));
    });
    (v58 = new v138.Sprite()).texture = v140;
    v58.interactive = true;
    v58.buttonMode = true;
    v58.x = -43;
    v58.y = 10;
    v58.alpha = 0.25;
    v58.on("mouseup", function () {
      f19(Math.max(v48 - 0.25, 0.25));
    });
  }
  $("#game-view").append("\n        <button id=\"openVoiceChatPanel\" class=\"open-btn\" style=\"position: absolute;margin-left: 30px;\"><span class=\"material-icons\">volume_up</span> </button>\n        <div id=\"voice-chat-panel\" class=\"hidden\">\n            <button id=\"closeVoiceChatPanel\" class=\"close-btn\"><span class=\"material-icons\">close</span> </button>\n\n            <h3>Voice Chat BETA 0.01</h3>\n            <div id=\"coming-soon-overlay\" style=\"\n        position: absolute;\n        top: 50px;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.7);\n        color: white;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 24px;\n    \">\n        <h1>Coming Soon</h1>\n    </div>\n            \n            <!-- Controles de llamada -->\n            <div class=\"control-buttons\">\n                <button id=\"startCall\"><span class=\"material-icons\">call</span> Start Call</button>\n                <button id=\"endCall\" disabled><span class=\"material-icons\">call_end</span> End Call</button>\n            </div>\n            \n            <!-- Información sobre la llamada -->\n            <div id=\"roomArea\">\n                <button id=\"joinRoom\" style=\"margin-left: 30%;\"><span class=\"material-icons\">group_add</span> Join Room</button>\n                <p id=\"roomInfo\">Join a room to start chatting!</p>\n            </div>\n        </div>\n    ");
  $("#openVoiceChatPanel").click(function () {
    $("#voice-chat-panel").removeClass("hidden");
    f37();
  });
  $("#closeVoiceChatPanel").click(function () {
    $("#voice-chat-panel").addClass("hidden");
    f37();
  });
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  function f38() {
    $("#chatInput").css("display", "none").val("");
    $("#game-canvas").focus();
  }
  $("#chatInput").on("keydown", function (p92) {
    if (p92.key === "Enter") {
      (function () {
        let v141 = $("#chatInput").val();
        if ($.trim(v141) !== "") {
          console.log("Mensaje enviado:", v141);
          vO.message = v141;
          setTimeout(() => {
            vO.message = "";
          }, 1500);
        }
      })();
      f38();
    } else if (p92.key === "Escape") {
      f38();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $("#mm-settings").html("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders").html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-wtr-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\"></canvas>");
  let v$6 = $("<div class=\"icon-selector\"></div>");
  for (let vLN12 = 1; vLN12 < 42; vLN12++) {
    const v142 = "https://deltav4.gitlab.io/v7/assets/cursors/cursor_" + vLN12.toString().padStart(2, "0") + ".cur";
    const v143 = vLN12 === 1 ? "active" : "";
    const v144 = $("<img>").attr({
      src: v142
    });
    const v145 = $("<div>").addClass("cursor-box icon-selector__item").addClass(v143).append(v144);
    v$6.append(v145);
  }
  $("#wtr-settings-version").after(v$6);
  const vA3 = ["https://i.imgur.com/aHAHSh1.png", "https://i.imgur.com/JOXhGUu.png", "https://i.imgur.com/HoS883S.png"];
  let vLN07 = 0;
  $("#aqnvgcpz05orkobh").css({
    position: "relative",
    overflow: "hidden",
    width: "300px",
    height: "400px"
  }).html("<img src=\"" + vA3[0] + "\" alt=\"Flyer\" style=\"width: 100%; height: 65%; position: absolute; top: 0; left: 0;\">");
  setInterval(function () {
    const v$7 = $("#aqnvgcpz05orkobh");
    const v146 = (vLN07 + 1) % vA3.length;
    const v$8 = $("<img src=\"" + vA3[v146] + "\" alt=\"Flyer\" style=\"width: 100%; height: 65%; position: absolute; top: 0; left: 100%;\">");
    v$7.append(v$8);
    v$7.find("img").eq(0).animate({
      left: "-100%"
    }, 1000, function () {
      $(this).remove();
    });
    v$8.animate({
      left: "0%"
    }, 1000);
    vLN07 = v146;
  }, 3000);
  $(".cursor-box").on("click", function () {
    var v147 = $(this).find("img").attr("src");
    $("body").css("cursor", "url(" + v147 + "), auto");
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
  });
  $("#social-buttons").replaceWith("");
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://wormate.io/images/linelogo-valday2025.png");
  $(".loading-logo").attr("src", "https://i.imgur.com/4fFTM4l.png");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #wtrplayagain, #final-replay").click(function () {});
  $("#mm-wtr-settings").click(function () {
    $("#settings-view").css("display", "none");
  });
  $("#mm-skin-next").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin");
    }, 100);
  });
  $("#mm-skin-prev").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 100);
  });
  function f39(p93, p94, p95) {
    $(p93).on("input", function () {
      vO16[p94] = $(this).val();
      localStorage.setItem(p95, $(this).val());
      console.log("Valor guardado en localStorage:", localStorage.getItem(p95));
    });
  }
  ["#mm-action-play", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-wtr-settings"].forEach(function (p96) {
    $(p96).hover(function () {
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
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $("#user_config").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("position", "absolute").css("display", "block");
    v137 = false;
    f37();
  });
  $("#user_config").after("\n        <div id=\"settings-container2\">\n            <button id=\"clossed_Setings\">X</button>\n            <div class=\"label\" id=\"titleSetings\">Settings</div>\n            <div class=\"display_setting\">\n                <div class=\"container\">\n                    <span class=\"names_settings\">Tamaño del potenciador: </span>\n                    <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"" + vO16.PotenciadorSize + "\" step=\"1\" oninput=\"rangevalue1.value=value\" />\n                    <output id=\"rangevalue1\">" + vO16.PotenciadorSize + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\">Aura del potenciador: </span>\n                    <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"" + vO16.PotenciadorAura + "\" step=\"0.2\" oninput=\"PortionAuravalue.value=value\" />\n                    <output id=\"PortionAuravalue\">" + vO16.PotenciadorAura + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\">Tamaño de comida: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + vO16.ComidaSize + "\" step=\"0.5\" oninput=\"rangevalue2.value=value\" />\n                    <output id=\"rangevalue2\">" + vO16.ComidaSize + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\">Brillo de comida: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + vO16.ComidaShadow + "\" step=\"0.5\" oninput=\"FoodShadowvalue.value=value\" />\n                    <output id=\"FoodShadowvalue\">" + vO16.ComidaShadow + "</output>\n                </div>\n                <div class=\"settings-checkbox\">\n                    <input type=\"checkbox\" id=\"settings-backgroundSolid-switch\">\n                    <span class=\"names_settings\"> : Background Solid </span>\n                </div>\n                <div id=\"settings5dolars\"></div>\n            </div>\n        </div>\n    ");
  $("#settings-backgroundSolid-switch").prop("checked", vO16.backgroundSolid);
  $("#settings-backgroundSolid-switch").on("click", function () {
    if (this.checked) {
      vO16.backgroundSolid = true;
      f35();
    } else {
      vO16.backgroundSolid = false;
      f35();
    }
  });
  $("#clossed_Setings").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    v137 = true;
    f37();
  });
  f39("#PortionSize", "PotenciadorSize", "PotenciadorSize");
  f39("#PortionAura", "PotenciadorAura", "PotenciadorAura");
  f39("#FoodSize", "ComidaSize", "ComidaSize");
  f39("#FoodShadow", "ComidaShadow", "ComidaShadow");
  $("<img>", {
    id: "christmas-hat",
    src: "https://i.imgur.com/3H1zdPS.png",
    alt: "Christmas Hat"
  });
  $("#christmas-hat").css({
    position: "absolute",
    top: "-11px",
    transform: "translateX(-5%)",
    width: "40px",
    height: "auto"
  });
  $("#mm-player-info").css("position", "relative");
};
const vO18 = {
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
for (let vLN08 = 0; vLN08 < timeFontColors.length; vLN08++) {
  let v148 = timeFontColors[vLN08];
  vO18.fontStyle["tfc" + vLN08] = new PIXI.TextStyle({
    align: "center",
    fill: v148,
    fontSize: 25,
    lineJoin: "round",
    whiteSpace: "normal",
    wordWrap: true,
    dropShadow: true,
    dropShadowBlur: 6,
    fontWeight: "bold"
  });
}
vO18.ptc = {};
const vA4 = [40, 40, 40, 120, 40, 20, 40];
for (let vLN09 = 0; vLN09 < vA4.length; vLN09++) {
  let v149 = "clock_ad" + vLN09;
  vO18.ptc[v149] = new PIXI.Text(vA4[vLN09], vO18.fontStyle["tfc" + vLN09]);
  vO18.ptc[v149].y = 61;
}
function f40(p97, p98, p99) {
  let v150 = vA4[p98] - parseInt((p99 == 0.99 ? 1 : p99) * vA4[p98] / 1);
  let v151 = "clock_ad" + p98;
  p97.Tf[p98].addChild(vO18.ptc[v151]);
  if (vO18.ptc[v151]) {
    vO18.ptc[v151].x = v150 >= 100 ? 11 : v150 >= 10 ? 18 : 26;
    vO18.ptc[v151].text = v150;
  }
}
vO18.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
vO18.containerImgTest = new PIXI.Sprite(vO18.imgTest_desactived);
vO18.containerImgTest.anchor.set(0.5);
vO18.containerImgTest.x = window.innerWidth / 2;
vO18.containerImgTest.y = window.innerHeight / 2;
vO18.containerImgTest.alpha = 0.3;
vO18.teamsContainer = new PIXI.Container();
function f41(p100, p101) {
  if (p101.trim() !== "") {
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
    toastr.success(p101, p100, {
      iconClass: "toast-info"
    });
  }
}
function f42(p102, p103, p104) {
  if (p104.trim() !== "") {
    vO2.players.forEach((p105, p106) => {
      if (p105.teamCode === p102 && p105.nickname !== p103) {
        let v152 = p105.nickname.length > 12 ? p105.nickname.slice(0, 12) : p105.nickname;
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
        toastr.success("" + p104, "" + p103, {
          iconClass: "toast-info"
        });
        console.log("Mensaje enviado por " + p103 + " recibido por el jugador " + v152 + " (" + p106 + ") del equipo " + p102);
      }
    });
  }
}
vO18.titleRec = new PIXI.Text("Top 8 (👑)", vO18.fontStyle.blanco);
vO18.titleRec.y = -5;
vO18.containerHsRec = new PIXI.Container();
vO18.containerHsRec.x = -55;
vO18.containerHsRec.y = 155;
const vA5 = [16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215];
const vO19 = {
  align: "center",
  fontSize: 12,
  lineJoin: "round",
  strokeThickness: 1,
  whiteSpace: "normal",
  wordWrap: true
};
for (let vLN010 = 0; vLN010 < 8; vLN010++) {
  let v153 = vLN010 + 1;
  let v154 = new PIXI.Text(v153 + ".", vO18.fontStyle.blanco);
  v154.x = vLN010 >= 9 ? -5 : 0;
  v154.y = v153 * 13;
  vO18.containerHsRec.addChild(v154);
  let v155 = new PIXI.Text("--", {
    fill: vA5[vLN010 % vA5.length],
    ...vO19
  });
  v155.x = 15;
  v155.y = v153 * 13;
  vO18.containerHsRec.addChild(v155);
  let v156 = new PIXI.Text("--", {
    fill: vA5[vLN010 % vA5.length],
    ...vO19
  });
  v156.x = 100;
  v156.y = v153 * 13;
  vO18.containerHsRec.addChild(v156);
}
vO18.containerHsRec.addChild(vO18.titleRec);
const vF6 = function () {
  const v157 = vO2.players;
  const v158 = Array.from(v157.values()).filter(p107 => p107.hskill.hs > 0 && p107.nickname.trim() !== "");
  v158.sort((p108, p109) => p109.hskill.hs - p108.hskill.hs);
  console.log(v158);
  const vA6 = [];
  for (let vLN011 = 0; vLN011 < 8; vLN011++) {
    const v159 = v158[vLN011];
    if (v159) {
      vA6.push({
        nombre: v159.nickname.substring(0, 10),
        nombre2: v159.nickname.split("ㅤ")[0],
        enemyNameHs: v159.enemyNameHs ? v159.enemyNameHs.split("ㅤ")[0] : "--",
        hs: v159.hskill.hs,
        teamCode: v159.teamCode,
        teamColor: v159.teamColor,
        position: v159.position
      });
    } else {
      vA6.push({
        nombre: "--",
        nombre2: "--",
        enemyNameHs: "--",
        hs: "--",
        teamCode: "",
        teamColor: "",
        position: null
      });
    }
  }
  for (let vLN012 = 0; vLN012 < 8; vLN012++) {
    if (vO18.containerHsRec.children[vLN012 * 3 + 1]) {
      vO18.containerHsRec.children[vLN012 * 3 + 1].text = vA6[vLN012].nombre;
    }
    if (vO18.containerHsRec.children[vLN012 * 3 + 2]) {
      vO18.containerHsRec.children[vLN012 * 3 + 2].text = vA6[vLN012].hs;
    }
  }
  vA6[0];
};
function f43(p110, p111) {
  f45(vO2);
  vO2.players.forEach((p112, p113) => {
    if (p112.teamCode === p110) {
      console.log(p112);
      let v160 = p112.teamColor ? parseInt(p112.teamColor) : p111;
      if (!vO18[p113]) {
        vO18[p113] = new PIXI.Graphics();
        vO18[p113].zIndex = 2;
        vO18[p113].alpha = 0.9;
        if (vO18.teamsContainer) {
          vO18.teamsContainer.addChild(vO18[p113]);
        } else {
          console.error("Error: ctx.teamsContainer is not defined.");
        }
      }
      vO18[p113].clear();
      vO18[p113].beginFill(v160);
      vO18[p113].drawCircle(0, 0, 2.4);
      vO18[p113].endFill();
      vO18[p113].lineStyle(1, 0);
      vO18[p113].drawCircle(0, 0, 2.4);
      vO18[p113].endFill();
      vO18[p113].x = p112.position.x;
      vO18[p113].y = p112.position.y;
    }
  });
}
function f44() {
  if (vO18.teamsContainer) {
    Object.keys(vO18).forEach(p114 => {
      if (vO18[p114] instanceof PIXI.Graphics && vO18[p114].parent === vO18.teamsContainer) {
        vO18.teamsContainer.removeChild(vO18[p114]);
        vO18[p114].destroy(true);
        delete vO18[p114];
      }
      if (vO18[p114 + "_text"] && vO18[p114 + "_text"].parent === vO18.teamsContainer) {
        vO18.teamsContainer.removeChild(vO18[p114 + "_text"]);
        vO18[p114 + "_text"].destroy(true);
        delete vO18[p114 + "_text"];
      }
    });
  } else {
    console.error("Error: ctx.teamsContainer is not defined.");
  }
}
vO18.titleRec2 = new PIXI.Text("Friends", vO18.fontStyle.blanco);
vO18.titleRec2.y = -5;
vO18.containerHsRec2 = new PIXI.Container();
vO18.containerHsRec2.x = 30;
vO18.containerHsRec2.y = 170;
let vA7 = [];
for (let vLN013 = 0; vLN013 < 5; vLN013++) {
  let v161 = vLN013 + 1;
  let v162 = new PIXI.Text(" ", vO18.fontStyle.blanco);
  v162.x = 0;
  v162.y = v161 * 13;
  vO18.containerHsRec2.addChild(v162);
  let v163 = new PIXI.Text("--", {
    fill: "#FFFFFF",
    fontSize: 12
  });
  v163.x = 15;
  v163.y = v161 * 13;
  vO18.containerHsRec2.addChild(v163);
  vA7.push(v163);
}
function f45(p115) {
  const v164 = p115.players;
  const v165 = Array.from(v164.values()).filter(p116 => p116.teamCode === vO.teamCode);
  vA7.forEach((p117, p118) => {
    if (v165[p118]) {
      let v166 = v165[p118];
      p117.text = v166.nickname.substring(0, 20);
      p117.style.fill = v166.teamColor;
    } else {
      p117.text = "--";
      p117.style.fill = "#FFFFFF";
    }
  });
}
function f46() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var v167 = $(this).attr("data-country-name");
    $(".ui-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v167.toLowerCase()).fadeIn(500);
    $(".servers-container > div").not(".servers-" + v167.toLowerCase()).fadeOut(100);
  });
}
function f47() {
  var vO20 = {};
  window.onclick = function () {
    if ((vO20 = window.nodes) && Object.keys(vO20).length > 0 && (console.log(vO20), vO20)) {
      var v168 = window.mouseX - vO20.qj.If.x;
      var v169 = window.mouseY - vO20.qj.If.y;
      var v170 = vO20.Mb.ad;
      var v171 = Math.sqrt(v168 * v168 + v169 * v169);
      console.log("Cell:", vO20, "nickname: ", v170, "Distance:", v171);
    }
  };
}
function f48(p119, p120 = true) {
  return new Promise((p121, p122) => {
    var v172 = document.createElement("script");
    v172.type = "text/javascript";
    v172.src = p119;
    v172.defer = p120;
    v172.onload = p121;
    v172.onerror = p122;
    document.head.appendChild(v172);
  });
}
function f49(p123) {
  return new Promise((p124, p125) => {
    var v173 = document.createElement("link");
    v173.rel = "stylesheet";
    v173.type = "text/css";
    v173.href = p123;
    v173.onload = p124;
    v173.onerror = p125;
    document.head.appendChild(v173);
  });
}
vO18.containerHsRec2.addChild(vO18.titleRec2);
f49("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
f48("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
f49("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
"use strict";
var v174 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p126) {
  return typeof p126;
} : function (p127) {
  if (p127 && typeof Symbol == "function" && p127.constructor === Symbol && p127 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p127;
  }
};
var v175;
(function () {
  try {
    console.log(function (p128, p129) {
      for (var vLN014 = 0; vLN014 < p129.length; vLN014 += 2) {
        p128 = p128.replaceAll(p129[vLN014], p129[vLN014 + 1]);
      }
      return p128;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e7) {}
})();
window.addEventListener("load", function () {
  function f50() {
    (function (p130, p131, p132) {
      function f51() {
        if (typeof p131.createElement != "function") {
          return p131.createElement(arguments[0]);
        } else if (v178) {
          return p131.createElementNS.call(p131, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p131.createElement.apply(p131, arguments);
        }
      }
      var vA8 = [];
      var vA9 = [];
      var vO21 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p133, p134) {
          var vThis2 = this;
          setTimeout(function () {
            p134(vThis2[p133]);
          }, 0);
        },
        addTest: function (p135, p136, p137) {
          vA9.push({
            name: p135,
            fn: p136,
            options: p137
          });
        },
        addAsyncTest: function (p138) {
          vA9.push({
            name: null,
            fn: p138
          });
        }
      };
      function f52() {}
      f52.prototype = vO21;
      f52 = new f52();
      var v176 = false;
      try {
        v176 = "WebSocket" in p130 && p130.WebSocket.CLOSING === 2;
      } catch (e8) {}
      f52.addTest("websockets", v176);
      var v177 = p131.documentElement;
      var v178 = v177.nodeName.toLowerCase() === "svg";
      f52.addTest("canvas", function () {
        var vF51 = f51("canvas");
        return !!vF51.getContext && !!vF51.getContext("2d");
      });
      f52.addTest("canvastext", function () {
        return f52.canvas !== false && typeof f51("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v179;
        var v180;
        var v181;
        var v182;
        var v183;
        var v184;
        var v185;
        var v186;
        for (var v187 in vA9) {
          if (vA9.hasOwnProperty(v187)) {
            v179 = [];
            if ((v180 = vA9[v187]).name && (v179.push(v180.name.toLowerCase()), v180.options && v180.options.aliases && v180.options.aliases.length)) {
              for (v181 = 0; v181 < v180.options.aliases.length; v181++) {
                v179.push(v180.options.aliases[v181].toLowerCase());
              }
            }
            v185 = v180.fn;
            v186 = "function";
            v182 = (v185 === undefined ? "undefined" : v174(v185)) === v186 ? v180.fn() : v180.fn;
            v183 = 0;
            for (; v183 < v179.length; v183++) {
              if ((v184 = v179[v183].split(".")).length === 1) {
                f52[v184[0]] = v182;
              } else {
                if (!!f52[v184[0]] && !(f52[v184[0]] instanceof Boolean)) {
                  f52[v184[0]] = new Boolean(f52[v184[0]]);
                }
                f52[v184[0]][v184[1]] = v182;
              }
              vA8.push((v182 ? "" : "no-") + v184.join("-"));
            }
          }
        }
      })();
      (function (p139) {
        var v188 = v177.className;
        var v189 = f52._config.classPrefix || "";
        if (v178) {
          v188 = v188.baseVal;
        }
        if (f52._config.enableJSClass) {
          var v190 = new RegExp("(^|\\s)" + v189 + "no-js(\\s|$)");
          v188 = v188.replace(v190, "$1" + v189 + "js$2");
        }
        if (f52._config.enableClasses) {
          v188 += " " + v189 + p139.join(" " + v189);
          if (v178) {
            v177.className.baseVal = v188;
          } else {
            v177.className = v188;
          }
        }
      })(vA8);
      delete vO21.addTest;
      delete vO21.addAsyncTest;
      for (var vLN015 = 0; vLN015 < f52._q.length; vLN015++) {
        f52._q[vLN015]();
      }
      p130.Modernizr = f52;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (f50()) {
    (function () {
      function f53() {
        return window.anApp = vUndefined2;
      }
      function f54(p140) {
        const v191 = p140 + "=";
        const v192 = document.cookie.split(";");
        for (let vLN016 = 0; vLN016 < v192.length; vLN016++) {
          let v193 = v192[vLN016];
          while (v193.charAt(0) === " ") {
            v193 = v193.substring(1);
          }
          if (v193.indexOf(v191) === 0) {
            return v193.substring(v191.length, v193.length);
          }
        }
        return "";
      }
      function f55(p141, p142, p143) {
        var v194 = new Date();
        v194.setTime(v194.getTime() + p143 * 86400000);
        var v195 = "expires=" + v194.toUTCString();
        document.cookie = p141 + "=" + p142 + "; " + v195 + "; path=/";
      }
      function f56(p144) {
        return window.I18N_MESSAGES[p144];
      }
      function f57(p145) {
        if (p145[v264]) {
          return p145[v264];
        } else if (p145.en) {
          return p145.en;
        } else {
          return p145.x;
        }
      }
      function f58(p146) {
        var v196 = (Math.floor(p146) % 60).toString();
        var v197 = (Math.floor(p146 / 60) % 60).toString();
        var v198 = (Math.floor(p146 / 3600) % 24).toString();
        var v199 = Math.floor(p146 / 86400).toString();
        var vF56 = f56("util.time.days");
        var vF562 = f56("util.time.hours");
        var vF563 = f56("util.time.min");
        var vF564 = f56("util.time.sec");
        if (v199 > 0) {
          return v199 + " " + vF56 + " " + v198 + " " + vF562 + " " + v197 + " " + vF563 + " " + v196 + " " + vF564;
        } else if (v198 > 0) {
          return v198 + " " + vF562 + " " + v197 + " " + vF563 + " " + v196 + " " + vF564;
        } else if (v197 > 0) {
          return v197 + " " + vF563 + " " + v196 + " " + vF564;
        } else {
          return v196 + " " + vF564;
        }
      }
      function f59(p147) {
        if (p147.includes("href")) {
          return p147.replaceAll("href", "target=\"_black\" href");
        } else {
          return p147;
        }
      }
      function f60(p148, p149, p150) {
        var v200 = document.createElement("script");
        if (p149) {
          v200.id = p149;
        }
        v200.async = "async";
        v200.type = "text/javascript";
        v200.src = p148;
        if (p150) {
          v200.onload = v200.onreadystatechange = function () {
            false;
            try {
              p150();
            } catch (e9) {
              console.log(e9);
            }
            v200.onload = v200.onreadystatechange = null;
          };
        }
        (document.head || document.getElementsByTagName("head")[0]).appendChild(v200);
      }
      function f61(p151, p152) {
        var vP152 = p152;
        vP152.prototype = Object.create(p151.prototype);
        vP152.prototype.constructor = vP152;
        vP152.parent = p151;
        return vP152;
      }
      function f62(p153) {
        if ((p153 %= v268) < 0) {
          return p153 + v268;
        } else {
          return p153;
        }
      }
      function f63(p154, p155, p156) {
        return f64(p156, p154, p155);
      }
      function f64(p157, p158, p159) {
        if (p157 > p159) {
          return p159;
        } else if (p157 < p158) {
          return p158;
        } else if (Number.isFinite(p157)) {
          return p157;
        } else {
          return (p158 + p159) * 0.5;
        }
      }
      function f65(p160, p161, p162, p163) {
        if (p161 > p160) {
          return Math.min(p161, p160 + p162 * p163);
        } else {
          return Math.max(p161, p160 - p162 * p163);
        }
      }
      function f66(p164, p165, p166, p167, p168) {
        return p165 + (p164 - p165) * Math.pow(1 - p167, p166 / p168);
      }
      function f67(p169, p170, p171) {
        return p169 * (1 - p171) + p170 * p171;
      }
      function f68(p172, p173, p174, p175) {
        var vP174 = p174;
        var vP173 = p173;
        var v201 = p173 + p175;
        if (p172 == null) {
          throw new TypeError("this is null or not defined");
        }
        var v202 = p172.length >>> 0;
        var v203 = vP174 >> 0;
        var v204 = v203 < 0 ? Math.max(v202 + v203, 0) : Math.min(v203, v202);
        var v205 = vP173 >> 0;
        var v206 = v205 < 0 ? Math.max(v202 + v205, 0) : Math.min(v205, v202);
        var v207 = v201 === undefined ? v202 : v201 >> 0;
        var v208 = v207 < 0 ? Math.max(v202 + v207, 0) : Math.min(v207, v202);
        var v209 = Math.min(v208 - v206, v202 - v204);
        var vLN13 = 1;
        for (v206 < v204 && v204 < v206 + v209 && (vLN13 = -1, v206 += v209 - 1, v204 += v209 - 1); v209 > 0;) {
          if (v206 in p172) {
            p172[v204] = p172[v206];
          } else {
            delete p172[v204];
          }
          v206 += vLN13;
          v204 += vLN13;
          v209--;
        }
        return p172;
      }
      function f69(p176) {
        return p176.getContext("2d");
      }
      function f70(p177) {
        if (p177.parent != null) {
          p177.parent.removeChild(p177);
        }
      }
      function f71(p178) {
        return p178[parseInt(Math.random() * p178.length)];
      }
      function f72() {
        return Math.random().toString(36).substring(2, 15);
      }
      function f73(p179, p180, p181) {
        var v210 = (1 - Math.abs(p181 * 2 - 1)) * p180;
        var v211 = v210 * (1 - Math.abs(p179 / 60 % 2 - 1));
        var v212 = p181 - v210 / 2;
        if (p179 >= 0 && p179 < 60) {
          return [v212 + v210, v212 + v211, v212 + 0];
        } else if (p179 >= 60 && p179 < 120) {
          return [v212 + v211, v212 + v210, v212 + 0];
        } else if (p179 >= 120 && p179 < 180) {
          return [v212 + 0, v212 + v210, v212 + v211];
        } else if (p179 >= 180 && p179 < 240) {
          return [v212 + 0, v212 + v211, v212 + v210];
        } else if (p179 >= 240 && p179 < 300) {
          return [v212 + v211, v212 + 0, v212 + v210];
        } else {
          return [v212 + v210, v212 + 0, v212 + v211];
        }
      }
      function f74() {
        function e() {
          let v213 = vO11.adblock ? 1 : 5;
          $("#adbl-1").text(f56("index.game.antiadblocker.msg1"));
          $("#adbl-2").text(f56("index.game.antiadblocker.msg2"));
          $("#adbl-3").text(f56("index.game.antiadblocker.msg3"));
          $("#adbl-4").text(f56("index.game.antiadblocker.msg4").replace("{0}", 10));
          $("#adbl-continue span").text(f56("index.game.antiadblocker.continue"));
          $("#adbl-continue").hide();
          $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
          var vV213 = v213;
          for (var vLN017 = 0; vLN017 < v213; vLN017++) {
            setTimeout(function () {
              vV213--;
              $("#adbl-4").text(f56("index.game.antiadblocker.msg4").replace("{0}", vV213));
              if (vV213 === 0) {
                console.log("aipAABC");
                try {
                  ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
                } catch (e10) {}
                $("#adbl-continue").fadeIn(200);
              }
            }, (vLN017 + 1) * 1000);
          }
        }
        var v214 = false;
        function f76() {}
        var vO22 = {};
        var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
        $("#adbl-continue").click(function () {
          $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
          f76(false);
        });
        vO22.a = function (p182) {
          f76 = p182;
          if (!v214) {
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
                  AIP_COMPLETE: function (p183) {
                    console.log("aipC");
                    f76(true);
                    $("#1eaom01c3pxu9wd3").hide();
                    $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                    try {
                      ga("send", "event", "preroll", window.runtimeHash + "_complete");
                    } catch (e11) {}
                  },
                  AIP_REMOVE: function () {}
                });
              });
              v214 = true;
            } catch (e12) {}
          }
        };
        vO22.b = function () {
          if (aiptag.adplayer !== undefined) {
            console.log("aipS");
            try {
              ga("send", "event", "preroll", window.runtimeHash + "_request");
            } catch (e13) {}
            e();
          } else {
            console.log("aipAABS");
            try {
              ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
            } catch (e14) {}
            e();
          }
        };
        return vO22;
      }
      function f77(p184, p185) {
        var v$9 = $("#" + p184);
        var vP185 = p185;
        var vO23 = {};
        var v215 = false;
        vO23.a = function () {
          if (!v215) {
            v$9.empty();
            v$9.append("<div id='" + vP185 + "'></div>");
            try {
              try {
                ga("send", "event", "banner", window.runtimeHash + "_display");
              } catch (e15) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(vP185);
              });
              v215 = true;
            } catch (e16) {}
          }
        };
        vO23.c = function () {
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_refresh");
            } catch (e17) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP185);
            });
          } catch (e18) {}
        };
        return vO23;
      }
      function f78() {
        function t(p186) {
          var v216 = p186 + Math.floor(Math.random() * 65535) * 37;
          f55(vF14.d, v216, 30);
        }
        return function () {
          var v217 = parseInt(f54(vF14.d)) % 37;
          console.log("init1 pSC: " + v217);
          if (!(v217 >= 0) || !(v217 < v781.e)) {
            v217 = Math.max(0, v781.e - 2);
            console.log("init2 pSC: " + v217);
          }
          var vO24 = {};
          vUndefined2 = vO24;
          vO24.f = v781;
          vO24.g = false;
          vO24.i = Date.now();
          vO24.j = 0;
          vO24.k = 0;
          vO24.l = null;
          vO24.m = vUndefined;
          vO24.n = v264;
          vO24.o = null;
          vO24.p = null;
          vO24.q = null;
          vO24.r = null;
          vO24.s = null;
          vO24.t = null;
          vO24.u = null;
          try {
            if (navigator && navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (p187) {
                if (p187.coords !== undefined) {
                  var v218 = p187.coords;
                  if (v218.latitude !== undefined && v218.longitude !== undefined) {
                    vO24.l = p187;
                  }
                }
              }, function (p188) {});
            }
          } catch (e19) {}
          vO24.v = function () {
            vO24.p = new vF9();
            vO24.q = new vF29();
            vO24.r = new vF11();
            vO24.s = new vF30();
            vO24.t = new vF26();
            vO24.u = new vF33();
            vO24.o = new f80();
            vO24.o.z = new vF21(vO24.o);
            window.MessageProcessor = new vF21(vO24.o);
            vO24.a();
          };
          vO24.a = function () {
            try {
              ga("send", "event", "app", window.runtimeHash + "_init");
            } catch (e20) {}
            vO24.o.A = function () {
              vO24.o.B();
            };
            vO24.o.C = function () {
              var v219 = vO24.s.F.D();
              try {
                ga("send", "event", "game", window.runtimeHash + "_start", v219);
              } catch (e21) {}
              vO24.r.G(vF11.AudioState.H);
              vO24.s.I(vO24.s.H.J());
            };
            vO24.o.B = function () {
              var v220;
              var v221;
              try {
                ga("send", "event", "game", window.runtimeHash + "_end");
              } catch (e22) {}
              if ($("body").height() >= 430) {
                vO24.f.K.c();
              }
              vO24.p.L();
              v220 = Math.floor(vO24.o.N.M);
              v221 = vO24.o.O;
              if (vO24.u.P()) {
                vO24.u.Q(function () {
                  vO24.R(v220, v221);
                });
              } else {
                vO24.R(v220, v221);
              }
            };
            vO24.o.S = function (p189) {
              p189(vO24.s.H.T(), vO24.s.H.U());
            };
            vO24.u.V(function () {
              if (vO24.p.W) {
                vO24.r.G(vF11.AudioState.F);
                vO24.s.I(vO24.s.F);
              }
              if (vO24.u.P()) {
                try {
                  var v222 = vO24.u.X();
                  ga("set", "userId", v222);
                } catch (e23) {}
              }
              if (vO24.Y() && vO24.u.P() && !vO24.u.Z()) {
                vO24.$(false, false);
                vO24.s.aa._(new v_0xb7eccc());
              } else {
                vO24.ba(true);
              }
            });
            vO24.p.ca(function () {
              vO24.r.G(vF11.AudioState.F);
              vO24.s.I(vO24.s.F);
            });
            vO24.q.a(function () {
              vO24.o.a();
              vO24.r.a();
              vO24.s.a();
              vO24.t.a();
              vO24.p.a();
              vO24.u.a();
              if (vO24.Y() && !vO24.Z()) {
                vO24.s.aa._(new v_0xb7eccc());
              } else {
                vO24.ba(true);
              }
            });
          };
          vO24.da = function (p190) {
            if (vO24.u.P()) {
              var v223 = vO24.u.ea();
              $.get(vAtob + "/pub/wuid/" + v223 + "/consent/change?value=" + encodeURI(p190), function (p191) {});
            }
          };
          vO24.fa = function (p192) {
            var v224 = vO24.u.ea();
            var v225 = vO24.s.F.D();
            var v226 = vO24.s.F.ga();
            var v227 = vO24.t.ha(vF28.ia);
            var v228 = vO24.t.ha(vF28.ja);
            var v229 = vO24.t.ha(vF28.ka);
            var v230 = vO24.t.ha(vF28.la);
            var v231 = vO24.t.ha(vF28.ma);
            var vLN018 = 0;
            if (vO24.l != null) {
              var v232 = vO24.l.coords.latitude;
              var v233 = vO24.l.coords.longitude;
              vLN018 = Math.max(0, Math.min(32767, (v232 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v233 + 180) / 360 * 65536)) << 16;
            }
            vO6.testSkinCustom(v227);
            let v234 = "XТ_" + (v227 > 999 ? "000" : v227.toString().padStart(3, 0)) + (v231 > 999 ? "000" : v231.toString().padStart(3, 0));
            v226 = (v226 = (v226.length >= 32 ? v226.substr(0, 16) : v226.substr(0, 16).padEnd(16)) + v234).trim().replace(/\s/g, "ㅤ");
            console.log(v226);
            vO.nickname = v226;
            var v235 = vAtob + "/pub/wuid/" + v224 + "/start?gameMode=" + encodeURI(v225) + "&gh=" + vLN018 + "&nickname=" + encodeURI(v226) + "&skinId=" + vO6.validInput(v227) + "&eyesId=" + encodeURI(v228) + "&mouthId=" + encodeURI(v229) + "&glassesId=" + encodeURI(v230) + "&hatId=" + encodeURI(v231);
            console.log("urlRequest: " + v235);
            $.get(v235, function (p193) {
              var v236 = p193.server_url;
              p192(v236);
            });
          };
          vO24.na = function () {
            v217++;
            console.log("start pSC: " + v217);
            if (!vO24.f.oa && v217 >= vO24.f.e) {
              vO24.s.I(vO24.s.pa);
              vO24.r.G(vF11.AudioState.qa);
              vO24.f.ra.b();
            } else {
              t(v217);
              vO24.sa();
              v52.text = "";
            }
          };
          vO24.sa = function (p194) {
            lxpdkillcount = 0;
            lxpdhscount = 0;
            if (vO24.o.ta()) {
              vO24.s.I(vO24.s.ua);
              vO24.r.G(vF11.AudioState.ua);
              var v237 = vO24.s.F.D();
              f55(vF14.va, v237, 30);
              console.log("save gm: " + v237);
              var v238 = vO24.s.xa.wa();
              f55(vF14.ya, v238, 30);
              console.log("save sPN: " + v238);
              if (vO24.u.P()) {
                vO24.fa(function (p195) {
                  v53 = p194 || p195;
                  vO.wssServer = v53;
                  vO24.o.za(p194 || p195, vO24.u.ea());
                });
              } else {
                var v239 = vO24.s.F.ga();
                f55(vF14.Aa, v239, 30);
                var v240 = vO24.t.ha(vF28.ia);
                f55(vF14.Ba, v240, 30);
                vO24.fa(function (p196) {
                  v53 = p194 || p196;
                  vO.wssServer = v53;
                  vO24.o.Ca(p194 || p196, v239, v240);
                });
              }
            }
          };
          vO24.R = function (p197, p198) {
            var v241 = vO24.s.F.ga();
            vO24.s.H.Da(p197, p198, v241);
            vO24.r.G(vF11.AudioState.Ea);
            vO24.s.I(vO24.s.H.Fa());
          };
          vO24.Ga = function () {
            if (!vO24.Ha()) {
              return vO24.t.Ia();
            }
            var vParseInt = parseInt(f54(vF14.Ba));
            if (vParseInt != null && vO24.t.Ja(vParseInt, vF28.ia)) {
              return vParseInt;
            } else {
              return vO24.t.Ia();
            }
          };
          vO24.Ka = function (p199) {
            f55(vF14.La, !!p199, 1800);
          };
          vO24.Ha = function () {
            return f54(vF14.La) === "true";
          };
          vO24.ba = function (p200) {
            if (p200 != vO24.g) {
              vO24.g = p200;
              var v242 = v242 || {};
              v242.consented = p200;
              v242.gdprConsent = p200;
              vO24.f.Ma.a();
              vO24.f.K.a();
              vO24.f.ra.a(function (p201) {
                if (p201) {
                  t(v217 = 0);
                }
                vO24.sa();
              });
            }
          };
          vO24.$ = function (p202, p203) {
            f55(vF14.Na, p202 ? "true" : "false");
            if (p203) {
              vO24.da(p202);
            }
            vO24.ba(p202);
          };
          vO24.Z = function () {
            return f54(vF14.Na) === "true";
          };
          vO24.Y = function () {
            try {
              return !!window.isIPInEEA || vO24.l != null && !!vO31.Oa(vO24.l.coords.latitude, vO24.l.coords.longitude);
            } catch (e24) {
              return true;
            }
          };
          vO24.Pa = function () {
            vO24.j = Date.now();
            vO24.k = vO24.j - vO24.i;
            vO24.o.Qa(vO24.j, vO24.k);
            vO24.s.Qa(vO24.j, vO24.k);
            vO24.i = vO24.j;
          };
          vO24.Ra = function () {
            vO24.s.Ra();
          };
          return vO24;
        }();
      }
      function f80() {
        var vLN019 = 0;
        var vLN14 = 1;
        var vLN2 = 2;
        var vLN3 = 3;
        var vO25 = {
          Wa: 30
        };
        vO25.Xa = new Float32Array(100);
        vO25.Ya = 0;
        vO25.Za = 0;
        vO25.$a = 0;
        vO25._a = 0;
        vO25.ab = 0;
        vO25.bb = 0;
        vO25.cb = vLN019;
        vO25.db = null;
        vO25.eb = 300;
        vO25.C = function () {};
        vO25.B = function () {};
        vO25.S = function () {};
        vO25.A = function () {};
        vO25.fb = new vF17();
        vO25.z = null;
        vO25.N = null;
        vO25.gb = {};
        vO25.hb = {};
        vO25.ib = 12.5;
        vO25.jb = 40;
        vO25.kb = 1;
        vO25.lb = -1;
        vO25.mb = 1;
        vO25.nb = 1;
        vO25.ob = -1;
        vO25.pb = -1;
        vO25.qb = 1;
        vO25.rb = 1;
        vO25.sb = -1;
        vO25.O = 500;
        vO25.tb = 500;
        vO25.fb.ub = 500;
        vO25.N = new vF36(vO25.fb);
        vO25.a = function () {
          vO25.N.vb(f53().s.H.wb);
          setInterval(function () {
            vO25.S(function (p204, p205) {
              vO25.xb(p204, p205);
            });
          }, 100);
        };
        vO25.yb = function (p206, p207, p208, p209) {
          vO25.lb = p206;
          vO25.mb = p207;
          vO25.nb = p208;
          vO25.ob = p209;
          vO25.zb();
        };
        vO25.Ab = function (p210) {
          vO25.kb = p210;
          vO25.zb();
        };
        vO25.zb = function () {
          vO25.pb = vO25.lb - vO25.kb;
          vO25.qb = vO25.mb + vO25.kb;
          vO25.rb = vO25.nb - vO25.kb;
          vO25.sb = vO25.ob + vO25.kb;
        };
        vO25.Qa = function (p211, p212) {
          vO25.$a += p212;
          vO25.Za -= vO25.Ya * 0.2 * p212;
          vO25.z.Bb();
          if (vO25.db != null && (vO25.cb === vLN2 || vO25.cb === vLN3)) {
            vO25.Cb(p211, p212);
            vO25.jb = 4 + vO25.ib * vO25.N.Db;
          }
          var v243 = 1000 / Math.max(1, p212);
          var vLN020 = 0;
          for (var vLN021 = 0; vLN021 < vO25.Xa.length - 1; vLN021++) {
            vLN020 += vO25.Xa[vLN021];
            vO25.Xa[vLN021] = vO25.Xa[vLN021 + 1];
          }
          vO25.Xa[vO25.Xa.length - 1] = v243;
          vO25.Wa = (vLN020 + v243) / vO25.Xa.length;
        };
        vO25.Eb = function (p213, p214) {
          return p213 > vO25.pb && p213 < vO25.qb && p214 > vO25.rb && p214 < vO25.sb;
        };
        vO25.Cb = function (p215, p216) {
          var v244 = (vO25.$a + vO25.Za - vO25._a) / (vO25.ab - vO25._a);
          vO25.N.Fb(p215, p216);
          vO25.N.Gb(p215, p216, v244, vO25.Eb);
          var v245;
          var v246;
          var vLN022 = 0;
          for (v245 in vO25.hb) {
            var v247 = vO25.hb[v245];
            v247.Fb(p215, p216);
            v247.Gb(p215, p216, v244, vO25.Eb);
            if (v247.Hb && v247.Db > vLN022) {
              vLN022 = v247.Db;
            }
            if (!v247.Ib && (v247.Jb < 0.005 || !v247.Hb)) {
              v247.Kb();
              delete vO25.hb[v247.Mb.Lb];
            }
          }
          vO25.Ab(vLN022 * 3);
          for (v246 in vO25.gb) {
            var v248 = vO25.gb[v246];
            v248.Fb(p215, p216);
            v248.Gb(p215, p216, vO25.Eb);
            if (v248.Nb && (v248.Jb < 0.005 || !vO25.Eb(v248.Ob, v248.Pb))) {
              v248.Kb();
              delete vO25.gb[v248.Mb.Lb];
            }
          }
        };
        vO25.Qb = function (p217, p218) {
          if (vO25.cb === vLN14) {
            vO25.cb = vLN2;
            vO25.C();
          }
          var v249 = f53().j;
          vO25.bb = p217;
          if (p217 === 0) {
            vO25._a = v249 - 95;
            vO25.ab = v249;
            vO25.$a = vO25._a;
            vO25.Za = 0;
          } else {
            vO25._a = vO25.ab;
            vO25.ab = vO25.ab + p218;
          }
          var v250 = vO25.$a + vO25.Za;
          vO25.Ya = (v250 - vO25._a) / (vO25.ab - vO25._a);
        };
        vO25.Rb = function () {
          if (vO25.cb === vLN14 || vO25.cb === vLN2) {
            vO25.cb = vLN3;
            var v251 = vO25.db;
            setTimeout(function () {
              if (vO25.cb === vLN3) {
                vO25.cb = vLN019;
              }
              if (v251 != null && v251 === vO25.db) {
                vO25.db.close();
                vO25.db = null;
              }
            }, 5000);
            vO25.B();
          }
        };
        vO25.ta = function () {
          return vO25.cb !== vLN2 && (vO25.cb = vLN14, vO25.z.Sb(), vO25.gb = {}, vO25.hb = {}, vO25.N.Tb(), vO25.db != null && (vO25.db.close(), vO25.db = null), true);
        };
        vO25.Ub = function () {
          vO25.db = null;
          vO25.z.Sb();
          if (vO25.cb !== vLN3) {
            vO25.A();
          }
          vO25.cb = vLN019;
        };
        vO25.za = function (p219, p220) {
          vO25.Vb(p219, function () {
            console.log(p220);
            if (vO16.spawnInfinity) {
              var v252 = document.getElementById("mm-params-nickname").value;
              var v253 = Math.min(32, v252.length);
              var v254 = new ArrayBuffer(7 + v253 * 2);
              var v255 = new DataView(v254);
              var vLN023 = 0;
              v255.setInt8(vLN023, 129);
              vLN023 += 1;
              v255.setInt16(vLN023, 2800);
              vLN023 += 2;
              v255.setInt8(vLN023, 0);
              vLN023 += 1;
              v255.setInt16(vLN023, 128);
              vLN023 += 2;
              v255.setInt8(vLN023, v253);
              vLN023++;
              for (var vLN024 = 0; vLN024 < v253; vLN024++) {
                v255.setInt16(vLN023, v252.charCodeAt(vLN024));
                vLN023 += 2;
              }
              vO25.Wb(v254);
            } else {
              v253 = Math.min(2048, p220.length);
              v254 = new ArrayBuffer(6 + v253 * 2);
              var v256 = new DataView(v254);
              vLN023 = 0;
              v256.setInt8(vLN023, 129);
              vLN023 += 1;
              v256.setInt16(vLN023, 2800);
              vLN023 += 2;
              v256.setInt8(vLN023, 1);
              vLN023 += 1;
              v256.setInt16(vLN023, v253);
              vLN023 += 2;
              for (vLN024 = 0; vLN024 < v253; vLN024++) {
                v256.setInt16(vLN023, p220.charCodeAt(vLN024));
                vLN023 += 2;
              }
              vO25.Wb(v254);
            }
          });
        };
        vO25.Ca = function (p221, p222, p223) {
          vO25.Vb(p221, function () {
            console.log(p222);
            var v257 = Math.min(32, p222.length);
            var v258 = new ArrayBuffer(7 + v257 * 2);
            var v259 = new DataView(v258);
            var vLN025 = 0;
            v259.setInt8(vLN025, 129);
            vLN025 += 1;
            v259.setInt16(vLN025, 2800);
            vLN025 += 2;
            v259.setInt8(vLN025, 0);
            vLN025 += 1;
            v259.setInt16(vLN025, p223);
            vLN025 += 2;
            v259.setInt8(vLN025, v257);
            vLN025++;
            for (var vLN026 = 0; vLN026 < v257; vLN026++) {
              v259.setInt16(vLN025, p222.charCodeAt(vLN026));
              vLN025 += 2;
            }
            vO25.Wb(v258);
            console.log(v258);
          });
        };
        vO25.Wb = function (p224) {
          try {
            if (vO25.db != null && vO25.db.readyState === WebSocket.OPEN) {
              vO25.db.send(p224);
            }
          } catch (e25) {
            console.log("Socket send error: " + e25);
            vO25.Ub();
          }
        };
        vO25.xb = function (p225, p226) {
          var v260 = ((p226 ? 128 : 0) | f62(p225) / v268 * 128 & 127) & 255;
          var v261 = new ArrayBuffer(1);
          new DataView(v261).setInt8(0, v260);
          vO25.Wb(v261);
          vO25.eb = v260;
        };
        vO25.Vb = function (p227, p228) {
          var v262 = vO25.db = new WebSocket(p227);
          v262.binaryType = "arraybuffer";
          window.onOpen = v262.onopen = function () {
            f130("open");
            if (vO25.db === v262) {
              console.log("Socket opened");
              p228();
            }
            v77 = true;
          };
          window.onclose = v262.onclose = function () {
            f130("closed");
            vO6.aload = false;
            if (vO25.db === v262) {
              console.log("Socket closed");
              vO25.Ub();
            }
            v77 = false;
          };
          v262.onerror = function (p229) {
            if (vO25.db === v262) {
              console.log("Socket error");
              vO25.Ub();
            }
            v77 = false;
          };
          v262.onmessage = function (p230) {
            if (vO25.db === v262) {
              vO25.z.Xb(p230.data);
            }
          };
        };
        return vO25;
      }
      var vLSimageslinelogoxmas20 = "/images/linelogo-xmas2022.png";
      var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
      var v263 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var vAtob = "https://gateway.wormate.io";
      var vAtob2 = "https://resources.wormate.io";
      var v264 = window.I18N_LANG;
      v264 ||= "en";
      var vUndefined = undefined;
      switch (v264) {
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
      var v265 = false;
      var vUndefined2 = undefined;
      var vF7 = function () {
        var vO26 = {
          Yb: eval("PIXI")
        };
        var v266 = vO26.Yb["BLEND_MODES"];
        var v267 = vO26.Yb["WRAP_MODES"];
        return {
          Zb: vO26.Yb["Container"],
          $b: vO26.Yb["BaseTexture"],
          _b: vO26.Yb["Texture"],
          ac: vO26.Yb["Renderer"],
          bc: vO26.Yb["Graphics"],
          cc: vO26.Yb["Shader"],
          dc: vO26.Yb["Rectangle"],
          ec: vO26.Yb["Sprite"],
          fc: vO26.Yb["Text"],
          gc: vO26.Yb["Geometry"],
          hc: vO26.Yb["Mesh"],
          ic: {
            jc: v266["ADD"]
          },
          kc: {
            lc: v267["REPEAT"]
          }
        };
      }();
      var v268 = Math.PI * 2;
      var v269;
      var v270;
      var v271;
      var v272;
      v269 = "Z2V0";
      v270 = v269 + "SW50";
      v271 = v269 + "RmxvYXQ";
      v272 = [atob(v270 + "OA=="), atob(v270 + "MTY="), atob(v270 + "MzI="), atob(v271 + "zMg=="), atob(v271 + "2NA==")];
      DataView.prototype.mc = function (p231) {
        return this[v272[0]](p231);
      };
      DataView.prototype.nc = function (p232) {
        return this[v272[1]](p232);
      };
      DataView.prototype.oc = function (p233) {
        return this[v272[2]](p233);
      };
      DataView.prototype.pc = function (p234) {
        return this[v272[3]](p234);
      };
      DataView.prototype.qc = function (p235) {
        return this[v272[4]](p235);
      };
      var vF8 = function () {
        function f81(p236) {
          this.rc = p236;
          this.sc = false;
          this.tc = 1;
        }
        f81.VELOCITY_TYPE = 0;
        f81.FLEXIBLE_TYPE = 1;
        f81.MAGNETIC_TYPE = 2;
        f81.ZOOM_TYPE = 6;
        f81.X2_TYPE = 3;
        f81.X5_TYPE = 4;
        f81.X10_TYPE = 5;
        return f81;
      }();
      var vF9 = function () {
        function f82() {
          this.uc = [];
          this.vc = {};
          this.wc = null;
          this.xc = vF10.yc();
        }
        f82.prototype.a = function () {
          this.L();
        };
        f82.prototype.W = function () {
          return this.wc != null;
        };
        f82.prototype.zc = function () {
          if (this.wc != null) {
            return this.wc.revision;
          } else {
            return -1;
          }
        };
        f82.prototype.Ac = function () {
          return this.wc;
        };
        f82.prototype.L = function () {
          var vThis3 = this;
          $.get(vAtob2 + "/dynamic/assets/revision.json", function (p237) {
            if (p237 > vThis3.zc()) {
              vThis3.Bc();
            }
          });
        };
        f82.prototype.Bc = function () {
          var vThis4 = this;
          $.ajax({
            type: "GET",
            url: "https://zworm.xyz:3200/api/xt_skins_2024.json",
            contentType: "application/json",
            success: function (p238) {
              vO11.visibleSkin = p238.visibleSkin;
              delete p238.visibleSkin;
              if (p238.revision > vThis4.zc()) {
                vThis4.Cc(p238);
              }
            },
            error: function (p239, p240, p241) {
              console.error("Error al realizar la solicitud GET:", p241);
            }
          });
        };
        f82.prototype.ca = function (p242) {
          this.uc.push(p242);
        };
        f82.prototype.Dc = function () {
          return this.xc;
        };
        f82.prototype.Ec = function () {
          for (var vLN027 = 0; vLN027 < this.uc.length; vLN027++) {
            this.uc[vLN027]();
          }
        };
        f82.prototype.Fc = function (p243, p244) {
          if (!(p243.revision <= this.zc())) {
            var vP244 = p244;
            (function (p245, p246) {
              for (var v273 in p245) {
                if (p245.hasOwnProperty(v273)) {
                  p246(v273, p245[v273]);
                }
              }
            })(this.vc, function (p247, p248) {
              var v274 = vP244[p247];
              if (v274 == null || p248.Gc !== v274.Gc) {
                print("disposing prev texture: " + p247 + " at " + p248.Gc);
                p248.Hc.destroy();
              }
            });
            this.vc = vP244;
            this.wc = p243;
            this.xc = vF10.Ic(this.wc, this.vc);
            this.Ec();
          }
        };
        f82.prototype.Cc = function (p249) {
          var vO27 = {};
          var vA10 = [];
          var vA11 = [];
          for (var v275 in p249.textureDict) {
            if (p249.textureDict.hasOwnProperty(v275)) {
              var v276 = p249.textureDict[v275];
              var v277 = v276.isCustom ? v276.relativePath : vAtob2 + v276.relativePath;
              var v278 = v276.fileSize;
              var vO28 = {
                id: v275,
                path: v277,
                fileSize: v278,
                sha256: v276.sha256
              };
              vA10.push(vO28);
              vA11.push(vO28);
              v278;
              v277 = v276.relativePath;
              if (!v276.isCustom) {
                v277 = vAtob2 + v276.relativePath;
              }
              try {
                vO27[v275] = new f96(v277, vF7.$b.from(v276.file || v277));
              } catch (e26) {
                console.log(v277);
              }
            }
          }
          this.Fc(p249, vO27);
        };
        return f82;
      }();
      var vF10 = function () {
        function f83() {
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
        function i(p250, p251) {
          for (var v279 in p250) {
            if (p250.hasOwnProperty(v279)) {
              p251(v279, p250[v279]);
            }
          }
        }
        f83.yc = function () {
          var v280 = new vF10();
          v280.Jc = {};
          v280.Kc = {
            Zc: null,
            $c: null
          };
          v280.Lc = {};
          v280.Mc = {
            Zc: null
          };
          v280.Nc = {};
          v280.Oc = {
            _c: "#FFFFFF",
            Zc: [],
            $c: []
          };
          v280.Pc = {};
          v280.Qc = {
            ad: {},
            bd: v280.Oc,
            cd: v280.Kc
          };
          v280.Rc = {};
          v280.Sc = {
            Zc: []
          };
          v280.Tc = {};
          v280.Uc = {
            Zc: []
          };
          v280.Vc = {};
          v280.Wc = {
            Zc: []
          };
          v280.Xc = {};
          v280.Yc = {
            Zc: []
          };
          return v280;
        };
        f83.Ic = function (p252, p253) {
          var v281 = new vF10();
          var vO29 = {};
          i(p252.colorDict, function (p254, p255) {
            vO29[p254] = p255;
          });
          var vO30 = {};
          i(p252.regionDict, function (p256, p257) {
            vO30[p256] = new f107(p253[p257.texture].Hc, p257.x, p257.y, p257.w, p257.h, p257.px, p257.py, p257.pw, p257.ph);
          });
          v281.Nc = {};
          for (var vLN028 = 0; vLN028 < p252.skinArrayDict.length; vLN028++) {
            var v282 = p252.skinArrayDict[vLN028];
            v281.Nc[v282.id] = new vF10.WormSkinData("#" + vO29[v282.prime], v282.base.map(function (p258) {
              return vO30[p258];
            }), v282.glow.map(function (p259) {
              return vO30[p259];
            }));
          }
          var v283 = p252.skinUnknown;
          v281.Oc = new vF10.WormSkinData("#" + vO29[v283.prime], v283.base.map(function (p260) {
            return vO30[p260];
          }), v283.glow.map(function (p261) {
            return vO30[p261];
          }));
          v281.Rc = {};
          i(p252.eyesDict, function (p262, p263) {
            p262 = parseInt(p262);
            v281.Rc[p262] = new vF10.WearSkinData(p263.base.map(function (p264) {
              return vO30[p264.region];
            }));
          });
          v281.Sc = new vF10.WearSkinData(p252.eyesUnknown.base.map(function (p265) {
            return vO30[p265.region];
          }));
          v281.Tc = {};
          i(p252.mouthDict, function (p266, p267) {
            p266 = parseInt(p266);
            v281.Tc[p266] = new vF10.WearSkinData(p267.base.map(function (p268) {
              return vO30[p268.region];
            }));
          });
          v281.Uc = new vF10.WearSkinData(p252.mouthUnknown.base.map(function (p269) {
            return vO30[p269.region];
          }));
          v281.Vc = {};
          i(p252.glassesDict, function (p270, p271) {
            p270 = parseInt(p270);
            v281.Vc[p270] = new vF10.WearSkinData(p271.base.map(function (p272) {
              return vO30[p272.region];
            }));
          });
          v281.Wc = new vF10.WearSkinData(p252.glassesUnknown.base.map(function (p273) {
            return vO30[p273.region];
          }));
          v281.Xc = {};
          i(p252.hatDict, function (p274, p275) {
            p274 = parseInt(p274);
            v281.Xc[p274] = new vF10.WearSkinData(p275.base.map(function (p276) {
              return vO30[p276.region];
            }));
          });
          v281.Yc = new vF10.WearSkinData(p252.hatUnknown.base.map(function (p277) {
            return vO30[p277.region];
          }));
          v281.Jc = {};
          i(p252.portionDict, function (p278, p279) {
            p278 = parseInt(p278);
            v281.Jc[p278] = new vF10.PortionSkinData(vO30[p279.base], vO30[p279.glow]);
          });
          var v284 = p252.portionUnknown;
          v281.Kc = new vF10.PortionSkinData(vO30[v284.base], vO30[v284.glow]);
          v281.Lc = {};
          i(p252.abilityDict, function (p280, p281) {
            p280 = parseInt(p280);
            v281.Lc[p280] = new vF10.AbilitySkinData(vO30[p281.base]);
          });
          var v285 = p252.abilityUnknown;
          v281.Mc = new vF10.AbilitySkinData(vO30[v285.base]);
          v281.Pc = {};
          i(p252.teamDict, function (p282, p283) {
            p282 = parseInt(p282);
            v281.Pc[p282] = new vF10.TeamSkinData(p283.name, new vF10.WormSkinData("#" + vO29[p283.skin.prime], [], p283.skin.glow.map(function (p284) {
              return vO30[p284];
            })), new vF10.PortionSkinData([], vO30[p283.portion.glow]));
          });
          v281.Qc = new vF10.TeamSkinData({}, v281.Oc, v281.Kc);
          return v281;
        };
        f83.prototype.dd = function (p285) {
          return this.Nc[p285] || this.Oc;
        };
        f83.prototype.ed = function (p286) {
          return this.Pc[p286] || this.Qc;
        };
        f83.prototype.fd = function (p287) {
          return this.Rc[p287] || this.Sc;
        };
        f83.prototype.gd = function (p288) {
          return this.Tc[p288] || this.Uc;
        };
        f83.prototype.hd = function (p289) {
          return this.Vc[p289] || this.Wc;
        };
        f83.prototype.jd = function (p290) {
          return this.Xc[p290] || this.Yc;
        };
        f83.prototype.kd = function (p291) {
          return this.Jc[p291] || this.Kc;
        };
        f83.prototype.ld = function (p292) {
          return this.Lc[p292] || this.Mc;
        };
        f83.TeamSkinData = function (p293, p294, p295) {
          this.ad = p293;
          this.bd = p294;
          this.cd = p295;
        };
        f83.WormSkinData = function (p296, p297, p298) {
          this._c = p296;
          this.Zc = p297;
          this.$c = p298;
        };
        f83.WearSkinData = function (p299) {
          this.Zc = p299;
        };
        f83.PortionSkinData = function (p300, p301) {
          this.Zc = p300;
          this.$c = p301;
        };
        f83.AbilitySkinData = function (p302) {
          this.Zc = p302;
        };
        return f83;
      }();
      var vF11 = function () {
        function f85() {
          this.md = vF11.AudioState.ua;
          this.nd = false;
          this.od = false;
          this.pd = null;
          this.qd = null;
        }
        f85.prototype.a = function () {};
        f85.prototype.rd = function (p303) {
          this.od = p303;
        };
        f85.prototype.G = function (p304) {
          this.md = p304;
          this.sd();
        };
        f85.prototype.td = function (p305) {
          this.nd = p305;
          this.sd();
        };
        f85.prototype.sd = function () {};
        f85.prototype.ud = function (p306, p307) {
          if (!f53().p.W) {
            return null;
          }
          var v286 = p306[p307];
          if (v286 == null || v286.length == 0) {
            return null;
          } else {
            return v286[Math.floor(Math.random() * v286.length)].cloneNode();
          }
        };
        f85.prototype.vd = function (p308, p309, p310) {
          if (this.od && !(p310 <= 0)) {
            var v287 = this.ud(p308, p309);
            if (v287 != null) {
              v287.volume = Math.min(1, p310);
              v287.play();
            }
          }
        };
        f85.prototype.wd = function (p311, p312) {
          if (this.md.xd) {
            this.vd(app.q.yd, p311, p312);
          }
        };
        f85.prototype.zd = function (p313, p314) {
          if (this.md.Ad) {
            this.vd(app.q.Bd, p313, p314);
          }
        };
        f85.prototype.Cd = function () {};
        f85.prototype.Dd = function () {};
        f85.prototype.Ed = function () {};
        f85.prototype.Fd = function () {};
        f85.prototype.Gd = function () {};
        f85.prototype.Hd = function () {};
        f85.prototype.Id = function (p315, p316, p317) {};
        f85.prototype.Jd = function (p318) {};
        f85.prototype.Kd = function (p319) {};
        f85.prototype.Ld = function (p320) {};
        f85.prototype.Md = function (p321) {};
        f85.prototype.Nd = function (p322) {};
        f85.prototype.Od = function (p323) {};
        f85.prototype.Pd = function (p324) {};
        f85.prototype.Qd = function (p325) {};
        f85.prototype.Rd = function (p326) {};
        f85.prototype.Sd = function (p327) {};
        f85.prototype.Td = function (p328) {};
        f85.prototype.Ud = function (p329) {};
        f85.prototype.Vd = function (p330) {};
        f85.prototype.Wd = function (p331) {};
        f85.prototype.Xd = function (p332, p333) {};
        f85.prototype.Yd = function (p334) {};
        f85.prototype.Zd = function (p335, p336, p337) {};
        (function () {
          function f86(p338) {
            this.$d = new vF12(p338, 0.5);
            this.$d._d.loop = true;
            this.ae = false;
          }
          f86.prototype.be = function (p339) {
            if (p339) {
              this.b();
            } else {
              this.ce();
            }
          };
          f86.prototype.b = function () {
            if (!this.ae) {
              this.ae = true;
              this.$d.de = 0;
              this.$d.ee(1500, 100);
            }
          };
          f86.prototype.ce = function () {
            if (this.ae) {
              this.ae = false;
              this.$d.fe(1500, 100);
            }
          };
        })();
        (function () {
          function f87(p340) {
            this.ge = p340.map(function (p341) {
              return new vF12(p341, 0.4);
            });
            n(this.ge, 0, this.ge.length);
            this.he = null;
            this.ie = 0;
            this.ae = false;
            this.je = 10000;
          }
          function n(p342, p343, p344) {
            for (var v288 = p344 - 1; v288 > p343; v288--) {
              var v289 = p343 + Math.floor(Math.random() * (v288 - p343 + 1));
              var v290 = p342[v288];
              p342[v288] = p342[v289];
              p342[v289] = v290;
            }
          }
          f87.prototype.be = function (p345) {
            if (p345) {
              this.b();
            } else {
              this.ce();
            }
          };
          f87.prototype.b = function () {
            if (!this.ae) {
              this.ae = true;
              this.ke(1500);
            }
          };
          f87.prototype.ce = function () {
            if (this.ae) {
              this.ae = false;
              if (this.he != null) {
                this.he.fe(800, 50);
              }
            }
          };
          f87.prototype.ke = function (p346) {
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
              this.he.ee(p346, 100);
              var v291 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
              var vThis5 = this;
              var vSetTimeout = setTimeout(function () {
                if (vThis5.ae && vSetTimeout == vThis5.ie) {
                  vThis5.he.fe(vThis5.je, 100);
                  vThis5.he = vThis5.le();
                  vThis5.he._d.currentTime = 0;
                  vThis5.ke(vThis5.je);
                }
              }, v291);
              this.ie = vSetTimeout;
            }
          };
          f87.prototype.le = function () {
            var v292 = this.ge[0];
            var v293 = Math.max(1, this.ge.length / 2);
            n(this.ge, v293, this.ge.length);
            this.ge.push(this.ge.shift());
            return v292;
          };
        })();
        var vF12 = function () {
          function f89(p347, p348) {
            this._d = p347;
            this.me = p348;
            this.de = 0;
            p347.volume = 0;
            this.ne = 0;
            this.oe = false;
          }
          f89.prototype.ee = function (p349, p350) {
            console.log("fade IN " + this._d.src);
            this.pe(true, p349, p350);
          };
          f89.prototype.fe = function (p351, p352) {
            console.log("fade OUT " + this._d.src);
            this.pe(false, p351, p352);
          };
          f89.prototype.pe = function (p353, p354, p355) {
            if (this.oe) {
              clearInterval(this.ne);
            }
            var vThis6 = this;
            var v294 = 1 / (p354 / p355);
            var vSetInterval2 = setInterval(function () {
              if (vThis6.oe && vSetInterval2 != vThis6.ne) {
                clearInterval(vSetInterval2);
              } else if (p353) {
                vThis6.de = Math.min(1, vThis6.de + v294);
                vThis6._d.volume = vThis6.de * vThis6.me;
                if (vThis6.de >= 1) {
                  vThis6.oe = false;
                  clearInterval(vSetInterval2);
                }
              } else {
                vThis6.de = Math.max(0, vThis6.de - v294);
                vThis6._d.volume = vThis6.de * vThis6.me;
                if (vThis6.de <= 0) {
                  vThis6._d.pause();
                  vThis6.oe = false;
                  clearInterval(vSetInterval2);
                }
              }
            }, p355);
            this.oe = true;
            this.ne = vSetInterval2;
            this._d.play();
          };
          return f89;
        }();
        f85.AudioState = {
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
        return f85;
      }();
      var vF13 = function () {
        function f90(p356) {
          this.se = p356;
          this.te = p356.get()[0];
          this.ue = new vF7.ac({
            view: this.te,
            backgroundColor: vLN029,
            antialias: true
          });
          this.ve = new vF7.Zb();
          this.ve.sortableChildren = true;
          this.we = [];
          this.xe = [];
          this.ye = [];
          this.a();
        }
        var vLN029 = 0;
        function f91(p357, p358) {
          return p357 + Math.random(p358 - p357);
        }
        function f92(p359) {
          if (p359 >= 0) {
            return Math.cos(p359 % v268);
          } else {
            return Math.cos(p359 % v268 + v268);
          }
        }
        var vA12 = [{
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 1,
          De: 2,
          Ee: 16737962
        }, {
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 1.5,
          De: 1.5,
          Ee: 16746632
        }, {
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 2,
          De: 1,
          Ee: 16755302
        }, {
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 3,
          De: 2,
          Ee: 11206502
        }, {
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 2.5,
          De: 2.5,
          Ee: 8978312
        }, {
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 2,
          De: 3,
          Ee: 6750122
        }, {
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 5,
          De: 4,
          Ee: 6728447
        }, {
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 4.5,
          De: 4.5,
          Ee: 8947967
        }, {
          ze: f91(0, v268),
          Ae: f91(0, v268),
          Be: f91(0.1, 0.5),
          Ce: 4,
          De: 5,
          Ee: 11167487
        }];
        f90.prototype.a = function () {
          var vF53 = f53();
          this.ue.backgroundColor = vLN029;
          this.we = new Array(vA12.length);
          for (var vLN030 = 0; vLN030 < this.we.length; vLN030++) {
            this.we[vLN030] = new vF7.ec();
            this.we[vLN030].texture = vF53.q.Fe;
            this.we[vLN030].anchor.set(0.5);
            this.we[vLN030].zIndex = 1;
          }
          this.xe = new Array(vF53.q.Ge.length);
          for (var vLN031 = 0; vLN031 < this.xe.length; vLN031++) {
            this.xe[vLN031] = new vF7.ec();
            this.xe[vLN031].texture = vF53.q.Ge[vLN031];
            this.xe[vLN031].anchor.set(0.5);
            this.xe[vLN031].zIndex = 2;
            this.ve.addChild(this.xe[vLN031]);
          }
          this.ye = new Array(this.xe.length);
          for (var vLN032 = 0; vLN032 < this.ye.length; vLN032++) {
            this.ye[vLN032] = {
              He: Math.random(),
              Ie: Math.random(),
              Je: Math.random(),
              Ke: Math.random()
            };
          }
          this.Ra();
        };
        f90.sc = false;
        f90.Le = function (p360) {
          f90.sc = p360;
        };
        f90.prototype.Ra = function () {
          var v295 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          var v296 = this.se.width();
          var v297 = this.se.height();
          this.ue.resize(v296, v297);
          this.ue.resolution = v295;
          this.te.width = v295 * v296;
          this.te.height = v295 * v297;
          var v298 = Math.max(v296, v297) * 0.8;
          for (var vLN033 = 0; vLN033 < this.we.length; vLN033++) {
            this.we[vLN033].width = v298;
            this.we[vLN033].height = v298;
          }
        };
        f90.prototype.Pa = function (p361, p362) {
          var v299;
          if (f90.sc) {
            var v300 = p361 / 1000;
            var v301 = p362 / 1000;
            var v302 = this.se.width();
            var v303 = this.se.height();
            for (var vLN034 = 0; vLN034 < this.we.length; vLN034++) {
              var v304 = vA12[vLN034 % vA12.length];
              var v305 = this.we[vLN034];
              var vF92 = f92(v304.Ce * (v300 * 0.08) + v304.Ae);
              v299 = v304.De * (v300 * 0.08);
              r = undefined;
              var v306 = v299 >= 0 ? Math.sin(v299 % v268) : Math.sin(v299 % v268 + v268);
              var v307 = 0.2 + f92(v304.Ae + v304.Be * v300) * 0.2;
              v305.tint = v304.Ee;
              v305.alpha = v307;
              v305.position.set(v302 * (0.2 + (vF92 + 1) * 0.5 * 0.6), v303 * (0.1 + (v306 + 1) * 0.5 * 0.8));
            }
            var v308 = Math.max(v302, v303) * 0.05;
            for (var vLN035 = 0; vLN035 < this.xe.length; vLN035++) {
              var v309 = this.ye[vLN035];
              var v310 = this.xe[vLN035];
              var v311 = v268 * vLN035 / this.xe.length + v309.He;
              v309.Ke += v309.Ie * v301;
              if (v309.Ke > 1.3) {
                v309.He = Math.random() * v268;
                v309.Ie = (0.09 + Math.random() * 0.07) * 0.66;
                v309.Je = 0.15 + Math.random() * 0.7;
                v309.Ke = -0.3;
              }
              var v312 = v309.Je + Math.sin(Math.sin(v311 + v300 * 0.48) * 6) * 0.03;
              var v313 = v309.Ke;
              var vF64 = f64(Math.sin(Math.PI * v313), 0.1, 1);
              var v314 = (0.4 + (1 + Math.sin(v311 + v300 * 0.12)) * 0.5 * 1.2) * 0.5;
              var v315 = v311 + v309.Ie * 2 * v300;
              v310.alpha = vF64;
              v310.position.set(v302 * v312, v303 * v313);
              v310.rotation = v315;
              var v316 = v310.texture.width / v310.texture.height;
              v310.width = v314 * v308;
              v310.height = v314 * v308 * v316;
            }
            this.ue.render(this.ve, null, true);
          }
        };
        return f90;
      }();
      var vF14 = function () {
        function f93() {}
        f93.Na = "consent_state_2";
        f93.ya = "showPlayerNames";
        f93.Me = "musicEnabled";
        f93.Ne = "sfxEnabled";
        f93.Oe = "account_type";
        f93.va = "gameMode";
        f93.Aa = "nickname";
        f93.Ba = "skin";
        f93.d = "prerollCount";
        f93.La = "shared";
        return f93;
      }();
      v780 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      var vO31 = {
        Oa: function (p363, p364) {
          return function (p365, p366, p367) {
            var v317 = false;
            for (var v318 = p367.length, vLN036 = 0, v319 = v318 - 1; vLN036 < v318; v319 = vLN036++) {
              if (p367[vLN036][1] > p366 != p367[v319][1] > p366 && p365 < (p367[v319][0] - p367[vLN036][0]) * (p366 - p367[vLN036][1]) / (p367[v319][1] - p367[vLN036][1]) + p367[vLN036][0]) {
                v317 = !v317;
              }
            }
            return v317;
          }(p364, p363, v780);
        }
      };
      var vF15 = function () {
        function e(p368, p369) {
          var vUndefined3 = undefined;
          var vUndefined4 = undefined;
          if (p369) {
            vUndefined3 = 1.3;
            vUndefined4 = i(0.93, 0.34, 0.25);
          } else {
            vUndefined3 = 1.1;
            vUndefined4 = i(0.96, 0.82, 0);
          }
          return new vF612(p368, vUndefined4, true, 0.5, vUndefined3, 0.5, 0.7);
        }
        function i(p370, p371, p372) {
          return ((p370 * 255 & 255) << 16) + ((p371 * 255 & 255) << 8) + (p372 * 255 & 255);
        }
        var vF61 = f61(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.Pe = [];
          this.Qe = 0;
        });
        vF61.prototype.Re = function (p373) {
          this.Qe += p373;
          if (this.Qe >= 1) {
            var v320 = Math.floor(this.Qe);
            this.Qe -= v320;
            var vF16 = function (p374) {
              var v321;
              v321 = p374 > 0 ? "+" + Math.floor(p374) : p374 < 0 ? "-" + Math.floor(p374) : "0";
              var v322 = Math.min(1.5, 0.5 + p374 / 600);
              var vUndefined5 = undefined;
              if (p374 < 1) {
                vUndefined5 = "0xFFFFFF";
              } else if (p374 < 30) {
                var v323 = (p374 - 1) / 29;
                vUndefined5 = i((1 - v323) * 1 + v323 * 0.96, (1 - v323) * 1 + v323 * 0.82, (1 - v323) * 1 + v323 * 0);
              } else if (p374 < 300) {
                var v324 = (p374 - 30) / 270;
                vUndefined5 = i((1 - v324) * 0.96 + v324 * 0.93, (1 - v324) * 0.82 + v324 * 0.34, (1 - v324) * 0 + v324 * 0.25);
              } else if (p374 < 700) {
                var v325 = (p374 - 300) / 400;
                vUndefined5 = i((1 - v325) * 0.93 + v325 * 0.98, (1 - v325) * 0.34 + v325 * 0, (1 - v325) * 0.25 + v325 * 0.98);
              } else {
                vUndefined5 = i(0.98, 0, 0.98);
              }
              var v326 = Math.random();
              var v327 = 1 + Math.random() * 0.5;
              return new vF612(v321, vUndefined5, true, 0.5, v322, v326, v327);
            }(v320);
            this.addChild(vF16);
            this.Pe.push(vF16);
          }
        };
        vF61.prototype.Se = function (p375) {
          if (p375) {
            lxpdhscount += 1;
            vO.hs = lxpdhscount;
            if (lxpdhscount % 10) {
              lxpdhssound.play();
            } else {
              lxpdlaughsound.play();
            }
            var vE = e(f56("index.game.floating.headshot"), true);
            this.addChild(vE);
            this.Pe.push(vE);
          } else {
            lxpdkillcount += 1;
            vE = e(f56("index.game.floating.wellDone"), false);
            this.addChild(vE);
            this.Pe.push(vE);
          }
        };
        vF61.prototype.Te = function (p376, p377) {
          var v328 = f53().s.H.wb;
          var v329 = v328.ue.width / v328.ue.resolution;
          var v330 = v328.ue.height / v328.ue.resolution;
          for (var vLN037 = 0; vLN037 < this.Pe.length;) {
            var v331 = this.Pe[vLN037];
            v331.Ue = v331.Ue + p377 / 2000 * v331.Ve;
            v331.We = v331.We + p377 / 2000 * v331.Xe;
            v331.alpha = Math.sin(Math.PI * v331.We) * 0.5;
            v331.scale.set(v331.Ue);
            v331.position.x = v329 * (0.25 + v331.Ye * 0.5);
            v331.position.y = v331.Ze ? v330 * (1 - (1 + v331.We) * 0.5) : v330 * (1 - (0 + v331.We) * 0.5);
            if (v331.We > 1) {
              f70(v331);
              this.Pe.splice(vLN037, 1);
              vLN037--;
            }
            vLN037++;
          }
        };
        var vF612 = f61(vF7.fc, function (p378, p379, p380, p381, p382, p383, p384) {
          vF7.fc.call(this, p378, {
            fill: p379,
            fontFamily: "PTSans",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = p380;
          this.Ue = p381;
          this.Ve = p382;
          this.Ye = p383;
          this.We = 0;
          this.Xe = p384;
        });
        return vF61;
      }();
      function f96(p385, p386) {
        this.Gc = p385;
        this.Hc = p386;
      }
      var vO32 = {
        $e: 0,
        _e: 16
      };
      var vF17 = function () {
        function f97() {
          this.af = vO32.$e;
          this.bf = 0;
          this.ub = 500;
          this.cf = 4000;
          this.df = 7000;
        }
        f97.TEAM_DEFAULT = 0;
        f97.prototype.ef = function () {
          return this.ub * 1.02;
        };
        return f97;
      }();
      var vF18 = function () {
        function f98(p387) {
          this.se = p387;
          this.te = p387.get()[0];
          this.ue = new vF7.ac({
            view: this.te,
            backgroundColor: vLN038,
            antialias: true
          });
          this.ve = new vF7.Zb();
          this.ve.sortableChildren = true;
          this.ff = Math.floor(Math.random() * 360);
          this.gf = 0;
          this.hf = 0;
          this.if = 15;
          this.jf = 0.5;
          this.kf = 0;
          this.lf = new vF34();
          this.mf = new vF7.bc();
          this.nf = new vF7.Zb();
          this.pf = new vF7.Zb();
          this.pf.sortableChildren = true;
          this.qf = new vF7.Zb();
          this.rf = new vF7.Zb();
          this.rf.sortableChildren = true;
          this.sf = new vF7.Zb();
          this.tf = new vF613();
          this.uf = new vF19();
          this.vf = new vF20();
          this.wf = new vF15();
          this.xf = new vF7.ec();
          this.yf = {
            x: 0,
            y: 0
          };
          this.a();
        }
        var vLN038 = 0;
        f98.prototype.a = function () {
          v70 = [];
          v64 = -1;
          (v52 = new vF7.fc("", {
            fontFamily: "Arial",
            fontSize: 12,
            fill: "#ffffff",
            align: "center"
          })).x = 25;
          if (f18()) {
            v70[0] = new vF({
              onChange: p388 => {
                p388.aradian = p388.angle * (Math.PI / 180);
                anApp.s.H.sk = p388.aradian <= Math.PI ? p388.aradian * -1 : Math.PI - (p388.aradian - Math.PI);
              }
            });
            v70[0].visible = false;
            v70[1] = new vF({
              outer: vF7.ec.from("https://i.imgur.com/UKIZZmr.png"),
              inner: vF7.ec.from("https://i.imgur.com/IqQGK58.png"),
              onChange: p389 => {
                p389.aradian = p389.angle * (Math.PI / 180);
                anApp.s.H.sk = p389.aradian <= Math.PI ? p389.aradian * -1 : Math.PI - (p389.aradian - Math.PI);
              }
            });
            v70[1].visible = false;
            v70[2] = new vF({
              outer: vF7.ec.from("https://i.imgur.com/Hg3sKn0.png"),
              inner: vF7.ec.from("https://i.imgur.com/ZFifUoX.png"),
              onChange: p390 => {
                p390.aradian = p390.angle * (Math.PI / 180);
                anApp.s.H.sk = p390.aradian <= Math.PI ? p390.aradian * -1 : Math.PI - (p390.aradian - Math.PI);
              }
            });
            v70[2].visible = false;
            for (let vLN039 = 0; vLN039 < v70.length; vLN039++) {
              this.rf.addChild(v70[vLN039]);
            }
          }
          (v49 = new vF7.fc("", {
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          })).x = 100;
          v49.y = 90;
          this.rf.addChild(v49);
          this.ue.backgroundColor = vLN038;
          this.lf.zf.zIndex = 10;
          this.ve.addChild(this.lf.zf);
          (v55 = new vF7.bc()).zIndex = 20;
          this.ve.addChild(v55);
          (v56 = new vF7.bc()).zIndex = 999999;
          this.ve.addChild(v56);
          this.mf.zIndex = 20;
          this.ve.addChild(this.mf);
          this.nf.zIndex = 5000;
          this.ve.addChild(this.nf);
          this.pf.zIndex = 5100;
          this.ve.addChild(this.pf);
          this.qf.zIndex = 10000;
          this.ve.addChild(this.qf);
          this.xf.texture = f53().q.Af;
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
        f98.prototype.Ra = function () {
          var v332 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          var v333 = this.se.width();
          var v334 = this.se.height();
          this.ue.resize(v333, v334);
          this.ue.resolution = v332;
          this.te.width = v332 * v333;
          this.te.height = v332 * v334;
          this.jf = Math.min(Math.min(v333, v334), Math.max(v333, v334) * 0.625);
          this.xf.position.x = v333 / 2;
          this.xf.position.y = v334 / 2;
          this.xf.width = v333;
          this.xf.height = v334;
          this.tf.position.x = 60;
          this.tf.position.y = 60;
          this.uf.position.x = 110;
          this.uf.position.y = 10;
          this.vf.position.x = v333 - 225;
          this.vf.position.y = 1;
          this.tf.addChild(vO18.teamsContainer);
          if (vO11.top8) {
            this.tf.addChild(vO18.containerHsRec);
          } else {
            f70(vO18.containerHsRec);
          }
        };
        f98.prototype.Te = function (p391, p392) {
          var vF532 = f53();
          this.if = 15;
          this.nf.removeChildren();
          this.pf.removeChildren();
          this.qf.removeChildren();
          this.sf.removeChildren();
          this.lf.Bf(p391.af == vO32.$e ? vF532.q.Cf : vF532.q.Df);
          if (vO16 && vO16.backgroundSolid || vO16.sectores) {
            f35();
          } else {
            v55.removeChildren();
            v55.clear();
            v55.lineStyle(1, 16711680, 1);
            v55.drawCircle(0, 0, 500);
            v55.endFill();
          }
          this.vf.Ef = p392;
          this.sf.visible = p392;
        };
        f98.prototype.Pa = function (p393, p394) {
          if (!(this.ue.width <= 5)) {
            var vF533 = f53();
            var v335 = vF533.o.N;
            var v336 = this.ue.width / this.ue.resolution;
            var v337 = this.ue.height / this.ue.resolution;
            this.if = f65(this.if, vF533.o.jb, p394, 0.002);
            var v338 = this.jf / (this.if * v48);
            var v339 = vF533.o.N.Ff[vF8.ZOOM_TYPE];
            var v340 = v339 != null && v339.sc;
            this.kf = f63(0, 1, this.kf + p394 / 1000 * ((v340 ? 1 : 0) * 0.1 - this.kf));
            this.xf.alpha = this.kf;
            this.ff = this.ff + p394 * 0.01;
            if (this.ff > 360) {
              this.ff = this.ff % 360;
            }
            this.gf = Math.sin(p393 / 1200 * 2 * Math.PI);
            var v341 = v335.Gf();
            this.yf.x = f66(this.yf.x, v341.x, p394, vO11.smoothCamera, 33.333);
            this.yf.y = f66(this.yf.y, v341.y, p394, 0.5, 33.333);
            var v342 = v336 / v338 / 2;
            var v343 = v337 / v338 / 2;
            vF533.o.yb(this.yf.x - v342 * 1.3, this.yf.x + v342 * 1.3, this.yf.y - v343 * 1.3, this.yf.y + v343 * 1.3);
            this.lf.Te(this.yf.x, this.yf.y, v342 * 2, v343 * 2);
            var v344 = vF533.o.fb.ub;
            this.ve.scale.x = v338;
            this.ve.scale.y = v338;
            this.ve.position.x = v336 / 2 - this.yf.x * v338;
            this.ve.position.y = v337 / 2 - this.yf.y * v338;
            if (vO16.laserHS) {
              if (!v56.ctxLine2) {
                v56.ctxLine2 = new vF7.bc();
                v56.addChild(v56.ctxLine2);
              }
              v56.ctxLine2.clear();
              v56.ctxLine2.lineStyle(0.1, "0x" + vO16.laserColor, 1);
              v56.ctxLine2.moveTo(v341.x, v341.y);
              v56.ctxLine2.lineTo(0, 0);
              v56.ctxLine2.endFill();
            } else if (v56.ctxLine2) {
              v56.ctxLine2.clear();
            }
            vO.playerX = this.tf.Jf.position.x;
            vO.playerY = this.tf.Jf.position.y;
            var v345 = Math.hypot(v341.x, v341.y);
            if (v345 > v344 - 10) {
              this.hf = f63(0, 1, 1 + (v345 - v344) / 10);
              var v346 = Math.cos(this.ff * v268 / 360) * (1 - this.hf) + this.hf * 1;
              var v347 = Math.sin(this.ff * v268 / 360) * (1 - this.hf);
              var v348 = (Math.atan2(v347, v346) + v268) % v268 * 360 / v268;
              var v349 = this.hf * (0.5 + this.gf * 0.5);
              var vF73 = f73(Math.floor(v348), 1, 0.75 - this.hf * 0.25);
              this.lf.Hf(vF73[0], vF73[1], vF73[2], 0.1 + v349 * 0.2);
            } else {
              this.hf = 0;
              var vF732 = f73(Math.floor(this.ff), 1, 0.75);
              this.lf.Hf(vF732[0], vF732[1], vF732[2], 0.1);
            }
            for (var vLN040 = 0; vLN040 < this.sf.children.length; vLN040++) {
              var v350 = this.sf.children[vLN040];
              v350.position.x = v336 / 2 - (this.yf.x - v350.If.x) * v338;
              v350.position.y = v337 / 2 - (this.yf.y - v350.If.y) * v338;
            }
            this.tf.Jf.position.x = v341.x / v344 * this.tf.Kf;
            this.tf.Jf.position.y = v341.y / v344 * this.tf.Kf;
            this.tf.WLp.position.x = -25 - this.tf.WLp.width / 2;
            this.tf.WLp.text = parseInt(lxpdhscount);
            this.tf.MLb.position.x = 25 - this.tf.MLb.width / 2;
            this.tf.MLb.text = parseInt(lxpdkillcount);
            this.uf.Qa(p393);
            this.wf.Te(p393, p394);
            this.ue.render(this.ve, null, true);
            this.ue.render(this.rf, null, false);
          }
        };
        f98.prototype.Lf = function (p395, p396) {
          p396.Of.Nf.Mf().zIndex = (p395 + 2147483648) / 4294967296 * 5000;
          this.nf.addChild(p396.Of.Pf.Mf());
          this.pf.addChild(p396.Of.Nf.Mf());
        };
        f98.prototype.Qf = function (p397, p398, p399) {
          p398.Rf.zIndex = f53().o.fb.bf ? 0 : 10 + (p397 + 32768) / 65536 * 5000;
          this.qf.addChild(p398.Rf);
          if (p397 != f53().o.fb.bf) {
            this.sf.addChild(p399);
          }
        };
        var vF613 = f61(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF7.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF7.bc();
          var v351 = new vF7.bc();
          v351.beginFill("black", 0.4);
          v351.drawCircle(0, 0, this.Kf);
          v351.endFill();
          v351.lineStyle(2, 14930642);
          v351.drawCircle(0, 0, this.Kf);
          v351.moveTo(0, -this.Kf);
          v351.lineTo(0, +this.Kf);
          v351.moveTo(-this.Kf, 0);
          v351.lineTo(+this.Kf, 0);
          v351.endFill();
          this.Sf.alpha = 0.5;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(vO.teamColor);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(v351);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
          var v352 = new vF7.fc("HS", {
            fontFamily: "Arial",
            fontSize: 16,
            fill: "white",
            align: "center"
          });
          v352.position.y = 50;
          v352.position.x = -35;
          var v353 = new vF7.fc("KILL", {
            fontFamily: "Arial",
            fontSize: 16,
            fill: "white",
            align: "center"
          });
          v353.position.y = 50;
          v353.position.x = 10;
          this.addChild(v352);
          this.addChild(v353);
          lxpdkillcount = 0;
          lxpdhscount = 0;
          this.WLp = new vF7.fc("", {
            fontFamily: "Arial",
            fontSize: 14,
            fill: "#FFFFFF",
            align: "center"
          });
          this.WLp.position.y = 67;
          this.WLp.position.x = -45;
          this.MLb = new vF7.fc("", {
            fontFamily: "Arial",
            fontSize: 14,
            fill: "#FFFFFF",
            align: "center"
          });
          this.MLb.position.y = 67;
          this.MLb.position.x = 20;
          this.addChild(this.WLp);
          this.addChild(this.MLb);
          let v354 = new vF7._b(vF7.$b.from("https://i.imgur.com/VPkrI9l.png"));
          var v355 = new vF7.ec();
          v355.texture = v354;
          v355.width = 100;
          v355.height = 100;
          v355.x = -50;
          v355.y = -50;
          this.addChild(v355);
          if (f18()) {
            var v356 = document.getElementById("game-cont");
            v65 = 0;
            v66 = -1;
            v69 = 0;
            v68 = [];
            (v67 = [])[0] = new vF7.ec.from("https://i.imgur.com/aOyOob6.png");
            v67[0].width = 80;
            v67[0].height = 40;
            v67[0].x = v356.offsetWidth * 0.5 - 100;
            v67[0].y = -60;
            v67[0].on("tap", () => {
              v65++;
              v64 = 0;
              v69 = -1;
              for (let vLN041 = 0; vLN041 < v68.length; vLN041++) {
                v68[vLN041].visible = false;
              }
              for (let vLN042 = 0; vLN042 < v67.length; vLN042++) {
                v67[vLN042].visible = v65 === vLN042;
              }
            });
            v67[1] = new vF7.ec.from("https://i.imgur.com/9ui2KwE.png");
            v67[1].width = 80;
            v67[1].height = 40;
            v67[1].x = v356.offsetWidth * 0.5 - 100;
            v67[1].y = -60;
            v67[1].visible = false;
            v67[1].on("tap", () => {
              if (v66 === 1) {
                v71.visible = false;
                v72.visible = false;
                v64 = 1;
                v65++;
                for (let vLN043 = 0; vLN043 < v67.length; vLN043++) {
                  v67[vLN043].visible = v65 === vLN043;
                }
              } else {
                if (++v66 == 0) {
                  v71.x = 15;
                  v72.x = -250 + v356.offsetWidth;
                  v71.visible = true;
                  v72.visible = true;
                }
                if (v66 === 1) {
                  v71.x = -250 + v356.offsetWidth;
                  v72.x = 15;
                }
                v69 = 1;
                v64 = -1;
                for (let vLN044 = 0; vLN044 < v68.length; vLN044++) {
                  v68[vLN044].visible = v69 === vLN044;
                }
              }
            });
            v67[2] = new vF7.ec.from("https://i.imgur.com/NKAyYa8.png");
            v67[2].width = 80;
            v67[2].height = 40;
            v67[2].x = v356.offsetWidth * 0.5 - 100;
            v67[2].y = -60;
            v67[2].visible = false;
            v67[2].on("tap", () => {
              v65++;
              v69 = 2;
              v64 = 2;
              for (let vLN045 = 0; vLN045 < v68.length; vLN045++) {
                v68[vLN045].visible = v69 === vLN045;
              }
              for (let vLN046 = 0; vLN046 < v67.length; vLN046++) {
                v67[vLN046].visible = v65 === vLN046;
              }
            });
            v67[3] = new vF7.ec.from("https://i.imgur.com/n1jVrwm.png");
            v67[3].width = 80;
            v67[3].height = 40;
            v67[3].x = v356.offsetWidth * 0.5 - 100;
            v67[3].y = -60;
            v67[3].visible = false;
            v67[3].on("tap", () => {
              v65 = 0;
              v66 = -1;
              v69 = 0;
              v64 = -1;
              for (let vLN047 = 0; vLN047 < v68.length; vLN047++) {
                v68[vLN047].visible = v69 === vLN047;
              }
              for (let vLN048 = 0; vLN048 < v67.length; vLN048++) {
                v67[vLN048].visible = v65 === vLN048;
              }
            });
            v68[0] = new vF7.ec.from("https://i.imgur.com/4ccZ556.png");
            v68[0].width = 16;
            v68[0].height = 16;
            v68[0].x = 0;
            v68[0].y = 0;
            v68[0].alpha = 0;
            v68[1] = new vF7.ec.from("https://i.imgur.com/hUVCdUv.png");
            v68[1].width = 16;
            v68[1].height = 16;
            v68[1].x = 0;
            v68[1].y = 0;
            v68[1].visible = false;
            v68[2] = new vF7.ec.from("https://i.imgur.com/WqWsDfi.png");
            v68[2].width = 16;
            v68[2].height = 16;
            v68[2].x = 0;
            v68[2].y = 0;
            v68[2].visible = false;
            (v71 = new vF7.ec.from("https://i.imgur.com/mHp0ozi.png")).width = 100;
            v71.height = 100;
            v71.x = 15;
            v71.y = -210 + v356.offsetHeight;
            v71.visible = false;
            (v72 = new vF7.ec.from("https://i.imgur.com/0G8cFtP.png")).width = 80;
            v72.height = 80;
            v72.x = -250 + v356.offsetWidth;
            v72.y = -200 + v356.offsetHeight;
            v72.visible = false;
            v72.alpha = 0.5;
            this.addChild(v71);
            this.addChild(v72);
            for (let vLN049 = 0; vLN049 < v67.length; vLN049++) {
              this.addChild(v67[vLN049]);
            }
            for (let vLN050 = 0; vLN050 < v68.length; vLN050++) {
              this.addChild(v68[vLN050]);
            }
          }
        });
        var vF19 = function () {
          var vF614 = f61(vF7.Zb, function () {
            vF7.Zb.call(this);
            this.Tf = {};
          });
          vF614.prototype.Qa = function (p400) {
            var v357;
            var v358 = 0.5 + Math.cos(v268 * (p400 / 1000 / 1.6)) * 0.5;
            for (v357 in this.Tf) {
              var v359 = this.Tf[v357];
              var v360 = v359.Uf;
              v359.alpha = 1 - v360 + v360 * v358;
            }
          };
          vF614.prototype.Te = function (p401) {
            var v361;
            for (v361 in this.Tf) {
              if (p401[v361] == null || !p401[v361].sc) {
                f70(this.Tf[v361]);
                delete this.Tf[v361];
              }
            }
            var v362;
            var vLN051 = 0;
            for (v362 in p401) {
              var v363 = p401[v362];
              if (v363.sc) {
                var v364 = this.Tf[v362];
                if (!v364) {
                  var v365 = f53().p.Dc().ld(v363.rc).Zc;
                  (v364 = new vF615()).texture = v365.Hc;
                  v364.width = 40;
                  v364.height = 40;
                  this.Tf[v362] = v364;
                  this.addChild(v364);
                }
                f40(this, v362, v363.tc);
                v364.Uf = v363.tc;
                v364.position.x = vLN051;
                vLN051 += 40;
              }
            }
          };
          var vF615 = f61(vF7.ec, function () {
            vF7.ec.call(this);
            this.Uf = 0;
          });
          return vF614;
        }();
        var vF20 = function () {
          var vF616 = f61(vF7.Zb, function () {
            vF7.Zb.call(this);
            this.Ef = true;
            this.Vf = 12;
            this.Wf = 9;
            this.Pe = [];
            for (var vLN052 = 0; vLN052 < 14; vLN052++) {
              this.Xf();
            }
          });
          vF616.prototype.Te = function (p402) {
            if (v57) {
              this.addChild(v57);
            }
            if (v58) {
              this.addChild(v58);
            }
            if (v60) {
              this.addChild(v60);
            }
            if (v61) {
              this.addChild(v61);
            }
            if (v52.text !== "") {
              this.addChild(v52);
              this.addChild(vO18.containerHsRec2);
            }
            if (vO) {
              f14(vO.playerX, vO.playerY);
            } else {
              console.log("Las coordenadas de zwormData no están definidas aún.");
            }
            var vF534 = f53();
            var v366 = vF534.o.fb.af == vO32._e;
            var vLN053 = 0;
            var vLN054 = 0;
            if (vLN054 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN054].Yf(1, "white");
            this.Pe[vLN054].Zf("", v52.text === "" ? "Top " + v54 : "", `(${vF534.o.tb} 🌍)`);
            this.Pe[vLN054].position.y = vLN053;
            vLN053 += this.Vf;
            vLN054 += 1;
            if (p402.$f.length > 0) {
              vLN053 += this.Wf;
            }
            for (var vLN055 = 0; vLN055 < p402.$f.length; vLN055++) {
              var v367 = p402.$f[vLN055];
              var v368 = vF534.p.Dc().ed(v367._f);
              if (vLN054 >= this.Pe.length) {
                this.Xf();
              }
              this.Pe[vLN054].Yf(0.8, v368.bd._c);
              this.Pe[vLN054].Zf("" + (vLN055 + 1), f57(v368.ad), "" + Math.floor(v367.M));
              this.Pe[vLN054].position.y = vLN053;
              vLN053 += this.Vf;
              vLN054 += 1;
            }
            if (p402.ag.length > 0) {
              vLN053 += this.Wf;
            }
            for (var vLN056 = 0; vLN056 < p402.ag.length; vLN056++) {
              var v369 = p402.ag[vLN056];
              var v370 = vF534.o.fb.bf == v369.bg;
              var vUndefined6 = undefined;
              if (v370) {
                "white";
                vUndefined6 = vF534.o.N.Mb.ad;
              } else {
                var v371 = vF534.o.hb[v369.bg];
                if (v371 != null) {
                  if (v366) {
                    vF534.p.Dc().ed(v371.Mb.cg).bd._c;
                  } else {
                    vF534.p.Dc().dd(v371.Mb.dg)._c;
                  }
                  vUndefined6 = this.Ef ? v371.Mb.ad : "---";
                } else {
                  "gray";
                  vUndefined6 = "?";
                }
              }
              if (v370) {
                vLN053 += this.Wf;
              }
              if (vLN054 >= this.Pe.length) {
                this.Xf();
              }
              this.Pe[vLN054].Yf(1, "white");
              if (vF534.o.O === vLN054) {
                this.Pe[vLN054].Yf(1, "#FFAAAA");
              }
              var v372 = Math.floor(v369.M);
              v372.customFormat();
              this.Pe[vLN054].Zf("" + (vLN056 + 1), vUndefined6, "" + v372.customFormat());
              this.Pe[vLN054].position.y = vLN053;
              vLN053 += this.Vf;
              vLN054 += 1;
              if (v370) {
                vLN053 += this.Wf;
              }
            }
            for (vF534.o.O > p402.ag.length && (vLN053 += this.Wf, vLN054 >= this.Pe.length && this.Xf(), this.Pe[vLN054].Yf(1, "#FFAAAA"), window.tuNewScore = Math.floor(vF534.o.N.M), window.tuNewScore.customFormat(), this.Pe[vLN054].Zf("" + vF534.o.O, vF534.o.N.Mb.ad, "" + window.tuNewScore.customFormat()), this.Pe[vLN054].position.y = vLN053, vLN053 += this.Vf, vLN054 += 1, vLN053 += this.Wf); this.Pe.length > vLN054;) {
              f70(this.Pe.pop());
            }
          };
          vF616.prototype.Xf = function () {
            var v373 = new vV374();
            v373.position.y = 0;
            if (this.Pe.length > 0) {
              v373.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
            }
            this.Pe.push(v373);
            this.addChild(v373);
          };
          var v374;
          (v374 = f61(vF7.Zb, function () {
            vF7.Zb.call(this);
            this.eg = new vF7.fc("", {
              dropShadow: true,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = 30;
            this.addChild(this.eg);
            this.fg = new vF7.fc("", {
              dropShadow: true,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 35;
            this.addChild(this.fg);
            this.gg = new vF7.fc("", {
              dropShadow: true,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 220;
            this.addChild(this.gg);
          })).prototype.Zf = function (p403, p404, p405) {
            this.eg.text = p403;
            this.gg.text = p405;
            var vP404 = p404;
            for (this.fg.text = vP404; this.fg.width > 100;) {
              vP404 = vP404.substring(0, vP404.length - 1);
              this.fg.text = vP404 + "..";
            }
          };
          v374.prototype.Yf = function (p406, p407) {
            this.eg.alpha = p406;
            this.eg.style.fill = p407;
            this.fg.alpha = p406;
            this.fg.style.fill = p407;
            this.gg.alpha = p406;
            this.gg.style.fill = p407;
          };
          var vV374 = v374;
          return vF616;
        }();
        return f98;
      }();
      var vF21 = function () {
        function f99(p408) {
          this.o = p408;
          this.hg = [];
          this.ig = 0;
        }
        f99.prototype.Xb = function (p409) {
          this.hg.push(new DataView(p409));
        };
        f99.prototype.Sb = function () {
          this.hg = [];
          this.ig = 0;
        };
        f99.prototype.Bb = function () {
          for (var vLN057 = 0; vLN057 < 10; vLN057++) {
            if (this.hg.length === 0) {
              return;
            }
            var v375 = this.hg.shift();
            try {
              this.jg(v375);
            } catch (e27) {
              console.log("DataReader error: " + e27);
              throw e27;
            }
          }
        };
        f99.prototype.jg = function (p410) {
          switch (p410.mc(0) & 255) {
            case 0:
              this.kg(p410, 1);
              return;
            case 1:
              this.lg(p410, 1);
              return;
          }
        };
        f99.prototype.kg = function (p411, p412) {
          console.log("%c📦 Decodificando INIT Packet...", "color:orange;font-weight:bold;");
          const v376 = p411.mc(p412);
          console.log("af (Int8):", v376);
          p412 += 1;
          const v377 = p411.nc(p412);
          console.log("bf (Int16):", v377);
          p412 += 2;
          const v378 = p411.pc(p412);
          console.log("ub (Float32):", v378);
          p412 += 4;
          const v379 = p411.pc(p412);
          console.log("cf (Float32):", v379);
          p412 += 4;
          const v380 = p411.pc(p412);
          console.log("df (Float32):", v380);
          p412 += 4;
          this.o.fb.af = v376;
          this.o.fb.bf = v377;
          this.o.N.Mb.Lb = v377;
          this.o.fb.ub = v378;
          this.o.fb.cf = v379;
          this.o.fb.df = v380;
          const vF535 = f53();
          vF535.s.H.wb.Te(this.o.fb, vF535.s.xa.wa());
          console.log("%c✅ INIT packet decodificado correctamente.", "color:lightgreen");
          return p412;
        };
        f99.prototype.lg = function (p413, p414) {
          console.log("%c📦 Decodificando WORLD Packet...", "color:cyan;font-weight:bold;");
          const v381 = this.ig++;
          const v382 = p413.nc(p414);
          console.log("Índice paquete:", v381, "| o (Uint16):", v382);
          p414 += 2;
          [{
            name: "sg",
            fn: this.sg.bind(this)
          }, {
            name: "tg",
            fn: this.tg.bind(this)
          }, {
            name: "ug",
            fn: this.ug.bind(this)
          }, {
            name: "vg",
            fn: this.vg.bind(this)
          }, {
            name: "wg",
            fn: this.wg.bind(this)
          }, {
            name: "xg",
            fn: this.xg.bind(this)
          }, {
            name: "yg",
            fn: this.yg.bind(this)
          }, {
            name: "zg",
            fn: this.zg.bind(this)
          }].forEach(({
            name: t,
            fn: n
          }) => {
            const v383 = this.qg(p413, p414);
            console.log("Sección " + t + ": cantidad =", v383);
            const v384 = this.rg(v383);
            p414 += v384;
            console.log("  Offset tras leer cantidad (" + v384 + " bytes):", p414);
            for (let vLN058 = 0; vLN058 < v383; vLN058++) {
              console.log("  └ Procesando " + t + "[" + vLN058 + "] a partir de offset", p414);
              const vN = n(p413, p414);
              console.log("     → Terminó " + t + "[" + vLN058 + "], nuevo offset =", vN);
              p414 = vN;
            }
          });
          if (v381 > 0) {
            console.log("Aplicando Ag (paquete extra) en offset", p414);
            const v385 = this.Ag(p413, p414);
            console.log("  → Offset tras Ag:", v385);
            p414 = v385;
          }
          console.log("Llamando a Qb con index y o:", v381, v382);
          this.o.Qb(v381, v382);
          console.log("%c✅ WORLD packet decodificado completamente.", "color:lightgreen");
          return p414;
        };
        f99.prototype.vg = function (p415, p416) {
          var v386 = new vF36.Config();
          v386.Lb = p415.nc(p416);
          p416 += 2;
          v386.cg = this.o.fb.af == vO32._e ? p415.mc(p416++) : vF17.TEAM_DEFAULT;
          v386.dg = p415.nc(p416);
          let vP416 = p416;
          p416 += 2;
          v386.Bg = p415.nc(p416);
          let vP4162 = p416;
          p416 += 2;
          v386.Cg = p415.nc(p416);
          let vP4163 = p416;
          p416 += 2;
          v386.Dg = p415.nc(p416);
          let vP4164 = p416;
          p416 += 2;
          v386.Eg = p415.nc(p416);
          let vP4165 = p416;
          p416 += 2;
          var v387 = p415.mc(p416);
          p416 += 1;
          var vLS = "";
          for (var vLN059 = 0; vLN059 < v387; vLN059++) {
            vLS += String.fromCharCode(p415.nc(p416));
            p416 += 2;
          }
          if (p416 > 210) {
            for (let v388 in this.o.hb) {
              if (/^(.+?)@(.+)/.test(this.o.hb[v388].Mb.ad)) {
                const v389 = this.o.hb[v388].Mb.dg;
                if (v389 >= 32 && v389 <= 35) {
                  const v390 = Math.floor(Math.random() * 21) + 600;
                  this.o.hb[v388].Mb.dg = v390;
                }
              }
              if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[v388].Mb.ad)) {
                const v391 = this.o.hb[v388].Mb.dg;
                if (v391 >= 32 && v391 <= 35) {
                  const v392 = Math.floor(Math.random() * 21) + 600;
                  this.o.hb[v388].Mb.dg = v392;
                }
              }
              if (/^(.{16})(\X\u0422\_\d{6})$/.test(this.o.hb[v388].Mb.ad)) {
                var v393 = this.o.hb[v388].Mb.ad.substr(-6);
                let v394 = v393.substr(0, 3);
                let v395 = v393.substr(3, 3);
                let v396 = v393.substr(6, 3);
                let v397 = v393.substr(9, 3);
                if (v394 !== "000" && vO11.visibleSkin.indexOf(parseInt(v394)) !== -1) {
                  this.o.hb[v388].Mb.dg = parseInt(v394);
                }
                if (v395 !== "000") {
                  this.o.hb[v388].Mb.Eg = parseInt(v395);
                }
                if (v396 !== "000") {
                  this.o.hb[v388].Mb.Bg = parseInt(v396);
                }
                if (v397 !== "000") {
                  this.o.hb[v388].Mb.Cg = parseInt(v397);
                }
              }
            }
          }
          if (window.anApp.o.N.Mb.Lb === v386.Lb) {
            v386.dg = vO11.PropertyManager.rh;
            v386.Bg = vO11.PropertyManager.sh;
            v386.Cg = vO11.PropertyManager.th;
            v386.Dg = vO11.PropertyManager.uh;
            v386.Eg = vO11.PropertyManager.vh;
            p415.setInt16(vP416, v386.dg);
            p415.setInt16(vP4162, v386.Bg);
            p415.setInt16(vP4163, v386.Cg);
            p415.setInt16(vP4164, v386.Dg);
            p415.setInt16(vP4165, v386.Eg);
            vO6.aload = true;
            vO6.aId = vP416;
          }
          v386.ad = vLS;
          if (this.o.fb.bf === v386.Lb) {
            this.o.N.Fg(v386);
          } else {
            var v398 = this.o.hb[v386.Lb];
            if (v398 != null) {
              v398.Kb();
            }
            var v399 = new vF36(this.o.fb);
            v399.vb(f53().s.H.wb);
            this.o.hb[v386.Lb] = v399;
            v399.Fg(v386);
          }
          return p416;
        };
        f99.prototype.wg = function (p417, p418) {
          var v400 = p417.nc(p418);
          p418 += 2;
          var v401 = p417.mc(p418);
          p418++;
          var v402 = !!(v401 & 1);
          var v403 = !!(v401 & 2);
          var vLN060 = 0;
          if (v402) {
            vLN060 = p417.nc(p418);
            p418 += 2;
          }
          var v404 = this.Gg(v400);
          if (v404 === undefined) {
            return p418;
          }
          v404.Ib = false;
          if (!v404.Hb) {
            return p418;
          }
          var v405 = this.Gg(v400);
          if (v402 && v405 !== undefined && v405.Hb) {
            if (vLN060 === this.o.fb.bf) {
              var v406 = this.o.N.Gf();
              var v407 = v404.Hg(v406.x, v406.y);
              Math.max(0, 1 - v407.distance / (this.o.jb * 0.5));
              if (v407.distance < this.o.jb * 0.5) {
                f53().s.H.wb.wf.Se(v403);
              }
            } else if (v400 === this.o.fb.bf) ;else {
              var v408 = this.o.N.Gf();
              var v409 = v404.Hg(v408.x, v408.y);
              Math.max(0, 1 - v409.distance / (this.o.jb * 0.5));
            }
          } else if (v400 === this.o.fb.bf) ;else {
            var v410 = this.o.N.Gf();
            var v411 = v404.Hg(v410.x, v410.y);
            Math.max(0, 1 - v411.distance / (this.o.jb * 0.5));
          }
          return p418;
        };
        f99.prototype.zg = function (p419, p420) {
          var v412 = p419.nc(p420);
          p420 += 2;
          var v413 = v412 === this.o.fb.bf ? null : this.o.hb[v412];
          var v414 = p419.mc(p420);
          p420 += 1;
          var v415 = !!(v414 & 1);
          if (v414 & 2) {
            var v416 = p419.pc(p420);
            p420 += 4;
            if (v413) {
              v413.Ig(v416);
            }
          }
          var v417 = this.Jg(p419.mc(p420++), p419.mc(p420++), p419.mc(p420++));
          var v418 = this.Jg(p419.mc(p420++), p419.mc(p420++), p419.mc(p420++));
          if (v413) {
            v413.Kg(v417, v418, v415);
            var v419 = this.o.N.Gf();
            var v420 = v413.Gf();
            var v421 = Math.max(0, 1 - Math.hypot(v419.x - v420.x, v419.y - v420.y) / (this.o.jb * 0.5));
            Math.atan2(v420.y - v419.y, v420.x - v419.x);
            Math.hypot(v419.x - v420.x, v419.y - v420.y);
            v413.Mb.ad;
            Date.now();
            f53().r.Zd(v421, v412, v415);
          }
          var v422 = this.qg(p419, p420);
          p420 += this.rg(v422);
          if (v413) {
            for (var v423 in v413.Ff) {
              var v424 = v413.Ff[v423];
              if (v424) {
                v424.sc = false;
              }
            }
          }
          for (var vLN061 = 0; vLN061 < v422; vLN061++) {
            var v425 = p419.mc(p420);
            p420++;
            var v426 = p419.mc(p420);
            p420++;
            if (v413) {
              var v427 = v413.Ff[v425];
              v427 ||= v413.Ff[v425] = new vF8(v425);
              v427.sc = true;
              v427.tc = Math.min(1, Math.max(0, v426 / 100));
            }
          }
          return p420;
        };
        f99.prototype.Ag = function (p421, p422) {
          console.log("📦 Aplicando sección Ag en offset inicial: " + p422);
          var vP422 = p422;
          var v428 = this.o.N;
          var v429 = p421.mc(p422);
          console.log("🧩 Flags Ag (byte): " + v429.toString(2).padStart(8, "0"));
          p422 += 1;
          var v430 = !!(v429 & 1);
          var v431 = !!(v429 & 4);
          if (v429 & 2) {
            console.log("🔢 Flag [r]=true (actualizar score), offset: " + p422);
            var v432 = v428.M;
            var v433 = p421.pc(p422);
            console.log("   → Nuevo score: " + v433);
            v428.Ig(v433);
            p422 += 4;
            if ((v432 = v428.M - v432) > 0) {
              f53().s.H.wb.wf.Re(v432);
            }
          }
          if (v431) {
            console.log("🔢 Flag [s]=true (actualizar ib), offset: " + p422);
            this.o.ib = p421.pc(p422);
            console.log("   → Nuevo ib: " + this.o.ib);
            p422 += 4;
          }
          console.log("📍 Leyendo vectores en offset: " + p422);
          var v434 = this.Jg(p421.mc(p422++), p421.mc(p422++), p421.mc(p422++));
          var v435 = this.Jg(p421.mc(p422++), p421.mc(p422++), p421.mc(p422++));
          console.log("   → Vector h: " + JSON.stringify(v434) + ", Vector l: " + JSON.stringify(v435));
          v428.Kg(v434, v435, v430);
          f53().r.Zd(0.5, this.o.fb.bf, v430);
          var v436 = this.qg(p421, p422);
          console.log("🎮 Cantidad de habilidades: " + v436);
          var v437 = this.rg(v436);
          p422 += v437;
          console.log("   → Offset tras header de habilidades (" + v437 + " bytes): " + p422);
          for (var v438 in v428.Ff) {
            var v439 = v428.Ff[v438];
            if (v439) {
              v439.sc = false;
            }
          }
          for (var vLN062 = 0; vLN062 < v436; vLN062++) {
            var v440 = p421.mc(p422++);
            var v441 = p421.mc(p422++);
            var v442 = v428.Ff[v440] || new vF8(v440);
            v428.Ff[v440] = v442;
            v442.sc = true;
            v442.tc = Math.min(1, Math.max(0, v441 / 100));
            console.log("   → Habilidad ID: " + v440 + ", Valor: " + v441 + ", Normalizado: " + v442.tc);
          }
          f53().s.H.wb.uf.Te(v428.Ff);
          console.log("✅ Ag procesado. Offset final: " + p422 + " (usó " + (p422 - vP422) + " bytes)\n");
          return p422;
        };
        f99.prototype.xg = function (p423, p424) {
          var vThis7 = this;
          var v443 = p423.nc(p424);
          p424 += 2;
          var v444 = this.Gg(v443);
          var v445 = p423.pc(p424);
          p424 += 4;
          var vA13 = [];
          for (var v446 in v444.Ff) {
            if (v446 == 0) {
              vA13.push("velocidad");
              $(".v0").fadeIn();
            } else if (v446 == 1) {
              vA13.push("movimiento");
              $(".v1").fadeIn();
            } else if (v446 == 2) {
              vA13.push("iman");
              $(".v2").fadeIn();
            } else if (v446 == 3) {
              vA13.push("comidax2");
              $(".v3").fadeIn();
            } else if (v446 == 4) {
              vA13.push("comidax5");
              $(".v4").fadeIn();
            } else if (v446 == 5) {
              vA13.push("comidax10");
              $(".v5").fadeIn();
            } else if (v446 == 6) {
              vA13.push("zoom");
              $(".v6").fadeIn();
            } else {
              console.log("comiste otro potenciador");
            }
          }
          window.nombres2 = vA13;
          $(".Worm_cerca").text(" : " + v444.Mb.ad);
          if (v444.Mb.ad) {
            setTimeout(function () {
              $(".pwrups").fadeOut();
            }, 3000);
          }
          var v447 = this.qg(p423, p424);
          p424 += this.rg(v447);
          if (v444) {
            v444.Ig(v445);
            v444.Lg(function () {
              return vThis7.Jg(p423.mc(p424++), p423.mc(p424++), p423.mc(p424++));
            }, v447);
            v444.Mg(true);
            var v448 = this.o.N.Gf();
            var v449 = v444.Gf();
            var v450 = Math.max(0, 1 - Math.hypot(v448.x - v449.x, v448.y - v449.y) / (this.o.jb * 0.5));
            f53().r.Xd(v450, v443);
          } else {
            p424 += v447 * 6;
          }
          return p424;
        };
        f99.prototype.yg = function (p425, p426) {
          var v451 = p425.nc(p426);
          p426 += 2;
          var v452 = this.o.hb[v451];
          if (v452 && v452.Ib) {
            v452.Mg(false);
          }
          f53().r.Yd(v451);
          return p426;
        };
        f99.prototype.sg = function (p427, p428) {
          var v453 = new vF23.Config();
          v453.Lb = p427.oc(p428);
          p428 += 4;
          v453.cg = this.o.fb.af === vO32._e ? p427.mc(p428++) : vF17.TEAM_DEFAULT;
          let v454 = p427.mc(p428++);
          let v455 = p427.mc(p428++);
          let v456 = p427.mc(p428++);
          v453.Ng = this.Jg(v454, v455, v456);
          v453.dg = p427.mc(p428++);
          var v457 = this.o.gb[v453.Lb];
          if (v457 != null) {
            v457.Kb();
          }
          var v458 = new vF23(v453, f53().s.H.wb);
          v458.Og(this.Pg(v453.Lb), this.Qg(v453.Lb), true);
          this.o.gb[v453.Lb] = v458;
          return p428;
        };
        f99.prototype.tg = function (p429, p430) {
          const v459 = p429.oc(p430);
          console.log("[TG] ID worm a escalar (oc): " + v459);
          p430 += 4;
          const v460 = this.o.gb[v459];
          if (v460) {
            v460.Rg = 0;
            v460.Sg = v460.Sg * 1.5;
            v460.Nb = true;
            console.log("[TG] Worm " + v459 + " escalado a Sg=" + v460.Sg);
          } else {
            console.warn("[TG] Worm " + v459 + " no existe en gb");
          }
          return p430;
        };
        f99.prototype.ug = function (p431, p432) {
          const v461 = p431.oc(p432);
          console.log("[UG] ID worm afectado (oc): " + v461);
          p432 += 4;
          const v462 = p431.nc(p432);
          console.log("[UG] Tipo de powerup (nc): " + v462);
          p432 += 2;
          const v463 = this.o.gb[v461];
          if (v463) {
            v463.Rg = 0;
            v463.Sg = v463.Sg * 0.1;
            v463.Nb = true;
            console.log("[UG] Worm " + v461 + " escala reducida a Sg=" + v463.Sg);
            const v464 = this.Gg(v462);
            if (v464 && v464.Hb) {
              const v465 = v464.Gf();
              v463.Og(v465.x, v465.y, false);
              console.log("[UG] Worm " + v461 + " movido a (" + v465.x + ", " + v465.y + ")");
            }
          } else {
            console.warn("[UG] Worm " + v461 + " no existe en gb");
          }
          return p432;
        };
        var vA14 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
        f99.prototype.mg = function (p433) {
          var v466 = f53().q.Ug.Tg;
          var v467 = v466.getImageData(0, 0, 80, 80);
          var v468 = vA14[0];
          var v469 = 80 - v468;
          var vLN063 = 0;
          for (var vLN064 = 0; vLN064 < 628; vLN064++) {
            var v470 = p433.mc(1 + vLN064);
            for (var vLN065 = 0; vLN065 < 8; vLN065++) {
              var v471 = (v468 + vLN063 * 80) * 4;
              if ((v470 >> vLN065 & 1) != 0) {
                v467.data[v471] = 255;
                v467.data[v471 + 1] = 255;
                v467.data[v471 + 2] = 255;
                v467.data[v471 + 3] = 255;
              } else {
                v467.data[v471 + 3] = 0;
              }
              if (++v468 >= v469 && ++vLN063 < 80) {
                v469 = 80 - (v468 = vA14[vLN063]);
              }
            }
          }
          v466.putImageData(v467, 0, 0);
          var v472 = f53().s.H.wb.tf.Sf;
          v472.texture = f53().q.Ug.Hc;
          v472.texture.update();
        };
        f99.prototype.og = function (p434, p435) {
          var v473 = p434.oc(p435);
          p435 += 4;
          console.log("Wormy Error: " + v473);
        };
        f99.prototype.pg = function (p436, p437) {
          if (v64 !== -1) {
            v70[v64].visible = false;
          }
          vO.hs = 0;
          f15(0, 0);
          f14(999999, 999999);
          f44();
          console.log("g.o");
          this.o.Rb();
        };
        f99.prototype.ng = function (p438, p439) {
          this.o.tb = p438.nc(p439);
          p439 += 2;
          this.o.O = p438.nc(p439);
          p439 += 2;
          var v474 = new vF32();
          v474.ag = [];
          for (var v475 = p438.mc(p439++), vLN066 = 0; vLN066 < v475; vLN066++) {
            var v476 = p438.nc(p439);
            p439 += 2;
            var v477 = p438.pc(p439);
            p439 += 4;
            v474.ag.push(vF32.Vg(v476, v477));
          }
          v474.$f = [];
          if (this.o.fb.af === vO32._e) {
            for (var v478 = p438.mc(p439++), vLN067 = 0; vLN067 < v478; vLN067++) {
              var v479 = p438.mc(p439);
              p439 += 1;
              var v480 = p438.pc(p439);
              p439 += 4;
              v474.$f.push(vF32.Wg(v479, v480));
            }
          }
          f53().s.H.wb.vf.Te(v474);
        };
        f99.prototype.Gg = function (p440) {
          if (p440 === this.o.fb.bf) {
            return this.o.N;
          } else {
            return this.o.hb[p440];
          }
        };
        f99.prototype.Jg = function (p441, p442, p443) {
          return (((p443 & 255 | p442 << 8 & 65280 | p441 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
        };
        f99.prototype.Pg = function (p444) {
          return ((p444 & 65535) / 32768 - 1) * this.o.fb.ef();
        };
        f99.prototype.Qg = function (p445) {
          return ((p445 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
        };
        f99.prototype.qg = function (p446, p447) {
          var v481 = p446.mc(p447);
          if ((v481 & 128) == 0) {
            return v481;
          }
          var v482 = p446.mc(p447 + 1);
          if ((v482 & 128) == 0) {
            return v482 | v481 << 7 & 16256;
          }
          var v483 = p446.mc(p447 + 2);
          if ((v483 & 128) == 0) {
            return v483 | v482 << 7 & 16256 | v481 << 14 & 2080768;
          }
          var v484 = p446.mc(p447 + 3);
          if ((v484 & 128) == 0) {
            return v484 | v483 << 7 & 16256 | v482 << 14 & 2080768 | v481 << 21 & 266338304;
          } else {
            return undefined;
          }
        };
        f99.prototype.rg = function (p448) {
          if (p448 < 128) {
            return 1;
          } else if (p448 < 16384) {
            return 2;
          } else if (p448 < 2097152) {
            return 3;
          } else if (p448 < 268435456) {
            return 4;
          } else {
            return undefined;
          }
        };
        return f99;
      }();
      var vF22 = function () {
        function f100(p449) {
          this.Xg = p449;
        }
        f100.Yg = function () {
          return new vF22(null);
        };
        f100.Zg = function (p450) {
          return new vF22(p450);
        };
        f100.prototype.$g = function () {
          return this.Xg;
        };
        f100.prototype._g = function () {
          return this.Xg != null;
        };
        f100.prototype.ah = function (p451) {
          if (this.Xg != null) {
            p451(this.Xg);
          }
        };
        return f100;
      }();
      var vF23 = function () {
        function e(p452, p453) {
          this.Mb = p452;
          this.bh = p452.dg >= 80;
          this.Ob = 0;
          this.Pb = 0;
          this.ch = 0;
          this.dh = 0;
          this.Sg = this.bh ? 1 : p452.Ng;
          this.Rg = 1;
          this.Nb = false;
          this.eh = 0;
          this.fh = 0;
          this.Jb = 1;
          this.Ae = Math.PI * 2 * Math.random();
          this.gh = new vF24();
          this.gh.hh(f53().o.fb.af, this.Mb.cg === vF17.TEAM_DEFAULT ? null : f53().p.Dc().ed(this.Mb.cg), f53().p.Dc().kd(this.Mb.dg));
          p453.Lf(p452.Lb, this.gh);
        }
        e.prototype.Kb = function () {
          this.gh.Of.Pf.ih();
          this.gh.Of.Nf.ih();
        };
        e.prototype.Og = function (p454, p455, p456) {
          this.Ob = p454;
          this.Pb = p455;
          if (p456) {
            this.ch = p454;
            this.dh = p455;
          }
        };
        e.prototype.Fb = function (p457, p458) {
          var v485 = Math.min(0.5, this.Sg * 1);
          var v486 = Math.min(2.5, this.Sg * 1.5);
          this.eh = f65(this.eh, v485, p458, 0.0025);
          this.fh = f65(this.fh, v486, p458, 0.0025);
          this.Jb = f65(this.Jb, this.Rg, p458, 0.0025);
        };
        e.prototype.Gb = function (p459, p460, p461) {
          this.ch = f65(this.ch, this.Ob, p460, vO11.eat_animation);
          this.dh = f65(this.dh, this.Pb, p460, 0.0025);
          this.gh.Te(this, p459, p460, p461);
        };
        e.Config = function () {
          this.Lb = 0;
          this.cg = vF17.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        };
        return e;
      }();
      var vF24 = function () {
        function f102() {
          this.Of = new vF25(new vF35(), new vF35());
          this.Of.Pf.jh.blendMode = vF7.ic.jc;
          this.Of.Pf.jh.zIndex = vLN100;
          this.Of.Nf.jh.zIndex = vLN5002;
        }
        var vLN5002 = 500;
        var vLN100 = 100;
        f102.prototype.hh = function (p462, p463, p464) {
          var v487 = p464.Zc;
          if (v487 != null) {
            this.Of.Nf.kh(v487);
          }
          var v488 = p462 == vO32._e && p463 != null ? p463.cd.$c : p464.$c;
          if (v488 != null) {
            this.Of.Pf.kh(v488);
          }
        };
        f102.prototype.Te = function (p465, p466, p467, p468) {
          if (p468(p465.ch, p465.dh)) {
            var v489 = p465.fh * (1 + Math.cos(p465.Ae + p466 / 200) * 0.3);
            vO16.PotenciadorAura;
            if (p465.bh) {
              this.Of.mh(p465.ch, p465.dh, vO16.PotenciadorSize * p465.eh, p465.Jb * 1, vO16.PotenciadorAura * v489, p465.Jb * 0.8);
            } else {
              this.Of.mh(p465.ch, p465.dh, vO16.ComidaSize * p465.eh, p465.Jb * 1, vO16.ComidaShadow * v489, p465.Jb * 0.3);
            }
          } else {
            this.Of.lh();
          }
        };
        var vF25 = function () {
          function f103(p469, p470) {
            this.Nf = p469;
            this.Pf = p470;
          }
          f103.prototype.mh = function (p471, p472, p473, p474, p475, p476) {
            this.Nf.Mg(true);
            this.Nf.nh(p471, p472);
            this.Nf.oh(p473);
            this.Nf.qh(p474);
            this.Pf.Mg(true);
            this.Pf.nh(p471, p472);
            this.Pf.oh(p475);
            this.Pf.qh(p476);
          };
          f103.prototype.lh = function () {
            this.Nf.Mg(false);
            this.Pf.Mg(false);
          };
          return f103;
        }();
        return f102;
      }();
      var vF26 = function () {
        function f104() {
          this.rh = 0;
          this.sh = 0;
          this.th = 0;
          this.uh = 0;
          this.vh = 0;
          this.wh = [];
        }
        function f105(p477, p478) {
          for (var vLN068 = 0; vLN068 < p477.length; vLN068++) {
            if (p477[vLN068].id == p478) {
              return vLN068;
            }
          }
          return -1;
        }
        f104.prototype.a = function () {};
        f104.prototype.ha = function (p479) {
          if (!vO11.loading) {
            vO11.PropertyManager = this;
            localStorage.setItem("SaveGameXT", JSON.stringify(vO11));
          }
          switch (p479) {
            case vF28.ia:
              return this.rh;
            case vF28.ja:
              return this.sh;
            case vF28.ka:
              return this.th;
            case vF28.la:
              return this.uh;
            case vF28.ma:
              return this.vh;
          }
          return 0;
        };
        f104.prototype.xh = function (p480) {
          this.wh.push(p480);
          this.yh();
        };
        f104.prototype.Ia = function () {
          if (!f53().p.W()) {
            return f71([32, 33, 34, 35]);
          }
          for (var v490 = f53().p.Ac(), vA15 = [], vLN069 = 0; vLN069 < v490.skinArrayDict.length; vLN069++) {
            var v491 = v490.skinArrayDict[vLN069];
            if (this.Ja(v491.id, vF28.ia)) {
              vA15.push(v491);
            }
          }
          if (vA15.length === 0) {
            return 0;
          } else {
            return vA15[parseInt(vA15.length * Math.random())].id;
          }
        };
        f104.prototype.zh = function () {
          if (f53().p.W) {
            var v492 = f53().p.Ac().skinArrayDict;
            var vF105 = f105(v492, this.rh);
            if (!(vF105 < 0)) {
              for (var v493 = vF105 + 1; v493 < v492.length; v493++) {
                if (this.Ja(v492[v493].id, vF28.ia)) {
                  this.rh = v492[v493].id;
                  this.yh();
                  return;
                }
              }
              for (var vLN070 = 0; vLN070 < vF105; vLN070++) {
                if (this.Ja(v492[vLN070].id, vF28.ia)) {
                  this.rh = v492[vLN070].id;
                  this.yh();
                  return;
                }
              }
            }
          }
        };
        f104.prototype.Ah = function () {
          if (f53().p.W) {
            var v494 = f53().p.Ac().skinArrayDict;
            var vF1052 = f105(v494, this.rh);
            if (!(vF1052 < 0)) {
              for (var v495 = vF1052 - 1; v495 >= 0; v495--) {
                if (this.Ja(v494[v495].id, vF28.ia)) {
                  this.rh = v494[v495].id;
                  this.yh();
                  return;
                }
              }
              for (var v496 = v494.length - 1; v496 > vF1052; v496--) {
                if (this.Ja(v494[v496].id, vF28.ia)) {
                  this.rh = v494[v496].id;
                  this.yh();
                  return;
                }
              }
            }
          }
        };
        f104.prototype.Bh = function (p481, p482) {
          if (!f53().p.W() || this.Ja(p481, p482)) {
            switch (p482) {
              case vF28.ia:
                if (this.rh != p481) {
                  this.rh = p481;
                  this.yh();
                }
                return;
              case vF28.ja:
                if (this.sh != p481) {
                  this.sh = p481;
                  this.yh();
                }
                return;
              case vF28.ka:
                if (this.th != p481) {
                  this.th = p481;
                  this.yh();
                }
                return;
              case vF28.la:
                if (this.uh != p481) {
                  this.uh = p481;
                  this.yh();
                }
                return;
              case vF28.ma:
                if (this.vh != p481) {
                  this.vh = p481;
                  this.yh();
                }
                return;
            }
          }
        };
        f104.prototype.Ja = function (p483, p484) {
          var vF27 = function (p485, p486) {
            if (!f53().p.W()) {
              return null;
            }
            var v497 = f53().p.Ac();
            if (p486 === vF28.ia) {
              var vF1053 = f105(v497.skinArrayDict, p485);
              if (vF1053 < 0) {
                return null;
              } else {
                return v497.skinArrayDict[vF1053];
              }
            }
            switch (p486) {
              case vF28.ja:
                return v497.eyesDict[p485];
              case vF28.ka:
                return v497.mouthDict[p485];
              case vF28.la:
                return v497.glassesDict[p485];
              case vF28.ma:
                return v497.hatDict[p485];
            }
            return null;
          }(p483, p484);
          return vF27 != null && (f53().u.P() ? vF27.price == 0 && !vF27.nonbuyable || f53().u.Ch(p483, p484) : vF27.guest);
        };
        f104.prototype.yh = function () {
          for (var vLN071 = 0; vLN071 < this.wh.length; vLN071++) {
            this.wh[vLN071]();
          }
        };
        return f104;
      }();
      var vF28 = function () {
        function f106() {}
        f106.ia = "SKIN";
        f106.ja = "EYES";
        f106.ka = "MOUTH";
        f106.la = "GLASSES";
        f106.ma = "HAT";
        return f106;
      }();
      function f107(p487, p488, p489, p490, p491, p492, p493, p494, p495) {
        this.Hc = new vF7._b(p487, new vF7.dc(p488, p489, p490, p491));
        this.Dh = p488;
        this.Eh = p489;
        this.Fh = p490;
        this.Gh = p491;
        this.Hh = p492 || (p494 || p490) / 2;
        this.Ih = p493 || (p495 || p491) / 2;
        this.Jh = p494 || p490;
        this.Kh = p495 || p491;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      var vF29 = function () {
        function f108() {
          this.fn_o = f109;
          this.Fe = new vF7._b(vF7.$b.from("/images/bg-obstacle.png"));
          var v498;
          var v499 = vF7.$b.from("https://i.imgur.com/gvMlosm.png");
          this.Ge = [new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128)), new vF7._b(v499, new vF7.dc(0, 0, 128, 128))];
          this.Cf = new vF7._b(f109());
          this.Df = new vF7._b((__DECODE_0__, (v498 = vF7.$b.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = vF7.kc.lc, v498));
          this.Af = new vF7._b(vF7.$b.from("/images/lens.png"));
          var v500 = vF7.$b.from("/images/wear-ability.png");
          this.Ph = new f107(v500, 158, 86, 67, 124, 148, 63.5, 128, 128);
          this.Qh = new f107(v500, 158, 4, 87, 74, 203, 63.5, 128, 128);
          var v501;
          var v502 = vF7.$b.from("https://i.imgur.com/n4d2rM7.png");
          this.Rh = new f107(v502, 156, 4, 87, 74, 285, 63.5, 128, 128);
          this.X_x5 = new f107(v502, 156, 80, 87, 60, 170, 1.5, 128, 128);
          this.X_x2 = new f107(v502, 156, 140, 87, 60, 170, 128.5, 128, 128);
          this.X_x10 = new f107(v502, 158, 200, 95, 55, 265, 128.5, 128, 128);
          this.X_xxlupa = new f107(v502, 79, 8, 75, 77, 265, 1.5, 128, 128);
          this.Ug = (__DECODE_0__, (v501 = window.document.createElement("canvas")).width = 80, v501.height = 80, {
            te: v501,
            Tg: v501.getContext("2d"),
            Hc: new vF7._b(vF7.$b.from(v501))
          });
          this.Bd = {};
          this.yd = {};
          this.Sh = [];
          this.Th = null;
        }
        function f109(p496) {
          var v503 = vF7.$b.from(p496 || "/images/bg-pattern-pow2-ARENA.png");
          v503.wrapMode = vF7.kc.lc;
          return v503;
        }
        f108.prototype.a = function (p497) {
          function f110() {
            if (--vLN4 == 0) {
              p497();
            }
          }
          var vLN4 = 4;
          this.Bd = {};
          f110();
          this.yd = {};
          f110();
          this.Sh = [];
          f110();
          this.Th = null;
          f110();
        };
        return f108;
      }();
      var vF30 = function () {
        function f111() {
          this.H = new vF41();
          this.F = new v_0x5e89e6();
          this.Uh = new v_0x5cebbd();
          this.Vh = new v_0x63a3a6();
          this.Wh = new v_0x14c951();
          this.Xh = new v_0x58bd10();
          this.Yh = new v_0x4cbf06();
          this.Zh = new v_0x416635();
          this.xa = new v_0x2aaca9();
          this.wtrset = new v_0x41e76a();
          this.$h = new vF43();
          this._h = new v_0x2ef4de();
          this.ai = new vF45();
          this.aa = new v_0x3b20b7();
          this.ua = new v_0x2b894d();
          this.pa = new v_0x1e5356();
          this.bi = [];
          this.ci = null;
        }
        function f112(p498, p499) {
          if (p499 != p498.length + 1) {
            var v504 = p498[p499];
            f68(p498, p499 + 1, p499, p498.length - p499 - 1);
            p498[p498.length - 1] = v504;
          }
        }
        f111.prototype.a = function () {
          this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.wtrset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
          for (var vLN072 = 0; vLN072 < this.bi.length; vLN072++) {
            this.bi[vLN072].a();
          }
          this.ci = new vF13(vF40.di);
        };
        f111.prototype.Qa = function (p500, p501) {
          for (var v505 = this.bi.length - 1; v505 >= 0; v505--) {
            this.bi[v505].Pa(p500, p501);
          }
          if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
            this.ci.Pa(p500, p501);
          }
        };
        f111.prototype.Ra = function () {
          for (var v506 = this.bi.length - 1; v506 >= 0; v506--) {
            this.bi[v506].Ra();
          }
          if (this.ci != null) {
            this.ci.Ra();
          }
        };
        f111.prototype.I = function (p502) {
          var vF31 = function (p503, p504) {
            for (var vLN073 = 0; vLN073 < p503.length; vLN073++) {
              if (p503[vLN073] == p504) {
                return vLN073;
              }
            }
            return -1;
          }(this.bi, p502);
          if (!(vF31 < 0)) {
            this.bi[0].ei();
            (function (p505, p506) {
              if (p506 != 0) {
                var v507 = p505[p506];
                f68(p505, 0, 1, p506);
                p505[0] = v507;
              }
            })(this.bi, vF31);
            this.fi();
          }
        };
        f111.prototype.gi = function () {
          this.bi[0].ei();
          do {
            f112(this.bi, 0);
          } while (this.bi[0].rc != 1);
          this.fi();
        };
        f111.prototype.fi = function () {
          var v508 = this.bi[0];
          v508.ii();
          v508.ji();
          this.ki();
        };
        f111.prototype.li = function () {
          return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
        };
        f111.prototype.ki = function () {
          if (this.li()) {
            this.I(this.aa);
          }
        };
        return f111;
      }();
      var vF32 = function () {
        function f113() {
          this.ag = [];
          this.$f = [];
        }
        f113.Vg = function (p507, p508) {
          return {
            bg: p507,
            M: p508
          };
        };
        f113.Wg = function (p509, p510) {
          return {
            _f: p509,
            M: p510
          };
        };
        return f113;
      }();
      var vF33 = function () {
        function f114() {
          this.ni = [];
          this.oi = [];
          this.pi = [];
          this.qi = false;
          this.ri = vLSGuest;
          this.si = {};
          this.ti = null;
        }
        var vLSGuest = "guest";
        f114.prototype.a = function () {
          this.vi();
        };
        f114.prototype.X = function () {
          if (this.qi) {
            return this.si.userId;
          } else {
            return "";
          }
        };
        f114.prototype.wi = function () {
          if (this.qi) {
            return this.si.username;
          } else {
            return "";
          }
        };
        f114.prototype.ga = function () {
          if (this.qi) {
            return this.si.nickname;
          } else {
            return "";
          }
        };
        f114.prototype.xi = function () {
          if (this.qi) {
            return this.si.avatarUrl;
          } else {
            return vLSimagesguestavatarxma;
          }
        };
        f114.prototype.yi = function () {
          return this.qi && this.si.isBuyer;
        };
        f114.prototype.Z = function () {
          return this.qi && this.si.isConsentGiven;
        };
        f114.prototype.zi = function () {
          if (this.qi) {
            return this.si.coins;
          } else {
            return 0;
          }
        };
        f114.prototype.Ai = function () {
          if (this.qi) {
            return this.si.level;
          } else {
            return 1;
          }
        };
        f114.prototype.Bi = function () {
          if (this.qi) {
            return this.si.expOnLevel;
          } else {
            return 0;
          }
        };
        f114.prototype.Ci = function () {
          if (this.qi) {
            return this.si.expToNext;
          } else {
            return 50;
          }
        };
        f114.prototype.Di = function () {
          if (this.qi) {
            return this.si.skinId;
          } else {
            return 0;
          }
        };
        f114.prototype.Ei = function () {
          if (this.qi) {
            return this.si.eyesId;
          } else {
            return 0;
          }
        };
        f114.prototype.Fi = function () {
          if (this.qi) {
            return this.si.mouthId;
          } else {
            return 0;
          }
        };
        f114.prototype.Gi = function () {
          if (this.qi) {
            return this.si.glassesId;
          } else {
            return 0;
          }
        };
        f114.prototype.Hi = function () {
          if (this.qi) {
            return this.si.hatId;
          } else {
            return 0;
          }
        };
        f114.prototype.Ii = function () {
          if (this.qi) {
            return this.si.highScore;
          } else {
            return 0;
          }
        };
        f114.prototype.Ji = function () {
          if (this.qi) {
            return this.si.bestSurvivalTimeSec;
          } else {
            return 0;
          }
        };
        f114.prototype.Ki = function () {
          if (this.qi) {
            return this.si.kills;
          } else {
            return 0;
          }
        };
        f114.prototype.Li = function () {
          if (this.qi) {
            return this.si.headShots;
          } else {
            return 0;
          }
        };
        f114.prototype.Mi = function () {
          if (this.qi) {
            return this.si.sessionsPlayed;
          } else {
            return 0;
          }
        };
        f114.prototype.Ni = function () {
          if (this.qi) {
            return this.si.totalPlayTimeSec;
          } else {
            return 0;
          }
        };
        f114.prototype.Oi = function () {
          if (this.qi) {
            return this.si.regDate;
          } else {
            return {};
          }
        };
        f114.prototype.V = function (p511) {
          this.ni.push(p511);
          p511();
        };
        f114.prototype.Pi = function (p512) {
          this.oi.push(p512);
          p512();
        };
        f114.prototype.Qi = function (p513) {
          this.pi.push(p513);
        };
        f114.prototype.Ch = function (p514, p515) {
          var v509 = this.si.propertyList.concat(vO11.pL || []);
          if (!v509) {
            return false;
          }
          for (var vLN074 = 0; vLN074 < v509.length; vLN074++) {
            var v510 = v509[vLN074];
            if (v510.id == p514 && v510.type === p515) {
              return true;
            }
          }
          return false;
        };
        f114.prototype.P = function () {
          return this.qi;
        };
        f114.prototype.ea = function () {
          return this.ri;
        };
        f114.prototype.Q = function (p516) {
          var vThis8 = this;
          if (this.qi) {
            this.Ri(function (p517) {
              if (p517) {
                var v511 = vThis8.zi();
                var v512 = vThis8.Ai();
                vThis8.si = p517;
                f129(vThis8.si);
                vThis8.Si();
                var v513 = vThis8.zi();
                var v514 = vThis8.Ai();
                if (v514 > 1 && v514 != v512) {
                  f53().s.aa.Ti(new v_0x2bb75b(v514));
                }
                var v515 = v513 - v511;
                if (v515 >= 20) {
                  f53().s.aa.Ti(new v_0x1102e1(v515));
                }
              }
              if (p516) {
                p516();
              }
            });
          }
        };
        f114.prototype.Ri = function (p518) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (p519) {
            p518(p519.user_data);
          });
        };
        f114.prototype.Ui = function (p520, p521, p522) {
          var vThis9 = this;
          $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p520 + "&type=" + p521, function (p523) {
            if (p523.code == 1200) {
              vThis9.Q(p522);
            } else {
              p522();
            }
          }).fail(function () {
            p522();
          });
        };
        f114.prototype.Vi = function () {
          var vThis10 = this;
          this.Wi();
          if (typeof FB != "undefined") {
            FB.getLoginStatus(function (p524) {
              if (p524.status !== "connected") {
                FB.login(function (p525) {
                  if (p525.status === "connected" && p525.authResponse && p525.authResponse.accessToken) {
                    vThis10.Yi("facebook", "fb_" + p525.authResponse.accessToken);
                  } else {
                    vThis10.Xi();
                  }
                });
              } else if (p524.authResponse && p524.authResponse.accessToken) {
                vThis10.Yi("facebook", "fb_" + p524.authResponse.accessToken);
              } else {
                vThis10.Xi();
              }
            });
          } else {
            this.Xi();
          }
        };
        f114.prototype.Zi = function () {
          var vThis11 = this;
          this.Wi();
          if (typeof v175 !== "undefined") {
            console.log("gsi:l");
            v175.then(function () {
              console.log("gsi:then");
              if (v175.isSignedIn.get()) {
                console.log("gsi:sil");
                var v516 = v175.currentUser.get();
                vThis11.Yi("google", "gg_" + v516.getAuthResponse().id_token);
              } else {
                v175.signIn().then(function (p526) {
                  if (typeof p526.error !== "undefined") {
                    console.log("gsi:e: " + p526.error);
                    vThis11.Xi();
                    return;
                  }
                  if (p526.isSignedIn()) {
                    console.log("gsi:s");
                    vThis11.Yi("google", "gg_" + p526.getAuthResponse().id_token);
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
        f114.prototype.Wi = function () {
          console.log("iSI: " + this.qi);
          var v517 = this.ri;
          var v518 = this.ti;
          this.qi = false;
          this.ri = vLSGuest;
          this.si = {};
          this.ti = null;
          f55(vF14.Oe, "", 60);
          switch (v518) {
            case "facebook":
              this.$i();
              break;
            case "google":
              this._i();
          }
          if (v517 !== this.ri) {
            this.aj();
          } else {
            this.Si();
          }
        };
        f114.prototype.bj = function () {
          console.log("dA");
          if (this.qi) {
            $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (p527) {
              if (p527.code === 1200) {
                console.log("dA: OK");
              } else {
                console.log("dA: NO");
              }
            }).fail(function () {
              console.log("dA: FAIL");
            });
          }
        };
        f114.prototype.vi = function () {
          console.log("rs");
          var vF54 = f54(vF14.Oe);
          var vThis12 = this;
          if (vF54 == "facebook") {
            console.log("rs:fb");
            (function f115() {
              if (typeof FB != "undefined") {
                vThis12.Vi();
              } else {
                setTimeout(f115, 100);
              }
            })();
          } else if (vF54 == "google") {
            console.log("rs:gg");
            (function f116() {
              if (v175 !== undefined) {
                vThis12.Zi();
              } else {
                setTimeout(f116, 100);
              }
            })();
          } else {
            console.log("rs:lo");
            this.Wi();
          }
        };
        f114.prototype.aj = function () {
          for (var vLN075 = 0; vLN075 < this.ni.length; vLN075++) {
            this.ni[vLN075]();
          }
          this.Si();
        };
        f114.prototype.Si = function () {
          for (var vLN076 = 0; vLN076 < this.oi.length; vLN076++) {
            this.oi[vLN076]();
          }
          var v519 = this.pi;
          this.pi = [];
          for (var vLN077 = 0; vLN077 < v519.length; vLN077++) {
            v519[vLN077]();
          }
        };
        f114.prototype.Yi = function (p528, p529) {
          var vThis13 = this;
          $.get(vAtob + "/pub/wuid/" + p529 + "/login", function (p530) {
            if (p530 && p530.user_data) {
              f24(p530.user_data.userId);
              f23(p530.user_data);
              f129(p530.user_data);
              var v520 = this.ri;
              vThis13.qi = true;
              vThis13.ri = p529;
              vThis13.si = p530.user_data;
              vThis13.ti = p528;
              f55(vF14.Oe, vThis13.ti, 60);
              vF5(vUndefined2);
              vF3(p530);
              lxpduserId = p530.user_data.userId;
              $("#wtr-settings-id").text("ID: " + lxpduserId);
              vO11.loading = false;
              if (v520 !== p529) {
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
        f114.prototype.Xi = function () {
          this.Wi();
        };
        f114.prototype.$i = function () {
          console.log("lo:fb");
          FB.logout(function () {});
        };
        f114.prototype._i = function () {
          console.log("lo:gg");
          v175.signOut();
        };
        return f114;
      }();
      var vF34 = function () {
        function e() {
          this.cj = {};
          this.cj[v524] = [1, 0.5, 0.25, 0.5];
          this.cj[v525] = vF7._b.WHITE;
          this.cj[v526] = [0, 0];
          this.cj[v527] = [0, 0];
          var v521 = vF7.cc.from(v530, v531, this.cj);
          this.zf = new vF7.hc(v529, v521);
        }
        var v522 = "a1_" + f72();
        var v523 = "a2_" + f72();
        var vAtob3 = "translationMatrix";
        var vAtob4 = "projectionMatrix";
        var v524 = "u3_" + f72();
        var v525 = "u4_" + f72();
        var v526 = "u5_" + f72();
        var v527 = "u6_" + f72();
        var v528 = "v1_" + f72();
        var v529 = new vF7.gc().addAttribute(v522, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v523, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
        var v530 = "precision mediump float;attribute vec2 " + v522 + ";attribute vec2 " + v523 + ";uniform mat3 " + vAtob3 + ";uniform mat3 " + vAtob4 + ";varying vec2 " + v528 + ";void main(){" + v528 + "=" + v523 + ";gl_Position=vec4((" + vAtob4 + "*" + vAtob3 + "*vec3(" + v522 + ",1.0)).xy,0.0,1.0);}";
        var v531 = "precision highp float;varying vec2 " + v528 + ";uniform vec4 " + v524 + ";uniform sampler2D " + v525 + ";uniform vec2 " + v526 + ";uniform vec2 " + v527 + ";void main(){vec2 coord=" + v528 + "*" + v526 + "+" + v527 + ";vec4 v_color_mix=" + v524 + ";gl_FragColor=texture2D(" + v525 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
        e.prototype.Hf = function (p531, p532, p533, p534) {
          var v532 = this.cj[v524];
          v532[0] = p531;
          v532[1] = p532;
          v532[2] = p533;
          v532[3] = p534;
        };
        e.prototype.Bf = function (p535) {
          this.cj[v525] = p535;
        };
        e.prototype.Te = function (p536, p537, p538, p539) {
          this.zf.position.x = p536;
          this.zf.position.y = p537;
          this.zf.scale.x = p538;
          this.zf.scale.y = p539;
          var v533 = this.cj[v526];
          v533[0] = p538 * 0.2520615384615385;
          v533[1] = p539 * 0.4357063736263738;
          var v534 = this.cj[v527];
          v534[0] = p536 * 0.2520615384615385;
          v534[1] = p537 * 0.4357063736263738;
        };
        return e;
      }();
      var vF35 = function () {
        function f118() {
          this.jh = new vF7.ec();
          this.dj = 0;
          this.ej = 0;
        }
        f118.prototype.kh = function (p540) {
          this.jh.texture = p540.Hc;
          this.jh.anchor.set(p540.Lh, p540.Mh);
          this.dj = p540.Nh;
          this.ej = p540.Oh;
        };
        f118.prototype.oh = function (p541) {
          this.jh.width = p541 * this.dj;
          this.jh.height = p541 * this.ej;
        };
        f118.prototype.fj = function (p542) {
          this.jh.rotation = p542;
        };
        f118.prototype.nh = function (p543, p544) {
          this.jh.position.set(p543, p544);
        };
        f118.prototype.Mg = function (p545) {
          this.jh.visible = p545;
        };
        f118.prototype.gj = function () {
          return this.jh.visible;
        };
        f118.prototype.qh = function (p546) {
          this.jh.alpha = p546;
        };
        f118.prototype.Mf = function () {
          return this.jh;
        };
        f118.prototype.ih = function () {
          f70(this.jh);
        };
        return f118;
      }();
      var vF36 = function () {
        function f119(p547) {
          this.fb = p547;
          this.Mb = new vF36.Config();
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
          this.Tb();
        }
        var vLN200 = 200;
        f119.prototype.Kb = function () {
          if (this.pj != null) {
            f70(this.pj.Rf);
          }
          if (this.qj != null) {
            f70(this.qj);
          }
        };
        f119.prototype.Tb = function () {
          this.Ig(0.25);
          this.Mb.ad = "";
          this.Ib = true;
          this.Ff = {};
          this.Mg(false);
        };
        f119.prototype.Fg = function (p548) {
          this.Mb = p548;
          this.rj(this.Hb);
        };
        f119.prototype.Mg = function (p549) {
          var v535 = this.Hb;
          this.Hb = p549;
          this.rj(v535);
        };
        f119.prototype.Ig = function (p550) {
          this.M = p550 * 50;
          var vP550 = p550;
          if (p550 > this.fb.cf) {
            vP550 = Math.atan((p550 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
          }
          var v536 = Math.sqrt(Math.pow(vP550 * 5, 0.707106781186548) * 4 + 25);
          var v537 = Math.min(vLN200, Math.max(3, (v536 - 5) * 5 + 1));
          var v538 = this.kj;
          this.Db = (5 + v536 * 0.9) * 0.025;
          this.kj = Math.floor(v537);
          this.ij = v537 - this.kj;
          if (v538 > 0 && v538 < this.kj) {
            var v539 = this.lj[v538 * 2 - 2];
            var v540 = this.lj[v538 * 2 - 1];
            var v541 = this.mj[v538 * 2 - 2];
            var v542 = this.mj[v538 * 2 - 1];
            var v543 = this.nj[v538 * 2 - 2];
            var v544 = this.nj[v538 * 2 - 1];
            for (var vV538 = v538; vV538 < this.kj; vV538++) {
              this.lj[vV538 * 2] = v539;
              this.lj[vV538 * 2 + 1] = v540;
              this.mj[vV538 * 2] = v541;
              this.mj[vV538 * 2 + 1] = v542;
              this.nj[vV538 * 2] = v543;
              this.nj[vV538 * 2 + 1] = v544;
            }
          }
        };
        f119.prototype.Lg = function (p551, p552) {
          this.kj = p552;
          for (var vLN078 = 0; vLN078 < this.kj; vLN078++) {
            this.lj[vLN078 * 2] = this.mj[vLN078 * 2] = this.nj[vLN078 * 2] = p551();
            this.lj[vLN078 * 2 + 1] = this.mj[vLN078 * 2 + 1] = this.nj[vLN078 * 2 + 1] = p551();
          }
        };
        f119.prototype.Kg = function (p553, p554, p555) {
          this.hj = p555;
          for (var vLN079 = 0; vLN079 < this.kj; vLN079++) {
            this.lj[vLN079 * 2] = this.mj[vLN079 * 2];
            this.lj[vLN079 * 2 + 1] = this.mj[vLN079 * 2 + 1];
          }
          var v545 = p553 - this.mj[0];
          var v546 = p554 - this.mj[1];
          this.sj(v545, v546, this.kj, this.mj);
        };
        f119.prototype.sj = function (p556, p557, p558, p559) {
          var v547 = Math.hypot(p556, p557);
          if (!(v547 <= 0)) {
            var v548 = p559[0];
            var vUndefined7 = undefined;
            p559[0] += p556;
            var v549 = p559[1];
            var vUndefined8 = undefined;
            p559[1] += p557;
            var v550 = this.Db / (this.Db + v547);
            var v551 = 1 - v550 * 2;
            for (var vLN15 = 1, v552 = p558 - 1; vLN15 < v552; vLN15++) {
              vUndefined7 = p559[vLN15 * 2];
              p559[vLN15 * 2] = p559[vLN15 * 2 - 2] * v551 + (vUndefined7 + v548) * v550;
              v548 = vUndefined7;
              vUndefined8 = p559[vLN15 * 2 + 1];
              p559[vLN15 * 2 + 1] = p559[vLN15 * 2 - 1] * v551 + (vUndefined8 + v549) * v550;
              v549 = vUndefined8;
            }
            v551 = 1 - (v550 = this.ij * this.Db / (this.ij * this.Db + v547)) * 2;
            p559[p558 * 2 - 2] = p559[p558 * 2 - 4] * v551 + (p559[p558 * 2 - 2] + v548) * v550;
            p559[p558 * 2 - 1] = p559[p558 * 2 - 3] * v551 + (p559[p558 * 2 - 1] + v549) * v550;
          }
        };
        f119.prototype.Gf = function () {
          return {
            x: this.nj[0],
            y: this.nj[1]
          };
        };
        f119.prototype.Hg = function (p560, p561) {
          var vLN1000000 = 1000000;
          var vP560 = p560;
          var vP561 = p561;
          for (var vLN080 = 0; vLN080 < this.kj; vLN080++) {
            var v553 = this.nj[vLN080 * 2];
            var v554 = this.nj[vLN080 * 2 + 1];
            var v555 = Math.hypot(p560 - v553, p561 - v554);
            if (v555 < vLN1000000) {
              vLN1000000 = v555;
              vP560 = v553;
              vP561 = v554;
            }
          }
          return {
            x: vP560,
            y: vP561,
            distance: vLN1000000
          };
        };
        f119.prototype.vb = function (p562) {
          this.oj = p562;
        };
        f119.prototype.Fb = function (p563, p564) {
          this.Jb = f65(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p563 / 400 * Math.PI) * 0.1 : 1 : 0, p564, 1 / 800);
          this.jj = f65(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p564, 0.0025);
          if (this.pj != null) {
            this.pj.Rf.alpha = this.Jb;
          }
          if (this.qj != null) {
            this.qj.alpha = this.Jb;
          }
        };
        f119.prototype.Gb = function (p565, p566, p567, p568) {
          if (this.Hb && this.Ib) {
            var v556 = Math.pow(0.11112, p566 / 95);
            for (var vLN081 = 0; vLN081 < this.kj; vLN081++) {
              var vF67 = f67(this.lj[vLN081 * 2], this.mj[vLN081 * 2], p567);
              var vF672 = f67(this.lj[vLN081 * 2 + 1], this.mj[vLN081 * 2 + 1], p567);
              this.nj[vLN081 * 2] = f67(vF67, this.nj[vLN081 * 2], v556);
              this.nj[vLN081 * 2 + 1] = f67(vF672, this.nj[vLN081 * 2 + 1], v556);
            }
          }
          if (this.pj != null && this.Hb) {
            this.pj.tj(this, p565, p566, p568);
          }
          if (this.qj != null) {
            this.qj.If.x = this.nj[0];
            this.qj.If.y = this.nj[1] - this.Db * 3;
          }
        };
        f119.prototype.rj = function (p569) {
          if (this.Hb) {
            if (!p569) {
              this.uj();
            }
            this.uj();
          } else {
            if (this.pj != null) {
              this.uj();
              f70(this.pj.Rf);
            }
            if (this.qj != null) {
              f70(this.qj);
            }
          }
        };
        f119.prototype.uj = function () {
          var vF536 = f53();
          if (this.pj == null) {
            this.pj = new vF37();
          } else {
            f70(this.pj.Rf);
          }
          this.pj.hh(vF536.o.fb.af, vF536.p.Dc().ed(this.Mb.cg), vF536.p.Dc().dd(this.Mb.dg), vF536.p.Dc().fd(this.Mb.Bg), vF536.p.Dc().gd(this.Mb.Cg), vF536.p.Dc().hd(this.Mb.Dg), vF536.p.Dc().jd(this.Mb.Eg));
          if (this.qj == null) {
            this.qj = new vF617("");
            this.qj.style.fontFamily = "PTSans";
            this.qj.anchor.set(0.5);
          } else {
            f70(this.qj);
          }
          this.qj.style.fontSize = 14;
          this.qj.style.fill = vF536.p.Dc().dd(this.Mb.dg)._c;
          this.qj.text = this.Mb.ad;
          this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
        };
        f119.Config = function () {
          this.Lb = 0;
          this.cg = vF17.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        };
        return f119;
      }();
      var vF617 = f61(vF7.fc, function (p570, p571, p572) {
        vF7.fc.call(this, p570, p571, p572);
        this.If = {
          x: 0,
          y: 0
        };
      });
      var vF37 = function () {
        function e() {
          this.Rf = new vF7.Zb();
          this.Rf.sortableChildren = true;
          this.vj = new vV567();
          this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
          this.wj = 0;
          this.xj = new Array(vLN797);
          this.xj[0] = this.yj(0, new vF35(), new vF35());
          for (var vLN16 = 1; vLN16 < vLN797; vLN16++) {
            this.xj[vLN16] = this.yj(vLN16, new vF35(), new vF35());
          }
          this.zj = 0;
          this.Aj = 0;
          this.Bj = 0;
        }
        var vLN0001 = 0.001;
        var vLN797 = 797;
        var v557 = Math.PI * 0.1;
        var v558 = -0.06640625;
        var vLN084375 = 0.84375;
        var vLN02578125 = 0.2578125;
        var v559 = -0.03515625;
        var v560 = -0.0625;
        var vLN05625 = 0.5625;
        var vLN064453125 = 0.64453125;
        var vLN045703125 = 0.45703125;
        var v561 = -0.1015625;
        var vLN0375 = 0.375;
        var vLN0752 = 0.75;
        var v562 = -0.125;
        var vLN015234375 = 0.15234375;
        var vLN094921875 = 0.94921875;
        var v563 = -0.1015625;
        e.prototype.yj = function (p573, p574, p575) {
          var v564 = new vF38(p574, p575);
          p574.jh.zIndex = vLN0001 * ((vLN797 - p573) * 2 + 1 + 3);
          p575.jh.zIndex = vLN0001 * ((vLN797 - p573) * 2 - 2 + 3);
          return v564;
        };
        e.prototype.hh = function (p576, p577, p578, p579, p580, p581, p582) {
          var v565 = p578.Zc;
          var v566 = p576 == vO32._e ? p577.bd.$c : p578.$c;
          if (v565.length > 0 && v566.length > 0) {
            for (var vLN082 = 0; vLN082 < this.xj.length; vLN082++) {
              this.xj[vLN082].Nf.kh(v565[vLN082 % v565.length]);
              this.xj[vLN082].Pf.kh(v566[vLN082 % v566.length]);
            }
          }
          this.vj.hh(p579, p580, p581, p582);
        };
        var v567;
        (v567 = f61(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF7.Zb();
          this.Hj = [];
          for (var vLN083 = 0; vLN083 < 4; vLN083++) {
            var v568 = new vF35();
            v568.kh(f53().q.Ph);
            this.Gj.addChild(v568.jh);
            this.Hj.push(v568);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF35();
          this.Jj.kh(f53().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.flx = new vF35();
          this.flx.kh(f53().q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new vF35();
          this.xxx5.kh(f53().q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new vF35();
          this.xxx2.kh(f53().q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new vF35();
          this.xxx10.kh(f53().q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new vF35();
          this.xxxLupatype.kh(f53().q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        })).prototype.hh = function (p583, p584, p585, p586) {
          this.Lj(0.002, this.Cj, p583.Zc);
          this.Lj(0.003, this.Dj, p584.Zc);
          this.Lj(0.004, this.Fj, p586.Zc);
          this.Lj(0.005, this.Ej, p585.Zc);
        };
        v567.prototype.Lj = function (p587, p588, p589) {
          while (p589.length > p588.length) {
            var v569 = new vF35();
            p588.push(v569);
            this.addChild(v569.Mf());
          }
          while (p589.length < p588.length) {
            p588.pop().ih();
          }
          var vP587 = p587;
          for (var vLN084 = 0; vLN084 < p589.length; vLN084++) {
            vP587 += 0.0001;
            var v570 = p588[vLN084];
            v570.kh(p589[vLN084]);
            v570.jh.zIndex = vP587;
          }
        };
        v567.prototype.mh = function (p590, p591, p592, p593) {
          this.visible = true;
          this.position.set(p590, p591);
          this.rotation = p593;
          for (var vLN085 = 0; vLN085 < this.Cj.length; vLN085++) {
            this.Cj[vLN085].oh(p592);
          }
          for (var vLN086 = 0; vLN086 < this.Dj.length; vLN086++) {
            this.Dj[vLN086].oh(p592);
          }
          for (var vLN087 = 0; vLN087 < this.Ej.length; vLN087++) {
            this.Ej[vLN087].oh(p592);
          }
          for (var vLN088 = 0; vLN088 < this.Fj.length; vLN088++) {
            this.Fj[vLN088].oh(p592);
          }
        };
        v567.prototype.lh = function () {
          this.visible = false;
        };
        v567.prototype.Mj = function (p594, p595, p596, p597) {
          this.Gj.visible = true;
          var v571 = p596 / 1000;
          var v572 = 1 / this.Hj.length;
          for (var vLN089 = 0; vLN089 < this.Hj.length; vLN089++) {
            var v573 = 1 - (v571 + v572 * vLN089) % 1;
            this.Hj[vLN089].jh.alpha = 1 - v573;
            this.Hj[vLN089].oh(p595 * (0.5 + v573 * 4.5));
          }
        };
        v567.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        v567.prototype.Nj = function (p598, p599, p600, p601) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f65(this.Jj.jh.alpha, p598.hj ? 0.9 : 0.2, p601, 0.0025);
          this.Jj.oh(p599);
        };
        v567.prototype.Nflex = function (p602, p603, p604, p605) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = f65(this.Jj.jh.alpha, p602.hj ? 0.9 : 0.2, p605, 0.0025);
          this.flx.oh(p603);
        };
        v567.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        v567.prototype.ActiveX5 = function (p606, p607, p608, p609) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = f65(this.Jj.jh.alpha, p606.hj ? 0.9 : 0.2, p609, 0.0025);
          this.xxx5.oh(p607);
        };
        v567.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        v567.prototype.ActiveX2 = function (p610, p611, p612, p613) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = f65(this.Jj.jh.alpha, p610.hj ? 0.9 : 0.2, p613, 0.0025);
          this.xxx2.oh(p611);
        };
        v567.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        v567.prototype.ActiveX10 = function (p614, p615, p616, p617) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = f65(this.Jj.jh.alpha, p614.hj ? 0.9 : 0.2, p617, 0.0025);
          this.xxx10.oh(p615);
        };
        v567.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        v567.prototype.ActiveZlupa = function (p618, p619, p620, p621) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = f65(this.Jj.jh.alpha, p618.hj ? 0.9 : 0.2, p621, 0.0025);
          this.xxxLupatype.oh(p619);
        };
        v567.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        v567.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        var vV567 = v567;
        e.prototype.Oj = function (p622) {
          return this.Aj + this.Bj * Math.sin(p622 * v557 - this.zj);
        };
        e.prototype.tj = function (p623, p624, p625, p626) {
          var v574 = p623.Db * 2;
          var v575 = p623.nj;
          var v576 = p623.kj;
          var v577 = v576 * 4 - 3;
          var vV577 = v577;
          this.zj = p624 / 400 * Math.PI;
          this.Aj = v574 * 1.5;
          this.Bj = v574 * 0.15 * p623.jj;
          var vUndefined9 = undefined;
          var vUndefined10 = undefined;
          var vUndefined11 = undefined;
          var vUndefined12 = undefined;
          var vUndefined13 = undefined;
          var vUndefined14 = undefined;
          var vUndefined15 = undefined;
          var vUndefined16 = undefined;
          if (p626(vUndefined10 = v575[0], vUndefined14 = v575[1])) {
            vUndefined11 = v575[2];
            vUndefined15 = v575[3];
            vUndefined12 = v575[4];
            vUndefined16 = v575[5];
            var v578 = Math.atan2(vUndefined16 + vUndefined14 * 2 - vUndefined15 * 3, vUndefined12 + vUndefined10 * 2 - vUndefined11 * 3);
            this.vj.mh(vUndefined10, vUndefined14, v574, v578);
            this.xj[0].mh(vUndefined10, vUndefined14, v574, this.Oj(0), v578);
            this.xj[1].mh(vLN064453125 * vUndefined10 + vLN045703125 * vUndefined11 + v561 * vUndefined12, vLN064453125 * vUndefined14 + vLN045703125 * vUndefined15 + v561 * vUndefined16, v574, this.Oj(1), vF38.angleBetween(this.xj[0], this.xj[2]));
            this.xj[2].mh(vLN0375 * vUndefined10 + vLN0752 * vUndefined11 + v562 * vUndefined12, vLN0375 * vUndefined14 + vLN0752 * vUndefined15 + v562 * vUndefined16, v574, this.Oj(2), vF38.angleBetween(this.xj[1], this.xj[3]));
            this.xj[3].mh(vLN015234375 * vUndefined10 + vLN094921875 * vUndefined11 + v563 * vUndefined12, vLN015234375 * vUndefined14 + vLN094921875 * vUndefined15 + v563 * vUndefined16, v574, this.Oj(3), vF38.angleBetween(this.xj[2], this.xj[4]));
          } else {
            this.vj.lh();
            this.xj[0].lh();
            this.xj[1].lh();
            this.xj[2].lh();
            this.xj[3].lh();
          }
          var vLN42 = 4;
          for (var vLN22 = 2, v579 = v576 * 2 - 4; vLN22 < v579; vLN22 += 2) {
            if (p626(vUndefined10 = v575[vLN22], vUndefined14 = v575[vLN22 + 1])) {
              vUndefined9 = v575[vLN22 - 2];
              vUndefined13 = v575[vLN22 - 1];
              vUndefined11 = v575[vLN22 + 2];
              vUndefined15 = v575[vLN22 + 3];
              vUndefined12 = v575[vLN22 + 4];
              vUndefined16 = v575[vLN22 + 5];
              this.xj[vLN42].mh(vUndefined10, vUndefined14, v574, this.Oj(vLN42), vF38.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
              vLN42++;
              this.xj[vLN42].mh(v558 * vUndefined9 + vLN084375 * vUndefined10 + vLN02578125 * vUndefined11 + v559 * vUndefined12, v558 * vUndefined13 + vLN084375 * vUndefined14 + vLN02578125 * vUndefined15 + v559 * vUndefined16, v574, this.Oj(vLN42), vF38.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
              vLN42++;
              this.xj[vLN42].mh(v560 * vUndefined9 + vLN05625 * vUndefined10 + vLN05625 * vUndefined11 + v560 * vUndefined12, v560 * vUndefined13 + vLN05625 * vUndefined14 + vLN05625 * vUndefined15 + v560 * vUndefined16, v574, this.Oj(vLN42), vF38.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
              vLN42++;
              this.xj[vLN42].mh(v559 * vUndefined9 + vLN02578125 * vUndefined10 + vLN084375 * vUndefined11 + v558 * vUndefined12, v559 * vUndefined13 + vLN02578125 * vUndefined14 + vLN084375 * vUndefined15 + v558 * vUndefined16, v574, this.Oj(vLN42), vF38.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
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
          if (p626(vUndefined10 = v575[v576 * 2 - 4], vUndefined14 = v575[v576 * 2 - 3])) {
            vUndefined9 = v575[v576 * 2 - 6];
            vUndefined13 = v575[v576 * 2 - 5];
            vUndefined11 = v575[v576 * 2 - 2];
            vUndefined15 = v575[v576 * 2 - 1];
            this.xj[v577 - 5].mh(vUndefined10, vUndefined14, v574, this.Oj(v577 - 5), vF38.angleBetween(this.xj[v577 - 6], this.xj[v577 - 4]));
            this.xj[v577 - 4].mh(v563 * vUndefined9 + vLN094921875 * vUndefined10 + vLN015234375 * vUndefined11, v563 * vUndefined13 + vLN094921875 * vUndefined14 + vLN015234375 * vUndefined15, v574, this.Oj(v577 - 4), vF38.angleBetween(this.xj[v577 - 5], this.xj[v577 - 3]));
            this.xj[v577 - 3].mh(v562 * vUndefined9 + vLN0752 * vUndefined10 + vLN0375 * vUndefined11, v562 * vUndefined13 + vLN0752 * vUndefined14 + vLN0375 * vUndefined15, v574, this.Oj(v577 - 3), vF38.angleBetween(this.xj[v577 - 4], this.xj[v577 - 2]));
            this.xj[v577 - 2].mh(v561 * vUndefined9 + vLN045703125 * vUndefined10 + vLN064453125 * vUndefined11, v561 * vUndefined13 + vLN045703125 * vUndefined14 + vLN064453125 * vUndefined15, v574, this.Oj(v577 - 2), vF38.angleBetween(this.xj[v577 - 3], this.xj[v577 - 1]));
            this.xj[v577 - 1].mh(vUndefined11, vUndefined15, v574, this.Oj(v577 - 1), vF38.angleBetween(this.xj[v577 - 2], this.xj[v577 - 1]));
          } else {
            this.xj[v577 - 5].lh();
            this.xj[v577 - 4].lh();
            this.xj[v577 - 3].lh();
            this.xj[v577 - 2].lh();
            this.xj[v577 - 1].lh();
          }
          if (this.wj == 0 && vV577 > 0) {
            this.Rf.addChild(this.vj);
          }
          if (this.wj > 0 && vV577 == 0) {
            f70(this.vj);
          }
          while (this.wj < vV577) {
            this.Rf.addChild(this.xj[this.wj].Nf.Mf());
            this.Rf.addChild(this.xj[this.wj].Pf.Mf());
            this.wj += 1;
          }
          while (this.wj > vV577) {
            this.wj -= 1;
            this.xj[this.wj].Pf.ih();
            this.xj[this.wj].Nf.ih();
          }
          window.playerX = p623.qj.If.x;
          window.playerY = p623.qj.If.y;
          var v580 = p623.Ff[vF8.MAGNETIC_TYPE];
          if (this.xj[0].gj() && v580 != null && v580.sc) {
            this.vj.Mj(p623, v574, p624, p625);
          } else {
            this.vj.Ij();
          }
          var v581 = p623.Ff[vF8.VELOCITY_TYPE];
          if (this.xj[0].gj() && v581 != null && v581.sc) {
            this.vj.Nj(p623, v574, p624, p625);
          } else {
            this.vj.Kj();
          }
          var v582 = p623.Ff[vF8.FLEXIBLE_TYPE];
          if (vO15.visiblePowersSpeedZigZag && this.xj[0].gj() && v582 != null && v582.sc) {
            this.vj.Nflex(p623, v574, p624, p625);
          } else {
            this.vj.flexx();
          }
          var v583 = p623.Ff[vF8.X5_TYPE];
          if (vO15.visiblePowersAll && this.xj[0].gj() && v583 != null && v583.sc) {
            this.vj.ActiveX5(p623, v574, p624, p625);
          } else {
            this.vj.xXx5();
          }
          var v584 = p623.Ff[vF8.X2_TYPE];
          if (vO15.visiblePowersAll && this.xj[0].gj() && v584 != null && v584.sc) {
            this.vj.ActiveX2(p623, v574, p624, p625);
          } else {
            this.vj.xXx2();
          }
          var v585 = p623.Ff[vF8.X10_TYPE];
          if (vO15.visiblePowersAll && this.xj[0].gj() && v585 != null && v585.sc) {
            this.vj.ActiveX10(p623, v574, p624, p625);
          } else {
            this.vj.xXx10();
          }
          var v586 = p623.Ff[vF8.ZOOM_TYPE];
          if (vO15.visiblePowersAll && this.xj[0].gj() && v586 != null && v586.sc) {
            this.vj.ActiveZlupa(p623, v574, p624, p625);
          } else {
            this.vj.xXxLupaZ();
          }
        };
        var vF38 = function () {
          function f121(p627, p628) {
            this.Nf = p627;
            this.Nf.Mg(false);
            this.Pf = p628;
            this.Pf.Mg(false);
          }
          f121.prototype.mh = function (p629, p630, p631, p632, p633) {
            this.Nf.Mg(true);
            this.Nf.nh(p629, p630);
            this.Nf.oh(p631);
            this.Nf.fj(p633);
            this.Pf.Mg(true);
            this.Pf.nh(p629, p630);
            this.Pf.oh(p632);
            this.Pf.fj(p633);
          };
          f121.prototype.lh = function () {
            this.Nf.Mg(false);
            this.Pf.Mg(false);
          };
          f121.prototype.gj = function () {
            return this.Nf.gj();
          };
          f121.angleBetween = function (p634, p635) {
            return Math.atan2(p634.Nf.jh.position.y - p635.Nf.jh.position.y, p634.Nf.jh.position.x - p635.Nf.jh.position.x);
          };
          return f121;
        }();
        return e;
      }();
      var vF39 = function () {
        function f122(p636) {
          this.se = p636;
          this.te = p636.get()[0];
          this.ue = new vF7.ac({
            view: this.te,
            transparent: true
          });
          this.sc = false;
          this.Pj = new vF37();
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
          f53().p.ca(function () {
            if (f53().p.W()) {
              vThis14.Fb();
            }
          });
        }
        f122.prototype.Fb = function () {
          var vF537 = f53();
          this.Pj.hh(vO32.$e, null, vF537.p.Dc().dd(this.rh), vF537.p.Dc().fd(this.sh), vF537.p.Dc().gd(this.th), vF537.p.Dc().hd(this.uh), vF537.p.Dc().jd(this.vh));
        };
        f122.prototype.Le = function (p637) {
          this.sc = p637;
        };
        f122.prototype.ak = function (p638, p639, p640) {
          this.rh = p638;
          this.Sj = p639;
          this.Xj = p640;
          this.Fb();
        };
        f122.prototype.bk = function (p641, p642, p643) {
          this.sh = p641;
          this.Tj = p642;
          this.Yj = p643;
          this.Fb();
        };
        f122.prototype.ck = function (p644, p645, p646) {
          this.th = p644;
          this.Uj = p645;
          this.Zj = p646;
          this.Fb();
        };
        f122.prototype.dk = function (p647, p648, p649) {
          this.uh = p647;
          this.Vj = p648;
          this.$j = p649;
          this.Fb();
        };
        f122.prototype.ek = function (p650, p651, p652) {
          this.vh = p650;
          this.Wj = p651;
          this._j = p652;
          this.Fb();
        };
        f122.prototype.Ra = function () {
          var v587 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          this.Qj = this.se.width();
          this.Rj = this.se.height();
          this.ue.resize(this.Qj, this.Rj);
          this.ue.resolution = v587;
          this.te.width = v587 * this.Qj;
          this.te.height = v587 * this.Rj;
          this.Ng = this.Rj / 4;
          var vF63 = f63(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
          if (this.Pj.wj != vF63) {
            for (var vVF63 = vF63; vVF63 < this.Pj.xj.length; vVF63++) {
              this.Pj.xj[vVF63].lh();
            }
            while (this.Pj.wj < vF63) {
              this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
              this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
              this.Pj.wj += 1;
            }
            while (this.Pj.wj > vF63) {
              this.Pj.wj -= 1;
              this.Pj.xj[this.Pj.wj].Pf.ih();
              this.Pj.xj[this.Pj.wj].Nf.ih();
            }
          }
        };
        f122.prototype.Pa = function () {
          if (this.sc && f53().p.W) {
            var v588 = Date.now() / 200;
            var v589 = Math.sin(v588);
            var v590 = this.Ng;
            var v591 = this.Ng * 1.5;
            var v592 = this.Qj - (this.Qj - v590 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v593 = this.Rj * 0.5;
            var vLN090 = 0;
            var vLN091 = 0;
            for (var v594 = -1; v594 < this.Pj.wj; v594++) {
              var vV594 = v594;
              var v595 = Math.cos(vV594 * 1 / 12 * Math.PI - v588) * (1 - Math.pow(16, vV594 * -1 / 12));
              if (v594 >= 0) {
                var v596 = v592 + v590 * -0.5 * vV594;
                var v597 = v593 + v590 * 0.5 * v595;
                var v598 = v590 * 2;
                var v599 = v591 * 2;
                var v600 = Math.atan2(vLN091 - v595, vV594 - vLN090);
                if (v594 == 0) {
                  this.Pj.vj.mh(v596, v597, v598, v600);
                }
                this.Pj.xj[v594].mh(v596, v597, v598, v599, v600);
                var v601 = this.Sj ? this.Xj ? 0.4 + v589 * 0.2 : 0.9 + v589 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v594].Nf.qh(v601);
                this.Pj.xj[v594].Pf.qh(v601);
              }
              vLN090 = vV594;
              vLN091 = v595;
            }
            for (var vLN092 = 0; vLN092 < this.Pj.vj.Cj.length; vLN092++) {
              var v602 = this.Tj ? this.Yj ? 0.4 + v589 * 0.2 : 0.9 + v589 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN092].qh(v602);
            }
            for (var vLN093 = 0; vLN093 < this.Pj.vj.Dj.length; vLN093++) {
              var v603 = this.Uj ? this.Zj ? 0.4 + v589 * 0.2 : 0.9 + v589 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN093].qh(v603);
            }
            for (var vLN094 = 0; vLN094 < this.Pj.vj.Ej.length; vLN094++) {
              var v604 = this.Vj ? this.$j ? 0.4 + v589 * 0.2 : 0.9 + v589 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN094].qh(v604);
            }
            for (var vLN095 = 0; vLN095 < this.Pj.vj.Fj.length; vLN095++) {
              var v605 = this.Wj ? this._j ? 0.4 + v589 * 0.2 : 0.9 + v589 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN095].qh(v605);
            }
            this.ue.render(this.Pj.Rf);
          }
        };
        return f122;
      }();
      var vF40 = function () {
        function f123(p653) {
          this.rc = p653;
        }
        f123.fk = $("#game-view");
        f123.gk = $("#results-view");
        f123.hk = $("#main-menu-view");
        f123.ik = $("#popup-view");
        f123.jk = $("#toaster-view");
        f123.kk = $("#loading-view");
        f123.lk = $("#stretch-box");
        f123.mk = $("#game-canvas");
        f123.di = $("#background-canvas");
        f123.nk = $("#social-buttons");
        f123.ok = $("#markup-wrap");
        f123.prototype.a = function () {};
        f123.prototype.ii = function () {};
        f123.prototype.ji = function () {};
        f123.prototype.ei = function () {};
        f123.prototype.Ra = function () {};
        f123.prototype.Pa = function (p654, p655) {};
        return f123;
      }();
      var vF41 = function () {
        var v$10 = $("#final-caption");
        var v$11 = $("#final-continue");
        var v$12 = $("#congrats-bg");
        var v$13 = $("#unl6wj4czdl84o9b");
        $("#congrats");
        var v$14 = $("#final-share-fb");
        var v$15 = $("#final-message");
        var v$16 = $("#final-score");
        var v$17 = $("#final-place");
        var v$18 = $("#final-board");
        var vF618 = f61(vF40, function () {
          vF40.call(this, 0);
          var vThis15 = this;
          var vF538 = f53();
          var v606 = vF40.mk.get()[0];
          console.log("sSE=" + v781.qk);
          v$10.text(f56("index.game.result.title"));
          v$11.text(f56("index.game.result.continue"));
          v$11.click(function () {
            vF538.r.Cd();
            vF538.r.G(vF11.AudioState.F);
            vF538.s.I(vF538.s.F);
          });
          $("#game-canvas").attr("tabindex", 0).focus();
          $("#game-canvas").click();
          $("#game-canvas").keypress(function (p656) {
            console.log(p656);
            if (p656.target.type !== "text") {
              if (p656.key.toLowerCase() === vO7.zoom) {
                f19(1);
              }
              if (p656.key.toLowerCase() === vO7.restart) {
                let vV532 = v53;
                if (vV532) {
                  anApp.r.Hd();
                  anApp.sa(vV532);
                  $(".snow-container").css("display", "none");
                }
              }
              if (p656.key.toLowerCase() === vO7.wormExplot) {
                const v607 = new Uint8Array([NaN, NaN]);
                anApp.o.Wb(v607);
                setTimeout(() => {
                  let vV533 = v53;
                  if (vV533) {
                    anApp.r.Hd();
                    anApp.sa(vV533);
                    $(".snow-container").css("display", "none");
                  }
                }, 1000);
              }
              if (p656.key.toLowerCase() === vO7.laserHS) {
                $("#settings-laserHS-switch").click();
              }
              if (p656.key.toLowerCase() === vO7.sectores) {
                $("#settings-sectores-switch").click();
              }
              if (p656.key.toLowerCase() === vO7.background) {
                $("#settings-backgroundSolid-switch").click();
              }
              if (p656.key.toLowerCase() === vO7.giro) {
                if (v41) {
                  v41 = false;
                  vLN55 = 55;
                  vLN1 = 1;
                  v42 = true;
                  clearInterval(v40);
                  v40 = null;
                  v60.texture = v45;
                  v60.alpha = 0.25;
                } else {
                  v60.alpha = 0.75;
                  f30();
                  v41 = true;
                }
              }
            }
          });
          $("#game-canvas").keydown(function (p657) {
            if (p657.key === "Enter") {
              f124();
            }
            if (p657.keyCode == 32) {
              vThis15.rk = true;
            }
          }).keyup(function (p658) {
            if (p658.keyCode == 32) {
              vThis15.rk = false;
            }
          });
          function f124() {
            $("#chatInput").css("display", "block").focus();
          }
          v606.addEventListener("touchstart", function (p659) {
            if (p659 && p659.touches.length >= 2) {
              vThis15.rk = true;
            }
            p659.preventDefault();
          }, true);
          v606.addEventListener("mousemove", function (p660) {
            if ((p660 = p660 || window.event && typeof p660.clientX !== "undefined") && !v41) {
              var v608 = p660.clientX;
              var v609 = p660.clientY;
              window.mouseX = v608;
              window.mouseY = v609;
              vThis15.sk = Math.atan2(v609 - v606.offsetHeight * 0.5, v608 - v606.offsetWidth * 0.5);
            }
          }, true);
          v606.addEventListener("mousedown", function (p661) {
            vThis15.rk = true;
          }, true);
          v606.addEventListener("mouseup", function (p662) {
            vThis15.rk = false;
          }, true);
          if (f18()) {
            var v610;
            var v611 = -1;
            v606.addEventListener("touchmove", function (p663) {
              if (p663 = p663 || window.event) {
                p663 = p663.touches[0];
                var v612 = v606.offsetWidth * 0.5;
                var v613 = v606.offsetHeight * 0.5;
                var vLN110 = 110;
                if (v71.visible) {
                  v612 = v71.x + 110;
                  v613 = v71.y + 110;
                }
                if (v64 === -1) {
                  vThis15.sk = Math.atan2(p663.pageY - v613, p663.pageX - v612);
                }
                if (v69 != -1) {
                  var v614 = Math.sqrt((v612 - p663.pageX) * (v612 - p663.pageX) + (v613 - p663.pageY) * (v613 - p663.pageY));
                  v68[v69].x = v606.offsetWidth * 0.5 + (v614 < vLN110 ? v614 : vLN110) * Math.cos(vThis15.sk) - 68;
                  v68[v69].y = v606.offsetHeight * 0.5 + (v614 < vLN110 ? v614 : vLN110) * Math.sin(vThis15.sk) - 68;
                  v68[v69].alpha = 1;
                }
              }
            }, true);
            v606.addEventListener("touchend", function (p664) {
              if (v69 != -1) {
                v68[v69].alpha = 0.25;
              }
              if (p664 && v611 === -1) {
                vThis15.rk = p664.touches.length >= 2;
              }
            }, true);
            v606.addEventListener("pointerdown", function (p665) {
              let v615 = v57.getGlobalPosition();
              let v616 = v58.getGlobalPosition();
              let v617 = v60.getGlobalPosition();
              let v618 = v61.getGlobalPosition();
              let v619 = v67[v65].getGlobalPosition();
              let v620 = v72.getGlobalPosition();
              if (p665.clientX > v618.x && p665.clientX <= v618.x + v61.width && p665.clientY > v618.y && p665.clientY <= v618.y + v61.height) {
                v61.emit("mouseup");
              } else if (p665.clientX > v617.x && p665.clientX <= v617.x + v60.width && p665.clientY > v617.y && p665.clientY <= v617.y + v60.height) {
                v60.emit("mouseup");
              } else if (p665.clientX > v615.x && p665.clientX <= v615.x + v57.width && p665.clientY > v615.y && p665.clientY <= v615.y + v57.height) {
                v57.emit("mouseup");
              } else if (p665.clientX > v616.x && p665.clientX <= v616.x + v58.width && p665.clientY > v616.y && p665.clientY <= v616.y + v58.height) {
                v58.emit("mouseup");
              } else {
                if (!(p665.clientX > v619.x) || !(p665.clientX <= v619.x + v67[v65].width) || !(p665.clientY > v619.y) || !(p665.clientY <= v619.y + v67[v65].height)) {
                  if (v72.visible && p665.clientX > v620.x && p665.clientX <= v620.x + v72.width && p665.clientY > v620.y && p665.clientY <= v620.y + v72.height) {
                    v611 = p665.pointerId;
                    vThis15.rk = true;
                    v72.alpha = 1;
                    return;
                  } else {
                    if (v64 !== -1 && !v70[v64].visible) {
                      v610 = p665.pointerId;
                      v70[v64].x = p665.clientX;
                      v70[v64].y = p665.clientY;
                      v70[v64].visible = true;
                      v70[v64].onDragStart(p665);
                    }
                    return;
                  }
                }
                v67[v65].emit("tap");
              }
            }, true);
            v606.addEventListener("pointerup", function (p666) {
              if (p666.pointerId == v611) {
                vThis15.rk = false;
                v611 = -1;
                v72.alpha = 0.5;
              }
              if (p666.pointerId == v610 && v64 !== -1) {
                v70[v64].visible = false;
                v70[v64].onDragEnd(p666);
              }
            }, true);
            v606.addEventListener("pointermove", function (p667) {
              if (p667.pointerId == v610 && v64 !== -1) {
                v70[v64].onDragMove(p667);
              }
            }, true);
          }
          this.wb = new vF18(vF40.mk);
          this.cb = 0;
          this.sk = 0;
          this.rk = false;
          vO10.eventoPrincipal = vThis15;
        });
        vF618.prototype.a = function () {};
        vF618.prototype.ii = function () {
          if (this.cb == 0) {
            vF40.fk.stop();
            vF40.fk.fadeIn(500);
            vF40.gk.stop();
            vF40.gk.fadeOut(1);
            vF40.hk.stop();
            vF40.hk.fadeOut(50);
            vF40.ik.stop();
            vF40.ik.fadeOut(50);
            vF40.jk.stop();
            vF40.jk.fadeOut(50);
            vF40.kk.stop();
            vF40.kk.fadeOut(50);
            vF40.lk.stop();
            vF40.lk.fadeOut(1);
            vF40.di.stop();
            vF40.di.fadeOut(50);
            vF13.Le(false);
            vF40.nk.stop();
            vF40.nk.fadeOut(50);
            vF40.ok.stop();
            vF40.ok.fadeOut(50);
          } else {
            vF40.fk.stop();
            vF40.fk.fadeIn(500);
            vF40.gk.stop();
            vF40.gk.fadeIn(500);
            vF40.hk.stop();
            vF40.hk.fadeOut(50);
            vF40.ik.stop();
            vF40.ik.fadeOut(50);
            vF40.jk.stop();
            vF40.jk.fadeOut(50);
            vF40.kk.stop();
            vF40.kk.fadeOut(50);
            vF40.lk.stop();
            vF40.lk.fadeOut(1);
            vF40.di.stop();
            vF40.di.fadeOut(50);
            vF13.Le(false);
            vF40.nk.stop();
            vF40.nk.fadeOut(50);
            vF40.ok.stop();
            vF40.ok.fadeOut(50);
          }
        };
        vF618.prototype.J = function () {
          this.cb = 0;
          return this;
        };
        vF618.prototype.Fa = function () {
          $(".snow-container").css("display", "block");
          console.log("re");
          v$12.hide();
          setTimeout(function () {
            console.log("fi_bg");
            v$12.fadeIn(500);
          }, 3000);
          v$13.hide();
          setTimeout(function () {
            console.log("fi_aw");
            v$13.fadeIn(500);
          }, 500);
          this.cb = 1;
          return this;
        };
        vF618.prototype.ji = function () {
          this.rk = false;
          this.wb.Ra();
          if (this.cb == 1) {
            f53().r.Gd();
          }
        };
        vF618.prototype.Ra = function () {
          this.wb.Ra();
        };
        vF618.prototype.Pa = function (p668, p669) {
          this.wb.Pa(p668, p669);
        };
        vF618.prototype.Da = function (p670, p671, p672) {
          var v621;
          var v622;
          var v623;
          var v624;
          var v625;
          var v626;
          var v627;
          var v628;
          var vUndefined17 = undefined;
          var vUndefined18 = undefined;
          var vUndefined19 = undefined;
          if (p671 >= 1 && p671 <= 10) {
            vUndefined17 = f56("index.game.result.place.i" + p671);
            vUndefined18 = f56("index.game.result.placeInBoard");
            vUndefined19 = f56("index.game.social.shareResult.messGood").replace("{0}", p672).replace("{1}", p670).replace("{2}", vUndefined17);
          } else {
            vUndefined17 = "";
            vUndefined18 = f56("index.game.result.tryHit");
            vUndefined19 = f56("index.game.social.shareResult.messNorm").replace("{0}", p672).replace("{1}", p670);
          }
          v$15.html(f56("index.game.result.your"));
          v$16.html(p670);
          v$17.html(vUndefined17);
          v$18.html(vUndefined18);
          if (v781.qk) {
            var vF565 = f56("index.game.result.share");
            f56("index.game.social.shareResult.caption");
            v$14.empty().append((v621 = vF565, v622 = "https://wormate.io", v623 = "wormate.io", v624 = vUndefined19, v625 = vUndefined19, v626 = "https://wormate.io/images/og-share-img-new.jpg", v627 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + v621 + "</span></div>", (v628 = $(v627)).click(function () {
              if (typeof FB != "undefined" && FB.ui !== undefined) {
                FB.ui({
                  method: "feed",
                  display: "popup",
                  link: v622,
                  name: v623,
                  caption: v624,
                  description: v625,
                  picture: v626
                }, function () {});
              }
            }), v628));
          }
        };
        vF618.prototype.T = function () {
          return this.sk;
        };
        vF618.prototype.U = function () {
          return this.rk;
        };
        return vF618;
      }();
      v775 = $("#loading-worm-a");
      v776 = $("#loading-worm-b");
      v777 = $("#loading-worm-c");
      v778 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      v779 = f61(vF40, function () {
        vF40.call(this, 0);
      });
      v779.prototype.a = function () {};
      v779.prototype.ii = function () {
        vF40.fk.stop();
        vF40.fk.fadeOut(50);
        vF40.gk.stop();
        vF40.gk.fadeOut(50);
        vF40.hk.stop();
        vF40.hk.fadeOut(50);
        vF40.ik.stop();
        vF40.ik.fadeOut(50);
        vF40.jk.stop();
        vF40.jk.fadeOut(50);
        vF40.kk.stop();
        vF40.kk.fadeIn(500);
        vF40.lk.stop();
        vF40.lk.fadeIn(1);
        vF40.di.stop();
        vF40.di.fadeIn(500);
        vF13.Le(true);
        vF40.nk.stop();
        vF40.nk.fadeOut(50);
        vF40.ok.stop();
        vF40.ok.fadeOut(50);
      };
      v779.prototype.ji = function () {
        this.tk();
      };
      v779.prototype.tk = function () {
        v775.css("background-position", "100% 200%");
        for (var vLN096 = 0; vLN096 < v778.length; vLN096++) {
          var v629 = Math.floor(Math.random() * v778.length);
          var v630 = v778[vLN096];
          v778[vLN096] = v778[v629];
          v778[v629] = v630;
        }
        v775.css("background-position", v778[0]);
        v776.css("background-position", v778[1]);
        v777.css("background-position", v778[2]);
      };
      var v_0x2b894d = v779;
      $("#mm-event-text");
      v752 = $("#mm-skin-canv");
      v753 = $("#mm-skin-prev");
      v754 = $("#mm-skin-next");
      v755 = $("#mm-skin-over");
      v756 = $("#mm-skin-over-button-list");
      v757 = $("#mm-params-nickname");
      v758 = $("#mm-params-game-mode");
      v759 = $("#mm-action-buttons");
      v760 = $("#mm-action-play");
      v761 = $("#mm-action-guest");
      v762 = $("#mm-action-login");
      v763 = $("#mm-player-info");
      v764 = $("#mm-store");
      v765 = $("#mm-leaders");
      v766 = $("#mm-settings");
      v767 = $("#mm-coins-box");
      v768 = $("#mm-player-avatar");
      v769 = $("#mm-player-username");
      v770 = $("#mm-coins-val");
      v771 = $("#mm-player-exp-bar");
      v772 = $("#mm-player-exp-val");
      v773 = $("#mm-player-level");
      v774 = f61(vF40, function () {
        vF40.call(this, 1);
        var vF539 = f53();
        this.uk = new vF39(v752);
        v758.click(function () {
          vF539.r.Cd();
        });
        v752.click(function () {
          if (vF539.u.P()) {
            vF539.r.Cd();
            vF539.s.I(vF539.s.$h);
          }
        });
        v753.click(function () {
          vF539.r.Cd();
          vF539.t.Ah();
        });
        v754.click(function () {
          vF539.r.Cd();
          vF539.t.zh();
        });
        v757.keypress(function (p673) {
          if (p673.keyCode == 13) {
            vF539.na();
          }
        });
        v760.click(function () {
          vF539.r.Cd();
          vF539.na();
        });
        v761.click(function () {
          vF539.r.Cd();
          vF539.na();
        });
        v762.click(function () {
          vF539.r.Cd();
          vF539.s.I(vF539.s.Zh);
        });
        v766.click(function () {
          vF539.r.Cd();
          vF539.s.I(vF539.s.xa);
        });
        v763.click(function () {
          if (vF539.u.P()) {
            vF539.r.Cd();
            vF539.s.I(vF539.s.Yh);
          }
        });
        v765.click(function () {
          if (vF539.u.P()) {
            vF539.r.Cd();
            vF539.s.I(vF539.s.Xh);
          }
        });
        v764.click(function () {
          if (vF539.u.P()) {
            vF539.r.Cd();
            vF539.s.I(vF539.s._h);
          }
        });
        v767.click(function () {
          if (vF539.u.P()) {
            vF539.r.Cd();
            vF539.s.I(vF539.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
        $("#final-replay").click(function () {
          let vV534 = v53;
          if (vV534) {
            anApp.r.Hd();
            anApp.sa(vV534);
            $(".snow-container").css("display", "none");
          }
        });
        v764.after("<div id=\"mm-wtr-settings\" style=\"\">Settings</div>");
        $("#mm-advice-cont").html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 0 auto;width:50%;height: 45px;\">FULL SCREEN</button><button value=\"Replay\" id=\"wtrplayagain\" style=\"display: inline; margin: 0 auto;width:50%;height: 45px;\">REPLAY</button></div>");
        $("#wtrplayagain").click(function () {
          let vV535 = v53;
          if (vV535) {
            anApp.r.Hd();
            anApp.sa(vV535);
            $(".snow-container").css("display", "none");
          }
        });
        $("#fullscreen").click(function () {
          if (v73) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
            v73 = false;
          } else {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            }
            v73 = true;
          }
        });
        $("#mm-wtr-settings").click(function () {
          if (vF539.u.P()) {
            vF539.r.Cd();
            vF539.s.I(vF539.s.wtrset);
          }
        });
        var vF542 = f54(vF14.va);
        if (vF542 != "ARENA" && vF542 != "TEAM2") {
          vF542 = "ARENA";
        }
        v758.val(vF542);
        console.log("Load GM: " + vF542);
      });
      v774.prototype.a = function () {
        var vF5310 = f53();
        var vThis16 = this;
        vF5310.u.V(function () {
          vF5310.s.F.xk();
        });
        vF5310.u.Pi(function () {
          if (vF5310.u.P()) {
            vF5310.t.Bh(vF5310.u.Di(), vF28.ia);
            vF5310.t.Bh(vF5310.u.Ei(), vF28.ja);
            vF5310.t.Bh(vF5310.u.Fi(), vF28.ka);
            vF5310.t.Bh(vF5310.u.Gi(), vF28.la);
            vF5310.t.Bh(vF5310.u.Hi(), vF28.ma);
          } else {
            vF5310.t.Bh(vF5310.Ga(), vF28.ia);
            vF5310.t.Bh(0, vF28.ja);
            vF5310.t.Bh(0, vF28.ka);
            vF5310.t.Bh(0, vF28.la);
            vF5310.t.Bh(0, vF28.ma);
          }
        });
        vF5310.u.Pi(function () {
          v760.toggle(vF5310.u.P());
          v762.toggle(!vF5310.u.P());
          v761.toggle(!vF5310.u.P());
          v765.toggle(vF5310.u.P());
          v764.toggle(vF5310.u.P());
          v767.toggle(vF5310.u.P());
          if (vF5310.u.P()) {
            v755.hide();
            v769.html(vF5310.u.wi());
            v768.attr("src", vF5310.u.xi());
            v770.html(vF5310.u.zi());
            v771.width(vF5310.u.Bi() * 100 / vF5310.u.Ci() + "%");
            v772.html(vF5310.u.Bi() + " / " + vF5310.u.Ci());
            v773.html(vF5310.u.Ai());
            v757.val(vF5310.u.ga());
          } else {
            v755.toggle(v781.qk && !vF5310.Ha());
            v769.html(v769.data("guest"));
            v768.attr("src", vLSimagesguestavatarxma);
            v770.html("10");
            v771.width("0");
            v772.html("");
            v773.html(1);
            v757.val(f54(vF14.Aa));
          }
        });
        vF5310.t.xh(function () {
          vThis16.uk.ak(vF5310.t.ha(vF28.ia), false, false);
          vThis16.uk.bk(vF5310.t.ha(vF28.ja), false, false);
          vThis16.uk.ck(vF5310.t.ha(vF28.ka), false, false);
          vThis16.uk.dk(vF5310.t.ha(vF28.la), false, false);
          vThis16.uk.ek(vF5310.t.ha(vF28.ma), false, false);
        });
      };
      v774.prototype.ii = function () {
        vF40.fk.stop();
        vF40.fk.fadeOut(50);
        vF40.gk.stop();
        vF40.gk.fadeOut(50);
        vF40.hk.stop();
        vF40.hk.fadeIn(500);
        vF40.ik.stop();
        vF40.ik.fadeOut(50);
        vF40.jk.stop();
        vF40.jk.fadeOut(50);
        vF40.kk.stop();
        vF40.kk.fadeOut(50);
        vF40.lk.stop();
        vF40.lk.fadeIn(1);
        vF40.di.stop();
        vF40.di.fadeIn(500);
        vF13.Le(true);
        vF40.nk.stop();
        vF40.nk.fadeIn(500);
        vF40.ok.stop();
        vF40.ok.fadeIn(500);
      };
      v774.prototype.ji = function () {
        f53().r.Dd();
        this.uk.Le(true);
      };
      v774.prototype.ei = function () {
        this.uk.Le(false);
      };
      v774.prototype.Ra = function () {
        this.uk.Ra();
      };
      v774.prototype.Pa = function (p674, p675) {
        this.uk.Pa();
      };
      v774.prototype.ga = function () {
        return v757.val();
      };
      v774.prototype.D = function () {
        return v758.val();
      };
      v774.prototype.xk = function () {
        v759.show();
      };
      v774.prototype.vk = function () {
        var v631 = $("#mm-advice-cont").children();
        var vLN097 = 0;
        setInterval(function () {
          v631.eq(vLN097).fadeOut(500, function () {
            if (++vLN097 >= v631.length) {
              vLN097 = 0;
            }
            v631.eq(vLN097).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      v774.prototype.wk = function () {
        function f125() {
          vF5311.Ka(true);
          setTimeout(function () {
            v755.hide();
          }, 3000);
        }
        var vF5311 = f53();
        if (v781.qk && !vF5311.Ha()) {
          v755.show();
          var vF566 = f56("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f56("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f56("index.game.main.menu.unlockSkins.comeAndPlay"));
          v756.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF566 + "</span></a>").click(f125));
          v756.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF566 + "</span></a>").click(f125));
        }
      };
      var v_0x5e89e6 = v774;
      v751 = f61(vF40, function () {
        vF40.call(this, 0);
      });
      v751.prototype.a = function () {};
      v751.prototype.ii = function () {
        vF40.fk.stop();
        vF40.fk.fadeOut(50);
        vF40.gk.stop();
        vF40.gk.fadeOut(50);
        vF40.hk.stop();
        vF40.hk.fadeOut(50);
        vF40.ik.stop();
        vF40.ik.fadeOut(50);
        vF40.jk.stop();
        vF40.jk.fadeOut(50);
        vF40.kk.stop();
        vF40.kk.fadeOut(50);
        vF40.lk.stop();
        vF40.lk.fadeOut(1);
        vF40.di.stop();
        vF40.di.fadeOut(50);
        vF13.Le(false);
        vF40.nk.stop();
        vF40.nk.fadeOut(50);
        vF40.ok.stop();
        vF40.ok.fadeOut(50);
      };
      var v_0x1e5356 = v751;
      v749 = $("#toaster-stack");
      v750 = f61(vF40, function () {
        vF40.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      v750.prototype.a = function () {};
      v750.prototype.ii = function () {
        vF40.fk.stop();
        vF40.fk.fadeOut(50);
        vF40.gk.stop();
        vF40.gk.fadeOut(50);
        vF40.hk.stop();
        vF40.hk.fadeOut(50);
        vF40.ik.stop();
        vF40.ik.fadeOut(50);
        vF40.jk.stop();
        vF40.jk.fadeIn(500);
        vF40.kk.stop();
        vF40.kk.fadeOut(50);
        vF40.lk.stop();
        vF40.lk.fadeIn(1);
        vF40.di.stop();
        vF40.di.fadeIn(500);
        vF13.Le(true);
        vF40.nk.stop();
        vF40.nk.fadeOut(50);
        vF40.ok.stop();
        vF40.ok.fadeIn(500);
      };
      v750.prototype.ji = function () {
        this.Ak();
      };
      v750.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      v750.prototype._ = function (p676) {
        this.yk.unshift(p676);
        setTimeout(function () {
          f53().s.ki();
        }, 0);
      };
      v750.prototype.Ti = function (p677) {
        this.yk.push(p677);
        setTimeout(function () {
          f53().s.ki();
        }, 0);
      };
      v750.prototype.Ak = function () {
        var vThis17 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f53().s.gi();
            return;
          }
          var v632 = this.yk.shift();
          this.zk = v632;
          var v633 = v632.Bk();
          v633.hide();
          v633.fadeIn(300);
          v749.append(v633);
          v632.Ck = function () {
            v633.fadeOut(300);
            setTimeout(function () {
              v633.remove();
            }, 300);
            if (vThis17.zk == v632) {
              vThis17.zk = null;
            }
            vThis17.Ak();
          };
          v632.ji();
        }
      };
      var v_0x3b20b7 = v750;
      var vF42 = function () {
        var v$19 = $("#popup-menu-label");
        var v$20 = $("#popup-menu-coins-box");
        var v$21 = $("#popup-menu-coins-val");
        $("#popup-menu-back").click(function () {
          var vF5312 = f53();
          vF5312.r.Cd();
          vF5312.s.gi();
        });
        v$20.click(function () {
          var vF5313 = f53();
          if (vF5313.u.P()) {
            vF5313.r.Cd();
            vF5313.s.I(vF5313.s.Wh);
          }
        });
        var vF619 = f61(vF40, function (p678, p679) {
          vF40.call(this, 1);
          this.ad = p678;
          this.Dk = p679;
        });
        var vLSdivIdwormtrsettingsv = "<div id=\"wormtr-settings-view\" class=\"base-popup-view\" style=\"opacity: 1;\"><div class=\"settings-icons\"><span id=\"user-icon\" class=\"material-icons\">account_circle</span><span id=\"hotkeys-icon\" class=\"material-icons\">keyboard</span></div><div id=\"user-section\" class=\"settings-section\"><div class=\"settings-line\"><span id=\"wtr-settings-id\" class=\"settings-label\">ID: </span><button id=\"idkopyala\">Copiar</button></div><div class=\"popup-sep\"></div><div id=\"wtr-aplan-set\" class=\"settings-line\"><span class=\"settings-label\">Fondo</span><select id=\"arkaplan\"><option value=\"0\">Por defecto</option><option value=\"1\">Espacio</option><option value=\"2\">Espacio 2</option><option value=\"3\">Azul</option><option value=\"4\">Cuernos</option></select></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><input type=\"checkbox\" id=\"toggleTop8\" /><label for=\"toggleTop8\">Show Top 8</label><span class=\"tooltip\" id=\"tooltipTop8\" style=\"display: none;\"> Si habilita esta opción, verá la lista de los 8 mejores jugadores.</span></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">Top</span><select id=\"wtrtop\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">You Color Map: </span><input type=\"color\" id=\"colorPicker\" /></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings_span\" >SkinVisible(Public): </span><input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\"></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">Nombre blasfemo censurado</span><input class=\"settings-switch\" id=\"settings-kufur-isim\" type=\"checkbox\"><label for=\"settings-kufur-isim\"></label></div><div class=\"popup-sep\"></div><span id=\"wtr-settings-version\" class=\"settings-line\"></span></div><div id=\"hotkeys-section\" class=\"settings-section\" style=\"display:none\"><div class=\"settings-line\" id=\"key-settings\"><label for=\"zoom-key\">Zoom:</label><input type=\"text\" id=\"zoom-key\" class=\"key-input\"><br><label for=\"restart-key\">Replay:</label><input type=\"text\" id=\"restart-key\" class=\"key-input\"><br><label for=\"wormExplot-key\">Explote:</label><input type=\"text\" id=\"wormExplot-key\" class=\"key-input\"><br><label for=\"laserHSkey-key\">LaserHS:</label><input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\"><br><label for=\"sectores-key\">Sectors:</label><input type=\"text\" id=\"sectores-key\" class=\"key-input\"><br><label for=\"background-key\">Background:</label><input type=\"text\" id=\"background-key\" class=\"key-input\"><br><label for=\"giro-key\">Giro:</label><input type=\"text\" id=\"giro-key\" class=\"key-input\"><br></div></div></div>";
        $("#mm-params-nickname").after("<div id=\"teamNameContainer\" class=\"input-group\"><input type=\"text\" id=\"teamCodeInput\" class=\"form-control\" placeholder=\"TeamCode\" spellcheck=\"false\" maxlength=\"10\" style=\" position: absolute;top: 0;right: 0;width: 100px;-webkit-appearance: none;text-align-last: center;overflow: hidden;height: 100%;line-height: 100%;background: transparent;font-size: 20px;padding: 0 10px;background-color: transparent !important;border: 1px solid !important;border-color: #fff !important;color: #fff !important;text-shadow: 1px 1px 2px #427388 !important;box-sizing: border-box;border-radius: 5px;border: 0;outline: 0;color: #806102;box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);text-align: center;cursor: pointer;transition: background-color .5s ease; \"></div>");
        $("#settings-view").after(vLSdivIdwormtrsettingsv);
        let v634 = localStorage.getItem("top8") === "true" || localStorage.getItem("top8") !== "false" && vO11.top8;
        let v635 = localStorage.getItem("killFeed") === "true" || localStorage.getItem("killFeed") !== "false" && vO11.killFeed;
        $("#toggleTop8").prop("checked", v634);
        $("#toggleKillFeed").prop("checked", v635);
        $("#top8List").toggle(v634);
        $("#killFeed").toggle(v635);
        if (localStorage.getItem("top8") === "true" || localStorage.getItem("top8") === "false") {
          vO11.top8 = v634;
          localStorage.setItem("top8", v634);
        }
        if (localStorage.getItem("killFeed") === "true" || localStorage.getItem("killFeed") === "false") {
          vO11.killFeed = v635;
          localStorage.setItem("killFeed", v635);
        }
        $("#toggleTop8").on("change", function () {
          vO11.top8 = this.checked;
          $("#top8List").toggle(this.checked);
          localStorage.setItem("top8", vO11.top8);
        });
        $("#toggleKillFeed").on("change", function () {
          vO11.killFeed = this.checked;
          $("#killFeed").toggle(this.checked);
          localStorage.setItem("killFeed", vO11.killFeed);
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
        $("#colorPicker").on("input", function () {
          let v636 = $(this).val();
          localStorage.setItem("teamColor", vO.teamColor);
          vO.teamColor = "0x" + v636.substring(1);
        });
        $("#teamCodeInput").on("input", function () {
          vO.teamCode = $(this).val();
          localStorage.setItem("teamCode", vO.teamCode);
          console.log("Team Code updated:", vO.teamCode);
        });
        let v637 = localStorage.getItem("teamCode");
        if (v637) {
          vO.teamCode = v637;
          $("#teamCodeInput").val(v637);
        }
        let v638 = localStorage.getItem("teamColor");
        if (v638) {
          vO.teamColor = v638;
          $("#colorPicker").val("#" + v638.substring(2));
        }
        $("#zoom-key").val(vO7.zoom);
        $("#restart-key").val(vO7.restart);
        $("#laserHSkey-key").val(vO7.laserHS);
        $("#wormExplot-key").val(vO7.wormExplot);
        $("#giro-key").val(vO7.giro);
        $("#sectores-key").val(vO7.sectores);
        $("#background-key").val(vO7.background);
        $("#user-icon").on("click", function () {
          $("#user-icon").addClass("active");
          $("#hotkeys-icon").removeClass("active");
          $("#user-section").toggle();
          $("#hotkeys-section").hide();
        });
        $("#hotkeys-icon").on("click", function () {
          $("#hotkeys-icon").addClass("active");
          $("#user-icon").removeClass("active");
          $("#hotkeys-section").toggle();
          $("#user-section").hide();
        });
        $(".key-input").keydown(function (p680) {
          p680.stopPropagation();
        });
        $(".key-input").keypress(function (p681) {
          p681.preventDefault();
          var v639 = p681.key.toLowerCase();
          $(this).val(v639);
          switch ($(this).attr("id")) {
            case "zoom-key":
              f17("zoom", v639);
              break;
            case "restart-key":
              f17("restart", v639);
              break;
            case "wormExplot-key":
              f17("wormExplot", v639);
              break;
            case "laserHSkey-key":
              f17("laserHS", v639);
              break;
            case "giro-key":
              f17("giro", v639);
              break;
            case "sectores-key":
              f17("sectores", v639);
              break;
            case "background-key":
              f17("background", v639);
          }
          $(this).blur();
        });
        v63 = 0;
        v54 = 10;
        var v$22 = $("#arkaplan");
        var v$23 = $("#wtrtop");
        const v640 = localStorage.getItem("wtr-background");
        if (v640) {
          const vParseInt2 = parseInt(v640);
          v$22.val(vParseInt2);
          v63 = vParseInt2;
        }
        const v641 = localStorage.getItem("wtr-toplist");
        if (v641) {
          const vParseInt3 = parseInt(v641);
          v54 = vParseInt3;
        }
        let v642 = vO6.isNumberValid(vO11.idReplaceSkin);
        if (v642) {
          $("#inputReplaceSkin").val(vO11.idReplaceSkin);
        } else {
          let v643 = $("#inputReplaceSkin").val();
          v642 = vO6.isNumberValid(v643);
          vO11.idReplaceSkin = v642 ? v643 : 35;
        }
        v$23.val(v54);
        v$22.change(function (p682) {
          var v644;
          v63 = this.value;
          switch ($(this).val()) {
            case "0":
              v644 = "https://i.imgur.com/8ubx4RA.png";
              break;
            case "1":
              v644 = "https://i.imgur.com/RfdzSN5.png";
              break;
            case "2":
              v644 = "https://i.imgur.com/owjXFEq.png";
              break;
            case "3":
              v644 = "https://i.imgur.com/yIXds2n.png";
              break;
            case "4":
              v644 = "https://i.imgur.com/dESso2v.png";
          }
          if (v644) {
            anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(v644));
          }
          localStorage.setItem("wtr-background", this.value.toString());
        });
        v$23.change(function (p683) {
          v54 = this.value;
          localStorage.setItem("wtr-toplist", this.value.toString());
        });
        $("#idkopyala").click(function () {
          navigator.clipboard.writeText(lxpduserId);
        });
        vF619.prototype.a = function () {
          vF619.parent.prototype.a.call(this);
          if (!vF619.Ek) {
            vF619.Ek = true;
            var vF5314 = f53();
            vF5314.u.Pi(function () {
              if (vF5314.u.P()) {
                v$21.html(vF5314.u.zi());
              } else {
                v$21.html("0");
              }
            });
          }
        };
        vF619.Fk = $("#coins-view");
        vF619.Gk = $("#leaders-view");
        vF619.Hk = $("#profile-view");
        vF619.Ik = $("#settings-view");
        vF619.Jk = $("#login-view");
        vF619.Kk = $("#skins-view");
        vF619.Lk = $("#store-view");
        vF619.wtrset = $("#wormtr-settings-view");
        vF619.Mk = $("#wear-view");
        vF619.Nk = $("#withdraw-consent-view");
        vF619.Ok = $("#delete-account-view");
        vF619.Pk = $("#please-wait-view");
        vF619.prototype.ii = function () {
          vF40.fk.stop();
          vF40.fk.fadeOut(200);
          vF40.gk.stop();
          vF40.gk.fadeOut(200);
          vF40.hk.stop();
          vF40.hk.fadeOut(200);
          vF40.ik.stop();
          vF40.ik.fadeIn(200);
          vF40.jk.stop();
          vF40.jk.fadeOut(200);
          vF40.kk.stop();
          vF40.kk.fadeOut(200);
          vF40.nk.stop();
          vF40.nk.fadeIn(200);
          vF40.ok.stop();
          vF40.ok.fadeIn(200);
          v$19.html(this.ad);
          v$20.toggle(this.Dk);
          this.Qk();
          this.Rk();
        };
        vF619.prototype.Rk = function () {};
        vF619.prototype.Sk = function () {
          vF42.Pk.stop();
          vF42.Pk.fadeIn(300);
        };
        vF619.prototype.Qk = function () {
          vF42.Pk.stop();
          vF42.Pk.fadeOut(300);
        };
        return vF619;
      }();
      v742 = $("#store-buy-coins_125000");
      v743 = $("#store-buy-coins_50000");
      v744 = $("#store-buy-coins_16000");
      v745 = $("#store-buy-coins_7000");
      v746 = $("#store-buy-coins_3250");
      v747 = $("#store-buy-coins_1250");
      v748 = f61(vF42, function () {
        vF42.call(this, f56("index.game.popup.menu.coins.tab"), false);
        var vF5315 = f53();
        var vThis18 = this;
        v742.click(function () {
          vF5315.r.Cd();
          vThis18.Tk("coins_125000");
        });
        v743.click(function () {
          vF5315.r.Cd();
          vThis18.Tk("coins_50000");
        });
        v744.click(function () {
          vF5315.r.Cd();
          vThis18.Tk("coins_16000");
        });
        v745.click(function () {
          vF5315.r.Cd();
          vThis18.Tk("coins_7000");
        });
        v746.click(function () {
          vF5315.r.Cd();
          vThis18.Tk("coins_3250");
        });
        v747.click(function () {
          vF5315.r.Cd();
          vThis18.Tk("coins_1250");
        });
      });
      v748.prototype.a = function () {
        v748.parent.prototype.a.call(this);
      };
      v748.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeIn(200);
        vF42.Gk.stop();
        vF42.Gk.fadeOut(50);
        vF42.Hk.stop();
        vF42.Hk.fadeOut(50);
        vF42.Jk.stop();
        vF42.Jk.fadeOut(50);
        vF42.Ik.stop();
        vF42.Ik.fadeOut(50);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeOut(50);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeOut(50);
        vF42.Ok.stop();
        vF42.Ok.fadeOut(50);
      };
      v748.prototype.ji = function () {
        f53().r.Dd();
      };
      v748.prototype.Tk = function (p684) {};
      var v_0x14c951 = v748;
      v737 = $("#highscore-table");
      v738 = $("#leaders-button-level");
      v739 = $("#leaders-button-highscore");
      v740 = $("#leaders-button-kills");
      v741 = f61(vF42, function () {
        vF42.call(this, f56("index.game.popup.menu.leaders.tab"), true);
        var vF5316 = f53();
        var vThis19 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v738,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v739,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v740,
            Yk: "byKillsAndHeadShots"
          }
        };
        v738.click(function () {
          vF5316.r.Cd();
          vThis19._k(vThis19.Vk.Wk);
        });
        v739.click(function () {
          vF5316.r.Cd();
          vThis19._k(vThis19.Vk.Zk);
        });
        v740.click(function () {
          vF5316.r.Cd();
          vThis19._k(vThis19.Vk.$k);
        });
      });
      v741.prototype.a = function () {
        v741.parent.prototype.a.call(this);
      };
      v741.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeOut(50);
        vF42.Gk.stop();
        vF42.Gk.fadeIn(200);
        vF42.Hk.stop();
        vF42.Hk.fadeOut(50);
        vF42.Jk.stop();
        vF42.Jk.fadeOut(50);
        vF42.Ik.stop();
        vF42.Ik.fadeOut(50);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeOut(50);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeOut(50);
        vF42.Ok.stop();
        vF42.Ok.fadeOut(50);
      };
      v741.prototype.ji = function () {
        f53().r.Dd();
        var vThis20 = this;
        this.Sk();
        $.get(vAtob + "/pub/leaders", function (p685) {
          vThis20.Uk = p685;
          vThis20._k(vThis20.al ?? vThis20.Vk.Wk);
          vThis20.Qk();
        }).done(function () {
          vThis20.Qk();
        });
      };
      v741.prototype._k = function (p686) {
        this.al = p686;
        for (var v645 in this.Vk) {
          if (this.Vk.hasOwnProperty(v645)) {
            this.Vk[v645].Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v646 = this.Uk[this.al.Yk], vLS2 = "", vLN098 = 0; vLN098 < v646.length; vLN098++) {
          var v647 = v646[vLN098];
          vLS2 += "<div class=\"table-row\"><span>" + (vLN098 + 1) + "</span><span><img src=\"" + v647.avatarUrl + "\"/></span><span>" + v647.username + "</span><span>" + v647.level + "</span><span>" + v647.highScore + "</span><span>" + v647.headShots + " / " + v647.kills + "</span></div>";
        }
        v737.empty();
        v737.append(vLS2);
      };
      var v_0x58bd10 = v741;
      v734 = $("#popup-login-gg");
      v735 = $("#popup-login-fb");
      v736 = f61(vF42, function () {
        vF42.call(this, f56("index.game.popup.menu.login.tab"), false);
        var vF5317 = f53();
        var vThis21 = this;
        v734.click(function () {
          vF5317.r.Cd();
          vThis21.Sk();
          vF5317.u.Qi(function () {
            vThis21.Qk();
          });
          setTimeout(function () {
            vThis21.Qk();
          }, 10000);
          vF5317.u.Zi();
        });
        v735.click(function () {
          vF5317.r.Cd();
          vThis21.Sk();
          vF5317.u.Qi(function () {
            vThis21.Qk();
          });
          setTimeout(function () {
            vThis21.Qk();
          }, 10000);
          vF5317.u.Vi();
        });
      });
      v736.prototype.a = function () {
        v736.parent.prototype.a.call(this);
      };
      v736.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeOut(50);
        vF42.Gk.stop();
        vF42.Gk.fadeOut(50);
        vF42.Hk.stop();
        vF42.Hk.fadeOut(50);
        vF42.Jk.stop();
        vF42.Jk.fadeIn(200);
        vF42.Ik.stop();
        vF42.Ik.fadeOut(50);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeOut(50);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeOut(50);
        vF42.Ok.stop();
        vF42.Ok.fadeOut(50);
      };
      v736.prototype.ji = function () {
        f53().r.Dd();
      };
      var v_0x416635 = v736;
      v721 = $("#profile-avatar");
      v722 = $("#profile-username");
      v723 = $("#profile-experience-bar");
      v724 = $("#profile-experience-val");
      v725 = $("#profile-level");
      v726 = $("#profile-stat-highScore");
      v727 = $("#profile-stat-bestSurvivalTime");
      v728 = $("#profile-stat-kills");
      v729 = $("#profile-stat-headshots");
      v730 = $("#profile-stat-gamesPlayed");
      v731 = $("#profile-stat-totalTimeSpent");
      v732 = $("#profile-stat-registrationDate");
      v733 = f61(vF42, function () {
        vF42.call(this, f56("index.game.popup.menu.profile.tab"), true);
      });
      v733.prototype.a = function () {
        v733.parent.prototype.a.call(this);
      };
      v733.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeOut(50);
        vF42.Gk.stop();
        vF42.Gk.fadeOut(50);
        vF42.Hk.stop();
        vF42.Hk.fadeIn(200);
        vF42.Jk.stop();
        vF42.Jk.fadeOut(50);
        vF42.Ik.stop();
        vF42.Ik.fadeOut(50);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeOut(50);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeOut(50);
        vF42.Ok.stop();
        vF42.Ok.fadeOut(50);
      };
      v733.prototype.ji = function () {
        var vF5318 = f53();
        vF5318.r.Dd();
        var v648 = vF5318.u.Oi();
        var v649 = moment([v648.year, v648.month - 1, v648.day]).format("LL");
        v722.html(vF5318.u.wi());
        v721.attr("src", vF5318.u.xi());
        v723.width(vF5318.u.Bi() * 100 / vF5318.u.Ci() + "%");
        v724.html(vF5318.u.Bi() + " / " + vF5318.u.Ci());
        v725.html(vF5318.u.Ai());
        v726.html(vF5318.u.Ii());
        v727.html(f58(vF5318.u.Ji()));
        v728.html(vF5318.u.Ki());
        v729.html(vF5318.u.Li());
        v730.html(vF5318.u.Mi());
        v731.html(f58(vF5318.u.Ni()));
        v732.html(v649);
      };
      var v_0x4cbf06 = v733;
      v712 = $("#settings-music-enabled-switch");
      v713 = $("#settings-sfx-enabled-switch");
      v714 = $("#settings-show-names-switch");
      v715 = $("#popup-logout");
      v716 = $("#popup-logout-container");
      v717 = $("#popup-delete-account");
      v718 = $("#popup-delete-account-container");
      v719 = $("#popup-withdraw-consent");
      v720 = f61(vF42, function () {
        vF42.call(this, f56("index.game.popup.menu.settings.tab"), false);
        var vThis22 = this;
        var vF5319 = f53();
        v712.click(function () {
          var v650 = !!v712.prop("checked");
          f55(vF14.Me, v650, 30);
          vF5319.r.td(v650);
          vF5319.r.Cd();
        });
        v713.click(function () {
          var v651 = !!v713.prop("checked");
          f55(vF14.Ne, v651, 30);
          vF5319.r.rd(v651);
          vF5319.r.Cd();
        });
        v714.click(function () {
          vF5319.r.Cd();
        });
        v715.click(function () {
          vF5319.r.Cd();
          vThis22.Sk();
          setTimeout(function () {
            vThis22.Qk();
          }, 2000);
          vF5319.u.Wi();
        });
        v717.click(function () {
          if (vF5319.u.P()) {
            vF5319.r.Cd();
            vF5319.s.I(vF5319.s.Vh);
          } else {
            vF5319.r.Hd();
          }
        });
        v719.click(function () {
          if (vF5319.Y()) {
            vF5319.r.Cd();
            vF5319.s.I(vF5319.s.Uh);
          } else {
            vF5319.r.Hd();
          }
        });
      });
      v720.prototype.a = function () {
        v720.parent.prototype.a.call(this);
        var vF5320 = f53();
        var vUndefined20 = undefined;
        vUndefined20 = f54(vF14.Me) !== "false";
        v712.prop("checked", vUndefined20);
        vF5320.r.td(vUndefined20);
        var vUndefined21 = undefined;
        vUndefined21 = f54(vF14.Ne) !== "false";
        v713.prop("checked", vUndefined21);
        vF5320.r.rd(vUndefined21);
        var vUndefined22 = undefined;
        vUndefined22 = f54(vF14.ya) !== "false";
        console.log("Load sPN: " + vUndefined22);
        v714.prop("checked", vUndefined22);
        vF5320.u.V(function () {
          v716.toggle(vF5320.u.P());
          v718.toggle(vF5320.u.P());
        });
      };
      v720.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeOut(50);
        vF42.Gk.stop();
        vF42.Gk.fadeOut(50);
        vF42.Hk.stop();
        vF42.Hk.fadeOut(50);
        vF42.Jk.stop();
        vF42.Jk.fadeOut(50);
        vF42.Ik.stop();
        vF42.Ik.fadeIn(200);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeOut(50);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeOut(50);
        vF42.Ok.stop();
        vF42.Ok.fadeOut(50);
      };
      v720.prototype.ji = function () {
        var vF5321 = f53();
        vF5321.r.Dd();
        if (vF5321.Y()) {
          v719.show();
        } else {
          v719.hide();
        }
      };
      v720.prototype.wa = function () {
        return v714.prop("checked");
      };
      var v_0x2aaca9 = v720;
      var vF43 = function () {
        var v$24 = $("#store-view-canv");
        var v$25 = $("#skin-description-text");
        var v$26 = $("#skin-group-description-text");
        var v$27 = $("#store-locked-bar");
        var v$28 = $("#store-locked-bar-text");
        var v$29 = $("#store-buy-button");
        var v$30 = $("#store-item-price");
        var v$31 = $("#store-groups");
        var v$32 = $("#store-view-prev");
        var v$33 = $("#store-view-next");
        var vF6110 = f61(vF42, function () {
          vF42.call(this, f56("index.game.popup.menu.skins.tab"), true);
          var vThis23 = this;
          var vF5322 = f53();
          this.bl = null;
          this.cl = [];
          this.dl = {};
          this.el = new vF39(v$24);
          v$29.click(function () {
            vF5322.r.Cd();
            vThis23.fl();
          });
          v$32.click(function () {
            vF5322.r.Cd();
            vThis23.bl.gl();
          });
          v$33.click(function () {
            vF5322.r.Cd();
            vThis23.bl.hl();
          });
        });
        vF6110.prototype.a = function () {
          vF6110.parent.prototype.a.call(this);
          var vThis24 = this;
          var vF5323 = f53();
          vF5323.p.ca(function () {
            var v652 = vF5323.p.Ac();
            if (v652 != null) {
              vThis24.cl = [];
              for (var vLN099 = 0; vLN099 < v652.skinGroupArrayDict.length; vLN099++) {
                vThis24.cl.push(new vF44(vThis24, v652.skinGroupArrayDict[vLN099]));
              }
              vThis24.dl = {};
              for (var vLN0100 = 0; vLN0100 < v652.skinArrayDict.length; vLN0100++) {
                var v653 = v652.skinArrayDict[vLN0100];
                vThis24.dl[v653.id] = v653;
              }
            }
          });
          this.il(false);
          vF5323.t.xh(function () {
            vThis24.il(false);
          });
        };
        vF6110.prototype.Rk = function () {
          vF42.Fk.stop();
          vF42.Fk.fadeOut(50);
          vF42.Gk.stop();
          vF42.Gk.fadeOut(50);
          vF42.Hk.stop();
          vF42.Hk.fadeOut(50);
          vF42.Jk.stop();
          vF42.Jk.fadeOut(50);
          vF42.Ik.stop();
          vF42.Ik.fadeOut(50);
          vF42.Kk.stop();
          vF42.Kk.fadeIn(200);
          vF42.Lk.stop();
          vF42.Lk.fadeOut(50);
          vF42.Mk.stop();
          vF42.Mk.fadeOut(50);
          vF42.wtrset.stop();
          vF42.wtrset.fadeOut(50);
          vF42.Nk.stop();
          vF42.Nk.fadeOut(50);
          vF42.Ok.stop();
          vF42.Ok.fadeOut(50);
        };
        vF6110.prototype.ji = function () {
          f53().r.Dd();
          this.jl();
          this.el.Le(true);
        };
        vF6110.prototype.ei = function () {
          this.el.Le(false);
        };
        vF6110.prototype.Ra = function () {
          this.el.Ra();
        };
        vF6110.prototype.Pa = function (p687, p688) {
          this.el.Pa();
        };
        vF6110.prototype.jl = function () {
          var vThis25 = this;
          var vThis26 = this;
          var vF5324 = f53();
          v$31.empty();
          for (var vLN0101 = 0; vLN0101 < this.cl.length; vLN0101++) {
            (function (p689) {
              var v654 = vThis25.cl[p689];
              var v655 = document.createElement("li");
              v$31.append(v655);
              var v$34 = $(v655);
              v$34.html(v654.kl());
              v$34.click(function () {
                vF5324.r.Cd();
                vThis26.ll(v654);
              });
              v654.ml = v$34;
            })(vLN0101);
          }
          if (this.cl.length > 0) {
            var v656 = vF5324.t.ha(vF28.ia);
            for (vLN0101 = 0; vLN0101 < this.cl.length; vLN0101++) {
              var v657 = this.cl[vLN0101];
              for (var v658 = v657.nl.list, vLN0102 = 0; vLN0102 < v658.length; vLN0102++) {
                if (v658[vLN0102] == v656) {
                  v657.ol = vLN0102;
                  this.ll(v657);
                  return;
                }
              }
            }
            this.ll(this.cl[0]);
          }
        };
        vF6110.prototype.ll = function (p690) {
          if (this.bl != p690) {
            var vF5325 = f53();
            this.bl = p690;
            v$31.children().removeClass("pressed");
            if (this.bl.ml) {
              this.bl.ml.addClass("pressed");
            }
            v$26.html("");
            if (p690.nl != null) {
              var v659 = vF5325.p.Ac().textDict[p690.nl.description];
              if (v659 != null) {
                v$26.html(f59(f57(v659)));
              }
            }
            this.il(true);
          }
        };
        vF6110.prototype.pl = function () {
          if (this.bl == null) {
            return vF22.Yg();
          } else {
            return this.bl.ql();
          }
        };
        vF6110.prototype.fl = function () {
          var vThis27 = this;
          this.pl().ah(function (p691) {
            vThis27.rl(p691);
          });
        };
        vF6110.prototype.rl = function (p692) {
          var vThis28 = this;
          var vF5326 = f53();
          var v660 = this.dl[p692].price;
          if (!(vF5326.u.zi() < v660)) {
            this.Sk();
            var v661 = vF5326.t.ha(vF28.ia);
            var v662 = vF5326.t.ha(vF28.ja);
            var v663 = vF5326.t.ha(vF28.ka);
            var v664 = vF5326.t.ha(vF28.la);
            var v665 = vF5326.t.ha(vF28.ma);
            vF5326.u.Ui(p692, vF28.ia, function () {
              vF5326.t.Bh(v661, vF28.ia);
              vF5326.t.Bh(v662, vF28.ja);
              vF5326.t.Bh(v663, vF28.ka);
              vF5326.t.Bh(v664, vF28.la);
              vF5326.t.Bh(v665, vF28.ma);
              if (vF5326.u.Ch(p692, vF28.ia)) {
                vF5326.t.Bh(p692, vF28.ia);
              }
              vThis28.Qk();
            });
          }
        };
        vF6110.prototype.il = function (p693) {
          var vF5327 = f53();
          this.el.bk(vF5327.t.ha(vF28.ja), false, false);
          this.el.ck(vF5327.t.ha(vF28.ka), false, false);
          this.el.dk(vF5327.t.ha(vF28.la), false, false);
          this.el.ek(vF5327.t.ha(vF28.ma), false, false);
          var v666 = this.pl();
          if (v666._g()) {
            var v667 = v666.$g();
            var v668 = this.dl[v667];
            var v669 = false;
            if (vF5327.t.Ja(v667, vF28.ia)) {
              v$27.hide();
              v$29.hide();
            } else if (v668 == null || v668.nonbuyable == 1) {
              v669 = true;
              v$27.show();
              v$29.hide();
              v$28.text(f56("index.game.popup.menu.store.locked"));
              if (v668 != null && v668.nonbuyable && v668.nonbuyableCause != null) {
                var v670 = vF5327.p.Ac().textDict[v668.nonbuyableCause];
                if (v670 != null) {
                  v$28.text(f57(v670));
                }
              }
            } else {
              v$27.hide();
              v$29.show();
              v$30.html(v668.price);
            }
            v$25.html("ID: " + v667 + " TYPE: " + vF28.ia);
            if (v668 != null && v668.description != null) {
              var v671 = vF5327.p.Ac().textDict[v668.description];
              if (v671 != null) {
                v$25.html(f59(f57(v671)));
              }
            }
            this.el.ak(v667, true, v669);
            if (p693) {
              vF5327.t.Bh(v667, vF28.ia);
            }
          }
        };
        var vF44 = function () {
          function f126(p694, p695) {
            this.sl = p694;
            this.ol = 0;
            this.nl = p695;
          }
          f126.prototype.gl = function () {
            if (--this.ol < 0) {
              this.ol = this.nl.list.length - 1;
            }
            this.sl.il(true);
          };
          f126.prototype.hl = function () {
            if (++this.ol >= this.nl.list.length) {
              this.ol = 0;
            }
            this.sl.il(true);
          };
          f126.prototype.kl = function () {
            return f57(this.nl.name);
          };
          f126.prototype.ql = function () {
            if (this.ol >= this.nl.list.length) {
              return vF22.Yg();
            } else {
              return vF22.Zg(this.nl.list[this.ol]);
            }
          };
          return f126;
        }();
        return vF6110;
      }();
      v708 = $("#store-go-coins-button");
      v709 = $("#store-go-skins-button");
      v710 = $("#store-go-wear-button");
      v711 = f61(vF42, function () {
        vF42.call(this, f56("index.game.popup.menu.store.tab"), true);
        var vF5328 = f53();
        v708.click(function () {
          vF5328.r.Cd();
          vF5328.s.I(vF5328.s.Wh);
        });
        v709.click(function () {
          vF5328.r.Cd();
          vF5328.s.I(vF5328.s.$h);
        });
        v710.click(function () {
          vF5328.r.Cd();
          vF5328.s.I(vF5328.s.ai);
        });
      });
      v711.prototype.a = function () {
        v711.parent.prototype.a.call(this);
      };
      v711.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeOut(50);
        vF42.Gk.stop();
        vF42.Gk.fadeOut(50);
        vF42.Hk.stop();
        vF42.Hk.fadeOut(50);
        vF42.Jk.stop();
        vF42.Jk.fadeOut(50);
        vF42.Ik.stop();
        vF42.Ik.fadeOut(50);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeIn(200);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeOut(50);
        vF42.Ok.stop();
        vF42.Ok.fadeOut(50);
      };
      v711.prototype.ji = function () {
        f53().r.Dd();
      };
      var v_0x2ef4de = v711;
      v706 = $("#settings-kufur-isim");
      v707 = f61(vF42, function () {
        vF42.call(this, "WORMXT SETTINGS", 0);
        v62 = localStorage.getItem("wtr-block-bad-words") === "true";
        v706.prop("checked", v62);
        v706.click(function () {
          let v672 = v706.prop("checked");
          v62 = v672;
          localStorage.setItem("wtr-block-bad-words", v672 ? "true" : "false");
        });
      });
      v707.prototype.a = function () {
        v707.parent.prototype.a.call(this);
      };
      v707.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeOut(50);
        vF42.Gk.stop();
        vF42.Gk.fadeOut(50);
        vF42.Hk.stop();
        vF42.Hk.fadeOut(50);
        vF42.Jk.stop();
        vF42.Jk.fadeOut(50);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeOut(50);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeOut(50);
        vF42.Ok.stop();
        vF42.Ok.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeIn(200);
      };
      v707.prototype.ji = function () {
        f53().r.Dd();
      };
      var v_0x41e76a = v707;
      var vF45 = function () {
        var v$35 = $("#wear-view-canv");
        var v$36 = $("#wear-description-text");
        var v$37 = $("#wear-locked-bar");
        var v$38 = $("#wear-locked-bar-text");
        var v$39 = $("#wear-buy-button");
        var v$40 = $("#wear-item-price");
        var v$41 = $("#wear-eyes-button");
        var v$42 = $("#wear-mouths-button");
        var v$43 = $("#wear-glasses-button");
        var v$44 = $("#wear-hats-button");
        var v$45 = $("#wear-tint-chooser");
        var v$46 = $("#wear-view-prev");
        var v$47 = $("#wear-view-next");
        var vF6111 = f61(vF42, function () {
          var vThis29 = this;
          vF42.call(this, f56("index.game.popup.menu.wear.tab"), true);
          var vF5329 = f53();
          var vThis30 = this;
          this.tl = [];
          this.ja = new vF46(this, vF28.ja, v$41);
          this.ka = new vF46(this, vF28.ka, v$42);
          this.la = new vF46(this, vF28.la, v$43);
          this.ma = new vF46(this, vF28.ma, v$44);
          this.ul = null;
          this.vl = null;
          this.wl = null;
          this.xl = null;
          this.yl = null;
          this.zl = null;
          this.Al = new vF39(v$35);
          v$39.click(function () {
            vF5329.r.Cd();
            vThis30.Bl();
          });
          v$46.click(function () {
            vF5329.r.Cd();
            vThis30.ul.Cl();
          });
          v$47.click(function () {
            vF5329.r.Cd();
            vThis30.ul.Dl();
          });
          v$41.click(function () {
            vF5329.r.Cd();
            vThis30.El(vThis29.ja);
          });
          v$42.click(function () {
            vF5329.r.Cd();
            vThis30.El(vThis29.ka);
          });
          v$43.click(function () {
            vF5329.r.Cd();
            vThis30.El(vThis29.la);
          });
          v$44.click(function () {
            vF5329.r.Cd();
            vThis30.El(vThis29.ma);
          });
          this.tl.push(this.ja);
          this.tl.push(this.ka);
          this.tl.push(this.la);
          this.tl.push(this.ma);
        });
        vF6111.prototype.a = function () {
          vF6111.parent.prototype.a.call(this);
          var vF5330 = f53();
          var vThis31 = this;
          vF5330.p.ca(function () {
            var v673 = vF5330.p.Ac();
            if (v673 != null) {
              vThis31.vl = v673.eyesDict;
              vThis31.wl = v673.mouthDict;
              vThis31.xl = v673.glassesDict;
              vThis31.yl = v673.hatDict;
              vThis31.zl = v673.colorDict;
              vThis31.ja.Fl(v673.eyesVariantArray);
              vThis31.ja.Gl(vThis31.vl);
              vThis31.ka.Fl(v673.mouthVariantArray);
              vThis31.ka.Gl(vThis31.wl);
              vThis31.la.Fl(v673.glassesVariantArray);
              vThis31.la.Gl(vThis31.xl);
              vThis31.ma.Fl(v673.hatVariantArray);
              vThis31.ma.Gl(vThis31.yl);
            }
          });
          this.il(false);
          vF5330.t.xh(function () {
            vThis31.il(false);
          });
        };
        vF6111.prototype.Rk = function () {
          vF42.Fk.stop();
          vF42.Fk.fadeOut(50);
          vF42.Gk.stop();
          vF42.Gk.fadeOut(50);
          vF42.Hk.stop();
          vF42.Hk.fadeOut(50);
          vF42.Jk.stop();
          vF42.Jk.fadeOut(50);
          vF42.Ik.stop();
          vF42.Ik.fadeOut(50);
          vF42.Kk.stop();
          vF42.Kk.fadeOut(50);
          vF42.Lk.stop();
          vF42.Lk.fadeOut(50);
          vF42.Mk.stop();
          vF42.Mk.fadeIn(200);
          vF42.wtrset.stop();
          vF42.wtrset.fadeOut(50);
          vF42.Nk.stop();
          vF42.Nk.fadeOut(50);
          vF42.Ok.stop();
          vF42.Ok.fadeOut(50);
        };
        vF6111.prototype.ji = function () {
          f53().r.Dd();
          this.El(this.ul ?? this.ja);
          this.Al.Le(true);
        };
        vF6111.prototype.ei = function () {
          this.Al.Le(false);
        };
        vF6111.prototype.Ra = function () {
          this.Al.Ra();
        };
        vF6111.prototype.Pa = function (p696, p697) {
          this.Al.Pa();
        };
        vF6111.prototype.El = function (p698) {
          this.ul = p698;
          for (var vLN0103 = 0; vLN0103 < this.tl.length; vLN0103++) {
            this.tl[vLN0103].Xk.removeClass("pressed");
          }
          this.ul.Xk.addClass("pressed");
          this.ul.ii();
        };
        vF6111.prototype.Hl = function () {
          if (this.ul == null) {
            return vF22.Yg();
          } else {
            return vF22.Zg({
              Lb: this.ul.ql(),
              rc: this.ul.rc
            });
          }
        };
        vF6111.prototype.Bl = function () {
          var vThis32 = this;
          this.Hl().ah(function (p699) {
            vThis32.Ui(p699.Lb, p699.rc);
          });
        };
        vF6111.prototype.Ui = function (p700, p701) {
          var vThis33 = this;
          var vF5331 = f53();
          var vUndefined23 = undefined;
          switch (p701) {
            case vF28.ja:
              vUndefined23 = this.vl[p700].price;
              break;
            case vF28.ka:
              vUndefined23 = this.wl[p700].price;
              break;
            case vF28.la:
              vUndefined23 = this.xl[p700].price;
              break;
            case vF28.ma:
              vUndefined23 = this.yl[p700].price;
              break;
            default:
              return;
          }
          if (!(vF5331.u.zi() < vUndefined23)) {
            this.Sk();
            var v674 = vF5331.t.ha(vF28.ia);
            var v675 = vF5331.t.ha(vF28.ja);
            var v676 = vF5331.t.ha(vF28.ka);
            var v677 = vF5331.t.ha(vF28.la);
            var v678 = vF5331.t.ha(vF28.ma);
            vF5331.u.Ui(p700, p701, function () {
              vF5331.t.Bh(v674, vF28.ia);
              vF5331.t.Bh(v675, vF28.ja);
              vF5331.t.Bh(v676, vF28.ka);
              vF5331.t.Bh(v677, vF28.la);
              vF5331.t.Bh(v678, vF28.ma);
              if (vF5331.u.Ch(p700, p701)) {
                vF5331.t.Bh(p700, p701);
              }
              vThis33.Qk();
            });
          }
        };
        vF6111.prototype.Il = function (p702, p703) {
          switch (p703) {
            case vF28.ja:
              return this.vl[p702];
            case vF28.ka:
              return this.wl[p702];
            case vF28.la:
              return this.xl[p702];
            case vF28.ma:
              return this.yl[p702];
          }
          return null;
        };
        vF6111.prototype.il = function (p704) {
          var vF5332 = f53();
          this.Al.ak(vF5332.t.ha(vF28.ia), false, false);
          this.Al.bk(vF5332.t.ha(vF28.ja), false, false);
          this.Al.ck(vF5332.t.ha(vF28.ka), false, false);
          this.Al.dk(vF5332.t.ha(vF28.la), false, false);
          this.Al.ek(vF5332.t.ha(vF28.ma), false, false);
          var v679 = this.Hl();
          if (v679._g()) {
            var v680 = v679.$g();
            var v681 = this.Il(v680.Lb, v680.rc);
            var v682 = false;
            if (vF5332.t.Ja(v680.Lb, v680.rc)) {
              v$37.hide();
              v$39.hide();
            } else if (v681 == null || v681.nonbuyable == 1) {
              v682 = true;
              v$37.show();
              v$39.hide();
              v$38.text(f56("index.game.popup.menu.store.locked"));
              if (v681 != null && v681.nonbuyable && v681.nonbuyableCause != null) {
                var v683 = vF5332.p.Ac().textDict[v681.nonbuyableCause];
                if (v683 != null) {
                  v$38.text(f57(v683));
                }
              }
            } else {
              v$37.hide();
              v$39.show();
              v$40.html(v681.price);
            }
            v$36.html("ID: " + v680.Lb);
            if (v681 != null && v681.description != null) {
              var v684 = vF5332.p.Ac().textDict[v681.description];
              if (v684 != null) {
                v$36.html(f59(f57(v684)));
              }
            }
            switch (v680.rc) {
              case vF28.ja:
                this.Al.bk(v680.Lb, true, v682);
                break;
              case vF28.ka:
                this.Al.ck(v680.Lb, true, v682);
                break;
              case vF28.la:
                this.Al.dk(v680.Lb, true, v682);
                break;
              case vF28.ma:
                this.Al.ek(v680.Lb, true, v682);
            }
            if (p704) {
              vF5332.t.Bh(v680.Lb, v680.rc);
            }
          }
        };
        var vF46 = function () {
          function i(p705, p706, p707) {
            this.sl = p705;
            this.rc = p706;
            this.Xk = p707;
            this.Jl = {};
            this.Kl = [[]];
            this.Ll = -10;
            this.Ml = -10;
          }
          i.prototype.Fl = function (p708) {
            this.Kl = p708;
          };
          i.prototype.Gl = function (p709) {
            this.Jl = p709;
          };
          i.prototype.ii = function () {
            var v685 = f53().t.ha(this.rc);
            for (var vLN0104 = 0; vLN0104 < this.Kl.length; vLN0104++) {
              for (var vLN0105 = 0; vLN0105 < this.Kl[vLN0104].length; vLN0105++) {
                if (this.Kl[vLN0104][vLN0105] == v685) {
                  this.Nl(vLN0104);
                  this.Ol(vLN0105);
                  return;
                }
              }
            }
            this.Nl(0);
            this.Ol(0);
          };
          i.prototype.Cl = function () {
            var v686 = this.Ll - 1;
            if (v686 < 0) {
              v686 = this.Kl.length - 1;
            }
            this.Nl(v686);
            this.Ol(this.Ml % this.Kl[v686].length);
          };
          i.prototype.Dl = function () {
            var v687 = this.Ll + 1;
            if (v687 >= this.Kl.length) {
              v687 = 0;
            }
            this.Nl(v687);
            this.Ol(this.Ml % this.Kl[v687].length);
          };
          i.prototype.Nl = function (p710) {
            var vThis34 = this;
            if (!(p710 < 0) && !(p710 >= this.Kl.length)) {
              this.Ll = p710;
              v$45.empty();
              var v688 = this.Kl[this.Ll];
              if (v688.length > 1) {
                for (var vLN0106 = 0; vLN0106 < v688.length; vLN0106++) {
                  (function (p711) {
                    var v689 = v688[p711];
                    var v690 = vThis34.Jl[v689];
                    var v691 = "#" + vThis34.sl.zl[v690.prime];
                    var v$48 = $("<div style=\"border-color:" + v691 + "\"></div>");
                    v$48.click(function () {
                      f53().r.Cd();
                      vThis34.Ol(p711);
                    });
                    v$45.append(v$48);
                  })(vLN0106);
                }
              }
            }
          };
          i.prototype.Ol = function (p712) {
            if (!(p712 < 0) && !(p712 >= this.Kl[this.Ll].length)) {
              this.Ml = p712;
              v$45.children().css("background-color", "transparent");
              var v692 = v$45.children(":nth-child(" + (1 + p712) + ")");
              v692.css("background-color", v692.css("border-color"));
              this.sl.il(true);
            }
          };
          i.prototype.ql = function () {
            return this.Kl[this.Ll][this.Ml];
          };
          return i;
        }();
        return vF6111;
      }();
      v703 = $("#withdraw-consent-yes");
      v704 = $("#withdraw-consent-no");
      v705 = f61(vF42, function () {
        vF42.call(this, f56("index.game.popup.menu.consent.tab"), false);
        var vF5333 = f53();
        v703.click(function () {
          vF5333.r.Cd();
          if (vF5333.Y()) {
            vF5333.s.I(vF5333.s.F);
            vF5333.$(false, true);
            vF5333.s.aa._(new v_0xb7eccc());
          } else {
            vF5333.s.gi();
          }
        });
        v704.click(function () {
          vF5333.r.Cd();
          vF5333.s.gi();
        });
      });
      v705.prototype.a = function () {
        v705.parent.prototype.a.call(this);
      };
      v705.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeOut(50);
        vF42.Gk.stop();
        vF42.Gk.fadeOut(50);
        vF42.Hk.stop();
        vF42.Hk.fadeOut(50);
        vF42.Jk.stop();
        vF42.Jk.fadeOut(50);
        vF42.Ik.stop();
        vF42.Ik.fadeOut(50);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeOut(50);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeIn(200);
        vF42.Ok.stop();
        vF42.Ok.fadeOut(50);
      };
      v705.prototype.ji = function () {
        f53().r.Dd();
      };
      var v_0x5cebbd = v705;
      v699 = $("#delete-account-timer");
      v700 = $("#delete-account-yes");
      v701 = $("#delete-account-no");
      v702 = f61(vF42, function () {
        vF42.call(this, f56("index.game.popup.menu.delete.tab"), false);
        var vF5334 = f53();
        v700.click(function () {
          vF5334.r.Cd();
          if (vF5334.u.P()) {
            vF5334.u.bj();
            vF5334.u.Wi();
          } else {
            vF5334.s.gi();
          }
        });
        v701.click(function () {
          vF5334.r.Cd();
          vF5334.s.gi();
        });
        this.Pl = [];
      });
      v702.prototype.a = function () {
        v702.parent.prototype.a.call(this);
      };
      v702.prototype.Rk = function () {
        vF42.Fk.stop();
        vF42.Fk.fadeOut(50);
        vF42.Gk.stop();
        vF42.Gk.fadeOut(50);
        vF42.Hk.stop();
        vF42.Hk.fadeOut(50);
        vF42.Jk.stop();
        vF42.Jk.fadeOut(50);
        vF42.Ik.stop();
        vF42.Ik.fadeOut(50);
        vF42.Kk.stop();
        vF42.Kk.fadeOut(50);
        vF42.Lk.stop();
        vF42.Lk.fadeOut(50);
        vF42.Mk.stop();
        vF42.Mk.fadeOut(50);
        vF42.wtrset.stop();
        vF42.wtrset.fadeOut(50);
        vF42.Nk.stop();
        vF42.Nk.fadeOut(50);
        vF42.Ok.stop();
        vF42.Ok.fadeIn(200);
      };
      v702.prototype.ji = function () {
        f53().r.Hd();
        v700.stop();
        v700.hide();
        v699.stop();
        v699.show();
        v699.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v699.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v699.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v699.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v699.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v699.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v699.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v699.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v699.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v699.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v699.hide();
          v700.fadeIn(300);
        }, 10000);
      };
      v702.prototype.Rl = function (p713, p714) {
        var vSetTimeout2 = setTimeout(p713, p714);
        this.Pl.push(vSetTimeout2);
      };
      v702.prototype.Ql = function () {
        for (var vLN0107 = 0; vLN0107 < this.Pl.length; vLN0107++) {
          clearTimeout(this.Pl[vLN0107]);
        }
        this.Pl = [];
      };
      var v_0x63a3a6 = v702;
      var vF47 = function () {
        function f128() {
          this.Ck = function () {};
        }
        f128.prototype.Bk = function () {};
        f128.prototype.ji = function () {};
        return f128;
      }();
      v698 = f61(vF47, function (p715) {
        vF47.call(this);
        var v693 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v693 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p715 + "</div>    <div class=\"toaster-coins-close\">" + f56("index.game.toaster.continue") + "</div></div>");
        var vThis35 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f53().r.Cd();
          vThis35.Ck();
        });
      });
      v698.prototype.Bk = function () {
        return this.Sl;
      };
      v698.prototype.ji = function () {
        f53().r.Fd();
      };
      var v_0x1102e1 = v698;
      v697 = f61(vF47, function (p716) {
        vF47.call(this);
        var v694 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v694 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p716 + "</div>    <div class=\"toaster-levelup-text\">" + f56("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f56("index.game.toaster.continue") + "</div></div>");
        var vThis36 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f53().r.Cd();
          vThis36.Ck();
        });
      });
      v697.prototype.Bk = function () {
        return this.Sl;
      };
      v697.prototype.ji = function () {
        f53().r.Ed();
      };
      var v_0x2bb75b = v697;
      v696 = f61(vF47, function () {
        vF47.call(this);
        var vThis37 = this;
        var vF5335 = f53();
        var v695 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v695 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas20 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f56("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f56("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f56("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF5335.r.Cd();
          if (vF5335.Y()) {
            vF5335.$(true, true);
          }
          vThis37.Ck();
        });
      });
      v696.prototype.Bk = function () {
        return this.Sl;
      };
      v696.prototype.ji = function () {
        var vThis38 = this;
        var vF5336 = f53();
        if (vF5336.Y() && !vF5336.Z()) {
          vF5336.r.Hd();
          setTimeout(function () {
            vThis38.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis38.Ck();
          }, 0);
        }
      };
      var v_0xb7eccc = v696;
      var vO33 = {};
      var v696;
      var v697;
      var v698;
      var v699;
      var v700;
      var v701;
      var v702;
      var v703;
      var v704;
      var v705;
      var v706;
      var v707;
      var v708;
      var v709;
      var v710;
      var v711;
      var v712;
      var v713;
      var v714;
      var v715;
      var v716;
      var v717;
      var v718;
      var v719;
      var v720;
      var v721;
      var v722;
      var v723;
      var v724;
      var v725;
      var v726;
      var v727;
      var v728;
      var v729;
      var v730;
      var v731;
      var v732;
      var v733;
      var v734;
      var v735;
      var v736;
      var v737;
      var v738;
      var v739;
      var v740;
      var v741;
      var v742;
      var v743;
      var v744;
      var v745;
      var v746;
      var v747;
      var v748;
      var v749;
      var v750;
      var v751;
      var v752;
      var v753;
      var v754;
      var v755;
      var v756;
      var v757;
      var v758;
      var v759;
      var v760;
      var v761;
      var v762;
      var v763;
      var v764;
      var v765;
      var v766;
      var v767;
      var v768;
      var v769;
      var v770;
      var v771;
      var v772;
      var v773;
      var v774;
      var v775;
      var v776;
      var v777;
      var v778;
      var v779;
      var v780;
      vO33.main = {
        Ma: f77("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        K: f77("ltmolilci1iurq1i", "wormate-io_970x250"),
        ra: f74(),
        e: 4,
        oa: false,
        qk: true
      };
      vO33.miniclip = {
        Ma: f77("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        K: f77("ltmolilci1iurq1i", "wormate-io_970x250"),
        ra: f74(),
        e: 4,
        oa: false,
        qk: false
      };
      var v781 = vO33[window.ENV];
      v781 ||= vO33.main;
      $(function () {
        FastClick.attach(document.body);
      });
      addEventListener("contextmenu", function (p717) {
        p717.preventDefault();
        p717.stopPropagation();
        return false;
      });
      f60("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
        FB.init({
          appId: "861926850619051",
          cookie: true,
          xfbml: true,
          status: true,
          version: "v8.0"
        });
      });
      f60("//apis.google.com/js/api:client.js", null, function () {
        gapi.load("auth2", function () {
          v175 = gapi.auth2.init({
            client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
          });
        });
      });
      vUndefined2 = f78();
      vUndefined2.v();
      $("#mm-menu-cont").css("display", "block");
      vO11.loading = true;
      var v782 = localStorage.getItem("custom_wormworld_skin");
      function f129(p718) {
        if (vO11.PropertyManager) {
          p718.skinId = vO11.PropertyManager.rh;
          p718.eyesId = vO11.PropertyManager.sh;
          p718.mouthId = vO11.PropertyManager.th;
          p718.glassesId = vO11.PropertyManager.uh;
          p718.hatId = vO11.PropertyManager.vh;
        }
      }
      function f130(p719, p720) {
        let vF48 = function (p721, p722, p723, p724) {
          $("#contadorKill_1 .kill").html(p721);
          $("#contadorKill_1 .headshots").html(p722);
        };
        if (p719 === "count") {
          vO11.kill = (vO11.kill || 0) + (p720 ? 0 : 1);
          vO11.headshot = (vO11.headshot || 0) + (p720 ? 1 : 0);
          vF48(vO11.kill, vO11.headshot, vO11.totalKills, vO11.totalHeadshots);
        }
        if (p719 === "open") {
          vO11.kill = 0;
          vO11.headshot = 0;
          $("#contadorKill_1").show();
          vF48(vO11.kill, vO11.headshot, vO11.totalKills, vO11.totalHeadshots);
        }
        if (p719 === "closed") {
          $("#contadorKill_1").hide();
          vF48("cerrar");
        }
        if (p719 === "cerrar") {
          vO11.kill = 0;
          vO11.headshot = 0;
          vO11.totalKills = 0;
          vO11.totalHeadshots = 0;
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
            return (this / 1000000).toFixed(1) + "M🍰";
          } else if (this >= 100000) {
            return (this / 1000).toFixed(0) + "k🍰";
          } else {
            return this.dotFormat();
          }
        };
      }
      var vT = function f131() {
        requestAnimationFrame(f131);
        f53().Pa();
      };
      vT();
      function f132() {
        var v783 = v$49.width();
        var v784 = v$49.height();
        var v785 = v$50.outerWidth();
        var v786 = v$50.outerHeight();
        var v787 = v$51.outerHeight();
        var v788 = v$52.outerHeight();
        var v789 = Math.min(1, Math.min((v784 - v788 - v787) / v786, v783 / v785));
        var v790 = "translate(-50%, -50%) scale(" + v789 + ")";
        v$50.css({
          "-webkit-transform": v790,
          "-moz-transform": v790,
          "-ms-transform": v790,
          "-o-transform": v790,
          transform: v790
        });
        f53().Ra();
        window.scrollTo(0, 1);
      }
      var v$49 = $("body");
      var v$50 = $("#stretch-box");
      var v$51 = $("#markup-header");
      var v$52 = $("#markup-footer");
      f132();
      $(window).resize(f132);
    })();
  } else {
    document.getElementById("error-view").style.display = "block";
  }
});
const vA16 = ["sao-a.wormate.io", "mum-a.wormate.io", "dxb-a.wormate.io", "fra-e.wormate.io", "fra-d.wormate.io", "fra-c.wormate.io", "fra-b.wormate.io", "waw-a.wormate.io", "dal-b.wormate.io", "vin-a.wormate.io", "dal-a.wormate.io", "sao-c.wormate.io", "bhs-a.wormate.io", "sao-b.wormate.io", "hil-a.wormate.io", "syd-a.wormate.io", "sin-g.wormate.io", "gra-a.wormate.io", "sin-i.wormate.io", "sin-h.wormate.io", "sin-f.wormate.io", "sin-c.wormate.io", "sin-b.wormate.io", "sin-a.wormate.io", "tok-b.wormate.io", "sin-d.wormate.io", "sin-e.wormate.io"];
async function f133(p725) {
  console.log("\n🔍 Probando servidores Wormate.io (puerto " + p725 + ")...\n");
  const vA17 = [];
  const v$53 = $("<ul></ul>");
  $("#resultadoPuertas").html("");
  $("#resultadoPuertas").append(v$53);
  for (const v791 of vA16) {
    const v792 = "wss://" + v791 + ":" + p725 + "/wormy";
    const v793 = performance.now();
    let v794 = false;
    const v795 = await new Promise(p726 => {
      const v796 = new WebSocket(v792);
      const vF49 = (p727, p728 = null) => {
        if (!v794) {
          v794 = true;
          v796.close();
          p726({
            host: v791,
            status: p727,
            latency: p728
          });
        }
      };
      v796.onerror = () => vF49("❌ Cerrado");
      v796.onclose = () => vF49("❌ Cerrado");
      v796.onopen = () => {
        const v797 = Math.round(performance.now() - v793);
        vF49("✅ ", v797);
      };
      setTimeout(() => vF49("⏱️ Timeout"), 10000);
    });
    if (v795.status === "✅ ") {
      vA17.push(v795);
      const v798 = v795.latency !== null ? " - Ping: " + v795.latency + " ms" : "";
      const v799 = "wss://" + v795.host + ":" + p725 + "/wormy";
      const v$54 = $("\n                    <li>\n                        " + v795.status + v798 + "\n                        <button class=\"connect-button\" data-server=\"" + v799 + "\" style=\"margin-left: 10px;\">Connect</button>\n                    </li>\n                ");
      v$53.append(v$54);
    }
    await new Promise(p729 => setTimeout(p729, 200));
  }
  if (vA17.length > 0) {
    vA17.sort((p730, p731) => p730.latency - p731.latency);
    const v800 = vA17[0];
    const v801 = "<strong>🏆 Best server: " + v800.host + " - Ping: " + v800.latency + " ms</strong>";
    v$53.append("<li style=\"margin-top:10px;\">" + v801 + "</li>");
  } else {
    v$53.append("<li><strong>❌ No se encontraron puertas abiertas.</strong></li>");
  }
  $(document).off("click", ".connect-button").on("click", ".connect-button", function () {
    const v802 = $(this).data("server");
    anApp.sa(v802);
    console.log("Conectando a:", v802);
  });
}
console.log("Core 2022 THEO Prueba");