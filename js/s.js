var vLSHttpshaylamdaycom = "https://haylamday.com";
window.detectLog = null;
const vO = {
  BETAisSkinCustom(p) {
    var v = /[a-zA-Z]/;
    return typeof p === "string" && v.test(p);
  },
  testSkinCustom: function (p2) {
    if (vO.BETAisSkinCustom(p2)) {
      return 34 || 33;
    } else {
      return p2;
    }
  },
  testSkinMod: function (p3) {
    return p3 >= 399 && p3 < 999;
  },
  testWear: function (p4) {
    return p4 >= 399 && p4 < 999;
  },
  isNumberValid: function (p5) {
    return p5 !== "" && p5 !== null && p5 !== undefined && !isNaN(p5);
  },
  validInput: function (p6) {
    if (!vO.testSkinMod(p6) && !vO.BETAisSkinCustom(p6)) {
      return p6;
    }
    try {
      let v2 = $("#inputReplaceSkin").val();
      return encodeURI(vO.isNumberValid(v2) ? v2 : 35);
    } catch (e2) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var v3 = localStorage.getItem("inputReplaceSkin");
var v4 = null;
var v5 = false;
var vO2 = {};
window.keyMove = 81;
var vO3 = {
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
    backgroundImage: "url('path_to_image.png')",
    pxy: 110
  }
};
var vO4 = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.005,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremermuiten: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: vO3.joystick,
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
  let v6 = JSON.parse(saveGameLocal);
  for (let v7 in v6) {
    vO4[v7] = v6[v7];
  }
}
vO4.loading = true;
const vF = function () {
  let v8 = false;
  vO4.mobile = false;
  var v9 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v9) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v9.substr(0, 4))) {
    vO4.mobile = true;
    v8 = true;
  }
  return v8;
};
const vF2 = function () {
  let v10 = false;
  var v11 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v11) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v11.substr(0, 4))) {
    v10 = true;
  }
  return v10;
};
const vF3 = function (p7) {
  let v12;
  try {
    console.log(p7);
    vO4.gamePad ||= vO3.joystick;
    if (vF2() && (p7 || vO4.gamePad.checked)) {
      v12 = nipplejs.create(vO4.gamePad);
      v12.on("move", function (p8, p9) {
        vO3.eventoPrincipal.sk = p9.angle.radian <= Math.PI ? p9.angle.radian * -1 : Math.PI - (p9.angle.radian - Math.PI);
        console.log(p9);
      });
    }
    return v12;
  } catch (e3) {
    console.log(e3);
  }
};
let vO5 = {
  clientesVencidos: [],
  clientesActivos: []
};
let vO6 = {
  Api_listServer: []
};
async function f() {
  await fetch("https://haylamday.com/api/users.php").then(p10 => p10.json()).then(p11 => {
    if (p11.success) {
      let v13 = p11.Users;
      vO5.clientesActivos = v13.filter(p12 => {
        return p12.cliente_ID;
      });
    } else {
      vO5 = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
async function f2() {
  await fetch("https://haylamday.com/api/server.php").then(p17 => p17.json()).then(p18 => {
    if (p18.success) {
      let v25 = p18.servers;
      vO6.Api_listServer = v25.filter(p19 => {
        return p19.serverUrl;
      });
    } else {
      vO6 = {
        Api_listServer: []
      };
      alert("An error occurred while loading the servers");
    }
  });
}
f();
f2();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var v$ = $("#idReplaceSkin");
const vO7 = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 11,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    anheadshot: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 0,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "vuonghiep",
      wordWrap: true
    })
  }
};
vO7.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png");
vO7.clock.width = 100;
vO7.clock.height = 100;
vO7.clock.x = -50;
vO7.clock.y = -50;
vO7.clockan = PIXI.Sprite.fromImage("https://i.imgur.com/jkOvq9J.png");
if (vO4.ModeStremeranclock) {
  vO7.clockan.width = 100;
  vO7.clockan.height = 100;
  vO7.clockan.x = -50;
  vO7.clockan.y = -50;
} else {
  vO7.clockan.width = 0;
  vO7.clockan.height = 0;
  vO7.clockan.x = -50;
  vO7.clockan.y = -50;
}
vO7.value_server = new PIXI.Text("WFC", vO7.fontStyle.name);
vO7.value_server.x = 55;
vO7.value_server.y = 0;
vO7.label_hs = new PIXI.Text("HS", vO7.fontStyle.amarillo);
vO7.value1_hs = new PIXI.Text("0", vO7.fontStyle.amarillo);
vO7.label_kill = new PIXI.Text("KL", vO7.fontStyle.morado);
vO7.value1_kill = new PIXI.Text("0", vO7.fontStyle.morado);
if (vO4.ModeStremersaveheadshot) {
  vO7.value2_hs = new PIXI.Text("", vO7.fontStyle.amarillo1);
  vO7.value2_kill = new PIXI.Text("", vO7.fontStyle.morado1);
} else {
  vO7.value2_hs = new PIXI.Text("", vO7.fontStyle.amarillo1);
  vO7.value2_kill = new PIXI.Text("", vO7.fontStyle.morado1);
}
;
vO7.label_hs.x = 15;
vO7.label_hs.y = 100;
vO7.label_kill.x = 65;
vO7.label_kill.y = 100;
vO7.value1_hs.x = 15;
vO7.value1_hs.y = 116;
vO7.value1_kill.x = 65;
vO7.value1_kill.y = 116;
vO7.value2_hs.x = 15;
vO7.value2_hs.y = 133;
vO7.value2_kill.x = 65;
vO7.value2_kill.y = 133;
vO7.containerCountInfo = new PIXI.Container();
vO7.containerCountInfo.x = -45;
vO7.containerCountInfo.y = -52;
vO7.containerCountInfo.addChild(vO7.value_server);
vO7.containerCountInfo.addChild(vO7.label_hs);
vO7.containerCountInfo.addChild(vO7.value1_hs);
vO7.containerCountInfo.addChild(vO7.value2_hs);
vO7.containerCountInfo.addChild(vO7.label_kill);
vO7.containerCountInfo.addChild(vO7.value1_kill);
vO7.containerCountInfo.addChild(vO7.value2_kill);
vO7.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
vO7.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
vO7.onclickServer = PIXI.Texture.fromImage(vO4.flag);
vO7.containerImgS = new PIXI.Sprite(vO7.imgServerbase);
vO7.containerImgS.anchor.set(0.5);
vO7.containerImgS.x = 0;
vO7.containerImgS.y = 8;
vO7.containerImgS.width = 0;
vO7.containerImgS.height = 0;
vO7.borderImg = new PIXI.Sprite(vO7.borderurl);
vO7.borderImg.anchor.set(0.5);
vO7.borderImg.x = -2;
vO7.borderImg.y = 78;
vO7.borderImg.width = 110;
vO7.borderImg.height = 60;
vO7.setServer = function (p20) {
  vO7.value_server.text = p20 || "WFC";
};
vO7.setCountGame = function (p21, p22, p23, p24) {
  vO7.value1_hs.text = p22;
  vO7.value1_kill.text = p21;
  ;
  if (vO4.ModeStremersaveheadshot) {
    vO7.value2_hs.text = p24;
    vO7.value2_kill.text = p23;
  } else {}
  ;
};
"use strict";
var v26 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p25) {
  return typeof p25;
} : function (p26) {
  if (p26 && typeof Symbol == "function" && p26.constructor === Symbol && p26 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p26;
  }
};
var v27;
(function () {
  try {
    console.log(function (p27, p28) {
      for (var vLN02 = 0; vLN02 < p28.length; vLN02 += 2) {
        p27 = p27.replaceAll(p28[vLN02], p28[vLN02 + 1]);
      }
      return p27;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e5) {}
})();
window.addEventListener("load", function () {
  function f4() {
    (function (p29, p30, p31) {
      function f5(p32, p33) {
        return (p32 === undefined ? "undefined" : v26(p32)) === p33;
      }
      function f6() {
        if (typeof p30.createElement != "function") {
          return p30.createElement(arguments[0]);
        } else if (v30) {
          return p30.createElementNS.call(p30, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p30.createElement.apply(p30, arguments);
        }
      }
      var vA2 = [];
      var vA3 = [];
      var vO8 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p34, p35) {
          var vThis = this;
          setTimeout(function () {
            p35(vThis[p34]);
          }, 0);
        },
        addTest: function (p36, p37, p38) {
          vA3.push({
            name: p36,
            fn: p37,
            options: p38
          });
        },
        addAsyncTest: function (p39) {
          vA3.push({
            name: null,
            fn: p39
          });
        }
      };
      function f7() {}
      f7.prototype = vO8;
      f7 = new f7();
      var v28 = false;
      try {
        v28 = "WebSocket" in p29 && p29.WebSocket.CLOSING === 2;
      } catch (e6) {}
      f7.addTest("websockets", v28);
      var v29 = p30.documentElement;
      var v30 = v29.nodeName.toLowerCase() === "svg";
      f7.addTest("canvas", function () {
        var vF6 = f6("canvas");
        return !!vF6.getContext && !!vF6.getContext("2d");
      });
      f7.addTest("canvastext", function () {
        return f7.canvas !== false && typeof f6("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v31;
        var v32;
        var v33;
        var v34;
        var v35;
        var v36;
        var v37;
        for (var v38 in vA3) {
          if (vA3.hasOwnProperty(v38)) {
            v31 = [];
            v32 = vA3[v38];
            if (v32.name && (v31.push(v32.name.toLowerCase()), v32.options && v32.options.aliases && v32.options.aliases.length)) {
              for (v33 = 0; v33 < v32.options.aliases.length; v33++) {
                v31.push(v32.options.aliases[v33].toLowerCase());
              }
            }
            v34 = f5(v32.fn, "function") ? v32.fn() : v32.fn;
            v35 = 0;
            for (; v35 < v31.length; v35++) {
              v36 = v31[v35];
              v37 = v36.split(".");
              if (v37.length === 1) {
                f7[v37[0]] = v34;
              } else {
                if (!!f7[v37[0]] && !(f7[v37[0]] instanceof Boolean)) {
                  f7[v37[0]] = new Boolean(f7[v37[0]]);
                }
                f7[v37[0]][v37[1]] = v34;
              }
              vA2.push((v34 ? "" : "no-") + v37.join("-"));
            }
          }
        }
      })();
      (function (p40) {
        var v39 = v29.className;
        var v40 = f7._config.classPrefix || "";
        if (v30) {
          v39 = v39.baseVal;
        }
        if (f7._config.enableJSClass) {
          var v41 = new RegExp("(^|\\s)" + v40 + "no-js(\\s|$)");
          v39 = v39.replace(v41, "$1" + v40 + "js$2");
        }
        if (f7._config.enableClasses) {
          v39 += " " + v40 + p40.join(" " + v40);
          if (v30) {
            v29.className.baseVal = v39;
          } else {
            v29.className = v39;
          }
        }
      })(vA2);
      delete vO8.addTest;
      delete vO8.addAsyncTest;
      for (var vLN03 = 0; vLN03 < f7._q.length; vLN03++) {
        f7._q[vLN03]();
      }
      p29.Modernizr = f7;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f8(p41, p42, p43) {
    const vA4 = [38, 38, 38, 120, 38, 25, 38];
    const vA5 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let v42 = vA4[p42] - parseInt((p43 == 0.99 ? 1 : p43) * vA4[p42] / 1);
    const v43 = new PIXI.TextStyle({
      align: "center",
      fill: vA5[p42],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let v44 = "pwr_clock" + p42;
    if (!vO2[v44] && vA4[p42] === v42) {
      vO2[v44] = new PIXI.Text(v42, v43);
      vO2[v44].y = 61;
      p41.Tf[p42].addChild(vO2[v44]);
    }
    if (vO2[v44]) {
      vO2[v44].x = v42 >= 100 ? 11 : v42 >= 10 ? 18 : 26;
      vO2[v44].text = v42;
      if (v42 === 0) {
        delete vO2[v44];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f4()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f9() {
      return window.anApp = vUndefined2;
    }
    function f10(p44) {
      const v45 = p44 + "=";
      const v46 = document.cookie.split(";");
      for (let vLN04 = 0; vLN04 < v46.length; vLN04++) {
        let v47 = v46[vLN04];
        while (v47.charAt(0) === " ") {
          v47 = v47.substring(1);
        }
        if (v47.indexOf(v45) === 0) {
          return v47.substring(v45.length, v47.length);
        }
      }
      return "";
    }
    function f11(p45, p46, p47) {
      var v48 = new Date();
      v48.setTime(v48.getTime() + p47 * 86400000);
      var v49 = "expires=" + v48.toUTCString();
      document.cookie = p45 + "=" + p46 + "; " + v49 + "; path=/";
    }
    function f12(p48) {
      return window.I18N_MESSAGES[p48];
    }
    function f13(p49) {
      if (p49[v122]) {
        return p49[v122];
      } else if (p49.en) {
        return p49.en;
      } else {
        return p49.x;
      }
    }
    function f14(p50) {
      var v50 = (Math.floor(p50) % 60).toString();
      var v51 = (Math.floor(p50 / 60) % 60).toString();
      var v52 = (Math.floor(p50 / 3600) % 24).toString();
      var v53 = Math.floor(p50 / 86400).toString();
      var vF12 = f12("util.time.days");
      var vF122 = f12("util.time.hours");
      var vF123 = f12("util.time.min");
      var vF124 = f12("util.time.sec");
      if (v53 > 0) {
        return v53 + " " + vF12 + " " + v52 + " " + vF122 + " " + v51 + " " + vF123 + " " + v50 + " " + vF124;
      } else if (v52 > 0) {
        return v52 + " " + vF122 + " " + v51 + " " + vF123 + " " + v50 + " " + vF124;
      } else if (v51 > 0) {
        return v51 + " " + vF123 + " " + v50 + " " + vF124;
      } else {
        return v50 + " " + vF124;
      }
    }
    function f15(p51) {
      if (p51.includes("href")) {
        return p51.replaceAll("href", "target=\"_black\" href");
      } else {
        return p51;
      }
    }
    function f16(p52, p53, p54) {
      var v54 = document.createElement("script");
      var v55 = true;
      if (p53) {
        v54.id = p53;
      }
      v54.async = "async";
      v54.type = "text/javascript";
      v54.src = p52;
      if (p54) {
        v54.onload = v54.onreadystatechange = function () {
          v55 = false;
          try {
            p54();
          } catch (e7) {
            console.log(e7);
          }
          v54.onload = v54.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v54);
    }
    function f17(p55, p56) {
      var vP56 = p56;
      vP56.prototype = Object.create(p55.prototype);
      vP56.prototype.constructor = vP56;
      vP56.parent = p55;
      return vP56;
    }
    function f18(p57) {
      p57 %= v126;
      if (p57 < 0) {
        return p57 + v126;
      } else {
        return p57;
      }
    }
    function f19(p58, p59, p60) {
      return f20(p60, p58, p59);
    }
    function f20(p61, p62, p63) {
      if (p61 > p63) {
        return p63;
      } else if (p61 < p62) {
        return p62;
      } else if (Number.isFinite(p61)) {
        return p61;
      } else {
        return (p62 + p63) * 0.5;
      }
    }
    function f21(p64, p65, p66, p67) {
      if (p65 > p64) {
        return Math.min(p65, p64 + p66 * p67);
      } else {
        return Math.max(p65, p64 - p66 * p67);
      }
    }
    function f22(p68, p69, p70, p71, p72) {
      return p69 + (p68 - p69) * Math.pow(1 - p71, p70 / p72);
    }
    function f23(p73, p74, p75) {
      return p73 * (1 - p75) + p74 * p75;
    }
    function f24(p76, p77, p78, p79) {
      var vP78 = p78;
      var vP77 = p77;
      var v56 = p77 + p79;
      if (p76 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v57 = p76.length >>> 0;
      var v58 = vP78 >> 0;
      var v59 = v58 < 0 ? Math.max(v57 + v58, 0) : Math.min(v58, v57);
      var v60 = vP77 >> 0;
      var v61 = v60 < 0 ? Math.max(v57 + v60, 0) : Math.min(v60, v57);
      var v62 = v56 === undefined ? v57 : v56 >> 0;
      var v63 = v62 < 0 ? Math.max(v57 + v62, 0) : Math.min(v62, v57);
      var v64 = Math.min(v63 - v61, v57 - v59);
      var vLN1 = 1;
      for (v61 < v59 && v59 < v61 + v64 && (vLN1 = -1, v61 += v64 - 1, v59 += v64 - 1); v64 > 0;) {
        if (v61 in p76) {
          p76[v59] = p76[v61];
        } else {
          delete p76[v59];
        }
        v61 += vLN1;
        v59 += vLN1;
        v64--;
      }
      return p76;
    }
    function f25(p80) {
      return p80.getContext("2d");
    }
    function f26(p81) {
      if (p81.parent != null) {
        p81.parent.removeChild(p81);
      }
    }
    function f27(p82) {
      return p82[parseInt(Math.random() * p82.length)];
    }
    function f28() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f29(p83, p84, p85) {
      var v65 = (1 - Math.abs(p85 * 2 - 1)) * p84;
      var v66 = v65 * (1 - Math.abs(p83 / 60 % 2 - 1));
      var v67 = p85 - v65 / 2;
      if (p83 >= 0 && p83 < 60) {
        return [v67 + v65, v67 + v66, v67 + 0];
      } else if (p83 >= 60 && p83 < 120) {
        return [v67 + v66, v67 + v65, v67 + 0];
      } else if (p83 >= 120 && p83 < 180) {
        return [v67 + 0, v67 + v65, v67 + v66];
      } else if (p83 >= 180 && p83 < 240) {
        return [v67 + 0, v67 + v66, v67 + v65];
      } else if (p83 >= 240 && p83 < 300) {
        return [v67 + v66, v67 + 0, v67 + v65];
      } else {
        return [v67 + v65, v67 + 0, v67 + v66];
      }
    }
    function f30() {
      function f31() {
        let v68 = vO4.adblock ? 1 : 5;
        $("#adbl-1").text(f12("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f12("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f12("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f12("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f12("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
        var vV68 = v68;
        for (var vLN05 = 0; vLN05 < v68; vLN05++) {
          setTimeout(function () {
            vV68--;
            $("#adbl-4").text(f12("index.game.antiadblocker.msg4").replace("{0}", vV68));
            if (vV68 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e8) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN05 + 1) * 1000);
        }
      }
      var v69 = false;
      function f32() {}
      var vO9 = {};
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
        f32(false);
      });
      vO9.a = function (p86) {
        f32 = p86;
        if (!v69) {
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
                AIP_COMPLETE: function (p87) {
                  console.log("aipC");
                  f32(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e9) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v69 = true;
          } catch (e10) {}
        }
      };
      vO9.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e11) {}
          f31();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e12) {}
          f31();
        }
      };
      return vO9;
    }
    function f33(p88, p89) {
      var v$2 = $("#" + p88);
      var vP89 = p89;
      var vO10 = {};
      var v70 = false;
      vO10.a = function () {
        if (!v70) {
          v$2.empty();
          v$2.append("<div id='" + vP89 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (e13) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP89);
            });
            v70 = true;
          } catch (e14) {}
        }
      };
      vO10.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (e15) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP89);
          });
        } catch (e16) {}
      };
      return vO10;
    }
    function f34() {
      function f35(p90) {
        var v71 = p90 + Math.floor(Math.random() * 65535) * 37;
        f11(vF15.d, v71, 30);
      }
      function f36() {
        return parseInt(f10(vF15.d)) % 37;
      }
      return function () {
        var vF36 = f36();
        console.log("init1 pSC: " + vF36);
        if (!(vF36 >= 0) || !(vF36 < v538.e)) {
          vF36 = Math.max(0, v538.e - 2);
          console.log("init2 pSC: " + vF36);
        }
        var vO11 = {};
        vUndefined2 = vO11;
        vO11.f = v538;
        vO11.g = false;
        vO11.i = Date.now();
        vO11.j = 0;
        vO11.k = 0;
        vO11.l = null;
        vO11.m = vUndefined;
        vO11.n = v122;
        vO11.o = null;
        vO11.p = null;
        vO11.q = null;
        vO11.r = null;
        vO11.s = null;
        vO11.t = null;
        vO11.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p91) {
              if (p91.coords !== undefined) {
                var v72 = p91.coords;
                if (v72.latitude !== undefined && v72.longitude !== undefined) {
                  vO11.l = p91;
                }
              }
            }, function (p92) {});
          }
        } catch (e17) {}
        vO11.v = function () {
          vO11.p = new vF9();
          vO11.q = new vF39();
          vO11.r = new vF11();
          vO11.s = new vF40();
          vO11.t = new vF35();
          vO11.u = new vF42();
          vO11.o = new f37();
          vO11.o.z = new vF28(vO11.o);
          vO11.a();
        };
        vO11.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e18) {}
          vO11.o.A = function () {
            vO11.o.B();
          };
          vO11.o.C = function () {
            var v73 = vO11.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v73);
            } catch (e19) {}
            vO11.r.G(vF11.AudioState.H);
            vO11.s.I(vO11.s.H.J());
          };
          vO11.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e20) {}
            if ($("body").height() >= 430) {
              vO11.f.K.c();
            }
            vO11.p.L();
            (function () {
              var v74 = Math.floor(vO11.o.N.M);
              var v75 = vO11.o.O;
              if (vO11.u.P()) {
                vO11.u.Q(function () {
                  vO11.R(v74, v75);
                });
              } else {
                vO11.R(v74, v75);
              }
            })();
          };
          vO11.o.S = function (p93) {
            p93(vO11.s.H.T(), vO11.s.H.U());
          };
          vO11.u.V(function () {
            if (vO11.p.W) {
              vO11.r.G(vF11.AudioState.F);
              vO11.s.I(vO11.s.F);
            }
            if (vO11.u.P()) {
              try {
                var v76 = vO11.u.X();
                ga("set", "userId", v76);
              } catch (e21) {}
            }
            if (vO11.Y() && vO11.u.P() && !vO11.u.Z()) {
              vO11.$(false, false);
              vO11.s.aa._(new vF79());
            } else {
              vO11.ba(true);
            }
          });
          vO11.p.ca(function () {
            vO11.r.G(vF11.AudioState.F);
            vO11.s.I(vO11.s.F);
          });
          vO11.q.a(function () {
            vO11.o.a();
            vO11.r.a();
            vO11.s.a();
            vO11.t.a();
            vO11.p.a();
            vO11.u.a();
            if (vO11.Y() && !vO11.Z()) {
              vO11.s.aa._(new vF79());
            } else {
              vO11.ba(true);
            }
          });
        };
        vO11.da = function (p94) {
          if (vO11.u.P()) {
            var v77 = vO11.u.ea();
            $.get(vAtob + "/pub/wuid/" + v77 + "/consent/change?value=" + encodeURI(p94), function (p95) {});
          }
        };
        vO11.fa = function (p96) {
          var v78 = vO11.u.ea();
          var v79 = vO11.s.F.D();
          var v80 = vO11.s.F.ga();
          var v81 = vO11.t.ha(vF37.ia);
          var v82 = vO11.t.ha(vF37.ja);
          var v83 = vO11.t.ha(vF37.ka);
          var v84 = vO11.t.ha(vF37.la);
          var v85 = vO11.t.ha(vF37.ma);
          var vLN06 = 0;
          if (vO11.l != null) {
            var v86 = vO11.l.coords.latitude;
            var v87 = vO11.l.coords.longitude;
            vLN06 = Math.max(0, Math.min(32767, (v86 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v87 + 180) / 360 * 65536)) << 16;
          }
          vO.testSkinCustom(v81);
          let v88 = "x" + (v81 > 9999 ? "0000" : v81.toString().padStart(4, 0)) + (v85 > 999 ? "000" : v85.toString().padStart(3, 0)) + (v82 > 999 ? "000" : v82.toString().padStart(3, 0)) + (v83 > 999 ? "000" : v83.toString().padStart(3, 0));
          v80 = (v80.length >= 32 ? v80.substr(0, 16) : v80.substr(0, 16).padEnd(16, "x")) + v88;
          v80 = v80.trim();
          console.log(v80);
          var v89 = vAtob + "/pub/wuid/" + v78 + "/start?gameMode=" + encodeURI(v79) + "&gh=" + vLN06 + "&nickname=" + encodeURI(v80) + "&skinId=" + vO.validInput(v81) + "&eyesId=" + encodeURI(v82) + "&mouthId=" + encodeURI(v83) + "&glassesId=" + encodeURI(v84) + "&hatId=" + encodeURI(v85);
          console.log("urlRequest: " + v89);
          $.get(v89, function (p97) {
            var v90 = p97.server_url;
            p96(v90);
          });
        };
        vO11.na = function () {
          vF36++;
          console.log("start pSC: " + vF36);
          if (!vO11.f.oa && vF36 >= vO11.f.e) {
            vO11.s.I(vO11.s.pa);
            vO11.r.G(vF11.AudioState.qa);
            vO11.f.ra.b();
          } else {
            f35(vF36);
            vO11.sa();
          }
        };
        vO11.sa = function (p98) {
          if (vO11.o.ta()) {
            vO11.s.I(vO11.s.ua);
            vO11.r.G(vF11.AudioState.ua);
            var v91 = vO11.s.F.D();
            f11(vF15.va, v91, 30);
            console.log("save gm: " + v91);
            var v92 = vO11.s.xa.wa();
            f11(vF15.ya, v92, 30);
            console.log("save sPN: " + v92);
            if (vO11.u.P()) {
              vO11.fa(function (p99) {
                hoisinhnhanh = p98 ? p98 : p99;
                vO11.o.za(window.server_url || p99, vO11.u.ea());
              });
            } else {
              var v93 = vO11.s.F.ga();
              f11(vF15.Aa, v93, 30);
              var v94 = vO11.t.ha(vF37.ia);
              f11(vF15.Ba, v94, 30);
              vO11.fa(function (p100) {
                hoisinhnhanh = p98 ? p98 : p100;
                vO11.o.Ca(p100, v93, v94);
              });
            }
          }
        };
        vO11.R = function (p101, p102) {
          var v95 = vO11.s.F.ga();
          vO11.s.H.Da(p101, p102, v95);
          vO11.r.G(vF11.AudioState.Ea);
          vO11.s.I(vO11.s.H.Fa());
        };
        vO11.Ga = function () {
          if (!vO11.Ha()) {
            return vO11.t.Ia();
          }
          var vParseInt = parseInt(f10(vF15.Ba));
          if (vParseInt != null && vO11.t.Ja(vParseInt, vF37.ia)) {
            return vParseInt;
          } else {
            return vO11.t.Ia();
          }
        };
        vO11.Ka = function (p103) {
          f11(vF15.La, !!p103, 1800);
        };
        vO11.Ha = function () {
          return f10(vF15.La) === "true";
        };
        vO11.ba = function (p104) {
          if (p104 != vO11.g) {
            vO11.g = p104;
            var v96 = v96 || {};
            v96.consented = p104;
            v96.gdprConsent = p104;
            vO11.f.Ma.a();
            vO11.f.K.a();
            vO11.f.ra.a(function (p105) {
              if (p105) {
                f35(vF36 = 0);
              }
              vO11.sa();
            });
          }
        };
        vO11.$ = function (p106, p107) {
          f11(vF15.Na, p106 ? "true" : "false");
          if (p107) {
            vO11.da(p106);
          }
          vO11.ba(p106);
        };
        vO11.Z = function () {
          switch (f10(vF15.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO11.Y = function () {
          try {
            return !!window.isIPInEEA || vO11.l != null && !!vF16.Oa(vO11.l.coords.latitude, vO11.l.coords.longitude);
          } catch (e22) {
            return true;
          }
        };
        vO11.Pa = function () {
          vO11.j = Date.now();
          vO11.k = vO11.j - vO11.i;
          vO11.o.Qa(vO11.j, vO11.k);
          vO11.s.Qa(vO11.j, vO11.k);
          vO11.i = vO11.j;
        };
        vO11.Ra = function () {
          vO11.s.Ra();
        };
        return vO11;
      }();
    }
    function f37() {
      var vO12 = {
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
      vO12.fb.ub = 500;
      vO12.N = new vF45(vO12.fb);
      vO12.a = function () {
        vO12.N.vb(f9().s.H.wb);
        setInterval(function () {
          vO12.S(function (p108, p109) {
            vO12.xb(p108, p109);
          });
        }, 10);
      };
      vO12.yb = function (p110, p111, p112, p113) {
        vO12.lb = p110;
        vO12.mb = p111;
        vO12.nb = p112;
        vO12.ob = p113;
        vO12.zb();
      };
      vO12.Ab = function (p114) {
        vO12.kb = p114;
        vO12.zb();
      };
      vO12.zb = function () {
        vO12.pb = vO12.lb - vO12.kb;
        vO12.qb = vO12.mb + vO12.kb;
        vO12.rb = vO12.nb - vO12.kb;
        vO12.sb = vO12.ob + vO12.kb;
      };
      vO12.Qa = function (p115, p116) {
        vO12.$a += p116;
        vO12.Za -= vO12.Ya * 0.2 * p116;
        vO12.z.Bb();
        if (vO12.db != null && (vO12.cb === 2 || vO12.cb === 3)) {
          vO12.Cb(p115, p116);
          vO12.jb = 4 + vO12.ib * vO12.N.Db;
        }
        var v97 = 1000 / Math.max(1, p116);
        var vLN07 = 0;
        var vLN08 = 0;
        for (; vLN08 < vO12.Xa.length - 1; vLN08++) {
          vLN07 = vLN07 + vO12.Xa[vLN08];
          vO12.Xa[vLN08] = vO12.Xa[vLN08 + 1];
        }
        vO12.Xa[vO12.Xa.length - 1] = v97;
        vO12.Wa = (vLN07 + v97) / vO12.Xa.length;
      };
      vO12.Eb = function (p117, p118) {
        return p117 > vO12.pb && p117 < vO12.qb && p118 > vO12.rb && p118 < vO12.sb;
      };
      vO12.Cb = function (p119, p120) {
        var v98 = vO12.$a + vO12.Za;
        var v99 = (v98 - vO12._a) / (vO12.ab - vO12._a);
        vO12.N.Fb(p119, p120);
        vO12.N.Gb(p119, p120, v99, vO12.Eb);
        var vLN09 = 0;
        var v100;
        for (v100 in vO12.hb) {
          var v101 = vO12.hb[v100];
          v101.Fb(p119, p120);
          v101.Gb(p119, p120, v99, vO12.Eb);
          if (v101.Hb && v101.Db > vLN09) {
            vLN09 = v101.Db;
          }
          if (!v101.Ib && (!!(v101.Jb < 0.005) || !v101.Hb)) {
            v101.Kb();
            delete vO12.hb[v101.Mb.Lb];
          }
        }
        vO12.Ab(vLN09 * 3);
        var v102;
        for (v102 in vO12.gb) {
          var v103 = vO12.gb[v102];
          v103.Fb(p119, p120);
          v103.Gb(p119, p120, vO12.Eb);
          if (v103.Nb && (v103.Jb < 0.005 || !vO12.Eb(v103.Ob, v103.Pb))) {
            v103.Kb();
            delete vO12.gb[v103.Mb.Lb];
          }
        }
      };
      vO12.Qb = function (p121, p122) {
        if (vO12.cb === 1) {
          vO12.cb = 2;
          vO12.C();
        }
        var v104 = f9().j;
        vO12.bb = p121;
        if (p121 === 0) {
          vO12._a = v104 - 95;
          vO12.ab = v104;
          vO12.$a = vO12._a;
          vO12.Za = 0;
        } else {
          vO12._a = vO12.ab;
          vO12.ab = vO12.ab + p122;
        }
        var v105 = vO12.$a + vO12.Za;
        vO12.Ya = (v105 - vO12._a) / (vO12.ab - vO12._a);
      };
      vO12.Rb = function () {
        if (vO12.cb === 1 || vO12.cb === 2) {
          vO12.cb = 3;
          var v106 = vO12.db;
          setTimeout(function () {
            if (vO12.cb === 3) {
              vO12.cb = 0;
            }
            if (v106 != null && v106 === vO12.db) {
              vO12.db.close();
              vO12.db = null;
            }
          }, 5000);
          vO12.B();
        }
      };
      vO12.ta = function () {
        return vO12.cb !== 2 && (vO12.cb = 1, vO12.z.Sb(), vO12.gb = {}, vO12.hb = {}, vO12.N.Tb(), vO12.db != null && (vO12.db.close(), vO12.db = null), true);
      };
      vO12.Ub = function () {
        vO12.db = null;
        vO12.z.Sb();
        if (vO12.cb !== 3) {
          vO12.A();
        }
        vO12.cb = 0;
      };
      vO12.za = function (p123, p124) {
        vO12.Vb(p123, function () {
          var v107 = Math.min(2048, p124.length);
          var v108 = new ArrayBuffer(6 + v107 * 2);
          var v109 = new DataView(v108);
          var vLN010 = 0;
          v109.setInt8(vLN010, 129);
          vLN010 = vLN010 + 1;
          v109.setInt16(vLN010, 2800);
          vLN010 = vLN010 + 2;
          v109.setInt8(vLN010, 1);
          vLN010 = vLN010 + 1;
          v109.setInt16(vLN010, v107);
          vLN010 = vLN010 + 2;
          var vLN011 = 0;
          for (; vLN011 < v107; vLN011++) {
            v109.setInt16(vLN010, p124.charCodeAt(vLN011));
            vLN010 = vLN010 + 2;
          }
          vO12.Wb(v108);
        });
      };
      vO12.Ca = function (p125, p126, p127) {
        vO12.Vb(p125, function () {
          var v110 = Math.min(32, p126.length);
          var v111 = new ArrayBuffer(7 + v110 * 2);
          var v112 = new DataView(v111);
          var vLN012 = 0;
          v112.setInt8(vLN012, 129);
          vLN012 = vLN012 + 1;
          v112.setInt16(vLN012, 2800);
          vLN012 = vLN012 + 2;
          v112.setInt8(vLN012, 0);
          vLN012 = vLN012 + 1;
          v112.setInt16(vLN012, p127);
          vLN012 = vLN012 + 2;
          v112.setInt8(vLN012, v110);
          vLN012++;
          var vLN013 = 0;
          for (; vLN013 < v110; vLN013++) {
            v112.setInt16(vLN012, p126.charCodeAt(vLN013));
            vLN012 = vLN012 + 2;
          }
          vO12.Wb(v111);
        });
      };
      vO12.Wb = function (p128) {
        try {
          if (vO12.db != null && vO12.db.readyState === WebSocket.OPEN) {
            vO12.db.send(p128);
          }
        } catch (e23) {
          console.log("Socket send error: " + e23);
          vO12.Ub();
        }
      };
      vO12.xb = function (p129, p130) {
        if (!Number.isFinite(p129)) {
          p129 = 0;
        }
        if (vO12._keepAliveMs == null) {
          vO12._keepAliveMs = 1000;
        }
        if (vO12._lastInputSentAt == null) {
          vO12._lastInputSentAt = 0;
        }
        var v113 = p130 ? 128 : 0;
        var v114 = f18(p129) / v126 * 128 & 127;
        var v115 = (v113 | v114) & 255;
        var v116 = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
        var v117 = v116 - vO12._lastInputSentAt > vO12._keepAliveMs;
        if (vO12.eb !== v115 || v117) {
          var v118 = new ArrayBuffer(1);
          new DataView(v118).setInt8(0, v115);
          vO12.Wb(v118);
          vO12.eb = v115;
          vO12._lastInputSentAt = v116;
        }
      };
      vO12.Vb = function (p131, p132) {
        let vVF3 = vF3(!vO4.mobile);
        var v119 = vO12.db = new WebSocket(p131);
        v119.binaryType = "arraybuffer";
        window.onOpen = v119.onopen = function () {
          f114("open");
          if (vO12.db === v119) {
            console.log("Socket opened");
            p132();
            try {
              vO12.xb(0, false);
            } catch (e24) {}
            try {
              if (vO12._kaTimer) {
                clearInterval(vO12._kaTimer);
                vO12._kaTimer = null;
              }
              if (vO12._keepAliveMs == null) {
                vO12._keepAliveMs = 1000;
              }
              if (typeof vO12.eb !== "number") {
                vO12.eb = 0;
              }
              vO12._kaTimer = setInterval(function () {
                if (!vO12.db || vO12.db.readyState !== WebSocket.OPEN) {
                  return;
                }
                var v120 = new ArrayBuffer(1);
                new DataView(v120).setInt8(0, vO12.eb & 255);
                vO12.Wb(v120);
                vO12._lastInputSentAt = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
              }, Math.max(500, vO12._keepAliveMs));
            } catch (e25) {
              console.log(e25);
            }
          }
          v5 = true;
        };
        window.onclose = v119.onclose = function () {
          f114("closed");
          vO.aload = false;
          try {
            if (vO12._kaTimer) {
              clearInterval(vO12._kaTimer);
              vO12._kaTimer = null;
            }
          } catch (e26) {}
          if (vO12.db === v119) {
            console.log("Socket closed");
            vO12.Ub();
          }
          v5 = false;
          if (vVF3) {
            vVF3.destroy();
          }
        };
        v119.onerror = function (p133) {
          try {
            if (vO12._kaTimer) {
              clearInterval(vO12._kaTimer);
              vO12._kaTimer = null;
            }
          } catch (e27) {}
          if (vO12.db === v119) {
            console.log("Socket error");
            vO12.Ub();
          }
          v5 = false;
          if (vVF3) {
            vVF3.destroy();
          }
        };
        v119.onmessage = function (p134) {
          if (vO12.db === v119) {
            vO12.z.Xb(p134.data);
          }
        };
      };
      return vO12;
    }
    var vLSHttpswormateioimages = "https://wormate.io/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var v121 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vAtob = "https://gateway.wormate.io";
    var vAtob2 = "https://resources.wormate.io";
    var v122 = window.I18N_LANG;
    v122 ||= "en";
    var vUndefined = undefined;
    switch (v122) {
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
    var v123 = false;
    var vUndefined2 = undefined;
    var vF7 = function () {
      var vO13 = {
        Yb: eval("PIXI")
      };
      var v124 = vO13.Yb["BLEND_MODES"];
      var v125 = vO13.Yb["WRAP_MODES"];
      return {
        Zb: vO13.Yb["Container"],
        $b: vO13.Yb["BaseTexture"],
        _b: vO13.Yb["Texture"],
        ac: vO13.Yb["Renderer"],
        bc: vO13.Yb["Graphics"],
        cc: vO13.Yb["Shader"],
        dc: vO13.Yb["Rectangle"],
        ec: vO13.Yb["Sprite"],
        fc: vO13.Yb["Text"],
        gc: vO13.Yb["Geometry"],
        hc: vO13.Yb["Mesh"],
        ic: {
          jc: v124["ADD"]
        },
        kc: {
          lc: v125["REPEAT"]
        }
      };
    }();
    var v126 = Math.PI * 2;
    (function () {
      var vLSZ2V0 = "Z2V0";
      var vLS = "=";
      var v127 = vLSZ2V0 + "SW50";
      var v128 = vLSZ2V0 + "RmxvYXQ";
      var vA6 = [atob(v127 + "OA=="), atob(v127 + "MTY" + vLS), atob(v127 + "MzI" + vLS), atob(v128 + "zMg=="), atob(v128 + "2NA==")];
      DataView.prototype.mc = function (p135) {
        return this[vA6[0]](p135);
      };
      DataView.prototype.nc = function (p136) {
        return this[vA6[1]](p136);
      };
      DataView.prototype.oc = function (p137) {
        return this[vA6[2]](p137);
      };
      DataView.prototype.pc = function (p138) {
        return this[vA6[3]](p138);
      };
      DataView.prototype.qc = function (p139) {
        return this[vA6[4]](p139);
      };
    })();
    var vF8 = function () {
      function f38(p140) {
        this.rc = p140;
        this.sc = false;
        this.tc = 1;
      }
      f38.VELOCITY_TYPE = 0;
      f38.FLEXIBLE_TYPE = 1;
      f38.MAGNETIC_TYPE = 2;
      f38.ZOOM_TYPE = 6;
      f38.X2_TYPE = 3;
      f38.X5_TYPE = 4;
      f38.X10_TYPE = 5;
      return f38;
    }();
    var vF9 = function () {
      function f39() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF10.yc();
      }
      function f40(p141, p142) {
        for (var v129 in p141) {
          if (p141.hasOwnProperty(v129)) {
            p142(v129, p141[v129]);
          }
        }
      }
      f39.prototype.a = function () {
        this.L();
      };
      f39.prototype.W = function () {
        return this.wc != null;
      };
      f39.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f39.prototype.Ac = function () {
        return this.wc;
      };
      f39.prototype.L = function () {
        var vThis2 = this;
        $.get(vAtob2 + "/dynamic/assets/revision.json", function (p143) {
          if (p143 > vThis2.zc()) {
            vThis2.Bc();
          }
        });
      };
      f39.prototype.Bc = function () {
        var vThis3 = this;
        $.get(vAtob2 + "/dynamic/assets/registry.json", function (p144) {
          if (p144.revision > vThis3.zc()) {
            vThis3.Cc(p144);
          }
        });
      };
      f39.prototype.ca = function (p145) {
        this.uc.push(p145);
      };
      f39.prototype.Dc = function () {
        return this.xc;
      };
      f39.prototype.Ec = function () {
        for (var vLN014 = 0; vLN014 < this.uc.length; vLN014++) {
          this.uc[vLN014]();
        }
      };
      f39.prototype.Fc = function (p146, p147) {
        if (!(p146.revision <= this.zc())) {
          var vP147 = p147;
          f40(this.vc, function (p148, p149) {
            var v130 = vP147[p148];
            if (v130 == null || p149.Gc !== v130.Gc) {
              print("disposing prev texture: " + p148 + " at " + p149.Gc);
              p149.Hc.destroy();
            }
          });
          this.vc = vP147;
          this.wc = p146;
          this.xc = vF10.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f39.prototype.Cc = function (p150) {
        var vO14 = {};
        (function (p151, p152) {
          for (var v131 in p151) {
            if (p151.hasOwnProperty(v131)) {
              p152(v131, p151[v131]);
            }
          }
        })(p150.textureDict, function (p153, p154) {
          var v132 = p154.custom ? p154.relativePath : vAtob2 + p154.relativePath;
          try {
            vO14[p153] = new vF19(v132, vF7.$b.from(p154.file || v132));
          } catch (e28) {
            console.log(v132);
          }
        });
        this.Fc(p150, vO14);
      };
      return f39;
    }();
    var vF10 = function () {
      function f41() {
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
      function f42(p155, p156) {
        for (var v133 in p155) {
          if (p155.hasOwnProperty(v133)) {
            p156(v133, p155[v133]);
          }
        }
      }
      f41.yc = function () {
        var v134 = new vF10();
        v134.Jc = {};
        v134.Kc = {
          Zc: null,
          $c: null
        };
        v134.Lc = {};
        v134.Mc = {
          Zc: null
        };
        v134.Nc = {};
        v134.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v134.Pc = {};
        v134.Qc = {
          ad: {},
          bd: v134.Oc,
          cd: v134.Kc
        };
        v134.Rc = {};
        v134.Sc = {
          Zc: []
        };
        v134.Tc = {};
        v134.Uc = {
          Zc: []
        };
        v134.Vc = {};
        v134.Wc = {
          Zc: []
        };
        v134.Xc = {};
        v134.Yc = {
          Zc: []
        };
        return v134;
      };
      f41.Ic = function (p157, p158) {
        var v135 = new vF10();
        var vO15 = {};
        f42(p157.colorDict, function (p159, p160) {
          vO15[p159] = p160;
        });
        var vO16 = {};
        f42(p157.regionDict, function (p161, p162) {
          vO16[p161] = new vF38(p158[p162.texture].Hc, p162.x, p162.y, p162.w, p162.h, p162.px, p162.py, p162.pw, p162.ph);
        });
        v135.Nc = {};
        for (var vLN015 = 0; vLN015 < p157.skinArrayDict.length; vLN015++) {
          var v136 = p157.skinArrayDict[vLN015];
          v135.Nc[v136.id] = new vF10.WormSkinData("#" + vO15[v136.prime], v136.base.map(function (p163) {
            return vO16[p163];
          }), v136.glow.map(function (p164) {
            return vO16[p164];
          }));
        }
        var v137 = p157.skinUnknown;
        v135.Oc = new vF10.WormSkinData("#" + vO15[v137.prime], v137.base.map(function (p165) {
          return vO16[p165];
        }), v137.glow.map(function (p166) {
          return vO16[p166];
        }));
        v135.Rc = {};
        f42(p157.eyesDict, function (p167, p168) {
          p167 = parseInt(p167);
          v135.Rc[p167] = new vF10.WearSkinData(p168.base.map(function (p169) {
            return vO16[p169.region];
          }));
        });
        v135.Sc = new vF10.WearSkinData(p157.eyesUnknown.base.map(function (p170) {
          return vO16[p170.region];
        }));
        v135.Tc = {};
        f42(p157.mouthDict, function (p171, p172) {
          p171 = parseInt(p171);
          v135.Tc[p171] = new vF10.WearSkinData(p172.base.map(function (p173) {
            return vO16[p173.region];
          }));
        });
        v135.Uc = new vF10.WearSkinData(p157.mouthUnknown.base.map(function (p174) {
          return vO16[p174.region];
        }));
        v135.Vc = {};
        f42(p157.glassesDict, function (p175, p176) {
          p175 = parseInt(p175);
          v135.Vc[p175] = new vF10.WearSkinData(p176.base.map(function (p177) {
            return vO16[p177.region];
          }));
        });
        v135.Wc = new vF10.WearSkinData(p157.glassesUnknown.base.map(function (p178) {
          return vO16[p178.region];
        }));
        v135.Xc = {};
        f42(p157.hatDict, function (p179, p180) {
          p179 = parseInt(p179);
          v135.Xc[p179] = new vF10.WearSkinData(p180.base.map(function (p181) {
            return vO16[p181.region];
          }));
        });
        v135.Yc = new vF10.WearSkinData(p157.hatUnknown.base.map(function (p182) {
          return vO16[p182.region];
        }));
        v135.Jc = {};
        f42(p157.portionDict, function (p183, p184) {
          p183 = parseInt(p183);
          v135.Jc[p183] = new vF10.PortionSkinData(vO16[p184.base], vO16[p184.glow]);
        });
        var v138 = p157.portionUnknown;
        v135.Kc = new vF10.PortionSkinData(vO16[v138.base], vO16[v138.glow]);
        v135.Lc = {};
        f42(p157.abilityDict, function (p185, p186) {
          p185 = parseInt(p185);
          v135.Lc[p185] = new vF10.AbilitySkinData(vO16[p186.base]);
        });
        var v139 = p157.abilityUnknown;
        v135.Mc = new vF10.AbilitySkinData(vO16[v139.base]);
        v135.Pc = {};
        f42(p157.teamDict, function (p187, p188) {
          p187 = parseInt(p187);
          v135.Pc[p187] = new vF10.TeamSkinData(p188.name, new vF10.WormSkinData("#" + vO15[p188.skin.prime], [], p188.skin.glow.map(function (p189) {
            return vO16[p189];
          })), new vF10.PortionSkinData([], vO16[p188.portion.glow]));
        });
        v135.Qc = new vF10.TeamSkinData({}, v135.Oc, v135.Kc);
        return v135;
      };
      f41.prototype.dd = function (p190) {
        var v140 = this.Nc[p190];
        return v140 || this.Oc;
      };
      f41.prototype.ed = function (p191) {
        var v141 = this.Pc[p191];
        return v141 || this.Qc;
      };
      f41.prototype.fd = function (p192) {
        var v142 = this.Rc[p192];
        return v142 || this.Sc;
      };
      f41.prototype.gd = function (p193) {
        var v143 = this.Tc[p193];
        return v143 || this.Uc;
      };
      f41.prototype.hd = function (p194) {
        var v144 = this.Vc[p194];
        return v144 || this.Wc;
      };
      f41.prototype.jd = function (p195) {
        var v145 = this.Xc[p195];
        return v145 || this.Yc;
      };
      f41.prototype.kd = function (p196) {
        var v146 = this.Jc[p196];
        return v146 || this.Kc;
      };
      f41.prototype.ld = function (p197) {
        var v147 = this.Lc[p197];
        return v147 || this.Mc;
      };
      f41.TeamSkinData = function () {
        function f43(p198, p199, p200) {
          this.ad = p198;
          this.bd = p199;
          this.cd = p200;
        }
        return f43;
      }();
      f41.WormSkinData = function () {
        function f44(p201, p202, p203) {
          this._c = p201;
          this.Zc = p202;
          this.$c = p203;
        }
        return f44;
      }();
      f41.WearSkinData = function () {
        function f45(p204) {
          this.Zc = p204;
        }
        return f45;
      }();
      f41.PortionSkinData = function () {
        function f46(p205, p206) {
          this.Zc = p205;
          this.$c = p206;
        }
        return f46;
      }();
      f41.AbilitySkinData = function () {
        function f47(p207) {
          this.Zc = p207;
        }
        return f47;
      }();
      return f41;
    }();
    var vF11 = function () {
      function f48() {
        this.md = vF11.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f48.prototype.a = function () {};
      f48.prototype.rd = function (p208) {
        this.od = p208;
      };
      f48.prototype.G = function (p209) {
        this.md = p209;
        this.sd();
      };
      f48.prototype.td = function (p210) {
        this.nd = p210;
        this.sd();
      };
      f48.prototype.sd = function () {};
      f48.prototype.ud = function (p211, p212) {
        if (!f9().p.W) {
          return null;
        }
        var v148 = p211[p212];
        if (v148 == null || v148.length == 0) {
          return null;
        } else {
          return v148[Math.floor(Math.random() * v148.length)].cloneNode();
        }
      };
      f48.prototype.vd = function (p213, p214, p215) {
        if (this.od && !(p215 <= 0)) {
          var v149 = this.ud(p213, p214);
          if (v149 != null) {
            v149.volume = Math.min(1, p215);
            v149.play();
          }
        }
      };
      f48.prototype.wd = function (p216, p217) {
        if (this.md.xd) {
          this.vd(app.q.yd, p216, p217);
        }
      };
      f48.prototype.zd = function (p218, p219) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p218, p219);
        }
      };
      f48.prototype.Cd = function () {};
      f48.prototype.Dd = function () {};
      f48.prototype.Ed = function () {};
      f48.prototype.Fd = function () {};
      f48.prototype.Gd = function () {};
      f48.prototype.Hd = function () {};
      f48.prototype.Id = function (p220, p221, p222) {};
      f48.prototype.Jd = function (p223) {};
      f48.prototype.Kd = function (p224) {};
      f48.prototype.Ld = function (p225) {};
      f48.prototype.Md = function (p226) {};
      f48.prototype.Nd = function (p227) {};
      f48.prototype.Od = function (p228) {};
      f48.prototype.Pd = function (p229) {};
      f48.prototype.Qd = function (p230) {};
      f48.prototype.Rd = function (p231) {};
      f48.prototype.Sd = function (p232) {};
      f48.prototype.Td = function (p233) {};
      f48.prototype.Ud = function (p234) {};
      f48.prototype.Vd = function (p235) {};
      f48.prototype.Wd = function (p236) {};
      f48.prototype.Xd = function (p237, p238) {};
      f48.prototype.Yd = function (p239) {};
      f48.prototype.Zd = function (p240, p241, p242) {};
      (function () {
        function f49(p243) {
          this.$d = new vF13(p243, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f49.prototype.be = function (p244) {
          if (p244) {
            this.b();
          } else {
            this.ce();
          }
        };
        f49.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f49.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f50(p245) {
          this.ge = p245.map(function (p246) {
            return new vF13(p246, 0.4);
          });
          f51(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f51(p247, p248, p249) {
          for (var v150 = p249 - 1; v150 > p248; v150--) {
            var v151 = p248 + Math.floor(Math.random() * (v150 - p248 + 1));
            var v152 = p247[v150];
            p247[v150] = p247[v151];
            p247[v151] = v152;
          }
        }
        f50.prototype.be = function (p250) {
          if (p250) {
            this.b();
          } else {
            this.ce();
          }
        };
        f50.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f50.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f50.prototype.ke = function (p251) {
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
            this.he.ee(p251, 100);
            var v153 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis4 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis4.ae && vSetTimeout == vThis4.ie) {
                vThis4.he.fe(vThis4.je, 100);
                vThis4.he = vThis4.le();
                vThis4.he._d.currentTime = 0;
                vThis4.ke(vThis4.je);
              }
            }, v153);
            this.ie = vSetTimeout;
          }
        };
        f50.prototype.le = function () {
          var v154 = this.ge[0];
          var v155 = Math.max(1, this.ge.length / 2);
          f51(this.ge, v155, this.ge.length);
          this.ge.push(this.ge.shift());
          return v154;
        };
      })();
      var vF13 = function () {
        function f52(p252, p253) {
          this._d = p252;
          this.me = p253;
          this.de = 0;
          p252.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f52.prototype.ee = function (p254, p255) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p254, p255);
        };
        f52.prototype.fe = function (p256, p257) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p256, p257);
        };
        f52.prototype.pe = function (p258, p259, p260) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis5 = this;
          var v156 = 1 / (p259 / p260);
          var vSetInterval = setInterval(function () {
            if (vThis5.oe && vSetInterval != vThis5.ne) {
              clearInterval(vSetInterval);
              return;
            }
            if (p258) {
              vThis5.de = Math.min(1, vThis5.de + v156);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de >= 1) {
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            } else {
              vThis5.de = Math.max(0, vThis5.de - v156);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de <= 0) {
                vThis5._d.pause();
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            }
          }, p260);
          this.oe = true;
          this.ne = vSetInterval;
          this._d.play();
        };
        return f52;
      }();
      f48.AudioState = {
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
      return f48;
    }();
    var vF14 = function () {
      function f53(p261) {
        this.se = p261;
        this.te = p261.get()[0];
        this.ue = new vF7.ac({
          view: this.te,
          backgroundColor: vLN016,
          antialias: true
        });
        this.ve = new vF7.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN016 = 0;
      function f54(p262, p263) {
        return p262 + Math.random(p263 - p262);
      }
      function f55(p264) {
        if (p264 >= 0) {
          return Math.cos(p264 % v126);
        } else {
          return Math.cos(p264 % v126 + v126);
        }
      }
      function f56(p265) {
        if (p265 >= 0) {
          return Math.sin(p265 % v126);
        } else {
          return Math.sin(p265 % v126 + v126);
        }
      }
      var vA7 = [{
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: f54(0, v126),
        Ae: f54(0, v126),
        Be: f54(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f53.prototype.a = function () {
        var vF92 = f9();
        this.ue.backgroundColor = vLN016;
        this.we = new Array(vA7.length);
        for (var vLN017 = 0; vLN017 < this.we.length; vLN017++) {
          this.we[vLN017] = new vF7.ec();
          this.we[vLN017].texture = vF92.q.Fe;
          this.we[vLN017].anchor.set(0.5);
          this.we[vLN017].zIndex = 1;
          this.ve.addChild(this.we[vLN017]);
        }
        this.xe = new Array(vF92.q.Ge.length);
        for (var vLN018 = 0; vLN018 < this.xe.length; vLN018++) {
          this.xe[vLN018] = new vF7.ec();
          this.xe[vLN018].texture = vF92.q.Ge[vLN018];
          this.xe[vLN018].anchor.set(0.5);
          this.xe[vLN018].zIndex = 2;
          this.ve.addChild(this.xe[vLN018]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN019 = 0; vLN019 < this.ye.length; vLN019++) {
          this.ye[vLN019] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f53.sc = false;
      f53.Le = function (p266) {
        f53.sc = p266;
      };
      f53.prototype.Ra = function () {
        var v157 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v158 = this.se.width();
        var v159 = this.se.height();
        this.ue.resize(v158, v159);
        this.ue.resolution = v157;
        this.te.width = v157 * v158;
        this.te.height = v157 * v159;
        var v160 = Math.max(v158, v159) * 0.8;
        for (var vLN020 = 0; vLN020 < this.we.length; vLN020++) {
          this.we[vLN020].width = v160;
          this.we[vLN020].height = v160;
        }
      };
      f53.prototype.Pa = function (p267, p268) {
        if (f53.sc) {
          var v161 = p267 / 1000;
          var v162 = p268 / 1000;
          var v163 = this.se.width();
          var v164 = this.se.height();
          for (var vLN021 = 0; vLN021 < this.we.length; vLN021++) {
            var v165 = vA7[vLN021 % vA7.length];
            var v166 = this.we[vLN021];
            var vF55 = f55(v165.Ce * (v161 * 0.08) + v165.Ae);
            var vF56 = f56(v165.De * (v161 * 0.08));
            var v167 = 0.2 + f55(v165.Ae + v165.Be * v161) * 0.2;
            v166.tint = v165.Ee;
            v166.alpha = v167;
            v166.position.set(v163 * (0.2 + (vF55 + 1) * 0.5 * 0.6), v164 * (0.1 + (vF56 + 1) * 0.5 * 0.8));
          }
          var v168 = Math.max(v163, v164) * 0.05;
          for (var vLN022 = 0; vLN022 < this.xe.length; vLN022++) {
            var v169 = this.ye[vLN022];
            var v170 = this.xe[vLN022];
            var v171 = v126 * vLN022 / this.xe.length + v169.He;
            v169.Ke += v169.Ie * v162;
            if (v169.Ke > 1.3) {
              v169.He = Math.random() * v126;
              v169.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v169.Je = 0.15 + Math.random() * 0.7;
              v169.Ke = -0.3;
            }
            var v172 = v169.Je + Math.sin(Math.sin(v171 + v161 * 0.48) * 6) * 0.03;
            var v173 = v169.Ke;
            var vF20 = f20(Math.sin(Math.PI * v173), 0.1, 1);
            var v174 = (0.4 + (1 + Math.sin(v171 + v161 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v175 = v171 + v169.Ie * 2 * v161;
            v170.alpha = vF20;
            v170.position.set(v163 * v172, v164 * v173);
            v170.rotation = v175;
            var v176 = v170.texture.width / v170.texture.height;
            v170.width = v174 * v168;
            v170.height = v174 * v168 * v176;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f53;
    }();
    var vF15 = function () {
      function f57() {}
      f57.Na = "consent_state_2";
      f57.ya = "showPlayerNames";
      f57.Me = "musicEnabled";
      f57.Ne = "sfxEnabled";
      f57.Oe = "account_type";
      f57.va = "gameMode";
      f57.Aa = "nickname";
      f57.Ba = "skin";
      f57.d = "prerollCount";
      f57.La = "shared";
      return f57;
    }();
    var vF16 = function () {
      function f58(p269, p270, p271) {
        var v177 = false;
        for (var v178 = p271.length, vLN023 = 0, v179 = v178 - 1; vLN023 < v178; v179 = vLN023++) {
          if (p271[vLN023][1] > p270 != p271[v179][1] > p270 && p269 < (p271[v179][0] - p271[vLN023][0]) * (p270 - p271[vLN023][1]) / (p271[v179][1] - p271[vLN023][1]) + p271[vLN023][0]) {
            v177 = !v177;
          }
        }
        return v177;
      }
      var vA8 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p272, p273) {
          return f58(p273, p272, vA8);
        }
      };
    }();
    var vF17 = function () {
      function f59(p274) {
        var vUndefined3 = undefined;
        vUndefined3 = p274 > 0 ? "+" + Math.floor(p274) : p274 < 0 ? "-" + Math.floor(p274) : "0";
        var v180 = Math.min(1.5, 0.5 + p274 / 600);
        var vUndefined4 = undefined;
        if (p274 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p274 < 30) {
          var v181 = (p274 - 1) / 29;
          vUndefined4 = f61((1 - v181) * 1 + v181 * 0.96, (1 - v181) * 1 + v181 * 0.82, (1 - v181) * 1 + v181 * 0);
        } else if (p274 < 300) {
          var v182 = (p274 - 30) / 270;
          vUndefined4 = f61((1 - v182) * 0.96 + v182 * 0.93, (1 - v182) * 0.82 + v182 * 0.34, (1 - v182) * 0 + v182 * 0.25);
        } else if (p274 < 700) {
          var v183 = (p274 - 300) / 400;
          vUndefined4 = f61((1 - v183) * 0.93 + v183 * 0.98, (1 - v183) * 0.34 + v183 * 0, (1 - v183) * 0.25 + v183 * 0.98);
        } else {
          vUndefined4 = f61(0.98, 0, 0.98);
        }
        var v184 = Math.random();
        var v185 = 1 + Math.random() * 0.5;
        return new vF18(vUndefined3, vUndefined4, true, 0.5, v180, v184, v185);
      }
      function f60(p275, p276) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p276) {
          vUndefined5 = 1.3;
          vUndefined6 = f61(0.93, 0.34, 0.25);
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = f61(0.96, 0.82, 0);
        }
        return new vF18(p275, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      function f61(p277, p278, p279) {
        return ((p277 * 255 & 255) << 16) + ((p278 * 255 & 255) << 8) + (p279 * 255 & 255);
      }
      var vF172 = f17(vF7.Zb, function () {
        vF7.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF172.prototype.Re = function (p280) {
        this.Qe += p280;
        if (this.Qe >= 1) {
          var v186 = Math.floor(this.Qe);
          this.Qe -= v186;
          var vF59 = f59(v186);
          this.addChild(vF59);
          this.Pe.push(vF59);
        }
      };
      vF172.prototype.Se = function (p281) {
        f114("count", p281);
        if (p281) {
          if (vO4.ModeStremerheadshot) {} else {
            var v187 = document.createElement("audio");
            v187.src = "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
            v187.preload = "auto";
            v187.play();
          }
          ;
          var vF602 = f60(f12("index.game.floating.headshot") + "â˜ ï¸", true);
          this.addChild(vF602);
          this.Pe.push(vF602);
          if (vF602) {
            vO4.emoji_headshot = true;
            setTimeout(function () {
              vO4.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var vF602 = f60(f12("index.game.floating.wellDone") + "ðŸ”ª", false);
          this.addChild(vF602);
          this.Pe.push(vF602);
          if (vF602) {
            vO4.emoji_kill = true;
            setTimeout(function () {
              vO4.emoji_kill = false;
            }, 3000);
          }
        }
      };
      vF172.prototype.Te = function (p282, p283) {
        var v188 = f9().s.H.wb;
        var v189 = v188.ue.width / v188.ue.resolution;
        var v190 = v188.ue.height / v188.ue.resolution;
        var vLN024 = 0;
        while (vLN024 < this.Pe.length) {
          var v191 = this.Pe[vLN024];
          v191.Ue = v191.Ue + p283 / 2000 * v191.Ve;
          v191.We = v191.We + p283 / 2000 * v191.Xe;
          v191.alpha = Math.sin(Math.PI * v191.We) * 0.5;
          v191.scale.set(v191.Ue);
          v191.position.x = v189 * (0.25 + v191.Ye * 0.5);
          v191.position.y = v191.Ze ? v190 * (1 - (1 + v191.We) * 0.5) : v190 * (1 - (0 + v191.We) * 0.5);
          if (v191.We > 1) {
            f26(v191);
            this.Pe.splice(vLN024, 1);
            vLN024--;
          }
          vLN024++;
        }
      };
      var vF18 = function () {
        return f17(vF7.fc, function (p284, p285, p286, p287, p288, p289, p290) {
          vF7.fc.call(this, p284, {
            fill: p285,
            fontFamily: "vuonghiep",
            fontSize: 36,
            fontWeight: "bold"
          });
          this.anchor.set(0.5);
          this.Ze = p286;
          this.Ue = p287;
          this.Ve = p288;
          this.Ye = p289;
          this.We = 0;
          this.Xe = p290;
        });
      }();
      return vF172;
    }();
    var vF19 = function () {
      function f62(p291, p292) {
        this.Gc = p291;
        this.Hc = p292;
      }
      return f62;
    }();
    var vO17 = {
      $e: 0,
      _e: 16
    };
    var vF21 = function () {
      function f63() {
        this.af = vO17.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f63.TEAM_DEFAULT = 0;
      f63.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f63;
    }();
    var vF22 = function () {
      function f64(p293) {
        this.se = p293;
        this.te = p293.get()[0];
        this.ue = new vF7.ac({
          view: this.te,
          backgroundColor: vLN025,
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
        this.lf = new vF43();
        this.mf = new vF7.bc();
        this.nf = new vF7.Zb();
        this.pf = new vF7.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF7.Zb();
        this.rf = new vF7.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF7.Zb();
        this.tf = new vF23();
        this.uf = new vF24();
        this.vf = new vF26();
        this.wf = new vF17();
        this.xf = new vF7.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var vLN025 = 0;
      f64.prototype.a = function () {
        this.ue.backgroundColor = vLN025;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f9().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 1;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f64.prototype.Ra = function () {
        var v192 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v193 = this.se.width();
        var v194 = this.se.height();
        this.ue.resize(v193, v194);
        this.ue.resolution = v192;
        this.te.width = v192 * v193;
        this.te.height = v192 * v194;
        this.jf = Math.min(Math.min(v193, v194), Math.max(v193, v194) * 0.625);
        this.xf.position.x = v193 / 2;
        this.xf.position.y = v194 / 2;
        this.xf.width = v193;
        this.xf.height = v194;
        this.vf.position.x = v193 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(v193, v194), window.multiplier * Math.min(v193, v194));
        if (vO4.ModeStremer) {
          var v195 = v193 / 2;
          var v196 = v194 / 2;
          var vLN100 = 100;
          this.tf.position.x = v195 + this.tf.width / 9 + vLN100;
          this.uf.position.x = v195 - this.tf.width / 0.7 + vLN100;
          this.vf.position.x = v195 - this.vf.width / 4 - vLN100;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v193 - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 2;
        this.tf.addChild(vO7.clock);
        this.tf.addChild(vO7.clockan);
        this.vf.addChild(vO7.value_server);
        this.vf.addChild(vO7.containerImgS);
        this.tf.addChild(vO7.borderImg);
        window.retundFlagError = () => {
          return vO7.containerImgS.texture = PIXI.Texture.fromImage(vO4.flag);
        };
        this.tf.addChild(vO7.containerCountInfo);
      };
      f64.prototype.Te = function (p294, p295) {
        var vF93 = f9();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p294.af == vO17.$e ? vF93.q.Cf : vF93.q.Df);
        var v197 = this.mf;
        v197.clear();
        v197.lineStyle(0.8, 65535);
        v197.drawCircle(0, 0, p294.ub);
        v197.endFill();
        this.vf.Ef = p295;
        this.sf.visible = p295;
      };
      f64.prototype.Pa = function (p296, p297) {
        if (!(this.ue.width <= 5)) {
          var vF94 = f9();
          var v198 = vF94.o.N;
          var v199 = this.ue.width / this.ue.resolution;
          var v200 = this.ue.height / this.ue.resolution;
          this.if = f21(this.if, vF94.o.jb, p297, 0.002);
          var v201 = this.jf / this.if;
          var v202 = vF94.o.N.Ff[vF8.ZOOM_TYPE];
          var v203 = v202 != null && v202.sc;
          this.kf = f19(0, 1, this.kf + p297 / 1000 * ((v203 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + p297 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p296 / 1200 * 2 * Math.PI);
          var v204 = v198.Gf();
          this.yf.x = f22(this.yf.x, v204.x, p297, vO4.smoothCamera, 33.333);
          this.yf.y = f22(this.yf.y, v204.y, p297, 0.5, 33.333);
          var v205 = v199 / v201 / 2;
          var v206 = v200 / v201 / 2;
          vF94.o.yb(this.yf.x - v205 * 1.3, this.yf.x + v205 * 1.3, this.yf.y - v206 * 1.3, this.yf.y + v206 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v205 * 2, v206 * 2);
          var v207 = vF94.o.fb.ub;
          this.ve.scale.x = v201;
          this.ve.scale.y = v201;
          this.ve.position.x = v199 / 2 - this.yf.x * v201;
          this.ve.position.y = v200 / 2 - this.yf.y * v201;
          var v208 = Math.hypot(v204.x, v204.y);
          if (v208 > v207 - 10) {
            this.hf = f19(0, 1, 1 + (v208 - v207) / 10);
            var v209 = Math.cos(this.ff * v126 / 360) * (1 - this.hf) + this.hf * 1;
            var v210 = Math.sin(this.ff * v126 / 360) * (1 - this.hf);
            var v211 = (Math.atan2(v210, v209) + v126) % v126 * 360 / v126;
            var v212 = this.hf * (0.5 + this.gf * 0.5);
            var vF29 = f29(Math.floor(v211), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF29[0], vF29[1], vF29[2], 0.1 + v212 * 0.2);
          } else {
            this.hf = 0;
            var vF292 = f29(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF292[0], vF292[1], vF292[2], 0.1);
          }
          var vLN026 = 0;
          for (; vLN026 < this.sf.children.length; vLN026++) {
            var v213 = this.sf.children[vLN026];
            v213.position.x = v199 / 2 - (this.yf.x - v213.If.x) * v201;
            v213.position.y = v200 / 2 - (this.yf.y - v213.If.y) * v201;
          }
          this.tf.Jf.position.x = v204.x / v207 * this.tf.Kf;
          this.tf.Jf.position.y = v204.y / v207 * this.tf.Kf;
          this.uf.Qa(p296);
          this.wf.Te(p296, p297);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f64.prototype.Lf = function (p298, p299) {
        p299.Of.Nf.Mf().zIndex = (p298 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p299.Of.Pf.Mf());
        this.pf.addChild(p299.Of.Nf.Mf());
      };
      f64.prototype.Qf = function (p300, p301, p302) {
        p301.Rf.zIndex = f9().o.fb.bf ? 0 : 10 + (p300 + 32768) / 65536 * 5000;
        this.qf.addChild(p301.Rf);
        if (p300 != f9().o.fb.bf) {
          this.sf.addChild(p302);
        }
      };
      var vF23 = function () {
        return f17(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF7.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF7.bc();
          var v214 = new vF7.bc();
          v214.beginFill("black", 0.4);
          v214.drawCircle(0, 0, this.Kf);
          v214.endFill();
          v214.lineStyle(2, 16777215);
          v214.drawCircle(0, 0, this.Kf);
          v214.moveTo(0, -this.Kf);
          v214.lineTo(0, +this.Kf);
          v214.moveTo(-this.Kf, 0);
          v214.lineTo(+this.Kf, 0);
          v214.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(v214);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var vF24 = function () {
        var vF173 = f17(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.Tf = {};
        });
        vF173.prototype.Qa = function (p303) {
          var v215 = 0.5 + Math.cos(v126 * (p303 / 1000 / 1.6)) * 0.5;
          var v216;
          for (v216 in this.Tf) {
            var v217 = this.Tf[v216];
            var v218 = v217.Uf;
            v217.alpha = 1 - v218 + v218 * v215;
          }
        };
        vF173.prototype.Te = function (p304) {
          var v219;
          for (v219 in this.Tf) {
            if (p304[v219] == null || !p304[v219].sc) {
              f26(this.Tf[v219]);
              delete this.Tf[v219];
            }
          }
          var vLN027 = 0;
          var v220;
          for (v220 in p304) {
            var v221 = p304[v220];
            if (v221.sc) {
              var v222 = this.Tf[v220];
              if (!v222) {
                var v223 = f9().p.Dc().ld(v221.rc).Zc;
                v222 = new vF25();
                v222.texture = v223.Hc;
                v222.width = 35;
                v222.height = 35;
                this.Tf[v220] = v222;
                this.addChild(v222);
              }
              f8(this, v220, v221.tc);
              v222.Uf = v221.tc;
              if (vO4.ModeStremer) {
                v222.position.x = vLN027 + 225;
              } else {
                v222.position.x = vLN027;
              }
              vLN027 = vLN027 + 40;
            }
          }
        };
        var vF25 = function () {
          return f17(vF7.ec, function () {
            vF7.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF173;
      }();
      var vF26 = function () {
        var vF174 = f17(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var vLN028 = 0;
          for (; vLN028 < 14; vLN028++) {
            this.Xf();
          }
        });
        vF174.prototype.Te = function (p305) {
          var vF95 = f9();
          var v224 = vF95.o.fb.af == vO17._e;
          var vLN029 = 0;
          var vLN030 = 0;
          if (vLN030 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN030].Yf(5, "white");
          this.Pe[vLN030].Zf("", f12("index.game.leader.top10"), "(" + vF95.o.tb + " online)");
          this.Pe[vLN030].position.y = vLN029;
          vLN029 = vLN029 + this.Vf;
          vLN030 = vLN030 + 1;
          if (p305.$f.length > 0) {
            vLN029 = vLN029 + this.Wf;
          }
          var vLN031 = 0;
          for (; vLN031 < p305.$f.length; vLN031++) {
            var v225 = p305.$f[vLN031];
            var v226 = vF95.p.Dc().ed(v225._f);
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(0.8, v226.bd._c);
            this.Pe[vLN030].Zf("" + (vLN031 + 1), f13(v226.ad), "" + Math.floor(v225.M));
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
          }
          if (p305.ag.length > 0) {
            vLN029 = vLN029 + this.Wf;
          }
          var vLN032 = 0;
          for (; vLN032 < p305.ag.length; vLN032++) {
            var v227 = p305.ag[vLN032];
            var v228 = vF95.o.fb.bf == v227.bg;
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (v228) {
              vUndefined7 = "yellow";
              vUndefined8 = vF95.o.N.Mb.ad;
            } else {
              var v229 = vF95.o.hb[v227.bg];
              if (v229 != null) {
                vUndefined7 = v224 ? vF95.p.Dc().ed(v229.Mb.cg).bd._c : vF95.p.Dc().dd(v229.Mb.dg)._c;
                vUndefined8 = this.Ef ? v229.Mb.ad : "---";
              } else {
                vUndefined7 = "gray";
                vUndefined8 = "?";
              }
            }
            if (v228) {
              vLN029 = vLN029 + this.Wf;
            }
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(v228 ? 1 : 0.8, vUndefined7);
            var v230 = Math.floor(v227.M);
            v230.customFormat();
            this.Pe[vLN030].Zf("" + (vLN032 + 1), vUndefined8, "" + v230.customFormat());
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
            if (v228) {
              vLN029 = vLN029 + this.Wf;
            }
          }
          if (vF95.o.O > p305.ag.length) {
            vLN029 = vLN029 + this.Wf;
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(2, "white");
            window.tuNewScore = Math.floor(vF95.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[vLN030].Zf("" + vF95.o.O, vF95.o.N.Mb.ad, "" + window.tuNewScore.customFormat());
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
            vLN029 = vLN029 + this.Wf;
          }
          while (this.Pe.length > vLN030) {
            f26(this.Pe.pop());
          }
        };
        vF174.prototype.Xf = function () {
          var v231 = new vF27();
          v231.position.y = 0;
          if (this.Pe.length > 0) {
            v231.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v231);
          this.addChild(v231);
        };
        var vF27 = function () {
          var vF175 = f17(vF7.Zb, function () {
            vF7.Zb.call(this);
            this.eg = new vF7.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new vF7.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF7.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 200;
            this.addChild(this.gg);
          });
          vF175.prototype.Zf = function (p306, p307, p308) {
            this.eg.text = p306;
            this.gg.text = p308;
            var vP307 = p307;
            this.fg.text = vP307;
            const v232 = /x.*$/;
            while (this.fg.width > 110) {
              vP307 = vP307.replace(v232, ".");
              if (this.fg.width > 110) {
                vP307 = vP307.substring(0, vP307.length - 1);
              }
              this.fg.text = vP307;
            }
          };
          vF175.prototype.Yf = function (p309, p310) {
            this.eg.alpha = p309;
            this.eg.style.fill = p310;
            this.fg.alpha = p309;
            this.fg.style.fill = p310;
            this.gg.alpha = p309;
            this.gg.style.fill = p310;
          };
          return vF175;
        }();
        return vF174;
      }();
      return f64;
    }();
    var vF28 = function () {
      function f65(p311) {
        this.o = p311;
        this.hg = [];
        this.ig = 0;
      }
      f65.prototype.Xb = function (p312) {
        this.hg.push(new DataView(p312));
      };
      f65.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f65.prototype.Bb = function () {
        for (var vLN033 = 0; vLN033 < 10; vLN033++) {
          if (this.hg.length === 0) {
            return;
          }
          var v233 = this.hg.shift();
          try {
            this.jg(v233);
          } catch (e29) {
            console.log("DataReader error: " + e29);
            throw e29;
          }
        }
      };
      f65.prototype.jg = function (p313) {
        switch (p313.mc(0) & 255) {
          case 0:
            this.kg(p313, 1);
            return;
          case 1:
            this.lg(p313, 1);
            return;
          case 2:
            this.mg(p313, 1);
            return;
          case 3:
            this.ng(p313, 1);
            return;
          case 4:
            this.og(p313, 1);
            return;
          case 5:
            this.pg(p313, 1);
            return;
        }
      };
      f65.prototype.kg = function (p314, p315) {
        console.log("sgp1");
        this.o.fb.af = p314.mc(p315);
        p315 = p315 + 1;
        var v234 = p314.nc(p315);
        p315 = p315 + 2;
        this.o.fb.bf = v234;
        this.o.N.Mb.Lb = v234;
        this.o.fb.ub = p314.pc(p315);
        p315 = p315 + 4;
        this.o.fb.cf = p314.pc(p315);
        p315 = p315 + 4;
        this.o.fb.df = p314.pc(p315);
        p315 = p315 + 4;
        f9().s.H.wb.Te(this.o.fb, f9().s.xa.wa());
        console.log("sgp2");
        return p315;
      };
      f65.prototype.lg = function (p316, p317) {
        var v235 = this.ig++;
        var v236 = p316.nc(p317);
        p317 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN034 = 0; vLN034 < vUndefined9; vLN034++) {
          p317 = this.sg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN035 = 0; vLN035 < vUndefined9; vLN035++) {
          p317 = this.tg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN036 = 0; vLN036 < vUndefined9; vLN036++) {
          p317 = this.ug(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN037 = 0; vLN037 < vUndefined9; vLN037++) {
          p317 = this.vg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN038 = 0; vLN038 < vUndefined9; vLN038++) {
          p317 = this.wg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN039 = 0; vLN039 < vUndefined9; vLN039++) {
          p317 = this.xg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN040 = 0; vLN040 < vUndefined9; vLN040++) {
          p317 = this.yg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN041 = 0; vLN041 < vUndefined9; vLN041++) {
          p317 = this.zg(p316, p317);
        }
        if (v235 > 0) {
          p317 = this.Ag(p316, p317);
        }
        this.o.Qb(v235, v236);
        return p317;
      };
      f65.prototype.vg = function (p318, p319) {
        var v237 = new vF45.Config();
        v237.Lb = p318.nc(p319);
        p319 = p319 + 2;
        v237.cg = this.o.fb.af == vO17._e ? p318.mc(p319++) : vF21.TEAM_DEFAULT;
        v237.dg = p318.nc(p319);
        let vP319 = p319;
        p319 = p319 + 2;
        v237.Bg = p318.nc(p319);
        let vP3192 = p319;
        p319 = p319 + 2;
        v237.Cg = p318.nc(p319);
        let vP3193 = p319;
        p319 = p319 + 2;
        v237.Dg = p318.nc(p319);
        let vP3194 = p319;
        p319 = p319 + 2;
        v237.Eg = p318.nc(p319);
        let vP3195 = p319;
        p319 = p319 + 2;
        var v238 = p318.mc(p319);
        p319 = p319 + 1;
        var vLS2 = "";
        var vLN042 = 0;
        for (; vLN042 < v238; vLN042++) {
          vLS2 = vLS2 + String.fromCharCode(p318.nc(p319));
          p319 = p319 + 2;
        }
        if (p319 > 210) {
          for (let v239 in this.o.hb) {
            var v240 = this.o.hb[v239].Mb.dg;
            if (vO4.ModeStremerdangaunhien) {} else {
              var vA9 = [1348, 1344, 1500, 1354, 1352, 1338, 1336, 1234, 1459, 1371, 1420, 1405, 1198, 1188, 1041, 1087, 1069, 1100, 1126, 1127, 1227, 1422, 1260, 1257, 1282, 1283, 1288, 1289, 1291, 1294, 1312, 1311, 1323, 1435, 1446, 1456, 1471, 1472, 1451, 1185];
              if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(v240)) {
                var v243 = Math.floor(Math.random() * vA9.length);
                this.o.hb[v239].Mb.dg = vA9[v243];
              }
              if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[v239].Mb.ad)) {
                const v242 = this.o.hb[v239].Mb.dg;
                if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(v242)) {
                  var v243 = Math.floor(Math.random() * vA9.length);
                  this.o.hb[v239].Mb.dg = vA9[v243];
                }
              }
            }
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[v239].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v239].Mb.ad);
              var v244 = this.o.hb[v239].Mb.ad.substr(-13);
              console.log("elimina spacios: " + v244);
              f65 = v244.substr(0, 4);
              console.log("primeros digitos: " + f65);
              let v245 = v244.substr(4, 3);
              console.log("segundos digitos: " + v245);
              let v246 = v244.substr(7, 3);
              console.log("tercer digitos: " + v246);
              let v247 = v244.substr(10, 3);
              console.log("mouthId_A: " + v247);
              if (f65 !== "0000" && vO4.visibleSkin.indexOf(parseInt(f65)) !== -1) {
                this.o.hb[v239].Mb.dg = parseInt(f65);
              }
              if (v245 !== "000") {
                this.o.hb[v239].Mb.Eg = parseInt(v245);
              }
              if (v246 !== "000") {
                this.o.hb[v239].Mb.Bg = parseInt(v246);
              }
              if (v247 !== "000") {
                this.o.hb[v239].Mb.Cg = parseInt(v247);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === v237.Lb) {
          v237.dg = vO4.PropertyManager.rh;
          v237.Bg = vO4.PropertyManager.sh;
          v237.Cg = vO4.PropertyManager.th;
          v237.Dg = vO4.PropertyManager.uh;
          v237.Eg = vO4.PropertyManager.vh;
          p318.setInt16(vP319, v237.dg);
          p318.setInt16(vP3192, v237.Bg);
          p318.setInt16(vP3193, v237.Cg);
          p318.setInt16(vP3194, v237.Dg);
          p318.setInt16(vP3195, v237.Eg);
          vO.aload = true;
          vO.aId = vP319;
        }
        v237.ad = vLS2;
        if (this.o.fb.bf === v237.Lb) {
          this.o.N.Fg(v237);
          v237.Mb = v237.Lb;
          v237.bd = v237.ad;
        } else {
          var v248 = this.o.hb[v237.Lb];
          if (v248 != null) {
            v248.Kb();
          }
          var v249 = new vF45(this.o.fb);
          v249.vb(f9().s.H.wb);
          this.o.hb[v237.Lb] = v249;
          v249.Fg(v237);
        }
        return p319;
      };
      f65.prototype.wg = function (p320, p321) {
        var v250 = p320.nc(p321);
        p321 += 2;
        var v251 = p320.mc(p321);
        p321++;
        var v252 = !!(v251 & 1);
        var v253 = !!(v251 & 2);
        var vLN043 = 0;
        if (v252) {
          vLN043 = p320.nc(p321);
          p321 += 2;
        }
        var v254 = this.Gg(v250);
        if (v254 === undefined) {
          return p321;
        }
        v254.Ib = false;
        if (!v254.Hb) {
          return p321;
        }
        var v255 = this.Gg(v250);
        if (v252 && v255 !== undefined && v255.Hb) {
          if (vLN043 === this.o.fb.bf) {
            var v256 = this.o.N.Gf();
            var v257 = v254.Hg(v256.x, v256.y);
            Math.max(0, 1 - v257.distance / (this.o.jb * 0.5));
            if (v257.distance < this.o.jb * 0.5) {
              f9().s.H.wb.wf.Se(v253);
            }
          } else if (v250 === this.o.fb.bf) ;else {
            var v258 = this.o.N.Gf();
            var v259 = v254.Hg(v258.x, v258.y);
            Math.max(0, 1 - v259.distance / (this.o.jb * 0.5));
          }
        } else if (v250 === this.o.fb.bf) ;else {
          var v260 = this.o.N.Gf();
          var v261 = v254.Hg(v260.x, v260.y);
          Math.max(0, 1 - v261.distance / (this.o.jb * 0.5));
        }
        return p321;
      };
      f65.prototype.zg = function (p322, p323) {
        var v262 = p322.nc(p323);
        p323 += 2;
        var v263 = v262 === this.o.fb.bf ? null : this.o.hb[v262];
        var v264 = p322.mc(p323);
        p323 += 1;
        var v265 = !!(v264 & 1);
        if (v264 & 2) {
          var v266 = p322.pc(p323);
          p323 += 4;
          if (v263) {
            v263.Ig(v266);
          }
        }
        var v267 = this.Jg(p322.mc(p323++), p322.mc(p323++), p322.mc(p323++));
        var v268 = this.Jg(p322.mc(p323++), p322.mc(p323++), p322.mc(p323++));
        if (v263) {
          v263.Kg(v267, v268, v265);
          var v269 = this.o.N.Gf();
          var v270 = v263.Gf();
          var v271 = Math.max(0, 1 - Math.hypot(v269.x - v270.x, v269.y - v270.y) / (this.o.jb * 0.5));
          f9().r.Zd(v271, v262, v265);
        }
        var v272 = this.qg(p322, p323);
        p323 += this.rg(v272);
        if (v263) {
          for (var v273 in v263.Ff) {
            var v274 = v263.Ff[v273];
            if (v274) {
              v274.sc = false;
            }
          }
        }
        for (var vLN044 = 0; vLN044 < v272; vLN044++) {
          var v275 = p322.mc(p323);
          p323++;
          var v276 = p322.mc(p323);
          p323++;
          if (v263) {
            var v277 = v263.Ff[v275];
            v277 ||= v263.Ff[v275] = new vF8(v275);
            v277.sc = true;
            v277.tc = Math.min(1, Math.max(0, v276 / 100));
          }
        }
        return p323;
      };
      f65.prototype.Ag = function (p324, p325) {
        var v278 = this.o.N;
        var v279 = p324.mc(p325);
        p325 += 1;
        var v280 = !!(v279 & 1);
        var v281 = !!(v279 & 2);
        var v282 = !!(v279 & 4);
        if (v281) {
          var v283 = v278.M;
          v278.Ig(p324.pc(p325));
          p325 += 4;
          v283 = v278.M - v283;
          if (v283 > 0) {
            f9().s.H.wb.wf.Re(v283);
          }
        }
        if (v282) {
          this.o.ib = p324.pc(p325);
          p325 += 4;
        }
        var v284 = this.Jg(p324.mc(p325++), p324.mc(p325++), p324.mc(p325++));
        var v285 = this.Jg(p324.mc(p325++), p324.mc(p325++), p324.mc(p325++));
        v278.Kg(v284, v285, v280);
        f9().r.Zd(0.5, this.o.fb.bf, v280);
        var v286 = this.qg(p324, p325);
        p325 += this.rg(v286);
        for (var v287 in v278.Ff) {
          var v288 = v278.Ff[v287];
          if (v288) {
            v288.sc = false;
          }
        }
        for (var vLN045 = 0; vLN045 < v286; vLN045++) {
          var v289 = p324.mc(p325);
          p325++;
          var v290 = p324.mc(p325);
          p325++;
          var v291 = v278.Ff[v289];
          if (!v291) {
            v291 = new vF8(v289);
            v278.Ff[v289] = v291;
          }
          v291.sc = true;
          v291.tc = Math.min(1, Math.max(0, v290 / 100));
        }
        f9().s.H.wb.uf.Te(v278.Ff);
      };
      f65.prototype.xg = function (p326, p327) {
        var vThis6 = this;
        var v292 = p326.nc(p327);
        p327 += 2;
        var v293 = this.Gg(v292);
        var v294 = p326.pc(p327);
        p327 += 4;
        var vA10 = [];
        for (var v295 in v293.Ff) {
          if (v295 == 0) {
            vA10.push("velocidad");
            $(".v0").fadeIn();
          } else if (v295 == 1) {
            vA10.push("movimiento");
            $(".v1").fadeIn();
          } else if (v295 == 2) {
            vA10.push("iman");
            $(".v2").fadeIn();
          } else if (v295 == 3) {
            vA10.push("comidax2");
            $(".v3").fadeIn();
          } else if (v295 == 4) {
            vA10.push("comidax5");
            $(".v4").fadeIn();
          } else if (v295 == 5) {
            vA10.push("comidax10");
            $(".v5").fadeIn();
          } else if (v295 == 6) {
            vA10.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA10;
        $(".Worm_cerca").text(" : " + v293.Mb.ad);
        if (v293.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v296 = this.qg(p326, p327);
        p327 += this.rg(v296);
        if (v293) {
          v293.Ig(v294);
          v293.Lg(function () {
            return vThis6.Jg(p326.mc(p327++), p326.mc(p327++), p326.mc(p327++));
          }, v296);
          v293.Mg(true);
          var v297 = this.o.N.Gf();
          var v298 = v293.Gf();
          var v299 = Math.max(0, 1 - Math.hypot(v297.x - v298.x, v297.y - v298.y) / (this.o.jb * 0.5));
          f9().r.Xd(v299, v292);
        } else {
          p327 += v296 * 6;
        }
        return p327;
      };
      f65.prototype.yg = function (p328, p329) {
        var v300 = p328.nc(p329);
        p329 += 2;
        var v301 = this.o.hb[v300];
        var vA11 = [];
        if (v301 && v301.Ib) {
          v301.Mg(false);
        }
        f9().r.Yd(v300);
        return p329;
      };
      f65.prototype.sg = function (p330, p331) {
        var v302 = new vF31.Config();
        v302.Lb = p330.oc(p331);
        p331 += 4;
        v302.cg = this.o.fb.af === vO17._e ? p330.mc(p331++) : vF21.TEAM_DEFAULT;
        v302.Ng = this.Jg(p330.mc(p331++), p330.mc(p331++), p330.mc(p331++));
        v302.dg = p330.mc(p331++);
        var v303 = this.o.gb[v302.Lb];
        if (v303 != null) {
          v303.Kb();
        }
        var v304 = new vF31(v302, f9().s.H.wb);
        v304.Og(this.Pg(v302.Lb), this.Qg(v302.Lb), true);
        this.o.gb[v302.Lb] = v304;
        return p331;
      };
      f65.prototype.tg = function (p332, p333) {
        var v305 = p332.oc(p333);
        p333 += 4;
        var v306 = this.o.gb[v305];
        if (v306) {
          v306.Rg = 0;
          v306.Sg = v306.Sg * 1.5;
          v306.Nb = true;
        }
        return p333;
      };
      f65.prototype.ug = function (p334, p335) {
        var v307 = p334.oc(p335);
        p335 += 4;
        var v308 = p334.nc(p335);
        p335 += 2;
        var v309 = this.o.gb[v307];
        if (v309) {
          v309.Rg = 0;
          v309.Sg = v309.Sg * 0.1;
          v309.Nb = true;
          var v310 = this.Gg(v308);
          if (v310 && v310.Hb) {
            this.o.fb.bf;
            var v311 = v310.Gf();
            v309.Og(v311.x, v311.y, false);
          }
        }
        return p335;
      };
      var vA12 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f65.prototype.mg = function (p336) {
        var v312 = f9().q.Ug.Tg;
        var v313 = v312.getImageData(0, 0, 80, 80);
        var v314 = vA12[0];
        var v315 = 80 - v314;
        var vLN046 = 0;
        for (var vLN047 = 0; vLN047 < 628; vLN047++) {
          var v316 = p336.mc(1 + vLN047);
          for (var vLN048 = 0; vLN048 < 8; vLN048++) {
            var v317 = (v316 >> vLN048 & 1) != 0;
            var v318 = (v314 + vLN046 * 80) * 4;
            if (v317) {
              v313.data[v318] = 255;
              v313.data[v318 + 1] = 255;
              v313.data[v318 + 2] = 255;
              v313.data[v318 + 3] = 255;
            } else {
              v313.data[v318 + 3] = 0;
            }
            if (++v314 >= v315 && ++vLN046 < 80) {
              v314 = vA12[vLN046];
              v315 = 80 - v314;
            }
          }
        }
        v312.putImageData(v313, 0, 0);
        var v319 = f9().s.H.wb.tf.Sf;
        v319.texture = f9().q.Ug.Hc;
        v319.texture.update();
      };
      f65.prototype.og = function (p337, p338) {
        var v320 = p337.oc(p338);
        p338 += 4;
        console.log("Wormy Error: " + v320);
      };
      f65.prototype.pg = function (p339, p340) {
        console.log("g.o");
        this.o.Rb();
      };
      f65.prototype.ng = function (p341, p342) {
        this.o.tb = p341.nc(p342);
        p342 += 2;
        this.o.O = p341.nc(p342);
        p342 += 2;
        var v321 = new vF41();
        v321.ag = [];
        if (vO4.ModeStremerbatop) {
          for (var v325 = p341.mc(p342++), vLN049 = 7; vLN049 < v325; vLN049++) {
            var v326 = p341.nc(p342);
            p342 += 2;
            var v327 = p341.pc(p342);
            p342 += 4;
            v321.ag.push(vF41.Vg(v326, v327));
          }
        } else {
          for (var v325 = p341.mc(p342++), vLN049 = 0; vLN049 < v325; vLN049++) {
            var v326 = p341.nc(p342);
            p342 += 2;
            var v327 = p341.pc(p342);
            p342 += 4;
            v321.ag.push(vF41.Vg(v326, v327));
          }
        }
        v321.$f = [];
        if (this.o.fb.af === vO17._e) {
          for (var v328 = p341.mc(p342++), vLN050 = 0; vLN050 < v328; vLN050++) {
            var v329 = p341.mc(p342);
            p342 += 1;
            var v330 = p341.pc(p342);
            p342 += 4;
            v321.$f.push(vF41.Wg(v329, v330));
          }
        }
        f9().s.H.wb.vf.Te(v321);
      };
      f65.prototype.Gg = function (p343) {
        if (p343 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p343];
        }
      };
      f65.prototype.Jg = function (p344, p345, p346) {
        return (((p346 & 255 | p345 << 8 & 65280 | p344 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f65.prototype.Pg = function (p347) {
        return ((p347 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f65.prototype.Qg = function (p348) {
        return ((p348 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f65.prototype.qg = function (p349, p350) {
        var v331 = p349.mc(p350);
        if ((v331 & 128) == 0) {
          return v331;
        }
        var v332 = p349.mc(p350 + 1);
        if ((v332 & 128) == 0) {
          return v332 | v331 << 7 & 16256;
        }
        var v333 = p349.mc(p350 + 2);
        if ((v333 & 128) == 0) {
          return v333 | v332 << 7 & 16256 | v331 << 14 & 2080768;
        }
        var v334 = p349.mc(p350 + 3);
        if ((v334 & 128) == 0) {
          return v334 | v333 << 7 & 16256 | v332 << 14 & 2080768 | v331 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f65.prototype.rg = function (p351) {
        if (p351 < 128) {
          return 1;
        } else if (p351 < 16384) {
          return 2;
        } else if (p351 < 2097152) {
          return 3;
        } else if (p351 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f65;
    }();
    var vF30 = function () {
      function f66(p352) {
        this.Xg = p352;
      }
      f66.Yg = function () {
        return new vF30(null);
      };
      f66.Zg = function (p353) {
        return new vF30(p353);
      };
      f66.prototype.$g = function () {
        return this.Xg;
      };
      f66.prototype._g = function () {
        return this.Xg != null;
      };
      f66.prototype.ah = function (p354) {
        if (this.Xg != null) {
          p354(this.Xg);
        }
      };
      return f66;
    }();
    var vF31 = function () {
      function f67(p355, p356) {
        this.Mb = p355;
        this.bh = p355.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p355.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF33();
        this.gh.hh(f9().o.fb.af, this.Mb.cg === vF21.TEAM_DEFAULT ? null : f9().p.Dc().ed(this.Mb.cg), f9().p.Dc().kd(this.Mb.dg));
        p356.Lf(p355.Lb, this.gh);
      }
      f67.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f67.prototype.Og = function (p357, p358, p359) {
        this.Ob = p357;
        this.Pb = p358;
        if (p359) {
          this.ch = p357;
          this.dh = p358;
        }
      };
      f67.prototype.Fb = function (p360, p361) {
        var v335 = Math.min(0.5, this.Sg * 1);
        var v336 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f21(this.eh, v335, p361, 0.0025);
        this.fh = f21(this.fh, v336, p361, 0.0025);
        this.Jb = f21(this.Jb, this.Rg, p361, 0.0025);
      };
      f67.prototype.Gb = function (p362, p363, p364) {
        this.ch = f21(this.ch, this.Ob, p363, vO4.eat_animation);
        this.dh = f21(this.dh, this.Pb, p363, 0.005);
        this.gh.Te(this, p362, p363, p364);
      };
      f67.Config = function () {
        function f68() {
          this.Lb = 0;
          this.cg = vF21.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f68;
      }();
      return f67;
    }();
    var vF33 = function () {
      function f69() {
        this.Of = new vF34(new vF44(), new vF44());
        this.Of.Pf.jh.blendMode = vF7.ic.jc;
        this.Of.Pf.jh.zIndex = vLN1002;
        this.Of.Nf.jh.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN1002 = 100;
      f69.prototype.hh = function (p365, p366, p367) {
        var v337 = p367.Zc;
        if (v337 != null) {
          this.Of.Nf.kh(v337);
        }
        var v338 = p365 == vO17._e && p366 != null ? p366.cd.$c : p367.$c;
        if (v338 != null) {
          this.Of.Pf.kh(v338);
        }
      };
      f69.prototype.Te = function (p368, p369, p370, p371) {
        if (!p371(p368.ch, p368.dh)) {
          this.Of.lh();
          return;
        }
        var v339 = p368.fh * (1 + Math.cos(p368.Ae + p369 / 200) * 0.3);
        if (p368.bh) {
          this.Of.mh(p368.ch, p368.dh, vO4.PortionSize * p368.eh, p368.Jb * 1, vO4.PortionAura * v339, vO4.PortionTransparent * p368.Jb);
        } else {
          this.Of.mh(p368.ch, p368.dh, vO4.FoodSize * p368.eh, p368.Jb * 1, vO4.FoodShadow * v339, vO4.FoodTransparent * p368.Jb);
        }
      };
      var vF34 = function () {
        function f70(p372, p373) {
          this.Nf = p372;
          this.Pf = p373;
        }
        f70.prototype.mh = function (p374, p375, p376, p377, p378, p379) {
          this.Nf.Mg(true);
          this.Nf.nh(p374, p375);
          this.Nf.oh(p376);
          this.Nf.qh(p377);
          this.Pf.Mg(true);
          this.Pf.nh(p374, p375);
          this.Pf.oh(p378);
          this.Pf.qh(p379);
        };
        f70.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f70;
      }();
      return f69;
    }();
    var vF35 = function () {
      function f71() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f72(p380, p381) {
        if (!f9().p.W()) {
          return null;
        }
        var v340 = f9().p.Ac();
        if (p381 === vF37.ia) {
          var v_0x3e0679 = f73(v340.skinArrayDict, p380);
          if (v_0x3e0679 < 0) {
            return null;
          } else {
            return v340.skinArrayDict[v_0x3e0679];
          }
        }
        switch (p381) {
          case vF37.ja:
            return v340.eyesDict[p380];
          case vF37.ka:
            return v340.mouthDict[p380];
          case vF37.la:
            return v340.glassesDict[p380];
          case vF37.ma:
            return v340.hatDict[p380];
        }
        return null;
      }
      function f73(p382, p383) {
        for (var vLN051 = 0; vLN051 < p382.length; vLN051++) {
          if (p382[vLN051].id == p383) {
            return vLN051;
          }
        }
        return -1;
      }
      f71.prototype.a = function () {};
      f71.prototype.ha = function (p384) {
        if (!vO4.loading) {
          vO4.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(vO4));
        }
        switch (p384) {
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
      f71.prototype.xh = function (p385) {
        this.wh.push(p385);
        this.yh();
      };
      f71.prototype.Ia = function () {
        if (!f9().p.W()) {
          return f27([32, 33, 34, 35]);
        }
        for (var v341 = f9().p.Ac(), vA13 = [], vLN052 = 0; vLN052 < v341.skinArrayDict.length; vLN052++) {
          var v342 = v341.skinArrayDict[vLN052];
          if (this.Ja(v342.id, vF37.ia)) {
            vA13.push(v342);
          }
        }
        if (vA13.length === 0) {
          return 0;
        } else {
          return vA13[parseInt(vA13.length * Math.random())].id;
        }
      };
      f71.prototype.zh = function () {
        if (f9().p.W) {
          var v343 = f9().p.Ac().skinArrayDict;
          var vF73 = f73(v343, this.rh);
          if (!(vF73 < 0)) {
            for (var v344 = vF73 + 1; v344 < v343.length; v344++) {
              if (this.Ja(v343[v344].id, vF37.ia)) {
                this.rh = v343[v344].id;
                this.yh();
                return;
              }
            }
            for (var vLN053 = 0; vLN053 < vF73; vLN053++) {
              if (this.Ja(v343[vLN053].id, vF37.ia)) {
                this.rh = v343[vLN053].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f71.prototype.Ah = function () {
        if (f9().p.W) {
          var v345 = f9().p.Ac().skinArrayDict;
          var vF732 = f73(v345, this.rh);
          if (!(vF732 < 0)) {
            for (var v346 = vF732 - 1; v346 >= 0; v346--) {
              if (this.Ja(v345[v346].id, vF37.ia)) {
                this.rh = v345[v346].id;
                this.yh();
                return;
              }
            }
            for (var v347 = v345.length - 1; v347 > vF732; v347--) {
              if (this.Ja(v345[v347].id, vF37.ia)) {
                this.rh = v345[v347].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f71.prototype.Bh = function (p386, p387) {
        if (!f9().p.W() || this.Ja(p386, p387)) {
          switch (p387) {
            case vF37.ia:
              if (this.rh != p386) {
                this.rh = p386;
                this.yh();
              }
              return;
            case vF37.ja:
              if (this.sh != p386) {
                this.sh = p386;
                this.yh();
              }
              return;
            case vF37.ka:
              if (this.th != p386) {
                this.th = p386;
                this.yh();
              }
              return;
            case vF37.la:
              if (this.uh != p386) {
                this.uh = p386;
                this.yh();
              }
              return;
            case vF37.ma:
              if (this.vh != p386) {
                this.vh = p386;
                this.yh();
              }
              return;
          }
        }
      };
      f71.prototype.Ja = function (p388, p389) {
        var vF72 = f72(p388, p389);
        return vF72 != null && (f9().u.P() ? vF72.price == 0 && !vF72.nonbuyable || f9().u.Ch(p388, p389) : vF72.guest);
      };
      f71.prototype.yh = function () {
        for (var vLN054 = 0; vLN054 < this.wh.length; vLN054++) {
          this.wh[vLN054]();
        }
      };
      return f71;
    }();
    var vF37 = function () {
      function f74() {}
      f74.ia = "SKIN";
      f74.ja = "EYES";
      f74.ka = "MOUTH";
      f74.la = "GLASSES";
      f74.ma = "HAT";
      return f74;
    }();
    var vF38 = function () {
      function f75(p390, p391, p392, p393, p394, p395, p396, p397, p398) {
        this.Hc = new vF7._b(p390, new vF7.dc(p391, p392, p393, p394));
        this.Dh = p391;
        this.Eh = p392;
        this.Fh = p393;
        this.Gh = p394;
        this.Hh = p395 || (p397 || p393) / 2;
        this.Ih = p396 || (p398 || p394) / 2;
        this.Jh = p397 || p393;
        this.Kh = p398 || p394;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f75;
    }();
    var vF39 = function () {
      function f76() {
        this.fn_o = f77;
        this.Fe = new vF7._b(vF7.$b.from("/images/bg-obstacle.png"));
        var v348 = vF7.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128)), new vF7._b(v348, new vF7.dc(0, 0, 128, 128))];
        this.Cf = new vF7._b(f77());
        this.Df = new vF7._b(function () {
          var v349 = vF7.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v349.wrapMode = vF7.kc.lc;
          return v349;
        }());
        this.Af = new vF7._b(vF7.$b.from("/images/lens.png"));
        var v350 = vF7.$b.from("https://i.imgur.com/Nn8b8oj.png");
        var v351 = vF7.$b.from("https://i.imgur.com/EDt862t.png");
        var v352 = vF7.$b.from("https://i.imgur.com/U5sTlhC.png");
        var v353 = vF7.$b.from("https://i.imgur.com/ub4ed3R.png");
        this.Id_mobileguia = new vF38(v353, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF38(v351, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new vF38(v352, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new vF38(v350, 158, 86, 67, 124, 148, 63.5, 128, 128);
        if (vO4.ModeStremermuiten) {} else {
          this.Qh = new vF38(v350, 158, 4, 87, 74, 203, 63.5, 128, 128);
        }
        ;
        this.Rh = new vF38(v350, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var v354 = window.document.createElement("canvas");
          v354.width = 80;
          v354.height = 80;
          return {
            te: v354,
            Tg: v354.getContext("2d"),
            Hc: new vF7._b(vF7.$b.from(v354))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f77(p399) {
        var v355 = vF7.$b.from(p399 || "https://i.imgur.com/8ubx4RA.png");
        v355.wrapMode = vF7.kc.lc;
        return v355;
      }
      f76.prototype.a = function (p400) {
        function f78() {
          if (--vLN4 == 0) {
            p400();
          }
        }
        var vLN4 = 4;
        this.Bd = {};
        f78();
        this.yd = {};
        f78();
        this.Sh = [];
        f78();
        this.Th = null;
        f78();
      };
      return f76;
    }();
    var vF40 = function () {
      function f79() {
        this.H = new vF52();
        this.F = new vF54();
        this.Uh = new vF74();
        this.Vh = new vF75();
        this.Wh = new vF62();
        this.Xh = new vF63();
        this.Yh = new vF65();
        this.Zh = new vF64();
        this.xa = new vF66();
        this.$h = new vF67();
        this._h = new vF69();
        this.ai = new vF70();
        this.aa = new vF58();
        this.ua = new vF53();
        this.pa = new vF57();
        this.bi = [];
        this.ci = null;
      }
      function f80(p401, p402) {
        if (p402 != 0) {
          var v356 = p401[p402];
          f24(p401, 0, 1, p402);
          p401[0] = v356;
        }
      }
      function f81(p403, p404) {
        if (p404 != p403.length + 1) {
          var v357 = p403[p404];
          f24(p403, p404 + 1, p404, p403.length - p404 - 1);
          p403[p403.length - 1] = v357;
        }
      }
      function f82(p405, p406) {
        for (var vLN055 = 0; vLN055 < p405.length; vLN055++) {
          if (p405[vLN055] == p406) {
            return vLN055;
          }
        }
        return -1;
      }
      f79.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN056 = 0; vLN056 < this.bi.length; vLN056++) {
          this.bi[vLN056].a();
        }
        this.ci = new vF14(vF51.di);
      };
      f79.prototype.Qa = function (p407, p408) {
        for (var v358 = this.bi.length - 1; v358 >= 0; v358--) {
          this.bi[v358].Pa(p407, p408);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p407, p408);
        }
      };
      f79.prototype.Ra = function () {
        for (var v359 = this.bi.length - 1; v359 >= 0; v359--) {
          this.bi[v359].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f79.prototype.I = function (p409) {
        var vF82 = f82(this.bi, p409);
        if (!(vF82 < 0)) {
          this.bi[0].ei();
          f80(this.bi, vF82);
          this.fi();
        }
      };
      f79.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f81(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f79.prototype.fi = function () {
        var v360 = this.bi[0];
        v360.ii();
        v360.ji();
        this.ki();
      };
      f79.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f79.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f79;
    }();
    var vF41 = function () {
      function f83() {
        this.ag = [];
        this.$f = [];
      }
      f83.Vg = function (p410, p411) {
        return {
          bg: p410,
          M: p411
        };
      };
      f83.Wg = function (p412, p413) {
        return {
          _f: p412,
          M: p413
        };
      };
      return f83;
    }();
    var vF42 = function () {
      function f84() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
      }
      var vLSGuest = "guest";
      f84.prototype.a = function () {
        this.vi();
      };
      f84.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f84.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f84.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f84.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma;
        }
      };
      f84.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f84.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f84.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f84.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f84.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f84.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f84.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f84.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f84.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f84.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f84.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f84.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f84.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f84.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f84.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f84.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f84.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f84.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f84.prototype.V = function (p414) {
        this.ni.push(p414);
        p414();
      };
      f84.prototype.Pi = function (p415) {
        this.oi.push(p415);
        p415();
      };
      f84.prototype.Qi = function (p416) {
        this.pi.push(p416);
      };
      f84.prototype.Ch = function (p417, p418) {
        var v361 = this.si.propertyList.concat(vO4.pL || []);
        if (!v361) {
          return false;
        }
        for (var vLN057 = 0; vLN057 < v361.length; vLN057++) {
          var v362 = v361[vLN057];
          if (v362.id == p417 && v362.type === p418) {
            return true;
          }
        }
        return false;
      };
      f84.prototype.P = function () {
        return this.qi;
      };
      f84.prototype.ea = function () {
        return this.ri;
      };
      f84.prototype.Q = function (p419) {
        var vThis7 = this;
        if (this.qi) {
          this.Ri(function (p420) {
            if (p420) {
              var v363 = vThis7.zi();
              var v364 = vThis7.Ai();
              vThis7.si = p420;
              f102(vThis7.si);
              vThis7.Si();
              var v365 = vThis7.zi();
              var v366 = vThis7.Ai();
              if (v366 > 1 && v366 != v364) {
                f9().s.aa.Ti(new vF78(v366));
              }
              var v367 = v365 - v363;
              if (v367 >= 20) {
                f9().s.aa.Ti(new vF77(v367));
              }
            }
            if (p419) {
              p419();
            }
          });
        }
      };
      f84.prototype.Ri = function (p421) {
        $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (p422) {
          p421(p422.user_data);
        });
      };
      f84.prototype.Ui = function (p423, p424, p425) {
        var vThis8 = this;
        $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p423 + "&type=" + p424, function (p426) {
          if (p426.code == 1200) {
            vThis8.Q(p425);
          } else {
            p425();
          }
        }).fail(function () {
          p425();
        });
      };
      f84.prototype.Vi = function () {
        var vThis9 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p427) {
          if (p427.status === "connected") {
            if (p427.authResponse && p427.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p427.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
            return;
          }
          FB.login(function (p428) {
            if (p428.status === "connected" && p428.authResponse && p428.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p428.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
          });
        });
      };
      f84.prototype.Zi = function () {
        var vThis10 = this;
        this.Wi();
        if (v27 === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        v27.then(function () {
          console.log("gsi:then");
          if (v27.isSignedIn.get()) {
            console.log("gsi:sil");
            var v368 = v27.currentUser.get();
            vThis10.Yi("google", "gg_" + v368.getAuthResponse().id_token);
            return;
          }
          v27.signIn().then(function (p429) {
            if (p429.error !== undefined) {
              console.log("gsi:e: " + p429.error);
              vThis10.Xi();
              return;
            } else if (p429.isSignedIn()) {
              console.log("gsi:s");
              vThis10.Yi("google", "gg_" + p429.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              vThis10.Xi();
              return;
            }
          });
        });
      };
      f84.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v369 = this.ri;
        var v370 = this.ti;
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
        f11(vF15.Oe, "", 60);
        switch (v370) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v369 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f84.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (p430) {
            if (p430.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f84.prototype.vi = function () {
        console.log("rs");
        var vF102 = f10(vF15.Oe);
        var vThis11 = this;
        if (vF102 == "facebook") {
          console.log("rs:fb");
          (function f85() {
            if (typeof FB != "undefined") {
              vThis11.Vi();
            } else {
              setTimeout(f85, 100);
            }
          })();
        } else if (vF102 == "google") {
          console.log("rs:gg");
          (function f86() {
            if (v27 !== undefined) {
              vThis11.Zi();
            } else {
              setTimeout(f86, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f84.prototype.aj = function () {
        var vLN058 = 0;
        for (; vLN058 < this.ni.length; vLN058++) {
          this.ni[vLN058]();
        }
        this.Si();
      };
      f84.prototype.Si = function () {
        var vLN059 = 0;
        for (; vLN059 < this.oi.length; vLN059++) {
          this.oi[vLN059]();
        }
        var v371 = this.pi;
        this.pi = [];
        var vLN060 = 0;
        for (; vLN060 < v371.length; vLN060++) {
          v371[vLN060]();
        }
      };
      f84.prototype.Yi = function (p431, p432) {
        var vThis12 = this;
        var vLN061 = 0;
        var v372 = localStorage.getItem("token__gg");
        if (v372) {
          console.log("Using the stored token:", v372);
          $.get(vAtob + "/pub/wuid/" + v372 + "/login", function (p433) {
            if (p433 && p433.code === 1485 && p433.error === "expired_token") {
              vLN061++;
              console.log("auto login attempt:", vLN061);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Connect : " + vLN061 + "</h2>");
              f87();
            } else {
              f88(p433);
            }
          }).fail(function () {
            f87();
          });
        } else {
          f87();
        }
        function f87() {
          console.log("Fetching a new token...");
          $.get(vAtob + "/pub/wuid/" + p432 + "/login", function (p434) {
            if (p434 && p434.code === 1485 && p434.error === "expired_token") {
              vLN061++;
              console.log("auto login attempt:", vLN061);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Conncet : " + vLN061 + "</h2>");
              f87();
            } else {
              f88(p434);
            }
          }).fail(function () {
            vThis12.Xi();
          });
        }
        function f88(p435) {
          if (p435 && p435.user_data) {
            f102(p435.user_data);
            var v373 = this.ri;
            vThis12.qi = true;
            vThis12.ri = p432;
            vThis12.si = p435.user_data;
            vO4.FB_UserID = p435.user_data.userId;
            vThis12.ti = p431;
            f11(vF15.Oe, vThis12.ti, 60);
            f103();
            for (var vLN062 = 0; vLN062 < vO5.clientesActivos.length; vLN062++) {
              var v374 = vO5.clientesActivos[vLN062].cliente_NOMBRE;
              var v375 = vO5.clientesActivos[vLN062].cliente_ID;
              var v376 = vO5.clientesActivos[vLN062].Client_VisibleSkin;
              var v377 = vO5.clientesActivos[vLN062].Client_VisibleSkin1;
              var v378 = vO5.clientesActivos[vLN062].Client_VisibleSkin2;
              var v379 = vO5.clientesActivos[vLN062].Client_VisibleSkin3;
              var v380 = vO5.clientesActivos[vLN062].Client_VisibleSkin4;
              var v381 = vO5.clientesActivos[vLN062].Client_VisibleSkin5;
              var v382 = vO5.clientesActivos[vLN062].Client_VisibleSkin6;
              var v383 = vO5.clientesActivos[vLN062].Client_VisibleSkin7;
              var v384 = vO5.clientesActivos[vLN062].Client_VisibleSkin8;
              var v385 = vO5.clientesActivos[vLN062].Client_VisibleSkin9;
              var v386 = vO5.clientesActivos[vLN062].Client_VisibleSkin10;
              var v387 = vO5.clientesActivos[vLN062].Client_VisibleSkin11;
              var v388 = vO5.clientesActivos[vLN062].Client_VisibleSkin12;
              var v389 = vO5.clientesActivos[vLN062].Client_VisibleSkin13;
              var v390 = vO5.clientesActivos[vLN062].Client_VisibleSkin14;
              var v391 = vO5.clientesActivos[vLN062].Client_VisibleSkin15;
              var v392 = vO5.clientesActivos[vLN062].Client_VisibleSkin16;
              var v393 = vO5.clientesActivos[vLN062].Client_VisibleSkin17;
              var v394 = vO5.clientesActivos[vLN062].Client_VisibleSkin18;
              var v395 = vO5.clientesActivos[vLN062].Client_VisibleSkin19;
              var v396 = vO5.clientesActivos[vLN062].Client_VisibleSkin20;
              var v397 = vO5.clientesActivos[vLN062].Client_KeyAccecs;
              var v398 = vO5.clientesActivos[vLN062].cliente_DateExpired;
              if (vO4.FB_UserID == 0) {} else if (vO4.FB_UserID == v375) {
                $("#mm-line-top").append("<div class='het-han'> Expiration date : " + v398 + "</div>");
                $("#mm-line-bottom").append("<div class='het-han' style='left: 300px; top: 46px;font-size: 15px;'> Expiration date : " + v398 + "</div>");
                $(".profile-user").append("<div class='het-han'> Expiration date : " + v398 + "</div>");
                $(".profile-user").append("<div class=\"idwormate\"><input type=\"text\" value=\"" + vO4.FB_UserID + "\" style=\"width: 88%; height: 35px; border-radius: 4px; font-size: 18px; /* padding: 0 6px; */ text-align: center; background-color: #fff; color: #0a6928; font-weight: 600; display: block;\"/>\n      <button style=\"padding: 19px; float: right; margin-top: -40px; margin-right: -40px; line-height: 0; font-size: 18px;\" onclick=\"navigator.clipboard.writeText('" + vO4.FB_UserID + "').then(()=> alert('You ID " + vO4.FB_UserID + " copiado! copied!'));\">Copy</button></div>");
                f107();
                f106();
              } else {}
            }
            vO4.loading = false;
            if (v373 !== p432) {
              vThis12.aj();
            } else {
              vThis12.Si();
            }
            localStorage.setItem("token__gg", p432);
          } else {
            vThis12.Xi();
          }
        }
      };
      f84.prototype.Xi = function () {
        this.Wi();
      };
      f84.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f84.prototype._i = function () {
        console.log("lo:gg");
        v27.signOut();
      };
      return f84;
    }();
    var vF43 = function () {
      function f89() {
        this.cj = {};
        this.cj[v402] = [1, 0.5, 0.25, 0.5];
        this.cj[v403] = vF7._b.WHITE;
        this.cj[v404] = [0, 0];
        this.cj[v405] = [0, 0];
        var v399 = vF7.cc.from(v408, v409, this.cj);
        this.zf = new vF7.hc(v407, v399);
      }
      var v400 = "a1_" + f28();
      var v401 = "a2_" + f28();
      var vAtob3 = "translationMatrix";
      var vAtob4 = "projectionMatrix";
      var v402 = "u3_" + f28();
      var v403 = "u4_" + f28();
      var v404 = "u5_" + f28();
      var v405 = "u6_" + f28();
      var v406 = "v1_" + f28();
      var v407 = new vF7.gc().addAttribute(v400, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v401, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v408 = "precision mediump float;attribute vec2 " + v400 + ";attribute vec2 " + v401 + ";uniform mat3 " + vAtob3 + ";uniform mat3 " + vAtob4 + ";varying vec2 " + v406 + ";void main(){" + v406 + "=" + v401 + ";gl_Position=vec4((" + vAtob4 + "*" + vAtob3 + "*vec3(" + v400 + ",1.0)).xy,0.0,1.0);}";
      var v409 = "precision highp float;varying vec2 " + v406 + ";uniform vec4 " + v402 + ";uniform sampler2D " + v403 + ";uniform vec2 " + v404 + ";uniform vec2 " + v405 + ";void main(){vec2 coord=" + v406 + "*" + v404 + "+" + v405 + ";vec4 v_color_mix=" + v402 + ";gl_FragColor=texture2D(" + v403 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f89.prototype.Hf = function (p436, p437, p438, p439) {
        var v410 = this.cj[v402];
        v410[0] = p436;
        v410[1] = p437;
        v410[2] = p438;
        v410[3] = p439;
      };
      f89.prototype.Bf = function (p440) {
        this.cj[v403] = p440;
      };
      f89.prototype.Te = function (p441, p442, p443, p444) {
        this.zf.position.x = p441;
        this.zf.position.y = p442;
        this.zf.scale.x = p443;
        this.zf.scale.y = p444;
        var v411 = this.cj[v404];
        v411[0] = p443 * 0.2520615384615385;
        v411[1] = p444 * 0.4357063736263738;
        var v412 = this.cj[v405];
        v412[0] = p441 * 0.2520615384615385;
        v412[1] = p442 * 0.4357063736263738;
      };
      return f89;
    }();
    var vF44 = function () {
      function f90() {
        this.jh = new vF7.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f90.prototype.kh = function (p445) {
        if (p445 && p445.Hc) {
          this.jh.texture = p445.Hc;
          this.jh.anchor.set(p445.Lh, p445.Mh);
          this.dj = p445.Nh;
          this.ej = p445.Oh;
        }
      };
      f90.prototype.oh = function (p446) {
        this.jh.width = p446 * this.dj;
        this.jh.height = p446 * this.ej;
      };
      f90.prototype.fj = function (p447) {
        this.jh.rotation = p447;
      };
      f90.prototype.nh = function (p448, p449) {
        this.jh.position.set(p448, p449);
      };
      f90.prototype.Mg = function (p450) {
        this.jh.visible = p450;
      };
      f90.prototype.gj = function () {
        return this.jh.visible;
      };
      f90.prototype.qh = function (p451) {
        this.jh.alpha = p451;
      };
      f90.prototype.Mf = function () {
        return this.jh;
      };
      f90.prototype.ih = function () {
        f26(this.jh);
      };
      return f90;
    }();
    var vF45 = function () {
      function f91(p452) {
        this.fb = p452;
        this.Mb = new vF45.Config();
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
      f91.prototype.Kb = function () {
        if (this.pj != null) {
          f26(this.pj.Rf);
        }
        if (this.qj != null) {
          f26(this.qj);
        }
      };
      f91.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f91.prototype.Fg = function (p453) {
        this.Mb = p453;
        this.rj(this.Hb);
      };
      f91.prototype.Mg = function (p454) {
        var v413 = this.Hb;
        this.Hb = p454;
        this.rj(v413);
      };
      f91.prototype.Ig = function (p455) {
        this.M = p455 * 50;
        var vP455 = p455;
        if (p455 > this.fb.cf) {
          vP455 = Math.atan((p455 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v414 = Math.sqrt(Math.pow(vP455 * 5, 0.707106781186548) * 4 + 25);
        var v415 = Math.min(vLN200, Math.max(3, (v414 - 5) * 5 + 1));
        var v416 = this.kj;
        this.Db = (5 + v414 * 0.9) * 0.025;
        this.kj = Math.floor(v415);
        this.ij = v415 - this.kj;
        if (v416 > 0 && v416 < this.kj) {
          var v417 = this.lj[v416 * 2 - 2];
          var v418 = this.lj[v416 * 2 - 1];
          var v419 = this.mj[v416 * 2 - 2];
          var v420 = this.mj[v416 * 2 - 1];
          var v421 = this.nj[v416 * 2 - 2];
          var v422 = this.nj[v416 * 2 - 1];
          for (var vV416 = v416; vV416 < this.kj; vV416++) {
            this.lj[vV416 * 2] = v417;
            this.lj[vV416 * 2 + 1] = v418;
            this.mj[vV416 * 2] = v419;
            this.mj[vV416 * 2 + 1] = v420;
            this.nj[vV416 * 2] = v421;
            this.nj[vV416 * 2 + 1] = v422;
          }
        }
      };
      f91.prototype.Lg = function (p456, p457) {
        this.kj = p457;
        for (var vLN063 = 0; vLN063 < this.kj; vLN063++) {
          this.lj[vLN063 * 2] = this.mj[vLN063 * 2] = this.nj[vLN063 * 2] = p456();
          this.lj[vLN063 * 2 + 1] = this.mj[vLN063 * 2 + 1] = this.nj[vLN063 * 2 + 1] = p456();
        }
      };
      f91.prototype.Kg = function (p458, p459, p460) {
        this.hj = p460;
        for (var vLN064 = 0; vLN064 < this.kj; vLN064++) {
          this.lj[vLN064 * 2] = this.mj[vLN064 * 2];
          this.lj[vLN064 * 2 + 1] = this.mj[vLN064 * 2 + 1];
        }
        var v423 = p458 - this.mj[0];
        var v424 = p459 - this.mj[1];
        this.sj(v423, v424, this.kj, this.mj);
      };
      f91.prototype.sj = function (p461, p462, p463, p464) {
        var v425 = Math.hypot(p461, p462);
        if (!(v425 <= 0)) {
          var v426 = p464[0];
          var vUndefined10 = undefined;
          p464[0] += p461;
          var v427 = p464[1];
          var vUndefined11 = undefined;
          p464[1] += p462;
          var v428 = this.Db / (this.Db + v425);
          var v429 = 1 - v428 * 2;
          for (var vLN12 = 1, v430 = p463 - 1; vLN12 < v430; vLN12++) {
            vUndefined10 = p464[vLN12 * 2];
            p464[vLN12 * 2] = p464[vLN12 * 2 - 2] * v429 + (vUndefined10 + v426) * v428;
            v426 = vUndefined10;
            vUndefined11 = p464[vLN12 * 2 + 1];
            p464[vLN12 * 2 + 1] = p464[vLN12 * 2 - 1] * v429 + (vUndefined11 + v427) * v428;
            v427 = vUndefined11;
          }
          v428 = this.ij * this.Db / (this.ij * this.Db + v425);
          v429 = 1 - v428 * 2;
          p464[p463 * 2 - 2] = p464[p463 * 2 - 4] * v429 + (p464[p463 * 2 - 2] + v426) * v428;
          p464[p463 * 2 - 1] = p464[p463 * 2 - 3] * v429 + (p464[p463 * 2 - 1] + v427) * v428;
        }
      };
      f91.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f91.prototype.Hg = function (p465, p466) {
        var vLN1000000 = 1000000;
        var vP465 = p465;
        var vP466 = p466;
        for (var vLN065 = 0; vLN065 < this.kj; vLN065++) {
          var v431 = this.nj[vLN065 * 2];
          var v432 = this.nj[vLN065 * 2 + 1];
          var v433 = Math.hypot(p465 - v431, p466 - v432);
          if (v433 < vLN1000000) {
            vLN1000000 = v433;
            vP465 = v431;
            vP466 = v432;
          }
        }
        return {
          x: vP465,
          y: vP466,
          distance: vLN1000000
        };
      };
      f91.prototype.vb = function (p467) {
        this.oj = p467;
      };
      f91.prototype.Fb = function (p468, p469) {
        this.Jb = f21(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p468 / 400 * Math.PI) * 0.1 : 1 : 0, p469, 1 / 800);
        this.jj = f21(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p469, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f91.prototype.Gb = function (p470, p471, p472, p473) {
        if (this.Hb && this.Ib) {
          var v434 = Math.pow(0.11112, p471 / 95);
          for (var vLN066 = 0; vLN066 < this.kj; vLN066++) {
            var vF232 = f23(this.lj[vLN066 * 2], this.mj[vLN066 * 2], p472);
            var vF233 = f23(this.lj[vLN066 * 2 + 1], this.mj[vLN066 * 2 + 1], p472);
            this.nj[vLN066 * 2] = f23(vF232, this.nj[vLN066 * 2], v434);
            this.nj[vLN066 * 2 + 1] = f23(vF233, this.nj[vLN066 * 2 + 1], v434);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p470, p471, p473);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f91.prototype.rj = function (p474) {
        if (this.Hb) {
          if (!p474) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f26(this.pj.Rf);
          }
          if (this.qj != null) {
            f26(this.qj);
          }
        }
      };
      f91.prototype.uj = function () {
        var vF96 = f9();
        if (this.pj == null) {
          this.pj = new vF47();
        } else {
          f26(this.pj.Rf);
        }
        this.pj.hh(vF96.o.fb.af, vF96.p.Dc().ed(this.Mb.cg), vF96.p.Dc().dd(this.Mb.dg), vF96.p.Dc().fd(this.Mb.Bg), vF96.p.Dc().gd(this.Mb.Cg), vF96.p.Dc().hd(this.Mb.Dg), vF96.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF46("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          f26(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF96.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f91.Config = function () {
        function f92() {
          this.Lb = 0;
          this.cg = vF21.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f92;
      }();
      return f91;
    }();
    var vF46 = function () {
      return f17(vF7.fc, function (p475, p476, p477) {
        vF7.fc.call(this, p475, p476, p477);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF47 = function () {
      function f93() {
        this.Rf = new vF7.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF48();
        this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN797);
        this.xj[0] = this.yj(0, new vF44(), new vF44());
        for (var vLN13 = 1; vLN13 < vLN797; vLN13++) {
          this.xj[vLN13] = this.yj(vLN13, new vF44(), new vF44());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v435 = Math.PI * 0.1;
      var v436 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v437 = -0.03515625;
      var v438 = -0.0625;
      var vLN05625 = 0.5625;
      var v439 = v436 * 3 + vLN084375;
      var v440 = vLN02578125 - v436 * 3;
      var v441 = v436 + v437;
      var vLN0375 = 0.375;
      var vLN075 = 0.75;
      var v442 = v438 + v438;
      var v443 = v437 * 3 + vLN02578125;
      var v444 = vLN084375 - v437 * 3;
      var v445 = v437 + v436;
      f93.prototype.yj = function (p478, p479, p480) {
        var v446 = new vF49(p479, p480);
        p479.jh.zIndex = vLN0001 * ((vLN797 - p478) * 2 + 1 + 3);
        p480.jh.zIndex = vLN0001 * ((vLN797 - p478) * 2 - 2 + 3);
        return v446;
      };
      f93.prototype.hh = function (p481, p482, p483, p484, p485, p486, p487) {
        var v447 = p483.Zc;
        var v448 = p481 == vO17._e ? p482.bd.$c : p483.$c;
        if (v447.length > 0 && v448.length > 0) {
          for (var vLN067 = 0; vLN067 < this.xj.length; vLN067++) {
            this.xj[vLN067].Nf.kh(v447[vLN067 % v447.length]);
            this.xj[vLN067].Pf.kh(v448[vLN067 % v448.length]);
          }
        }
        this.vj.hh(p484, p485, p486, p487);
      };
      var vF48 = function () {
        var vF176 = f17(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF7.Zb();
          this.Hj = [];
          for (var vLN068 = 0; vLN068 < 4; vLN068++) {
            var v449 = new vF44();
            v449.kh(f9().q.Ph);
            this.Gj.addChild(v449.jh);
            this.Hj.push(v449);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF44();
          this.Jj.kh(f9().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new vF44();
          this.xEmojiType_headshot.kh(f9().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new vF44();
          this.xEmojiType_kill.kh(f9().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new vF44();
          this.guia_mobile.kh(f9().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        vF176.prototype.hh = function (p488, p489, p490, p491) {
          this.Lj(0.002, this.Cj, p488.Zc);
          this.Lj(0.003, this.Dj, p489.Zc);
          this.Lj(0.004, this.Fj, p491.Zc);
          this.Lj(0.005, this.Ej, p490.Zc);
        };
        vF176.prototype.Lj = function (p492, p493, p494) {
          while (p494.length > p493.length) {
            var v450 = new vF44();
            p493.push(v450);
            this.addChild(v450.Mf());
          }
          while (p494.length < p493.length) {
            p493.pop().ih();
          }
          var vP492 = p492;
          for (var vLN069 = 0; vLN069 < p494.length; vLN069++) {
            vP492 += 0.0001;
            var v451 = p493[vLN069];
            v451.kh(p494[vLN069]);
            v451.jh.zIndex = vP492;
          }
        };
        vF176.prototype.mh = function (p495, p496, p497, p498) {
          this.visible = true;
          this.position.set(p495, p496);
          this.rotation = p498;
          for (var vLN070 = 0; vLN070 < this.Cj.length; vLN070++) {
            this.Cj[vLN070].oh(p497);
          }
          for (var vLN071 = 0; vLN071 < this.Dj.length; vLN071++) {
            this.Dj[vLN071].oh(p497);
          }
          for (var vLN072 = 0; vLN072 < this.Ej.length; vLN072++) {
            this.Ej[vLN072].oh(p497);
          }
          for (var vLN073 = 0; vLN073 < this.Fj.length; vLN073++) {
            this.Fj[vLN073].oh(p497);
          }
        };
        vF176.prototype.lh = function () {
          this.visible = false;
        };
        vF176.prototype.Mj = function (p499, p500, p501, p502) {
          this.Gj.visible = true;
          var v452 = p501 / 1000;
          var v453 = 1 / this.Hj.length;
          for (var vLN074 = 0; vLN074 < this.Hj.length; vLN074++) {
            var v454 = 1 - (v452 + v453 * vLN074) % 1;
            this.Hj[vLN074].jh.alpha = 1 - v454;
            this.Hj[vLN074].oh(p500 * (0.5 + v454 * 4.5));
          }
        };
        vF176.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF176.prototype.Nj = function (p503, p504, p505, p506) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f21(this.Jj.jh.alpha, p503.hj ? 0.9 : 0.2, p506, 0.0025);
          this.Jj.oh(p504);
        };
        vF176.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF176.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF176.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF176.prototype.Rx = function (p507, p508, p509, p510) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p508);
        };
        vF176.prototype.Njh = function (p511, p512, p513, p514) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p512);
        };
        vF176.prototype.Njk = function (p515, p516, p517, p518) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p516);
        };
        return vF176;
      }();
      f93.prototype.Oj = function (p519) {
        return this.Aj + this.Bj * Math.sin(p519 * v435 - this.zj);
      };
      f93.prototype.tj = function (p520, p521, p522, p523) {
        var v455 = p520.Db * 2;
        var v456 = p520.nj;
        var v457 = p520.kj;
        var v458 = v457 * 4 - 3;
        var vV458 = v458;
        this.zj = p521 / 400 * Math.PI;
        this.Aj = v455 * 1.5;
        this.Bj = v455 * 0.15 * p520.jj;
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        var vUndefined15 = undefined;
        var vUndefined16 = undefined;
        var vUndefined17 = undefined;
        var vUndefined18 = undefined;
        var vUndefined19 = undefined;
        vUndefined13 = v456[0];
        vUndefined17 = v456[1];
        if (p523(vUndefined13, vUndefined17)) {
          vUndefined14 = v456[2];
          vUndefined18 = v456[3];
          vUndefined15 = v456[4];
          vUndefined19 = v456[5];
          var v459 = Math.atan2(vUndefined19 + vUndefined17 * 2 - vUndefined18 * 3, vUndefined15 + vUndefined13 * 2 - vUndefined14 * 3);
          this.vj.mh(vUndefined13, vUndefined17, v455, v459);
          this.xj[0].mh(vUndefined13, vUndefined17, v455, this.Oj(0), v459);
          this.xj[1].mh(v439 * vUndefined13 + v440 * vUndefined14 + v441 * vUndefined15, v439 * vUndefined17 + v440 * vUndefined18 + v441 * vUndefined19, v455, this.Oj(1), vF49.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN0375 * vUndefined13 + vLN075 * vUndefined14 + v442 * vUndefined15, vLN0375 * vUndefined17 + vLN075 * vUndefined18 + v442 * vUndefined19, v455, this.Oj(2), vF49.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v443 * vUndefined13 + v444 * vUndefined14 + v445 * vUndefined15, v443 * vUndefined17 + v444 * vUndefined18 + v445 * vUndefined19, v455, this.Oj(3), vF49.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN42 = 4;
        for (var vLN2 = 2, v460 = v457 * 2 - 4; vLN2 < v460; vLN2 += 2) {
          vUndefined13 = v456[vLN2];
          vUndefined17 = v456[vLN2 + 1];
          if (p523(vUndefined13, vUndefined17)) {
            vUndefined12 = v456[vLN2 - 2];
            vUndefined16 = v456[vLN2 - 1];
            vUndefined14 = v456[vLN2 + 2];
            vUndefined18 = v456[vLN2 + 3];
            vUndefined15 = v456[vLN2 + 4];
            vUndefined19 = v456[vLN2 + 5];
            this.xj[vLN42].mh(vUndefined13, vUndefined17, v455, this.Oj(vLN42), vF49.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v436 * vUndefined12 + vLN084375 * vUndefined13 + vLN02578125 * vUndefined14 + v437 * vUndefined15, v436 * vUndefined16 + vLN084375 * vUndefined17 + vLN02578125 * vUndefined18 + v437 * vUndefined19, v455, this.Oj(vLN42), vF49.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v438 * vUndefined12 + vLN05625 * vUndefined13 + vLN05625 * vUndefined14 + v438 * vUndefined15, v438 * vUndefined16 + vLN05625 * vUndefined17 + vLN05625 * vUndefined18 + v438 * vUndefined19, v455, this.Oj(vLN42), vF49.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v437 * vUndefined12 + vLN02578125 * vUndefined13 + vLN084375 * vUndefined14 + v436 * vUndefined15, v437 * vUndefined16 + vLN02578125 * vUndefined17 + vLN084375 * vUndefined18 + v436 * vUndefined19, v455, this.Oj(vLN42), vF49.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
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
        vUndefined13 = v456[v457 * 2 - 4];
        vUndefined17 = v456[v457 * 2 - 3];
        if (p523(vUndefined13, vUndefined17)) {
          vUndefined12 = v456[v457 * 2 - 6];
          vUndefined16 = v456[v457 * 2 - 5];
          vUndefined14 = v456[v457 * 2 - 2];
          vUndefined18 = v456[v457 * 2 - 1];
          this.xj[v458 - 5].mh(vUndefined13, vUndefined17, v455, this.Oj(v458 - 5), vF49.angleBetween(this.xj[v458 - 6], this.xj[v458 - 4]));
          this.xj[v458 - 4].mh(v445 * vUndefined12 + v444 * vUndefined13 + v443 * vUndefined14, v445 * vUndefined16 + v444 * vUndefined17 + v443 * vUndefined18, v455, this.Oj(v458 - 4), vF49.angleBetween(this.xj[v458 - 5], this.xj[v458 - 3]));
          this.xj[v458 - 3].mh(v442 * vUndefined12 + vLN075 * vUndefined13 + vLN0375 * vUndefined14, v442 * vUndefined16 + vLN075 * vUndefined17 + vLN0375 * vUndefined18, v455, this.Oj(v458 - 3), vF49.angleBetween(this.xj[v458 - 4], this.xj[v458 - 2]));
          this.xj[v458 - 2].mh(v441 * vUndefined12 + v440 * vUndefined13 + v439 * vUndefined14, v441 * vUndefined16 + v440 * vUndefined17 + v439 * vUndefined18, v455, this.Oj(v458 - 2), vF49.angleBetween(this.xj[v458 - 3], this.xj[v458 - 1]));
          this.xj[v458 - 1].mh(vUndefined14, vUndefined18, v455, this.Oj(v458 - 1), vF49.angleBetween(this.xj[v458 - 2], this.xj[v458 - 1]));
        } else {
          this.xj[v458 - 5].lh();
          this.xj[v458 - 4].lh();
          this.xj[v458 - 3].lh();
          this.xj[v458 - 2].lh();
          this.xj[v458 - 1].lh();
        }
        if (this.wj == 0 && vV458 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV458 == 0) {
          f26(this.vj);
        }
        while (this.wj < vV458) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV458) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var v461 = p520.Ff[vF8.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v461 != null && v461.sc) {
          this.vj.Mj(p520, v455, p521, p522);
        } else {
          this.vj.Ij();
        }
        var v462 = p520.Ff[vF8.VELOCITY_TYPE];
        if (this.xj[0].gj() && v462 != null && v462.sc) {
          this.vj.Nj(p520, v455, p521, p522);
        } else {
          this.vj.Kj();
        }
        ;
        if (vO4.ModeStremeremoj) {} else {
          if (vO4.emoji_headshot && p520 && p520.Mb && p520.Mb.Mb) {
            this.vj.Njh(p520, v455, p521, p522);
          } else {
            this.vj.xzs();
          }
          if (vO4.emoji_kill && p520 && p520.Mb && p520.Mb.Mb) {
            this.vj.Njk(p520, v455, p521, p522);
          } else {
            this.vj.zas();
          }
        }
        ;
        if (vO4.mobile && vO4.arrow && p520 && p520.Mb && p520.Mb.Mb) {
          this.vj.Rx(p520, v455, p521, p522);
        }
      };
      var vF49 = function () {
        function f94(p524, p525) {
          this.Nf = p524;
          this.Nf.Mg(false);
          this.Pf = p525;
          this.Pf.Mg(false);
        }
        f94.prototype.mh = function (p526, p527, p528, p529, p530) {
          this.Nf.Mg(true);
          this.Nf.nh(p526, p527);
          this.Nf.oh(p528);
          this.Nf.fj(p530);
          this.Pf.Mg(true);
          this.Pf.nh(p526, p527);
          this.Pf.oh(p529);
          this.Pf.fj(p530);
        };
        f94.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f94.prototype.gj = function () {
          return this.Nf.gj();
        };
        f94.angleBetween = function (p531, p532) {
          return Math.atan2(p531.Nf.jh.position.y - p532.Nf.jh.position.y, p531.Nf.jh.position.x - p532.Nf.jh.position.x);
        };
        return f94;
      }();
      return f93;
    }();
    var vF50 = function () {
      function f95(p533) {
        this.se = p533;
        this.te = p533.get()[0];
        this.ue = new vF7.ac({
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
        var vThis13 = this;
        f9().p.ca(function () {
          if (f9().p.W()) {
            vThis13.Fb();
          }
        });
      }
      f95.prototype.Fb = function () {
        var vF97 = f9();
        this.Pj.hh(vO17.$e, null, vF97.p.Dc().dd(this.rh), vF97.p.Dc().fd(this.sh), vF97.p.Dc().gd(this.th), vF97.p.Dc().hd(this.uh), vF97.p.Dc().jd(this.vh));
      };
      f95.prototype.Le = function (p534) {
        this.sc = p534;
      };
      f95.prototype.ak = function (p535, p536, p537) {
        this.rh = p535;
        this.Sj = p536;
        this.Xj = p537;
        this.Fb();
      };
      f95.prototype.bk = function (p538, p539, p540) {
        this.sh = p538;
        this.Tj = p539;
        this.Yj = p540;
        this.Fb();
      };
      f95.prototype.ck = function (p541, p542, p543) {
        this.th = p541;
        this.Uj = p542;
        this.Zj = p543;
        this.Fb();
      };
      f95.prototype.dk = function (p544, p545, p546) {
        this.uh = p544;
        this.Vj = p545;
        this.$j = p546;
        this.Fb();
      };
      f95.prototype.ek = function (p547, p548, p549) {
        this.vh = p547;
        this.Wj = p548;
        this._j = p549;
        this.Fb();
      };
      f95.prototype.Ra = function () {
        var v463 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v463;
        this.te.width = v463 * this.Qj;
        this.te.height = v463 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF192 = f19(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != vF192) {
          for (var vVF192 = vF192; vVF192 < this.Pj.xj.length; vVF192++) {
            this.Pj.xj[vVF192].lh();
          }
          while (this.Pj.wj < vF192) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF192) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f95.prototype.Pa = function () {
        if (this.sc) {
          if (f9().p.W) {
            var v464 = Date.now();
            var v465 = v464 / 200;
            var v466 = Math.sin(v465);
            var v467 = this.Ng;
            var v468 = this.Ng * 1.5;
            var v469 = this.Qj - (this.Qj - v467 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v470 = this.Rj * 0.5;
            var vLN076 = 0;
            var vLN077 = 0;
            for (var v471 = -1; v471 < this.Pj.wj; v471++) {
              var vV471 = v471;
              var v472 = Math.cos(vV471 * 1 / 12 * Math.PI - v465) * (1 - Math.pow(16, vV471 * -1 / 12));
              if (v471 >= 0) {
                var v473 = v469 + v467 * -0.5 * vV471;
                var v474 = v470 + v467 * 0.5 * v472;
                var v475 = v467 * 2;
                var v476 = v468 * 2;
                var v477 = Math.atan2(vLN077 - v472, vV471 - vLN076);
                if (v471 == 0) {
                  this.Pj.vj.mh(v473, v474, v475, v477);
                }
                this.Pj.xj[v471].mh(v473, v474, v475, v476, v477);
                var v478 = this.Sj ? this.Xj ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v471].Nf.qh(v478);
                this.Pj.xj[v471].Pf.qh(v478);
              }
              vLN076 = vV471;
              vLN077 = v472;
            }
            for (var vLN078 = 0; vLN078 < this.Pj.vj.Cj.length; vLN078++) {
              var v479 = this.Tj ? this.Yj ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN078].qh(v479);
            }
            for (var vLN079 = 0; vLN079 < this.Pj.vj.Dj.length; vLN079++) {
              var v480 = this.Uj ? this.Zj ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN079].qh(v480);
            }
            for (var vLN080 = 0; vLN080 < this.Pj.vj.Ej.length; vLN080++) {
              var v481 = this.Vj ? this.$j ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN080].qh(v481);
            }
            for (var vLN081 = 0; vLN081 < this.Pj.vj.Fj.length; vLN081++) {
              var v482 = this.Wj ? this._j ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN081].qh(v482);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f95;
    }();
    var vF51 = function () {
      function f96(p550) {
        this.rc = p550;
      }
      f96.fk = $("#game-view");
      f96.gk = $("#results-view");
      f96.hk = $("#main-menu-view");
      f96.ik = $("#popup-view");
      f96.jk = $("#toaster-view");
      f96.kk = $("#loading-view");
      f96.lk = $("#stretch-box");
      f96.mk = $("#game-canvas");
      f96.di = $("#background-canvas");
      f96.nk = $("#social-buttons");
      f96.ok = $("#markup-wrap");
      f96.prototype.a = function () {};
      f96.prototype.ii = function () {};
      f96.prototype.ji = function () {};
      f96.prototype.ei = function () {};
      f96.prototype.Ra = function () {};
      f96.prototype.Pa = function (p551, p552) {};
      return f96;
    }();
    var vF52 = function () {
      function f97(p553, p554, p555, p556, p557, p558) {}
      var v$3 = $("#final-caption");
      var v$4 = $("#final-continue");
      var v$5 = $("#congrats-bg");
      var v$6 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$7 = $("#final-share-fb");
      var v$8 = $("#final-message");
      var v$9 = $("#final-score");
      var v$10 = $("#final-place");
      var v$11 = $("#final-board");
      var vF177 = f17(vF51, function () {
        vF51.call(this, 0);
        var vThis14 = this;
        var vF98 = f9();
        var v483 = vF51.mk.get()[0];
        console.log("sSE=" + v538.qk);
        v$7.toggle(v538.qk);
        v$3.text(f12("index.game.result.title"));
        v$4.text(f12("index.game.result.continue"));
        v$4.click(function () {
          vF98.r.Cd();
          vF98.f.Ma.c();
          vF98.r.G(vF11.AudioState.F);
          vF98.s.I(vF98.s.F);
        });
        $("html").keydown(function (p559) {
          if (p559.keyCode == 32) {
            vThis14.rk = true;
          }
          if (p559.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (p559.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (vO4.KeyCodeRespawn == p559.keyCode) {
            vThis14.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (p560) {
          if (p560.keyCode == 32) {
            vThis14.rk = false;
          }
        });
        v483.addEventListener("touchmove", function (p561) {
          if (!vF2() || !vO4.gamePad.checked) {
            if (p561 = p561 || window.event) {
              p561 = p561.touches[0];
              if (p561.clientX !== undefined) {
                vThis14.sk = Math.atan2(p561.clientY - v483.offsetHeight * 0.5, p561.clientX - v483.offsetWidth * 0.5);
              } else {
                vThis14.sk = Math.atan2(p561.pageY - v483.offsetHeight * 0.5, p561.pageX - v483.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        v483.addEventListener("touchstart", function (p562) {
          if (p562 = p562 || window.event) {
            vThis14.rk = p562.touches.length >= 2;
          }
          p562.preventDefault();
        }, true);
        v483.addEventListener("touchend", function (p563) {
          if (p563 = p563 || window.event) {
            vThis14.rk = p563.touches.length >= 2;
          }
        }, true);
        v483.addEventListener("mousemove", function (p564) {
          if (!v4) {
            if (p564 = p564 || window.event && p564.clientX !== undefined) {
              vThis14.sk = Math.atan2(p564.clientY - v483.offsetHeight * 0.5, p564.clientX - v483.offsetWidth * 0.5);
            }
          }
        }, true);
        v483.addEventListener("mousedown", function (p565) {
          console.log(p565);
          vThis14.rk = true;
        }, true);
        v483.addEventListener("mouseup", function (p566) {
          console.log(p566);
          vThis14.rk = false;
        }, true);
        this.wb = new vF22(vF51.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        vO3.eventoPrincipal = vThis14;
      });
      vF177.prototype.a = function () {};
      vF177.prototype.ii = function () {
        if (this.cb == 0) {
          vF51.fk.stop();
          vF51.fk.fadeIn(500);
          vF51.gk.stop();
          vF51.gk.fadeOut(1);
          vF51.hk.stop();
          vF51.hk.fadeOut(50);
          vF51.ik.stop();
          vF51.ik.fadeOut(50);
          vF51.jk.stop();
          vF51.jk.fadeOut(50);
          vF51.kk.stop();
          vF51.kk.fadeOut(50);
          vF51.lk.stop();
          vF51.lk.fadeOut(1);
          vF51.di.stop();
          vF51.di.fadeOut(50);
          vF14.Le(false);
          vF51.nk.stop();
          vF51.nk.fadeOut(50);
          vF51.ok.stop();
          vF51.ok.fadeOut(50);
        } else {
          vF51.fk.stop();
          vF51.fk.fadeIn(500);
          vF51.gk.stop();
          vF51.gk.fadeIn(500);
          vF51.hk.stop();
          vF51.hk.fadeOut(50);
          vF51.ik.stop();
          vF51.ik.fadeOut(50);
          vF51.jk.stop();
          vF51.jk.fadeOut(50);
          vF51.kk.stop();
          vF51.kk.fadeOut(50);
          vF51.lk.stop();
          vF51.lk.fadeOut(1);
          vF51.di.stop();
          vF51.di.fadeOut(50);
          vF14.Le(false);
          vF51.nk.stop();
          vF51.nk.fadeOut(50);
          vF51.ok.stop();
          vF51.ok.fadeOut(50);
        }
      };
      vF177.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF177.prototype.Fa = function () {
        console.log("re");
        v$5.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$5.fadeIn(500);
        }, 3000);
        v$6.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$6.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      vF177.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f9().r.Gd();
        }
      };
      vF177.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF177.prototype.Pa = function (p567, p568) {
        this.wb.Pa(p567, p568);
      };
      vF177.prototype.Da = function (p569, p570, p571) {
        var vUndefined20 = undefined;
        var vUndefined21 = undefined;
        var vUndefined22 = undefined;
        if (p570 >= 1 && p570 <= 10) {
          vUndefined20 = f12("index.game.result.place.i" + p570);
          vUndefined21 = f12("index.game.result.placeInBoard");
          vUndefined22 = f12("index.game.social.shareResult.messGood").replace("{0}", p571).replace("{1}", p569).replace("{2}", vUndefined20);
        } else {
          vUndefined20 = "";
          vUndefined21 = f12("index.game.result.tryHit");
          vUndefined22 = f12("index.game.social.shareResult.messNorm").replace("{0}", p571).replace("{1}", p569);
        }
        v$8.html(f12("index.game.result.your"));
        v$9.html(p569);
        v$10.html(vUndefined20);
        v$11.html(vUndefined21);
        if (v538.qk) {
          var vF125 = f12("index.game.result.share");
          f12("index.game.social.shareResult.caption");
          v$7.empty().append(f97(vF125, "https://wormate.io", "wormate.io", vUndefined22, vUndefined22, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF177.prototype.T = function () {
        return this.sk;
      };
      vF177.prototype.U = function () {
        return this.rk;
      };
      return vF177;
    }();
    var vF53 = function () {
      var v$12 = $("#loading-worm-a");
      var v$13 = $("#loading-worm-b");
      var v$14 = $("#loading-worm-c");
      var vA14 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF178 = f17(vF51, function () {
        vF51.call(this, 0);
      });
      vF178.prototype.a = function () {};
      vF178.prototype.ii = function () {
        vF51.fk.stop();
        vF51.fk.fadeOut(50);
        vF51.gk.stop();
        vF51.gk.fadeOut(50);
        vF51.hk.stop();
        vF51.hk.fadeOut(50);
        vF51.ik.stop();
        vF51.ik.fadeOut(50);
        vF51.jk.stop();
        vF51.jk.fadeOut(50);
        vF51.kk.stop();
        vF51.kk.fadeIn(500);
        vF51.lk.stop();
        vF51.lk.fadeIn(1);
        vF51.di.stop();
        vF51.di.fadeIn(500);
        vF14.Le(true);
        vF51.nk.stop();
        vF51.nk.fadeOut(50);
        vF51.ok.stop();
        vF51.ok.fadeOut(50);
      };
      vF178.prototype.ji = function () {
        this.tk();
      };
      vF178.prototype.tk = function () {
        v$12.css("background-position", "100% 200%");
        for (var vLN082 = 0; vLN082 < vA14.length; vLN082++) {}
        v$12.css("background-position", vA14[0]);
        v$13.css("background-position", vA14[1]);
        v$14.css("background-position", vA14[2]);
      };
      return vF178;
    }();
    var vF54 = function () {
      $("#mm-event-text");
      var v$15 = $("#mm-skin-canv");
      var v$16 = $("#mm-skin-prev");
      var v$17 = $("#mm-skin-next");
      var v$18 = $("#mm-skin-over");
      var v$19 = $("#mm-skin-over-button-list");
      var v$20 = $("#mm-params-nickname");
      var v$21 = $("#mm-params-game-mode");
      var v$22 = $("#mm-action-buttons");
      var v$23 = $("#mm-action-play");
      var v$24 = $("#mm-action-guest");
      var v$25 = $("#mm-action-login");
      var v$26 = $("#mm-player-info");
      var v$27 = $("#mm-store");
      var v$28 = $("#mm-leaders");
      var v$29 = $("#mm-settings");
      var v$30 = $("#mm-coins-box");
      var v$31 = $("#mm-player-avatar");
      var v$32 = $("#mm-player-username");
      var v$33 = $("#mm-coins-val");
      var v$34 = $("#mm-player-exp-bar");
      var v$35 = $("#mm-player-exp-val");
      var v$36 = $("#mm-player-level");
      var vF179 = f17(vF51, function () {
        vF51.call(this, 1);
        var vF99 = f9();
        this.uk = new vF50(v$15);
        v$21.click(function () {
          vF99.r.Cd();
        });
        v$15.click(function () {
          if (vF99.u.P()) {
            vF99.r.Cd();
            vF99.s.I(vF99.s.$h);
          }
        });
        v$16.click(function () {
          vF99.r.Cd();
          vF99.t.Ah();
        });
        v$17.click(function () {
          vF99.r.Cd();
          vF99.t.zh();
        });
        v$20.keypress(function (p572) {
          if (p572.keyCode == 13) {
            vF99.na();
          }
        });
        v$23.click(function () {
          vF99.r.Cd();
          vF99.na();
        });
        v$24.click(function () {
          vF99.r.Cd();
          vF99.na();
        });
        v$25.click(function () {
          vF99.r.Cd();
          vF99.s.I(vF99.s.Zh);
        });
        v$29.click(function () {
          vF99.r.Cd();
          vF99.s.I(vF99.s.xa);
        });
        v$26.click(function () {
          if (vF99.u.P()) {
            vF99.r.Cd();
            vF99.s.I(vF99.s.Yh);
          }
        });
        v$28.click(function () {
          if (vF99.u.P()) {
            vF99.r.Cd();
            vF99.s.I(vF99.s.Xh);
          }
        });
        v$27.click(function () {
          if (vF99.u.P()) {
            vF99.r.Cd();
            vF99.s.I(vF99.s._h);
          }
        });
        v$30.click(function () {
          if (vF99.u.P()) {
            vF99.r.Cd();
            vF99.s.I(vF99.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("\n                         <div id=\"final-continue1\">Continue(Home)</div>\n                         ");
        $("#final-continue").after("<div id='final-replay'>Replay</div>");
        $("#final-replay").click(function () {
          let vHoisinhnhanh = hoisinhnhanh;
          if (vHoisinhnhanh) {
            anApp.r.Hd();
            anApp.sa(vHoisinhnhanh);
          }
        });
        var vF103 = f10(vF15.va);
        if (vF103 != "ARENA" && vF103 != "TEAM2") {
          vF103 = "ARENA";
        }
        v$21.val(vF103);
        console.log("Load GM: " + vF103);
      });
      vF179.prototype.a = function () {
        var vF910 = f9();
        var vThis15 = this;
        vF910.u.V(function () {
          vF910.s.F.xk();
        });
        vF910.u.Pi(function () {
          if (vF910.u.P()) {
            vF910.t.Bh(vF910.u.Di(), vF37.ia);
            vF910.t.Bh(vF910.u.Ei(), vF37.ja);
            vF910.t.Bh(vF910.u.Fi(), vF37.ka);
            vF910.t.Bh(vF910.u.Gi(), vF37.la);
            vF910.t.Bh(vF910.u.Hi(), vF37.ma);
          } else {
            vF910.t.Bh(vF910.Ga(), vF37.ia);
            vF910.t.Bh(0, vF37.ja);
            vF910.t.Bh(0, vF37.ka);
            vF910.t.Bh(0, vF37.la);
            vF910.t.Bh(0, vF37.ma);
          }
        });
        vF910.u.Pi(function () {
          v$23.toggle(vF910.u.P());
          v$25.toggle(!vF910.u.P());
          v$24.toggle(!vF910.u.P());
          v$28.toggle(vF910.u.P());
          v$27.toggle(vF910.u.P());
          v$30.toggle(vF910.u.P());
          if (vF910.u.P()) {
            v$18.hide();
            v$32.html(vF910.u.wi());
            v$31.attr("src", vF910.u.xi());
            v$33.html(vF910.u.zi());
            v$34.width(vF910.u.Bi() * 100 / vF910.u.Ci() + "%");
            v$35.html(vF910.u.Bi() + " / " + vF910.u.Ci());
            v$36.html(vF910.u.Ai());
            v$20.val(vF910.u.ga());
          } else {
            v$18.toggle(v538.qk && !vF910.Ha());
            v$32.html(v$32.data("guest"));
            v$31.attr("src", vLSimagesguestavatarxma);
            v$33.html("10");
            v$34.width("0");
            v$35.html("");
            v$36.html(1);
            v$20.val(f10(vF15.Aa));
          }
        });
        vF910.t.xh(function () {
          vThis15.uk.ak(vF910.t.ha(vF37.ia), false, false);
          vThis15.uk.bk(vF910.t.ha(vF37.ja), false, false);
          vThis15.uk.ck(vF910.t.ha(vF37.ka), false, false);
          vThis15.uk.dk(vF910.t.ha(vF37.la), false, false);
          vThis15.uk.ek(vF910.t.ha(vF37.ma), false, false);
        });
      };
      vF179.prototype.ii = function () {
        vF51.fk.stop();
        vF51.fk.fadeOut(50);
        vF51.gk.stop();
        vF51.gk.fadeOut(50);
        vF51.hk.stop();
        vF51.hk.fadeIn(500);
        vF51.ik.stop();
        vF51.ik.fadeOut(50);
        vF51.jk.stop();
        vF51.jk.fadeOut(50);
        vF51.kk.stop();
        vF51.kk.fadeOut(50);
        vF51.lk.stop();
        vF51.lk.fadeIn(1);
        vF51.di.stop();
        vF51.di.fadeIn(500);
        vF14.Le(true);
        vF51.nk.stop();
        vF51.nk.fadeIn(500);
        vF51.ok.stop();
        vF51.ok.fadeIn(500);
      };
      vF179.prototype.ji = function () {
        f9().r.Dd();
        this.uk.Le(true);
      };
      vF179.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF179.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF179.prototype.Pa = function (p573, p574) {
        this.uk.Pa();
      };
      vF179.prototype.ga = function () {
        return v$20.val();
      };
      vF179.prototype.D = function () {
        return v$21.val();
      };
      vF179.prototype.xk = function () {
        v$22.show();
      };
      vF179.prototype.vk = function () {
        var v484 = $("#mm-advice-cont").children();
        var vLN083 = 0;
        setInterval(function () {
          v484.eq(vLN083).fadeOut(500, function () {
            if (++vLN083 >= v484.length) {
              vLN083 = 0;
            }
            v484.eq(vLN083).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF179.prototype.wk = function () {
        function f98() {
          vF911.Ka(true);
          setTimeout(function () {
            v$18.hide();
          }, 3000);
        }
        var vF911 = f9();
        if (v538.qk && !vF911.Ha()) {
          v$18.show();
          var vF126 = f12("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f12("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f12("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$19.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF126 + "</span></a>").click(f98));
          v$19.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF126 + "</span></a>").click(f98));
        }
      };
      return vF179;
    }();
    var vF57 = function () {
      var vF1710 = f17(vF51, function () {
        vF51.call(this, 0);
      });
      vF1710.prototype.a = function () {};
      vF1710.prototype.ii = function () {
        vF51.fk.stop();
        vF51.fk.fadeOut(50);
        vF51.gk.stop();
        vF51.gk.fadeOut(50);
        vF51.hk.stop();
        vF51.hk.fadeOut(50);
        vF51.ik.stop();
        vF51.ik.fadeOut(50);
        vF51.jk.stop();
        vF51.jk.fadeOut(50);
        vF51.kk.stop();
        vF51.kk.fadeOut(50);
        vF51.lk.stop();
        vF51.lk.fadeOut(1);
        vF51.di.stop();
        vF51.di.fadeOut(50);
        vF14.Le(false);
        vF51.nk.stop();
        vF51.nk.fadeOut(50);
        vF51.ok.stop();
        vF51.ok.fadeOut(50);
      };
      return vF1710;
    }();
    var vF58 = function () {
      var v$37 = $("#toaster-stack");
      var vF1711 = f17(vF51, function () {
        vF51.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF1711.prototype.a = function () {};
      vF1711.prototype.ii = function () {
        vF51.fk.stop();
        vF51.fk.fadeOut(50);
        vF51.gk.stop();
        vF51.gk.fadeOut(50);
        vF51.hk.stop();
        vF51.hk.fadeOut(50);
        vF51.ik.stop();
        vF51.ik.fadeOut(50);
        vF51.jk.stop();
        vF51.jk.fadeIn(500);
        vF51.kk.stop();
        vF51.kk.fadeOut(50);
        vF51.lk.stop();
        vF51.lk.fadeIn(1);
        vF51.di.stop();
        vF51.di.fadeIn(500);
        vF14.Le(true);
        vF51.nk.stop();
        vF51.nk.fadeOut(50);
        vF51.ok.stop();
        vF51.ok.fadeIn(500);
      };
      vF1711.prototype.ji = function () {
        this.Ak();
      };
      vF1711.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF1711.prototype._ = function (p575) {
        this.yk.unshift(p575);
        setTimeout(function () {
          f9().s.ki();
        }, 0);
      };
      vF1711.prototype.Ti = function (p576) {
        this.yk.push(p576);
        setTimeout(function () {
          f9().s.ki();
        }, 0);
      };
      vF1711.prototype.Ak = function () {
        var vThis16 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f9().s.gi();
            return;
          }
          var v485 = this.yk.shift();
          this.zk = v485;
          var v486 = v485.Bk();
          v486.hide();
          v486.fadeIn(300);
          v$37.append(v486);
          v485.Ck = function () {
            v486.fadeOut(300);
            setTimeout(function () {
              v486.remove();
            }, 300);
            if (vThis16.zk == v485) {
              vThis16.zk = null;
            }
            vThis16.Ak();
          };
          v485.ji();
        }
      };
      return vF1711;
    }();
    var vF61 = function () {
      var v$38 = $("#popup-menu-label");
      var v$39 = $("#popup-menu-coins-box");
      var v$40 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF912 = f9();
        vF912.r.Cd();
        vF912.s.gi();
      });
      v$39.click(function () {
        var vF913 = f9();
        if (vF913.u.P()) {
          vF913.r.Cd();
          vF913.s.I(vF913.s.Wh);
        }
      });
      var vF1712 = f17(vF51, function (p577, p578) {
        vF51.call(this, 1);
        this.ad = p577;
        this.Dk = p578;
      });
      vF1712.prototype.a = function () {
        vF1712.parent.prototype.a.call(this);
        if (!vF1712.Ek) {
          vF1712.Ek = true;
          var vF914 = f9();
          vF914.u.Pi(function () {
            if (vF914.u.P()) {
              v$40.html(vF914.u.zi());
            } else {
              v$40.html("0");
            }
          });
        }
      };
      vF1712.Fk = $("#coins-view");
      vF1712.Gk = $("#leaders-view");
      vF1712.Hk = $("#profile-view");
      vF1712.Ik = $("#settings-view");
      vF1712.Jk = $("#login-view");
      vF1712.Kk = $("#skins-view");
      vF1712.Lk = $("#store-view");
      vF1712.Mk = $("#wear-view");
      vF1712.Nk = $("#withdraw-consent-view");
      vF1712.Ok = $("#delete-account-view");
      vF1712.Pk = $("#please-wait-view");
      vF1712.prototype.ii = function () {
        vF51.fk.stop();
        vF51.fk.fadeOut(200);
        vF51.gk.stop();
        vF51.gk.fadeOut(200);
        vF51.hk.stop();
        vF51.hk.fadeOut(200);
        vF51.ik.stop();
        vF51.ik.fadeIn(200);
        vF51.jk.stop();
        vF51.jk.fadeOut(200);
        vF51.kk.stop();
        vF51.kk.fadeOut(200);
        vF51.nk.stop();
        vF51.nk.fadeIn(200);
        vF51.ok.stop();
        vF51.ok.fadeIn(200);
        v$38.html(this.ad);
        v$39.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF1712.prototype.Rk = function () {};
      vF1712.prototype.Sk = function () {
        vF61.Pk.stop();
        vF61.Pk.fadeIn(300);
      };
      vF1712.prototype.Qk = function () {
        vF61.Pk.stop();
        vF61.Pk.fadeOut(300);
      };
      return vF1712;
    }();
    var vF62 = function () {
      var v$41 = $("#store-buy-coins_125000");
      var v$42 = $("#store-buy-coins_50000");
      var v$43 = $("#store-buy-coins_16000");
      var v$44 = $("#store-buy-coins_7000");
      var v$45 = $("#store-buy-coins_3250");
      var v$46 = $("#store-buy-coins_1250");
      var vF1713 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.coins.tab"), false);
        var vF915 = f9();
        var vThis17 = this;
        v$41.click(function () {
          vF915.r.Cd();
          vThis17.Tk("coins_125000");
        });
        v$42.click(function () {
          vF915.r.Cd();
          vThis17.Tk("coins_50000");
        });
        v$43.click(function () {
          vF915.r.Cd();
          vThis17.Tk("coins_16000");
        });
        v$44.click(function () {
          vF915.r.Cd();
          vThis17.Tk("coins_7000");
        });
        v$45.click(function () {
          vF915.r.Cd();
          vThis17.Tk("coins_3250");
        });
        v$46.click(function () {
          vF915.r.Cd();
          vThis17.Tk("coins_1250");
        });
      });
      vF1713.prototype.a = function () {
        vF1713.parent.prototype.a.call(this);
      };
      vF1713.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeIn(200);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1713.prototype.ji = function () {
        f9().r.Dd();
      };
      vF1713.prototype.Tk = function (p579) {};
      return vF1713;
    }();
    var vF63 = function () {
      var v$47 = $("#highscore-table");
      var v$48 = $("#leaders-button-level");
      var v$49 = $("#leaders-button-highscore");
      var v$50 = $("#leaders-button-kills");
      var vF1714 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.leaders.tab"), true);
        var vF916 = f9();
        var vThis18 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$48,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$49,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$50,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$48.click(function () {
          vF916.r.Cd();
          vThis18._k(vThis18.Vk.Wk);
        });
        v$49.click(function () {
          vF916.r.Cd();
          vThis18._k(vThis18.Vk.Zk);
        });
        v$50.click(function () {
          vF916.r.Cd();
          vThis18._k(vThis18.Vk.$k);
        });
      });
      vF1714.prototype.a = function () {
        vF1714.parent.prototype.a.call(this);
      };
      vF1714.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeIn(200);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1714.prototype.ji = function () {
        f9().r.Dd();
        var vThis19 = this;
        this.Sk();
        $.get(vAtob + "/pub/leaders", function (p580) {
          vThis19.Uk = p580;
          vThis19._k(vThis19.al ?? vThis19.Vk.Wk);
          vThis19.Qk();
        }).done(function () {
          vThis19.Qk();
        });
      };
      vF1714.prototype._k = function (p581) {
        this.al = p581;
        for (var v487 in this.Vk) {
          if (this.Vk.hasOwnProperty(v487)) {
            var v488 = this.Vk[v487];
            v488.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v489 = this.Uk[this.al.Yk], vLS3 = "", vLN084 = 0; vLN084 < v489.length; vLN084++) {
          var v490 = v489[vLN084];
          vLS3 += "<div class=\"table-row\"><span>" + (vLN084 + 1) + "</span><span><img src=\"" + v490.avatarUrl + "\"/></span><span>" + v490.username + "</span><span>" + v490.level + "</span><span>" + v490.highScore + "</span><span>" + v490.headShots + " / " + v490.kills + "</span></div>";
        }
        v$47.empty();
        v$47.append(vLS3);
      };
      return vF1714;
    }();
    var vF64 = function () {
      var v$51 = $("#popup-login-gg");
      var v$52 = $("#popup-login-fb");
      var vF1715 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.login.tab"), false);
        var vF917 = f9();
        var vThis20 = this;
        v$51.click(function () {
          vF917.r.Cd();
          vThis20.Sk();
          vF917.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF917.u.Zi();
        });
        v$52.click(function () {
          vF917.r.Cd();
          vThis20.Sk();
          vF917.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF917.u.Vi();
        });
      });
      vF1715.prototype.a = function () {
        vF1715.parent.prototype.a.call(this);
      };
      vF1715.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeIn(200);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1715.prototype.ji = function () {
        f9().r.Dd();
      };
      return vF1715;
    }();
    var vF65 = function () {
      var v$53 = $("#profile-avatar");
      var v$54 = $("#profile-username");
      var v$55 = $("#profile-experience-bar");
      var v$56 = $("#profile-experience-val");
      var v$57 = $("#profile-level");
      var v$58 = $("#profile-stat-highScore");
      var v$59 = $("#profile-stat-bestSurvivalTime");
      var v$60 = $("#profile-stat-kills");
      var v$61 = $("#profile-stat-headshots");
      var v$62 = $("#profile-stat-gamesPlayed");
      var v$63 = $("#profile-stat-totalTimeSpent");
      var v$64 = $("#profile-stat-registrationDate");
      var vF1716 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.profile.tab"), true);
      });
      vF1716.prototype.a = function () {
        vF1716.parent.prototype.a.call(this);
      };
      vF1716.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeIn(200);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1716.prototype.ji = function () {
        var vF918 = f9();
        vF918.r.Dd();
        var v491 = vF918.u.Oi();
        var v492 = moment([v491.year, v491.month - 1, v491.day]).format("LL");
        v$54.html(vF918.u.wi());
        v$53.attr("src", vF918.u.xi());
        v$55.width(vF918.u.Bi() * 100 / vF918.u.Ci() + "%");
        v$56.html(vF918.u.Bi() + " / " + vF918.u.Ci());
        v$57.html(vF918.u.Ai());
        v$58.html(vF918.u.Ii());
        v$59.html(f14(vF918.u.Ji()));
        v$60.html(vF918.u.Ki());
        v$61.html(vF918.u.Li());
        v$62.html(vF918.u.Mi());
        v$63.html(f14(vF918.u.Ni()));
        v$64.html(v492);
      };
      return vF1716;
    }();
    var vF66 = function () {
      var v$65 = $("#settings-music-enabled-switch");
      var v$66 = $("#settings-sfx-enabled-switch");
      var v$67 = $("#settings-show-names-switch");
      var v$68 = $("#popup-logout");
      var v$69 = $("#popup-logout-container");
      var v$70 = $("#popup-delete-account");
      var v$71 = $("#popup-delete-account-container");
      var v$72 = $("#popup-withdraw-consent");
      var vF1717 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.settings.tab"), false);
        var vThis21 = this;
        var vF919 = f9();
        v$65.click(function () {
          var v493 = !!v$65.prop("checked");
          f11(vF15.Me, v493, 30);
          vF919.r.td(v493);
          vF919.r.Cd();
        });
        v$66.click(function () {
          var v494 = !!v$66.prop("checked");
          f11(vF15.Ne, v494, 30);
          vF919.r.rd(v494);
          vF919.r.Cd();
        });
        v$67.click(function () {
          vF919.r.Cd();
        });
        v$68.click(function () {
          vF919.r.Cd();
          vThis21.Sk();
          setTimeout(function () {
            vThis21.Qk();
          }, 2000);
          vF919.u.Wi();
        });
        v$70.click(function () {
          if (vF919.u.P()) {
            vF919.r.Cd();
            vF919.s.I(vF919.s.Vh);
          } else {
            vF919.r.Hd();
          }
        });
        v$72.click(function () {
          if (vF919.Y()) {
            vF919.r.Cd();
            vF919.s.I(vF919.s.Uh);
          } else {
            vF919.r.Hd();
          }
        });
      });
      vF1717.prototype.a = function () {
        vF1717.parent.prototype.a.call(this);
        var vF920 = f9();
        var vUndefined23 = undefined;
        switch (f10(vF15.Me)) {
          case "false":
            vUndefined23 = false;
            break;
          default:
            vUndefined23 = true;
        }
        v$65.prop("checked", vUndefined23);
        vF920.r.td(vUndefined23);
        var vUndefined24 = undefined;
        switch (f10(vF15.Ne)) {
          case "false":
            vUndefined24 = false;
            break;
          default:
            vUndefined24 = true;
        }
        v$66.prop("checked", vUndefined24);
        vF920.r.rd(vUndefined24);
        var vUndefined25 = undefined;
        switch (f10(vF15.ya)) {
          case "false":
            vUndefined25 = false;
            break;
          default:
            vUndefined25 = true;
        }
        console.log("Load sPN: " + vUndefined25);
        v$67.prop("checked", vUndefined25);
        vF920.u.V(function () {
          v$69.toggle(vF920.u.P());
          v$71.toggle(vF920.u.P());
        });
      };
      vF1717.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeIn(200);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1717.prototype.ji = function () {
        var vF921 = f9();
        vF921.r.Dd();
        if (vF921.Y()) {
          v$72.show();
        } else {
          v$72.hide();
        }
      };
      vF1717.prototype.wa = function () {
        return v$67.prop("checked");
      };
      return vF1717;
    }();
    var vF67 = function () {
      var v$73 = $("#store-view-canv");
      var v$74 = $("#skin-description-text");
      var v$75 = $("#skin-group-description-text");
      var v$76 = $("#store-locked-bar");
      var v$77 = $("#store-locked-bar-text");
      var v$78 = $("#store-buy-button");
      var v$79 = $("#store-item-price");
      var v$80 = $("#store-groups");
      var v$81 = $("#store-view-prev");
      var v$82 = $("#store-view-next");
      var vF1718 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.skins.tab"), true);
        var vThis22 = this;
        var vF922 = f9();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF50(v$73);
        v$78.click(function () {
          vF922.r.Cd();
          vThis22.fl();
        });
        v$81.click(function () {
          vF922.r.Cd();
          vThis22.bl.gl();
        });
        v$82.click(function () {
          vF922.r.Cd();
          vThis22.bl.hl();
        });
      });
      vF1718.prototype.a = function () {
        vF1718.parent.prototype.a.call(this);
        var vThis23 = this;
        var vF923 = f9();
        vF923.p.ca(function () {
          var v495 = vF923.p.Ac();
          if (v495 != null) {
            vThis23.cl = [];
            for (var vLN085 = 0; vLN085 < v495.skinGroupArrayDict.length; vLN085++) {
              vThis23.cl.push(new vF68(vThis23, v495.skinGroupArrayDict[vLN085]));
            }
            vThis23.dl = {};
            for (var vLN086 = 0; vLN086 < v495.skinArrayDict.length; vLN086++) {
              var v496 = v495.skinArrayDict[vLN086];
              vThis23.dl[v496.id] = v496;
            }
          }
        });
        this.il(false);
        vF923.t.xh(function () {
          vThis23.il(false);
        });
      };
      vF1718.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeIn(200);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1718.prototype.ji = function () {
        f9().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF1718.prototype.ei = function () {
        this.el.Le(false);
      };
      vF1718.prototype.Ra = function () {
        this.el.Ra();
      };
      vF1718.prototype.Pa = function (p582, p583) {
        this.el.Pa();
      };
      vF1718.prototype.jl = function () {
        var vThis24 = this;
        var vThis25 = this;
        var vF924 = f9();
        v$80.empty();
        for (var vLN088 = 0; vLN088 < this.cl.length; vLN088++) {
          (function (p584) {
            var v497 = vThis24.cl[p584];
            var v498 = document.createElement("li");
            v$80.append(v498);
            var v$83 = $(v498);
            v$83.html(v497.kl());
            v$83.click(function () {
              vF924.r.Cd();
              vThis25.ll(v497);
            });
            v497.ml = v$83;
          })(vLN088);
        }
        if (this.cl.length > 0) {
          var v499 = vF924.t.ha(vF37.ia);
          for (var vLN088 = 0; vLN088 < this.cl.length; vLN088++) {
            var v500 = this.cl[vLN088];
            for (var v501 = v500.nl.list, vLN089 = 0; vLN089 < v501.length; vLN089++) {
              if (v501[vLN089] == v499) {
                v500.ol = vLN089;
                this.ll(v500);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF1718.prototype.ll = function (p585) {
        if (this.bl != p585) {
          var vF925 = f9();
          this.bl = p585;
          v$80.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$75.html("");
          if (p585.nl != null) {
            var v502 = vF925.p.Ac().textDict[p585.nl.description];
            if (v502 != null) {
              v$75.html(f15(f13(v502)));
            }
          }
          this.il(true);
        }
      };
      vF1718.prototype.pl = function () {
        if (this.bl == null) {
          return vF30.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF1718.prototype.fl = function () {
        var vThis26 = this;
        this.pl().ah(function (p586) {
          vThis26.rl(p586);
        });
      };
      vF1718.prototype.rl = function (p587) {
        var vThis27 = this;
        var vF926 = f9();
        var v503 = this.dl[p587].price;
        if (!(vF926.u.zi() < v503)) {
          this.Sk();
          var v504 = vF926.t.ha(vF37.ia);
          var v505 = vF926.t.ha(vF37.ja);
          var v506 = vF926.t.ha(vF37.ka);
          var v507 = vF926.t.ha(vF37.la);
          var v508 = vF926.t.ha(vF37.ma);
          vF926.u.Ui(p587, vF37.ia, function () {
            vF926.t.Bh(v504, vF37.ia);
            vF926.t.Bh(v505, vF37.ja);
            vF926.t.Bh(v506, vF37.ka);
            vF926.t.Bh(v507, vF37.la);
            vF926.t.Bh(v508, vF37.ma);
            if (vF926.u.Ch(p587, vF37.ia)) {
              vF926.t.Bh(p587, vF37.ia);
            }
            vThis27.Qk();
          });
        }
      };
      vF1718.prototype.il = function (p588) {
        var vF927 = f9();
        this.el.bk(vF927.t.ha(vF37.ja), false, false);
        this.el.ck(vF927.t.ha(vF37.ka), false, false);
        this.el.dk(vF927.t.ha(vF37.la), false, false);
        this.el.ek(vF927.t.ha(vF37.ma), false, false);
        var v509 = this.pl();
        if (v509._g()) {
          var v510 = v509.$g();
          var v511 = this.dl[v510];
          var v512 = false;
          if (vF927.t.Ja(v510, vF37.ia)) {
            v$76.hide();
            v$78.hide();
          } else if (v511 == null || v511.nonbuyable == 1) {
            v512 = true;
            v$76.show();
            v$78.hide();
            v$77.text(f12("index.game.popup.menu.store.locked"));
            if (v511 != null && v511.nonbuyable && v511.nonbuyableCause != null) {
              var v513 = vF927.p.Ac().textDict[v511.nonbuyableCause];
              if (v513 != null) {
                v$77.text(f13(v513));
              }
            }
          } else {
            v$76.hide();
            v$78.show();
            v$79.html(v511.price);
          }
          v$74.html("");
          if (v511 != null && v511.description != null) {
            var v514 = vF927.p.Ac().textDict[v511.description];
            if (v514 != null) {
              v$74.html(f15(f13(v514)));
            }
          }
          v$.html(v511.id);
          this.el.ak(v510, true, v512);
          if (p588) {
            vF927.t.Bh(v510, vF37.ia);
          }
        }
      };
      var vF68 = function () {
        function f99(p589, p590) {
          this.sl = p589;
          this.ol = 0;
          this.nl = p590;
        }
        f99.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f99.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f99.prototype.kl = function () {
          let vF132 = f13(this.nl.name);
          if (this.nl.img) {
            var vLSimgSrc = "<img src=\"";
            vLSimgSrc = vLSimgSrc + vLSHttpshaylamdaycom + "/images/paths/" + this.nl.img;
            vF132 = vLSimgSrc = vLSimgSrc + "\" height=\"43\" width=\"220\" />";
          }
          return vF132;
        };
        f99.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF30.Yg();
          } else {
            return vF30.Zg(this.nl.list[this.ol]);
          }
        };
        return f99;
      }();
      return vF1718;
    }();
    var vF69 = function () {
      var v$84 = $("#store-go-coins-button");
      var v$85 = $("#store-go-skins-button");
      var v$86 = $("#store-go-wear-button");
      var vF1719 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.store.tab"), true);
        var vF928 = f9();
        v$84.click(function () {
          vF928.r.Cd();
          vF928.s.I(vF928.s.Wh);
        });
        v$85.click(function () {
          vF928.r.Cd();
          vF928.s.I(vF928.s.$h);
        });
        v$86.click(function () {
          vF928.r.Cd();
          vF928.s.I(vF928.s.ai);
        });
      });
      vF1719.prototype.a = function () {
        vF1719.parent.prototype.a.call(this);
      };
      vF1719.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeIn(200);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1719.prototype.ji = function () {
        f9().r.Dd();
      };
      return vF1719;
    }();
    var vF70 = function () {
      var v$87 = $("#wear-view-canv");
      var v$88 = $("#wear-description-text");
      var v$89 = $("#wear-locked-bar");
      var v$90 = $("#wear-locked-bar-text");
      var v$91 = $("#wear-buy-button");
      var v$92 = $("#wear-item-price");
      var v$93 = $("#wear-eyes-button");
      var v$94 = $("#wear-mouths-button");
      var v$95 = $("#wear-glasses-button");
      var v$96 = $("#wear-hats-button");
      var v$97 = $("#wear-tint-chooser");
      var v$98 = $("#wear-view-prev");
      var v$99 = $("#wear-view-next");
      var vF1720 = f17(vF61, function () {
        var vThis28 = this;
        vF61.call(this, f12("index.game.popup.menu.wear.tab"), true);
        var vF929 = f9();
        var vThis29 = this;
        this.tl = [];
        this.ja = new vF71(this, vF37.ja, v$93);
        this.ka = new vF71(this, vF37.ka, v$94);
        this.la = new vF71(this, vF37.la, v$95);
        this.ma = new vF71(this, vF37.ma, v$96);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF50(v$87);
        v$91.click(function () {
          vF929.r.Cd();
          vThis29.Bl();
        });
        v$98.click(function () {
          vF929.r.Cd();
          vThis29.ul.Cl();
        });
        v$99.click(function () {
          vF929.r.Cd();
          vThis29.ul.Dl();
        });
        v$93.click(function () {
          vF929.r.Cd();
          vThis29.El(vThis28.ja);
        });
        v$94.click(function () {
          vF929.r.Cd();
          vThis29.El(vThis28.ka);
        });
        v$95.click(function () {
          vF929.r.Cd();
          vThis29.El(vThis28.la);
        });
        v$96.click(function () {
          vF929.r.Cd();
          vThis29.El(vThis28.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF1720.prototype.a = function () {
        vF1720.parent.prototype.a.call(this);
        var vF930 = f9();
        var vThis30 = this;
        vF930.p.ca(function () {
          var v515 = vF930.p.Ac();
          if (v515 != null) {
            vThis30.vl = v515.eyesDict;
            vThis30.wl = v515.mouthDict;
            vThis30.xl = v515.glassesDict;
            vThis30.yl = v515.hatDict;
            vThis30.zl = v515.colorDict;
            vThis30.ja.Fl(v515.eyesVariantArray);
            vThis30.ja.Gl(vThis30.vl);
            vThis30.ka.Fl(v515.mouthVariantArray);
            vThis30.ka.Gl(vThis30.wl);
            vThis30.la.Fl(v515.glassesVariantArray);
            vThis30.la.Gl(vThis30.xl);
            vThis30.ma.Fl(v515.hatVariantArray);
            vThis30.ma.Gl(vThis30.yl);
          }
        });
        this.il(false);
        vF930.t.xh(function () {
          vThis30.il(false);
        });
      };
      vF1720.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeIn(200);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1720.prototype.ji = function () {
        f9().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF1720.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF1720.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF1720.prototype.Pa = function (p591, p592) {
        this.Al.Pa();
      };
      vF1720.prototype.El = function (p593) {
        this.ul = p593;
        for (var vLN090 = 0; vLN090 < this.tl.length; vLN090++) {
          this.tl[vLN090].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF1720.prototype.Hl = function () {
        if (this.ul == null) {
          return vF30.Yg();
        } else {
          return vF30.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      vF1720.prototype.Bl = function () {
        var vThis31 = this;
        this.Hl().ah(function (p594) {
          vThis31.Ui(p594.Lb, p594.rc);
        });
      };
      vF1720.prototype.Ui = function (p595, p596) {
        var vThis32 = this;
        var vF931 = f9();
        var vUndefined26 = undefined;
        switch (p596) {
          case vF37.ja:
            vUndefined26 = this.vl[p595].price;
            break;
          case vF37.ka:
            vUndefined26 = this.wl[p595].price;
            break;
          case vF37.la:
            vUndefined26 = this.xl[p595].price;
            break;
          case vF37.ma:
            vUndefined26 = this.yl[p595].price;
            break;
          default:
            return;
        }
        if (!(vF931.u.zi() < vUndefined26)) {
          this.Sk();
          var v516 = vF931.t.ha(vF37.ia);
          var v517 = vF931.t.ha(vF37.ja);
          var v518 = vF931.t.ha(vF37.ka);
          var v519 = vF931.t.ha(vF37.la);
          var v520 = vF931.t.ha(vF37.ma);
          vF931.u.Ui(p595, p596, function () {
            vF931.t.Bh(v516, vF37.ia);
            vF931.t.Bh(v517, vF37.ja);
            vF931.t.Bh(v518, vF37.ka);
            vF931.t.Bh(v519, vF37.la);
            vF931.t.Bh(v520, vF37.ma);
            if (vF931.u.Ch(p595, p596)) {
              vF931.t.Bh(p595, p596);
            }
            vThis32.Qk();
          });
        }
      };
      vF1720.prototype.Il = function (p597, p598) {
        switch (p598) {
          case vF37.ja:
            return this.vl[p597];
          case vF37.ka:
            return this.wl[p597];
          case vF37.la:
            return this.xl[p597];
          case vF37.ma:
            return this.yl[p597];
        }
        return null;
      };
      vF1720.prototype.il = function (p599) {
        var vF932 = f9();
        this.Al.ak(vF932.t.ha(vF37.ia), false, false);
        this.Al.bk(vF932.t.ha(vF37.ja), false, false);
        this.Al.ck(vF932.t.ha(vF37.ka), false, false);
        this.Al.dk(vF932.t.ha(vF37.la), false, false);
        this.Al.ek(vF932.t.ha(vF37.ma), false, false);
        var v521 = this.Hl();
        if (v521._g()) {
          var v522 = v521.$g();
          var v523 = this.Il(v522.Lb, v522.rc);
          var v524 = false;
          if (vF932.t.Ja(v522.Lb, v522.rc)) {
            v$89.hide();
            v$91.hide();
          } else if (v523 == null || v523.nonbuyable == 1) {
            v524 = true;
            v$89.show();
            v$91.hide();
            v$90.text(f12("index.game.popup.menu.store.locked"));
            if (v523 != null && v523.nonbuyable && v523.nonbuyableCause != null) {
              var v525 = vF932.p.Ac().textDict[v523.nonbuyableCause];
              if (v525 != null) {
                v$90.text(f13(v525));
              }
            }
          } else {
            v$89.hide();
            v$91.show();
            v$92.html(v523.price);
          }
          v$88.html("");
          if (v523 != null && v523.description != null) {
            var v526 = vF932.p.Ac().textDict[v523.description];
            if (v526 != null) {
              v$88.html(f15(f13(v526)));
            }
          }
          switch (v522.rc) {
            case vF37.ja:
              this.Al.bk(v522.Lb, true, v524);
              break;
            case vF37.ka:
              this.Al.ck(v522.Lb, true, v524);
              break;
            case vF37.la:
              this.Al.dk(v522.Lb, true, v524);
              break;
            case vF37.ma:
              this.Al.ek(v522.Lb, true, v524);
          }
          if (p599) {
            vF932.t.Bh(v522.Lb, v522.rc);
          }
        }
      };
      var vF71 = function () {
        function f100(p600, p601, p602) {
          this.sl = p600;
          this.rc = p601;
          this.Xk = p602;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f100.prototype.Fl = function (p603) {
          this.Kl = p603;
        };
        f100.prototype.Gl = function (p604) {
          this.Jl = p604;
        };
        f100.prototype.ii = function () {
          var vF933 = f9();
          var v527 = vF933.t.ha(this.rc);
          for (var vLN091 = 0; vLN091 < this.Kl.length; vLN091++) {
            for (var vLN092 = 0; vLN092 < this.Kl[vLN091].length; vLN092++) {
              if (this.Kl[vLN091][vLN092] == v527) {
                this.Nl(vLN091);
                this.Ol(vLN092);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f100.prototype.Cl = function () {
          var v528 = this.Ll - 1;
          if (v528 < 0) {
            v528 = this.Kl.length - 1;
          }
          this.Nl(v528);
          this.Ol(this.Ml % this.Kl[v528].length);
        };
        f100.prototype.Dl = function () {
          var v529 = this.Ll + 1;
          if (v529 >= this.Kl.length) {
            v529 = 0;
          }
          this.Nl(v529);
          this.Ol(this.Ml % this.Kl[v529].length);
        };
        f100.prototype.Nl = function (p605) {
          var vThis33 = this;
          if (!(p605 < 0) && !(p605 >= this.Kl.length)) {
            this.Ll = p605;
            v$97.empty();
            var v530 = this.Kl[this.Ll];
            if (v530.length > 1) {
              for (var vLN093 = 0; vLN093 < v530.length; vLN093++) {
                (function (p606) {
                  var v531 = v530[p606];
                  var v532 = vThis33.Jl[v531];
                  var v533 = "#" + vThis33.sl.zl[v532.prime];
                  var v$100 = $("<div style=\"border-color:" + v533 + "\"></div>");
                  v$100.click(function () {
                    f9().r.Cd();
                    vThis33.Ol(p606);
                  });
                  v$97.append(v$100);
                })(vLN093);
              }
            }
          }
        };
        f100.prototype.Ol = function (p607) {
          if (!(p607 < 0) && !(p607 >= this.Kl[this.Ll].length)) {
            this.Ml = p607;
            v$97.children().css("background-color", "transparent");
            var v534 = v$97.children(":nth-child(" + (1 + p607) + ")");
            v534.css("background-color", v534.css("border-color"));
            this.sl.il(true);
          }
        };
        f100.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f100;
      }();
      return vF1720;
    }();
    var vF74 = function () {
      var v$101 = $("#withdraw-consent-yes");
      var v$102 = $("#withdraw-consent-no");
      var vF1721 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.consent.tab"), false);
        var vF934 = f9();
        v$101.click(function () {
          vF934.r.Cd();
          if (vF934.Y()) {
            vF934.s.I(vF934.s.F);
            vF934.$(false, true);
            vF934.s.aa._(new vF79());
          } else {
            vF934.s.gi();
          }
        });
        v$102.click(function () {
          vF934.r.Cd();
          vF934.s.gi();
        });
      });
      vF1721.prototype.a = function () {
        vF1721.parent.prototype.a.call(this);
      };
      vF1721.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeIn(200);
        vF61.Ok.stop();
        vF61.Ok.fadeOut(50);
      };
      vF1721.prototype.ji = function () {
        f9().r.Dd();
      };
      return vF1721;
    }();
    var vF75 = function () {
      var v$103 = $("#delete-account-timer");
      var v$104 = $("#delete-account-yes");
      var v$105 = $("#delete-account-no");
      var vF1722 = f17(vF61, function () {
        vF61.call(this, f12("index.game.popup.menu.delete.tab"), false);
        var vF935 = f9();
        v$104.click(function () {
          vF935.r.Cd();
          if (vF935.u.P()) {
            vF935.u.bj();
            vF935.u.Wi();
          } else {
            vF935.s.gi();
          }
        });
        v$105.click(function () {
          vF935.r.Cd();
          vF935.s.gi();
        });
        this.Pl = [];
      });
      vF1722.prototype.a = function () {
        vF1722.parent.prototype.a.call(this);
      };
      vF1722.prototype.Rk = function () {
        vF61.Fk.stop();
        vF61.Fk.fadeOut(50);
        vF61.Gk.stop();
        vF61.Gk.fadeOut(50);
        vF61.Hk.stop();
        vF61.Hk.fadeOut(50);
        vF61.Jk.stop();
        vF61.Jk.fadeOut(50);
        vF61.Ik.stop();
        vF61.Ik.fadeOut(50);
        vF61.Kk.stop();
        vF61.Kk.fadeOut(50);
        vF61.Lk.stop();
        vF61.Lk.fadeOut(50);
        vF61.Mk.stop();
        vF61.Mk.fadeOut(50);
        vF61.Nk.stop();
        vF61.Nk.fadeOut(50);
        vF61.Ok.stop();
        vF61.Ok.fadeIn(200);
      };
      vF1722.prototype.ji = function () {
        f9().r.Hd();
        v$104.stop();
        v$104.hide();
        v$103.stop();
        v$103.show();
        v$103.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$103.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$103.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$103.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$103.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$103.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$103.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$103.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$103.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$103.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$103.hide();
          v$104.fadeIn(300);
        }, 10000);
      };
      vF1722.prototype.Rl = function (p608, p609) {
        var vSetTimeout2 = setTimeout(p608, p609);
        this.Pl.push(vSetTimeout2);
      };
      vF1722.prototype.Ql = function () {
        for (var vLN094 = 0; vLN094 < this.Pl.length; vLN094++) {
          clearTimeout(this.Pl[vLN094]);
        }
        this.Pl = [];
      };
      return vF1722;
    }();
    var vF76 = function () {
      function f101() {
        this.Ck = function () {};
      }
      f101.prototype.Bk = function () {};
      f101.prototype.ji = function () {};
      return f101;
    }();
    var vF77 = function () {
      var vF1723 = f17(vF76, function (p610) {
        vF76.call(this);
        var v535 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v535 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p610 + "</div>    <div class=\"toaster-coins-close\">" + f12("index.game.toaster.continue") + "</div></div>");
        var vThis34 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f9().r.Cd();
          vThis34.Ck();
        });
      });
      vF1723.prototype.Bk = function () {
        return this.Sl;
      };
      vF1723.prototype.ji = function () {
        f9().r.Fd();
      };
      return vF1723;
    }();
    var vF78 = function () {
      var vF1724 = f17(vF76, function (p611) {
        vF76.call(this);
        var v536 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v536 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p611 + "</div>    <div class=\"toaster-levelup-text\">" + f12("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f12("index.game.toaster.continue") + "</div></div>");
        var vThis35 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f9().r.Cd();
          vThis35.Ck();
        });
      });
      vF1724.prototype.Bk = function () {
        return this.Sl;
      };
      vF1724.prototype.ji = function () {
        f9().r.Ed();
      };
      return vF1724;
    }();
    var vF79 = function () {
      var vF1725 = f17(vF76, function () {
        vF76.call(this);
        var vThis36 = this;
        var vF936 = f9();
        var v537 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v537 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSHttpswormateioimages + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f12("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f12("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f12("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF936.r.Cd();
          if (vF936.Y()) {
            vF936.$(true, true);
          }
          vThis36.Ck();
        });
      });
      vF1725.prototype.Bk = function () {
        return this.Sl;
      };
      vF1725.prototype.ji = function () {
        var vThis37 = this;
        var vF937 = f9();
        if (vF937.Y() && !vF937.Z()) {
          vF937.r.Hd();
          setTimeout(function () {
            vThis37.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis37.Ck();
          }, 0);
        }
      };
      return vF1725;
    }();
    var vO18 = {};
    vO18.main = {
      Ma: f33("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f33("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f30(),
      e: 4,
      oa: false,
      qk: true
    };
    vO18.miniclip = {
      Ma: f33("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f33("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f30(),
      e: 4,
      oa: false,
      qk: false
    };
    var v538 = vO18[window.ENV];
    v538 ||= vO18.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p612) {
      p612.preventDefault();
      p612.stopPropagation();
      return false;
    });
    f16("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f16("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        v27 = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined2 = f34();
    vUndefined2.v();
    if (vF()) {
      f16("https://haylamday.com/js/joy.min.js", "mobileconfig", function () {
        vF80();
      });
    }
    ;
    let vF80 = function () {
      $("#game-canvas").after("<div id=\"key-container\"><div class=\"key\">Q</div></div>\n        <div id='zoom-container'>\n        \n                                 <input id=\"zoom-slider\" type=\"range\" min=\"10\" max=\"100\" value=\"70\" step=\"1\">\n  <div id=\"zoom-percentage\">50%</div>\n  \n                                         </div>\n               \n                                         \n                                         \n                                         \n                                         ");
    };
    window.addEventListener("keydown", function (p613) {
      console.log("event.keyCode " + p613.keyCode);
      p613 = p613.which || p613.keyCode || 0;
      if (p613 !== 113 && window.keyMove !== p613 || !v5 || v4) {
        clearInterval(v4);
        v4 = null;
      } else {
        let v539 = vO3.eventoPrincipal.sk = 0;
        p613 = window.tuNewScore;
        v4 = setInterval(function () {
          let vParseFloat = parseFloat(vO3.eventoPrincipal.sk);
          vO3.eventoPrincipal.sk = (vParseFloat >= Math.PI ? -vParseFloat : vParseFloat) + (v539 === 20 ? 0 : Math.PI / 20);
          v539++;
        }, 120 + (p613 >= 100000 ? 5 : p613 >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(vO4));
    }, false);
    let vA15 = [{
      nombre: "chuot 01",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_01.cur"
    }, {
      nombre: "chuot 02",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_02.cur"
    }, {
      nombre: "chuot 03",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_03.cur"
    }, {
      nombre: "chuot 04",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_04.cur"
    }, {
      nombre: "chuot 05",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_05.cur"
    }, {
      nombre: "chuot 06",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_06.cur"
    }, {
      nombre: "chuot 07",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_07.cur"
    }, {
      nombre: "chuot 08",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_08.cur"
    }, {
      nombre: "chuot 09",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_09.cur"
    }, {
      nombre: "chuot 10",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_10.cur"
    }, {
      nombre: "chuot 11",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_11.cur"
    }, {
      nombre: "chuot 12",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_12.cur"
    }, {
      nombre: "chuot 13",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_13.cur"
    }, {
      nombre: "chuot 14",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_14.cur"
    }, {
      nombre: "chuot 15",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_15.cur"
    }, {
      nombre: "chuot 16",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_16.cur"
    }, {
      nombre: "chuot 17",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_17.cur"
    }, {
      nombre: "chuot 18",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_18.cur"
    }, {
      nombre: "chuot 19",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_19.cur"
    }, {
      nombre: "chuot 20",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_20.cur"
    }, {
      nombre: "chuot 21",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_21.cur"
    }, {
      nombre: "chuot 22",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_22.cur"
    }, {
      nombre: "chuot 23",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_23.cur"
    }, {
      nombre: "chuot 24",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_24.cur"
    }, {
      nombre: "chuot 25",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_25.cur"
    }, {
      nombre: "chuot 26",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_26.cur"
    }, {
      nombre: "chuot 27",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_27.cur"
    }, {
      nombre: "chuot 28",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_28.cur"
    }, {
      nombre: "chuot 29",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_29.cur"
    }, {
      nombre: "chuot 30",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_30.cur"
    }, {
      nombre: "chuot 31",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_31.cur"
    }, {
      nombre: "chuot 32",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_32.cur"
    }, {
      nombre: "chuot 33",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_33.cur"
    }, {
      nombre: "chuot 34",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_34.cur"
    }, {
      nombre: "chuot 35",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_35.cur"
    }, {
      nombre: "chuot 36",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_36.cur"
    }, {
      nombre: "chuot 37",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_37.cur"
    }, {
      nombre: "chuot 38",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_38.cur"
    }, {
      nombre: "chuot 39",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_39.cur"
    }, {
      nombre: "chuot 40",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_40.cur"
    }, {
      nombre: "chuot 41",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_41.cur"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }];
    let vA16 = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/3cxXwZ6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/qAO9LgC.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }, {
      nombre: "Sky 1",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_1.png"
    }, {
      nombre: "Sky 2",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_2.png"
    }, {
      nombre: "Sky 3",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_3.png"
    }, {
      nombre: "Sky 4",
      url: "https://asserts.wormworld.io/backgrounds/bg_sky_4.png"
    }];
    vO4.loading = true;
    var vLS4 = "";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "<div id=\"wormcerca\">";
    vLS4 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    vLS4 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    vLS4 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    vLS4 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    vLS4 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    vLS4 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    vLS4 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    vLS4 += "</div>";
    vLS4 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    vLS4 += "\n      \n      \n        \n        \n        <input style=\"display:none\" id=\"zoom-slider\" type=\"range\" min=\"0\" max=\"100\" value=\"50\" step=\"1\">\n        <div style=\"display:none\" class=\"key\">Q</div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 23px;\"></i></button>\n        \n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(vLS4);
    function f102(p614) {
      if (vO4.PropertyManager) {
        p614.skinId = vO4.PropertyManager.rh;
        p614.eyesId = vO4.PropertyManager.sh;
        p614.mouthId = vO4.PropertyManager.th;
        p614.glassesId = vO4.PropertyManager.uh;
        p614.hatId = vO4.PropertyManager.vh;
      }
    }
    function f103() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><a href=\"https://www.facebook.com/WormateFriendsConnect\">â¤ï¸ Wormate Friends Connect 2025 â¤ï¸</a></div>");
      $(".mm-merchant-cont").replaceWith("<div class='youid'><button style=\"float: right;position: relative;min-width: 95px;background:#ff0000;height: 50px;\" onclick=\"navigator.clipboard.writeText('" + vO4.FB_UserID + "').then(()=> alert('You ID " + vO4.FB_UserID + " copiado! copied!'));\">YOUR ID</button></div>");
      $(".column-left").append("<div class='contact'><i class='fa fa-phone'></i> Zalo, Whatapp : 0924623650</div>");
      $("#loa831pibur0w4gv").replaceWith("\n           \n           \n           \n           <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n  \n    <div class=\"label\" id=\"titleSetings\">Notification</div>\n    <div class=\"bao-list1\">\n      \n      <input type=\"text\" value=\"" + vO4.FB_UserID + "\" style=\"width: 85%;height: 23px;border-radius: 4px;font-size: 12px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\"/>\n      <button style=\"height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;\" onclick=\"navigator.clipboard.writeText('" + vO4.FB_UserID + "').then(()=> alert('You ID " + vO4.FB_UserID + " copiado! copied!'));\">Copy</button>\n      <center>\n        <div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated</a> </div>\n      </center>\n     <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a> </div>\n      \n    \n</div>");
      var v540 = document.getElementById("settingBtn");
      var v541 = document.getElementById("settingContent");
      function f104() {
        var v542 = window.getComputedStyle(v541);
        var v543 = v542.getPropertyValue("display");
        if (v543 === "none") {
          v541.style.display = "block";
        } else {
          v541.style.display = "none";
        }
      }
      v540.addEventListener("click", f104);
      v540.addEventListener("touchstart", function (p615) {
        p615.preventDefault();
        f104();
      });
      function f105() {
        const v544 = new KeyboardEvent("keydown", {
          key: "q",
          code: "KeyQ",
          keyCode: 81,
          charCode: 0,
          which: 81,
          bubbles: true
        });
        document.dispatchEvent(v544);
      }
      const v545 = document.querySelector(".key");
      v545.addEventListener("click", f105);
      v545.addEventListener("touchstart", p616 => {
        p616.preventDefault();
        f105();
      });
      $("#PortionSize").on("input", function () {
        vO4.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO4.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO4.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO4.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO4.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO4.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO4.FoodSize = $(this).val();
        localStorage.ComidaSize = vO4.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO4.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO4.FoodShadow;
      });
      $("#mm-advice-cont").html("\n            \n            \n            \n            <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr 1fr;gap: 8.5px;\">\n            \n            \n    <input type=\"button\" value=\"F.SCREEN\" class=\"fullscreen_button\">\n    \n    \n    <input type=\"button\" value=\"RESPAWN\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n    \n    <input type=\"button\" value=\"SKINS LAB\" onclick=\"window.location.href='https://skinlab.haylamday.com/'\" class=\"fullscreen_contact\">\n    \n    <input type=\"button\" value=\"CONTACT\" onclick=\"window.location.href='https://thanhtoan.vuonghiep.com'\" class=\"fullscreen_contact\">\n    \n    \n    \n    </div>\n    \n    \n\n <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr;gap: 10px;margin-top: 8px;\">\n    <a href=\"https://www.youtube.com/@NonaMilano\" target=\"_blank\">\n      <img style=\"width:100%\" src=\"https://haylamday.com/images/hiep_img/nona.png\" alt=\"nona\"/>\n    </a>\n    <a href=\"https://thanhtoan.vuonghiep.com\" target=\"_blank\">\n      <img style=\"width:100%\" src=\"https://i.imgur.com/l1fWELC.png\" alt=\"wfc\"/>\n    </a>\n    </div>\n    \n    ");
      $(".mm-merchant-cont").html("\n ");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#hoisinh").click(function () {
        let vHoisinhnhanh2 = hoisinhnhanh;
        if (vHoisinhnhanh2) {
          anApp.r.Hd();
          anApp.sa(vHoisinhnhanh2);
        }
      });
      $(".mm-merchant").replaceWith("");
      $(".description-text").replaceWith("\n  <div class=\"description-text\">\n  <div class=\"title-wormate-friends-connect\" style=\"position: absolute; top: 0; z-index: 1; width: 95.5%;margin-top: 10px;\">\n<img src=\"https://i.imgur.com/FVK3Q8c.png\" width=\"20\" align=\"center\" alt=\"\">Wormate Friends Connect</div>\n  <div class=\"description-text-hiep\">\n  <ul class=\"ui-tabs-nav\">\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n      <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n      <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n      <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n      <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n      <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n      <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n      <a> <span class=\"flag sg\" value=\"https://i.imgur.com/bT3xWqF.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n      <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n      <a> <span class=\"flag au\" value=\"https://i.imgur.com/X0co8Ao.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n      <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n    </li>\n  </ul>\n  <div class=\"gachngang\"></div>\n    <div id='mapsv'><div class='tensv'>Name</div><div class='valusv'>Region</div><div class='onlinesv'>On/Off</div><div class='img-teamsv'>Streamer</div></div>\n    \n    <div class=\"gachngang\"></div>\n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display: none;\"></div>\n      <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n      <div class=\"servers-canada\" style=\"display: none;\"></div>\n      <div class=\"servers-germania\" style=\"display: none;\"></div>\n      <div class=\"servers-francia\" style=\"display: none;\"></div>\n      <div class=\"servers-singapur\" style=\"display: none;\"></div>\n      <div class=\"servers-japon\" style=\"display: none;\"></div>\n      <div class=\"servers-australia\" style=\"display: none;\"></div>\n      <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n    </div>\n  </div>\n            \n             \n                    ");
      $(".ui-tab").on("click", f119);
      $(".flag").click(function () {
        let v546 = $(this).attr("value");
        vO4.flag = v546;
        vO7.containerImgS.texture = vO7.onclickServer;
        retundFlagError();
        console.log(v546);
      });
      for (a = 0; a < vO6.Api_listServer.length; a++) {
        var v547 = vO6.Api_listServer[a].serverUrl;
        var v548 = vO6.Api_listServer[a].name;
        var v549 = vO6.Api_listServer[a].region;
        let v550 = document.createElement("p");
        v550.value = v547;
        v550.innerHTML = v548;
        if (v549 == "peru") {
          $(".servers-peru").prepend(v550);
        } else if (v549 == "mexico") {
          $(".servers-mexico").prepend(v550);
        } else if (v549 == "eeuu") {
          $(".servers-eeuu").prepend(v550);
        } else if (v549 == "canada") {
          $(".servers-canada").prepend(v550);
        } else if (v549 == "germania") {
          $(".servers-germania").prepend(v550);
        } else if (v549 == "francia") {
          $(".servers-francia").prepend(v550);
        } else if (v549 == "singapur") {
          $(".servers-singapur").prepend(v550);
        } else if (v549 == "japon") {
          $(".servers-japon").prepend(v550);
        } else if (v549 == "australia") {
          $(".servers-australia").prepend(v550);
        } else if (v549 == "granbretana") {
          $(".servers-granbretana").prepend(v550);
        }
        $(v550).attr("id", v549);
        $(v550).attr("class", "selectSala");
        $(v550).attr("value", v548);
        $(v550).click(function () {
          let v551 = $(this).find("#svhiep .valu").text().trim();
          vO7.setServer(v551);
          let v552 = $(this).val();
          vO7.containerImgS.texture = vO7.onclickServer;
          retundFlagError();
          window.server_url = v552;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function f106() {
      $("#getskin").on("click", function () {
        for (var vLN095 = 0; vLN095 < vO5.clientesActivos.length; vLN095++) {
          var v553 = vO5.clientesActivos[vLN095].cliente_NOMBRE;
          var v554 = vO5.clientesActivos[vLN095].cliente_ID;
          var v555 = vO5.clientesActivos[vLN095].Client_VisibleSkin;
          var v556 = vO5.clientesActivos[vLN095].Client_VisibleSkin1;
          var v557 = vO5.clientesActivos[vLN095].Client_VisibleSkin2;
          var v558 = vO5.clientesActivos[vLN095].Client_VisibleSkin3;
          var v559 = vO5.clientesActivos[vLN095].Client_VisibleSkin4;
          var v560 = vO5.clientesActivos[vLN095].Client_VisibleSkin5;
          var v561 = vO5.clientesActivos[vLN095].Client_VisibleSkin6;
          var v562 = vO5.clientesActivos[vLN095].Client_VisibleSkin7;
          var v563 = vO5.clientesActivos[vLN095].Client_VisibleSkin8;
          var v564 = vO5.clientesActivos[vLN095].Client_VisibleSkin9;
          var v565 = vO5.clientesActivos[vLN095].Client_VisibleSkin10;
          var v566 = vO5.clientesActivos[vLN095].Client_VisibleSkin11;
          var v567 = vO5.clientesActivos[vLN095].Client_VisibleSkin12;
          var v568 = vO5.clientesActivos[vLN095].Client_VisibleSkin13;
          var v569 = vO5.clientesActivos[vLN095].Client_VisibleSkin14;
          var v570 = vO5.clientesActivos[vLN095].Client_VisibleSkin15;
          var v571 = vO5.clientesActivos[vLN095].Client_VisibleSkin16;
          var v572 = vO5.clientesActivos[vLN095].Client_VisibleSkin17;
          var v573 = vO5.clientesActivos[vLN095].Client_VisibleSkin18;
          var v574 = vO5.clientesActivos[vLN095].Client_VisibleSkin19;
          var v575 = vO5.clientesActivos[vLN095].Client_VisibleSkin20;
          var v576 = vO5.clientesActivos[vLN095].Client_KeyAccecs;
          if (vO4.FB_UserID == 0) {} else if (vO4.FB_UserID == v554) {
            if (v576 == "XTPRIVATESKIN") {
              for (let vLN096 = 0; vLN096 < vO4.idSkin.length; vLN096++) {
                const v577 = vO4.idSkin[vLN096];
                if (v577.id == v555 || v577.id == v556 || v577.id == v557 || v577.id == v558 || v577.id == v559 || v577.id == v560 || v577.id == v561 || v577.id == v562 || v577.id == v563 || v577.id == v564 || v577.id == v565 || v577.id == v566 || v577.id == v567 || v577.id == v568 || v577.id == v569 || v577.id == v570 || v577.id == v571 || v577.id == v572 || v577.id == v573 || v577.id == v574 || v577.id == v575) {
                  v577.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function f107() {
      vO4.adblock = true;
      $(".youid").css("display", "none");
      $("#mm-store").after("\n            \n            <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>\n            \n           \n        <div id=\"mm-store\" style=\"float: right;position: relative;min-width: 95px;background:#ff0000\" onclick=\"openPopup()\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 23px;\"></i> Tool</div>\n        <div id=\"popup\" class=\"popup\">\n        \n        <div class=\"phdr1\"> \n        <button style=\"float: right;background: #00000000;float: right;height: 40px;border: none;font-size: 16px;font-weight: 600;\" onclick=\"navigator.clipboard.writeText('" + vO4.FB_UserID + "').then(()=> alert('You ID " + vO4.FB_UserID + " copied!'));\">Copy ID</button>\n        \n        \n        </div>\n        <div class=\"close-button\" onclick=\"closePopup()\"></div>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\">\n                   <div class=\"layout\">\n      <div class=\"sidebar\">\n          <ul>\n              <li><div class=\"hii\" style=\"background: none; border: none;\" id=\"click-btn\"><i class=\"fas fa-user\"></i> Profile</div></li>\n              <li id=\"toolgame-btn\" class=\"selected\" onclick=\"displayContent('toolgame', this)\">\n            <i class=\"fas fa-cogs\"></i> Tool Game\n        </li>\n        <li id=\"skins-btn\" onclick=\"displayContent('skins', this)\">\n            <i class=\"fas fa-paint-brush\"></i> Skins\n        </li>\n        <li id=\"chuot-btn\" onclick=\"displayContent('chuot', this)\">\n            <i class=\"fas fa-mouse\"></i> Cursor\n        </li>\n        <li id=\"gioithieu-btn\" onclick=\"displayContent('gioithieu', this)\">\n            <i class=\"fas fa-info-circle\"></i> Giá»›i Thiá»‡u\n        </li>\n          </ul>\n      </div>\n\n      <div class=\"main-content\">\n      \n          <div id=\"toolgame\" class=\"content-section\">\n              \n        <!-- Container cho 2 pháº§n tá»­ (hÃ ng 1) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-bolt yellow-icon\"></i> Eat Fast:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n        <label for=\"settings-Abilityzoom-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n            <i class=\"fas fa-video yellow-icon\"></i> Center Streamer :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmode-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 pháº§n tá»­ (hÃ ng 2) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-trophy yellow-icon\"></i> 3 Top Score :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodebatop-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n            <i class=\"fas fa-toggle-off yellow-icon\"></i> Turn Off <img style=\"height: 18px;\" src=\"https://i.imgur.com/cOrk9pM.png\" alt=\"Turn on\"/> :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodemuiten-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodemuiten-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 pháº§n tá»­ (hÃ ng 2) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-chart-bar yellow-icon\"></i> Total Kill :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-smile yellow-icon\"></i> Off Emoj:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeemoj-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 pháº§n tá»­ (hÃ ng 2) -->\n<div class=\"settings-row\">\n     <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-volume-mute yellow-icon\"></i> Off Sounds:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeheadshot-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fa fa-eye-slash\"></i> Hide Map\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeanclock-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeanclock-switch\"></label>\n    </div>\n</div>\n\n\n<div class=\"settings-row\">\n     <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-toggle-off yellow-icon\"></i> Off random skins :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodedangaunhien-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodedangaunhien-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fa fa-eye-slash\"></i> Updating... !\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeanclock-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeanclock-switch\"></label>\n    </div>\n</div>\n\n\n<div class=\"spancursor\"> Select Background</div>\n<div class=\"background-container\"></div>\n    \n          </div>\n          \n          \n          \n          <div id=\"skins\" class=\"content-section\">\n           <div style=\"margin-bottom: 10px;margin-top: -10px;\" class=\"spancursor\"> Upload Skins</div>\n               <iframe style=\"width: 100%; height: 43px;\" src=\"https://haylamday.com/api/skins_upload.php\" scrolling=\"no\" frameborder=\"0\"></iframe>\n               \n           <div style=\"margin-top: 20px;margin-bottom: 20px;\" class=\"spancursor\"> Upload Hat</div>\n <iframe style=\"width: 100%; height: 40px;\" src=\"https://haylamday.com/api/hat_upload.php\" scrolling=\"no\" frameborder=\"0\"></iframe>\n \n  <div class=\"spancursor\">NOTE : </div>\n                <ul><li>\n                 Uploading 18+ sex skins is prohibited. ID will be locked if violated.</li>\n                 <li>\n                 Vui lÃ²ng khÃ´ng táº£i lÃªn skin sex 18+. Bá»‹ phÃ¡t hiá»‡n sáº½ bá»‹ khÃ³a. Xin cáº£m Æ¡n !</li></ul>\n            \n \n          </div>\n          \n         \n          <div id=\"chuot\" class=\"content-section\">\n              <div class=\"spancursor\"> Select Cursor</div>\n        <div class=\"cursor-container\">\n            <div id=\"default-cursor-btn\">\n                <img src=\"https://i.imgur.com/lWpvpbL.png\">\n            </div>\n        </div>\n          </div>\n          <div id=\"gioithieu\" class=\"content-section\">\n              <h2>Giá»›i Thiá»‡u</h2>\n              <p>ÄÃ¢y lÃ  ná»™i dung Giá»›i Thiá»‡u.</p>\n          </div>\n      </div>\n  </div>\n\n  <script>\n      function displayContent(sectionId, element) {\n          // áº¨n táº¥t cáº£ cÃ¡c má»¥c ná»™i dung\n          let sections = document.querySelectorAll('.content-section');\n          sections.forEach(section => section.style.display = 'none');\n\n          // Hiá»ƒn thá»‹ má»¥c ná»™i dung tÆ°Æ¡ng á»©ng\n          let activeSection = document.getElementById(sectionId);\n          if (activeSection) {\n              activeSection.style.display = 'block';\n          }\n\n          // Äá»•i mÃ u má»¥c Ä‘Ã£ chá»n\n          let menuItems = document.querySelectorAll('.sidebar ul li');\n          menuItems.forEach(item => item.classList.remove('selected')); // Loáº¡i bá» class 'selected' khá»i táº¥t cáº£ má»¥c\n          \n          // ThÃªm class 'selected' cho má»¥c Ä‘Æ°á»£c chá»n\n          element.classList.add('selected');\n      }\n\n      // Hiá»ƒn thá»‹ ná»™i dung máº·c Ä‘á»‹nh khi táº£i trang\n      window.onload = function() {\n          displayContent('toolgame', document.getElementById('toolgame-btn'));\n      };\n      \n       // Láº¥y pháº§n tá»­ nÃºt vÃ  div\n        const button = document.getElementById(\"click-btn\");\n        const playerInfo = document.getElementById(\"mm-player-info\");\n\n        // Xá»­ lÃ½ sá»± kiá»‡n click vÃ o nÃºt\n        button.addEventListener(\"click\", function() {\n            // MÃ´ phá»ng click vÃ o div khi nháº¥n nÃºt\n            playerInfo.click();\n        });\n\n        // Xá»­ lÃ½ sá»± kiá»‡n click trá»±c tiáº¿p vÃ o div\n        playerInfo.addEventListener(\"click\", function() {\n            // Táº¡i Ä‘Ã¢y báº¡n cÃ³ thá»ƒ thá»±c hiá»‡n hÃ nh Ä‘á»™ng khÃ¡c khi click vÃ o div, vÃ­ dá»¥:\n            console.log(\"Div Ä‘Ã£ Ä‘Æ°á»£c click!\");\n        });\n\n      \n      \n      \n  </script>\n        <style>\n        .yellow-icon {\n    color: gold;  /* Chá»‰nh mÃ u vÃ ng */\n}\n        .layout {\n          display: flex;\n          width: 100%;\n          height: 90%;\n      }\n\n      .sidebar {\n          width: 140px;\n          background: #252535;\n          box-shadow: 0px 0px 10px #252535;\n          color: #fff;\n      }\n\n      .sidebar ul {\n          list-style-type: none;\n          padding: 0;\n          margin: 0;\n      }\n\n      .sidebar ul li {\n          padding: 12px;\n          cursor: pointer;\n          border-bottom: 1px solid #ddd;\n          width: 140px;\n      }\n\n      .sidebar ul li:hover {\n          background-color: #666;\n      }\n\n      .sidebar ul li.selected {\n          background-color: #000; /* MÃ u ná»n khi má»¥c Ä‘Æ°á»£c chá»n */\n          color: white;\n      }\n\n      .main-content {\n          flex-grow: 1;\n          padding: 20px;\n          background: #393e43;\n          color: #fff;\n      }\n\n      .content-section {\n          display: none;\n          transition: display 0.3s ease-in-out;\n      }\n\n      #toolgame {\n          display: block; /* Máº·c Ä‘á»‹nh hiá»ƒn thá»‹ ná»™i dung Tool Game */\n      }\n\n      h2 {\n          margin-top: 0;\n      }\n\n      /* ThÃªm hiá»‡u á»©ng cho hover */\n      .sidebar ul li:hover {\n          background-color: #666;\n      }</style>\n        </div>");
      $("#loa831pibur0w4gv").replaceWith("\n              \n              <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n              <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n              <div class=\"label\" id=\"titleSetings\">Notification</div>\n                \n                 <div class=\"bao-list1\">\n                <div class=\"list1\"><li>\n                 21/02/2025: Updated !</li>\n                </div>\n                <div class=\"list1\"><li>\n                 Uploading 18+ sex skins is prohibited. ID will be locked if violated. Thank you !</li>\n                </div>\n                <div class=\"list1\"><li>\n                 Vui lÃ²ng khÃ´ng táº£i lÃªn skin sex 18+. Bá»‹ phÃ¡t hiá»‡n sáº½ bá»‹ khÃ³a. Xin cáº£m Æ¡n !</li>\n                </div>\n                \n                   <div class=\"list1\"><li> Instructions for installing on IOS and iPad New 2024: <a href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></li></div></div>\n              \n                   ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;display:none' id='getskin'>Unlock Skins</button>\n                </div>\n                </div>");
      window.multiplier = 0.625;
      window.zoomLevel = 5;
      function f108() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        f110();
      }
      function f109() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          f110();
        }
      }
      function f110() {
        var v578 = Math.round(window.multiplier / 0.625 * 100);
        v578 = Math.min(100, v578);
        var v579 = document.getElementById("zoom-percentage");
        v579.textContent = v578 + "%";
      }
      document.getElementById("zoom-slider").addEventListener("input", function (p617) {
        const v580 = p617.target.value;
        const vV580 = v580;
        window.zoomLevel = Math.round(v580 / 10);
        window.multiplier = vV580 / 50 * 0.625;
        changedNf();
        f110();
      });
      window.onwheel = p618 => {
        p618.preventDefault();
        if (p618.deltaY < 0) {
          f108();
        } else {
          f109();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          vO4.eat_animation = 0.005;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var v581 = localStorage.getItem("mySwitch");
        if (v581 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          vO4.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          vO4.eat_animation = 0.005;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var v582 = localStorage.getItem("ModeStremer");
        if (v582 === "true") {
          vO4.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          vO4.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var v583 = localStorage.getItem("ModeStremerbatop");
        if (v583 === "true") {
          vO4.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          vO4.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodedangaunhien-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremerdangaunhien = true;
          localStorage.setItem("ModeStremerdangaunhien", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremerdangaunhien = false;
          localStorage.setItem("ModeStremerdangaunhien", "false");
        }
      });
      $(document).ready(function () {
        var v584 = localStorage.getItem("ModeStremerdangaunhien");
        if (v584 === "true") {
          vO4.ModeStremerdangaunhien = true;
          $("#settings-stremingmodedangaunhien-switch").prop("checked", true);
        } else {
          vO4.ModeStremerdangaunhien = false;
          $("#settings-stremingmodedangaunhien-switch").prop("checked", false);
        }
      });
      $(document).ready(function () {
        var v585 = localStorage.getItem("ModeStremeranclock");
        if (v585 === "true") {
          vO4.ModeStremeranclock = true;
          $("#settings-stremingmodeanclock-switch").prop("checked", true);
        } else {
          vO4.ModeStremeranclock = false;
          $("#settings-stremingmodeanclock-switch").prop("checked", false);
        }
        if (vO4.ModeStremeranclock) {
          vO7.clockan.width = 100;
          vO7.clockan.height = 100;
          vO7.clockan.x = -50;
          vO7.clockan.y = -50;
        } else {
          vO7.clockan.width = 0;
          vO7.clockan.height = 0;
          vO7.clockan.x = -50;
          vO7.clockan.y = -50;
        }
      });
      $("#settings-stremingmodeanclock-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremeranclock = true;
          localStorage.setItem("ModeStremeranclock", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremeranclock = false;
          localStorage.setItem("ModeStremeranclock", "false");
        }
        if (vO4.ModeStremeranclock) {
          vO7.clockan.width = 100;
          vO7.clockan.height = 100;
          vO7.clockan.x = -50;
          vO7.clockan.y = -50;
        } else {
          vO7.clockan.width = 0;
          vO7.clockan.height = 0;
          vO7.clockan.x = -50;
          vO7.clockan.y = -50;
        }
      });
      $("#settings-stremingmodemuiten-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremermuiten = true;
          localStorage.setItem("ModeStremermuiten", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremermuiten = false;
          localStorage.setItem("ModeStremermuiten", "false");
        }
        $("#svhiep").click();
        setTimeout(function () {
          location.reload();
        }, 1000);
      });
      $(document).ready(function () {
        var v586 = localStorage.getItem("ModeStremermuiten");
        if (v586 === "true") {
          vO4.ModeStremermuiten = true;
          $("#settings-stremingmodemuiten-switch").prop("checked", true);
        } else {
          vO4.ModeStremermuiten = false;
          $("#settings-stremingmodemuiten-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var v587 = localStorage.getItem("ModeStremeremoj");
        if (v587 === "true") {
          vO4.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          vO4.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v588 = localStorage.getItem("ModeStremerheadshot");
        if (v588 === "true") {
          vO4.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          vO4.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v589 = localStorage.getItem("ModeStremerheadshot");
        if (v589 === "true") {
          vO4.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          vO4.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var v590 = localStorage.getItem("ModeStremersaveheadshot");
        if (v590 === "true") {
          vO4.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          vO4.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.arrow = false;
        } else {
          console.log("I'm not checked");
          vO4.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        vO4.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO4.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO4.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO4.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO4.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO4.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO4.FoodSize = $(this).val();
        localStorage.ComidaSize = vO4.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO4.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO4.FoodShadow;
      });
      for (a = 0; a < vA15.length; a++) {
        var v591 = vA15[a].url;
        var v592 = vA15[a].nombre;
        let v593 = document.createElement("img");
        v593.src = v591;
        $(".cursor-container").prepend(v593);
        $(v593).attr("class", "cursor");
        $(v593).click(function () {
          let v594 = $(this).attr("src");
          localStorage.cursorSeleccionado = v594;
          $("#game-cont").css({
            cursor: "url(" + v594 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + v594 + "), default"
          });
          $("body").css({
            cursor: "url(" + v594 + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < vA16.length; a++) {
        var v595 = vA16[a].url;
        var v596 = vA16[a].nombre;
        let v597 = document.createElement("img");
        v597.src = v595;
        $(".background-container").prepend(v597);
        $(v597).attr("class", "background");
        $(v597).attr("value", v596);
        $(v597).click(function () {
          let v598 = $(this).attr("src");
          let v599 = $(this).attr("value");
          backgroundIMG = v598;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + v599);
          vUndefined2.q.Cf = new vF7._b(vUndefined2.q.fn_o(v598));
        });
      }
      $(".background-container").prepend("");
      vUndefined2.q.Cf = new vF7._b(vUndefined2.q.fn_o(localStorage.fondoSeleccionado));
    }
    function f111() {
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormate Friends</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://haylamday.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + vO4.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + vO4.FB_UserID + "').then(()=> alert('You ID " + vO4.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    }
    function f112() {
      localStorage.setItem("totalKills", vO4.totalKills);
      localStorage.setItem("totalHeadshots", vO4.totalHeadshots);
    }
    function f113() {
      vO4.totalKills = parseInt(localStorage.getItem("totalKills")) || 0;
      vO4.totalHeadshots = parseInt(localStorage.getItem("totalHeadshots")) || 0;
    }
    function f114(p619, p620) {
      let vF81 = function (p621, p622, p623, p624) {
        vO7.setCountGame(p621, p622, p623, p624);
      };
      f113();
      if (p619 === "count") {
        vO4.kill = (vO4.kill || 0) + (p620 ? 0 : 1);
        vO4.headshot = (vO4.headshot || 0) + (p620 ? 1 : 0);
        vO4.totalKills = vO4.totalKills + (p620 ? 0 : 1);
        vO4.totalHeadshots = vO4.totalHeadshots + (p620 ? 1 : 0);
        f112();
        vF81(vO4.kill, vO4.headshot, vO4.totalKills, vO4.totalHeadshots);
      }
      if (p619 === "open") {
        vO4.kill = 0;
        vO4.headshot = 0;
        $("#contadorKill_12").show();
        vF81(vO4.kill, vO4.headshot, vO4.totalKills, vO4.totalHeadshots);
      }
      if (p619 === "closed") {
        vO2 = {};
      }
      if (p619 === "cerrar") {
        vO4.kill = 0;
        vO4.headshot = 0;
        vO4.totalKills = 0;
        vO4.totalHeadshots = 0;
        f112();
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
          return (this / 1000000).toFixed(1) + "MðŸ°";
        } else if (this >= 100000) {
          return (this / 1000).toFixed(0) + "kðŸ°";
        } else {
          return this.dotFormat();
        }
      };
    }
    setTimeout(function () {
      var vA17 = ["fuck you", "Ä‘á»‹t", "cÃ¡i lá»“n", "chÃ³", "Ä‘Ã©o", "lá»“n", "Ä‘Ã©o", "Ä‘á»‹t", "vÃ£i lá»“n", "cáº·c"];
      const v600 = document.getElementById("mm-params-nickname");
      const v601 = v600.value;
      const v602 = v601.indexOf("x");
      if (v602 !== -1) {
        const v603 = v601.substring(0, v602);
        v600.value = v603;
      }
      ;
      $("#mm-action-play").on("click", function () {
        var v604 = $("#mm-params-nickname").val();
        var v605 = vA17.some(function (p625) {
          return v604.toLowerCase().includes(p625.toLowerCase());
        });
        if (v605) {
          $("#mm-params-nickname").val("I Love Viá»‡t Nam");
        }
      });
      $(document).ready(function () {
        $("#getskin").click();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-action-guest").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var v_0x569a61 = function f115() {
      requestAnimationFrame(f115);
      f9().Pa();
    };
    v_0x569a61();
    function f116() {
      var v606 = v$106.width();
      var v607 = v$106.height();
      var v608 = v$107.outerWidth();
      var v609 = v$107.outerHeight();
      var v610 = v$108.outerHeight();
      var v611 = v$109.outerHeight();
      var v612 = Math.min(1, Math.min((v607 - v611 - v610) / v609, v606 / v608));
      var v613 = "translate(-50%, -50%) scale(" + v612 + ")";
      v$107.css({
        "-webkit-transform": v613,
        "-moz-transform": v613,
        "-ms-transform": v613,
        "-o-transform": v613,
        transform: v613
      });
      f9().Ra();
      window.scrollTo(0, 1);
    }
    var v$106 = $("body");
    var v$107 = $("#stretch-box");
    var v$108 = $("#markup-header");
    var v$109 = $("#markup-footer");
    f116();
    $(window).resize(f116);
  })();
  window.anApp.p.Bc = function () {
    var v614 = window.anApp.p;
    var vO19 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (p626) {
      vO19 = p626;
      $.ajax({
        url: "https://haylamday.com/api/lan-da-vh.php",
        method: "GET",
        dataType: "json",
        success: function (p627) {
          vO4.visibleSkin = p627.visibleSkin;
          delete p627.visibleSkin;
          for (let v615 in p627) {
            if (v615 !== "propertyList") {
              if (Array.isArray(p627[v615])) {
                p626[v615] = p626[v615].concat(p627[v615]);
              } else {
                p626[v615] = {
                  ...p626[v615],
                  ...p627[v615]
                };
              }
            }
          }
          vO4.pL = p627.propertyList;
          vO4.idSkin = p627.skinArrayDict;
          v614.Cc(p626);
        },
        error: function (p628, p629, p630) {
          console.error(p630);
          v614.Cc(vO19);
        }
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\">\n   </canvas>\n   ");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith("");
  $("#markup-footer").replaceWith("\n    \n \n\n<footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language â–´</button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a>\n<a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a>\n</div></div>\n            \n            <a class=\"link\" hreflang=\"en\" href=\"https://VuongHiep.Com\">Â© 2025 Wormate Friends Connect</a>\n          <a style=\"font-size: 17px;font-weight: 500;color: #1200ff;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in BÃ  Rá»‹a VÅ©ng TÃ u !</a>\n            </footer>\n\n        ");
});
if (!sessionStorage.getItem("visited")) {
  sessionStorage.setItem("visited", "true");
  location.reload(true);
}
function f117() {
  var v616 = document.getElementById("popup");
  var v617 = document.getElementById("overlay");
  v616.style.display = "block";
  v617.style.display = "block";
}
function f118() {
  var v618 = document.getElementById("popup");
  var v619 = document.getElementById("overlay");
  v618.style.display = "none";
  v619.style.display = "none";
}
function f119() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
getPresedKey = function (p631) {
  var vLS5 = "";
  if (p631.keyCode == 9) {
    vLS5 += "TAB";
  } else if (p631.keyCode == 13) {
    vLS5 += "ENTER";
  } else if (p631.keyCode == 16) {
    vLS5 += "SHIFT";
  } else {
    vLS5 += String.fromCharCode(p631.keyCode);
  }
  return vLS5;
};
getStringKey = function (p632) {
  var vLS6 = "";
  if (p632 == 9) {
    vLS6 += "TAB";
  } else if (p632 == 13) {
    vLS6 += "ENTER";
  } else if (p632 == 16) {
    vLS6 += "SHIFT";
  } else if (p632 == 32) {
    vLS6 += "SPACE";
  } else if (p632 == 27) {
    vLS6 += "ESC";
  } else {
    vLS6 += String.fromCharCode(p632);
  }
  return vLS6;
};
isValidHotkey = function (p633) {
  if (p633.keyCode >= 48 && p633.keyCode <= 57 || p633.keyCode >= 65 && p633.keyCode <= 90 || p633.keyCode == 9 || p633.keyCode == 13 || p633.keyCode == 16 || p633.keyCode == 32 || p633.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
window.onload = function () {
  var vA18 = [{
    gradient: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><polygon points='50,5 61,35 95,35 67,57 76,91 50,70 24,91 33,57 5,35 39,35' fill='rgba(255, 255, 255, 0.3)'/></svg>\") repeat,linear-gradient(45deg, #32CD32 20%, #FFD700 100%)",
    size: "120px 120px, 100% 100%"
  }, {
    gradient: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect x='30' y='30' width='40' height='40' fill='rgba(255,255,255,0.2)'/></svg>\") repeat,linear-gradient(45deg, #0000FF 20%, #8A2BE2 100%)",
    size: "100px 100px, 100% 100%"
  }, {
    gradient: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><polygon points='50,10 90,50 50,90 10,50' fill='rgba(255,255,255,0.25)'/></svg>\") repeat,linear-gradient(45deg, #0000FF 20%, #8A2BE2 100%)",
    size: "100px 100px, 100% 100%"
  }];
  var v620 = localStorage.getItem("lastSelected");
  var v621 = vA18.map((p634, p635) => p635).filter(p636 => p636 != v620);
  var v622 = v621[Math.floor(Math.random() * v621.length)];
  var v623 = vA18[v622];
  localStorage.setItem("lastSelected", v622);
  var v624 = document.getElementById("game-wrap");
  v624.style.background = v623.gradient;
  v624.style.backgroundSize = v623.size;
};
console.log("Core 2022 THEO Update 2023");
(function () {
  var vSetInterval2 = setInterval(function () {
    try {} catch (e30) {}
  }, 100);
})();
document.addEventListener("keydown", function (p637) {
  if (p637.key === "F12") {
    p637.preventDefault();
  }
  if (p637.ctrlKey && p637.shiftKey && p637.key === "I") {
    p637.preventDefault();
  }
  if (p637.ctrlKey && p637.key === "U") {
    p637.preventDefault();
  }
});
document.addEventListener("contextmenu", function (p638) {
  p638.preventDefault();
});
(function () {
  var v625 = document.createElement("script");
  v625.textContent = "\n        (function() {\n            var preventDebugging = setInterval(function() {\n                if (window.console) {\n                    console.log = function() {}; \n                    console.debug = function() {}; \n                    console.error = function() {}; \n                    console.info = function() {};  \n                }\n            }, 1000);\n        })();\n    ";
  document.head.appendChild(v625);
})();
console.log("%cDeveloper By Vuonghiep.com", "color: #FF7F00; font-size: 18px; font-weight: bold;");