function main(params) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        "message": "Hello World!!"
      });
    }, 2000);
  });
}