package com.java.recyclebank.controllers;

import com.java.recyclebank.dto.OrderOutputDTO;
import com.java.recyclebank.models.Order;
import com.java.recyclebank.repositories.OrderRepository;
import com.java.recyclebank.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
@RequestMapping("/api/secured/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;
    private OrderOutputDTO orderOutputDTO;

    @PostMapping("/create")
    public OrderOutputDTO createNewOrder(@RequestBody Order order) {
        System.out.println(order.toString());
        orderOutputDTO = new OrderOutputDTO();
        try {
            orderOutputDTO.setSuccess(orderService.createNewOrder(order));
            orderOutputDTO.setMessage("Order has been created");
            orderOutputDTO.setOrder(order);
        } catch (Exception e) {
            orderOutputDTO.setSuccess(false);
            orderOutputDTO.setMessage("Order could not be placed. Try again later. \n Error : "+e.getMessage());
        }

        return orderOutputDTO;
    }

    @GetMapping("/all/{userId}")
    public List<Order> getAllOrders(@PathVariable String userId) {
        return orderService.getAllOrders(userId);
    }

    @PostMapping(value = "/cancel/{id}")
    public OrderOutputDTO postMethodName(@PathVariable String id) {
        orderOutputDTO = new OrderOutputDTO();
        try {
            orderOutputDTO.setSuccess(orderService.cancelOrder(id));
            orderOutputDTO.setMessage("Order has been cancelled");
            orderOutputDTO.setOrder(null);

        } catch (Exception e) {
            orderOutputDTO.setSuccess(false);
            orderOutputDTO.setMessage(
                    "Order could not be cancelled at this moment. Try again later. \n Error :" + e.getMessage());
        }

        return orderOutputDTO;
    }

}
