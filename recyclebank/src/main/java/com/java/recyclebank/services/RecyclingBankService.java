package com.java.recyclebank.services;


import com.java.recyclebank.models.RecyclingBank;
import com.java.recyclebank.repositories.RecyclingBankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class RecyclingBankService {

    @Autowired
    private RecyclingBankRepository recyclingBankRepository;

    public List<RecyclingBank> getAllRecycleBank()
    {
        return recyclingBankRepository.findAll();
    }

    public RecyclingBank getRecycleBankByItem(List<String> recyclingMaterials,double x, double y)
    {
        Set<RecyclingBank> listOfRecyclingBanks = new HashSet<RecyclingBank>();
        List<RecyclingBank> filteredListOfRecyclingBanks = new ArrayList<>();
        
        recyclingBankRepository.findAll().forEach(recyclebank ->
        {
            Arrays.asList(recyclebank.getCategories().split("\\|"))
            .forEach(category ->
            {
                if(recyclingMaterials.contains(category))
                    listOfRecyclingBanks.add(recyclebank);
            });
        });

       
        for(RecyclingBank elem:listOfRecyclingBanks)
            filteredListOfRecyclingBanks.add(elem);

        
        for(int idx=0;idx<filteredListOfRecyclingBanks.size();idx++)
        {
            RecyclingBank elem = filteredListOfRecyclingBanks.get(idx);
            double distance = calculateDistanceBetweenPointsWithHypot(elem.getX(), elem.getY(),x,y);
            elem.setDistance(distance);
            filteredListOfRecyclingBanks.remove(idx);
            filteredListOfRecyclingBanks.add(idx,elem);
            // System.out.println(distance);
        }

        System.out.println(filteredListOfRecyclingBanks.size());
        Collections.sort(filteredListOfRecyclingBanks);
        return filteredListOfRecyclingBanks.get(0);
    }

    public double calculateDistanceBetweenPointsWithHypot(
        double x1, 
        double y1, 
        double x2, 
        double y2) {
        
            // System.out.println(String.format("%f, %f, %f, %f", x1,y1,x2,y2) );
        double ac = Math.abs(y2 - y1);
        double cb = Math.abs(x2 - x1);
            
        return Math.sqrt(ac+cb);
    }
}
