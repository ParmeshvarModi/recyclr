package com.java.recyclebank.controllers;

import com.java.recyclebank.models.RecyclingBank;
import com.java.recyclebank.services.RecyclingBankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/secured/recyclebank")
public class RecycleController {

    @Autowired
    private RecyclingBankService recyclingBankService;

    @PostMapping("/recycling-banks")
    public List<RecyclingBank> getRecyclingBanksByRecyclingMaterial(@RequestBody RecyclingBank recyclingBank)
    {
        System.out.println(recyclingBank.toString());
        // System.out.println(Arrays.asList(recyclingBank.getCategories().split("\\|")).toString());
        return recyclingBankService.getRecycleBankByItem(Arrays.asList(recyclingBank.getCategories().split("\\|")), recyclingBank.getX(), recyclingBank.getY());
    }


    @GetMapping("/recycling-banks/all")
    public List<RecyclingBank> getAllRecyclingBanks()
    {
        return recyclingBankService.getAllRecycleBank();
    }
}
