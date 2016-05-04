$.getJSON('//ebruno.unomaha.edu/getip.php?callback=?', function (results) {
    var localip = results.ip;
    var checkip = localip.substring(0,7);
    if (checkip != "137.48.") {
        $("#linkEdit").removeAttr("href");
    }
  });