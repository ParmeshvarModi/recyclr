package com.java.recyclebank.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String contactNo;
    private String address;
    private String zipcode;
    private String password;
    private String accessToken;

    public User()
    {
        this.id = UUID.randomUUID().toString().replace("-","");
    }

    public User(String name, String email, String contactNo, String address, String zipcode, String password, String accessToken) {
        this.name = name;
        this.email = email;
        this.contactNo = contactNo;
        this.address = address;
        this.zipcode = zipcode;
        this.password = password;
        this.accessToken = accessToken;
    }

    public User(String id, String name, String email, String contactNo, String address, String zipcode, String password, String accessToken) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactNo = contactNo;
        this.address = address;
        this.zipcode = zipcode;
        this.password = password;
        this.accessToken = accessToken;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", contactNo='" + contactNo + '\'' +
                ", address='" + address + '\'' +
                ", zipcode='" + zipcode + '\'' +
                ", password='" + password + '\'' +
                ", accessToken='" + accessToken + '\'' +
                '}';
    }
}
