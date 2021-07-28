package com.java.recyclebank.models;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    private String id;
    private int recyclingBankId;
    private String pickupDate;
    private String status = "Order Received";

    public Order() {
        this.id = UUID.randomUUID().toString().replace("-","");
    }

    public Order(String id, int recyclingBankId, String pickupDate, String status) {
        this.id = id;
        this.recyclingBankId = recyclingBankId;
        this.pickupDate = pickupDate;
        this.status = status;
    }

    public Order(int recyclingBankId, String pickupDate, String status) {
        this.recyclingBankId = recyclingBankId;
        this.pickupDate = pickupDate;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getRecyclingBankId() {
        return recyclingBankId;
    }

    public void setRecyclingBankId(int recyclingBankId) {
        this.recyclingBankId = recyclingBankId;
    }

    public String getPickupDate() {
        return pickupDate;
    }

    public void setPickupDate(String pickupDate) {
        this.pickupDate = pickupDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", recyclingBankId='" + recyclingBankId + '\'' +
                ", pickupDate='" + pickupDate + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
