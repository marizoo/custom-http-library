// we will use ajax + prototype first
// prototype runs under the hood for es6 so its good to learn this.

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// ? we will have 4 diff prototype methods
//Make HTTP GET Request
// the "self" is used to counter the "scoped" that "this" inside the function.
// arrowfunction eliminate the use to use "self", coz under the hood it includes it already.
// the callback NULL is for the error.
// todo start here:
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// todo Make HTTP POST Request
// new post have the ID of 101
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};
