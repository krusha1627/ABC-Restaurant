package com.ABC.ABC_Restaurant.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FoodItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long foodID;

    @Column(name = "food_name")
    private String foodName;

    private Double price;

    @Column(name = "availability")
    private Boolean availability;

    // Default constructor
    public FoodItem() {
    }

    // Parameterized constructor
    public FoodItem(String foodName, Double price, Boolean availability) {
        this.foodName = foodName;
        this.price = price;
        this.availability = availability;
    }

    // Getters and Setters
    public Long getFoodID() {
        return foodID;
    }

    public void setFoodID(Long foodID) {
        this.foodID = foodID;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    @Override
    public String toString() {
        return "FoodItem{" +
                "foodID=" + foodID +
                ", foodName='" + foodName + '\'' +
                ", price=" + price +
                ", availability=" + availability +
                '}';
    }
}
