package com.java.recyclebank.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.java.recyclebank.models.User;

public class LoginOutputDTO extends CommonDTO{
    private String access_token;
    @JsonProperty("data")
    private User  user = null;

    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
