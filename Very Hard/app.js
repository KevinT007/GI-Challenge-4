function Person(name, age, job) {
  this.fullName = name;
  this.age = age;
  this.job = job;

  this.exercise = function () {
    console.log("Swimming is fun! - I don't swim.");
  };

  this.fetchJob = function () {
    console.log(name + "is a" + job);
  };
}
