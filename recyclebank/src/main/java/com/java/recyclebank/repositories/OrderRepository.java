package com.java.recyclebank.repositories;

import java.util.List;

import com.java.recyclebank.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, String> {

    public List<Order> findByUserId(String userId);

}
