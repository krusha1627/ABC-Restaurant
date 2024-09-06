package com.ABC.ABC_Restaurant.service.impl;

import java.util.List;
import com.ABC.ABC_Restaurant.entity.RService;

public interface Restaurent_serviceService {
    List<RService> getAllServices();

    RService saveService(RService rService);
}