package com.ABC.ABC_Restaurant.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ABC.ABC_Restaurant.entity.Query;

public interface QueryRepository extends JpaRepository<Query, Long> {
}
