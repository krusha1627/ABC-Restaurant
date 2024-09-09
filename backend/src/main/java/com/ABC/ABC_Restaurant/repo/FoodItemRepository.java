package com.ABC.ABC_Restaurant.repo;

import com.ABC.ABC_Restaurant.entity.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {
    // JpaRepository provides basic CRUD operations, no need to define them
    // manually.
}
