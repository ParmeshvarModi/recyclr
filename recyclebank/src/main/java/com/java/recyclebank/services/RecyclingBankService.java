package com.java.recyclebank.services;

import com.java.recyclebank.models.RecyclingBank;
import com.java.recyclebank.repositories.RecyclingBankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.text.NumberFormat;
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

    public List<RecyclingBank> getAllRecycleBank() {
        return recyclingBankRepository.findAll();
    }

    public List<RecyclingBank> getRecycleBankByItem(List<String> recyclingMaterials, double x, double y) {
        Set<RecyclingBank> listOfRecyclingBanks = new HashSet<RecyclingBank>();
        List<RecyclingBank> filteredListOfRecyclingBanks = new ArrayList<>();

        recyclingBankRepository.findAll().forEach(recyclebank -> {
            Arrays.asList(recyclebank.getCategories().split("\\|")).forEach(category -> {
                if (recyclingMaterials.contains(category))
                    listOfRecyclingBanks.add(recyclebank);
            });
        });

        for (RecyclingBank elem : listOfRecyclingBanks)
            filteredListOfRecyclingBanks.add(elem);

        for (int idx = 0; idx < filteredListOfRecyclingBanks.size(); idx++) {
            RecyclingBank elem = filteredListOfRecyclingBanks.get(idx);
            double distance = distance(elem.getX(), elem.getY(), x, y);
            NumberFormat distanceFormatter = new DecimalFormat("#0.000");
               
            System.out.println(distance);
            elem.setDistance(Double.valueOf(distanceFormatter.format(distance)));
            filteredListOfRecyclingBanks.remove(idx);
            filteredListOfRecyclingBanks.add(idx, elem);
            // System.out.println(distance);
        }

        System.out.println(filteredListOfRecyclingBanks.size());
        Collections.sort(filteredListOfRecyclingBanks);
        return filteredListOfRecyclingBanks;
    }

    public double calculateDistanceBetweenPointsWithHypot(double x1, double y1, double x2, double y2) {

        // System.out.println(String.format("%f, %f, %f, %f", x1,y1,x2,y2) );
        double ac = Math.abs(y2 - y1);
        double cb = Math.abs(x2 - x1);

        return Math.sqrt(ac + cb);
    }

    public double distance(double x1, double y1, double x2, double y2) {

        double lat1 = x1;
        double lon1 = y1;
        double lat2 = x2;
        double lon2 = y2;
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2))
                + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 1.609344 * 1000;
        return (dist); // 134910.69784909734
    }

    /* The function to convert decimal into radians */
    private double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    /* The function to convert radians into decimal */
    private double rad2deg(double rad) {
        return (rad * 180.0 / Math.PI);
    }
}
