var express = require("express");
var bodyParser = require("body-parser");

var app = express();
// intercept all requests
app.all("/*", function (req, res, next) {
    //security
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With",
    "Content-Type",
    "Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST", "GET");
    //go to next function
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const ProductStatus = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE"
}

const WarehouseName = {
    Hatchworks: "Hatchworks",
    Solstice_Enterprises: "Solstice Enterprises",
    Odin_Networks: "Odin Networks",
    Phantomedia: "Phantomedia",
    Sphinxecurity: "Sphinxecurity",
}

const ProductType = {
    Furniture: "Furniture",
    Electronics : "Electronics",
    Vehicle : "Vehicle",
    Cardboard : "Cardboard"
}

var users = [
    {
      userId: 0,
      surname: "King",
      lastname: "Clifford",
      email: "King.Clifford@gmail.com",
      password: "12345",
      items: [
        {
          id: 11943,
          name: "Sofa model 1075",
          period: { fromDate: "2020-07-12", toDate: "2020-12-19" },
          size: { height: 1.2, length: 2.1, width: 1 },
          status: ProductStatus.ACTIVE,
          type: ProductType.Furniture,
          warehouse: WarehouseName.Solstice_Enterprises,
        },
        {
          id: 74567,
          name: "Samsung S20X11",
          period: { fromDate: "2020-02-12", toDate: "2022-06-04" },
          size: { height: 2, length: 2.5, width: 0.2 },
          status: ProductStatus.ACTIVE,
          type: ProductType.Electronics,
          warehouse: WarehouseName.Phantomedia,
        },
      ],
    },
    {
      userId: 1,
      surname: "Toni",
      lastname: "Shepherd",
      email: "Toni.Shepherd@gmail.com",
      password: "12345",
      items: [
        {
          id: 35634,
          name: "Volvo XC90",
          period: { fromDate: "2018-07-17", toDate: "2019-02-05" },
          size: { height: 2.5, length: 3.5, width: 1.5 },
          status: ProductStatus.INACTIVE,
          type: ProductType.Vehicle,
          warehouse: WarehouseName.Odin_Networks,
        },
      ],
    },
    {
      userId: 2,
      surname: "Yanis",
      lastname: "Calvert",
      email: "Yanis.Calvert@gmail.com",
      password: "12345",
      items: [
        {
          id: 87744,
          name: "Cardboard17776",
          period: { fromDate: "2020-01-11", toDate: "2021-06-23" },
          size: { height: 1.2, length: 2, width: 0.5 },
          status: ProductStatus.ACTIVE,
          type: ProductType.Cardboard,
          warehouse: WarehouseName.Phantomedia,
        },
      ],
    },
  ];

  var warehouses = [
    {
      name: WarehouseName.Hatchworks,
      items: [],
      productSizeRange: {
        fromValue: 0,
        toValue: 1.5,
      },
      productTypes: [ProductType.Cardboard],
    },
    {
      name: WarehouseName.Solstice_Enterprises,
      items: [
        {
          id: 11943,
          name: "Sofa model 1075",
          period: { fromDate: "2020-07-12", toDate: "2020-12-19" },
          size: { height: 1.2, length: 2.1, width: 1 },
          status: ProductStatus.ACTIVE,
          type: ProductType.Furniture,
          warehouse: WarehouseName.Solstice_Enterprises,
        },
      ],
      productSizeRange: {
        fromValue: 0,
        toValue: 5,
      },
      productTypes: [
        ProductType.Cardboard,
        ProductType.Furniture,
        ProductType.Electronics,
      ],
    },
    {
      name: WarehouseName.Odin_Networks,
      items: [
        {
          id: 35634,
          name: "Volvo XC90",
          period: { fromDate: "2018-07-17", toDate: "2019-02-05" },
          size: { height: 2.5, length: 3.5, width: 1.5 },
          status: ProductStatus.INACTIVE,
          type: ProductType.Vehicle,
          warehouse: WarehouseName.Odin_Networks,
        },
      ],
      productSizeRange: {
        fromValue: 0,
        toValue: 10,
      },
      productTypes: [ProductType.Furniture, ProductType.Vehicle],
    },
    {
      name: WarehouseName.Phantomedia,
      items: [
        {
          id: 74567,
          name: "Samsung S20X11",
          period: { fromDate: "2020-02-12", toDate: "2022-06-04" },
          size: { height: 2, length: 2.5, width: 0.2 },
          status: ProductStatus.ACTIVE,
          type: ProductType.Electronics,
          warehouse: WarehouseName.Phantomedia,
        },
        {
          id: 87744,
          name: "Cardboard17776",
          period: { fromDate: "2020-01-11", toDate: "2021-06-23" },
          size: { height: 1.2, length: 2, width: 0.5 },
          status: ProductStatus.ACTIVE,
          type: ProductType.Cardboard,
          warehouse: WarehouseName.Phantomedia,
        },
      ],
      productSizeRange: {
        fromValue: 0,
        toValue: 3,
      },
      productTypes: [ProductType.Electronics, ProductType.Cardboard],
    },
    {
      name: WarehouseName.Sphinxecurity,
      items: [],
      productSizeRange: {
        fromValue: 5,
        toValue: 30,
      },
      productTypes: [ProductType.Vehicle],
    },
  ];

  var products = [
    {
      id: 11943,
      name: "Sofa model 1075",
      period: { fromDate: "2020-07-12", toDate: "2020-12-19" },
      size: { height: 1.2, length: 2.1, width: 1 },
      status: ProductStatus.ACTIVE,
      type: ProductType.Furniture,
      warehouse: WarehouseName.Solstice_Enterprises,
    },
    {
      id: 74567,
      name: "Samsung S20X11",
      period: { fromDate: "2020-02-12", toDate: "2022-06-04" },
      size: { height: 2, length: 2.5, width: 0.2 },
      status: ProductStatus.ACTIVE,
      type: ProductType.Electronics,
      warehouse: WarehouseName.Phantomedia,
    },
    {
      id: 35634,
      name: "Volvo XC90",
      period: { fromDate: "2018-07-17", toDate: "2019-02-05" },
      size: { height: 2.5, length: 3.5, width: 1.5 },
      status: ProductStatus.INACTIVE,
      type: ProductType.Vehicle,
      warehouse: WarehouseName.Odin_Networks,
    },
    {
      id: 87744,
      name: "Cardboard17776",
      period: { fromDate: "2020-01-11", toDate: "2021-06-23" },
      size: { height: 1.2, length: 2, width: 0.5 },
      status: ProductStatus.ACTIVE,
      type: ProductType.Cardboard,
      warehouse: WarehouseName.Phantomedia,
    },
  ];

  app.get("/warehouses", (req, res) => {
    res.send(warehouses);
  });

  app.get("/users", (req, res) => {
    res.send(users);
  });

  app.get("/products", (req, res) => {
    res.send(products);
  });

  app.post("/product", (req, res) => {
    if (req.body.product) {
      for (let i = 0; i <= 7; i++) {
        if (typeof req.body.product[i] === undefined) {
          res.status(400);
          res.send("ERROR: bad object");
          return;
        }
      }
      products.push(req.body.product);
      res.status(200);
      res.send("Success!");
    } else {
      res.status(400);
      res.send("ERROR 400: no body");
    }
  });

  app.get("/login", (req, res) => {
    if (typeof req.body.loginDetails === undefined) {
      res.status(400);
      res.send("ERROR: bad object");
      return;
    } else {
      users.map((user) => {
        if (
          req.body.loginDetails.email === user.email &&
          req.body.loginDetails.password === user.password
        ) {
          res.status(200);
          res.send("LOGIN_SUCCESS");
          return;
        } else if (
          req.body.loginDetails.email === user.email &&
          req.body.loginDetails.password !== user.password
        ) {
          res.status(400);
          res.send("WRONG_PASSWORD");
        }
      });
    }
    res.status(400);
    res.send("LOGIN_FAILED");
  });

  app.get("/Register", (req, res) => {
    if (typeof req.body.user === undefined) {
      res.status(400);
      res.send("ERROR: bad object");
      return;
    } else if (
      typeof req.body.user.email !== undefined &&
      typeof req.body.user.password !== undefined
    ) {
      users.push(req.body.user);
    }

    res.status(400);
    res.send("SIGNUP_FAILED");
  });


app.listen(3000);
