import $ from "jquery"

var formData = new FormData(); formData.append("username", "18535535332");formData.append("password", "123456");
$.ajax({
  type: "POST",
  url: "http://pstbj.com:6041/sendsms",
  data: JSON.stringify(data),
  dataType:'json',
  contentType:"application/JSON",
  success: function (response) {
    console.log(response);
  },

  failure: function (response) {
    alert(response);
  }
});


