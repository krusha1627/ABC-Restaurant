package com.ABC.ABC_Restaurant.service.interfac;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ABC.ABC_Restaurant.entity.RService;
import com.ABC.ABC_Restaurant.repo.RServiceRepository;
import com.ABC.ABC_Restaurant.service.impl.Restaurent_serviceService;

import java.util.List;

@Service
public class IRestaurent_serviceServiceImpl implements Restaurent_serviceService {

    @Autowired
    private RServiceRepository rServiceRepository;

    @Override
    public List<RService> getAllServices() {
        return rServiceRepository.findAll();
    }

    @Override
    public RService saveService(RService rService) {
        return rServiceRepository.save(rService);
    }
}