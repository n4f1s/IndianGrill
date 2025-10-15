import React from "react";

const dishes = [
  {
    image: "/popularDish1.jpg",
    name: "Chicken Tikka Masala",
    price: 29.99,
    description:
      "Extra virgin olive oil, touch of garlic, prawns, green peas, sun dried tomato, Chicken.",
  },
  {
    image: "/popularDish2.jpg",
    name: "Paneer Tikka Masala",
    price: 24.99,
    description: "Soft paneer cubes cooked in rich spices and creamy tomato gravy.",
  },
  {
    image: "/popularDish3.jpg",
    name: "Cauliflower Manchurian",
    price: 19.99,
    description: "Crispy cauliflower tossed in savory Manchurian sauce.",
  },
  {
    image: "/popularDish4.jpg",
    name: "Butter Chicken",
    price: 28.99,
    description: "Tender chicken cooked in creamy buttery tomato sauce.",
  },
  {
    image: "/popularDish5.jpg",
    name: "Lamb Curry",
    price: 32.99,
    description: "Slow-cooked lamb in traditional Indian spices and gravy.",
  },
  {
    image: "/popularDish6.jpg",
    name: "Vegetable Biryani",
    price: 22.99,
    description: "Fragrant basmati rice with mixed vegetables and aromatic spices.",
  },
];

const OrderOnline = () => {
  return (
    <div className="w-full h-auto bg-[#FDF7F2] overflow-hidden">
      <div className="wrapper">
        <p className="heading3">Chef Recommendation ——</p>
        <h1 className="heading1">Order Online</h1>

        <div className="flex flex-wrap justify-between mt-14 w-full h-full">
          {dishes.map(({ image, name, price, description }) => (
            <div key={name} className="w-full md:w-[412px] h-[430px] p-5">
              <img
                src={image}
                alt={name}
                className="w-full h-[272px] object-cover rounded-2xl"
              />
              <div className="flex justify-between mb-5 mt-2 text-lg md:text-xl">
                <h2 className="font-semibold">{name}</h2>
                <p className="font-bold">${price}</p>
              </div>
              <p className="heading2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
