package com.java.recyclebank.controllers;


import com.java.recyclebank.dto.LoginOutputDTO;
import com.java.recyclebank.models.User;
import com.java.recyclebank.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public LoginOutputDTO login(@RequestBody User user)
    {
        return userService.login(user);
    }

    @PostMapping("/register")
    public LoginOutputDTO register(@RequestBody User user)
    {
        return userService.addNewUser(user);
//        return user;
    }



}
