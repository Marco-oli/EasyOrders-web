import { Order } from "../../types/Order";
import { OrderBoards } from "../OrdersBoards";
import { Container } from "./styles";

export const Orders = () => {
  const orders: Order[] = [
    {
      _id: "6374e0af91280413840542f5",
      table: "123",
      status: "WAITING",
      products: [
        {
          product: {
            name: "Pizza quatro queijos",
            imagePath: "1668601961421-quatro-queijos.png",
            price: 40,
          },
          quantity: 3,
          _id: "6374e0af91280413840542f6",
        },
        {
          product: {
            name: "Coca cola",
            imagePath: "1668602759284-coca-cola.png",
            price: 7,
          },
          quantity: 2,
          _id: "6374e0af91280413840542f7",
        },
      ],
    },
  ];

  return (
    <Container>
      <OrderBoards title="Fila de espera" icon="🕑" orders={orders} />
      <OrderBoards title="Em produção" icon="👩‍🍳" orders={[]} />
      <OrderBoards title="Pronto!" icon="✅" orders={[]} />
    </Container>
  );
};
