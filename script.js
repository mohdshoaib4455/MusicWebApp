document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    f1();
  }
});

function f1() {
  document.getElementById("pop").style.display = "none";
  let container = document.getElementById("container");
  container.style.display = "flex";
  getsong();
}

function getsong() {
  let inputvalue = document.getElementById("input").value;
  let api = `https://v1.nocodeapi.com/shoaib9084/spotify/eMKAAlYtCLxzojLH/search?q=${inputvalue}&type=track`;

  fetch(api)
    .then((res) => res.json())
    .then((result) => {
      for (var i = 0; i < result.tracks.items.length; i++) {
        let track = result.tracks.items[i];
        // let container = document.getElementById("container");
        // container.innerHTML = "";
        let div = document.createElement("div");
        div.classList.add("music-card");
        // audio
        let audio = document.createElement("audio");
        audio.id = "play";
        audio.src = result.tracks.items[i].preview_url;
        div.appendChild(audio);
        let img = document.createElement("img");
        img.src = track.album.images[0].url;
        img.setAttribute("id", "img");
        div.appendChild(img);

        let div1 = document.createElement("div");
        div1.classList.add("info");
        div.appendChild(div1);

        let h3 = document.createElement("h3");
        h3.textContent = track.name;
        div1.appendChild(h3);

        let p = document.createElement("p");
        p.textContent = track.artists[0].name;
        div1.appendChild(p);

        let p1 = document.createElement("p");
        p1.textContent = track.album.name;
        div1.appendChild(p1);

        let btn = document.createElement("button");
        btn.classList.add("play-button");
        div1.appendChild(btn);

        let playIcon = document.createElement("i");
        playIcon.setAttribute("class", "fas fa-play");
        playIcon.setAttribute("id", "playBtn");
        btn.appendChild(playIcon);

        let newcont = document.getElementById("container");
        newcont.appendChild(div);
        div.addEventListener("click", (event) => {
          document.querySelector(".bottombox").style.bottom = "0px";

          var img = event.currentTarget.getElementsByTagName("img")[0];
          var playimg = document.getElementById("playerImg");
          playimg.src = img.src;
          // tittle
          var tittle = event.currentTarget.getElementsByTagName("h3")[0];
          var playetTitle = document.getElementById("playerh3");
          playetTitle.textContent = tittle.textContent;

          // artist
          var artist = event.currentTarget.getElementsByTagName("p")[0];
          var playartist = document.getElementById("artist");
          playartist.textContent = artist.textContent;

          // song
          var songs = event.currentTarget.getElementsByTagName("audio")[0];
          var playerAudio = document.getElementById("playMusic");
          playerAudio.src = songs.src;

          let ply = document.getElementById("Play");
          ply.addEventListener("click", () => {
            document.getElementById("playMusic").play();
          });
          let pouse = document.getElementById("Pouse");
          pouse.addEventListener("click", () => {
            document.getElementById("playMusic").pause();
          });
          let resume = document.getElementById("Resume");
          Resume.addEventListener("click", () => {
            document.getElementById("playMusic").play();
          });
        });
      }
    })
    .catch((err) => console.log(err));
}
