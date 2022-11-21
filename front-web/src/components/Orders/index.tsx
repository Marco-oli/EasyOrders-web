import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Order } from "../../types/Order";
import { OrderBoards } from "../OrdersBoards";
import { Container } from "./styles";

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get("/orders").then((response) => setOrders(response.data));
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  const handleCancelOrder = (orderId: string) => {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  };

  const handleOrderStatusChange = (
    orderId: string,
    status: Order["status"]
  ) => {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <Container>
      <OrderBoards
        title="Fila de espera"
        icon="🕑"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrderBoards
        title="Em produção"
        icon="👩‍🍳"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrderBoards
        title="Pronto!"
        icon="✅"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
};
