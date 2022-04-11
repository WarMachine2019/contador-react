if (navigator.serviceWorker) {
  console.log("si existe");

  navigator.serviceWorker.register("./sw.js");
}
