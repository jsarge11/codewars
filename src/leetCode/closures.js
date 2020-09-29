const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function (local) {
      return function () {
        console.log(local);
      };
    })(i),
    500
  );
}
