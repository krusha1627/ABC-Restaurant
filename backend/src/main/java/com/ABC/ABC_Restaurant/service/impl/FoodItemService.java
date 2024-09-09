package com.ABC.ABC_Restaurant.service.impl;

import com.ABC.ABC_Restaurant.entity.FoodItem;
import com.ABC.ABC_Restaurant.repo.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodItemService {

    @Autowired
    private FoodItemRepository foodItemRepository;

    // Add a new food item
    public FoodItem addFoodItem(FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }

    // Get all food items
    public List<FoodItem> getAllFoodItems() {
        return foodItemRepository.findAll();
    }

    // Get a specific food item by ID
    public Optional<FoodItem> getFoodItemById(Long id) {
        return foodItemRepository.findById(id);
    }

    // Update an existing food item
    public Optional<FoodItem> updateFoodItem(Long id, FoodItem updatedFoodItem) {
        return foodItemRepository.findById(id).map(existingFoodItem -> {
            existingFoodItem.setFoodName(updatedFoodItem.getFoodName());
            existingFoodItem.setPrice(updatedFoodItem.getPrice());
            existingFoodItem.setAvailability(updatedFoodItem.getAvailability());
            return foodItemRepository.save(existingFoodItem);
        });
    }

    // Delete a food item by ID
    public boolean deleteFoodItem(Long id) {
        return foodItemRepository.findById(id).map(foodItem -> {
            foodItemRepository.delete(foodItem);
            return true;
        }).orElse(false);
    }
}
