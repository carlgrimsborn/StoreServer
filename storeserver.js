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
var devs = [
  {
    name: "dev1",
    email: "123@123.com",
    password: "12345"
  },
  {
    name: "dev2",
    email: "123@123.com",
    password: "12345"
  },
]

var users = [
    {
      id: "0",
      surname: "King",
      lastname: "Clifford",
      email: "King.Clifford@gmail.com",
      password: "12345",
      items: [
        {
          id: "11943",
          name: "Sofa model 1075",
          period: { fromDate: "2020-07-12", toDate: "2020-12-19" },
          size: { height: 1.2, length: 2.1, width: 1 },
          status: ProductStatus.ACTIVE,
          type: ProductType.Furniture,
          warehouse: WarehouseName.Solstice_Enterprises,
        },
        {
          id: "74567",
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
      id: "1",
      surname: "Toni",
      lastname: "Shepherd",
      email: "Toni.Shepherd@gmail.com",
      password: "12345",
      items: [
        {
          id: "35634",
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
      id: "2",
      surname: "Yanis",
      lastname: "Calvert",
      email: "Yanis.Calvert@gmail.com",
      password: "12345",
      items: [
        {
          id: "87744",
          name: "Cardboard17776",
          period: { fromDate: "2020-01-11", toDate: "2021-06-23" },
          size: { height: "1.2", length: "2", width: "0.5" },
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
        fromValue: "0",
        toValue: "1.5",
      },
      productTypes: [ProductType.Cardboard],
    },
    {
      name: WarehouseName.Solstice_Enterprises,
      items: [
        {
          id: "11943",
          name: "Sofa model 1075",
          period: { fromDate: "2020-07-12", toDate: "2020-12-19" },
          size: { height: "1.2", length: "2.1", width: "1" },
          status: ProductStatus.ACTIVE,
          type: ProductType.Furniture,
          warehouse: WarehouseName.Solstice_Enterprises,
        },
      ],
      productSizeRange: {
        fromValue: "0",
        toValue: "5",
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
          id: "35634",
          name: "Volvo XC90",
          period: { fromDate: "2018-07-17", toDate: "2019-02-05" },
          size: { height: "2.5", length: "3.5", width: "1.5" },
          status: ProductStatus.INACTIVE,
          type: ProductType.Vehicle,
          warehouse: WarehouseName.Odin_Networks,
        },
      ],
      productSizeRange: {
        fromValue: "0",
        toValue: "10",
      },
      productTypes: [ProductType.Furniture, ProductType.Vehicle],
    },
    {
      name: WarehouseName.Phantomedia,
      items: [
        {
          id: "74567",
          name: "Samsung S20X11",
          period: { fromDate: "2020-02-12", toDate: "2022-06-04" },
          size: { height: "2", length: "2.5", width: "0.2" },
          status: ProductStatus.ACTIVE,
          type: ProductType.Electronics,
          warehouse: WarehouseName.Phantomedia,
        },
        {
          id: "87744",
          name: "Cardboard17776",
          period: { fromDate: "2020-01-11", toDate: "2021-06-23" },
          size: { height: "1.2", length: "2", width: "0.5" },
          status: ProductStatus.ACTIVE,
          type: ProductType.Cardboard,
          warehouse: WarehouseName.Phantomedia,
        },
      ],
      productSizeRange: {
        fromValue: "0",
        toValue: "3",
      },
      productTypes: [ProductType.Electronics, ProductType.Cardboard],
    },
    {
      name: WarehouseName.Sphinxecurity,
      items: [],
      productSizeRange: {
        fromValue: "5",
        toValue: "30",
      },
      productTypes: [ProductType.Vehicle],
    },
  ];

  var products = [
    {
      id: "11943",
      name: "Sofa model 1075",
      ownerId: "0",
      period: { fromDate: "2020-07-12", toDate: "2020-12-19" },
      size: { height: "1.2", length: "2.1", width: "1" },
      status: ProductStatus.ACTIVE,
      type: ProductType.Furniture,
      warehouse: WarehouseName.Solstice_Enterprises,
    },
    {
      id: "74567",
      name: "Samsung S20X11",
      ownerId: "0",
      period: { fromDate: "2020-02-12", toDate: "2022-06-04" },
      size: { height: "2", length: "2.5", width: "0.2" },
      status: ProductStatus.ACTIVE,
      type: ProductType.Electronics,
      warehouse: WarehouseName.Phantomedia,
    },
    {
      id: "35634",
      name: "Volvo XC90",
      ownerId: "1",
      period: { fromDate: "2018-07-17", toDate: "2019-02-05" },
      size: { height: "2.5", length: "3.5", width: "1.5" },
      status: ProductStatus.INACTIVE,
      type: ProductType.Vehicle,
      warehouse: WarehouseName.Odin_Networks,
    },
    {
      id: "87744",
      name: "Cardboard17776",
      ownerId: "2",
      period: { fromDate: "2020-01-11", toDate: "2021-06-23" },
      size: { height: "1.2", length: "2", width: "0.5" },
      status: ProductStatus.ACTIVE,
      type: ProductType.Cardboard,
      warehouse: WarehouseName.Phantomedia,
    },
  ];

  const calculateCompanyFromProduct = (product) => {
    const cubicDimension = parseInt(product.size.height) * parseInt(product.size.length) * parseInt(product.size.width);
    if (cubicDimension <= 1.5 && product.type === ProductType.Cardboard) {
      return WarehouseName.Hatchworks;
    }
    if (cubicDimension <= 5 && product.type === ProductType.Cardboard ||
      product.type === ProductType.Furniture || product.type === ProductType.Electronics ) {
        return WarehouseName.Solstice_Enterprises;
      }

    if (cubicDimension <= 10 && product.type === ProductType.Vehicle || product.type === ProductType.Furniture ) {
      return WarehouseName.Odin_Networks;
    }

    if (cubicDimension <= 3 && product.type === ProductType.Electronics || product.type === ProductType.Cardboard ) {
      return WarehouseName.Phantomedia;
    }

    if (cubicDimension <= 30 && cubicDimension >= 5 && product.type === ProductType.Vehicle) {
      return WarehouseName.Sphinxecurity;
    }

    return undefined;

  }


  app.get("/warehouses", (req, res) => {
    res.send(warehouses);
  });


  app.get("/products", (req, res) => {
    res.send(products);
  });

  app.post("/product", (req, res) => {
    if (req.body.product) {
      if (
        "id" in req.body.product &&
        "name" in req.body.product &&
        "ownerId" in req.body.product &&
        "type" in req.body.product &&
        "size" in req.body.product &&
        "period" in req.body.product &&
        "status" in req.body.product
      ) {

        //if it exists
        products.map((p) => {
          if (p.id === req.body.product.id) {
            res.status(409);
            res.send("ERROR: product already exists")
            return;
          }
        })

        const productToAdd = req.body.product;
        productToAdd.warehouse = calculateCompanyFromProduct(productToAdd);
        users.map((user, i) => {
          console.log(productToAdd.ownerId, user.id);
          if (productToAdd.ownerId === user.id) {
            users[i].items.push(productToAdd)
          }
        })
        warehouses.map((warehouse, i) => {
          if (warehouse.name === productToAdd.warehouse) {
            warehouses[i].items.push(productToAdd);
          }
        })
        products.push(productToAdd);
        res.status(200);
        res.send("POST_SUCCESS");
        console.log(products);
        console.log(users);
        console.log(warehouses);
      } else {
        res.status(400);
        res.send("ERROR: bad object");
        return;
      }
    } else {
      res.status(400);
      res.send("ERROR 400: cannot find product in body");
    }
  });

  app.put("/product", (req, res) => {
    if (req.body.product) {
        if (
          "id" in req.body.product &&
          "name" in req.body.product &&
          "ownerId" in req.body.product &&
          "type" in req.body.product &&
          "size" in req.body.product &&
          "period" in req.body.product &&
          "warehouse" in req.body.product &&
          "status" in req.body.product
        ) {
          users.map((user, y) => {
            console.log(req.body.product.ownerId, user.id);
            if (req.body.product.ownerId === user.id) {
              users[y].items.map((item, i) => {
                if (item.id === req.body.product.id) {
                  users[y].items[i] = req.body.product;
                }
              })
            }
          })
          warehouses.map((warehouse, y) => {
            if (warehouse.name === req.body.product.warehouse) {
              warehouses[y].items.map((item, i) => {
                if (item.id === req.body.product.warehouse) {
                  warehouses[y].items[i] = req.body.product;
                }
              })
            }
          })
            products.map((product, i) => {
                if(product.id === req.body.product.id) {
                    products[i] = req.body.product;
                    console.log(users, warehouses);
                    res.send("EDIT_SUCCESS");
                    return;
                }
            })
            res.status(404);
            res.send("ERROR: no product with that id");
            return;
        } else {
          res.status(400);
          res.send("ERROR: bad object");
          return;
        }
      } else {
        res.status(400);
        res.send("ERROR 400: cannot find product in body");
      }
      return;
  });

  app.delete("/product", (req, res) => {
    console.log(req.query.id);
    const id = req.query.id;
    products.map((product, i) => {
      if (id === product.id) {
        products.splice(i, 1);
        console.log(products);
        res.send("DELETE_SUCCESS");
        return;
      }
    });
    res.status(404);
    res.send("ERROR: product not found");
  });



  app.get("/users", (req, res) => {
    res.send(users);
  });

  app.put("/user", (req, res) => {
    if ("user" in req.body === false) {
        res.status(400);
        res.send("ERROR: cannot find user in body");
        return;
      } else if (
        "id" in req.body.user &&
        "surname" in req.body.user &&
        "lastname" in req.body.user &&
        "email" in req.body.user &&
        "password" in req.body.user &&
        "items" in req.body.user
      ) {
        users.map((user, i) => {
            if(user.id === req.body.user.id) {
                users[i] =  req.body.user;
                res.send("EDIT_SUCCESS");
                console.log(users);
                return;
            }
        })
      }
      res.status(400);
      res.send("EDIT_FAILED");
  })

  app.delete("/user", (req, res) => {
      console.log(req.query.id);
      const id = req.query.id;
    users.map((user, i) => {
        if (id === user.id) {
            users.splice(i, 1);
            console.log(users);
            res.send("DELETE_SUCCESS");
            return;
        }
    })
    res.status(404);
    res.send("ERROR: user not found")
  })

  app.post("/login", (req, res) => {
      users.map((user) => {
        if (
          req.query.email === user.email &&
          req.query.password === user.password
        ) {
          res.send("LOGIN_SUCCESS");
          return;
        } else if (
          req.query.email === user.email &&
          req.query.password !== user.password
        ) {
          res.status(400);
          res.send("WRONG_PASSWORD");
          return;
        }
      });

    res.status(400);
    res.send("LOGIN_FAILED");
  });

  app.post("/register", (req, res) => {
    if ("user" in req.body === false) {
      res.status(400);
      res.send("ERROR: cannot find user in body");
      return;
    } else if (
      "id" in req.body.user &&
      "surname" in req.body.user &&
      "lastname" in req.body.user &&
      "email" in req.body.user &&
      "password" in req.body.user &&
      "items" in req.body.user
    ) {
      users.push(req.body.user);
      res.send("REGISTER_SUCCESS");
      console.log(users);
      return;
    }
    res.status(400);
    res.send("REGISTER_FAILED");
  });

  app.post("/login/dev", (req,res) => {
      devs.map((dev) => {
        if (
          req.query.email === dev.email &&
          req.query.password === dev.password
        ) {
          res.send("LOGIN_SUCCESS");
          return;
        } else if (
          req.query.email === dev.email &&
          req.query.password !== dev.password
        ) {
          res.status(400);
          res.send("WRONG_PASSWORD");
          return;
        }
      });

    res.status(400);
    res.send("LOGIN_FAILED");
  })


app.listen(2000);
