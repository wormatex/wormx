var v;
var v2;
window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.2,
    sectorTextStyle: {
      fontFamily: "Arial",
      fontSize: 14,
      fill: 16777215
    },
    quarterTextStyle: {
      fontFamily: "Arial",
      fontSize: 20,
      fill: 16777215
    },
    showLines: true
  },
  state: {
    container: null,
    graphics: null,
    isActive: false,
    currentMode: null,
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    if (window.laserGraphics?.parent) {
      this.state.renderContainer = window.laserGraphics.parent;
      return this.state.renderContainer;
    }
    if (window.ooo?.Mh?.Lh?.Wf) {
      this.state.renderContainer = window.ooo.Mh.Lh.Wf;
      return this.state.renderContainer;
    }
    const vF = (p, p2 = new Set(), p3 = 0) => {
      if (!p || typeof p !== "object" || p3 > 3 || p2.has(p)) {
        return null;
      }
      p2.add(p);
      if (p.Wf instanceof PIXI.Container) {
        this.state.renderContainer = p.Wf;
        return p.Wf;
      }
      for (let v3 in p) {
        if (v3 !== "parent" && v3 !== "children" && p[v3] && typeof p[v3] === "object") {
          const vVF = vF(p[v3], p2, p3 + 1);
          if (vVF) {
            return vVF;
          }
        }
      }
      return null;
    };
    return vF(window.ooo);
  },
  cachedRadius: 0,
  lastRadiusTime: 0,
  getRadius: function () {
    const v4 = Date.now();
    if (v4 - this.lastRadiusTime > 1000) {
      this.cachedRadius = window.ooo?.Mh?.Qh?.gh || window.ooo?.Mh?.Lh?.Qh?.gh || 500;
      this.lastRadiusTime = v4;
    }
    return this.cachedRadius;
  },
  clearTexts: function () {
    this.state.texts.forEach(p4 => {
      if (p4 && p4.parent) {
        p4.parent.removeChild(p4);
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (p5) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, p5);
    this.state.graphics.endFill();
    return p5;
  },
  drawSectors: function () {
    const v5 = this.initDrawing(this.getRadius());
    const v6 = v5 / 3;
    if (this.settings.showLines) {
      for (let vLN1 = 1; vLN1 < 3; vLN1++) {
        this.state.graphics.drawCircle(0, 0, v5 - vLN1 * v6);
      }
      for (let vLN0 = 0; vLN0 < 4; vLN0++) {
        const v7 = vLN0 * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(v7) * v5, Math.sin(v7) * v5);
      }
    }
    for (let vLN02 = 0; vLN02 < 4; vLN02++) {
      const v8 = vLN02 * Math.PI / 2;
      for (let vLN03 = 0; vLN03 < 3; vLN03++) {
        const v9 = v5 - (vLN03 * v6 + v6 / 2);
        const v10 = v8 + Math.PI / 4;
        const v11 = ["S", "D", "F"][vLN03] + (vLN02 + 1);
        const v12 = new PIXI.Text(v11, this.settings.sectorTextStyle);
        v12.anchor.set(0.5);
        v12.position.set(Math.cos(v10) * v9, Math.sin(v10) * v9);
        this.state.container.addChild(v12);
        this.state.texts.push(v12);
      }
    }
  },
  drawQuarters: function () {
    const v13 = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-v13, 0);
      this.state.graphics.lineTo(v13, 0);
      this.state.graphics.moveTo(0, -v13);
      this.state.graphics.lineTo(0, v13);
    }
    [{
      n: "KİNG 1",
      x: 1,
      y: -1
    }, {
      n: "KİNG 2",
      x: -1,
      y: -1
    }, {
      n: "KİNG 3",
      x: -1,
      y: 1
    }, {
      n: "KİNG 4",
      x: 1,
      y: 1
    }].forEach(p6 => {
      const v14 = new PIXI.Text(p6.n, this.settings.quarterTextStyle);
      v14.anchor.set(0.5);
      v14.position.set(p6.x * v13 / 3, p6.y * v13 / 3);
      this.state.container.addChild(v14);
      this.state.texts.push(v14);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const v15 = this.findRenderContainer();
    if (!v15) {
      return false;
    }
    this.state.container = new PIXI.Container();
    this.state.graphics = new PIXI.Graphics();
    this.state.container.addChild(this.state.graphics);
    v15.addChild(this.state.container);
    this.state.container.zIndex = 10;
    this.state.container.visible = false;
    this.state.initialized = true;
    return true;
  },
  toggleMode: function (p7) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === p7) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      if (document.getElementById("sector_system_toggle")) {
        document.getElementById("sector_system_toggle").checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = p7;
    this.state.container.visible = true;
    if (document.getElementById("sector_system_toggle")) {
      document.getElementById("sector_system_toggle").checked = true;
    }
    if (p7 === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const vO = {
      83: () => this.toggleMode("sectors"),
      187: () => this.toggleMode("sectors"),
      61: () => this.toggleMode("sectors"),
      88: () => this.toggleMode("quarters")
    };
    document.addEventListener("keydown", p8 => {
      const v16 = p8.keyCode || p8.which;
      if (vO[v16]) {
        vO[v16]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    });
  },
  saveSettings: function () {
    try {
      localStorage.setItem("sectorSystemSettings", JSON.stringify(this.settings));
      localStorage.setItem("sectorSystemActive", this.state.isActive ? "1" : "0");
      if (this.state.currentMode) {
        localStorage.setItem("sectorSystemMode", this.state.currentMode);
      }
    } catch (e) {
      console.error("Error saving sector system settings:", e);
    }
  },
  loadSettings: function () {
    try {
      const v17 = JSON.parse(localStorage.getItem("sectorSystemSettings"));
      if (v17) {
        this.settings = {
          ...this.settings,
          ...v17
        };
      }
      const v18 = localStorage.getItem("sectorSystemActive") === "1";
      let v19 = localStorage.getItem("sectorSystemMode");
      if (!v19) {
        v19 = "sectors";
      }
      this.savedState = {
        isActive: v18,
        currentMode: v19
      };
    } catch (e2) {
      console.error("Error loading sector system settings:", e2);
    }
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    const v20 = this.initGraphics();
    this.setupKeyboardEvents();
    if (!v20) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        if (document.getElementById("sector_system_toggle")) {
          document.getElementById("sector_system_toggle").checked = true;
        }
        this.state.restored = true;
        if ($("#sector_system_toggle").length > 0) {
          this.initUserInterface();
        }
      }
    }, 1000);
  },
  initUserInterface: function () {
    function f(p9) {
      return "#" + p9.toString(16).padStart(6, "0");
    }
    function f2(p10) {
      return parseInt(p10.replace("#", ""), 16);
    }
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      console.log("Restoring state from UI initialization");
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const vF2 = () => {
      $("#sector_system_toggle").prop("checked", this.state.isActive);
      $("#sector_display_mode").val(this.state.currentMode || "sectors");
      $("#sector_bg_color").val(f(this.settings.backgroundColor));
      $("#sector_line_color").val(f(this.settings.lineColor));
      $("#sector_bg_opacity").val(this.settings.backgroundAlpha * 100);
      $("#sector_bg_opacity_value").text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      $("#sector_line_opacity").val(this.settings.lineAlpha * 100);
      $("#sector_line_opacity_value").text(Math.round(this.settings.lineAlpha * 100) + "%");
      $("#sector_show_lines").prop("checked", this.settings.showLines);
      if (!this.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      if (this.state.isActive) {
        $("#sector_settings_panel").slideDown(300);
      } else {
        $("#sector_settings_panel").slideUp(200);
      }
    };
    $("#sector_system_toggle").off("change").on("change", function () {
      const v21 = $(this).prop("checked");
      if (v21) {
        const v22 = $("#sector_display_mode").val() || "sectors";
        window.sectorSystem.toggleMode(v22);
      } else if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
      }
      vF2();
    });
    $("#sector_display_mode").off("change").on("change", function () {
      const v23 = $(this).val();
      if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
        window.sectorSystem.toggleMode(v23);
        vF2();
      }
    });
    $("#sector_bg_color").off("change").on("change", function () {
      window.sectorSystem.settings.backgroundColor = f2($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", function () {
      window.sectorSystem.settings.lineColor = f2($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", function () {
      const v24 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.backgroundAlpha = v24;
      $("#sector_bg_opacity_value").text(Math.round(v24 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", function () {
      const v25 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.lineAlpha = v25;
      $("#sector_line_opacity_value").text(Math.round(v25 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", function () {
      window.sectorSystem.settings.showLines = $(this).prop("checked");
      if (!window.sectorSystem.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    vF2();
  }
};
function f3(p11) {
  return (f3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p12) {
    return typeof p12;
  } : function (p13) {
    if (p13 && typeof Symbol == "function" && p13.constructor === Symbol && p13 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p13;
    }
  })(p11);
}
(function () {
  var vO2 = {};
  var vO3 = {};
  var vO4 = {};
  var vO5 = {};
  vO4.a = function (p14) {
    var v26 = new String();
    var vParseInt = parseInt(p14.substring(0, 2), 16);
    for (var vLN2 = 2; vLN2 < p14.length; vLN2 += 2) {
      var vParseInt2 = parseInt(p14.substring(vLN2, vLN2 + 2), 16);
      v26 += String.fromCharCode(vParseInt2 ^ (vParseInt = 3793 + vParseInt * 4513 & 255));
    }
    ;
    return v26;
  };
  vO4.b = function (p15) {
    return Function("return " + p15 + "; ")();
  };
  vO2.c = vO4.b("window");
  vO2.d = vO2.c.document;
  vO4.e = function () {
    return vO2.c.devicePixelRatio || 1;
  };
  vO2.c.addEventListener("load", function () {
    let vO6 = {
      eie: null,
      joystick: {
        positionMode: "L",
        checked: true,
        size: 90,
        mode: "dynamic",
        position: {
          left: "110px",
          bottom: "110px"
        },
        color: "red",
        pxy: 110
      },
      on: false,
      vj: null,
      uj: null,
      m: null,
      n: null
    };
    let vO7 = {
      s_l: "https://25yt551.github.io/worm4",
      showSkinLines: false,
      fullscreen: null,
      headshot: 0,
      s_headshot: 0,
      mobile: false,
      mo: 1,
      mo1: {
        x: -1,
        y: -1
      },
      mo2: {
        x: -1,
        y: -1
      },
      s_kill: 0,
      kill: 0,
      died: 0,
      saveGame: false,
      pm: {},
      joystick: vO6.joystick,
      j: null,
      pk: 0,
      pk0: "",
      pk1: "",
      pk2: "",
      pk3: "",
      pk4: "",
      pk5: "",
      pk6: "",
      z: 1,
      c_v: 222,
      c_1: "Cindynana GM",
      c_2: "Pham  Phu  Bach",
      c_3: "Tim map Wormate",
      c_4: "wormate.io",
      c_5: "please don't copy my code",
      d_1: "UTJsdVpIbE9ZVzVoSUVkTg==",
      d_2: "VUdoaGJTQlFhSFVnUW1GamFBPT0=",
      d_3: "VkdsdGJXRndWMjl5YldGMFpRPT0=",
      d_4: "VjI5eWJXRjBaUzVwYnc9PQ==",
      d_5: "VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09",
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: "",
      g: 36,
      s_w: false,
      s_n: "",
      v_z: 0,
      h: false,
      sn: true,
      s: false,
      hz: false,
      fz: true,
      tt: false,
      vh: false,
      vp: false,
      iq: false,
      ctrl: false,
      r1: true,
      sc: 0,
      wi: 0,
      to: 10,
      sm: 20,
      pi: "",
      pn: "",
      se: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: []
      },
      st: false,
      hh: 0,
      sh: [],
      ws: [],
      we: [],
      wm: [],
      wg: [],
      wh: [],
      sg: [],
      gg: null,
      ig: -1,
      so: 1,
      re: false,
      dg: null
    };
    vO7.showSkinLines = false;
    let v27 = localStorage.getItem("wkgSaveGame");
    if (v27 && v27 !== "null") {
      let v28 = JSON.parse(v27);
      for (let v29 in v28) {
        vO7[v29] = v28[v29];
      }
    }
    ;
    let vF3 = function () {
      let v30 = false;
      vO7.mobile = false;
      var v31 = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v31) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v31.substr(0, 4))) {
        v30 = true;
        vO7.mobile = true;
      }
      return v30;
    };
    let vF4 = function (p16) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.checked = p16.checked;
      localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
    };
    let vF5 = function (p17) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.color = p17.value;
      localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
    };
    let vF6 = function (p18) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.mode = p18.value;
      localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
    };
    let vF7 = function (p19) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.position = {
        left: "75px",
        bottom: "75px"
      };
      if (p19.value === "R") {
        vO7.joystick.position = {
          right: "75px",
          bottom: "75px"
        };
      }
      vO7.joystick.positionMode = p19.value;
      localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
    };
    let vF8 = function (p20) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.position = {
        left: (parseInt(p20.value) + 10).toString() + "px",
        bottom: p20.value + "px"
      };
      if (vO7.joystick.positionMode === "R") {
        vO7.joystick.position = {
          right: (parseInt(p20.value) + 10).toString() + "px",
          bottom: p20.value + "px"
        };
      }
      vO7.joystick.pxy = p20.value;
      localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
    };
    let vF9 = function (p21) {
      vO7.joystick ||= vO6.joystick;
      vO7.joystick.size = p21.value;
      localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
    };
    let vF10 = function (p22, p23, p24, p25, p26, p27) {
      let vO8 = {
        a: "",
        b: 0,
        c: ""
      };
      if (p22 > vO7.g * 100 + 100 || p22 < vO7.g * 10 || p22 === undefined) {
        vO7.a = p22;
        if (p22 === undefined) {
          vO7.a = Math.floor(Math.random() * (vO7.g / 9) + (vO7.g - vO7.g / 9));
        }
        vO8.a = "00";
      } else {
        vO7.a = p22 - vO7.g * 10;
        vO8.b = vO7.a;
        vO7.a = vO7.a % (vO7.g / 9);
        vO8.b = (vO8.b - vO7.a) / (vO7.g / 9) + 1;
        vO7.a = vO7.a + (vO7.g - vO7.g / 9);
        vO8.a = vO8.b.toString(vO7.g).padStart(2, 0);
      }
      if (p23 > vO7.g * 20 || p23 < vO7.g / 9 * 100 || p23 === undefined) {
        if (p23 > vO7.g * 20 && p23 < vO7.g * 30) {
          vO7.b = p23 - vO7.g * 20;
          vO8.a = vO8.a + vO7.b.toString(vO7.g);
          vO7.b = 0;
          vO8.c = vO8.c + "1";
        } else {
          vO7.b = p23;
          if (p23 === undefined) {
            vO7.b = 0;
          }
          vO8.a = vO8.a + "0";
          vO8.c = vO8.c + "0";
        }
      } else {
        vO7.b = p23 - vO7.g / 9 * 100 + vO7.g / vO7.g;
        vO8.a = vO8.a + vO7.b.toString(vO7.g);
        vO7.b = 0;
        vO8.c = vO8.c + "0";
      }
      if (p24 > vO7.g * 20 || p24 < vO7.g / 9 * 100 || p24 === undefined) {
        if (p24 > vO7.g * 20 && p24 < vO7.g * 30) {
          vO7.c = p24 - vO7.g * 20;
          vO8.a = vO8.a + vO7.c.toString(vO7.g);
          vO7.c = 0;
          vO8.c = vO8.c + "1";
        } else {
          vO7.c = p24;
          if (p24 === undefined) {
            vO7.c = 0;
          }
          vO8.a = vO8.a + "0";
          vO8.c = vO8.c + "0";
        }
      } else {
        vO7.c = p24 - vO7.g / 9 * 100 + vO7.g / vO7.g;
        vO8.a = vO8.a + vO7.c.toString(vO7.g);
        vO7.c = 0;
        vO8.c = vO8.c + "0";
      }
      if (p25 > vO7.g * 20 || p25 < vO7.g / 9 * 100 || p25 === undefined) {
        if (p25 > vO7.g * 20 && p25 < vO7.g * 30) {
          vO7.d = p25 - vO7.g * 20;
          if (vO7.d.toString(vO7.g) === "N") {
            vO8.a = vO8.a + "0";
          } else {
            vO8.a = vO8.a + vO7.d.toString(vO7.g);
          }
          vO7.d = 0;
          vO8.c = vO8.c + "1";
        } else {
          vO7.d = p25;
          if (p25 === undefined) {
            vO7.d = 0;
          }
          vO8.a = vO8.a + "0";
          vO8.c = vO8.c + "0";
        }
      } else {
        vO7.d = p25 - vO7.g / 9 * 100 + vO7.g / vO7.g;
        if (vO7.d.toString(vO7.g) === "N") {
          vO8.a = vO8.a + "0";
        } else {
          vO8.a = vO8.a + vO7.d.toString(vO7.g);
        }
        vO7.d = 0;
        vO8.c = vO8.c + "0";
      }
      if (p26 > vO7.g * 20 || p26 < vO7.g / 9 * 100 || p26 === undefined) {
        if (p26 > vO7.g * 20 && p26 < vO7.g * 30) {
          vO8.b = vO7.g / vO7.g;
          if (p26 <= vO7.g * 20 + (vO7.g - 1)) {
            vO7.e = p26 - vO7.g * 20;
          } else if (p26 <= vO7.g * 20 + (vO7.g - 1) * 2) {
            vO8.b = vO8.b * 2;
            vO7.e = p26 - vO7.g * 20 - (vO7.g - 1);
          } else if (p26 <= vO7.g * 20 + (vO7.g - 1) * 3) {
            vO7.e = p26 - vO7.g * 20 - (vO7.g - 1) * 2;
          } else if (p26 <= vO7.g * 20 + (vO7.g - 1) * 4) {
            vO8.b = vO8.b * 2;
            vO7.e = p26 - vO7.g * 20 - (vO7.g - 1) * 3;
          } else {
            vO7.e = 0;
          }
          if (vO7.e >= vO7.g) {
            vO8.b = 2;
            vO7.e = vO7.e - (vO7.g - 1);
          }
          vO8.a = vO8.a + vO7.e.toString(vO7.g);
          vO7.e = 0;
          vO8.c = vO8.c + "1";
        } else {
          vO7.e = p26;
          if (p26 === undefined) {
            vO7.e = 0;
          }
          vO8.a = vO8.a + "0";
          vO8.c = vO8.c + "0";
          vO8.b = 0;
        }
      } else {
        vO8.b = vO7.g / vO7.g;
        if (p26 - vO7.g / 9 * 100 + 1 >= vO7.g) {
          vO7.e = p26 - (vO7.g / 9 * 100 + (vO7.g - 1));
          vO8.b = vO8.b * 2;
        } else {
          vO7.e = p26 - vO7.g / 9 * 100 + vO8.b;
        }
        vO8.a = vO8.a + vO7.e.toString(vO7.g);
        vO7.e = 0;
        vO8.c = vO8.c + "0";
      }
      if (vO8.a == "000000") {
        vO7.f = p27.substr(0, 22).padEnd(22);
      } else {
        let vParseInt3 = parseInt(vO8.c, 2);
        if (p26 > 790 && p26 <= 860) {
          vParseInt3 += 16;
        }
        if (vO8.b <= 1) {
          vO8.a = vO8.a.substr(0, 5) + "|" + vO8.a.substr(5, 1);
        } else {
          vO8.a = vO8.a.substr(0, 4) + "|" + vO8.a.substr(4, 2);
        }
        if (p27 == "") {
          p27 = ".                       .";
        }
        if (vO8.c == "0000") {
          if (p27.substr(23, 1) == ".") {
            p27 = p27.substr(0, 23).padEnd(23) + " " + p27.substr(24, 1).padEnd(1);
          }
          vO7.f = (p27.length >= 32 ? p27.substr(0, 25) : p27.substr(0, 25).padEnd(25)) + vO8.a;
        } else {
          vO7.f = (p27.length >= 32 ? p27.substr(0, 23) : p27.substr(0, 23).padEnd(23)) + "." + vParseInt3.toString(vO7.g) + vO8.a;
        }
        vO7.f = vO7.f.replaceAll(" ", "_");
      }
    };
    let vF11 = function (p28) {
      let v32;
      try {
        vO7.joystick ||= vO6.joystick;
        if (vF3() && p28 && vO7.joystick.checked) {
          (v32 = nipplejs.create(vO7.joystick)).on("move", function (p29, p30) {
            vO6.eie.fo = p30.angle.radian <= Math.PI ? p30.angle.radian * -1 : Math.PI - (p30.angle.radian - Math.PI);
          });
        }
        return v32;
      } catch (e3) {
        console.error(e3);
      }
    };
    let vF12 = function (p31) {
      let vO9 = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: "",
        g: 0,
        h: "",
        i: ""
      };
      let vLN04 = 0;
      vO9.h = p31.substr(-9);
      if (vO9.h.substr(0, 1) != ".") {
        vO9.i = "0000";
      } else if ((vLN04 = parseInt(vO9.h.substr(1, 1), vO7.g)) > 15) {
        vLN04 -= 16;
        vO9.i = vLN04.toString(2).padStart(4, 0);
      } else {
        vO9.i = vLN04.toString(2).padStart(4, 0);
        vLN04 = 0;
      }
      vO9.f = p31.substr(-7);
      if (vO9.f.substr(0, 2) != "00") {
        vO9.a = parseInt(vO9.f.substr(0, 2), vO7.g);
        vO9.a = (vO9.a - 1) * (vO7.g / 9) + vO7.g * 10 - (vO7.g - 4);
      }
      if (vO9.f.substr(5, 1) == "|") {
        if (vO9.f.substr(6, 1) != "0") {
          vO9.e = parseInt(vO9.f.substr(6, 1), vO7.g);
          if (vO9.i.substr(3, 1) != "0") {
            if (vLN04 > 0) {
              vO9.e = vO9.e + vO7.g * 20 + (vO7.g - 1) * 2;
            } else {
              vO9.e = vO9.e + vO7.g * 20;
            }
          } else {
            vO9.e = vO9.e - 1 + vO7.g / 9 * 100;
          }
        }
      } else {
        vO9.e = parseInt(vO9.f.substr(6, 1), vO7.g);
        if (vO9.i.substr(3, 1) != "0") {
          if (vLN04 > 0) {
            vO9.e = vO9.e + vO7.g * 20 + (vO7.g - 1) * 3;
          } else {
            vO9.e = vO9.e + vO7.g * 20 + (vO7.g - 1);
          }
        } else {
          vO9.e = vO9.e + (vO7.g / 9 * 100 + (vO7.g - 1));
        }
      }
      vO9.f = vO9.f.replace("|", "");
      if (vO9.f.substr(2, 1) != "0") {
        vO9.b = parseInt(vO9.f.substr(2, 1), vO7.g);
        if (vO9.i.substr(0, 1) != "0") {
          vO9.b = vO9.b + vO7.g * 20;
        } else {
          vO9.b = vO9.b - 1 + vO7.g / 9 * 100;
        }
      }
      if (vO9.f.substr(3, 1) != "0") {
        vO9.c = parseInt(vO9.f.substr(3, 1), vO7.g);
        if (vO9.i.substr(1, 1) != "0") {
          vO9.c = vO9.c + vO7.g * 20;
        } else {
          vO9.c = vO9.c - 1 + vO7.g / 9 * 100;
        }
      }
      if (vO9.f.substr(4, 1) != "0") {
        vO9.d = parseInt(vO9.f.substr(4, 1), vO7.g);
        if (vO9.i.substr(2, 1) != "0") {
          vO9.d = vO9.d + vO7.g * 20;
        } else {
          vO9.d = vO9.d - 1 + vO7.g / 9 * 100;
        }
      }
      return vO9;
    };
    let vF13 = function (p32) {
      return !(p32 > vO7.g * 30) && !(p32 < vO7.g / 9 * 100) || p32 == 0;
    };
    let vF14 = function (p33) {
      return /^(.{25})(\w{5}\|\w{1})$/.test(p33) || /^(.{25})(\w{4}\|\w{2})$/.test(p33);
    };
    let vF15 = function (p34) {
      p34 = p34.replaceAll("_", " ");
      if (/^(.{25})(\w{7})$/.test(p34)) {
        for (p34 = p34.substr(0, 15).trim(); p34.substr(p34.length - 1, 1) == ".";) {
          p34 = p34.substr(0, p34.length - 1);
        }
        return p34;
      }
      if (/^(.{25})(\w{5}\|\w{1})$/.test(p34) || /^(.{25})(\w{4}\|\w{2})$/.test(p34)) {
        if (p34.substr(-9).substr(0, 1) != ".") {
          return p34.substr(0, 25).trim();
        } else {
          return p34.substr(0, 23).trim();
        }
      } else {
        return p34;
      }
    };
    vO7.loading = true;
    var v33 = localStorage.getItem("oco");
    localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
    localStorage.setItem("ccg_1", "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var v34 = localStorage.getItem("wkgsw");
    var v35 = localStorage.getItem("wkgi") != null ? localStorage.getItem("wkgi").split(",") : localStorage.getItem("wkgi");
    var v36 = localStorage.getItem("wkgit");
    var v37 = localStorage.getItem("custom_wear");
    var v38 = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $("#mm-action-buttons").hover(function () {
      $("#port_id").val("");
      $("#port_name").val("");
    });
    var v39 = null;
    var v40 = null;
    var v41 = false;
    var vLN55 = 55;
    var vLN12 = 1;
    var v42 = true;
    if (v35 && v36 && v36 == vO7.v_z) ;else {
      fetch("https://25yt551.github.io/worm4/store/index.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          img: "i2"
        })
      }).then(async function (p35) {
        v35 = (p35 = await p35.json()).i.split(".");
        localStorage.setItem("wkgi", v35);
        localStorage.setItem("wkgit", p35.vs);
        vO7.v_z = p35.vs;
        localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
        window.location.reload();
      }).catch(function (p36) {});
    }
    ;
    var v43 = PIXI.Texture.from("https://25yt551.github.io/worm4/get_store.phpitem=close_q.png");
    var v44 = PIXI.Texture.from("https://25yt551.github.io/worm4/get_store.phpitem=open_q.png");
    var v45 = PIXI.Texture.from("https://25yt551.github.io/worm4/get_store.phpitem=close_w.png");
    var v46 = PIXI.Texture.from("https://25yt551.github.io/worm4/get_store.phpitem=open_w.png");
    var v47 = PIXI.Texture.from("https://25yt551.github.io/worm4/get_store.phpitem=close_z.png");
    var v48 = PIXI.Texture.from("https://25yt551.github.io/worm4/get_store.phpitem=open_z.png");
    var v49 = PIXI.Texture.from("https://25yt551.github.io/worm4/get_store.phpitem=z_i.png");
    var v50 = PIXI.Texture.from("https://25yt551.github.io/worm4/get_store.phpitem=z_o.png");
    var v51 = new PIXI.Sprite(v43);
    v51.buttonMode = true;
    v51.anchor.set(0.5);
    v51.x = -65;
    v51.y = 25;
    v51.interactive = true;
    v51.buttonMode = true;
    var v52 = new PIXI.Sprite(v45);
    v52.buttonMode = true;
    v52.anchor.set(0.5);
    v52.x = -33;
    v52.y = 25;
    v52.interactive = true;
    v52.buttonMode = true;
    var v53 = new PIXI.Sprite(v47);
    v53.buttonMode = true;
    v53.anchor.set(0.5);
    v53.x = -1;
    v53.y = 25;
    v53.interactive = true;
    v53.buttonMode = true;
    var v54 = new PIXI.Sprite(v50);
    v54.buttonMode = true;
    v54.anchor.set(0.5);
    v54.x = -1;
    v54.y = 25;
    v54.interactive = true;
    v54.buttonMode = true;
    var v55 = new PIXI.Sprite(v49);
    v55.buttonMode = true;
    v55.anchor.set(0.5);
    v55.x = -33;
    v55.y = 25;
    v55.interactive = true;
    v55.buttonMode = true;
    v52.alpha = 0.25;
    v51.alpha = 0.25;
    v53.alpha = 0.25;
    v55.alpha = 0.25;
    v54.alpha = 0.25;
    var v56 = new PIXI.Text(" ?", {
      fontFamily: "PTSans",
      fill: "#fff009",
      fontSize: 12
    });
    v56.anchor.x = 0.5;
    v56.position.x = 110;
    var v57 = document.getElementById("game-cont");
    var v58 = document.getElementById("game-view");
    var v$ = $("#mm-params-game-mode");
    vO2.d.getElementById("game-wrap").style.display = "block";
    (function (p37, p38, p39) {
      function f4(p40, p41) {
        return f3(p40) === p41;
      }
      function f5() {
        if (f3(p38.createElement) != "function") {
          return p38.createElement(arguments[0]);
        } else if (v61) {
          return p38.createElementNS.call(p38, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p38.createElement.apply(p38, arguments);
        }
      }
      var vA = [];
      var vA2 = [];
      var vO10 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p42, p43) {
          var vThis = this;
          setTimeout(function () {
            p43(vThis[p42]);
          }, 0);
        },
        addTest: function (p44, p45, p46) {
          vA2.push({
            name: p44,
            fn: p45,
            options: p46
          });
        },
        addAsyncTest: function (p47) {
          vA2.push({
            name: null,
            fn: p47
          });
        }
      };
      function f6() {}
      f6.prototype = vO10;
      f6 = new f6();
      var v59 = false;
      try {
        v59 = "WebSocket" in p37 && p37.WebSocket.CLOSING === 2;
      } catch (e4) {}
      ;
      f6.addTest("websockets", v59);
      var v60 = p38.documentElement;
      var v61 = v60.nodeName.toLowerCase() === "svg";
      f6.addTest("canvas", function () {
        var vF52 = f5("canvas");
        return !!vF52.getContext && !!vF52.getContext("2d");
      });
      f6.addTest("canvastext", function () {
        return f6.canvas !== false && f3(f5("canvas").getContext("2d").fillText) == "function";
      });
      (function () {
        var v62;
        var v63;
        var v64;
        var v65;
        var v66;
        var v67;
        var v68;
        for (var v69 in vA2) {
          if (vA2.hasOwnProperty(v69)) {
            v62 = [];
            if ((v63 = vA2[v69]).name && (v62.push(v63.name.toLowerCase()), v63.options && v63.options.aliases && v63.options.aliases.length)) {
              for (v64 = 0; v64 < v63.options.aliases.length; v64++) {
                v62.push(v63.options.aliases[v64].toLowerCase());
              }
            }
            ;
            v65 = f4(v63.fn, "function") ? v63.fn() : v63.fn;
            v66 = 0;
            for (; v66 < v62.length; v66++) {
              if ((v68 = (v67 = v62[v66]).split(".")).length === 1) {
                f6[v68[0]] = v65;
              } else {
                if (!!f6[v68[0]] && !(f6[v68[0]] instanceof Boolean)) {
                  f6[v68[0]] = new Boolean(f6[v68[0]]);
                }
                f6[v68[0]][v68[1]] = v65;
              }
              vA.push((v65 ? "" : "no-") + v68.join("-"));
            }
          }
        }
      })();
      (function (p48) {
        var v70 = v60.className;
        var v71 = f6._config.classPrefix || "";
        if (v61) {
          v70 = v70.baseVal;
        }
        if (f6._config.enableJSClass) {
          var vRegExp = RegExp("(^|\\s)" + v71 + "no-js(\\s|$)");
          v70 = v70.replace(vRegExp, "$1" + v71 + "js$2");
        }
        ;
        if (f6._config.enableClasses) {
          v70 += " " + v71 + p48.join(" " + v71);
          if (v61) {
            v60.className.baseVal = v70;
          } else {
            v60.className = v70;
          }
        }
      })(vA);
      delete vO10.addTest;
      delete vO10.addAsyncTest;
      for (var vLN05 = 0; vLN05 < f6._q.length; vLN05++) {
        f6._q[vLN05]();
      }
      ;
      p37.Modernizr = f6;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      vO2.d.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    vO5.f = {
      g: function (p49, p50, p51) {
        p49.stop();
        p49.fadeIn(p50, p51);
      },
      h: function (p52, p53, p54) {
        p52.stop();
        p52.fadeOut(p53, p54);
      }
    };
    vO5.i = vO4.b("WebSocket");
    vO5.j = vO4.b("Float32Array");
    v646 = (v645 = vO4.b("PIXI")).BLEND_MODES;
    v647 = v645.WRAP_MODES;
    vO5.k = {
      l: v645.Container,
      m: v645.BaseTexture,
      n: v645.Texture,
      o: v645.Renderer,
      p: v645.Graphics,
      q: v645.Shader,
      r: v645.Rectangle,
      s: v645.Sprite,
      t: v645.Text,
      u: v645.Geometry,
      v: v645.Mesh,
      w: {
        z: v646.ADD,
        A: v646.SCREEN,
        B: v646.MULTIPLY
      },
      C: {
        D: v647.REPEAT
      },
      F: {
        G: function (p55) {
          var v72 = p55.parent;
          if (v72 != null) {
            v72.removeChild(p55);
          }
        }
      }
    };
    vO3.H = {
      I: vO2.c.runtimeHash,
      J: "https://gateway.wormate.io",
      K: "https://resources.wormate.io",
      L: "/images/linelogo-valday2024.png",
      M: "/images/guest-avatar-valday2024.png",
      N: "/images/confetti-valday2024.png",
      O: "/images/bg-event-pattern-valday2025.png"
    };
    vO3.H.P = ((browserLang = vO2.c.I18N_LANG) || (browserLang = "en"), browserLang);
    vO3.H.Q = function () {
      var v73;
      switch (vO3.H.P) {
        case "uk":
          v73 = "uk_UA";
          break;
        case "de":
          v73 = "de_DE";
          break;
        case "fr":
          v73 = "fr_FR";
          break;
        case "es":
          v73 = "es_ES";
          break;
        default:
          v73 = "en_US";
      }
      ;
      return v73;
    }();
    moment.locale(vO3.H.Q);
    ooo = null;
    vO3.S = 6.283185307179586;
    vO3.T = 3.141592653589793;
    v649 = vO2.c.I18N_MESSAGES;
    vO4.U = function (p56) {
      return v649[p56];
    };
    vO4.V = function (p57) {
      if (p57[vO3.H.P]) {
        return p57[vO3.H.P];
      } else if (p57.en) {
        return p57.en;
      } else {
        return p57.x;
      }
    };
    vO4.W = function (p58) {
      return encodeURI(p58);
    };
    vO4.X = function (p59, p60) {
      return setInterval(p59, p60);
    };
    vO4.Y = function (p61, p62) {
      return setTimeout(p61, p62);
    };
    vO4.Z = function (p63) {
      clearTimeout(p63);
    };
    vO4.$ = function (p64) {
      var v74 = (vO4._(p64) % 60).toString();
      var v75 = (vO4._(p64 / 60) % 60).toString();
      var v76 = (vO4._(p64 / 3600) % 24).toString();
      var v77 = vO4._(p64 / 86400).toString();
      var v78 = vO4.U("util.time.days");
      var v79 = vO4.U("util.time.hours");
      var v80 = vO4.U("util.time.min");
      var v81 = vO4.U("util.time.sec");
      if (v77 > 0) {
        return v77 + " " + v78 + " " + v76 + " " + v79 + " " + v75 + " " + v80 + " " + v74 + " " + v81;
      } else if (v76 > 0) {
        return v76 + " " + v79 + " " + v75 + " " + v80 + " " + v74 + " " + v81;
      } else if (v75 > 0) {
        return v75 + " " + v80 + " " + v74 + " " + v81;
      } else {
        return v74 + " " + v81;
      }
    };
    vO4.aa = function (p65) {
      if (p65.includes("href")) {
        return p65.replaceAll("href", "target=\"_black\" href");
      } else {
        return p65;
      }
    };
    vO4.ba = function (p66, p67, p68) {
      var v82 = vO2.d.createElement("script");
      var v83 = true;
      if (f3(p67) !== "undefined" && p67 !== null) {
        if (f3(p67.id) !== "undefined") {
          v82.id = p67.id;
        }
        if (f3(p67.async) !== "undefined" && p67.async) {
          v82.async = "async";
        }
        if (f3(p67.defer) !== "undefined" && p67.defer) {
          v82.defer = "defer";
        }
        if (f3(p67.crossorigin) !== "undefined") {
          v82.crossorigin = p67.crossorigin;
        }
      }
      v82.type = "text/javascript";
      v82.src = p66;
      if (p68) {
        v82.onload = v82.onreadystatechange = function () {
          v83 = false;
          try {
            p68();
          } catch (e5) {}
          ;
          v82.onload = v82.onreadystatechange = null;
        };
      }
      (vO2.d.head || vO2.d.getElementsByTagName("head")[0]).appendChild(v82);
    };
    vO4.ca = function (p69, p70) {
      var vP70 = p70;
      vP70.prototype = Object.create(p69.prototype);
      vP70.prototype.constructor = vP70;
      vP70.parent = p69;
      return vP70;
    };
    vO4.da = function (p71) {
      if ((p71 %= vO3.S) < 0) {
        return p71 + vO3.S;
      } else {
        return p71;
      }
    };
    vO4.ea = function (p72, p73, p74) {
      return vO4.fa(p74, p72, p73);
    };
    vO4.fa = function (p75, p76, p77) {
      if (p75 > p77) {
        return p77;
      } else if (p75 < p76) {
        return p76;
      } else if (Number.isFinite(p75)) {
        return p75;
      } else {
        return (p76 + p77) * 0.5;
      }
    };
    vO4.ga = function (p78, p79, p80, p81) {
      if (p79 > p78) {
        return vO4.ha(p79, p78 + p80 * p81);
      } else {
        return vO4.ia(p79, p78 - p80 * p81);
      }
    };
    vO4.ja = function (p82, p83, p84, p85, p86) {
      return p83 + (p82 - p83) * Math.pow(1 - p85, p84 / p86);
    };
    vO4.ka = function (p87, p88, p89) {
      return p87 - (p87 - p88) * p89;
    };
    vO4.la = function (p90, p91) {
      return Math.sqrt(p90 * p90 + p91 * p91);
    };
    vO4.ma = function () {
      return Math.random();
    };
    vO4._ = function (p92) {
      return Math.floor(p92);
    };
    vO4.na = function (p93) {
      return Math.abs(p93);
    };
    vO4.ha = function (p94, p95) {
      return Math.min(p94, p95);
    };
    vO4.ia = function (p96, p97) {
      return Math.max(p96, p97);
    };
    vO4.oa = function (p98) {
      return Math.sin(p98);
    };
    vO4.pa = function (p99) {
      return Math.cos(p99);
    };
    vO4.qa = function (p100) {
      return Math.sqrt(p100);
    };
    vO4.ra = function (p101, p102) {
      return Math.pow(p101, p102);
    };
    vO4.sa = function (p103) {
      return Math.atan(p103);
    };
    vO4.ta = function (p104, p105) {
      return Math.atan2(p104, p105);
    };
    vO4.ua = function (p106, p107, p108, p109) {
      var v84 = p107 + p109;
      if (p106 == null) {
        throw TypeError();
      }
      ;
      var v85 = p106.length >>> 0;
      var v86 = p108 >> 0;
      var v87 = v86 < 0 ? Math.max(v85 + v86, 0) : Math.min(v86, v85);
      var v88 = p107 >> 0;
      var v89 = v88 < 0 ? Math.max(v85 + v88, 0) : Math.min(v88, v85);
      var v90 = v84 === undefined ? v85 : v84 >> 0;
      var v91 = Math.min((v90 < 0 ? Math.max(v85 + v90, 0) : Math.min(v90, v85)) - v89, v85 - v87);
      var vLN13 = 1;
      for (v89 < v87 && v87 < v89 + v91 && (vLN13 = -1, v89 += v91 - 1, v87 += v91 - 1); v91 > 0;) {
        if (v89 in p106) {
          p106[v87] = p106[v89];
        } else {
          delete p106[v87];
        }
        v89 += vLN13;
        v87 += vLN13;
        v91--;
      }
      ;
      return p106;
    };
    vO4.va = function (p110, p111) {
      return p110 + (p111 - p110) * vO4.ma();
    };
    vO4.wa = function (p112) {
      return p112[parseInt(vO4.ma() * p112.length)];
    };
    v650 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map(function (p113) {
      return p113.charCodeAt(0);
    });
    vO4.xa = function (p114) {
      if (f3(p114) == "undefined") {
        p114 = 16;
      }
      var vLS = "";
      for (var vLN06 = 0; vLN06 < p114; vLN06++) {
        vLS += String.fromCharCode(v650[vO4._(vO4.ma() * v650.length)]);
      }
      ;
      return vLS;
    };
    vO4.ya = function (p115, p116, p117) {
      var v92 = p117 * (1 - p116 * 0.5);
      var v93 = Math.min(v92, 1 - v92);
      return vO4.za(p115, v93 ? (p117 - v92) / v93 : 0, v92);
    };
    vO4.za = function (p118, p119, p120) {
      var v94 = (1 - vO4.na(p120 * 2 - 1)) * p119;
      var v95 = v94 * (1 - vO4.na(p118 / 60 % 2 - 1));
      var v96 = p120 - v94 / 2;
      if (p118 >= 0 && p118 < 60) {
        return [v96 + v94, v96 + v95, v96];
      } else if (p118 >= 60 && p118 < 120) {
        return [v96 + v95, v96 + v94, v96];
      } else if (p118 >= 120 && p118 < 180) {
        return [v96, v96 + v94, v96 + v95];
      } else if (p118 >= 180 && p118 < 240) {
        return [v96, v96 + v95, v96 + v94];
      } else if (p118 >= 240 && p118 < 300) {
        return [v96 + v95, v96, v96 + v94];
      } else {
        return [v96 + v94, v96, v96 + v95];
      }
    };
    vO4.Aa = function (p121, p122, p123) {
      $.get(p121).fail(p122).done(p123);
    };
    vO4.Ba = function (p124, p125, p126, p127) {
      var vO11 = {
        type: "GET",
        url: p124
      };
      var vO12 = {
        responseType: "arraybuffer"
      };
      vO12.onprogress = function (p128) {
        if (p128.lengthComputable) {
          p127(p128.loaded / p128.total * 100);
        }
      };
      vO11.xhrFields = vO12;
      $.ajax(vO11).fail(p125).done(p126);
    };
    vO4.Ca = function () {
      return Date.now();
    };
    vO4.Da = function (p129, p130) {
      for (var v97 in p129) {
        if (p129.hasOwnProperty(v97)) {
          p130(v97, p129[v97]);
        }
      }
    };
    vO4.Ea = function (p131) {
      for (var v98 = p131.length - 1; v98 > 0; v98--) {
        var v99 = vO4._(vO4.ma() * (v98 + 1));
        var v100 = p131[v98];
        p131[v98] = p131[v99];
        p131[v99] = v100;
      }
      ;
      return p131;
    };
    vO2.Fa = vO4.b("ArrayBuffer");
    vO2.Ga = vO4.b("DataView");
    vO2.Ha = function () {
      function f7(p132) {
        this.Ia = p132;
        this.Ja = 0;
      }
      var vLSGetInt8 = "getInt8";
      f7.prototype.Ka = function () {
        var v101 = this.Ia[vLSGetInt8](this.Ja);
        this.Ja += 1;
        return v101;
      };
      var vLSGetInt16 = "getInt16";
      f7.prototype.La = function () {
        var v102 = this.Ia[vLSGetInt16](this.Ja);
        this.Ja += 2;
        return v102;
      };
      var vLSGetInt32 = "getInt32";
      f7.prototype.Ma = function () {
        var v103 = this.Ia[vLSGetInt32](this.Ja);
        this.Ja += 4;
        return v103;
      };
      var vLSGetFloat32 = "getFloat32";
      f7.prototype.Na = function () {
        var v104 = this.Ia[vLSGetFloat32](this.Ja);
        this.Ja += 4;
        return v104;
      };
      return f7;
    }();
    vO2.Oa = function () {
      function f8(p133) {
        this.Ia = p133;
        this.Ja = 0;
      }
      var vLSSetInt8 = "setInt8";
      f8.prototype.Pa = function (p134) {
        this.Ia[vLSSetInt8](this.Ja, p134);
        this.Ja += 1;
      };
      var vLSSetInt16 = "setInt16";
      f8.prototype.Qa = function (p135) {
        this.Ia[vLSSetInt16](this.Ja, p135);
        this.Ja += 2;
      };
      return f8;
    }();
    vO4.Ra = function () {
      var v105 = false;
      function f9() {}
      var vO13 = {};
      var vLS1eaom01c3pxu9wd3 = "1eaom01c3pxu9wd3";
      var v$2 = $("#" + vLS1eaom01c3pxu9wd3);
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      var v$3 = $("#" + vLSJDHnkHtYwyXyVgG9);
      $("#adbl-continue").click(function () {
        v$3.fadeOut(500);
        f9(false);
      });
      vO13.Sa = function (p136) {
        f9 = p136;
        if (!v105) {
          try {
            aiptag.cmd.player.push(function () {
              var vO14 = {
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false
              };
              vO14.LOADING_TEXT = "loading advertisement";
              vO14.PREROLL_ELEM = function () {
                return vO2.d.getElementById(vLS1eaom01c3pxu9wd3);
              };
              vO14.AIP_COMPLETE = function (p137) {
                f9(true);
                vO5.f.h(v$2, 1);
                vO5.f.h(v$3, 1);
                try {
                  ga("send", "event", "preroll", vO3.H.I + "_complete");
                } catch (e6) {}
              };
              vO14.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(vO14);
            });
            v105 = true;
          } catch (e7) {}
        }
      };
      vO13.Ta = function () {
        if (f3(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", vO3.H.I + "_request");
          } catch (e8) {}
          ;
          vO5.f.g(v$2, 1);
          if (!vO6.on) {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer.startPreRoll();
            });
          }
        } else {
          try {
            ga("send", "event", "antiadblocker", vO3.H.I + "_start");
          } catch (e9) {}
          ;
          (function f10() {
            $("#adbl-1").text(vO4.U("index.game.antiadblocker.msg1"));
            $("#adbl-2").text(vO4.U("index.game.antiadblocker.msg2"));
            $("#adbl-3").text(vO4.U("index.game.antiadblocker.msg3"));
            $("#adbl-4").text(vO4.U("index.game.antiadblocker.msg4").replace("{0}", 10));
            $("#adbl-continue span").text(vO4.U("index.game.antiadblocker.continue"));
            vO5.f.h($("#adbl-continue"), 1);
            vO5.f.g(v$3, 500);
            var vLN10 = 10;
            for (var vLN07 = 0; vLN07 < 10; vLN07++) {
              vO4.Y(function () {
                vLN10--;
                $("#adbl-4").text(vO4.U("index.game.antiadblocker.msg4").replace("{0}", vLN10));
                if (vLN10 === 0) {
                  try {
                    ga("send", "event", "antiadblocker", vO3.H.I + "_complete");
                  } catch (e10) {}
                  ;
                  vO5.f.g($("#adbl-continue"), 200);
                }
              }, (vLN07 + 1) * 1000);
            }
          })();
        }
      };
      return vO13;
    };
    vO4.Ua = function (p138, p139) {
      var v$4 = $("#" + p138);
      var vP139 = p139;
      var vO15 = {};
      var v106 = false;
      vO15.Sa = function () {
        if (!v106) {
          v$4.empty();
          v$4.append("<div id='" + vP139 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", vO3.H.I + "_display");
            } catch (e11) {}
            ;
            if (!vO6.on) {
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(vP139);
              });
            }
            v106 = true;
          } catch (e12) {}
        }
      };
      vO15.Va = function () {
        try {
          try {
            ga("send", "event", "banner", vO3.H.I + "_refresh");
          } catch (e13) {}
          ;
          if (!vO6.on) {
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP139);
            });
          }
        } catch (e14) {}
      };
      return vO15;
    };
    vO2.Wa = function () {
      function f11(p140, p141, p142, p143, p144, p145, p146, p147, p148, p149) {
        this.Xa = p140;
        this.Ya = p141;
        this.Za = null;
        this.$a = false;
        this._a = p142;
        this.ab = p143;
        this.bb = p144;
        this.cb = p145;
        this.db = p146 || (p148 || p144) / 2;
        this.eb = p147 || (p149 || p145) / 2;
        this.fb = p148 || p144;
        this.gb = p149 || p145;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      f11.lb = function () {
        return new f11("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      f11.mb = function (p150, p151, p152) {
        return new f11(p150, p151, p152.x, p152.y, p152.w, p152.h, p152.px, p152.py, p152.pw, p152.ph);
      };
      f11.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new vO5.k.n(this.Ya, new vO5.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      f11.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return f11;
    }();
    vO2.pb = function () {
      function f12(p153, p154, p155, p156, p157, p158, p159, p160, p161, p162, p163, p164, p165, p166, p167, p168, p169, p170) {
        this.qb = p153;
        this.rb = p154;
        this.sb = p155;
        this.tb = p156;
        this.ub = p157;
        this.vb = p158;
        this.wb = p159;
        this.xb = p160;
        this.yb = p161;
        this.zb = p162;
        this.Ab = p163;
        this.Bb = p164;
        this.Cb = p165;
        this.Db = p166;
        this.Eb = p167;
        this.Fb = p168;
        this.Gb = p169;
        this.Hb = p170;
      }
      f12.prototype.ob = function () {
        for (var vLN08 = 0; vLN08 < this.qb.length; vLN08++) {
          this.qb[vLN08].dispose();
          this.qb[vLN08].destroy();
        }
        ;
        this.qb = [];
        for (var vLN09 = 0; vLN09 < this.rb.length; vLN09++) {
          this.rb[vLN09].ob();
        }
        ;
        this.rb = [];
      };
      f12.lb = function () {
        var v107 = new f12.Ib(vO2.Kb.Jb, vO2.Kb.Jb);
        var v108 = new f12.Lb("#ffffff", [vO2.Kb.Jb], [vO2.Kb.Jb]);
        return new f12([], [], {}, v107, {}, new f12.Mb(vO2.Kb.Jb), {}, v108, {}, new f12.Nb("", v108, v107), {}, new f12.Ob([vO2.Kb.Jb]), {}, new f12.Ob([vO2.Kb.Jb]), {}, new f12.Ob([vO2.Kb.Jb]), {}, new f12.Ob([vO2.Kb.Jb]));
      };
      f12.Pb = function (p171, p172, p173, p174) {
        var v109 = new f12.Ib(vO2.Kb.Jb, vO2.Kb.Jb);
        var v110 = new f12.Lb("#ffffff", [p171], [p172]);
        return new f12([], [], {}, v109, {}, new f12.Mb(vO2.Kb.Jb), {}, v110, {}, new f12.Nb("", v110, v109), {}, new f12.Ob([p173]), {}, new f12.Ob([p174]), {}, new f12.Ob([vO2.Kb.Jb]), {}, new f12.Ob([vO2.Kb.Jb]));
      };
      f12.Qb = function (p175, p176, p177, p178) {
        var vO16 = {};
        vO4.Da(p175.colorDict, function (p179, p180) {
          vO16[p179] = "#" + p180;
        });
        var vO17 = {};
        for (var vLN010 = 0; vLN010 < p175.skinArrayDict.length; vLN010++) {
          var v111 = p175.skinArrayDict[vLN010];
          vO17[v111.id] = new f12.Lb(vO16[v111.prime], v111.base.map(function (p181) {
            return p176[p181];
          }), v111.glow.map(function (p182) {
            return p176[p182];
          }));
        }
        ;
        var v112;
        var v113 = p175.skinUnknown;
        v112 = new f12.Lb(vO16[v113.prime], v113.base.map(function (p183) {
          return p176[p183];
        }), v113.glow.map(function (p184) {
          return p176[p184];
        }));
        var vO18 = {};
        vO4.Da(p175.eyesDict, function (p185, p186) {
          vO18[parseInt(p185)] = new f12.Ob(p186.base.map(function (p187) {
            return p176[p187.region];
          }));
        });
        var v114 = new f12.Ob(p175.eyesUnknown.base.map(function (p188) {
          return p176[p188.region];
        }));
        var vO19 = {};
        vO4.Da(p175.mouthDict, function (p189, p190) {
          vO19[parseInt(p189)] = new f12.Ob(p190.base.map(function (p191) {
            return p176[p191.region];
          }));
        });
        var v115 = new f12.Ob(p175.mouthUnknown.base.map(function (p192) {
          return p176[p192.region];
        }));
        var vO20 = {};
        vO4.Da(p175.hatDict, function (p193, p194) {
          vO20[parseInt(p193)] = new f12.Ob(p194.base.map(function (p195) {
            return p176[p195.region];
          }));
        });
        var v116 = new f12.Ob(p175.hatUnknown.base.map(function (p196) {
          return p176[p196.region];
        }));
        var vO21 = {};
        vO4.Da(p175.glassesDict, function (p197, p198) {
          vO21[parseInt(p197)] = new f12.Ob(p198.base.map(function (p199) {
            return p176[p199.region];
          }));
        });
        var v117 = new f12.Ob(p175.glassesUnknown.base.map(function (p200) {
          return p176[p200.region];
        }));
        var vO22 = {};
        vO4.Da(p175.portionDict, function (p201, p202) {
          vO22[p201 = parseInt(p201)] = new f12.Ib(p176[p202.base], p176[p202.glow]);
        });
        var v118;
        var v119 = p175.portionUnknown;
        v118 = new f12.Ib(p176[v119.base], p176[v119.glow]);
        var vO23 = {};
        vO4.Da(p175.abilityDict, function (p203, p204) {
          vO23[p203 = parseInt(p203)] = new f12.Mb(p176[p204.base]);
        });
        var v120;
        var v121 = p175.abilityUnknown;
        v120 = new f12.Mb(p176[v121.base]);
        var vO24 = {};
        vO4.Da(p175.teamDict, function (p205, p206) {
          vO24[p205 = parseInt(p205)] = new f12.Nb(p206.title, new f12.Lb(vO16[p206.skin.prime], null, p206.skin.glow.map(function (p207) {
            return p176[p207];
          })), new f12.Ib(null, p176[p206.portion.glow]));
        });
        var v122 = new f12.Nb({}, v112, v118);
        return new f12(p177, p178, vO22, v118, vO23, v120, vO17, v112, vO24, v122, vO18, v114, vO19, v115, vO20, v116, vO21, v117);
      };
      f12.prototype.Rb = function (p208) {
        var v123 = vO4.Ea(Object.keys(this.wb)).slice(0, p208);
        var v124 = vO4.Ea(Object.keys(this.Ab)).slice(0, p208);
        var v125 = vO4.Ea(Object.keys(this.Cb)).slice(0, p208);
        var v126 = vO4.Ea(Object.keys(this.Eb)).slice(0, p208);
        var v127 = vO4.Ea(Object.keys(this.Gb)).slice(0, p208);
        var vA3 = [];
        for (var vLN011 = 0; vLN011 < p208; vLN011++) {
          var v128 = v123.length > 0 ? v123[vLN011 % v123.length] : 0;
          var v129 = v124.length > 0 ? v124[vLN011 % v124.length] : 0;
          var v130 = v125.length > 0 ? v125[vLN011 % v125.length] : 0;
          var v131 = v126.length > 0 ? v126[vLN011 % v126.length] : 0;
          var v132 = v127.length > 0 ? v127[vLN011 % v127.length] : 0;
          vA3.push(new vO2.Sb(v128, v129, v130, v131, v132));
        }
        ;
        return vA3;
      };
      f12.prototype.Tb = function (p209) {
        if (this.wb.hasOwnProperty(p209)) {
          return this.wb[p209];
        } else {
          return this.xb;
        }
      };
      f12.prototype.Ub = function (p210) {
        if (this.yb.hasOwnProperty(p210)) {
          return this.yb[p210];
        } else {
          return this.zb;
        }
      };
      f12.prototype.Vb = function (p211) {
        if (this.Ab.hasOwnProperty(p211)) {
          return this.Ab[p211];
        } else {
          return this.Bb;
        }
      };
      f12.prototype.Wb = function (p212) {
        if (this.Cb.hasOwnProperty(p212)) {
          return this.Cb[p212];
        } else {
          return this.Db;
        }
      };
      f12.prototype.Xb = function (p213) {
        if (this.Gb.hasOwnProperty(p213)) {
          return this.Gb[p213];
        } else {
          return this.Hb;
        }
      };
      f12.prototype.Yb = function (p214) {
        if (this.Eb.hasOwnProperty(p214)) {
          return this.Eb[p214];
        } else {
          return this.Fb;
        }
      };
      f12.prototype.Zb = function (p215) {
        if (this.sb.hasOwnProperty(p215)) {
          return this.sb[p215];
        } else {
          return this.tb;
        }
      };
      f12.prototype.$b = function (p216) {
        if (this.ub.hasOwnProperty(p216)) {
          return this.ub[p216];
        } else {
          return this.vb;
        }
      };
      f12.Nb = function f13(p217, p218, p219) {
        this._b = p217;
        this.ac = p218;
        this.bc = p219;
      };
      f12.Lb = function f14(p220, p221, p222) {
        this.cc = p220;
        this.dc = p221;
        this.ec = p222;
      };
      f12.Ob = function f15(p223) {
        this.dc = p223;
      };
      f12.Ib = function f16(p224, p225) {
        this.dc = p224;
        this.ec = p225;
      };
      f12.Mb = function f17(p226) {
        this.dc = p226;
      };
      return f12;
    }();
    vO2.Kb = function () {
      function f18() {
        var v133 = vO5.k.m.from("/images/wear-ability.png");
        this.fc = new vO2.Wa("magnet_ability", v133, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.gc = new vO2.Wa("velocity_ability", v133, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.hc = new vO2.Wa("flex_ability", v133, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var v134 = vO5.k.m.from("https://i.imgur.com/wJRSUUx.png");
        this.pwrFlex1 = new vO2.Wa("flex_ability", v134, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var v135 = vO5.k.m.from("https://i.imgur.com/LFiCido.png");
        this.pwrFlex = new vO2.Wa("flex_ability", v135, 156, 140, 87, 60, 170, 128.5, 128, 128);
        var v136 = vO5.k.m.from("https://i.imgur.com/LvJ1RxC.png");
        this.pwrFlex2 = new vO2.Wa("flex_ability2", v136, 156, 4, 87, 74, 285, 63.5, 128, 128);
        var v137;
        var v138 = vO5.k.m.from("/images/def-look.png");
        var v139 = new vO2.Wa("def_eyes", v138, 0, 0, 42, 80, 75, 64, 128, 128);
        var v140 = new vO2.Wa("def_mouth", v138, 46, 0, 20, 48, 109, 63, 128, 128);
        var v141 = new vO2.Wa("def_skin_glow", v138, 70, 0, 32, 32, 0, 0, 0, 0);
        var v142 = new vO2.Wa("def_skin_base", v138, 46, 52, 64, 64, 0, 0, 0, 0);
        var v143 = vO2.pb.Pb(v142, v141, v139, v140);
        this.ic = new vO2.jc({}, v143);
        this.kc = -10000;
        this.lc = -10000;
        this.mc = ((v137 = vO2.c.document.createElement("canvas")).width = 80, v137.height = 80, {
          nc: v137,
          oc: v137.getContext("2d"),
          Za: new vO5.k.n(vO5.k.m.from(v137))
        });
        this.pc = null;
        this.qc = [];
      }
      f18.Jb = vO2.Wa.lb();
      f18.prototype.Sa = function () {};
      f18.prototype.rc = function (p227, p228, p229) {
        var vThis2 = this;
        var v144 = this.ic.sc();
        if (v144 > 0 && vO4.Ca() - this.kc < 1200000) {
          if (p227 != null) {
            p227();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (vO4.Ca() - this.kc < 300000) {
            if (p227 != null) {
              p227();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var v145 = new vO2.vc(v144);
        v145.wc(function (p230, p231) {
          if (v145 === vThis2.pc && p229 != null) {
            p229(p230, p231);
          }
        });
        v145.xc(function (p232) {
          if (v145 === vThis2.pc && p228 != null) {
            p228(p232);
          }
        });
        v145.yc(function () {
          if (v145 === vThis2.pc && p228 != null) {
            p228(Error());
          }
        });
        v145.zc(function () {
          if (v145 === vThis2.pc && p227 != null) {
            p227();
          }
        });
        v145.Ac(function (p233) {
          if (v145 === vThis2.pc) {
            vThis2.lc = vO4.Ca();
            vThis2.pc = null;
            vThis2.Bc();
            vThis2.ic.Cc().ob();
            vThis2.ic = p233;
            if (p227 != null) {
              p227();
            }
            vThis2.Dc();
            return;
          }
          ;
          try {
            p233.Cc().ob();
          } catch (e15) {}
        });
        v145.Ec();
        this.kc = vO4.Ca();
        this.pc = v145;
      };
      f18.prototype.Bc = function () {};
      f18.prototype.Fc = function () {
        return this.ic.sc() > 0;
      };
      f18.prototype.Gc = function () {
        return this.ic.Hc();
      };
      f18.prototype.Ic = function () {
        return this.mc;
      };
      f18.prototype.Jc = function (p234) {
        this.qc.push(p234);
      };
      f18.prototype.Dc = function () {
        for (var vLN012 = 0; vLN012 < this.qc.length; vLN012++) {
          this.qc[vLN012]();
        }
      };
      f18.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return f18;
    }();
    vO2.Kc = function () {
      function f19(p235) {
        this.Lc = p235;
      }
      f19.prototype.Mc = function (p236) {
        return this.Lc[p236];
      };
      f19.Nc = function () {
        function f20() {
          this.Oc = [];
        }
        f20.prototype.Pc = function (p237, p238) {
          for (var vLN013 = 0; vLN013 < this.Oc.length; vLN013++) {
            if (this.Oc[vLN013].Qc === p237) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new f19.Rc(p237, p238));
          return this;
        };
        f20.prototype.Sc = function () {
          var vLN014 = 0;
          for (var vLN015 = 0; vLN015 < this.Oc.length; vLN015++) {
            vLN014 += this.Oc[vLN015].Tc;
          }
          ;
          var vO25 = {};
          var vLN016 = 0;
          for (var vLN017 = 0; vLN017 < this.Oc.length; vLN017++) {
            var v146 = this.Oc[vLN017];
            v146.Tc = v146.Tc / vLN014;
            v146.Uc = vLN016;
            v146.Vc = vLN016 + v146.Tc;
            vLN016 = v146.Vc;
            vO25[v146.Qc] = v146;
          }
          ;
          return new f19(vO25);
        };
        return f20;
      }();
      f19.Rc = function () {
        function f21(p239, p240) {
          this.Qc = p239;
          this.Tc = p240;
          this.Uc = 0;
          this.Vc = 0;
        }
        f21.prototype.Wc = function (p241) {
          return this.Uc + (this.Vc - this.Uc) * p241;
        };
        return f21;
      }();
      return f19;
    }();
    vO2.Xc = function () {
      function f22() {
        this.Yc = new vO5.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new vV147();
        this.Zc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.$c = 0;
        this._c = Array(vLN797);
        this._c[0] = this.ad(0, new vO2.bd(), new vO2.bd());
        for (var vLN14 = 1; vLN14 < vLN797; vLN14++) {
          this._c[vLN14] = this.ad(vLN14, new vO2.bd(), new vO2.bd());
        }
        ;
        this.cd = 0;
        this.dd = 0;
        this.ed = 0;
      }
      var v147;
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v148 = vO3.T * 0.1;
      f22.fd = vLN797;
      f22.prototype.ad = function (p242, p243, p244) {
        var v149 = new vF16(p243, p244);
        p243.gd.zIndex = vLN0001 * ((vLN797 - p242) * 2 + 1 + 3);
        p244.gd.zIndex = vLN0001 * ((vLN797 - p242) * 2 - 2 + 3);
        return v149;
      };
      f22.prototype.hd = function (p245, p246, p247, p248, p249, p250, p251, p252) {
        var v150 = p247.dc;
        var v151 = p245 === vO2.jd.id ? p246.ac.ec : p247.ec;
        if (v150.length > 0 && v151.length > 0) {
          for (var vLN018 = 0; vLN018 < this._c.length; vLN018++) {
            this._c[vLN018].ld.kd(v150[vLN018 % v150.length]);
            this._c[vLN018].md.kd(v151[vLN018 % v151.length]);
            this._c[vLN018].ld.nd(p252);
            this._c[vLN018].md.nd(p252);
          }
        }
        ;
        this.Zc.hd(p248, p249, p250, p251);
      };
      (v147 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new vO5.k.l();
        this.td = [];
        for (var vLN019 = 0; vLN019 < 4; vLN019++) {
          var v152 = new vO2.bd();
          v152.kd(ooo.ud.fc);
          this.sd.addChild(v152.gd);
          this.td.push(v152);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new vO2.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
        this.pwr_flex1 = new vO2.bd();
        this.pwr_flex1.kd(ooo.ud.pwrFlex1);
        this.pwr_flex1.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex1.gd);
        this.pwr_flex = new vO2.bd();
        this.pwr_flex.kd(ooo.ud.pwrFlex);
        this.pwr_flex.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex.gd);
        this.pwr_flex2 = new vO2.bd();
        this.pwr_flex2.kd(ooo.ud.pwrFlex2);
        this.pwr_flex2.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex2.gd);
        this.disableFlex();
      })).prototype.hd = function (p253, p254, p255, p256) {
        this.yd(0.002, this.od, p253.dc);
        this.yd(0.003, this.pd, p254.dc);
        this.yd(0.004, this.rd, p256.dc);
        this.yd(0.005, this.qd, p255.dc);
      };
      v147.prototype.yd = function (p257, p258, p259) {
        while (p259.length > p258.length) {
          var v153 = new vO2.bd();
          p258.push(v153);
          this.addChild(v153.zd());
        }
        ;
        while (p259.length < p258.length) {
          p258.pop().G();
        }
        ;
        var vP257 = p257;
        for (var vLN020 = 0; vLN020 < p259.length; vLN020++) {
          vP257 += 0.0001;
          var v154 = p258[vLN020];
          v154.kd(p259[vLN020]);
          v154.gd.zIndex = vP257;
        }
      };
      v147.prototype.Ad = function (p260, p261, p262, p263) {
        this.visible = true;
        this.position.set(p260, p261);
        this.rotation = p263;
        for (var vLN021 = 0; vLN021 < this.od.length; vLN021++) {
          this.od[vLN021].Bd(p262);
        }
        ;
        for (var vLN022 = 0; vLN022 < this.pd.length; vLN022++) {
          this.pd[vLN022].Bd(p262);
        }
        ;
        for (var vLN023 = 0; vLN023 < this.qd.length; vLN023++) {
          this.qd[vLN023].Bd(p262);
        }
        ;
        for (var vLN024 = 0; vLN024 < this.rd.length; vLN024++) {
          this.rd[vLN024].Bd(p262);
        }
      };
      v147.prototype.Cd = function () {
        this.visible = false;
      };
      v147.prototype.Dd = function (p264, p265, p266, p267) {
        this.sd.visible = true;
        var v155 = p266 / 1000;
        var v156 = 1 / this.td.length;
        for (var vLN025 = 0; vLN025 < this.td.length; vLN025++) {
          var v157 = 1 - (v155 + v156 * vLN025) % 1;
          this.td[vLN025].gd.alpha = 1 - v157;
          this.td[vLN025].Bd(p265 * (0.5 + v157 * 4.5));
        }
      };
      v147.prototype.vd = function () {
        this.sd.visible = false;
      };
      v147.prototype.Ed = function (p268, p269, p270, p271) {
        this.wd.gd.visible = vO7.vp;
        this.wd.gd.alpha = vO4.ga(this.wd.gd.alpha, p268.Fd ? 0.9 : 0.4, p271, 0.0025);
        this.wd.Bd(p269);
      };
      v147.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      v147.prototype.activeFlex = function (p272, p273, p274, p275) {
        this.pwr_flex1.gd.visible = vO7.flx === 1;
        this.pwr_flex1.gd.alpha = vO4.ga(this.wd.gd.alpha, p272.Fd ? 1 : 1, p275, 1);
        this.pwr_flex1.Bd(p273);
        this.pwr_flex.gd.visible = vO7.flx === 2;
        this.pwr_flex.gd.alpha = vO4.ga(this.wd.gd.alpha, p272.Fd ? 0.9 : 0.5, p275, 0.0025);
        this.pwr_flex.Bd(p273);
        this.pwr_flex2.gd.visible = vO7.flx === 3;
        this.pwr_flex2.gd.alpha = vO4.ga(this.wd.gd.alpha, p272.Fd ? 0.9 : 0.5, p275, 0.0025);
        this.pwr_flex2.Bd(p273);
      };
      v147.prototype.disableFlex = function () {
        this.pwr_flex1.gd.visible = false;
        this.pwr_flex.gd.visible = false;
        this.pwr_flex2.gd.visible = false;
      };
      var vV147 = v147;
      f22.prototype.Gd = function (p276) {
        return this.dd + this.ed * vO4.oa(p276 * v148 - this.cd);
      };
      f22.prototype.Hd = function (p277, p278, p279, p280) {
        var v158;
        var v159;
        var v160;
        var v161;
        var v162;
        var v163;
        var v164;
        var v165;
        var v166 = p277.Id * 2;
        var v167 = p277.Jd;
        var v168 = p277.Kd;
        var v169 = v168 * 4 - 3;
        var vV169 = v169;
        this.cd = p278 / 400 * vO3.T;
        this.dd = v166 * 1.5;
        this.ed = v166 * 0.15 * p277.Ld;
        if (p280(v159 = v167[0], v163 = v167[1])) {
          v160 = v167[2];
          v164 = v167[3];
          v161 = v167[4];
          v165 = v167[5];
          var v170 = vO4.ta(v165 + v163 * 2 - v164 * 3, v161 + v159 * 2 - v160 * 3);
          this.Zc.Ad(v159, v163, v166, v170);
          this._c[0].Ad(v159, v163, v166, this.Gd(0), v170);
          this._c[1].Ad(v159 * 0.64453125 + v160 * 0.45703125 + v161 * -0.1015625, v163 * 0.64453125 + v164 * 0.45703125 + v165 * -0.1015625, v166, this.Gd(1), vF16.Md(this._c[0], this._c[2]));
          this._c[2].Ad(v159 * 0.375 + v160 * 0.75 + v161 * -0.125, v163 * 0.375 + v164 * 0.75 + v165 * -0.125, v166, this.Gd(2), vF16.Md(this._c[1], this._c[3]));
          this._c[3].Ad(v159 * 0.15234375 + v160 * 0.94921875 + v161 * -0.1015625, v163 * 0.15234375 + v164 * 0.94921875 + v165 * -0.1015625, v166, this.Gd(3), vF16.Md(this._c[2], this._c[4]));
        } else {
          this.Zc.Cd();
          this._c[0].Cd();
          this._c[1].Cd();
          this._c[2].Cd();
          this._c[3].Cd();
        }
        ;
        var vLN4 = 4;
        for (var vLN22 = 2, v171 = v168 * 2 - 4; vLN22 < v171; vLN22 += 2) {
          if (p280(v159 = v167[vLN22], v163 = v167[vLN22 + 1])) {
            v158 = v167[vLN22 - 2];
            v162 = v167[vLN22 - 1];
            v160 = v167[vLN22 + 2];
            v164 = v167[vLN22 + 3];
            v161 = v167[vLN22 + 4];
            v165 = v167[vLN22 + 5];
            this._c[vLN4].Ad(v159, v163, v166, this.Gd(vLN4), vF16.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v158 * -0.06640625 + v159 * 0.84375 + v160 * 0.2578125 + v161 * -0.03515625, v162 * -0.06640625 + v163 * 0.84375 + v164 * 0.2578125 + v165 * -0.03515625, v166, this.Gd(vLN4), vF16.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v158 * -0.0625 + v159 * 0.5625 + v160 * 0.5625 + v161 * -0.0625, v162 * -0.0625 + v163 * 0.5625 + v164 * 0.5625 + v165 * -0.0625, v166, this.Gd(vLN4), vF16.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v158 * -0.03515625 + v159 * 0.2578125 + v160 * 0.84375 + v161 * -0.06640625, v162 * -0.03515625 + v163 * 0.2578125 + v164 * 0.84375 + v165 * -0.06640625, v166, this.Gd(vLN4), vF16.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
          } else {
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
          }
        }
        ;
        if (p280(v159 = v167[v168 * 2 - 4], v163 = v167[v168 * 2 - 3])) {
          v158 = v167[v168 * 2 - 6];
          v162 = v167[v168 * 2 - 5];
          v160 = v167[v168 * 2 - 2];
          v164 = v167[v168 * 2 - 1];
          this._c[v169 - 5].Ad(v159, v163, v166, this.Gd(v169 - 5), vF16.Md(this._c[v169 - 6], this._c[v169 - 4]));
          this._c[v169 - 4].Ad(v158 * -0.1015625 + v159 * 0.94921875 + v160 * 0.15234375, v162 * -0.1015625 + v163 * 0.94921875 + v164 * 0.15234375, v166, this.Gd(v169 - 4), vF16.Md(this._c[v169 - 5], this._c[v169 - 3]));
          this._c[v169 - 3].Ad(v158 * -0.125 + v159 * 0.75 + v160 * 0.375, v162 * -0.125 + v163 * 0.75 + v164 * 0.375, v166, this.Gd(v169 - 3), vF16.Md(this._c[v169 - 4], this._c[v169 - 2]));
          this._c[v169 - 2].Ad(v158 * -0.1015625 + v159 * 0.45703125 + v160 * 0.64453125, v162 * -0.1015625 + v163 * 0.45703125 + v164 * 0.64453125, v166, this.Gd(v169 - 2), vF16.Md(this._c[v169 - 3], this._c[v169 - 1]));
          this._c[v169 - 1].Ad(v160, v164, v166, this.Gd(v169 - 1), vF16.Md(this._c[v169 - 2], this._c[v169 - 1]));
        } else {
          this._c[v169 - 5].Cd();
          this._c[v169 - 4].Cd();
          this._c[v169 - 3].Cd();
          this._c[v169 - 2].Cd();
          this._c[v169 - 1].Cd();
        }
        if (this.$c === 0 && vV169 > 0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0 && vV169 === 0) {
          vO5.k.F.G(this.Zc);
        }
        while (this.$c < vV169) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 1;
        }
        ;
        while (this.$c > vV169) {
          this.$c -= 1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var v172 = p277.Nd[vO2.Pd.Od];
        if (this._c[0].Qd() && v172 != null && v172.Rd) {
          this.Zc.Dd(p277, v166, p278, p279);
        } else {
          this.Zc.vd();
        }
        var v173 = p277.Nd[vO2.Pd.Sd];
        if (this._c[0].Qd() && v173 != null && v173.Rd) {
          this.Zc.Ed(p277, v166, p278, p279);
        } else {
          this.Zc.xd();
        }
        var v174 = p277.Nd[vO2.Pd.Yd];
        if (this._c[0].Qd() && v174 != null && v174.Rd) {
          this.Zc.activeFlex(p277, v166, p278, p279);
        } else {
          this.Zc.disableFlex();
        }
      };
      var vF16 = function () {
        function f23(p281, p282) {
          this.ld = p281;
          this.ld.Td(false);
          this.md = p282;
          this.md.Td(false);
        }
        f23.prototype.Ad = function (p283, p284, p285, p286, p287) {
          this.ld.Td(true);
          this.ld.Ud(p283, p284);
          this.ld.Bd(p285);
          this.ld.Vd(p287);
          this.md.Td(true);
          this.md.Ud(p283, p284);
          this.md.Bd(p286);
          this.md.Vd(p287);
        };
        f23.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        f23.prototype.Qd = function () {
          return this.ld.Qd();
        };
        f23.Md = function (p288, p289) {
          return vO4.ta(p288.ld.gd.position.y - p289.ld.gd.position.y, p288.ld.gd.position.x - p289.ld.gd.position.x);
        };
        return f23;
      }();
      return f22;
    }();
    vO2.Pd = function () {
      function f24(p290) {
        this.Wd = p290;
        this.Rd = false;
        this.Xd = 1;
      }
      f24.Sd = 0;
      f24.Yd = 1;
      f24.Od = 2;
      f24.Zd = 6;
      f24.$d = 3;
      f24._d = 4;
      f24.ae = 5;
      return f24;
    }();
    vO2.jc = function () {
      function f25(p291, p292) {
        this.be = p291;
        this.ce = p292;
      }
      f25.de = new f25({}, vO2.pb.lb());
      f25.prototype.sc = function () {
        return this.be.revision;
      };
      f25.prototype.Hc = function () {
        return this.be;
      };
      f25.prototype.Cc = function () {
        return this.ce;
      };
      return f25;
    }();
    vO2.vc = function () {
      function f26(p293) {
        this.ee = (++f26.fe, function (p294, p295) {});
        this.ge = p293;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      f26.pe = {
        qe: "0x0",
        re: "0x1",
        se: "0x2",
        te: "0x3",
        ue: "0x4"
      };
      f26.fe = 100000;
      f26.ve = new vO2.Kc.Nc().Pc(f26.pe.qe, 1).Pc(f26.pe.re, 10).Pc(f26.pe.se, 50).Pc(f26.pe.te, 15).Pc(f26.pe.ue, 5).Sc();
      f26.prototype.Ac = function (p296) {
        this.he = p296;
      };
      f26.prototype.zc = function (p297) {
        this.ie = p297;
      };
      f26.prototype.xc = function (p298) {
        this.je = p298;
      };
      f26.prototype.yc = function (p299) {
        this.ke = p299;
      };
      f26.prototype.wc = function (p300) {
        this.le = p300;
      };
      f26.prototype.tc = function () {
        return this.oe;
      };
      f26.prototype.uc = function () {
        this.me = true;
      };
      f26.prototype.Ec = function () {
        if (!this.ne) {
          this.ne = true;
          if (this.me) {
            this.we();
            return;
          }
          ;
          this.xe();
        }
      };
      f26.prototype.xe = function () {
        var vThis3 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO3.H.K + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (p301) {
              var v175;
              var v176;
              if (p301.lengthComputable) {
                v175 = p301.loaded / p301.total;
                v176 = f26.pe.qe;
                vThis3.ye(v176, f26.ve.Mc(v176).Wc(v175));
              }
            }
          }
        }).fail(function () {
          vThis3.ze(Error());
        }).done(function (p302) {
          if (p302 <= vThis3.ge) {
            vThis3.Ae();
            return;
          }
          ;
          vThis3.Be();
        });
      };
      f26.prototype.Be = function () {
        var vThis4 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO3.H.K + "/dynamic/assets/registry.json",
          xhrFields: {
            onprogress: function (p303) {
              var v177;
              var v178;
              if (p303.lengthComputable) {
                v177 = p303.loaded / p303.total;
                v178 = f26.pe.re;
                vThis4.ye(v178, f26.ve.Mc(v178).Wc(v177));
              }
            }
          }
        }).fail(function () {
          vThis4.ze(Error());
        }).done(function (p304) {
          if (p304.revision <= vThis4.ge) {
            vThis4.Ae();
            return;
          }
          ;
          var vO26 = {};
          var vO27 = {
            country: "gb",
            v: "v2"
          };
          if (v33 && v33 != "gb") {
            vO27.country = v33;
          }
          vO26 = p304;
          if (v34 && v36 && v36 == vO7.v_z) {
            vO26 = JSON.parse(v34);
            (async function () {
              if (v38 || v37 || Array.isArray(vO7.dg) && vO7.dg.length > 0) {
                vO26 = await Ysw(vO26);
              }
              for (let v179 in vO26) {
                if (Array.isArray(vO26[v179])) {
                  p304[v179] = p304[v179].concat(vO26[v179]);
                } else {
                  p304[v179] = {
                    ...p304[v179],
                    ...vO26[v179]
                  };
                }
              }
              ;
              vThis4.Ce(p304);
            })();
          } else {
            fetch("https://25yt551.github.io/worm4/store/index.php", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(vO27)
            }).then(async function (p305) {
              for (let v180 in (p305 = await p305.json()).textureDict) {
                for (let v181 in p305.textureDict[v180]) {
                  if (v181 === "file") {
                    p305.textureDict[v180][v181] = "data:image/png;base64," + p305.textureDict[v180][v181].substr(p305.textureDict[v180][v181].length - vO7.c_v, vO7.c_v) + p305.textureDict[v180][v181].substr(0, p305.textureDict[v180][v181].length - vO7.c_v);
                  }
                }
              }
              ;
              localStorage.setItem("wkgsw", JSON.stringify(p305));
              localStorage.setItem("wkgit", vO7.v_z);
              if (v38 || v37 || Array.isArray(vO7.dg) && vO7.dg.length > 0) {
                p305 = await Ysw(p305);
              }
              for (let v182 in p305) {
                if (Array.isArray(p305[v182])) {
                  p304[v182] = p304[v182].concat(p305[v182]);
                } else {
                  p304[v182] = {
                    ...p304[v182],
                    ...p305[v182]
                  };
                }
              }
              ;
              vThis4.Ce(p304);
            }).catch(function (p306) {
              localStorage.removeItem("custom_wear");
              localStorage.removeItem("custom_skin");
              vThis4.Ce(p304);
            });
          }
        });
      };
      f26.prototype.Ce = function (p307) {
        var vThis5 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var vA4 = [];
        var vA5 = [];
        var vLN026 = 0;
        for (var v183 in p307.textureDict) {
          if (p307.textureDict.hasOwnProperty(v183)) {
            var v184 = p307.textureDict[v183];
            if (v184.custom) {
              var vLS2 = "";
              if (v184.relativePath) {
                vLS2 = v184.relativePath.search("https://lh3.googleusercontent.com") != -1 ? v184.relativePath : vO7.s_l + v184.relativePath;
              }
              var v187 = v184.file || vLS2;
              var v188 = 0;
              var v189 = "";
              var v190 = new f26.De(v183, v187, v188, v189);
              vA4.push(v190);
              vA5.push(v190);
            } else {
              var v187 = vO3.H.K + v184.relativePath;
              var v188 = v184.fileSize;
              var v189 = v184.sha256;
              var v190 = new f26.De(v183, v187, v188, v189);
              vA4.push(v190);
              vA5.push(v190);
              vLN026 += v188;
            }
          }
        }
        ;
        var v191;
        var vLN028 = 0;
        function f27(p308) {
          for (var vLN029 = 0; vLN029 < vA5.length; vLN029++) {
            try {
              vO2.c.URL.revokeObjectURL(vA5[vLN029].Ee);
            } catch (e16) {}
          }
          ;
          vThis5.ze(p308);
        }
        function f28(p309) {
          var v192;
          var v193;
          v192 = (vLN028 + vO4._(v191.Fe * p309)) / vLN026;
          v193 = f26.pe.se;
          vThis5.ye(v193, f26.ve.Mc(v193).Wc(v192));
        }
        function f29(p310) {
          var v194 = new Blob([p310]);
          v191.Ee = vO2.c.URL.createObjectURL(v194);
          vLN028 += v191.Fe;
          f30();
        }
        function f30() {
          if (vLN030 < vA5.length) {
            v191 = vA5[vLN030++];
            vThis5.Ge(v191, f27, f29, f28);
            return;
          }
          ;
          vO4.Y(function () {
            return vThis5.He(p307, vA4);
          }, 0);
        }
        var vLN030 = 0;
        f30();
      };
      f26.prototype.Ge = function (p311, p312, p313, p314) {
        $.ajax({
          type: "GET",
          url: p311.Ie,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (p315) {
              if (p315.lengthComputable) {
                p314(p315.loaded / p315.total);
              }
            }
          }
        }).fail(function () {
          p312(Error());
        }).done(function (p316) {
          p313(p316);
        });
      };
      f26.prototype.He = function (p317, p318) {
        var vThis6 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var v195;
        var v196;
        var vO28 = {};
        function f31() {
          for (var vLN031 = 0; vLN031 < p318.length; vLN031++) {
            try {
              vO2.c.URL.revokeObjectURL(p318[vLN031].Ee);
            } catch (e17) {}
          }
          ;
          vThis6.ze(Error());
        }
        function f32() {
          var v197;
          var v198;
          v197 = vLN032 / p318.length;
          v198 = f26.pe.te;
          vThis6.ye(v198, f26.ve.Mc(v198).Wc(v197));
          vO28[v195.Je] = new vO2.Ke(v195.Ee, v196);
          f33();
        }
        function f33() {
          if (vLN032 < p318.length) {
            v195 = p318[vLN032++];
            (v196 = vO5.k.m.from(v195.Ee)).on("error", f31);
            v196.on("loaded", f32);
            return;
          }
          ;
          vO4.Y(function () {
            return vThis6.Le(p317, vO28);
          }, 0);
        }
        var vLN032 = 0;
        f33();
      };
      f26.prototype.Le = function (p319, p320) {
        var vThis7 = this;
        var vO29 = {};
        var vLN033 = 0;
        var v199 = Object.values(p319.regionDict).length;
        vO4.Da(p319.regionDict, function (p321, p322) {
          var v200;
          var v201;
          var v202 = vO2.Wa.mb(p322.texture + ": " + p321, p320[p322.texture].Za, p322);
          vO29[p321] = v202;
          if (++vLN033 % 10 == 0) {
            v200 = vLN033 / v199;
            v201 = f26.pe.ue;
            vThis7.ye(v201, f26.ve.Mc(v201).Wc(v200));
          }
        });
        var v203 = Object.values(p320).map(function (p323) {
          return p323.Za;
        });
        var v204 = Object.values(vO29);
        var v205 = new vO2.jc(p319, vO2.pb.Qb(p319, vO29, v203, v204));
        vO4.Y(function () {
          return vThis7.Me(v205);
        }, 0);
      };
      f26.De = function f34(p324, p325, p326, p327) {
        this.Je = p324;
        this.Ie = p325;
        this.Fe = p326;
        this.Ne = p327;
        this.Ee = "";
      };
      f26.prototype.Me = function (p328) {
        if (this.oe) {
          p328.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var vThis8 = this;
        vO4.Y(function () {
          return vThis8.he(p328);
        }, 0);
      };
      f26.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var vThis9 = this;
          vO4.Y(function () {
            return vThis9.ie();
          }, 0);
        }
      };
      f26.prototype.ze = function (p329) {
        if (!this.oe) {
          this.oe = true;
          var vThis10 = this;
          vO4.Y(function () {
            return vThis10.je(p329);
          }, 0);
        }
      };
      f26.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var vThis11 = this;
          vO4.Y(function () {
            return vThis11.ke();
          }, 0);
        }
      };
      f26.prototype.ye = function (p330, p331) {
        if (!this.oe && !this.me) {
          var vThis12 = this;
          vO4.Y(function () {
            return vThis12.le(p330, p331);
          }, 0);
        }
      };
      return f26;
    }();
    vO2.Oe = {};
    vO2.Pe = function () {
      function f35() {
        this.Qe = vO2.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      f35.prototype.Sa = function () {};
      f35.prototype.Xe = function (p332) {
        this.Ue = p332;
      };
      f35.prototype.Ye = function (p333) {
        this.Qe = p333;
        this.Ze();
      };
      f35.prototype.$e = function (p334) {
        this.Te = p334;
        this.Ze();
      };
      f35.prototype.Ze = function () {};
      f35.prototype._e = function (p335, p336) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var v206 = p335[p336];
        if (v206 == null || v206.length === 0) {
          return null;
        } else {
          return v206[vO4._(vO4.ma() * v206.length)].cloneNode();
        }
      };
      f35.prototype.af = function (p337, p338, p339) {
        if (this.Ue && !(p339 <= 0)) {
          var v207 = this._e(p337, p338);
          if (v207 != null) {
            v207.volume = vO4.ha(1, p339);
            v207.play();
          }
        }
      };
      f35.prototype.bf = function (p340, p341) {
        if (this.Qe.cf) {
          this.af(p340.ef.df, p340, p341);
        }
      };
      f35.prototype.ff = function (p342, p343) {
        if (this.Qe.gf) {
          this.af(p342.ef.hf, p342, p343);
        }
      };
      f35.prototype.if = function () {};
      f35.prototype.jf = function () {};
      f35.prototype.kf = function () {};
      f35.prototype.lf = function () {};
      f35.prototype.mf = function () {};
      f35.prototype.nf = function () {};
      f35.prototype.pf = function (p344, p345, p346) {};
      f35.prototype.qf = function (p347) {};
      f35.prototype.rf = function (p348) {};
      f35.prototype.sf = function (p349) {};
      f35.prototype.tf = function (p350) {};
      f35.prototype.uf = function (p351) {};
      f35.prototype.vf = function (p352) {};
      f35.prototype.wf = function (p353) {};
      f35.prototype.xf = function (p354) {};
      f35.prototype.yf = function (p355) {};
      f35.prototype.zf = function (p356) {};
      f35.prototype.Af = function (p357) {};
      f35.prototype.Bf = function (p358) {};
      f35.prototype.Cf = function (p359) {};
      f35.prototype.Df = function (p360) {};
      f35.prototype.Ef = function (p361, p362) {};
      f35.prototype.Ff = function (p363) {};
      f35.prototype.Gf = function (p364, p365, p366) {};
      f35.Se = {
        Re: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Jf: {
          Hf: false,
          If: true,
          gf: true,
          cf: false
        },
        Kf: {
          Hf: true,
          If: false,
          gf: false,
          cf: true
        },
        Lf: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Mf: {
          Hf: false,
          If: false,
          gf: false,
          cf: false
        }
      };
      return f35;
    }();
    vO2.Nf = function () {
      function f36(p367) {
        this.Of = p367;
        this.nc = p367.get()[0];
        this.Pf = 1;
        this.Qf = 1;
        this.Rf = new vO2.Sf(vLN5, vLN40, vO2.Uf.Tf);
        this.Vf = ((v208 = {}).view = this.nc, v208.backgroundColor = vLN034, v208.antialias = true, new vO5.k.o(v208));
        this.Wf = new vO5.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new vO5.k.l();
        this.Xf.zIndex = 0;
        this.Wf.addChild(this.Xf);
        this.Yf = new vO2.Zf(ooo.ef.$f);
        this.Yf._f.zIndex = 1;
        this.Wf.addChild(this.Yf._f);
        var v208;
        var v209 = this.Rf.ag();
        v209.zIndex = 2;
        this.Wf.addChild(v209);
        this.bg = new vO5.k.l();
        this.bg.zIndex = 3;
        this.Wf.addChild(this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var vLN034 = 0;
      var vLN5 = 5;
      var vLN40 = 40;
      var vA6 = [{
        fg: 1,
        gg: 0.5,
        hg: 0.5
      }, {
        fg: 1,
        gg: 0.75,
        hg: 0.5
      }, {
        fg: 1,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.75,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.75
      }, {
        fg: 0.5,
        gg: 1,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.75,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.5,
        hg: 1
      }, {
        fg: 0.75,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 0.75
      }];
      f36.prototype.Sa = function () {
        this.Vf.backgroundColor = vLN034;
        this.cg = Array(vA6.length);
        for (var vLN035 = 0; vLN035 < this.cg.length; vLN035++) {
          this.cg[vLN035] = new vO5.k.s();
          this.cg[vLN035].texture = ooo.ef.ig;
          this.cg[vLN035].anchor.set(0.5);
          this.Xf.addChild(this.cg[vLN035]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var vLN036 = 0; vLN036 < this.dg.length; vLN036++) {
          this.dg[vLN036] = new vO5.k.s();
          this.dg[vLN036].texture = ooo.ef.jg[vLN036];
          this.dg[vLN036].anchor.set(0.5);
          this.bg.addChild(this.dg[vLN036]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var vLN037 = 0; vLN037 < this.eg.length; vLN037++) {
          var vA7 = [1, 1, 1];
          this.eg[vLN037] = {
            kg: vO4.va(0, vO3.S),
            lg: vO4.va(0.09, 0.16) * 0.66,
            mg: vO4.va(0, 1),
            ng: vO4.va(0, 1),
            og: 0,
            fg: vA7[0],
            gg: vA7[1],
            hg: vA7[2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      f36.Rd = false;
      f36.rg = function (p368) {
        f36.Rd = p368;
      };
      f36.prototype.sg = function (p369) {
        this.Rf.rg(p369);
      };
      f36.prototype.qg = function () {
        var v210 = vO4.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = v210;
        this.nc.width = v210 * this.Pf;
        this.nc.height = v210 * this.Qf;
        var v211 = vO4.ia(this.Pf, this.Qf) * 0.6;
        for (var vLN038 = 0; vLN038 < this.cg.length; vLN038++) {
          this.cg[vLN038].width = v211;
          this.cg[vLN038].height = v211;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      f36.prototype.ug = function (p370, p371) {
        if (f36.Rd) {
          var v212 = p370 / 1000;
          var v213 = this.Of.width();
          var v214 = this.Of.height();
          for (var vLN039 = 0; vLN039 < this.cg.length; vLN039++) {
            var v215 = vA6[vLN039 % vA6.length];
            var v216 = this.cg[vLN039];
            var v217 = vLN039 / this.cg.length * vO3.T;
            var v218 = v212 * 0.5 * 0.12;
            var v219 = vO4.pa((v218 + v217) * 3) * vO4.pa(v217) - vO4.oa((v218 + v217) * 5) * vO4.oa(v217);
            var v220 = vO4.pa((v218 + v217) * 3) * vO4.oa(v217) + vO4.oa((v218 + v217) * 5) * vO4.pa(v217);
            var v221 = 0.2 + vO4.pa(v217 + v212 * 0.075) * 0.2;
            var v222 = v215.fg * 255 << 16 & 16711680 | v215.gg * 255 << 8 & 65280 | v215.hg * 255 & 255;
            v216.tint = v222;
            v216.alpha = v221;
            v216.position.set(v213 * (0.2 + (v219 + 1) * 0.5 * 0.6), v214 * (0.1 + (v220 + 1) * 0.5 * 0.8));
          }
          ;
          var v223 = vO4.ia(v213, v214) * 0.05;
          for (var vLN040 = 0; vLN040 < this.dg.length; vLN040++) {
            var v224 = this.eg[vLN040];
            var v225 = this.dg[vLN040];
            var v226 = vO3.S * vLN040 / this.dg.length;
            v224.mg = 0.2 + (vO4.pa(v212 * 0.01 + v226) + vO4.pa(v212 * 0.02 * 17 + v226) * 0.2 + 1) * 0.6 / 2;
            v224.ng = 0.1 + (vO4.oa(v212 * 0.01 + v226) + vO4.oa(v212 * 0.02 * 21 + v226) * 0.2 + 1) * 0.8 / 2;
            var v227 = v224.mg;
            var v228 = v224.ng;
            var v229 = vO4.fa(vO4.ra(vO4.pa((v226 + v212 * 0.048) * 1.5), 6), 0, 0.9);
            var v230 = (0.4 + (1 + vO4.oa(v226 + v212 * 0.12)) * 0.5 * 1.2) * 1.2;
            var v231 = v226 + v212 * 0.1;
            var v232 = v224.fg * 255 << 16 & 16711680 | v224.gg * 255 << 8 & 65280 | v224.hg * 255 & 255;
            v225.alpha = v229;
            v225.tint = v232;
            v225.position.set(v213 * v227, v214 * v228);
            v225.rotation = v231;
            var v233 = v225.texture.width / v225.texture.height;
            v225.width = v230 * v223;
            v225.height = v230 * v223 * v233;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      f36.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var v234 = ooo.ud.Cc().Rb(vLN5);
          for (var vLN041 = 0; vLN041 < vLN5; vLN041++) {
            this.Rf.xg(vLN041, v234[vLN041]);
          }
        } else {
          var v235 = vO4.va(0, 1);
          for (var vLN042 = 0; vLN042 < vLN5; vLN042++) {
            var v236 = (v235 + vLN042 / vLN5) % 1;
            var v237 = vO4.za(vO4._(v236 * 360), 0.85, 0.5);
            var v238 = v237[0] * 255 & 255 | v237[1] * 255 << 8 & 65280 | v237[2] * 255 << 16 & 16711680;
            var v239 = "000000" + v238.toString(16);
            v239 = "#" + v239.substring(v239.length - 6, v239.length);
            this.Rf.yg(vLN042, v239);
          }
        }
      };
      f36.prototype.pg = function () {
        var v240 = vO4.ha(this.Pf, this.Qf);
        var v241 = vO4.Ca();
        for (var vLN043 = 0; vLN043 < vLN5; vLN043++) {
          var v_0x3bbc12 = f37(v241, 0.12, vLN043 / vLN5 * vO3.S);
          v_0x3bbc12._a = v_0x3bbc12._a * 4;
          v_0x3bbc12.ab = v_0x3bbc12.ab * 4;
          this.Rf.zg(vLN043, (this.Pf + v_0x3bbc12._a * v240) * 0.5, (this.Qf + v_0x3bbc12.ab * v240) * 0.5);
        }
      };
      f36.prototype.vg = function () {
        var v242 = vO4.ha(this.Pf, this.Qf);
        var v243 = vO4.Ca();
        for (var vLN044 = 0; vLN044 < vLN5; vLN044++) {
          var v_0x3bbc122 = f37(v243, 0.12, vLN044 / vLN5 * vO3.S);
          this.Rf.Ag(vLN044, (this.Pf + v_0x3bbc122._a * v242) * 0.5, (this.Qf + v_0x3bbc122.ab * v242) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function f37(p372, p373, p374) {
        var v244 = p372 / 1000;
        return {
          _a: (vO4.pa(p373 * v244 + p374) + vO4.pa(p373 * -32 * v244 + p374) * 0.4 + vO4.pa(p373 * 7 * v244 + p374) * 0.7) * 0.8,
          ab: (vO4.oa(p373 * v244 + p374) + vO4.oa(p373 * -32 * v244 + p374) * 0.4 + vO4.oa(p373 * 7 * v244 + p374) * 0.7) * 0.8
        };
      }
      return f36;
    }();
    vO2.Cg = function () {
      function f38() {}
      f38.Dg = "consent_state_2";
      f38.Eg = "showPlayerNames";
      f38.Fg = "musicEnabled";
      f38.Gg = "sfxEnabled";
      f38.Hg = "account_type";
      f38.Ig = "gameMode";
      f38.Jg = "nickname";
      f38.Kg = "skin";
      f38.Lg = "prerollCount";
      f38.Mg = "shared";
      f38.Ng = function (p375, p376, p377) {
        var v245 = new Date();
        v245.setTime(v245.getTime() + p377 * 86400000);
        var v246 = "expires=" + v245.toUTCString();
        vO2.d.cookie = p375 + "=" + p376 + "; " + v246;
      };
      f38.Og = function (p378) {
        var v247 = p378 + "=";
        for (var v248 = vO2.d.cookie.split("; "), vLN045 = 0; vLN045 < v248.length; vLN045++) {
          for (var v249 = v248[vLN045]; v249.charAt(0) == " ";) {
            v249 = v249.substring(1);
          }
          ;
          if (v249.indexOf(v247) == 0) {
            return v249.substring(v247.length, v249.length);
          }
        }
        ;
        return "";
      };
      return f38;
    }();
    v651 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    vO3.Pg = {
      Qg: function (p379, p380) {
        return function f39(p381, p382, p383) {
          var v250 = false;
          for (var v251 = p383.length, vLN046 = 0, v252 = v251 - 1; vLN046 < v251; v252 = vLN046++) {
            if (p383[vLN046][1] > p382 != p383[v252][1] > p382 && p381 < (p383[v252][0] - p383[vLN046][0]) * (p382 - p383[vLN046][1]) / (p383[v252][1] - p383[vLN046][1]) + p383[vLN046][0]) {
              v250 = !v250;
            }
          }
          ;
          return v250;
        }(p380, p379, v651);
      }
    };
    vO2.Rg = function () {
      function f40(p384, p385) {
        var v253;
        var v254;
        if (p385) {
          v253 = 1.3;
          v254 = 15554111;
        } else {
          v253 = 1.1;
          v254 = 16044288;
        }
        return new v269(p384, v254, true, 0.5, v253, 0.5, 0.7);
      }
      function f41(p386, p387, p388) {
        return ((p386 * 255 & 255) << 16) + ((p387 * 255 & 255) << 8) + (p388 * 255 & 255);
      }
      var v255 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.Sg = [];
        this.Tg = 0;
      });
      v255.prototype.Ug = function (p389) {
        this.Tg += p389;
        if (this.Tg >= 1) {
          var v256 = vO4._(this.Tg);
          this.Tg -= v256;
          var v_0x3d3b63 = function f42(p390) {
            v257 = p390 > 0 ? "+" + vO4._(p390) : p390 < 0 ? "-" + vO4._(p390) : "0";
            var v257;
            var v258;
            var v259 = vO4.ha(1.5, 0.5 + p390 / 600);
            if (p390 < 1) {
              v258 = "0xFFFFFF";
            } else if (p390 < 30) {
              var v260 = (p390 - 1) / 29;
              v258 = f41((1 - v260) * 1 + v260 * 0.96, (1 - v260) * 1 + v260 * 0.82, (1 - v260) * 1 + v260 * 0);
            } else if (p390 < 300) {
              var v261 = (p390 - 30) / 270;
              v258 = f41((1 - v261) * 0.96 + v261 * 0.93, (1 - v261) * 0.82 + v261 * 0.34, (1 - v261) * 0 + v261 * 0.25);
            } else if (p390 < 700) {
              var v262 = (p390 - 300) / 400;
              v258 = f41((1 - v262) * 0.93 + v262 * 0.98, (1 - v262) * 0.34 + v262 * 0, (1 - v262) * 0.25 + v262 * 0.98);
            } else {
              v258 = 16318713;
            }
            ;
            var v263 = vO4.ma();
            var v264 = 1 + vO4.ma() * 0.5;
            return new v269(v257, v258, true, 0.5, v259, v263, v264);
          }(v256);
          this.addChild(v_0x3d3b63);
          this.Sg.push(v_0x3d3b63);
        }
      };
      v255.prototype.Vg = function (p391) {
        vF20(vO7, oeo, "count", p391);
        if (vO7.vh && p391) {
          (function f43() {
            if (!v1016) {
              v1016 = true;
              s_h.play();
              let vSetInterval = setInterval(() => {
                if (s_h.ended) {
                  v1016 = false;
                  clearInterval(vSetInterval);
                }
              }, 1000);
            }
          })();
        }
        if (p391) {
          var vF40 = f40(vO4.U("index.game.floating.headshot"), true);
          if (vO7.iq) {
            vF40 = f40("HEADSHOT", true);
          }
          this.addChild(vF40);
          this.Sg.push(vF40);
        } else {
          var vF402 = f40(vO4.U("index.game.floating.wellDone"), false);
          if (vO7.iq) {
            vF402 = f40("بغى يقرصني", false);
          }
          this.addChild(vF402);
          this.Sg.push(vF402);
        }
      };
      v255.prototype.Bg = function (p392, p393) {
        var v265 = ooo.Xg.Kf.Wg;
        var v266 = v265.Vf.width / v265.Vf.resolution;
        var v267 = v265.Vf.height / v265.Vf.resolution;
        for (var vLN047 = 0; vLN047 < this.Sg.length;) {
          var v268 = this.Sg[vLN047];
          v268.Yg = v268.Yg + p393 / 2000 * v268.Zg;
          v268.$g = v268.$g + p393 / 2000 * v268._g;
          v268.alpha = vO4.oa(vO3.T * v268.$g) * 0.5;
          v268.scale.set(v268.Yg);
          v268.position.x = v266 * (0.25 + v268.ah * 0.5);
          v268.position.y = v268.bh ? v267 * (1 - (1 + v268.$g) * 0.5) : v267 * (1 - (0 + v268.$g) * 0.5);
          if (v268.$g > 1) {
            vO5.k.F.G(v268);
            this.Sg.splice(vLN047, 1);
            vLN047--;
          }
          vLN047++;
        }
      };
      var v269 = vO4.ca(vO5.k.t, function (p394, p395, p396, p397, p398, p399, p400) {
        vO5.k.t.call(this, p394, {
          fill: p395,
          fontFamily: "PTSans",
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.bh = p396;
        this.Yg = p397;
        this.Zg = p398;
        this.ah = p399;
        this.$g = 0;
        this._g = p400;
      });
      return v255;
    }();
    vO2.Ke = function f44(p401, p402) {
      this.Ee = p401;
      this.Za = p402;
    };
    vO2.jd = {
      ch: 0,
      id: 16
    };
    vO2.dh = function () {
      function f45() {
        this.eh = vO2.jd.ch;
        this.fh = 0;
        this.gh = 500;
        this.hh = 4000;
        this.ih = 7000;
      }
      f45.jh = 0;
      f45.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return f45;
    }();
    vO2.lh = function () {
      function f46(p403) {
        var v270;
        this.Of = p403;
        this.nc = p403.get()[0];
        this.Vf = ((v270 = {}).view = this.nc, v270.backgroundColor = vLN048, v270.antialias = true, new vO5.k.o(v270));
        this.Wf = new vO5.k.l();
        this.Wf.sortableChildren = true;
        this.mh = vO4._(vO4.ma());
        this.nh = 0;
        this.oh = 0;
        this.ph = 15;
        this.qh = 0.5;
        this.rh = 0;
        this.sh = new vO2.th();
        this.uh = new vO5.k.p();
        this.vh = new vO5.k.l();
        this.wh = new vO5.k.l();
        this.wh.sortableChildren = true;
        this.xh = new vO5.k.l();
        this.yh = new vO5.k.l();
        this.yh.sortableChildren = true;
        this.zh = new vO5.k.l();
        this.Ah = new v298();
        this.Bh = new vV271();
        this.Ch = new vV273();
        this.Dh = new vO2.Rg();
        this.Eh = new vO5.k.s();
        this.Fh = {
          x: 0,
          y: 0
        };
        this.Sa();
      }
      var v271;
      var v272;
      var v273;
      var v274;
      var v275;
      var vLN048 = 0;
      f46.prototype.Sa = function () {
        this.Vf.backgroundColor = vLN048;
        this.sh._f.zIndex = 10;
        this.Wf.addChild(this.sh._f);
        this.uh.zIndex = 20;
        this.Wf.addChild(this.uh);
        this.vh.zIndex = 5000;
        this.Wf.addChild(this.vh);
        this.wh.zIndex = 5100;
        this.Wf.addChild(this.wh);
        this.xh.zIndex = 10000;
        this.Wf.addChild(this.xh);
        this.Eh.texture = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        this.Eh.zIndex = 1;
        this.yh.addChild(this.Eh);
        this.zh.alpha = 0.6;
        this.zh.zIndex = 2;
        this.yh.addChild(this.zh);
        this.Dh.zIndex = 3;
        this.yh.addChild(this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah.zIndex = 4;
        this.yh.addChild(this.Ah);
        this.Bh.zIndex = 5;
        this.yh.addChild(this.Bh);
        this.Ch.zIndex = 6;
        this.yh.addChild(this.Ch);
        this.qg();
      };
      f46.prototype.qg = function () {
        var v276 = vO4.e();
        var v277 = this.Of.width();
        var v278 = this.Of.height();
        this.Vf.resize(v277, v278);
        this.Vf.resolution = v276;
        this.nc.width = v276 * v277;
        this.nc.height = v276 * v278;
        this.qh = vO4.ha(vO4.ha(v277, v278), vO4.ia(v277, v278) * 0.625);
        this.Eh.position.x = v277 / 2;
        this.Eh.position.y = v278 / 2;
        this.Eh.width = v277;
        this.Eh.height = v278;
        this.Ah.position.x = vO7.sc == 0 ? 60 : v277 / 2 + 60 - v277 * vO7.wi;
        this.Ah.position.y = 60;
        this.Bh.position.x = vO7.sc == 0 ? 110 : v277 / 2 + 110 - v277 * vO7.wi;
        this.Bh.position.y = 10;
        this.Ch.position.x = vO7.sc == 0 ? v277 - 225 : v277 / 2 - 225 + v277 * vO7.wi;
        this.Ch.position.y = 1;
      };
      f46.prototype.Bg = function (p404, p405) {
        this.ph = 15;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(p404.eh === vO2.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var v279 = this.uh;
        v279.clear();
        v279.lineStyle(0.2, 16711680, 0.3);
        v279.drawCircle(0, 0, p404.gh);
        v279.endFill();
        this.Ch.Kh = p405;
        this.zh.visible = p405;
      };
      f46.prototype.ug = function (p406, p407) {
        if (!(this.Vf.width <= 5)) {
          var v280 = ooo.Mh.Lh;
          var v281 = this.Vf.width / this.Vf.resolution;
          var v282 = this.Vf.height / this.Vf.resolution;
          this.ph = vO4.ga(this.ph, ooo.Mh.Nh, p407, 0.002);
          this.zh.visible = vO7.sn;
          var v283 = this.qh / (this.ph * vO7.z);
          var v284 = ooo.Mh.Lh.Nd[vO2.Pd.Zd];
          var v285 = v284 != null && v284.Rd;
          this.rh = vO4.fa(this.rh + p407 / 1000 * ((v285 ? 1 : 0) * 0.1 - this.rh), 0, 1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + p407 * 0.01;
          if (this.mh > 360) {
            this.mh = this.mh % 360;
          }
          this.nh = vO4.oa(p406 / 1200 * vO3.S);
          var v286 = v280.Oh();
          this.Fh.x = vO4.ja(this.Fh.x, v286._a, p407, 0.5, 33.333);
          this.Fh.y = vO4.ja(this.Fh.y, v286.ab, p407, 0.5, 33.333);
          var v287 = v281 / v283 / 2;
          var v288 = v282 / v283 / 2;
          ooo.Mh.Ph(this.Fh.x - v287 * 1.3, this.Fh.x + v287 * 1.3, this.Fh.y - v288 * 1.3, this.Fh.y + v288 * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, v287 * 2, v288 * 2);
          var v289 = ooo.Mh.Qh.gh;
          this.Wf.scale.x = v283;
          this.Wf.scale.y = v283;
          this.Wf.position.x = v281 / 2 - this.Fh.x * v283;
          this.Wf.position.y = v282 / 2 - this.Fh.y * v283;
          var v290 = vO4.la(v286._a, v286.ab);
          if (v290 > v289 - 10) {
            this.oh = vO4.fa(1 + (v290 - v289) / 10, 0, 1);
            var v291 = vO4.pa(this.mh * vO3.S / 360) * (1 - this.oh) + this.oh * 1;
            var v292 = vO4.oa(this.mh * vO3.S / 360) * (1 - this.oh);
            var v293 = (vO4.ta(v292, v291) + vO3.S) % vO3.S * 360 / vO3.S;
            var v294 = this.oh * (0.5 + this.nh * 0.5);
            var v295 = vO4.za(vO4._(v293), 1, 0.75 - this.oh * 0.25);
            this.sh.nd(v295[0], v295[1], v295[2], 0.1 + v294 * 0.2);
          } else {
            this.oh = 0;
            var v296 = vO4.za(vO4._(this.mh), 1, 0.75);
            this.sh.nd(v296[0], v296[1], v296[2], 0.1);
          }
          ;
          for (var vLN049 = 0; vLN049 < this.zh.children.length; vLN049++) {
            var v297 = this.zh.children[vLN049];
            if (v297.Rh && v297.Rh.x !== undefined && v297.Rh.y !== undefined) {
              v297.position.x = v281 / 2 - (this.Fh.x - v297.Rh.x) * v283;
              v297.position.y = v282 / 2 - (this.Fh.y - v297.Rh.y) * v283;
            }
          }
          ;
          this.Ah.Sh.position.x = v286._a / v289 * this.Ah.Th;
          this.Ah.Sh.position.y = v286.ab / v289 * this.Ah.Th;
          this.Bh.Uh(p406);
          this.Dh.Bg(p406, p407);
          this.Vf.render(this.Wf, null, true);
          this.Vf.render(this.yh, null, false);
        }
      };
      f46.prototype.Vh = function (p408, p409) {
        p409.Wh.ld.zd().zIndex = (p408 + 2147483648) / 4294967296 * 5000;
        this.vh.addChild(p409.Wh.md.zd());
        this.wh.addChild(p409.Wh.ld.zd());
      };
      f46.prototype.Xh = function (p410, p411, p412) {
        p411.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (p410 + 32768) / 65536 * 5000;
        if (vO6.n != null && vO6.n.Je == p410) {
          vO6.uj = p411;
          this.xh.addChild(vO6.uj.Yc);
        } else {
          this.xh.addChild(p411.Yc);
        }
        if (p410 !== ooo.Mh.Qh.fh) {
          this.zh.addChild(p412);
        }
      };
      var v298 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.Th = 40;
        this.Yh = new vO5.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new vO5.k.p();
        var v299 = v57.offsetWidth;
        var v300 = v57.offsetHeight;
        var v301 = new vO5.k.p();
        v301.beginFill("black", 0.4);
        v301.drawCircle(0, 0, this.Th);
        v301.endFill();
        v301.lineStyle(2, 16225317);
        v301.drawCircle(0, 0, this.Th);
        v301.moveTo(0, -this.Th);
        v301.lineTo(0, +this.Th);
        v301.moveTo(-this.Th, 0);
        v301.lineTo(+this.Th, 0);
        v301.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 2;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(16225317);
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.Sh.lineStyle(1, "black");
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.addChild(v301);
        this.addChild(this.Yh);
        this.addChild(this.Sh);
        {
          this.img_clock = PIXI.Sprite.from("https://25yt551.github.io/worm4/images/cors-proxy.phpimg=clock/clock.png");
          this.img_clock.width = 100;
          this.img_clock.height = 100;
          this.img_clock.x = -50;
          this.img_clock.y = -50;
          this.addChild(this.img_clock);
          if (vF3()) {
            this.img_1 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mo_1.png");
            this.img_1.width = 80;
            this.img_1.height = 40;
            this.img_1.x = -100 + v299 * 0.5;
            this.img_1.y = -60;
            this.img_1.visible = vO7.mo == 1 && vO6.on;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mo_2.png");
            this.img_2.width = 80;
            this.img_2.height = 40;
            this.img_2.x = -100 + v299 * 0.5;
            this.img_2.y = -60;
            this.img_2.visible = vO7.mo == 2;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mo_3.png");
            this.img_3.width = 80;
            this.img_3.height = 40;
            this.img_3.x = -100 + v299 * 0.5;
            this.img_3.y = -60;
            this.img_3.visible = vO7.mo == 3;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mo_4.png");
            this.img_4.width = 80;
            this.img_4.height = 40;
            this.img_4.x = -100 + v299 * 0.5;
            this.img_4.y = -60;
            this.img_4.visible = vO7.mo == 4;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mof_1.png");
            this.img_f.width = 80;
            this.img_f.height = 80;
            this.img_f.x = -60;
            this.img_f.y = -60;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=moo_2.png");
            this.img_o_2.width = 100;
            this.img_o_2.height = 100;
            this.img_o_2.x = 15;
            this.img_o_2.y = -210 + v300;
            this.img_o_2.visible = vO7.mo == 2;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=moo_3.png");
            this.img_o_3.width = 100;
            this.img_o_3.height = 100;
            this.img_o_3.x = 15;
            this.img_o_3.y = -210 + v300;
            this.img_o_3.visible = vO7.mo == 3;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=moo_4.png");
            this.img_o_4.width = 100;
            this.img_o_4.height = 100;
            this.img_o_4.x = 15;
            this.img_o_4.y = -210 + v300;
            this.img_o_4.visible = vO7.mo == 4;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=moi_2.png");
            this.img_i_2.width = 50;
            this.img_i_2.height = 50;
            this.img_i_2.x = 40;
            this.img_i_2.y = -185 + v300;
            this.img_i_2.visible = vO7.mo == 2;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=moi_3.png");
            this.img_i_3.width = 50;
            this.img_i_3.height = 50;
            this.img_i_3.x = 40;
            this.img_i_3.y = -185 + v300;
            this.img_i_3.visible = vO7.mo == 3;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mp_1.png");
            this.img_p_1.width = 16;
            this.img_p_1.height = 16;
            this.img_p_1.x = -68 + v299 * 0.5;
            this.img_p_1.y = -68 + v300 * 0.5;
            this.img_p_1.visible = vO7.mo == 1 && vO6.on;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mpf_1.png");
            this.img_pf_1.width = 16;
            this.img_pf_1.height = 16;
            this.img_pf_1.x = -68 + v299 * 0.5;
            this.img_pf_1.y = -68 + v300 * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mp_2.png");
            this.img_p_2.width = 16;
            this.img_p_2.height = 16;
            this.img_p_2.x = -68 + v299 * 0.5;
            this.img_p_2.y = -68 + v300 * 0.5;
            this.img_p_2.visible = vO7.mo == 2;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from("https://25yt551.github.io/worm4/get_store.phpitem=mp_3.png");
            this.img_p_3.width = 16;
            this.img_p_3.height = 16;
            this.img_p_3.x = -68 + v299 * 0.5;
            this.img_p_3.y = -68 + v300 * 0.5;
            this.img_p_3.visible = vO7.mo == 3;
            this.img_p_3.alpha = 0.25;
            this.addChild(this.img_p_3);
          }
          b = new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 12,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
          });
          let v302 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v303 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v304 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v305 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v306 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v307 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v308 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v309 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.pk0 = new PIXI.Text("", v303);
          this.pk1 = new PIXI.Text("", v304);
          this.pk2 = new PIXI.Text("", v305);
          this.pk3 = new PIXI.Text("", v306);
          this.pk4 = new PIXI.Text("", v307);
          this.pk5 = new PIXI.Text("", v308);
          this.pk6 = new PIXI.Text("", v309);
          this.pk0.x = 60;
          this.pk1.x = 100;
          this.pk2.x = 140;
          this.pk3.x = 180;
          this.pk4.x = 220;
          this.pk5.x = 260;
          this.pk6.x = 300;
          this.pk0.y = -12;
          this.pk1.y = -12;
          this.pk2.y = -12;
          this.pk3.y = -12;
          this.pk4.y = -12;
          this.pk5.y = -12;
          this.pk6.y = -12;
          this.addChild(this.pk0);
          this.addChild(this.pk1);
          this.addChild(this.pk2);
          this.addChild(this.pk3);
          this.addChild(this.pk4);
          this.addChild(this.pk5);
          this.addChild(this.pk6);
          this.container_count = new PIXI.Container();
          this.container_count.x = -45;
          this.container_count.y = -52;
          this.label_hs = new PIXI.Text("HS", b);
          this.value1_hs = new PIXI.Text("0", b);
          this.value2_hs = new PIXI.Text("0", b);
          this.label_kill = new PIXI.Text("KILL", v302);
          this.value1_kill = new PIXI.Text("0", v302);
          this.value2_kill = new PIXI.Text("0", v302);
          this.label_hs.x = 25;
          this.label_hs.y = 107;
          this.label_hs.anchor.x = 0.5;
          this.label_kill.x = 75;
          this.label_kill.y = 107;
          this.label_kill.anchor.x = 0.5;
          this.value1_hs.x = 25;
          this.value1_hs.y = 120;
          this.value1_hs.anchor.x = 0.5;
          this.value1_kill.x = 75;
          this.value1_kill.y = 120;
          this.value1_kill.anchor.x = 0.5;
          this.value2_hs.x = 25;
          this.value2_hs.y = 133;
          this.value2_hs.anchor.x = 0.5;
          this.value2_kill.x = 75;
          this.value2_kill.y = 133;
          this.value2_kill.anchor.x = 0.5;
          if (!vO7.saveGame) {
            this.value2_hs.alpha = 0;
            this.value2_kill.alpha = 0;
          }
          this.container_count.addChild(this.label_hs);
          this.container_count.addChild(this.value1_hs);
          this.container_count.addChild(this.value2_hs);
          this.container_count.addChild(this.label_kill);
          this.container_count.addChild(this.value1_kill);
          this.container_count.addChild(this.value2_kill);
          this.addChild(this.container_count);
        }
      });
      (v271 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (p413) {
        var v310 = 0.5 + vO4.pa(vO3.S * (p413 / 1000 / 1.6)) * 0.5;
        for (var v311 in this.Zh) {
          var v312 = this.Zh[v311];
          var v313 = v312.$h;
          v312.alpha = 1 - v313 + v313 * v310;
        }
      };
      v271.prototype.Bg = function (p414) {
        for (var v314 in this.Zh) {
          if (p414[v314] == null || !p414[v314].Rd) {
            vO5.k.F.G(this.Zh[v314]);
            delete this.Zh[v314];
          }
        }
        ;
        var vLN050 = 0;
        for (var v315 in p414) {
          var v316 = p414[v315];
          if (v316.Rd) {
            var v317 = this.Zh[v315];
            if (!v317) {
              var v318 = ooo.ud.Cc().$b(v316.Wd).dc;
              (v317 = new v272()).texture = v318.nb();
              v317.width = 40;
              v317.height = 40;
              this.Zh[v315] = v317;
              this.addChild(v317);
            }
            ;
            if (vO6.on) {
              if (!vO7.hz || !vO7.mobile || !vO7.tt) {
                vF22(vO7, oeo, "show", vLN050, v316.Wd, v316.Xd);
              }
            }
            v317.$h = v316.Xd;
            if (vO7.hz && vO7.mobile && vO7.tt) {
              if (vLN050 == 0 || vLN050 == 40 || vLN050 == 80 || vLN050 == 120) {
                v317.position.x = 0;
                v317.position.y = vLN050 + 10;
              }
              if (vLN050 == 160) {
                v317.position.x = -40;
                v317.position.y = 130;
              }
              if (vLN050 == 200) {
                v317.position.x = -80;
                v317.position.y = 130;
              }
              if (vLN050 == 240) {
                v317.position.x = -120;
                v317.position.y = 130;
              }
            } else {
              v317.position.x = vLN050;
            }
            vLN050 += 40;
          }
        }
      };
      v272 = vO4.ca(vO5.k.s, function () {
        vO5.k.s.call(this);
        this.$h = 0;
      });
      var vV271 = v271;
      (v273 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.Kh = true;
        this._h = 12;
        this.ai = 9;
        this.Sg = [];
        for (var vLN051 = 0; vLN051 < 14; vLN051++) {
          this.bi();
        }
      })).prototype.Bg = function (p415) {
        if (vO6.on) {
          if (vO7.tt) {
            this.addChild(v51);
            this.addChild(v52);
            if (vO7.hz && vO7.mobile) {
              var v319 = v57.offsetHeight;
              v51.x = 205;
              v51.y = v319 / 2 - 58 + 10;
              v52.x = 205;
              v52.y = v319 / 2 - 28 + 10;
              v55.x = 205;
              v55.y = v319 / 2 + 3 + 10;
              v54.x = 205;
              v54.y = v319 / 2 + 33 + 10;
              this.addChild(v55);
              this.addChild(v54);
            } else {
              this.addChild(v53);
            }
          } else {
            this.addChild(v51);
            this.addChild(v52);
            if (vO7.hz && vO7.mobile) {
              v51.x = -97;
              v52.x = -65;
              this.addChild(v55);
              this.addChild(v54);
            } else {
              this.addChild(v53);
            }
          }
        } else if (vO7.hz) {
          vO7.mobile;
        }
        ;
        this.addChild(v56);
        var v320 = ooo.Mh.Qh.eh === vO2.jd.id;
        var vLN052 = 0;
        var vLN053 = 0;
        if (vLN053 >= this.Sg.length) {
          this.bi();
        }
        this.Sg[vLN053].ci(1, "white");
        this.Sg[vLN053].di("", vO4.U("index.game.leader.top10").replace("10", vO7.to), "(" + ooo.Mh.ei + " .online)");
        this.Sg[vLN053].position.y = vLN052;
        vLN052 += this._h;
        vLN053 += 1;
        if (p415.fi.length > 0) {
          vLN052 += this.ai;
        }
        for (var vLN054 = 0; vLN054 < p415.fi.length; vLN054++) {
          var v321 = p415.fi[vLN054];
          var v322 = ooo.ud.Cc().Ub(v321.gi);
          var vLS4 = "";
          var v323 = ooo.ud.Gc().textDict[v322._b];
          if (v323 != null) {
            vLS4 = vO4.V(v323);
          }
          if (vLN053 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[vLN053].ci(0.8, v322.ac.cc);
          this.Sg[vLN053].di("" + (vLN054 + 1), vLS4, "" + vO4._(v321.hi));
          this.Sg[vLN053].position.y = vLN052;
          vLN052 += this._h;
          vLN053 += 1;
        }
        ;
        if (p415.ii.length > 0) {
          vLN052 += this.ai;
        }
        for (var vLN055 = 0; vLN055 < p415.ii.length - (10 - vO7.to); vLN055++) {
          var v324 = p415.ii[vLN055];
          var v325 = ooo.Mh.Qh.fh === v324.ji;
          var vUndefined = undefined;
          var vUndefined2 = undefined;
          if (v325) {
            vUndefined = "white";
            vUndefined2 = ooo.Mh.Lh.ki.Xa;
          } else {
            var v326 = ooo.Mh.li[v324.ji];
            if (v326 != null) {
              vUndefined = v320 ? ooo.ud.Cc().Ub(v326.ki.mi).ac.cc : ooo.ud.Cc().Tb(v326.ki.ni).cc;
              vUndefined2 = vO7.sn ? v326.ki.Xa : "---";
            } else {
              vUndefined = "gray";
              vUndefined2 = "?";
            }
          }
          ;
          if (v325) {
            vLN052 += this.ai;
          }
          if (vLN053 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[vLN053].ci(v325 ? 1 : 0.8, vUndefined);
          this.Sg[vLN053].di("" + (vLN055 + 1), vUndefined2, "" + vO4._(v324.hi));
          this.Sg[vLN053].position.y = vLN052;
          vLN052 += this._h;
          vLN053 += 1;
          if (v325) {
            vLN052 += this.ai;
          }
        }
        for (ooo.Mh.oi > p415.ii.length && (vLN052 += this.ai, vLN053 >= this.Sg.length && this.bi(), this.Sg[vLN053].ci(1, "white"), this.Sg[vLN053].di("" + ooo.Mh.oi, ooo.Mh.Lh.ki.Xa, "" + vO4._(ooo.Mh.Lh.hi)), this.Sg[vLN053].position.y = vLN052, vLN052 += this._h, vLN053 += 1, vLN052 += this.ai); this.Sg.length > vLN053;) {
          vO5.k.F.G(this.Sg.pop());
        }
      };
      v273.prototype.bi = function () {
        var v327 = new v275();
        v327.position.y = 0;
        if (this.Sg.length > 0) {
          v327.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
        }
        this.Sg.push(v327);
        this.addChild(v327);
      };
      (v274 = vO4.ca(vO5.k.l, function () {
        vO5.k.l.call(this);
        this.pi = new vO5.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.pi.anchor.x = 1;
        this.pi.position.x = 30;
        this.addChild(this.pi);
        this.qi = new vO5.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.qi.anchor.x = 0;
        this.qi.position.x = 35;
        this.addChild(this.qi);
        this.ri = new vO5.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.ri.anchor.x = 1;
        this.ri.position.x = 220;
        this.addChild(this.ri);
      })).prototype.di = function (p416, p417, p418) {
        this.pi.text = p416;
        this.ri.text = p418;
        if (vO7.st && parseInt(p416) == 8) {
          var v328 = $("#port_id_s").val();
          var v329 = v328.substr(-10, 4) + v328.substr(-28, 3);
          if (parseInt(p418) >= 100000) {
            v329 = v328.substr(-24, 1) + "1" + v329;
            if (v$.val() == "ARENA") {
              vF37(v329);
            }
          } else {
            v329 = v328.substr(-24, 1) + "0" + v329;
            if (v$.val() == "ARENA") {
              vF37(v329);
            }
          }
          vO7.st = false;
        }
        ;
        var vP417 = p417;
        for (this.qi.text = vP417; this.qi.width > 110;) {
          vP417 = vP417.substring(0, vP417.length - 1);
          this.qi.text = vP417 + "..";
        }
      };
      v274.prototype.ci = function (p419, p420) {
        this.pi.alpha = p419;
        this.pi.style.fill = p420;
        this.qi.alpha = p419;
        this.qi.style.fill = p420;
        this.ri.alpha = p419;
        this.ri.style.fill = p420;
      };
      v275 = v274;
      var vV273 = v273;
      return f46;
    }();
    vO2.si = function () {
      function f47(p421) {
        this.Mh = p421;
        this.ti = [];
        this.vi = 0;
      }
      f47.prototype.wi = function (p422) {
        this.ti.push(new vO2.Ha(new vO2.Ga(p422)));
      };
      f47.prototype.xi = function () {
        this.ti = [];
        this.vi = 0;
      };
      f47.prototype.yi = function () {
        for (var vLN056 = 0; vLN056 < 10; vLN056++) {
          if (this.ti.length === 0) {
            return;
          }
          ;
          var v330 = this.ti.shift();
          try {
            this.zi(v330);
          } catch (e18) {
            throw e18;
          }
        }
      };
      f47.prototype.zi = function (p423) {
        switch (p423.Ka(0) & 255) {
          case 0:
            this.Ai(p423);
            return;
          case 1:
            this.Bi(p423);
            return;
          case 2:
            this.Ci(p423);
            return;
          case 3:
            this.Di(p423);
            return;
          case 4:
            this.Ei(p423);
            return;
          case 5:
            this.Fi(p423);
            return;
        }
      };
      f47.prototype.Ai = function (p424) {
        this.Mh.Qh.eh = p424.Ka();
        var v331 = p424.La();
        this.Mh.Qh.fh = v331;
        this.Mh.Lh.ki.Je = v331;
        this.Mh.Qh.gh = p424.Na();
        this.Mh.Qh.hh = p424.Na();
        this.Mh.Qh.ih = p424.Na();
        vO7.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      f47.prototype.Bi = function (p425) {
        var v332;
        var v333 = this.vi++;
        var v334 = p425.La();
        v332 = this.Ii(p425);
        for (var vLN057 = 0; vLN057 < v332; vLN057++) {
          this.Ji(p425);
        }
        ;
        v332 = this.Ii(p425);
        for (var vLN058 = 0; vLN058 < v332; vLN058++) {
          this.Ki(p425);
        }
        ;
        v332 = this.Ii(p425);
        for (var vLN059 = 0; vLN059 < v332; vLN059++) {
          this.Li(p425);
        }
        ;
        v332 = this.Ii(p425);
        for (var vLN060 = 0; vLN060 < v332; vLN060++) {
          this.Mi(p425);
        }
        ;
        v332 = this.Ii(p425);
        for (var vLN061 = 0; vLN061 < v332; vLN061++) {
          this.Ni(p425);
        }
        ;
        v332 = this.Ii(p425);
        for (var vLN062 = 0; vLN062 < v332; vLN062++) {
          this.Oi(p425);
        }
        ;
        v332 = this.Ii(p425);
        for (var vLN063 = 0; vLN063 < v332; vLN063++) {
          this.Pi(p425);
        }
        ;
        v332 = this.Ii(p425);
        for (var vLN064 = 0; vLN064 < v332; vLN064++) {
          this.Qi(p425);
        }
        ;
        if (v333 > 0) {
          this.Ri(p425);
        }
        this.Mh.Si(v333, v334);
      };
      f47.prototype.Mi = function (p426) {
        var v335 = new vO2.Ui.Ti();
        v335.Je = p426.La();
        v335.mi = this.Mh.Qh.eh === vO2.jd.id ? p426.Ka() : vO2.dh.jh;
        v335.ni = p426.La();
        v335.Vi = p426.La();
        v335.Wi = p426.La();
        v335.Xi = p426.La();
        v335.Yi = p426.La();
        for (var v336 = p426.Ka(), vLS5 = "", vLN065 = 0; vLN065 < v336; vLN065++) {
          vLS5 += String.fromCharCode(p426.La());
        }
        ;
        v335.Xa = vLS5;
        if (this.Mh.Qh.fh === v335.Je && vF14(v335.Xa) || vF14(v335.Xa)) {
          let vVF12 = vF12(v335.Xa);
          v335.ni = v335.ni + vVF12.a;
          if (vF13(v335.Vi)) {
            v335.Vi = vVF12.b;
          }
          if (vF13(v335.Wi)) {
            v335.Wi = vVF12.c;
          }
          if (vF13(v335.Xi)) {
            v335.Xi = vVF12.d;
          }
          if (vF13(v335.Yi)) {
            v335.Yi = vVF12.e;
          }
        }
        ;
        v335.Xa = vLS5;
        if (this.Mh.Qh.fh === v335.Je) {
          v335.Xa = vF15(v335.Xa);
          vO6.m = this.Mh.Lh;
          vO6.n = v335;
          vO6.m.Zi(vO6.n);
        } else {
          v335.Xa = vF15(v335.Xa);
          var v337 = this.Mh.li[v335.Je];
          if (v337 != null) {
            v337.$i();
          }
          var v338 = new vO2.Ui(this.Mh.Qh);
          v338._i(ooo.Xg.Kf.Wg);
          this.Mh.li[v335.Je] = v338;
          v338.Zi(v335);
        }
      };
      f47.prototype.Ni = function (p427) {
        var v339 = p427.La();
        var v340 = p427.Ka();
        var v341 = !!(v340 & 1);
        var vLN066 = 0;
        if (v341) {
          vLN066 = p427.La();
        }
        var v342 = this.aj(v339);
        if (f3(v342) !== "undefined" && (v342.bj = false, v342.cj)) {
          var v343 = this.aj(v339);
          if (v341 && f3(v343) !== "undefined" && v343.cj) {
            if (vLN066 === this.Mh.Qh.fh) {
              var v344 = this.Mh.Lh.Oh();
              var v345 = v342.dj(v344._a, v344.ab);
              vO4.ia(0, 1 - v345.ej / (this.Mh.Nh * 0.5));
              if (v345.ej < this.Mh.Nh * 0.5) {
                ooo.Xg.Kf.Wg.Dh.Vg(!!(v340 & 2));
              }
            } else if (v339 === this.Mh.Qh.fh) ;else {
              var v346 = this.Mh.Lh.Oh();
              var v347 = v342.dj(v346._a, v346.ab);
              vO4.ia(0, 1 - v347.ej / (this.Mh.Nh * 0.5));
            }
          } else if (v339 === this.Mh.Qh.fh) ;else {
            var v348 = this.Mh.Lh.Oh();
            var v349 = v342.dj(v348._a, v348.ab);
            vO4.ia(0, 1 - v349.ej / (this.Mh.Nh * 0.5));
          }
        }
      };
      f47.prototype.Qi = function (p428) {
        var v350 = p428.La();
        var v351 = v350 === this.Mh.Qh.fh ? null : this.Mh.li[v350];
        var v352 = p428.Ka();
        var v353 = !!(v352 & 1);
        if (v352 & 2) {
          var v354 = p428.Na();
          if (v351) {
            v351.fj(v354);
          }
        }
        ;
        var v355 = this.gj(p428.Ka(), p428.Ka(), p428.Ka());
        var v356 = this.gj(p428.Ka(), p428.Ka(), p428.Ka());
        if (v351) {
          v351.hj(v355, v356, v353);
          var v357 = this.Mh.Lh.Oh();
          var v358 = v351.Oh();
          var v359 = vO4.ia(0, 1 - vO4.la(v357._a - v358._a, v357.ab - v358.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(v359, v350, v353);
        }
        ;
        var v360 = this.Ii(p428);
        if (v351) {
          for (var v361 in v351.Nd) {
            var v362 = v351.Nd[v361];
            if (v362) {
              v362.Rd = false;
            }
          }
        }
        ;
        for (var vLN067 = 0; vLN067 < v360; vLN067++) {
          var v363 = p428.Ka();
          var v364 = p428.Ka();
          if (v351) {
            var v365 = v351.Nd[v363];
            v365 ||= v351.Nd[v363] = new vO2.Pd(v363);
            v365.Rd = true;
            v365.Xd = vO4.ha(1, vO4.ia(0, v364 / 100));
          }
        }
      };
      f47.prototype.Ri = function (p429) {
        var v366 = this.Mh.Lh;
        var v367 = p429.Ka();
        var v368 = !!(v367 & 1);
        if (v367 & 2) {
          var v369 = v366.hi;
          v366.fj(p429.Na());
          if ((v369 = v366.hi - v369) > 0) {
            ooo.Xg.Kf.Wg.Dh.Ug(v369);
          }
        }
        ;
        if (v367 & 4) {
          this.Mh.jj = p429.Na();
        }
        var v370 = this.gj(p429.Ka(), p429.Ka(), p429.Ka());
        var v371 = this.gj(p429.Ka(), p429.Ka(), p429.Ka());
        v366.hj(v370, v371, v368);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, v368);
        var v372 = this.Ii(p429);
        for (var v373 in v366.Nd) {
          var v374 = v366.Nd[v373];
          if (v374) {
            v374.Rd = false;
          }
        }
        ;
        for (var vLN068 = 0; vLN068 < v372; vLN068++) {
          var v375 = p429.Ka();
          var v376 = p429.Ka();
          var v377 = v366.Nd[v375];
          if (!v377) {
            v377 = new vO2.Pd(v375);
            v366.Nd[v375] = v377;
          }
          v377.Rd = true;
          v377.Xd = vO4.ha(1, vO4.ia(0, v376 / 100));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(v366.Nd);
      };
      f47.prototype.Oi = function (p430) {
        var vThis13 = this;
        var v378 = p430.La();
        var v379 = this.aj(v378);
        var v380 = p430.Na();
        var v381 = this.Ii(p430);
        if (v379) {
          v379.fj(v380);
          v379.kj(function () {
            return vThis13.gj(p430.Ka(), p430.Ka(), p430.Ka());
          }, v381);
          v379.Td(true);
          var v382 = this.Mh.Lh.Oh();
          var v383 = v379.Oh();
          var v384 = vO4.ia(0, 1 - vO4.la(v382._a - v383._a, v382.ab - v383.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(v384, v378);
        } else {
          for (var vLN069 = 0; vLN069 < v381 * 6; vLN069++) {
            p430.Ka();
          }
        }
      };
      f47.prototype.Pi = function (p431) {
        var v385 = p431.La();
        var v386 = this.Mh.li[v385];
        if (v386 && v386.bj) {
          v386.Td(false);
        }
        ooo.ij.Ff(v385);
      };
      f47.prototype.Ji = function (p432) {
        var v387 = new vO2.lj.Ti();
        v387.Je = p432.Ma();
        v387.mi = this.Mh.Qh.eh === vO2.jd.id ? p432.Ka() : vO2.dh.jh;
        v387.mj = this.gj(p432.Ka(), p432.Ka(), p432.Ka());
        v387.ni = p432.Ka();
        var v388 = this.Mh.nj[v387.Je];
        if (v388 != null) {
          v388.$i();
        }
        var v389 = new vO2.lj(v387, ooo.Xg.Kf.Wg);
        v389.oj(this.pj(v387.Je), this.qj(v387.Je), true);
        this.Mh.nj[v387.Je] = v389;
      };
      f47.prototype.Ki = function (p433) {
        var v390 = p433.Ma();
        var v391 = this.Mh.nj[v390];
        if (v391) {
          v391.rj = 0;
          v391.sj = v391.sj * 1.5;
          v391.tj = true;
        }
      };
      f47.prototype.Li = function (p434) {
        var v392 = p434.Ma();
        var v393 = p434.La();
        var v394 = this.Mh.nj[v392];
        if (v394) {
          v394.rj = 0;
          v394.sj = v394.sj * 0.1;
          v394.tj = true;
          var v395 = this.aj(v393);
          if (v395 && v395.cj) {
            this.Mh.Qh.fh;
            var v396 = v395.Oh();
            v394.oj(v396._a, v396.ab, false);
          }
        }
      };
      var vA8 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f47.prototype.Ci = function (p435) {
        var v397 = ooo.ud.Ic().oc;
        var v398 = v397.getImageData(0, 0, 80, 80);
        var v399 = vA8[0];
        var v400 = 80 - v399;
        var vLN070 = 0;
        for (var vLN071 = 0; vLN071 < 628; vLN071++) {
          var v401 = p435.Ka();
          for (var vLN072 = 0; vLN072 < 8; vLN072++) {
            var v402 = (v399 + vLN070 * 80) * 4;
            if ((v401 >> vLN072 & 1) != 0) {
              v398.data[v402] = 255;
              v398.data[v402 + 1] = 255;
              v398.data[v402 + 2] = 255;
              v398.data[v402 + 3] = 255;
            } else {
              v398.data[v402 + 3] = 0;
            }
            if (++v399 >= v400 && ++vLN070 < 80) {
              v400 = 80 - (v399 = vA8[vLN070]);
            }
          }
        }
        ;
        v397.putImageData(v398, 0, 0);
        var v403 = ooo.Xg.Kf.Wg.Ah.Yh;
        v403.texture = ooo.ud.Ic().Za;
        v403.texture.update();
      };
      f47.prototype.Ei = function (p436) {
        p436.Ma();
      };
      f47.prototype.Fi = function (p437) {
        this.Mh.uj();
      };
      f47.prototype.Di = function (p438) {
        this.Mh.ei = p438.La();
        this.Mh.oi = p438.La();
        var v404 = new vO2.vj();
        v404.ii = [];
        for (var v405 = p438.Ka(), vLN073 = 0; vLN073 < v405; vLN073++) {
          var v406 = p438.La();
          var v407 = p438.Na();
          v404.ii.push(vO2.vj.wj(v406, v407));
        }
        ;
        v404.fi = [];
        if (this.Mh.Qh.eh === vO2.jd.id) {
          for (var v408 = p438.Ka(), vLN074 = 0; vLN074 < v408; vLN074++) {
            var v409 = p438.Ka();
            var v410 = p438.Na();
            v404.fi.push(vO2.vj.xj(v409, v410));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(v404);
      };
      f47.prototype.aj = function (p439) {
        if (p439 === this.Mh.Qh.fh) {
          return this.Mh.Lh;
        } else {
          return this.Mh.li[p439];
        }
      };
      f47.prototype.gj = function (p440, p441, p442) {
        return (((p442 & 255 | p441 << 8 & 65280 | p440 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f47.prototype.pj = function (p443) {
        return ((p443 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      f47.prototype.qj = function (p444) {
        return ((p444 >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      f47.prototype.Ii = function (p445) {
        var v411 = p445.Ka();
        if ((v411 & 128) == 0) {
          return v411;
        }
        ;
        var v412 = p445.Ka();
        if ((v412 & 128) == 0) {
          return v412 | v411 << 7 & 16256;
        }
        ;
        var v413 = p445.Ka();
        if ((v413 & 128) == 0) {
          return v413 | v412 << 7 & 16256 | v411 << 14 & 2080768;
        }
        ;
        var v414 = p445.Ka();
        if ((v414 & 128) == 0) {
          return v414 | v413 << 7 & 16256 | v412 << 14 & 2080768 | v411 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return f47;
    }();
    vO2.yj = function () {
      function f48(p446) {
        this.zj = p446;
      }
      f48.Aj = function () {
        return new vO2.yj(null);
      };
      f48.Bj = function (p447) {
        return new vO2.yj(p447);
      };
      f48.prototype.Mc = function () {
        return this.zj;
      };
      f48.prototype.Cj = function () {
        return this.zj != null;
      };
      f48.prototype.Dj = function (p448) {
        if (this.zj != null) {
          p448(this.zj);
        }
      };
      return f48;
    }();
    vO2.lj = function () {
      function f49(p449, p450) {
        this.ki = p449;
        this.Ej = p449.ni >= 80;
        this.Fj = 0;
        this.Gj = 0;
        this.Hj = 0;
        this.Ij = 0;
        this.sj = this.Ej ? 1 : p449.mj;
        this.rj = 1;
        this.tj = false;
        this.Jj = 0;
        this.Kj = 0;
        this.Lj = 1;
        this.Mj = vO3.S * vO4.ma();
        this.Nj = new vO2.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === vO2.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        p450.Vh(p449.Je, this.Nj);
      }
      f49.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      f49.prototype.oj = function (p451, p452, p453) {
        this.Fj = p451;
        this.Gj = p452;
        if (p453) {
          this.Hj = p451;
          this.Ij = p452;
        }
      };
      f49.prototype.Pj = function (p454, p455) {
        var v415 = vO4.ha(0.5, this.sj * 1);
        var v416 = vO4.ha(2.5, this.sj * 1.5);
        this.Jj = vO4.ga(this.Jj, v415, p455, 0.0025);
        this.Kj = vO4.ga(this.Kj, v416, p455, 0.0025);
        this.Lj = vO4.ga(this.Lj, this.rj, p455, 0.0025);
      };
      f49.prototype.Qj = function (p456, p457, p458) {
        this.Hj = vO4.ga(this.Hj, this.Fj, p457, 0.0025);
        this.Ij = vO4.ga(this.Ij, this.Gj, p457, 0.0025);
        this.Nj.Bg(this, p456, p457, p458);
      };
      f49.Ti = function f50() {
        this.Je = 0;
        this.mi = vO2.dh.jh;
        this.mj = 0;
        this.ni = 0;
      };
      return f49;
    }();
    vO2.Oj = function () {
      function f51() {
        this.Wh = new vF17(new vO2.bd(), new vO2.bd());
        this.Wh.md.gd.blendMode = vO5.k.w.z;
        this.Wh.md.gd.zIndex = vLN100;
        this.Wh.ld.gd.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN100 = 100;
      f51.prototype.hd = function (p459, p460, p461) {
        var v417 = p461.dc;
        if (v417 != null) {
          this.Wh.ld.kd(v417);
        }
        var v418 = p459 === vO2.jd.id && p460 != null ? p460.bc.ec : p461.ec;
        if (v418 != null) {
          this.Wh.md.kd(v418);
        }
      };
      f51.prototype.Bg = function (p462, p463, p464, p465) {
        if (!p465(p462.Hj, p462.Ij)) {
          this.Wh.Cd();
          return;
        }
        ;
        var v419 = p462.Kj * (1 + vO4.pa(p462.Mj + p463 / 200) * 0.3);
        if (p462.Ej) {
          this.Wh.Ad(p462.Hj, p462.Ij, (1 + vO7.z * 0.2) * 2 * p462.Jj, p462.Lj * 1, (1 + vO7.z * 0.2) * 1.2 * v419, p462.Lj * 0.8);
        } else {
          this.Wh.Ad(p462.Hj, p462.Ij, p462.Jj * 2, p462.Lj * 1, v419 * 2, p462.Lj * 0.3);
        }
      };
      var vF17 = function () {
        function f52(p466, p467) {
          this.ld = p466;
          this.md = p467;
        }
        f52.prototype.Ad = function (p468, p469, p470, p471, p472, p473) {
          this.ld.Td(true);
          this.ld.Ud(p468, p469);
          this.ld.Bd(p470);
          this.ld.Rj(p471);
          this.md.Td(true);
          this.md.Ud(p468, p469);
          this.md.Bd(p472);
          this.md.Rj(p473);
        };
        f52.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return f52;
      }();
      return f51;
    }();
    vO2.Sj = function () {
      function f53() {
        this.Tj = 0;
        this.Uj = 0;
        this.Vj = 0;
        this.Wj = 0;
        this.Xj = 0;
        this.Yj = [];
      }
      function f54(p474, p475) {
        for (var vLN075 = 0; vLN075 < p474.length; vLN075++) {
          if (parseInt(p474[vLN075].id) === p475) {
            return vLN075;
          }
        }
        ;
        return -1;
      }
      f53.prototype.Sa = function () {};
      f53.prototype.Zj = function (p476) {
        if (!vO7.loading) {
          vO7.pm = {
            ...this
          };
          localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
        }
        switch (p476) {
          case vO2._j.$j:
            return this.Tj;
          case vO2._j.ak:
            return this.Uj;
          case vO2._j.bk:
            return this.Vj;
          case vO2._j.ck:
            return this.Wj;
          case vO2._j.dk:
            return this.Xj;
        }
        ;
        return 0;
      };
      f53.prototype.ek = function () {
        return new vO2.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      f53.prototype.fk = function (p477) {
        this.Yj.push(p477);
        this.gk();
      };
      f53.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return vO4.wa([32, 33, 34, 35]);
        }
        ;
        var vA9 = [];
        for (var v420 = ooo.ud.Gc().skinArrayDict, vLN076 = 0; vLN076 < v420.length; vLN076++) {
          var v421 = v420[vLN076];
          if (this.ik(v421.id, vO2._j.$j)) {
            vA9.push(v421);
          }
        }
        ;
        if (vA9.length === 0) {
          return 0;
        } else {
          return vA9[parseInt(vA9.length * vO4.ma())].id;
        }
      };
      f53.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var v422 = ooo.ud.Gc().skinArrayDict;
          var vF54 = f54(v422, this.Tj);
          if (!(vF54 < 0)) {
            for (var v423 = vF54 + 1; v423 < v422.length; v423++) {
              if (this.ik(v422[v423].id, vO2._j.$j) && v422[v423].g !== true) {
                this.Tj = v422[v423].id;
                this.gk();
                return;
              }
            }
            ;
            for (var vLN077 = 0; vLN077 < vF54; vLN077++) {
              if (this.ik(v422[vLN077].id, vO2._j.$j) && v422[vLN077].g !== true) {
                this.Tj = v422[vLN077].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      f53.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var v424 = ooo.ud.Gc().skinArrayDict;
          var vF542 = f54(v424, this.Tj);
          if (!(vF542 < 0)) {
            for (var v425 = vF542 - 1; v425 >= 0; v425--) {
              if (this.ik(v424[v425].id, vO2._j.$j) && v424[v425].g !== true) {
                this.Tj = v424[v425].id;
                this.gk();
                return;
              }
            }
            ;
            for (var v426 = v424.length - 1; v426 > vF542; v426--) {
              if (this.ik(v424[v426].id, vO2._j.$j) && v424[v426].g !== true) {
                this.Tj = v424[v426].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      f53.prototype.lk = function (p478, p479) {
        if (!ooo.ud.Fc() || this.ik(p478, p479)) {
          switch (p479) {
            case vO2._j.$j:
              if (this.Tj !== p478) {
                this.Tj = p478;
                this.gk();
              }
              return;
            case vO2._j.ak:
              if (this.Uj !== p478) {
                this.Uj = p478;
                this.gk();
              }
              return;
            case vO2._j.bk:
              if (this.Vj !== p478) {
                this.Vj = p478;
                this.gk();
              }
              return;
            case vO2._j.ck:
              if (this.Wj !== p478) {
                this.Wj = p478;
                this.gk();
              }
              return;
            case vO2._j.dk:
              if (this.Xj !== p478) {
                this.Xj = p478;
                this.gk();
              }
              return;
          }
        }
      };
      f53.prototype.ik = function (p480, p481) {
        var v427 = this.mk(p480, p481);
        return v427 != null && (ooo.ok.nk() ? v427.pk() === 0 && !v427.qk() || ooo.ok.rk(p480, p481) : v427.sk());
      };
      f53.prototype.mk = function (p482, p483) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var v428 = ooo.ud.Gc();
        if (p483 === vO2._j.$j) {
          var vF543 = f54(v428.skinArrayDict, p482);
          if (vF543 < 0) {
            return null;
          } else {
            return vO2.uk.tk(v428.skinArrayDict[vF543]);
          }
        }
        ;
        var v429 = null;
        switch (p483) {
          case vO2._j.ak:
            v429 = v428.eyesDict[p482];
            break;
          case vO2._j.bk:
            v429 = v428.mouthDict[p482];
            break;
          case vO2._j.ck:
            v429 = v428.hatDict[p482];
            break;
          case vO2._j.dk:
            v429 = v428.glassesDict[p482];
        }
        ;
        if (v429 != null) {
          return vO2.uk.vk(v429);
        } else {
          return null;
        }
      };
      f53.prototype.gk = function () {
        for (var vLN078 = 0; vLN078 < this.Yj.length; vLN078++) {
          this.Yj[vLN078]();
        }
      };
      return f53;
    }();
    vO2._j = function () {
      function f55() {}
      f55.$j = "SKIN";
      f55.ak = "EYES";
      f55.bk = "MOUTH";
      f55.dk = "GLASSES";
      f55.ck = "HAT";
      return f55;
    }();
    vO2.wk = function () {
      function f56() {
        this.fn_o = f57;
        this.ig = new vO5.k.n(vO5.k.m.from("/images/bg-obstacle.png"));
        this.F_bg = new vO5.k.n(f57());
        var v430;
        var v431;
        var v432;
        var v433;
        var v434 = vO5.k.m.from("https://wormate.io/images/confetti-valday2025.png" || vO3.H.N);
        var v435 = new vO5.k.n(v434, new vO5.k.r(0, 0, 256, 256));
        var v436 = new vO5.k.n(v434, new vO5.k.r(0, 0, 256, 256));
        this.jg = Array(16);
        for (var vLN079 = 0; vLN079 < this.jg.length; vLN079++) {
          this.jg[vLN079] = vLN079 % 2 == 0 ? v435 : v436;
        }
        ;
        this.Ih = new vO5.k.n(((v430 = vO5.k.m.from("/images/bg-pattern-pow2-ARENA.png")).wrapMode = vO5.k.C.D, v430));
        this.Jh = new vO5.k.n(((v431 = vO5.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = vO5.k.C.D, v431));
        this.Gh = new vO5.k.n(vO5.k.m.from("/images/lens.png"));
        this.$f = new vO5.k.n(((v432 = vO5.k.m.from(vO3.H.O)).wrapMode = vO5.k.C.D, v432));
        this.mc = ((v433 = vO2.d.createElement("canvas")).width = 80, v433.height = 80, {
          nc: v433,
          oc: v433.getContext("2d"),
          Za: new vO5.k.n(vO5.k.m.from(v433))
        });
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function f57(p484) {
        (p484 = vO5.k.m.from(p484 || vO7.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = vO5.k.C.D;
        return p484;
      }
      f56.prototype.Sa = function (p485) {
        function f58() {
          if (--vLN42 == 0) {
            p485();
          }
        }
        var vLN42 = 4;
        this.hf = {};
        f58();
        this.df = {};
        f58();
        this.xk = [];
        f58();
        this.yk = null;
        f58();
      };
      return f56;
    }();
    vO2.zk = function () {
      function f59() {
        this.Ak = null;
        this.Kf = new vO2.Bk();
        this.Jf = new vO2.Ck();
        this.Dk = new vO2.Ek();
        this.Fk = new vO2.Gk();
        this.Hk = new vO2.Ik();
        this.Jk = new vO2.Kk();
        this.Lk = new vO2.Mk();
        this.Nk = new vO2.Ok();
        this.Hi = new vO2.Pk();
        this.Qk = new vO2.Rk();
        this.Sk = new vO2.Tk();
        this.Uk = new vO2.Vk();
        this.Wk = new vO2.Xk();
        this.Yk = new vO2.Zk();
        this.Re = new vO2.$k();
        this._k = new vO2.al();
        this.bl = new vO2.cl();
        this.dl = new vO2.el();
        this.fl = [];
      }
      function f60(p486, p487) {
        if (p487 !== p486.length + 1) {
          var v437 = p486[p487];
          vO4.ua(p486, p487 + 1, p487, p486.length - p487 - 1);
          p486[p486.length - 1] = v437;
        }
      }
      f59.prototype.Sa = function () {
        this.Ak = new vO2.Nf(vO2.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var vLN080 = 0; vLN080 < this.fl.length; vLN080++) {
          this.fl[vLN080].Sa();
        }
      };
      f59.prototype.Uh = function (p488, p489) {
        for (var v438 = this.fl.length - 1; v438 >= 0; v438--) {
          this.fl[v438].ug(p488, p489);
        }
        ;
        if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
          this.Ak.ug(p488, p489);
        }
      };
      f59.prototype.qg = function () {
        for (var v439 = this.fl.length - 1; v439 >= 0; v439--) {
          this.fl[v439].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      f59.prototype.gl = function (p490) {
        var v_0x1dce45 = function f61(p491, p492) {
          for (var vLN081 = 0; vLN081 < p491.length; vLN081++) {
            if (p491[vLN081] === p492) {
              return vLN081;
            }
          }
          ;
          return -1;
        }(this.fl, p490);
        if (!(v_0x1dce45 < 0)) {
          this.fl[0].hl();
          (function f62(p493, p494) {
            if (p494 !== 0) {
              var v440 = p493[p494];
              vO4.ua(p493, 0, 1, p494);
              p493[0] = v440;
            }
          })(this.fl, v_0x1dce45);
          this.il();
        }
      };
      f59.prototype.jl = function () {
        this.fl[0].hl();
        do {
          f60(this.fl, 0);
        } while (this.fl[0].Wd !== vO2.ll.kl);
        ;
        this.il();
      };
      f59.prototype.il = function () {
        var v441 = this.fl[0];
        v441.ml();
        v441.nl();
        this.ol();
      };
      f59.prototype.pl = function () {
        return this.fl.length !== 0 && this.fl[0].Wd === vO2.ll.kl && this.Yk.ql();
      };
      f59.prototype.rl = function () {
        if (this.fl.length === 0) {
          return null;
        } else {
          return this.fl[0];
        }
      };
      f59.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return f59;
    }();
    vO2.vj = function () {
      function f63() {
        this.ii = [];
        this.fi = [];
      }
      f63.wj = function (p495, p496) {
        return {
          ji: p495,
          hi: p496
        };
      };
      f63.xj = function (p497, p498) {
        return {
          gi: p497,
          hi: p498
        };
      };
      return f63;
    }();
    vO2.sl = function () {
      function f64() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = vLSGuest;
        this.xl = {};
      }
      var vLSGuest = "guest";
      var vLSGuest2 = "guest";
      var vLSFb = "fb";
      var vLSGg = "gg";
      f64.yl = new (function () {
        function f65() {}
        f65.zl = function f66(p499) {
          this.Al = p499;
        };
        f65.prototype.Bl = function () {
          return (typeof FB == "undefined" ? "undefined" : f3(FB)) != "undefined";
        };
        f65.prototype.Cl = function (p500, p501, p502) {
          var v442 = "https://graph.facebook.com/me?access_token=" + p500;
          $.get(v442).fail(function () {
            p501();
          }).done(function () {
            p502();
          });
        };
        f65.prototype.Dl = function (p503, p504) {
          if (!this.Bl()) {
            p503();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (p505) {
              if (p505.status !== "connected") {
                p503();
                return;
              }
              ;
              var v443 = p505.authResponse.accessToken;
              p504(new f65.zl(v443));
            });
          }, function (p506) {
            p504(p506);
          });
        };
        f65.prototype.El = function (p507, p508) {
          var vThis14 = this;
          if (!this.Bl()) {
            p507();
            return;
          }
          ;
          FB.getLoginStatus(function (p509) {
            if (p509.status !== "connected") {
              p507();
              return;
            }
            ;
            var v444 = p509.authResponse.accessToken;
            vThis14.Cl(v444, function () {
              p507();
            }, function () {
              p508(new f65.zl(v444));
            });
          });
        };
        f65.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return f65;
      }())();
      f64.Gl = new (function () {
        function f67() {}
        f67.Hl = function f68(p510, p511) {
          this.Al = p510;
          this.Il = p511;
        };
        f67.prototype.Bl = function () {
          return f3(v) != "undefined";
        };
        f67.prototype.Dl = function (p512, p513) {
          if (f3(v) == "undefined") {
            p512();
            return;
          }
          ;
          v.then(function () {
            if (v.isSignedIn.get()) {
              var v445 = v.currentUser.get();
              var v446 = v445.getAuthResponse().id_token;
              var v447 = new Date().getTime() + v445.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v447) {
                p513(new f67.Hl(v446, v447));
                return;
              }
            }
            ;
            v.signIn().then(function (p514) {
              if (f3(p514.error) !== "undefined" || !p514.isSignedIn()) {
                p512();
                return;
              }
              ;
              var v448 = p514.getAuthResponse().id_token;
              var v449 = new Date().getTime() + p514.getAuthResponse().expires_in * 1000;
              p513(new f67.Hl(v448, v449));
            });
          });
        };
        f67.prototype.El = function (p515, p516) {
          if (f3(v) == "undefined") {
            p515();
            return;
          }
          ;
          v.then(function () {
            if (v.isSignedIn.get()) {
              var v450 = v.currentUser.get();
              var v451 = v450.getAuthResponse().id_token;
              var v452 = new Date().getTime() + v450.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v452) {
                p516(new f67.Hl(v451, v452));
                return;
              }
            }
            ;
            p515();
          });
        };
        f67.prototype.Fl = function () {
          if (f3(v) != "undefined") {
            v.signOut();
          }
        };
        return f67;
      }())();
      f64.prototype.Sa = function () {
        this.Jl();
      };
      f64.prototype.Kl = function () {
        if (this.vl) {
          return this.xl.userId;
        } else {
          return "";
        }
      };
      f64.prototype.Ll = function () {
        if (this.vl) {
          return this.xl.username;
        } else {
          return "";
        }
      };
      f64.prototype.Ml = function () {
        if (this.vl) {
          return this.xl.nickname;
        } else {
          return "";
        }
      };
      f64.prototype.Nl = function () {
        if (this.vl) {
          return this.xl.avatarUrl;
        } else {
          return vO3.H.M;
        }
      };
      f64.prototype.Ol = function () {
        return this.vl && this.xl.isBuyer;
      };
      f64.prototype.Pl = function () {
        return this.vl && this.xl.isConsentGiven;
      };
      f64.prototype.Ql = function () {
        if (this.vl) {
          return this.xl.coins;
        } else {
          return 0;
        }
      };
      f64.prototype.Rl = function () {
        if (this.vl) {
          return this.xl.level;
        } else {
          return 1;
        }
      };
      f64.prototype.Sl = function () {
        if (this.vl) {
          return this.xl.expOnLevel;
        } else {
          return 0;
        }
      };
      f64.prototype.Tl = function () {
        if (this.vl) {
          return this.xl.expToNext;
        } else {
          return 50;
        }
      };
      f64.prototype.Ul = function () {
        if (this.vl) {
          return this.xl.skinId;
        } else {
          return 0;
        }
      };
      f64.prototype.Vl = function () {
        if (this.vl) {
          return this.xl.eyesId;
        } else {
          return 0;
        }
      };
      f64.prototype.Wl = function () {
        if (this.vl) {
          return this.xl.mouthId;
        } else {
          return 0;
        }
      };
      f64.prototype.Xl = function () {
        if (this.vl) {
          return this.xl.glassesId;
        } else {
          return 0;
        }
      };
      f64.prototype.Yl = function () {
        if (this.vl) {
          return this.xl.hatId;
        } else {
          return 0;
        }
      };
      f64.prototype.Zl = function () {
        if (this.vl) {
          return this.xl.highScore;
        } else {
          return 0;
        }
      };
      f64.prototype.$l = function () {
        if (this.vl) {
          return this.xl.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f64.prototype._l = function () {
        if (this.vl) {
          return this.xl.kills;
        } else {
          return 0;
        }
      };
      f64.prototype.am = function () {
        if (this.vl) {
          return this.xl.headShots;
        } else {
          return 0;
        }
      };
      f64.prototype.bm = function () {
        if (this.vl) {
          return this.xl.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f64.prototype.cm = function () {
        if (this.vl) {
          return this.xl.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f64.prototype.dm = function () {
        if (this.vl) {
          return this.xl.regDate;
        } else {
          return {};
        }
      };
      f64.prototype.em = function (p517) {
        this.tl.push(p517);
        p517();
      };
      f64.prototype.fm = function (p518) {
        this.ul.push(p518);
        p518();
      };
      f64.prototype.rk = function (p519, p520) {
        var v453 = this.xl.propertyList.concat(vO7.pL || []);
        if (v453 == null) {
          return false;
        }
        ;
        for (vLSGuest2 = 0; vLSGuest2 < v453.length; vLSGuest2++) {
          var v454 = v453[vLSGuest2];
          if (v454.id == p519 && v454.type === p520) {
            return true;
          }
        }
        ;
        return false;
      };
      f64.prototype.nk = function () {
        return this.vl;
      };
      f64.prototype.gm = function () {
        return this.wl;
      };
      f64.prototype.hm = function (p521) {
        var vThis15 = this;
        var v455 = this.Kl();
        var v456 = this.Ql();
        var v457 = this.Rl();
        this.im(function () {
          if (p521 != null) {
            p521();
          }
        }, function (p522) {
          vThis15.xl = p522.user_data;
          vThis15.jm();
          var v458 = vThis15.Kl();
          var v459 = vThis15.Ql();
          var v460 = vThis15.Rl();
          if (v455 === v458) {
            if (v460 > 1 && v460 !== v457) {
              ooo.Xg.Yk.km(new vO2.lm(v460));
            }
            var v461 = v459 - v456;
            if (v461 >= 20) {
              ooo.Xg.Yk.km(new vO2.mm(v461));
            }
          }
          ;
          if (p521 != null) {
            p521();
          }
        });
      };
      f64.prototype.im = function (p523, p524) {
        var v462 = vO3.H.J + "/pub/wuid/" + this.wl + "/getUserData";
        vO4.Aa(v462, p523, function (p525) {
          if (p525.code !== 1200) {
            p523();
          } else {
            p524(p525);
          }
        });
      };
      f64.prototype.nm = function (p526, p527, p528, p529) {
        var v463 = vO3.H.J + "/pub/wuid/" + this.wl + "/buyProperty?id=" + p526 + "&type=" + p527;
        vO4.Aa(v463, function () {
          p528();
        }, function (p530) {
          if (p530.code !== 1200) {
            p528();
          } else {
            p529();
          }
        });
      };
      f64.prototype.om = function (p531, p532) {
        var v464 = vO3.H.J + "/pub/wuid/" + this.wl + "/deleteAccount";
        vO4.Aa(v464, p531, function (p533) {
          if (p533.code !== 1200) {
            p531();
          } else {
            p532();
          }
        });
      };
      f64.prototype.pm = function (p534) {
        var vThis16 = this;
        if (this.vl) {
          this.qm();
        }
        f64.yl.Dl(function () {
          p534();
        }, function (p535) {
          vThis16.rm(vLSFb, p535.Al, p534);
        });
      };
      f64.prototype.sm = function (p536) {
        var vThis17 = this;
        if (this.vl) {
          this.qm();
        }
        f64.Gl.Dl(function () {
          p536();
        }, function (p537) {
          vThis17.rm(vLSGg, p537.Al, p536);
        });
      };
      f64.prototype.rm = function (p538, p539, p540) {
        var vThis18 = this;
        var v465 = p538 + "_" + p539;
        var v466 = vO3.H.J + "/pub/wuid/" + v465 + "/login";
        vO4.Aa(v466, function () {
          vThis18.tm();
        }, function (p541) {
          if (p541.code !== 1200) {
            vThis18.tm();
          } else {
            vThis18.um(p538, p539, p541.user_data);
            if (p540 != null) {
              p540();
            }
          }
        });
      };
      f64.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (e19) {}
        ;
        this.xm();
      };
      f64.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      f64.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      f64.prototype.um = function (p542, p543, p544) {
        var vThis19 = this;
        vF42(p544, function (p545) {
          var v467 = vThis19.vl ? vThis19.xl.userId : p545;
          vThis19.vl = true;
          vThis19.wl = p542 + "_" + p543;
          vThis19.xl = p545;
          vO2.Cg.Ng(vO2.Cg.Hg, p542, 60);
          if (v467 !== vThis19.xl.userId) {
            vThis19.zm();
          } else {
            vThis19.jm();
          }
          ooo.Xp(true, true);
          vO7.loading = false;
        });
      };
      f64.prototype.xm = function () {
        var v468 = this.vl ? this.xl.userId : vLSGuest2;
        this.vl = false;
        this.wl = vLSGuest;
        this.xl = {};
        vO2.Cg.Ng(vO2.Cg.Hg, "", 60);
        if (v468 !== this.xl.userId) {
          this.zm();
        } else {
          this.jm();
        }
      };
      f64.prototype.Jl = function () {
        var v469 = vO2.Cg.Og(vO2.Cg.Hg);
        var vThis20 = this;
        if (vLSFb === v469) {
          var vLN15 = 1;
          (function f69() {
            if (!f64.yl.Bl() && vLN15++ < 5) {
              vO4.Y(f69, 1000);
              return;
            }
            ;
            f64.yl.El(function () {}, function (p546) {
              vThis20.rm(vLSFb, p546.Al);
            });
          })();
        } else if (vLSGg === v469) {
          var vLN16 = 1;
          (function f70() {
            if (!f64.Gl.Bl() && vLN16++ < 5) {
              vO4.Y(f70, 1000);
              return;
            }
            ;
            f64.Gl.El(function () {}, function (p547) {
              vThis20.rm(vLSGg, p547.Al);
            });
          })();
        }
      };
      f64.prototype.zm = function () {
        for (var vLN082 = 0; vLN082 < this.tl.length; vLN082++) {
          this.tl[vLN082]();
        }
        ;
        this.jm();
      };
      f64.prototype.jm = function () {
        for (var vLN083 = 0; vLN083 < this.ul.length; vLN083++) {
          this.ul[vLN083]();
        }
      };
      f64.prototype.vm = function () {
        f64.yl.Fl();
      };
      f64.prototype.wm = function () {
        f64.Gl.Fl();
      };
      return f64;
    }();
    vO2.Sf = function () {
      function f71(p548, p549, p550) {
        this.Of = p550;
        this.Rd = false;
        this.Yc = new vO5.k.l();
        this.Yc.visible = false;
        this.Am = Array(p548);
        for (var vLN084 = 0; vLN084 < this.Am.length; vLN084++) {
          var v470 = new vO2.Bm(new vO5.j(p549 * 3));
          v470.Cm(p549);
          this.Am[vLN084] = v470;
          this.Yc.addChild(v470.ag());
        }
        ;
        this.Pf = 1;
        this.Qf = 1;
        this.qg();
      }
      f71.prototype.ag = function () {
        return this.Yc;
      };
      f71.prototype.rg = function (p551) {
        this.Rd = p551;
        this.Yc.visible = p551;
      };
      f71.prototype.qg = function () {
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        var v471 = this.Qf / 30;
        for (var vLN085 = 0; vLN085 < this.Am.length; vLN085++) {
          this.Am[vLN085].Dm(v471);
        }
      };
      f71.prototype.Bg = function () {
        if (this.Rd) {
          for (var vLN086 = 0; vLN086 < this.Am.length; vLN086++) {
            this.Am[vLN086].Bg(this.Vf);
          }
        }
      };
      f71.prototype.Em = function () {
        return this.Pf;
      };
      f71.prototype.Fm = function () {
        return this.Qf;
      };
      f71.prototype.xg = function (p552, p553) {
        this.Am[p552].Gm(p553);
      };
      f71.prototype.yg = function (p554, p555) {
        this.Am[p554].Hm(p555);
      };
      f71.prototype.zg = function (p556, p557, p558) {
        var v472 = this.Am[p556];
        for (var v473 = v472.Im(), v474 = v472.Jm, vLN087 = 0; vLN087 < v473; vLN087++) {
          v474[vLN087 * 3] = p557;
          v474[vLN087 * 3 + 1] = p558;
          v474[vLN087 * 3 + 2] = 0;
        }
      };
      f71.prototype.Ag = function (p559, p560, p561) {
        var v475;
        var v476;
        var v477 = this.Am[p559];
        var v478 = v477.Im();
        var v479 = v477.Jm;
        var v480 = v477.Km();
        var v481 = v479[0];
        var v482 = v479[1];
        var v483 = p560 - v481;
        var v484 = p561 - v482;
        var v485 = vO4.la(v483, v484);
        if (v485 > 0) {
          v479[0] = p560;
          v479[1] = p561;
          v479[2] = vO4.ta(v484, v483);
          var v486 = v480 * 0.25 / (v480 * 0.25 + v485);
          var v487 = 1 - v486 * 2;
          for (var vLN17 = 1, vV478 = v478; vLN17 < vV478; vLN17++) {
            v475 = v479[vLN17 * 3];
            v479[vLN17 * 3] = v479[vLN17 * 3 - 3] * v487 + (v475 + v481) * v486;
            v481 = v475;
            v476 = v479[vLN17 * 3 + 1];
            v479[vLN17 * 3 + 1] = v479[vLN17 * 3 - 2] * v487 + (v476 + v482) * v486;
            v482 = v476;
            v479[vLN17 * 3 + 2] = vO4.ta(v479[vLN17 * 3 - 2] - v479[vLN17 * 3 + 1], v479[vLN17 * 3 - 3] - v479[vLN17 * 3]);
          }
        }
      };
      return f71;
    }();
    vO2.Lm = function () {
      function f72(p562) {
        var v488;
        var vThis21 = this;
        this.Of = p562;
        this.nc = p562.get()[0];
        this.Vf = ((v488 = {}).view = vThis21.nc, v488.transparent = true, new vO5.k.o(v488));
        this.Rd = false;
        this.Mm = new vO2.Bm(new vO5.j(v489 * 3));
        this.Pf = 1;
        this.Qf = 1;
        this.Nm = vO30.Om;
        this.Pm = vO30.Om;
        this.Qm = vO30.Om;
        this.Rm = vO30.Om;
        this.Sm = vO30.Om;
        this.qg();
        ooo.ud.Jc(function () {
          vThis21.Mm.Tm();
        });
      }
      var v489 = vO4.ha(100, vO2.Xc.fd);
      var vO30 = {
        Om: "0lt0",
        Um: "0lt1",
        Vm: "0lt2"
      };
      f72.prototype.rg = function (p563) {
        this.Rd = p563;
      };
      f72.prototype.qg = function () {
        var v490 = vO4.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = v490;
        this.nc.width = v490 * this.Pf;
        this.nc.height = v490 * this.Qf;
        var v491 = this.Qf / 4;
        this.Mm.Dm(v491);
        var v492 = vO4.fa(vO4._(this.Pf / v491) * 2 - 5, 1, v489);
        this.Mm.Cm(v492);
      };
      f72.prototype.ug = function () {
        if (this.Rd) {
          var v493 = vO4.Ca() / 200;
          var v494 = vO4.oa(v493);
          this.Mm.Wm(this.Xm(this.Nm, v494), this.Ym(this.Nm, v494));
          this.Mm.Zm(this.$m(this.Pm, v494), this.$m(this.Qm, v494), this.$m(this.Rm, v494), this.$m(this.Sm, v494));
          var v495 = this.Mm.Km();
          for (var v496 = this.Mm.Im(), v497 = this.Mm.Jm, v498 = this.Pf - (this.Pf - v495 * 0.5 * (v496 - 1)) * 0.5, v499 = this.Qf * 0.5, vLN088 = 0, vLN089 = 0, v500 = -1; v500 < v496; v500++) {
            var vV500 = v500;
            var v501 = vO4.pa(vV500 * 1 / 12 * vO3.T - v493) * (1 - vO4.ra(16, vV500 * -1 / 12));
            if (v500 >= 0) {
              v497[v500 * 3] = v498 - v495 * 0.5 * vV500;
              v497[v500 * 3 + 1] = v499 + v495 * 0.5 * v501;
              v497[v500 * 3 + 2] = vO4.ta(vLN089 - v501, vV500 - vLN088);
            }
            vLN088 = vV500;
            vLN089 = v501;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      f72.prototype.Gm = function (p564) {
        this.Mm.Gm(p564);
      };
      f72.prototype.an = function (p565) {
        this.Nm = p565 ? vO30.Vm : vO30.Um;
        this.Pm = vO30.Om;
        this.Qm = vO30.Om;
        this.Rm = vO30.Om;
        this.Sm = vO30.Om;
      };
      f72.prototype.bn = function (p566) {
        this.Nm = vO30.Om;
        this.Pm = p566 ? vO30.Vm : vO30.Um;
        this.Qm = vO30.Om;
        this.Rm = vO30.Om;
        this.Sm = vO30.Om;
      };
      f72.prototype.cn = function (p567) {
        this.Nm = vO30.Om;
        this.Pm = vO30.Om;
        this.Qm = p567 ? vO30.Vm : vO30.Um;
        this.Rm = vO30.Om;
        this.Sm = vO30.Om;
      };
      f72.prototype.dn = function (p568) {
        this.Nm = vO30.Om;
        this.Pm = vO30.Om;
        this.Qm = vO30.Om;
        this.Rm = p568 ? vO30.Vm : vO30.Um;
        this.Sm = vO30.Om;
      };
      f72.prototype.en = function (p569) {
        this.Nm = vO30.Om;
        this.Pm = vO30.Om;
        this.Qm = vO30.Om;
        this.Rm = vO30.Om;
        this.Sm = p569 ? vO30.Vm : vO30.Um;
      };
      f72.prototype.Xm = function (p570, p571) {
        switch (p570) {
          case vO30.Um:
            return 0.9 + p571 * 0.1;
          case vO30.Vm:
            return 0.4 + p571 * 0.3;
        }
        ;
        return 1;
      };
      f72.prototype.Ym = function (p572, p573) {
        switch (p572) {
          case vO30.Um:
            return 0.6 + p573 * 0.5;
          case vO30.Vm:
            return 0.3 + p573 * 0.3;
        }
        ;
        return 1;
      };
      f72.prototype.$m = function (p574, p575) {
        switch (p574) {
          case vO30.Um:
            return 0.9 + p575 * 0.1;
          case vO30.Vm:
            return 0.6 + p575 * 0.4;
        }
        ;
        return 1;
      };
      return f72;
    }();
    vO2.uk = function () {
      function f73(p576, p577, p578, p579, p580) {
        this.gn = p576;
        this.hn = p577;
        this.in = p578;
        this.jn = p579;
        this.kn = p580;
      }
      f73.tk = function (p581) {
        return new f73(p581.price, p581.guest, p581.nonbuyable, p581.nonbuyableCause, p581.description);
      };
      f73.vk = function (p582) {
        return new f73(p582.price, p582.guest, p582.nonbuyable, p582.nonbuyableCause, p582.description);
      };
      f73.prototype.pk = function () {
        return this.gn;
      };
      f73.prototype.sk = function () {
        return this.hn;
      };
      f73.prototype.qk = function () {
        return this.in;
      };
      f73.prototype.ln = function () {
        return this.jn;
      };
      f73.prototype.mn = function () {
        return this.kn;
      };
      return f73;
    }();
    vO2.Zf = function () {
      function f74(p583) {
        this.nn = {};
        this.nn[v505] = p583;
        var v502 = vO5.k.q.from(v509, v510, this.nn);
        this._f = new vO5.k.v(v508, v502);
        this._f.blendMode = vO5.k.w.B;
      }
      var v503 = "a1_" + vO4.xa();
      var v504 = "a2_" + vO4.xa();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v505 = "u3_" + vO4.xa();
      var v506 = "u4_" + vO4.xa();
      var v507 = "v1_" + vO4.xa();
      var v508 = new vO5.k.u().addAttribute(v503, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v504, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var v509 = "precision mediump float; attribute vec2 " + v503 + "; attribute vec2 " + v504 + "; uniform mat3 " + vLSTranslationMatrix + "; uniform mat3 " + vLSProjectionMatrix + "; uniform vec4 " + v506 + "; varying vec2 " + v507 + "; const float ROT_ANGLE_DEG = 7.5; const float ROT_COS = cos(ROT_ANGLE_DEG/180.0*3.14159265358979); const float ROT_SIN = sin(ROT_ANGLE_DEG/180.0*3.14159265358979); void main() { " + v507 + " = " + v504 + "; gl_Position = vec4((" + vLSProjectionMatrix + " * " + vLSTranslationMatrix + " * vec3(" + v503 + ", 1.0)).xy, 0.0, 1.0); vec4 ScreenParams = " + v506 + "; vec2 uv = " + v504 + "; vec2 mul = 0.5 * vec2(ScreenParams.x * (ScreenParams.w - 1.0) + 1.0, ScreenParams.y * (ScreenParams.z - 1.0) + 1.0); vec2 v2 = (uv - vec2(0.5, 0.5)) * mul * 1.25; v2 = vec2(v2.x * ROT_COS - v2.y * ROT_SIN, v2.x * ROT_SIN + v2.y * ROT_COS) * vec2(1.0, 2.0); " + v507 + " = v2; }";
      var v510 = "precision highp float; varying vec2 " + v507 + "; uniform sampler2D " + v505 + "; void main() { gl_FragColor = texture2D(" + v505 + ", " + v507 + "); }";
      f74.prototype.tg = function (p584, p585) {
        this._f.scale.x = p584;
        this._f.scale.y = p585;
        this.nn[v506] = [p584, p585, 1 / p584 + 1, 1 / p585 + 1];
      };
      return f74;
    }();
    vO2.th = function () {
      function f75() {
        this.nn = {};
        this.nn[v514] = [1, 0.5, 0.25, 0.5];
        this.nn[v515] = vO5.k.n.WHITE;
        this.nn[v516] = [0, 0];
        this.nn[v517] = [0, 0];
        var v511 = vO5.k.q.from(v520, v521, this.nn);
        this._f = new vO5.k.v(v519, v511);
      }
      var v512 = "a1_" + vO4.xa();
      var v513 = "a2_" + vO4.xa();
      var vLSTranslationMatrix2 = "translationMatrix";
      var vLSProjectionMatrix2 = "projectionMatrix";
      var v514 = "u3_" + vO4.xa();
      var v515 = "u4_" + vO4.xa();
      var v516 = "u5_" + vO4.xa();
      var v517 = "u6_" + vO4.xa();
      var v518 = "v1_" + vO4.xa();
      var v519 = new vO5.k.u().addAttribute(v512, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v513, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v520 = "precision mediump float; attribute vec2 " + v512 + "; attribute vec2 " + v513 + "; uniform mat3 " + vLSTranslationMatrix2 + "; uniform mat3 " + vLSProjectionMatrix2 + "; varying vec2 " + v518 + "; void main(){" + v518 + "=" + v513 + "; gl_Position=vec4((" + vLSProjectionMatrix2 + "*" + vLSTranslationMatrix2 + "*vec3(" + v512 + ", 1.0)).xy, 0.0, 1.0); }";
      var v521 = "precision highp float; varying vec2 " + v518 + "; uniform vec4 " + v514 + "; uniform sampler2D " + v515 + "; uniform vec2 " + v516 + "; uniform vec2 " + v517 + "; void main(){vec4 color=texture2D(" + v515 + ", " + v518 + "*" + v516 + "+" + v517 + "); vec4 colorMix=" + v514 + "; gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb, 0.0); }";
      f75.prototype.nd = function (p586, p587, p588, p589) {
        var v522 = this.nn[v514];
        v522[0] = p586;
        v522[1] = p587;
        v522[2] = p588;
        v522[3] = p589;
      };
      f75.prototype.Hh = function (p590) {
        this.nn[v515] = p590;
      };
      f75.prototype.Bg = function (p591, p592, p593, p594) {
        this._f.position.x = p591;
        this._f.position.y = p592;
        this._f.scale.x = p593;
        this._f.scale.y = p594;
        var v523 = this.nn[v516];
        v523[0] = p593 * 0.2520615384615385;
        v523[1] = p594 * 0.4357063736263738;
        var v524 = this.nn[v517];
        v524[0] = p591 * 0.2520615384615385;
        v524[1] = p592 * 0.4357063736263738;
      };
      return f75;
    }();
    vO2.bd = function () {
      function f76() {
        this.gd = new vO5.k.s();
        this.pn = 0;
        this.qn = 0;
      }
      f76.prototype.kd = function (p595) {
        this.gd.texture = p595.nb();
        this.gd.anchor.set(p595.hb, p595.ib);
        this.pn = p595.jb;
        this.qn = p595.kb;
      };
      f76.prototype.nd = function (p596) {
        this.gd.tint = parseInt(p596.substring(1), 16);
      };
      f76.prototype.Bd = function (p597) {
        this.gd.width = p597 * this.pn;
        this.gd.height = p597 * this.qn;
      };
      f76.prototype.Vd = function (p598) {
        this.gd.rotation = p598;
      };
      f76.prototype.Ud = function (p599, p600) {
        this.gd.position.set(p599, p600);
      };
      f76.prototype.Td = function (p601) {
        this.gd.visible = p601;
      };
      f76.prototype.Qd = function () {
        return this.gd.visible;
      };
      f76.prototype.Rj = function (p602) {
        this.gd.alpha = p602;
      };
      f76.prototype.zd = function () {
        return this.gd;
      };
      f76.prototype.G = function () {
        vO5.k.F.G(this.gd);
      };
      return f76;
    }();
    vO2.Ui = function () {
      function f77(p603) {
        this.Qh = p603;
        this.ki = new vO2.Ui.Ti();
        this.cj = false;
        this.bj = true;
        this.Fd = false;
        this.Id = 0;
        this.rn = 0;
        this.Lj = 1;
        this.Ld = 0;
        this.hi = 0;
        this.Nd = {};
        this.Kd = 0;
        this.sn = new vO5.j(vLN200 * 2);
        this.tn = new vO5.j(vLN200 * 2);
        this.Jd = new vO5.j(vLN200 * 2);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      var vLN200 = 200;
      f77.prototype.$i = function () {
        if (this.vn != null) {
          vO5.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          vO5.k.F.G(this.wn);
        }
        if (this.skinLineGraphics) {
          vO5.k.F.G(this.skinLineGraphics);
          this.skinLineGraphics = null;
        }
      };
      f77.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = "";
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      f77.prototype.Zi = function (p604) {
        this.ki = p604;
        this.yn(this.cj);
      };
      f77.prototype.Td = function (p605) {
        var v525 = this.cj;
        this.cj = p605;
        this.yn(v525);
      };
      f77.prototype.fj = function (p606) {
        this.hi = p606 * 50;
        var vP606 = p606;
        if (p606 > this.Qh.hh) {
          vP606 = vO4.sa((p606 - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var v526 = vO4.qa(vO4.ra(vP606 * 5, 0.707106781186548) * 4 + 25);
        var v527 = vO4.ha(vLN200, vO4.ia(3, (v526 - 5) * 5 + 1));
        var v528 = this.Kd;
        this.Id = (5 + v526 * 0.9) * 0.025;
        this.Kd = vO4._(v527);
        this.rn = v527 - this.Kd;
        if (v528 > 0 && v528 < this.Kd) {
          var v529 = this.sn[v528 * 2 - 2];
          var v530 = this.sn[v528 * 2 - 1];
          var v531 = this.tn[v528 * 2 - 2];
          var v532 = this.tn[v528 * 2 - 1];
          var v533 = this.Jd[v528 * 2 - 2];
          var v534 = this.Jd[v528 * 2 - 1];
          for (var vV528 = v528; vV528 < this.Kd; vV528++) {
            this.sn[vV528 * 2] = v529;
            this.sn[vV528 * 2 + 1] = v530;
            this.tn[vV528 * 2] = v531;
            this.tn[vV528 * 2 + 1] = v532;
            this.Jd[vV528 * 2] = v533;
            this.Jd[vV528 * 2 + 1] = v534;
          }
        }
      };
      f77.prototype.kj = function (p607, p608) {
        this.Kd = p608;
        for (var vLN090 = 0; vLN090 < this.Kd; vLN090++) {
          this.sn[vLN090 * 2] = this.tn[vLN090 * 2] = this.Jd[vLN090 * 2] = p607();
          this.sn[vLN090 * 2 + 1] = this.tn[vLN090 * 2 + 1] = this.Jd[vLN090 * 2 + 1] = p607();
        }
      };
      f77.prototype.hj = function (p609, p610, p611) {
        this.Fd = p611;
        for (var vLN091 = 0; vLN091 < this.Kd; vLN091++) {
          this.sn[vLN091 * 2] = this.tn[vLN091 * 2];
          this.sn[vLN091 * 2 + 1] = this.tn[vLN091 * 2 + 1];
        }
        ;
        var v535 = p609 - this.tn[0];
        var v536 = p610 - this.tn[1];
        this.zn(v535, v536, this.Kd, this.tn);
      };
      f77.prototype.zn = function (p612, p613, p614, p615) {
        var v537 = vO4.la(p612, p613);
        if (!(v537 <= 0)) {
          var v538;
          var v539 = p615[0];
          p615[0] += p612;
          var v540;
          var v541 = p615[1];
          p615[1] += p613;
          var v542 = this.Id / (this.Id + v537);
          var v543 = 1 - v542 * 2;
          for (var vLN18 = 1, v544 = p614 - 1; vLN18 < v544; vLN18++) {
            v538 = p615[vLN18 * 2];
            p615[vLN18 * 2] = p615[vLN18 * 2 - 2] * v543 + (v538 + v539) * v542;
            v539 = v538;
            v540 = p615[vLN18 * 2 + 1];
            p615[vLN18 * 2 + 1] = p615[vLN18 * 2 - 1] * v543 + (v540 + v541) * v542;
            v541 = v540;
          }
          ;
          v543 = 1 - (v542 = this.rn * this.Id / (this.rn * this.Id + v537)) * 2;
          p615[p614 * 2 - 2] = p615[p614 * 2 - 4] * v543 + (p615[p614 * 2 - 2] + v539) * v542;
          p615[p614 * 2 - 1] = p615[p614 * 2 - 3] * v543 + (p615[p614 * 2 - 1] + v541) * v542;
        }
      };
      f77.prototype.Oh = function () {
        return {
          _a: this.Jd[0],
          ab: this.Jd[1]
        };
      };
      f77.prototype.dj = function (p616, p617) {
        var vLN1000000 = 1000000;
        var vP616 = p616;
        var vP617 = p617;
        for (var vLN092 = 0; vLN092 < this.Kd; vLN092++) {
          var v545 = this.Jd[vLN092 * 2];
          var v546 = this.Jd[vLN092 * 2 + 1];
          var v547 = vO4.la(p616 - v545, p617 - v546);
          if (v547 < vLN1000000) {
            vLN1000000 = v547;
            vP616 = v545;
            vP617 = v546;
          }
        }
        ;
        return {
          _a: vP616,
          ab: vP617,
          ej: vLN1000000
        };
      };
      f77.prototype._i = function (p618) {
        this.un = p618;
      };
      f77.prototype.Pj = function (p619, p620) {
        this.Lj = vO4.ga(this.Lj, this.bj ? this.Fd ? 0.9 + vO4.pa(p619 / 400 * vO3.T) * 0.1 : 1 : 0, p620, 1 / 800);
        this.Ld = vO4.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, p620, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      f77.prototype.Qj = function (p621, p622, p623, p624) {
        if (this.cj && this.bj) {
          var v548 = vO4.ra(0.11112, p622 / 95);
          for (var vLN093 = 0; vLN093 < this.Kd; vLN093++) {
            var v549 = vO4.ka(this.sn[vLN093 * 2], this.tn[vLN093 * 2], p623);
            var v550 = vO4.ka(this.sn[vLN093 * 2 + 1], this.tn[vLN093 * 2 + 1], p623);
            this.Jd[vLN093 * 2] = vO4.ka(v549, this.Jd[vLN093 * 2], v548);
            this.Jd[vLN093 * 2 + 1] = vO4.ka(v550, this.Jd[vLN093 * 2 + 1], v548);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, p621, p622, p624);
          if (this.cj && this.bj) {
            this.drawSkinLines();
          }
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0];
          this.wn.Rh.y = this.Jd[1] - this.Id * 3;
        }
      };
      f77.prototype.yn = function (p625) {
        if (this.cj) {
          if (!p625) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            vO5.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            vO5.k.F.G(this.wn);
          }
        }
      };
      f77.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new vO2.Xc();
        } else {
          vO5.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), "#ffffff");
        if (this.wn == null) {
          this.wn = new vO2.Bn("");
          this.wn.style.fontFamily = "PTSans";
          this.wn.anchor.set(0.5);
        } else {
          vO5.k.F.G(this.wn);
        }
        if (vO7 && vO7.showSkinLines && this.skinLineGraphics == null) {
          this.skinLineGraphics = new vO5.k.p();
          this.skinLineGraphics.zIndex = 1000;
          this.skinLineGraphics.alpha = 1;
        }
        this.wn.style.fontSize = 14;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        this.wn.text = this.ki.Xa;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (vO7 && vO7.showSkinLines && this.skinLineGraphics) {
          console.log("إضافة خطوط السكن للمشهد");
          this.vn.Yc.addChild(this.skinLineGraphics);
        }
      };
      f77.prototype.drawSkinLines = function () {
        if (!vO7 || !vO7.showSkinLines) {
          if (this.skinLineGraphics) {
            this.skinLineGraphics.visible = false;
          }
          return;
        }
        const v551 = this.ki.Je === ooo.Mh.Qh.fh;
        if (!v551 && this.hi < 400000) {
          if (this.skinLineGraphics) {
            this.skinLineGraphics.visible = false;
          }
          return;
        }
        if (!this.skinLineGraphics) {
          this.skinLineGraphics = new vO5.k.p();
          if (ooo.Xg.Kf.Wg.vh) {
            ooo.Xg.Kf.Wg.vh.addChild(this.skinLineGraphics);
          }
          this.skinLineGraphics.zIndex = -100;
        }
        this.skinLineGraphics.clear();
        this.skinLineGraphics.visible = true;
        this.skinLineGraphics.lineStyle(0.1, 16777215, 1);
        for (let vLN19 = 1; vLN19 < this.Kd; vLN19++) {
          const v552 = this.Jd[vLN19 * 2 - 2];
          const v553 = this.Jd[vLN19 * 2 - 1];
          const v554 = this.Jd[vLN19 * 2];
          const v555 = this.Jd[vLN19 * 2 + 1];
          const v556 = v554 - v552;
          const v557 = v555 - v553;
          const v558 = Math.sqrt(v556 * v556 + v557 * v557);
          if (v558 > 0) {
            const v559 = -v557 / v558;
            const v560 = v556 / v558;
            const v561 = this.Id * 4;
            const v562 = v561 * 0.4;
            this.skinLineGraphics.moveTo((v552 + v554) / 2 + v559 * v562, (v553 + v555) / 2 + v560 * v562);
            this.skinLineGraphics.lineTo((v552 + v554) / 2 - v559 * v562, (v553 + v555) / 2 - v560 * v562);
          }
        }
      };
      f77.Ti = function f78() {
        this.Je = 0;
        this.mi = vO2.dh.jh;
        this.ni = 0;
        this.Vi = 0;
        this.Wi = 0;
        this.Xi = 0;
        this.Yi = 0;
        this.Xa = "";
      };
      return f77;
    }();
    vO2.Bn = vO4.ca(vO5.k.t, function (p626, p627, p628) {
      vO5.k.t.call(this, p626, p627, p628);
      this.Rh = {
        x: 0,
        y: 0
      };
    });
    vO2.Sb = function () {
      function f79(p629, p630, p631, p632, p633) {
        this.Tj = p629;
        this.Uj = p630;
        this.Vj = p631;
        this.Wj = p632;
        this.Xj = p633;
      }
      f79.prototype.Cn = function (p634) {
        return new f79(p634, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      f79.prototype.Dn = function (p635) {
        return new f79(this.Tj, p635, this.Vj, this.Wj, this.Xj);
      };
      f79.prototype.En = function (p636) {
        return new f79(this.Tj, this.Uj, p636, this.Wj, this.Xj);
      };
      f79.prototype.Fn = function (p637) {
        return new f79(this.Tj, this.Uj, this.Vj, p637, this.Xj);
      };
      f79.prototype.Gn = function (p638) {
        return new f79(this.Tj, this.Uj, this.Vj, this.Wj, p638);
      };
      return f79;
    }();
    vO2.Bm = function () {
      function f80(p639) {
        this.Hn = new vO2.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = p639;
        this.$c = 0;
        this.mj = 1;
        this.Kn = 1;
        this.Ln = 1;
        this.Mn = 1;
        this.Nn = 1;
        this.On = 1;
        this.Pn = 1;
        this.Hm("#ffffff");
      }
      var v563 = new vO2.Sb(0, 0, 0, 0, 0);
      f80.prototype.ag = function () {
        return this.Hn.Yc;
      };
      f80.prototype.Cm = function (p640) {
        this.$c = p640;
        if (this.Hn.$c !== p640) {
          for (var vP640 = p640; vP640 < this.Hn._c.length; vP640++) {
            this.Hn._c[vP640].Cd();
          }
          ;
          while (this.Hn.$c > p640) {
            this.Hn.$c -= 1;
            var v564 = this.Hn._c[this.Hn.$c];
            v564.md.G();
            v564.ld.G();
          }
          ;
          while (this.Hn.$c < p640) {
            var v565 = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 1;
            this.Hn.Yc.addChild(v565.ld.zd());
            this.Hn.Yc.addChild(v565.md.zd());
            v565.ld.Rj(this.Kn);
            v565.md.Rj(this.Ln);
          }
          ;
          for (var vLN094 = 0; vLN094 < this.Hn.Zc.od.length; vLN094++) {
            this.Hn.Zc.od[vLN094].Rj(this.Mn);
          }
          ;
          for (var vLN095 = 0; vLN095 < this.Hn.Zc.pd.length; vLN095++) {
            this.Hn.Zc.pd[vLN095].Rj(this.Nn);
          }
          ;
          for (var vLN096 = 0; vLN096 < this.Hn.Zc.rd.length; vLN096++) {
            this.Hn.Zc.rd[vLN096].Rj(this.On);
          }
          ;
          for (var vLN097 = 0; vLN097 < this.Hn.Zc.qd.length; vLN097++) {
            this.Hn.Zc.qd[vLN097].Rj(this.Pn);
          }
        }
      };
      f80.prototype.Im = function () {
        return this.$c;
      };
      f80.prototype.Gm = function (p641) {
        this.In = p641;
        this.Jn = "#ffffff";
        this.Tm();
      };
      f80.prototype.Hm = function (p642) {
        this.In = v563;
        this.Jn = p642;
        this.Tm();
      };
      f80.prototype.Tm = function () {
        this.Hn.hd(vO2.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      f80.prototype.Dm = function (p643) {
        this.mj = p643;
      };
      f80.prototype.Km = function () {
        return this.mj;
      };
      f80.prototype.Wm = function (p644, p645) {
        this.Kn = p644;
        this.Ln = p645;
        for (var vLN098 = 0; vLN098 < this.$c; vLN098++) {
          var v566 = this.Hn._c[vLN098];
          v566.ld.Rj(this.Kn);
          v566.md.Rj(this.Ln);
        }
      };
      f80.prototype.Zm = function (p646, p647, p648, p649) {
        this.Mn = p646;
        this.Nn = p647;
        this.On = p648;
        this.Pn = p649;
        for (var vLN099 = 0; vLN099 < this.Hn.Zc.od.length; vLN099++) {
          this.Hn.Zc.od[vLN099].Rj(this.Mn);
        }
        ;
        for (var vLN0100 = 0; vLN0100 < this.Hn.Zc.pd.length; vLN0100++) {
          this.Hn.Zc.pd[vLN0100].Rj(this.Nn);
        }
        ;
        for (var vLN0101 = 0; vLN0101 < this.Hn.Zc.rd.length; vLN0101++) {
          this.Hn.Zc.rd[vLN0101].Rj(this.On);
        }
        ;
        for (var vLN0102 = 0; vLN0102 < this.Hn.Zc.qd.length; vLN0102++) {
          this.Hn.Zc.qd[vLN0102].Rj(this.Pn);
        }
      };
      f80.prototype.Bg = function () {
        var v567 = this.mj * 2;
        var v568 = this.mj * 2 * 1.5;
        if (this.$c > 0) {
          var v569 = this.Jm[0];
          var v570 = this.Jm[1];
          var v571 = this.Jm[2];
          this.Hn._c[0].Ad(v569, v570, v567, v568, v571);
          this.Hn.Zc.Ad(v569, v570, v567, v571);
        }
        ;
        for (var vLN110 = 1; vLN110 < this.$c; vLN110++) {
          var v572 = this.Jm[vLN110 * 3];
          var v573 = this.Jm[vLN110 * 3 + 1];
          var v574 = this.Jm[vLN110 * 3 + 2];
          this.Hn._c[vLN110].Ad(v572, v573, v567, v568, v574);
        }
      };
      f80.prototype._m = function (p650) {
        p650.render(this.Hn.Yc);
      };
      return f80;
    }();
    vO2.Uf = function () {
      function f81(p651) {
        this.Wd = p651;
      }
      f81.Tf = $("#background-canvas");
      f81.Qn = $("#stretch-box");
      f81.Rn = $("#social-buttons");
      f81.Sn = $("#markup-wrap");
      f81.Tn = $("#game-view");
      f81.Un = $("#results-view");
      f81.Vn = $("#main-menu-view");
      f81.Wn = $("#popup-view");
      f81.Xn = $("#toaster-view");
      f81.Yn = $("#loading-view");
      f81.Zn = $("#restricted-view");
      f81.$n = $("#error-gateway-connection-view");
      f81._n = $("#error-game-connection-view");
      f81.prototype.Sa = function () {};
      f81.prototype.ml = function () {};
      f81.prototype.nl = function () {};
      f81.prototype.hl = function () {};
      f81.prototype.qg = function () {};
      f81.prototype.ug = function (p652, p653) {};
      return f81;
    }();
    v652 = $("#final-caption");
    v653 = $("#final-continue");
    v654 = $("#congrats-bg");
    v655 = $("#unl6wj4czdl84o9b");
    v656 = $("#final-share-fb");
    v657 = $("#final-message");
    v658 = $("#final-score");
    v659 = $("#final-place");
    v660 = $("#final-board");
    v661 = $("#game-canvas");
    (v662 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      var vThis22 = this;
      var v575 = v661.get()[0];
      v656.toggle(vO3.co.bo);
      v652.text(vO4.U("index.game.result.title"));
      v653.text(vO4.U("index.game.result.continue"));
      v653.click(function () {
        ooo.ij.if();
        vO3.co.do.Va();
        ooo.ij.Ye(vO2.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $("html").keydown(function (p654) {
        if (p654.keyCode !== 17 || !(vO7.ctrl = true)) {
          if (p654.keyCode !== 17) {
            vO7.ctrl = false;
          }
        }
        if (p654.keyCode === 32) {
          vThis22.eo = true;
        }
      }).keyup(function (p655) {
        vO7.ctrl = false;
        if (vO6.on && vO7.s) {
          if (p655.keyCode == 81 || p655.keyCode == 87) {
            if (p655.keyCode == 81) {
              v51.texture = v44;
              v52.texture = v45;
              v51.alpha = 1;
              v52.alpha = 0.25;
              vF24();
            }
            if (p655.keyCode == 87) {
              v52.texture = v46;
              v51.texture = v43;
              v51.alpha = 0.25;
              v52.alpha = 1;
              vF29();
            }
          } else {
            v52.texture = v45;
            v51.texture = v43;
            v52.alpha = 0.25;
            v51.alpha = 0.25;
            v41 = false;
            vLN55 = 55;
            vLN12 = 1;
            v42 = true;
            clearInterval(v39);
            v39 = null;
          }
          if (p655.keyCode == 90) {
            if (vO7.z == 1) {
              if (vO7.h) {
                vO7.z = 1.6;
              } else {
                vO7.z = 1.2;
              }
              v53.texture = v48;
              v53.alpha = 1;
            } else {
              vO7.z = 1;
              v53.texture = v47;
              v53.alpha = 0.25;
            }
          }
          if (vO7.hz && !vO7.mobile) {
            if (p655.keyCode == 188 && vO7.z >= 0.2) {
              vO7.z = vO7.z - 0.1;
            }
            if (p655.keyCode == 190 && vO7.z <= 25) {
              vO7.z = vO7.z + 0.1;
            }
          }
        }
        if (vO6.on && p655.keyCode == 82) {
          if (!window.lastRespawnTime) {
            window.lastRespawnTime = 0;
          }
          const v576 = new Date().getTime();
          const v577 = v576 - window.lastRespawnTime;
          if (v577 < 1000) {
            return;
          }
          window.lastRespawnTime = v576;
          try {
            if (ooo.Mh && ooo.Mh.Rq && typeof ooo.Mh.Rq.close === "function") {
              ooo.Mh.Rq.close();
            }
            if (ooo.Mh && typeof ooo.Mh.uj === "function") {
              ooo.Mh.uj();
            }
            setTimeout(function () {
              if (document.getElementById("mm-action-play")) {
                document.getElementById("mm-action-play").click();
              }
            }, 300);
          } catch (e20) {
            document.getElementById("mm-action-play").click();
          }
          if (vO7.pi && vO7.pn) {
            $("#port_id_s").val(vO7.pi);
            $("#port_name_s").val(vO7.pn);
            $("#port_id").val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
          }
          vO7.r1 = true;
        }
        if (vO6.on && p655.keyCode == 78) {
          document.getElementById("settings-show-names-switch").click();
          if (vO7.sn) {
            vO7.sn = false;
          } else {
            vO7.sn = true;
          }
        }
        if (p655.keyCode === 77) {
          if (vO7) {
            vO7.showSkinLines = !vO7.showSkinLines;
            console.log("خطوط السكن:", vO7.showSkinLines ? "مفعلة" : "معطلة");
            localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
          }
        }
        if (p655.keyCode === 32) {
          vThis22.eo = false;
        }
      });
      v575.addEventListener("touchmove", function (p656) {
        if (vO6.on && vO7.mobile && vO7.mo != 6 && vO7.s) {
          var vBtoa = btoa(vO7.c_1);
          if (vO7.mo1.x != -1 && vO7.mo1.y == -1 && btoa(vBtoa) == vO7.d_1 || vO7.mo2.x == -1 && vO7.mo2.y != -1 && btoa(vBtoa) == vO7.d_1) {
            var v578 = ooo.Xg.Kf.Wg.Ah;
            var v579 = v575.offsetHeight;
            var v580 = v575.offsetWidth;
            var v581 = v579 * 0.5;
            var v582 = v580 * 0.5;
            var vBtoa2 = btoa(vO7.c_2);
            for (let vLN0103 = 0; vLN0103 < p656.changedTouches.length; vLN0103++) {
              var v583 = p656.changedTouches[vLN0103].pageX;
              var v584 = p656.changedTouches[vLN0103].pageY;
              var v585 = p656.changedTouches[vLN0103].identifier;
              if (vO7.mo == 1 && btoa(vBtoa2) == vO7.d_2) {
                v579 *= 0.5;
                v580 *= 0.5;
              }
              if (vO7.mo == 2 && btoa(vBtoa2) == vO7.d_2) {
                v579 = v578.img_o_2.y + 110;
                v580 = v578.img_o_2.x + 110;
              }
              if (vO7.mo == 3 && btoa(vBtoa2) == vO7.d_2) {
                v579 = v578.img_o_3.y + 110;
                v580 = v578.img_o_3.x + 110;
              }
              if (vO7.mo == 4 && btoa(vBtoa2) == vO7.d_2 || vO7.mo == 5 && btoa(vBtoa2) == vO7.d_2) {
                v579 = v578.img_o_4.y + 110;
                v580 = v578.img_o_4.x + 110;
              }
              var vBtoa3 = btoa(vO7.c_5);
              var v586 = Math.atan2(v584 - v579, v583 - v580);
              var v587 = Math.cos(v586);
              var v588 = Math.sin(v586);
              var vBtoa4 = btoa(vO7.c_4);
              var v589 = vO7.mo1.x == v585;
              btoa(vO7.c_3);
              if (v589 && btoa(vBtoa4) == vO7.d_4) {
                if (v583 <= 0 || v584 <= 0) {
                  vO7.mo1.x = -1;
                  if (vO7.mo == 1) {
                    v578.img_p_1.alpha = 0.25;
                  }
                  if (vO7.mo == 2) {
                    v578.img_o_2.alpha = 0.25;
                    v578.img_i_2.alpha = 0.25;
                    v578.img_p_2.alpha = 0.25;
                  }
                  if (vO7.mo == 3) {
                    v578.img_o_3.alpha = 0.25;
                    v578.img_i_3.alpha = 0.25;
                    v578.img_p_3.alpha = 0.25;
                  }
                  if (vO7.mo == 4 || vO7.mo == 5) {
                    v578.img_p_2.alpha = 0.25;
                  }
                } else {
                  vThis22.fo = v586;
                  var vLN50 = 50;
                  if (vO7.mo == 1 || vO7.mo == 4 || vO7.mo == 5) {
                    vLN50 = 110;
                  }
                  var v607 = v580 - v583;
                  var v608 = v579 - v584;
                  var v609 = Math.sqrt(v607 * v607 + v608 * v608);
                  var v593 = v582 + v609 * v587 - 68;
                  var v594 = v581 + v609 * v588 - 68;
                  var v595 = v582 + vLN50 * v587 - 68;
                  var v596 = v581 + vLN50 * v588 - 68;
                  var v597 = v582 + v587 * 75 - 68;
                  var v598 = v581 + v588 * 75 - 68;
                  var v605 = v583 - 85;
                  var v606 = v584 - 85;
                  var v601 = v580 + vLN50 * v587 - 85;
                  var v602 = v579 + vLN50 * v588 - 85;
                  var v603 = v580 + v587 * 3 - 110;
                  var v604 = v579 + v588 * 3 - 110;
                  if (v609 < vLN50) {
                    if (vO7.mo2.x == -1 && vO7.mo2.y != -1) {
                      v578.img_pf_1.x = v593;
                      v578.img_pf_1.y = v594;
                    } else {
                      if (vO7.mo == 1) {
                        v578.img_p_1.x = v593;
                        v578.img_p_1.y = v594;
                      }
                      if (vO7.mo == 2 || vO7.mo == 4 || vO7.mo == 5) {
                        v578.img_p_2.x = v593;
                        v578.img_p_2.y = v594;
                      }
                      if (vO7.mo == 3) {
                        v578.img_p_3.x = v593;
                        v578.img_p_3.y = v594;
                      }
                    }
                    if (vO7.mo == 2) {
                      v578.img_i_2.y = v606;
                      v578.img_i_2.x = v605;
                    }
                    if (vO7.mo == 3) {
                      v578.img_i_3.y = v606;
                      v578.img_i_3.x = v605;
                    }
                  } else {
                    if (vO7.mo2.x == -1 && vO7.mo2.y != -1) {
                      v578.img_pf_1.x = v595;
                      v578.img_pf_1.y = v596;
                      if (vO7.mo == 2 || vO7.mo == 3) {
                        if (v609 < 75) {
                          v578.img_pf_1.x = v593;
                          v578.img_pf_1.y = v594;
                        } else {
                          v578.img_pf_1.x = v597;
                          v578.img_pf_1.y = v598;
                        }
                      }
                    } else {
                      if (vO7.mo == 1) {
                        v578.img_p_1.x = v595;
                        v578.img_p_1.y = v596;
                      }
                      if (vO7.mo == 2 || vO7.mo == 4 || vO7.mo == 5) {
                        v578.img_p_2.x = v595;
                        v578.img_p_2.y = v596;
                        if (vO7.mo == 2) {
                          if (v609 < 75) {
                            v578.img_p_2.x = v593;
                            v578.img_p_2.y = v594;
                          } else {
                            v578.img_p_2.x = v597;
                            v578.img_p_2.y = v598;
                          }
                        }
                      }
                      if (vO7.mo == 3) {
                        if (v609 < 75) {
                          v578.img_p_3.x = v593;
                          v578.img_p_3.y = v594;
                        } else {
                          v578.img_p_3.x = v597;
                          v578.img_p_3.y = v598;
                        }
                      }
                    }
                    if (vO7.mo == 2) {
                      v578.img_i_2.y = v602;
                      v578.img_i_2.x = v601;
                    }
                    if (vO7.mo == 3) {
                      v578.img_i_3.y = v602;
                      v578.img_i_3.x = v601;
                      v578.img_o_3.y = v604;
                      v578.img_o_3.x = v603;
                    }
                  }
                }
              } else if ((v589 = vO7.mo2.y == v585) && btoa(vBtoa3) == vO7.d_5) {
                if (v583 <= 0 || v584 <= 0) {
                  vO7.mo2.y = -1;
                  v578.img_f.visible = false;
                  v578.img_pf_1.visible = false;
                  if (vO7.mo == 1) {
                    v578.img_p_1.visible = true;
                  }
                  if (vO7.mo == 2 || vO7.mo == 4 || vO7.mo == 5) {
                    v578.img_p_2.visible = true;
                  }
                  if (vO7.mo == 3) {
                    v578.img_p_3.visible = true;
                  }
                  if (vO7.mo == 4 || vO7.mo == 5) {
                    v578.img_f.visible = true;
                  }
                  vThis22.eo = false;
                } else if (vO7.mo == 3) {
                  v587 = Math.cos(v586 = Math.atan2(v584 - (v579 = v578.img_f.y + 100), v583 - (v580 = v578.img_f.x + 100)));
                  v588 = Math.sin(v586);
                  var v605 = v580 + v587 * 3 - 100;
                  var v606 = v579 + v588 * 3 - 100;
                  var v607 = v580 - v583;
                  var v608 = v579 - v584;
                  var v609 = Math.sqrt(v607 * v607 + v608 * v608);
                  if (v609 >= 40) {
                    v578.img_f.y = v605;
                    v578.img_f.x = v606;
                  }
                }
              }
            }
          }
        } else if (!vF3() || !vO7.joystick.checked) {
          if (p656 = p656 || window.event) {
            if ((p656 = p656.touches[0]).clientX !== undefined) {
              vThis22.fo = Math.atan2(p656.clientY - v575.offsetHeight * 0.5, p656.clientX - v575.offsetWidth * 0.5);
            } else {
              vThis22.fo = Math.atan2(p656.pageY - v575.offsetHeight * 0.5, p656.pageX - v575.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      v575.addEventListener("touchstart", function (p657) {
        if (vO6.on && vO7.mobile && vO7.mo != 6 && vO7.s) {
          var v610 = ooo.Xg.Kf.Wg.Ah;
          var vBtoa5 = btoa(vO7.c_4);
          var v611 = v575.offsetHeight;
          var vBtoa6 = btoa(vO7.c_3);
          var v612 = v575.offsetWidth;
          var vBtoa7 = btoa(vO7.c_5);
          var v613 = (p657 = p657 || window.event).touches.item(0).pageX;
          var vBtoa8 = btoa(vO7.c_2);
          var v614 = p657.touches.item(0).pageY;
          var v615 = p657.touches.length;
          var vBtoa9 = btoa(vO7.c_1);
          var v616 = p657.touches.item(0).identifier;
          for (let vLN0104 = 0; vLN0104 < v615; vLN0104++) {
            if (vO7.mo2.x == -1 && vO7.mo2.y != -1) {
              if (p657.touches.item(vLN0104).identifier != vO7.mo2.y) {
                v613 = p657.touches.item(vLN0104).pageX;
                v614 = p657.touches.item(vLN0104).pageY;
                v616 = p657.touches.item(vLN0104).identifier;
              }
            } else {
              v613 = p657.touches.item(vLN0104).pageX;
              v614 = p657.touches.item(vLN0104).pageY;
              v616 = p657.touches.item(vLN0104).identifier;
            }
          }
          ;
          var vLN0105 = 0;
          if (vO7.mo == 4 && btoa(vBtoa7) == vO7.d_5 || vO7.mo == 5 && btoa(vBtoa5) == vO7.d_4) {
            vLN0105 = Math.sqrt((v613 - v610.img_f.x - 100) * (v613 - v610.img_f.x - 100) + (v614 - v610.img_f.y - 100) * (v614 - v610.img_f.y - 100));
          }
          if (v615 == 1 && (vO7.mo == 4 && vLN0105 > 40 || vO7.mo != 4) && (vO7.mo == 5 && vLN0105 > 40 || vO7.mo != 5)) {
            vO7.mo2.y = -1;
            v610.img_f.visible = false;
            v610.img_pf_1.visible = false;
            if (vO7.mo == 1) {
              v610.img_p_1.alpha = 0.25;
              v610.img_p_1.visible = true;
            }
            if (vO7.mo == 2) {
              v610.img_o_2.alpha = 0.25;
              v610.img_i_2.alpha = 0.25;
              v610.img_p_2.alpha = 0.25;
              v610.img_p_2.visible = true;
            }
            if (vO7.mo == 3) {
              v610.img_o_3.alpha = 0.25;
              v610.img_i_3.alpha = 0.25;
              v610.img_p_3.alpha = 0.25;
              v610.img_p_3.visible = true;
            }
            if (vO7.mo == 4 || vO7.mo == 5) {
              v610.img_p_2.alpha = 0.25;
              v610.img_p_2.visible = true;
              v610.img_f.visible = true;
            }
            vThis22.eo = false;
          }
          if (vO7.mo1.x == -1 && vO7.mo1.y == -1 && btoa(vBtoa5) == vO7.d_4 && (vO7.mo == 4 && vLN0105 > 40 || vO7.mo != 4 && btoa(vBtoa6) == vO7.d_3) && (vO7.mo == 5 && vLN0105 > 40 || vO7.mo != 5 && btoa(vBtoa8) == vO7.d_2)) {
            vO7.mo1.x = v616;
            if (vO7.mo1.x == vO7.mo2.y && vO7.mo1.y == vO7.mo2.x) {
              v613 = p657.touches.item(1).pageX;
              v614 = p657.touches.item(1).pageY;
            }
            var v617 = v612 * 0.5 - 68;
            var v618 = v611 * 0.5 - 68;
            var v619 = v613 - 110;
            var v620 = v614 - 110;
            var v621 = v613 - 85;
            var v622 = v614 - 85;
            if (vO7.mo == 1 && vO7.mo2.x == -1 && vO7.mo2.y == -1) {
              v610.img_p_1.alpha = 1;
              v610.img_p_1.x = v617;
              v610.img_p_1.y = v618;
              v610.img_p_1.visible = true;
            }
            if (vO7.mo == 2) {
              v610.img_o_2.alpha = 1;
              v610.img_o_2.x = v619;
              v610.img_o_2.y = v620;
              v610.img_i_2.alpha = 1;
              v610.img_i_2.x = v621;
              v610.img_i_2.y = v622;
              if (vO7.mo2.x == -1 && vO7.mo2.y == -1) {
                v610.img_p_2.alpha = 1;
                v610.img_p_2.x = v617;
                v610.img_p_2.y = v618;
                v610.img_p_2.visible = true;
              }
            }
            if (vO7.mo == 3 && btoa(vBtoa7) == vO7.d_5) {
              v610.img_o_3.alpha = 1;
              v610.img_o_3.x = v619;
              v610.img_o_3.y = v620;
              v610.img_i_3.alpha = 1;
              v610.img_i_3.x = v621;
              v610.img_i_3.y = v622;
              if (vO7.mo2.x == -1 && vO7.mo2.y == -1) {
                v610.img_p_3.alpha = 1;
                v610.img_p_3.x = v617;
                v610.img_p_3.y = v618;
                v610.img_p_3.visible = true;
              }
            }
            if (vO7.mo == 4 && btoa(vBtoa8) == vO7.d_2 && vO7.mo2.x == -1 && vO7.mo2.y == -1) {
              v610.img_p_2.alpha = 1;
              v610.img_p_2.x = v617;
              v610.img_p_2.y = v618;
              v610.img_p_2.visible = true;
            }
            if (vO7.mo == 5 && btoa(vBtoa6) == vO7.d_3 && vO7.mo2.x == -1 && vO7.mo2.y == -1) {
              v610.img_p_2.alpha = 1;
              v610.img_p_2.x = v617;
              v610.img_p_2.y = v618;
              v610.img_p_2.visible = true;
            }
          } else if (v615 >= 2 && vO7.mo2.x == -1 && vO7.mo2.y == -1 && btoa(vBtoa6) == vO7.d_3 || v615 == 1 && vO7.mo == 4 && vLN0105 <= 40 && btoa(vBtoa9) == vO7.d_1 || v615 == 1 && vO7.mo == 5 && vLN0105 <= 40 && btoa(vBtoa8) == vO7.d_2) {
            vO7.mo2.y = v616;
            v610.img_f.visible = true;
            v610.img_pf_1.visible = true;
            if (vO7.mo == 1) {
              v610.img_p_1.visible = false;
              v610.img_pf_1.x = v610.img_p_1.x;
              v610.img_pf_1.y = v610.img_p_1.y;
            }
            if (vO7.mo == 2 || vO7.mo == 4 || vO7.mo == 5) {
              v610.img_p_2.visible = false;
              v610.img_pf_1.x = v610.img_p_2.x;
              v610.img_pf_1.y = v610.img_p_2.y;
            }
            if (vO7.mo == 3 && btoa(vBtoa6) == vO7.d_3) {
              v610.img_p_3.visible = false;
              v610.img_pf_1.x = v610.img_p_3.x;
              v610.img_pf_1.y = v610.img_p_3.y;
            }
            if (vO7.mo != 4 && vO7.mo != 5) {
              v610.img_f.x = v613 - 100;
              v610.img_f.y = v614 - 100;
            }
            vThis22.eo = true;
          }
          ;
          p657.preventDefault();
        } else {
          if (p657 = p657 || window.event) {
            vThis22.eo = p657.touches.length >= 2;
          }
          p657.preventDefault();
        }
      }, true);
      v575.addEventListener("touchend", function (p658) {
        if (vO6.on && vO7.mobile && vO7.mo != 6 && vO7.s) {
          var v623 = ooo.Xg.Kf.Wg.Ah;
          var vBtoa10 = btoa(vO7.c_1);
          if (p658 = p658 || window.event) {
            if ((p658 = p658.changedTouches[0]).clientX !== undefined) {
              vF35(p658.clientX, p658.clientY);
            } else {
              vF35(p658.pageX, p658.pageY);
            }
          }
          var vBtoa11 = btoa(vO7.c_2);
          var v624 = p658.identifier;
          if (v624 == vO7.mo1.x && vO7.mo1.y == -1 && btoa(vBtoa11) == vO7.d_2) {
            vO7.mo1.x = -1;
            if (vO7.mo == 1) {
              v623.img_p_1.alpha = 0.25;
            }
            if (vO7.mo == 2) {
              v623.img_o_2.alpha = 0.25;
              v623.img_i_2.alpha = 0.25;
              v623.img_p_2.alpha = 0.25;
            }
            if (vO7.mo == 3 && btoa(vBtoa10) == vO7.d_1) {
              v623.img_o_3.alpha = 0.25;
              v623.img_i_3.alpha = 0.25;
              v623.img_p_3.alpha = 0.25;
            }
            if (vO7.mo == 4) {
              v623.img_p_2.alpha = 0.25;
            }
            if (vO7.mo == 5) {
              v623.img_p_2.alpha = 0.25;
            }
          }
          var vBtoa12 = btoa(vO7.c_3);
          if (vO7.mo2.x == -1 && v624 == vO7.mo2.y && btoa(vBtoa12) == vO7.d_3) {
            vO7.mo2.y = -1;
            v623.img_f.visible = false;
            v623.img_pf_1.visible = false;
            if (vO7.mo == 1) {
              v623.img_p_1.visible = true;
            }
            if (vO7.mo == 2 || vO7.mo == 4 && btoa(vBtoa11) == vO7.d_2 || vO7.mo == 5 && btoa(vBtoa12) == vO7.d_3) {
              v623.img_p_2.visible = true;
            }
            if (vO7.mo == 3) {
              v623.img_p_3.visible = true;
            }
            if (vO7.mo == 4 || vO7.mo == 5) {
              v623.img_f.visible = true;
            }
            vThis22.eo = false;
          }
        } else {
          if (p658 = p658 || window.event) {
            vThis22.eo = p658.touches.length >= 2;
          }
          if (vO7.mobile && vO7.s && (p658 = p658 || window.event)) {
            if ((p658 = p658.changedTouches[0]).clientX !== undefined) {
              vF35(p658.clientX, p658.clientY);
            } else {
              vF35(p658.pageX, p658.pageY);
            }
          }
        }
      }, true);
      v575.addEventListener("mousemove", function (p659) {
        if (p659 = p659 || vO2.c.event && f3(p659.clientX) != "undefined") {
          vThis22.fo = vO4.ta(p659.clientY - v575.offsetHeight * 0.5, p659.clientX - v575.offsetWidth * 0.5);
        }
      }, true);
      v575.addEventListener("mousedown", function (p660) {
        vThis22.eo = true;
      }, true);
      v575.addEventListener("mouseup", function (p661) {
        vThis22.eo = false;
      }, true);
      this.Wg = new vO2.lh(v661);
      this.go = v663.ho;
      this.fo = 0;
      this.eo = false;
      vO6.eie = vThis22;
    })).prototype.Sa = function () {};
    v662.prototype.ml = function () {
      vO2.Nf.rg(false);
      vO5.f.h(vO2.Uf.Tf, 50);
      vO5.f.h(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.g(vO2.Uf.Tn, 500);
      if (this.go === v663.ho) {
        vO5.f.h(vO2.Uf.Un, 1);
      } else {
        vO5.f.g(vO2.Uf.Un, 500);
      }
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v662.prototype.ho = function () {
      this.go = v663.ho;
      return this;
    };
    v662.prototype.io = function () {
      vO5.f.h(v654, 1);
      vO4.Y(function () {
        vO5.f.g(v654, 500);
      }, 3000);
      vO5.f.h(v655, 1);
      vO4.Y(function () {
        vO5.f.g(v655, 500);
      }, 500);
      this.go = v663.io;
      return this;
    };
    v662.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === v663.io) {
        ooo.ij.mf();
      }
    };
    v662.prototype.qg = function () {
      this.Wg.qg();
    };
    v662.prototype.ug = function (p662, p663) {
      this.Wg.ug(p662, p663);
    };
    v662.prototype.jo = function (p664, p665, p666) {
      var v625;
      var v626;
      var v627;
      if (p665 >= 1 && p665 <= 10) {
        v625 = vO4.U("index.game.result.place.i" + p665);
        v626 = vO4.U("index.game.result.placeInBoard");
        v627 = vO4.U("index.game.social.shareResult.messGood").replace("{0}", p666).replace("{1}", p664).replace("{2}", v625);
      } else {
        v625 = "";
        v626 = vO4.U("index.game.result.tryHit");
        v627 = vO4.U("index.game.social.shareResult.messNorm").replace("{0}", p666).replace("{1}", p664);
      }
      v657.html(vO4.U("index.game.result.your"));
      v658.html(p664);
      v659.html(v625);
      v660.html(v626);
      if (vO3.co.bo) {
        var v628;
        var v629;
        var v630;
        var v631;
        var v632;
        var v633;
        var v634;
        var v635 = vO4.U("index.game.result.share");
        vO4.U("index.game.social.shareResult.caption");
        v656.empty().append((v628 = v635, v629 = "https://wormate.io", v630 = "wormate.io", v631 = v627, v632 = v627, v633 = "https://wormate.io/images/og-share-img-new.jpg", (v634 = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml: space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + v628 + "</span></div>")).click(function () {
          if ((typeof FB == "undefined" ? "undefined" : f3(FB)) !== "undefined" && f3(FB.ui) != "undefined") {
            FB.ui({
              method: "feed",
              display: "popup",
              link: v629,
              name: v630,
              caption: v631,
              description: v632,
              picture: v633
            }, function () {});
          }
        }), v634));
      }
    };
    v662.prototype.ko = function () {
      return this.fo;
    };
    v662.prototype.lo = function () {
      return this.eo;
    };
    v663 = {
      ho: 0,
      io: 1
    };
    vO2.Bk = v662;
    v664 = $("#loading-progress-cont");
    v665 = $("#loading-progress-bar");
    v666 = $("#loading-progress-text");
    (v667 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      this.mo = -1;
      this.no = "";
    })).prototype.Sa = function () {};
    v667.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.g(vO2.Uf.Yn, 500);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v667.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    v667.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    v667.prototype.oo = function () {
      this.po("", 0);
      vO5.f.g(v664, 100);
    };
    v667.prototype.qo = function () {
      vO5.f.h(v664, 100);
    };
    v667.prototype.po = function (p667, p668) {
      if (this.no !== p667) {
        this.no = p667;
      }
      var v636 = vO4.fa(vO4._(p668 * 100), 0, 100);
      if (this.mo !== v636) {
        v665.css("width", v636 + "%");
        v666.html(v636 + " %");
      }
    };
    vO2.$k = v667;
    v668 = $("#mm-line-top");
    $("#mm-line-center");
    $("#mm-line-bottom");
    v669 = $("#mm-bottom-buttons");
    v670 = $("#mm-menu-cont");
    v671 = $("#mm-loading");
    v672 = $("#mm-loading-progress-bar");
    v673 = $("#mm-loading-progress-text");
    $("#mm-event-text");
    v674 = $("#mm-skin-canv");
    v675 = $("#mm-skin-prev");
    v676 = $("#mm-skin-next");
    v677 = $("#mm-skin-over");
    v678 = $("#mm-skin-over-button-list");
    v679 = $("#mm-params-nickname");
    v680 = $("#mm-params-game-mode");
    v681 = $("#mm-action-play");
    v682 = $("#mm-action-guest");
    v683 = $("#mm-action-login");
    v684 = $("#mm-player-info");
    v685 = $("#mm-store");
    v686 = $("#mm-leaders");
    v687 = $("#mm-settings");
    v688 = $("#mm-coins-box");
    v689 = $("#mm-player-avatar");
    v690 = $("#mm-player-username");
    v691 = $("#mm-coins-val");
    v692 = $("#mm-player-exp-bar");
    v693 = $("#mm-player-exp-val");
    v694 = $("#mm-player-level");
    (v695 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.kl);
      this.mo = -1;
      this.no = "";
      this.ro = new vO2.Lm(v674);
      v680.click(function () {
        ooo.ij.if();
      });
      v674.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      v675.click(function () {
        ooo.ij.if();
        ooo.so.kk();
      });
      v676.click(function () {
        ooo.ij.if();
        ooo.so.jk();
      });
      v679.keypress(function (p669) {
        vO7.r1 = false;
        if (p669.keyCode === 13) {
          ooo.to();
        }
      });
      v681.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      v682.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      v683.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      v687.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      v684.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      v686.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      v685.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      v688.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var v637 = vO2.Cg.Og(vO2.Cg.Ig);
      if (v637 !== "ARENA" && v637 !== "TEAM2") {
        v637 = "ARENA";
      }
      v680.val(v637);
    })).prototype.Sa = function () {
      var vThis23 = this;
      function f82(p670, p671) {
        if (p670.pm) {
          p671.skinId = p670.pm.Tj;
          p671.eyesId = p670.pm.Uj;
          p671.mouthId = p670.pm.Vj;
          p671.hatId = p670.pm.Wj;
          p671.glassesId = p670.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          f82(vO7, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), vO2._j.$j);
          ooo.so.lk(ooo.ok.Vl(), vO2._j.ak);
          ooo.so.lk(ooo.ok.Wl(), vO2._j.bk);
          ooo.so.lk(ooo.ok.Xl(), vO2._j.dk);
          ooo.so.lk(ooo.ok.Yl(), vO2._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), vO2._j.$j);
          ooo.so.lk(0, vO2._j.ak);
          ooo.so.lk(0, vO2._j.bk);
          ooo.so.lk(0, vO2._j.dk);
          ooo.so.lk(0, vO2._j.ck);
        }
      });
      ooo.ok.fm(function () {
        v681.toggle(ooo.ok.nk());
        v683.toggle(!ooo.ok.nk());
        v682.toggle(!ooo.ok.nk());
        v686.toggle(ooo.ok.nk());
        v685.toggle(ooo.ok.nk());
        v688.toggle(ooo.ok.nk());
        v684.toggle(true);
        v687.toggle(true);
        if (ooo.ok.nk()) {
          v677.hide();
          v690.html(ooo.ok.Ll());
          v689.attr("src", ooo.ok.Nl());
          v691.html(ooo.ok.Ql());
          v692.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
          v693.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
          v694.html(ooo.ok.Rl());
          v679.val(ooo.ok.Ml());
        } else {
          v677.toggle(vO3.co.bo && !ooo.xo());
          v690.html(v690.data("guest"));
          v689.attr("src", vO3.H.M);
          v691.html("10");
          v692.width("0");
          v693.html("");
          v694.html(1);
          v679.val(vO2.Cg.Og(vO2.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        vThis23.ro.Gm(ooo.so.ek());
      });
    };
    v695.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.g(vO2.Uf.Rn, 500);
      vO5.f.g(vO2.Uf.Sn, 500);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.g(vO2.Uf.Vn, 500);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v695.prototype.yo = function () {
      vO5.f.g(v668, 500);
      vO5.f.g(v669, 500);
      vO5.f.g(v670, 500);
      vO5.f.h(v671, 100);
    };
    v695.prototype.zo = function () {
      vO5.f.h(v668, 100);
      vO5.f.h(v669, 100);
      vO5.f.h(v670, 100);
      vO5.f.g(v671, 500);
    };
    v695.prototype.po = function (p672, p673) {
      if (this.no !== p672) {
        this.no = p672;
      }
      var v638 = vO4.fa(vO4._(p673 * 100), 0, 100);
      if (this.mo !== v638) {
        v672.css("width", v638 + "%");
        v673.html(v638 + " %");
      }
    };
    v695.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    v695.prototype.hl = function () {
      this.ro.rg(false);
    };
    v695.prototype.qg = function () {
      this.ro.qg();
    };
    v695.prototype.ug = function (p674, p675) {
      this.ro.ug();
    };
    v695.prototype.Ml = function () {
      return v679.val();
    };
    v695.prototype.Ao = function () {
      return v680.val();
    };
    v695.prototype.uo = function () {
      var v639 = $("#mm-advice-cont").children();
      var vLN0106 = 0;
      vO4.X(function () {
        v639.eq(vLN0106).fadeOut(500, function () {
          if (++vLN0106 >= v639.length) {
            vLN0106 = 0;
          }
          v639.eq(vLN0106).fadeIn(500).css("display", "inline-block");
        });
      }, 3000);
    };
    v695.prototype.vo = function () {
      if (vO3.co.bo && !ooo.xo()) {
        v677.show();
        var v640 = vO4.U("index.game.main.menu.unlockSkins.share");
        var vEncodeURIComponent = encodeURIComponent(vO4.U("index.game.main.menu.unlockSkins.comeAndPlay"));
        v678.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent + "\"><img src=\"data: image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + v640 + "</span></a>").click(function f83() {
          ooo.Bo(true);
          vO4.Y(function () {
            v677.hide();
          }, 3000);
        }));
      }
    };
    vO2.Ck = v695;
    (v696 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
    })).prototype.Sa = function () {};
    v696.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.h(vO2.Uf.Tf, 50);
      vO5.f.h(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    vO2.el = v696;
    (v697 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
    })).prototype.Sa = function () {};
    v697.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.g(vO2.Uf.Zn, 500);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v697.prototype.nl = function () {};
    vO2.Xk = v697;
    v698 = $("#toaster-stack");
    (v699 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    v699.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.g(vO2.Uf.Sn, 500);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.g(vO2.Uf.Xn, 500);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v699.prototype.nl = function () {
      this.Eo();
    };
    v699.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0;
    };
    v699.prototype.Fo = function (p676) {
      this.Co.unshift(p676);
      vO4.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    v699.prototype.km = function (p677) {
      this.Co.push(p677);
      vO4.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    v699.prototype.Eo = function () {
      var vThis24 = this;
      if (this.Do == null) {
        if (this.Co.length === 0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var v641 = this.Co.shift();
        this.Do = v641;
        var v642 = v641.ag();
        vO5.f.g(v642, 300);
        v698.append(v642);
        v641.Go = function () {
          v642.fadeOut(300);
          vO4.Y(function () {
            v642.remove();
          }, 300);
          if (vThis24.Do === v641) {
            vThis24.Do = null;
          }
          vThis24.Eo();
        };
        v641.nl();
      }
    };
    vO2.Zk = v699;
    vO2.ll = {
      ao: 0,
      kl: 1
    };
    v700 = $("#popup-menu-label");
    v701 = $("#popup-menu-coins-box");
    v702 = $("#popup-menu-coins-val");
    $("#popup-menu-back").click(function () {
      ooo.ij.if();
      ooo.Xg.jl();
    });
    v701.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (v703 = vO4.ca(vO2.Uf, function (p678, p679) {
      vO2.Uf.call(this, vO2.ll.kl);
      this.Xa = p678;
      this.Io = p679;
      this.Jo = [];
    })).prototype.Sa = function () {
      v703.parent.prototype.Sa.call(this);
      if (!v703.Ko) {
        v703.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            v702.html(ooo.ok.Ql());
          } else {
            v702.html("0");
          }
        });
      }
      vO5.f.h(vO2.Ho.Lo, 100);
    };
    v703.Mo = $("#coins-view");
    v703.No = $("#leaders-view");
    v703.Oo = $("#profile-view");
    v703.Po = $("#login-view");
    v703.Qo = $("#settings-view");
    v703.Ro = $("#skins-view");
    v703.So = $("#store-view");
    v703.To = $("#wear-view");
    v703.Uo = $("#withdraw-consent-view");
    v703.Vo = $("#delete-account-view");
    v703.Lo = $("#please-wait-view");
    v703.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 1);
      vO5.f.g(vO2.Uf.Qn, 500);
      vO5.f.g(vO2.Uf.Rn, 200);
      vO5.f.g(vO2.Uf.Sn, 200);
      vO5.f.h(vO2.Uf.Tn, 200);
      vO5.f.h(vO2.Uf.Un, 200);
      vO5.f.h(vO2.Uf.Vn, 200);
      vO5.f.g(vO2.Uf.Wn, 200);
      vO5.f.h(vO2.Uf.Xn, 200);
      vO5.f.h(vO2.Uf.Yn, 200);
      vO5.f.h(vO2.Uf.Zn, 200);
      vO5.f.h(vO2.Uf.$n, 200);
      vO5.f.h(vO2.Uf._n, 200);
      v700.html(this.Xa);
      v701.toggle(this.Io);
      this.Wo();
    };
    v703.prototype.Wo = function () {};
    v703.prototype.Xo = function (p680) {
      var vThis25 = this;
      var v643 = vO4.va(0, 2147483647) & 2147483647;
      this.Jo.push(v643);
      vO5.f.g(vO2.Ho.Lo, 100);
      vO4.Y(function () {
        vThis25.Yo(v643);
      }, p680);
      return new vF18(this, v643);
    };
    v703.prototype.Yo = function (p681) {
      var v644 = this.Jo.indexOf(p681);
      if (!(v644 < 0)) {
        this.Jo.splice(v644, 1);
        if (this.Jo.length === 0) {
          vO5.f.h(vO2.Ho.Lo, 100);
        }
      }
    };
    vO2.Ho = v703;
    var v645;
    var v646;
    var v647;
    var v648;
    var v649;
    var v650;
    var v651;
    var v652;
    var v653;
    var v654;
    var v655;
    var v656;
    var v657;
    var v658;
    var v659;
    var v660;
    var v661;
    var v662;
    var v663;
    var v664;
    var v665;
    var v666;
    var v667;
    var v668;
    var v669;
    var v670;
    var v671;
    var v672;
    var v673;
    var v674;
    var v675;
    var v676;
    var v677;
    var v678;
    var v679;
    var v680;
    var v681;
    var v682;
    var v683;
    var v684;
    var v685;
    var v686;
    var v687;
    var v688;
    var v689;
    var v690;
    var v691;
    var v692;
    var v693;
    var v694;
    var v695;
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
    var v781;
    var v782;
    var v783;
    var v784;
    var v785;
    var v786;
    var v787;
    var v788;
    var v789;
    var v790;
    var v791;
    var v792;
    var v793;
    var v794;
    var v795;
    var vF18 = function () {
      function f84(p682, p683) {
        this.Zo = p682;
        this.$o = p683;
      }
      f84.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return f84;
    }();
    v704 = $("#store-buy-coins_125000");
    v705 = $("#store-buy-coins_50000");
    v706 = $("#store-buy-coins_16000");
    v707 = $("#store-buy-coins_7000");
    v708 = $("#store-buy-coins_3250");
    v709 = $("#store-buy-coins_1250");
    (v710 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.coins.tab"), false);
      var vThis26 = this;
      v704.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_125000");
      });
      v705.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_50000");
      });
      v706.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_16000");
      });
      v707.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_7000");
      });
      v708.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_3250");
      });
      v709.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_1250");
      });
    })).prototype.Sa = function () {
      v710.parent.prototype.Sa.call(this);
    };
    v710.prototype.Wo = function () {
      vO5.f.g(vO2.Ho.Mo, 200);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v710.prototype.nl = function () {
      ooo.ij.jf();
    };
    v710.prototype.ap = function (p684) {};
    vO2.Ik = v710;
    v711 = $("#highscore-table");
    v712 = $("#leaders-button-level");
    v713 = $("#leaders-button-highscore");
    v714 = $("#leaders-button-kills");
    v715 = "byLevel";
    v716 = "byHighScore";
    v717 = "byKillsAndHeadShots";
    (v718 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.leaders.tab"), true);
      var vThis27 = this;
      this.bp = {};
      this.cp = {
        dp: {
          ep: v712,
          fp: v715
        },
        gp: {
          ep: v713,
          fp: v716
        },
        hp: {
          ep: v714,
          fp: v717
        }
      };
      v712.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.dp);
      });
      v713.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.gp);
      });
      v714.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.hp);
      });
    })).prototype.Sa = function () {
      v718.parent.prototype.Sa.call(this);
    };
    v718.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.g(vO2.Ho.No, 200);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v718.prototype.nl = function () {
      var vThis28 = this;
      ooo.ij.jf();
      var v796 = this.Xo(5000);
      var v797 = vO3.H.J + "/pub/leaders";
      vO4.Aa(v797, function () {
        var vO31 = {
          [v715]: [],
          [v716]: [],
          [v717]: []
        };
        vThis28.bp = vO31;
        vThis28.ip(vThis28.jp ?? vThis28.cp.dp);
        v796._o();
      }, function (p685) {
        vThis28.bp = p685;
        vThis28.ip(vThis28.jp ?? vThis28.cp.dp);
        v796._o();
      });
    };
    v718.prototype.ip = function (p686) {
      this.jp = p686;
      for (var v798 in this.cp) {
        if (this.cp.hasOwnProperty(v798)) {
          this.cp[v798].ep.removeClass("pressed");
        }
      }
      ;
      this.jp.ep.addClass("pressed");
      for (var v799 = this.bp[this.jp.fp], vLS6 = "", vLN0107 = 0; vLN0107 < v799.length; vLN0107++) {
        var v800 = v799[vLN0107];
        vLS6 += "<div class=\"table-row\"><span>" + (vLN0107 + 1) + "</span><span><img src=\"" + v800.avatarUrl + "\"/></span><span>" + v800.username + "</span><span>" + v800.level + "</span><span>" + v800.highScore + "</span><span>" + v800.headShots + " / " + v800.kills + "</span></div>";
      }
      ;
      v711.empty();
      v711.append(vLS6);
    };
    vO2.Kk = v718;
    v719 = $("#popup-login-gg");
    v720 = $("#popup-login-fb");
    (v721 = vO4.ca(vO2.Ho, function () {
      var vThis29 = this;
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.login.tab"), false);
      v719.click(function () {
        ooo.ij.if();
        var v801 = vThis29.Xo(10000);
        vO4.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            v801._o();
          });
        }, 500);
      });
      v720.click(function () {
        ooo.ij.if();
        var v802 = vThis29.Xo(10000);
        vO4.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            v802._o();
          });
        }, 500);
      });
    })).prototype.Sa = function () {
      v721.parent.prototype.Sa.call(this);
    };
    v721.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.g(vO2.Ho.Po, 200);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v721.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO2.Ok = v721;
    v722 = $("#profile-avatar");
    v723 = $("#profile-username");
    v724 = $("#profile-experience-bar");
    v725 = $("#profile-experience-val");
    v726 = $("#profile-level");
    v727 = $("#profile-stat-highScore");
    v728 = $("#profile-stat-bestSurvivalTime");
    v729 = $("#profile-stat-kills");
    v730 = $("#profile-stat-headshots");
    v731 = $("#profile-stat-gamesPlayed");
    v732 = $("#profile-stat-totalTimeSpent");
    v733 = $("#profile-stat-registrationDate");
    (v734 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.profile.tab"), true);
    })).prototype.Sa = function () {
      v734.parent.prototype.Sa.call(this);
    };
    v734.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.g(vO2.Ho.Oo, 200);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v734.prototype.nl = function () {
      ooo.ij.jf();
      var v803 = ooo.ok.dm();
      var v804 = moment([v803.year, v803.month - 1, v803.day]).format("LL");
      v723.html(ooo.ok.Ll());
      v722.attr("src", ooo.ok.Nl());
      v724.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
      v725.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
      v726.html(ooo.ok.Rl());
      v727.html(ooo.ok.Zl());
      v728.html(vO4.$(ooo.ok.$l()));
      v729.html(ooo.ok._l());
      v730.html(ooo.ok.am());
      v731.html(ooo.ok.bm());
      v732.html(vO4.$(ooo.ok.cm()));
      v733.html(v804);
    };
    vO2.Mk = v734;
    v735 = $("#settings-music-enabled-switch");
    v736 = $("#settings-sfx-enabled-switch");
    v737 = $("#settings-show-names-switch");
    v738 = $("#popup-logout");
    v739 = $("#popup-logout-container");
    v740 = $("#popup-delete-account");
    v741 = $("#popup-delete-account-container");
    v742 = $("#popup-withdraw-consent");
    (v743 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.settings.tab"), false);
      var vThis30 = this;
      v735.click(function () {
        var v805 = !!v735.prop("checked");
        vO2.Cg.Ng(vO2.Cg.Fg, v805, 30);
        ooo.ij.$e(v805);
        ooo.ij.if();
      });
      v736.click(function () {
        var v806 = !!v736.prop("checked");
        vO2.Cg.Ng(vO2.Cg.Gg, v806, 30);
        ooo.ij.Xe(v806);
        ooo.ij.if();
      });
      v737.click(function () {
        ooo.ij.if();
      });
      v738.click(function () {
        ooo.ij.if();
        vThis30.Xo(500);
        ooo.ok.qm();
      });
      v740.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      v742.click(function () {
        if (ooo.kp()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var v807;
      var v808;
      var v809;
      v743.parent.prototype.Sa.call(this);
      v807 = vO2.Cg.Og(vO2.Cg.Fg) !== "false";
      v735.prop("checked", v807);
      ooo.ij.$e(v807);
      v808 = vO2.Cg.Og(vO2.Cg.Gg) !== "false";
      v736.prop("checked", v808);
      ooo.ij.Xe(v808);
      v809 = vO2.Cg.Og(vO2.Cg.Eg) !== "false";
      v737.prop("checked", v809);
      ooo.ok.em(function () {
        v739.toggle(ooo.ok.nk());
        v741.toggle(ooo.ok.nk());
      });
    };
    v743.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.g(vO2.Ho.Qo, 200);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v743.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        v742.show();
      } else {
        v742.hide();
      }
    };
    v743.prototype.Gi = function () {
      return v737.prop("checked");
    };
    vO2.Pk = v743;
    v744 = $("#store-view-canv");
    v745 = $("#skin-description-text");
    v746 = $("#skin-group-description-text");
    v747 = $("#store-locked-bar");
    v748 = $("#store-locked-bar-text");
    v749 = $("#store-buy-button");
    v750 = $("#store-item-price");
    v751 = $("#store-groups");
    v752 = $("#store-view-prev");
    v753 = $("#store-view-next");
    (v754 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.skins.tab"), true);
      var vThis31 = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new vO2.Lm(v744);
      v749.click(function () {
        ooo.ij.if();
        vThis31.pp();
      });
      v752.click(function () {
        ooo.ij.if();
        vThis31.lp.qp();
      });
      v753.click(function () {
        ooo.ij.if();
        vThis31.lp.rp();
      });
    })).prototype.Sa = function () {
      v754.parent.prototype.Sa.call(this);
      var vThis32 = this;
      ooo.ud.Jc(function () {
        var v810 = ooo.ud.Gc();
        vThis32.mp = [];
        for (var vLN0108 = 0; vLN0108 < v810.skinGroupArrayDict.length; vLN0108++) {
          vThis32.mp.push(new v755(vThis32, v810.skinGroupArrayDict[vLN0108]));
        }
        ;
        vThis32.np = {};
        for (var vLN0109 = 0; vLN0109 < v810.skinArrayDict.length; vLN0109++) {
          var v811 = v810.skinArrayDict[vLN0109];
          vThis32.np[v811.id] = v811;
        }
        ;
        vThis32.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        vThis32.tp(false);
      });
    };
    v754.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.g(vO2.Ho.Ro, 200);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v754.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    v754.prototype.hl = function () {
      this.op.rg(false);
    };
    v754.prototype.qg = function () {
      this.op.qg();
    };
    v754.prototype.ug = function (p687, p688) {
      this.op.ug();
    };
    v754.prototype.sp = function () {
      var vThis33 = this;
      var vThis34 = this;
      v751.empty();
      for (var vLN0110 = 0; vLN0110 < this.mp.length; vLN0110++) {
        (function (p689) {
          var v812 = vThis33.mp[p689];
          var v813 = vO2.d.createElement("li");
          v751.append(v813);
          var v$5 = $(v813);
          if (vThis34.xp && vThis34.xp.isCustom) {
            v$5.addClass("iscustom");
          }
          v$5.html(v812.up());
          v$5.click(function () {
            ooo.ij.if();
            vThis34.vp(v812);
          });
          v812.wp = v$5;
        })(vLN0110);
      }
      ;
      if (this.mp.length > 0) {
        var v814 = ooo.so.Zj(vO2._j.$j);
        for (var vLN0111 = 0; vLN0111 < this.mp.length; vLN0111++) {
          var v815 = this.mp[vLN0111];
          for (var v816 = v815.xp.list, vLN0112 = 0; vLN0112 < v816.length; vLN0112++) {
            if (v816[vLN0112] === v814) {
              v815.yp = vLN0112;
              this.vp(v815);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0]);
      }
    };
    v754.prototype.vp = function (p690) {
      if (this.lp !== p690) {
        this.lp = p690;
        v751.children().removeClass("pressed");
        if (this.lp.wp) {
          this.lp.wp.addClass("pressed");
        }
        v746.html("");
        if (p690.xp != null) {
          var v817 = ooo.ud.Gc().textDict[p690.xp.description];
          if (v817 != null) {
            v746.html(vO4.aa(vO4.V(v817)));
          }
        }
        ;
        this.tp(true);
      }
    };
    v754.prototype.zp = function () {
      if (this.lp == null) {
        return vO2.yj.Aj();
      } else {
        return this.lp.Ap();
      }
    };
    v754.prototype.pp = function () {
      var v818 = this.zp();
      if (v818.Cj()) {
        var v819 = v818.Mc();
        this.Bp(v819);
      }
    };
    v754.prototype.Bp = function (p691) {
      var v820 = ooo.so.mk(p691, vO2._j.$j);
      if (v820 != null) {
        var v821 = v820.pk();
        if (!(ooo.ok.Ql() < v821)) {
          var v822 = ooo.so.Zj(vO2._j.$j);
          var v823 = ooo.so.Zj(vO2._j.ak);
          var v824 = ooo.so.Zj(vO2._j.bk);
          var v825 = ooo.so.Zj(vO2._j.dk);
          var v826 = ooo.so.Zj(vO2._j.ck);
          var v827 = this.Xo(5000);
          ooo.ok.nm(p691, vO2._j.$j, function () {
            v827._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(v822, vO2._j.$j);
              ooo.so.lk(v823, vO2._j.ak);
              ooo.so.lk(v824, vO2._j.bk);
              ooo.so.lk(v825, vO2._j.dk);
              ooo.so.lk(v826, vO2._j.ck);
              ooo.so.lk(p691, vO2._j.$j);
              v827._o();
            });
          });
        }
      }
    };
    v754.prototype.tp = function (p692) {
      var v828 = ooo.so.ek();
      var v829 = this.zp();
      if (v829.Cj()) {
        var v830 = v829.Mc();
        var v831 = ooo.so.mk(v830, vO2._j.$j);
        var v832 = false;
        if (ooo.so.ik(v830, vO2._j.$j)) {
          v747.hide();
          v749.hide();
        } else if (v831 == null || v831.qk()) {
          v832 = true;
          v747.show();
          v749.hide();
          v748.text(vO4.U("index.game.popup.menu.store.locked"));
          if (v831 != null && v831.qk()) {
            var v833 = ooo.ud.Gc().textDict[v831.ln()];
            if (v833 != null) {
              v748.text(vO4.V(v833));
            }
          }
        } else {
          v747.hide();
          v749.show();
          v750.html(v831.pk());
        }
        ;
        v745.html("");
        if (v831 != null && v831.mn() != null) {
          var v834 = ooo.ud.Gc().textDict[v831.mn()];
          if (v834 != null) {
            v745.html(vO4.aa(vO4.V(v834)));
          }
        }
        ;
        this.op.Gm(v828.Cn(v830));
        this.op.an(v832);
        if (p692) {
          ooo.so.lk(v830, vO2._j.$j);
        }
      }
    };
    v755 = function () {
      function f85(p693, p694) {
        this.Cp = p693;
        this.yp = 0;
        this.xp = p694;
      }
      f85.prototype.qp = function () {
        if (--this.yp < 0) {
          this.yp = this.xp.list.length - 1;
        }
        this.Cp.tp(true);
      };
      f85.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0;
        }
        this.Cp.tp(true);
      };
      f85.prototype.up = function () {
        let v835 = vO4.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search("data:image/png;base64,") == -1 || !(v835 = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search("https://lh3.googleusercontent.com") == -1 || !(v835 = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            v835 = "<img src=\"" + vO7.s_l + "/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return v835;
      };
      f85.prototype.Ap = function () {
        if (this.yp >= this.xp.list.length) {
          return vO2.yj.Aj();
        } else {
          return vO2.yj.Bj(this.xp.list[this.yp]);
        }
      };
      return f85;
    }();
    vO2.Rk = v754;
    v756 = $("#store-go-coins-button");
    v757 = $("#store-go-skins-button");
    v758 = $("#store-go-wear-button");
    (v759 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.store.tab"), true);
      v756.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      v757.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      v758.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      v759.parent.prototype.Sa.call(this);
    };
    v759.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.g(vO2.Ho.So, 200);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v759.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO2.Tk = v759;
    v760 = $("#wear-view-canv");
    v761 = $("#wear-description-text");
    v762 = $("#wear-locked-bar");
    v763 = $("#wear-locked-bar-text");
    v764 = $("#wear-buy-button");
    v765 = $("#wear-item-price");
    v766 = $("#wear-eyes-button");
    v767 = $("#wear-mouths-button");
    v768 = $("#wear-glasses-button");
    v769 = $("#wear-hats-button");
    v770 = $("#wear-tint-chooser");
    v771 = $("#wear-view-prev");
    v772 = $("#wear-view-next");
    (v773 = vO4.ca(vO2.Ho, function () {
      var vThis35 = this;
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.wear.tab"), true);
      var vThis36 = this;
      this.Dp = [];
      this.ak = new v774(this, vO2._j.ak, v766);
      this.bk = new v774(this, vO2._j.bk, v767);
      this.dk = new v774(this, vO2._j.dk, v768);
      this.ck = new v774(this, vO2._j.ck, v769);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new vO2.Lm(v760);
      v764.click(function () {
        ooo.ij.if();
        vThis36.Kp();
      });
      v771.click(function () {
        ooo.ij.if();
        vThis36.Ep.Lp();
      });
      v772.click(function () {
        ooo.ij.if();
        vThis36.Ep.Mp();
      });
      v766.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.ak);
      });
      v767.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.bk);
      });
      v768.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.dk);
      });
      v769.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      v773.parent.prototype.Sa.call(this);
      var vThis37 = this;
      ooo.ud.Jc(function () {
        var v836 = ooo.ud.Gc();
        vThis37.Fp = v836.eyesDict;
        vThis37.Gp = v836.mouthDict;
        vThis37.Hp = v836.glassesDict;
        vThis37.Ip = v836.hatDict;
        vThis37.Jp = v836.colorDict;
        vThis37.ak.Op(v836.eyesVariantArray);
        vThis37.ak.Pp(vThis37.Fp);
        vThis37.bk.Op(v836.mouthVariantArray);
        vThis37.bk.Pp(vThis37.Gp);
        vThis37.dk.Op(v836.glassesVariantArray);
        vThis37.dk.Pp(vThis37.Hp);
        vThis37.ck.Op(v836.hatVariantArray);
        vThis37.ck.Pp(vThis37.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        vThis37.tp(false);
      });
    };
    v773.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.g(vO2.Ho.To, 200);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v773.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    v773.prototype.hl = function () {
      this.op.rg(false);
    };
    v773.prototype.qg = function () {
      this.op.qg();
    };
    v773.prototype.ug = function (p695, p696) {
      this.op.ug();
    };
    v773.prototype.Np = function (p697) {
      this.Ep = p697;
      for (var vLN0113 = 0; vLN0113 < this.Dp.length; vLN0113++) {
        this.Dp[vLN0113].ep.removeClass("pressed");
      }
      ;
      this.Ep.ep.addClass("pressed");
      this.Ep.ml();
    };
    v773.prototype.Qp = function () {
      if (this.Ep == null) {
        return vO2.yj.Aj();
      } else {
        return vO2.yj.Bj({
          Je: this.Ep.Ap(),
          Wd: this.Ep.Wd
        });
      }
    };
    v773.prototype.Kp = function () {
      var v837 = this.Qp();
      if (v837.Cj()) {
        var v838 = v837.Mc();
        this.Rp(v838.Je, v838.Wd);
      }
    };
    v773.prototype.Rp = function (p698, p699) {
      var v839 = ooo.so.mk(p698, p699);
      if (v839 != null) {
        var v840 = v839.pk();
        if (!(ooo.ok.Ql() < v840)) {
          var v841 = ooo.so.Zj(vO2._j.$j);
          var v842 = ooo.so.Zj(vO2._j.ak);
          var v843 = ooo.so.Zj(vO2._j.bk);
          var v844 = ooo.so.Zj(vO2._j.dk);
          var v845 = ooo.so.Zj(vO2._j.ck);
          var v846 = this.Xo(5000);
          ooo.ok.nm(p698, p699, function () {
            v846._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(v841, vO2._j.$j);
              ooo.so.lk(v842, vO2._j.ak);
              ooo.so.lk(v843, vO2._j.bk);
              ooo.so.lk(v844, vO2._j.dk);
              ooo.so.lk(v845, vO2._j.ck);
              ooo.so.lk(p698, p699);
              v846._o();
            });
          });
        }
      }
    };
    v773.prototype.tp = function (p700) {
      var v847 = ooo.so.ek();
      var v848 = this.Qp();
      if (v848.Cj()) {
        var v849 = v848.Mc();
        var v850 = ooo.so.mk(v849.Je, v849.Wd);
        var v851 = false;
        if (ooo.so.ik(v849.Je, v849.Wd)) {
          v762.hide();
          v764.hide();
        } else if (v850 == null || v850.qk()) {
          v851 = true;
          v762.show();
          v764.hide();
          v763.text(vO4.U("index.game.popup.menu.store.locked"));
          if (v850 != null && v850.qk()) {
            var v852 = ooo.ud.Gc().textDict[v850.ln()];
            if (v852 != null) {
              v763.text(vO4.V(v852));
            }
          }
        } else {
          v762.hide();
          v764.show();
          v765.html(v850.pk());
        }
        ;
        v761.html("");
        if (v850 != null && v850.mn() != null) {
          var v853 = ooo.ud.Gc().textDict[v850.mn()];
          if (v853 != null) {
            v761.html(vO4.aa(vO4.V(v853)));
          }
        }
        ;
        var v854 = this.op;
        switch (v849.Wd) {
          case vO2._j.ak:
            v854.Gm(v847.Dn(v849.Je));
            v854.bn(v851);
            break;
          case vO2._j.bk:
            v854.Gm(v847.En(v849.Je));
            v854.cn(v851);
            break;
          case vO2._j.dk:
            v854.Gm(v847.Gn(v849.Je));
            v854.en(v851);
            break;
          case vO2._j.ck:
            v854.Gm(v847.Fn(v849.Je));
            v854.dn(v851);
        }
        ;
        if (p700) {
          ooo.so.lk(v849.Je, v849.Wd);
        }
      }
    };
    v774 = function () {
      function f86(p701, p702, p703) {
        this.Cp = p701;
        this.Wd = p702;
        this.ep = p703;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -10;
        this.Up = -10;
      }
      f86.prototype.Op = function (p704) {
        this.Sp = p704;
      };
      f86.prototype.Pp = function (p705) {
        this.Lc = p705;
      };
      f86.prototype.ml = function () {
        var v855 = ooo.so.Zj(this.Wd);
        for (var vLN0114 = 0; vLN0114 < this.Sp.length; vLN0114++) {
          for (var vLN0115 = 0; vLN0115 < this.Sp[vLN0114].length; vLN0115++) {
            if (this.Sp[vLN0114][vLN0115] === v855) {
              this.Vp(vLN0114);
              this.Wp(vLN0115);
              return;
            }
          }
        }
        ;
        this.Vp(0);
        this.Wp(0);
      };
      f86.prototype.Lp = function () {
        var v856 = this.Tp - 1;
        if (v856 < 0) {
          v856 = this.Sp.length - 1;
        }
        this.Vp(v856);
        this.Wp(this.Up % this.Sp[v856].length);
      };
      f86.prototype.Mp = function () {
        var v857 = this.Tp + 1;
        if (v857 >= this.Sp.length) {
          v857 = 0;
        }
        this.Vp(v857);
        this.Wp(this.Up % this.Sp[v857].length);
      };
      f86.prototype.Vp = function (p706) {
        var vThis38 = this;
        if (!(p706 < 0) && !(p706 >= this.Sp.length)) {
          this.Tp = p706;
          v770.empty();
          var v858 = this.Sp[this.Tp];
          if (v858.length > 1) {
            for (var vLN0116 = 0; vLN0116 < v858.length; vLN0116++) {
              (function (p707) {
                var v859 = v858[p707];
                var v860 = vThis38.Lc[v859];
                var v861 = "#" + vThis38.Cp.Jp[v860.prime];
                var v$6 = $("<div style=\"border-color: " + v861 + "\"></div>");
                v$6.click(function () {
                  ooo.ij.if();
                  vThis38.Wp(p707);
                });
                v770.append(v$6);
              })(vLN0116);
            }
          }
        }
      };
      f86.prototype.Wp = function (p708) {
        if (!(p708 < 0) && !(p708 >= this.Sp[this.Tp].length)) {
          this.Up = p708;
          v770.children().css("background-color", "transparent");
          var v862 = v770.children(":nth-child(" + (1 + p708) + ")");
          v862.css("background-color", v862.css("border-color"));
          this.Cp.tp(true);
        }
      };
      f86.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return f86;
    }();
    vO2.Vk = v773;
    v775 = $(".play-button");
    v776 = $(".close-button");
    (v777 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.consent.tab"), false);
      v775.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new vO2.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      v776.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      v777.parent.prototype.Sa.call(this);
    };
    v777.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.g(vO2.Ho.Uo, 200);
      vO5.f.h(vO2.Ho.Vo, 50);
    };
    v777.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO2.Ek = v777;
    v778 = $("#delete-account-timer");
    v779 = $("#delete-account-yes");
    v780 = $("#delete-account-no");
    (v781 = vO4.ca(vO2.Ho, function () {
      vO2.Ho.call(this, vO4.U("index.game.popup.menu.delete.tab"), false);
      v779.click(function () {
        ooo.ij.if();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      v780.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      v781.parent.prototype.Sa.call(this);
    };
    v781.prototype.Wo = function () {
      vO5.f.h(vO2.Ho.Mo, 50);
      vO5.f.h(vO2.Ho.No, 50);
      vO5.f.h(vO2.Ho.Oo, 50);
      vO5.f.h(vO2.Ho.Po, 50);
      vO5.f.h(vO2.Ho.Qo, 50);
      vO5.f.h(vO2.Ho.Ro, 50);
      vO5.f.h(vO2.Ho.So, 50);
      vO5.f.h(vO2.Ho.To, 50);
      vO5.f.h(vO2.Ho.Uo, 50);
      vO5.f.g(vO2.Ho.Vo, 200);
    };
    v781.prototype.nl = function () {
      ooo.ij.nf();
      vO5.f.h(v779, 1);
      vO5.f.g(v778, 1);
      v778.text("..10 ..");
      this.$p();
      this._p(function () {
        v778.text("..9 ..");
      }, 1000);
      this._p(function () {
        v778.text("..8 ..");
      }, 2000);
      this._p(function () {
        v778.text("..7 ..");
      }, 3000);
      this._p(function () {
        v778.text("..6 ..");
      }, 4000);
      this._p(function () {
        v778.text("..5 ..");
      }, 5000);
      this._p(function () {
        v778.text("..4 ..");
      }, 6000);
      this._p(function () {
        v778.text("..3 ..");
      }, 7000);
      this._p(function () {
        v778.text("..2 ..");
      }, 8000);
      this._p(function () {
        v778.text("..1 ..");
      }, 9000);
      this._p(function () {
        vO5.f.g(v779, 300);
        vO5.f.h(v778, 1);
      }, 10000);
    };
    v781.prototype._p = function (p709, p710) {
      var v863 = vO4.Y(p709, p710);
      this.Zp.push(v863);
    };
    v781.prototype.$p = function () {
      for (var vLN0117 = 0; vLN0117 < this.Zp.length; vLN0117++) {
        vO4.Z(this.Zp[vLN0117]);
      }
      ;
      this.Zp = [];
    };
    vO2.Gk = v781;
    vO2.aq = function () {
      function f87() {
        this.Go = function () {};
      }
      f87.prototype.ag = function () {};
      f87.prototype.nl = function () {};
      return f87;
    }();
    (v782 = vO4.ca(vO2.aq, function (p711) {
      vO2.aq.call(this);
      var v864 = vO4.Ca() + "_" + vO4._(1000 + vO4.ma() * 8999);
      this.bq = $("<div id=\"" + v864 + "\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">" + p711 + "</div><div class=\"toaster-coins-close\">" + vO4.U("index.game.toaster.continue") + "</div></div>");
      var vThis39 = this;
      this.bq.find(".toaster-coins-close").click(function () {
        ooo.ij.if();
        vThis39.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v782.prototype.nl = function () {
      ooo.ij.lf();
    };
    vO2.mm = v782;
    (v783 = vO4.ca(vO2.aq, function (p712) {
      vO2.aq.call(this);
      var v865 = vO4.Ca() + "_" + vO4._(1000 + vO4.ma() * 8999);
      this.bq = $("<div id=\"" + v865 + "\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">" + p712 + "</div><div class=\"toaster-levelup-text\">" + vO4.U("index.game.toaster.levelup") + "</div><div class=\"toaster-levelup-close\">" + vO4.U("index.game.toaster.continue") + "</div></div>");
      var vThis40 = this;
      this.bq.find(".toaster-levelup-close").click(function () {
        ooo.ij.if();
        vThis40.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v783.prototype.nl = function () {
      ooo.ij.kf();
    };
    vO2.lm = v783;
    (v784 = vO4.ca(vO2.aq, function () {
      vO2.aq.call(this);
      var vThis41 = this;
      var v866 = vO4.Ca() + "_" + vO4._(1000 + vO4.ma() * 8999);
      this.bq = $("<div id=\"" + v866 + "\" class=\"toaster toaster-consent-accepted\"><img class=\"toaster-consent-accepted-logo\" src=\"" + vO3.H.L + "\" alt=\"Wormate.io logo\"/><div class=\"toaster-consent-accepted-container\"><span class=\"toaster-consent-accepted-text\">" + vO4.U("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span><a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO4.U("index.game.toaster.consent.link") + "</a></div><div class=\"toaster-consent-close\">" + vO4.U("index.game.toaster.consent.iAccept") + "</div></div>");
      this.cq = this.bq.find(".toaster-consent-close");
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        vThis41.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v784.prototype.nl = function () {
      var vThis42 = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        vO4.Y(function () {
          vThis42.cq.fadeIn(300);
        }, 2000);
      } else {
        vO4.Y(function () {
          vThis42.Go();
        }, 0);
      }
    };
    vO2.Yp = v784;
    v785 = $("#error-gateway-connection-retry");
    (v786 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      v785.click(function () {
        ooo.ij.if();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        vO4.Y(function () {
          var v867 = vO3.H.J + "/pub/healthCheck/ping";
          vO4.Aa(v867, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (p713) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (p714) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (p715, p716) {
              ooo.Xg.Re.po(p715, p716);
            });
          });
        }, 2000);
      });
    })).prototype.Sa = function () {};
    v786.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.g(vO2.Uf.$n, 500);
      vO5.f.h(vO2.Uf._n, 50);
    };
    v786.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Jf);
      ooo.ij.nf();
    };
    vO2.al = v786;
    v787 = $("#error-game-connection-retry");
    (v788 = vO4.ca(vO2.Uf, function () {
      vO2.Uf.call(this, vO2.ll.ao);
      v787.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    v788.prototype.ml = function () {
      vO2.Nf.rg(true);
      vO5.f.g(vO2.Uf.Tf, 500);
      vO5.f.g(vO2.Uf.Qn, 1);
      vO5.f.h(vO2.Uf.Rn, 50);
      vO5.f.h(vO2.Uf.Sn, 50);
      vO5.f.h(vO2.Uf.Tn, 50);
      vO5.f.h(vO2.Uf.Un, 50);
      vO5.f.h(vO2.Uf.Vn, 50);
      vO5.f.h(vO2.Uf.Wn, 50);
      vO5.f.h(vO2.Uf.Xn, 50);
      vO5.f.h(vO2.Uf.Yn, 50);
      vO5.f.h(vO2.Uf.Zn, 50);
      vO5.f.h(vO2.Uf.$n, 50);
      vO5.f.g(vO2.Uf._n, 500);
    };
    v788.prototype.nl = function () {
      ooo.ij.Ye(vO2.Pe.Se.Jf);
      ooo.ij.nf();
    };
    vO2.cl = v788;
    vO4.dq = function () {
      function f88(p717) {
        var v868 = p717 + vO4._(vO4.ma() * 65535) * 37;
        vO2.Cg.Ng(vO2.Cg.Lg, v868, 30);
      }
      return function () {
        var v869 = parseInt(vO2.Cg.Og(vO2.Cg.Lg)) % 37;
        if (!(v869 >= 0) || !(v869 < vO3.co.fq)) {
          v869 = vO4.ia(0, vO3.co.fq - 2);
        }
        var vO32 = {
          gq: false
        };
        vO32.hq = vO4.Ca();
        vO32.iq = 0;
        vO32.jq = 0;
        vO32.kq = null;
        vO32.lq = vO3.H.Q;
        vO32.mq = vO3.H.P;
        vO32.Mh = null;
        vO32.ud = null;
        vO32.ef = null;
        vO32.ij = null;
        vO32.Xg = null;
        vO32.so = null;
        vO32.ok = null;
        try {
          var vNavigator = navigator;
          if (vNavigator) {
            var v870 = vNavigator.geolocation;
            if (v870) {
              v870.getCurrentPosition(function (p718) {
                var v871 = p718.coords;
                if (f3(v871) != "undefined" && f3(v871.latitude) != "undefined" && f3(v871.longitude) != "undefined") {
                  vO32.kq = p718;
                }
              }, function (p719) {});
            }
          }
        } catch (e21) {}
        ;
        vO32.Sa = function () {
          vO32.Mh = new vO2.nq();
          vO32.Mh.oq = new vO2.si(vO32.Mh);
          vO32.ud = new vO2.Kb();
          vO32.ef = new vO2.wk();
          vO32.ij = new vO2.Pe();
          vO32.Xg = new vO2.zk();
          vO32.so = new vO2.Sj();
          vO32.ok = new vO2.sl();
          try {
            ga("send", "event", "app", vO3.H.I + "_init");
          } catch (e22) {}
          ;
          vO32.Mh.pq = function () {
            vO32.Xg.gl(vO32.Xg.bl);
          };
          vO32.Mh.qq = function () {
            var v872 = vO32.Xg.Jf.Ao();
            try {
              ga("send", "event", "game", vO3.H.I + "_start", v872);
            } catch (e23) {}
            ;
            vO32.ij.Ye(vO2.Pe.Se.Kf);
            vO32.Xg.gl(vO32.Xg.Kf.ho());
          };
          vO32.Mh.rq = function () {
            var v873;
            var v874;
            try {
              ga("send", "event", "game", vO3.H.I + "_end");
            } catch (e24) {}
            ;
            if ($("body").height() >= 430) {
              vO3.co.sq.Va();
            }
            vO32.ud.rc(null, null, null);
            v873 = vO4._(vO32.Mh.Lh.hi);
            v874 = vO32.Mh.oi;
            if (vO32.ok.nk()) {
              vO32.ok.hm(function () {
                vO32.tq(v873, v874);
              });
            } else {
              vO32.tq(v873, v874);
            }
          };
          vO32.Mh.uq = function (p720) {
            p720(vO32.Xg.Kf.ko(), vO32.Xg.Kf.lo());
          };
          vO32.ok.em(function () {
            var v875 = vO32.Xg.rl();
            if (v875 != null && v875.Wd === vO2.ll.kl) {
              vO32.ij.Ye(vO2.Pe.Se.Jf);
              vO32.Xg.gl(vO32.Xg.Jf);
            }
            if (vO32.ok.nk()) {
              var v876 = vO32.ok.Kl();
              try {
                ga("set", "userId", v876);
              } catch (e25) {}
              ;
              try {
                v2("messenger", "loginUser", function (p721) {
                  p721(v876);
                });
              } catch (e26) {}
            } else {
              try {
                v2("webWidget", "logout");
              } catch (e27) {}
            }
            ;
            if (vO32.kp() && vO32.ok.nk() && !vO32.ok.Pl()) {
              vO32.Xp(false, false);
              vO32.Xg.Yk.Fo(new vO2.Yp());
            } else {
              vO32.vq(true);
            }
          });
          vO32.Mh.Sa();
          vO32.Xg.Sa();
          vO32.so.Sa();
          vO32.ud.Sa();
          vO32.Xg.Jf.zo();
          vO32.Xg.gl(vO32.Xg.Jf);
          vO32.ef.Sa(function () {
            vO32.ij.Sa();
            vO32.ok.Sa();
            vO32.ud.rc(function () {
              vO32.Xg.Jf.yo();
              vO32.Xg.gl(vO32.Xg.Jf);
            }, function (p722) {
              vO32.Xg.Jf.yo();
              vO32.Xg.gl(vO32.Xg._k);
            }, function (p723, p724) {
              var vP723 = p723;
              vO32.Xg.Re.po(vP723, p724);
              vO32.Xg.Jf.po(vP723, p724);
            });
            if (vO32.kp() && !vO32.Pl()) {
              vO32.Xg.Yk.Fo(new vO2.Yp());
            } else {
              vO32.vq(true);
            }
          });
        };
        vO32.wq = function (p725) {
          if (vO32.ok.nk()) {
            var v877 = vO32.ok.gm();
            var v878 = vO3.H.J + "/pub/wuid/" + v877 + "/consent/change?value=" + vO4.W(p725);
            vO4.Aa(v878, function () {}, function (p726) {});
          }
        };
        vO32.to = function () {
          v869++;
          if (vO6.on) {
            v869 = 1;
          }
          if (!vO3.co.xq && v869 >= vO3.co.fq) {
            vO32.Xg.gl(vO32.Xg.dl);
            vO32.ij.Ye(vO2.Pe.Se.Mf);
            vO3.co.yq.Ta();
          } else {
            f88(v869);
            vO32.zq();
          }
        };
        vO32.zq = function () {
          if (vO32.Mh.Aq()) {
            vO32.Xg.Re.qo();
            vO32.Xg.gl(vO32.Xg.Re);
            var v879 = vO32.Xg.Jf.Ao();
            vO2.Cg.Ng(vO2.Cg.Ig, v879, 30);
            var v880 = vO32.Xg.Hi.Gi();
            vO2.Cg.Ng(vO2.Cg.Eg, v880, 30);
            var vLN0118 = 0;
            if (vO32.kq != null) {
              var v881 = vO32.kq.coords.latitude;
              var v882 = vO32.kq.coords.longitude;
              vLN0118 = vO4.ia(0, vO4.ha(32767, (v881 + 90) / 180 * 32768)) << 1 | 1 | vO4.ia(0, vO4.ha(65535, (v882 + 180) / 360 * 65536)) << 16;
            }
            ;
            if (vO32.ok.nk()) {
              vO32.Bq(v879, vLN0118);
            } else {
              var v883 = vO32.Xg.Jf.Ml();
              vO2.Cg.Ng(vO2.Cg.Jg, v883, 30);
              var v884 = vO32.so.Zj(vO2._j.$j);
              vO2.Cg.Ng(vO2.Cg.Kg, v884, 30);
              vO32.Cq(v879, vLN0118);
            }
          }
        };
        vO32.Bq = function (p727, p728) {
          var v885;
          var v886 = vO32.ok.gm();
          var v887 = vO32.Xg.Jf.Ml();
          var v888 = vO32.so.Zj(vO2._j.$j);
          var v889 = vO32.so.Zj(vO2._j.ak);
          var v890 = vO32.so.Zj(vO2._j.bk);
          vF10(v888, v889, v890, vO32.so.Zj(vO2._j.dk), vO32.so.Zj(vO2._j.ck), v887);
          var v891 = (v887 = (v887 = vO7.f).trim()).replace(v887.substr(-7), "");
          if (v891 != vO7.s_n) {
            vO7.s_n = v891;
            vF36(v891.trim());
          }
          var v892 = vO3.H.J + "/pub/wuid/" + v886 + "/start?gameMode=" + vO4.W(p727) + "&gh=" + p728 + "&nickname=" + vO4.W(v887) + "&skinId=" + vO7.a + "&eyesId=" + vO7.b + "&mouthId=" + vO7.c + "&glassesId=" + vO7.d + "&hatId=" + vO7.e;
          vO4.Aa(v892, function () {
            vO32.Xg.gl(vO32.Xg._k);
          }, function (p729) {
            if (p729.code === 1460) {
              vO32.Xg.gl(vO32.Xg.Wk);
              try {
                ga("send", "event", "restricted", vO3.H.I + "_tick");
              } catch (e28) {}
            } else if (p729.code !== 1200) {
              vO32.Xg.gl(vO32.Xg._k);
            } else {
              var v893 = p729.server_url;
              var v_0x402f89 = vF38(v893.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(v893);
                $("#port_name_s").val(v_0x402f89);
                vO7.pi = v893;
                vO7.pn = v_0x402f89;
                localStorage.setItem("SaveGameup", JSON.stringify(vO7));
                v56.text = " " + v_0x402f89;
                vO32.Mh.Dq(v893, v886);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                vO7.pi = $("#port_id").val();
                vO7.pn = $("#port_name").val();
                localStorage.setItem("SaveGameup", JSON.stringify(vO7));
                v56.text = " " + $("#port_name").val();
                vO32.Mh.Dq($("#port_id").val(), v886);
              }
            }
          });
        };
        vO32.Cq = function (p730, p731) {
          var v894 = vO32.Xg.Jf.Ml();
          var v895 = vO32.so.Zj(vO2._j.$j);
          var v896 = vO3.H.J + "/pub/wuid/guest/start?gameMode=" + vO4.W(p730) + "&gh=" + p731 + "&nickname=" + vO4.W(v894) + "&skinId=" + vO4.W(v895);
          vO4.Aa(v896, function () {
            vO32.Xg.gl(vO32.Xg._k);
          }, function (p732) {
            if (p732.code === 1460) {
              vO32.Xg.gl(vO32.Xg.Wk);
              try {
                ga("send", "event", "restricted", vO3.H.I + "_tick");
              } catch (e29) {}
            } else if (p732.code !== 1200) {
              vO32.Xg.gl(vO32.Xg._k);
            } else {
              var v897 = p732.server_url;
              var v_0x402f892 = vF38(v897.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(v897);
                $("#port_name_s").val(v_0x402f892);
                vO7.pi = v897;
                vO7.pn = v_0x402f892;
                localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
                v56.text = " " + v_0x402f892;
                vO32.Mh.Eq(v897, v894, v895);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                vO7.pi = $("#port_id").val();
                vO7.pn = $("#port_name").val();
                localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
                v56.text = " " + $("#port_name").val();
                vO32.Mh.Eq($("#port_id").val(), v894, v895);
              }
            }
          });
        };
        vO32.tq = function (p733, p734) {
          var v898 = vO32.Xg.Jf.Ml();
          vO32.Xg.Kf.jo(p733, p734, v898);
          vO32.ij.Ye(vO2.Pe.Se.Lf);
          vO32.Xg.gl(vO32.Xg.Kf.io());
        };
        vO32.wo = function () {
          if (!vO32.xo()) {
            return vO32.so.hk();
          }
          ;
          var vParseInt4 = parseInt(vO2.Cg.Og(vO2.Cg.Kg));
          if (vParseInt4 != null && vO32.so.ik(vParseInt4, vO2._j.$j)) {
            return vParseInt4;
          } else {
            return vO32.so.hk();
          }
        };
        vO32.Bo = function (p735) {
          vO2.Cg.Ng(vO2.Cg.Mg, p735 ? "true" : "false", 1800);
        };
        vO32.xo = function () {
          return vO2.Cg.Og(vO2.Cg.Mg) === "true";
        };
        vO32.vq = function (p736) {
          if (p736 !== vO32.gq) {
            vO32.gq = p736;
            var v899 = v899 || {};
            v899.consented = p736;
            v899.gdprConsent = p736;
            vO3.co.do.Sa();
            vO3.co.sq.Sa();
            vO3.co.yq.Sa(function (p737) {
              if (p737) {
                f88(v869 = 0);
              }
              vO32.zq();
            });
          }
        };
        vO32.Xp = function (p738, p739) {
          vO2.Cg.Ng(vO2.Cg.Dg, p738 ? "true" : "false");
          if (p739) {
            vO32.wq(p738);
          }
          vO32.vq(p738);
        };
        vO32.Pl = function () {
          return vO2.Cg.Og(vO2.Cg.Dg) === "true";
        };
        vO32.kp = function () {
          try {
            return !!vO2.c.isIPInEEA || vO32.kq != null && !!vO3.Pg.Qg(vO32.kq.coords.latitude, vO32.kq.coords.longitude);
          } catch (e30) {
            return true;
          }
        };
        vO32.ug = function () {
          vO32.iq = vO4.Ca();
          vO32.jq = vO32.iq - vO32.hq;
          vO32.Mh.Uh(vO32.iq, vO32.jq);
          vO32.Xg.Uh(vO32.iq, vO32.jq);
          vO32.hq = vO32.iq;
        };
        vO32.qg = function () {
          vO32.Xg.qg();
        };
        return vO32;
      }();
    };
    vO2.nq = function () {
      'use strict';

      var vO33 = {
        Jq: 30,
        Kq: new vO5.j(100),
        Lq: 0,
        Mq: 0,
        Nq: 0,
        Oq: 0,
        Pq: 0,
        Qq: 0,
        go: 0,
        Rq: null,
        Sq: 300,
        qq: function () {},
        rq: function () {},
        uq: function () {},
        pq: function () {},
        Qh: new vO2.dh(),
        oq: null,
        Lh: null,
        nj: {},
        li: {},
        jj: 12.5,
        Nh: 40,
        Tq: 1,
        Uq: -1,
        Vq: 1,
        Wq: 1,
        Xq: -1,
        Yq: -1,
        Zq: 1,
        $q: 1,
        ar: -1,
        oi: 500,
        ei: 500
      };
      vO33.Qh.gh = 500;
      vO33.Lh = new vO2.Ui(vO33.Qh);
      vO33.Sa = function () {
        vO33.Lh._i(ooo.Xg.Kf.Wg);
        vO4.X(function () {
          vO33.uq(function (p740, p741) {
            vO33.br(p740, p741);
          });
        }, vO7.sm);
      };
      vO33.Ph = function (p742, p743, p744, p745) {
        vO33.Uq = p742;
        vO33.Vq = p743;
        vO33.Wq = p744;
        vO33.Xq = p745;
        vO33.cr();
      };
      vO33.dr = function (p746) {
        vO33.Tq = p746;
        vO33.cr();
      };
      vO33.cr = function () {
        vO33.Yq = vO33.Uq - vO33.Tq;
        vO33.Zq = vO33.Vq + vO33.Tq;
        vO33.$q = vO33.Wq - vO33.Tq;
        vO33.ar = vO33.Xq + vO33.Tq;
      };
      vO33.Uh = function (p747, p748) {
        vO33.Nq += p748;
        vO33.Mq -= vO33.Lq * 0.2 * p748;
        vO33.oq.yi();
        if (vO33.Rq != null && (vO33.go === 2 || vO33.go === 3)) {
          vO33.er(p747, p748);
          vO33.Nh = 4 + vO33.jj * vO33.Lh.Id;
        }
        var v900 = 1000 / vO4.ia(1, p748);
        var vLN0119 = 0;
        for (var vLN0120 = 0; vLN0120 < vO33.Kq.length - 1; vLN0120++) {
          vLN0119 += vO33.Kq[vLN0120];
          vO33.Kq[vLN0120] = vO33.Kq[vLN0120 + 1];
        }
        ;
        vO33.Kq[vO33.Kq.length - 1] = v900;
        vO33.Jq = (vLN0119 + v900) / vO33.Kq.length;
      };
      vO33.fr = function (p749, p750) {
        return p749 > vO33.Yq && p749 < vO33.Zq && p750 > vO33.$q && p750 < vO33.ar;
      };
      vO33.er = function (p751, p752) {
        var v901 = (vO33.Nq + vO33.Mq - vO33.Oq) / (vO33.Pq - vO33.Oq);
        vO33.Lh.Pj(p751, p752);
        vO33.Lh.Qj(p751, p752, v901, vO33.fr);
        var vLN0121 = 0;
        for (var v902 in vO33.li) {
          var v903 = vO33.li[v902];
          v903.Pj(p751, p752);
          v903.Qj(p751, p752, v901, vO33.fr);
          if (v903.cj && v903.Id > vLN0121) {
            vLN0121 = v903.Id;
          }
          if (!v903.bj && (!!(v903.Lj < 0.005) || !v903.cj)) {
            v903.$i();
            delete vO33.li[v903.ki.Je];
          }
        }
        ;
        vO33.dr(vLN0121 * 3);
        for (var v904 in vO33.nj) {
          var v905 = vO33.nj[v904];
          v905.Pj(p751, p752);
          v905.Qj(p751, p752, vO33.fr);
          if (v905.tj && (v905.Lj < 0.005 || !vO33.fr(v905.Fj, v905.Gj))) {
            v905.$i();
            delete vO33.nj[v905.ki.Je];
          }
        }
      };
      vO33.Si = function (p753, p754) {
        if (vO33.go === 1) {
          vO33.go = 2;
          vO33.qq();
        }
        var v906 = ooo.iq;
        vO33.Qq = p753;
        if (p753 === 0) {
          vO33.Oq = v906 - 95;
          vO33.Pq = v906;
          vO33.Nq = vO33.Oq;
          vO33.Mq = 0;
        } else {
          vO33.Oq = vO33.Pq;
          vO33.Pq = vO33.Pq + p754;
        }
        var v907 = vO33.Nq + vO33.Mq;
        vO33.Lq = (v907 - vO33.Oq) / (vO33.Pq - vO33.Oq);
      };
      vO33.uj = function () {
        if (vO33.go === 1 || vO33.go === 2) {
          vO33.go = 3;
          var v908 = vO33.Rq;
          vO4.Y(function () {
            if (vO33.go === 3) {
              vO33.go = 0;
            }
            if (v908 != null && v908 === vO33.Rq) {
              vO33.Rq.close();
              vO33.Rq = null;
            }
          }, 5000);
          vO33.rq();
        }
      };
      vO33.Aq = function () {
        return vO33.go !== 2 && (vO33.go = 1, vO33.oq.xi(), vO33.nj = {}, vO33.li = {}, vO33.Lh.xn(), vO33.Rq != null && (vO33.Rq.close(), vO33.Rq = null), true);
      };
      vO33.gr = function () {
        vO33.Rq = null;
        vO33.oq.xi();
        if (vO33.go !== 3) {
          vO33.pq();
        }
        vO33.go = 0;
      };
      vO33.Dq = function (p755, p756) {
        vO33.hr(p755, function () {
          var v909 = vO4.ha(2048, p756.length);
          var v910 = new vO2.Fa(6 + v909 * 2);
          var v911 = new vO2.Oa(new vO2.Ga(v910));
          v911.Pa(129);
          v911.Qa(2800);
          v911.Pa(1);
          v911.Qa(v909);
          for (var vLN0122 = 0; vLN0122 < v909; vLN0122++) {
            v911.Qa(p756.charCodeAt(vLN0122));
          }
          ;
          vO33.ir(v910);
        });
      };
      vO33.Eq = function (p757, p758, p759) {
        vO33.hr(p757, function () {
          var v912 = vO4.ha(32, p758.length);
          var v913 = new vO2.Fa(7 + v912 * 2);
          var v914 = new vO2.Oa(new vO2.Ga(v913));
          v914.Pa(129);
          v914.Qa(2800);
          v914.Pa(0);
          v914.Qa(p759);
          v914.Pa(v912);
          for (var vLN0123 = 0; vLN0123 < v912; vLN0123++) {
            v914.Qa(p758.charCodeAt(vLN0123));
          }
          ;
          vO33.ir(v913);
        });
      };
      vO33.ir = function (p760) {
        try {
          if (vO33.Rq != null && vO33.Rq.readyState === vO5.i.OPEN) {
            vO33.Rq.send(p760);
          }
        } catch (e31) {
          vO33.gr();
        }
      };
      vO33.br = function (p761, p762) {
        var v915 = ((p762 ? 128 : 0) | vO4.da(p761) / vO3.S * 128 & 127) & 255;
        var v916 = new vO2.Fa(1);
        new vO2.Oa(new vO2.Ga(v916)).Pa(v915);
        vO33.ir(v916);
        vO33.Sq = v915;
      };
      vO33.hr = function (p763, p764) {
        let v917;
        if (!vO6.on && vO7.mobile) {
          v917 = vF11(vO7.mobile);
        }
        var v918 = vO33.Rq = new vO5.i(p763);
        v918.binaryType = "arraybuffer";
        v918.onopen = function () {
          vF20(vO7, oeo, "open");
          vF22(vO7, oeo, "hidden");
          if (vO33.Rq === v918) {
            p764();
          }
        };
        v918.onclose = function () {
          vF20(vO7, oeo, "close");
          vF22(vO7, oeo, "hidden");
          if (!vO6.on && vO7.mobile && v917) {
            v917.destroy();
          }
          if (vO33.Rq === v918) {
            vO33.gr();
          }
        };
        v918.onerror = function (p765) {
          if (vO33.Rq === v918) {
            vO33.gr();
          }
          if (!vO6.on && vO7.mobile && v917) {
            v917.destroy();
          }
        };
        v918.onmessage = function (p766) {
          if (vO33.Rq === v918) {
            vO33.oq.wi(p766.data);
          }
        };
      };
      return vO33;
    };
    v789 = vO2.c.ENV;
    (v790 = {}).main = {
      do: vO4.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: vO4.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: vO4.Ra(),
      fq: 4,
      xq: false,
      bo: true
    };
    v790.miniclip = {
      do: vO4.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: vO4.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: vO4.Ra(),
      fq: 4,
      xq: false,
      bo: false
    };
    if (!(v791 = v790[v789])) {
      v791 = v790.main;
    }
    vO3.co = v791;
    $(function () {
      FastClick.attach(vO2.d.body);
    });
    addEventListener("contextmenu", function (p767) {
      p767.preventDefault();
      p767.stopPropagation();
      return false;
    });
    v792 = false;
    v793 = false;
    vO4.ba("https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54", ((v794 = {}).id = "ze-snippet", v794.async = true, v794), function () {
      v792 = true;
      v793 = false;
      v2("webWidget", "hide");
      v2("webWidget: on", "close", function () {
        v2("webWidget", "hide");
        v793 = false;
      });
    });
    $("#contact-support").click(function () {
      if (v792) {
        if (v793) {
          v2("webWidget", "close");
          v793 = false;
        } else {
          v2("webWidget", "open");
          v2("webWidget", "show");
          v793 = true;
        }
      }
    });
    vO2.c.fbAsyncInit = function () {
      var v919;
      FB.init(((v919 = {}).appId = "861926850619051", v919.cookie = true, v919.xfbml = true, v919.status = true, v919.version = "v14.0", v919));
    };
    vO4.ba("//connect.facebook.net/" + vO3.H.Q + "/sdk.js", ((v795 = {}).id = "facebook-jssdk", v795.async = true, v795.defer = true, v795.crossorigin = "anonymous", v795));
    vO4.ba("https://apis.google.com/js/platform.js", null, function () {
      gapi.load("auth2", function () {
        var v920;
        v = gapi.auth2.init(((v920 = {}).client_id = "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com", v920));
      });
    });
    vO4.ba("//apis.google.com/js/platform.js");
    (function () {
      try {
        let v921 = document.getElementsByTagName("head")[0];
        let v922 = document.createElement("link");
        v922.rel = "stylesheet";
        v922.type = "text/css";
        v922.href = "https://25yt551.github.io/worm4/2025/css/game.css";
        v921.appendChild(v922);
      } catch (e32) {
        console.error(e32);
      }
    })();
    (ooo = vO4.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function f89() {
      requestAnimationFrame(f89);
      ooo.ug();
    })();
    (function () {
      function f90() {
        var v923 = v$7.width();
        var v924 = v$7.height();
        var v925 = v$8.outerWidth();
        var v926 = v$8.outerHeight();
        var v927 = v$9.outerHeight();
        var v928 = v$10.outerHeight();
        var v929 = vO4.ha(1, vO4.ha((v924 - v928 - v927) / v926, v923 / v925));
        var v930 = "translate(-50%, -50%) scale(" + v929 + ")";
        v$8.css("-webkit-transform", v930);
        v$8.css("-moz-transform", v930);
        v$8.css("-ms-transform", v930);
        v$8.css("-o-transform", v930);
        v$8.css("transform", v930);
        ooo.qg();
        vO2.c.scrollTo(0, 1);
      }
      var v$7 = $("body");
      var v$8 = $("#stretch-box");
      var v$9 = $("#markup-header");
      var v$10 = $("#markup-footer");
      f90();
      $(vO2.c).resize(f90);
    })();
    let vF19 = function (p768, p769) {
      var v$11 = $("#saveGame");
      v$11.prop("checked", p768.saveGame);
      v$11.change(function () {
        if (!this.checked) {
          let vConfirm = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !vConfirm);
          if (!this.checked) {
            vF20(p768, p769, "zero");
          }
        }
        ;
        p768.saveGame = this.checked;
        p769.value2_hs.alpha = this.checked ? 1 : 0;
        p769.value2_kill.alpha = this.checked ? 1 : 0;
        localStorage.setItem("wkgSaveGame", this.checked ? JSON.stringify(p768) : null);
      });
    };
    let vF20 = function (p770, p771, p772, p773) {
      let vF21 = function (p774, p775, p776, p777) {
        p771.value1_hs.text = p775;
        p771.value2_hs.text = p776;
        p771.value1_kill.text = p774;
        p771.value2_kill.text = p777;
      };
      if (p772 === "count") {
        p770.kill = (p770.kill || 0) + (p773 ? 0 : 1);
        p770.headshot = (p770.headshot || 0) + (p773 ? 1 : 0);
        p770.s_kill += p773 ? 0 : 1;
        p770.s_headshot += p773 ? 1 : 0;
        vF21(p770.kill, p770.headshot, p770.s_headshot, p770.s_kill);
      }
      if (p772 === "open") {
        p770.kill = 0;
        p770.headshot = 0;
        p770.s = true;
        p770.st = true;
        v53.texture = v47;
        if (p770.saveGame) {
          vF21(p770.kill, p770.headshot, p770.s_headshot, p770.s_kill);
        }
        vF34();
      }
      if (p772 === "close") {
        p770.s = false;
        v51.texture = v43;
        v52.texture = v45;
        v41 = false;
        vLN55 = 55;
        vLN12 = 1;
        v42 = true;
        clearInterval(v39);
        v39 = null;
        clearInterval(v40);
        v40 = null;
        p770.z = 1;
        p770.fz = true;
        p770.mo1.x = -1;
        p770.mo1.y = -1;
        p770.mo2.x = -1;
        p770.mo2.y = -1;
        if (vO6.on && p770.mobile && p770.mo == 6 && p770.j) {
          p770.j.destroy();
        }
        if (p770.saveGame) {
          p770.died = (p770.died || 0) + 1;
        } else {
          vF20(p770, p771, "zero");
        }
      }
      if (p772 === "zero") {
        p770.kill = 0;
        p770.s_kill = 0;
        p770.headshot = 0;
        p770.s_headshot = 0;
        p770.died = 0;
      }
      localStorage.setItem("wkgSaveGame", JSON.stringify(p770));
    };
    let vF22 = function (p778, p779, p780, p781, p782, p783) {
      var v931;
      var v932;
      var v933;
      let vF23 = function (p784, p785, p786, p787, p788, p789, p790) {
        if (p779.pk0.text != p784) {
          p779.pk0.text = p784;
        }
        if (p779.pk1.text != p785) {
          p779.pk1.text = p785;
        }
        if (p779.pk2.text != p786) {
          p779.pk2.text = p786;
        }
        if (p779.pk3.text != p787) {
          p779.pk3.text = p787;
        }
        if (p779.pk4.text != p788) {
          p779.pk4.text = p788;
        }
        if (p779.pk5.text != p789) {
          p779.pk5.text = p789;
        }
        if (p779.pk6.text != p790) {
          p779.pk6.text = p790;
        }
      };
      if (p780 === "show") {
        v931 = p781;
        v932 = p782;
        v933 = p783;
        if (v931 == 0) {
          if (v932 == 0 || v932 == 1 || v932 == 2 || v932 == 6) {
            p778.pk = 30 - v933 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk0 = "";
            } else {
              p778.pk0 = p778.pk.toFixed();
            }
            if (v932 == 0 && p779.pk0.style.fill != "#f9cc0b") {
              p779.pk0.style.fill = "#f9cc0b";
            }
            if (v932 == 1 && p779.pk0.style.fill != "#fdbf5f") {
              p779.pk0.style.fill = "#fdbf5f";
            }
            if (v932 == 2 && p779.pk0.style.fill != "#5dade6") {
              p779.pk0.style.fill = "#5dade6";
            }
            if (v932 == 6 && p779.pk0.style.fill != "#e74a94") {
              p779.pk0.style.fill = "#e74a94";
            }
          }
          if (v932 == 3) {
            p778.pk = 80 - v933 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk0 = "";
            } else {
              p778.pk0 = p778.pk.toFixed();
            }
            if (p779.pk0.style.fill != "#e03e42") {
              p779.pk0.style.fill = "#e03e42";
            }
          }
          if (v932 == 4) {
            p778.pk = 40 - v933 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk0 = "";
            } else {
              p778.pk0 = p778.pk.toFixed();
            }
            if (p779.pk0.style.fill != "#5dade6") {
              p779.pk0.style.fill = "#5dade6";
            }
          }
          if (v932 == 5) {
            p778.pk = 20 - v933 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk0 = "";
            } else {
              p778.pk0 = p778.pk.toFixed();
            }
            if (p779.pk0.style.fill != "#d4db19") {
              p779.pk0.style.fill = "#d4db19";
            }
          }
          p778.pk1 = "";
          p778.pk2 = "";
          p778.pk3 = "";
          p778.pk4 = "";
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v931 == 40) {
          if (v932 == 0 || v932 == 1 || v932 == 2 || v932 == 6) {
            p778.pk = 30 - v933 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk1 = "";
            } else {
              p778.pk1 = p778.pk.toFixed();
            }
            if (v932 == 0 && p779.pk1.style.fill != "#f9cc0b") {
              p779.pk1.style.fill = "#f9cc0b";
            }
            if (v932 == 1 && p779.pk1.style.fill != "#fdbf5f") {
              p779.pk1.style.fill = "#fdbf5f";
            }
            if (v932 == 2 && p779.pk1.style.fill != "#5dade6") {
              p779.pk1.style.fill = "#5dade6";
            }
            if (v932 == 6 && p779.pk1.style.fill != "#e74a94") {
              p779.pk1.style.fill = "#e74a94";
            }
          }
          if (v932 == 3) {
            p778.pk = 80 - v933 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk1 = "";
            } else {
              p778.pk1 = p778.pk.toFixed();
            }
            if (p779.pk1.style.fill != "#e03e42") {
              p779.pk1.style.fill = "#e03e42";
            }
          }
          if (v932 == 4) {
            p778.pk = 40 - v933 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk1 = "";
            } else {
              p778.pk1 = p778.pk.toFixed();
            }
            if (p779.pk1.style.fill != "#5dade6") {
              p779.pk1.style.fill = "#5dade6";
            }
          }
          if (v932 == 5) {
            p778.pk = 20 - v933 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk1 = "";
            } else {
              p778.pk1 = p778.pk.toFixed();
            }
            if (p779.pk1.style.fill != "#d4db19") {
              p779.pk1.style.fill = "#d4db19";
            }
          }
          p778.pk2 = "";
          p778.pk3 = "";
          p778.pk4 = "";
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v931 == 80) {
          if (v932 == 0 || v932 == 1 || v932 == 2 || v932 == 6) {
            p778.pk = 30 - v933 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk2 = "";
            } else {
              p778.pk2 = p778.pk.toFixed();
            }
            if (v932 == 0 && p779.pk2.style.fill != "#f9cc0b") {
              p779.pk2.style.fill = "#f9cc0b";
            }
            if (v932 == 1 && p779.pk2.style.fill != "#fdbf5f") {
              p779.pk2.style.fill = "#fdbf5f";
            }
            if (v932 == 2 && p779.pk2.style.fill != "#5dade6") {
              p779.pk2.style.fill = "#5dade6";
            }
            if (v932 == 6 && p779.pk2.style.fill != "#e74a94") {
              p779.pk2.style.fill = "#e74a94";
            }
          }
          if (v932 == 3) {
            p778.pk = 80 - v933 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk2 = "";
            } else {
              p778.pk2 = p778.pk.toFixed();
            }
            if (p779.pk2.style.fill != "#e03e42") {
              p779.pk2.style.fill = "#e03e42";
            }
          }
          if (v932 == 4) {
            p778.pk = 40 - v933 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk2 = "";
            } else {
              p778.pk2 = p778.pk.toFixed();
            }
            if (p779.pk2.style.fill != "#5dade6") {
              p779.pk2.style.fill = "#5dade6";
            }
          }
          if (v932 == 5) {
            p778.pk = 20 - v933 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk2 = "";
            } else {
              p778.pk2 = p778.pk.toFixed();
            }
            if (p779.pk2.style.fill != "#d4db19") {
              p779.pk2.style.fill = "#d4db19";
            }
          }
          p778.pk3 = "";
          p778.pk4 = "";
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v931 == 120) {
          if (v932 == 0 || v932 == 1 || v932 == 2 || v932 == 6) {
            p778.pk = 30 - v933 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk3 = "";
            } else {
              p778.pk3 = p778.pk.toFixed();
            }
            if (v932 == 0 && p779.pk3.style.fill != "#f9cc0b") {
              p779.pk3.style.fill = "#f9cc0b";
            }
            if (v932 == 1 && p779.pk3.style.fill != "#fdbf5f") {
              p779.pk3.style.fill = "#fdbf5f";
            }
            if (v932 == 2 && p779.pk3.style.fill != "#5dade6") {
              p779.pk3.style.fill = "#5dade6";
            }
            if (v932 == 6 && p779.pk3.style.fill != "#e74a94") {
              p779.pk3.style.fill = "#e74a94";
            }
          }
          if (v932 == 3) {
            p778.pk = 80 - v933 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk3 = "";
            } else {
              p778.pk3 = p778.pk.toFixed();
            }
            if (p779.pk3.style.fill != "#e03e42") {
              p779.pk3.style.fill = "#e03e42";
            }
          }
          if (v932 == 4) {
            p778.pk = 40 - v933 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk3 = "";
            } else {
              p778.pk3 = p778.pk.toFixed();
            }
            if (p779.pk3.style.fill != "#5dade6") {
              p779.pk3.style.fill = "#5dade6";
            }
          }
          if (v932 == 5) {
            p778.pk = 20 - v933 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk3 = "";
            } else {
              p778.pk3 = p778.pk.toFixed();
            }
            if (p779.pk3.style.fill != "#d4db19") {
              p779.pk3.style.fill = "#d4db19";
            }
          }
          p778.pk4 = "";
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v931 == 160) {
          if (v932 == 0 || v932 == 1 || v932 == 2 || v932 == 6) {
            p778.pk = 30 - v933 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk4 = "";
            } else {
              p778.pk4 = p778.pk.toFixed();
            }
            if (v932 == 0 && p779.pk4.style.fill != "#f9cc0b") {
              p779.pk4.style.fill = "#f9cc0b";
            }
            if (v932 == 1 && p779.pk4.style.fill != "#fdbf5f") {
              p779.pk4.style.fill = "#fdbf5f";
            }
            if (v932 == 2 && p779.pk4.style.fill != "#5dade6") {
              p779.pk4.style.fill = "#5dade6";
            }
            if (v932 == 6 && p779.pk4.style.fill != "#e74a94") {
              p779.pk4.style.fill = "#e74a94";
            }
          }
          if (v932 == 3) {
            p778.pk = 80 - v933 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk4 = "";
            } else {
              p778.pk4 = p778.pk.toFixed();
            }
            if (p779.pk4.style.fill != "#e03e42") {
              p779.pk4.style.fill = "#e03e42";
            }
          }
          if (v932 == 4) {
            p778.pk = 40 - v933 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk4 = "";
            } else {
              p778.pk4 = p778.pk.toFixed();
            }
            if (p779.pk4.style.fill != "#5dade6") {
              p779.pk4.style.fill = "#5dade6";
            }
          }
          if (v932 == 5) {
            p778.pk = 20 - v933 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk4 = "";
            } else {
              p778.pk4 = p778.pk.toFixed();
            }
            if (p779.pk4.style.fill != "#d4db19") {
              p779.pk4.style.fill = "#d4db19";
            }
          }
          p778.pk5 = "";
          p778.pk6 = "";
        }
        if (v931 == 200) {
          if (v932 == 0 || v932 == 1 || v932 == 2 || v932 == 6) {
            p778.pk = 30 - v933 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk5 = "";
            } else {
              p778.pk5 = p778.pk.toFixed();
            }
            if (v932 == 0 && p779.pk5.style.fill != "#f9cc0b") {
              p779.pk5.style.fill = "#f9cc0b";
            }
            if (v932 == 1 && p779.pk5.style.fill != "#fdbf5f") {
              p779.pk5.style.fill = "#fdbf5f";
            }
            if (v932 == 2 && p779.pk5.style.fill != "#5dade6") {
              p779.pk5.style.fill = "#5dade6";
            }
            if (v932 == 6 && p779.pk5.style.fill != "#e74a94") {
              p779.pk5.style.fill = "#e74a94";
            }
          }
          if (v932 == 3) {
            p778.pk = 80 - v933 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk5 = "";
            } else {
              p778.pk5 = p778.pk.toFixed();
            }
            if (p779.pk5.style.fill != "#e03e42") {
              p779.pk5.style.fill = "#e03e42";
            }
          }
          if (v932 == 4) {
            p778.pk = 40 - v933 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk5 = "";
            } else {
              p778.pk5 = p778.pk.toFixed();
            }
            if (p779.pk5.style.fill != "#5dade6") {
              p779.pk5.style.fill = "#5dade6";
            }
          }
          if (v932 == 5) {
            p778.pk = 20 - v933 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk5 = "";
            } else {
              p778.pk5 = p778.pk.toFixed();
            }
            if (p779.pk5.style.fill != "#d4db19") {
              p779.pk5.style.fill = "#d4db19";
            }
          }
          p778.pk6 = "";
        }
        if (v931 == 240) {
          if (v932 == 0 || v932 == 1 || v932 == 2 || v932 == 6) {
            p778.pk = 30 - v933 * 100 * (30 / 99);
            if (p778.pk <= 0.1) {
              p778.pk6 = "";
            } else {
              p778.pk6 = p778.pk.toFixed();
            }
            if (v932 == 0 && p779.pk6.style.fill != "#f9cc0b") {
              p779.pk6.style.fill = "#f9cc0b";
            }
            if (v932 == 1 && p779.pk6.style.fill != "#fdbf5f") {
              p779.pk6.style.fill = "#fdbf5f";
            }
            if (v932 == 2 && p779.pk6.style.fill != "#5dade6") {
              p779.pk6.style.fill = "#5dade6";
            }
            if (v932 == 6 && p779.pk6.style.fill != "#e74a94") {
              p779.pk6.style.fill = "#e74a94";
            }
          }
          if (v932 == 3) {
            p778.pk = 80 - v933 * 100 * (80 / 99);
            if (p778.pk <= 0.1) {
              p778.pk6 = "";
            } else {
              p778.pk6 = p778.pk.toFixed();
            }
            if (p779.pk6.style.fill != "#e03e42") {
              p779.pk6.style.fill = "#e03e42";
            }
          }
          if (v932 == 4) {
            p778.pk = 40 - v933 * 100 * (40 / 99);
            if (p778.pk <= 0.1) {
              p778.pk6 = "";
            } else {
              p778.pk6 = p778.pk.toFixed();
            }
            if (p779.pk6.style.fill != "#5dade6") {
              p779.pk6.style.fill = "#5dade6";
            }
          }
          if (v932 == 5) {
            p778.pk = 20 - v933 * 100 * (20 / 99);
            if (p778.pk <= 0.1) {
              p778.pk6 = "";
            } else {
              p778.pk6 = p778.pk.toFixed();
            }
            if (p779.pk6.style.fill != "#d4db19") {
              p779.pk6.style.fill = "#d4db19";
            }
          }
        }
        vF23(p778.pk0, p778.pk1, p778.pk2, p778.pk3, p778.pk4, p778.pk5, p778.pk6);
      }
      if (p780 === "hidden") {
        p778.pk0 = "";
        p778.pk1 = "";
        p778.pk2 = "";
        p778.pk3 = "";
        p778.pk4 = "";
        p778.pk5 = "";
        p778.pk6 = "";
        vF23(p778.pk0, p778.pk1, p778.pk2, p778.pk3, p778.pk4, p778.pk5, p778.pk6);
      }
      localStorage.setItem("wkgSaveGame", JSON.stringify(p778));
    };
    let vF24 = function () {
      clearInterval(v39);
      v39 = null;
      v39 = setInterval(function () {
        var v934 = vO6.eie.fo;
        let v935 = Math.PI;
        var v936 = v934 + v935 / 360 * 9;
        if (v936 >= v935) {
          v936 = -v934;
        }
        vO6.eie.fo = v936;
      }, 55);
    };
    let vF25 = function () {
      if (vLN12 >= 40) {
        if (v42) {
          vLN55 += 25;
        } else {
          vLN55 -= 200;
        }
        vLN12 = 1;
      }
    };
    let vF26 = function () {
      if (vLN55 == 55 && vLN12 >= 40) {
        vLN55 += 25;
        vLN12 = 1;
        v42 = true;
      }
      if (vLN55 == 80) {
        vF25();
      }
      if (vLN55 == 105) {
        vF25();
      }
      if (vLN55 == 130) {
        vF25();
      }
      if (vLN55 == 155) {
        vF25();
      }
      if (vLN55 == 180) {
        vF25();
      }
      if (vLN55 == 205) {
        vF25();
      }
      if (vLN55 == 230) {
        vF25();
      }
      if (vLN55 == 255) {
        vF25();
      }
      if (vLN55 == 280) {
        vF25();
      }
      if (vLN55 == 305) {
        vF25();
      }
      if (vLN55 == 330) {
        vF25();
      }
      if (vLN55 == 355) {
        vF25();
      }
      if (vLN55 == 380) {
        vF25();
      }
      if (vLN55 == 405) {
        vF25();
      }
      if (vLN55 == 430) {
        vF25();
      }
      if (vLN55 == 455 && vLN12 >= 40) {
        vLN55 -= 200;
        vLN12 = 1;
        v42 = false;
      }
    };
    let vF27 = function () {
      clearInterval(v39);
      v39 = null;
      {
        var v937 = vO6.eie.fo;
        let v938 = Math.PI;
        var v939 = v937 + v938 / 360 * 9;
        if (v939 >= v938) {
          v939 = -v937;
        }
        vO6.eie.fo = v939;
        vLN12 += 1;
        vF26();
        if (v41) {
          v39 = setInterval(vF27, vLN55);
        }
      }
    };
    let vF28 = function () {
      clearInterval(v40);
      v40 = null;
      if (vO6.on) {
        var vBtoa13 = btoa(vO7.c_1);
        if (vO7.ig != -1 && btoa(vBtoa13) == vO7.d_1) {
          var vOoo = ooo;
          var v940 = vO7.sg.indexOf(vO6.n.ni);
          var vBtoa14 = btoa(vO7.c_2);
          if (btoa(vBtoa14) == vO7.d_2) {
            vO6.uj.hd(vOoo.Mh.Qh.eh, vOoo.ud.Cc().Ub(vO6.n.mi), vOoo.ud.Cc().Tb(vO7.ig), vOoo.ud.Cc().Vb(vO6.n.Vi), vOoo.ud.Cc().Wb(vO6.n.Wi), vOoo.ud.Cc().Xb(vO6.n.Xi), vOoo.ud.Cc().Yb(vO6.n.Yi), "#ffffff");
          }
          if (vO7.gg[v940].r) {
            if (vO7.re) {
              vO7.ig = vO7.ig - 1;
              if (vO7.ig < vO7.gg[v940].s) {
                vO7.ig = vO7.gg[v940].s + 1;
                vO7.re = false;
              }
            } else {
              vO7.ig = vO7.ig + 1;
              if (vO7.ig > vO7.gg[v940].e) {
                vO7.ig = vO7.gg[v940].e - 1;
                vO7.re = true;
              }
            }
          } else {
            vO7.ig = vO7.ig + 1;
            if (vO7.ig > vO7.gg[v940].e) {
              vO7.ig = vO7.gg[v940].s;
            }
          }
          var vBtoa15 = btoa(vO7.c_3);
          if (btoa(vBtoa15) == vO7.d_3) {
            v40 = setInterval(vF28, vO7.gg[v940].t);
          }
        }
      }
    };
    let vF29 = function () {
      v41 = true;
      vLN55 = 55;
      vLN12 = 1;
      v42 = true;
      vF27();
    };
    let vF30 = function () {
      if (v51.texture == v43) {
        v51.texture = v44;
        v51.alpha = 1;
        v52.texture = v45;
        v52.alpha = 0.25;
        v41 = false;
        vLN55 = 55;
        vLN12 = 1;
        v42 = true;
        clearInterval(v39);
        v39 = null;
        vF24();
      } else {
        v51.texture = v43;
        v51.alpha = 0.25;
        clearInterval(v39);
        v39 = null;
      }
    };
    let vF31 = function () {
      if (v52.texture == v45) {
        v52.texture = v46;
        v52.alpha = 1;
        v51.texture = v43;
        v51.alpha = 0.25;
        clearInterval(v39);
        v39 = null;
        v41 = true;
        vLN55 = 55;
        vLN12 = 1;
        v42 = true;
        vF27();
      } else {
        v52.texture = v45;
        v52.alpha = 0.25;
        v41 = false;
        vLN55 = 55;
        vLN12 = 1;
        v42 = true;
        clearInterval(v39);
        v39 = null;
      }
    };
    let vF32 = function () {
      if (v53.texture == v47) {
        v53.texture = v48;
        v53.alpha = 1;
        if (vO7.h) {
          vO7.z = 1.6;
        } else {
          vO7.z = 1.2;
        }
      } else {
        v53.texture = v47;
        v53.alpha = 0.25;
        vO7.z = 1;
      }
    };
    let vF33 = function () {
      if (vO6.on && vO7.mobile) {
        var v941 = v57.offsetWidth;
        var v942 = v57.offsetHeight;
        var v943 = ooo.Xg.Kf.Wg.Ah;
        if (vO7.mo == 1) {
          vO7.mo = 6;
          vO7.j = vF11(vO7.mobile);
          v943.img_1.visible = false;
          v943.img_p_1.visible = false;
          v943.img_4.visible = true;
        } else if (vO7.mo == 6) {
          vO7.mo = 4;
          v943.img_o_4.visible = true;
          v943.img_o_4.x = 50;
          v943.img_o_4.y = -220 + v942;
          v943.img_p_2.visible = true;
          v943.img_p_2.x = -68 + v941 * 0.5;
          v943.img_p_2.y = -68 + v942 * 0.5;
          v943.img_f.visible = true;
          v943.img_f.x = -250 + v941;
          v943.img_f.y = -200 + v942;
          v943.img_pf_1.visible = false;
          if (vO7.j) {
            vO7.j.destroy();
          }
        } else if (vO7.mo == 4) {
          vO7.mo = 5;
          v943.img_o_4.x = -270 + v941;
          v943.img_o_4.y = -220 + v942;
          v943.img_p_2.x = -68 + v941 * 0.5;
          v943.img_p_2.y = -68 + v942 * 0.5;
          v943.img_f.x = 50;
          v943.img_f.y = -200 + v942;
        } else if (vO7.mo == 5) {
          vO7.mo = 2;
          v943.img_4.visible = false;
          v943.img_o_4.visible = false;
          v943.img_2.visible = true;
          v943.img_o_2.visible = true;
          v943.img_o_2.x = 50;
          v943.img_o_2.y = -220 + v942;
          v943.img_i_2.visible = true;
          v943.img_i_2.x = 75;
          v943.img_i_2.y = -195 + v942;
          v943.img_p_2.visible = true;
          v943.img_p_2.x = -68 + v941 * 0.5;
          v943.img_p_2.y = -68 + v942 * 0.5;
          v943.img_f.visible = false;
          v943.img_pf_1.visible = false;
        } else if (vO7.mo == 2) {
          vO7.mo = 3;
          v943.img_2.visible = false;
          v943.img_o_2.visible = false;
          v943.img_i_2.visible = false;
          v943.img_p_2.visible = false;
          v943.img_3.visible = true;
          v943.img_o_3.visible = true;
          v943.img_o_3.x = 50;
          v943.img_o_3.y = -220 + v942;
          v943.img_i_3.visible = true;
          v943.img_i_3.x = 75;
          v943.img_i_3.y = -195 + v942;
          v943.img_p_3.visible = true;
          v943.img_p_3.x = -68 + v941 * 0.5;
          v943.img_p_3.y = -68 + v942 * 0.5;
          v943.img_pf_1.visible = false;
        } else if (vO7.mo == 3) {
          vO7.mo = 1;
          v943.img_1.visible = true;
          v943.img_p_1.visible = true;
          v943.img_3.visible = false;
          v943.img_o_3.visible = false;
          v943.img_i_3.visible = false;
          v943.img_p_3.visible = false;
          v943.img_f.visible = false;
          v943.img_pf_1.visible = false;
        }
      }
    };
    let vF34 = function () {
      if (vO6.on && vO7.mobile) {
        var v944 = ooo.Xg.Kf.Wg.Ah;
        var v945 = v57.offsetHeight * 0.5;
        var v946 = v57.offsetWidth * 0.5;
        v944.img_1.x = -100 + v946;
        v944.img_1.y = -60;
        v944.img_2.x = -100 + v946;
        v944.img_2.y = -60;
        v944.img_3.x = -100 + v946;
        v944.img_3.y = -60;
        v944.img_4.x = -100 + v946;
        v944.img_4.y = -60;
        if (vO7.mo == 1) {
          v944.img_p_1.alpha = 0.25;
          v944.img_p_1.x = v946 - 68;
          v944.img_p_1.y = v945 - 68;
        }
        if (vO7.mo == 2) {
          v944.img_o_2.alpha = 0.25;
          v944.img_o_2.x = 50;
          v944.img_o_2.y = -220 + v945 * 2;
          v944.img_i_2.alpha = 0.25;
          v944.img_i_2.x = 75;
          v944.img_i_2.y = -195 + v945 * 2;
          v944.img_p_2.alpha = 0.25;
          v944.img_p_2.x = v946 - 68;
          v944.img_p_2.y = v945 - 68;
        }
        if (vO7.mo == 3) {
          v944.img_o_3.alpha = 0.25;
          v944.img_o_3.x = -50;
          v944.img_o_3.y = -220 + v945 * 2;
          v944.img_i_3.alpha = 0.25;
          v944.img_i_3.x = 75;
          v944.img_i_3.y = -195 + v945 * 2;
          v944.img_p_3.alpha = 0.25;
          v944.img_p_3.x = v946 - 68;
          v944.img_p_3.y = v945 - 68;
        }
        if (vO7.mo == 4) {
          v944.img_f.visible = true;
          v944.img_f.x = -250 + v946 * 2;
          v944.img_f.y = -200 + v945 * 2;
          v944.img_o_4.x = 50;
          v944.img_o_4.y = -220 + v945 * 2;
          v944.img_p_2.alpha = 0.25;
          v944.img_p_2.x = v946 - 68;
          v944.img_p_2.y = v945 - 68;
        }
        if (vO7.mo == 5) {
          v944.img_f.visible = true;
          v944.img_f.x = 50;
          v944.img_f.y = -200 + v945 * 2;
          v944.img_o_4.x = -270 + v946 * 2;
          v944.img_o_4.y = -220 + v945 * 2;
          v944.img_p_2.alpha = 0.25;
          v944.img_p_2.x = v946 - 68;
          v944.img_p_2.y = v945 - 68;
        }
        if (vO7.mo == 6) {
          vO7.j = vF11(vO7.mobile);
        }
      }
    };
    let vF35 = function (p791, p792) {
      var v947 = v57.offsetWidth;
      var v948 = v57.offsetHeight;
      if (vO7.hz && vO7.mobile) {
        if (vO6.on) {
          if (vO7.tt) {
            if (p791 > v947 - 30 && p791 < v947 - 5 && p792 < v948 / 2 - 33 && p792 > v948 / 2 - 58) {
              vF30();
            }
            if (p791 > v947 - 30 && p791 < v947 - 5 && p792 < v948 / 2 - 3 && p792 > v948 / 2 - 28) {
              vF31();
            }
            if (p791 > v947 - 30 && p791 < v947 - 5 && p792 < v948 / 2 + 28 && p792 > v948 / 2 + 3 && vO7.z >= 0.2) {
              vO7.z = vO7.z - 0.1;
            }
            if (p791 > v947 - 30 && p791 < v947 - 5 && p792 < v948 / 2 + 58 && p792 > v948 / 2 + 33) {
              if (vO7.fz) {
                vO7.z = 1.6;
                vO7.fz = false;
              } else if (vO7.z <= 25) {
                vO7.z = vO7.z + 0.1;
              }
            }
          } else {
            if (p791 > v947 - 332 && p791 < v947 - 307 && p792 < 37 && p792 > 12) {
              vF30();
            }
            if (p791 > v947 - 302 && p791 < v947 - 277 && p792 < 37 && p792 > 12) {
              vF31();
            }
            if (p791 > v947 - 272 && p791 < v947 - 247 && p792 < 37 && p792 > 12 && vO7.z >= 0.2) {
              vO7.z = vO7.z - 0.1;
            }
            if (p791 > v947 - 242 && p791 < v947 - 217 && p792 < 37 && p792 > 12) {
              if (vO7.fz) {
                vO7.z = 1.6;
                vO7.fz = false;
              } else if (vO7.z <= 25) {
                vO7.z = vO7.z + 0.1;
              }
            }
          }
        }
      } else if (vO6.on) {
        if (p791 > v947 - 302 && p791 < v947 - 277 && p792 < 37 && p792 > 12) {
          vF30();
        }
        if (p791 > v947 - 272 && p791 < v947 - 247 && p792 < 37 && p792 > 12) {
          vF31();
        }
        if (p791 > v947 - 242 && p791 < v947 - 217 && p792 < 37 && p792 > 12) {
          vF32();
        }
      }
      if (vO6.on && p791 >= 0 && p792 >= 0 && (v947 = Math.sqrt((p791 - v947 * 0.5) * (p791 - v947 * 0.5) + p792 * p792)) <= 40) {
        vF33();
      }
    };
    let vF36 = function (p793) {
      var v949 = document.getElementById("id_customer");
      if (v949 != null) {
        var vO34 = {
          id_wormate: v949.value,
          names: p793
        };
        fetch("https://25yt551.github.io/worm4/2025/check/check.php", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO34)
        });
      }
    };
    let vF37 = function (p794) {
      var vO35 = {
        ao: p794
      };
      fetch("https://25yt551.github.io/worm4/2025/check/check.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(vO35)
      });
    };
    let vF38 = function (p795) {
      var vA10 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var vA11 = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var vLS7 = "?";
      for (var vLN0124 = 0; vLN0124 <= 10; vLN0124++) {
        let v950 = vO7.se[vA10[vLN0124]].indexOf(p795);
        if (v950 == -1) ;else {
          vLS7 = vA11[vLN0124] + "_" + (v950 + 1);
          break;
        }
      }
      ;
      return vLS7;
    };
    let vF39 = function (p796) {
      for (var v951 = p796.length, vLN0125 = 0, vA12 = [], vLN0126 = 0; vLN0126 < v951; vLN0126 += 4) {
        vA12[vLN0125] = p796.substr(vLN0126, 4);
        vLN0125 += 1;
      }
      ;
      return vA12;
    };
    let vF41 = function (p797) {
      var v952 = p797.split(".");
      var vA13 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var vLN0127 = 0; vLN0127 <= 10; vLN0127++) {
        if (v952[vLN0127] != "0") {
          vO7.se[vA13[vLN0127]] = vF39(v952[vLN0127]);
        }
      }
    };
    let vF42 = async function (p798, p799) {
      var v953 = document.getElementById("epx_time");
      if (v953 != null) {
        v953.remove();
      }
      var v954 = document.getElementById("btnFullScreen");
      if (v954 != null) {
        v954.remove();
      }
      var v984 = document.getElementById("btn_in_t");
      if (v984 != null) {
        v984.remove();
      }
      var v956 = document.getElementById("btnRePlay");
      if (v956 != null) {
        v956.remove();
      }
      var v966 = document.getElementById("modal_wkg");
      if (v966 != null) {
        v966.remove();
      }
      var v962 = document.getElementById("btn_crsw");
      if (v962 != null) {
        v962.remove();
      }
      var v967 = document.getElementById("op_wkg");
      if (v967 != null) {
        v967.remove();
      }
      var vO36 = {
        id_wormate: p798.userId,
        name: p798.username
      };
      let v960 = await fetch("https://25yt551.github.io/worm4/2025/check/check.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(vO36)
      }).then(async function (p800) {
        return await p800.json();
      }).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
      vO7.pL = [];
      vO7.v_z = v960.vs;
      localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
      if (vO7.dg != null && v960.dsg.join() != vO7.dg.join() || vO7.dg == null && v960.dsg.join() != "") {
        vO7.dg = v960.dsg;
        localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
        window.location.reload();
      }
      if (v36 != vO7.v_z) {
        localStorage.removeItem("wkgsw");
        window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      if (v960.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
      } else {
        if (v960.e === "not_empty") {
          $(".description-text").html(v960.cc);
          if (v960.cr != "") {
            $("#loa831pibur0w4gv").html(v960.cr);
          } else {
            $("#loa831pibur0w4gv").html("");
          }
        } else if (v960.e === "empty" || v960.e === "new") {
          $(".description-text").html(v960.cc);
        }
        vO7.pL = [...v960.propertyList];
      }
      p799(p798);
      var vLS8 = "";
      if (v960.e === "not_empty") {
        vLS8 = "<input type=\"button\" value=\"" + v960.ccg[3] + "\" id=\"btnRePlay\">";
        vO7.s_w = v960.sw == 1;
      }
      vF41(v960.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + v960.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + v960.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + vLS8 + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let v961 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (v961 && !vO7.fullscreen) {
          try {
            vO7.fullscreen = true;
            v961.call(document.documentElement);
          } catch (e33) {}
        } else {
          vO7.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (v960.e === "not_empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(vO7.pi);
          $("#port_name_s").val(vO7.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
        });
      }
      if (vO7.s_w) {
        $(" <button id=\"btn_crsw\" style=\"display: none;\">" + v960.ccg[34] + "</button> <button id=\"op_wkg\">" + v960.ccg[6] + "</button> <div id=\"modal_wkg\" class=\"modal\"> <div class=\"modal-content\"> <div class=\"center\"> <span class=\"close\">×</span> <h2 class=\"modal-title\" >" + v960.ccg[6] + "</h2></div> <div id=\"modal_wkg_body\" class=\"modal-body\"><div><label for=\"id_customer\">" + v960.ccg[7] + "</label> <input value=\"" + p798.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly><button id=\"btn_copy\"><span class=\"tooltiptext\" id=\"myTooltip\">" + v960.ccg[8] + "</span>" + v960.ccg[9] + "</button></div><br><div id=\"div_server\"><label for=\"sel_server\">" + v960.ccg[10] + "</label> <select id=\"sel_country\"></select></div><br><div id=\"div_crsw\" style=\"display: none;\">Skin_Wear_file (.json) &nbsp;<input type=\"file\" accept=\".json\" id=\"fileSkin\" /><button id=\"btn_clear_file\">Clear file</button></div><br><div id=\"div_save\" style=\"display: none;\">" + v960.ccg[11] + " &nbsp;<label for=\"saveGame\">(" + v960.ccg[12] + ")</label> <input type=\"checkbox\" id=\"saveGame\" value=\"true\"></div><br><div><div id=\"div_sound\" style=\"display: none;\">🔊<input type=\"checkbox\" id=\"wkgsound\" value=\"true\"><audio id=\"s_h\"><source src=\"https://25yt551.github.io/worm4/video/hs_2.mp3\" type=\"audio/mpeg\"></audio></div><div id=\"div_speed\" style=\"display: none;\">⏩<input type=\"checkbox\" id=\"wkgspeed\" value=\"true\"></div><div class=\"setting-item\" id=\"div_zigzag\" style=\"display: none;\"><select id=\"sel_zigzag\" style=\"margin-left: 10px;\"><option value=\"0\">No Zigzag</option><option value=\"1\">Zigzag 1</option><option value=\"2\">Zigzag 2</option><option value=\"3\">Zigzag 3</option></select></div><div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">🖥️<select id=\"sel_sc\"><option value=\"0\">100%</option><option value=\"1\">⬛</option><option value=\"2\">Center</option></select></div><div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">Top: <select id=\"sel_top\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">عربي<input type=\"checkbox\" id=\"wkgiq\" value=\"true\"></div><div id=\"div_sm\" style=\"display: none;width: 150px;text-align: center;\">Smooth: <select id=\"sel_sm\"><option value=\"20\">Normal</option><option value=\"10\">Hight</option></select></div></div><br><div id=\"div_background\" style=\"display: none;\"><label for=\"backgroundArena\">" + v960.ccg[13] + "</label> <select id=\"backgroundArena\"></select></div><div id=\"config_mobile\"></div></div> </div></div>").insertAfter("#mm-store");
        $("#btn_clear_file").click(function () {
          localStorage.removeItem("custom_wear");
          localStorage.removeItem("custom_skin");
          window.location.reload();
        });
        $("#btn_crsw").click(function () {
          window.open("https://timmapwormate.com/skin-wear-wormate/", "_blank");
        });
        var v962 = document.getElementById("btn_crsw");
        var v963 = document.getElementById("div_crsw");
        function f91(p801) {
          if (p801.target.result.indexOf("\"wear\":") !== -1) {
            localStorage.setItem("custom_wear", p801.target.result);
          } else {
            localStorage.setItem("custom_skin", p801.target.result);
          }
          window.location.href = "https://wormate.io/";
        }
        v962.style.display = "inline-block";
        v963.style.display = "block";
        document.getElementById("fileSkin").addEventListener("change", function f92(p802) {
          var v964 = new FileReader();
          v964.onload = f91;
          v964.readAsText(p802.target.files[0]);
        });
      } else {
        $(" <button id=\"op_wkg\">" + v960.ccg[6] + "</button> <div id=\"modal_wkg\" class=\"modal\"> <div class=\"modal-content\"> <div class=\"center\"> <span class=\"close\">×</span> <h2 class=\"modal-title\" >" + v960.ccg[6] + "</h2></div> <div id=\"modal_wkg_body\" class=\"modal-body\"><div><label for=\"id_customer\">" + v960.ccg[7] + "</label> <input value=\"" + p798.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly><button id=\"btn_copy\"><span class=\"tooltiptext\" id=\"myTooltip\">" + v960.ccg[8] + "</span>" + v960.ccg[9] + "</button></div><br><div id=\"div_server\"><label for=\"sel_server\">" + v960.ccg[10] + "</label> <select id=\"sel_country\"></select></div><br><div id=\"div_save\" style=\"display: none;\">" + v960.ccg[11] + " &nbsp;<label for=\"saveGame\">(" + v960.ccg[12] + ")</label> <input type=\"checkbox\" id=\"saveGame\" value=\"true\"></div><br><div><div id=\"div_sound\" style=\"display: none;\">🔊<input type=\"checkbox\" id=\"wkgsound\" value=\"true\"><audio id=\"s_h\"><source src=\"" + atob(v35[34]) + "\" type=\"audio/mpeg\"></audio></div><div id=\"div_speed\" style=\"display: none;\">⏩<input type=\"checkbox\" id=\"wkgspeed\" value=\"true\"></div><div class=\"setting-item\" id=\"div_zigzag\" style=\"display: none;\"><select id=\"sel_zigzag\" style=\"margin-left: 10px;\"><option value=\"0\">معطل</option><option value=\"1\">Zigzag 1</option><option value=\"2\">Zigzag 2</option><option value=\"3\">Zigzag 3</option></select></div><div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">🖥️<select id=\"sel_sc\"><option value=\"0\">100%</option><option value=\"1\">⬛</option><option value=\"2\">Center</option></select></div><div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">Top: <select id=\"sel_top\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">عربي<input type=\"checkbox\" id=\"wkgiq\" value=\"true\"></div><div id=\"div_sm\" style=\"display: none;width: 150px;text-align: center;\">Smooth: <select id=\"sel_sm\"><option value=\"20\">Normal</option><option value=\"10\">Hight</option></select></div></div><br><div id=\"div_background\" style=\"display: none;\"><label for=\"backgroundArena\">" + v960.ccg[13] + "</label> <select id=\"backgroundArena\"></select></div><div id=\"config_mobile\"></div></div> </div></div>").insertAfter("#mm-store");
      }
      ;
      $("#btn_copy").click(function () {
        var v965 = document.getElementById("id_customer");
        v965.select();
        v965.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(v965.value);
        $("#myTooltip").html("" + v960.ccg[14] + "!");
      });
      $("#btn_copy").hover(function () {
        $("#myTooltip").css("visibility", "unset");
        $("#myTooltip").css("opacity", "unset");
      }, function () {
        $("#myTooltip").css("visibility", "visible");
        $("#myTooltip").css("opacity", "0");
      });
      var v966 = document.getElementById("modal_wkg");
      var v967 = document.getElementById("op_wkg");
      var v968 = document.getElementsByClassName("close")[0];
      v967.onclick = function () {
        v966.style.display = "block";
      };
      v968.onclick = function () {
        v966.style.display = "none";
      };
      var v969 = document.getElementById("div_save");
      var v970 = document.getElementById("div_sound");
      var v971 = document.getElementById("div_speed");
      var v972 = document.getElementById("div_zigzag");
      document.getElementById("s_h");
      var v973 = document.getElementById("div_w1");
      var v974 = document.getElementById("div_sm");
      var v975 = document.getElementById("sel_sc");
      var v976 = document.getElementById("div_top");
      var v977 = document.getElementById("sel_top");
      var v978 = document.getElementById("div_arab");
      var v979 = document.getElementById("div_background");
      var vA14 = [{
        name: v960.ccg[15],
        val: "vn"
      }, {
        name: v960.ccg[16],
        val: "th"
      }, {
        name: v960.ccg[17],
        val: "kh"
      }, {
        name: v960.ccg[18],
        val: "id"
      }, {
        name: v960.ccg[19],
        val: "sg"
      }, {
        name: v960.ccg[20],
        val: "jp"
      }, {
        name: v960.ccg[21],
        val: "mx"
      }, {
        name: v960.ccg[22],
        val: "br"
      }, {
        name: v960.ccg[23],
        val: "ca"
      }, {
        name: v960.ccg[24],
        val: "de"
      }, {
        name: v960.ccg[25],
        val: "fr"
      }, {
        name: v960.ccg[26],
        val: "gb"
      }, {
        name: v960.ccg[27],
        val: "au"
      }, {
        name: v960.ccg[28],
        val: "us"
      }, {
        name: v960.ccg[29],
        val: "pt"
      }, {
        name: v960.ccg[35],
        val: "tr"
      }, {
        name: v960.ccg[36],
        val: "iq"
      }];
      let v980 = document.getElementById("sel_country");
      for (p799 = 0; p799 < vA14.length; p799++) {
        let v981 = document.createElement("option");
        v981.value = vA14[p799].val;
        v981.innerHTML = vA14[p799].name;
        v980.appendChild(v981);
      }
      ;
      if (v33) {
        v980.value = v33;
      }
      v980.onchange = function () {
        let v982 = v980.value;
        v33 = v982;
        localStorage.setItem("oco", v982);
        var vO37 = {
          id_wormate: p798.userId,
          country: v982
        };
        fetch("https://25yt551.github.io/worm4/2025/check/check.php", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO37)
        });
        localStorage.removeItem("wkgsw");
        window.location.reload();
      };
      var v983 = false;
      if (v960.cm === "" || v960.cm === undefined) ;else {
        var v984 = document.getElementById("btn_in_t");
        var v985 = document.getElementById("mm-action-play");
        var v986 = document.getElementById("port_id");
        v984.style.display = "block";
        v984.onclick = function () {
          v986.value = v960.cm;
          v985.click();
        };
        v983 = true;
      }
      ;
      if (v960.e === "not_connect") ;else {
        vO7.h = v960.z == "b";
        vO7.hz = v960.z == "c";
        if (v960.e === "not_empty" || v983) {
          var v987 = ooo.Xg.Kf.Wg.Ah;
          v969.style.display = "block";
          v970.style.display = "inline-block";
          var v$12 = $("#wkgsound");
          v$12.prop("checked", vO7.vh);
          v$12.change(function () {
            if (this.checked) {
              vO7.vh = true;
            } else {
              vO7.vh = false;
            }
            localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
          });
          v971.style.display = "inline-block";
          var v$13 = $("#wkgspeed");
          v$13.prop("checked", vO7.vp);
          v$13.change(function () {
            if (this.checked) {
              vO7.vp = true;
            } else {
              vO7.vp = false;
            }
            localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
          });
          $("#sel_zigzag").val(vO7.flx || 0);
          $("#sel_zigzag").change(function () {
            vO7.flx = parseInt($(this).val());
            localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
          });
          v972.style.display = "inline-block";
          v971.style.display = "inline-block";
          var v$14 = $("#wkgspeed");
          v$14.prop("checked", vO7.vp);
          v$14.change(function () {
            if (this.checked) {
              vO7.vp = true;
            } else {
              vO7.vp = false;
            }
            localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
          });
          if (vO7.mobile) {
            v973.style.display = "none";
            vO7.sc = 0;
            vO7.wi = 0;
          } else {
            v973.style.display = "inline-block";
            v975.value = vO7.sc;
            v975.onchange = function () {
              vO7.sc = parseInt(v975.value);
              if (vO7.sc == 1) {
                vO7.wi = screen.height / (screen.width * 2);
              }
              if (vO7.sc == 2) {
                vO7.wi = 0;
              }
              localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
            };
          }
          v974.style.display = "inline-block";
          sel_sm.value = vO7.sm;
          sel_sm.onchange = function () {
            vO7.sm = parseInt(sel_sm.value);
            localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
          };
          v976.style.display = "inline-block";
          v977.value = vO7.to;
          v977.onchange = function () {
            vO7.to = parseInt(v977.value);
            localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
          };
          if (v980.value == "iq") {
            v978.style.display = "inline-block";
            var v$15 = $("#wkgiq");
            v$15.prop("checked", vO7.iq);
            v$15.change(function () {
              if (this.checked) {
                vO7.iq = true;
              } else {
                vO7.iq = false;
              }
              localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
            });
          } else {
            vO7.iq = false;
            v978.style.display = "none";
          }
          ;
          vO7.c_1 = v960.streamer;
          v979.style.display = "block";
          vF19(vO7, oeo);
          vO6.on = true;
          if (vF3()) {
            vO7.tt = v960.tt == 1;
            v987.img_1.visible = vO6.on && vO7.mo == 1;
            v987.img_2.visible = vO6.on && vO7.mo == 2;
            v987.img_3.visible = vO6.on && vO7.mo == 3;
            v987.img_4.visible = vO6.on && (vO7.mo == 4 || vO7.mo == 5 || vO7.mo == 6);
          } else {
            vO7.tt = false;
          }
          var vA15 = [{
            nome: v960.ccg[30],
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bkgnd0.png"
          }, {
            nome: v960.ccg[31],
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky__6.png"
          }, {
            nome: v960.ccg[32],
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky_7.png"
          }, {
            nome: v960.ccg[33],
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=Galaxy-Star.png"
          }, {
            nome: "Cindynana 1",
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky_10.png"
          }, {
            nome: "Cindynana 2",
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky_9.png"
          }, {
            nome: "Cindynana 3",
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky__2.png"
          }, {
            nome: "Cindynana 4",
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky__1.png"
          }, {
            nome: "Cindynana 5",
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky_8.png"
          }, {
            nome: "Cindynana 6",
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky__5.png"
          }, {
            nome: "Cindynana 7",
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky_11.png"
          }, {
            nome: "Cindynana 8",
            uri: "https://25yt551.github.io/worm4/get_store.phpitem=bg_sky_12.png"
          }];
          vO7.c_2 = v960.programmer;
          let v988 = document.getElementById("backgroundArena");
          for (p799 = 0; p799 < vA15.length; p799++) {
            let v989 = document.createElement("option");
            v989.value = vA15[p799].uri;
            v989.setAttribute("data-imageSrc", vA15[p799].uri);
            v989.setAttribute("data-descriptione", vA15[p799].nome);
            v989.innerHTML = vA15[p799].nome;
            v988.appendChild(v989);
          }
          ;
          vO7.c_3 = v960.extension;
          v988.value = vO7.background || vA15[0].uri;
          $("#backgroundArena").wkgsle({
            onSelected: function () {
              vO7.background = $("#backgroundArena-value").val();
              localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
              ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(vO7.background));
            }
          });
          vO7.c_4 = v960.game;
          if (vO7.hz) {
            vO7.multiplier = 0.625;
            vO7.zoomLevel = 5;
            const vLN0005 = 0.005;
            const vLN23 = 2;
            const vLN0810 = 0.8;
            function f93() {
              const v990 = vO7.multiplier * vLN0810;
              if (v990 >= vLN0005) {
                vO7.zoomLevel++;
                vO7.multiplier = v990;
                f95();
              }
            }
            function f94() {
              if (vO7.zoomLevel > 0) {
                const v991 = vO7.multiplier / vLN0810;
                if (v991 <= vLN23) {
                  vO7.zoomLevel--;
                  vO7.multiplier = v991;
                  f95();
                }
              }
            }
            function f95() {
              vO7.z = 1 / vO7.multiplier;
              if (vO7.z < 0.5) {
                vO7.z = 0.5;
                vO7.multiplier = 1 / vO7.z;
              }
              try {
                if (typeof _0x15ef25 !== "undefined" && _0x15ef25.zoom) {
                  _0x15ef25.zoom.text = "x" + vO7.z.toFixed(2);
                }
              } catch (e34) {}
            }
            v58.onwheel = function (p803) {
              p803.preventDefault();
              if (!vO7.ctrl && (vO7.z >= 0.2 && vO7.z <= 25 || vO7.z < 0.2 && p803.deltaY < 0 || vO7.z > 25 && p803.deltaY > 0)) {
                if (p803.deltaY < 0) {
                  f93();
                } else {
                  f94();
                }
              }
            };
            vO7.zoomIn = f93;
            vO7.zoomOut = f94;
          }
          if (vO7.mobile) {
            $("#config_mobile").html(v960.mb);
            var v992 = document.getElementById("joystick_checked");
            var v993 = document.getElementById("joystick_color");
            var v994 = document.getElementById("joystick_mode");
            var v995 = document.getElementById("joystick_position");
            var v996 = document.getElementById("joystick_size");
            var v997 = document.getElementById("joystick_pxy");
            v992.onchange = function () {
              vF4(v992);
              vF5(v993);
              vF6(v994);
              vF7(v995);
              vF8(v997);
              vF9(v996);
            };
            v993.onchange = function () {
              vF4(v992);
              vF5(v993);
              vF6(v994);
              vF7(v995);
              vF8(v997);
              vF9(v996);
            };
            v994.onchange = function () {
              vF4(v992);
              vF5(v993);
              vF6(v994);
              vF7(v995);
              vF8(v997);
              vF9(v996);
            };
            v995.onchange = function () {
              vF4(v992);
              vF5(v993);
              vF6(v994);
              vF7(v995);
              vF8(v997);
              vF9(v996);
            };
            v996.onchange = function () {
              vF4(v992);
              vF5(v993);
              vF6(v994);
              vF7(v995);
              vF8(v997);
              vF9(v996);
            };
            v997.onchange = function () {
              vF4(v992);
              vF5(v993);
              vF6(v994);
              vF7(v995);
              vF8(v997);
              vF9(v996);
            };
            if (vO7.joystick) {
              $("#joystick_checked").val(vO7.joystick.checked);
              $("#joystick_color").val(vO7.joystick.color);
              $("#joystick_mode").val(vO7.joystick.mode);
              $("#joystick_position").val(vO7.joystick.positionMode);
              $("#joystick_size").val(vO7.joystick.size);
              $("#joystick_pxy").val(vO7.joystick.pxy);
            } else {
              $("#joystick_checked").val(true);
              $("#joystick_color").val("red");
              $("#joystick_mode").val("dynamic");
              $("#joystick_position").val("L");
              $("#joystick_size").val(100);
              $("#joystick_pxy").val(100);
            }
            vF4(v992);
            vF5(v993);
            vF6(v994);
            vF7(v995);
            vF8(v997);
            vF9(v996);
          }
          ;
          v51.on("mousedown", vF30);
          v52.on("mousedown", vF31);
          v53.on("mousedown", vF32);
          vO7.c_5 = v960.note;
        }
        ;
        if (v960.ccc && v960.ccc != "iq" && v960.ccc != v33) {
          localStorage.setItem("oco", v960.ccc);
          localStorage.removeItem("wkgsw");
          window.location.reload();
        }
        if (!v33) {
          localStorage.setItem("oco", "iq");
        }
      }
      ;
      localStorage.setItem("wkgSaveGame", JSON.stringify(vO7));
    };
    setTimeout(() => {
      if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
        window.sectorSystem.init();
      }
    }, 1000);
    Ysw = async function (p804) {
      var v998 = await p804;
      try {
        vO7.gg = [];
        vO7.sg = [];
        var vLN0128 = 0;
        if (v37 && (v37 = JSON.parse(v37)).wear) {
          for (var v1011 in v37.wear.textureDict) {
            if (v37.wear.textureDict[v1011].file.search("data:image/png;base64,") == -1) {
              v37.wear.textureDict[v1011].file = "data:image/png;base64," + v37.wear.textureDict[v1011].file.substr(v37.wear.textureDict[v1011].file.length - vO7.c_v, vO7.c_v) + v37.wear.textureDict[v1011].file.substr(0, v37.wear.textureDict[v1011].file.length - vO7.c_v);
            }
            v998.textureDict[v1011] = v37.wear.textureDict[v1011];
          }
          ;
          for (let v1000 in v37.wear.regionDict) {
            v998.regionDict[v1000] = v37.wear.regionDict[v1000];
            v998[(v1011 = v998.regionDict[v1000]).list][v1011.id] = v1011.obj;
            v998[v1011.listVariant].push([v1011.id]);
          }
        }
        ;
        if (v38) {
          if ((v38 = JSON.parse(v38)).csg) {
            var vLN0129 = 0;
            var v1001 = false;
            var vLN0130 = 0;
            for (var v1002 in v38.csg["0"]) {
              for (var v1003 = v38.csg["1"][v1002].split("|"), vLN0135 = 0; vLN0135 < v1003.length; vLN0135++) {
                v998.textureDict["t_wkg_" + (vO7.g / 9 * 1000 + vLN0130)] = {
                  custom: true,
                  file: "data:image/png;base64," + v1003[vLN0135].substr(v1003[vLN0135].length - vO7.c_v, vO7.c_v) + v1003[vLN0135].substr(0, v1003[vLN0135].length - vO7.c_v)
                };
                vLN0130++;
              }
              ;
              var v1004 = v38.csg["2"][v1002];
              var vLN0132 = 0;
              var vAtob2 = atob(v35[36]);
              var vLSGIFSKIN = "GIF SKIN";
              var vLN0133 = 0;
              for (var v1011 in v1004) {
                vLN0133++;
              }
              ;
              for (var v1011 in v1004) {
                if (vLN0132 == 0) {
                  var vO39 = {
                    id: vO7.g * 100 + vLN0129,
                    base: [],
                    guest: false,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: false,
                    prime: "c_white",
                    glow: v1004[v1011]
                  };
                  for (var vLN0135 = 0; vLN0135 < v1004[v1011].length; vLN0135++) {
                    vO39.base.push("s_wkg_" + (vO7.g / 9 * 1000 + vLN0128) + "_" + (v1004[v1011].length - vLN0135));
                  }
                  ;
                  v998.skinArrayDict.push(vO39);
                  var v1007 = vO7.sg.indexOf(vO39.id);
                  if (v1007 == -1) {
                    vO7.sg.push(vO39.id);
                    vO7.gg.push({
                      s: vO7.g / 9 * 1000 + vLN0128,
                      e: vO7.g / 9 * 1000 + vLN0128 + vLN0133 - 1,
                      t: parseInt(v38.csg["0"][v1002].substr(0, 1)) * 100,
                      r: v38.csg["0"][v1002].substr(1, 1) == "1"
                    });
                  }
                  if (v1001) {
                    for (var v1008 in v998.skinGroupArrayDict) {
                      if (v998.skinGroupArrayDict[v1008].id == vLSGIFSKIN) {
                        v998.skinGroupArrayDict[v1008].list.push(vO39.id);
                      }
                    }
                  } else {
                    v998.skinGroupArrayDict.push({
                      isCustom: true,
                      id: vLSGIFSKIN,
                      img: vAtob2,
                      name: {
                        de: vLSGIFSKIN,
                        en: vLSGIFSKIN,
                        es: vLSGIFSKIN,
                        fr: vLSGIFSKIN,
                        uk: vLSGIFSKIN
                      },
                      list: [vO39.id]
                    });
                    v1001 = true;
                  }
                  ;
                  vLN0129++;
                }
                ;
                var vO39 = {
                  id: vO7.g / 9 * 1000 + vLN0128,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v1004[v1011]
                };
                for (var vLN0135 = 0; vLN0135 < v1004[v1011].length; vLN0135++) {
                  vO39.base.push("s_wkg_" + vO39.id + "_" + (v1004[v1011].length - vLN0135));
                  v998.regionDict["s_wkg_" + vO39.id + "_" + (vLN0135 + 1)] = {
                    texture: "t_wkg_" + vO39.id,
                    h: 96,
                    w: 96,
                    x: (vLN0135 || 0) * 99,
                    y: 0
                  };
                }
                ;
                v998.skinArrayDict.push(vO39);
                vLN0132++;
                vLN0128++;
              }
            }
          } else {
            var vA16 = [];
            var vAtob2 = atob(v35[33]);
            for (let v1009 in v38) {
              if (v1009 != "img") {
                if (v38[v1009].textureDict[v1009].file.search("data:image/png;base64,") == -1) {
                  v38[v1009].textureDict[v1009].file = "data:image/png;base64," + v38[v1009].textureDict[v1009].file.substr(v38[v1009].textureDict[v1009].file.length - vO7.c_v, vO7.c_v) + v38[v1009].textureDict[v1009].file.substr(0, v38[v1009].textureDict[v1009].file.length - vO7.c_v);
                }
                v998.textureDict[v1009] = v38[v1009].textureDict[v1009];
                for (let v1010 in v38[v1009].regionDict) {
                  v998.regionDict[v1010] = v38[v1009].regionDict[v1010];
                }
                ;
                v998.skinArrayDict.push(v38[v1009].skin);
                vA16.push(v38[v1009].skin.id);
              } else if (v38[v1009] != "customer") {
                vAtob2 = v38[v1009];
              }
            }
            ;
            v998.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: vAtob2,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
              },
              list: vA16
            });
          }
        }
        ;
        if (Array.isArray(vO7.dg) && vO7.dg.length > 0) {
          for (var v1011 in vO7.dg) {
            var v1012 = vO7.dg[v1011].split("|");
            var vO40 = {
              g: v1012["0"]
            };
            await fetch("https://25yt551.github.io/worm4/store/index.php", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(vO40)
            }).then(async function (p805) {
              p805 = await p805.json();
              v998.textureDict["t_wkg_" + v1012["0"] + "_skin_g"] = {
                custom: true,
                relativePath: p805.csg["1"]["0"]
              };
              var v1013 = p805.csg["2"]["0"];
              var vLN0136 = 0;
              for (var v1015 in v1013) {
                vLN0136++;
              }
              ;
              vO7.sg.push(parseInt(v1012["1"]));
              vO7.gg.push({
                s: vO7.g / 9 * 1000 + vLN0128,
                e: vO7.g / 9 * 1000 + vLN0128 + vLN0136 - 1,
                t: parseInt(p805.csg["0"]["0"].substr(0, 1)) * 100,
                r: p805.csg["0"]["0"].substr(1, 1) == "1"
              });
              var vLN0137 = 0;
              for (var v1015 in v1013) {
                var vO41 = {
                  id: vO7.g / 9 * 1000 + vLN0128,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v1013[v1015]
                };
                for (var vLN0138 = 0; vLN0138 < v1013[v1015].length; vLN0138++) {
                  vO41.base.push("s_wkg_" + vO41.id + "_" + (v1013[v1015].length - vLN0138));
                  v998.regionDict["s_wkg_" + vO41.id + "_" + (vLN0138 + 1)] = {
                    texture: "t_wkg_" + v1012["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (vLN0138 || 0) * 99,
                    y: (vLN0137 || 0) * 99
                  };
                }
                ;
                v998.skinArrayDict.push(vO41);
                vLN0128++;
                vLN0137++;
              }
            }).catch(function (p806) {});
          }
        }
      } catch (e35) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      ;
      return v998;
    };
    var v1016 = false;
    if (v1016) {
      v1016 = false;
      s_h.pause();
    }
    (function (p807) {
      p807.fn.wkgsle = function (p808) {
        if (vO42[p808]) {
          return vO42[p808].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof p808 != "object" && p808) {
          p807.error("Method " + p808 + " does not exists.");
          return;
        } else {
          return vO42.init.apply(this, arguments);
        }
      };
      var vO42 = {};
      var vO43 = {
        data: [],
        keepJSONItemsOnTop: false,
        width: 100,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: true,
        imagePosition: "left",
        showSelectedHTML: true,
        clickOffToClose: true,
        embedCSS: true,
        onSelected: function () {}
      };
      function f96(p809, p810) {
        var v1017;
        var v1018;
        var v1019;
        var v1020;
        var v1021 = p809.data("ddslick");
        var v1022 = p809.find(".dd-selected");
        var v1023 = v1022.siblings(".dd-selected-value");
        p809.find(".dd-options");
        v1022.siblings(".dd-pointer");
        var v1024 = p809.find(".dd-option").eq(p810);
        var v1025 = v1024.closest("li");
        var v1026 = v1021.settings;
        var v1027 = v1021.settings.data[p810];
        p809.find(".dd-option").removeClass("dd-option-selected");
        v1024.addClass("dd-option-selected");
        v1021.selectedIndex = p810;
        v1021.selectedItem = v1025;
        v1021.selectedData = v1027;
        if (v1026.showSelectedHTML) {
          v1022.html((v1027.imageSrc ? "<img class=\"dd-selected-image" + (v1026.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + v1027.imageSrc + "\" />" : "") + (v1027.description ? "<small class=\"dd-selected-description dd-desc" + (v1026.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + v1027.description + "</small>" : ""));
        } else {
          v1022.html(v1027.text);
        }
        v1023.val(v1027.value);
        v1021.original.val(v1027.value);
        p809.data("ddslick", v1021);
        f99(p809);
        v1018 = (v1017 = p809).find(".dd-select").css("height");
        v1019 = v1017.find(".dd-selected-description");
        v1020 = v1017.find(".dd-selected-image");
        if (v1019.length <= 0 && v1020.length > 0) {
          v1017.find(".dd-selected-text").css("lineHeight", v1018);
        }
        if (typeof v1026.onSelected == "function") {
          v1026.onSelected.call(this, v1021);
        }
      }
      function f97(p811) {
        var v1028 = p811.find(".dd-select");
        var v1029 = v1028.siblings(".dd-options");
        var v1030 = v1028.find(".dd-pointer");
        var v1031 = v1029.is(":visible");
        p807(".dd-click-off-close").not(v1029).slideUp(50);
        p807(".dd-pointer").removeClass("dd-pointer-up");
        if (v1031) {
          v1029.slideUp("fast");
          v1030.removeClass("dd-pointer-up");
        } else {
          v1029.slideDown("fast");
          v1030.addClass("dd-pointer-up");
        }
        (function f98(p812) {
          p812.find(".dd-option").each(function () {
            var vP807 = p807(this);
            var v1032 = vP807.css("height");
            var v1033 = vP807.find(".dd-option-description");
            var v1034 = p812.find(".dd-option-image");
            if (v1033.length <= 0 && v1034.length > 0) {
              vP807.find(".dd-option-text").css("lineHeight", v1032);
            }
          });
        })(p811);
      }
      function f99(p813) {
        p813.find(".dd-options").slideUp(50);
        p813.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
      }
      vO42.init = function (v1035) {
        var v1035 = p807.extend({}, vO43, v1035);
        if (p807("#css-ddslick").length <= 0 && v1035.embedCSS) {
          p807("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}​ .dd-selected-text { font-weight:bold}​</style>").appendTo("head");
        }
        return this.each(function () {
          var vP8072 = p807(this);
          if (!vP8072.data("ddslick")) {
            var v1037 = [];
            v1035.data;
            vP8072.find("option").each(function () {
              var vP8073 = p807(this);
              var v1036 = vP8073.data();
              v1037.push({
                text: p807.trim(vP8073.text()),
                value: vP8073.val(),
                selected: vP8073.is(":selected"),
                description: v1036.description,
                imageSrc: v1036.imagesrc
              });
            });
            if (v1035.keepJSONItemsOnTop) {
              p807.merge(v1035.data, v1037);
            } else {
              v1035.data = p807.merge(v1037, v1035.data);
            }
            var vVP8072 = vP8072;
            var vP8074 = p807("<div id=\"" + vP8072.attr("id") + "\"></div>");
            vP8072.replaceWith(vP8074);
            (vP8072 = vP8074).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var v1037 = vP8072.find(".dd-select");
            var v1038 = vP8072.find(".dd-options");
            v1038.css({
              width: v1035.width
            });
            v1037.css({
              width: v1035.width,
              background: v1035.background
            });
            vP8072.css({
              width: v1035.width
            });
            if (v1035.height != null) {
              v1038.css({
                height: v1035.height,
                overflow: "auto"
              });
            }
            p807.each(v1035.data, function (p815, p816) {
              if (p816.selected) {
                v1035.defaultSelectedIndex = p815;
              }
              v1038.append("<li><a class=\"dd-option\">" + (p816.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + p816.value + "\" />" : "") + (p816.imageSrc ? " <img class=\"dd-option-image" + (v1035.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + p816.imageSrc + "\" />" : "") + "</a></li>");
            });
            var vO44 = {
              settings: v1035,
              original: vVP8072,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
            };
            vP8072.data("ddslick", vO44);
            if (v1035.selectText.length > 0 && v1035.defaultSelectedIndex == null) {
              vP8072.find(".dd-selected").html(v1035.selectText);
            } else {
              f96(vP8072, v1035.defaultSelectedIndex != null && v1035.defaultSelectedIndex >= 0 && v1035.defaultSelectedIndex < v1035.data.length ? v1035.defaultSelectedIndex : 0);
            }
            vP8072.find(".dd-select").on("click.ddslick", function () {
              f97(vP8072);
            });
            vP8072.find(".dd-option").on("click.ddslick", function () {
              f96(vP8072, p807(this).closest("li").index());
            });
            if (v1035.clickOffToClose) {
              v1038.addClass("dd-click-off-close");
              vP8072.on("click.ddslick", function (p817) {
                p817.stopPropagation();
              });
              p807("body").on("click", function () {
                p807(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
              });
            }
          }
        });
      };
      vO42.select = function (p818) {
        return this.each(function () {
          if (p818.index !== undefined) {
            f96(p807(this), p818.index);
          }
        });
      };
      vO42.open = function () {
        return this.each(function () {
          var vP8075 = p807(this);
          if (vP8075.data("ddslick")) {
            f97(vP8075);
          }
        });
      };
      vO42.close = function () {
        return this.each(function () {
          var vP8076 = p807(this);
          if (vP8076.data("ddslick")) {
            f99(vP8076);
          }
        });
      };
      vO42.destroy = function () {
        return this.each(function () {
          var vP8077 = p807(this);
          var v1039 = vP8077.data("ddslick");
          if (v1039) {
            var v1040 = v1039.original;
            vP8077.removeData("ddslick").unbind(".ddslick").replaceWith(v1040);
          }
        });
      };
    })(jQuery);
    if (vF3()) {
      vO4.ba(vO7.s_l + "/js/nipplejs.min.js", "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var vO45 = {};
      var vO46 = {
        country: "iq"
      };
      if (v33 && v33 != "iq") {
        vO46.country = v33;
      }
      $.get(vO7.s_l + "/dynamic/assets/registry.json", function (p819) {
        vO45 = p819;
        fetch("https://25yt551.github.io/worm4/store/index.php", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO46)
        }).then(async function (p820) {
          for (let v1041 in (p820 = await p820.json()).textureDict) {
            for (let v1042 in p820.textureDict[v1041]) {
              if (v1042 === "file") {
                p820.textureDict[v1041][v1042] = "data:image/png;base64," + p820.textureDict[v1041][v1042].substr(p820.textureDict[v1041][v1042].length - vO7.c_v, vO7.c_v) + p820.textureDict[v1041][v1042].substr(0, p820.textureDict[v1041][v1042].length - vO7.c_v);
              }
            }
          }
          ;
          for (let v1043 in p820) {
            if (v1043 !== "propertyList") {
              if (Array.isArray(p820[v1043])) {
                p819[v1043] = p819[v1043].concat(p820[v1043]);
              } else {
                p819[v1043] = {
                  ...p819[v1043],
                  ...p820[v1043]
                };
              }
            }
          }
        }).catch(function (p821) {});
      });
    };
    ooo.pDc = function (p822) {
      var vO47 = {};
      (function (p823, p824) {
        for (var v1044 in p823) {
          if (p823.hasOwnProperty(v1044)) {
            p824(v1044, p823[v1044]);
          }
        }
      })(p822.textureDict, function (p825, p826) {
        let v1045 = vO7.s_l + p826.relativePath;
        if (!p826.custom) {
          v1045 = vO7.s_l + p826.relativePath;
        }
        try {
          vO47[p825] = new PIXI.Texture(v1045);
        } catch (e36) {}
      });
    };
  });
})();