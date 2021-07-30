package com.java.recyclebank.services;


import com.java.recyclebank.models.Order;
import com.java.recyclebank.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders(String userId)
    {
        return orderRepository.findByUserId(userId);
    }

    public boolean createNewOrder(Order order)
    {
        orderRepository.save(order);
        return  orderRepository.findById(order.getId()).isPresent();
    }

    public boolean cancelOrder(String id)
    {
        Order order = orderRepository.findById(id).get();
        order.setStatus("Order Cancelled");
        return orderRepository.save(order) != null?true:false;

    }
}
