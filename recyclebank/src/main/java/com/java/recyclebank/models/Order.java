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
    private String userId;

    public Order() {
        this.id = UUID.randomUUID().toString().replace("-","");
    }

    public Order(String id, int recyclingBankId, String pickupDate, String status, String userId) {
        this.id = id;
        this.recyclingBankId = recyclingBankId;
        this.pickupDate = pickupDate;
        this.status = status;
        this.userId = userId;
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

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Order [id=" + id + ", pickupDate=" + pickupDate + ", recyclingBankId=" + recyclingBankId + ", status="
                + status + ", userId=" + userId + "]";
    }

    

    
}
