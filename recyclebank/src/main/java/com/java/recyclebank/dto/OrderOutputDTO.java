package com.java.recyclebank.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.java.recyclebank.models.Order;

public class OrderOutputDTO extends CommonDTO{

    @JsonProperty("data")
    private Order order;

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
    
}
