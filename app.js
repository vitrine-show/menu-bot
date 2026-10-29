/* Cardápio — Esquina do Espeto. Edite aqui nomes, preços e descrições. */
window.MENU = [
  { id: "espetinhos", nome: "Espetinhos", icone: "🍢", chamada: "Na brasa, do jeito certo", grupos: [{ itens: [
    ["Camarão", 16], ["Picanha", 30], ["Contra Filé", 14], ["Medalhão de Queijo", 12], ["Porco", 12],
    ["Linguiça Caseira", 12], ["Tulipa", 12], ["Coxinha da Asa", 12], ["Romeu e Julieta", 14], ["Kafta", 12],
    ["Almôndega Recheada", 12], ["Medalhão de Frango", 12], ["Coração", 12], ["Coração com Bacon", 12],
    ["Mussarela", 12], ["Pão de Alho", 8]
  ]}]},
  { id: "porcoes", nome: "Porções", icone: "🍖", chamada: "Pra dividir com a mesa", grupos: [{ itens: [
    ["Picanha na Chapa 400gr", 89.9], ["Picanha 400gr na Mandioca 400gr", 119.9], ["Picanha 400gr com Fritas 400g", 119.9],
    ["Contra Filé 400gr", 69.9], ["Contra Filé 400gr com Fritas 400gr", 89.9], ["Filé de Tilápia 400gr", 49.9],
    ["Filé de Tilápia 400gr com Fritas 400gr", 64.9], ["Fígado Acebolado 250gr", 19.9], ["Fígado Acebolado 500gr", 29.9],
    ["Fritas 500gr", 25], ["Mandioquinha Crocante 300gr", 15.9], ["Mandioquinha Crocante 300gr com Torresmo 300gr", 19.9],
    ["Anel de Cebola 10 unid.", 12.9], ["Torresmo 300gr", 15.9], ["Macarrão na Chapa 500gr", 28],
    ["Porção de Arroz com Alho", 15.9], ["Acréscimo de Bacon e Queijo", 9.9], ["Purê de Batata 300gr", 8], ["Vinagrete 300gr", 8]
  ]}]},
  { id: "hamburguer", nome: "Hambúrguer", icone: "🍔", chamada: "Artesanal, feito na brasa", grupos: [{ itens: [
    ["Hambúrguer Artesanal feito na Brasa", 25, "Pão com gergelim, 120gr de carne bovina feita na brasa, bacon, muçarela, cebola, tomate e alface."]
  ]}]},
  { id: "jantinha", nome: "Jantinha", icone: "🍛", chamada: "Prato feito caprichado", grupos: [
    { itens: [
      ["Jantinha com 1 Espeto", 30, "Arroz branco com alho frito, purê de batata, farofa da casa e um espetinho de sua preferência. Opções de espeto no cardápio. Observação: exceto boi, picanha e camarão."],
      ["Jantinha com 2 Espetos", 35, "Arroz branco com alho frito, purê de batata, farofa da casa e dois espetinhos de sua preferência. Opções de espeto no cardápio. Observação: exceto boi, picanha e camarão."],
      ["Jantinha com 2 Espetos de Boi", 38, "Arroz branco com alho frito, purê de batata, farofa da casa e dois espetinhos de sua preferência. Opções de espeto no cardápio. Observação: exceto picanha e camarão."]
    ]},
    { id: "strogonoff", titulo: "Strogonoff", itens: [
      ["Strogonoff de Carne Completo 500gr", 29.9, "Suculenta iscas de carne envolvidas por molho de strogonoff cremoso, arroz branco com alho frito e batata palha. Obs: Não possui champignon"],
      ["Strogonoff de Frango Completo 500gr", 29.9, "Suculentas iscas de frango envolvidos por um molho de strogonoff cremoso, arroz branco com alho frito, e batata palha. Obs: Não possui champignon"]
    ]}
  ]},
  { id: "natural", nome: "Natural", icone: "🥥", chamada: "Água de coco e sucos", grupos: [{ itens: [
    ["Água de Coco", 9],
    { nome: "Suco de Frutas", desc: "Consulte as opções disponíveis", variacoes: [["Copo 330ml", 12], ["Jarra 1L", 25]] }
  ]}]},
  { id: "bebidas", nome: "Bebidas", icone: "🥤", chamada: "Refri, água e energético", grupos: [{ itens: [
    ["Coca-Cola KS", 7], ["Sprite KS", 7], ["Fanta KS", 7], ["Coca-Cola Lata 350ml", 8], ["Guaraná Lata 350ml", 7],
    ["Fanta Lata 350ml", 7], ["Sprite Lata 350ml", 7], ["Coca-Cola 220ml", 5], ["Fanta 220ml", 5], ["Guarapan 220ml", 5],
    ["Coca-Cola 1L", 10], ["Guaraná 1L", 9], ["Coca-Cola 2L", 17], ["Guaraná 2L", 13], ["Guaraná Zero 2L", 13],
    ["Fanta 2L", 12], ["Limoneto", 8], ["Suco Lata 290ml", 7], ["Suco Caixa 1L", 13], ["Água Mineral", 4],
    ["Água com Gás", 5], ["Red Bull 250ml", 13], ["Monster 473ml", 14]
  ]}]},
  { id: "cervejas", nome: "Cervejas", icone: "🍺", chamada: "Garrafa, latão e long neck", grupos: [
    { id: "garrafa", titulo: "Garrafa 600ml", itens: [
      ["Heineken 600ml", 16], ["Corona 600ml", 19], ["Stella Pure Gold 600ml", 19], ["Original 600ml", 14],
      ["Spaten 600ml", 14], ["Brahma 600ml", 12], ["Eisenbahn 600ml", 12]
    ]},
    { id: "latao", titulo: "Latão", itens: [
      ["Heineken Latão", 12], ["Original Latão", 8], ["Brahma Latão", 8], ["Skol Latão", 7], ["Kaiser Latão", 6]
    ]},
    { id: "longneck", titulo: "Long Neck", itens: [
      ["Corona Long Neck", 12], ["Heineken Long Neck", 12], ["Stella Pure Gold Long Neck", 12], ["Skol Beats Long Neck", 12],
      ["Heineken Zero Long Neck", 12], ["Budweiser Zero Long Neck", 9], ["Syn Lemon Ice Long Neck", 8], ["Smirnoff Ice Long Neck", 12]
    ]}
  ]},
  { id: "drinks", nome: "Drinks", icone: "🍹", chamada: "Caipirinha, copão e cia.", grupos: [{ itens: [
    ["Caipirinha", 16], ["Copão 1 Dose", 25], ["Copão 2 Doses", 30], ["Mascate", 16], ["Bang Bang", 15]
  ]}]},
  { id: "doses", nome: "Doses", icone: "🥃", chamada: "Cachaça, whisky, gin e mais", grupos: [{ itens: [
    ["Cachaça", 6], ["Para Tudo", 5], ["Gin Tanqueray", 18], ["Gin Gordon's", 15], ["Whisky Buchanan", 20],
    ["Whisky Old Parr 12 Anos", 18], ["Whisky Jack Daniels", 18], ["Whisky Red Label", 16],
    ["Campari com Laranja ou Limão", 15], ["Conhaque Dreher", 6], ["Conhaque Presidente", 6],
    ["Licor 43 Tradicional", 16], ["Tequila", 15]
  ]}]}
];
window.WHATSAPP = "5531996202280";

