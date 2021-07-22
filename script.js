const ram = [
  {
    vendor: "Corsair",
    data: [
      { name: "Hello", price: 420 },
      { name: "Hello", price: 420 },
    ],
  },

  {
    vendor: "Kingstone",
    data: [
      { name: "Hello", price: 420 },
      { name: "Hello", price: 420 },
    ],
  },
  {
    vendor: "Hp",
    data: [
      { name: "Hello", price: 420 },
      { name: "Hello", price: 420 },
    ],
  },
];

const products = [
  {
    type: "Ram",
    data: ram,
  },
];

let categoryELEMENT = document.getElementById("productCategory");
let vendorELEMENT = document.getElementById("productVendor");

const initializeCategory = () => {
  let init = document.createElement("option");
  init.value = undefined;
  init.innerText = "Category";
  categoryELEMENT.appendChild(init);

  products.forEach((item) => {
    let x = document.createElement("option");
    x.value = item.type;
    x.innerText = item.type;
    categoryELEMENT.appendChild(x);
  });
};

const initializeVendor = () => {
  vendorELEMENT.innerHTML = "";
  let init = document.createElement("option");
  init.value = undefined;
  init.innerText = "Vendor";
  vendorELEMENT.appendChild(init);

  let categoryData = products.find(
    (item) => item.type === categoryELEMENT.value
  ).data;

  categoryData.forEach((item) => {
    let x = document.createElement("option");
    x.value = item.vendor;
    x.innerHTML = item.vendor;
    vendorELEMENT.appendChild(x);
  });
};

initializeCategory();
