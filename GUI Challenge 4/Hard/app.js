function PII() {
  let pii = {
    name: "Bartleby",
    ssn: 123456789,
  };
  return {
    Name: function () {
      return pii.name;
    },
  };
}

let pii1 = PII();
console.log(pii1.Name());
