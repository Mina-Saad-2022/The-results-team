"use strict";

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);
anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

function keke() {
  var team = document.getElementById("team_name"),
    for_team = document.getElementById("teamName").value,
    Check_all = document.getElementById("about_matches"),
    for_match = parseInt(document.getElementById("total_matches").value),
    Check_win = document.getElementById("about_win"),
    for_win = parseInt(document.getElementById("win").value),
    point_win = for_win * 3,
    Check_equalized = document.getElementById("about_equalized"),
    for_equalized = parseInt(document.getElementById("Equalized").value),
    point_equalized = for_equalized * 1,
    Check_lost = document.getElementById("about_lost"),
    for_lost = parseInt(document.getElementById("lost").value),
    point_lost = for_lost * 0,
    for_all = document.getElementById("about_all"),
    all = for_win + for_equalized + for_lost,
    all_points = point_win + point_equalized,
    pos_footer = document.querySelector(".footer");

  if (all <= for_match) {
    (team.innerHTML = "Your Team Name is " + for_team),
      (Check_all.innerHTML = "Your Team Play " + for_match + " Matchs ,"),
      (Check_win.innerHTML =
        "it is win in " +
        for_win +
        " Matchs" +
        " = " +
        point_win +
        " points ,"),
      (Check_equalized.innerHTML =
        "it is equalized in " +
        for_equalized +
        " Matchs " +
        " = " +
        point_equalized +
        " points ,"),
      (Check_lost.innerHTML =
        "it is lost in " +
        for_lost +
        " Matchs" +
        " = " +
        point_lost +
        " point "),
      (for_all.innerHTML = "Total Score = " + all_points + " points");
  } else {
    alert("please type the correct data");
  }
  pos_footer.classList.add("footer_Results");
}
function clear() {
  (document.getElementById("teamName").value = ""),
    (document.getElementById("total_matches").value = ""),
    (document.getElementById("win").value = ""),
    (document.getElementById("Equalized").value = ""),
    (document.getElementById("lost").value = ""),
    (document.getElementById("team_name").innerHTML = ""),
    (document.getElementById("about_matches").innerHTML = ""),
    (document.getElementById("about_win").innerHTML = ""),
    (document.getElementById("about_equalized").innerHTML = ""),
    (document.getElementById("about_lost").innerHTML = ""),
    (document.getElementById("about_all").innerHTML = "");
  var footer = document.querySelector(".footer");
  footer.classList.add("footer_two");
}
document.getElementById("clead_data").onclick = clear;

function the_win() {
  var my_team = parseInt(document.getElementById("total_matches").value),
    my_win = parseInt(document.getElementById("win").value);
  if (my_win > my_team) {
    alert("the value of input win is false");
  }
}
function the_equalized() {
  var my_team = parseInt(document.getElementById("total_matches").value),
    my_equalized = parseInt(document.getElementById("Equalized").value);
  if (my_equalized > my_team) {
    alert("the value of input equalized is false");
  }
}
function the_lost() {
  var my_team = parseInt(document.getElementById("total_matches").value),
    my_lost = parseInt(document.getElementById("lost").value);
  if (my_lost > my_team) {
    alert("the value of input lost is false");
  }
}
function dark_night() {
  var background_page = document.querySelector("body"),
    overLay_backgronud = document.querySelector(".overlay"),
    tile_wepSite = document.querySelector(".letters"),
    line_color = document.querySelector(".line"),
    button_Results_background = document.querySelector(".btn-success"),
    button_Restart_background = document.querySelector(".btn-danger"),
    pos_footer = document.querySelector(".footer"),
    icone_moon = document.querySelector(".fa-moon");

  var link_color = document.querySelectorAll(".link"),
    A;
  for (A = 0; A < link_color.length; A++) {
    link_color[A].classList.add("dark_link");
  }

  var backgronud_input = document.querySelectorAll("input"),
    z;
  for (z = 0; z < backgronud_input.length; z++) {
    backgronud_input[z].classList.add("input_dark");
  }

  var lable_color = document.querySelectorAll("label"),
    s;
  for (s = 0; s < lable_color.length; s++) {
    lable_color[s].classList.add("lable_dark");
  }

  var result = document.querySelectorAll(".the_result"),
    w;
  for (w = 0; w < result.length; w++) {
    result[w].classList.add("result_dark");
  }

  var finel = document.querySelectorAll(".the_finel"),
    R;
  for (R = 0; R < finel.length; R++) {
    finel[R].classList.add("finel_dark");
  }
  background_page.className = "avatar";
  overLay_backgronud.className = "overLay_dark";
  tile_wepSite.classList.add("title_dark");
  line_color.classList.add("line_dark");
  button_Results_background.classList.add("Results_dark");
  button_Restart_background.classList.add("Restart_dark");
  pos_footer.classList.add("footer_Results_two");
  icone_moon.className = "stop_morning";

  var moon = document.querySelector(".moon"),
    button_two = document.createElement("button");

  button_two.setAttribute("class", " mornning");
  button_two.setAttribute("onclick", "mornning_mood()");
  moon.appendChild(button_two);

  var sun = document.querySelector(".mornning"),
    icone_sun = document.createElement("i");
  icone_sun.setAttribute("class", "fas fa-sun");
  sun.appendChild(icone_sun);
}

function mornning_mood() {
  var icone_moon = document.querySelector(".fa-sun");

  icone_moon.className = "stop_morning";

  var icone_sun = document.querySelector("#small_icone");

  icone_sun.className = "fas fa-moon";

  document.querySelector(".avatar").className = "avatar_two";
  document.querySelector(".title_dark").className = "letters";
  document.querySelector(".line_dark").className = "line";
  document.querySelector(".Results_dark").className =
    "btn btn-success w-50 mx-2 font_2 p-2 ";

  document.querySelector(".Restart_dark").className =
    "btn btn-danger w-50 font_2 p-2 ";
  document.querySelector(".footer_Results_two").className =
    "w-100 h-25  footer text-white";
  document.querySelector(".overLay_dark").className = "overlay";

  var dark_link = document.querySelectorAll("#line"),
    L;
  for (L = 0; L < dark_link.length; L++)
    dark_link[L].classList.remove("dark_link");

  var dark_lable = document.querySelectorAll("label"),
    U;
  for (U = 0; U < dark_lable.length; U++)
    dark_lable[U].classList.remove("lable_dark");

  var dark_lable = document.querySelectorAll("input"),
    Q;
  for (Q = 0; Q < dark_lable.length; Q++)
    dark_lable[Q].classList.remove("input_dark");
}
