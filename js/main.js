// import "panolens.min.js";
// import "three.min.js";
var panorama, panorama2, viewer, container, infospot;

container = document.querySelector("#container");

panorama = new PANOLENS.ImagePanorama("assets/img/bg-2.png");
panorama2 = new PANOLENS.ImagePanorama("assets/img/booth2.png");
panorama3 = new PANOLENS.ImagePanorama("assets/img/booth1.png");

viewer = new PANOLENS.Viewer({
  container: container,
  output: "console",
});
viewer.add(panorama);
viewer.add(panorama2);
viewer.add(panorama3);
panorama.link(panorama2, new THREE.Vector3(800, -3500, -5000));
panorama.link(panorama3, new THREE.Vector3(6000, -3500, -5000));
// panorama.link(panorama3, new THREE.Vector3(-20000, -3500, 500));
panorama2.link(panorama, new THREE.Vector3(-100, -500, -5000));
