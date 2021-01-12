var panorama, panorama2, viewer, container, infospot;

container = document.querySelector("#container");

panorama = new PANOLENS.ImagePanorama(
  "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"
);
panorama2 = new PANOLENS.ImagePanorama(
  "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg"
);

viewer = new PANOLENS.Viewer();
viewer.add(panorama);
viewer.add(panorama2);

panorama.link(panorama2, new THREE.vector3(-100, -500, -5000));
panorama2.link(panorama, new THREE.vector3(-100, -500, -5000));
