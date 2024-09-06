package com.ABC.ABC_Restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ABC.ABC_Restaurant.entity.RService;
import com.ABC.ABC_Restaurant.service.impl.Restaurent_serviceService;
import java.util.List;

@RestController
@RequestMapping("/api/services")
public class RServiceController {

    @Autowired
    private Restaurent_serviceService serviceService;

    @GetMapping("/all")
    public List<RService> getAllServices() {
        return serviceService.getAllServices();
    }

    @PostMapping("/add")
    public ResponseEntity<RService> createService(@RequestBody RService rService) {
        RService savedService = serviceService.saveService(rService);
        return new ResponseEntity<>(savedService, HttpStatus.CREATED);
    }
}
