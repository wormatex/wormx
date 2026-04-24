$(".mm-merchant").replaceWith("");
      $(".description-text").replaceWith(
        '\n        <div id=\"title\">WORMX</div>         <div class="description-text-test">\n            <ul style="margin-top: 5px;" class="ui-tabs-nav">\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active" style="margin: -5px">\n                <a> <span class="flag br" value="https://i.imgur.com/dixYLjk.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive1" style="margin: -5px">\n                <a> <span class="flag mx" value="https://i.imgur.com/JMAvuFN.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive2" style="margin: -5px">\n                <a> <span class="flag us" value="https://i.imgur.com/Jb2FF0y.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive3" style="margin: -5px">\n                <a> <span class="flag ca" value="https://i.imgur.com/m1skEsB.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive4" style="margin: -5px">\n                <a> <span class="flag de" value="https://i.imgur.com/VgCH8iy.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive5" style="margin: -5px">\n                <a> <span class="flag fr" value="https://i.imgur.com/QuEjBr0.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive6" style="margin: -5px">\n                <a> <span class="flag sg" value="https://i.imgur.com/ErLcgXP.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive7" style="margin: -5px">\n                <a> <span class="flag jp" value="https://i.imgur.com/P2rYk1k.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive8" style="margin: -5px">\n                <a> <span class="flag au" value="https://i.imgur.com/12e0wp4.png"></span> </a>\n              </li>\n              <li class="ui-tabs-tab ui-tab ui-tab-inactive9" style="margin: -5px">\n                <a> <span class="flag gb" value="https://i.imgur.com/8pQY6RW.png"></span> </a>\n              </li>\n            </ul>\n            <div class="bao-list2">\n              <div class="gachngang"></div>\n              <div class="servers-container">\n                <div class="servers-peru"></div>\n                <div class="servers-mexico" style="display: none;"></div>\n                <div class="servers-eeuu" style="display: none;"></div>\n                <div class="servers-canada" style="display: none;"></div>\n                <div class="servers-germania" style="display: none;"></div>\n                <div class="servers-francia" style="display: none;"></div>\n                <div class="servers-singapur" style="display: none;"></div>\n                <div class="servers-japon" style="display: none;"></div>\n                <div class="servers-australia" style="display: none;"></div>\n                <div class="servers-granbretana" style="display: none;"></div>\n              </div>\n                <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>\n            </div>\n          </div>\n        </div>\n      '
      );
      $(".ui-tab").on("click", account);
      $(".flag").click(function () {
        let v696 = $(this).attr("value");
        theoKzObjects.flag = v696;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(v696);
      });
      for (a = 0; a < servers.Api_listServer.length; a++) {
        var v697 = servers.Api_listServer[a].serverUrl;
        var v698 = servers.Api_listServer[a].name;
        var v699 = servers.Api_listServer[a].region;
        let v700 = document.createElement("p");
        v700.value = v697;
        v700.innerHTML = v698;
        if (v699 == "peru") {
          $(".servers-peru").prepend(v700);
        } else if (v699 == "mexico") {
          $(".servers-mexico").prepend(v700);
        } else if (v699 == "eeuu") {
          $(".servers-eeuu").prepend(v700);
        } else if (v699 == "canada") {
          $(".servers-canada").prepend(v700);
        } else if (v699 == "germania") {
          $(".servers-germania").prepend(v700);
        } else if (v699 == "francia") {
          $(".servers-francia").prepend(v700);
        } else if (v699 == "singapur") {
          $(".servers-singapur").prepend(v700);
        } else if (v699 == "japon") {
          $(".servers-japon").prepend(v700);
        } else if (v699 == "australia") {
          $(".servers-australia").prepend(v700);
        } else if (v699 == "granbretana") {
          $(".servers-granbretana").prepend(v700);
        }
        $(v700).attr("id", v699);
        $(v700).attr("class", "selectSala");
        $(v700).attr("value", v698);
        $(v700).click(function () {
        let t = $(this).find("#svhiep .valu").text().trim();
                    ctx.setServer(t);
                    let e = $(this).val();
                    ctx.containerImgS.texture = ctx.onclickServer,
                    retundFlagError(),
                    window.server_url = e,
                    $("#mm-action-play").click(),
                    $("#adbl-continue").click()
        });
      }
    }