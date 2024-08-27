const users = [
  {
    id: 1,
    name: "Ahmed",
    email: "ahmed@example.com",
    preferences: {
      subCategories: ["Millefeuille & Profiterole", "Cables & Plugs"],
      brands: ["Breadfast"],
    },
    purchaseHistory: [
      {
        productId: 1,
        date: "2024-05-01",
      },
      {
        productId: 3,
        date: "2024-04-15",
      },
      {
        productId: 1,
        date: "2024-04-10",
      },
    ],
  },
  {
    id: 2,
    name: "Mohamed",
    email: "mohamed@example.com",
    preferences: {
      subCategories: ["Croissants", "Pencils", "Cables & Plugs"],
      brands: ["Bic", "iLock"],
    },
    purchaseHistory: [
      {
        productId: 2,
        date: "2024-04-20",
      },
      {
        productId: 4,
        date: "2024-04-10",
      },
      {
        productId: 4,
        date: "2024-04-09",
      },
      {
        productId: 4,
        date: "2024-04-08",
      },
    ],
  },
];

module.exports = users;
