package com.ABC.ABC_Restaurant.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String reservationType; // "dine-in" or "delivery"
    private String recipientName;
    private String address;
    private String deliveryTime;
    private String inTime;
    private String outTime;

    @ElementCollection
    @CollectionTable(name = "reservation_food_items", joinColumns = @JoinColumn(name = "reservation_id"))
    @Column(name = "food_item")
    private List<String> selectedFoods;

    private String instructions;

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReservationType() {
        return reservationType;
    }

    public void setReservationType(String reservationType) {
        this.reservationType = reservationType;
    }

    public String getRecipientName() {
        return recipientName;
    }

    public void setRecipientName(String recipientName) {
        this.recipientName = recipientName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(String deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public String getInTime() {
        return inTime;
    }

    public void setInTime(String inTime) {
        this.inTime = inTime;
    }

    public String getOutTime() {
        return outTime;
    }

    public void setOutTime(String outTime) {
        this.outTime = outTime;
    }

    public List<String> getSelectedFoods() {
        return selectedFoods;
    }

    public void setSelectedFoods(List<String> selectedFoods) {
        this.selectedFoods = selectedFoods;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }
}
