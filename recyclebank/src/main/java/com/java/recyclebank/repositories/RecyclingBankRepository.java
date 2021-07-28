package com.java.recyclebank.repositories;

import com.java.recyclebank.models.RecyclingBank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;

public interface RecyclingBankRepository extends JpaRepository<RecyclingBank, Integer> {

    @Query(value = "SELECT * FROM recyclingbanks WHERE categories LIKE ?1", nativeQuery = true)
    public List<RecyclingBank> findByCategory(String recyclingMaterial);

//    public Set<RecyclingBank> findBy
}
