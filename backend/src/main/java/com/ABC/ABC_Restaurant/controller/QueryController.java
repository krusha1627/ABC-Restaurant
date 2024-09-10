package com.ABC.ABC_Restaurant.controller;

import com.ABC.ABC_Restaurant.entity.Query;
import com.ABC.ABC_Restaurant.dto.QueryDTO; // Ensure this import is correct for QueryDTO
import com.ABC.ABC_Restaurant.service.impl.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/queries")
public class QueryController {

    @Autowired
    private QueryService queryService;

    // Get all queries
    @GetMapping
    public List<Query> getAllQueries() {
        return queryService.getAllQueries();
    }

    // Get query by ID
    @GetMapping("/{id}")
    public ResponseEntity<Query> getQueryById(@PathVariable Long id) {
        Optional<Query> query = queryService.getQueryById(id);
        return query.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new query
    @PostMapping
    public Query createQuery(@RequestBody Query query) {
        return queryService.addQuery(query);
    }

    // Update an existing query
    @PutMapping("/{id}")
    public ResponseEntity<Query> updateQuery(@PathVariable Long id, @RequestBody Query query) {
        Query updatedQuery = queryService.updateQuery(id, query);
        if (updatedQuery != null) {
            return ResponseEntity.ok(updatedQuery);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a query
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuery(@PathVariable Long id) {
        queryService.deleteQuery(id);
        return ResponseEntity.noContent().build();
    }

    // Reply to a query
    @PostMapping("/{id}/reply")
    public ResponseEntity<?> replyToQuery(@PathVariable Long id, @RequestBody QueryDTO queryDTO) {
        Optional<Query> optionalQuery = queryService.getQueryById(id); // Ensure this is the correct service method
        if (optionalQuery.isPresent()) {
            Query query = optionalQuery.get();
            query.setReplyToQuery(queryDTO.getReplyToQuery());
            queryService.addQuery(query);
            return ResponseEntity.ok("Reply sent successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Query not found.");
        }
    }
}
