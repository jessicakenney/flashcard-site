$(document).ready(function() {
  $("#javascript").click(function() {
        $("#javascript .term").toggle();
        $("#javascript .defbox").toggle();
  });
  $("#operator").click(function() {
        $("#operator .term").toggle();
        $("#operator .defbox").toggle();
  });

  $("#Variables").click(function() {
        $("#Variables .term").toggle();
        $("#Variables .defbox").toggle();
  });

  $("#Variable-naming-conventions").click(function() {
        $("#Variable-naming-conventions .term").toggle();
        $("#Variable-naming-conventions ul.defbox > li").toggle();
  });

  $("#Functions").click(function() {
        $("#Functions .term").toggle();
        $("#Functions .defbox").toggle();
  });

  $("#Methods").click(function() {
        $("#Methods .term").toggle();
        $("#Methods .defbox").toggle();
  });

  $("#Arguments").click(function() {
        $("#Arguments .term").toggle();
        $("#Arguments .defbox").toggle();
  });
  $("#Parameters").click(function() {
        $("#Parameters .term").toggle();
        $("#Parameters .defbox").toggle();
  });
});
