import * as express from "express";
import OrderController from "../controllers/OrderController";

export default function setRoutes(app: any) {
  const router = express();
  const orderControl = new OrderController();

  app.use("/api", router);
  // Order Routes
  router.route("/orders").post(orderControl.createOrder);
  router.route("/orders").get(orderControl.getAllOrders);
  router.route("/orders/:id").get(orderControl.getOrderById);
  router.route("/orders/:id").put(orderControl.updateOrder);
  router.route("/orders/:id").delete(orderControl.deleteOrder);
}
