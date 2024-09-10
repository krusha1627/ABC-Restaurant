package com.ABC.ABC_Restaurant.service.impl;

import com.ABC.ABC_Restaurant.entity.Query;
import com.ABC.ABC_Restaurant.repo.QueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QueryService {

    @Autowired
    private QueryRepository queryRepository;

    public List<Query> getAllQueries() {
        return queryRepository.findAll();
    }

    public Optional<Query> getQueryById(Long id) {
        return queryRepository.findById(id);
    }

    public Query addQuery(Query query) {
        return queryRepository.save(query);
    }

    public Query updateQuery(Long id, Query query) {
        Optional<Query> existingQuery = queryRepository.findById(id);
        if (existingQuery.isPresent()) {
            Query updatedQuery = existingQuery.get();
            updatedQuery.setSenderName(query.getSenderName());
            updatedQuery.setQuery(query.getQuery());
            updatedQuery.setSenderEmail(query.getSenderEmail());
            updatedQuery.setReplyToQuery(query.getReplyToQuery());
            return queryRepository.save(updatedQuery);
        }
        return null;
    }

    public void deleteQuery(Long id) {
        queryRepository.deleteById(id);
    }
}