(function () {
  "use strict";
  var MENU = window.MENU || [];
  var PHONE = window.WHATSAPP || "5531996202280";
  var STORE_KEY = "esquina-do-espeto:pedido:v1";
  var $ = function (s) { return document.querySelector(s); };

  /* ---------- Dados normalizados ---------- */
  var PRODUCTS = {}; // key -> {nome, preco, cat}
  MENU.forEach(function (cat) {
    cat.total = 0;
    cat.grupos.forEach(function (g, gi) {
      g.itens = g.itens.map(function (raw, ii) {
        var it = Array.isArray(raw) ? { nome: raw[0], preco: raw[1], desc: raw[2] || "" } : raw;
        it.key = cat.id + "-" + gi + "-" + ii;
        if (it.variacoes) {
          it.variacoes = it.variacoes.map(function (v, vi) {
            var vv = { nome: v[0], preco: v[1], key: it.key + "-v" + vi };
            PRODUCTS[vv.key] = { nome: it.nome + " (" + vv.nome + ")", preco: vv.preco, cat: cat.nome };
            return vv;
          });
        } else {
          PRODUCTS[it.key] = { nome: it.nome, preco: it.preco, cat: cat.nome };
        }
        cat.total++;
        return it;
      });
    });
  });

  var brl = function (n) {
    return "R$ " + n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- Carrinho ---------- */
  var cart = { itens: {}, ordem: [], nome: "", obs: "" };
  try {
    var saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (saved && saved.itens) {
      cart = saved;
      cart.ordem = (cart.ordem || []).filter(function (k) { return PRODUCTS[k] && cart.itens[k] > 0; });
      Object.keys(cart.itens).forEach(function (k) { if (!PRODUCTS[k]) delete cart.itens[k]; });
    }
  } catch (e) { /* sem localStorage */ }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(cart)); } catch (e) {} }
  function qty(k) { return cart.itens[k] || 0; }
  function setQty(k, n) {
    n = Math.max(0, Math.min(99, n));
    if (n === 0) {
      delete cart.itens[k];
      cart.ordem = cart.ordem.filter(function (x) { return x !== k; });
    } else {
      if (!cart.itens[k]) cart.ordem.push(k);
      cart.itens[k] = n;
    }
    save();
    refresh();
  }
  function totals() {
    var q = 0, t = 0;
    cart.ordem.forEach(function (k) { q += cart.itens[k]; t += cart.itens[k] * PRODUCTS[k].preco; });
    return { q: q, t: Math.round(t * 100) / 100 };
  }

  /* ---------- Controles ---------- */
  function control(k, label) {
    var n = qty(k);
    if (!n) {
      return '<button class="btn-add" data-act="add" data-key="' + k + '" aria-label="Adicionar ' + esc(label) + '">+ Adicionar</button>';
    }
    return '<div class="stepper" role="group" aria-label="Quantidade de ' + esc(label) + '">' +
      '<button class="minus" data-act="dec" data-key="' + k + '" aria-label="Remover um">−</button>' +
      "<output>" + n + "</output>" +
      '<button data-act="inc" data-key="' + k + '" aria-label="Adicionar mais um">+</button></div>';
  }

  /* ---------- Home ---------- */
  function renderHome() {
    var html = "";
    MENU.forEach(function (c, i) {
      html += '<li><a class="cat-card' + (i % 3 === 1 ? " alt" : "") + '" href="#/' + c.id + '">' +
        '<span class="ce" aria-hidden="true">' + c.icone + "</span>" +
        "<span><strong>" + esc(c.nome) + "</strong><small>" + esc(c.chamada) + "</small></span>" +
        '<span class="cnt">' + c.total + (c.total === 1 ? " item" : " itens") + "</span></a></li>";
      if (c.id === "jantinha") {
        html += '<li><a class="cat-card alt" href="#/jantinha/strogonoff">' +
          '<span class="ce" aria-hidden="true">🥘</span>' +
          "<span><strong>Strogonoff</strong><small>Carne ou frango, completo</small></span>" +
          '<span class="cnt">2 itens · em Jantinha</span></a></li>';
      }
    });
    $("#catGrid").innerHTML = html;

    var d = "";
    MENU.forEach(function (c) {
      d += '<li><a href="#/' + c.id + '" data-cat="' + c.id + '"><span class="de" aria-hidden="true">' + c.icone + "</span>" + esc(c.nome) + "</a></li>";
      c.grupos.forEach(function (g) {
        if (g.id && c.id === "jantinha") d += '<li class="sub"><a href="#/' + c.id + "/" + g.id + '">↳ ' + esc(g.titulo) + "</a></li>";
      });
    });
    $("#drawerList").innerHTML = d;
  }

  /* ---------- Categoria ---------- */
  function renderCat(cat) {
    $("#catEmoji").textContent = cat.icone;
    $("#catTitle").textContent = cat.nome;
    $("#catSub").textContent = cat.chamada;
    $("#topTitle").textContent = cat.nome;

    var subs = cat.grupos.filter(function (g) { return g.id; });
    var chips = $("#chips");
    if (subs.length) {
      var ch = "";
      if (!cat.grupos[0].id) ch += '<a href="#/' + cat.id + '">' + esc(cat.nome) + "</a>";
      subs.forEach(function (g) { ch += '<a href="#/' + cat.id + "/" + g.id + '">' + esc(g.titulo) + "</a>"; });
      chips.innerHTML = ch;
      chips.hidden = false;
    } else { chips.hidden = true; chips.innerHTML = ""; }

    var html = "";
    cat.grupos.forEach(function (g) {
      if (g.titulo) html += '<h2 class="grp-title" id="sub-' + g.id + '">' + esc(g.titulo) + "</h2>";
      else if (subs.length) html += '<div id="sub-top"></div>';
      html += '<ul class="items">';
      g.itens.forEach(function (it) {
        if (it.variacoes) {
          var anyIn = it.variacoes.some(function (v) { return qty(v.key); });
          html += '<li class="item' + (anyIn ? " in" : "") + '" data-item="' + it.key + '"><div class="item-top"><div>' +
            "<h3>" + esc(it.nome) + "</h3>" + (it.desc ? '<p class="note">' + esc(it.desc) + "</p>" : "") + "</div></div>";
          it.variacoes.forEach(function (v) {
            html += '<div class="var"><div class="var-info"><b>' + esc(v.nome) + "</b><span>" + brl(v.preco) + "</span></div>" +
              '<div data-ctl="' + v.key + '">' + control(v.key, it.nome + " " + v.nome) + "</div></div>";
          });
          html += "</li>";
        } else {
          html += '<li class="item' + (qty(it.key) ? " in" : "") + '" data-item="' + it.key + '"><div class="item-top"><div>' +
            "<h3>" + esc(it.nome) + "</h3>" + (it.desc ? '<p class="desc">' + esc(it.desc) + "</p>" : "") + "</div>" +
            '<span class="price">' + brl(it.preco) + "</span></div>" +
            '<div class="item-actions" data-ctl="' + it.key + '">' + control(it.key, it.nome) + "</div></li>";
        }
      });
      html += "</ul>";
    });
    $("#catBody").innerHTML = html;

    var idx = MENU.indexOf(cat);
    var nx = "";
    if (idx > 0) nx += '<a class="light" href="#/' + MENU[idx - 1].id + '">← ' + esc(MENU[idx - 1].nome) + "</a>";
    if (idx < MENU.length - 1) nx += '<a href="#/' + MENU[idx + 1].id + '">' + esc(MENU[idx + 1].nome) + " →</a>";
    $("#catNext").innerHTML = nx;

    document.querySelectorAll("#drawerList a[data-cat]").forEach(function (a) {
      if (a.getAttribute("data-cat") === cat.id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* ---------- Rotas ---------- */
  var currentCat = null;
  function route() {
    var parts = (location.hash || "#/").replace(/^#\/?/, "").split("/");
    var cat = MENU.filter(function (c) { return c.id === parts[0]; })[0];
    closeMenu();
    if (!cat) {
      currentCat = null;
      $("#viewHome").hidden = false; $("#viewCat").hidden = true; $("#topbar").hidden = true;
      document.title = "Esquina do Espeto — Churrasco & Cerveja | Cardápio";
      window.scrollTo(0, 0);
    } else {
      var changed = currentCat !== cat;
      currentCat = cat;
      $("#viewHome").hidden = true; $("#viewCat").hidden = false; $("#topbar").hidden = false;
      if (changed) renderCat(cat);
      document.title = cat.nome + " | Esquina do Espeto";
      var target = parts[1] ? document.getElementById("sub-" + parts[1]) : null;
      if (target) requestAnimationFrame(function () { target.scrollIntoView({ block: "start" }); });
      else window.scrollTo(0, 0);
    }
    refresh();
  }

  /* ---------- Menu ≡ ---------- */
  var lastFocus = null;
  function openMenu() {
    lastFocus = document.activeElement;
    $("#drawer").classList.add("open");
    $("#drawer").setAttribute("aria-hidden", "false");
    $("#scrim").hidden = false;
    $("#btnMenu").setAttribute("aria-expanded", "true");
    setTimeout(function () { $("#btnCloseMenu").focus(); }, 50);
  }
  function closeMenu() {
    if (!$("#drawer").classList.contains("open")) return;
    $("#drawer").classList.remove("open");
    $("#drawer").setAttribute("aria-hidden", "true");
    $("#scrim").hidden = true;
    $("#btnMenu").setAttribute("aria-expanded", "false");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------- Revisão ---------- */
  function buildMessage() {
    var t = totals();
    var lines = ["*Pedido — Esquina do Espeto* 🍢", ""];
    if (cart.nome && cart.nome.trim()) lines.push("*Cliente:* " + cart.nome.trim(), "");
    var byCat = {};
    var cats = [];
    cart.ordem.forEach(function (k) {
      var p = PRODUCTS[k];
      if (!byCat[p.cat]) { byCat[p.cat] = []; cats.push(p.cat); }
      byCat[p.cat].push(k);
    });
    MENU.forEach(function (c) {
      if (!byCat[c.nome]) return;
      lines.push("*" + c.nome + "*");
      byCat[c.nome].forEach(function (k) {
        var p = PRODUCTS[k], n = cart.itens[k];
        lines.push("• " + n + "x " + p.nome + " — " + brl(n * p.preco) + (n > 1 ? " (" + brl(p.preco) + " cada)" : ""));
      });
      lines.push("");
    });
    lines.push("*Itens:* " + t.q);
    lines.push("*Total: " + brl(t.t) + "*");
    if (cart.obs && cart.obs.trim()) lines.push("", "*Observações:* " + cart.obs.trim());
    return lines.join("\n");
  }
  function waUrl() { return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(buildMessage()); }

  function renderReview() {
    var t = totals();
    var html = "";
    cart.ordem.forEach(function (k) {
      var p = PRODUCTS[k], n = cart.itens[k];
      html += '<li><div class="r-name">' + esc(p.nome) + "<small>" + brl(p.preco) + " cada · " + esc(p.cat) + "</small></div>" +
        '<div class="r-sub">' + brl(n * p.preco) + "</div>" +
        '<div class="r-row">' + control(k, p.nome) + "</div></li>";
    });
    $("#reviewList").innerHTML = html;
    $("#reviewEmpty").hidden = t.q > 0;
    $("#fields").hidden = t.q === 0;
    $("#sheetTotal").textContent = brl(t.t);
    var send = $("#btnSend");
    if (t.q) { send.href = waUrl(); send.removeAttribute("aria-disabled"); }
    else { send.href = "#"; send.setAttribute("aria-disabled", "true"); }
    $("#btnClear").hidden = t.q === 0;
  }
  function openSheet() {
    $("#nome").value = cart.nome || "";
    $("#obs").value = cart.obs || "";
    renderReview();
    $("#sheet").hidden = false;
    document.body.classList.add("lock");
    setTimeout(function () { $("#btnCloseSheet").focus(); }, 50);
  }
  function closeSheet() {
    $("#sheet").hidden = true;
    document.body.classList.remove("lock");
  }

  /* ---------- Atualização geral ---------- */
  var lastQ = null;
  function refresh() {
    var t = totals();
    document.querySelectorAll("[data-ctl]").forEach(function (el) {
      var k = el.getAttribute("data-ctl");
      el.innerHTML = control(k, PRODUCTS[k].nome);
    });
    document.querySelectorAll("[data-item]").forEach(function (li) {
      var on = Array.prototype.some.call(li.querySelectorAll("[data-ctl]"), function (c) { return qty(c.getAttribute("data-ctl")); });
      li.classList.toggle("in", on);
    });
    var bar = $("#cartbar");
    bar.hidden = t.q === 0;
    $("#cbQty").textContent = t.q;
    $("#cbTotal").textContent = brl(t.t);
    $("#btnCartBar").setAttribute("aria-label", "Ver pedido: " + t.q + " itens, total " + brl(t.t));
    var b = $("#badgeTop");
    b.hidden = t.q === 0; b.textContent = t.q;
    if (lastQ !== null && t.q > lastQ) { bar.classList.remove("pulse"); void bar.offsetWidth; bar.classList.add("pulse"); }
    lastQ = t.q;
    if (!$("#sheet").hidden) renderReview();
  }

  var toastTimer;
  function toast(msg) {
    var el = $("#toast");
    el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 1600);
  }

  /* ---------- Eventos ---------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-act]");
    if (!btn) return;
    var k = btn.getAttribute("data-key");
    var act = btn.getAttribute("data-act");
    var inSheet = !!btn.closest(".sheet");
    if (act === "add") { setQty(k, 1); toast("Adicionado: " + PRODUCTS[k].nome); }
    else if (act === "inc") setQty(k, qty(k) + 1);
    else if (act === "dec") setQty(k, qty(k) - 1);
    // mantém o foco no controle recriado
    var sel = '[data-ctl="' + k + '"]';
    var holder = inSheet ? document.querySelector(".sheet " + sel) || document.querySelector(".sheet [data-key=\"" + k + "\"]") : document.querySelector("#catBody " + sel);
    if (holder) {
      var f = holder.querySelector('[data-act="' + (act === "add" ? "inc" : act) + '"]') || holder.querySelector("[data-act]");
      if (f) f.focus();
    }
  });
  $("#btnMenu").addEventListener("click", openMenu);
  $("#btnCloseMenu").addEventListener("click", closeMenu);
  $("#scrim").addEventListener("click", closeMenu);
  $("#drawer").addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
  $("#btnCartTop").addEventListener("click", openSheet);
  $("#btnCartBar").addEventListener("click", openSheet);
  $("#btnCloseSheet").addEventListener("click", closeSheet);
  $("#sheet").addEventListener("click", function (e) { if (e.target === this) closeSheet(); });
  $("#nome").addEventListener("input", function () { cart.nome = this.value; save(); $("#btnSend").href = waUrl(); });
  $("#obs").addEventListener("input", function () { cart.obs = this.value; save(); $("#btnSend").href = waUrl(); });
  $("#btnSend").addEventListener("click", function () {
    if (!totals().q) return;
    this.href = waUrl();
  });
  $("#btnClear").addEventListener("click", function () {
    if (!window.confirm("Limpar todos os itens do pedido?")) return;
    cart = { itens: {}, ordem: [], nome: cart.nome, obs: "" };
    save(); $("#obs").value = ""; refresh(); renderReview();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!$("#sheet").hidden) closeSheet(); else closeMenu();
  });
  window.addEventListener("hashchange", route);

  renderHome();
  route();
})();
