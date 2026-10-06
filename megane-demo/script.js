(function () {
  "use strict";

  var asset = function (p) { return (window.ASSET_MAP && window.ASSET_MAP[p]) || p; };
  var yen = function (v) { return "￥" + v + "<small>(税込)</small>"; };

  var ranking = [
    { img: "rank1", brand: "nosefree", name: "nosefree NOF-214", price: "24,200", rate: 5.0, count: 5 },
    { img: "rank2", brand: "FREE FiT", name: "FREE FIT FFT-069", price: "16,500", rate: 5.0, count: 10 },
    { img: "rank3", brand: "FREE FiT", name: "FREE FIT　FFT-105", price: "16,500", rate: 5.0, count: 4 },
    { img: "rank4", brand: "FREE FiT", name: "FREE FIT FFT-066", price: "16,500", rate: 4.4, count: 12 }
  ];

  var newArrivals = [
    { img: "new1", brand: "POLICE", name: "POLICE VPLL90J", price: "19,800" },
    { img: "new2", brand: "達", name: "TATI TAT-M116", price: "17,600" },
    { img: "new3", brand: "達", name: "TATI TAT-M117", price: "17,600" },
    { img: "new4", brand: "POLICE", name: "POLICE VPLL59J", price: "20,900" }
  ];

  var shapes = ["スクエア", "ウェリントン", "オーバル", "ボストン", "ラウンド", "ナイロール", "ツーポイント", "その他"];

  var crapt = [
    ["【EC先行販売】Crapt CRP-3053", "TAEHYUN着用"],
    ["【EC先行販売】Crapt CRP-3060", "BEOMGYU着用"],
    ["【EC先行販売】Crapt CRP-3059", "HUENINGKAI着用"],
    ["【EC先行販売】Crapt CRP-3060", "TAEHYUN着用"],
    ["【EC先行販売】Crapt CRP-3061", "BEOMGYU着用"],
    ["【EC先行販売】Crapt CRP-3051", "HUENINGKAI着用"]
  ];

  var features = [
    "眼鏡市場×遊☆戯☆王デュエルモンスターズ　コラボメガネ<br>2027年春発売決定！",
    "まだ老眼じゃないポータル",
    "大人になるまでに知っておきたい、目と視力のこと",
    "目が小さく見えにくいメガネの選び方"
  ];

  var brands = [
    "軽い、ズレにくい、驚きのかけ心地",
    "眼鏡市場史上、最軽量フレーム",
    "掛けるメガネから、装着するギアへ。",
    "鼻の負担を軽減した、新感覚メガネ。"
  ];

  var lenses = [
    ["調光レンズ", "+5,500円", "紫外線量に応じてレンズの色が変化し屋内外で快適"],
    ["ストレスフリーシリーズ", "+0円", "老眼と上手に暮らすためのレンズ"],
    ["カラーレンズ", "+4,400円", "好みの色や濃さを100種類以上から選べる豊富なバリエーション"],
    ["ブルーライト対策", "+4,400円", "パソコンやスマホなどのブルーライトを効果的にカット"]
  ];

  var services = [
    "全国メガネ点検DAY",
    "眼鏡市場のアイスタイリスト",
    "「似合う」を見つける眼鏡市場の診断サービス",
    "Vポイント 貯まる！使える！"
  ];

  var staff = [["東海", "イノ"], ["本部", "Sae"], ["関東", "ゆか"], ["九州", "urr"], ["東海", "みやっち"]];

  var magazine = [
    "「見た目」も「見え方」もバッチリなメガネの選び方",
    "目の日焼け対策してる？紫外線から手軽に目を守る方法",
    "軽いだけじゃダメ？掛けやすいメガネの条件とは？",
    "大人に似合う黒メガネなら眼鏡市場の『QRO』で決まり！",
    "【顔タイプ別】あなたの印象、「マッチする」メガネと「チェンジする」メガネ case3.フレッシュタイプ",
    "【顔タイプ別】あなたの印象、「マッチする」メガネと「チェンジする」メガネ case2.クールタイプ",
    "【顔タイプ別】あなたの印象、「マッチする」メガネと「チェンジする」メガネ case1.キュートタイプ",
    "鯖江のチタン加工技術を結集した 蝶番のないメガネ『ZEROGRA』"
  ];

  var news = [
    ["2026/07/17", ["ニュース", "オンラインショップ", "店舗"], "BAILA×眼鏡市場 FURLA（フルラ）アイウェアコレクション2026"],
    ["2026/02/17", ["ニュース", "プレス"], "（続報）電子メールサービス提供事業者における不正アクセス被害について"],
    ["2025/12/26", ["ニュース", "プレス", "オンラインショップ"], "電子メールサービス提供事業者における不正アクセス被害について"],
    ["2025/08/07", ["ニュース", "オンラインショップ", "店舗"], "眼鏡市場の『インサイドクリア』レンズが叶える、クリアな視界の秘密"],
    ["2025/07/30", ["ニュース", "オンラインショップ", "店舗"], "TUMIの“本質”を纏う 眼鏡市場だけのサングラスコレクション"]
  ];

  function stars(rate) {
    var html = "";
    var r = Math.round(rate * 2) / 2;
    for (var i = 1; i <= 5; i++) {
      var cls = r >= i ? "full" : (r >= i - 0.5 ? "half" : "empty");
      html += '<i class="star ' + cls + '"></i>';
    }
    return '<span class="stars" aria-label="評価 ' + rate.toFixed(1) + '">' + html + "</span>";
  }

  function render(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  render("ranking-list", ranking.map(function (p) {
    return '<li class="product"><a href="#">' +
      '<div class="thumb"><img src="' + asset("images/" + p.img + ".jpg") + '" alt="' + p.name + '" loading="lazy" width="640" height="640"></div>' +
      '<p class="p-brand">' + p.brand + '</p><p class="p-name">' + p.name + '</p><p class="p-price">' + yen(p.price) + "</p>" +
      '<p class="p-rate">' + stars(p.rate) + '<span class="num">' + p.rate.toFixed(1) + '</span><span class="cnt">(' + p.count + ")</span></p>" +
      "</a></li>";
  }).join(""));

  render("new-list", newArrivals.map(function (p) {
    return '<li class="product"><a href="#">' +
      '<div class="thumb"><img src="' + asset("images/" + p.img + ".jpg") + '" alt="' + p.name + '" loading="lazy" width="640" height="640"></div>' +
      '<p class="p-brand u">' + p.brand + '</p><p class="p-name">' + p.name + '</p><p class="p-price">' + yen(p.price) + "</p>" +
      "</a></li>";
  }).join(""));

  render("shape-list", shapes.map(function (s, i) {
    var icon = i < 7 ? '<img src="' + asset("images/shape" + (i + 1) + ".png") + '" alt="" width="178" height="94">' : "";
    return '<li><a href="#" class="' + (icon ? "" : "no-icon") + '">' + icon + "<span>" + s + "</span></a></li>";
  }).join(""));

  render("crapt-list", crapt.map(function (c, i) {
    return '<li class="crapt-item"><a href="#">' +
      '<div class="thumb"><img src="' + asset("images/crapt" + (i + 1) + ".jpg") + '" alt="' + c[0] + '" loading="lazy" width="480" height="480"></div>' +
      '<p class="p-brand">Crapt</p><p class="p-name">' + c[0] + "<br>" + c[1] + '</p><p class="p-price">' + yen("13,200") + "</p>" +
      "</a></li>";
  }).join(""));

  render("feature-list", features.map(function (t, i) {
    return '<li><a href="#"><div class="banner"><img src="' + asset("images/feature" + (i + 1) + ".jpg") + '" alt="" loading="lazy" width="640" height="560"></div><p>' + t + "</p></a></li>";
  }).join(""));

  render("brand-list", brands.map(function (t, i) {
    return '<li><a href="#"><div class="banner"><img src="' + asset("images/brand" + (i + 1) + ".jpg") + '" alt="" loading="lazy" width="640" height="576"></div><p>' + t + "</p></a></li>";
  }).join(""));

  render("lens-list", lenses.map(function (l, i) {
    return '<li><a href="#"><div class="banner"><img src="' + asset("images/lens" + (i + 1) + ".jpg") + '" alt="" loading="lazy" width="640" height="480"></div>' +
      '<p class="l-name">' + l[0] + '</p><p class="l-price">' + l[1] + '</p><p class="l-desc">' + l[2] + "</p></a></li>";
  }).join(""));

  render("service-list", services.map(function (t, i) {
    return '<li><a href="#"><div class="banner"><img src="' + asset("images/service" + (i + 1) + ".jpg") + '" alt="" loading="lazy" width="680" height="609"></div><p>' + t + "</p></a></li>";
  }).join(""));

  render("staff-list", staff.map(function (s, i) {
    return '<li><a href="#"><div class="photo"><img src="' + asset("images/staff" + (i + 1) + ".jpg") + '" alt="" loading="lazy" width="540" height="716"></div>' +
      '<div class="who"><img src="' + asset("images/avatar" + (i + 1) + ".jpg") + '" alt="" width="100" height="100"><span><small>' + s[0] + "</small>" + s[1] + "</span></div></a></li>";
  }).join(""));

  render("mag-list", magazine.map(function (t, i) {
    return '<li><a href="#"><div class="banner"><img src="' + asset("images/mag" + (i + 1) + ".jpg") + '" alt="" loading="lazy" width="680" height="350"></div><p>' + t + "</p></a></li>";
  }).join(""));

  render("news-list", news.map(function (n) {
    return '<li><a href="#"><p class="n-meta"><time>' + n[0] + "</time>" +
      n[1].map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") +
      '</p><p class="n-title">' + n[2] + "</p></a></li>";
  }).join(""));

  // Demo links are inert (no navigation away from the mock page).
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href="#"]');
    if (a) e.preventDefault();
  });

  // Rails: next button scrolls the row by one visible width.
  Array.prototype.forEach.call(document.querySelectorAll("[data-rail]"), function (rail) {
    var track = rail.querySelector(".rail-track");
    var next = rail.querySelector(".rail-next");
    function update() {
      var hasMore = track.scrollWidth - track.clientWidth - track.scrollLeft > 4;
      next.hidden = !hasMore;
    }
    next.addEventListener("click", function () {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollBy({ left: track.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
    });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("global-nav");
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "メニューを開く" : "メニューを閉じる");
    nav.classList.toggle("is-open", !open);
  });

  // Page-top button
  var pagetop = document.querySelector(".pagetop");
  pagetop.addEventListener("click", function (e) {
    e.preventDefault();
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
  function onScroll() { pagetop.classList.toggle("is-visible", window.scrollY > 400); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
